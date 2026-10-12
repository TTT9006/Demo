import { app } from './app';
import { db } from './db';
import { initSearch, recoverSearchIndex } from './dictionary';
await db.$queryRawUnsafe('PRAGMA journal_mode=WAL');
await initSearch();
await recoverSearchIndex();
const port = Number(process.env.PORT || 3001);
const server = app.listen(port, '127.0.0.1', () =>
  console.log(process.env.NODE_ENV === 'production'
    ? `Website: http://127.0.0.1:${port}`
    : `API: http://127.0.0.1:${port} · Giao diện: http://127.0.0.1:5173`),
);
for (const signal of ['SIGINT', 'SIGTERM'] as const)
  process.on(signal, () =>
    server.close(() => {
      void db.$disconnect().then(() => process.exit(0));
    }),
  );
