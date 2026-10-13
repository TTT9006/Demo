import { describe, it, expect } from 'vitest';
import {
  generateSearchVariants,
  normalizeUnicode,
  normalizeVietnamese,
  longVowelVariants,
  editDistance,
} from '../packages/shared/japanese-query';
import { alignReading } from '../packages/shared/annotation';
import { annotate } from '../apps/api/src/annotation';
import { kanjiData, kanjiStrokes } from '../apps/api/src/kanji';
describe('Japanese query normalization', () => {
  it.each([
    ['gakkou', 'がっこう'],
    ['gakkō', 'がっこう'],
    ['ＧＡＫＫＯＵ', 'がっこう'],
    ['ガッコウ', 'がっこう'],
    ['ｶﾞｯｺｳ', 'がっこう'],
    ['tōkyō', 'とうきょう'],
    ['toukyou', 'とうきょう'],
    ['suupaa', 'すうぱあ'],
    ['sūpā', 'すうぱあ'],
    ['konnichiwa', 'こんにちは'],
    ['nihon', 'にほん'],
    ['nippon', 'にっぽん'],
    ["shin'you", 'しんよう'],
    ['benkyou', 'べんきょう'],
    ['taberu', 'たべる'],
    ['kyou', 'きょう'],
    ['gakusei', 'がくせい'],
  ])('%s retains %s as a candidate', (q, k) =>
    expect(generateSearchVariants(q).readings).toContain(k),
  );
  it('preserves distinct original spellings and limits expansion', () => {
    expect(longVowelVariants('すーぱー')).toContain('すうぱあ');
    expect(generateSearchVariants('コート').readings).toEqual(['こーと','こおと','こうと']);
    expect(normalizeUnicode('　 学校  ')).toBe('学校');
    expect(generateSearchVariants('おお')).not.toEqual(generateSearchVariants('おう'));
    expect(normalizeVietnamese('NƯỚC')).toBe('nuoc');
    expect(generateSearchVariants('ăn').isVietnamese).toBe(true);
    expect(generateSearchVariants('ō'.repeat(100)).readings.length).toBeLessThanOrEqual(32);
    expect(editDistance('がっこう', 'がっこお')).toBe(1);
  });
});
describe('Safe reading annotations', () => {
  it.each([
    ['食べる', 'たべる', '食', 'た'],
    ['生きる', 'いきる', '生', 'い'],
    ['今日', 'きょう', '今日', 'きょう'],
    ['学校', 'がっこう', '学校', 'がっこう'],
    ['日本語', 'にほんご', '日本語', 'にほんご'],
  ])('aligns %s without repeating okurigana', (text, reading, word, kana) => {
    const s = alignReading(text, reading);
    expect(s.map((s) => s.text).join('')).toBe(text);
    expect(s.find((s) => s.reading)).toEqual({ text: word, reading: kana });
  });
  it('preserves whitespace, mixed script and punctuation', () => {
    const text = ' 私は日本語を勉強します。\n';
    const s = alignReading(text, ' わたしはにほんごをべんきょうします。\n');
    expect(s.filter((x) => x.reading).map((x) => x.reading)).toEqual([
      'わたし',
      'にほんご',
      'べんきょう',
    ]);
    expect(s.map((x) => x.text).join('')).toBe(text);
    expect(alignReading('かな ABC', 'かな ABC')).toEqual([{ text: 'かな ABC' }]);
    expect(alignReading('食べる', 'しょく')).toEqual([{ text: '食べる' }]);
  });
  it('uses contextual local morphology and caches results', async () => {
    const text = '今日、学校で日本語を勉強します。 食べる、生きる。';
    const s = await annotate(text);
    expect(s.map((x) => x.text).join('')).toBe(text);
    for (const kana of ['きょう', 'がっこう', 'にほんご', 'べんきょう', 'た', 'い'])
      expect(s.map((x) => x.reading)).toContain(kana);
    expect(await annotate(text)).toBe(s);
  });
});
describe('Licensed radical data', () => {
  it('has all 214 unique Kangxi numbers and sourced relationships', async () => {
    const { radicals, characters } = await kanjiData();
    expect(radicals.map((r) => r.id)).toEqual(Array.from({ length: 214 }, (_, i) => i + 1));
    for (const r of radicals)
      for (const c of r.examples) expect(characters[c].radicalId).toBe(r.id);
    expect(characters['休'].radicalId).toBe(9);
    expect(characters['語'].radicalId).toBe(149);
    expect(characters['海'].radicalId).toBe(85);
    expect(radicals[84].variants.find((v) => v.character === '氵')?.strokes).toBe(3);
    expect(radicals[84].strokes).toBe(4);
  });
  it('loads stroke paths lazily and safely rejects missing/multiple characters', async () => {
    expect((await kanjiStrokes('水'))?.paths).toHaveLength(4);
    expect((await kanjiStrokes('氵'))?.paths).toHaveLength(3);
    expect(await kanjiStrokes('../')).toBeNull();
  });
});
