import { Router } from 'express';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { db } from './db';
import { schedule } from '../../../packages/shared/srs';
import type { LoginReviewView } from '../../../packages/shared/login-review';

export const loginReviewRouter = Router();
type State = {
  id: string;
  started: string;
  cards: string[];
  total: number;
  decks: LoginReviewView['decks'];
};
async function view(
  tx: Prisma.TransactionClient,
  userId: string,
  token: string,
): Promise<LoginReviewView> {
  const session = await tx.session.findUniqueOrThrow({ where: { token } });
  const stored = await tx.loginReview.findUnique({ where: { userId } });
  const state = stored ? (JSON.parse(stored.state) as State) : null;
  if (state) {
    // A card reviewed elsewhere or deleted should never block this account's queue.
    const cards = await tx.card.findMany({
      where: {
        id: { in: state.cards },
        deck: { userId },
        lastReviewed: { lt: new Date(state.started) },
      },
      include: { deck: true },
    });
    const ordered = state.cards.map((id) => cards.find((c) => c.id === id)).filter((c) => !!c);
    const card = ordered[0];
    if (card)
      return {
        ready: false,
        active: true,
        total: state.total,
        done: state.total - ordered.length,
        decks: state.decks,
        card: {
          id: card.id,
          japanese: card.japanese,
          reading: card.reading,
          meaning: card.meaning,
          example: card.example,
          note: card.note,
          deckName: card.deck.name,
        },
      };
    await tx.loginReview.delete({ where: { userId } });
    await tx.session.updateMany({ where: { userId }, data: { reviewReady: true } });
    return {
      ready: true,
      active: false,
      total: state.total,
      done: state.total,
      decks: state.decks,
    };
  }
  if (session.reviewReady) return { ready: true, active: false, total: 0, done: 0, decks: [] };
  const due = await tx.card.findMany({
    where: { deck: { userId }, lastReviewed: { not: null }, due: { lte: new Date() } },
    include: { deck: true },
    orderBy: [{ due: 'asc' }, { id: 'asc' }],
  });
  const decks: LoginReviewView['decks'] = [];
  for (const card of due) {
    const found = decks.find((d) => d.id === card.deckId);
    if (found) found.count++;
    else
      decks.push({ id: card.deckId, name: card.deck.name, count: 1, due: card.due.toISOString() });
  }
  if (!decks.length) await tx.session.update({ where: { token }, data: { reviewReady: true } });
  return { ready: !decks.length, active: false, total: due.length, done: 0, decks };
}
loginReviewRouter.get('/', async (_req, res) =>
  res.json(await db.$transaction((tx) => view(tx, res.locals.user.id, res.locals.sessionToken))),
);
loginReviewRouter.post('/start', async (req, res) => {
  const { count } = z.object({ count: z.number().int().min(1).max(5) }).parse(req.body);
  const userId = res.locals.user.id,
    token = res.locals.sessionToken;
  res.json(
    await db.$transaction(async (tx) => {
      const current = await view(tx, userId, token);
      if (current.ready || current.active) return current;
      const choices = [
        ...new Set([1, Math.min(3, current.decks.length), Math.min(5, current.decks.length)]),
      ];
      if (!choices.includes(count))
        throw Object.assign(Error('Hãy chọn số bộ đang có trên màn hình.'), { status: 400 });
      const decks = current.decks.slice(0, count);
      const cards = await tx.card.findMany({
        where: {
          deck: { userId },
          deckId: { in: decks.map((d) => d.id) },
          lastReviewed: { not: null },
          due: { lte: new Date() },
        },
        orderBy: [{ due: 'asc' }, { id: 'asc' }],
      });
      const ids = decks.flatMap((d) => cards.filter((c) => c.deckId === d.id).map((c) => c.id));
      const state: State = {
        id: randomUUID(),
        started: new Date().toISOString(),
        cards: ids,
        total: ids.length,
        decks,
      };
      await tx.loginReview.create({ data: { userId, state: JSON.stringify(state) } });
      return view(tx, userId, token);
    }),
  );
});
loginReviewRouter.post('/answer', async (req, res) => {
  const { cardId, rating } = z
    .object({ cardId: z.string(), rating: z.number().int().min(0).max(3) })
    .parse(req.body);
  const userId = res.locals.user.id,
    token = res.locals.sessionToken;
  res.json(
    await db.$transaction(async (tx) => {
      const current = await view(tx, userId, token);
      if (!current.active || current.card?.id !== cardId) return current;
      const card = await tx.card.findFirstOrThrow({ where: { id: cardId, deck: { userId } } });
      const next = schedule(card, rating);
      const updated = await tx.card.updateMany({
        where: { id: cardId, lastReviewed: card.lastReviewed, due: card.due },
        data: next,
      });
      if (updated.count)
        await tx.review.create({ data: { userId, cardId, rating, interval: next.interval } });
      return view(tx, userId, token);
    }),
  );
});
