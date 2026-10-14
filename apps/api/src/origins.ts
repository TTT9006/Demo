export function allowedOrigin(origin: string, env = process.env) {
  const configured = (env.APP_ORIGINS || 'http://127.0.0.1:5173,http://localhost:5173,http://127.0.0.1:3001,http://localhost:3001')
    .split(',').map(value => value.trim());
  if (configured.includes(origin)) return true;
  // Vite chooses another port when one is occupied. Only local development
  // accepts loopback origins on dynamic ports; shared/production stays explicit.
  if (env.NODE_ENV === 'production' || env.TRUST_PROXY_LOOPBACK === '1') return false;
  try {
    const url = new URL(origin);
    return url.origin === origin && url.protocol === 'http:' &&
      ['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname);
  } catch { return false; }
}
