import { beforeAll, afterAll, describe, it, expect, vi } from 'vitest';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import path from 'node:path';
import request from 'supertest';
import type { Express } from 'express';
import type { PrismaClient } from '@prisma/client';
import { lessons } from '../packages/shared/content';
const testDir = path.resolve('test-results/api');
const testDb = path.join(testDir, 'learning.db');
let app: Express, db: PrismaClient;
let session: ReturnType<typeof request.agent>;
let userId: string;
let deckId: string;
let cardId: string;
beforeAll(async () => {
  mkdirSync(testDir, { recursive: true });
  rmSync(testDb, { force: true });
  const sqlite = new DatabaseSync(testDb);
  for (const name of readdirSync('prisma/migrations').filter(n=>/^\d/.test(n)).sort()) sqlite.exec(readFileSync(`prisma/migrations/${name}/migration.sql`, 'utf8'));
  sqlite.close();
  process.env.DATABASE_URL = 'file:' + testDb.replace(/\\/g, '/');
  vi.resetModules();
  ({ app } = await import('../apps/api/src/app'));
  ({ db } = await import('../apps/api/src/db'));
  session = request.agent(app);
  for (const l of lessons)
    await db.grammar.create({
      data: { ...l, content: JSON.stringify(l.content), exercises: JSON.stringify(l.exercises) },
    });
});
afterAll(async () => {
  await db?.$disconnect();
});
describe.sequential('Authenticated learning workflows', () => {
  it('protects personal data', async () => {
    expect((await request(app).get('/api/dashboard')).status).toBe(401);
  });
  it('registers with a hashed password and an HTTP-only cookie', async () => {
    const res = await session
      .post('/api/auth/register')
      .send({ name: 'Người học', email: 'learner@example.com', password: 'example-password' });
    expect(res.status).toBe(201);
    expect(res.body.password).toBeUndefined();
    expect(String(res.headers['set-cookie'])).toContain('HttpOnly');
    userId = res.body.id;
    expect((await db.user.findUniqueOrThrow({ where: { id: userId } })).password).not.toBe(
      'example-password',
    );
  });
  it('rejects duplicate accounts and incorrect login', async () => {
    expect(
      (
        await request(app)
          .post('/api/auth/register')
          .send({ name: 'A', email: 'learner@example.com', password: 'example-password' })
      ).status,
    ).toBe(409);
    expect(
      (
        await request(app)
          .post('/api/auth/login')
          .send({ email: 'learner@example.com', password: 'wrong-password' })
      ).status,
    ).toBe(401);
    expect(
      (
        await request(app)
          .post('/api/auth/login')
          .send({ email: 'learner@example.com', password: 'example-password' })
      ).status,
    ).toBe(200);
  });
  it('rejects cross-origin writes', async () => {
    expect(
      (
        await session
          .post('/api/flashcards/decks')
          .set('Origin', 'https://attacker.example')
          .send({ name: 'Bad' })
      ).status,
    ).toBe(403);
  });
  it('persists annotation preferences and rejects unsupported modes', async()=>{
    expect((await session.get('/api/auth/me')).body.annotationMode).toBe('japanese');
    expect((await session.patch('/api/profile').send({annotationMode:'romanized'})).body.annotationMode).toBe('romanized');
    expect((await session.get('/api/auth/me')).body.annotationMode).toBe('romanized');
    expect((await session.patch('/api/profile').send({annotationMode:'off'})).status).toBe(400);
    const annotation=await session.post('/api/annotations').send({text:'今日は学校に行きます。'});
    expect(annotation.status).toBe(200);expect(annotation.body.segments.map((s:{text:string})=>s.text).join('')).toBe('今日は学校に行きます。');
  });
  it('saves radical progress per account and reuses SRS without resetting cards',async()=>{
    expect((await session.get('/api/radicals')).body).toHaveLength(214);
    expect((await session.post('/api/radicals/85/progress').send({completed:true})).status).toBe(200);
    expect((await session.get('/api/radicals')).body.find((r:{id:number})=>r.id===85).completed).toBe(true);
    const other=request.agent(app);await other.post('/api/auth/register').send({name:'Other',email:'radical-other@example.com',password:'example-password'});
    expect((await other.get('/api/radicals')).body.find((r:{id:number})=>r.id===85).completed).toBe(false);
    expect((await session.post('/api/radicals/999/progress').send({completed:true})).status).toBe(400);
    const first=(await session.post('/api/radicals/85/srs').send({})).body;
    await db.card.update({where:{id:first.id},data:{interval:7,repetitions:3,due:new Date(Date.now()+7*86400000)}});
    const again=(await session.post('/api/radicals/85/srs').send({})).body;
    expect(again.id).toBe(first.id);expect(again.interval).toBe(7);expect(again.materialType).toBe('radical');
    expect((await session.get('/api/kanji/'+encodeURIComponent('海'))).body.radical.id).toBe(85);
    expect((await session.get('/api/kanji/'+encodeURIComponent('氵')+'/strokes')).body.paths).toHaveLength(3);
  });
  it('creates cards and enforces ownership', async () => {
    const deck = await session.post('/api/flashcards/decks').send({ name: 'Từ đầu tiên' });
    expect(deck.status).toBe(201);
    deckId = deck.body.id;
    const card = await session
      .post('/api/flashcards/cards')
      .send({ deckId, japanese: '食べる', reading: 'たべる', meaning: 'ăn' });
    expect(card.status).toBe(201);
    cardId = card.body.id;
    const outsider = request.agent(app);
    await outsider
      .post('/api/auth/register')
      .send({ name: 'Other', email: 'other@example.com', password: 'example-password' });
    expect(
      (await outsider.patch('/api/flashcards/cards/' + cardId).send({ meaning: 'changed' })).status,
    ).toBe(404);
    expect((await outsider.get('/api/admin/translations/status')).status).toBe(403);
  });
  it('saves review history, moves due date, and rejects duplicate reviews', async () => {
    expect((await session.get('/api/flashcards/review/due')).body).toHaveLength(1);
    const res = await session.post('/api/flashcards/review').send({ cardId, rating: 2 });
    expect(res.status).toBe(200);
    expect(res.body.interval).toBe(1);
    expect((await session.get('/api/flashcards/review/due')).body).toHaveLength(0);
    expect((await session.post('/api/flashcards/review').send({ cardId, rating: 2 })).status).toBe(
      409,
    );
    expect(await db.review.count({ where: { userId } })).toBe(1);
  });
  it('evaluates grammar exercises and persists completion', async () => {
    const lesson = await session.get('/api/grammar/desu');
    expect(lesson.body.exercises[0].answer).toBeUndefined();
    const res = await session
      .post('/api/grammar/desu/exercise')
      .send({ exerciseId: 'desu-1', answer: 'です' });
    expect(res.body.correct).toBe(true);
    await session.post('/api/grammar/desu/progress').send({ completed: true, bookmarked: true });
    expect((await session.get('/api/dashboard')).body.grammarCompleted).toBe(1);
  });
  it('scores a test on the server and prevents duplicate submissions', async () => {
    const start = await session.post('/api/tests/mini-desu/start').send();
    expect(start.body.questions[0].answer).toBeUndefined();
    const answers = Object.fromEntries(lessons[0].exercises.map((q) => [q.id, q.answer]));
    const res = await session
      .post('/api/tests/mini-desu/submit')
      .send({ runId: start.body.runId, answers });
    expect(res.body.score).toBe(100);
    expect(
      (await session.post('/api/tests/mini-desu/submit').send({ runId: start.body.runId, answers }))
        .status,
    ).toBe(409);
    expect((await session.get('/api/tests/history')).body).toHaveLength(1);
  });
  it('saves writing and settings', async () => {
    expect(
      (
        await session.post('/api/writing').send({
          character: 'あ',
          strokes: [
            [
              { x: 10, y: 10 },
              { x: 20, y: 20 },
            ],
          ],
        })
      ).status,
    ).toBe(201);
    expect(
      (await session.patch('/api/profile').send({ goal: 12, level: 'N4', theme: 'dark' })).body
        .goal,
    ).toBe(12);
  });
  it('rejects disguised PDF uploads', async () => {
    const res = await session
      .post('/api/flashcards/pdf')
      .attach('file', Buffer.from('not a PDF'), {
        filename: 'fake.pdf',
        contentType: 'application/pdf',
      });
    expect(res.status).toBe(400);
  });
});
describe.sequential('Dictionary import, search and resumable translation', () => {
  it('imports official data idempotently while preserving English', async () => {
    const { importWord } = await import('../apps/api/src/dictionary');
    const fixture = JSON.parse(readFileSync('data/processed/fixture.json', 'utf8'));
    const word = fixture.words.find((w: { id: string }) => w.id === '1358280');
    expect(await importWord(word, 'test')).toBe(true);
    expect(await importWord(word, 'test')).toBe(false);
    expect(await db.dictionaryEntry.count()).toBe(1);
    expect(
      (await db.dictionaryGloss.findFirstOrThrow({ where: { senseId: '1358280:s0' } }))
        .originalText,
    ).toBe('to eat');
  });
  it('searches Kanji, Kana, Katakana, romaji and English locally', async () => {
    for (const q of ['食べる', 'たべる', 'タベル', 'taberu', 'eat']) {
      const res = await session.get('/api/dictionary/search').query({ q });
      expect(res.status).toBe(200);
      expect(res.body.items[0].id).toBe('1358280');
    }
    expect((await session.get('/api/dictionary/1358280')).body.senses.length).toBeGreaterThan(0);
  });
  it('finds conjugated forms and exposes the matched base without changing direct results', async () => {
    for (const q of ['tabemasu', '食べました', 'タベナカッタ', 'tabeteimashita', '食べさせられませんでした']) {
      const res = await session.get('/api/dictionary/search').query({ q });
      expect(res.status).toBe(200);
      expect(res.body.items[0].id).toBe('1358280');
      expect(res.body.items[0].inflection.steps.length).toBeGreaterThan(0);
    }
    const direct = await session.get('/api/dictionary/search').query({ q: '食べる' });
    expect(direct.body.items[0].inflection).toBeUndefined();
    const paged = await session.get('/api/dictionary/search').query({ q: 'tabemasu', limit: 1 });
    expect(paged.body.total).toBe(1);
    expect(paged.body.items).toHaveLength(1);
  });
  it('persists Vietnamese and makes it searchable without network', async () => {
    const { runTranslations } = await import('../apps/api/src/translation');
    const provider = {
      name: 'mock',
      model: 'test',
      translate: vi.fn(async (items: { glossId: string }[]) => ({
        translations: items.map((i) => ({ glossId: i.glossId, vi: 'ăn' })),
      })),
    };
    const result = await runTranslations(provider, { limit: 1, delayMs: 0 });
    expect(result.successful).toBe(1);
    expect((await session.get('/api/dictionary/search').query({ q: 'ăn' })).body.items[0].id).toBe(
      '1358280',
    );
    expect(
      (await db.dictionaryGloss.findUniqueOrThrow({ where: { id: '1358280:s0:g0' } })).originalText,
    ).toBe('to eat');
  });
  it('reuses a context-compatible cache and resumes a checkpoint', async () => {
    const { runTranslations } = await import('../apps/api/src/translation');
    const source = await db.dictionaryGloss.findUniqueOrThrow({ where: { id: '1358280:s0:g0' } });
    const remaining = await db.dictionaryGloss.findFirst({ where: { translation: { is: null } } });
    if (remaining) {
      await db.dictionaryGloss.update({
        where: { id: remaining.id },
        data: { sourceHash: source.sourceHash },
      });
    }
    await db.translationJob.create({
      data: { status: 'interrupted', total: 2, processed: 1, successful: 1 },
    });
    const provider = {
      name: 'mock',
      model: 'test',
      translate: vi.fn(async () => {
        throw Error('Cache must avoid a request');
      }),
    };
    const result = await runTranslations(provider, { limit: 1, delayMs: 0, resume: true });
    expect(result.status).toBe('completed');
    expect(provider.translate).not.toHaveBeenCalled();
  });
  it('is idempotent once all glosses are translated', async () => {
    const { runTranslations } = await import('../apps/api/src/translation');
    const provider = {
      name: 'mock',
      model: 'test',
      translate: vi.fn(async (items: { glossId: string }[]) => ({
        translations: items.map((i) => ({ glossId: i.glossId, vi: 'nghĩa thử nghiệm' })),
      })),
    };
    await runTranslations(provider, { limit: 100, delayMs: 0 });
    provider.translate.mockClear();
    await runTranslations(provider, { limit: 100, delayMs: 0 });
    expect(provider.translate).not.toHaveBeenCalled();
  });
  it('keeps reviewed translations on source edits and marks them stale', async () => {
    const { importWord } = await import('../apps/api/src/dictionary');
    const fixture = JSON.parse(readFileSync('data/processed/fixture.json', 'utf8'));
    const word = fixture.words.find((w: { id: string }) => w.id === '1358280');
    await db.dictionaryTranslation.update({
      where: { glossId: '1358280:s0:g0' },
      data: { reviewedAt: new Date(), translatedText: 'ăn (đã duyệt)' },
    });
    word.sense[0].gloss[0].text = 'to eat (updated)';
    await importWord(word, 'test2');
    const translation = await db.dictionaryTranslation.findUniqueOrThrow({
      where: { glossId: '1358280:s0:g0' },
    });
    expect(translation.translatedText).toBe('ăn (đã duyệt)');
    expect(translation.status).toBe('stale');
  });
});
