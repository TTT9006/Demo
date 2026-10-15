import { useState } from 'react';
import { toRomaji } from 'wanakana';
import { JapaneseAnnotatedText, useAnnotationMode } from '../components/japanese-annotated-text';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  ArrowLeft,
  ArrowRight,
  Plus,
  Layers,
  Search,
  Pencil,
  Trash2,
  RotateCcw,
  Check,
  Upload,
} from 'lucide-react';
import { api, post, patch, remove } from '../services/api';
import { useUI } from '../stores/ui';
import type { Card, Deck } from '../types';
import { ReviewCardInteractive } from '../components/review-card-interactive';
import {
  AudioButton,
  Button,
  Empty,
  ErrorState,
  Loading,
  Modal,
  PageHeader,
} from '../components/ui';
function DeckForm({ deck, close }: { deck?: Deck; close: () => void }) {
  const [name, setName] = useState(deck?.name || '');
  const [description, setDescription] = useState(deck?.description || '');
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      deck
        ? patch('/flashcards/decks/' + deck.id, { name, description })
        : post('/flashcards/decks', { name, description }),
    onSuccess: () => {
      void client.invalidateQueries({ queryKey: ['decks'] });
      void client.invalidateQueries({ queryKey: ['deck'] });
      close();
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
    >
      <label>
        Tên bộ thẻ
        <input
          required
          maxLength={80}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ví dụ: Một ngày ở Nhật"
        />
      </label>
      <label>
        Mô tả
        <textarea
          maxLength={300}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      {mutation.error && (
        <p role="alert" className="error-text">
          {mutation.error.message}
        </p>
      )}
      <Button disabled={mutation.isPending} type="submit">
        {mutation.isPending ? 'Đang lưu…' : 'Lưu bộ thẻ'}
        <Check size={16} />
      </Button>
    </form>
  );
}
export function Flashcards() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['decks'],
    queryFn: () => api<Deck[]>('/flashcards/decks'),
  });
  const [create, setCreate] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const matching = (data || []).filter((deck) =>
    `${deck.name} ${deck.description}`
      .toLocaleLowerCase('vi')
      .includes(query.trim().toLocaleLowerCase('vi')),
  );
  const pages = Math.max(1, Math.ceil(matching.length / 12));
  const currentPage = Math.min(page, pages);
  const due =
    data?.flatMap((d) => d.cards).filter((c) => new Date(c.due) <= new Date()).length || 0;
  return (
    <>
      <PageHeader
        eyebrow="TỪ VỰNG CỦA BẠN"
        title="Gặp lại để nhớ lâu hơn."
        description="Học ngay với Hiragana, Katakana và Kanji theo chủ đề, hoặc tạo bộ thẻ của riêng bạn."
        action={
          <Button onClick={() => setCreate(true)}>
            <Plus size={17} />
            Tạo bộ thẻ
          </Button>
        }
      />
      <section className="review-banner">
        <div>
          <span className="eyebrow">SẴN SÀNG CHO MỘT LƯỢT ÔN?</span>
          <h2>{due} từ đang chờ bạn</h2>
          <p>Lịch ôn tự điều chỉnh theo mức độ ghi nhớ của bạn.</p>
        </div>
        <Link className="button primary" to="/flashcards/review">
          Ôn tập hôm nay
          <ArrowRight size={17} />
        </Link>
      </section>
      <div className="section-heading spaced">
        <h2>Các bộ thẻ của bạn</h2>
        <span className="muted">{data?.length || 0} bộ thẻ</span>
      </div>
      <div className="toolbar deck-toolbar">
        <label className="input-icon">
          <Search size={17} aria-hidden="true" />
          <input
            aria-label="Tìm bộ thẻ"
            placeholder="Tìm theo tên hoặc mô tả…"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
          />
        </label>
        <span className="muted" role="status">
          {matching.length} bộ thẻ phù hợp
        </span>
      </div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorState error={error} />
      ) : matching.length ? (
        <div className="deck-grid">
          {matching.slice((currentPage - 1) * 12, currentPage * 12).map((deck, index) => {
            const i = (currentPage - 1) * 12 + index;
            const learned = deck.cards.filter((c) => c.repetitions > 0).length;
            const due = deck.cards.filter((c) => new Date(c.due) <= new Date()).length;
            return (
              <Link className="deck-card" key={deck.id} to={'/flashcards/' + deck.id}>
                <div className={'deck-art tone-' + (i % 3)}>
                  <span>{['語', '日', '旅'][i % 3]}</span>
                  <Layers size={22} />
                  <small>{String(i + 1).padStart(2, '0')}</small>
                </div>
                <div className="deck-info">
                  <h3>{deck.name}</h3>
                  <p>{deck.description || 'Một bộ sưu tập từ vựng của riêng bạn.'}</p>
                  <div className="deck-meta">
                    <span>{deck.cards.length} từ</span>
                    <span>{due} cần ôn</span>
                  </div>
                  <progress max={deck.cards.length || 1} value={learned} />
                  <small>
                    {learned} từ đã bắt đầu học <ArrowUpRightLocal />
                  </small>
                </div>
              </Link>
            );
          })}
        </div>
      ) : query.trim() ? (
        <Empty title="Không tìm thấy bộ thẻ">
          <p>Thử tên khác hoặc xóa từ khóa tìm kiếm.</p>
          <Button variant="secondary" onClick={() => setQuery('')}>
            Xóa tìm kiếm
          </Button>
        </Empty>
      ) : (
        <Empty title="Bộ thẻ đầu tiên đang chờ bạn">
          <p>Tạo bộ thẻ hoặc tìm một từ trong từ điển để bắt đầu.</p>
          <Button onClick={() => setCreate(true)}>Tạo bộ thẻ</Button>
        </Empty>
      )}
      {pages > 1 && (
        <nav className="inline-actions deck-pagination" aria-label="Phân trang bộ thẻ">
          <Button
            variant="secondary"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            Trang trước
          </Button>
          <span aria-live="polite">
            {currentPage} / {pages}
          </span>
          <Button
            variant="secondary"
            disabled={currentPage === pages}
            onClick={() => setPage(currentPage + 1)}
          >
            Trang sau
          </Button>
        </nav>
      )}
      <Modal open={create} onOpenChange={setCreate} title="Một bộ thẻ mới">
        <DeckForm close={() => setCreate(false)} />
      </Modal>
    </>
  );
}
function ArrowUpRightLocal() {
  return <ArrowRight size={15} />;
}
function CardForm({
  deckId,
  card,
  initial,
  close,
}: {
  deckId: string;
  card?: Card;
  initial?: string;
  close: () => void;
}) {
  const [values, setValues] = useState({
    japanese: card?.japanese || initial || '',
    reading: card?.reading || '',
    meaning: card?.meaning || '',
    english: card?.english || '',
    example: card?.example || '',
    note: card?.note || '',
  });
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      card
        ? patch('/flashcards/cards/' + card.id, { ...values, deckId })
        : post('/flashcards/cards', { ...values, deckId }),
    onSuccess: () => {
      void client.invalidateQueries({ queryKey: ['deck'] });
      void client.invalidateQueries({ queryKey: ['decks'] });
      void client.invalidateQueries({ queryKey: ['dashboard'] });
      close();
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
    >
      <div className="form-grid">
        {(
          [
            { key: 'japanese', label: 'Từ tiếng Nhật', required: true },
            { key: 'reading', label: 'Cách đọc (Kana)' },
            { key: 'meaning', label: 'Nghĩa tiếng Việt', required: true },
            { key: 'english', label: 'Nghĩa tiếng Anh (không bắt buộc)' },
            { key: 'example', label: 'Câu ví dụ' },
            { key: 'note', label: 'Ghi chú của bạn' },
          ] as const
        ).map((f) => (
          <label key={f.key}>
            {f.label}
            <input
              value={values[f.key]}
              required={'required' in f && f.required}
              onChange={(e) => setValues({ ...values, [f.key]: e.target.value })}
            />
          </label>
        ))}
      </div>
      {mutation.error && (
        <p className="error-text" role="alert">
          {mutation.error.message}
        </p>
      )}
      <Button type="submit" disabled={mutation.isPending}>
        Lưu thẻ
        <Check size={16} />
      </Button>
    </form>
  );
}
export function DeckDetail() {
  const annotationMode = useAnnotationMode();
  const { deckId } = useParams();
  const navigate = useNavigate();
  const client = useQueryClient();
  const notify = useUI((s) => s.notify);
  const {
    data: deck,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['deck', deckId],
    queryFn: () => api<Deck>('/flashcards/decks/' + deckId),
  });
  const [editor, setEditor] = useState<Card | 'new' | null>(null);
  const [rename, setRename] = useState(false);
  const [deleting, setDeleting] = useState<Card | 'deck' | null>(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [pdf, setPdf] = useState<{ lines: string[]; message: string } | null>(null);
  const [importing, setImporting] = useState(false);
  const [initial, setInitial] = useState('');
  const deletion = useMutation({
    mutationFn: () =>
      remove(
        deleting === 'deck'
          ? '/flashcards/decks/' + deckId
          : '/flashcards/cards/' + (deleting as Card).id,
      ),
    onSuccess: () => {
      if (deleting === 'deck') navigate('/flashcards');
      setDeleting(null);
      void client.invalidateQueries({ queryKey: ['deck'] });
      void client.invalidateQueries({ queryKey: ['decks'] });
      void client.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
  if (isLoading) return <Loading />;
  if (!deck) return <ErrorState error={error} />;
  const cards = deck.cards.filter(
    (c) =>
      (c.japanese + c.reading + c.meaning).toLowerCase().includes(search.toLowerCase()) &&
      (filter !== 'due' || new Date(c.due) <= new Date()),
  );
  return (
    <>
      <Link className="back-link" to="/flashcards">
        <ArrowLeft size={16} />
        Tất cả bộ thẻ
      </Link>
      <PageHeader
        eyebrow={`${deck.cards.length} TỪ VỰNG`}
        title={deck.name}
        description={deck.description}
        action={
          <div className="inline-actions">
            <Button variant="secondary" onClick={() => setRename(true)} aria-label="Đổi tên bộ thẻ">
              <Pencil size={16} />
            </Button>
            <Button variant="secondary" onClick={() => setDeleting('deck')} aria-label="Xóa bộ thẻ">
              <Trash2 size={16} />
            </Button>
            <Button
              onClick={() => {
                setInitial('');
                setEditor('new');
              }}
            >
              <Plus size={17} />
              Thêm từ
            </Button>
          </div>
        }
      />
      <div className="toolbar">
        <div className="input-icon">
          <Search size={17} />
          <input
            aria-label="Tìm trong bộ thẻ"
            placeholder="Tìm một từ trong bộ thẻ…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select aria-label="Lọc thẻ" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Tất cả thẻ</option>
          <option value="due">Đến hạn ôn</option>
        </select>
        <label className="button secondary upload-label">
          <Upload size={16} />
          {importing ? 'Đang đọc…' : 'Nhập PDF'}
          <input
            type="file"
            accept="application/pdf"
            disabled={importing}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              setImporting(true);
              const form = new FormData();
              form.append('file', file);
              try {
                setPdf(await api('/flashcards/pdf', { method: 'POST', body: form }));
              } catch (error) {
                notify((error as Error).message);
              } finally {
                setImporting(false);
                e.target.value = '';
              }
            }}
          />
        </label>
        <Link className="button primary" to={'/flashcards/review?deck=' + deckId}>
          Ôn bộ này
          <ArrowRight size={16} />
        </Link>
      </div>
      <section className="panel card-list">
        {cards.length ? (
          cards.map((card) => (
            <div className="card-list-row" key={card.id}>
              <div>
                <strong lang="ja">
                  <JapaneseAnnotatedText text={card.japanese} reading={card.reading} />
                </strong>
                <small>
                  {annotationMode === 'romanized' ? toRomaji(card.reading) : card.reading}
                </small>
              </div>
              <div>
                <span>{card.meaning}</span>
                {card.note && <small>{card.note}</small>}
              </div>
              <span className="tag">
                {new Date(card.due) <= new Date()
                  ? 'Đến hạn'
                  : new Date(card.due).toLocaleDateString('vi')}
              </span>
              <div className="inline-actions">
                <AudioButton text={card.japanese} />
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={'Sửa ' + card.japanese}
                  onClick={() => setEditor(card)}
                >
                  <Pencil size={16} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={'Xóa ' + card.japanese}
                  onClick={() => setDeleting(card)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <Empty title="Chưa có từ phù hợp">
            <p>Thêm từ thủ công hoặc lưu từ từ điển.</p>
            <Link to="/dictionary">Mở từ điển →</Link>
          </Empty>
        )}
      </section>
      <Modal
        open={editor !== null}
        onOpenChange={(o) => !o && setEditor(null)}
        title={editor === 'new' ? 'Thêm một từ mới' : 'Chỉnh sửa thẻ'}
      >
        {editor && (
          <CardForm
            key={typeof editor === 'string' ? 'new' : editor.id}
            deckId={deck.id}
            card={typeof editor === 'object' ? editor : undefined}
            initial={initial}
            close={() => setEditor(null)}
          />
        )}
      </Modal>
      <Modal open={rename} onOpenChange={setRename} title="Chỉnh sửa bộ thẻ">
        <DeckForm deck={deck} close={() => setRename(false)} />
      </Modal>
      <Modal
        open={deleting !== null}
        onOpenChange={(o) => !o && setDeleting(null)}
        title={deleting === 'deck' ? 'Xóa bộ thẻ này?' : 'Xóa từ này?'}
      >
        <p>
          {deleting === 'deck'
            ? 'Các thẻ và lịch sử ôn trong bộ này sẽ bị xóa.'
            : 'Thẻ và lịch sử ôn của từ này sẽ bị xóa.'}
        </p>
        {deletion.error && <p className="error-text">{deletion.error.message}</p>}
        <div className="inline-actions">
          <Button variant="secondary" onClick={() => setDeleting(null)}>
            Giữ lại
          </Button>
          <Button variant="danger" disabled={deletion.isPending} onClick={() => deletion.mutate()}>
            Xóa
          </Button>
        </div>
      </Modal>
      <Modal
        open={pdf !== null}
        onOpenChange={(o) => !o && setPdf(null)}
        title="Kiểm tra nội dung PDF"
      >
        <p>{pdf?.message}</p>
        <div className="pdf-lines">
          {pdf?.lines.map((line, i) => (
            <button
              key={i}
              onClick={() => {
                setInitial(line);
                setPdf(null);
                setEditor('new');
              }}
            >
              {line}
              <Plus size={14} />
            </button>
          ))}
        </div>
        <small className="muted">
          Chỉ hỗ trợ PDF có lớp văn bản, tối đa 5 MB. Chọn một dòng để sửa và thêm nghĩa; không tự
          động tạo thẻ.
        </small>
      </Modal>
    </>
  );
}
export function Review() {
  const annotationMode = useAnnotationMode();
  const [params] = useSearchParams();
  const deck = params.get('deck');
  const client = useQueryClient();
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ['review', deck],
    queryFn: () => api<Card[]>('/flashcards/review/due' + (deck ? '?deck=' + deck : '')),
    staleTime: 0,
  });
  const card = data?.[0];
  const mutation = useMutation({
    mutationFn: (rating: number) => post('/flashcards/review', { cardId: card?.id, rating }),
    onSuccess: () => {
      setDone(done + 1);
      setFlipped(false);
      client.setQueryData<Card[]>(['review', deck], (old) => old?.slice(1));
      void client.invalidateQueries({ queryKey: ['dashboard'] });
      void client.invalidateQueries({ queryKey: ['decks'] });
      void client.invalidateQueries({ queryKey: ['deck'] });
    },
  });
  return (
    <>
      <Link className="back-link" to="/flashcards">
        <ArrowLeft size={16} />
        Kết thúc lượt ôn
      </Link>
      <PageHeader
        eyebrow="MỖI LẦN NHỚ LẠI, MỘT LẦN VỮNG HƠN"
        title="Khoảng thời gian cho từ vựng."
        description={`${done} từ đã ôn trong phiên này${data?.length ? ' · ' + data.length + ' từ còn lại' : ''}`}
      />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorState error={error} />
      ) : card ? (
        <div className="review-session">
          <div className="review-progress-wrap">
            <div className="review-progress-header">
              <span>Tiến độ phiên ôn</span>
              <strong>{done} / {done + (data?.length || 0)} thẻ</strong>
            </div>
            <progress
              max={Math.max(1, done + (data?.length || 0))}
              value={done}
              aria-label="Tiến độ lượt ôn"
            />
          </div>
          <ReviewCardInteractive
            card={card}
            flipped={flipped}
            onFlip={() => setFlipped(!flipped)}
            onSwipe={(dir) => {
              mutation.mutate(dir === 'left' ? 0 : 2);
            }}
            mode={annotationMode}
          />
          {mutation.error && (
            <p className="error-text" role="alert">
              {mutation.error.message}
            </p>
          )}
          <Button className="flip-button" onClick={() => setFlipped(!flipped)}>
            <RotateCcw size={17} />
            {flipped ? 'Lật lại mặt trước' : 'Lật thẻ'}
          </Button>
          <p className="review-footnote">
            Vuốt phải để Nhớ · Vuốt trái nếu Quên. Lịch ôn SM-2 sẽ tự động điều chỉnh.
          </p>
        </div>
      ) : (
        <Empty title="Bạn đã ôn hết các thẻ đến hạn.">
          <p>Đã ôn {done} từ trong phiên này. Hẹn gặp lại vào lượt ôn tiếp theo.</p>
          <Link className="button primary" to="/dictionary">
            Khám phá từ mới
            <ArrowRight size={16} />
          </Link>
        </Empty>
      )}
    </>
  );
}
