import 'dotenv/config';
import { DatabaseSync, backup } from 'node:sqlite';
import { mkdirSync, existsSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { databaseLocation } from '../packages/shared/database-location';
import { mergeAccounts } from './lib/merge-accounts';

const canonical = databaseLocation(process.env.DATABASE_URL).filename;
const legacy = path.resolve('.share/trial.db');
if (!existsSync(canonical) || !existsSync(legacy))
  throw new Error('Thiếu database cần hợp nhất. Không tạo hoặc reset dữ liệu.');
const approved = process.argv
  .filter((s) => s.startsWith('--merge-email='))
  .map((s) => s.slice('--merge-email='.length));
const target = new DatabaseSync(canonical),
  source = new DatabaseSync(legacy, { readOnly: true });
try {
  if (!process.argv.includes('--apply')) {
    console.log(
      'Chế độ kiểm tra. Dừng các API trước khi chạy --apply. Email trùng phải xác nhận bằng --merge-email=...',
    );
    const collisions = source
      .prepare('SELECT email FROM User')
      .all()
      .filter((u) =>
        target
          .prepare('SELECT id FROM User WHERE lower(email) = ?')
          .get(String(u.email).toLowerCase()),
      );
    console.log({ collisions: collisions.map((u) => u.email) });
  } else {
    const directory = path.resolve('.recovery', `unified-${Date.now()}`);
    mkdirSync(directory, { recursive: true });
    await backup(target, path.join(directory, 'local.db'));
    await backup(source, path.join(directory, 'trial.db'));
    const result = mergeAccounts(target, source, legacy, approved);
    writeFileSync(
      path.join(directory, 'result.json'),
      JSON.stringify({ canonical, legacy, ...result }, null, 2),
    );
    console.log(JSON.stringify({ backup: directory, ...result }));
  }
} finally {
  source.close();
  target.close();
}
