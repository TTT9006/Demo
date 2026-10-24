import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

async function run() {
  console.log('--- Kiểm tra CDP: Vị trí nút Nộp bài (góc trái) và Câu tiếp (góc phải) ---');

  const preview = spawn('cmd', ['/c', 'npx', 'vite', 'preview', '--port', '4175', '--host', '127.0.0.1'], {
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

    await context.addInitScript(() => {
      localStorage.setItem('cookie-consent', 'accepted');
      localStorage.setItem('wakaba-auth', 'true');
    });

    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4175/skills', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const firstCard = page.locator('.skill-card').first();
    await firstCard.waitFor({ state: 'visible', timeout: 5000 });
    await firstCard.locator('button', { hasText: 'Luyện tập ngay' }).click();
    await page.waitForSelector('.answer-options button[role="radio"]', { timeout: 5000 });

    const footer = page.locator('.skill-session-footer');
    await footer.waitFor({ state: 'visible' });

    const submitBtn = footer.locator('button', { hasText: 'Nộp bài' });
    const prevBtn = footer.locator('button', { hasText: 'Câu trước' });
    const nextBtn = footer.locator('button', { hasText: 'Câu tiếp' });

    const submitBox = await submitBtn.boundingBox();
    const prevBox = await prevBtn.boundingBox();
    const nextBox = await nextBtn.boundingBox();

    console.log('Tọa độ X nút Nộp bài:', submitBox?.x);
    console.log('Tọa độ X nút Câu trước:', prevBox?.x);
    console.log('Tọa độ X nút Câu tiếp:', nextBox?.x);

    if (submitBox && nextBox && submitBox.x < nextBox.x) {
      console.log('✓ XÁC NHẬN: Nút Nộp bài nằm ở góc trái (X nhỏ hơn), nút Câu tiếp nằm ở góc phải (X lớn hơn)!');
    } else {
      console.warn('Cần kiểm tra lại tọa độ!');
    }

    const screenshotPath = 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/1ea9bb67-f17d-40e4-bf2e-e0fc3d7497f4/skill-footer-layout.png';
    await footer.screenshot({ path: screenshotPath });
    console.log('Đã lưu ảnh chụp footer tại:', screenshotPath);
    await browser.close();
    preview.kill();
    process.exit(0);
  } finally {
    await browser.close();
    preview.kill();
    process.exit(0);
  }
}

run().catch((e) => {
  console.error('Lỗi kiểm tra CDP:', e);
  process.exit(1);
});
