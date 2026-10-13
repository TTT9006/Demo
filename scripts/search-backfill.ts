import 'dotenv/config';
import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import { searchTerms, SEARCH_VERSION } from '../packages/shared/japanese-query';
const file = (process.env.DATABASE_URL || 'file:./learning.db').slice(5);
const db = new DatabaseSync(path.isAbsolute(file) ? file : path.resolve('prisma', file));
db.exec('PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;');
const get = db.prepare('SELECT id,raw FROM DictionaryEntry WHERE id>? ORDER BY id LIMIT 250');
const vi = db.prepare(
  "SELECT t.translatedText FROM DictionaryTranslation t JOIN DictionaryGloss g ON g.id=t.glossId JOIN DictionarySense s ON s.id=g.senseId WHERE s.entryId=? AND t.status='completed'",
);
const del = db.prepare('DELETE FROM DictionarySearchTerm WHERE entryId=?');
const put = db.prepare(
  'INSERT OR IGNORE INTO DictionarySearchTerm(entryId,kind,term) VALUES(?,?,?)',
);
let cursor = '',
  count = 0;
const start = performance.now();
for (;;) {
  const rows = get.all(cursor) as { id: string; raw: string }[];
  if (!rows.length) break;
  db.exec('BEGIN IMMEDIATE');
  try {
    for (const row of rows) {
      const w = JSON.parse(row.raw) as { kanji: { text: string }[]; kana: { text: string }[] };
      const translated = (vi.all(row.id) as { translatedText: string }[]).map(
        (t) => t.translatedText,
      );
      del.run(row.id);
      for (const t of searchTerms(
        w.kanji.map((f) => f.text),
        w.kana.map((f) => f.text),
        translated,
      ))
        put.run(row.id, t.kind, t.term);
    }
    db.exec('COMMIT');
  } catch (e) {
    db.exec('ROLLBACK');
    throw e;
  }
  cursor = rows.at(-1)!.id;
  count += rows.length;
  if (count % 25000 === 0) console.log({ count });
}
db.prepare(
  "INSERT INTO SearchIndexVersion(id,version,updatedAt) VALUES('dictionary',?,CURRENT_TIMESTAMP) ON CONFLICT(id) DO UPDATE SET version=excluded.version,updatedAt=excluded.updatedAt",
).run(SEARCH_VERSION);
console.log({
  count,
  terms: db.prepare('SELECT COUNT(*) n FROM DictionarySearchTerm').get(),
  ms: Math.round(performance.now() - start),
});
db.close();
