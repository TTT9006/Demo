import { chromium } from '@playwright/test';
import { DatabaseSync } from 'node:sqlite';
import { spawn } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { verifySharedLogin } from '../../scripts/lib/share-readiness.ts';

const directory = path.resolve('test-results/shared-accounts');
mkdirSync(directory, { recursive: true });
const filename = path.join(directory, `accounts-${Date.now()}.db`);
const db = new DatabaseSync(filename);
for (const name of readdirSync('prisma/migrations').filter(n => /^\d/.test(n)).sort()) db.exec(readFileSync(`prisma/migrations/${name}/migration.sql`, 'utf8'));
db.close();
const servers = [], logs = [];
let browser;
try {
  for (const port of [3012, 3013]) {
    const server = spawn(process.execPath, ['dist-api/server.js'], { windowsHide: true, env: {
      ...process.env, DATABASE_URL: 'file:' + filename.replaceAll('\\', '/'), PORT: String(port), NODE_ENV: 'production', APP_ORIGINS: `http://127.0.0.1:${port}`,
    }, stdio: ['ignore', 'pipe', 'pipe'] });
    servers.push(server);
    server.stdout.on('data', b => logs.push(String(b))); server.stderr.on('data', b => logs.push(String(b)));
    let healthy = false;
    for (let i = 0; i < 80; i++) {
      if (server.exitCode !== null) throw new Error(logs.join(''));
      try { healthy = (await fetch(`http://127.0.0.1:${port}/api/health`)).ok; } catch { /* starting */ }
      if (healthy) break;
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    assert.ok(healthy);
    await verifySharedLogin(`http://127.0.0.1:${port}`);
  }
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const desktopContext = await browser.newContext();
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const desktop = await desktopContext.newPage(), mobile = await mobileContext.newPage();
  await desktop.goto('http://127.0.0.1:3012/login');
  await mobile.goto('http://127.0.0.1:3013/login');
  const call = (page, url, data, method = 'POST') => page.evaluate(async ({ url, data, method }) => {
    const response = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, ...(data ? { body: JSON.stringify(data) } : {}) });
    return { status: response.status, body: await response.json() };
  }, { url, data, method });
  const credentials = { email: 'shared-account@example.com', password: 'shared-account-test' };
  const registered = await call(desktop, '/api/auth/register', { ...credentials, name: 'Desktop learner' });
  assert.equal(registered.status, 201);
  const logged = await call(mobile, '/api/auth/login', credentials);
  assert.equal(logged.status, 200);
  assert.equal(logged.body.id, registered.body.id);
  assert.equal((await call(mobile, '/api/grammar/mnn-01/progress', { completed: true })).status, 200);
  const progress = await call(desktop, '/api/grammar/mnn-01', undefined, 'GET');
  assert.equal(progress.body.progress[0].completed, true);
  assert.equal((await call(desktop, '/api/profile', { name: 'Shared learner' }, 'PATCH')).status, 200);
  assert.equal((await call(mobile, '/api/auth/me', undefined, 'GET')).body.name, 'Shared learner');
  await mobile.reload();
  assert.equal((await call(mobile, '/api/auth/me', undefined, 'GET')).status, 200);
  const other = await call(mobile, '/api/auth/register', { email: 'mobile-new@example.com', password: 'mobile-new-password', name: 'Mobile new' });
  assert.equal(other.status, 201);
  const otherLogin = await call(desktop, '/api/auth/login', { email: 'mobile-new@example.com', password: 'mobile-new-password' });
  assert.equal(otherLogin.body.id, other.body.id);
  assert.equal((await call(desktop, '/api/grammar/mnn-01', undefined, 'GET')).body.progress.length, 0);
  console.log('PASS: independent desktop/mobile sessions on two servers share registration, login and progress; accounts remain isolated.');
} finally {
  if (browser) await browser.close();
  for (const server of servers) server.kill();
  writeFileSync(path.join(directory, 'server.log'), logs.join(''));
}
