import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, Bookmark, Check, Search, BookOpen } from 'lucide-react';
import { api, post } from '../services/api';
import { useUI } from '../stores/ui';
import type { LessonSummary, Question } from '../types';
import type { LessonContent } from '../../../../packages/shared/content';
import { Button, Empty, ErrorState, Loading, PageHeader, AudioButton } from '../components/ui';
import { QuestionInput } from './tests';
export function Grammar() {
  const [level, setLevel] = useState('N5');
  const [search, setSearch] = useState('');
  const [bookmarks, setBookmarks] = useState(false);
  const { data, isLoading, error } = useQuery({
    queryKey: ['grammar', level],
    queryFn: () => api<LessonSummary[]>('/grammar?level=' + level),
  });
  const filtered = data?.filter(
    (l) =>
      (l.title + l.pattern).toLowerCase().includes(search.toLowerCase()) &&
      (!bookmarks || l.progress[0]?.bookmarked),
  );
  return (
    <>
      <PageHeader
        eyebrow="HIỂU CẤU TRÚC, NÓI TỰ NHIÊN"
        title="Từng câu, một nền tảng mới."
        description="Bài học ngắn, ví dụ rõ ràng và thực hành ngay sau khi học."
      />
      <div className="toolbar">
        <div className="tabs" aria-label="Trình độ">
          {['N5', 'N4', 'N3', 'N2', 'N1'].map((l) => (
            <button className={level === l ? 'active' : ''} key={l} onClick={() => setLevel(l)}>
              {l}
            </button>
          ))}
        </div>
        <div className="input-icon">
          <Search size={17} />
          <input
            aria-label="Tìm bài ngữ pháp"
            placeholder="Tìm mẫu câu, chủ đề…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button
          variant={bookmarks ? 'primary' : 'secondary'}
          onClick={() => setBookmarks(!bookmarks)}
        >
          <Bookmark size={16} />
          Đã lưu
        </Button>
      </div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorState error={error} />
      ) : filtered?.length ? (
        <div className="grammar-grid">
          {filtered.map((l) => (
            <Link to={'/grammar/' + l.id} key={l.id} className="grammar-card">
              <div className="grammar-card-top">
                <span>BÀI {String(l.position).padStart(2, '0')}</span>
                <span>
                  {l.level}
                  {l.progress[0]?.completed && <Check size={15} />}
                </span>
              </div>
              <h2 lang="ja">{l.pattern}</h2>
              <h3>{l.title}</h3>
              <div className="grammar-card-bottom">
                <span>
                  {l.progress[0]?.completed ? 'Đã hoàn thành' : 'Giải thích · Ví dụ · Bài tập'}
                </span>
                <ArrowRight size={19} />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <Empty title={level === 'N5' ? 'Không tìm thấy bài phù hợp' : `Chưa có bài học ${level}`}>
          <p>
            Nội dung hiện có gồm 8 bài N5. Các trình độ khác sẽ được bổ sung khi nội dung được biên
            soạn và kiểm tra.
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              setLevel('N5');
              setSearch('');
              setBookmarks(false);
            }}
          >
            Xem bài N5
          </Button>
        </Empty>
      )}
    </>
  );
}
export function GrammarLesson() {
  const { id } = useParams();
  const client = useQueryClient();
  const notify = useUI((s) => s.notify);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<
    Record<string, { correct: boolean; answer: string; explanation: string }>
  >({});
  const [busy, setBusy] = useState(false);
  const {
    data: lesson,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['lesson', id],
    queryFn: () =>
      api<LessonSummary & { content: LessonContent; exercises: Question[] }>('/grammar/' + id),
  });
  const progress = async (data: { completed?: boolean; bookmarked?: boolean }) => {
    setBusy(true);
    try {
      await post('/grammar/' + id + '/progress', data);
      await client.invalidateQueries({ queryKey: ['lesson', id] });
      void client.invalidateQueries({ queryKey: ['grammar'] });
      void client.invalidateQueries({ queryKey: ['dashboard'] });
      notify(data.completed ? 'Đã ghi nhận bài học hoàn thành.' : 'Đã cập nhật dấu trang.');
    } catch (e) {
      notify((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  if (isLoading) return <Loading />;
  if (!lesson) return <ErrorState error={error} />;
  return (
    <>
      <Link className="back-link" to="/grammar">
        <ArrowLeft size={16} />
        Thư viện ngữ pháp
      </Link>
      <PageHeader
        eyebrow={`${lesson.level} · BÀI ${String(lesson.position).padStart(2, '0')}`}
        title={lesson.pattern}
        description={lesson.title}
        action={
          <Button
            variant="secondary"
            disabled={busy}
            onClick={() => void progress({ bookmarked: !lesson.progress[0]?.bookmarked })}
          >
            <Bookmark size={16} fill={lesson.progress[0]?.bookmarked ? 'currentColor' : 'none'} />
            {lesson.progress[0]?.bookmarked ? 'Đã lưu' : 'Lưu bài học'}
          </Button>
        }
      />
      <div className="lesson-layout">
        <article className="panel lesson-body">
          <span className="eyebrow">Ý NGHĨA</span>
          <h2>{lesson.content.meaning}</h2>
          <p>{lesson.content.explanation}</p>
          <h3>Cấu trúc</h3>
          <div className="formation">{lesson.content.formation}</div>
          <h3>Trong một cuộc trò chuyện</h3>
          {lesson.content.examples.map((ex) => (
            <div className="example" key={ex.ja}>
              <div>
                <p lang="ja">{ex.ja}</p>
                <small>{ex.kana}</small>
                <p>{ex.vi}</p>
              </div>
              <AudioButton text={ex.ja} />
            </div>
          ))}
          <h3>Ghi nhớ một chút</h3>
          <p>{lesson.content.notes}</p>
          <div className="mistake-note">
            <strong>Lỗi thường gặp</strong>
            <p>{lesson.content.mistake}</p>
          </div>
          <h3>Mẫu câu liên quan</h3>
          <div className="inline-actions wrap">
            {lesson.content.related.map((r) => (
              <Link className="tag" to={'/grammar/' + r} key={r}>
                {r}
                <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </article>
        <aside>
          <div className="panel">
            <BookOpen size={23} />
            <h3>Học chậm, hiểu sâu.</h3>
            <p>Đọc to từng ví dụ. Sau đó thử viết một câu về chính bạn.</p>
            <Button
              disabled={busy || lesson.progress[0]?.completed}
              onClick={() => void progress({ completed: true })}
            >
              <Check size={16} />
              {lesson.progress[0]?.completed ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}
            </Button>
          </div>
          <div className="daily-note spaced">
            <span className="eyebrow">BƯỚC TIẾP THEO</span>
            <h3>Thử sức với một bài ngắn</h3>
            <p>Kiểm tra những gì bạn vừa học và lưu lại kết quả.</p>
            <Link className="text-link" to="/tests">
              Chọn bài kiểm tra
              <ArrowRight size={15} />
            </Link>
          </div>
        </aside>
      </div>
      <section className="panel spaced">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ĐẾN LƯỢT BẠN</span>
            <h2>Thực hành ngay</h2>
          </div>
        </div>
        {lesson.exercises.map((q, i) => (
          <div className="exercise" key={q.id}>
            <h3>
              {i + 1}. {q.prompt}
            </h3>
            <QuestionInput
              question={q}
              value={answers[q.id] || ''}
              onChange={(value) => setAnswers({ ...answers, [q.id]: value })}
            />
            <Button
              variant="secondary"
              disabled={!answers[q.id] || busy}
              onClick={async () => {
                setBusy(true);
                try {
                  const f = await post<{ correct: boolean; answer: string; explanation: string }>(
                    '/grammar/' + id + '/exercise',
                    { exerciseId: q.id, answer: answers[q.id] },
                  );
                  setFeedback({ ...feedback, [q.id]: f });
                } catch (e) {
                  notify((e as Error).message);
                } finally {
                  setBusy(false);
                }
              }}
            >
              Kiểm tra câu trả lời
            </Button>
            {feedback[q.id] && (
              <div className={'feedback ' + (feedback[q.id].correct ? 'correct' : 'incorrect')}>
                <strong>
                  {feedback[q.id].correct ? 'Chính xác!' : 'Thử ghi nhớ cách dùng này nhé.'}
                </strong>
                <p>Đáp án: {feedback[q.id].answer}</p>
                <p>{feedback[q.id].explanation}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
