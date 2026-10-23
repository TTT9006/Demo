import { chromium } from 'playwright';
import assert from 'node:assert/strict';

const BASE_URL = 'http://127.0.0.1:5173';
const API_URL = 'http://127.0.0.1:3001';
const PDF_PATH = 'C:\\Users\\Hoang Vuong\\Downloads\\Bảng Từ Vựng Tiếng Nhật Bài 7A.pdf';
const ARTIFACT_IMG = 'C:\\Users\\Hoang Vuong\\.gemini\\antigravity\\brain\\5a630e95-19dd-436d-9b2e-b328813940b5\\mobile-pdf-import-success.png';

async function run() {
  const email = `tester_${Date.now()}@test.vn`;
  const password = 'Password123!';

  console.log('Registering fresh test user:', email);
  const regRes = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name: 'Mobile Tester' }),
  });
  assert.equal(regRes.status, 201, 'Failed to register test user');

  console.log('Launching browser with mobile viewport (390x844)...');
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  page.on('console', msg => console.log('[BROWSER]', msg.text()));
  page.on('pageerror', err => console.error('[BROWSER ERROR]', err.message));

  try {
    // 1. Login
    console.log('Navigating to login...');
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'domcontentloaded' });
    await page.locator('input[type="email"]').fill(email);
    await page.locator('input[type="password"]').fill(password);
    await page.getByRole('button', { name: 'Đăng nhập' }).click();
    await page.waitForURL('**/dashboard');
    console.log('Logged in successfully!');

    // 2. Navigate to /flashcards
    console.log('Navigating to /flashcards...');
    await page.goto(`${BASE_URL}/flashcards`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // 3. Find and click the Import/Thêm từ PDF button
    console.log('Opening import modal...');
    const importBtn = page.getByRole('button', { name: /Import PowerPoint \/ PDF/i });
    await importBtn.waitFor({ state: 'visible', timeout: 5000 });
    await importBtn.click();

    // 4. In modal, switch tab to PDF
    console.log('Switching to PDF tab...');
    await page.waitForTimeout(600);
    const pdfTabBtn = page.getByRole('button', { name: /Tài liệu PDF/i });
    await pdfTabBtn.waitFor({ state: 'visible' });
    await pdfTabBtn.click();
    await page.waitForTimeout(300);

    // 5. Upload the PDF file
    console.log('Uploading PDF file:', PDF_PATH);
    const fileInput = page.locator('.import-drop-box input[type="file"]');
    await fileInput.setInputFiles(PDF_PATH);

    // 6. Wait for parsing to finish (toast or summary showing cards count)
    console.log('Waiting for PDF parsing result...');
    await page.waitForFunction(() => {
      const text = document.body.innerText;
      return text.includes('từ vựng') && (text.includes('32') || text.includes('17'));
    }, { timeout: 15000 });

    const bodyText = await page.evaluate(() => document.body.innerText);
    const match = bodyText.match(/(\d+\s*từ\s*vựng|\d+\s*từ)/g);
    console.log('Parsed result text summary:', match);

    // Verify 32 cards
    const has32 = bodyText.includes('32 từ vựng') || bodyText.includes('32 từ');
    console.log('Contains 32 words check:', has32);
    assert.ok(has32, 'Should display exactly 32 words in the preview, not 17!');

    // Take mobile screenshot
    await page.screenshot({ path: ARTIFACT_IMG });
    console.log('Saved screenshot to:', ARTIFACT_IMG);

    // Verify cards content on mobile by inspecting input values
    const inputValues = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input.table-input, input.import-card-term-input'));
      return inputs.map((i) => i.value).filter(Boolean);
    });

    console.log('Total input values found in preview:', inputValues.length);
    console.log('First 10 input values:', inputValues.slice(0, 10));

    const allValuesJoined = inputValues.join(' ');
    console.log('Kana items check:', {
      spoon: allValuesJoined.includes('スプーン'),
      knife: allValuesJoined.includes('ナイフ'),
      fork: allValuesJoined.includes('フォーク'),
      scissors: allValuesJoined.includes('はさみ'),
      pc: allValuesJoined.includes('パソコン'),
      mobile: allValuesJoined.includes('ケータイ') || allValuesJoined.includes('携帯'),
      last: allValuesJoined.includes('ごちそうさまでした')
    });

    assert.ok(allValuesJoined.includes('スプーン'), 'Should contain スプーン');
    assert.ok(allValuesJoined.includes('ナイフ'), 'Should contain ナイフ');
    assert.ok(allValuesJoined.includes('フォーク'), 'Should contain フォーク');
    assert.ok(allValuesJoined.includes('はさみ'), 'Should contain はさみ');
    assert.ok(allValuesJoined.includes('パソコン'), 'Should contain パソコン');
    assert.ok(allValuesJoined.includes('ごちそうさまでした'), 'Should contain ごちそうさまでした');

    console.log('ALL VERIFICATIONS PASSED 100%!');
  } finally {
    await browser.close();
  }
}

run().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
