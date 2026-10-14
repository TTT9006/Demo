import { db } from '../apps/api/src/db';
import { syncGrammarContent } from '../apps/api/src/grammar';
try {
  await syncGrammarContent();
  console.log('Grammar content synchronized; account progress preserved.');
} finally {
  await db.$disconnect();
}
