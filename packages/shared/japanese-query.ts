import { toHiragana, toRomaji } from 'wanakana';
export const SEARCH_VERSION = 'jp-search-3';
export const normalizeUnicode = (text: string) =>
  text.normalize('NFKC').trim().replace(/\s+/gu, ' ');
export const normalizeKana = (text: string) =>
  toHiragana(normalizeUnicode(text), { passRomaji: true, convertLongVowelMark: false });
export const normalizeVietnamese = (text: string) =>
  normalizeUnicode(text).toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd');
export function normalizeRomaji(text: string): string[] {
  const q = normalizeUnicode(text).toLowerCase().replace(/[’ʼ]/g, "'");
  if (!/^[a-zāīūēōâîûêô' -]+$/.test(q)) return [];
  let values = [''];
  for (const char of q) {
    const choices: Record<string, string[]> = {
      ā: ['aa'],
      â: ['aa'],
      ī: ['ii'],
      î: ['ii'],
      ū: ['uu'],
      û: ['uu'],
      ē: ['ee', 'ei'],
      ê: ['ee', 'ei'],
      ō: ['ou', 'oo'],
      ô: ['ou', 'oo'],
    };
    values = values.flatMap((v) => (choices[char] || [char]).map((c) => v + c)).slice(0, 16);
  }
  return [...new Set(values)];
}
export function longVowelVariants(kana: string): string[] {
  let values = [''];
  for (const char of kana) {
    if (char !== 'ー') {
      values = values.map((v) => v + char);
      continue;
    }
    values = values
      .flatMap((v) => {
        const vowel = toRomaji(v.slice(-1)).slice(-1);
        const endings: Record<string, string[]> = {
          a: ['あ'],
          i: ['い'],
          u: ['う'],
          e: ['え', 'い'],
          o: ['お', 'う'],
        };
        return (endings[vowel] || ['ー']).map((c) => v + c);
      })
      .slice(0, 16);
  }
  return [...new Set([kana, ...values])];
}
export function generateSearchVariants(text: string) {
  const original = normalizeUnicode(text),
    lower = original.toLowerCase();
  const romaji = normalizeRomaji(original);
  const kana = normalizeKana(lower);
  const readings = new Set<string>();
  if (/[\p{Script=Hiragana}\p{Script=Katakana}]/u.test(original))
    longVowelVariants(kana).forEach((v) => readings.add(v));
  for (const roman of romaji) {
    const converted = toHiragana(roman);
    if (/^[\p{Script=Hiragana}ー]+$/u.test(converted))
      longVowelVariants(converted).forEach((v) => readings.add(v));
    if (roman === 'konnichiwa') readings.add('こんにちは');
    if (roman === 'konbanwa') readings.add('こんばんは');
  }
  return {
    original,
    normalized: kana,
    romaji,
    readings: [...readings].slice(0, 32),
    vietnamese: normalizeVietnamese(original),
    isVietnamese: /[\p{Script=Latin}]/u.test(original) && !romaji.length,
  };
}
export const JapaneseQueryNormalizer = {
  normalizeUnicode,
  normalizeKana,
  normalizeRomaji,
  normalizeVietnamese,
  generateSearchVariants,
};
export function searchTerms(kanji: string[], readings: string[], vietnamese: string[]) {
  const result = new Map<string, { term: string; kind: string }>();
  const add = (term: string, kind: string) => {
    if (term) result.set(kind + ':' + term, { term, kind });
  };
  kanji.forEach((k) => add(normalizeKana(k), 'kanji'));
  readings.forEach((r) =>
    longVowelVariants(normalizeKana(r)).forEach((k, i) => {
      add(k, i ? 'variant' : 'kana');
      add(toRomaji(k).toLowerCase(), 'romaji');
    }),
  );
  vietnamese.forEach((v) => add(normalizeVietnamese(v), 'vi'));
  return [...result.values()];
}
export function editDistance(a: string, b: string): number {
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const next = [i];
    for (let j = 1; j <= b.length; j++)
      next[j] = Math.min(
        next[j - 1] + 1,
        prev[j] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    prev = next;
  }
  return prev[b.length];
}
