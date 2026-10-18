import 'dotenv/config';
import { db, ensureDatabaseSchema } from '../apps/api/src/db';
import { initSearch } from '../apps/api/src/dictionary';
import { createReadStream, createWriteStream, existsSync } from 'node:fs';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { createHash } from 'node:crypto';
import parserStream from 'stream-json';
import pick from 'stream-json/filters/pick.js';
import streamArray from 'stream-json/streamers/stream-array.js';
import { createBatchImporter } from './import-batch';

const file = 'data/raw/jmdict.json';

async function downloadCommonJmdict(): Promise<string> {
  console.log('Đang kiểm tra bản phát hành JMdict Common mới nhất từ GitHub...');
  const res = await fetch(
    'https://api.github.com/repos/scriptin/jmdict-simplified/releases/latest',
    { headers: { 'User-Agent': 'Wakaba-dictionary-builder' } },
  );
  if (!res.ok) throw new Error(`Lỗi tải GitHub API: ${res.status}`);
  const release = (await res.json()) as {
    tag_name: string;
    assets: { name: string; browser_download_url: string; digest?: string }[];
  };

  // Ưu tiên tải bản jmdict-eng-common (~1.4 MB) - Mức A: 22.645 từ thông dụng N5-N1
  const asset = release.assets.find(
    (a) =>
      a.name.startsWith('jmdict-eng-common-') &&
      !a.name.includes('examp') &&
      (a.name.endsWith('.json.tgz') || a.name.endsWith('.json.gz')),
  );

  if (!asset) {
    throw new Error('Không tìm thấy tệp từ điển JMdict Common trong release');
  }

  await mkdir('data/raw', { recursive: true });
  const archive = 'data/raw/' + asset.name;

  console.log(`Đang tải từ điển JMdict Common (${asset.name})...`);
  const downloadRes = await fetch(asset.browser_download_url);
  if (!downloadRes.ok || !downloadRes.body) {
    throw new Error(`Lỗi tải file: ${downloadRes.status}`);
  }

  await pipeline(
    Readable.fromWeb(downloadRes.body as import('node:stream/web').ReadableStream),
    createWriteStream(archive),
  );

  const h = createHash('sha256');
  for await (const chunk of createReadStream(archive)) h.update(chunk);
  const checksum = h.digest('hex');

  console.log('Đang giải nén dữ liệu từ điển...');
  if (archive.endsWith('.tgz')) {
    const { execFileSync } = await import('node:child_process');
    try {
      execFileSync('tar', ['-xzf', archive, '-C', 'data/raw']);
    } catch {
      execFileSync('tar.exe', ['-xzf', archive, '-C', 'data/raw']);
    }
    const { readdir, rename } = await import('node:fs/promises');
    const name = (await readdir('data/raw')).find(
      (n) => n.startsWith('jmdict-eng-common-') && n.endsWith('.json'),
    );
    if (!name) throw new Error('Không tìm thấy tệp JSON sau khi giải nén archive');
    await rename('data/raw/' + name, file);
  } else {
    await pipeline(createReadStream(archive), createGunzip(), createWriteStream(file));
  }

  await writeFile(
    file + '.metadata.json',
    JSON.stringify(
      {
        version: release.tag_name,
        source: asset.browser_download_url,
        checksum,
      },
      null,
      2,
    ),
  );

  await rm(archive, { force: true });
  return release.tag_name;
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

  console.log(`Từ điển hiện có ${count} từ. Bắt đầu nạp ~22.645 từ thông dụng N5-N1 (Mức A - Tiết kiệm dung lượng)...`);

  let version = '3.6.2';
  if (!existsSync(file)) {
    version = await downloadCommonJmdict();
  } else if (existsSync(file + '.metadata.json')) {
    try {
      const meta = JSON.parse(await readFile(file + '.metadata.json', 'utf8'));
      version = meta.version || version;
    } catch {
      // ignore
    }
  }

  console.log(`Bắt đầu nhập dữ liệu từ điển từ ${file} (phiên bản ${version})...`);
  const importer = createBatchImporter(version);

  const start = Date.now();
  let importedCount = 0;
  let batch: unknown[] = [];

  const stream = createReadStream(file)
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
        console.log(`Đã nhập: ${importedCount} từ (${elapsed}s)...`);
      }
    }
  }

  if (batch.length) {
    importer.write(batch);
    importedCount += batch.length;
  }

  importer.close();
  const totalElapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`✓ Đã nạp thành công ${importedCount} từ vựng thông dụng N5-N1 trong ${totalElapsed}s!`);

  // Xóa tệp JSON thô để tiết kiệm dung lượng ổ đĩa tối đa cho server
  await rm('data/raw', { recursive: true, force: true });
}

if (process.argv[1] && process.argv[1].includes('ensure-full-dictionary')) {
  ensureFullDictionary()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Lỗi khi nạp từ điển:', err);
      process.exit(1);
    });
}
