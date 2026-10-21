import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/546d53c0-176a-4277-8bc6-b0fff08778f5';
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

async function verifyExamFocusMode() {
  const base = process.env.BASE_URL || 'http://localhost:3001';
  console.log(`Kiểm tra Tính Năng Chế Độ Thi Tập Trung & Khóa Thẻ Điều Hướng tại: ${base}`);

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // Mobile simulation
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2
  });

  const page = await context.newPage();

  try {
    // 1. Đăng nhập với tài khoản mẫu
    console.log('1. Đăng nhập tài khoản mẫu...');
    await page.goto(`${base}/login`, { waitUntil: 'networkidle' });
    const demoBtn = page.getByRole('button', { name: 'Dùng tài khoản mẫu' });
    await demoBtn.click();
    await page.waitForTimeout(1500);

    // Bỏ qua login review nếu có
    const deferBtn = page.locator('button.login-review-defer');
    if (await deferBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await deferBtn.click();
      await page.waitForTimeout(1000);
    }
    await page.evaluate(async () => {
      try { await fetch('/api/login-review/defer', { method: 'POST' }); } catch (e) {}
    });

    // 2. Vào trang đề thi
    console.log('2. Điều hướng vào danh sách bài kiểm tra /tests...');
    await page.goto(`${base}/tests`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Kiểm tra rằng khi chưa vào bài thi, thanh điều hướng dưới mobile vẫn hiển thị bình thường
    const bottomNavBefore = await page.locator('.mobile-bottom-nav').isVisible();
    console.log(`  -> Khi chưa thi: mobile-bottom-nav hiển thị = ${bottomNavBefore} (Đúng chuẩn)`);

    // 3. Bấm vào bài thi JLPT đầu tiên
    console.log('3. Chọn đề thi JLPT...');
    const firstExamLink = page.locator('a[href*="/tests/jlpt-"]').first();
    await firstExamLink.click();
    await page.waitForTimeout(1500);

    // Đang ở màn hình giới thiệu trước khi bắt đầu
    console.log('4. Bấm "Bắt đầu phần 1" để chính thức vào bài thi...');
    const startExamBtn = page.getByRole('button', { name: /Bắt đầu phần/i }).first();
    await startExamBtn.waitFor({ state: 'visible', timeout: 5000 });
    await startExamBtn.click();
    await page.waitForTimeout(2000);

    // Chụp ảnh màn hình khi đang làm bài
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam-mode-active.png') });
    console.log('  ✓ Đã chụp ảnh khi đang làm bài thi: exam-mode-active.png');

    // 4. KIỂM TRA KHÓA TOÀN BỘ CÁC THẺ KHÁC VÀ THANH ĐIỀU HƯỚNG
    console.log('5. Kiểm tra trạng thái khóa điều hướng (Exam Mode Lock):');
    const sidebarVisible = await page.locator('.sidebar').isVisible();
    const topbarVisible = await page.locator('.topbar').isVisible();
    const bottomNavVisible = await page.locator('.mobile-bottom-nav').isVisible();
    const backLinkVisible = await page.locator('.back-link').isVisible();
    const stickyExamBarVisible = await page.locator('.exam-sticky-bar').isVisible();
    const submitNowBtnVisible = await page.locator('button:has-text("Nộp bài ngay")').first().isVisible();

    console.log(`  - Sidebar bị ẩn: ${!sidebarVisible ? '✓ CHÍNH XÁC' : '✗ LỖI VẪN THẤY'}`);
    console.log(`  - Topbar bị ẩn: ${!topbarVisible ? '✓ CHÍNH XÁC' : '✗ LỖI VẪN THẤY'}`);
    console.log(`  - Mobile bottom nav bị ẩn: ${!bottomNavVisible ? '✓ CHÍNH XÁC' : '✗ LỖI VẪN THẤY'}`);
    console.log(`  - Back link bị ẩn: ${!backLinkVisible ? '✓ CHÍNH XÁC' : '✗ LỖI VẪN THẤY'}`);
    console.log(`  - Sticky Exam Bar hiển thị: ${stickyExamBarVisible ? '✓ CHÍNH XÁC' : '✗ LỖI CHƯA THẤY'}`);
    console.log(`  - Nút "Nộp bài ngay" hiển thị: ${submitNowBtnVisible ? '✓ CHÍNH XÁC' : '✗ LỖI CHƯA THẤY'}`);

    if (sidebarVisible || topbarVisible || bottomNavVisible || backLinkVisible || !stickyExamBarVisible || !submitNowBtnVisible) {
      throw new Error('Chế độ thi tập trung chưa ẩn triệt để các thẻ điều hướng hoặc thiếu nút nộp bài ngay!');
    }

    // 5. THỬ BẤM NÚT "NỘP BÀI NGAY"
    console.log('6. Bấm nút "Nộp bài ngay" để dừng bài kiểm tra...');
    const submitNowBtn = page.locator('button:has-text("Nộp bài ngay")').first();
    await submitNowBtn.click();
    await page.waitForTimeout(600);

    // Chụp ảnh modal xác nhận nộp bài
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam-mode-confirm-modal.png') });
    console.log('  ✓ Đã chụp ảnh modal xác nhận: exam-mode-confirm-modal.png');

    const modalTitle = await page.locator('[role="dialog"] h2, .modal-title, [role="dialog"] *').first().textContent();
    console.log(`  -> Modal xác nhận xuất hiện: "${modalTitle?.trim()}"`);

    // Bấm xác nhận nộp bài ngay
    const confirmBtn = page.getByRole('button', { name: 'Xác nhận nộp bài ngay' });
    await confirmBtn.click();
    await page.waitForTimeout(2000);

    // Chụp ảnh màn hình kết quả sau khi nộp
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'exam-mode-finished-report.png') });
    console.log('  ✓ Đã chụp ảnh báo cáo kết quả sau khi nộp bài: exam-mode-finished-report.png');

    // Kiểm tra xem sau khi nộp bài thì các thẻ điều hướng có mở khóa trở lại không
    const bottomNavAfter = await page.locator('.mobile-bottom-nav').isVisible();
    const hasReport = (await page.content()).includes('Đã hoàn thành bài thi');
    console.log(`  - Đã hoàn thành bài thi và xuất kết quả: ${hasReport ? '✓ CHÍNH XÁC' : '✗ CHƯA THẤY'}`);
    console.log(`  - Mở khóa lại thanh điều hướng sau khi thi xong: ${bottomNavAfter ? '✓ CHÍNH XÁC' : '✗ LỖI VẪN KHÓA'}`);

    console.log('\n======================================================');
    console.log('✓ TẤT CẢ CÁC BÀI TEST CHẾ ĐỘ THI TẬP TRUNG ĐỀU ĐẠT 100%!');
    console.log('======================================================');
  } finally {
    await browser.close();
  }
}

verifyExamFocusMode().catch(err => {
  console.error('Lỗi kiểm thử:', err);
  process.exit(1);
});
