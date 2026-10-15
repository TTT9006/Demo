import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { toRomaji } from 'wanakana';
import { JapaneseAnnotatedText, useAnnotationMode } from '../components/japanese-annotated-text';
import { AudioButton, Button } from '../components/ui';
import { api, post } from '../services/api';
import type { LoginReviewView } from '../../../../packages/shared/login-review';

export function LoginReview({
  initial,
  name,
  complete,
}: {
  initial: LoginReviewView;
  name: string;
  complete: () => void;
}) {
  const [state, setState] = useState(initial),
    [count, setCount] = useState(1),
    [flipped, setFlipped] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState('');
  const mode = useAnnotationMode(),
    client = useQueryClient(),
    navigate = useNavigate();
  const choices = [
    ...new Set([1, Math.min(3, state.decks.length), Math.min(5, state.decks.length)]),
  ].filter((n) => n > 0);
  const selected = state.decks.slice(0, count),
    total = selected.reduce((n, d) => n + d.count, 0);
  async function send(path: string, body: unknown) {
    if (busy) return;
    setBusy(true);
    setError('');
    try {
      const next = await post<LoginReviewView>('/login-review/' + path, body);
      setState(next);
      setFlipped(false);
      for (const key of ['dashboard', 'decks', 'deck', 'review'])
        void client.invalidateQueries({ queryKey: [key] });
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  const card = state.card;
  return (
    <main className="login-review-shell">
      <header className="login-review-top">
        <span className="brand">
          <span className="brand-mark">木</span>
          <span>komorebi</span>
        </span>
        <Button
          variant="ghost"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            try {
              await post('/auth/logout');
              client.clear();
              navigate('/login');
            } catch (e) {
              setError((e as Error).message);
              setBusy(false);
            }
          }}
        >
          Đăng xuất
        </Button>
      </header>
      <section className="login-review-content">
        <span className="eyebrow">GẶP LẠI ĐỂ NHỚ LÂU</span>
        <h1>
          {state.ready
            ? 'Bạn đã ôn xong!'
            : state.active
              ? 'Một chút ôn tập, mỗi ngày.'
              : `Chào ${name}, cùng ôn lại nhé!`}
        </h1>
        {error && (
          <div className="feedback incorrect" role="alert">
            <p>{error}</p>
            <Button
              variant="secondary"
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                try {
                  setState(await api<LoginReviewView>('/login-review'));
                  setFlipped(false);
                  setError('');
                } catch (e) {
                  setError((e as Error).message);
                } finally {
                  setBusy(false);
                }
              }}
            >
              Tải lại lượt ôn đã lưu
            </Button>
          </div>
        )}
        {state.ready ? (
          <section className="panel login-review-finish">
            <h2>Đã hoàn thành lượt ôn đã chọn</h2>
            <p>
              {state.done} thẻ đã được xử lý. Các thẻ được đặt lịch nhắc lại theo mức độ ghi nhớ.
            </p>
            <p>Các bộ chưa chọn vẫn giữ lịch đến hạn. Bạn có thể tiếp tục học như bình thường.</p>
            <Button onClick={complete}>Vào góc học tập</Button>
          </section>
        ) : !state.active ? (
          <>
            <p>
              {state.decks.length} bộ đã đến hạn. Chỉ ôn những thẻ bạn từng học; ưu tiên bộ quá hạn
              lâu nhất.
            </p>
            <fieldset className="login-review-choices">
              <legend>Bạn muốn ôn bao nhiêu bộ?</legend>
              {choices.map((n) => (
                <Button
                  key={n}
                  variant={count === n ? 'primary' : 'secondary'}
                  aria-pressed={count === n}
                  disabled={busy}
                  onClick={() => setCount(n)}
                >
                  {n} bộ
                </Button>
              ))}
            </fieldset>
            <div className="login-review-decks">
              {selected.map((d) => (
                <article className="panel" key={d.id}>
                  <h2>{d.name}</h2>
                  <p>{d.count} thẻ đến hạn</p>
                  <small>Đến hạn từ {new Date(d.due).toLocaleDateString('vi-VN')}</small>
                </article>
              ))}
            </div>
            <p className="login-review-summary">
              {total} thẻ · Khoảng {Math.max(1, Math.ceil(total / 4))} phút
            </p>
            <Button disabled={busy} onClick={() => void send('start', { count })}>
              {busy ? 'Đang chuẩn bị…' : `Bắt đầu ôn ${count} bộ`}
            </Button>
            <p className="muted">
              Ôn đủ số bộ đã chọn là có thể dùng web bình thường. Các bộ sẽ được nhắc lại khi đến
              hạn mới.
            </p>
          </>
        ) : card ? (
          <>
            <p className="login-review-deck-title">{card.deckName}</p>
            <p role="status">
              {state.done}/{state.total} thẻ đã hoàn thành
            </p>
            <progress aria-label="Tiến độ lượt ôn" max={state.total || 1} value={state.done} />
            <div className="review-session">
              <div className={'review-card ' + (flipped ? 'flipped' : '')}>
                <span className="eyebrow">{flipped ? 'ĐÁP ÁN' : 'BẠN CÒN NHỚ KHÔNG?'}</span>
                <h2 lang="ja">
                  <JapaneseAnnotatedText
                    text={card.japanese}
                    reading={card.reading}
                    disabled={!flipped}
                  />
                </h2>
                {flipped ? (
                  <>
                    <p>{mode === 'romanized' ? toRomaji(card.reading) : card.reading}</p>
                    <h3>{card.meaning}</h3>
                    {card.example && (
                      <p>
                        <JapaneseAnnotatedText text={card.example} />
                      </p>
                    )}
                    {card.note && <p>{card.note}</p>}
                  </>
                ) : (
                  <p>Thử nhớ nghĩa trước khi lật thẻ.</p>
                )}
                <AudioButton text={card.japanese} />
              </div>
              {!flipped ? (
                <Button disabled={busy} className="flip-button" onClick={() => setFlipped(true)}>
                  Lật thẻ
                </Button>
              ) : (
                <div className="rating-buttons">
                  {['Quên', 'Khó', 'Nhớ', 'Dễ'].map((label, rating) => (
                    <Button
                      key={label}
                      disabled={busy}
                      variant="secondary"
                      onClick={() => void send('answer', { cardId: card.id, rating })}
                    >
                      <strong>{label}</strong>
                      <small>{rating === 0 ? 'Nhắc lại sau 10 phút' : 'Điều chỉnh lịch ôn'}</small>
                    </Button>
                  ))}
                </div>
              )}
            </div>
            <p className="muted">
              Tiến độ lưu theo tài khoản sau mỗi lần đánh giá. Có thể tiếp tục trên thiết bị khác.
            </p>
          </>
        ) : null}
      </section>
    </main>
  );
}
