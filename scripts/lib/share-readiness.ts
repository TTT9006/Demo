import { randomUUID } from 'node:crypto';

// Exercise the real login route through the new HTTPS origin without creating
// a user/session or needing anyone's password. A missing account must yield 401,
// not an origin rejection, database error, or a tunnel error page.
export async function verifySharedLogin(url: string) {
  const response = await fetch(new URL('/api/auth/login', url), {
    method: 'POST',
    headers: { Origin: new URL(url).origin, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: `connection-${randomUUID()}@example.invalid`, password: randomUUID() }),
    signal: AbortSignal.timeout(5000),
  });
  const body = await response.json().catch(() => null) as { error?: string } | null;
  if (response.status !== 401 || body?.error !== 'Email hoặc mật khẩu chưa đúng.') {
    throw new Error(`Link chưa đăng nhập được (HTTP ${response.status}).`);
  }
}
