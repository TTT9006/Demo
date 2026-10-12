import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Check, RotateCcw, Undo2, PenLine } from 'lucide-react';
import { api, post } from '../services/api';
import { useUI } from '../stores/ui';
import { Button, PageHeader, AudioButton } from '../components/ui';
type Point = { x: number; y: number };
const alphabets: Record<string, string[]> = {
  Hiragana: Array.from(
    'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
  ),
  Katakana: Array.from(
    'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
  ),
  Kanji: Array.from('一二三四五六七八九十日月火水木金土人山川田口目耳手本学'),
};
export function Writing() {
  const [alphabet, setAlphabet] = useState('Hiragana');
  const [character, setCharacter] = useState('あ');
  const [strokes, setStrokes] = useState<Point[][]>([]);
  const [guide, setGuide] = useState(true);
  const [saving, setSaving] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const current = useRef<Point[] | null>(null);
  const client = useQueryClient();
  const notify = useUI((s) => s.notify);
  const history = useQuery({
    queryKey: ['writing'],
    queryFn: () =>
      api<{ id: string; character: string; createdAt: string; strokes: string }[]>('/writing'),
  });
  function paint(draft?: Point[]) {
    const c = canvas.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, 400, 400);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = document.documentElement.dataset.theme === 'dark' ? '#eae6df' : '#343b35';
    ctx.lineWidth = 5;
    for (const stroke of [...strokes, ...(draft ? [draft] : [])]) {
      if (!stroke.length) continue;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      for (const point of stroke.slice(1)) ctx.lineTo(point.x, point.y);
      if (stroke.length === 1) ctx.lineTo(stroke[0].x + 0.1, stroke[0].y);
      ctx.stroke();
    }
  }
  useEffect(() => {
    paint();
  }, [strokes, character]);
  const choose = (c: string) => {
    setCharacter(c);
    setStrokes([]);
    current.current = null;
  };
  const save = async () => {
    if (!strokes.length) return;
    setSaving(true);
    try {
      await post('/writing', { character, strokes });
      void client.invalidateQueries({ queryKey: ['writing'] });
      void client.invalidateQueries({ queryKey: ['dashboard'] });
      notify('Đã lưu buổi luyện viết.');
    } catch (e) {
      notify((e as Error).message);
    } finally {
      setSaving(false);
    }
  };
  return (
    <>
      <PageHeader
        eyebrow="ĐỂ BÀN TAY GHI NHỚ"
        title="Chậm lại cùng một nét chữ."
        description="Luyện Hiragana, Katakana và Kanji cơ bản theo nhịp của bạn."
      />
      <div className="writing-layout">
        <section className="panel character-picker">
          <div className="tabs">
            {Object.keys(alphabets).map((a) => (
              <button
                className={alphabet === a ? 'active' : ''}
                key={a}
                onClick={() => {
                  setAlphabet(a);
                  choose(alphabets[a][0]);
                }}
              >
                {a}
              </button>
            ))}
          </div>
          <div className="character-grid">
            {alphabets[alphabet].map((c) => (
              <button
                className={character === c ? 'selected' : ''}
                key={c}
                onClick={() => choose(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="writing-tip">
            <PenLine size={18} />
            <p>Quan sát hình dạng, khoảng cách và sự cân đối của từng nét.</p>
          </div>
        </section>
        <section className="panel canvas-panel">
          <div className="section-heading">
            <h2>Luyện chữ 「{character}」</h2>
            <AudioButton text={character} />
          </div>
          <div className="drawing-surface">
            {guide && (
              <span aria-hidden="true" className="trace-character">
                {character}
              </span>
            )}
            <div className="guide-lines" />
            <canvas
              ref={canvas}
              width={400}
              height={400}
              aria-label={'Vùng vẽ chữ ' + character}
              onPointerDown={(e) => {
                const box = e.currentTarget.getBoundingClientRect();
                e.currentTarget.setPointerCapture(e.pointerId);
                current.current = [
                  {
                    x: ((e.clientX - box.left) * 400) / box.width,
                    y: ((e.clientY - box.top) * 400) / box.height,
                  },
                ];
                paint(current.current);
              }}
              onPointerMove={(e) => {
                if (!current.current) return;
                const box = e.currentTarget.getBoundingClientRect();
                current.current.push({
                  x: Math.max(0, Math.min(400, ((e.clientX - box.left) * 400) / box.width)),
                  y: Math.max(0, Math.min(400, ((e.clientY - box.top) * 400) / box.height)),
                });
                paint(current.current);
              }}
              onPointerUp={() => {
                if (current.current) {
                  setStrokes([...strokes, current.current]);
                  current.current = null;
                }
              }}
              onPointerCancel={() => {
                current.current = null;
                paint();
              }}
            />
          </div>
          <label className="checkbox-label">
            <input type="checkbox" checked={guide} onChange={(e) => setGuide(e.target.checked)} />
            Hiện chữ mẫu
          </label>
          <div className="canvas-actions">
            <Button
              variant="secondary"
              onClick={() => setStrokes(strokes.slice(0, -1))}
              disabled={!strokes.length}
            >
              <Undo2 size={16} />
              Lùi nét
            </Button>
            <Button variant="secondary" onClick={() => setStrokes([])} disabled={!strokes.length}>
              <RotateCcw size={16} />
              Viết lại
            </Button>
            <Button disabled={!strokes.length || saving} onClick={() => void save()}>
              <Check size={16} />
              Lưu bài viết
            </Button>
          </div>
          <p className="muted small-text">
            Đây là luyện viết tự đánh giá, chưa có nhận dạng chữ hay chấm độ chính xác. Chữ mẫu
            không biểu diễn thứ tự nét.
          </p>
        </section>
      </div>
      <section className="panel spaced">
        <h2>Những chữ bạn đã luyện</h2>
        <div className="writing-history">
          {history.data?.length ? (
            history.data.map((h) => (
              <button
                key={h.id}
                onClick={() => {
                  setCharacter(h.character);
                  setStrokes(JSON.parse(h.strokes) as Point[][]);
                }}
              >
                <strong>{h.character}</strong>
                <small>{new Date(h.createdAt).toLocaleDateString('vi')}</small>
              </button>
            ))
          ) : (
            <p className="muted">Lưu bài viết đầu tiên để bắt đầu nhật ký.</p>
          )}
        </div>
      </section>
    </>
  );
}
