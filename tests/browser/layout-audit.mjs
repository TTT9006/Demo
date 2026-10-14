import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const base = process.env.LAYOUT_URL || 'http://127.0.0.1:5173';
mkdirSync('test-results/layout', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [],
  errors = [];
const page = await browser.newPage();
page.on('pageerror', (error) => errors.push(error.message));
try {
  await page.goto(base + '/login');
  await page.getByRole('button', { name: 'Dùng tài khoản mẫu' }).click();
  await page.waitForURL('**/dashboard');
  const decks = await page.evaluate(async () => (await fetch('/api/flashcards/decks')).json());
  await page.goto(base + '/flashcards');
  await page.locator('.deck-card').first().waitFor();
  assert.ok(await page.locator('.deck-card').count() <= 12);
  if (decks.length > 12) {
    await page.getByRole('button', { name: 'Trang sau', exact: true }).click();
    await page.getByRole('navigation', { name: 'Phân trang bộ thẻ' }).getByText('2 /', { exact: false }).waitFor();
  }
  await page.getByRole('textbox', { name: 'Tìm bộ thẻ' }).fill('Hiragana');
  await page.locator('.deck-card').first().waitFor();
  for (const text of await page.locator('.deck-info h3').allTextContents()) assert.match(text, /hiragana/i);
  await page.getByRole('textbox', { name: 'Tìm bộ thẻ' }).fill('no-matching-deck-qa');
  await page.getByText('Không tìm thấy bộ thẻ', { exact: true }).waitFor();
  const routes = [
    '/dashboard',
    '/dictionary?q=ikimasu',
    '/flashcards',
    '/flashcards/' + decks[0].id,
    '/flashcards/review',
    '/grammar?level=N2',
    '/grammar/mnn-31',
    '/writing',
    '/tests',
    '/progress',
    '/profile',
    '/settings',
    '/assistant',
  ];
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(base + route);
      await page.locator('h1').first().waitFor();
      await page.waitForFunction(() => !document.querySelector('.loading-stack'));
      await page.waitForTimeout(250);
      for (const theme of ['light', 'dark']) {
        await page.evaluate((theme) => {
          document.documentElement.dataset.theme = theme;
        }, theme);
        await page.waitForTimeout(180);
        const findings = await page.evaluate(() => {
          const visible = (e) =>
            e.getClientRects().length && getComputedStyle(e).visibility !== 'hidden';
          const items = [
            ...document.querySelectorAll(
              'main h1,main h2,main h3,main p,main button,main a,main label,main .panel',
            ),
          ].filter(visible);
          return {
            pageOverflow: document.documentElement.scrollWidth > innerWidth + 1,
            issues: items
              .filter((e) => {
                const b = e.getBoundingClientRect();
                return (
                  b.right > innerWidth + 2 ||
                  b.left < -2 ||
                  (e.scrollWidth > e.clientWidth + 3 && getComputedStyle(e).overflowX !== 'auto')
                );
              })
              .map((e) => ({
                tag: e.tagName,
                cls: e.className,
                text: e.textContent.slice(0, 90),
                width: e.clientWidth,
                scroll: e.scrollWidth,
              }))
              .slice(0, 15),
          };
        });
        results.push({ width, route, theme, ...findings });
        if (width === 390 && ['/flashcards', '/grammar?level=N2', '/dashboard', '/profile'].includes(route))
          await page.screenshot({
            path: `test-results/layout/${route.split('?')[0].slice(1)}-${theme}.png`,
            fullPage: false,
          });
      }
    }
    console.log(
      JSON.stringify({
        width,
        issues: results.filter((r) => r.width === width && (r.pageOverflow || r.issues.length)),
      }),
    );
  }
} finally {
  await page.evaluate(() => fetch('/api/auth/logout', { method: 'POST' })).catch(() => {});
  await browser.close();
  writeFileSync('test-results/layout/audit.json', JSON.stringify({ results, errors }, null, 2));
}
if (errors.length || results.some((r) => r.pageOverflow || r.issues.length)) process.exitCode = 1;
