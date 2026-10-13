import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { searchTerms } from '../packages/shared/japanese-query';
import { wordSchema, normalize, hash, type SourceWord } from '../apps/api/src/dictionary';
// Offline bulk writer. The schema and migrations remain owned by Prisma; bounded
// SQLite transactions avoid a cross-process round trip for every dictionary row.
export function createBatchImporter(version: string) {
  const url = process.env.DATABASE_URL || 'file:./learning.db';
  if (!url.startsWith('file:')) throw Error('SQLite DATABASE_URL required');
  const file = url.slice(5);
  const db = new DatabaseSync(path.isAbsolute(file) ? file : path.resolve('prisma', file));
  db.exec('PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=30000;');
  const get = db.prepare('SELECT raw FROM DictionaryEntry WHERE id=?');
  const deleteTerms = db.prepare('DELETE FROM DictionarySearchTerm WHERE entryId=?');
  const insertTerm = db.prepare(
    'INSERT OR IGNORE INTO DictionarySearchTerm(entryId,kind,term) VALUES(?,?,?)',
  );
  const entry = db.prepare(
    'INSERT INTO DictionaryEntry(id,common,version,raw) VALUES(?,?,?,?) ON CONFLICT(id) DO UPDATE SET common=excluded.common,version=excluded.version,raw=excluded.raw',
  );
  const setVersion = db.prepare('UPDATE DictionaryEntry SET version=? WHERE id=?');
  const delK = db.prepare('DELETE FROM DictionaryKanji WHERE entryId=?'),
    delR = db.prepare('DELETE FROM DictionaryReading WHERE entryId=?');
  const kanji = db.prepare(
    'INSERT INTO DictionaryKanji(id,entryId,text,normalized,common,information) VALUES(?,?,?,?,?,?)',
  );
  const reading = db.prepare(
    'INSERT INTO DictionaryReading(id,entryId,text,normalized,common,information,restrictions) VALUES(?,?,?,?,?,?,?)',
  );
  const sense = db.prepare(
    'INSERT INTO DictionarySense(id,entryId,senseIndex,metadata) VALUES(?,?,?,?) ON CONFLICT(id) DO UPDATE SET metadata=excluded.metadata',
  );
  const gloss = db.prepare(
    'INSERT INTO DictionaryGloss(id,senseId,glossIndex,language,originalText,glossType,sourceHash) VALUES(?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET language=excluded.language,originalText=excluded.originalText,glossType=excluded.glossType,sourceHash=excluded.sourceHash',
  );
  const stale = db.prepare(
    "UPDATE DictionaryTranslation SET status='stale' WHERE glossId=? AND sourceHash<>?",
  );
  const viQuery = db.prepare(
    "SELECT t.translatedText FROM DictionaryTranslation t JOIN DictionaryGloss g ON g.id=t.glossId JOIN DictionarySense s ON s.id=g.senseId WHERE s.entryId=? AND t.status='completed'",
  );
  const deleteFts = db.prepare('DELETE FROM DictionaryFts WHERE entryId=?');
  const insertFts = db.prepare(
    'INSERT INTO DictionaryFts(entryId,japanese,english,vietnamese) VALUES(?,?,?,?)',
  );
  const deleteTri = db.prepare('DELETE FROM DictionaryTrigram WHERE entryId=?');
  const insertTri = db.prepare('INSERT INTO DictionaryTrigram(entryId,content) VALUES(?,?)');
  const deleteGram = db.prepare('DELETE FROM DictionaryGram WHERE entryId=?');
  const insertGram = db.prepare('INSERT OR IGNORE INTO DictionaryGram(token,entryId) VALUES(?,?)');
  const removeGloss = db.prepare(
    'DELETE FROM DictionaryGloss WHERE senseId=? AND glossIndex>=? AND id NOT IN (SELECT glossId FROM DictionaryTranslation WHERE reviewedAt IS NOT NULL)',
  );
  const removeSense = db.prepare(
    'DELETE FROM DictionarySense WHERE entryId=? AND senseIndex>=? AND id NOT IN (SELECT g.senseId FROM DictionaryGloss g JOIN DictionaryTranslation t ON g.id=t.glossId WHERE t.reviewedAt IS NOT NULL)',
  );
  function one(w: SourceWord) {
    const raw = JSON.stringify(w);
    const old = get.get(w.id) as { raw: string } | undefined;
    if (old?.raw === raw) {
      setVersion.run(version, w.id);
      return 0;
    }
    entry.run(w.id, Number([...w.kanji, ...w.kana].some((f) => f.common)), version, raw);
    if (old) {
      delK.run(w.id);
      delR.run(w.id);
    }
    w.kanji.forEach((f, i) =>
      kanji.run(
        `${w.id}:k${i}`,
        w.id,
        f.text,
        normalize(f.text),
        Number(f.common),
        JSON.stringify(f.tags),
      ),
    );
    w.kana.forEach((f, i) =>
      reading.run(
        `${w.id}:r${i}`,
        w.id,
        f.text,
        normalize(f.text),
        Number(f.common),
        JSON.stringify(f.tags),
        JSON.stringify(f.appliesToKanji),
      ),
    );
    w.sense.forEach((s, i) => {
      const id = `${w.id}:s${i}`,
        { gloss: glosses, ...metadata } = s;
      sense.run(id, w.id, i, JSON.stringify(metadata));
      glosses.forEach((g, j) => {
        const gid = `${id}:g${j}`;
        const sourceHash = hash(
          JSON.stringify({
            head: w.kanji.map((f) => f.text),
            kana: w.kana.map((f) => f.text),
            metadata,
            gloss: glosses.map((g) => g.text),
            text: g.text,
            target: 'vi',
            prompt: 1,
          }),
        );
        gloss.run(gid, id, j, g.lang, g.text, g.type, sourceHash);
        if (old) stale.run(gid, sourceHash);
      });
      if (old) removeGloss.run(id, glosses.length);
    });
    if (old) removeSense.run(w.id, w.sense.length);
    const ja = [...w.kanji, ...w.kana].map((f) => f.text).join(' ');
    const en = w.sense.flatMap((s) => s.gloss.map((g) => g.text)).join(' ');
    const vi = (viQuery.all(w.id) as { translatedText: string }[])
      .map((t) => t.translatedText)
      .join(' ');
    if (old) {
      deleteFts.run(w.id);
      deleteTri.run(w.id);
      deleteGram.run(w.id);
    }
    insertFts.run(w.id, ja, en, vi);
    deleteTerms.run(w.id);
    for (const t of searchTerms(
      w.kanji.map((f) => f.text),
      w.kana.map((f) => f.text),
      [vi],
    ))
      insertTerm.run(w.id, t.kind, t.term);
    insertTri.run(w.id, normalize(ja + ' ' + en + ' ' + vi));
    const grams = new Set<string>();
    for (const f of [...w.kanji, ...w.kana]) {
      const n = normalize(f.text);
      for (let i = 0; i < n.length; i++) {
        grams.add(n.slice(i, i + 1));
        if (i + 1 < n.length) grams.add(n.slice(i, i + 2));
      }
    }
    for (const token of grams) insertGram.run(token, w.id);
    return 1;
  }
  return {
    write(inputs: unknown[]) {
      const words = inputs.map((w) => wordSchema.parse(w));
      for (let attempt = 0; attempt < 3; attempt++) {
        let changed = 0,
          started = false;
        try {
          db.exec('BEGIN IMMEDIATE');
          started = true;
          for (const word of words) changed += one(word);
          db.exec('COMMIT');
          return changed;
        } catch (error) {
          if (started) db.exec('ROLLBACK');
          if (attempt === 2 || !/database is (locked|busy)/i.test(String(error))) throw error;
          console.warn('SQLite busy; retrying dictionary batch', { attempt: attempt + 1 });
          Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 250 * (attempt + 1));
        }
      }
      throw new Error('Dictionary batch was not committed');
    },
    close: () => db.close(),
  };
}
