import { test, expect } from '@playwright/test';
test('search variants, IME, radical writing, annotations and account persistence', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/login');
  await page.getByRole('button', { name: 'Dùng tài khoản mẫu' }).click();
  await page.waitForURL('**/dashboard');
  for (const q of ['gakkō', 'tōkyō', 'sūpā', 'ikimasu']) {
    await page.goto('/dictionary?q=' + encodeURIComponent(q));
    await expect(page.locator('.word-card').first()).toBeVisible();
  }
  const input = page.getByRole('textbox', { name: 'Tìm từ trong từ điển' });
  await input.dispatchEvent('compositionstart');
  await input.fill('がっ');
  await page.waitForTimeout(400);
  expect(new URL(page.url()).searchParams.get('q')).toBe('ikimasu');
  await input.fill('がっこう');
  await input.dispatchEvent('compositionend');
  await expect(page).toHaveURL(/q=/);
  await expect(page.getByRole('link', { name: '学校', exact: true }).first()).toBeVisible();
  await page.goto('/settings');
  await page.getByRole('radio', { name: 'Romanized — Romaji' }).check();
  await expect(page.locator('.annotation-preview rt').first()).toHaveText('watashi');
  await expect(page.getByRole('radio', { name: 'Romanized — Romaji' })).toBeEnabled();
  await page.reload();
  await expect(page.getByRole('radio', { name: 'Romanized — Romaji' })).toBeChecked();
  await page.getByRole('radio', { name: 'Japanese — Furigana' }).check();
  await expect(page.locator('.annotation-preview rt').first()).toHaveText('わたし');
  await page.goto('/writing?mode=radicals&radical=85&form=' + encodeURIComponent('氵'));
  await expect(page.locator('.radical-grid button')).toHaveCount(214);
  await expect(page.getByText('3 nét (dạng đang chọn)', { exact: false })).toBeVisible();
  await page.getByRole('button', { name: 'Xem thứ tự nét', exact: true }).click();
  await expect(page.locator('.stroke-order svg path')).toHaveCount(3);
  await page.getByRole('button', { name: 'Nét tiếp theo', exact: true }).click();
  await expect(page.locator('.stroke-order')).toContainText('1/3');
  const canvas = page.locator('canvas');
  await canvas.scrollIntoViewIfNeeded();
  const box = (await canvas.boundingBox())!;
  await page.mouse.move(box.x + 20, box.y + 20);
  await page.mouse.down();
  await page.mouse.move(box.x + 70, box.y + 90);
  await page.mouse.up();
  await expect(page.getByRole('button', { name: 'Lùi nét', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Lưu bài viết', exact: true }).click();
  await expect(page.locator('.toast')).toContainText('Đã lưu buổi');
  const complete = page.getByRole('button', { name: 'Đánh dấu hoàn thành', exact: true });
  if (await complete.count()) await complete.click();
  await expect(page.getByRole('button', { name: 'Đánh dấu chưa học', exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Đánh dấu chưa học', exact: true })).toBeVisible();
  await page.goto('/kanji/' + encodeURIComponent('海'));
  await expect(page.getByRole('heading', { name: 'Bộ thủ & cấu tạo' })).toBeVisible();
  await page.getByRole('link', { name: '水 · #85', exact: true }).click();
  await expect(page).toHaveURL(/radical=85/);
  await page.goto('/tests/mini-desu');
  await page.getByRole('button', { name: 'Bắt đầu bài kiểm tra' }).click();
  const first = page.locator('.exercise').first();
  await first.getByRole('button', { name: 'A です' }).click();
  await page.request.patch('/api/profile', { data: { annotationMode: 'romanized' } });
  await page.evaluate(() => {
    window.dispatchEvent(new Event('focus'));
  });
  await expect(first.getByRole('button', { name: 'A です' })).toHaveClass(/selected/);
  await expect(page.getByRole('button', { name: 'Nộp bài' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});
