import { app } from './app';
import { db, ensureDatabaseSchema } from './db';
import { initSearch, recoverSearchIndex } from './dictionary';
import { syncGrammarContent } from './grammar';
import { ensureDefaultDecks } from './default-decks';
import bcrypt from 'bcryptjs';

await ensureDatabaseSchema();
try {
  await db.$queryRawUnsafe('PRAGMA journal_mode=WAL');
} catch {
  /* Managed by remote database engine */
}
await initSearch();
await recoverSearchIndex();
await syncGrammarContent();

// Danh sách tài khoản luôn được đảm bảo khởi tạo khi server khởi động (chống mất tài khoản khi Render tắt web/redeploy)
const PERSISTENT_USERS = [
  {
    email: 'nguyenhoangvuong2008@gmail.com',
    name: 'TTT9006',
    passwordHash: '$2b$12$IMuGOj1hNNSk2XFdOGOik.7suYs9YogguWhOv95Z3JPmgN267MpPq',
    role: 'admin',
    goal: 20,
    level: 'N1',
  },
  {
    email: 'quannapvipfifai@gmail.com',
    name: 'Nguyễn Anh Quân',
    passwordHash: '$2b$12$YvfxHfMbFrvGdd6Q7XKbJe8E6kbz6zwYijSflaoF746zBEOJSimCm',
    role: 'user',
    goal: 20,
    level: 'N5',
  },
  {
    email: 'demo@komorebi.local',
    name: 'Minh Anh',
    passwordHash: '$2b$12$JPpYnLfOEdQeRo1T5p/gNOrL.MbjBkPCH7Oa2fz6yqCaHV1fJtPRW',
    role: 'user',
    goal: 20,
    level: 'N5',
  },
];

try {
  // Cho phép tùy chỉnh hoặc đặt lại mật khẩu admin qua biến môi trường Render
  if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
    const adminEmail = process.env.ADMIN_EMAIL.trim().toLowerCase();
    const existing = await db.user.findUnique({ where: { email: adminEmail } });
    const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
    if (!existing) {
      const admin = await db.user.create({
        data: {
          email: adminEmail,
          password: passwordHash,
          name: process.env.ADMIN_NAME || 'Quản trị viên',
          avatar: '花',
          role: 'admin',
          goal: 20,
          level: 'N1',
        },
      });
      await db.deck.create({
        data: {
          userId: admin.id,
          name: 'Từ vựng của tôi',
          description: 'Những từ đầu tiên trong hành trình của bạn',
        },
      });
      await ensureDefaultDecks(admin.id);
    } else {
      await db.user.update({
        where: { id: existing.id },
        data: { password: passwordHash, role: 'admin' },
      });
    }
  }

  for (const account of PERSISTENT_USERS) {
    const existing = await db.user.findUnique({ where: { email: account.email } });
    if (!existing) {
      const user = await db.user.create({
        data: {
          email: account.email,
          password: account.passwordHash,
          name: account.name,
          avatar: '花',
          role: account.role,
          goal: account.goal,
          level: account.level,
        },
      });
      await db.deck.create({
        data: {
          userId: user.id,
          name: 'Từ vựng của tôi',
          description: 'Những từ đầu tiên trong hành trình của bạn',
        },
      });
      await ensureDefaultDecks(user.id);
    } else if (existing.defaultDeckVersion < 1) {
      await ensureDefaultDecks(existing.id);
    }
  }
} catch (err) {
  console.error('Không thể khởi tạo tài khoản hệ thống:', err);
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
