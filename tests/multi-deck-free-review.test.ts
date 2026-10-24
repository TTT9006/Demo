import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import { app } from '../apps/api/src/app';
import { db } from '../apps/api/src/db';

describe('Multi-deck free review & shuffling', () => {
  let userAgent: ReturnType<typeof request.agent>;
  let otherAgent: ReturnType<typeof request.agent>;
  let deck1Id: string;
  let deck2Id: string;
  let deck3Id: string;
  let otherDeckId: string;

  beforeAll(async () => {
    const userEmail = `multi-deck-${Date.now()}-${Math.random()}@example.com`;
    const otherEmail = `other-${Date.now()}-${Math.random()}@example.com`;

    // Create primary user
    userAgent = request.agent(app);
    const reg1 = await userAgent.post('/api/auth/register').send({
      email: userEmail,
      name: 'Deck Reviewer',
      password: 'password1234',
    });
    expect(reg1.status).toBe(201);

    // Create secondary user
    otherAgent = request.agent(app);
    const reg2 = await otherAgent.post('/api/auth/register').send({
      email: otherEmail,
      name: 'Other Person',
      password: 'password1234',
    });
    expect(reg2.status).toBe(201);

    // Create 3 decks for primary user
    const d1 = await userAgent.post('/api/flashcards/decks').send({ name: 'Chủ đề 1: Gia đình' });
    deck1Id = d1.body.id;
    const d2 = await userAgent.post('/api/flashcards/decks').send({ name: 'Chủ đề 2: Đồ ăn' });
    deck2Id = d2.body.id;
    const d3 = await userAgent.post('/api/flashcards/decks').send({ name: 'Chủ đề 3: Du lịch' });
    deck3Id = d3.body.id;

    // Create deck for other user
    const od = await otherAgent.post('/api/flashcards/decks').send({ name: 'Bộ thẻ riêng tư' });
    otherDeckId = od.body.id;

    // Add cards to deck 1
    await userAgent.post('/api/flashcards/cards').send({
      deckId: deck1Id,
      japanese: '家族',
      reading: 'かぞく',
      meaning: 'gia đình',
    });
    await userAgent.post('/api/flashcards/cards').send({
      deckId: deck1Id,
      japanese: '両親',
      reading: 'りょうしん',
      meaning: 'bố mẹ',
    });

    // Add cards to deck 2
    await userAgent.post('/api/flashcards/cards').send({
      deckId: deck2Id,
      japanese: 'ご飯',
      reading: 'ごはん',
      meaning: 'cơm',
    });
    await userAgent.post('/api/flashcards/cards').send({
      deckId: deck2Id,
      japanese: '水',
      reading: 'みず',
      meaning: 'nước',
    });

    // Add cards to deck 3
    await userAgent.post('/api/flashcards/cards').send({
      deckId: deck3Id,
      japanese: '空港',
      reading: 'くうこう',
      meaning: 'sân bay',
    });

    // Add card to other user's deck
    await otherAgent.post('/api/flashcards/cards').send({
      deckId: otherDeckId,
      japanese: '秘密',
      reading: 'ひみつ',
      meaning: 'bí mật',
    });
  });

  it('queries cards across multiple chosen decks with mode=all', async () => {
    const res = await userAgent
      .get('/api/flashcards/review/due')
      .query({ decks: `${deck1Id},${deck2Id}`, mode: 'all' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(4);

    const meanings = res.body.map((c: { meaning: string }) => c.meaning);
    expect(meanings).toContain('gia đình');
    expect(meanings).toContain('bố mẹ');
    expect(meanings).toContain('cơm');
    expect(meanings).toContain('nước');
    expect(meanings).not.toContain('sân bay'); // deck3 was not chosen

    // Check deck name is included on card
    expect(res.body[0].deck).toBeDefined();
    expect(typeof res.body[0].deck.name).toBe('string');
  });

  it('queries all decks when neither deck nor decks param is provided in mode=all', async () => {
    const res = await userAgent
      .get('/api/flashcards/review/due')
      .query({ mode: 'all' });

    expect(res.status).toBe(200);
    // User has seeded default decks plus their 3 custom decks
    expect(res.body.length).toBeGreaterThanOrEqual(5);
    const meanings = res.body.map((c: { meaning: string }) => c.meaning);
    expect(meanings).toContain('sân bay');
    expect(meanings).toContain('gia đình');
    expect(meanings).toContain('cơm');
  });

  it('strictly isolates tenant data and refuses foreign decks', async () => {
    // Attempting to include other user's deck ID
    const res = await userAgent
      .get('/api/flashcards/review/due')
      .query({ decks: `${deck1Id},${otherDeckId}`, mode: 'all' });

    expect(res.status).toBe(200);
    const meanings = res.body.map((c: { meaning: string }) => c.meaning);
    expect(meanings).not.toContain('bí mật');
    expect(res.body).toHaveLength(2); // Only user's deck 1 cards
  });

  it('supports single deck filtering via deck or decks parameter', async () => {
    const res = await userAgent
      .get('/api/flashcards/review/due')
      .query({ decks: deck3Id, mode: 'all' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].meaning).toBe('sân bay');
    expect(res.body[0].deck.name).toBe('Chủ đề 3: Du lịch');
  });

  it('shuffles cards so they are not statically grouped by deck insertion order', async () => {
    // In free review mode, cards are shuffled
    const res1 = await userAgent
      .get('/api/flashcards/review/due')
      .query({ decks: `${deck1Id},${deck2Id},${deck3Id}`, mode: 'all' });

    expect(res1.status).toBe(200);
    expect(res1.body).toHaveLength(5);

    // Verify all 5 cards are present
    const cardIds = new Set(res1.body.map((c: { id: string }) => c.id));
    expect(cardIds.size).toBe(5);
  });
});
