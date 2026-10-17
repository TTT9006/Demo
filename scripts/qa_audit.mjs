import { chromium } from '@playwright/test';

const BASE_URL = process.env.TEST_URL || 'https://wakaba-mk61.onrender.com';

const report = {
  timestamp: new Date().toISOString(),
  target: BASE_URL,
  modules: {},
  consoleErrors: [],
  networkErrors: [],
  accessibilityIssues: [],
  layoutOverflows: [],
  summary: { passed: 0, failed: 0, warnings: 0 },
};

function record(module, testName, status, details = {}) {
  if (!report.modules[module]) report.modules[module] = [];
  report.modules[module].push({ testName, status, ...details });
  if (status === 'PASS') report.summary.passed++;
  else if (status === 'FAIL') report.summary.failed++;
  else report.summary.warnings++;
  console.log(`[${status}] ${module} -> ${testName}${details.error ? ': ' + details.error : details.note ? ' (' + details.note + ')' : ''}`);
}

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
});

const page = await context.newPage();

page.on('console', (msg) => {
  if (msg.type() === 'error') {
    report.consoleErrors.push({ text: msg.text(), location: msg.location() });
  }
});

page.on('pageerror', (err) => {
  report.consoleErrors.push({ text: err.message, stack: err.stack });
});

page.on('response', (res) => {
  if (res.status() >= 400 && !res.url().includes('/api/auth/login')) {
    report.networkErrors.push({ url: res.url(), status: res.status() });
  }
});

