import { chromium } from '@playwright/test';
import fs from 'node:fs';

const base = 'http://localhost:5173';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();

fs.mkdirSync('test-results/deck-covers', { recursive: true });

try {
  // Login with demo account
  const res = await context.request.post(base + '/api/auth/demo');
  console.log('Login demo status:', res.status());

  // Post defer login review in case user is blocked by login review
  await context.request.post(base + '/api/login-review/defer');

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base + '/flashcards');

  // If there's still a login review screen, check defer button
  const deferBtn = page.getByText('Ôn tập vào lần sau');
  if (await deferBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
    await deferBtn.click();
  }

  await page.waitForSelector('.deck-card', { timeout: 10000 });

  // Take screenshot in Light mode
  await page.screenshot({ path: 'test-results/deck-covers/decks-light-1440.png', fullPage: false });
  console.log('Saved decks-light-1440.png');

  // Scroll down slightly to capture next row (Hiragana, Katakana, Kanji themes)
  await page.evaluate(() => window.scrollBy(0, 480));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'test-results/deck-covers/decks-light-row2.png', fullPage: false });
  console.log('Saved decks-light-row2.png');

  // Switch to Dark mode
  await page.evaluate(() => {
    document.documentElement.dataset.theme = 'dark';
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'test-results/deck-covers/decks-dark-1440.png', fullPage: false });
  console.log('Saved decks-dark-1440.png');

  // Also check mobile 390px
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => {
    document.documentElement.dataset.theme = 'light';
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'test-results/deck-covers/decks-light-390.png', fullPage: false });
  console.log('Saved decks-light-390.png');

  console.log('ALL SNAPSHOTS TAKEN SUCCESSFULLY');
} finally {
  await browser.close();
}
