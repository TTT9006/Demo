import { test, expect } from '@playwright/test';
test('demo learner can look up a word, save a card, review, learn grammar and take a test', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/login');
  await page.getByRole('button', { name: 'Dùng tài khoản mẫu' }).click();
  await expect(page.getByRole('heading', { name: /Chào .*cùng học nhé/ })).toBeVisible();
  await page.goto('/dictionary?q=食べる');
  await expect(page.getByRole('link', { name: '食べる', exact: true }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Thêm nghĩa 1 vào thẻ' }).first().click();
  await page.getByRole('button', { name: 'Lưu vào bộ thẻ' }).click();
  await expect(page.getByRole('status')).toContainText('Đã thêm từ');
  await page.goto('/flashcards/review');
  await page.getByRole('button', { name: 'Lật thẻ' }).click();
  await page.getByRole('button', { name: 'Tốt Nhớ được' }).click();
  await expect(page.getByText(/1 từ đã ôn trong phiên này/)).toBeVisible();
  await page.goto('/grammar/desu');
  const exercise = page.locator('.exercise').first();
  await exercise.getByRole('button', { name: 'A です' }).click();
  await exercise.getByRole('button', { name: 'Kiểm tra câu trả lời' }).click();
  await expect(exercise.getByText('Chính xác!')).toBeVisible();
  await page.goto('/tests/mini-desu');
  await page.getByRole('button', { name: 'Bắt đầu bài kiểm tra' }).click();
  await page.locator('.exercise').nth(0).getByRole('button', { name: 'A です' }).click();
  await page.locator('.exercise').nth(1).getByRole('textbox', { name: 'Câu trả lời' }).fill('は');
  await page
    .locator('.exercise')
    .nth(2)
    .getByRole('textbox', { name: 'Câu đã sắp xếp' })
    .fill('私は先生です');
  await page.getByRole('button', { name: 'Nộp bài' }).click();
  await expect(page.locator('.score-panel')).toContainText('100');
  await page.goto('/writing');
  const canvas = page.getByLabel('Vùng vẽ chữ あ');
  await canvas.scrollIntoViewIfNeeded();
  const box = await canvas.boundingBox();
  expect(box).not.toBeNull();
  if (box) {
    await page.mouse.move(box.x + box.width * 0.2, box.y + box.height * 0.3);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.4, { steps: 8 });
    await page.mouse.up();
  }
  await page.getByRole('button', { name: 'Lưu bài viết' }).click();
  await expect(page.locator('.toast')).toContainText('Đã lưu buổi luyện viết');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  );
  expect(errors).toEqual([]);
});
test('account registration and settings persist after reload', async ({ page }) => {
  await page.goto('/register');
  await page.getByLabel('Tên của bạn').fill('Học viên mới');
  await page.getByLabel('Email', { exact: true }).fill(`browser-${Date.now()}@example.com`);
  await page.getByLabel('Mật khẩu', { exact: true }).fill('Browser-Test-Password');
  await page.getByRole('button', { name: 'Tạo tài khoản', exact: true }).click();
  await expect(page).toHaveURL(/dashboard/);
  await page.goto('/settings');
  await page.getByLabel('Số lượt ôn từ vựng mỗi ngày').fill('12');
  await page.getByRole('button', { name: 'Lưu thay đổi' }).click();
  await expect(page.getByRole('status')).toContainText('Đã lưu cài đặt');
  await page.reload();
  await expect(page.getByLabel('Số lượt ôn từ vựng mỗi ngày')).toHaveValue('12');
});
