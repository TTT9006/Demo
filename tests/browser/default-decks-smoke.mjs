import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const base = process.env.DEFAULT_DECKS_TEST_URL || 'http://127.0.0.1:5173';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
let originalMode;
fs.mkdirSync('test-results/default-decks', { recursive: true });
try {
  assert.equal((await context.request.post(base + '/api/auth/demo')).status(), 200);
  originalMode = (await (await context.request.get(base + '/api/auth/me')).json()).annotationMode;
  const decks = await (await context.request.get(base + '/api/flashcards/decks')).json();
  assert.equal(decks.find((d) => d.name === 'Hiragana').cards.length, 104);
  assert.equal(decks.find((d) => d.name === 'Katakana').cards.length, 104);
  const nature = decks.find((d) => d.name === 'Kanji · Thiên nhiên');
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const mode of ['japanese', 'romanized']) {
      assert.equal((await context.request.patch(base + '/api/profile', { data: { annotationMode: mode } })).status(), 200);
      await page.goto(base + '/flashcards/' + nature.id);
      await page.locator('.card-list-row ruby rt').first().waitFor();
      const annotation = await page.locator('.card-list-row ruby rt').first().textContent();
      assert.match(annotation, mode === 'romanized' ? /^[a-z]+$/ : /^[\p{Script=Hiragana}ー]+$/u);
      assert.ok((await page.locator('.card-list').textContent()).includes('Bộ thủ:'));
      for (const dark of [false, true]) {
        await page.evaluate((dark) => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; }, dark);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
        await page.screenshot({ path: `test-results/default-decks/${width}-${mode}-${dark ? 'dark' : 'light'}.png`, fullPage: true });
      }
      await page.goto(base + '/flashcards/review?deck=' + nature.id);
      await page.getByRole('button', { name: 'Lật thẻ' }).waitFor();
      assert.equal(await page.locator('.review-card ruby').count(), 0);
      assert.equal(await page.locator('.review-card').textContent().then((s) => s.includes('Bộ thủ:')), false);
      await page.getByRole('button', { name: 'Lật thẻ' }).click();
      await page.locator('.review-card ruby rt').waitFor();
      assert.ok((await page.locator('.review-card').textContent()).includes('Bộ thủ:'));
    }
  }
  assert.deepEqual(errors, []);
  console.log('PASS: default decks, two annotation modes, hidden answers, mobile/desktop, light/dark.');
} finally {
  if (originalMode) await context.request.patch(base + '/api/profile', { data: { annotationMode: originalMode } });
  await browser.close();
}
