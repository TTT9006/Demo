import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

async function main() {
  console.log('--- Bắt đầu CDP Visual Test kiểm tra cuộn bảng không bị chồng chéo ---');

  const chromePath = 'C:\\Users\\Hoang Vuong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });

  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  console.log('1. Đăng nhập với tài khoản mẫu...');
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

  console.log('2. Mở modal Import trên trang Flashcards...');
  await page.goto('http://127.0.0.1:5173/flashcards', { waitUntil: 'networkidle' });

  const importBtn = page.getByRole('button', { name: /Import PowerPoint \/ PDF/i });
  await importBtn.click();
  await page.waitForTimeout(500);

  // Tải file PPTX thật (語彙5A.pptx) từ Downloads
  const userProfile = process.env.USERPROFILE;
  const pptxPath = userProfile + '\\Downloads\\語彙5A.pptx';
  console.log('3. Tải file PPTX:', pptxPath);
  const fileInput = page.locator('.import-drop-box input[type="file"]');
  await fileInput.setInputFiles(pptxPath);

  // Đợi bảng preview hiển thị
  console.log('4. Đợi bảng preview hiển thị...');
  await page.waitForSelector('.import-preview-table', { timeout: 10000 });

  // Chụp ảnh khi chưa cuộn
  await page.screenshot({ path: 'test-results/table-unscrolled.png' });

  // Cuộn bảng xuống 300px để kiểm tra header sticky và nội dung
  console.log('5. Cuộn bảng xem trước xuống để kiểm tra chồng giao diện...');
  await page.evaluate(() => {
    const wrapper = document.querySelector('.import-table-wrapper');
    if (wrapper) wrapper.scrollTop = 350;
  });

  await page.waitForTimeout(500);
  // Chụp ảnh khi đang cuộn
  await page.screenshot({ path: 'test-results/table-scrolled.png' });
  console.log('✓ Đã chụp ảnh test-results/table-scrolled.png để xác minh.');

  await browser.close();
}

main().catch((err) => {
  console.error('Lỗi Visual Test:', err);
  process.exit(1);
});
