import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

async function run() {
  console.log('--- Kiểm tra CDP: Trộn ngẫu nhiên thứ tự đáp án mỗi khi vào đề luyện kỹ năng ---');

  // Start vite preview server for the built frontend
  const preview = spawn('cmd', ['/c', 'npx', 'vite', 'preview', '--port', '4174', '--host', '127.0.0.1'], {
    stdio: 'pipe',
  });

  await new Promise((resolve) => {
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

    // Set cookie consent
    await context.addInitScript(() => {
      localStorage.setItem('cookie-consent', 'accepted');
      localStorage.setItem('wakaba-auth', 'true');
    });

    const page = await context.newPage();

    console.log('1. Truy cập /skills...');
    await page.goto('http://127.0.0.1:4174/skills', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Chuyển sang tab Từ vựng để kiểm tra
    console.log('2. Chọn tab Từ vựng (文字・語彙)...');
    const vocabTab = page.locator('button.skill-tab-pill', { hasText: 'Từ vựng' });
    await vocabTab.click();
    await page.waitForTimeout(600);

    // Tìm thẻ bài tập đầu tiên
    const firstCard = page.locator('.skill-card').first();
    await firstCard.waitFor({ state: 'visible', timeout: 5000 });
    const cardTitle = await firstCard.locator('.skill-card-title').textContent();
    console.log('Đề được chọn:', cardTitle);

    // Lần 1: Bấm "Luyện tập ngay"
    console.log('3. Lần 1: Bấm "Luyện tập ngay" vào đề...');
    await firstCard.locator('button', { hasText: 'Luyện tập ngay' }).click();
    await page.waitForSelector('.answer-options button[role="radio"]', { timeout: 5000 });

    const q1Prompt = await page.locator('.skill-question-prompt h2').textContent();
    console.log('Câu hỏi 1:', q1Prompt);

    const getOptions = async () => {
      const optionButtons = await page.locator('.answer-options button[role="radio"]').all();
      const texts = [];
      for (const btn of optionButtons) {
        const text = await btn.locator('span[lang="ja"]').textContent();
        texts.push(text?.trim());
      }
      return texts;
    };

    const optionsRun1 = await getOptions();
    console.log('Thứ tự đáp án Lần 1:', optionsRun1);

    await page.screenshot({ path: 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/1ea9bb67-f17d-40e4-bf2e-e0fc3d7497f4/skills-shuffle-run1.png' });

    // Đóng modal
    console.log('4. Đóng modal...');
    const closeBtn = page.locator('.dialog-close');
    await closeBtn.click();
    await page.waitForTimeout(500);

    // Lần 2: Bấm lại "Luyện tập ngay" vào cùng đề đó
    console.log('5. Lần 2: Bấm lại "Luyện tập ngay" vào cùng đề đó...');
    await firstCard.locator('button', { hasText: 'Luyện tập ngay' }).click();
    await page.waitForSelector('.answer-options button[role="radio"]', { timeout: 5000 });

    const optionsRun2 = await getOptions();
    console.log('Thứ tự đáp án Lần 2:', optionsRun2);
    await page.screenshot({ path: 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/1ea9bb67-f17d-40e4-bf2e-e0fc3d7497f4/skills-shuffle-run2.png' });

    // Đóng modal lần nữa và vào lần 3 để thu thập thống kê xáo trộn
    console.log('6. Đóng modal và vào lần 3...');
    await page.locator('.dialog-close').click();
    await page.waitForTimeout(500);
    await firstCard.locator('button', { hasText: 'Luyện tập ngay' }).click();
    await page.waitForSelector('.answer-options button[role="radio"]', { timeout: 5000 });

    const optionsRun3 = await getOptions();
    console.log('Thứ tự đáp án Lần 3:', optionsRun3);

    // Chọn một đáp án, nộp bài, và bấm "Luyện tập lại" để kiểm tra tính năng Luyện tập lại cũng xáo trộn đáp án
    console.log('7. Chọn một đáp án và nộp bài...');
    await page.locator('.answer-options button[role="radio"]').first().click();
    await page.waitForTimeout(300);

    const submitBtn = page.locator('button', { hasText: 'Nộp bài' });
    await submitBtn.click();
    await page.waitForSelector('.score-panel', { timeout: 5000 });

    console.log('8. Đã nộp bài và màn hình kết quả hiển thị. Bấm "Luyện tập lại"...');
    await page.screenshot({ path: 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/1ea9bb67-f17d-40e4-bf2e-e0fc3d7497f4/skills-result-screen.png' });

    const retryBtn = page.locator('button', { hasText: 'Luyện tập lại' });
    await retryBtn.click();
    await page.waitForSelector('.answer-options button[role="radio"]', { timeout: 5000 });

    const optionsRun4 = await getOptions();
    console.log('Thứ tự đáp án Lần 4 (sau khi Luyện tập lại):', optionsRun4);
    await page.screenshot({ path: 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/1ea9bb67-f17d-40e4-bf2e-e0fc3d7497f4/skills-shuffle-run4-retry.png' });

    // So sánh thứ tự
    const sets = [optionsRun1.join(','), optionsRun2.join(','), optionsRun3.join(','), optionsRun4.join(',')];
    const uniquePermutations = new Set(sets);
    console.log('Các hoán vị thu được qua các lần vào đề:', sets);
    console.log(`Số hoán vị khác nhau: ${uniquePermutations.size} / 4`);

    if (uniquePermutations.size >= 2) {
      console.log('✓ XÁC NHẬN THÀNH CÔNG: Các đáp án được trộn ngẫu nhiên mỗi khi người dùng chọn vào đề!');
    } else {
      console.warn('Cần kiểm tra: Cả 4 lần có cùng thứ tự, xác suất 1/24^3');
    }
  } finally {
    await browser.close();
    preview.kill();
  }
}

run().catch((e) => {
  console.error('Lỗi kiểm tra CDP:', e);
  process.exit(1);
});
