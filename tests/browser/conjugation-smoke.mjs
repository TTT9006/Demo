import { chromium } from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';

const base = fs.readFileSync('.share/url.txt', 'utf8').trim();
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const cases = [['ikimasu', '行く'], ['tabemashita', '食べる'], ['benkyoushimashita', '勉強'], ['食べさせられませんでした', '食べる']];
const checks = [];
try {
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(base + '/login');
  await page.getByRole('button', { name: 'Dùng tài khoản mẫu' }).click();
  await page.waitForURL('**/dashboard');
  assert.equal((await page.request.get(base + '/api/auth/me')).status(), 200);
  for (const [query, expected] of cases) {
    const response = await page.request.get(base + '/api/dictionary/search?q=' + encodeURIComponent(query));
    assert.equal(response.status(), 200);
    const body = await response.json();
    const entry = body.items.find(e => [...e.kanji, ...e.readings].some(f => f.text === expected));
    assert.ok(entry, query + ' must find ' + expected);
    assert.ok(entry.inflection?.steps?.length, query + ' must explain its inflection');
    await page.goto(base + '/dictionary?q=' + encodeURIComponent(query));
    await page.getByRole('link', { name: expected, exact: true }).first().waitFor();
    const card = page.locator('.word-card').filter({ has: page.getByRole('link', { name: expected, exact: true }) }).first();
    const explanation = await card.locator('..').innerText();
    assert.ok(explanation.includes('Dạng gốc:'));
    checks.push({ query, expected, id: entry.id, inflection: entry.inflection, api: 'pass', ui: 'pass' });
  }
  assert.deepEqual(errors, []);
  await page.request.post(base + '/api/auth/logout');
  fs.mkdirSync('test-results/handoff', { recursive: true });
  const result = { checkedAt: new Date().toISOString(), base, login: 'pass', checks, errors };
  fs.writeFileSync('test-results/handoff/conjugation-smoke.json', JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally {
  await browser.close();
}
