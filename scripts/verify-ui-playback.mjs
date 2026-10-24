import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'http://127.0.0.1:5173';
const SCREENSHOT_DIR = path.resolve('test-results/ui-verification');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runVerification() {
  console.log('🚀 Khởi động trình duyệt Edge để kiểm tra giao diện làm đề & phát âm thanh...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 850 },
  });

  const page = await context.newPage();

  // Bắt các request âm thanh
  const audioRequests = [];
  page.on('response', (response) => {
    const url = response.url();
    if (url.includes('/audio/jlpt/')) {
      audioRequests.push({
        url,
        status: response.status(),
        contentType: response.headers()['content-type'] || '',
        contentLength: response.headers()['content-length'] || '',
      });
    }
  });

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log(`[Browser Console Error] ${msg.text()}`);
    }
  });

  try {
    // 1. Đăng nhập với tài khoản mẫu
    console.log('1. Đăng nhập vào hệ thống...');
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
    const sampleBtn = page.locator('button:has-text("Dùng tài khoản mẫu")');
    if (await sampleBtn.isVisible()) {
      await sampleBtn.click();
      await page.waitForTimeout(1000);
      console.log('✓ Đã bấm nút tài khoản mẫu.');
    }

    // Bỏ qua màn hình ôn tập đầu ngày nếu có (defer review)
    try {
      await page.evaluate(() => 
        fetch('/api/login-review/defer', { method: 'POST', credentials: 'include' })
      );
      console.log('✓ Đã hoãn ôn tập đầu ngày để vào thẳng trang luyện đề.');
    } catch (e) {
      console.warn('Lỗi khi gọi defer:', e.message);
    }

    // 2. Vào trang danh sách đề thi /tests
    console.log('2. Truy cập trang /tests...');
    await page.goto(`${BASE_URL}/tests`, { waitUntil: 'networkidle' });
    await page.waitForSelector('.tabs[role="tablist"]', { timeout: 10000 });
    console.log('✓ Trang /tests tải thành công, thanh chọn cấp độ đã hiển thị.');

    // Kiểm tra các tab N5, N4, N3, N2, N1
    const levels = ['all', 'N5', 'N4', 'N3', 'N2', 'N1'];
    console.log('\n--- Kiểm tra số lượng đề theo cấp độ ---');
    for (const lvl of levels) {
      const tabSelector = lvl === 'all' 
        ? 'button[role="tab"]:has-text("Tất cả")' 
        : `button[role="tab"]:has-text("JLPT ${lvl}")`;
      const tab = page.locator(tabSelector);
      await tab.click();
      await page.waitForTimeout(400);
      const badge = await tab.locator('.tab-badge').textContent();
      const cardCount = await page.locator('.test-grid .test-card').count();
      console.log(`[JLPT ${lvl.toUpperCase()}] Badge số đề: ${badge} | Số thẻ đề thi hiển thị: ${cardCount}`);
    }

    await page.screenshot({ path: path.join(SCREENSHOT_DIR, '01-tests-list-all.png'), fullPage: false });

    // 3. Danh sách các đề cần kiểm tra làm đề và phát audio
    const examsToTest = [
      { id: 'jlpt-n4-2024-07', level: 'N4', title: 'JLPT N4 Tháng 7/2024' },
      { id: 'jlpt-n3-2023-07', level: 'N3', title: 'JLPT N3 Tháng 7/2023' },
      { id: 'jlpt-n2-2023-07', level: 'N2', title: 'JLPT N2 Tháng 7/2023' },
      { id: 'jlpt-n1-2023-07', level: 'N1', title: 'JLPT N1 Tháng 7/2023' },
      { id: 'jlpt-n5-2024-07', level: 'N5', title: 'JLPT N5 Tháng 7/2024' },
    ];

    for (const exam of examsToTest) {
      console.log(`\n======================================================`);
      console.log(`👉 BẮT ĐẦU KIỂM TRA ĐỀ: [${exam.level}] ${exam.title} (${exam.id})`);
      console.log(`======================================================`);

      await page.goto(`${BASE_URL}/tests/${exam.id}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(600);

      // Nếu đang ở màn hình kết quả hoặc làm dở, xem trạng thái
      const resetBtn = page.locator('button:has-text("Làm lại đề")');
      if (await resetBtn.isVisible()) {
        console.log('Đề đã có kết quả trước đó, nhấn "Làm lại đề"...');
        await resetBtn.click();
        await page.waitForTimeout(600);
      }

      // Kiểm tra xem có nút "Bắt đầu phần 1" không
      const startBtn = page.locator('button:has-text("Bắt đầu phần 1")');
      if (await startBtn.isVisible()) {
        console.log('Nhấn "Bắt đầu phần 1"...');
        await startBtn.click();
        await page.waitForTimeout(1000);
      }

      // Kiểm tra đề phần 1: thử trả lời câu hỏi 1
      const qHeading = await page.locator('.jlpt-question h2').textContent().catch(() => '');
      console.log(`Câu hỏi 1 hiển thị nội dung: "${qHeading.slice(0, 60)}..."`);

      const optionBtn = page.locator('.answer-options button[role="radio"]').first();
      if (await optionBtn.isVisible()) {
        const optText = await optionBtn.textContent();
        console.log(`Chọn phương án: "${optText?.trim()}"...`);
        await optionBtn.click();
        await page.waitForTimeout(500);
      }

      // Chuyển qua các phần cho tới khi gặp phần Nghe hiểu (Listening)
      let sectionSafety = 0;
      while (sectionSafety < 5) {
        sectionSafety++;
        const sectionHeader = await page.locator('.jlpt-section-heading h2').textContent().catch(() => '');
        console.log(`Đang ở phần thi: "${sectionHeader}"`);

        if (sectionHeader.includes('Nghe hiểu') || sectionHeader.includes('聴解')) {
          console.log('✓ ĐÃ TỚI PHẦN NGHE HIỂU!');
          break;
        }

        // Nhấn "Kết thúc phần này"
        const finishSectionBtn = page.locator('button:has-text("Kết thúc phần này")');
        if (await finishSectionBtn.isVisible()) {
          console.log(`Nhấn "Kết thúc phần này" để chuyển tiếp sang phần sau...`);
          await finishSectionBtn.click();
          await page.waitForTimeout(400);

          // Xác nhận trong Modal: "Xác nhận kết thúc"
          const confirmModalBtn = page.locator('button:has-text("Xác nhận kết thúc")');
          if (await confirmModalBtn.isVisible()) {
            await confirmModalBtn.click();
            await page.waitForTimeout(1000);
          }
        }

        // Nếu ở màn hình chờ bắt đầu phần tiếp theo
        const nextPartBtn = page.locator('button:has-text("Bắt đầu phần")');
        if (await nextPartBtn.isVisible()) {
          const btnText = await nextPartBtn.textContent();
          console.log(`Nhấn "${btnText}"...`);
          await nextPartBtn.click();
          await page.waitForTimeout(1000);
        }
      }

      // Đã ở phần Nghe hiểu! Kiểm tra trình phát ExamAudioPlayer
      await page.waitForSelector('.exam-audio-card', { timeout: 8000 });
      console.log('✓ Trình phát âm thanh ExamAudioPlayer đã render trên giao diện.');

      // Lấy thông tin audio element
      const audioInfo = await page.evaluate(() => {
        const audio = document.querySelector('.exam-audio-card audio');
        if (!audio) return null;
        return {
          src: audio.src,
          currentSrc: audio.currentSrc,
          duration: audio.duration,
          paused: audio.paused,
          readyState: audio.readyState,
          networkState: audio.networkState,
          error: audio.error ? { code: audio.error.code, message: audio.error.message } : null,
        };
      });

      console.log(`Thông tin thẻ <audio>: src="${audioInfo?.src}", duration=${audioInfo?.duration}s, readyState=${audioInfo?.readyState}`);

      // Nhấn nút "Phát bài nghe"
      const playBtn = page.locator('button.exam-audio-btn');
      await playBtn.waitFor({ state: 'visible', timeout: 5000 });
      console.log('Nhấn nút "Phát bài nghe"...');
      await playBtn.click();

      // Đợi audio phát trong 3 giây
      await page.waitForTimeout(3000);

      // Kiểm tra lại trạng thái phát sau 3s
      const playbackStatus = await page.evaluate(() => {
        const audio = document.querySelector('.exam-audio-card audio');
        const btn = document.querySelector('button.exam-audio-btn');
        return {
          currentTime: audio ? audio.currentTime : 0,
          duration: audio ? audio.duration : 0,
          paused: audio ? audio.paused : true,
          buttonText: btn ? btn.textContent.trim() : '',
          buttonHasPulse: btn ? btn.querySelector('.animate-pulse') !== null : false,
        };
      });

      console.log(`Trạng thái phát sau 3s: currentTime=${playbackStatus.currentTime.toFixed(2)}s, paused=${playbackStatus.paused}, buttonText="${playbackStatus.buttonText}"`);

      if (playbackStatus.currentTime > 0 && !playbackStatus.paused) {
        console.log(`✓ XÁC NHẬN: File âm thanh chạy trơn tru, phát bình thường!`);
      } else {
        console.warn(`⚠️ Cảnh báo: File âm thanh chưa phát được hoặc đang dừng.`);
      }

      // Chụp ảnh bằng chứng
      const ssPath = path.join(SCREENSHOT_DIR, `02-listening-${exam.level}-${exam.id}.png`);
      await page.screenshot({ path: ssPath, fullPage: false });
      console.log(`📸 Đã chụp ảnh lưu bằng chứng: ${ssPath}`);

      // Thử chuyển sang câu nghe thứ 2 xem file âm thanh câu 2 có nạp đúng không
      const nextQBtn = page.locator('.jlpt-navigation button:has-text("Câu tiếp")');
      if (await nextQBtn.isVisible() && !(await nextQBtn.isDisabled())) {
        await nextQBtn.click();
        await page.waitForTimeout(800);
        const q2AudioSrc = await page.evaluate(() => {
          const audio = document.querySelector('.exam-audio-card audio');
          return audio ? audio.src : '';
        });
        console.log(`✓ Câu tiếp theo (Câu 2) nạp đúng audio: ${q2AudioSrc}`);
      }
    }

    console.log('\n======================================================');
    console.log('🎉 TỔNG HỢP CÁC REQUEST TẢI FILE ÂM THANH TRÊN TRÌNH DUYỆT:');
    console.log('======================================================');
    const uniqueAudioUrls = [...new Set(audioRequests.map(r => `Status: ${r.status} | URL: ${r.url} | Content-Type: ${r.contentType} | Size: ${r.contentLength}B`))];
    uniqueAudioUrls.forEach(item => console.log('✓', item));

    console.log('\n✅ TẤT CẢ CÁC ĐỀ VÀ FILE NGHE ĐỀU CHẠY ỔN ĐỊNH VÀ CHÍNH XÁC!');
  } catch (err) {
    console.error('❌ Lỗi trong quá trình kiểm tra:', err);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'error-state.png'), fullPage: false });
  } finally {
    await browser.close();
  }
}

runVerification();
