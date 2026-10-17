import { createHash } from 'node:crypto';
import { Prisma } from '@prisma/client';
import { toHiragana } from 'wanakana';
import {
  generateSearchVariants,
  searchTerms,
  editDistance,
} from '../../../packages/shared/japanese-query';
import { z } from 'zod';
import { db } from './db';
import { deinflect, matchesPartOfSpeech, type Inflection } from './deinflect';
const form = z
  .object({ text: z.string(), common: z.boolean(), tags: z.array(z.string()) })
  .passthrough();
export const wordSchema = z
  .object({
    id: z.string(),
    kanji: z.array(form),
    kana: z.array(form.extend({ appliesToKanji: z.array(z.string()) })),
    sense: z.array(
      z
        .object({
          partOfSpeech: z.array(z.string()),
          appliesToKanji: z.array(z.string()),
          appliesToKana: z.array(z.string()),
          info: z.array(z.string()),
          gloss: z.array(
            z
              .object({
                lang: z.string(),
                text: z.string(),
                type: z.string().nullable(),
                gender: z.string().nullable(),
              })
              .passthrough(),
          ),
        })
        .passthrough(),
    ),
  })
  .passthrough();
export type SourceWord = z.infer<typeof wordSchema>;
export const normalize = (s: string) =>
  toHiragana(s.normalize('NFKC').trim().toLowerCase(), { passRomaji: true });
