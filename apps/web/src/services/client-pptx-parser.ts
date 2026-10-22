import JSZip from 'jszip';

export interface ExtractedCard {
  term: string;
  reading: string;
  cleanReading: string;
  pitchAccent?: string;
  sinoVietnamese?: string;
  meaning: string;
  note?: string;
  example?: string;
  slideIndex: number;
}

export interface ExtractedDeckResult {
  deckName: string;
  cards: ExtractedCard[];
  skippedSlidesCount: number;
  totalSlidesCount: number;
}

const TITLE_LESSON_REGEX = /^第\s*\d+\s*[A-Za-z]?\s*課/i;
const SINO_VIETNAMESE_REGEX = /\[([A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ\s※\-\/]+)\]/g;
const NOISE_PROVERB_REGEX = /^[※*]\s*/;
const JAPANESE_CHAR_REGEX = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const KANA_ACCENT_REGEX = /^[\u3040-\u30ff\uFF3C\uFFE3\s\[\]［］（）()～〜ー\-–—―]+$/;

export function naturalSortSlideFiles(filenames: string[]): string[] {
  return [...filenames].sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '') || '0', 10);
    const numB = parseInt(b.replace(/\D/g, '') || '0', 10);
    return numA - numB;
  });
}

export function cleanPitchAccent(reading: string): string {
  return reading
    .replace(/[\uFF3C\uFFE3\\~]/g, '')
    .trim();
}

/**
 * Extracts plain text paragraphs from ppt/slides/slideX.xml content
 */
export function extractParagraphsFromSlideXml(xmlContent: string): string[] {
  const paragraphs: string[] = [];
  const pRegex = /<a:p\b[^>]*>([\s\S]*?)<\/a:p>/gi;
  let pMatch: RegExpExecArray | null;

  while ((pMatch = pRegex.exec(xmlContent)) !== null) {
    const pContent = pMatch[1];
    const tRegex = /<a:t\b[^>]*>([\s\S]*?)<\/a:t>/gi;
    let tMatch: RegExpExecArray | null;
    let fullParaText = '';

    while ((tMatch = tRegex.exec(pContent)) !== null) {
      fullParaText += tMatch[1];
    }

    fullParaText = fullParaText
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .trim();

    if (fullParaText) {
      paragraphs.push(fullParaText);
    }
  }

  return paragraphs;
}

/**
 * Parses a single slide's lines to extract card information.
 */
