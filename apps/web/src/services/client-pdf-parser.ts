import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

// Configure worker to avoid warning
if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url
  ).toString();
}

export interface ExtractedClientPdfCard {
  term: string;
  reading: string;
  cleanReading: string;
  pitchAccent?: string;
  sinoVietnamese?: string;
  meaning: string;
  note?: string;
}

export interface ExtractedClientPdfResult {
  deckName: string;
  cards: ExtractedClientPdfCard[];
  totalRawLines: number;
}

const JAPANESE_CHAR_REGEX = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const KANJI_REGEX = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const SINO_VIETNAMESE_REGEX = /\[([A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ\s※\-\/]+)\]/g;
const KANA_ACCENT_REGEX = /^[\u3040-\u30ff\uFF3C\uFFE3\s\[\]［］（）()～〜ー。、！？\-–—―]+$/;

function cleanPitchAccent(reading: string): string {
  return reading.replace(/[\uFF3C\uFFE3\\~]/g, '').trim();
}

/**
 * Extracts plain text lines from a PDF ArrayBuffer directly in the browser
 */
export async function extractTextLinesFromPdf(data: ArrayBuffer | Uint8Array): Promise<string[]> {
  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(data),
    useSystemFonts: true,
  });

  const pdf = await loadingTask.promise;
  const lines: string[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    
    // Tables have independent baselines inside each cell (e.g. a Han-Viet
    // label above the kanji). Assign cells to numbered rows before flattening.
    const positioned = textContent.items.filter((item): item is import('pdfjs-dist/types/src/display/api').TextItem => 'str' in item && !!item.str.trim());
    const readingHeader = positioned.find(item => /Hiragana.*Katakana/i.test(item.str));
    const indexHeader = positioned.find(item => item.str.trim() === 'STT');
    const meaningHeader = positioned.find(item => /^Ngh/.test(item.str) && readingHeader && Math.abs(item.transform[5] - readingHeader.transform[5]) < 3);
    const typeHeader = positioned.find(item => /^Lo/.test(item.str) && readingHeader && Math.abs(item.transform[5] - readingHeader.transform[5]) < 3);
    if (readingHeader && indexHeader && meaningHeader && typeHeader) {
      const headerY = indexHeader.transform[5];
      const anchors = positioned.filter(item => /^\d+$/.test(item.str.trim()) && Math.abs(item.transform[4] - indexHeader.transform[4]) < 12 && item.transform[5] < headerY)
        .sort((a, b) => b.transform[5] - a.transform[5]);
      const cells = anchors.map(() => [[], [], []] as typeof positioned[]);
      for (const item of positioned) {
        const x = item.transform[4], y = item.transform[5];
        if (y >= headerY - 5 || x < indexHeader.transform[4] + 20 || !anchors.length) continue;
        let row = 0;
        for (let i = 1; i < anchors.length; i++) {
          if (Math.abs(y - anchors[i].transform[5]) < Math.abs(y - anchors[row].transform[5])) row = i;
        }
        if (Math.abs(y - anchors[row].transform[5]) > 24) continue;
        const column = x < readingHeader.transform[4] - 3 ? 0 : x < typeHeader.transform[4] - 3 ? 1 : x >= meaningHeader.transform[4] - 3 ? 2 : -1;
        if (column >= 0) cells[row][column].push(item);
      }
      const joinCell = (items: typeof positioned) => {
        items.sort((a, b) => Math.abs(a.transform[5] - b.transform[5]) > 3 ? b.transform[5] - a.transform[5] : a.transform[4] - b.transform[4]);
        return items.map((item, i) => {
          const prev = items[i - 1];
          const space = prev && (Math.abs(prev.transform[5] - item.transform[5]) > 3 || item.transform[4] - prev.transform[4] - prev.width > 1.2);
          return (space ? ' ' : '') + item.str;
        }).join('').trim();
      };
      if (anchors.length) {
        for (const row of cells) {
          const [term, reading, meaning] = row.map((items, column) => { const text = joinCell(items); return column < 2 ? text.replace(/(?<=[\u3040-\u30ff\u3400-\u9fff])\s+(?=[\u3040-\u30ff\u3400-\u9fff])/g, '') : text; });
          lines.push(`${term === '-' ? reading : term}\t${reading}\t${meaning}`);
        }
        continue;
      }
    }

    // Group text items by roughly their Y coordinate to reconstruct lines
    const lineMap = new Map<number, { x: number; text: string }[]>();

    for (const item of textContent.items) {
      if (!('str' in item) || !item.str.trim()) continue;
      // item.transform: [scaleX, skewY, skewX, scaleY, transX, transY]
      const y = Math.round(item.transform[5]);
      const x = item.transform[4];

      // Find closest existing Y within 4px tolerance
      let matchedY = y;
      for (const existingY of lineMap.keys()) {
        if (Math.abs(existingY - y) <= 4) {
          matchedY = existingY;
          break;
        }
      }

      if (!lineMap.has(matchedY)) {
        lineMap.set(matchedY, []);
      }
      lineMap.get(matchedY)!.push({ x, text: item.str });
    }

    // Sort lines from top to bottom (descending Y in PDF coordinates)
    const sortedYs = Array.from(lineMap.keys()).sort((a, b) => b - a);

    for (const y of sortedYs) {
      const items = lineMap.get(y)!;
      // Sort items in line from left to right (ascending X)
      items.sort((a, b) => a.x - b.x);
      const lineStr = items.map((it) => it.text).join(' ').trim();
      if (lineStr) {
        lines.push(lineStr);
      }
    }
  }

  return lines;
}

