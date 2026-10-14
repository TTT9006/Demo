import path from 'node:path';

// Prisma resolves relative SQLite URLs against prisma/schema.prisma.
// Use an absolute URL so dev, production and the sharing process agree.
export function databaseLocation(url = 'file:./learning.db', root = process.cwd()) {
  if (!url.startsWith('file:')) throw new Error('DATABASE_URL phải là đường dẫn SQLite file:.');
  const filename = url.slice(5);
  const resolved = path.resolve(root, 'prisma', filename);
  if (resolved.toLowerCase() === path.resolve(root, '.share/trial.db').toLowerCase()) {
    throw new Error(
      'trial.db là dữ liệu cũ. Hãy hợp nhất bằng scripts/unify-databases.ts rồi dùng prisma/learning.db.',
    );
  }
  return { filename: resolved, url: 'file:' + resolved.replaceAll('\\', '/') };
}
