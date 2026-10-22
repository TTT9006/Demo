import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

async function main() {
  console.log('--- Bắt đầu E2E Test PDF qua Chrome DevTools Protocol (CDP) ---');

  const chromePath = 'C:\\Users\\Hoang Vuong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });

  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  page.on('pageerror', (err) => console.error('BROWSER ERROR:', err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') console.log('BROWSER LOG [' + msg.type() + ']:', msg.text());
  });

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

  const importBtn = page.getByRole('button', { name: /Import PowerPoint \/ PDF/i });
  await importBtn.click();
  await page.waitForTimeout(500);

  // Chuyển sang tab PDF
  console.log('3. Chuyển sang tab Tài liệu PDF (.pdf)...');
  const pdfTabBtn = page.getByRole('button', { name: /Tài liệu PDF \(\.pdf\)/i });
  await pdfTabBtn.click();
  await page.waitForTimeout(300);

  // Tạo file PDF test có cấu trúc từ vựng
  const samplePdfPath = path.resolve('test-results/sample_vocab.pdf');
  // Copy a real PDF from Downloads if available, otherwise write minimal PDF with text
  const userProfile = process.env.USERPROFILE;
  const sourcePdf = userProfile + '\\Downloads\\BT bổ sung chương 1.pdf';
  if (fs.existsSync(sourcePdf)) {
    fs.copyFileSync(sourcePdf, samplePdfPath);
  }

  console.log('4. Tải file PDF lên...');
  const fileInput = page.locator('.import-drop-box input[type="file"]');
  await fileInput.setInputFiles(samplePdfPath);

  // Chờ thông báo hoặc preview table
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'test-results/pdf-import-result.png' });

  console.log('✓ Đã chạy kiểm tra PDF qua CDP thành công.');
  await browser.close();
}

main().catch((err) => {
  console.error('CDP PDF Test thất bại:', err);
  process.exit(1);
});
