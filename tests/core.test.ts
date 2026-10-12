import { describe, it, expect } from 'vitest';
import { schedule } from '../packages/shared/srs';
import { normalize, wordSchema } from '../apps/api/src/dictionary';
import { GeminiProvider, validateTranslations } from '../apps/api/src/translation';
describe('Spaced repetition', () => {
  it('resets a forgotten card and schedules it in ten minutes', () => {
    const now = new Date('2026-01-01T00:00:00Z');
    const result = schedule({ ease: 2.5, interval: 15, repetitions: 4 }, 0, now);
    expect(result.repetitions).toBe(0);
    expect(result.due.getTime() - now.getTime()).toBe(600000);
    expect(result.ease).toBeGreaterThanOrEqual(1.3);
  });
  it('increases intervals for successful consecutive reviews', () => {
    let card = { ease: 2.5, interval: 0, repetitions: 0 };
    const intervals = [];
    for (let i = 0; i < 4; i++) {
      card = schedule(card, 2);
      intervals.push(card.interval);
    }
    expect(intervals).toEqual([1, 6, 15, 38]);
  });
  it('never allows ease below 1.3', () => {
    expect(schedule({ ease: 1.3, interval: 1, repetitions: 1 }, 0).ease).toBe(1.3);
  });
});
describe('Dictionary and translation boundaries', () => {
  it('normalizes full-width and katakana without losing Japanese', () => {
    expect(normalize(' ガッコウ ')).toBe('がっこう');
    expect(normalize('ＡＢＣ')).toBe('abc');
  });
  it('rejects fabricated schema fields', () => {
    expect(() => wordSchema.parse({ id: 1, readings: [], meanings: [] })).toThrow();
  });
  it('requires exact unique IDs and nonempty Vietnamese', () => {
    expect(
      validateTranslations({ translations: [{ glossId: 'a', vi: 'ăn' }] }, ['a']),
    ).toHaveLength(1);
    expect(() =>
      validateTranslations({ translations: [{ glossId: 'b', vi: 'ăn' }] }, ['a']),
    ).toThrow();
    expect(() =>
      validateTranslations({ translations: [{ glossId: 'a', vi: '' }] }, ['a']),
    ).toThrow();
    expect(() =>
      validateTranslations(
        {
          translations: [
            { glossId: 'a', vi: 'ăn' },
            { glossId: 'a', vi: 'ăn' },
          ],
        },
        ['a', 'b'],
      ),
    ).toThrow();
  });
  it('refuses translation with missing credentials', () => {
    const key = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL;
    delete process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_MODEL;
    expect(() => new GeminiProvider()).toThrow(/GEMINI_API_KEY/);
    if (key) process.env.GEMINI_API_KEY = key;
    if (model) process.env.GEMINI_MODEL = model;
  });
});
