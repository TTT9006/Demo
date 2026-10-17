import { Router } from 'express';
import { z } from 'zod';
import type { Card } from '@prisma/client';
import { db } from './db';
import { publicQuestion } from './grammar';
import type { Exercise } from '../../../packages/shared/content';

export const consolidatedReviewRouter = Router();

export type ConsolidatedRecentItem =
  | {
      id: string;
      type: 'card';
      japanese: string;
      reading: string;
      meaning: string;
      repetitions: number;
      lastReviewed: string | null;
      due: string;
    }
  | {
      id: string;
      type: 'grammar';
      grammarId: string;
      title: string;
      pattern: string;
      level: string;
      prompt: string;
      repetitions: number;
      lastCorrect: boolean;
      lastReviewed: string | null;
      due: string;
    };

export type ConsolidatedOverview = {
  cardsReviewedCount: number;
  grammarPracticedCount: number;
  cardsDueCount: number;
  grammarDueCount: number;
  dueCount: number;
  items: ConsolidatedRecentItem[];
};

export async function getConsolidatedOverview(userId: string): Promise<ConsolidatedOverview> {
  const now = new Date();
  const [cards, grammarStates] = await Promise.all([
    db.card.findMany({
      where: { deck: { userId } },
      orderBy: [{ lastReviewed: 'desc' }, { due: 'asc' }],
    }),
    db.grammarExerciseProgress.findMany({
      where: { userId },
      include: { grammar: true },
      orderBy: [{ lastReviewed: 'desc' }, { due: 'asc' }],
    }),
  ]);

  const cardsReviewed = cards.filter((c) => c.lastReviewed || c.repetitions > 0);
  const grammarPracticed = grammarStates.filter((g) => g.attempts > 0 || g.lastReviewed);
  const cardsDueCount = cards.filter((c) => c.due <= now).length;
  const grammarDueCount = grammarStates.filter((g) => g.due <= now).length;

  const recentCardsPool = cardsReviewed.length ? cardsReviewed.slice(0, 4) : cards.slice(0, 3);
  const recentCards: ConsolidatedRecentItem[] = recentCardsPool.map((c) => ({
    id: c.id,
    type: 'card',
    japanese: c.japanese,
    reading: c.reading,
    meaning: c.meaning,
    repetitions: c.repetitions,
    lastReviewed: c.lastReviewed ? c.lastReviewed.toISOString() : null,
    due: c.due.toISOString(),
  }));

  const recentGrammar: ConsolidatedRecentItem[] = [];
  if (grammarPracticed.length) {
    for (const g of grammarPracticed.slice(0, 4)) {
      let prompt = g.grammar.title;
      try {
        const exercises = JSON.parse(g.grammar.exercises) as Exercise[];
        const match = exercises.find((e) => e.id === g.exerciseId);
        if (match) prompt = match.prompt;
      } catch {
        /* ignore */
      }
      recentGrammar.push({
        id: `${g.grammarId}_${g.exerciseId}`,
        type: 'grammar',
        grammarId: g.grammarId,
        title: g.grammar.title,
        pattern: g.grammar.pattern,
        level: g.grammar.level,
        prompt,
        repetitions: g.repetitions,
        lastCorrect: g.lastCorrect,
        lastReviewed: g.lastReviewed ? g.lastReviewed.toISOString() : null,
        due: g.due.toISOString(),
      });
    }
  } else {
    // Fallback: take initial N5 lessons to preview
    const sampleLessons = await db.grammar.findMany({
      where: { level: 'N5' },
      take: 3,
      orderBy: { position: 'asc' },
    });
    for (const l of sampleLessons) {
      let prompt = l.title;
      try {
        const exercises = JSON.parse(l.exercises) as Exercise[];
        if (exercises.length) prompt = exercises[0].prompt;
      } catch {
        /* ignore */
      }
      recentGrammar.push({
        id: `${l.id}_sample`,
        type: 'grammar',
        grammarId: l.id,
        title: l.title,
        pattern: l.pattern,
        level: l.level,
        prompt,
        repetitions: 0,
        lastCorrect: false,
        lastReviewed: null,
        due: now.toISOString(),
      });
    }
  }

  // Interleave cards and grammar for a balanced consolidated preview
  const interleaved: ConsolidatedRecentItem[] = [];
  const maxLen = Math.max(recentCards.length, recentGrammar.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < recentCards.length) interleaved.push(recentCards[i]);
    if (i < recentGrammar.length) interleaved.push(recentGrammar[i]);
  }

  return {
    cardsReviewedCount: cardsReviewed.length,
    grammarPracticedCount: grammarPracticed.length,
    cardsDueCount,
    grammarDueCount,
    dueCount: cardsDueCount + grammarDueCount,
    items: interleaved.slice(0, 6),
  };
}

