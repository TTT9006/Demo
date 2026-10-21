import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const PORT = 3005;
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
      // wait and retry
    }
    await sleep(400);
  }
  throw new Error(`Server did not start within ${timeoutMs}ms at ${url}`);
}

async function main() {
  console.log('🚀 Starting test server on port', PORT, '...');
  const serverProcess = spawn(process.execPath, ['dist-api/server.js'], {
    env: { ...process.env, PORT: String(PORT), NODE_ENV: 'production' },
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
      { name: 'Mobile SE (375x667)', width: 375, height: 667 },
      { name: 'Mobile iPhone 14 (390x844)', width: 390, height: 844 },
      { name: 'Tablet iPad (768x1024)', width: 768, height: 1024 },
      { name: 'Desktop (1280x800)', width: 1280, height: 800 },
    ];

    const issues = [];

    for (const vp of viewports) {
      console.log(`\n======================================================`);
      console.log(`📱 KIỂM TRA BỐ CỤC: ${vp.name}`);
      console.log(`======================================================`);

      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.width < 768,
        hasTouch: vp.width < 768,
      });

      const page = await context.newPage();

      // Helper function to check page overflow and misaligned elements
      const inspectLayout = async (pageName, url) => {
        await page.goto(`${BASE_URL}${url}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(300);

        const evaluation = await page.evaluate(({ vpWidth }) => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const hasHorizontalOverflow = scrollWidth > vpWidth + 1;

          // Find overflowing elements
          const overflowingElements = [];
          const allElements = document.querySelectorAll('*');
          for (const el of allElements) {
            const rect = el.getBoundingClientRect();
            // Ignore hidden or svg path elements
            if (rect.width === 0 || rect.height === 0 || el.tagName === 'path') continue;

            // If element is inside an intentional horizontally scrollable wrapper (like .legal-table-wrap),
            // only flag an issue if the wrapper itself exceeds the viewport
            const scrollContainer = el.closest('.legal-table-wrap, [style*="overflow-x: auto"], [style*="overflow-x: scroll"]');
            if (scrollContainer && scrollContainer !== el) {
              const contRect = scrollContainer.getBoundingClientRect();
              if (contRect.right <= vpWidth + 2) {
                continue;
              }
            }

            if (rect.right > vpWidth + 2) {
              const selector = el.className
                ? `${el.tagName.toLowerCase()}.${String(el.className).split(' ').slice(0, 2).join('.')}`
                : el.id
                ? `${el.tagName.toLowerCase()}#${el.id}`
                : el.tagName.toLowerCase();
              overflowingElements.push({
                selector,
                right: Math.round(rect.right),
                excess: Math.round(rect.right - vpWidth),
                text: el.innerText ? el.innerText.slice(0, 40) : '',
              });
            }
          }

          // Check flex/grid items with zero min-width or awkward misalignment
          const misalignedFlex = [];
          const flexContainers = document.querySelectorAll('.app-shell, .topbar, .footer, .legal-header-inner, .auth-form, .dialog-content');
          for (const fc of flexContainers) {
            const rect = fc.getBoundingClientRect();
            if (rect.right > vpWidth + 1) {
              misalignedFlex.push({
                class: fc.className,
                right: rect.right,
                excess: rect.right - vpWidth,
              });
            }
          }

          return {
            scrollWidth,
            vpWidth,
            hasHorizontalOverflow,
            overflowCount: overflowingElements.length,
            overflowSample: overflowingElements.slice(0, 5),
            misalignedFlex,
          };
        }, { vpWidth: vp.width });

        if (evaluation.hasHorizontalOverflow || evaluation.overflowCount > 0) {
          console.log(`❌ [${pageName}] Tràn chiều ngang! scrollWidth: ${evaluation.scrollWidth}px > viewport: ${vp.width}px (+${evaluation.scrollWidth - vp.width}px)`);
          evaluation.overflowSample.forEach((o) => {
            console.log(`    ⚠️ Phần tử vượt biên: <${o.selector}> vượt ${o.excess}px (right: ${o.right}px) | Text: "${o.text}"`);
          });
          issues.push({
            page: pageName,
            viewport: vp.name,
            type: 'horizontal_overflow',
            excess: evaluation.scrollWidth - vp.width,
            sample: evaluation.overflowSample,
          });
        } else {
          console.log(`✅ [${pageName}] Bố cục chuẩn (scrollWidth: ${evaluation.scrollWidth}px == ${vp.width}px)`);
        }
      };

      // 1. Public routes
      await inspectLayout('Đăng nhập (/login)', '/login');
      await inspectLayout('Đăng ký (/register)', '/register');
      await inspectLayout('Điều khoản (/terms)', '/terms');
      await inspectLayout('Chính sách bảo mật (/privacy)', '/privacy');
      await inspectLayout('Chính sách Cookie (/cookies)', '/cookies');

      // 2. Test Registration Legal Gate Modal
      await page.goto(`${BASE_URL}/register`);
      await page.fill('input[name="name"]', 'Test Learner');
      await page.fill('input[type="email"]', 'testuser@example.com');
      await page.fill('input[type="password"]', 'Password123!');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(500);

      // Check modal dialog
      const modalEval = await page.evaluate(({ vpWidth }) => {
        const dialog = document.querySelector('.legal-consent-dialog');
        if (!dialog) return { found: false };
        const rect = dialog.getBoundingClientRect();
        return {
          found: true,
          width: Math.round(rect.width),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          overflows: rect.right > vpWidth || rect.left < 0,
        };
      }, { vpWidth: vp.width });

      if (modalEval.found) {
        if (modalEval.overflows) {
          console.log(`❌ [Modal Chấp thuận Pháp lý] Bị lệch/tràn màn hình! right: ${modalEval.right}px > vp: ${vp.width}px`);
          issues.push({
            page: 'Legal Consent Modal',
            viewport: vp.name,
            type: 'modal_overflow',
            rect: modalEval,
          });
        } else {
          console.log(`✅ [Modal Chấp thuận Pháp lý] Căn giữa chuẩn xác (width: ${modalEval.width}px, left: ${modalEval.left}px)`);
        }
      }

      // 3. Log in with Demo user to test Authenticated Pages
      await page.goto(`${BASE_URL}/login`);
      await page.click('button:has-text("Dùng tài khoản mẫu")');
      await page.waitForSelector('.topbar, .app-shell, .sidebar', { timeout: 6000 }).catch(() => {});
      await page.waitForTimeout(300);

      await inspectLayout('Tổng quan (/dashboard)', '/dashboard');
      await inspectLayout('Từ điển (/dictionary)', '/dictionary');
      await inspectLayout('Chi tiết từ vựng (/dictionary/1)', '/dictionary/1');
      await inspectLayout('Thẻ từ vựng (/flashcards)', '/flashcards');
      await inspectLayout('Chi tiết bộ thẻ (/flashcards/1)', '/flashcards/1');
      await inspectLayout('Ngữ pháp (/grammar)', '/grammar');
      await inspectLayout('Bài học ngữ pháp (/grammar/n5_wa)', '/grammar/n5_wa');
      await inspectLayout('Ôn tập ngữ pháp (/grammar/review)', '/grammar/review');
      await inspectLayout('Luyện viết (/writing)', '/writing');
      await inspectLayout('Kiểm tra (/tests)', '/tests');
      await inspectLayout('Bài thi JLPT (/tests/1)', '/tests/1');
      await inspectLayout('Tiến độ học tập (/progress)', '/progress');
      await inspectLayout('Cài đặt (/settings)', '/settings');
      await inspectLayout('Hồ sơ cá nhân (/profile)', '/profile');

      await context.close();
    }

    await browser.close();

    console.log('\n======================================================');
    console.log('📊 TỔNG KẾT BÁO CÁO KIỂM TRA BỐ CỤC');
    console.log('======================================================');
    if (issues.length === 0) {
      console.log('🎉 TUYỆT VỜI: Không phát hiện bất kỳ trang nào bị lệch hoặc tràn màn hình!');
    } else {
      console.log(`⚠️ Phát hiện ${issues.length} vấn đề bố cục cần tinh chỉnh:`);
      console.log(JSON.stringify(issues, null, 2));
    }

  } finally {
    serverProcess.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error('Fatal error during audit:', err);
  process.exit(1);
});
