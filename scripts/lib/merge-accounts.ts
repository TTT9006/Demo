import { DatabaseSync, type SQLInputValue } from 'node:sqlite';
import { randomUUID } from 'node:crypto';
import path from 'node:path';

type Row = Record<string, SQLInputValue>;
const historyTables = [
  'Deck',
  'Card',
  'Review',
  'Attempt',
  'TestRun',
  'SearchHistory',
  'Writing',
  'GrammarAnswer',
  'Session',
] as const;
const rows = (db: DatabaseSync, table: string) =>
  db.prepare(`SELECT * FROM "${table}"`).all() as Row[];
const time = (value: SQLInputValue | undefined) =>
  value == null ? 0 : typeof value === 'number' ? value : new Date(String(value)).getTime();
function insert(db: DatabaseSync, table: string, row: Row) {
  const keys = Object.keys(row);
  db.prepare(
    `INSERT INTO "${table}" (${keys.map((k) => `"${k}"`).join(',')}) VALUES (${keys.map(() => '?').join(',')})`,
  ).run(...keys.map((k) => row[k]));
}
function update(db: DatabaseSync, table: string, row: Row, where: Row) {
  const keys = Object.keys(row),
    filters = Object.keys(where);
  db.prepare(
    `UPDATE "${table}" SET ${keys.map((k) => `"${k}" = ?`).join(',')} WHERE ${filters.map((k) => `"${k}" = ?`).join(' AND ')}`,
  ).run(...keys.map((k) => row[k]), ...filters.map((k) => where[k]));
}

// Source is read-only, destination is transactional. Re-import is a no-op.
// Email collisions require explicit confirmation of ownership by the operator.
export function mergeAccounts(
  target: DatabaseSync,
  source: DatabaseSync,
  sourcePath: string,
  approvedEmails: string[],
) {
  const key = path.resolve(sourcePath);
  if (target.prepare('SELECT source FROM AccountImport WHERE source = ?').get(key))
    return { imported: false, users: 0 };
  const approved = new Set(approvedEmails.map((s) => s.trim().toLowerCase()));
  approved.add('demo@komorebi.local');
  const mapping = new Map<string, string>();
  let added = 0;
  source.exec('BEGIN');
  target.exec('PRAGMA foreign_keys=ON; BEGIN IMMEDIATE');
  try {
    for (const original of rows(source, 'User')) {
      const incoming: Row & { email: string } = { ...original, email: String(original.email).trim().toLowerCase() };
      const existing = target
        .prepare('SELECT * FROM User WHERE lower(email) = ?')
        .get(incoming.email) as Row | undefined;
      if (existing && !approved.has(incoming.email))
        throw new Error(`Email trùng chưa được xác nhận: ${incoming.email}`);
      const id = String(existing?.id || incoming.id);
      mapping.set(String(incoming.id), id);
      if (!existing) {
        insert(target, 'User', incoming);
        added++;
      } else {
        update(
          target,
          'User',
          {
            defaultDeckVersion: Math.max(
              Number(existing.defaultDeckVersion),
              Number(incoming.defaultDeckVersion),
            ),
          },
          { id },
        );
        if (incoming.password !== existing.password) {
          target
            .prepare(
              'INSERT OR IGNORE INTO UserPasswordCredential (id,userId,password) VALUES (?,?,?)',
            )
            .run(randomUUID(), id, incoming.password);
        }
      }
      // A shared demo login must never grant administrator access.
      if (incoming.email === 'demo@komorebi.local')
        update(target, 'User', { role: 'user' }, { id });
    }
    const remap = (row: Row): Row => {
      if (!('userId' in row)) return { ...row };
      const userId = mapping.get(String(row.userId));
      if (!userId) throw new Error('Không tìm thấy chủ sở hữu bản ghi.');
      return { ...row, userId };
    };
    // Keep all decks/cards, including separately edited default decks. Do not
    // deduplicate by label: two identically named decks can have distinct history.
    for (const original of rows(source, 'Grammar')) {
      if (!target.prepare('SELECT id FROM Grammar WHERE id = ?').get(original.id))
        insert(target, 'Grammar', original);
    }
    for (const table of historyTables)
      for (const original of rows(source, table)) {
        const row = remap(original),
          primary = table === 'Session' ? 'token' : 'id';
        const existing = target
          .prepare(`SELECT * FROM "${table}" WHERE "${primary}" = ?`)
          .get(row[primary]) as Row | undefined;
        if (!existing) insert(target, table, row);
        else if (Object.keys(row).some((k) => row[k] !== existing[k]))
          throw new Error(`Xung đột ID trong ${table}; dừng để bảo toàn cả hai bản.`);
      }
    for (const table of ['GrammarProgress', 'RadicalProgress', 'GrammarExerciseProgress'])
      for (const original of rows(source, table)) {
        const row = remap(original);
        const keys =
          table === 'RadicalProgress'
            ? ['userId', 'radicalId']
            : table === 'GrammarProgress'
              ? ['userId', 'grammarId']
              : ['userId', 'grammarId', 'exerciseId'];
        const where = Object.fromEntries(keys.map((k) => [k, row[k]]));
        const existing = target
          .prepare(`SELECT * FROM "${table}" WHERE ${keys.map((k) => `"${k}" = ?`).join(' AND ')}`)
          .get(...keys.map((k) => row[k])) as Row | undefined;
        if (!existing) {
          insert(target, table, row);
          continue;
        }
        if (table === 'GrammarExerciseProgress') {
          const latest = time(row.lastReviewed) > time(existing.lastReviewed) ? row : existing;
          const same = row.id === existing.id;
          update(
            target,
            table,
            {
              ...latest,
              id: existing.id,
              attempts: same
                ? Math.max(Number(row.attempts), Number(existing.attempts))
                : Number(row.attempts) + Number(existing.attempts),
              correctCount: same
                ? Math.max(Number(row.correctCount), Number(existing.correctCount))
                : Number(row.correctCount) + Number(existing.correctCount),
            },
            where,
          );
        } else {
          update(
            target,
            table,
            {
              completed: Number(Boolean(row.completed || existing.completed)),
              ...(table === 'GrammarProgress'
                ? { bookmarked: Number(Boolean(row.bookmarked || existing.bookmarked)) }
                : {}),
              updatedAt:
                time(row.updatedAt) > time(existing.updatedAt) ? row.updatedAt : existing.updatedAt,
            },
            where,
          );
        }
      }
    if (
      source
        .prepare(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='UserPasswordCredential'",
        )
        .get()
    ) {
      for (const original of rows(source, 'UserPasswordCredential')) {
        const row = remap(original);
        target
          .prepare(
            'INSERT OR IGNORE INTO UserPasswordCredential (id,userId,password) VALUES (?,?,?)',
          )
          .run(randomUUID(), row.userId, row.password);
      }
    }
    if (target.prepare('PRAGMA foreign_key_check').all().length)
      throw new Error('Kiểm tra liên kết dữ liệu không đạt.');
    insert(target, 'AccountImport', { source: key, completedAt: Date.now() });
    target.exec('COMMIT');
    return { imported: true, users: added };
  } catch (error) {
    target.exec('ROLLBACK');
    throw error;
  } finally {
    source.exec('ROLLBACK');
  }
}
