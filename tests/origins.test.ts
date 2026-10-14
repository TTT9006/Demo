import { describe, expect, it } from 'vitest';
import { allowedOrigin } from '../apps/api/src/origins';
describe('Development and public origins', () => {
  it('accepts changing loopback ports even with an older local environment file', () => {
    for (const origin of ['http://127.0.0.1:5175', 'http://localhost:5180', 'http://[::1]:5176']) {
      expect(allowedOrigin(origin, { NODE_ENV: 'development', APP_ORIGINS: 'http://localhost:5173' })).toBe(true);
    }
  });
  it('rejects arbitrary websites, misleading hosts and invalid origins', () => {
    for (const origin of ['null', 'http://localhost.evil.test:5175', 'http://127.0.0.1.evil.test', 'http://192.168.1.2:5175', 'http://user@localhost:5175', 'http://localhost:5175/path']) {
      expect(allowedOrigin(origin, { NODE_ENV: 'development' })).toBe(false);
    }
  });
  it('keeps production and tunnel origins restricted to the explicit list', () => {
    for (const mode of [{ NODE_ENV: 'production' }, { NODE_ENV: 'development', TRUST_PROXY_LOOPBACK: '1' }]) {
      const env = { ...mode, APP_ORIGINS: 'https://site.example, https://second.example' };
      expect(allowedOrigin('http://127.0.0.1:5175', env)).toBe(false);
      expect(allowedOrigin('https://site.example', env)).toBe(true);
      expect(allowedOrigin('https://second.example', env)).toBe(true);
      expect(allowedOrigin('https://other.example', env)).toBe(false);
    }
  });
});
