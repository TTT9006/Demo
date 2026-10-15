import { JapaneseAnnotatedText } from '../components/japanese-annotated-text';
import { JlptSession } from './jlpt';
import type { JlptSummary } from '../../../../packages/shared/jlpt-types';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, Clock3, Check, RotateCcw } from 'lucide-react';
import { api, post } from '../services/api';
import { useUI } from '../stores/ui';
import type { Attempt, Question, Result } from '../types';
import { Button, Empty, ErrorState, Loading, PageHeader, Modal } from '../components/ui';
type Test = JlptSummary;
export function QuestionInput({
  question: q,
  value,
  onChange,
  disabled = false,
}: {
  question: Question;
  value: string;
  onChange: (s: string) => void;
  disabled?: boolean;
}) {
  if (q.type === 'matching') {
    const selected: string[] = value ? JSON.parse(value) : [];
    return (
      <div className="matching-board">
        {q.rows?.map((row, i) => (
          <label key={row + i}>
            <span lang="ja">
              <JapaneseAnnotatedText
                text={row}
                disabled={q.annotationDisabled}
                readings={q.readings}
              />
            </span>
            <select
              aria-label={'Ghép nghĩa cho ' + row}
              value={selected[i] || ''}
              disabled={disabled}
              onChange={(e) => {
                const next = [...selected];
                next[i] = e.target.value;
                onChange(JSON.stringify(next));
              }}
            >
              <option value="">Chọn nghĩa…</option>
              {q.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    );
  }
  if (q.type === 'order')
    return (
      <div className="ordering">
        <div className="word-bank">
          {q.options?.map((o, i) => (
            <Button
              key={i}
              disabled={disabled}
              variant="secondary"
              onClick={() => onChange(value + o)}
            >
              <JapaneseAnnotatedText
                text={o}
                disabled={q.annotationDisabled}
                readings={q.readings}
              />
            </Button>
          ))}
          <Button variant="ghost" disabled={disabled} onClick={() => onChange('')}>
            <RotateCcw size={15} />
            Làm lại
          </Button>
        </div>
        <input
          aria-label="Câu đã sắp xếp"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="Chọn các từ theo thứ tự hoặc nhập câu…"
        />
      </div>
    );
  if (q.options)
    return (
      <div className="answer-options">
        {q.options.map((o, i) => (
          <button
            key={o}
            type="button"
            disabled={disabled}
            className={value === o ? 'selected' : ''}
            onClick={() => onChange(o)}
          >
            <span className="answer-key" aria-hidden="true">
              {q.numbered ? i + 1 : String.fromCharCode(65 + i)}
            </span>
            <JapaneseAnnotatedText text={o} disabled={q.annotationDisabled} readings={q.readings} />
            {value === o && <Check size={17} />}
          </button>
        ))}
      </div>
    );
  return (
    <input
      className="answer-input"
      aria-label="Câu trả lời"
      placeholder="Nhập câu trả lời của bạn…"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
}
export function Tests() {
  const [review, setReview] = useState<Attempt | null>(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ['tests'],
    queryFn: () => api<Test[]>('/tests'),
  });
  const history = useQuery({
    queryKey: ['test-history'],
    queryFn: () => api<Attempt[]>('/tests/history'),
  });
  return (
    <>
      <PageHeader
        eyebrow="BIẾT MÌNH ĐÃ ĐI ĐƯỢC BAO XA"
        title="Thi thử JLPT từ N5 đến N2."
        description="Đề đầy đủ thời gian, chia phần theo cấu trúc JLPT. Lưu bài đang làm và xem lại kết quả từng nhóm."
      />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorState error={error} />
      ) : (
        <div className="test-grid">
          {data?.map((t, i) => (
            <Link className="test-card" to={'/tests/' + t.id} key={t.id}>
              <span className="eyebrow">{t.level} · ĐỀ LUYỆN TỰ BIÊN SOẠN</span>
              <span className="test-number">{String(i + 1).padStart(2, '0')}</span>
              <h2>{t.title}</h2>
              <p>
                {t.total} câu · {t.minutes} phút · {t.sections.length} phần
              </p>
              <ul className="jlpt-card-sections">
                {t.sections.map((s) => (
                  <li key={s.id}>
                    {s.title}: {s.minutes} phút
                  </li>
                ))}
              </ul>
              <div>
                <span>Xem đề & tiếp tục bài đang làm</span>
                <ArrowRight size={19} />
              </div>
            </Link>
          ))}
        </div>
      )}
      <p className="spaced">
        Câu hỏi tự biên soạn, không phải đề thi chính thức. Nghe dùng giọng Nhật tổng hợp trên thiết
        bị. Điểm hiển thị là tỷ lệ câu đúng, không phải thang 180 của JLPT.{' '}
        <a
          className="text-link"
          href="https://www.jlpt.jp/e/guideline/testsections.html"
          target="_blank"
          rel="noreferrer"
        >
          Cấu trúc JLPT chính thức
        </a>
        .
      </p>
      <section className="panel spaced">
        <h2>Những lần thử gần đây</h2>
        {history.data?.length ? (
          history.data.map((a) => (
            <button className="simple-row history-attempt" key={a.id} onClick={() => setReview(a)}>
              <div>
                <strong>{data?.find((t) => t.id === a.testId)?.title || a.testId}</strong>
                <small>{new Date(a.createdAt).toLocaleString('vi')}</small>
              </div>
              <span>{a.duration} giây</span>
              <strong className={a.score >= 70 ? 'positive' : ''}>{a.score}%</strong>
              <ArrowRight size={16} />
            </button>
          ))
        ) : (
          <p className="muted">Kết quả đầu tiên của bạn sẽ xuất hiện ở đây.</p>
        )}
      </section>
      <Modal
        open={review !== null}
        onOpenChange={(o) => !o && setReview(null)}
        title="Xem lại bài làm"
      >
        {review &&
          (JSON.parse(review.answers) as Result[]).map((r, i) => (
            <div key={r.id} className={'feedback ' + (r.correct ? 'correct' : 'incorrect')}>
              <strong>
                {i + 1}. <JapaneseAnnotatedText text={r.prompt} />
              </strong>
              {r.passage && (
                <p className="jlpt-passage" lang="ja">
                  {r.passage}
                </p>
              )}
              <p>
                Bạn chọn: <JapaneseAnnotatedText text={r.given || '(Chưa trả lời)'} />
              </p>
              <p>
                Đáp án: <JapaneseAnnotatedText text={r.answer} />
              </p>
              <small>
                <JapaneseAnnotatedText text={r.explanation} />
              </small>
              {r.transcript && (
                <p className="jlpt-passage" lang="ja">
                  {r.transcript}
                </p>
              )}
            </div>
          ))}
      </Modal>
    </>
  );
}
export function TestSession() {
  const { id } = useParams();
  return id?.startsWith('jlpt-') ? <JlptSession key={id} /> : <LegacyTestSession key={id} />;
}
function LegacyTestSession() {
  const { id } = useParams();
  const client = useQueryClient();
  const notify = useUI((s) => s.notify);
  const [run, setRun] = useState<{
    runId: string;
    startedAt: string;
    questions: Question[];
  } | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    score: number;
    results: Result[];
    duration: number;
  } | null>(null);
  const [busy, setBusy] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState('');
  useEffect(() => {
    if (!run || result) return;
    const timer = setInterval(
      () => setElapsed(Math.floor((Date.now() - new Date(run.startedAt).getTime()) / 1000)),
      1000,
    );
    return () => clearInterval(timer);
  }, [run, result]);
  const start = async () => {
    setBusy(true);
    setError('');
    try {
      setRun(await post('/tests/' + id + '/start'));
      setAnswers({});
      setResult(null);
      setElapsed(0);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const submit = async () => {
    setBusy(true);
    try {
      setResult(await post('/tests/' + id + '/submit', { runId: run?.runId, answers }));
      void client.invalidateQueries({ queryKey: ['dashboard'] });
      void client.invalidateQueries({ queryKey: ['test-history'] });
    } catch (e) {
      notify((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <>
      <Link className="back-link" to="/tests">
        <ArrowLeft size={16} />
        Các bài kiểm tra
      </Link>
      <PageHeader
        eyebrow="TẬP TRUNG MỘT CHÚT"
        title={result ? 'Bạn đã hoàn thành.' : 'Sẵn sàng thử sức?'}
        description={
          run
            ? `${Object.keys(answers).filter((k) => answers[k]).length}/${run.questions.length} câu đã trả lời`
            : 'Bài làm được tính giờ từ khi bắt đầu. Kết quả chỉ được lưu khi bạn nộp bài.'
        }
        action={
          run && (
            <span className="timer">
              <Clock3 size={17} />
              {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, '0')}
            </span>
          )
        }
      />
      {error && (
        <p className="error-text" role="alert">
          {error}
        </p>
      )}
      {!run ? (
        <Empty title="Một khoảng nhỏ để kiểm tra kiến thức">
          <p>Đọc kỹ từng câu và chọn đáp án bạn tin là đúng.</p>
          <Button disabled={busy} onClick={() => void start()}>
            {busy ? 'Đang chuẩn bị…' : 'Bắt đầu bài kiểm tra'}
            <ArrowRight size={16} />
          </Button>
        </Empty>
      ) : result ? (
        <>
          <section className="score-panel">
            <span className="eyebrow">KẾT QUẢ CỦA BẠN</span>
            <strong>
              {result.score}
              <small>%</small>
            </strong>
            <p>
              {result.results.filter((r) => r.correct).length}/{result.results.length} câu đúng ·{' '}
              {result.duration} giây
            </p>
            <p>
              {result.score >= 80
                ? 'Bạn đang nắm khá vững kiến thức này.'
                : 'Xem lại các câu dưới đây để hiểu rõ hơn nhé.'}
            </p>
            <Button variant="secondary" onClick={() => void start()}>
              <RotateCcw size={16} />
              Thử lại
            </Button>
          </section>
          {result.results.map((r, i) => (
            <div
              className={'feedback result-card ' + (r.correct ? 'correct' : 'incorrect')}
              key={r.id}
            >
              <h3>
                {i + 1}. <JapaneseAnnotatedText text={r.prompt} />
              </h3>
              <p>
                Bạn trả lời: <JapaneseAnnotatedText text={r.given || '(Chưa trả lời)'} />
              </p>
              <p>
                <strong>
                  Đáp án: <JapaneseAnnotatedText text={r.answer} />
                </strong>
              </p>
              <p>
                <JapaneseAnnotatedText text={r.explanation} />
              </p>
            </div>
          ))}
        </>
      ) : (
        <>
          <section className="panel">
            {run.questions.map((q, i) => (
              <div className="exercise" key={q.id}>
                <h3>
                  {i + 1}.{' '}
                  <JapaneseAnnotatedText
                    text={q.prompt}
                    disabled={q.annotationDisabled}
                    readings={q.readings}
                  />
                </h3>
                <QuestionInput
                  question={q}
                  value={answers[q.id] || ''}
                  onChange={(value) => setAnswers({ ...answers, [q.id]: value })}
                  disabled={busy}
                />
              </div>
            ))}
          </section>
          <div className="submit-test">
            <p>Câu bỏ trống sẽ được tính là chưa đúng.</p>
            <Button disabled={busy} onClick={() => void submit()}>
              Nộp bài
              <Check size={17} />
            </Button>
          </div>
        </>
      )}
    </>
  );
}
