import 'dotenv/config';
import { db } from '../apps/api/src/db';
import { dictionaryStatus } from '../apps/api/src/dictionary';
import { GeminiProvider, runTranslations } from '../apps/api/src/translation';
const args = process.argv.slice(2);
const option = (key: string, fallback: string) =>
  args.includes(key) ? args[args.indexOf(key) + 1] : fallback;
try {
  if (args.includes('--dry-run')) console.log(await dictionaryStatus());
  else {
    const budget = Number(process.env.TRANSLATION_BUDGET_ITEMS || 0);
    const limit = Math.min(budget, Number(option('--limit', String(budget))));
    if (!limit)
      throw Error(
        'Đặt TRANSLATION_BUDGET_ITEMS trước khi chạy. Không có lệnh gọi AI nào được thực hiện.',
      );
    if (option('--provider', 'gemini') !== 'gemini') throw Error('Chỉ hỗ trợ nhà cung cấp gemini.');
    console.log(
      await runTranslations(new GeminiProvider(), {
        limit,
        batchSize: Number(option('--batch-size', '8')),
        commonOnly: args.includes('--only-common'),
        resume: args.includes('--resume'),
        delayMs: Number(process.env.TRANSLATION_DELAY_MS || 2000),
      }),
    );
  }
} finally {
  await db.$disconnect();
}
