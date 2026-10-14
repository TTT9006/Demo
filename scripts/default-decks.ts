import { db } from '../apps/api/src/db';
import { ensureDefaultDecks } from '../apps/api/src/default-decks';

// Optional eager provisioning for existing accounts. Normal login also provisions
// automatically. No dictionary import, account reset or progress update is needed.
try {
  const users = await db.user.findMany({ where: { defaultDeckVersion: 0 }, select: { id: true } });
  for (const user of users) await ensureDefaultDecks(user.id);
  console.log(`Added default decks for ${users.length} accounts.`);
} finally {
  await db.$disconnect();
}
