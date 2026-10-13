import { toHiragana } from 'wanakana';
export type AnnotationSegment = { text: string; reading?: string };
export type AnnotationMode = 'romanized' | 'japanese';
export const hasKanji = (text: string) => /\p{Script=Han}/u.test(text);
export function suppliedSegments(
  text: string,
  readings: Record<string, string>,
): AnnotationSegment[] {
  const keys = Object.keys(readings)
    .filter((k) => k && hasKanji(k))
    .sort((a, b) => b.length - a.length);
  const result: AnnotationSegment[] = [];
  let pos = 0;
  while (pos < text.length) {
    const matches = keys
      .map((k) => ({ k, index: text.indexOf(k, pos) }))
      .filter((v) => v.index >= 0)
      .sort((a, b) => a.index - b.index || b.k.length - a.k.length);
    const next = matches[0];
    if (!next) {
      result.push({ text: text.slice(pos) });
      break;
    }
    if (next.index > pos) result.push({ text: text.slice(pos, next.index) });
    result.push(...alignReading(next.k, readings[next.k]));
    pos = next.index + next.k.length;
  }
  return result;
}
// Align only when the supplied kana has one unambiguous segmentation.
// Kana and punctuation anchor the reading; unknown or ambiguous input stays plain.
export function alignReading(text: string, reading: string): AnnotationSegment[] {
  if (!hasKanji(text)) return [{ text }];
  const parts = text.match(/[\p{Script=Han}々]+|[^\p{Script=Han}々]+/gu) || [text];
  const kana = toHiragana(reading.normalize('NFC'), { passRomaji: true });
  if (/\p{Script=Han}/u.test(kana)) return [{ text }];
  const answers: AnnotationSegment[][] = [];
  function walk(i: number, pos: number, out: AnnotationSegment[]) {
    if (answers.length > 1) return;
    if (i === parts.length) {
      if (pos === kana.length) answers.push(out);
      return;
    }
    const part = parts[i];
    if (!hasKanji(part)) {
      const literal = toHiragana(part, { passRomaji: true });
      if (kana.startsWith(literal, pos))
        walk(i + 1, pos + literal.length, [...out, { text: part }]);
      return;
    }
    const max = Math.min(kana.length, pos + part.length * 12);
    for (let end = pos + 1; end <= max; end++) {
      const value = kana.slice(pos, end);
      if (/^[\p{Script=Hiragana}ー]+$/u.test(value))
        walk(i + 1, end, [...out, { text: part, reading: value }]);
    }
  }
  walk(0, 0, []);
  return answers.length === 1 ? answers[0] : [{ text }];
}
