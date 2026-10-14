import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const directory = path.resolve('test-results/grammar');
mkdirSync(directory, { recursive: true });
// A new, isolated database for every run. Never use the local/trial learner DBs.
const database = path.join(directory, `browser-${Date.now()}.db`);
const sqlite = new DatabaseSync(database);
for (const name of readdirSync('prisma/migrations')
  .filter((n) => /^\d/.test(n))
  .sort()) {
  sqlite.exec(readFileSync(`prisma/migrations/${name}/migration.sql`, 'utf8'));
}
sqlite.close();
const port = 3012,
  base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ['dist-api/server.js'], {
  windowsHide: true,
  env: {
    ...process.env,
    DATABASE_URL: 'file:' + database.replaceAll('\\', '/'),
    PORT: String(port),
    NODE_ENV: 'production',
    APP_ORIGINS: base,
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let logs = '';
server.stdout.on('data', (b) => {
  logs += b;
});
server.stderr.on('data', (b) => {
  logs += b;
});
let browser;
const checks = [];
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw Error(logs);
    try {
      if ((await fetch(base + '/api/health')).ok) {
        ready = true;
        break;
      }
    } catch {
      /* wait for startup */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  assert.ok(ready, logs);
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  const browserJson = (route, init = {}) =>
    page.evaluate(
      async ({ route, init }) => {
        const response = await fetch(route, { credentials: 'same-origin', ...init });
        const json = await response.json();
        if (!response.ok) throw new Error(JSON.stringify({ status: response.status, json }));
        return json;
      },
      { route, init },
    );
  page.on('pageerror', (e) => errors.push(e.message));
  const registered = await context.request.post(base + '/api/auth/register', {
    data: {
      name: 'Grammar QA',
      email: 'grammar-browser@example.com',
      password: 'Grammar-Test-2026!',
    },
  });
  assert.equal(registered.status(), 201);
  const user = await registered.json();
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const level of ['N5', 'N4', 'N3', 'N2']) {
      await page.goto(base + '/grammar?level=' + level);
      await page.locator('.grammar-card').first().waitFor();
      assert.equal(
        await page.locator('.grammar-stage[aria-pressed=true] strong').textContent(),
        level,
      );
      for (const dark of [false, true]) {
        await page.evaluate((dark) => {
          document.documentElement.dataset.theme = dark ? 'dark' : 'light';
        }, dark);
        await page.waitForTimeout(200); // Allow theme color transitions to finish before capturing.
        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
          false,
          `${width}/${level}/${dark}`,
        );
        await page.screenshot({
          path: path.join(directory, `${width}-${level}-${dark ? 'dark' : 'light'}.png`),
          fullPage: true,
        });
        checks.push({ width, level, dark, overflow: false });
      }
    }
  }
  await page.goto(base + '/grammar?level=N4');
  await page.getByRole('textbox', { name: 'Tìm bài ngữ pháp' }).fill('bài 31');
  await page.locator('.grammar-card').filter({ hasText: 'Ý định và kế hoạch' }).click();
  await page
    .locator('.exercise')
    .first()
    .getByRole('textbox', { name: 'Câu trả lời' })
    .fill('wrong');
  await page
    .locator('.exercise')
    .first()
    .getByRole('button', { name: 'Kiểm tra câu trả lời' })
    .click();
  await page.locator('.feedback.incorrect').waitFor();
  assert.ok(
    await page
      .locator('.exercise')
      .first()
      .getByRole('button', { name: 'Đã lưu kết quả' })
      .isDisabled(),
  );
  await page.reload();
  await page.getByText('1 câu cần củng cố.', { exact: false }).waitFor();
  const dueBefore = await browserJson('/api/grammar/review?level=N4');
  assert.equal(dueBefore.total, 0);
  await page.goto(base + '/grammar/review?mode=mistakes&level=N4');
  await page.getByRole('textbox', { name: 'Câu trả lời' }).fill('つもり');
  // Switching preference must not discard the current answer or review position.
  const setting = await context.newPage();
  await setting.goto(base + '/settings');
  await setting.getByRole('radio', { name: 'Romanized — Romaji' }).check();
  await setting.locator('.annotation-preview rt').filter({ hasText: 'watashi' }).waitFor();
  await page.bringToFront();
  assert.equal(await page.getByRole('textbox', { name: 'Câu trả lời' }).inputValue(), 'つもり');
  await page.getByRole('button', { name: 'Kiểm tra câu trả lời' }).click();
  await page.locator('.feedback.correct').waitFor();
  await page.getByRole('button', { name: 'Xem kết quả lượt ôn' }).click();
  await page.getByText('Bạn trả lời đúng 1/1 câu.', { exact: false }).waitFor();
  const after = await browserJson('/api/grammar/review?mode=mistakes&level=N4');
  assert.equal(after.total, 0);
  const audit = new DatabaseSync(database);
  const progress = audit
    .prepare(
      'SELECT attempts, correctCount, interval FROM GrammarExerciseProgress WHERE userId = ? AND exerciseId = ?',
    )
    .get(user.id, 'mnn-31-fill');
  assert.deepEqual({ ...progress }, { attempts: 2, correctCount: 1, interval: 1 });
  audit
    .prepare('UPDATE GrammarExerciseProgress SET due = ? WHERE userId = ?')
    .run(Date.now() - 1000, user.id);
  audit.close();
  await page.goto(base + '/grammar/review?level=N4');
  await page.getByRole('textbox', { name: 'Câu trả lời' }).waitFor();
  assert.equal(await page.locator('.feedback').count(), 0);
  for (const mode of ['japanese', 'romanized']) {
    await browserJson('/api/profile', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ annotationMode: mode }),
    });
    await page.goto(base + '/grammar/mnn-22');
    await page.locator('.example ruby rt').first().waitFor();
    const reading = await page.locator('.example ruby rt').first().textContent();
    assert.match(reading, mode === 'japanese' ? /^[\p{Script=Hiragana}ー]+$/u : /^[a-z]+$/);
    await page.setViewportSize({ width: 390, height: 900 });
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
      false,
    );
    await page.screenshot({ path: path.join(directory, `lesson-${mode}.png`), fullPage: true });
  }
  assert.deepEqual(errors, []);
  console.log(
    'PASS: 16 layout checks, all levels, search, feedback, persistence, mistakes, due queue, annotation modes and answer preservation.',
  );
} finally {
  if (browser) await browser.close();
  server.kill();
  writeFileSync(path.join(directory, 'server.log'), logs);
  writeFileSync(path.join(directory, 'checks.json'), JSON.stringify(checks, null, 2));
}
