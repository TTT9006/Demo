import { searchDictionary } from './dictionary';

export interface ExtractedPdfCard {
  term: string;
  reading: string;
  cleanReading: string;
  sinoVietnamese?: string;
  meaning: string;
  note?: string;
  confidence: 'high' | 'medium' | 'low';
}

export interface ExtractedPdfResult {
  deckName: string;
  cards: ExtractedPdfCard[];
  totalRawLines: number;
}

const JAPANESE_CHAR_REGEX = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const KANJI_REGEX = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
const SINO_VIETNAMESE_REGEX = /\[([A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ\s※\-\/]+)\]/g;
const KANA_ONLY_REGEX = /^[\u3040-\u30ff\s\[\]［］（）()～〜ー\-–—―]+$/;

/**
 * Parses raw text extracted from a PDF document into structured vocabulary cards.
 * Handles common vocabulary list formats:
 * 1. Line with Japanese + Meaning: "食べる (たべる): Ăn" or "食べる [THỰC] - Ăn"
 * 2. Tab/Colon/Dash-separated columns: "食べる \t たべる \t Ăn"
 * 3. Multi-line pairs or entries requiring dictionary enrichment.
 */
export async function parsePdfVocabulary(text: string, filename = 'Tai-lieu.pdf'): Promise<ExtractedPdfResult> {
  const rawLines = text
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const defaultDeckName = filename.replace(/\.pdf$/i, '').trim() || 'Từ vựng PDF';
  const cards: ExtractedPdfCard[] = [];

  // Patterns for structured single-line formats:
  // e.g.: "1. 食べる (たべる) [THỰC]: Ăn uống"
  // e.g.: "食べる - たべる - Ăn"
  // e.g.: "食べる \t たべる \t Ăn"
  // e.g.: "食べる: Ăn"
  for (const line of rawLines) {
    // Strip leading numbering: "1.", "1/", "1 -", "・"
    const cleanedLine = line.replace(/^(\d+[\.\/\-\)]\s*|[・*•★☆\-])\s*/, '').trim();
    if (!JAPANESE_CHAR_REGEX.test(cleanedLine)) continue;

    // Extract Sino-Vietnamese if present in line
    const sinoList: string[] = [];
    let match: RegExpExecArray | null;
    const sinoRegex = new RegExp(SINO_VIETNAMESE_REGEX);
    while ((match = sinoRegex.exec(cleanedLine)) !== null) {
      const val = match[1].replace(/[※]/g, '').trim();
      if (val && !sinoList.includes(`[${val}]`)) {
        sinoList.push(`[${val}]`);
      }
    }
    const sinoVietnamese = sinoList.length > 0 ? sinoList.join(' ') : undefined;
    const withoutSino = cleanedLine.replace(SINO_VIETNAMESE_REGEX, ' ').trim();

    // Check delimiters: \t, ' - ', ' : ', ':', '—', '–'
    const parts = withoutSino
      .split(/[\t]+|\s+[-–—:]\s+|(?<=[^\s])\s*[:]\s*(?=[a-zA-ZÀ-ỹ])/)
      .map((p) => p.trim())
      .filter(Boolean);

    if (parts.length >= 2) {
      const firstPart = parts[0];
      const lastPart = parts[parts.length - 1];

      // Format: [Japanese + optional reading], ..., [Meaning]
      if (JAPANESE_CHAR_REGEX.test(firstPart) && /[a-zA-ZÀ-ỹ]/.test(lastPart)) {
        let term = firstPart;
        let reading = '';

        // Check if reading is in parentheses inside firstPart: "食べる（たべる）" or "食べる(たべる)"
        const parenMatch = firstPart.match(/^([^\(（]+)[\(（]([^\)）]+)[\)）]$/);
        let meaning = '';

        if (parenMatch) {
          term = parenMatch[1].trim();
          reading = parenMatch[2].trim();
          // meaning is everything from parts[1] onward
          meaning = parts.slice(1).join('; ');
        } else if (parts.length >= 3 && KANA_ONLY_REGEX.test(parts[1])) {
          reading = parts[1];
          meaning = parts.slice(2).join('; ');
        } else {
          meaning = parts.slice(1).join('; ');
        }

        cards.push({
          term,
          reading: reading || term,
          cleanReading: reading || term,
          sinoVietnamese,
          meaning,
          note: sinoVietnamese ? `Hán Việt: ${sinoVietnamese}` : undefined,
          confidence: 'high',
        });
        continue;
      }
    }

    // Single token or Japanese line without explicit meaning in the same line:
    // Try looking up in the built-in dictionary
    const tokens = cleanedLine.split(/\s+/).filter((t) => JAPANESE_CHAR_REGEX.test(t));
    if (tokens.length === 1 && tokens[0].length <= 20) {
      const token = tokens[0];
      try {
        const dictRes = await searchDictionary(token, 1, 1);
        if (dictRes.items && dictRes.items.length > 0) {
          const entry = dictRes.items[0];
          const primaryKanji = entry.kanji?.[0]?.text || token;
          const primaryReading = entry.readings?.[0]?.text || token;
          
          // Extract Vietnamese translations or English glosses
          const viGlossList: string[] = [];
          const enGlossList: string[] = [];

          for (const s of entry.senses) {
            for (const g of s.glosses) {
              if (g.translation?.translatedText) {
                viGlossList.push(g.translation.translatedText);
              } else if (g.originalText) {
                enGlossList.push(g.originalText);
              }
            }
          }

          const meaning = viGlossList.length > 0 
            ? viGlossList.slice(0, 3).join('; ')
            : enGlossList.slice(0, 3).join('; ');

          if (meaning) {
            cards.push({
              term: primaryKanji,
              reading: primaryReading,
              cleanReading: primaryReading,
              sinoVietnamese,
              meaning,
              note: sinoVietnamese ? `Hán Việt: ${sinoVietnamese}` : undefined,
              confidence: 'medium',
            });
            continue;
          }
        }
      } catch (err) {
        console.error('searchDictionary error in parsePdfVocabulary:', err);
      }
    }
  }

  return {
    deckName: defaultDeckName,
    cards,
    totalRawLines: rawLines.length,
  };
}
