import { useState } from 'react';
import { Brand } from '../components/brand';
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { post } from '../services/api';
import { Button } from '../components/ui';

const schema = z.object({
  email: z.email('Email chưa hợp lệ'),
  password: z.string().min(8, 'Mật khẩu cần ít nhất 8 ký tự'),
  name: z.string().optional(),
});

export function AuthPage({ register = false }: { register?: boolean }) {
  const navigate = useNavigate();
  const client = useQueryClient();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register: field,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

  const submit = async (data: unknown, demo = false) => {
    setBusy(true);
    setError('');
    try {
      const user = await post(
        demo ? '/auth/demo' : register ? '/auth/register' : '/auth/login',
        data,
      );
      client.clear();
      client.setQueryData(['user'], user);
      navigate('/dashboard');
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const handleFormSubmit = (data: z.infer<typeof schema>) => {
    void submit(data);
  };

  return (
    <div className="auth-page">
      <section className="auth-art">
        <Link to="/" className="brand">
          <Brand />
        </Link>
        <div>
          <span className="eyebrow">MỘT HÀNH TRÌNH, TỪNG NGÀY</span>
          <h1>
            Mỗi ngày,
            <br />
            một chút
            <br />
            <em>tiếng Nhật.</em>
          </h1>
          <p>
            Giữ sự tò mò. Nuôi thói quen nhỏ.
            <br />
            Khám phá một thế giới qua ngôn ngữ.
          </p>
          <div className="auth-curriculum-badge">
            <span className="badge-check">✓</span>
            <span>Hệ thống từ vựng & ngữ pháp được tổng hợp bám sát JLPT: <strong>Minna no Nihongo, Shinkanzen Master & Soumatome</strong>.</span>
          </div>
        </div>
        <span className="auth-japanese" lang="ja">
          若葉
        </span>
        <small>Lá non · Học từng chút, lớn mỗi ngày.</small>
      </section>

      <section className="auth-form">
        <div>
          <span className="eyebrow">CHÀO MỪNG ĐẾN GÓC HỌC TẬP</span>
          <h2>{register ? 'Bắt đầu hành trình' : 'Rất vui được gặp lại bạn'}</h2>
          <p>
            {register
              ? 'Tạo tài khoản để lưu tiến bộ mỗi ngày.'
              : 'Tiếp tục từ nơi bạn đã dừng lại.'}
          </p>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {register && (
              <label>
                Tên của bạn
                <input {...field('name')} required maxLength={60} autoComplete="name" />
              </label>
            )}
            <label>
              Email
              <input
                {...field('email')}
                type="email"
                autoComplete="email"
                placeholder="ban@example.com"
              />
              {errors.email && <small className="error-text">{errors.email.message}</small>}
            </label>
            <label>
              Mật khẩu
              <div className="password-input-wrap">
                <input
                  {...field('password')}
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={register ? 'new-password' : 'current-password'}
                  placeholder="Ít nhất 8 ký tự"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <small className="error-text">{errors.password.message}</small>}
            </label>
            {error && (
              <p className="error-text" role="alert">
                {error}
              </p>
            )}
            <Button disabled={busy} type="submit">
              {busy ? 'Đang xử lý…' : register ? 'Tạo tài khoản' : 'Đăng nhập'}
              <ArrowRight size={17} />
            </Button>
          </form>

          <div className="or">
            <span>hoặc khám phá trước</span>
          </div>
          <Button variant="secondary" disabled={busy} onClick={() => void submit({}, true)}>
            Dùng tài khoản mẫu
            <ArrowRight size={17} />
          </Button>

          <p className="auth-switch">
            {register ? 'Đã có tài khoản?' : 'Lần đầu ghé thăm?'}{' '}
            <Link to={register ? '/login' : '/register'}>
              {register ? 'Đăng nhập' : 'Tạo tài khoản'}
            </Link>
          </p>

          <div className="auth-trust-banner">
            <span className="badge-check">✓</span>
            <span>Chuẩn kiến thức JLPT: Bám sát <strong>Minna no Nihongo</strong>, <strong>Shinkanzen Master</strong> & <strong>Soumatome</strong>.</span>
          </div>

          <small className="muted">
            Tài khoản mẫu dùng chung trên website này. Đăng ký riêng để lưu tiến độ của bạn.
          </small>
        </div>
      </section>
    </div>
  );
}
