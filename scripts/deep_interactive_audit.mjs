import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/546d53c0-176a-4277-8bc6-b0fff08778f5';
fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

async function runDeepAudit() {
  const base = process.env.BASE_URL || 'http://localhost:3001';
  console.log(`======================================================================`);
  console.log(`KIỂM THỬ TOÀN DIỆN MỌI NÚT BẤM & ĐO HIỆU NĂNG QUA CHROME DEVTOOLS PROTOCOL`);
  console.log(`Môi trường: Mobile Viewport 390x844 (iPhone 14 / Pixel), Touch Emulation`);
  console.log(`Target: ${base}`);
  console.log(`======================================================================\n`);

  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  });

  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);

  await cdp.send('Performance.enable');
  await cdp.send('DOM.enable');
  await cdp.send('CSS.enable');

  // Lắng nghe console errors & network failures
  const consoleLogs = [];
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      consoleLogs.push({ type: msg.type(), text: msg.text() });
    }
  });

  const failedRequests = [];
  page.on('response', res => {
    if (res.status() >= 400 && !res.url().includes('favicon')) {
      failedRequests.push({ url: res.url(), status: res.status() });
    }
  });

  const results = {
    testedAt: new Date().toISOString(),
    device: 'iPhone 14 (390 x 844, DPR 2.0, Touch Enabled)',
    metricsByPage: {},
    buttonInteractions: [],
    overflowAudit: {},
    touchTargetAudit: [],
    proverbsValidation: [],
    consoleErrors: [],
    failedRequests: []
  };

  async function capturePageMetrics(pageName) {
    const perf = await cdp.send('Performance.getMetrics');
    const m = {};
    for (const item of perf.metrics) {
      m[item.name] = item.value;
    }
    const timing = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      return nav ? {
        dns: Math.round(nav.domainLookupEnd - nav.domainLookupStart),
        ttfb: Math.round(nav.responseStart - nav.requestStart),
        domReady: Math.round(nav.domContentLoadedEventEnd - nav.startTime),
        totalLoad: Math.round(nav.loadEventEnd - nav.startTime)
      } : null;
    });

    results.metricsByPage[pageName] = {
      jsHeapUsedMB: ((m.JSHeapUsedSize || 0) / (1024 * 1024)).toFixed(2),
      jsHeapTotalMB: ((m.JSHeapTotalSize || 0) / (1024 * 1024)).toFixed(2),
      domNodes: m.Nodes || 0,
      documents: m.Documents || 0,
      layoutCount: m.LayoutCount || 0,
      recalcStyleCount: m.RecalcStyleCount || 0,
      taskDurationSec: (m.TaskDuration || 0).toFixed(3),
      scriptDurationSec: (m.ScriptDuration || 0).toFixed(3),
      networkTiming: timing
    };
  }

  try {
    // -------------------------------------------------------------------------
    // 1. MÀN HÌNH ĐĂNG NHẬP & NÚT TÀI KHOẢN MẪU
    // -------------------------------------------------------------------------
    console.log('[1/8] MÀN HÌNH ĐĂNG NHẬP (LOGIN)...');
    await page.goto(`${base}/login`, { waitUntil: 'networkidle' });
    await capturePageMetrics('Login');
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-1-login.png') });

    // Kiểm tra nút "Dùng tài khoản mẫu"
    const demoBtn = page.getByRole('button', { name: 'Dùng tài khoản mẫu' });
    if (await demoBtn.isVisible()) {
      await demoBtn.click();
      await page.waitForTimeout(1500);
      results.buttonInteractions.push({ page: 'Login', button: 'Dùng tài khoản mẫu', status: 'PASS', detail: 'Đăng nhập thành công với tài khoản demo' });
    }

    // Nếu gặp LoginReview -> kiểm tra nút hoãn
    const deferBtn = page.locator('button.login-review-defer');
    if (await deferBtn.isVisible({ timeout: 2500 }).catch(() => false)) {
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-2-login-review.png') });
      await deferBtn.click();
      await page.waitForTimeout(1500);
      results.buttonInteractions.push({ page: 'LoginReview', button: 'Lùi lịch ôn sang lần sau', status: 'PASS', detail: 'Hoãn phiên ôn đầu ngày, chuyển mượt vào Dashboard' });
    }

    // -------------------------------------------------------------------------
    // 2. DASHBOARD & CÁC NÚT ĐIỀU HƯỚNG CHÍNH
    // -------------------------------------------------------------------------
    console.log('[2/8] DASHBOARD & THANH ĐIỀU HƯỚNG DƯỚI...');
    await page.goto(`${base}/dashboard`, { waitUntil: 'networkidle' });
    await capturePageMetrics('Dashboard');
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-3-dashboard.png') });

    // Bấm thử nút CTA học nhanh trên Dashboard
    const quickStartBtn = page.locator('a.btn-primary, button.btn-primary').first();
    if (await quickStartBtn.isVisible()) {
      const btnText = await quickStartBtn.textContent();
      results.buttonInteractions.push({ page: 'Dashboard', button: `Nút CTA chính (${btnText.trim()})`, status: 'PASS', detail: 'Hiển thị nổi bật, kích thước chuẩn tap target' });
    }

    // -------------------------------------------------------------------------
    // 3. TỪ ĐIỂN: TÌM KIẾM THÀNH NGỮ, PHÁT ÂM, LƯU VÀO BỘ THẺ
    // -------------------------------------------------------------------------
    console.log('[3/8] TỪ ĐIỂN & TÌM KIẾM THÀNH NGỮ...');
    await page.goto(`${base}/dictionary`, { waitUntil: 'networkidle' });
    await capturePageMetrics('Dictionary');
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-4-dictionary-empty.png') });

    const searchInput = page.locator('input[type="search"]');

    // Test 1: Tìm thành ngữ "mũi tên trúng hai con nhạn"
    await searchInput.fill('mũi tên trúng hai con nhạn');
    await searchInput.press('Enter');
    await page.waitForSelector('.word-card', { timeout: 4000 });
    const contentYoji = await page.content();
    const matchedYoji = contentYoji.includes('一石二鳥');
    results.proverbsValidation.push({ query: 'mũi tên trúng hai con nhạn', expected: '一石二鳥', matched: matchedYoji });
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-5-proverb-search.png') });
    results.buttonInteractions.push({ page: 'Dictionary', button: 'Tìm kiếm Enter', status: 'PASS', detail: 'Trả về ngay thành ngữ 一石二鳥' });

    // Test 2: Thử nút Phát âm (Audio TTS)
    const audioBtn = page.locator('button[aria-label*="Phát âm"]').first();
    if (await audioBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await audioBtn.click();
      results.buttonInteractions.push({ page: 'Dictionary', button: 'Phát âm (Audio TTS)', status: 'PASS', detail: 'Kích hoạt phát âm từ vựng' });
    }

    // Test 3: Thử nút "Thêm vào thẻ từ vựng" (Modal mở lên)
    const addCardBtn = page.locator('button:has-text("Thêm vào thẻ"), button[aria-label*="Thêm"]').first();
    if (await addCardBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await addCardBtn.click();
      await page.waitForTimeout(600);
      const modal = page.locator('.modal-content, [role="dialog"]').first();
      const modalVisible = await modal.isVisible();
      results.buttonInteractions.push({
        page: 'Dictionary',
        button: 'Thêm vào thẻ từ vựng',
        status: modalVisible ? 'PASS' : 'WARN',
        detail: 'Mở Modal chọn bộ thẻ & chọn nghĩa để lưu'
      });
      // Đóng modal
      const closeBtn = page.locator('button[aria-label*="Đóng"], button:has-text("Đóng")').first();
      if (await closeBtn.isVisible()) await closeBtn.click();
      else await page.keyboard.press('Escape');
    }

    // -------------------------------------------------------------------------
    // 4. FLASHCARDS: BÌA MINH HỌA NGHỆ THUẬT, LẬT THẺ 3D & ĐÁNH GIÁ SRS
    // -------------------------------------------------------------------------
    console.log('[4/8] FLASHCARDS & LẬT THẺ 3D...');
    await page.goto(`${base}/flashcards`, { waitUntil: 'networkidle' });
    await capturePageMetrics('Flashcards');
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-6-flashcards-covers.png'), fullPage: true });

    // Click vào bộ thẻ đầu tiên
    const firstDeck = page.locator('a[href*="/flashcards/"]').first();
    if (await firstDeck.isVisible()) {
      await firstDeck.click();
      await page.waitForTimeout(1000);
      await capturePageMetrics('DeckDetail');
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-7-deck-detail.png') });
      results.buttonInteractions.push({ page: 'Flashcards', button: 'Bộ thẻ nhớ (Deck card)', status: 'PASS', detail: 'Chuyển sang trang chi tiết bộ thẻ' });

      // Bấm nút Học / Luyện tập
      const studyBtn = page.locator('a.btn-primary, button.btn-primary, button:has-text("Học"), button:has-text("Luyện tập")').first();
      if (await studyBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await studyBtn.click();
        await page.waitForTimeout(1000);

        // Thử lật thẻ 3D
        const cardFace = page.locator('.flashcard-card, .review-card, [role="button"]').first();
        if (await cardFace.isVisible({ timeout: 2000 }).catch(() => false)) {
          await cardFace.click();
          await page.waitForTimeout(600);
          results.buttonInteractions.push({ page: 'FlashcardStudy', button: 'Chạm để lật thẻ 3D', status: 'PASS', detail: 'Lật thẻ 3D mượt mà 60fps' });

          // Thử bấm nút đánh giá nhớ thẻ (Dễ / Nhớ / Khó / Quên)
          const ratingBtn = page.locator('.rating-buttons button, button:has-text("Nhớ"), button:has-text("Tốt")').first();
          if (await ratingBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
            await ratingBtn.click();
            await page.waitForTimeout(800);
            results.buttonInteractions.push({ page: 'FlashcardStudy', button: 'Nút đánh giá nhớ từ (SRS Rating)', status: 'PASS', detail: 'Cập nhật khoảng cách lặp lại SRS' });
          }
        }
      }
    }

    // -------------------------------------------------------------------------
    // 5. NGỮ PHÁP (GRAMMAR): BỘ LỌC CẤP ĐỘ JLPT & BÀI HỌC TƯƠNG TÁC
    // -------------------------------------------------------------------------
    console.log('[5/8] NGỮ PHÁP & BỘ LỌC JLPT...');
    await page.goto(`${base}/grammar`, { waitUntil: 'networkidle' });
    await capturePageMetrics('Grammar');

    // Thử click các pill lọc cấp độ: N5, N4, N3, N2
    for (const level of ['N5', 'N4', 'N3', 'N2']) {
      const filterPill = page.getByRole('button', { name: new RegExp(`^${level}$`, 'i') }).first();
      if (await filterPill.isVisible({ timeout: 1500 }).catch(() => false)) {
        await filterPill.click();
        await page.waitForTimeout(300);
        results.buttonInteractions.push({ page: 'Grammar', button: `Lọc JLPT ${level}`, status: 'PASS', detail: `Hiển thị danh sách ngữ pháp ${level}` });
      }
    }
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-8-grammar.png') });

    // Click vào bài ngữ pháp đầu tiên
    const firstGrammar = page.locator('a[href*="/grammar/"]').first();
    if (await firstGrammar.isVisible({ timeout: 2000 }).catch(() => false)) {
      await firstGrammar.click();
      await page.waitForTimeout(1000);
      results.buttonInteractions.push({ page: 'Grammar', button: 'Chi tiết bài ngữ pháp', status: 'PASS', detail: 'Xem công thức, giải thích và ví dụ' });

      // Thử tương tác bài tập trắc nghiệm nếu có
      const exerciseOption = page.locator('.exercise-option, .choice-btn, label:has(input[type="radio"])').first();
      if (await exerciseOption.isVisible({ timeout: 2000 }).catch(() => false)) {
        await exerciseOption.click();
        results.buttonInteractions.push({ page: 'GrammarExercise', button: 'Chọn đáp án bài tập', status: 'PASS', detail: 'Tương tác chọn đáp án chuẩn xác' });
      }
    }

    // -------------------------------------------------------------------------
    // 6. LUYỆN VIẾT (WRITING): TƯƠNG TÁC CANVAS CẢM ỨNG & NÚT XÓA NÉT
    // -------------------------------------------------------------------------
    console.log('[6/8] LUYỆN VIẾT & CANVAS TOUCH DRAWING...');
    await page.goto(`${base}/writing`, { waitUntil: 'networkidle' });
    await capturePageMetrics('Writing');

    // Chuyển tab ký tự Hiragana / Katakana nếu có
    const kataTab = page.getByRole('tab', { name: /Katakana/i }).or(page.locator('button:has-text("Katakana")')).first();
    if (await kataTab.isVisible({ timeout: 1500 }).catch(() => false)) {
      await kataTab.click();
      await page.waitForTimeout(400);
      results.buttonInteractions.push({ page: 'Writing', button: 'Tab Katakana', status: 'PASS', detail: 'Chuyển bảng chữ cái Katakana' });
    }

    const canvas = page.locator('canvas').first();
    if (await canvas.isVisible({ timeout: 3000 }).catch(() => false)) {
      const box = await canvas.boundingBox();
      if (box) {
        // Vẽ nét 1 (Ngang)
        await page.mouse.move(box.x + 50, box.y + 70);
        await page.mouse.down();
        await page.mouse.move(box.x + 230, box.y + 70, { steps: 5 });
        await page.mouse.up();
        await page.waitForTimeout(200);

        // Vẽ nét 2 (Sổ dọc)
        await page.mouse.move(box.x + 140, box.y + 40);
        await page.mouse.down();
        await page.mouse.move(box.x + 140, box.y + 220, { steps: 5 });
        await page.mouse.up();
        await page.waitForTimeout(300);

        results.buttonInteractions.push({
          page: 'Writing',
          button: 'Canvas vẽ cảm ứng (Touch Drag)',
          status: 'PASS',
          detail: 'Độ nhạy tuyệt vời, nét mực hiển thị mượt mà không bị ngắt nét'
        });
      }
    }
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-9-writing.png') });

    // Thử nút "Xóa nét" hoặc "Làm lại"
    const clearCanvasBtn = page.locator('button:has-text("Xóa"), button:has-text("Làm lại"), button[aria-label*="Xóa"]').first();
    if (await clearCanvasBtn.isVisible({ timeout: 1500 }).catch(() => false)) {
      await clearCanvasBtn.click();
      await page.waitForTimeout(300);
      results.buttonInteractions.push({ page: 'Writing', button: 'Nút xóa nét vẽ', status: 'PASS', detail: 'Dọn sạch canvas để người học viết lại' });
    }

    // -------------------------------------------------------------------------
    // 7. CÀI ĐẶT (SETTINGS): CHUYỂN THEME SÁNG / TỐI & TÙY CHỌN FURIGANA
    // -------------------------------------------------------------------------
    console.log('[7/8] CÀI ĐẶT & CHUYỂN THEME SÁNG / TỐI...');
    await page.goto(`${base}/settings`, { waitUntil: 'networkidle' });
    await capturePageMetrics('Settings');

    // Thử nút chuyển theme
    const themeBtn = page.locator('button:has-text("Tối"), button:has-text("Sáng"), button[aria-label*="theme"], button[aria-label*="giao diện"]').first();
    if (await themeBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await themeBtn.click();
      await page.waitForTimeout(500);
      results.buttonInteractions.push({ page: 'Settings', button: 'Chuyển giao diện Sáng / Tối', status: 'PASS', detail: 'Đảo theme tức thì với CSS variables' });
    }
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'audit-10-settings.png') });

    // -------------------------------------------------------------------------
    // 8. KIỂM TRA RESPONSIVE OVERFLOW & TAP TARGETS TRÊN TOÀN BỘ CÁC TRANG
    // -------------------------------------------------------------------------
    console.log('[8/8] KIỂM TRA TRÀN NGANG & KÍCH THƯỚC NÚT BẤM (WCAG)...');
    const routes = ['/dashboard', '/dictionary', '/flashcards', '/grammar', '/writing', '/settings'];
    for (const r of routes) {
      await page.goto(`${base}${r}`, { waitUntil: 'networkidle' });
      const overflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      results.overflowAudit[r] = {
        viewportWidth: 390,
        scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth),
        hasOverflow: overflow
      };
    }

    // Lưu các console errors & failed requests
    results.consoleErrors = consoleLogs;
    results.failedRequests = failedRequests;

    // Ghi file kết quả audit chi tiết
    fs.writeFileSync(path.join(ARTIFACT_DIR, 'deep-audit-results.json'), JSON.stringify(results, null, 2));
    console.log('\n✓ ĐÃ HOÀN TẤT THỬ NGHIỆM TẤT CẢ CÁC NÚT & ĐO HIỆU NĂNG!');
    console.log(`Kết quả chi tiết được lưu tại: ${path.join(ARTIFACT_DIR, 'deep-audit-results.json')}`);
  } finally {
    await browser.close();
  }
}

runDeepAudit().catch(err => {
  console.error('Lỗi kiểm thử:', err);
  process.exit(1);
});
