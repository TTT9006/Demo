import { describe, it, expect } from 'vitest';
import {
  parseVocabularySlide,
  naturalSortSlideFiles,
  cleanPitchAccent,
  extractParagraphsFromSlideXml,
} from '../apps/api/src/pptx-parser';

describe('PPTX Vocabulary Parser', () => {
  it('natural sorts slide files correctly (1, 2, ..., 10, 11)', () => {
    const rawFiles = [
      'ppt/slides/slide10.xml',
      'ppt/slides/slide1.xml',
      'ppt/slides/slide2.xml',
      'ppt/slides/slide20.xml',
      'ppt/slides/slide3.xml',
    ];
    const sorted = naturalSortSlideFiles(rawFiles);
    expect(sorted).toEqual([
      'ppt/slides/slide1.xml',
      'ppt/slides/slide2.xml',
      'ppt/slides/slide3.xml',
      'ppt/slides/slide10.xml',
      'ppt/slides/slide20.xml',
    ]);
  });

  it('filters out Title Slide (Slide 1: 第1A課 ことば)', () => {
    const titleLines = ['第1A課', 'ことば'];
    const card = parseVocabularySlide(titleLines, 1);
    expect(card).toBeNull();
  });

  it('filters out Explanation Slide (Slide 2: GIẢI THÍCH VỀ KÝ HIỆU PHÁT ÂM)', () => {
    const explanationLines = [
      '解説',
      'GIẢI THÍCH VỀ KÝ HIỆU PHÁT ÂM',
      'アクセント核: Trọng âm',
      '平板型: Đi ngang',
      '無声化する âm vô thanh',
    ];
    const card = parseVocabularySlide(explanationLines, 2);
    expect(card).toBeNull();
  });

  it('correctly parses Kanji + Reading with Pitch Accent + Sino-Vietnamese + Meaning', () => {
    const slideLines = [
      '食べます ★',
      'たべま＼す',
      '[THỰC]',
      'Ăn',
    ];
    const card = parseVocabularySlide(slideLines, 3);
    expect(card).not.toBeNull();
    expect(card?.term).toBe('食べます');
    expect(card?.cleanReading).toBe('たべます');
    expect(card?.pitchAccent).toBe('たべま＼す');
    expect(card?.sinoVietnamese).toBe('[THỰC]');
    expect(card?.meaning).toBe('Ăn');
  });

  it('correctly parses bracketed Kanji phrase with multiple Sino-Vietnamese tags', () => {
    const slideLines = [
      '［写真を］撮ります ★',
      '［しゃしんを］とります',
      '[TẢ CHÂN] [TOÁT]',
      'Chụp (ảnh)',
    ];
    const card = parseVocabularySlide(slideLines, 4);
    expect(card).not.toBeNull();
    expect(card?.term).toBe('［写真を］撮ります');
    expect(card?.cleanReading).toBe('［しゃしんを］とります');
    expect(card?.sinoVietnamese).toBe('[TẢ CHÂN] [TOÁT]');
    expect(card?.meaning).toBe('Chụp (ảnh)');
  });

  it('correctly parses pure Kana/Katakana words and removes footnotes (※)', () => {
    const slideLines = [
      'パン ★',
      'パ＼ン',
      'Bánh mì',
      '※Pão (tiếng Bồ Đào Nha): bánh mì',
    ];
    const card = parseVocabularySlide(slideLines, 5);
    expect(card).not.toBeNull();
    expect(card?.term).toBe('パン');
    expect(card?.cleanReading).toBe('パン');
    expect(card?.meaning).toBe('Bánh mì');
    expect(card?.note).toContain('Pão (tiếng Bồ Đào Nha): bánh mì');
  });

  it('correctly handles image noise (e.g. 22 さい, question marks)', () => {
    const slideLines = [
      'おいくつ ★',
      'おいく＼つ',
      'Mấy tuổi, bao nhiêu tuổi',
      '(cách nói lịch sự của なんさい)',
      '22 さい',
      '?',
    ];
    const card = parseVocabularySlide(slideLines, 6);
    expect(card).not.toBeNull();
    expect(card?.term).toBe('おいくつ');
    expect(card?.cleanReading).toBe('おいくつ');
    expect(card?.meaning).toBe('Mấy tuổi, bao nhiêu tuổi; (cách nói lịch sự của なんさい)');
  });

  it('extracts paragraphs from XML correctly decoding entities', () => {
    const sampleXml = `
      <p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
        <a:p>
          <a:r><a:t>私</a:t></a:r>
          <a:r><a:t> ★</a:t></a:r>
        </a:p>
        <a:p>
          <a:r><a:t>わたし￣</a:t></a:r>
        </a:p>
        <a:p>
          <a:r><a:t>[TƯ]</a:t></a:r>
        </a:p>
        <a:p>
          <a:r><a:t>Tôi &amp; bạn</a:t></a:r>
        </a:p>
      </p:sp>
    `;
    const paras = extractParagraphsFromSlideXml(sampleXml);
    expect(paras).toEqual(['私 ★', 'わたし￣', '[TƯ]', 'Tôi & bạn']);
  });
});
