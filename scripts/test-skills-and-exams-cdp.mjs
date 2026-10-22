import { chromium } from '@playwright/test';
import fs from 'node:fs';

async function run() {
  console.log('--- Bắt đầu kiểm tra CDP cho Luyện thi JLPT & Luyện kỹ năng ---');

  const chromePath = 'C:\\Users\\Hoang Vuong\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const browser = await chromium.launch({
    executablePath,
    headless: true,
  });

  // Desktop context
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  await desktopContext.addInitScript(() => {
    localStorage.setItem('wakaba_cookie_consent', 'true');
    localStorage.setItem('komorebi_cookie_consent', 'true');
  });

  const page = await desktopContext.newPage();

  console.log('1. Đăng nhập qua tài khoản mẫu...');
  await page.goto('http://127.0.0.1:5173/auth', { waitUntil: 'networkidle' });
  const demoBtn = page.getByRole('button', { name: /Dùng tài khoản mẫu/i });
  if (await demoBtn.isVisible()) {
    await demoBtn.click();
    await page.waitForTimeout(1500);
  }

  console.log('2. Điều hướng tới trang /tests...');
  await page.goto('http://127.0.0.1:5173/tests', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const deferBtn = page.getByRole('button', { name: /Ôn tập vào lần sau/i });
  if (await deferBtn.isVisible()) {
    await deferBtn.click();
    await page.waitForTimeout(1500);
    await page.goto('http://127.0.0.1:5173/tests', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
  }

  // 1. Chụp màn hình Luyện thi JLPT (Đề chuẩn)
  console.log('3. Kiểm tra màn hình Luyện thi JLPT...');
  await page.waitForSelector('.test-card-official', { timeout: 10000 });
  await page.screenshot({ path: 'test-results/desktop-exams.png', fullPage: false });
  console.log('✓ Đã lưu test-results/desktop-exams.png');

  // 2. Chuyển sang Luyện kỹ năng
  console.log('4. Bấm chuyển sang tab Luyện kỹ năng...');
  const skillsTabBtn = page.locator('.test-mode-btn:has-text("Luyện kỹ năng")');
  await skillsTabBtn.click();
  await page.waitForSelector('.skill-card', { timeout: 10000 });
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'test-results/desktop-skills.png', fullPage: false });
  console.log('✓ Đã lưu test-results/desktop-skills.png');

  // 3. Mở bài luyện kỹ năng đầu tiên
  console.log('5. Bấm Luyện tập ngay để mở Modal...');
  const practiceBtn = page.locator('.skill-card button:has-text("Luyện tập ngay")').first();
  await practiceBtn.click();
  await page.waitForSelector('.skill-session-container', { timeout: 10000 });
  await page.waitForTimeout(1000);

  // Chọn 1 đáp án
  console.log('6. Chọn đáp án và nộp bài...');
  const optionBtn = page.locator('.skill-exercise-active .answer-options button').first();
  if (await optionBtn.isVisible()) {
    await optionBtn.click();
    await page.waitForTimeout(500);
  }

  const submitBtn = page.locator('.skill-session-footer button:has-text("Nộp bài")');
  await submitBtn.click();
  await page.waitForSelector('.skill-results-view', { timeout: 10000 });
  await page.waitForTimeout(1500);

  // Chụp ảnh màn hình kết quả bài luyện (bao gồm transcript và flashcard button nếu có)
  await page.screenshot({ path: 'test-results/skill-results.png', fullPage: false });
  console.log('✓ Đã lưu test-results/skill-results.png');

  // Đóng modal
  const finishBtn = page.locator('button:has-text("Hoàn tất")').first();
  if (await finishBtn.isVisible()) {
    await finishBtn.click();
    await page.waitForTimeout(500);
  }

  // Lưu cookies từ desktop session
  const cookies = await desktopContext.cookies();
  await desktopContext.close();

  // Mobile Context
  console.log('7. Kiểm tra giao diện Mobile (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
    isMobile: true,
    hasTouch: true,
  });
  await mobileContext.addCookies(cookies);
  await mobileContext.addInitScript(() => {
    localStorage.setItem('wakaba_cookie_consent', 'true');
    localStorage.setItem('komorebi_cookie_consent', 'true');
  });

  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://127.0.0.1:5173/tests', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(1500);

  const mobileDeferBtn = mobilePage.getByRole('button', { name: /Ôn tập vào lần sau/i });
  if (await mobileDeferBtn.isVisible()) {
    await mobileDeferBtn.click();
    await mobilePage.waitForTimeout(1500);
    await mobilePage.goto('http://127.0.0.1:5173/tests', { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(1500);
  }

  const mobileSkillsTabBtn = mobilePage.locator('.test-mode-btn:has-text("Luyện kỹ năng")');
  await mobileSkillsTabBtn.click();
  await mobilePage.waitForSelector('.skill-card', { timeout: 10000 });
  await mobilePage.waitForTimeout(1000);

  await mobilePage.screenshot({ path: 'test-results/mobile-skills.png', fullPage: false });
  console.log('✓ Đã lưu test-results/mobile-skills.png');

  await mobileContext.close();
  await browser.close();
  console.log('=== TOÀN BỘ KIỂM TRA CDP ĐÃ HOÀN THÀNH XUẤT SẮC ===');
}

run().catch((err) => {
  console.error('Lỗi khi chạy CDP:', err);
  process.exit(1);
});
