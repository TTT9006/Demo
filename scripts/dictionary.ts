import 'dotenv/config';
import { createReadStream, createWriteStream } from 'node:fs';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import { createHash } from 'node:crypto';
import parserStream from 'stream-json';
import pick from 'stream-json/filters/pick.js';
import streamArray from 'stream-json/streamers/stream-array.js';
import { db } from '../apps/api/src/db';
import { initSearch, dictionaryStatus } from '../apps/api/src/dictionary';
import { createBatchImporter } from './import-batch';
const args = process.argv.slice(2),
  command = args[0];
const option = (name: string, fallback: string) => {
  const i = args.indexOf(name);
  return i < 0 ? fallback : args[i + 1];
};
const file = option('--file', 'data/raw/jmdict.json');
type Release = {
  tag_name: string;
  assets: { name: string; browser_download_url: string; digest?: string }[];
};
async function download() {
  const response = await fetch(
    'https://api.github.com/repos/scriptin/jmdict-simplified/releases/latest',
    { headers: { 'User-Agent': 'Komorebi-local-dictionary' } },
  );
  if (!response.ok) throw Error(`GitHub: ${response.status}`);
  const release = (await response.json()) as Release;
  const prefix = args.includes('--common') ? 'jmdict-eng-common-' : 'jmdict-eng-';
  const asset =
    release.assets.find(
      (a) =>
        a.name.startsWith(prefix) &&
        (!a.name.includes('common') || args.includes('--common')) &&
        !a.name.includes('examp') &&
        a.name.endsWith('.json.tgz'),
    ) ||
    release.assets.find(
      (a) =>
        a.name.startsWith(prefix) &&
        (!a.name.includes('common') || args.includes('--common')) &&
        a.name.endsWith('.json.gz'),
    );
  if (!asset)
    throw Error(
      'Không tìm thấy tệp JSON chính thức: ' + release.assets.map((a) => a.name).join(', '),
    );
  await mkdir('data/raw', { recursive: true });
  const archive = 'data/raw/' + asset.name;
  const response2 = await fetch(asset.browser_download_url);
  if (!response2.ok || !response2.body) throw Error(`Download: ${response2.status}`);
  await pipeline(
    Readable.fromWeb(response2.body as import('node:stream/web').ReadableStream),
    createWriteStream(archive),
  );
  const h = createHash('sha256');
  for await (const chunk of createReadStream(archive)) h.update(chunk);
  const checksum = h.digest('hex');
  if (asset.digest?.startsWith('sha256:') && asset.digest.slice(7) !== checksum)
    throw Error('Checksum mismatch');
  // Official releases use a gzip-compressed tar containing one JSON file.
  if (archive.endsWith('.tgz')) {
    const { execFileSync } = await import('node:child_process');
    execFileSync('tar', ['-xzf', archive, '-C', 'data/raw']);
    const { readdir, rename } = await import('node:fs/promises');
    const name = (await readdir('data/raw')).find(
      (n) => n.startsWith(prefix) && n.endsWith('.json'),
    );
    if (!name) throw Error('Archive contains no dictionary JSON');
    await rename('data/raw/' + name, file);
  } else await pipeline(createReadStream(archive), createGunzip(), createWriteStream(file));
  await writeFile(
    file + '.metadata.json',
    JSON.stringify(
      {
        version: release.tag_name,
        source: asset.browser_download_url,
        checksum,
        verified: !!asset.digest,
      },
      null,
      2,
    ),
  );
  console.log({ file, version: release.tag_name, checksum, verified: !!asset.digest });
}
async function importFile() {
  await initSearch();
  const metadata = JSON.parse(await readFile(file + '.metadata.json', 'utf8')) as {
    version: string;
    source: string;
    checksum: string;
  };
  const limit = Number(option('--limit', '0'));
  let count = 0,
    changed = 0;
  const job = await db.dictionaryImport.create({
    data: {
      version: metadata.version,
      source: metadata.source,
      checksum: metadata.checksum,
      count: 0,
      status: 'running',
    },
  });
  const importer = createBatchImporter(metadata.version);
  try {
    const stream = createReadStream(file)
      .pipe(parserStream())
      .pipe(pick.asStream({ filter: 'words' }))
      .pipe(streamArray.asStream());
    let batch: unknown[] = [];
    for await (const item of stream) {
      if (limit && count + batch.length >= limit) {
        stream.destroy();
        break;
      }
      batch.push((item as { value: unknown }).value);
      if (batch.length >= 250) {
        changed += importer.write(batch);
        count += batch.length;
        batch = [];
        if (count % 5000 === 0) {
          await db.dictionaryImport.update({ where: { id: job.id }, data: { count } });
          console.log({ count, changed });
        }
      }
    }
    if (batch.length) {
      changed += importer.write(batch);
      count += batch.length;
    }
    await db.dictionaryImport.update({
      where: { id: job.id },
      data: { count, status: limit ? 'partial' : 'completed' },
    });
    console.log({ count, changed });
  } catch (error) {
    await db.dictionaryImport.update({ where: { id: job.id }, data: { count, status: 'failed' } });
    throw error;
  } finally {
    importer.close();
  }
}
try {
  if (command === 'download') await download();
  else if (command === 'import') await importFile();
  else if (command === 'verify') {
    await initSearch();
    console.log(JSON.stringify(await dictionaryStatus(), null, 2));
    const orphan = await db.$queryRaw<
      { n: bigint }[]
    >`SELECT COUNT(*) AS n FROM (SELECT id FROM DictionaryEntry EXCEPT SELECT entryId FROM DictionaryFts)`;
    if (Number(orphan[0].n)) throw Error('Missing FTS entries');
  } else throw Error('Use download, import, or verify');
} finally {
  await db.$disconnect();
}
