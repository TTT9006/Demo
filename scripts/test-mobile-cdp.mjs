import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

async function testMobile() {
  console.log('--- Kiểm tra giao diện Mobile (Viewport: 390x844) qua CDP ---');

  const chromePath = 'C:\\Users\\Hoang Vuong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
  });

  await context.addInitScript(() => {
    localStorage.setItem('wakaba_cookie_consent', 'true');
    localStorage.setItem('komorebi_cookie_consent', 'true');
  });

  const page = await context.newPage();

  console.log('1. Đăng nhập...');
  await page.goto('http://127.0.0.1:5173/auth', { waitUntil: 'networkidle' });

  const demoBtn = page.getByRole('button', { name: /Dùng tài khoản mẫu/i });
  if (await demoBtn.isVisible()) {
    await demoBtn.click();
    await page.waitForTimeout(1000);
  }

  const deferBtn = page.getByRole('button', { name: /Ôn tập vào lần sau/i });
  if (await deferBtn.isVisible()) {
    await deferBtn.click();
    await page.waitForTimeout(1000);
  }

  console.log('2. Mở trang Flashcards...');
  await page.goto('http://127.0.0.1:5173/flashcards', { waitUntil: 'networkidle' });

  console.log('3. Mở Modal Import...');
  const importBtn = page.getByRole('button', { name: /Import/i }).first();
  await importBtn.click();
  await page.waitForTimeout(600);

  // Chụp ảnh màn hình 1: Dropzone trên mobile
  await page.screenshot({ path: 'test-results/mobile-dropzone-optimized.png' });
  console.log('✓ Đã chụp test-results/mobile-dropzone-optimized.png');

  // Tải file PPTX thật
  console.log('4. Tải file PPTX...');
  const userProfile = process.env.USERPROFILE || '';
  const pptxPath = path.join(userProfile, 'Downloads', '語彙5A.pptx');
  const fileInput = page.locator('.import-drop-box input[type="file"]');
  await fileInput.setInputFiles(pptxPath);

  // Đợi preview xuất hiện (dạng thẻ mặc định trên mobile)
  console.log('5. Đợi danh sách xem trước dạng thẻ hiển thị...');
  await page.waitForSelector('.import-cards-list', { timeout: 10000 });

  // Chụp ảnh màn hình 2: Danh sách dạng thẻ trên mobile
  await page.screenshot({ path: 'test-results/mobile-cards-view.png' });
  console.log('✓ Đã chụp test-results/mobile-cards-view.png');

  // Cuộn xuống để xem các thẻ tiếp theo
  await page.evaluate(() => {
    const list = document.querySelector('.import-cards-list');
    if (list) list.scrollTop = 300;
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'test-results/mobile-cards-scrolled.png' });
  console.log('✓ Đã chụp test-results/mobile-cards-scrolled.png');

  // Thử bấm chuyển sang Dạng bảng
  console.log('6. Bấm chuyển sang Dạng bảng...');
  const tableBtn = page.locator('.view-mode-btn:has-text("Dạng bảng")');
  await tableBtn.click();
  await page.waitForTimeout(500);

  // Chụp ảnh màn hình 3: Dạng bảng trên mobile
  await page.screenshot({ path: 'test-results/mobile-table-view.png' });
  console.log('✓ Đã chụp test-results/mobile-table-view.png');

  // Cuộn ngang bảng để kiểm tra
  await page.evaluate(() => {
    const tableWrap = document.querySelector('.import-table-wrapper');
    if (tableWrap) tableWrap.scrollLeft = 200;
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'test-results/mobile-table-scrolled.png' });
  console.log('✓ Đã chụp test-results/mobile-table-scrolled.png');

  console.log('✓ Hoàn tất toàn bộ kiểm thử giao diện mobile!');
  await browser.close();
}

testMobile().catch((err) => {
  console.error('Lỗi Mobile Test:', err);
  process.exit(1);
});
