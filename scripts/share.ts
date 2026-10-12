import { spawn, type ChildProcess } from 'node:child_process';
import { DatabaseSync, backup } from 'node:sqlite';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import net from 'node:net';

const root = process.cwd();
const directory = path.resolve('.share');
const source = path.resolve('prisma/learning.db');
const destination = path.join(directory, 'trial.db');
const ready = path.join(directory, 'ready.json');
const connector = path.resolve('.tools/cloudflared.exe');
const port = 3010;
const children: ChildProcess[] = [];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) child.kill();
  process.exitCode = code;
}
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
process.on('exit', () => children.forEach(child => child.kill()));

async function runNode(args: string[], env: NodeJS.ProcessEnv) {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(process.execPath, args, { cwd: root, env, stdio: 'inherit', windowsHide: true });
    children.push(child);
    child.once('error', reject);
    child.once('exit', code => code === 0 ? resolve() : reject(new Error(`Preparation exited: ${code}`)));
  });
}

try {
  if (!existsSync(connector)) throw new Error('Thiếu .tools/cloudflared.exe. Xem docs/SHARING.md.');
  if (!existsSync(source)) throw new Error('Không tìm thấy prisma/learning.db.');
  await new Promise<void>((resolve, reject) => {
    const probe = net.createServer();
    probe.once('error', reject);
    probe.listen(port, '127.0.0.1', () => probe.close(() => resolve()));
  });
  mkdirSync(directory, { recursive: true });
  const env = {
    ...process.env,
    DATABASE_URL: 'file:' + destination.replace(/\\/g, '/'),
    NODE_ENV: 'production', PORT: String(port), TRUST_PROXY_LOOPBACK: '1',
    GEMINI_API_KEY: '', GEMINI_MODEL: '', TRANSLATION_BUDGET_ITEMS: '0',
  };
  if (!existsSync(ready)) {
    if (existsSync(destination)) throw new Error('Bản dùng thử chưa chuẩn bị xong. Giữ nguyên .share để kiểm tra trước khi chạy lại.');
    console.log('Đang tạo database dùng thử riêng, giữ toàn bộ từ điển…');
    const original = new DatabaseSync(source, { readOnly: true });
    try { await backup(original, destination); } finally { original.close(); }
    const trial = new DatabaseSync(destination);
    try {
      // This connection points only at the newly created trial copy.
      trial.exec('PRAGMA foreign_keys=ON; PRAGMA secure_delete=ON; DELETE FROM User; DELETE FROM TranslationJob;');
      for (const table of ['User', 'Session', 'Deck', 'Card', 'Review', 'GrammarProgress', 'Attempt', 'TestRun', 'SearchHistory', 'Writing']) {
        const row = trial.prepare(`SELECT count(*) AS count FROM "${table}"`).get();
        if (row?.count !== 0) throw new Error(`Dữ liệu cá nhân còn trong bản sao: ${table}`);
      }
    } finally { trial.close(); }
    await runNode(['node_modules/tsx/dist/cli.mjs', 'prisma/seed.ts'], env);
    const seeded = new DatabaseSync(destination);
    try {
      seeded.exec("UPDATE User SET role='user'; PRAGMA wal_checkpoint(TRUNCATE);");
      const users = seeded.prepare('SELECT email, role FROM User').all();
      if (users.length !== 1 || users[0].email !== 'demo@komorebi.local' || users[0].role !== 'user') {
        throw new Error('Không đạt kiểm tra tài khoản dùng thử.');
      }
      writeFileSync(ready, JSON.stringify({ createdAt: new Date().toISOString(), database: destination }, null, 2));
    } finally { seeded.close(); }
  }

  const tunnel = spawn(connector, ['tunnel', '--no-autoupdate', '--protocol', 'http2', '--url', `http://127.0.0.1:${port}`], {
    cwd: directory, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true,
  });
  children.push(tunnel);
  tunnel.once('error', error => { console.error(error.message); stop(1); });
  tunnel.once('exit', () => stop(stopping ? 0 : 1));
  const url = await new Promise<string>((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Không tạo được link sau 60 giây.')), 60_000);
    let logs = '';
    const read = (chunk: Buffer) => {
      const text = chunk.toString();
      process.stdout.write(text);
      logs = (logs + text).slice(-16000);
      const match = logs.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com\b/);
      if (match) { clearTimeout(timeout); resolve(match[0]); }
    };
    tunnel.stdout!.on('data', read);
    tunnel.stderr!.on('data', read);
    tunnel.once('error', error => { clearTimeout(timeout); reject(error); });
    tunnel.once('exit', () => { clearTimeout(timeout); reject(new Error('Cloudflare Tunnel đã dừng.')); });
  });
  const server = spawn(process.execPath, ['dist-api/server.js'], {
    cwd: root, env: { ...env, APP_ORIGINS: url }, stdio: 'inherit', windowsHide: true,
  });
  children.push(server);
  server.once('error', error => { console.error(error.message); stop(1); });
  server.once('exit', () => stop(stopping ? 0 : 1));
  let healthy = false;
  for (let attempt = 0; attempt < 60 && !stopping; attempt++) {
    try {
      healthy = (await fetch(`http://127.0.0.1:${port}/api/health`)).ok;
      if (healthy) break;
    } catch { /* Server is starting. */ }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  if (!healthy) throw new Error('Bản dùng thử chưa khởi động được.');
  writeFileSync(path.join(directory, 'url.txt'), url + '\n');
  console.log(`\nLINK DÙNG THỬ: ${url}\nGiữ máy bật và cửa sổ này mở. Nhấn Ctrl+C để dừng.\n`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  stop(1);
}
