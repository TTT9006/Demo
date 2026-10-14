import { it, expect } from 'vitest';
import { defaultDecks } from '../apps/api/src/default-decks';
import { kanjiData } from '../apps/api/src/kanji';
import { toHiragana } from 'wanakana';

it('has complete unique kana sets and sourced readings/radicals for each themed kanji', async () => {
  const decks = await defaultDecks();
  const { characters } = await kanjiData();
  expect(decks).toHaveLength(8);
  for (const deck of decks) {
    expect(new Set(deck.cards.map((c) => c.japanese)).size).toBe(deck.cards.length);
    for (const card of deck.cards) {
      expect(card.meaning).not.toBe('');
      if (card.materialType === 'kanji') {
        const source = characters[card.japanese];
        expect(source.readings.map((r) => toHiragana(r))).toContain(card.reading);
        expect(card.note).toContain(`#${source.radicalId}`);
        expect(card.english).toBe(source.meanings.join('; '));
      }
    }
  }
  expect(decks[0].cards.map((c) => c.japanese)).toEqual(
    expect.arrayContaining(['を', 'ん', 'ぢ', 'づ', 'ぴゃ']),
  );
  expect(decks[1].cards.map((c) => c.japanese)).toEqual(
    expect.arrayContaining(['ヲ', 'ン', 'ヂ', 'ヅ', 'ピャ']),
  );
});
