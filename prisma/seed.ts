import bcrypt from 'bcryptjs';
import { readFile } from 'node:fs/promises';
import { db } from '../apps/api/src/db';
import { importWord, initSearch, indexEntry, type SourceWord } from '../apps/api/src/dictionary';
import { lessons } from '../packages/shared/content';
const translations: Record<string, string[]> = {
  '1169870': ['uống', 'nuốt', 'uống (thuốc)'],
  '1175140': ['ga đường sắt', 'ga tàu'],
  '1191730': ['nhà', 'nơi cư trú', 'chỗ ở', 'nhà'],
  '1194500': ['hoa', 'hoa nở', 'bông hoa', 'cánh hoa'],
  '1206730': ['trường học'],
  '1206900': ['sinh viên (đặc biệt là sinh viên đại học)'],
  '1207240': ['thú vị', 'vui', 'dễ chịu', 'hạnh phúc', 'vui thích'],
  '1258330': ['chó', 'loài chó'],
  '1259290': ['thấy', 'nhìn', 'xem', 'ngắm', 'quan sát'],
  '1265070': ['cũ', 'lâu đời', 'cổ xưa', 'lỗi thời', 'cổ', 'cũ kỹ'],
  '1289400': ['xin chào', 'chào ban ngày', 'chào buổi chiều'],
  '1302680': ['núi', 'đồi'],
  '1315920': ['thời gian'],
  '1343950': ['viết', 'soạn', 'viết'],
  '1347750': ['nhỏ', 'bé', 'tí hon'],
  '1358280': ['ăn'],
  '1361490': ['mới', 'mới lạ', 'mới', 'gần đây', 'mới nhất', 'cập nhật', 'hiện đại'],
  '1371260': ['nước (đặc biệt là nước mát hoặc lạnh)'],
  '1387990': ['giáo viên', 'người hướng dẫn', 'thầy'],
  '1390020': ['sông', 'suối'],
  '1428280': ['buổi sáng'],
  '1443530': ['tàu hỏa', 'tàu điện'],
  '1456360': ['đọc'],
  '1464530': ['tiếng Nhật'],
  '1467640': ['mèo (đặc biệt là mèo nhà)', 'loài mèo'],
  '1486360': ['đẹp', 'xinh', 'đáng yêu', 'dịu dàng', 'trong sáng (tâm hồn, tình bạn…)'],
  '1512670': ['học tập'],
  '1536350': ['đêm', 'buổi tối'],
  '1540170': ['bạn bè', 'bạn đồng hành'],
  '1547720': ['đến (về không gian hoặc thời gian)', 'tiến lại gần', 'đến nơi'],
  '1578850': ['đi', 'di chuyển (về phía)', 'hướng đến', 'khởi hành (đến)'],
  '1579110': ['hôm nay', 'ngày này'],
  '1579260': ['hôm qua'],
  '1582710': ['Nhật Bản'],
  '1584660': ['ngày mai'],
  '1586820': ['cảm ơn', 'cảm ơn'],
  '1588880': ['to', 'lớn', 'lớn lao'],
  '1591110': ['nghe'],
  '1593710': ['cây anh đào', 'hoa anh đào', 'sakura'],
};
export async function seed() {
  await initSearch();
  const fixture = JSON.parse(
    await readFile(new URL('../data/processed/fixture.json', import.meta.url), 'utf8'),
  ) as { version: string; source: string; words: SourceWord[] };
  for (const w of fixture.words) {
    await importWord(w, fixture.version);
    const vi = translations[w.id];
    if (vi) {
      const senses = await db.dictionarySense.findMany({
        where: { entryId: w.id, senseIndex: 0 },
        include: { glosses: { orderBy: { glossIndex: 'asc' } } },
      });
      for (const g of senses[0]?.glosses || []) {
        if (!vi[g.glossIndex]) continue;
        await db.dictionaryTranslation.upsert({
          where: { glossId: g.id },
          create: {
            glossId: g.id,
            translatedText: vi[g.glossIndex],
            provider: 'curated-fixture',
            model: 'sample-v1',
            sourceHash: g.sourceHash,
            reviewedAt: new Date(),
          },
          update: {},
        });
      }
    }
    await indexEntry(w.id);
  }
  if (!(await db.dictionaryImport.findFirst()))
    await db.dictionaryImport.create({
      data: {
        version: fixture.version,
        source: fixture.source,
        checksum: 'fixture: official 40-entry excerpt',
        count: fixture.words.length,
        status: 'sample',
      },
    });
  for (const l of lessons)
    await db.grammar.upsert({
      where: { id: l.id },
      create: { ...l, content: JSON.stringify(l.content), exercises: JSON.stringify(l.exercises) },
      update: { ...l, content: JSON.stringify(l.content), exercises: JSON.stringify(l.exercises) },
    });
  const existing = await db.user.findUnique({ where: { email: 'demo@komorebi.local' } });
  if (!existing) {
    const user = await db.user.create({
      data: {
        email: 'demo@komorebi.local',
        password: await bcrypt.hash('Komorebi2026!', 12),
        name: 'Minh Anh',
        avatar: '花',
        role: 'admin',
        goal: 20,
        level: 'N5',
      },
    });
    const decks = await Promise.all(
      [
        { name: 'Những từ đầu tiên', description: 'Những điều nhỏ bé, gần gũi mỗi ngày.' },
        { name: 'Một ngày ở Nhật', description: 'Đi lại, học tập và cuộc sống hằng ngày.' },
        { name: 'Thiên nhiên quanh mình', description: 'Một chút cây cỏ, một chút bình yên.' },
      ].map((d) => db.deck.create({ data: { userId: user.id, ...d } })),
    );
    const chosen = fixture.words.filter((w) => translations[w.id]).slice(0, 30);
    const cards = [];
    for (const [i, w] of chosen.entries()) {
      const past = new Date(Date.now() - (i % 6) * 86400000);
      const card = await db.card.create({
        data: {
          deckId: decks[Math.floor(i / 10) % 3].id,
          japanese: w.kanji[0]?.text || w.kana[0].text,
          reading: w.kana[0].text,
          meaning: translations[w.id][0],
          english: w.sense[0].gloss[0].text,
          entryId: w.id,
          repetitions: i < 22 ? 2 : 0,
          interval: i < 22 ? 6 : 0,
          lastReviewed: i < 22 ? past : null,
          due: new Date(Date.now() + (i < 12 ? -1 : 2) * 86400000),
          note: i === 0 ? 'Dùng khi nói về đồ uống và thuốc.' : '',
        },
      });
      cards.push(card);
    }
    for (let day = 6; day >= 0; day--) {
      const count = [12, 8, 16, 10, 18, 6, 12][6 - day];
      for (let i = 0; i < count; i++) {
        const card = cards[i % cards.length];
        await db.review.create({
          data: {
            userId: user.id,
            cardId: card.id,
            rating: i % 6 === 0 ? 1 : 2,
            interval: 6,
            createdAt: new Date(Date.now() - day * 86400000 - i * 60000),
          },
        });
      }
    }
    for (const grammarId of ['desu', 'janai'])
      await db.grammarProgress.create({ data: { userId: user.id, grammarId, completed: true } });
    const q = lessons[0].exercises[0];
    await db.attempt.create({
      data: {
        userId: user.id,
        testId: 'mini-desu',
        score: 100,
        duration: 72,
        answers: JSON.stringify([{ ...q, given: q.answer, correct: true }]),
        createdAt: new Date(Date.now() - 86400000),
      },
    });
  }
  console.log('Đã chuẩn bị dữ liệu. Demo: demo@komorebi.local / Komorebi2026!');
}
if (process.argv[1]?.replace(/\\/g, '/').endsWith('/prisma/seed.ts'))
  seed().finally(() => db.$disconnect());
