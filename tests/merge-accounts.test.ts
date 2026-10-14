import { describe, it, expect } from 'vitest';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync, readdirSync } from 'node:fs';
import { mergeAccounts } from '../scripts/lib/merge-accounts';
import { databaseLocation } from '../packages/shared/database-location';

function fixture(id: string, email = 'owner@example.com') {
  const db = new DatabaseSync(':memory:');
  for (const name of readdirSync('prisma/migrations')
    .filter((n) => /^\d/.test(n))
    .sort())
    db.exec(readFileSync(`prisma/migrations/${name}/migration.sql`, 'utf8'));
  db.prepare('INSERT INTO User (id,email,password,name,role) VALUES (?,?,?,?,?)').run(
    id,
    email,
    `hash-${id}`,
    id,
    'user',
  );
  db.prepare('INSERT INTO Deck (id,userId,name) VALUES (?,?,?)').run(`deck-${id}`, id, 'Same name');
  db.prepare('INSERT INTO Card (id,deckId,japanese,reading,meaning) VALUES (?,?,?,?,?)').run(
    `card-${id}`,
    `deck-${id}`,
    '字',
    'じ',
    id,
  );
  db.prepare('INSERT INTO Review (id,userId,cardId,rating,interval) VALUES (?,?,?,?,?)').run(
    `review-${id}`,
    id,
    `card-${id}`,
    2,
    1,
  );
  db.prepare(
    'INSERT INTO Grammar (id,pattern,title,level,position,content,exercises) VALUES (?,?,?,?,?,?,?)',
  ).run('g', 'g', 'g', 'N5', 1, '{}', '[]');
  db.prepare(
    'INSERT INTO GrammarProgress (id,userId,grammarId,completed,bookmarked,updatedAt) VALUES (?,?,?,?,?,?)',
  ).run(`p-${id}`, id, 'g', id === 'local' ? 1 : 0, id === 'trial' ? 1 : 0, Date.now());
  db.prepare(
    'INSERT INTO GrammarExerciseProgress (id,userId,grammarId,exerciseId,attempts,correctCount,lastReviewed) VALUES (?,?,?,?,?,?,?)',
  ).run(`e-${id}`, id, 'g', 'q', 2, 1, id === 'local' ? 1000 : 2000);
  return db;
}
describe('Unifying account stores', () => {
  it('preserves both histories and passwords, merges progress and is idempotent', () => {
    const local = fixture('local'),
      trial = fixture('trial');
    try {
      expect(mergeAccounts(local, trial, 'trial-fixture.db', ['owner@example.com']).imported).toBe(
        true,
      );
      expect(local.prepare('SELECT count(*) n FROM User').get()?.n).toBe(1);
      for (const table of ['Deck', 'Card', 'Review'])
        expect(local.prepare(`SELECT count(*) n FROM ${table}`).get()?.n).toBe(2);
      expect(local.prepare('SELECT password FROM UserPasswordCredential').get()?.password).toBe(
        'hash-trial',
      );
      expect(local.prepare('SELECT completed,bookmarked FROM GrammarProgress').get()).toMatchObject(
        { completed: 1, bookmarked: 1 },
      );
      expect(
        local
          .prepare('SELECT attempts,correctCount,lastReviewed FROM GrammarExerciseProgress')
          .get(),
      ).toMatchObject({ attempts: 4, correctCount: 2, lastReviewed: 2000 });
      expect(local.prepare('SELECT DISTINCT userId FROM Review').all()).toEqual([
        { userId: 'local' },
      ]);
      expect(mergeAccounts(local, trial, 'trial-fixture.db', []).imported).toBe(false);
      expect(trial.prepare('SELECT userId FROM Review').get()?.userId).toBe('trial');
      expect(local.prepare('PRAGMA foreign_key_check').all()).toEqual([]);
    } finally {
      local.close();
      trial.close();
    }
  });
  it('rolls back unapproved email conflicts and imports new users without changing passwords', () => {
    const local = fixture('local'),
      trial = fixture('trial');
    try {
      expect(() => mergeAccounts(local, trial, 'unapproved.db', [])).toThrow('chưa được xác nhận');
      expect(local.prepare('SELECT count(*) n FROM AccountImport').get()?.n).toBe(0);
      trial.prepare('UPDATE User SET email = ?').run('another@example.com');
      expect(mergeAccounts(local, trial, 'unapproved.db', []).users).toBe(1);
      expect(local.prepare('SELECT password FROM User WHERE id = ?').get('trial')?.password).toBe(
        'hash-trial',
      );
    } finally {
      local.close();
      trial.close();
    }
  });
  it('prevents public demo privilege escalation during consolidation', () => {
    const local = fixture('local', 'demo@komorebi.local'),
      trial = fixture('trial', 'demo@komorebi.local');
    try {
      local.exec("UPDATE User SET role='admin'");
      mergeAccounts(local, trial, 'demo.db', []);
      expect(local.prepare('SELECT role FROM User').get()?.role).toBe('user');
    } finally {
      local.close();
      trial.close();
    }
  });
  it('uses one absolute database location and rejects the legacy trial store', () => {
    expect(databaseLocation().url).toBe(databaseLocation('file:./learning.db').url);
    expect(() => databaseLocation('file:../.share/trial.db')).toThrow('trial.db');
  });
});
