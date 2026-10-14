import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowUpRight, ArrowRight, Flame, Layers, PenLine, Check, Clock3 } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'motion/react';
import { api } from '../services/api';
import type { DashboardData } from '../types';
import { PageHeader, Loading, ErrorState, AudioButton } from '../components/ui';
export function useDashboard() {
  return useQuery({ queryKey: ['dashboard'], queryFn: () => api<DashboardData>('/dashboard') });
}
function ActivityChart({ data }: { data: DashboardData }) {
  return (
    <div className="activity-chart" aria-label="Số lượt ôn từ vựng trong 7 ngày">
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={data.weekly}
          barSize={27}
          margin={{ top: 14, right: 0, left: -25, bottom: 0 }}
        >
          <CartesianGrid vertical={false} stroke="var(--line)" strokeDasharray="3 5" />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted)', fontSize: 11 }}
          />
          <Tooltip
            cursor={{ fill: 'var(--surface)' }}
            contentStyle={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 8,
            }}
            formatter={(v) => [v, 'Lượt ôn']}
          />
          <Bar dataKey="reviews" fill="var(--jade)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export function Dashboard() {
  const { data, isLoading, error, refetch } = useDashboard();
  if (isLoading) return <Loading />;
  if (!data) return <ErrorState error={error} retry={() => void refetch()} />;
  const goal = Math.min(100, Math.round((data.today / data.user.goal) * 100));
  const date = new Intl.DateTimeFormat('vi', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'Asia/Ho_Chi_Minh',
  }).format(new Date());
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PageHeader
        eyebrow={date}
        title={`Chào ${data.user.name.split(' ').slice(-1)[0]}, cùng học nhé.`}
        description="Một chút kiên trì hôm nay. Một bước gần hơn đến Nhật Bản."
        action={
          <div className="streak-pill">
            <Flame size={17} />
            <strong>{data.streak} ngày</strong>
            <span>liên tiếp</span>
          </div>
        }
      />
      <section className="hero-study">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="tiny-dot" /> NHỊP HỌC HÔM NAY
          </span>
          <h2>
            Gieo một từ mới.
            <br />
            Mở thêm một thế giới.
          </h2>
          <p>
            {data.due
              ? `Có ${data.due} từ đang chờ bạn ôn lại. Dành vài phút để giữ chúng trong trí nhớ nhé.`
              : 'Bạn đã ôn hết các thẻ đến hạn. Khám phá thêm một từ mới hôm nay nhé.'}
          </p>
          <Link className="button primary" to={data.due ? '/flashcards/review' : '/dictionary'}>
            {data.due ? 'Bắt đầu ôn tập' : 'Khám phá từ mới'}
            <ArrowRight size={17} />
          </Link>
          <span className="hero-meta">
            <Clock3 size={13} /> Theo nhịp độ của bạn
          </span>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="art-label">こつこつ、毎日。</span>
          <div className="sun-disc" />
          <span className="hero-kanji">学</span>
          <span className="art-caption">
            MANABU
            <br />
            <b>học, khám phá</b>
          </span>
          <svg viewBox="0 0 300 220" className="branch-art">
            <path d="M20 220Q120 120 255 20M117 131Q84 88 100 49M176 87Q210 104 263 91M76 173Q26 160 21 125" />
            <ellipse cx="107" cy="57" rx="10" ry="28" transform="rotate(25 107 57)" />
            <ellipse cx="130" cy="98" rx="10" ry="26" transform="rotate(58 130 98)" />
            <ellipse cx="230" cy="95" rx="10" ry="25" transform="rotate(85 230 95)" />
            <ellipse cx="240" cy="38" rx="9" ry="24" transform="rotate(48 240 38)" />
          </svg>
        </div>
      </section>
      <div className="stat-strip">
        {[
          {
            label: 'Từ vựng đã học',
            value: data.learned,
            meta: `trong ${data.totalCards} từ đã lưu`,
            icon: '語',
          },
          { label: 'Đến hạn ôn tập', value: data.due, meta: 'Củng cố trí nhớ hôm nay', icon: '復' },
          {
            label: 'Bài ngữ pháp đã đọc',
            value: data.grammarCompleted,
            meta: `trong ${data.grammarTotal} bài học`,
            icon: '文',
          },
          {
            label: 'Độ chính xác bài kiểm tra',
            value: data.accuracy === null ? '—' : `${data.accuracy}%`,
            meta: data.attempts.length
              ? `${data.attempts.length} bài kiểm tra gần nhất`
              : 'Làm bài kiểm tra đầu tiên',
            icon: '正',
          },
        ].map((s) => (
          <div className="stat" key={s.label}>
            <div>
              <span>{s.label}</span>
              <strong>{s.value}</strong>
              <small>{s.meta}</small>
            </div>
            <span className="stat-kanji">{s.icon}</span>
          </div>
        ))}
      </div>
      <div className="dashboard-grid">
        <div className="dashboard-main">
          <section className="panel">
            <div className="section-heading">
              <div>
                <h2>Tiếp tục hành trình</h2>
                <p>Bài học nhỏ, tiến bộ thật.</p>
              </div>
              <Link to="/grammar">
                Tất cả bài học <ArrowUpRight size={16} />
              </Link>
            </div>
            <Link className="continue-lesson" to={'/grammar/' + (data.nextLesson?.id || 'desu')}>
              <div className="lesson-art">
                <span>文</span>
                <small>NGỮ PHÁP</small>
              </div>
              <div className="lesson-copy">
                <span className="eyebrow">
                  {data.nextLesson?.level || 'NGỮ PHÁP'} · BÀI HỌC GỢI Ý
                </span>
                <h3>{data.nextLesson?.pattern || 'Ôn lại kiến thức'}</h3>
                <p>{data.nextLesson?.title || 'Giới thiệu bản thân'}</p>
                <span className="lesson-duration">Đọc hiểu · Ví dụ · Thực hành</span>
              </div>
              <span className="circle-arrow">
                <ArrowRight size={20} />
              </span>
            </Link>
            <div className="quick-links">
              <Link to="/flashcards">
                <Layers size={18} />
                <span>Thẻ từ vựng</span>
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/writing">
                <PenLine size={18} />
                <span>Luyện viết</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
          <section className="panel recent-panel">
            <div className="section-heading">
              <div>
                <h2>Những từ đang quen dần</h2>
                <p>Gặp lại để nhớ lâu hơn.</p>
              </div>
              <Link to="/flashcards">
                Xem bộ thẻ <ArrowUpRight size={16} />
              </Link>
            </div>
            {data.recent.length ? (
              <div className="word-table">
                {data.recent.map((c) => (
                  <div className="word-row" key={c.id}>
                    <div className="word-spelling">
                      <strong lang="ja">{c.japanese}</strong>
                      <small>{c.reading}</small>
                    </div>
                    <span>{c.meaning}</span>
                    <span className="word-status">
                      <span className="tiny-dot" />
                      {c.repetitions > 2 ? 'Đã ghi nhớ' : 'Đang học'}
                    </span>
                    <AudioButton text={c.japanese} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="muted padded">Bắt đầu ôn thẻ để xem những từ đã học ở đây.</p>
            )}
          </section>
        </div>
        <div className="dashboard-aside">
          <section className="panel goal-panel">
            <div className="section-heading">
              <h2>Mục tiêu mỗi ngày</h2>
              <Link to="/settings" aria-label="Sửa mục tiêu">
                <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="goal-content">
              <div className="goal-ring">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" className="ring-base" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="ring-value"
                    strokeDasharray={`${goal * 2.64} 264`}
                  />
                </svg>
                <span>
                  {goal}
                  <small>%</small>
                </span>
              </div>
              <div>
                <strong>
                  {data.today}
                  <span> / {data.user.goal}</span>
                </strong>
                <p>lượt ôn từ vựng</p>
                {goal >= 100 ? (
                  <small className="positive">
                    <Check size={12} />
                    Đã hoàn thành!
                  </small>
                ) : (
                  <small>Còn {Math.max(0, data.user.goal - data.today)} lượt nữa, cố lên!</small>
                )}
              </div>
            </div>
          </section>
          <section className="panel">
            <div className="section-heading">
              <div>
                <h2>Nhịp học của bạn</h2>
                <p>7 ngày gần đây</p>
              </div>
              <span className="chart-legend">
                <i />
                Lượt ôn
              </span>
            </div>
            <ActivityChart data={data} />
            <div className="chart-footer">
              <span>Tổng lượt ôn</span>
              <strong>
                {data.weekly.reduce((s, d) => s + d.reviews, 0)} <small>lượt</small>
              </strong>
            </div>
          </section>
          <div className="daily-note">
            <span className="eyebrow">MỘT CHÚT TIẾNG NHẬT</span>
            <h3 lang="ja">継続は力なり。</h3>
            <p>Kiên trì làm nên sức mạnh.</p>
            <div>
              <span>けいぞくはちからなり</span>
              <AudioButton text="継続は力なり" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export function Progress() {
  const { data, isLoading, error } = useDashboard();
  if (isLoading) return <Loading />;
  if (!data) return <ErrorState error={error} />;
  return (
    <>
      <PageHeader
        eyebrow="NHÌN LẠI ĐỂ ĐI XA HƠN"
        title="Từng ngày, bạn đang tiến bộ."
        description="Mọi lượt ôn, bài học và bài kiểm tra đều được ghi lại."
      />
      <div className="metrics-grid">
        {[
          ['Từ đã học', data.learned],
          ['Ngày liên tiếp', data.streak],
          ['Bài ngữ pháp', data.grammarCompleted],
          ['Bài kiểm tra', data.attempts.length],
        ].map(([label, value]) => (
          <div className="panel metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="two-col">
        <section className="panel">
          <h2>Hoạt động 7 ngày</h2>
          <ActivityChart data={data} />
        </section>
        <section className="panel">
          <h2>Lịch ôn sắp tới</h2>
          {data.upcoming.map((d) => (
            <div className="simple-row" key={d.date}>
              <span>{new Date(d.date + 'T00:00:00').toLocaleDateString('vi')}</span>
              <strong>{d.count} thẻ</strong>
            </div>
          ))}
        </section>
      </div>
      <section className="panel spaced">
        <h2>Nhật ký kiểm tra</h2>
        {data.attempts.length ? (
          data.attempts.map((a) => (
            <div className="simple-row" key={a.id}>
              <div>
                <strong>{a.testId}</strong>
                <small>{new Date(a.createdAt).toLocaleString('vi')}</small>
              </div>
              <span>{a.duration} giây</span>
              <strong className={a.score >= 70 ? 'positive' : ''}>{a.score}%</strong>
            </div>
          ))
        ) : (
          <p className="muted">
            Chưa có bài kiểm tra. <Link to="/tests">Bắt đầu bài đầu tiên →</Link>
          </p>
        )}
      </section>
    </>
  );
}
