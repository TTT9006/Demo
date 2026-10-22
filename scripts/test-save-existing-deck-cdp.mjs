import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

async function main() {
  console.log('--- Test CDP: Lưu từ vựng vào một bộ thẻ hiện tại (targetDeckId) ---');

  const chromePath = 'C:\\Users\\Hoang Vuong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });

  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
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

  console.log('2. Mở chi tiết một bộ thẻ...');
  await page.goto('http://127.0.0.1:5173/flashcards', { waitUntil: 'networkidle' });

  // Nhấn vào bộ thẻ đầu tiên để vào Deck Detail
  const firstDeck = page.locator('.deck-card').first();
  await firstDeck.click();
  await page.waitForTimeout(1000);

  // Mở modal import bên trong bộ thẻ này (sẽ có targetDeckId)
  console.log('3. Mở modal import trong bộ thẻ...');
  const importInsideBtn = page.getByRole('button', { name: /Import.*PPTX/i });
  await importInsideBtn.click();
  await page.waitForTimeout(500);

  // Tải file PPTX
  const userProfile = process.env.USERPROFILE || '';
  const pptxPath = path.join(userProfile, 'Downloads', '語彙5A.pptx');
  console.log('4. Tải file:', pptxPath);
  const fileInput = page.locator('.import-drop-box input[type="file"]');
  await fileInput.setInputFiles(pptxPath);

  // Đợi bảng preview hiển thị
  console.log('5. Đợi bảng preview...');
  await page.waitForSelector('.import-preview-table', { timeout: 10000 });

  // Kiểm tra nút "Lưu ... từ vào bộ hiện tại"
  const saveCurrentBtn = page.locator('button:has-text("Lưu")').last();
  const btnText = await saveCurrentBtn.innerText();
  console.log('Tên nút lưu:', btnText);

  // Nhấn lưu vào bộ hiện tại
  console.log('6. Nhấn lưu vào bộ hiện tại...');
  await saveCurrentBtn.click();

  // Đợi hoàn tất
  await page.waitForTimeout(3000);

  // Kiểm tra modal đã đóng
  const isModalOpen = await page.locator('.import-dialog-large').isVisible();
  console.log('Modal visible sau khi lưu:', isModalOpen);

  // Chụp ảnh kết quả
  await page.screenshot({ path: 'test-results/after-save-to-existing-deck.png' });
  console.log('✓ Hoàn tất test lưu vào bộ hiện tại!');

  await browser.close();
}

main().catch((err) => {
  console.error('Lỗi CDP Test:', err);
  process.exit(1);
});