/**
 * Parses extracted PDF lines into structured flashcards
 */
export function parsePdfTextLines(rawLines: string[], filename = 'Tai-lieu.pdf'): ExtractedClientPdfResult {
  const defaultDeckName = filename.replace(/\.pdf$/i, '').trim() || 'Từ vựng PDF';
  const cards: ExtractedClientPdfCard[] = [];

  // Filter out slide/page noise
  const lines = rawLines
    .map((l) => l.replace(/[★☆‹#›]/g, '').trim())
    .filter((l) => l.length > 0 && l !== '‹#›');

  // Strategy 1: Check if this PDF is an exported slide deck (Minna no Nihongo Google Slides exported as PDF)
  // Each slide page typically has:
  // [Term], [Reading with ＼/￣], [Meaning], [Hán Việt]
  let currentTerm = '';
  let currentReading = '';
  let currentPitch = '';
  let currentSino = '';
  let currentMeaning = '';
  const pendingNotes: string[] = [];

  const flushCurrentSlide = () => {
    if (currentTerm && (currentMeaning || currentReading)) {
      const cleanRead = cleanPitchAccent(currentReading || currentTerm);
      const notes: string[] = [];
      if (currentSino) notes.push(`Hán Việt: ${currentSino}`);
      if (currentPitch && currentPitch !== cleanRead) notes.push(`Trọng âm: ${currentPitch}`);
      if (pendingNotes.length > 0) notes.push(...pendingNotes);

      cards.push({
        term: currentTerm,
        reading: currentReading || cleanRead,
        cleanReading: cleanRead,
        pitchAccent: currentPitch || undefined,
        sinoVietnamese: currentSino || undefined,
        meaning: currentMeaning || 'Chưa có nghĩa',
        note: notes.length > 0 ? notes.join(' · ') : undefined,
      });
    }
    currentTerm = '';
    currentReading = '';
    currentPitch = '';
    currentSino = '';
    currentMeaning = '';
    pendingNotes.length = 0;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip slide title / explanation keywords
    if (
      line.includes('解説') ||
      line.includes('GIẢI THÍCH VỀ KÝ HIỆU') ||
      line.includes('アクセント核') ||
      line.includes('平板型') ||
      line.includes('無声化する') ||
      /^第\s*\d+\s*[A-Za-z]?\s*課/i.test(line) ||
      line === 'ことば' ||
      line === '言葉'
    ) {
      continue;
    }

    // Footnote
    if (/^[※*]\s*/.test(line)) {
      pendingNotes.push(line.replace(/^[※*]\s*/, '').trim());
      continue;
    }

    // Sino-Vietnamese tag e.g. [HÀNH], [TIÊN CHU]
    const sinoMatch = line.match(SINO_VIETNAMESE_REGEX);
    if (sinoMatch && !line.includes('\t') && !JAPANESE_CHAR_REGEX.test(line)) {
      currentSino = sinoMatch.map((s) => s.replace(/[※]/g, '').trim()).join(' ');
      continue;
    }

    // Single-line structured entry: "食べる (たべる) [THỰC]: Ăn" or "食べる - たべる - Ăn"
    const cleanedLine = line.replace(/^(\d+[\.\/\-\)]\s*|[・*•★☆\-])\s*/, '').trim();
    if (JAPANESE_CHAR_REGEX.test(cleanedLine)) {
      const parts = cleanedLine
        .replace(SINO_VIETNAMESE_REGEX, ' ')
        .split(/[\t]+|\s+[-–—:]\s+|(?<=[^\s])\s*[:]\s*(?=[a-zA-ZÀ-ỹ])/)
        .map((p) => p.trim())
        .filter(Boolean);

      if (parts.length >= 2 && JAPANESE_CHAR_REGEX.test(parts[0]) && /[a-zA-ZÀ-ỹ]/.test(parts[parts.length - 1])) {
        // Flush any pending multi-line card
        flushCurrentSlide();

        let term = parts[0];
        let reading = '';
        const parenMatch = parts[0].match(/^([^\(（]+)[\(（]([^\)）]+)[\)）]$/);
        let meaning = '';

        if (parenMatch) {
          term = parenMatch[1].trim();
          reading = parenMatch[2].trim();
          meaning = parts.slice(1).join('; ');
        } else if (parts.length >= 3 && KANA_ACCENT_REGEX.test(parts[1])) {
          reading = parts[1];
          meaning = parts.slice(2).join('; ');
        } else {
          meaning = parts.slice(1).join('; ');
        }

        const sinoList: string[] = [];
        let sm: RegExpExecArray | null;
        const sr = new RegExp(SINO_VIETNAMESE_REGEX);
        while ((sm = sr.exec(cleanedLine)) !== null) {
          sinoList.push(`[${sm[1].trim()}]`);
        }
        const sv = sinoList.join(' ');

        cards.push({
          term,
          reading: reading || term,
          cleanReading: cleanPitchAccent(reading || term),
          sinoVietnamese: sv || undefined,
          meaning,
          note: sv ? `Hán Việt: ${sv}` : undefined,
        });
        continue;
      }
    }

    // Slide-based multi-line detection:
    // Line has pitch accent (＼ or ￣) or is pure kana reading
    if ((line.includes('＼') || line.includes('￣')) && /[\u3040-\u30ff]/.test(line)) {
      currentReading = line;
      currentPitch = line;
      continue;
    }

    // Line is Japanese Kana / Kanji term
    if (/[\u3400-\u4dbf\u4e00-\u9fff]/.test(line)) {
      if (currentTerm) {
        // If we already have a term, flush previous slide
        flushCurrentSlide();
      }
      currentTerm = line;
      continue;
    }

    // Pure Kana term (if no term yet and not pitch accent)
    if (!currentTerm && KANA_ACCENT_REGEX.test(line) && !line.includes('＼') && !line.includes('￣')) {
      currentTerm = line;
      continue;
    }

    // Vietnamese meaning line
    if (/[a-zA-ZÀ-ỹ]/.test(line) && !line.startsWith('‹#›') && !/^\d+\s*さい/.test(line) && line !== '?') {
      currentMeaning = currentMeaning ? `${currentMeaning}; ${line}` : line;
      continue;
    }
  }

  // Flush any final card
  flushCurrentSlide();

  return {
    deckName: defaultDeckName,
    cards,
    totalRawLines: lines.length,
  };
}
