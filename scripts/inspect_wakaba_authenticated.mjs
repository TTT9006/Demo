import { chromium } from 'playwright';
import path from 'node:path';

const ARTIFACT_DIR = 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/546d53c0-176a-4277-8bc6-b0fff08778f5';

async function main() {
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();

  console.log('Navigating to Wakaba Login on Vercel...');
  await page.goto('https://wakaba-pink.vercel.app/login', { waitUntil: 'networkidle' });

  // Click "Dùng tài khoản mẫu"
  console.log('Clicking "Dùng tài khoản mẫu"...');
  const demoBtn = page.locator('button:has-text("Dùng tài khoản mẫu")');
  await demoBtn.click();
  await page.waitForTimeout(3000);

  // Take Dashboard screenshot
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'wakaba_auth_dashboard.png') });
  console.log('Saved wakaba_auth_dashboard.png');

  // Go to Dictionary
  console.log('Visiting Dictionary...');
  await page.goto('https://wakaba-pink.vercel.app/dictionary', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const searchInput = page.locator('input[placeholder*="Tìm kiếm"], input[type="search"], input[type="text"]').first();
  if (await searchInput.count()) {
    await searchInput.fill('一石二鳥');
    await searchInput.press('Enter');
    await page.waitForTimeout(2500);
  }
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'wakaba_auth_dictionary.png') });
  console.log('Saved wakaba_auth_dictionary.png');

  // Go to Flashcards
  console.log('Visiting Flashcards...');
  await page.goto('https://wakaba-pink.vercel.app/flashcards', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'wakaba_auth_flashcards.png') });
  console.log('Saved wakaba_auth_flashcards.png');

  // Go to Tests
  console.log('Visiting Tests...');
  await page.goto('https://wakaba-pink.vercel.app/tests', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'wakaba_auth_tests.png') });
  console.log('Saved wakaba_auth_tests.png');

  // Go to Writing
  console.log('Visiting Writing...');
  await page.goto('https://wakaba-pink.vercel.app/writing', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'wakaba_auth_writing.png') });
  console.log('Saved wakaba_auth_writing.png');

  await browser.close();
  console.log('All authenticated screenshots captured!');
}

main().catch(console.error);
