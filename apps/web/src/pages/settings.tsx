import { AnnotationSettings } from '../components/japanese-annotated-text';
import { SourceNote } from './radicals';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { Check, Sun, Moon, Monitor, ArrowUpRight, Download, Trash2, ShieldCheck, AlertTriangle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { useUser } from '../app';
import { patch, post, remove } from '../services/api';
import type { User } from '../types';
import { useUI } from '../stores/ui';
import { Button, PageHeader } from '../components/ui';
export function SettingsPage() {
  const { data: user } = useUser();
  const [goal, setGoal] = useState(20);
  const [level, setLevel] = useState('N5');
  const [theme, setTheme] = useState('light');
  const [busy, setBusy] = useState(false);
  const notify = useUI((s) => s.notify);
  const client = useQueryClient();
  useEffect(() => {
    if (user) {
      setGoal(user.goal);
      setLevel(user.level);
      setTheme(user.theme);
    }
  }, [user?.id, user?.goal, user?.level, user?.theme]);
  const save = async () => {
    setBusy(true);
    try {
      const data = await patch<User>('/profile', { goal, level, theme });
      client.setQueryData(['user'], data);
      void client.invalidateQueries({ queryKey: ['dashboard'] });
      notify('Đã lưu cài đặt của bạn.');
    } catch (e) {
      notify((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <>
      <PageHeader
        eyebrow="GÓC HỌC TẬP CỦA RIÊNG BẠN"
        title="Học theo cách bạn muốn."
        description="Chọn nhịp độ phù hợp và giữ một thói quen bền vững."
      />
      <AnnotationSettings />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void save();
        }}
      >
        <section className="panel settings-section">
          <div>
            <h2>Mục tiêu học tập</h2>
            <p>Vừa sức để có thể thực hiện mỗi ngày.</p>
          </div>
          <div>
            <label>
              Trình độ JLPT hướng đến
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                {['N5', 'N4', 'N3', 'N2', 'N1'].map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </label>
            <label>
              Số lượt ôn từ vựng mỗi ngày
              <input
                type="number"
                required
                min={1}
                max={200}
                value={goal}
                onChange={(e) => setGoal(Number(e.target.value))}
              />
            </label>
          </div>
        </section>
        <section className="panel settings-section spaced">
          <div>
            <h2>Không gian học</h2>
            <p>Chọn giao diện dễ chịu cho mắt.</p>
          </div>
          <div className="theme-options">
            {[
              { id: 'light', label: 'Sáng', icon: Sun },
              { id: 'dark', label: 'Tối', icon: Moon },
              { id: 'system', label: 'Hệ thống', icon: Monitor },
            ].map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                key={id}
                className={theme === id ? 'selected' : ''}
                onClick={() => setTheme(id)}
              >
                <Icon size={22} />
                {label}
              </button>
            ))}
          </div>
        </section>
        <div className="form-footer">
          <Button type="submit" disabled={busy}>
            <Check size={17} />
            Lưu thay đổi
          </Button>
        </div>
      </form>
      <section id="sources" className="panel sources">
        <h2>Nguồn dữ liệu & bản quyền</h2>
        <SourceNote />
        <p>
          Chú thích ngữ cảnh dùng Kuromoji 0.1.2 (Apache 2.0) và IPADIC. Phân tích tự động có thể
          sai với tên riêng hoặc cách đọc đa nghĩa; cách đọc có sẵn trong bài học được ưu tiên.
        </p>
        <p>
          Từ điển sử dụng JMdict của Electronic Dictionary Research and Development Group (EDRDG),
          qua bản phân phối JSON của scriptin/jmdict-simplified. Dữ liệu từ điển và các bản dịch
          phái sinh được cung cấp theo giấy phép Creative Commons Attribution-ShareAlike 4.0.
        </p>
        <p>
          Định nghĩa tiếng Anh gốc được giữ nguyên; bản dịch tiếng Việt mẫu được tổng hợp bám sát JLPT.
          Các bản dịch tự động, khi được bổ sung, có thể cần hiệu đính theo ngữ cảnh.
        </p>
        <div className="inline-actions wrap">
          <a href="https://www.edrdg.org/jmdict/j_jmdict.html" target="_blank" rel="noreferrer">
            JMdict / EDRDG <ArrowUpRight size={14} />
          </a>
          <a href="https://github.com/scriptin/jmdict-simplified" target="_blank" rel="noreferrer">
            jmdict-simplified <ArrowUpRight size={14} />
          </a>
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY-SA 4.0 <ArrowUpRight size={14} />
          </a>
        </div>
        <p className="muted">
          Hệ thống bài học và bài tập ngữ pháp toàn diện từ N5 đến N1 kèm 10 bài tập cho mỗi điểm ngữ pháp, được tổng hợp bám sát JLPT theo các giáo trình Minna no Nihongo, Shinkanzen Master &amp; Soumatome. Phát âm dùng giọng AI Nanami Neural tự nhiên hoặc giọng tiếng Nhật trên thiết bị khi có sẵn.
        </p>
      </section>
    </>
  );
}
export function Profile() {
  const { data: user } = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('花');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmationText, setDeleteConfirmationText] = useState('');
  const notify = useUI((s) => s.notify);
  const client = useQueryClient();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setAvatar(user.avatar);
    }
  }, [user?.id, user?.name, user?.avatar]);

  const handleExport = async () => {
    setExportBusy(true);
    try {
      const res = await fetch('/api/profile/export', { credentials: 'same-origin' });
      if (!res.ok) throw new Error('Không thể xuất dữ liệu lúc này.');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `wakaba-user-data-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      notify('Đã tải về bản sao dữ liệu cá nhân của bạn.');
    } catch (err) {
      notify((err as Error).message);
    } finally {
      setExportBusy(false);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleteBusy(true);
    try {
      await remove('/profile');
      client.clear();
      notify('Tài khoản và dữ liệu đã được xóa vĩnh viễn theo Nghị định 13/2023/NĐ-CP.');
      navigate('/login');
    } catch (err) {
      notify((err as Error).message);
      setDeleteBusy(false);
    }
  };
  return (
    <>
      <PageHeader
        eyebrow="NGƯỜI HỌC"
        title="Hồ sơ của bạn"
        description="Một chút cá nhân cho góc học tập mỗi ngày."
      />
      <section className="panel settings-section">
        <div>
          <h2>Thông tin cá nhân</h2>
          <p>{user?.email}</p>
          <span className="avatar big-avatar">{avatar}</span>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            try {
              client.setQueryData(['user'], await patch('/profile', { name, avatar }));
              notify('Đã lưu hồ sơ.');
            } catch (error) {
              notify((error as Error).message);
            } finally {
              setBusy(false);
            }
          }}
        >
          <label>
            Tên hiển thị
            <input value={name} required maxLength={60} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>Chọn biểu tượng</label>
          <div className="avatar-options">
            {['花', '山', '月', '海', '猫', '森'].map((a) => (
              <button
                type="button"
                className={avatar === a ? 'selected' : ''}
                key={a}
                onClick={() => setAvatar(a)}
              >
                {a}
              </button>
            ))}
          </div>
          <Button type="submit" disabled={busy}>
            Lưu hồ sơ
            <Check size={16} />
          </Button>
        </form>
      </section>
      <section className="panel settings-section spaced">
        <div>
          <h2>Đổi mật khẩu</h2>
          <p>Tối thiểu 8 ký tự. Các phiên khác sẽ được đăng xuất.</p>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            try {
              await post('/profile/password', { currentPassword, password });
              setCurrentPassword('');
              setPassword('');
              notify('Đã đổi mật khẩu.');
            } catch (error) {
              notify((error as Error).message);
            } finally {
              setBusy(false);
            }
          }}
        >
          <label>
            Mật khẩu hiện tại
            <input
              type="password"
              required
              value={currentPassword}
              autoComplete="current-password"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </label>
          <label>
            Mật khẩu mới
            <input
              type="password"
              required
              minLength={8}
              maxLength={128}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button variant="secondary" disabled={busy} type="submit">
            Cập nhật mật khẩu
          </Button>
        </form>
      </section>
      <section className="panel settings-section spaced">
        <div>
          <h2>Quản lý Dữ liệu Học tập</h2>
          <p>Quản lý và sao lưu dữ liệu tiến trình học tập của bạn.</p>
        </div>
        <div className="privacy-actions-list">
          <div className="privacy-action-card">
            <div>
              <strong>Tải về bản sao dữ liệu cá nhân</strong>
              <p>Trích xuất toàn bộ hồ sơ, thẻ từ vựng và lịch sử học tập dạng tệp JSON.</p>
            </div>
            <Button
              variant="secondary"
              disabled={busy || exportBusy}
              onClick={() => void handleExport()}
              type="button"
            >
              <Download size={16} />
              {exportBusy ? 'Đang xuất tệp…' : 'Tải tệp .JSON'}
            </Button>
          </div>

          <div className="privacy-action-card danger">
            <div>
              <strong>Xóa tài khoản & dữ liệu</strong>
              <p>Xóa tài khoản, các bộ thẻ và kết quả học tập khỏi hệ thống.</p>
            </div>
            <Button
              variant="secondary"
              className="button-danger-outline"
              disabled={busy || deleteBusy}
              onClick={() => setShowDeleteModal(true)}
              type="button"
            >
              <Trash2 size={16} />
              Yêu cầu xóa tài khoản
            </Button>
          </div>
        </div>
      </section>

      <Dialog.Root open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content delete-account-dialog">
            <div className="dialog-danger-icon">
              <AlertTriangle size={28} />
            </div>
            <Dialog.Title className="dialog-title">Xác nhận xóa vĩnh viễn tài khoản</Dialog.Title>
            <p className="delete-dialog-desc">
              Căn cứ <strong>Điều 16 Nghị định 13/2023/NĐ-CP</strong> về quyền xóa dữ liệu cá nhân: Toàn bộ hồ sơ cá nhân, các bộ thẻ từ vựng do bạn tạo, tiến độ ôn tập SRS, điểm thi thử JLPT và lịch sử tra từ sẽ bị xóa hoàn toàn khỏi cơ sở dữ liệu.
            </p>
            <p className="delete-dialog-alert">
              <strong>Hành động này KHÔNG THỂ hoàn tác.</strong>
            </p>
            <label className="delete-confirm-label">
              Để xác nhận, vui lòng nhập chữ <strong>XÓA TÀI KHOẢN</strong> vào ô bên dưới:
              <input
                value={deleteConfirmationText}
                onChange={(e) => setDeleteConfirmationText(e.target.value)}
                placeholder="XÓA TÀI KHOẢN"
              />
            </label>
            <div className="dialog-actions">
              <Button variant="ghost" onClick={() => setShowDeleteModal(false)} disabled={deleteBusy}>
                Hủy bỏ
              </Button>
              <Button
                variant="primary"
                className="button-danger"
                disabled={deleteConfirmationText.trim().toUpperCase() !== 'XÓA TÀI KHOẢN' || deleteBusy}
                onClick={() => void handleDeleteAccount()}
              >
                {deleteBusy ? 'Đang xóa dữ liệu…' : 'Tôi hiểu, hãy xóa vĩnh viễn'}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <AnnotationSettings />
    </>
  );
}
