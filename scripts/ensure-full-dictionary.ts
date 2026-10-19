import 'dotenv/config';
import { db, ensureDatabaseSchema } from '../apps/api/src/db';
import { initSearch } from '../apps/api/src/dictionary';
import { createReadStream, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { mkdir, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import parserStream from 'stream-json';
import pick from 'stream-json/filters/pick.js';
import streamArray from 'stream-json/streamers/stream-array.js';
import { createBatchImporter } from './import-batch';

const SEED_ARCHIVE = path.resolve('data/seed/jmdict-eng-common.json.tgz');
const RAW_DIR = path.resolve('data/raw');

function unpackSeedArchive(): string {
  console.log('Đang giải nén bộ từ điển hạt giống (Mức A - 22.645 từ thông dụng)...');
  mkdirSync(RAW_DIR, { recursive: true });

  try {
    execFileSync('tar', ['-xzf', SEED_ARCHIVE, '-C', RAW_DIR]);
  } catch {
    execFileSync('tar.exe', ['-xzf', SEED_ARCHIVE, '-C', RAW_DIR]);
  }

  const files = readdirSync(RAW_DIR);
  const jsonFile = files.find((f) => f.startsWith('jmdict') && f.endsWith('.json'));
  if (!jsonFile) {
    throw new Error('Không tìm thấy file JSON sau khi giải nén tệp hạt giống');
  }
  return path.join(RAW_DIR, jsonFile);
}

const TRANSLATION_ARCHIVE = path.resolve('data/seed/translations-vi-common.json.gz');

export async function ensureTranslations() {
  if (!existsSync(TRANSLATION_ARCHIVE)) return;
  let count = 0;
  try {
    count = await db.dictionaryTranslation.count({ where: { status: 'completed' } });
  } catch {
    count = 0;
  }
  if (count >= 50000) {
    console.log(`✓ Đã có sẵn ${count} bản dịch tiếng Việt hoàn tất.`);
    return;
  }
  console.log(`Từ điển hiện có ${count} bản dịch. Bắt đầu khôi phục toàn bộ 87.585 bản dịch tiếng Việt chuẩn Mazii...`);
  const { DatabaseSync } = await import('node:sqlite');
  const { databaseLocation } = await import('../packages/shared/database-location');
  const { readFileSync } = await import('node:fs');
  const zlib = await import('node:zlib');
  const resolvedLocation = databaseLocation(process.env.DATABASE_URL);
  const dbSync = new DatabaseSync(resolvedLocation.filename);

  const raw = readFileSync(TRANSLATION_ARCHIVE);
  const decompressed = zlib.gunzipSync(raw).toString('utf8');
  const items = JSON.parse(decompressed) as Array<{
    glossId: string;
    translatedText: string;
    provider: string;
    model: string;
    sourceHash: string;
  }>;

  const insert = dbSync.prepare(`
    INSERT INTO DictionaryTranslation(id, glossId, targetLanguage, translatedText, status, provider, model, sourceHash, translatedAt, reviewedAt)
    VALUES(?, ?, 'vi', ?, 'completed', ?, ?, ?, datetime('now'), datetime('now'))
    ON CONFLICT(glossId) DO UPDATE SET
      translatedText = excluded.translatedText,
      status = 'completed',
      provider = excluded.provider,
      model = excluded.model,
      sourceHash = excluded.sourceHash
  `);

  dbSync.exec('BEGIN TRANSACTION;');
  for (const item of items) {
    insert.run(`trans_${item.glossId}`, item.glossId, item.translatedText, item.provider, item.model, item.sourceHash);
  }
  dbSync.exec('COMMIT;');
  dbSync.exec('PRAGMA wal_checkpoint(TRUNCATE);');
  dbSync.close();
  console.log(`✓ Đã nạp thành công ${items.length} bản dịch tiếng Việt chuẩn vào từ điển!`);
}

export async function ensureFullDictionary() {
  await ensureDatabaseSchema();
  await initSearch();

  let count = 0;
  try {
    count = await db.dictionaryEntry.count();
  } catch {
    count = 0;
  }

  // Mức A: Nếu đã có >= 20.000 từ vựng thông dụng thì đảm bảo bản dịch và hoàn tất
  if (count >= 20000) {
    console.log(`✓ Đã có sẵn ${count} từ vựng trong từ điển (Mức A).`);
    await ensureTranslations();
    return;
  }

  console.log(`Từ điển hiện có ${count} từ. Bắt đầu nạp 22.645 từ thông dụng N5-N1 từ gói dữ liệu đóng gói sẵn...`);

  let targetJson = '';
  if (existsSync(RAW_DIR)) {
    const files = readdirSync(RAW_DIR);
    const existing = files.find((f) => f.startsWith('jmdict') && f.endsWith('.json'));
    if (existing) targetJson = path.join(RAW_DIR, existing);
  }

  if (!targetJson) {
    if (!existsSync(SEED_ARCHIVE)) {
      throw new Error(`Không tìm thấy gói dữ liệu hạt giống tại ${SEED_ARCHIVE}`);
    }
    targetJson = unpackSeedArchive();
  }

  const version = '3.6.2';
  console.log(`Bắt đầu nhập dữ liệu từ điển từ ${targetJson}...`);
  const importer = createBatchImporter(version);

  const start = Date.now();
  let importedCount = 0;
  let batch: unknown[] = [];

  const stream = createReadStream(targetJson)
    .pipe(parserStream())
    .pipe(pick.asStream({ filter: 'words' }))
    .pipe(streamArray.asStream());

  for await (const item of stream) {
    batch.push((item as { value: unknown }).value);
    if (batch.length >= 500) {
      importer.write(batch);
      importedCount += batch.length;
      batch = [];
      if (importedCount % 5000 === 0) {
        const elapsed = ((Date.now() - start) / 1000).toFixed(1);
        console.log(`Đã nạp: ${importedCount} từ (${elapsed}s)...`);
      }
    }
  }

  if (batch.length) {
    importer.write(batch);
    importedCount += batch.length;
  }

  importer.close();
  const totalElapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`✓ Đã nạp thành công toàn bộ ${importedCount} từ vựng thông dụng N5-N1 trong ${totalElapsed}s!`);

  // Checkpoint WAL và VACUUM để database được ghi trọn vẹn vào learning.db
  try {
    const { DatabaseSync } = await import('node:sqlite');
    const { databaseLocation } = await import('../packages/shared/database-location');
    const resolvedLocation = databaseLocation(process.env.DATABASE_URL);
    const dbSync = new DatabaseSync(resolvedLocation.filename);
    dbSync.exec('PRAGMA wal_checkpoint(TRUNCATE);');
    dbSync.exec('VACUUM;');
    dbSync.close();
    console.log('✓ Đã đồng bộ WAL và tối ưu hóa file SQLite thành công.');
  } catch (cpErr) {
    console.warn('Lưu ý khi checkpoint SQLite WAL:', cpErr);
  }

  // Khôi phục bản dịch tiếng Việt đi kèm
  await ensureTranslations();

  // Cập nhật trạng thái nhập dữ liệu vào bảng DictionaryImport
  try {
    const latest = await db.dictionaryImport.findFirst({ orderBy: { importedAt: 'desc' } });
    if (latest) {
      await db.dictionaryImport.update({
        where: { id: latest.id },
        data: {
          version,
          source: 'https://github.com/scriptin/jmdict-simplified',
          checksum: 'jmdict-eng-common-3.6.2 (Mức A - 22.645 từ thông dụng)',
          count: importedCount,
          status: 'completed',
          importedAt: new Date(),
        },
      });
    } else {
      await db.dictionaryImport.create({
        data: {
          version,
          source: 'https://github.com/scriptin/jmdict-simplified',
          checksum: 'jmdict-eng-common-3.6.2 (Mức A - 22.645 từ thông dụng)',
          count: importedCount,
          status: 'completed',
          importedAt: new Date(),
        },
      });
    }
  } catch (importErr) {
    console.warn('Không thể ghi bản ghi DictionaryImport:', importErr);
  }

  // Xóa thư mục giải nén tạm thời để bảo toàn dung lượng ổ đĩa cho máy chủ
  try {
    await rm(RAW_DIR, { recursive: true, force: true });
  } catch {
    // ignore
  }
}

if (process.argv[1] && process.argv[1].includes('ensure-full-dictionary')) {
  ensureFullDictionary()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Lỗi khi nạp từ điển:', err);
      process.exit(1);
    });
}