export function parseVocabularySlide(rawLines: string[], slideIndex: number): ExtractedCard | null {
  const lines = rawLines
    .map((l) => l.replace(/[★☆]/g, '').trim())
    .filter((l) => l.length > 0);

  if (lines.length < 2) {
    return null;
  }

  const fullText = lines.join(' ');

  if (
    fullText.includes('解説') ||
    fullText.includes('GIẢI THÍCH VỀ KÝ HIỆU') ||
    fullText.includes('アクセント核') ||
    fullText.includes('平板型') ||
    fullText.includes('無声化する')
  ) {
    return null;
  }

  if (lines.length <= 3 && lines.every((l) => TITLE_LESSON_REGEX.test(l) || l === 'ことば' || l === '言葉')) {
    return null;
  }

  let term = '';
  let rawReading = '';
  let cleanReading = '';
  let pitchAccent: string | undefined;
  const sinoList: string[] = [];
  const meaningLines: string[] = [];
  const noteLines: string[] = [];

  const filteredLines: string[] = [];
  for (const line of lines) {
    if (NOISE_PROVERB_REGEX.test(line)) {
      noteLines.push(line.replace(NOISE_PROVERB_REGEX, '').trim());
    } else {
      filteredLines.push(line);
    }
  }

  for (const line of filteredLines) {
    let match: RegExpExecArray | null;
    const regex = new RegExp(SINO_VIETNAMESE_REGEX);
    while ((match = regex.exec(line)) !== null) {
      const val = match[1].replace(/[※]/g, '').trim();
      if (val && !sinoList.includes(`[${val}]`)) {
        sinoList.push(`[${val}]`);
      }
    }
  }

  for (const line of filteredLines) {
    if ((line.includes('＼') || line.includes('￣')) && /[\u3040-\u30ff]/.test(line)) {
      rawReading = line;
      cleanReading = cleanPitchAccent(line);
      pitchAccent = line;
      break;
    }
  }

  if (!rawReading) {
    for (const line of filteredLines) {
      if (KANA_ACCENT_REGEX.test(line) && /[\u3040-\u30ff]/.test(line)) {
        rawReading = line;
        cleanReading = cleanPitchAccent(line);
        break;
      }
    }
  }

  for (const line of filteredLines) {
    if (line === rawReading) continue;
    if (/[\u3400-\u4dbf\u4e00-\u9fff]/.test(line)) {
      term = line;
      break;
    }
  }

  if (!term) {
    for (const line of filteredLines) {
      if (line === rawReading) continue;
      if (JAPANESE_CHAR_REGEX.test(line) && !/^\d+\s*さい/.test(line) && line !== '?') {
        term = cleanPitchAccent(line);
        break;
      }
    }
  }

  if (!term && cleanReading) {
    term = cleanReading;
  }

  for (const line of filteredLines) {
    if (line === rawReading || line === term) continue;

    const withoutSino = line.replace(SINO_VIETNAMESE_REGEX, '').trim();
    if (!withoutSino) continue;

    if (/^\d+\s*さい/.test(withoutSino) || withoutSino === '?') {
      continue;
    }

    if (/[a-zA-ZÀ-ỹ]/.test(withoutSino)) {
      meaningLines.push(withoutSino);
    }
  }

  const meaning = meaningLines.join('; ').trim();
  const sinoVietnamese = sinoList.length > 0 ? sinoList.join(' ') : undefined;

  if (!term || (!meaning && !cleanReading)) {
    return null;
  }

  const finalCleanReading = cleanReading || (KANA_ACCENT_REGEX.test(term) ? cleanPitchAccent(term) : '');

  const notesArr: string[] = [];
  if (sinoVietnamese) {
    notesArr.push(`Hán Việt: ${sinoVietnamese}`);
  }
  if (pitchAccent && pitchAccent !== finalCleanReading) {
    notesArr.push(`Trọng âm: ${pitchAccent}`);
  }
  if (noteLines.length > 0) {
    notesArr.push(...noteLines);
  }

  return {
    term,
    reading: rawReading || finalCleanReading,
    cleanReading: finalCleanReading,
    pitchAccent,
    sinoVietnamese,
    meaning: meaning || 'Chưa có nghĩa',
    note: notesArr.length > 0 ? notesArr.join(' · ') : undefined,
    slideIndex,
  };
}

/**
 * Parses an entire PPTX buffer and returns ExtractedDeckResult (Fast Parallel Parsing)
 */
export async function parsePptxBuffer(data: ArrayBuffer | Uint8Array, originalFilename = 'Vocab.pptx'): Promise<ExtractedDeckResult> {
  const zip = await JSZip.loadAsync(data);
  
  const slideFileNames = Object.keys(zip.files).filter((name) =>
    /^ppt\/slides\/slide\d+\.xml$/i.test(name)
  );

  const sortedFiles = naturalSortSlideFiles(slideFileNames);
  let defaultDeckName = originalFilename.replace(/\.pptx$/i, '').trim();

  // Inspect slide 1 for lesson title
  if (sortedFiles.length > 0) {
    const firstSlideXml = await zip.files[sortedFiles[0]].async('text');
    const paras = extractParagraphsFromSlideXml(firstSlideXml);
    const titleCandidate = paras.find((p) => TITLE_LESSON_REGEX.test(p) || /第.+課/.test(p));
    if (titleCandidate) {
      defaultDeckName = `Từ vựng - ${titleCandidate.replace(/\s+/g, ' ').trim()}`;
    }
  }

  const cards: ExtractedCard[] = [];
  let skipped = 0;

  // Ultra-fast parallel extraction of all slides
  const slideContents = await Promise.all(
    sortedFiles.map(async (fileName, i) => {
      const xml = await zip.files[fileName].async('text');
      const paras = extractParagraphsFromSlideXml(xml);
      return { paras, slideIndex: i + 1 };
    })
  );

  for (const { paras, slideIndex } of slideContents) {
    const card = parseVocabularySlide(paras, slideIndex);
    if (card) {
      cards.push(card);
    } else {
      skipped++;
    }
  }

  return {
    deckName: defaultDeckName,
    cards,
    skippedSlidesCount: skipped,
    totalSlidesCount: sortedFiles.length,
  };
}
