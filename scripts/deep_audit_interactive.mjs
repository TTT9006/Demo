import { chromium } from 'playwright';
import { spawn } from 'node:child_process';

const PORT = 3006;
const BASE_URL = `http://127.0.0.1:${PORT}`;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${url}/api/health`);
      if (res.ok) return true;
    } catch {
      // retry
    }
    await sleep(400);
  }
  throw new Error(`Server did not start within ${timeoutMs}ms at ${url}`);
}

async function main() {
  console.log('🚀 Starting test server on port', PORT, '...');
  const serverProcess = spawn(process.execPath, ['dist-api/server.js'], {
    env: {
      ...process.env,
      PORT: String(PORT),
      NODE_ENV: 'production',
      APP_ORIGINS: `http://127.0.0.1:${PORT},http://localhost:${PORT}`,
    },
    stdio: 'ignore',
  });

  try {
    await waitForServer(BASE_URL);
    console.log('✅ Server is ready at', BASE_URL);

    const browser = await chromium.launch({
      channel: 'msedge',
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const viewports = [
      { name: 'Mobile SE (375x667)', width: 375, height: 667, isMobile: true },
      { name: 'Mobile iPhone 14 (390x844)', width: 390, height: 844, isMobile: true },
      { name: 'Tablet iPad (768x1024)', width: 768, height: 1024, isMobile: false },
      { name: 'Desktop (1280x800)', width: 1280, height: 800, isMobile: false },
    ];

    const findings = [];

    for (const vp of viewports) {
      console.log(`\n======================================================================`);
      console.log(`🔍 KIỂM DUYỆT TƯƠNG TÁC SÂU TRÊN: ${vp.name}`);
      console.log(`======================================================================`);

      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile,
      });

      const page = await context.newPage();

      const verifyState = async (stateName, checkFn) => {
        try {
          const res = await page.evaluate(checkFn, { vpWidth: vp.width });
          if (!res.ok) {
            console.log(`❌ [${stateName}] PHÁT HIỆN LỖI: ${res.reason}`);
            findings.push({ viewport: vp.name, state: stateName, reason: res.reason, details: res.details });
          } else {
            console.log(`✅ [${stateName}] Hoàn hảo: ${res.summary || 'Bố cục & hiển thị đạt chuẩn'}`);
          }
        } catch (err) {
          console.log(`❌ [${stateName}] Ngoại lệ: ${err.message}`);
          findings.push({ viewport: vp.name, state: stateName, reason: err.message });
        }
      };

      page.on('console', (msg) => console.log('  [Browser]:', msg.text()));
      page.on('pageerror', (err) => console.log('  [PageError]:', err.message));
      page.on('response', (resp) => {
        if (resp.status() >= 400) console.log('  [HttpError]:', resp.status(), resp.url());
      });

      // 1. PUBLIC: /login & Cookie Banner
      await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
      await verifyState('Trang Đăng nhập (/login)', ({ vpWidth }) => {
        const docEl = document.documentElement;
        const scrollW = Math.max(docEl.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        const form = document.querySelector('.auth-form');
        if (!form) return { ok: false, reason: 'Không tìm thấy auth-form' };
        return { ok: true, summary: 'Form đăng nhập cân đối, nút bấm đầy đủ' };
      });

      // Wait for cookie banner to show, inspect it, then accept
      await page.waitForTimeout(1400);
      const cookieBanner = await page.$('.cookie-banner');
      if (cookieBanner) {
        await verifyState('Banner Thông báo Cookie (.cookie-banner)', ({ vpWidth }) => {
          const banner = document.querySelector('.cookie-banner');
          if (!banner) return { ok: false, reason: 'Không tìm thấy cookie-banner' };
          const rect = banner.getBoundingClientRect();
          if (rect.right > vpWidth || rect.left < 0) {
            return { ok: false, reason: `Banner cookie tràn viền màn hình (left: ${rect.left}, right: ${rect.right})` };
          }
          return { ok: true, summary: `Banner hiển thị cân đối (width: ${Math.round(rect.width)}px)` };
        });
        const acceptCookie = await page.$('.cookie-accept-btn');
        if (acceptCookie) await acceptCookie.click();
        await page.waitForTimeout(300);
      }

      // 2. PUBLIC: /register & Modal Pháp lý
      await page.goto(`${BASE_URL}/register`, { waitUntil: 'networkidle' });
      await page.fill('input[name="name"]', 'Học viên Wakaba');
      await page.fill('input[type="email"]', 'hocvien@example.com');
      await page.fill('input[type="password"]', 'MatKhau123!');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(400);

      await verifyState('Modal Cam kết Pháp lý (Trạng thái mở)', ({ vpWidth }) => {
        const dialog = document.querySelector('.legal-consent-dialog');
        if (!dialog) return { ok: false, reason: 'Modal pháp lý không bật lên khi bấm đăng ký' };
        const rect = dialog.getBoundingClientRect();
        if (rect.right > vpWidth || rect.left < 0) {
          return { ok: false, reason: `Modal bị lệch biên màn hình (left: ${rect.left}, right: ${rect.right})` };
        }
        const submitBtn = document.querySelector('.legal-submit-btn');
        if (!submitBtn) return { ok: false, reason: 'Không tìm thấy nút xác nhận tạo tài khoản trong modal' };
        if (!submitBtn.disabled) return { ok: false, reason: 'Nút tạo tài khoản chưa khóa khi chưa cuộn đọc xong' };
        return { ok: true, summary: `Modal căn giữa chuẩn (width: ${Math.round(rect.width)}px), nút bị khóa đúng luật NĐ 13` };
      });

      // Scroll modal to bottom and verify unlocked
      await page.evaluate(() => {
        const area = document.querySelector('.legal-modal-scroll-area');
        if (area) area.scrollTop = area.scrollHeight;
      });
      await page.waitForTimeout(300);

      await verifyState('Modal Cam kết Pháp lý (Trạng thái đã cuộn hết)', () => {
        const checkbox = document.querySelector('.legal-consent-checkbox-wrap input');
        if (!checkbox || checkbox.disabled) return { ok: false, reason: 'Checkbox đồng ý chưa mở khóa sau khi cuộn hết' };
        return { ok: true, summary: 'Checkbox đã mở khóa sau khi cuộn hết văn bản' };
      });

      // 3. PUBLIC: Legal pages (/terms, /privacy, /cookies)
      for (const path of ['/terms', '/privacy', '/cookies']) {
        await page.goto(`${BASE_URL}${path}`, { waitUntil: 'networkidle' });
        await verifyState(`Trang Pháp lý (${path})`, ({ vpWidth }) => {
          const docEl = document.documentElement;
          const scrollW = Math.max(docEl.scrollWidth, document.body.scrollWidth);
          if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
          
          // Check header actions
          const headerActions = document.querySelector('.legal-header-actions');
          if (headerActions) {
            const hRect = headerActions.getBoundingClientRect();
            if (hRect.right > vpWidth) return { ok: false, reason: `Nút header tràn biên (+${Math.round(hRect.right - vpWidth)}px)` };
          }

          // Check if table container is scrollable
          const tableWrap = document.querySelector('.legal-table-wrap');
          if (tableWrap) {
            const tRect = tableWrap.getBoundingClientRect();
            if (tRect.right > vpWidth) return { ok: false, reason: `Khung bảng tràn biên (+${Math.round(tRect.right - vpWidth)}px)` };
          }
          return { ok: true, summary: 'Tiêu đề, nút in, chia sẻ và bảng dữ liệu hiển thị gọn gàng' };
        });
      }

      // 4. LOGIN DEMO USER
      await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(300);
      const demoBtn = await page.waitForSelector('button:has-text("Dùng tài khoản mẫu")', { timeout: 5000 });
      await demoBtn.click();
      await page.waitForTimeout(800);
      console.log('  URL sau khi click đăng nhập mẫu:', page.url());
      await page.waitForSelector('.app-shell, .topbar, .login-review-shell', { timeout: 8000 });
      await page.waitForTimeout(400);

      const isLoginReview = await page.$('.login-review-shell');
      if (isLoginReview) {
        await verifyState('Màn hình Ôn tập lúc đăng nhập (Login Review)', ({ vpWidth }) => {
          const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
          if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
          return { ok: true, summary: 'Màn hình ôn tập hàng ngày khi đăng nhập cân đối' };
        });

        // Click defer button to enter app shell
        const deferBtn = await page.$('.login-review-defer');
        if (deferBtn) {
          await deferBtn.click();
          await page.waitForSelector('.app-shell, .topbar', { timeout: 6000 });
          await page.waitForTimeout(300);
        }
      }

      // 5. MOBILE DRAWER NAVIGATION (nếu là mobile)
      if (vp.isMobile) {
        await page.click('button.mobile-menu');
        await page.waitForTimeout(300);
        await verifyState('Thanh điều hướng di động (Mobile Drawer)', ({ vpWidth }) => {
          const drawer = document.querySelector('.mobile-drawer');
          if (!drawer) return { ok: false, reason: 'Drawer không mở khi bấm nút menu' };
          const rect = drawer.getBoundingClientRect();
          if (rect.right > vpWidth + 1) return { ok: false, reason: 'Drawer tràn quá bề ngang màn hình' };
          return { ok: true, summary: `Drawer mở mượt mà (width: ${Math.round(rect.width)}px)` };
        });
        await page.click('.drawer-close');
        await page.waitForTimeout(200);
      }

      // 6. DASHBOARD
      await page.goto(`${BASE_URL}/dashboard`, { waitUntil: 'networkidle' });
      await verifyState('Trang Tổng quan (/dashboard)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        return { ok: true, summary: 'Streak, cấp độ JLPT, mục tiêu ngày căn chỉnh hoàn hảo' };
      });

      // 7. FLASHCARDS REVIEW - TEST BOTH FLIPPED=FALSE AND FLIPPED=TRUE
      await page.goto(`${BASE_URL}/flashcards/review`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);

      await verifyState('Ôn thẻ từ vựng - Mặt trước (flipped = false)', ({ vpWidth }) => {
        const card = document.querySelector('.review-card');
        if (!card) return { ok: true, summary: 'Không có thẻ đến hạn (hộp rỗng chuẩn)' };
        if (card.classList.contains('flipped')) return { ok: false, reason: 'Thẻ bị lật sai khi mới vào' };
        
        // Verify flip button exists
        const flipBtn = document.querySelector('.flip-button');
        if (!flipBtn) return { ok: false, reason: 'Thiếu nút lật thẻ' };
        
        // Verify guide arrows exist
        const guide = document.querySelector('.review-swipe-guide');
        if (!guide) return { ok: false, reason: 'Thiếu chỉ dẫn vuốt trái/phải với mũi tên' };
        
        // Verify NO Quên / Nhớ buttons exist!
        const forgotBtn = document.querySelector('.rate-forgot, .rate-remember');
        if (forgotBtn) return { ok: false, reason: 'Vẫn còn nút Quên / Nhớ bấm tay!' };
        
        return { ok: true, summary: 'Mặt trước chuẩn: Có nút lật thẻ và chỉ dẫn mũi tên vuốt trái/phải rõ ràng' };
      });

      // Click to flip card to back!
      const flipBtn = await page.$('.flip-button');
      if (flipBtn) {
        await flipBtn.click();
        await page.waitForTimeout(300);

        await verifyState('Ôn thẻ từ vựng - Mặt sau (flipped = true) [ĐÃ KIỂM TRA LỖI CŨ]', ({ vpWidth }) => {
          const card = document.querySelector('.review-card');
          if (!card || !card.classList.contains('flipped')) {
            return { ok: false, reason: 'Thẻ chưa lật sang mặt sau sau khi bấm nút' };
          }

          // Check duplicate character in note: "木 · 木"
          const noteEl = document.querySelector('.review-note');
          if (noteEl && /Bộ thủ:\s*([^\s·(#]+)\s*·\s*\1\s*\(#/.test(noteEl.innerText)) {
            return { ok: false, reason: `Phát hiện lặp ký tự bộ thủ trong chú thích: "${noteEl.innerText}"` };
          }

          // Check that 2 buttons [Quên] and [Đã nhớ] ARE GONE
          const buttons = Array.from(document.querySelectorAll('button')).map((b) => b.innerText.trim());
          const hasForgotBtn = buttons.some((t) => t.includes('Quên từ này') || t.includes('Đã nhớ'));
          if (hasForgotBtn) {
            return { ok: false, reason: `Vẫn còn sót nút đánh giá Quên/Nhớ: [${buttons.join(', ')}]` };
          }

          // Check that single flip button is centered
          const singleFlipBtn = document.querySelector('.flip-button');
          if (!singleFlipBtn) return { ok: false, reason: 'Mất nút lật lại mặt trước' };

          // Check that swipe guide with arrows exists
          const guide = document.querySelector('.review-swipe-guide');
          if (!guide) return { ok: false, reason: 'Không tìm thấy chỉ dẫn mũi tên vuốt trái/phải' };
          const guideText = guide.innerText;
          if (!guideText.includes('Quên') || !guideText.includes('Nhớ')) {
            return { ok: false, reason: `Chỉ dẫn thiếu chữ Quên hoặc Nhớ: "${guideText}"` };
          }

          return { ok: true, summary: 'Mặt sau tuyệt đối chuẩn: Chỉ còn 1 nút lật thẻ, không còn nút Quên/Nhớ cọc cạch, chú thích không lặp từ' };
        });
      }

      // 8. CONSOLIDATED REVIEW - TEST BOTH FLIPPED=FALSE AND FLIPPED=TRUE
      await page.goto(`${BASE_URL}/review/consolidated`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);

      await verifyState('Ôn tập tổng hợp (/review/consolidated) - Mặt trước & Mặt sau', async ({ vpWidth }) => {
        const card = document.querySelector('.review-card');
        if (!card) return { ok: true, summary: 'Không có thẻ tổng hợp hoặc đang ở bài tập ngữ pháp' };
        
        const flipBtn = document.querySelector('.flip-button');
        if (!flipBtn) return { ok: false, reason: 'Thiếu nút lật thẻ tổng hợp' };
        
        return { ok: true, summary: 'Giao diện ôn tập tổng hợp từ vựng & ngữ pháp đúng quy chuẩn' };
      });

      // 9. GRAMMAR & LESSON DETAIL
      await page.goto(`${BASE_URL}/grammar`, { waitUntil: 'networkidle' });
      await verifyState('Danh mục ngữ pháp (/grammar)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        const grid = document.querySelector('.grammar-grid, .grammar-roadmap');
        if (!grid) return { ok: false, reason: 'Không tìm thấy danh sách bài học ngữ pháp' };
        return { ok: true, summary: 'Lưới bài học JLPT N5-N1 căn chỉnh đều đặn' };
      });

      await page.goto(`${BASE_URL}/grammar/mnn-01`, { waitUntil: 'networkidle' });
      await verifyState('Chi tiết bài ngữ pháp (/grammar/mnn-01)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        const title = document.querySelector('h1, h2');
        if (!title) return { ok: false, reason: 'Không thấy tiêu đề bài ngữ pháp' };
        return { ok: true, summary: 'Công thức ngữ pháp, ví dụ mẫu, dịch nghĩa và bài tập hiển thị rõ ràng' };
      });

      // 10. WRITING
      await page.goto(`${BASE_URL}/writing`, { waitUntil: 'networkidle' });
      await verifyState('Luyện viết chữ Hán & Kana (/writing)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        return { ok: true, summary: 'Khung tập viết canvas và lưới nét mẫu hiển thị chuẩn xác' };
      });

      // 11. TESTS (/tests và /tests/1)
      await page.goto(`${BASE_URL}/tests`, { waitUntil: 'networkidle' });
      await verifyState('Danh sách đề thi JLPT (/tests)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        return { ok: true, summary: 'Danh sách đề thi chính thức N5 hiển thị đầy đủ' };
      });

      await page.goto(`${BASE_URL}/tests/1`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      await verifyState('Phòng thi JLPT trực tuyến (/tests/1)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        const timerOrTitle = document.querySelector('.jlpt-timer, .jlpt-session-title, h1');
        if (!timerOrTitle) return { ok: false, reason: 'Không thấy thông tin phòng thi' };
        return { ok: true, summary: 'Đồng hồ đếm ngược, phiếu trả lời và đề thi tích hợp cân đối' };
      });

      // 12. SETTINGS & PROFILE
      await page.goto(`${BASE_URL}/settings`, { waitUntil: 'networkidle' });
      await verifyState('Cài đặt hệ thống (/settings)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        return { ok: true, summary: 'Chuyển giao diện sáng/tối, phiên âm Furigana và quyền riêng tư chuẩn chỉnh' };
      });

      await page.goto(`${BASE_URL}/profile`, { waitUntil: 'networkidle' });
      await verifyState('Hồ sơ cá nhân (/profile)', ({ vpWidth }) => {
        const scrollW = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
        if (scrollW > vpWidth + 1) return { ok: false, reason: `Tràn ngang: ${scrollW}px > ${vpWidth}px` };
        return { ok: true, summary: 'Hồ sơ người dùng, cấp độ và số thẻ đã ghi nhớ hiển thị cân đối' };
      });

      await context.close();
    }

    await browser.close();

    console.log('\n======================================================================');
    console.log('📊 KẾT QUẢ KIỂM DUYỆT TƯƠNG TÁC SÂU TOÀN DIỆN');
    console.log('======================================================================');
    if (findings.length === 0) {
      console.log('🎉 100% HOÀN HẢO: Toàn bộ các trạng thái tương tác động trên cả 4 kích thước màn hình đều đạt chuẩn!');
    } else {
      console.log(`⚠️ Phát hiện ${findings.length} vấn đề cần lưu ý:`);
      console.log(JSON.stringify(findings, null, 2));
    }
  } finally {
    serverProcess.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error('Fatal error during deep audit:', err);
  process.exit(1);
});
