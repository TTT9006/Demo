import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ArrowLeft, ArrowRight, Check, Clock3, Volume2, VolumeX, Square, Play, Pause, Headphones } from 'lucide-react';
import { api, post, patch } from '../services/api';
import { Button, ErrorState, Loading, Modal, PageHeader } from '../components/ui';
import { QuestionInput } from './tests';
import type { JlptRunView, JlptSummary } from '../../../../packages/shared/jlpt-types';

async function playJapanese(text: string) {
  if (!('speechSynthesis' in window)) throw Error('Trình duyệt chưa hỗ trợ đọc tiếng Nhật.');
  let voices = speechSynthesis.getVoices();
  if (!voices.some((v) => v.lang.startsWith('ja'))) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    voices = speechSynthesis.getVoices();
  }
  const voice = voices.find((v) => v.lang.startsWith('ja'));
  if (!voice)
    throw Error(
      'Thiết bị chưa có giọng tiếng Nhật. Hãy cài giọng Nhật hoặc dùng trình duyệt có giọng Nhật, rồi thử âm thanh trước khi thi.',
    );
  speechSynthesis.cancel();
  return new Promise<void>((resolve, reject) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.voice = voice;
    utterance.rate = 0.9;
    utterance.onend = () => resolve();
    utterance.onerror = (e) =>
      e.error === 'canceled' || e.error === 'interrupted'
        ? resolve()
        : reject(Error('Không phát được âm thanh. Hãy thử lại.'));
    speechSynthesis.speak(utterance);
  });
}
const clock = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
function ExamAudioPlayer({ src, questionId }: { src: string; questionId: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const maxTimeRef = useRef(0);

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setHasEnded(false);
    maxTimeRef.current = 0;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [questionId, src]);

  const togglePlay = () => {
    if (!audioRef.current || hasEnded) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.error('Audio play error:', e));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const curr = audioRef.current.currentTime;
    if (curr > maxTimeRef.current) {
      maxTimeRef.current = curr;
    }
    setCurrentTime(curr);
  };

  const handleSeeking = () => {
    if (!audioRef.current) return;
    // Strictly prevent rewinding: clamp to furthest reached time
    if (audioRef.current.currentTime < maxTimeRef.current - 0.3) {
      audioRef.current.currentTime = maxTimeRef.current;
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="exam-audio-card" aria-label="Trình phát âm thanh câu hỏi thi">
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onSeeking={handleSeeking}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="exam-audio-header">
        <span className="exam-audio-badge">
          <Headphones size={13} />
          Mô phỏng phòng thi thật
        </span>
        <span className="exam-audio-notice">
          Không hỗ trợ tua lại
        </span>
      </div>
      <div className="exam-audio-controls">
        <button
          type="button"
          className={`exam-audio-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          disabled={hasEnded}
          title={hasEnded ? 'Đã phát hết bài nghe' : isPlaying ? 'Tạm dừng' : 'Phát âm thanh'}
          aria-label={hasEnded ? 'Đã phát hết bài nghe' : isPlaying ? 'Tạm dừng' : 'Phát âm thanh'}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }} />}
          <span>{hasEnded ? 'Đã nghe xong' : isPlaying ? 'Tạm dừng' : currentTime > 0 ? 'Tiếp tục nghe' : 'Phát bài nghe'}</span>
        </button>

        <div className="exam-audio-progress-container" title="Tiến trình phát (không thể tua lại)">
          <div className="exam-audio-progress-track">
            <div
              className="exam-audio-progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="exam-audio-time">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <button
          type="button"
          className="exam-audio-mute-btn"
          onClick={toggleMute}
          title={isMuted ? 'Bật âm thanh' : 'Tắt tiếng'}
          aria-label={isMuted ? 'Bật âm thanh' : 'Tắt tiếng'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
}

export function JlptSession() {
  const { id } = useParams();
  const client = useQueryClient();
  const query = useQuery({
    queryKey: ['jlpt-paper', id],
    queryFn: () => api<{ paper: JlptSummary; run: JlptRunView | null }>('/jlpt/papers/' + id),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
  const [run, setRun] = useState<JlptRunView | null>(null),
    [index, setIndex] = useState(0),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(''),
    [confirm, setConfirm] = useState(false),
    [speaking, setSpeaking] = useState(false),
    [now, setNow] = useState(Date.now());
  const offset = useRef(0),
    nextPoll = useRef(0),
    locked = useRef(false),
    saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null),
    pendingAnswers = useRef<Record<string, string>>({});
  function apply(next: JlptRunView) {
    offset.current = new Date(next.serverNow).getTime() - Date.now();
    if (next.section !== run?.section) {
      setIndex(0);
      window.speechSynthesis?.cancel();
      setSpeaking(false);
      setConfirm(false);
      pendingAnswers.current = {};
      if (saveTimer.current) {
        clearTimeout(saveTimer.current);
        saveTimer.current = null;
      }
    }
    setRun((current) => {
      if (!current) return next;
      // Preserve any local answers that haven't been synced or were just clicked
      return {
        ...next,
        answers: {
          ...next.answers,
          ...pendingAnswers.current,
        },
      };
    });
    setNow(Date.now());
    if (next.finished) {
      void client.invalidateQueries({ queryKey: ['test-history'] });
      void client.invalidateQueries({ queryKey: ['dashboard'] });
    }
  }
  useEffect(() => {
    if (query.data?.run) {
      offset.current = new Date(query.data.run.serverNow).getTime() - Date.now();
      setRun(query.data.run);
    }
  }, [query.data]);
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearInterval(timer);
      if (saveTimer.current) clearTimeout(saveTimer.current);
      window.speechSynthesis?.cancel();
    };
  }, []);
  const remaining = run?.deadline
    ? Math.max(0, Math.ceil((new Date(run.deadline).getTime() - (now + offset.current)) / 1000))
    : 0;
  useEffect(() => {
    if (
      !run?.deadline ||
      run.finished ||
      remaining > 0 ||
      locked.current ||
      Date.now() < nextPoll.current
    )
      return;
    nextPoll.current = Date.now() + 5000;
    locked.current = true;
    setBusy(true);
    window.speechSynthesis?.cancel();
    setSpeaking(false);
    void api<JlptRunView>('/jlpt/runs/' + run.runId)
      .then(apply)
      .catch((e) => setError(e.message))
      .finally(() => {
        locked.current = false;
        setBusy(false);
      });
  }, [remaining, now, run?.runId, run?.deadline, run?.finished]);
  async function flushPendingAnswers(currentRun: JlptRunView) {
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
    const toSave = { ...pendingAnswers.current };
    if (Object.keys(toSave).length === 0) return;
    try {
      const updated = await patch<JlptRunView>('/jlpt/runs/' + currentRun.runId, {
        action: 'save',
        answers: toSave,
        revision: currentRun.revision,
      });
      // Clear saved keys from pending
      for (const k of Object.keys(toSave)) {
        if (pendingAnswers.current[k] === toSave[k]) {
          delete pendingAnswers.current[k];
        }
      }
      apply(updated);
    } catch (e) {
      setError((e as Error).message);
    }
  }
  function handleAnswer(questionId: string, value: string) {
    if (!run || remaining === 0) return;
    if (run.answers[questionId] === value) return; // Ignore clicking the already selected option

    // Optimistic UI update
    pendingAnswers.current[questionId] = value;
    setRun((prev) => (prev ? { ...prev, answers: { ...prev.answers, [questionId]: value } } : prev));

    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      saveTimer.current = null;
      if (runRef.current && !locked.current) {
        void flushPendingAnswers(runRef.current);
      }
    }, 400);
  }
  const runRef = useRef<JlptRunView | null>(null);
  runRef.current = run;

  async function command(
    action: 'save' | 'finish' | 'begin',
    answers: Record<string, string> = {},
  ) {
    if (!run || locked.current) return;
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
      saveTimer.current = null;
    }
    locked.current = true;
    setBusy(true);
    setError('');
    try {
      const mergedAnswers = { ...pendingAnswers.current, ...answers };
      pendingAnswers.current = {};
      apply(
        await patch<JlptRunView>('/jlpt/runs/' + run.runId, {
          action,
          answers: mergedAnswers,
          revision: run.revision,
        }),
      );
      setConfirm(false);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      locked.current = false;
      setBusy(false);
    }
  }
  async function start() {
    if (locked.current) return;
    locked.current = true;
    setBusy(true);
    setError('');
    try {
      apply(await post<JlptRunView>('/jlpt/papers/' + id + '/start'));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      locked.current = false;
      setBusy(false);
    }
  }
  async function audio(questionId?: string) {
    if (speaking) return;
    setSpeaking(true);
    setError('');
    try {
      const text =
        questionId && run
          ? (await api<{ text: string }>(`/jlpt/runs/${run.runId}/audio/${questionId}`)).text
          : '音声の確認です。日本語の音が聞こえたら、試験を始めてください。';
      await playJapanese(text);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSpeaking(false);
    }
  }
  if (query.isLoading) return <Loading />;
  if (!query.data) return <ErrorState error={query.error} />;
  const paper = query.data.paper,
    question = run?.questions[index],
    report = run?.report;
  const answered = run ? Object.values(run.answers).filter(Boolean).length : 0;
  return (
    <>
      <Link className="back-link" to="/tests">
        <ArrowLeft size={16} />
        Các đề luyện JLPT
      </Link>
      <PageHeader
        eyebrow={paper.isOfficial ? 'JLPT CHÍNH THỨC · ĐỒNG BỘ AUDIO GỐC' : 'THI THỬ · ĐỀ TỰ BIÊN SOẠN'}
        title={paper.title}
        description={`${paper.total} câu · ${paper.minutes} phút làm bài · ${paper.sections.length} phần`}
        action={
          run?.deadline && !run.finished ? (
            <span
              className={'timer ' + (remaining < 60 ? 'error-text' : '')}
              role="timer"
              aria-label="Thời gian còn lại"
            >
              <Clock3 size={17} />
              {clock(remaining)}
            </span>
          ) : undefined
        }
      />
      {error && (
        <div className="feedback incorrect" role="alert">
          <p>{error}</p>
          {run && (
            <Button
              variant="secondary"
              disabled={busy}
              onClick={() => {
                setBusy(true);
                void api<JlptRunView>('/jlpt/runs/' + run.runId)
                  .then((next) => {
                    apply(next);
                    setError('');
                  })
                  .catch((e) => setError(e.message))
                  .finally(() => setBusy(false));
              }}
            >
              Tải lại bài đã lưu
            </Button>
          )}
        </div>
      )}
      {!run ? (
        <section className="panel jlpt-intro">
          <h2>Trước khi bắt đầu</h2>
          <ol>
            {paper.sections.map((s) => (
              <li key={s.id}>
                <strong>{s.title}</strong>
                <span>
                  {s.count} câu · {s.minutes} phút
                </span>
              </li>
            ))}
          </ol>
          <p>
            Đồng hồ riêng cho từng phần. Đáp án được lưu sau mỗi lần chọn; tải lại trang vẫn tiếp
            tục thời gian cũ. Phần đã kết thúc không mở lại. Bạn chủ động bắt đầu phần kế tiếp sau
            khoảng nghỉ.
          </p>
          {paper.isOfficial ? (
            <p>
              Đây là đề thi JLPT N5 chính thức có âm thanh gốc đồng bộ theo từng câu hỏi.
              Bạn có thể nghe trực tiếp trên từng câu với trình phát âm thanh tích hợp sẵn.
            </p>
          ) : (
            <p>
              Không bật chú thích tự động hoặc dịch câu khi đang thi. Nghe hiểu dùng giọng Nhật tổng
              hợp trên thiết bị, có thể phát lại từng câu; không phải băng thi hay nhịp phát tự động
              của JLPT chính thức. Tình huống phát ngôn được mô tả bằng chữ.
            </p>
          )}
          <p>
            Kết quả là tỷ lệ câu đúng và thống kê từng nhóm, không quy đổi thành điểm JLPT 180 hoặc
            kết luận đỗ/trượt.
          </p>
          <div className="inline-actions">
            {!paper.isOfficial && (
              <Button variant="secondary" disabled={speaking} onClick={() => void audio()}>
                <Volume2 size={16} />
                Thử giọng Nhật
              </Button>
            )}
            <Button disabled={busy || speaking} onClick={() => void start()}>
              Bắt đầu phần 1<ArrowRight size={16} />
            </Button>
          </div>
        </section>
      ) : report ? (
        <>
          <section className="panel jlpt-intro">
            <h2>Đã hoàn thành bài thi</h2>
            <p>
              <strong>{report.score}%</strong> câu đúng ·{' '}
              {report.results.filter((q) => q.correct).length}/{report.results.length} câu ·{' '}
              {clock(report.duration)} làm bài
            </p>
            <p>Đây là kết quả luyện tập, không phải điểm chuẩn hóa JLPT.</p>
            <div className="jlpt-score-groups">
              {report.groups.map((g) => (
                <div key={g.label}>
                  <strong>{g.label}</strong>
                  <span>
                    {g.correct}/{g.total} câu đúng
                  </span>
                </div>
              ))}
            </div>
            <Button
              variant="secondary"
              onClick={() => {
                setRun(null);
                setIndex(0);
              }}
            >
              Làm lại đề
            </Button>
          </section>
          <section className="panel spaced">
            <h2>Đáp án và giải thích</h2>
            {report.results.map((q, i) => (
              <details className="jlpt-result" key={q.id}>
                <summary>
                  {i + 1}. {q.group} · {q.correct ? 'Đúng' : q.given ? 'Sai' : 'Bỏ trống'}
                </summary>
                {q.imageUrl && (
                  <div style={{ marginBlock: '12px' }}>
                    <img
                      src={q.imageUrl}
                      alt="Hình minh họa"
                      className="jlpt-question-image"
                      style={{ maxHeight: '280px', objectFit: 'contain' }}
                    />
                  </div>
                )}
                {q.audioUrl && (
                  <div className="jlpt-audio-player" style={{ marginBlock: '12px' }}>
                    <audio controls preload="auto" src={q.audioUrl} className="jlpt-audio-element" />
                  </div>
                )}
                <p className="jlpt-passage" lang="ja">
                  {q.passage}
                </p>
                <p lang="ja">{q.prompt}</p>
                <p>
                  Bạn chọn: {q.given || '—'} · Đáp án: {q.answer}
                </p>
                <p>{q.explanation}</p>
                {q.transcript && (
                  <p className="jlpt-passage" lang="ja">
                    {q.transcript}
                  </p>
                )}
              </details>
            ))}
          </section>
        </>
      ) : !run.startedAt ? (
        <section className="panel jlpt-intro">
          <h2>Đã kết thúc phần {run.section}</h2>
          <p>
            Phần tiếp theo: {run.sectionTitle}. Thời gian {run.sections[run.section].minutes} phút.
            Đồng hồ bắt đầu khi bạn chọn nút dưới.
          </p>
          <Button disabled={busy} onClick={() => void command('begin')}>
            Bắt đầu phần {run.section + 1}
            <ArrowRight size={16} />
          </Button>
        </section>
      ) : (
        <>
          <div className="jlpt-section-heading">
            <div>
              <span className="eyebrow">
                PHẦN {run.section + 1}/{run.sections.length}
              </span>
              <h2>{run.sectionTitle}</h2>
              <p aria-live="polite">
                {busy ? 'Đang lưu…' : `${answered}/${run.questions.length} câu đã lưu`}
              </p>
            </div>
            <Button
              variant="secondary"
              disabled={busy || remaining === 0}
              onClick={() => setConfirm(true)}
            >
              Kết thúc phần này
            </Button>
          </div>
          <div className="jlpt-layout">
            <section className="panel jlpt-question">
              {question && (
                <>
                  <div className="eyebrow">
                    {question.group} · CÂU {index + 1}/{run.questions.length}
                  </div>
                  {question.passage && (
                    <div className="jlpt-passage" lang="ja">
                      {question.passage}
                    </div>
                  )}
                  {question.imageUrl && (
                    <div style={{ marginBlock: '12px' }}>
                      <img
                        src={question.imageUrl}
                        alt="Hình minh họa câu hỏi"
                        className="jlpt-question-image"
                      />
                    </div>
                  )}
                  <h2 lang="ja">{question.prompt}</h2>
                  {question.audioUrl ? (
                    <ExamAudioPlayer
                      key={question.id}
                      src={question.audioUrl}
                      questionId={question.id}
                    />
                  ) : question.category === 'listening' ? (
                    <div className="inline-actions spaced">
                      <Button
                        disabled={speaking || remaining === 0}
                        onClick={() => void audio(question.id)}
                      >
                        <Volume2 size={16} />
                        {speaking ? 'Đang phát…' : 'Nghe câu này'}
                      </Button>
                      {speaking && (
                        <Button
                          variant="secondary"
                          onClick={() => {
                            window.speechSynthesis?.cancel();
                            setSpeaking(false);
                          }}
                        >
                          <Square size={16} />
                          Dừng
                        </Button>
                      )}
                    </div>
                  ) : null}
                  <QuestionInput
                    question={{ ...question, numbered: true }}
                    value={run.answers[question.id] || ''}
                    disabled={remaining === 0}
                    onChange={(value) => handleAnswer(question.id, value)}
                  />
                  <div className="inline-actions jlpt-navigation">
                    <Button
                      variant="secondary"
                      disabled={index === 0 || busy}
                      onClick={() => {
                        window.speechSynthesis?.cancel();
                        setSpeaking(false);
                        setIndex((i) => i - 1);
                      }}
                    >
                      Câu trước
                    </Button>
                    <Button
                      variant="secondary"
                      disabled={index === run.questions.length - 1 || busy}
                      onClick={() => {
                        window.speechSynthesis?.cancel();
                        setSpeaking(false);
                        setIndex((i) => i + 1);
                      }}
                    >
                      Câu tiếp
                    </Button>
                  </div>
                </>
              )}
            </section>
            <aside className="panel jlpt-answer-sheet">
              <h2>Phiếu trả lời</h2>
              <p>Đã chọn được tô màu. Có thể đổi đáp án trong phần đang làm.</p>
              <nav aria-label="Chọn câu hỏi">
                {run.questions.map((q, i) => (
                  <button
                    key={q.id}
                    aria-current={i === index ? 'step' : undefined}
                    aria-label={`Câu ${i + 1}${run.answers[q.id] ? ', đã trả lời' : ''}`}
                    className={run.answers[q.id] ? 'answered' : ''}
                    onClick={() => {
                      window.speechSynthesis?.cancel();
                      setSpeaking(false);
                      setIndex(i);
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </nav>
            </aside>
          </div>
        </>
      )}
      <Modal open={confirm} onOpenChange={setConfirm} title="Kết thúc phần thi?">
        <p>
          Còn {(run?.questions.length || 0) - answered} câu chưa trả lời. Phần này sẽ khóa lại và
          không thể quay về.
        </p>
        <div className="inline-actions">
          <Button variant="secondary" disabled={busy} onClick={() => setConfirm(false)}>
            Tiếp tục làm
          </Button>
          <Button disabled={busy} onClick={() => void command('finish')}>
            Xác nhận kết thúc
            <Check size={16} />
          </Button>
        </div>
      </Modal>
    </>
  );
}
