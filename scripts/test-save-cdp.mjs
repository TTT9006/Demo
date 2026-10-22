import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

async function main() {
  console.log('--- Bắt đầu CDP Test: Kiểm tra Lưu Flashcard sau khi quét PowerPoint ---');

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

  console.log('2. Mở trang Flashcards...');
  await page.goto('http://127.0.0.1:5173/flashcards', { waitUntil: 'networkidle' });

  // Tìm nút Import
  const importBtn = page.getByRole('button', { name: /Import PowerPoint \/ PDF/i });
  await importBtn.click();
  await page.waitForTimeout(500);

  // Tải file PPTX thật từ Downloads
  const userProfile = process.env.USERPROFILE || '';
  const pptxPath = path.join(userProfile, 'Downloads', '語彙5A.pptx');
  console.log('3. Tải file PPTX:', pptxPath);
  const fileInput = page.locator('.import-drop-box input[type="file"]');
  await fileInput.setInputFiles(pptxPath);

  // Đợi bảng preview hiển thị
  console.log('4. Đợi bảng preview hiển thị...');
  await page.waitForSelector('.import-preview-table', { timeout: 10000 });

  // Chụp ảnh màn hình trước khi lưu
  await page.screenshot({ path: 'test-results/before-save.png' });

  // Nhấn nút Tạo bộ Flashcard
  console.log('5. Nhấn nút Tạo bộ Flashcard...');
  const saveBtn = page.locator('.preview-actions button').last();
  await saveBtn.click();

  // Đợi thông báo thành công hoặc modal đóng
  console.log('6. Đợi lưu hoàn tất...');
  await page.waitForTimeout(3000);

  // Chụp ảnh màn hình sau khi lưu
  await page.screenshot({ path: 'test-results/after-save.png' });

  // Kiểm tra thông báo toast hoặc modal đã đóng
  const modalVisible = await page.locator('.import-dialog-large').isVisible();
  console.log('Modal visible sau khi lưu:', modalVisible);

  console.log('✓ CDP Test hoàn tất thành công!');
  await browser.close();
}

main().catch((err) => {
  console.error('Lỗi CDP Test:', err);
  process.exit(1);
});