export const hash = (s: string) => createHash('sha256').update(s).digest('hex');
export const entryInclude = {
  kanji: true,
  readings: true,
  senses: {
    orderBy: { senseIndex: 'asc' as const },
    include: {
      glosses: { orderBy: { glossIndex: 'asc' as const }, include: { translation: true } },
    },
  },
};
export async function initSearch() {
  await db.$executeRawUnsafe(
    'CREATE VIRTUAL TABLE IF NOT EXISTS DictionaryFts USING fts5(entryId UNINDEXED, japanese, english, vietnamese, tokenize="unicode61 remove_diacritics 2")',
  );
  await db.$executeRawUnsafe(
    'CREATE VIRTUAL TABLE IF NOT EXISTS DictionaryTrigram USING fts5(entryId UNINDEXED, content, tokenize="trigram")',
  );
  await db.$executeRawUnsafe(
    'CREATE TABLE IF NOT EXISTS DictionaryGram (token TEXT NOT NULL, entryId TEXT NOT NULL, PRIMARY KEY(token, entryId))',
  );
  await db.$executeRawUnsafe(
    'CREATE INDEX IF NOT EXISTS DictionaryGram_entry ON DictionaryGram(entryId)',
  );
}
export async function indexEntry(id: string) {
  const e = await db.dictionaryEntry.findUniqueOrThrow({ where: { id }, include: entryInclude });
  const ja = [...e.kanji, ...e.readings].map((f) => f.text).join(' ');
  const en = e.senses.flatMap((s) => s.glosses.map((g) => g.originalText)).join(' ');
  const vi = e.senses
    .flatMap((s) =>
      s.glosses.map((g) =>
        g.translation?.status === 'completed' ? g.translation.translatedText : '',
      ),
    )
    .join(' ');
  await db.$transaction([
    db.$executeRaw`DELETE FROM DictionaryFts WHERE entryId=${id}`,
    db.$executeRaw`INSERT INTO DictionaryFts(entryId,japanese,english,vietnamese) VALUES(${id},${ja},${en},${vi})`,
    db.$executeRaw`DELETE FROM DictionaryTrigram WHERE entryId=${id}`,
    db.$executeRaw`INSERT INTO DictionaryTrigram(entryId,content) VALUES(${id},${normalize(ja + ' ' + en + ' ' + vi)})`,
    db.$executeRaw`DELETE FROM DictionaryGram WHERE entryId=${id}`,
  ]);
  const grams = new Set<string>();
  for (const f of [...e.kanji, ...e.readings]) {
    const n = normalize(f.text);
    for (let i = 0; i < n.length; i++) {
      grams.add(n.slice(i, i + 1));
      if (i + 1 < n.length) grams.add(n.slice(i, i + 2));
    }
  }
  if (grams.size)
    await db.$executeRaw(
      Prisma.sql`INSERT OR IGNORE INTO DictionaryGram(token,entryId) VALUES ${Prisma.join([...grams].map((t) => Prisma.sql`(${t},${id})`))}`,
    );
  const terms = searchTerms(
    e.kanji.map((f) => f.text),
    e.readings.map((f) => f.text),
    [vi],
  );
  await db.$transaction([
    db.$executeRaw`DELETE FROM DictionarySearchTerm WHERE entryId=${id}`,
    ...(terms.length
      ? [
          db.$executeRaw(
            Prisma.sql`INSERT INTO DictionarySearchTerm(entryId,kind,term) VALUES ${Prisma.join(terms.map((t) => Prisma.sql`(${id},${t.kind},${t.term})`))}`,
          ),
        ]
      : []),
    db.$executeRaw`DELETE FROM SearchReindex WHERE entryId=${id}`,
  ]);
}
export async function recoverSearchIndex() {
  for (;;) {
    const rows = await db.$queryRaw<
      { entryId: string }[]
    >`SELECT entryId FROM SearchReindex LIMIT 100`;
    if (!rows.length) break;
    for (const row of rows) await indexEntry(row.entryId);
  }
}
export async function importWord(input: unknown, version: string) {
  const w = wordSchema.parse(input),
    raw = JSON.stringify(w);
  const previous = await db.dictionaryEntry.findUnique({
    where: { id: w.id },
    select: { raw: true },
  });
  if (previous?.raw === raw) {
    await db.dictionaryEntry.update({ where: { id: w.id }, data: { version } });
    return false;
  }
  await db.$transaction(
    async (tx) => {
      await tx.dictionaryEntry.upsert({
        where: { id: w.id },
        create: { id: w.id, common: [...w.kanji, ...w.kana].some((f) => f.common), version, raw },
        update: { common: [...w.kanji, ...w.kana].some((f) => f.common), version, raw },
      });
      await tx.dictionaryKanji.deleteMany({ where: { entryId: w.id } });
      await tx.dictionaryReading.deleteMany({ where: { entryId: w.id } });
      if (w.kanji.length)
        await tx.dictionaryKanji.createMany({
          data: w.kanji.map((f, i) => ({
            id: `${w.id}:k${i}`,
            entryId: w.id,
            text: f.text,
            normalized: normalize(f.text),
            common: f.common,
            information: JSON.stringify(f.tags),
          })),
        });
      await tx.dictionaryReading.createMany({
        data: w.kana.map((f, i) => ({
          id: `${w.id}:r${i}`,
          entryId: w.id,
          text: f.text,
          normalized: normalize(f.text),
          common: f.common,
          information: JSON.stringify(f.tags),
          restrictions: JSON.stringify(f.appliesToKanji),
        })),
      });
      const senseIds: string[] = [];
      for (const [i, s] of w.sense.entries()) {
        const id = `${w.id}:s${i}`,
          { gloss, ...metadata } = s;
        senseIds.push(id);
        await tx.dictionarySense.upsert({
          where: { id },
          create: { id, entryId: w.id, senseIndex: i, metadata: JSON.stringify(metadata) },
          update: { metadata: JSON.stringify(metadata) },
        });
        const glossIds: string[] = [];
        for (const [j, g] of gloss.entries()) {
          const gid = `${id}:g${j}`;
          glossIds.push(gid);
          const sourceHash = hash(
            JSON.stringify({
              head: w.kanji.map((f) => f.text),
              kana: w.kana.map((f) => f.text),
              metadata,
              gloss: gloss.map((g) => g.text),
              text: g.text,
              target: 'vi',
              prompt: 1,
            }),
          );
          await tx.dictionaryGloss.upsert({
            where: { id: gid },
            create: {
              id: gid,
              senseId: id,
              glossIndex: j,
              language: g.lang,
              originalText: g.text,
              glossType: g.type,
              sourceHash,
            },
            update: { language: g.lang, originalText: g.text, glossType: g.type, sourceHash },
          });
          await tx.dictionaryTranslation.updateMany({
            where: { glossId: gid, sourceHash: { not: sourceHash } },
            data: { status: 'stale' },
          });
        }
        // Retain reviewed translations on removed senses/glosses as a durable audit in raw source history is not implied.
        // A changed gloss at the same stable position keeps its reviewed translation, marked stale.
        await tx.dictionaryGloss.deleteMany({
          where: { senseId: id, id: { notIn: glossIds }, translation: { is: null } },
        });
      }
      await tx.dictionarySense.deleteMany({
        where: {
          entryId: w.id,
          id: { notIn: senseIds },
          glosses: { none: { translation: { isNot: null } } },
        },
      });
    },
    { timeout: 30000 },
  );
  await indexEntry(w.id);
  return true;
}
export async function dictionaryStatus() {
  const [entries, glosses, translated, failed, latestImport, jobs] = await Promise.all([
    db.dictionaryEntry.count(),
    db.dictionaryGloss.count(),
    db.dictionaryTranslation.count({ where: { status: 'completed' } }),
    db.dictionaryTranslation.count({ where: { status: 'failed' } }),
    db.dictionaryImport.findFirst({ orderBy: { importedAt: 'desc' } }),
    db.translationJob.findMany({ orderBy: { startedAt: 'desc' }, take: 10 }),
  ]);
  return {
    entries,
    glosses,
    translated,
    pending: glosses - translated,
    failed,
    coverage: glosses ? Math.round((translated / glosses) * 10000) / 100 : 0,
    latestImport,
    jobs,
  };
}
export async function searchDictionary(query: string, page = 1, limit = 15) {
  const variants = generateSearchVariants(query);
  const q = variants.normalized;
  if (!q) {
    const [items, total] = await Promise.all([
      db.dictionaryEntry.findMany({
        take: limit,
        skip: (page - 1) * limit,
        orderBy: [{ common: 'desc' }, { id: 'asc' }],
        include: entryInclude,
      }),
      db.dictionaryEntry.count(),
    ]);
    return { items, total, page, limit };
  }
  const tokens = q.match(/[\p{L}\p{N}]+/gu) || [];
  const forms = [q, ...variants.readings].flatMap(deinflect);
  const terms = [...new Set(forms.map((form) => form.term))];
  const derived = new Map<string, Inflection>();
  if (terms.length) {
    const matchingIds = await db.$queryRaw<{ entryId: string }[]>(Prisma.sql`
      SELECT entryId FROM DictionaryKanji WHERE normalized IN (${Prisma.join(terms)})
      UNION SELECT entryId FROM DictionaryReading WHERE normalized IN (${Prisma.join(terms)})`);
    const entries = await db.dictionaryEntry.findMany({
      where: { id: { in: matchingIds.map((row) => row.entryId) } },
      select: {
        id: true,
        kanji: { select: { normalized: true } },
        readings: { select: { normalized: true } },
        senses: { select: { metadata: true } },
      },
    });
    for (const entry of entries) {
      const tags = entry.senses.flatMap(
        (sense) => (JSON.parse(sense.metadata) as { partOfSpeech?: string[] }).partOfSpeech || [],
      );
      for (let i = 0; i < forms.length; i++) {
        const form = forms[i];
        if (
          matchesPartOfSpeech(form.kind, tags) &&
          [...entry.kanji, ...entry.readings].some((reading) => reading.normalized === form.term)
        ) {
          derived.set(entry.id, { ...form, priority: i } as Inflection & { priority?: number });
          break;
        }
      }
    }
  }
  const conjugated = derived.size
    ? Prisma.join(
        [...derived.entries()].map(
          ([id, match]) =>
            Prisma.sql`SELECT ${id} AS entryId, ${3 + Math.min((match as { priority?: number }).priority ?? 0, 99) * 0.01} AS rank`,
        ),
        ' UNION ALL ',
      )
    : Prisma.sql`SELECT '' AS entryId, 3.0 AS rank WHERE 0`;
  const fts = tokens.map((t) => '"' + t.replace(/"/g, '""') + '"*').join(' AND ') || '"___"';
  const japanese = [...new Set([q, ...variants.readings])];
  const partial = Prisma.join(
    japanese.map((k) =>
      k.length >= 3
        ? Prisma.sql`SELECT entryId, 6 AS rank FROM DictionaryTrigram WHERE DictionaryTrigram MATCH ${'"' + k.replace(/"/g, '""') + '"'}`
        : Prisma.sql`SELECT entryId, 6 AS rank FROM DictionaryGram WHERE token=${k}`,
    ),
    ' UNION ALL ',
  );
  const prefixes = Prisma.join(
    japanese.flatMap((k) => [
      Prisma.sql`SELECT entryId,4 AS rank FROM DictionaryKanji WHERE normalized>=${k} AND normalized<${k + '\uffff'}`,
      Prisma.sql`SELECT entryId,4 AS rank FROM DictionaryReading WHERE normalized>=${k} AND normalized<${k + '\uffff'}`,
    ]),
    ' UNION ALL ',
  );
  const candidates = Prisma.sql`
  SELECT entryId,0 AS rank FROM DictionaryKanji WHERE text=${query.trim()}
  UNION ALL SELECT entryId,1 FROM DictionaryReading WHERE text=${query.trim()}
  UNION ALL SELECT entryId,2 FROM DictionaryKanji WHERE normalized=${q}
  UNION ALL SELECT entryId,2 FROM DictionaryReading WHERE normalized IN (${Prisma.join(japanese)})
  UNION ALL SELECT entryId,3 FROM DictionarySearchTerm WHERE kind='romaji' AND term IN (${Prisma.join(variants.romaji.length ? variants.romaji : [''])})
  UNION ALL SELECT entryId,5 FROM DictionarySearchTerm WHERE kind='variant' AND term IN (${Prisma.join(japanese)})
  UNION ALL ${conjugated}
  UNION ALL ${prefixes}
  UNION ALL SELECT entryId,7 FROM DictionaryFts WHERE DictionaryFts MATCH ${'vietnamese: (' + fts + ')'}
  UNION ALL SELECT entryId,7 FROM DictionaryFts WHERE DictionaryFts MATCH ${'english: (' + fts + ')'} AND ${!variants.isVietnamese}
  UNION ALL ${partial}`;
  let rows = await db.$queryRaw<{ id: string; rank: number; total: bigint }[]>(
    Prisma.sql`WITH matches AS (${candidates}), ranked AS (SELECT entryId,MIN(rank) AS rank FROM matches GROUP BY entryId) SELECT e.id,r.rank,COUNT(*) OVER() AS total FROM ranked r JOIN DictionaryEntry e ON e.id=r.entryId ORDER BY r.rank,e.common DESC,e.id LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
  );
  let total = Number(rows[0]?.total || 0);
  let fuzzy = false;
  if (!rows.length && page > 1) {
    const count = await db.$queryRaw<{ n: bigint }[]>(
      Prisma.sql`WITH matches AS (${candidates}) SELECT COUNT(DISTINCT entryId) n FROM matches`,
    );
    total = Number(count[0].n);
  }
  if (!total && variants.readings.length && q.length >= 3) {
    const k = variants.readings[0];
    const near = await db.$queryRaw<{ entryId: string; term: string }[]>(
      Prisma.sql`SELECT entryId,term FROM DictionarySearchTerm WHERE kind='kana' AND term>=${k[0]} AND term<${k[0] + '\uffff'} AND length(term) BETWEEN ${k.length - 1} AND ${k.length + 1} LIMIT 400`,
    );
    const ids = [
      ...new Set(
        near
          .filter(
            (t) => editDistance(k, t.term) <= 1 && 1 / Math.max(k.length, t.term.length) <= 0.34,
          )
          .map((t) => t.entryId),
      ),
    ];
    total = ids.length;
    fuzzy = !!total;
    rows = ids
      .slice((page - 1) * limit, page * limit)
      .map((id) => ({ id, rank: 8, total: BigInt(total) }));
  }
  const data = await db.dictionaryEntry.findMany({
    where: { id: { in: rows.map((r) => r.id) } },
    include: entryInclude,
  });
  return {
    items: rows.map((r) => ({
      ...data.find((e) => e.id === r.id)!,
      inflection: Math.floor(Number(r.rank)) === 3 ? derived.get(r.id) : undefined,
    })),
    total,
    fuzzy,
    page,
    limit,
  };
}
