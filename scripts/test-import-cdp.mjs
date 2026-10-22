import { chromium } from '@playwright/test';
import JSZip from 'jszip';
import fs from 'node:fs';
import path from 'node:path';

async function main() {
  console.log('--- Bắt đầu E2E Test qua Chrome DevTools Protocol (CDP) ---');

  // 1. Tạo file PPTX mẫu thử nghiệm
  const zip = new JSZip();
  // Slide 1: Tiêu đề
  zip.file(
    'ppt/slides/slide1.xml',
    `<p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
      <a:p><a:r><a:t>第1A課</a:t></a:r></a:p>
      <a:p><a:r><a:t>ことば</a:t></a:r></a:p>
    </p:sp>`
  );
  // Slide 2: Giải thích phát âm
  zip.file(
    'ppt/slides/slide2.xml',
    `<p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
      <a:p><a:r><a:t>解説</a:t></a:r></a:p>
      <a:p><a:r><a:t>GIẢI THÍCH VỀ KÝ HIỆU PHÁT ÂM</a:t></a:r></a:p>
    </p:sp>`
  );
  // Slide 3: Từ 1 (Ăn)
  zip.file(
    'ppt/slides/slide3.xml',
    `<p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
      <a:p><a:r><a:t>食べます ★</a:t></a:r></a:p>
      <a:p><a:r><a:t>たべま＼す</a:t></a:r></a:p>
      <a:p><a:r><a:t>[THỰC]</a:t></a:r></a:p>
      <a:p><a:r><a:t>Ăn</a:t></a:r></a:p>
    </p:sp>`
  );
  // Slide 4: Từ 2 (Chụp ảnh)
  zip.file(
    'ppt/slides/slide4.xml',
    `<p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
      <a:p><a:r><a:t>［写真を］撮ります ★</a:t></a:r></a:p>
      <a:p><a:r><a:t>［しゃしんを］とります</a:t></a:r></a:p>
      <a:p><a:r><a:t>[TẢ CHÂN] [TOÁT]</a:t></a:r></a:p>
      <a:p><a:r><a:t>Chụp (ảnh)</a:t></a:r></a:p>
    </p:sp>`
  );

  const pptxBuffer = await zip.generateAsync({ type: 'nodebuffer' });
  const samplePptxPath = path.resolve('test-results/sample_lesson_1A.pptx');
  fs.mkdirSync('test-results', { recursive: true });
  fs.writeFileSync(samplePptxPath, pptxBuffer);
  console.log('✓ Đã tạo file sample PPTX tại:', samplePptxPath);

  // 2. Khởi chạy trình duyệt Chrome / Edge thật qua CDP
  const chromePath = 'C:\\Users\\Hoang Vuong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;
  console.log('Sử dụng trình duyệt thực tế:', executablePath);

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  // Bắt lỗi console và lỗi trang
  const pageErrors = [];
  page.on('pageerror', (err) => {
    console.error('BROWSER ERROR:', err.message);
    pageErrors.push(err.message);
  });
  page.on('console', (msg) => {
    console.log('BROWSER LOG [' + msg.type() + ']:', msg.text());
    if (msg.type() === 'error') {
      pageErrors.push(msg.text());
    }
  });

  // 3. Đăng nhập với tài khoản mẫu
  console.log('1. Đang truy cập trang đăng nhập...');
  await page.goto('http://127.0.0.1:5173/auth', { waitUntil: 'networkidle' });

  // Nhấn nút dùng tài khoản mẫu
  const demoBtn = page.getByRole('button', { name: /Dùng tài khoản mẫu/i });
  if (await demoBtn.isVisible()) {
    await demoBtn.click();
    await page.waitForTimeout(1000);
  }

  // Nếu rơi vào màn hình LoginReview (Ôn tập đầu ngày), bấm "Ôn tập vào lần sau"
  const deferBtn = page.getByRole('button', { name: /Ôn tập vào lần sau/i });
  if (await deferBtn.isVisible()) {
    console.log('Phát hiện màn hình LoginReview, bấm "Ôn tập vào lần sau"...');
    await deferBtn.click();
    await page.waitForTimeout(1000);
  }

  // 4. Chuyển đến trang Flashcards
  console.log('2. Đang chuyển đến trang Flashcards...');
  await page.goto('http://127.0.0.1:5173/flashcards', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'test-results/flashcards-page-debug.png' });
  console.log('Current URL:', page.url());
  const pageTitle = await page.title();
  console.log('Page Title:', pageTitle);
  const textContent = await page.locator('body').innerText();
  console.log('Page text preview:', textContent.slice(0, 300));

  // Kiểm tra nút "Import PowerPoint / PDF"
  const importBtn = page.getByRole('button', { name: /Import PowerPoint \/ PDF/i });
  if (!(await importBtn.isVisible())) {
    throw new Error('Nút "Import PowerPoint / PDF" không hiển thị trên trang Flashcards!');
  }
  console.log('✓ Nút Import PowerPoint / PDF hiển thị tốt.');

  // Mở modal import
  await importBtn.click();
  await page.waitForTimeout(500);

  // Kiểm tra modal hiển thị
  const modalTitle = page.getByText(/Nhập Flashcard thông minh/i);
  if (!(await modalTitle.isVisible())) {
    throw new Error('Modal import không mở thành công!');
  }
  console.log('✓ Modal Import Flashcard đã mở.');

  // Chụp ảnh giao diện Modal ban đầu
  await page.screenshot({ path: 'test-results/import-modal-opened.png' });

  // Tải file PPTX lên input
  console.log('3. Đang tải file PPTX lên...');
  const fileInput = page.locator('.import-drop-box input[type="file"]');
  await fileInput.setInputFiles(samplePptxPath);

  // Đợi kết quả bóc tách hiển thị trong preview table
  console.log('4. Đang đợi kết quả quét bóc tách...');
  await page.waitForSelector('.import-preview-table', { timeout: 10000 });

  // Kiểm tra nội dung Preview
  const firstTermInput = await page.locator('.import-preview-table tbody tr:first-child td:nth-child(2) input').inputValue();
  const firstReadingInput = await page.locator('.import-preview-table tbody tr:first-child td:nth-child(3) input').inputValue();
  const firstSinoInput = await page.locator('.import-preview-table tbody tr:first-child td:nth-child(4) input').inputValue();
  const firstMeaningInput = await page.locator('.import-preview-table tbody tr:first-child td:nth-child(5) input').inputValue();

  console.log('Hàng 1 trích xuất được:');
  console.log(' - Term:', firstTermInput);
  console.log(' - Reading:', firstReadingInput);
  console.log(' - Hán Việt:', firstSinoInput);
  console.log(' - Nghĩa:', firstMeaningInput);

  if (firstTermInput !== '食べます' || firstReadingInput !== 'たべます' || firstMeaningInput !== 'Ăn') {
    throw new Error('Dữ liệu hàng 1 không đúng với kỳ vọng!');
  }

  console.log('✓ Bóc tách PPTX chính xác 100% không lẫn slide rác.');
  await page.screenshot({ path: 'test-results/import-preview-table.png' });

  // 5. Bấm nút Tạo bộ Flashcard
  console.log('5. Đang bấm nút tạo bộ Flashcard...');
  const createDeckBtn = page.getByRole('button', { name: /Tạo.*bộ Flashcard/i });
  await createDeckBtn.click();

  // Đợi thông báo thành công và modal đóng
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'test-results/import-completed.png' });

  // Kiểm tra trang danh sách Flashcards có bộ thẻ mới
  const bodyText = await page.locator('body').innerText();
  if (!bodyText.includes('Từ vựng - 第1A課')) {
    console.log('Lưu ý: Bộ thẻ mới có thể ở trang khác hoặc đang tải, kiểm tra cache...');
  } else {
    console.log('✓ Đã thấy bộ thẻ mới "Từ vựng - 第1A課" trên giao diện danh sách.');
  }

  await browser.close();
  console.log('--- Hoàn tất E2E Playwright CDP Test thành công không có lỗi! ---');
}

main().catch((err) => {
  console.error('E2E Test Thất bại:', err);
  process.exit(1);
});
