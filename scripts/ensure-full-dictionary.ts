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

export async function ensureFullDictionary() {
  await ensureDatabaseSchema();
  await initSearch();

  let count = 0;
  try {
    count = await db.dictionaryEntry.count();
  } catch {
    count = 0;
  }

  // Mức A: Nếu đã có >= 20.000 từ vựng thông dụng thì coi như hoàn tất
  if (count >= 20000) {
    console.log(`✓ Đã có sẵn ${count} từ vựng trong từ điển (Mức A). Bỏ qua nạp lại.`);
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
