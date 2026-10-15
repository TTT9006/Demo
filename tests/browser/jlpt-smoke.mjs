import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const directory = path.resolve('test-results/jlpt');
mkdirSync(directory, { recursive: true });
const database = path.join(directory, `browser-${Date.now()}.db`);
const sqlite = new DatabaseSync(database);
for (const name of readdirSync('prisma/migrations')
  .filter((n) => /^\d/.test(n))
  .sort())
  sqlite.exec(readFileSync(`prisma/migrations/${name}/migration.sql`, 'utf8'));
const port = 3014,
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
let logs = '',
  browser;
server.stdout.on('data', (b) => (logs += b));
server.stderr.on('data', (b) => (logs += b));
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
      /* startup */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  assert.ok(ready, logs);
  browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext();
  // Exercise the browser audio path deterministically. Device voice quality needs manual review.
  await context.addInitScript(() => {
    window.__spoken = [];
    window.SpeechSynthesisUtterance = class {
      constructor(text) {
        this.text = text;
      }
    };
    Object.defineProperty(window, 'speechSynthesis', {
      value: {
        getVoices: () => [{ lang: 'ja-JP', name: 'QA Japanese' }],
        cancel: () => {},
        speak: (u) => {
          window.__spoken.push(u.text);
          setTimeout(() => u.onend?.(), 20);
        },
      },
    });
  });
  const page = await context.newPage(),
    errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const registered = await context.request.post(base + '/api/auth/register', {
    data: { name: 'JLPT QA', email: 'jlpt-browser@example.com', password: 'JLPT-Test-2026!' },
  });
  assert.equal(registered.status(), 201);
  const get = (route) =>
    page.evaluate(async (route) => {
      const res = await fetch(route);
      if (!res.ok) throw Error(`HTTP ${res.status}`);
      return res.json();
    }, route);
  const finish = async () => {
    await page.getByRole('button', { name: 'Kết thúc phần này', exact: true }).click();
    await page.getByRole('button', { name: 'Xác nhận kết thúc', exact: true }).click();
    await page.locator('.jlpt-intro').waitFor();
  };
  const layout = async (label) => {
    for (const width of [320, 390, 1440])
      for (const theme of ['light', 'dark']) {
        await page.setViewportSize({ width, height: 900 });
        await page.evaluate((theme) => (document.documentElement.dataset.theme = theme), theme);
        assert.equal(
          await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1),
          false,
          `${label}/${width}/${theme}`,
        );
        const over = await page.locator('.answer-options button').evaluateAll((buttons) =>
          buttons.flatMap((b) => {
            const r = b.getBoundingClientRect();
            return [...b.querySelectorAll('span')]
              .filter((s) => {
                const t = s.getBoundingClientRect();
                return (
                  t.width &&
                  t.height &&
                  (t.right > r.right + 1 || t.bottom > r.bottom + 1 || t.left < r.left - 1)
                );
              })
              .map((s) => s.textContent);
          }),
        );
        assert.deepEqual(over, [], `${label}: answer overflow`);
        checks.push(`${label}/${width}/${theme}`);
      }
    await page.screenshot({ path: path.join(directory, label + '.png'), fullPage: true });
  };
  await page.goto(base + '/tests');
  await page.locator('.test-card').first().waitFor();
  assert.equal(await page.locator('.test-card').count(), 4);
  await layout('catalog');
  for (const level of ['N5', 'N4', 'N3', 'N2']) {
    const id = `jlpt-${level.toLowerCase()}-01`;
    await page.goto(base + '/tests/' + id);
    await page.getByRole('button', { name: 'Thử giọng Nhật', exact: true }).click();
    await page.getByRole('button', { name: 'Bắt đầu phần 1', exact: true }).click();
    await page.locator('.jlpt-question').waitFor();
    assert.equal(await page.locator('ruby').count(), 0);
    await page.locator('.answer-options button').first().click();
    await page.locator('.answer-options button.selected').waitFor();
    let run = (await get('/api/jlpt/papers/' + id)).run;
    const saved = run.answers[run.questions[0].id],
      deadline = run.deadline;
    await page.reload();
    await page.locator('.answer-options button.selected').waitFor();
    run = (await get('/api/jlpt/papers/' + id)).run;
    assert.equal(run.answers[run.questions[0].id], saved);
    assert.equal(run.deadline, deadline);
    await layout(level + '-vocabulary');
    if (level !== 'N2') {
      if (level === 'N5') {
        // Simulate time passing while closed, only in this run's isolated database.
        const row = sqlite.prepare('SELECT questions FROM TestRun WHERE id=?').get(run.runId);
        const state = JSON.parse(row.questions);
        state.sectionStarted = Date.now() - 21 * 60_000;
        sqlite
          .prepare('UPDATE TestRun SET questions=? WHERE id=?')
          .run(JSON.stringify(state), run.runId);
        await page.reload();
        await page.getByRole('button', { name: 'Bắt đầu phần 2', exact: true }).waitFor();
      } else await finish();
      await page.getByRole('button', { name: 'Bắt đầu phần 2', exact: true }).click();
      await page.locator('.jlpt-question').waitFor();
      run = (await get('/api/jlpt/papers/' + id)).run;
    }
    const readingIndex = run.questions.findIndex((q) => q.category === 'reading');
    assert.ok(readingIndex >= 0);
    await page.getByRole('button', { name: `Câu ${readingIndex + 1}`, exact: true }).click();
    await page.locator('.jlpt-passage').waitFor();
    await layout(level + '-reading');
    await finish();
    await page
      .getByRole('button', { name: `Bắt đầu phần ${level === 'N2' ? 2 : 3}`, exact: true })
      .click();
    await page.getByRole('button', { name: 'Nghe câu này', exact: true }).waitFor();
    run = (await get('/api/jlpt/papers/' + id)).run;
    assert.ok(run.questions.every((q) => q.transcript === undefined && q.answer === undefined));
    await page.getByRole('button', { name: 'Nghe câu này', exact: true }).click();
    await page.waitForFunction(() => window.__spoken.some((t) => t.includes('二人')));
    assert.equal(
      await page
        .locator('.jlpt-question')
        .innerText()
        .then((t) => t.includes('資料はもう印刷しました')),
      false,
    );
    await layout(level + '-listening');
    await finish();
    await page.getByText('Đã hoàn thành bài thi', { exact: true }).waitFor();
    assert.equal(
      await page.locator('.jlpt-result').count(),
      { N5: 71, N4: 86, N3: 102, N2: 107 }[level],
    );
    await page.locator('.jlpt-result').last().locator('summary').click();
    await layout(level + '-result');
    await page.reload(); // Result remains accessible through history after leaving a completed run.
    const history = await get('/api/tests/history');
    assert.equal(history.filter((a) => a.testId === id).length, 1);
  }
  await page.goto(base + '/tests');
  await page.locator('.history-attempt').first().click();
  await page.getByRole('dialog').waitFor();
  assert.ok((await page.getByRole('dialog').locator('.jlpt-passage').count()) > 0);
  assert.deepEqual(errors, []);
  writeFileSync(
    path.join(directory, 'checks.json'),
    JSON.stringify(
      { checks, errors, audio: 'Mocked Japanese browser voice; no acoustic quality validation.' },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ layoutChecks: checks.length, flows: 4, errors, database }));
} finally {
  sqlite.close();
  await browser?.close();
  server.kill();
}
