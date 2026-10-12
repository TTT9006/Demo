import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Search, Plus, Copy, ArrowLeft, ArrowRight, BookOpen, Check, Database } from 'lucide-react';
import { api, post } from '../services/api';
import { useUI } from '../stores/ui';
import type { Deck, Entry, Status } from '../types';
import {
  AudioButton,
  Button,
  Empty,
  ErrorState,
  Loading,
  Modal,
  PageHeader,
} from '../components/ui';
const labels: Record<string, string> = {
  n: 'Danh từ',
  v1: 'Động từ nhóm II',
  v5u: 'Động từ nhóm I',
  v5k: 'Động từ nhóm I',
  v5r: 'Động từ nhóm I',
  v5m: 'Động từ nhóm I',
  v5s: 'Động từ nhóm I',
  vs: 'Động từ する',
  'vs-i': 'Động từ する',
  'adj-i': 'Tính từ い',
  'adj-na': 'Tính từ な',
  adv: 'Trạng từ',
  exp: 'Cụm từ',
  int: 'Thán từ',
  vt: 'Ngoại động từ',
  vi: 'Nội động từ',
  pn: 'Đại từ',
  suf: 'Hậu tố',
  pref: 'Tiền tố',
};
const headword = (entry: Entry) => entry.kanji[0]?.text || entry.readings[0]?.text || '';
export function WordCard({ entry, detail = false }: { entry: Entry; detail?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [deckId, setDeckId] = useState('');
  const [saving, setSaving] = useState(false);
  const notify = useUI((s) => s.notify);
  const client = useQueryClient();
  const { data: decks } = useQuery({
    queryKey: ['decks'],
    queryFn: () => api<Deck[]>('/flashcards/decks'),
    enabled: selected !== null,
  });
  const word = headword(entry);
  const add = async () => {
    setSaving(true);
    try {
      const sense = entry.senses[selected || 0];
      const meaning = sense.glosses
        .map((g) =>
          g.translation?.status === 'completed' ? g.translation.translatedText : g.originalText,
        )
        .join('; ');
      await post('/flashcards/cards', {
        deckId: deckId || decks?.[0]?.id,
        japanese: word,
        reading: entry.readings[0]?.text || '',
        meaning,
        english: sense.glosses.map((g) => g.originalText).join('; '),
        entryId: entry.id,
      });
      void client.invalidateQueries({ queryKey: ['decks'] });
      void client.invalidateQueries({ queryKey: ['dashboard'] });
      notify('Đã thêm từ vào bộ thẻ.');
      setSelected(null);
    } catch (e) {
      notify((e as Error).message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <article className="word-card">
      <div className="word-card-header">
        <div>
          <div className="word-title">
            <Link lang="ja" to={'/dictionary/' + entry.id}>
              {word}
            </Link>
            {entry.common && <span className="tag green">Từ thông dụng</span>}
          </div>
          <p className="reading" lang="ja">
            {entry.readings.map((r) => r.text).join(' ・ ')}
          </p>
        </div>
        <div className="inline-actions">
          <AudioButton text={word} />
          <Button
            variant="ghost"
            size="icon"
            aria-label={'Sao chép ' + word}
            onClick={() =>
              void navigator.clipboard
                .writeText(word)
                .then(() => notify('Đã sao chép từ.'))
                .catch(() => notify('Trình duyệt chưa cho phép sao chép.'))
            }
          >
            <Copy size={17} />
          </Button>
        </div>
      </div>
      <ol className="sense-list">
        {entry.senses.slice(0, detail ? undefined : 3).map((sense, i) => {
          const metadata = JSON.parse(sense.metadata) as {
            partOfSpeech: string[];
            info: string[];
            appliesToKanji: string[];
            appliesToKana: string[];
          };
          return (
            <li key={sense.id}>
              <div className="sense-number">{i + 1}.</div>
              <div className="sense-content">
                <div className="pos-tags">
                  {metadata.partOfSpeech.map((p) => (
                    <span key={p}>{labels[p] || p}</span>
                  ))}
                </div>
                <p>
                  {sense.glosses.map((g, j) => (
                    <span key={g.id}>
                      {j > 0 ? '; ' : ''}
                      {g.translation?.status === 'completed' ? (
                        g.translation.translatedText
                      ) : (
                        <span className="untranslated">
                          {g.originalText} <small>chưa có bản dịch Việt</small>
                        </span>
                      )}
                    </span>
                  ))}
                </p>
                <details>
                  <summary>Nghĩa gốc tiếng Anh</summary>
                  <p className="english-gloss">
                    {sense.glosses.map((g) => g.originalText).join('; ')}
                  </p>
                </details>
                {detail && metadata.info.length > 0 && (
                  <p className="usage-note">{metadata.info.join(' · ')}</p>
                )}
                {detail &&
                  (!metadata.appliesToKanji.includes('*') ||
                    !metadata.appliesToKana.includes('*')) && (
                    <small className="muted">
                      Áp dụng:{' '}
                      {metadata.appliesToKanji
                        .concat(metadata.appliesToKana)
                        .filter((v) => v !== '*')
                        .join(', ')}
                    </small>
                  )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                aria-label={'Thêm nghĩa ' + (i + 1) + ' vào thẻ'}
                onClick={() => setSelected(i)}
              >
                <Plus size={19} />
              </Button>
            </li>
          );
        })}
      </ol>
      {!detail && entry.senses.length > 3 && (
        <Link className="text-link" to={'/dictionary/' + entry.id}>
          Xem thêm {entry.senses.length - 3} nghĩa <ArrowRight size={14} />
        </Link>
      )}
      <div className="word-card-footer">
        <span>JMdict · {entry.id}</span>
        <Button variant="ghost" size="small" onClick={() => setSelected(0)}>
          <Plus size={14} />
          Thêm vào thẻ từ vựng
        </Button>
      </div>
      <Modal
        open={selected !== null}
        onOpenChange={(o) => !o && setSelected(null)}
        title={'Lưu từ 「' + word + '」'}
      >
        <p>Chọn nghĩa và bộ thẻ để ôn tập.</p>
        <label>
          Nghĩa
          <select value={selected ?? 0} onChange={(e) => setSelected(Number(e.target.value))}>
            {entry.senses.map((s, i) => (
              <option key={s.id} value={i}>
                {i + 1}.{' '}
                {s.glosses
                  .map((g) =>
                    g.translation?.status === 'completed'
                      ? g.translation.translatedText
                      : g.originalText,
                  )
                  .join('; ')}
              </option>
            ))}
          </select>
        </label>
        <label>
          Bộ thẻ
          <select
            value={deckId || decks?.[0]?.id || ''}
            onChange={(e) => setDeckId(e.target.value)}
          >
            {decks?.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </label>
        {decks?.length === 0 ? (
          <p>
            Hãy <Link to="/flashcards">tạo bộ thẻ đầu tiên</Link> trước khi lưu từ.
          </p>
        ) : (
          <Button disabled={saving || !decks?.length} onClick={() => void add()}>
            {saving ? 'Đang lưu…' : 'Lưu vào bộ thẻ'}
            <Check size={16} />
          </Button>
        )}
      </Modal>
    </article>
  );
}
export function Dictionary() {
  const [params, setParams] = useSearchParams();
  const [input, setInput] = useState(params.get('q') || '');
  const [composing, setComposing] = useState(false);
  const query = params.get('q') || '';
  const page = Number(params.get('page') || 1);
  const client = useQueryClient();
  useEffect(() => {
    setInput(params.get('q') || '');
  }, [params]);
  useEffect(() => {
    if (composing) return;
    const timer = setTimeout(() => {
      if (input !== query) setParams(input ? { q: input } : {});
    }, 350);
    return () => clearTimeout(timer);
  }, [input, composing, query, setParams]);
  const results = useQuery({
    queryKey: ['dictionary', query, page],
    queryFn: () =>
      api<{ items: Entry[]; total: number; limit: number }>(
        '/dictionary/search?q=' + encodeURIComponent(query) + '&page=' + page,
      ),
    enabled: !composing,
  });
  const status = useQuery({
    queryKey: ['dictionary-status'],
    queryFn: () => api<Status>('/dictionary/status'),
  });
  const history = useQuery({
    queryKey: ['search-history'],
    queryFn: () => api<{ id: string; query: string }[]>('/dictionary/history'),
  });
  const search = (q: string) => {
    setInput(q);
    setParams(q ? { q } : {});
    if (q)
      void post('/dictionary/history', { query: q }).then(() =>
        client.invalidateQueries({ queryKey: ['search-history'] }),
      );
  };
  return (
    <>
      <PageHeader
        eyebrow="TRA CỨU & KHÁM PHÁ"
        title="Mỗi từ là một cánh cửa."
        description="Tìm bằng Kanji, Kana, Romaji, tiếng Việt hoặc tiếng Anh."
      />
      <section className="dictionary-search-panel">
        <form
          className="dictionary-search"
          onSubmit={(e) => {
            e.preventDefault();
            if (!composing) search(input);
          }}
        >
          <Search size={24} />
          <input
            autoFocus
            aria-label="Tìm từ trong từ điển"
            placeholder="Bạn muốn tìm từ gì?  例：勉強、taberu、học…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onCompositionStart={() => setComposing(true)}
            onCompositionEnd={(e) => {
              setComposing(false);
              setInput(e.currentTarget.value);
            }}
          />
          <Button type="submit">
            Tra từ
            <ArrowRight size={17} />
          </Button>
        </form>
        <div className="search-hints">
          <span>THỬ TÌM</span>
          {['食べる', 'ありがとう', '学校', '勉強', 'sakura'].map((q) => (
            <button key={q} onClick={() => search(q)}>
              {q}
            </button>
          ))}
        </div>
      </section>
      <div className="dictionary-layout">
        <section>
          <div className="results-heading">
            <h2>{query ? `Kết quả cho “${query}”` : 'Khám phá từ thông dụng'}</h2>
            <span>{results.data?.total.toLocaleString('vi') || 0} từ</span>
          </div>
          {results.isLoading ? (
            <Loading />
          ) : results.error ? (
            <ErrorState error={results.error} retry={() => void results.refetch()} />
          ) : results.data?.items.length ? (
            results.data.items.map((e) => <WordCard key={e.id} entry={e} />)
          ) : (
            <Empty title="Chưa tìm thấy từ phù hợp">
              <p>Thử cách viết khác, bỏ dấu cách hoặc dùng Kana.</p>
            </Empty>
          )}
          {results.data && results.data.total > results.data.limit && (
            <div className="pagination">
              <Button
                variant="secondary"
                disabled={page <= 1}
                onClick={() => setParams({ q: query, page: String(page - 1) })}
              >
                <ArrowLeft size={16} />
                Trước
              </Button>
              <span>Trang {page}</span>
              <Button
                variant="secondary"
                disabled={page * results.data.limit >= results.data.total}
                onClick={() => setParams({ q: query, page: String(page + 1) })}
              >
                Sau
                <ArrowRight size={16} />
              </Button>
            </div>
          )}
        </section>
        <aside>
          <div className="panel dictionary-aside">
            <BookOpen size={23} />
            <h3>
              Tra từ. Hiểu nghĩa.
              <br />
              Ghi nhớ lâu hơn.
            </h3>
            <p>Lưu đúng nghĩa bạn cần vào bộ thẻ, rồi ôn lại theo lịch cá nhân.</p>
            <Link to="/flashcards" className="text-link">
              Mở bộ thẻ của bạn <ArrowRight size={14} />
            </Link>
          </div>
          <section className="panel spaced">
            <h3>Gần đây bạn đã tìm</h3>
            {history.data?.length ? (
              history.data.map((h) => (
                <button className="history-row" key={h.id} onClick={() => search(h.query)}>
                  <Search size={14} />
                  {h.query}
                  <ArrowUpRightSmall />
                </button>
              ))
            ) : (
              <p className="muted">Lịch sử xuất hiện sau khi bạn nhấn Tra từ.</p>
            )}
          </section>
          <div className="source-note">
            <Database size={15} />
            <span>
              {status.data?.entries.toLocaleString('vi') || '…'} mục từ trong máy
              <br />
              {status.data?.translated.toLocaleString('vi') || 0} định nghĩa có tiếng Việt
              <br />
              <Link to="/settings#sources">Nguồn: JMdict / EDRDG</Link>
            </span>
          </div>
        </aside>
      </div>
    </>
  );
}
function ArrowUpRightSmall() {
  return <ArrowRight size={13} />;
}
export function DictionaryDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['entry', id],
    queryFn: () => api<Entry>('/dictionary/' + id),
  });
  return (
    <>
      <Link className="back-link" to="/dictionary">
        <ArrowLeft size={16} />
        Về từ điển
      </Link>
      {isLoading ? (
        <Loading />
      ) : data ? (
        <>
          <PageHeader
            title={headword(data)}
            description="Các cách đọc và nghĩa được giữ riêng theo nguồn JMdict."
          />
          <WordCard entry={data} detail />
          <p className="muted">
            Phiên bản dữ liệu: {data.version}. Bản dịch AI, nếu có, cần được đối chiếu theo ngữ
            cảnh.
          </p>
        </>
      ) : (
        <ErrorState error={error} />
      )}
    </>
  );
}
export function DictionaryAdmin() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-status'],
    queryFn: () => api<Status>('/admin/translations/status'),
    refetchInterval: 15000,
  });
  return (
    <>
      <PageHeader
        eyebrow="DỮ LIỆU HỌC TẬP"
        title="Tình trạng từ điển"
        description="Theo dõi dữ liệu nhập và các bản dịch được lưu trong máy."
      />
      {isLoading ? (
        <Loading />
      ) : data ? (
        <>
          <div className="metrics-grid">
            {[
              ['Mục từ', data.entries],
              ['Định nghĩa', data.glosses],
              ['Đã dịch', data.translated],
              ['Chờ dịch', data.pending],
            ].map(([l, v]) => (
              <div className="panel metric" key={l}>
                <span>{l}</span>
                <strong>{Number(v).toLocaleString('vi')}</strong>
              </div>
            ))}
          </div>
          <section className="panel">
            <h2>Độ phủ tiếng Việt: {data.coverage}%</h2>
            <progress max={100} value={data.coverage} />
            <p>
              Phiên bản: {data.latestImport?.version || 'Chưa nhập dữ liệu'} · Lần nhập:{' '}
              {data.latestImport?.status || '—'}
            </p>
            <p className="muted">
              Các tác vụ dịch chạy riêng trên máy, có ngân sách giới hạn. Tra cứu thông thường sử
              dụng bản dịch đã lưu.
            </p>
          </section>
          <section className="panel spaced">
            <h2>Lịch sử dịch</h2>
            {data.jobs.length ? (
              data.jobs.map((j) => (
                <div className="simple-row" key={j.id}>
                  <div>
                    <strong>{j.status}</strong>
                    <small>{new Date(j.startedAt).toLocaleString('vi')}</small>
                  </div>
                  <span>
                    {j.successful} thành công · {j.failed} lỗi
                  </span>
                  <span>
                    {j.processed}/{j.total}
                  </span>
                </div>
              ))
            ) : (
              <p className="muted">Chưa chạy tác vụ AI. Các bản dịch mẫu được chuẩn bị sẵn.</p>
            )}
          </section>
        </>
      ) : (
        <ErrorState error={error} />
      )}
    </>
  );
}
