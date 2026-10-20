import 'dotenv/config';
import { db } from '../apps/api/src/db';
import { indexEntry } from '../apps/api/src/dictionary';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';

async function main() {
  console.log('=== BẮT ĐẦU CẬP NHẬT THÀNH NGỮ TỤC NGỮ VÀO TỪ ĐIỂN ===');

  const proverbsPath = path.resolve('scripts/data/proverbs_all_vi.json');
  const yojisPath = path.resolve('scripts/data/yojis_all_vi.json');

  const proverbsMap: Record<string, string> = JSON.parse(readFileSync(proverbsPath, 'utf8'));
  const yojisMap: Record<string, string> = JSON.parse(readFileSync(yojisPath, 'utf8'));

  const combinedMap: Record<string, string> = { ...proverbsMap, ...yojisMap };
  console.log(`Tổng cộng ${Object.keys(combinedMap).length} định nghĩa thành ngữ tục ngữ cần cập nhật.`);

  // Load SQLite directly for high-performance transaction upsert
  const { DatabaseSync } = await import('node:sqlite');
  const { databaseLocation } = await import('../packages/shared/database-location');
  const resolvedLocation = databaseLocation(process.env.DATABASE_URL);
  const dbSync = new DatabaseSync(resolvedLocation.filename);

  console.log(`Kết nối SQLite tại: ${resolvedLocation.filename}`);

  // Fetch gloss sourceHash if available, or generate sha256
  const getGloss = dbSync.prepare('SELECT id, sourceHash, senseId FROM DictionaryGloss WHERE id = ?');
  const getSense = dbSync.prepare('SELECT entryId FROM DictionarySense WHERE id = ?');

  const upsertTrans = dbSync.prepare(`
    INSERT INTO DictionaryTranslation(id, glossId, targetLanguage, translatedText, status, provider, model, sourceHash, translatedAt, reviewedAt)
    VALUES(?, ?, 'vi', ?, 'completed', 'curated-proverb', 'vietnamese-natural-idioms', ?, datetime('now'), datetime('now'))
    ON CONFLICT(glossId) DO UPDATE SET
      translatedText = excluded.translatedText,
      status = 'completed',
      provider = 'curated-proverb',
      model = 'vietnamese-natural-idioms',
      reviewedAt = datetime('now'),
      translatedAt = datetime('now')
  `);

  const entryIdsToReindex = new Set<string>();

  dbSync.exec('BEGIN TRANSACTION;');

  let updatedCount = 0;
  for (const [glossId, text] of Object.entries(combinedMap)) {
    const glossRow = getGloss.get(glossId) as { id: string; sourceHash: string; senseId: string } | undefined;
    let sourceHash = 'manual';
    if (glossRow) {
      sourceHash = glossRow.sourceHash || crypto.createHash('sha256').update(glossId).digest('hex');
      const senseRow = getSense.get(glossRow.senseId) as { entryId: string } | undefined;
      if (senseRow) {
        entryIdsToReindex.add(senseRow.entryId);
      }
    } else {
      // Derive entryId from glossId (format: entryId:s0:g0)
      const parts = glossId.split(':');
      if (parts.length >= 1) {
        entryIdsToReindex.add(parts[0]);
      }
    }

    upsertTrans.run(`trans_${glossId}`, glossId, text, sourceHash);
    updatedCount++;
  }

  dbSync.exec('COMMIT;');
  console.log(`✓ Đã nạp ${updatedCount} bản dịch thành ngữ tục ngữ vào bảng DictionaryTranslation!`);

  // WAL checkpoint
  dbSync.exec('PRAGMA wal_checkpoint(TRUNCATE);');
  dbSync.close();

  // Reindex all affected entries
  console.log(`Bắt đầu tái lập chỉ mục tìm kiếm (reindexing) cho ${entryIdsToReindex.size} mục từ...`);
  let reindexCount = 0;
  for (const entryId of entryIdsToReindex) {
    try {
      await indexEntry(entryId);
      reindexCount++;
      if (reindexCount % 100 === 0) {
        console.log(`Đã reindex: ${reindexCount}/${entryIdsToReindex.size} từ...`);
      }
    } catch (err) {
      console.warn(`Lưu ý khi reindex ${entryId}:`, err);
    }
  }
  console.log(`✓ Đã hoàn tất reindex ${reindexCount} mục từ vào FTS5 & SearchTerm!`);

  // Update seed archive
  console.log('Cập nhật kho lưu trữ hạt giống seed archive (data/seed/translations-vi-common.json.gz)...');
  const SEED_ARCHIVE = path.resolve('data/seed/translations-vi-common.json.gz');
  const rawSeed = readFileSync(SEED_ARCHIVE);
  const decompressed = zlib.gunzipSync(rawSeed).toString('utf8');
  const seedItems = JSON.parse(decompressed) as Array<{
    glossId: string;
    translatedText: string;
    provider: string;
    model: string;
    sourceHash: string;
  }>;

  const seedMap = new Map<string, typeof seedItems[0]>();
  for (const item of seedItems) {
    seedMap.set(item.glossId, item);
  }

  let seedUpdated = 0;
  let seedAdded = 0;
  for (const [glossId, text] of Object.entries(combinedMap)) {
    if (seedMap.has(glossId)) {
      const existing = seedMap.get(glossId)!;
      existing.translatedText = text;
      existing.provider = 'curated-proverb';
      existing.model = 'vietnamese-natural-idioms';
      seedUpdated++;
    } else {
      seedMap.set(glossId, {
        glossId,
        translatedText: text,
        provider: 'curated-proverb',
        model: 'vietnamese-natural-idioms',
        sourceHash: crypto.createHash('sha256').update(glossId).digest('hex'),
      });
      seedAdded++;
    }
  }

  const newSeedArray = Array.from(seedMap.values());
  const newDecompressed = JSON.stringify(newSeedArray);
  const newGzipped = zlib.gzipSync(Buffer.from(newDecompressed, 'utf8'));
  writeFileSync(SEED_ARCHIVE, newGzipped);

  console.log(`✓ Đã cập nhật kho hạt giống seed archive: ${seedUpdated} sửa đổi, ${seedAdded} bổ sung mới (Tổng cộng: ${newSeedArray.length} bản dịch)!`);
  console.log('=== HOÀN TẤT TOÀN DIỆN ===');
}

main()
  .catch((e) => {
    console.error('Lỗi thực hiện:', e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
