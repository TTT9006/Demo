import { it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { extractTextLinesFromPdf, parsePdfTextLines } from '../apps/web/src/services/client-pdf-parser';

it('preserves numbered table fields, kana-only entries and punctuation', () => {
  const r = parsePdfTextLines([
    '[THỦ] 手\tて\tTay\t[THỦ]',
    'スプーン\tスプーン\tMuỗng, thìa',
    '[THIẾT] 切ります\tきります\tCắt\t[THIẾT]',
    'いらっしゃい。\tいらっしゃい。\tRất hoan nghênh'
  ]);
  expect(r.cards).toHaveLength(4);
  expect(r.cards[0]).toMatchObject({ term: '手', reading: 'て', meaning: 'Tay', sinoVietnamese: '[THỦ]' });
  expect(r.cards[1]).toMatchObject({ term: 'スプーン', reading: 'スプーン', meaning: 'Muỗng, thìa' });
  expect(r.cards[2]).toMatchObject({ term: '切ります', reading: 'きります', meaning: 'Cắt', sinoVietnamese: '[THIẾT]' });
  expect(r.cards[3].meaning).toBe('Rất hoan nghênh');
});

it('extracts all 32 cards from actual Bảng Từ Vựng Tiếng Nhật Bài 7A.pdf via table extraction', async () => {
  const samplePdfPath = 'C:\\Users\\Hoang Vuong\\Downloads\\Bảng Từ Vựng Tiếng Nhật Bài 7A.pdf';
  if (!fs.existsSync(samplePdfPath)) {
    return;
  }
  const buf = fs.readFileSync(samplePdfPath);
  const lines = await extractTextLinesFromPdf(buf);
  expect(lines.length).toBeGreaterThanOrEqual(32);

  const res = parsePdfTextLines(lines, 'Bảng Từ Vựng Tiếng Nhật Bài 7A.pdf');
  expect(res.cards).toHaveLength(32);

  // Check card 1: 手, て, [THỦ], Tay
  expect(res.cards[0].term).toBe('手');
  expect(res.cards[0].reading).toBe('て');
  expect(res.cards[0].sinoVietnamese).toBe('[THỦ]');

  // Check Kana-only cards are NOT dropped
  const spoonCard = res.cards.find(c => c.reading === 'スプーン');
  expect(spoonCard).toBeDefined();
  expect(spoonCard?.term).toBe('スプーン');
  expect(spoonCard?.meaning).toContain('Muỗng');

  const knifeCard = res.cards.find(c => c.reading === 'ナイフ');
  expect(knifeCard).toBeDefined();

  const mobileCard = res.cards.find(c => c.reading === 'ケータイ');
  expect(mobileCard).toBeDefined();
  expect(mobileCard?.term).toBe('携帯');
  expect(mobileCard?.sinoVietnamese).toBe('[HUỀ ĐỚI]');

  // Check card 32: ごちそうさまでした。
  const lastCard = res.cards[31];
  expect(lastCard.term).toContain('ごちそうさまでした');
});

it('extracts all 32 cards even when falling back to flattened numbered lines (simulating mobile table bypass)', () => {
  const fallbackLines = [
    '第 7A 課 ことば',
    'Bảng Từ Vựng Tiếng Nhật - Bài 7A',
    '[THỦ]',
    '1 て Danh từ Tay',
    '手',
    '[TRỢ]',
    '2 はし Danh từ Đũa',
    '箸',
    '3 - スプーン Danh từ Muỗng, thìa',
    '4 - ナイフ Danh từ Dao',
    '5 - フォーク Danh từ Nĩa',
    '6 - はさみ Danh từ Kéo',
    '7 - パソコン Danh từ Máy tính cá nhân, laptop',
    '[HUỀ ĐỚI]',
    '8 ケータイ Danh từ Điện thoại di động',
    '携帯',
    '[NIÊN HẠ TRẠNG]',
    '9 ねんがじょう Danh từ Thiệp mừng năm mới',
    '年賀状',
    '10 - パンチ Danh từ Cái đục lỗ',
    '11 - ホッチキス Danh từ Cái dập ghim (Hotchkiss)',
    '12 - セロテープ Danh từ Băng dính, băng keo (Cellotape)',
    '[TIÊU]',
    '13 けしゴム Danh từ Cục tẩy, cục gôm',
    '消しゴム',
    '[CHỈ]',
    '14 かみ Danh từ Giấy',
    '紙',
    '[HOA]',
    '15 はな Danh từ Hoa',
    '花',
    '16 - プレゼント Danh từ Quà tặng',
    '[KIM]',
    '17 おかね Danh từ Tiền',
    'お金',
    '[PHỤ]',
    '18 ちち Danh từ Cha, ba, bố (dùng khi nói về cha mình)',
    '父',
    '[MẪU]',
    '19 はは Danh từ Mẹ (dùng khi nói về mẹ mình)',
    '母',
    '20 - スペイン Tên riêng Tây Ban Nha',
    '[THIẾT]',
    '21 きります Động từ Cắt',
    '切ります',
    '[TONG]',
    '22 おくります Động từ Gửi',
    '送ります',
    '23 - あげます Động từ Cho, tặng',
    '[THẢI]',
    '24 かします Động từ Cho mượn, cho vay',
    '貸します',
    '[GIÁO]',
    '25 おしえます Động từ Dạy, chỉ bảo, nói cho biết',
    '教えます',
    '[ĐIỆN THOẠI]',
    '26 [でんわを] かけます Cụm ĐT Gọi (điện thoại)',
    '[電話を] かけます',
    '27 - いらっしゃい。 Mẫu câu Rất hoan nghênh anh/chị đến chơi.',
    '[THƯỞNG]',
    '28 どうぞお上がりください。 Mẫu câu Mời anh/chị vào.',
    '[THẤT LỄ]',
    '29 しつれいします Mẫu câu Xin phép tôi vào.',
    '失礼します。',
    '30 - [～は] いかがですか。 Mẫu câu Anh/chị dùng ~ nhé?',
    '31 - いただきます。 Mẫu câu Mời anh/chị dùng (cách nói trước khi ăn/uống).',
    '32 - ごちそうさまでした。 Mẫu câu Cảm ơn vì bữa ăn.'
  ];

  const res = parsePdfTextLines(fallbackLines, 'Fallback-Test.pdf');
  expect(res.cards).toHaveLength(32);
  expect(res.cards[0]).toMatchObject({ term: '手', reading: 'て', sinoVietnamese: '[THỦ]' });
  expect(res.cards[1]).toMatchObject({ term: '箸', reading: 'はし', sinoVietnamese: '[TRỢ]' });
  expect(res.cards[2]).toMatchObject({ term: 'スプーン', reading: 'スプーン' });
  expect(res.cards[7]).toMatchObject({ term: '携帯', reading: 'ケータイ', sinoVietnamese: '[HUỀ ĐỚI]' });
  expect(res.cards[31]).toMatchObject({ term: 'ごちそうさまでした。', reading: 'ごちそうさまでした。' });
});
