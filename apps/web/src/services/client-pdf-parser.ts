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
    const positioned = textContent.items.filter((item): item is import('pdfjs-dist/types/src/display/api').TextItem => 'str' in item && !!item.str.trim());

    // 1. Group items by baseline Y (tolerance 4.5px) to detect table headers robustly
    const lineBuckets: { y: number; items: typeof positioned; text: string }[] = [];
    for (const it of positioned) {
      const y = it.transform[5];
      let bucket = lineBuckets.find(b => Math.abs(b.y - y) <= 4.5);
      if (!bucket) {
        bucket = { y, items: [], text: '' };
        lineBuckets.push(bucket);
      }
      bucket.items.push(it);
    }

    for (const b of lineBuckets) {
      b.items.sort((a, b) => a.transform[4] - b.transform[4]);
      b.text = b.items.map(it => it.str).join(' ');
    }

    // Detect header line: contains STT/number column + Hiragana/Katakana + Nghĩa
    const headerBucket = lineBuckets.find(b =>
      b.text &&
      b.text.includes('STT') &&
      (/Hiragana|Katakana/i.test(b.text)) &&
      (/Ngh/i.test(b.text) || /nghĩa/i.test(b.text))
    );

    if (headerBucket) {
      const headerY = headerBucket.y;

      const sttItem = headerBucket.items.find(it => it.str.trim() === 'STT');
      const readingItem = headerBucket.items.find(it => /Hiragana/i.test(it.str));
      const typeItem = headerBucket.items.find(it => /^Lo/i.test(it.str));
      const meaningItem = headerBucket.items.find(it => /^Ngh/i.test(it.str));

      const sttX = sttItem ? sttItem.transform[4] : 55;
      const readingX = readingItem ? readingItem.transform[4] : 180;
      const typeX = typeItem ? typeItem.transform[4] : (readingX + (meaningItem ? meaningItem.transform[4] - readingX : 160) * 0.6);
      const meaningX = meaningItem ? meaningItem.transform[4] : 340;
      const kanjiX = sttX + 22; // Kanji column starts right after STT

      const anchors = positioned.filter(it =>
        /^\d+$/.test(it.str.trim()) &&
        Math.abs(it.transform[4] - sttX) < 25 &&
        it.transform[5] < headerY - 5
      ).sort((a, b) => b.transform[5] - a.transform[5]);

      if (anchors.length > 0) {
        const joinCell = (items: typeof positioned, isJapanese = false) => {
          items.sort((a, b) => Math.abs(a.transform[5] - b.transform[5]) > 3 ? b.transform[5] - a.transform[5] : a.transform[4] - b.transform[4]);
          const joined = items.map((item, i) => {
            const prev = items[i - 1];
            const space = prev && (Math.abs(prev.transform[5] - item.transform[5]) > 3 || item.transform[4] - prev.transform[4] - (prev.width || 0) > 1.2);
            return (space ? ' ' : '') + item.str;
          }).join('').trim();
          return isJapanese ? joined.replace(/(?<=[\u3040-\u30ff\u3400-\u9fff])\s+(?=[\u3040-\u30ff\u3400-\u9fff])/g, '') : joined;
        };

        for (let i = 0; i < anchors.length; i++) {
          const cur = anchors[i];
          const prevY = i === 0 ? headerY : anchors[i - 1].transform[5];
          const nextY = i === anchors.length - 1 ? cur.transform[5] - 40 : anchors[i + 1].transform[5];

          const top = (prevY + cur.transform[5]) / 2;
          const bottom = (cur.transform[5] + nextY) / 2;

          const rowItems = positioned.filter(it => it.transform[5] < top && it.transform[5] >= bottom);

          const termItems = rowItems.filter(it => it.transform[4] >= kanjiX && it.transform[4] < readingX - 4);
          const readingItems = rowItems.filter(it => it.transform[4] >= readingX - 4 && it.transform[4] < typeX - 4);
          const meaningItems = rowItems.filter(it => it.transform[4] >= meaningX - 4);

          let rawTerm = joinCell(termItems, true);
          let rawReading = joinCell(readingItems, true);
          let rawMeaning = joinCell(meaningItems, false);

          let sino = '';
          const sinoMatch = rawTerm.match(SINO_VIETNAMESE_REGEX);
          if (sinoMatch) {
            sino = sinoMatch[0].replace(/\s+/g, ' ').trim();
            rawTerm = rawTerm.replace(SINO_VIETNAMESE_REGEX, '').trim();
          }

          const term = (!rawTerm || rawTerm === '-') ? rawReading : rawTerm;
          const reading = rawReading || term;

          lines.push(`${term}\t${reading}\t${rawMeaning}${sino ? `\t${sino}` : ''}`);
        }
        continue;
      }
    }

    // Fallback: Group text items by roughly their Y coordinate to reconstruct lines
    const lineMap = new Map<number, { x: number; text: string }[]>();

    for (const item of textContent.items) {
      if (!('str' in item) || !item.str.trim()) continue;
      const y = Math.round(item.transform[5]);
      const x = item.transform[4];

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

    const sortedYs = Array.from(lineMap.keys()).sort((a, b) => b - a);

    for (const y of sortedYs) {
      const items = lineMap.get(y)!;
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

  // Strategy 1: Tab-separated lines (e.g. from table extractor)
  const tabLines = lines.filter(l => l.includes('\t'));
  if (tabLines.length > 0 && tabLines.length >= lines.length * 0.3) {
    for (const line of tabLines) {
      const parts = line.split('\t').map(p => p.trim());
      if (parts.length >= 2) {
        let term = parts[0];
        let reading = parts[1] || '';
        let meaning = parts[2] || '';
        let sino = parts[3] || '';

        const sm = term.match(SINO_VIETNAMESE_REGEX) || meaning.match(SINO_VIETNAMESE_REGEX);
        if (sm) {
          if (!sino) sino = sm[0];
          term = term.replace(SINO_VIETNAMESE_REGEX, '').trim();
        }
        if (sino) {
          sino = sino.replace(/\s+/g, ' ').trim();
        }

        if (term === '-' && reading) term = reading;
        if (!reading && term) reading = term;

        const cleanRead = cleanPitchAccent(reading || term);
        cards.push({
          term: term || reading,
          reading: reading || term,
          cleanReading: cleanRead,
          sinoVietnamese: sino || undefined,
          meaning: meaning || 'Chưa có nghĩa',
          note: sino ? `Hán Việt: ${sino}` : undefined,
        });
      }
    }
    if (cards.length > 0) {
      return { deckName: defaultDeckName, cards, totalRawLines: lines.length };
    }
  }

  // Strategy 2: Numbered table lines from flattened PDF tables or lists
  const numberedIndices = lines
    .map((l, idx) => ({ match: l.match(/^(\d{1,3})\s*[-–—.]?\s*(.*)$/), idx }))
    .filter(x => x.match && parseInt(x.match[1], 10) > 0 && parseInt(x.match[1], 10) <= 250);

  if (numberedIndices.length >= 3) {
    const TYPE_REGEX = /\b(Danh\s*từ|Động\s*từ|Tính\s*từ\s*(?:[iI]|[nN]a)?|Phó\s*từ|Trợ\s*từ|Liên\s*từ|Thán\s*từ|Mẫu\s*câu|Cụm\s*(?:ĐT|TT|DT)?|Tên\s*riêng)\b/i;

    for (let k = 0; k < numberedIndices.length; k++) {
      const { match, idx } = numberedIndices[k];
      const content = match![2].trim();
      const nextIdx = k + 1 < numberedIndices.length ? numberedIndices[k + 1].idx : lines.length;

      // Check lines immediately preceding this index for Sino-Vietnamese tag e.g. [THỦ], [TRỢ]
      let sino = '';
      for (let p = Math.max(0, idx - 2); p < idx; p++) {
        const prevLine = lines[p];
        if (/^\d+/.test(prevLine)) continue;
        const sm = prevLine.match(SINO_VIETNAMESE_REGEX);
        if (sm) {
          sino = sm.map(s => s.replace(/\s+/g, ' ').trim()).join(' ');
        }
      }

      // Check lines between idx and nextIdx for Kanji
      let kanji = '';
      const extraMeaningLines: string[] = [];

      for (let j = idx + 1; j < nextIdx; j++) {
        const line = lines[j];
        if (j === nextIdx - 1 && SINO_VIETNAMESE_REGEX.test(line)) continue;
        if (KANJI_REGEX.test(line) && !kanji) {
          const clean = line.replace(SINO_VIETNAMESE_REGEX, '').replace(/\s+/g, '');
          if (!/[a-zA-ZÀ-ỹ]{3,}/.test(line)) {
            kanji = clean;
            continue;
          }
        }
        if (/[a-zA-ZÀ-ỹ]/.test(line) && !line.includes('Trang') && !line.includes('Danh Sách') && !line.includes('STT')) {
          extraMeaningLines.push(line);
        }
      }

      let reading = '';
      let meaning = '';

      const typeMatch = content.match(TYPE_REGEX);
      if (typeMatch && typeMatch.index !== undefined) {
        reading = content.slice(0, typeMatch.index).trim();
        meaning = content.slice(typeMatch.index + typeMatch[0].length).trim();
      } else {
        const m = content.match(/^([\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\s\[\]～〜ー。、！？\-–—―]+)\s+([a-zA-ZÀ-ỹ].*)$/);
        if (m) {
          reading = m[1].trim();
          meaning = m[2].trim();
        } else {
          reading = content;
          meaning = '';
        }
      }

      reading = reading.replace(/^[-–—]\s*/, '').replace(/\s+/g, '').trim();

      if (extraMeaningLines.length > 0) {
        const extra = extraMeaningLines.join('; ').trim();
        meaning = meaning ? `${meaning}; ${extra}` : extra;
      }

      meaning = meaning.replace(/\s+/g, ' ').replace(/\s+([,;.!?])/g, '$1').trim();
      const term = kanji || reading;

      if (term || reading) {
        const cleanRead = cleanPitchAccent(reading || term);
        cards.push({
          term: term || reading,
          reading: reading || term,
          cleanReading: cleanRead,
          sinoVietnamese: sino || undefined,
          meaning: meaning || 'Chưa có nghĩa',
          note: sino ? `Hán Việt: ${sino}` : undefined,
        });
      }
    }

    if (cards.length > 0) {
      return { deckName: defaultDeckName, cards, totalRawLines: lines.length };
    }
  }

  // Strategy 3: Slide-deck or single-line fallback
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
    if (KANJI_REGEX.test(line)) {
      if (currentTerm) {
        flushCurrentSlide();
      }
      currentTerm = line;
      continue;
    }

    // Pure Kana term (if no term yet, or if previous card has meaning/reading)
    if (KANA_ACCENT_REGEX.test(line) && !line.includes('＼') && !line.includes('￣')) {
      if (currentTerm && (currentMeaning || currentReading)) {
        flushCurrentSlide();
      }
      if (!currentTerm) {
        currentTerm = line;
        continue;
      }
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
