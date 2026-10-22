import { describe, it, expect } from 'vitest';
import { parsePdfVocabulary } from '../apps/api/src/pdf-parser';

describe('PDF Vocabulary Parser', () => {
  it('parses structured lines with Japanese, reading and Vietnamese meaning', async () => {
    const rawPdfText = `
      Danh sách từ vựng bài 1
      1. 食べる (たべる) [THỰC]: Ăn uống
      2. 飲む (のむ) [ẨM] - Uống nước
      3. 本 \t ほん \t Sách, quyển sách
    `;
    const result = await parsePdfVocabulary(rawPdfText, 'Bai1.pdf');
    expect(result.deckName).toBe('Bai1');
    expect(result.cards.length).toBe(3);

    expect(result.cards[0].term).toBe('食べる');
    expect(result.cards[0].reading).toBe('たべる');
    expect(result.cards[0].meaning).toBe('Ăn uống');
    expect(result.cards[0].sinoVietnamese).toBe('[THỰC]');

    expect(result.cards[1].term).toBe('飲む');
    expect(result.cards[1].reading).toBe('のむ');
    expect(result.cards[1].meaning).toBe('Uống nước');
    expect(result.cards[1].sinoVietnamese).toBe('[ẨM]');

    expect(result.cards[2].term).toBe('本');
    expect(result.cards[2].reading).toBe('ほん');
    expect(result.cards[2].meaning).toBe('Sách, quyển sách');
  });

  it('automatically falls back to dictionary lookup for raw Japanese word lines', async () => {
    const rawPdfText = `
      食べる
    `;
    const result = await parsePdfVocabulary(rawPdfText, 'TuVung.pdf');
    expect(result.cards.length).toBe(1);
    expect(result.cards[0].term).toBe('食べる');
    expect(result.cards[0].reading).toBe('たべる');
    expect(result.cards[0].meaning.length).toBeGreaterThan(0);
  });
});
