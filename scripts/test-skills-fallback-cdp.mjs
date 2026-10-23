import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

async function run() {
  console.log('--- Kiểm tra CDP: Khắc phục lỗi 404 Không tìm thấy chức năng này trên trang Luyện kỹ năng ---');

  // Start vite preview server for the built frontend
  const preview = spawn('cmd', ['/c', 'npx', 'vite', 'preview', '--port', '4173', '--host', '127.0.0.1'], {
    stdio: 'pipe',
  });

  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => resolve(), 5000);
    preview.stdout.on('data', (d) => {
      if (d.toString().includes('Local:')) {
        clearTimeout(timeout);
        resolve();
      }
    });
  });

  const chromePath = 'C:\\Users\\Hoang Vuong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });

    // Mock user and auth
    await context.route('**/api/auth/me', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'mock-user-1',
          name: 'TTT9006',
          email: 'demo@wakaba.app',
          level: 'N1',
          avatar: '花',
          role: 'user',
        }),
      });
    });

    await context.route('**/api/tests/history', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([]),
      });
    });

    await context.route('**/api/login-review', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ready: true, active: false, total: 0, done: 0, decks: [] }),
      });
    });

    // Mock the backend 404 response to simulate exactly what Render does in production
    await context.route('**/api/jlpt/skills/**', async (route) => {
      console.log('[Route Intercepted] Mocking Render 404 response for:', route.request().url());
      await route.fulfill({
        status: 404,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Không tìm thấy chức năng này.' }),
      });
    });

    // Set cookie consent
    await context.addInitScript(() => {
      localStorage.setItem('wakaba_cookie_consent', 'true');
      localStorage.setItem('komorebi_cookie_consent', 'true');
    });

    const page = await context.newPage();

    page.on('request', (req) => console.log('REQ:', req.url()));
    page.on('requestfailed', (req) => console.log('REQ FAILED:', req.url(), req.failure()?.errorText));
    page.on('pageerror', (err) => console.log('PAGE JS ERROR:', err));
    page.on('console', (msg) => console.log('CONSOLE:', msg.type(), msg.text()));

    console.log('1. Truy cập /skills (với backend trả về 404 mô phỏng thực tế Render)...');
    await page.goto('http://127.0.0.1:4173/skills', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    console.log('Current URL:', page.url());
    console.log('Root HTML:', await page.locator('#root').innerHTML());

    // Verify "Chưa thể tải nội dung" is NOT present
    const errorState = page.locator('text=Chưa thể tải nội dung');
    const hasError = await errorState.isVisible();
    if (hasError) {
      throw new Error('THẤT BẠI: Vẫn còn lỗi "Chưa thể tải nội dung" trên màn hình!');
    }
    console.log('✓ Xuất sắc: Không còn lỗi "Chưa thể tải nội dung"!');

    // Verify skill cards are present
    const cards = page.locator('.skill-card');
    const cardCount = await cards.count();
    console.log(`✓ Tìm thấy ${cardCount} bộ bài luyện tập trên giao diện.`);
    if (cardCount === 0) {
      throw new Error('THẤT BẠI: Không có thẻ bài luyện tập nào được hiển thị!');
    }

    // Switch between tabs: Nghe hiểu, Đọc hiểu, Từ vựng, Ngữ pháp
    const tabs = ['Đọc hiểu (読解)', 'Từ vựng (文字・語彙)', 'Ngữ pháp (文法)', 'Nghe hiểu (聴解)'];
    for (const tab of tabs) {
      const tabBtn = page.locator(`.skill-tab-pill:has-text("${tab}")`);
      await tabBtn.click();
      await page.waitForTimeout(400);
      const count = await page.locator('.skill-card').count();
      console.log(`✓ Tab "${tab}" hiển thị ${count} bài luyện tập.`);
    }

    // Switch to N2 level
    console.log('2. Chọn cấp độ N2...');
    const n2Btn = page.locator('button[role="tab"]:has-text("JLPT N2")');
    await n2Btn.click();
    await page.waitForTimeout(400);
    const n2Count = await page.locator('.skill-card').count();
    console.log(`✓ Cấp độ N2 hiển thị ${n2Count} bài luyện tập.`);

    // Take screenshot of the fixed skills page
    await page.screenshot({ path: 'test-results/skills-fixed-desktop.png', fullPage: false });
    console.log('✓ Đã chụp ảnh test-results/skills-fixed-desktop.png');

    // 3. Open practice modal
    console.log('3. Mở Modal bài luyện tập...');
    const practiceBtn = page.locator('.skill-card button:has-text("Luyện tập ngay")').first();
    await practiceBtn.click();
    await page.waitForSelector('.skill-session-container', { timeout: 5000 });
    await page.waitForTimeout(500);

    // Choose an answer
    console.log('4. Chọn đáp án...');
    const optionBtn = page.locator('.skill-exercise-active .answer-options button').first();
    if (await optionBtn.isVisible()) {
      await optionBtn.click();
      await page.waitForTimeout(300);
    }

    // Submit practice set
    console.log('5. Bấm Nộp bài (với /jlpt/skills/submit bị mock 404)...');
    const submitBtn = page.locator('.skill-session-footer button:has-text("Nộp bài")');
    await submitBtn.click();
    await page.waitForSelector('.skill-results-view', { timeout: 5000 });
    await page.waitForTimeout(800);

    // Verify results view
    const resultsTitle = page.locator('text=Kết quả luyện tập');
    if (await resultsTitle.isVisible()) {
      console.log('✓ Modal kết quả chấm điểm client-side hiển thị thành công 100%!');
    }

    await page.screenshot({ path: 'test-results/skills-submit-fallback.png', fullPage: false });
    console.log('✓ Đã chụp ảnh test-results/skills-submit-fallback.png');

    console.log('--- TẤT CẢ KIỂM TRA CDP ĐỀU ĐẠT 100% ---');
  } finally {
    await browser.close();
    preview.kill();
  }
}

run().catch((e) => {
  console.error('Lỗi khi chạy CDP:', e);
  process.exit(1);
});
