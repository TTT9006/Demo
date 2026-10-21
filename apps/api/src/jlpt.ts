import { Router } from 'express';
import { z } from 'zod';
import { db } from './db';
import { jlptPapers, paperSummary } from '../../../packages/shared/jlpt-papers';
import type { JlptPaper, JlptReport, JlptRunView } from '../../../packages/shared/jlpt-types';

export const jlptRouter = Router();
export type ExamState = {
  version: 1;
  paper: JlptPaper;
  section: number;
  sectionStarted: number | null;
  answers: Record<string, string>;
  revision: number;
  elapsed: number;
  report?: JlptReport;
};
const fail = (message: string, status = 409) => Object.assign(new Error(message), { status });
function completeSection(state: ExamState, now: number) {
  const section = state.paper.sections[state.section];
  state.elapsed += Math.min(
    section.minutes * 60,
    Math.max(0, Math.floor((now - state.sectionStarted!) / 1000)),
  );
  state.section++;
  state.sectionStarted = null;
  if (state.section === state.paper.sections.length) {
    const results = state.paper.sections
      .flatMap((s) => s.questions)
      .map((q) => ({
        ...q,
        given: state.answers[q.id] || '',
        correct: state.answers[q.id] === q.answer,
      }));
    const categories =
      state.paper.level === 'N5' || state.paper.level === 'N4'
        ? ([
            ['Kiến thức ngôn ngữ & Đọc hiểu', ['vocabulary', 'grammar', 'reading']],
            ['Nghe hiểu', ['listening']],
          ] as const)
        : ([
            ['Kiến thức ngôn ngữ', ['vocabulary', 'grammar']],
            ['Đọc hiểu', ['reading']],
            ['Nghe hiểu', ['listening']],
          ] as const);
    state.report = {
      score: Math.round((100 * results.filter((q) => q.correct).length) / results.length),
      duration: state.elapsed,
      results,
      groups: categories.map(([label, cats]) => {
        const part = results.filter((q) => (cats as readonly string[]).includes(q.category));
        return { label, correct: part.filter((q) => q.correct).length, total: part.length };
      }),
    };
  }
}
export function advanceExam(
  state: ExamState,
  now: number,
  action?: 'save' | 'finish' | 'begin' | 'finish-all',
  answers: Record<string, string> = {},
  revision?: number,
) {
  if (state.report) return false;
  const current = state.paper.sections[state.section];
  // Only previously saved answers count after expiry, even if the browser was offline.
  if (state.sectionStarted !== null && now >= state.sectionStarted + current.minutes * 60_000) {
    completeSection(state, now);
    state.revision++;
    return true;
  }
  if (!action) return false;
  if (revision !== state.revision)
    throw fail('Bài làm đã thay đổi ở cửa sổ khác. Hãy tải lại phần thi.');
  if (action === 'begin') {
    if (state.sectionStarted !== null) throw fail('Phần thi đã bắt đầu.');
    state.sectionStarted = now;
  } else if (action === 'finish-all') {
    for (const [id, answer] of Object.entries(answers)) {
      const question = current?.questions.find((q) => q.id === id);
      if (question && (answer === '' || question.options.includes(answer))) {
        state.answers[id] = answer;
      }
    }
    while (state.section < state.paper.sections.length) {
      if (state.sectionStarted === null) state.sectionStarted = now;
      completeSection(state, now);
    }
  } else {
    if (state.sectionStarted === null) throw fail('Hãy bắt đầu phần thi tiếp theo.');
    let hasNewAnswer = false;
    for (const [id, answer] of Object.entries(answers)) {
      const question = current.questions.find((q) => q.id === id);
      if (!question || (answer !== '' && !question.options.includes(answer)))
        throw fail('Đáp án không thuộc phần thi hiện tại.', 400);
      if (state.answers[id] !== answer) {
        hasNewAnswer = true;
      }
    }
    if (action === 'save' && !hasNewAnswer) {
      return false;
    }
    Object.assign(state.answers, answers);
    if (action === 'finish') completeSection(state, now);
  }
  state.revision++;
  return true;
}
function view(runId: string, state: ExamState, now: number): JlptRunView {
  const section = state.paper.sections[state.section];
  return {
    runId,
    testId: state.paper.id,
    revision: state.revision,
    section: state.section,
    sectionTitle: section?.title || 'Hoàn thành',
    sections: paperSummary(state.paper).sections,
    startedAt: state.sectionStarted === null ? null : new Date(state.sectionStarted).toISOString(),
    deadline:
      state.sectionStarted === null
        ? null
        : new Date(state.sectionStarted + section.minutes * 60_000).toISOString(),
    serverNow: new Date(now).toISOString(),
    answers: Object.fromEntries(
      (section?.questions || []).map((q) => [q.id, state.answers[q.id] || '']),
    ),
    questions:
      state.sectionStarted === null
        ? []
        : section.questions.map(
            ({ answer: _answer, explanation: _explanation, transcript: _transcript, ...q }) => q,
          ),
    finished: !!state.report,
    ...(state.report ? { report: state.report } : {}),
  };
}
async function updateRun(
  userId: string,
  runId: string,
  command?: {
    action: 'save' | 'finish' | 'begin' | 'finish-all';
    answers: Record<string, string>;
    revision: number;
  },
) {
  return db.$transaction(async (tx) => {
    const run = await tx.testRun.findFirst({ where: { id: runId, userId } });
    if (!run || !run.testId.startsWith('jlpt-')) throw fail('Không tìm thấy bài làm.', 404);
    const state = JSON.parse(run.questions) as ExamState,
      now = Date.now();
    const changed = advanceExam(state, now, command?.action, command?.answers, command?.revision);
    if (changed) {
      const claimed = await tx.testRun.updateMany({
        where: { id: run.id, questions: run.questions, submitted: false },
        data: { questions: JSON.stringify(state), submitted: !!state.report },
      });
      if (!claimed.count) throw fail('Bài làm đã thay đổi. Hãy tải lại.');
      if (state.report)
        await tx.attempt.create({
          data: {
            userId,
            testId: run.testId,
            score: state.report.score,
            duration: state.report.duration,
            answers: JSON.stringify(state.report.results),
          },
        });
    }
    return view(run.id, state, now);
  });
}
jlptRouter.get('/papers', (_req, res) => res.json(jlptPapers.map(paperSummary)));
jlptRouter.get('/papers/:id', async (req, res) => {
  const paper = jlptPapers.find((p) => p.id === req.params.id);
  if (!paper) throw fail('Không tìm thấy đề thi.', 404);
  const active = await db.testRun.findFirst({
    where: { userId: res.locals.user.id, testId: paper.id, submitted: false },
    orderBy: { startedAt: 'desc' },
  });
  res.json({
    paper: paperSummary(paper),
    run: active ? await updateRun(res.locals.user.id, active.id) : null,
  });
});
jlptRouter.post('/papers/:id/start', async (req, res) => {
  const paper = jlptPapers.find((p) => p.id === req.params.id);
  if (!paper) throw fail('Không tìm thấy đề thi.', 404);
  const run = await db.$transaction(async (tx) => {
    const existing = await tx.testRun.findFirst({
      where: { userId: res.locals.user.id, testId: paper.id, submitted: false },
      orderBy: { startedAt: 'desc' },
    });
    if (existing) return existing;
    const state: ExamState = {
      version: 1,
      paper,
      section: 0,
      sectionStarted: Date.now(),
      answers: {},
      revision: 0,
      elapsed: 0,
    };
    return tx.testRun.create({
      data: { userId: res.locals.user.id, testId: paper.id, questions: JSON.stringify(state) },
    });
  });
  res.json(await updateRun(res.locals.user.id, run.id));
});
jlptRouter.get('/runs/:id', async (req, res) =>
  res.json(await updateRun(res.locals.user.id, String(req.params.id))),
);
jlptRouter.patch('/runs/:id', async (req, res) => {
  const command = z
    .object({
      action: z.enum(['save', 'finish', 'begin', 'finish-all']),
      revision: z.number().int().nonnegative(),
      answers: z.record(z.string(), z.string().max(1000)).default({}),
    })
    .parse(req.body);
  res.json(await updateRun(res.locals.user.id, String(req.params.id), command));
});
jlptRouter.get('/runs/:id/audio/:questionId', async (req, res) => {
  // Verify ownership and deadline first; never expose another section's script.
  const current = await updateRun(res.locals.user.id, String(req.params.id));
  if (!current.questions.some((q) => q.id === req.params.questionId && q.category === 'listening'))
    throw fail('Câu nghe không thuộc phần đang làm.', 403);
  const run = await db.testRun.findUniqueOrThrow({ where: { id: current.runId } });
  const state = JSON.parse(run.questions) as ExamState;
  const question = state.paper.sections[state.section]?.questions.find(
    (q) => q.id === req.params.questionId,
  );
  if (!question?.transcript) throw fail('Không tìm thấy nội dung nghe.', 404);
  res.json({ text: question.transcript });
});
