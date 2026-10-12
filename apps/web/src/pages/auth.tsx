import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight } from 'lucide-react';
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
      client.setQueryData(['user'], user);
      navigate('/dashboard');
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="auth-page">
      <section className="auth-art">
        <Link to="/" className="brand">
          <span className="brand-mark">木</span>
          <span>komorebi</span>
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
        </div>
        <span className="auth-japanese" lang="ja">
          木漏れ日
        </span>
        <small>Ánh nắng xuyên qua kẽ lá.</small>
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
          <form onSubmit={handleSubmit((data) => submit(data))}>
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
              <input
                {...field('password')}
                type="password"
                autoComplete={register ? 'new-password' : 'current-password'}
                placeholder="Ít nhất 8 ký tự"
              />
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
          <small className="muted">
            Tài khoản mẫu dùng chung trên máy này, có sẵn lịch sử học minh họa.
          </small>
        </div>
      </section>
    </div>
  );
}
