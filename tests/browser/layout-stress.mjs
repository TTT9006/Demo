import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const base = process.env.LAYOUT_URL || 'http://127.0.0.1:5173';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage();
try {
  await page.goto(base + '/login');
  await page.getByRole('button', { name: 'Dùng tài khoản mẫu' }).click();
  await page.waitForURL('**/dashboard');
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base + '/flashcards');
    await page.locator('.deck-card').first().waitFor();
    // Stress the rendered layout only; never save synthetic content to an account.
    await page.evaluate(() => {
      document.querySelector('.deck-info h3').textContent = 'TênBộThẻRấtDài'.repeat(8);
      document.querySelector('.deck-info p').textContent = '説明'.repeat(100);
      document.querySelector('h1').textContent = 'Tiêu đề dài để kiểm tra xuống dòng và không che các nút thao tác';
    });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
    const card = page.locator('.deck-card').first();
    assert.equal(await card.evaluate(e => e.scrollWidth > e.clientWidth + 2), false);
    await page.getByRole('button', { name: 'Tạo bộ thẻ', exact: true }).click();
    const modal = page.getByRole('dialog'); await modal.waitFor();
    const bounds = await modal.boundingBox();
    assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= width + 1);
    await page.getByRole('button', { name: 'Đóng', exact: true }).click();
    await page.goto(base + '/profile');
    await page.getByRole('heading', { name: 'Thông tin cá nhân' }).waitFor();
    assert.equal(await page.getByRole('heading', { name: 'Chú thích cách đọc', exact: true }).count(), 1);
    await page.evaluate(() => { document.querySelector('.settings-section p').textContent = 'verylongemailaddress'.repeat(8) + '@example.com'; });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false);
  }
  await page.goto(base + '/flashcards');
  await page.locator('.deck-card').first().waitFor();
  await page.setViewportSize({ width: 390, height: 900 });
  await page.evaluate(() => { document.documentElement.dataset.theme = 'dark'; });
  await page.waitForTimeout(250);
  await page.screenshot({ path: 'test-results/layout/flashcards-dark-final.png' });
  console.log('PASS: long deck titles/descriptions, email, modal bounds and one annotation section at 4 widths.');
} finally {
  await page.evaluate(() => fetch('/api/auth/logout', { method: 'POST' })).catch(() => {});
  await browser.close();
}
