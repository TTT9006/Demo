import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
const base = process.env.LAYOUT_URL || 'http://127.0.0.1:5173';
mkdirSync('test-results/answer-layout', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage();
const checks = [], errors = [];
let mode = 'japanese';
page.on('pageerror', error => errors.push(error.message));
// Override only this browser's response; never change the account preference.
await page.route('**/api/auth/me', async route => {
  const response = await route.fetch();
  const user = await response.json();
  await route.fulfill({ response, json: { ...user, annotationMode: mode } });
});
async function assertAnswersFit() {
  const issues = await page.locator('.answer-options button').evaluateAll(buttons => buttons.flatMap(button => {
    const outer = button.getBoundingClientRect();
    const text = button.querySelector('.japanese-annotated');
    const key = button.querySelector('.answer-key');
    const problems = [];
    if (text.getBoundingClientRect().width <= key.getBoundingClientRect().width) problems.push('Answer collapsed to badge width');
    const walker = document.createTreeWalker(text, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.textContent.trim() || node.parentElement.tagName === 'RP') continue;
      const range = document.createRange(); range.selectNodeContents(node);
      for (const box of range.getClientRects()) {
        if (box.left < outer.left - 1 || box.right > outer.right + 1 || box.top < outer.top - 1 || box.bottom > outer.bottom + 1) problems.push('Text/ruby outside answer button');
      }
    }
    return problems;
  }));
  assert.deepEqual(issues, []);
}
try {
  await page.goto(base + '/login');
  await page.getByRole('button', { name: 'Dùng tài khoản mẫu' }).click();
  await page.waitForURL('**/dashboard');
  for (mode of ['japanese', 'romanized']) for (const width of [320, 390, 768, 1440, 2031]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base + '/grammar/janai');
    await page.locator('.answer-options ruby rt').first().waitFor();
    const reading = await page.locator('.answer-options ruby rt').first().textContent();
    assert.match(reading, mode === 'japanese' ? /\p{Script=Hiragana}/u : /[a-z]/i);
    for (const theme of ['light', 'dark']) {
      await page.evaluate(theme => { document.documentElement.dataset.theme = theme; }, theme);
      await page.waitForTimeout(180);
      await assertAnswersFit();
      await page.locator('.answer-options button').first().click();
      await assertAnswersFit();
      assert.equal(await page.locator('.answer-options button.selected').count(), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
      checks.push({ mode, width, theme, passed: true });
      if ([390, 1440].includes(width)) await page.locator('.exercise').first().screenshot({ path: `test-results/answer-layout/${mode}-${width}-${theme}.png` });
    }
  }
  assert.deepEqual(errors, []);
  console.log(`PASS: ${checks.length} annotated answer layouts; glyphs and ruby stay within buttons, including selected state.`);
} finally {
  await page.evaluate(() => fetch('/api/auth/logout', { method: 'POST' })).catch(() => {});
  await browser.close();
  writeFileSync('test-results/answer-layout/results.json', JSON.stringify({ checks, errors }, null, 2));
}
