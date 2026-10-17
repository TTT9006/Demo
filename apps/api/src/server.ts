import { app } from './app';
import { db } from './db';
import { initSearch, recoverSearchIndex } from './dictionary';
import { syncGrammarContent } from './grammar';
await db.$queryRawUnsafe('PRAGMA journal_mode=WAL');
await initSearch();
await recoverSearchIndex();
await syncGrammarContent();
const port = Number(process.env.PORT || 3001);
const host = process.env.HOST || '0.0.0.0';
const server = app.listen(port, host, () =>
  console.log(process.env.NODE_ENV === 'production'
    ? `Website: http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`
    : `API: http://${host === '0.0.0.0' ? 'localhost' : host}:${port} · Giao diện: http://localhost:5173`),
);
for (const signal of ['SIGINT', 'SIGTERM'] as const)
  process.on(signal, () =>
    server.close(() => {
      void db.$disconnect().then(() => process.exit(0));
    }),
  );
