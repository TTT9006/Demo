import { describe, it, expect } from 'vitest';
import { lessons } from '../packages/shared/content';
import { curriculumLessons } from '../packages/shared/grammar-curriculum';
import { alignReading, hasKanji, suppliedSegments } from '../packages/shared/annotation';
import { toHiragana, toKatakana } from 'wanakana';

describe('Grammar curriculum integrity', () => {
  it('covers 50 elementary chapters and original intermediate groups at both levels', () => {
    expect(
      curriculumLessons
        .filter((l) => l.content.curriculum?.chapter)
        .map((l) => l.content.curriculum!.chapter),
    ).toEqual(Array.from({ length: 50 }, (_, i) => i + 1));
    for (const level of ['N3', 'N2'])
      expect(curriculumLessons.filter((l) => l.level === level)).toHaveLength(24);
    expect(new Set(lessons.map((l) => l.id)).size).toBe(lessons.length);
  });
  it('has valid answers, unique options and resolvable related lessons', () => {
    const ids = new Set(lessons.map((l) => l.id));
    const questionIds = new Set<string>();
    for (const l of lessons) {
      for (const related of l.content.related)
        expect(ids.has(related), `${l.id}: ${related}`).toBe(true);
      expect(l.content.examples.length).toBeGreaterThanOrEqual(1);
      for (const q of l.exercises) {
        expect(questionIds.has(q.id), q.id).toBe(false);
        questionIds.add(q.id);
        expect(q.answer.trim(), q.id).not.toBe('');
        expect(q.explanation.trim(), q.id).not.toBe('');
        if (q.type === 'choice') {
          expect(q.options, q.id).toContain(q.answer);
          expect(new Set(q.options).size, q.id).toBe(q.options!.length);
        }
        if (q.type === 'order' && l.content.curriculum) {
          expect([...q.options!.join('')].sort(), q.id).toEqual([...q.answer].sort());
          expect(q.options!.length, q.id).toBeGreaterThan(1);
        }
      }
    }
  });
  it('aligns supplied kana on authored examples without residual markup', () => {
    for (const l of curriculumLessons)
      for (const ex of l.content.examples) {
        expect(ex.ja, l.id).not.toMatch(/[\[\]／]/);
        expect(ex.kana, l.id).not.toMatch(/\p{Script=Han}/u);
        const segments = ex.readings
          ? suppliedSegments(ex.ja, ex.readings)
          : alignReading(ex.ja, ex.kana);
        if (hasKanji(ex.ja))
          expect(
            segments.some((s) => s.reading),
            `${l.id}: ${ex.ja} / ${ex.kana}`,
          ).toBe(true);
        expect(
          segments.filter((s) => hasKanji(s.text)).every((s) => s.reading),
          l.id,
        ).toBe(true);
        const normalizeKana = (s: string) => toHiragana(toKatakana(s));
        expect(normalizeKana(segments.map((s) => s.reading || s.text).join('')), l.id).toBe(
          normalizeKana(ex.kana),
        );
      }
  });
  it('guarantees every single lesson across N5–N1 has exactly 10 exercises and complete level coverage', () => {
    for (const level of ['N5', 'N4', 'N3', 'N2', 'N1']) {
      const levelLessons = lessons.filter((l) => l.level === level);
      expect(levelLessons.length).toBeGreaterThanOrEqual(40);
    }
    for (const l of lessons) {
      expect(l.exercises, `${l.id} (${l.title}) should have 10 exercises`).toHaveLength(10);
    }
  });
});
