import { app } from './app';
import { db } from './db';
import { initSearch, recoverSearchIndex } from './dictionary';
import { syncGrammarContent } from './grammar';
import bcrypt from 'bcryptjs';

await db.$queryRawUnsafe('PRAGMA journal_mode=WAL');
await initSearch();
await recoverSearchIndex();
await syncGrammarContent();

// Tự động khởi tạo tài khoản mẫu nếu chưa có
try {
  const demoUser = await db.user.findUnique({ where: { email: 'demo@komorebi.local' } });
  if (!demoUser) {
    const user = await db.user.create({
      data: {
        email: 'demo@komorebi.local',
        password: await bcrypt.hash('Komorebi2026!', 12),
        name: 'Minh Anh',
        avatar: '花',
        role: 'user',
        goal: 20,
        level: 'N5',
      },
    });
    await db.deck.create({
      data: {
        userId: user.id,
        name: 'Từ vựng đầu tiên',
        description: 'Những điều nhỏ bé, gần gũi mỗi ngày.',
      },
    });
  } else if (demoUser.role !== 'user') {
    await db.user.update({
      where: { id: demoUser.id },
      data: { role: 'user' },
    });
  }
} catch (err) {
  console.error('Không thể khởi tạo tài khoản mẫu:', err);
}
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
