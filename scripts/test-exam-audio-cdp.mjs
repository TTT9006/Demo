import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

async function run() {
  console.log('--- Bắt đầu kiểm tra CDP: Đồng bộ phát câu nghe thi thật & không cho phép dừng audio ---');

  // Start vite preview server
  const preview = spawn('cmd', ['/c', 'npx', 'vite', 'preview', '--port', '4173', '--host', '127.0.0.1'], {
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
    args: ['--autoplay-policy=no-user-gesture-required'],
  });

  function createSilentWav(seconds = 5) {
    const sampleRate = 8000;
    const numChannels = 1;
    const bytesPerSample = 1;
    const numSamples = sampleRate * seconds;
    const dataSize = numSamples * numChannels * bytesPerSample;
    const buffer = Buffer.alloc(44 + dataSize);
    buffer.write('RIFF', 0);
    buffer.writeUInt32LE(36 + dataSize, 4);
    buffer.write('WAVE', 8);
    buffer.write('fmt ', 12);
    buffer.writeUInt32LE(16, 16);
    buffer.writeUInt16LE(1, 20); // PCM
    buffer.writeUInt16LE(numChannels, 22);
    buffer.writeUInt32LE(sampleRate, 24);
    buffer.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28);
    buffer.writeUInt16LE(numChannels * bytesPerSample, 32);
    buffer.writeUInt16LE(8, 34); // 8-bit
    buffer.write('data', 36);
    buffer.writeUInt32LE(dataSize, 40);
    buffer.fill(128, 44);
    return buffer;
  }

  try {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
    });

    // Mock auth & login-review
    await context.route('**/api/auth/me', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: 'test-user-exam',
          name: 'TTT9006',
          email: 'demo@wakaba.app',
          level: 'N1',
          avatar: '花',
          role: 'user',
        }),
      });
    });

    await context.route('**/api/login-review', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ready: true, active: false, total: 0, done: 0, decks: [] }),
      });
    });

    const silentAudio = createSilentWav(10);

    // Mock TTS audio response
    await context.route('**/api/tts**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'audio/wav',
        body: silentAudio,
      });
    });

    // Mock audio file requests
    await context.route('**/audio/jlpt/**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'audio/wav',
        body: silentAudio,
      });
    });

    // 1. Mock a Real JLPT Exam Run in Listening Section
    const mockOfficialRun = {
      runId: 'run-official-listening',
      testId: 'jlpt-n5-2010-2011',
      revision: 1,
      section: 2,
      sectionTitle: '聴解 — Nghe hiểu',
      sections: [
        { id: 'vocabulary', title: '文字・語彙', count: 25, minutes: 20 },
        { id: 'grammar-reading', title: '文法・読解', count: 32, minutes: 40 },
        { id: 'listening', title: '聴解 — Nghe hiểu', count: 24, minutes: 30 },
      ],
      startedAt: new Date(Date.now() - 60000).toISOString(),
      deadline: new Date(Date.now() + 1800000).toISOString(),
      serverNow: new Date().toISOString(),
      answers: {},
      questions: [
        {
          id: 'listen-q1',
          type: 'choice',
          category: 'listening',
          group: 'Nghe hiểu nhiệm vụ',
          prompt: '女の人と男の人が話しています。男の人はコップをどこに置きますか。',
          options: ['1', '2', '3', '4'],
          audioUrl: '/audio/jlpt/n5-2010-2011/q01.mp3',
        },
      ],
      finished: false,
    };

    // 2. Mock a Practice Paper ("đề luyện mẫu" jlpt-n5-01) in Listening Section
    const mockPracticeRun = {
      runId: 'run-practice-listening',
      testId: 'jlpt-n5-01',
      revision: 1,
      section: 2,
      sectionTitle: '聴解 — Nghe hiểu',
      sections: [
        { id: 'vocabulary', title: '文字・語彙', count: 25, minutes: 20 },
        { id: 'grammar-reading', title: '文法・読解', count: 32, minutes: 40 },
        { id: 'listening', title: '聴解 — Nghe hiểu', count: 24, minutes: 30 },
      ],
      startedAt: new Date(Date.now() - 60000).toISOString(),
      deadline: new Date(Date.now() + 1800000).toISOString(),
      serverNow: new Date().toISOString(),
      answers: {},
      questions: [
        {
          id: 'practice-listen-q1',
          type: 'choice',
          category: 'listening',
          group: 'Hiểu chủ đề & nhiệm vụ',
          prompt: '男の人と女の人が話しています。二人は明日何時に会いますか。',
          options: ['1', '2', '3', '4'],
          audioUrl: '/api/tts?text=%E7%94%B7%E3%81%AE%E4%BA%BA%E3%81%A8%E5%A5%B3%E3%81%AE%E4%BA%BA',
        },
      ],
      finished: false,
    };

    let currentTestMode = 'official';

    await context.route('**/api/jlpt/papers/jlpt-n5-2010-2011', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          paper: {
            id: 'jlpt-n5-2010-2011',
            title: 'JLPT N5 · Đề 2010–2011 (Đề thi thật)',
            isOfficial: true,
            sections: mockOfficialRun.sections,
          },
          run: mockOfficialRun,
        }),
      });
    });

    await context.route('**/api/jlpt/papers/jlpt-n5-01', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          paper: {
            id: 'jlpt-n5-01',
            title: 'JLPT N5 · Đề luyện 01 (Đề luyện mẫu)',
            isOfficial: false,
            sections: mockPracticeRun.sections,
          },
          run: mockPracticeRun,
        }),
      });
    });

    await context.route('**/api/jlpt/runs/**', async (route) => {
      if (currentTestMode === 'official') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(mockOfficialRun),
        });
      } else {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify(mockPracticeRun),
        });
      }
    });

    // Set cookie consent
    await context.addInitScript(() => {
      localStorage.setItem('wakaba_cookie_consent', 'true');
      localStorage.setItem('komorebi_cookie_consent', 'true');
    });

    const page = await context.newPage();

    // --- TEST 1: ĐỀ THI THẬT (Official Exam) ---
    console.log('1. Kiểm tra phòng thi đề thật (JLPT N5 2010-2011)...');
    currentTestMode = 'official';
    await page.goto('http://127.0.0.1:4173/tests/jlpt-n5-2010-2011', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Verify badge & notice
    const badge = page.locator('.exam-audio-badge');
    await badge.waitFor({ timeout: 5000 });
    const badgeText = await badge.innerText();
    console.log(`✓ Huy hiệu: "${badgeText.trim()}"`);

    const notice = page.locator('.exam-audio-notice');
    const noticeText = await notice.innerText();
    console.log(`✓ Cảnh báo quy chế: "${noticeText.trim()}"`);

    if (!noticeText.includes('Không thể dừng')) {
      throw new Error(`Cảnh báo thiếu thông tin không thể dừng: ${noticeText}`);
    }

    // Verify play button
    const playBtn = page.locator('.exam-audio-btn');
    console.log(`✓ Nút ban đầu: "${(await playBtn.innerText()).trim()}"`);

    // Click play
    console.log('2. Bấm Phát bài nghe trên đề thi thật...');
    await playBtn.click();
    await page.waitForTimeout(400);

    // Check playing state: button MUST be disabled and non-pausable
    const isPlayingDisabled = await playBtn.isDisabled();
    const playingText = await playBtn.innerText();
    console.log(`✓ Trạng thái khi đang phát: Disabled = ${isPlayingDisabled}, Text = "${playingText.trim()}"`);

    if (!isPlayingDisabled) {
      throw new Error('THẤT BẠI: Nút phát vẫn có thể bấm được khi đang nghe (cho phép dừng trái quy chế)!');
    }

    // Capture screenshot of official exam audio player
    await page.screenshot({ path: 'test-results/exam-audio-official-playing.png', fullPage: false });
    console.log('✓ Đã lưu test-results/exam-audio-official-playing.png');

    // --- TEST 2: ĐỀ LUYỆN MẪU (Practice Paper) ---
    console.log('3. Kiểm tra phòng thi đề luyện mẫu (JLPT N5 01)...');
    currentTestMode = 'practice';
    await page.goto('http://127.0.0.1:4173/tests/jlpt-n5-01', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    // Verify practice paper uses EXACT SAME ExamAudioPlayer
    const practiceBadge = page.locator('.exam-audio-badge');
    await practiceBadge.waitFor({ timeout: 5000 });
    console.log(`✓ Đề luyện mẫu đồng bộ hiển thị: "${(await practiceBadge.innerText()).trim()}"`);

    const practiceNotice = page.locator('.exam-audio-notice');
    console.log(`✓ Cảnh báo đề luyện mẫu: "${(await practiceNotice.innerText()).trim()}"`);

    // Verify there is NO "Dừng" button anywhere on practice paper
    const stopButton = page.locator('button:has-text("Dừng")');
    const hasStopBtn = await stopButton.isVisible();
    if (hasStopBtn) {
      throw new Error('THẤT BẠI: Vẫn còn nút "Dừng" trên đề luyện mẫu!');
    }
    console.log('✓ Đã loại bỏ hoàn toàn nút "Dừng" trên đề luyện mẫu.');

    // Click play on practice paper
    const practicePlayBtn = page.locator('.exam-audio-btn');
    await practicePlayBtn.click();
    await page.waitForTimeout(400);

    const isPracticePlayingDisabled = await practicePlayBtn.isDisabled();
    const practicePlayingText = await practicePlayBtn.innerText();
    console.log(`✓ Đề luyện mẫu khi đang phát: Disabled = ${isPracticePlayingDisabled}, Text = "${practicePlayingText.trim()}"`);

    if (!isPracticePlayingDisabled) {
      throw new Error('THẤT BẠI: Đề luyện mẫu vẫn cho phép bấm dừng khi đang phát!');
    }

    // Capture screenshot of practice paper audio player
    await page.screenshot({ path: 'test-results/exam-audio-practice-playing.png', fullPage: false });
    console.log('✓ Đã lưu test-results/exam-audio-practice-playing.png');

    console.log('--- TẤT CẢ KIỂM TRA ĐỒNG BỘ ÂM THANH & CẤM DỪNG ĐỀU ĐẠT 100% ---');
  } finally {
    await browser.close();
    preview.kill();
  }
}

run().catch((e) => {
  console.error('Lỗi khi chạy CDP:', e);
  process.exit(1);
});
