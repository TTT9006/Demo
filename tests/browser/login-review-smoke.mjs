import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const directory = path.resolve('test-results/login-review');
mkdirSync(directory, { recursive: true });
const database = path.join(directory, `qa-${Date.now()}.db`),
  sqlite = new DatabaseSync(database);
for (const name of readdirSync('prisma/migrations')
  .filter((n) => /^\d/.test(n))
  .sort())
  sqlite.exec(readFileSync(`prisma/migrations/${name}/migration.sql`, 'utf8'));
const base = 'http://127.0.0.1:3015';
const server = spawn(process.execPath, ['dist-api/server.js'], {
  windowsHide: true,
  env: {
    ...process.env,
    DATABASE_URL: 'file:' + database.replaceAll('\\', '/'),
    PORT: '3015',
    NODE_ENV: 'production',
    APP_ORIGINS: base,
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let logs = '',
  browser;
server.stdout.on('data', (b) => (logs += b));
server.stderr.on('data', (b) => (logs += b));
try {
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw Error(logs);
    try {
      if ((await fetch(base + '/api/health')).ok) break;
    } catch {
      /* startup */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext(),
    page = await context.newPage(),
    errors = [],
    checks = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const result = await context.request.post(base + '/api/auth/register', {
    data: {
      name: 'Người học có tên dài để kiểm tra bố cục giao diện',
      email: 'gate@example.com',
      password: 'Test-password-2026!',
    },
  });
  assert.equal(result.status(), 201);
  const user = await result.json();
  await page.goto(base + '/dashboard');
  await page.locator('.sidebar').waitFor();
  // Prepare only this isolated learner's formerly studied cards before their first page load.
  const decks = sqlite
    .prepare(
      'SELECT id FROM Deck WHERE userId=? AND EXISTS (SELECT 1 FROM Card WHERE Card.deckId=Deck.id) ORDER BY id LIMIT 5',
    )
    .all(user.id);
  assert.equal(decks.length, 5);
  for (const [i, d] of decks.entries()) {
    sqlite
      .prepare('UPDATE Deck SET name=? WHERE id=?')
      .run('Bộ chữ tiếng Nhật ' + i + ' ' + 'TênRấtDài'.repeat(10), d.id);
    const card = sqlite.prepare('SELECT id FROM Card WHERE deckId=? LIMIT 1').get(d.id);
    sqlite
      .prepare('UPDATE Card SET due=?,lastReviewed=?,meaning=? WHERE id=?')
      .run(
        Date.now() - (5 - i) * 86400000,
        Date.now() - 10 * 86400000,
        'Nghĩa tiếng Việt rất dài để kiểm tra cách ngắt dòng. '.repeat(8),
        card.id,
      );
  }
  sqlite.prepare('UPDATE Session SET reviewReady=false WHERE userId=?').run(user.id);
  async function layout(label) {
    for (const width of [320, 390, 768, 1440])
      for (const theme of ['light', 'dark']) {
        await page.setViewportSize({ width, height: 900 });
        await page.evaluate((t) => (document.documentElement.dataset.theme = t), theme);
        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
          false,
          `${label}/${width}/${theme}`,
        );
        const overflow = await page
          .locator('.login-review-content button')
          .evaluateAll((buttons) =>
            buttons.filter((b) => b.scrollWidth > b.clientWidth + 2).map((b) => b.textContent),
          );
        assert.deepEqual(overflow, []);
        checks.push(`${label}/${width}/${theme}`);
        if (width === 390)
          await page.screenshot({
            path: path.join(directory, `${label}-${theme}.png`),
            fullPage: true,
          });
      }
  }
  await page.goto(base + '/dashboard');
  await page.getByText('Bạn muốn ôn bao nhiêu bộ?').waitFor();
  assert.equal(await page.locator('.sidebar').count(), 0);
  for (const n of [1, 3, 5]) {
    await page.getByRole('button', { name: `${n} bộ`, exact: true }).click();
    assert.equal(await page.locator('.login-review-decks article').count(), n);
  }
  await page.getByRole('button', { name: '3 bộ', exact: true }).click();
  await layout('choose');
  await page.getByRole('button', { name: 'Bắt đầu ôn 3 bộ', exact: true }).click();
  await page.getByRole('button', { name: 'Lật thẻ', exact: true }).waitFor();
  await layout('question');
  await page.getByRole('button', { name: 'Lật thẻ', exact: true }).click();
  await layout('answer');
  await page.getByRole('button', { name: 'Nhớ Điều chỉnh lịch ôn', exact: true }).click();
  await page.getByText('1/3 thẻ đã hoàn thành', { exact: true }).waitFor();
  await page.reload();
  await page.getByText('1/3 thẻ đã hoàn thành', { exact: true }).waitFor();
  await page.goto(base + '/dictionary');
  await page.getByText('1/3 thẻ đã hoàn thành', { exact: true }).waitFor();
  for (let i = 0; i < 2; i++) {
    await page.getByRole('button', { name: 'Lật thẻ', exact: true }).click();
    await page.getByRole('button', { name: 'Nhớ Điều chỉnh lịch ôn', exact: true }).click();
  }
  await page.getByRole('button', { name: 'Vào góc học tập', exact: true }).waitFor();
  await layout('complete');
  await page.getByRole('button', { name: 'Vào góc học tập', exact: true }).click();
  await page.locator('.sidebar').waitFor();
  await page.reload();
  await page.locator('.sidebar').waitFor();
  assert.equal(sqlite.prepare('SELECT COUNT(*) AS n FROM Review WHERE userId=?').get(user.id).n, 3);
  assert.deepEqual(errors, []);
  writeFileSync(path.join(directory, 'checks.json'), JSON.stringify({ checks, errors }, null, 2));
  console.log(JSON.stringify({ checks: checks.length, errors }));
} finally {
  sqlite.close();
  await browser?.close();
  server.kill();
}
