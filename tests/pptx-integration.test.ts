import { describe, it, expect } from 'vitest';
import JSZip from 'jszip';
import { parsePptxBuffer } from '../apps/api/src/pptx-parser';

describe('PPTX Buffer Integration', () => {
  it('parses a multi-slide PPTX zip buffer end-to-end', async () => {
    const zip = new JSZip();

    // Slide 1: Lesson title
    const slide1Xml = `
      <p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
        <a:p><a:r><a:t>第1A課</a:t></a:r></a:p>
        <a:p><a:r><a:t>ことば</a:t></a:r></a:p>
      </p:sp>
    `;
    zip.file('ppt/slides/slide1.xml', slide1Xml);

    // Slide 2: Accent explanation
    const slide2Xml = `
      <p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
        <a:p><a:r><a:t>解説</a:t></a:r></a:p>
        <a:p><a:r><a:t>GIẢI THÍCH VỀ KÝ HIỆU PHÁT ÂM</a:t></a:r></a:p>
        <a:p><a:r><a:t>アクセント核</a:t></a:r></a:p>
      </p:sp>
    `;
    zip.file('ppt/slides/slide2.xml', slide2Xml);

    // Slide 3: Vocab 1 (Tabemasu)
    const slide3Xml = `
      <p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
        <a:p><a:r><a:t>食べます ★</a:t></a:r></a:p>
        <a:p><a:r><a:t>たべま＼す</a:t></a:r></a:p>
        <a:p><a:r><a:t>[THỰC]</a:t></a:r></a:p>
        <a:p><a:r><a:t>Ăn</a:t></a:r></a:p>
      </p:sp>
    `;
    zip.file('ppt/slides/slide3.xml', slide3Xml);

    // Slide 10: Natural sort test (Slide 10 comes after slide 3)
    const slide10Xml = `
      <p:sp xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
        <a:p><a:r><a:t>［写真を］撮ります ★</a:t></a:r></a:p>
        <a:p><a:r><a:t>［しゃしんを］とります</a:t></a:r></a:p>
        <a:p><a:r><a:t>[TẢ CHÂN] [TOÁT]</a:t></a:r></a:p>
        <a:p><a:r><a:t>Chụp (ảnh)</a:t></a:r></a:p>
      </p:sp>
    `;
    zip.file('ppt/slides/slide10.xml', slide10Xml);

    const buffer = await zip.generateAsync({ type: 'nodebuffer' });
    const result = await parsePptxBuffer(buffer, '語彙1A.pptx');

    expect(result.deckName).toBe('Từ vựng - 第1A課');
    expect(result.cards.length).toBe(2);
    expect(result.totalSlidesCount).toBe(4);
    expect(result.skippedSlidesCount).toBe(2);

    // Order must preserve natural sort: slide3, then slide10
    expect(result.cards[0].term).toBe('食べます');
    expect(result.cards[0].cleanReading).toBe('たべます');
    expect(result.cards[0].sinoVietnamese).toBe('[THỰC]');
    expect(result.cards[0].meaning).toBe('Ăn');

    expect(result.cards[1].term).toBe('［写真を］撮ります');
    expect(result.cards[1].cleanReading).toBe('［しゃしんを］とります');
    expect(result.cards[1].sinoVietnamese).toBe('[TẢ CHÂN] [TOÁT]');
    expect(result.cards[1].meaning).toBe('Chụp (ảnh)');
  });
});