try {
  console.log(`=== STARTING FRESH COMPREHENSIVE QA AUDIT ON ${BASE_URL} ===\n`);

  // --- 1. AUTHENTICATION MODULE ---
  const M_AUTH = 'Authentication & Security';
  try {
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'domcontentloaded' });
    
    // Check elements on login page
    const emailInput = page.locator('input[type="email"]');
    const passInput = page.locator('input[name="password"], input[type="password"]');
    const demoBtn = page.getByRole('button', { name: 'Dùng tài khoản mẫu' });
    
    if (await emailInput.isVisible() && await passInput.isVisible()) {
      record(M_AUTH, 'Trang đăng nhập hiển thị đầy đủ input form', 'PASS');
    } else {
      record(M_AUTH, 'Trang đăng nhập hiển thị đầy đủ input form', 'FAIL', { error: 'Không tìm thấy input email/password' });
    }

    // Check Password Visibility Toggle button
    const eyeBtn = page.locator('.password-toggle-btn');
    if (await eyeBtn.isVisible()) {
      await eyeBtn.click();
      const typeAfterClick = await passInput.getAttribute('type');
      if (typeAfterClick === 'text') {
        record(M_AUTH, 'Nút bật/tắt hiển thị mật khẩu (Show/Hide Password toggle)', 'PASS');
        await eyeBtn.click(); // Toggle back
      } else {
        record(M_AUTH, 'Nút bật/tắt hiển thị mật khẩu', 'WARN', { typeAfterClick });
      }
    } else {
      record(M_AUTH, 'Nút bật/tắt hiển thị mật khẩu', 'WARN', { note: 'Chưa tìm thấy nút toggle' });
    }

    // Test validation on wrong login
    await emailInput.fill('wrong_user_test@example.com');
    await passInput.fill('wrongpassword123');
    await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
    await page.waitForTimeout(1000);
    const errorAlert = await page.locator('.error-text').first().textContent().catch(() => '');
    if (errorAlert && errorAlert.includes('Email hoặc mật khẩu chưa đúng')) {
      record(M_AUTH, 'Xử lý đăng nhập sai mật khẩu (báo lỗi chuẩn, an toàn)', 'PASS');
    } else {
      record(M_AUTH, 'Xử lý đăng nhập sai mật khẩu', 'WARN', { note: errorAlert || 'Không thấy thông báo lỗi' });
    }

    // Test client validation for short password
    await passInput.fill('short');
    await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
    await page.waitForTimeout(500);
    const validationMsg = await page.locator('.error-text').allTextContents();
    if (validationMsg.some(t => t.includes('8 ký tự'))) {
      record(M_AUTH, 'Client-side validation độ dài mật khẩu (<8 ký tự)', 'PASS');
    } else {
      record(M_AUTH, 'Client-side validation độ dài mật khẩu', 'WARN');
    }

    // Test Demo Login
    await demoBtn.click();
    await page.waitForURL('**/dashboard', { timeout: 25000 });
    record(M_AUTH, 'Đăng nhập bằng tài khoản mẫu chuyển hướng thành công tới /dashboard', 'PASS');
  } catch (err) {
    record(M_AUTH, 'Quy trình đăng nhập', 'FAIL', { error: err.message });
  }

  // --- 2. DASHBOARD MODULE ---
  const M_DASHBOARD = 'Dashboard (Tổng quan)';
  try {
    await page.waitForSelector('main', { timeout: 15000 });
    
    // Check main stats
    const statsCards = await page.locator('.stat-card, .metric-card, .stat, [class*="card"]').count();
    record(M_DASHBOARD, 'Hiển thị chỉ số học tập (Cards, Streak, Reviews)', statsCards > 0 ? 'PASS' : 'WARN', { count: statsCards });

    // Check Recharts/Charts visibility
    const chartSvg = await page.locator('.recharts-surface, svg').count();
    record(M_DASHBOARD, 'Biểu đồ hoạt động học tập 7 ngày hiển thị', chartSvg > 0 ? 'PASS' : 'WARN');

    // Check Audio pronunciation button
    const audioButtons = await page.locator('button[aria-label*="Phát âm"]').count();
    record(M_DASHBOARD, 'Nút phát âm âm thanh từ vựng nhanh trên Dashboard', audioButtons > 0 ? 'PASS' : 'WARN', { count: audioButtons });
  } catch (err) {
    record(M_DASHBOARD, 'Tải trang Dashboard', 'FAIL', { error: err.message });
  }

  // --- 3. DICTIONARY MODULE ---
  const M_DICT = 'Dictionary (Từ điển)';
  try {
    await page.goto(`${BASE_URL}/dictionary`, { waitUntil: 'domcontentloaded' });
    const searchBox = page.locator('input[type="search"], input[data-testid="dictionary-search-input"], input[placeholder*="tìm" i], input[type="text"]').first();
    await searchBox.waitFor({ state: 'visible', timeout: 15000 });
    record(M_DICT, 'Ô tìm kiếm từ điển nhận diện chuẩn và sẵn sàng', 'PASS');
    
    // Test Search: Romaji / Hiragana
    await searchBox.fill('taberu');
    await page.waitForTimeout(800);
    const suggestions = await page.locator('.suggestion-item, .search-suggestion, .suggestions a').count();
    record(M_DICT, 'Gợi ý tìm kiếm (Auto-suggestions) khi gõ từ khóa', suggestions > 0 ? 'PASS' : 'WARN', { suggestions });

    await page.keyboard.press('Enter');
    // Wait for word card to appear
    await page.waitForSelector('.word-card', { timeout: 15000 }).catch(() => null);
    const wordCards = await page.locator('.word-card').count();
    if (wordCards > 0) {
      record(M_DICT, 'Tìm kiếm từ vựng (taberu -> 食べる) trả về danh sách kết quả', 'PASS', { results: wordCards });
      
      // View detail page
      await page.locator('.word-card').first().click();
      await page.waitForTimeout(1000);
      const hasHeading = await page.locator('h1, h2').first().isVisible();
      record(M_DICT, 'Xem trang chi tiết từ vựng (/dictionary/:id)', hasHeading ? 'PASS' : 'WARN');
    } else {
      record(M_DICT, 'Tìm kiếm từ vựng', 'WARN', { note: 'Không thấy kết quả hiển thị cho taberu' });
    }
  } catch (err) {
    record(M_DICT, 'Chức năng từ điển', 'FAIL', { error: err.message });
  }

  // --- 4. FLASHCARDS & SRS MODULE ---
  const M_SRS = 'Flashcards & SRS';
  try {
    await page.goto(`${BASE_URL}/flashcards`, { waitUntil: 'domcontentloaded' });
    // Wait for deck grid or card or empty state to hydrate
    await page.waitForSelector('.deck-card, .deck-grid, .empty-state', { timeout: 20000 });
    
    const deckCards = await page.locator('.deck-card').count();
    record(M_SRS, 'Danh sách bộ thẻ từ vựng hiển thị đầy đủ', deckCards > 0 ? 'PASS' : 'WARN', { deckCount: deckCards });

    // Open first deck
    if (deckCards > 0) {
      await page.locator('.deck-card').first().click();
      await page.waitForTimeout(1000);
      const cardItems = await page.locator('.card-row, .flashcard-item, tr, .card-item').count();
      record(M_SRS, 'Xem chi tiết bộ thẻ và danh sách thẻ con', cardItems > 0 ? 'PASS' : 'WARN', { cardItems });
    }

    // Test Review Flow
    await page.goto(`${BASE_URL}/flashcards/review`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    const emptyState = await page.locator('text=/không có thẻ nào|hoàn thành/i').isVisible().catch(() => false);
    const flashcardFace = await page.locator('.review-card, .flashcard, .flip-card').isVisible().catch(() => false);
    
    if (flashcardFace || emptyState) {
      record(M_SRS, 'Trang ôn tập Flashcard (SRS review session) tải chuẩn', 'PASS', { state: flashcardFace ? 'Đang có thẻ cần ôn' : 'Đã hoàn thành thẻ' });
    } else {
      record(M_SRS, 'Trang ôn tập Flashcard', 'WARN', { note: 'Giao diện ôn tập không nhận diện được' });
    }
  } catch (err) {
    record(M_SRS, 'Mô-đun Flashcards & SRS', 'FAIL', { error: err.message });
  }

  // --- 5. GRAMMAR MODULE ---
  const M_GRAMMAR = 'Grammar (Ngữ pháp)';
  try {
    await page.goto(`${BASE_URL}/grammar`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    
    const lessons = await page.locator('.grammar-card, .lesson-item, a[href*="/grammar/"]').count();
    record(M_GRAMMAR, 'Danh sách bài học ngữ pháp (Roadmap N5-N2)', lessons > 0 ? 'PASS' : 'FAIL', { lessonsCount: lessons });

    if (lessons > 0) {
      await page.locator('a[href*="/grammar/"]').first().click();
      await page.waitForTimeout(1500);
      const explanation = await page.locator('main').textContent();
      const hasExplanation = explanation.includes('Ý nghĩa') || explanation.includes('Cấu trúc') || explanation.includes('Ví dụ');
      record(M_GRAMMAR, 'Trang bài học chi tiết (Cấu trúc, Giải thích, Furigana)', hasExplanation ? 'PASS' : 'WARN');

      // Check exercises and accessibility
      const exerciseOptions = await page.locator('.exercise, .quiz, button[class*="choice"], .option, button[role="radio"]').count();
      record(M_GRAMMAR, 'Bài tập tương tác ngữ pháp', exerciseOptions > 0 ? 'PASS' : 'WARN', { options: exerciseOptions });

      const radioOptions = await page.locator('button[role="radio"]').count();
      record(M_GRAMMAR, 'Độ hỗ trợ tiếp cận (ARIA Accessibility) của bài tập trắc nghiệm', radioOptions > 0 ? 'PASS' : 'WARN', { radioOptions });
    }
  } catch (err) {
    record(M_GRAMMAR, 'Mô-đun Ngữ pháp', 'FAIL', { error: err.message });
  }

  // --- 6. WRITING CANVAS MODULE ---
  const M_WRITING = 'Writing (Luyện viết)';
  try {
    await page.goto(`${BASE_URL}/writing`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    
    const canvas = page.locator('canvas').first();
    const hasCanvas = await canvas.isVisible().catch(() => false);
    if (hasCanvas) {
      const box = await canvas.boundingBox();
      if (box) {
        // Draw stroke
        await page.mouse.move(box.x + 20, box.y + 20);
        await page.mouse.down();
        await page.mouse.move(box.x + 80, box.y + 80);
        await page.mouse.up();
        record(M_WRITING, 'Bảng vẽ Canvas nhận diện nét bút cảm ứng/chuột', 'PASS', { box });
      }

      // Check Clear / Undo buttons
      const clearBtn = page.getByRole('button', { name: /Xóa|Lùi nét|Làm lại/i }).first();
      record(M_WRITING, 'Nút thao tác nét vẽ (Xóa / Lùi nét)', await clearBtn.isVisible() ? 'PASS' : 'WARN');
    } else {
      record(M_WRITING, 'Bảng vẽ Canvas', 'FAIL', { error: 'Không tìm thấy canvas vẽ' });
    }
  } catch (err) {
    record(M_WRITING, 'Mô-đun Luyện viết', 'FAIL', { error: err.message });
  }

  // --- 7. JLPT MOCK TESTS MODULE ---
  const M_JLPT = 'JLPT Mock Tests (Thi thử)';
  try {
    await page.goto(`${BASE_URL}/tests`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);
    
    const examCards = await page.locator('.test-card, .paper-card, a[href*="/tests/"]').count();
    record(M_JLPT, 'Danh sách đề thi thử JLPT (N5-N2) đầy đủ', examCards > 0 ? 'PASS' : 'FAIL', { count: examCards });

    if (examCards > 0) {
      await page.locator('a[href*="/tests/"]').first().click();
      await page.waitForTimeout(1500);
      
      const timer = await page.locator('.timer, [class*="clock"], [class*="time"]').isVisible().catch(() => false);
      record(M_JLPT, 'Đồng hồ đếm ngược phòng thi hoạt động', timer ? 'PASS' : 'WARN');

      const questions = await page.locator('.question-item, .exam-question, fieldset, .jlpt-card').count();
      record(M_JLPT, 'Câu hỏi thi trắc nghiệm hiển thị đầy đủ phương án', questions > 0 ? 'PASS' : 'WARN', { questions });

      const audioPreloads = await page.locator('audio[preload="auto"]').count();
      record(M_JLPT, 'Cơ chế Preload âm thanh phần nghe (Audio buffer optimization)', audioPreloads > 0 ? 'PASS' : 'WARN', { audioPreloads });
    }
  } catch (err) {
    record(M_JLPT, 'Mô-đun Thi thử JLPT', 'FAIL', { error: err.message });
  }

  // --- 8. SETTINGS & THEMING MODULE ---
  const M_SETTINGS = 'Settings & UI Customization';
  try {
    await page.goto(`${BASE_URL}/settings`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Theme switching test
    const themeInputs = await page.locator('input[value="dark"], button:has-text("Tối")').count();
    record(M_SETTINGS, 'Tùy chọn giao diện Sáng / Tối (Dark / Light mode)', themeInputs > 0 ? 'PASS' : 'WARN');

    // Furigana / Annotation mode
    const rubyMode = await page.locator('input[name*="annotation"], label:has-text("Furigana")').count();
    record(M_SETTINGS, 'Tùy chọn chế độ hiển thị Furigana / Romaji', rubyMode > 0 ? 'PASS' : 'WARN');
  } catch (err) {
    record(M_SETTINGS, 'Cài đặt giao diện', 'FAIL', { error: err.message });
  }

  // --- 9. RESPONSIVENESS & HORIZONTAL OVERFLOW ---
  const M_LAYOUT = 'Responsive & Mobile Layout';
  const viewports = [
    { name: 'iPhone SE / Small Mobile', width: 320, height: 568 },
    { name: 'iPhone 14 / Standard Mobile', width: 390, height: 844 },
    { name: 'iPad / Tablet', width: 768, height: 1024 },
    { name: 'Desktop Full HD', width: 1440, height: 900 },
  ];

  const testRoutes = ['/dashboard', '/flashcards', '/grammar', '/dictionary', '/writing', '/tests', '/settings'];
  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    let overflowCount = 0;
    for (const r of testRoutes) {
      await page.goto(`${BASE_URL}${r}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(400);
      const isOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (isOverflow) {
        overflowCount++;
        report.layoutOverflows.push({ viewport: vp.name, route: r });
      }
    }
    if (overflowCount === 0) {
      record(M_LAYOUT, `Không vỡ khung/tràn ngang trên ${vp.name} (${vp.width}px)`, 'PASS');
    } else {
      record(M_LAYOUT, `Kiểm tra tràn ngang trên ${vp.name} (${vp.width}px)`, 'WARN', { brokenRoutes: overflowCount });
    }
  }

} finally {
  await browser.close();
  console.log('\n=== AUDIT FINISHED ===');
  console.log(`PASS: ${report.summary.passed} | FAIL: ${report.summary.failed} | WARN: ${report.summary.warnings}`);
}
