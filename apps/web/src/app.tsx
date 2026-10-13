import { KanjiDetail } from './pages/radicals';
import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  LayoutDashboard,
  Layers,
  BookOpen,
  Search,
  PenLine,
  ClipboardCheck,
  ChartNoAxesCombined,
  Settings,
  Menu,
  ArrowUpRight,
  LogOut,
  ChevronDown,
  MessageCircle,
  Leaf,
  X,
} from 'lucide-react';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { api, post } from './services/api';
import type { User } from './types';
import { useUI } from './stores/ui';
import { Loading, Button } from './components/ui';
import { AuthPage } from './pages/auth';
import { Dashboard, Progress } from './pages/dashboard';
import { Dictionary, DictionaryDetail, DictionaryAdmin } from './pages/dictionary';
import { Flashcards, DeckDetail, Review } from './pages/flashcards';
import { Grammar, GrammarLesson } from './pages/grammar';
import { Tests, TestSession } from './pages/tests';
import { Writing } from './pages/writing';
import { SettingsPage, Profile } from './pages/settings';
import { Assistant } from './pages/assistant';
const navigation = [
  { to: '/dashboard', label: 'Tổng quan', icon: LayoutDashboard },
  { to: '/flashcards', label: 'Thẻ từ vựng', icon: Layers },
  { to: '/grammar', label: 'Ngữ pháp', icon: BookOpen },
  { to: '/dictionary', label: 'Từ điển', icon: Search },
  { to: '/writing', label: 'Luyện viết', icon: PenLine },
  { to: '/tests', label: 'Kiểm tra', icon: ClipboardCheck },
  { to: '/progress', label: 'Tiến độ học tập', icon: ChartNoAxesCombined },
];
navigation.splice(6, 0, { to: '/assistant', label: 'Góc hỏi đáp AI', icon: MessageCircle });
export function useUser() {
  return useQuery({ queryKey: ['user'], queryFn: () => api<User>('/auth/me'), retry: false });
}
function Layout() {
  const { data: user, isLoading } = useUser();
  const navigate = useNavigate();
  const client = useQueryClient();
  const location = useLocation();
  const [mobile, setMobile] = useState(false);
  const [smallScreen, setSmallScreen] = useState(() => window.matchMedia('(max-width: 760px)').matches);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 760px)');
    const update = () => { setSmallScreen(media.matches); if (!media.matches) setMobile(false); };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const [search, setSearch] = useState('');
  const notify = useUI((s) => s.notify);
  useEffect(() => {
    setMobile(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    const theme = user?.theme || 'light';
    document.documentElement.dataset.theme =
      theme === 'system'
        ? matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;
  }, [user?.theme]);
  if (isLoading) return <Loading />;
  if (!user) return <Navigate to="/login" replace />;
  const sidebar = <>
        <Link to="/dashboard" className="brand">
          <span className="brand-mark">木</span>
          <span>
            komorebi<small>HỌC TIẾNG NHẬT MỖI NGÀY</small>
          </span>
        </Link>
        <div className="sidebar-label">GÓC HỌC TẬP</div>
        <nav aria-label="Điều hướng chính">
          {navigation.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to}>
              <Icon size={19} />
              <span>{label}</span>
              {to === '/dictionary' && <span className="nav-dot" />}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-note">
            <Leaf size={20} />
            <p>
              Chậm một chút.
              <br />
              <strong>Tiến bộ mỗi ngày.</strong>
            </p>
            <span>一日一歩</span>
          </div>
          <NavLink className="settings-link" to="/settings">
            <Settings size={18} />
            Cài đặt
          </NavLink>
          <Dropdown.Root>
            <Dropdown.Trigger className="user-menu">
              <span className="avatar">{user.avatar}</span>
              <span>
                <strong>{user.name}</strong>
                <small>Mục tiêu JLPT {user.level}</small>
              </span>
              <ChevronDown size={15} />
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content className="dropdown" sideOffset={8}>
                <Dropdown.Item onSelect={() => navigate('/profile')}>Hồ sơ của tôi</Dropdown.Item>
                {user.role === 'admin' && (
                  <Dropdown.Item onSelect={() => navigate('/admin/dictionary')}>
                    Quản lý từ điển
                  </Dropdown.Item>
                )}
                <Dropdown.Item
                  onSelect={() =>
                    void post('/auth/logout')
                      .then(() => {
                        client.clear();
                        navigate('/login');
                      })
                      .catch((e) => notify((e as Error).message))
                  }
                >
                  <LogOut size={15} />
                  Đăng xuất
                </Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
        </div>
  </>;
  return (
    <Dialog.Root open={mobile} onOpenChange={setMobile}>
    <div className="app-shell">
      {!smallScreen && <aside className="sidebar">{sidebar}</aside>}
      {smallScreen && <Dialog.Portal>
        <Dialog.Overlay className="mobile-overlay" />
        <Dialog.Content className="sidebar open mobile-drawer" aria-describedby={undefined}>
          <Dialog.Title className="sr-only">Điều hướng học tập</Dialog.Title>
          <Dialog.Close className="button ghost icon-button drawer-close" aria-label="Đóng điều hướng"><X size={22} /></Dialog.Close>
          {sidebar}
        </Dialog.Content>
      </Dialog.Portal>}
      <div className="main-shell">
        <header className="topbar">
          <Dialog.Trigger asChild><Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label="Mở điều hướng"
          >
            <Menu size={22} />
          </Button></Dialog.Trigger>
          <div className="breadcrumb">
            Góc học tập <span>/</span>{' '}
            <strong>
              {navigation.find((n) => location.pathname.startsWith(n.to))?.label || 'Tài khoản'}
            </strong>
          </div>
          <form
            className="global-search"
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/dictionary?q=' + encodeURIComponent(search));
            }}
          >
            <Search size={16} />
            <input
              aria-label="Tra từ nhanh"
              placeholder="Tra một từ tiếng Nhật…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <kbd>↵</kbd>
          </form>
          <Link className="level-pill" to="/settings">
            JLPT {user.level}
            <ArrowUpRight size={14} />
          </Link>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="footer">
          <span>木漏れ日 · Từng chút một, mỗi ngày.</span>
          <Link to="/settings#sources">
            Nguồn dữ liệu & bản quyền <ArrowUpRight size={12} />
          </Link>
        </footer>
      </div>
      {smallScreen && <nav className="mobile-bottom-nav" aria-label="Truy cập nhanh">
        {[navigation[0], navigation[3], navigation[1], navigation[4]].map(({ to, label, icon: Icon }) =>
          <NavLink key={to} to={to}><Icon size={21} /><span>{label}</span></NavLink>)}
        <Dialog.Trigger className="mobile-more"><Menu size={21} /><span>Thêm</span></Dialog.Trigger>
      </nav>}
    </div>
    </Dialog.Root>
  );
}
function Toast() {
  const message = useUI((s) => s.message);
  return message ? (
    <div className="toast" role="status">
      {message}
    </div>
  ) : null;
}
export function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage register />} />
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="dictionary/:id" element={<DictionaryDetail />} />
          <Route path="flashcards" element={<Flashcards />} />
          <Route path="flashcards/review" element={<Review />} />
          <Route path="flashcards/:deckId" element={<DeckDetail />} />
          <Route path="grammar" element={<Grammar />} />
          <Route path="grammar/:id" element={<GrammarLesson />} />
          <Route path="kanji/:character" element={<KanjiDetail/>}/>
          <Route path="writing" element={<Writing />} />
          <Route path="tests" element={<Tests />} />
          <Route path="tests/:id" element={<TestSession />} />
          <Route path="assistant" element={<Assistant />} />
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin/dictionary" element={<DictionaryAdmin />} />
          <Route
            path="*"
            element={
              <div className="empty-state">
                <h1>Trang này chưa tồn tại</h1>
                <Link to="/dashboard">Về góc học tập</Link>
              </div>
            }
          />
        </Route>
      </Routes>
      <Toast />
    </>
  );
}