consolidatedReviewRouter.get('/', async (req, res) => {
  const userId = res.locals.user.id;
  const now = new Date();
  const querySchema = z.object({
    mode: z.enum(['all', 'due', 'anytime']).default('all'),
    limit: z.coerce.number().int().min(1).max(50).default(20),
  });
  const { mode, limit } = querySchema.parse(req.query);
  const isDueOnly = mode === 'due';

  // 1. Fetch Cards
  let cards: Card[] = await db.card.findMany({
    where: {
      deck: { userId },
      ...(isDueOnly
        ? { due: { lte: now } }
        : { OR: [{ lastReviewed: { not: null } }, { repetitions: { gt: 0 } }] }),
    },
    orderBy: [{ due: 'asc' }, { lastReviewed: 'desc' }],
    take: limit,
  });

  if (!isDueOnly && cards.length === 0) {
    cards = await db.card.findMany({
      where: { deck: { userId } },
      orderBy: { due: 'asc' },
      take: Math.min(limit, 10),
    });
  }

  // 2. Fetch Grammar Exercises
  const grammarStates = await db.grammarExerciseProgress.findMany({
    where: {
      userId,
      ...(isDueOnly
        ? { due: { lte: now } }
        : { OR: [{ attempts: { gt: 0 } }, { lastReviewed: { not: null } }] }),
    },
    include: { grammar: true },
    orderBy: [{ due: 'asc' }, { lastReviewed: 'desc' }],
    take: limit,
  });

  type GrammarItem = {
    grammarId: string;
    title: string;
    pattern: string;
    level: string;
    question: ReturnType<typeof publicQuestion>;
    due: Date;
  };

  const grammarItems: GrammarItem[] = [];
  for (const s of grammarStates) {
    try {
      const exercises = JSON.parse(s.grammar.exercises) as Exercise[];
      const exercise = exercises.find((e) => e.id === s.exerciseId);
      if (exercise) {
        grammarItems.push({
          grammarId: s.grammarId,
          title: s.grammar.title,
          pattern: s.grammar.pattern,
          level: s.grammar.level,
          question: publicQuestion(exercise),
          due: s.due,
        });
      }
    } catch {
      /* ignore parse error */
    }
  }

  // Fallback for grammar when no exercises have been practiced yet
  if (!isDueOnly && grammarItems.length === 0) {
    const fallbackGrammars = await db.grammar.findMany({
      where: { level: 'N5' },
      take: 6,
      orderBy: { position: 'asc' },
    });
    for (const g of fallbackGrammars) {
      try {
        const exercises = JSON.parse(g.exercises) as Exercise[];
        if (exercises.length > 0) {
          grammarItems.push({
            grammarId: g.id,
            title: g.title,
            pattern: g.pattern,
            level: g.level,
            question: publicQuestion(exercises[0]),
            due: now,
          });
        }
      } catch {
        /* ignore */
      }
    }
  }

  // 3. Format items
  type ReviewItem =
    | {
        type: 'card';
        id: string;
        card: Card;
        due: Date;
      }
    | {
        type: 'grammar';
        id: string;
        grammarId: string;
        title: string;
        pattern: string;
        level: string;
        question: ReturnType<typeof publicQuestion>;
        due: Date;
      };

  const formattedCards: ReviewItem[] = cards.map((c) => ({
    type: 'card',
    id: c.id,
    card: c,
    due: c.due,
  }));

  const formattedGrammar: ReviewItem[] = grammarItems.map((g) => ({
    type: 'grammar',
    id: `${g.grammarId}_${g.question.id}`,
    grammarId: g.grammarId,
    title: g.title,
    pattern: g.pattern,
    level: g.level,
    question: g.question,
    due: g.due,
  }));

  // Interleave items: Card, Grammar, Card, Grammar...
  const interleaved: ReviewItem[] = [];
  const maxLen = Math.max(formattedCards.length, formattedGrammar.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < formattedCards.length) interleaved.push(formattedCards[i]);
    if (i < formattedGrammar.length) interleaved.push(formattedGrammar[i]);
  }

  const finalItems = interleaved.slice(0, limit);

  // 4. Counts
  const [totalCardsReviewed, totalGrammarPracticed, cardsDue, grammarDue] = await Promise.all([
    db.card.count({
      where: {
        deck: { userId },
        OR: [{ lastReviewed: { not: null } }, { repetitions: { gt: 0 } }],
      },
    }),
    db.grammarExerciseProgress.count({
      where: {
        userId,
        OR: [{ attempts: { gt: 0 } }, { lastReviewed: { not: null } }],
      },
    }),
    db.card.count({
      where: { deck: { userId }, due: { lte: now } },
    }),
    db.grammarExerciseProgress.count({
      where: { userId, due: { lte: now } },
    }),
  ]);

  res.json({
    items: finalItems,
    total: finalItems.length,
    totalCardsReviewed,
    totalGrammarPracticed,
    cardsDue,
    grammarDue,
    dueCount: cardsDue + grammarDue,
  });
});
