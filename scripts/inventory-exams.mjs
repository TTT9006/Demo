import fs from 'node:fs';
import path from 'node:path';

const BASE = 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe';

// Danh sách đề đã nạp trong codebase:
const EXISTING_PAPERS = [
  'jlpt-n5-2024-07',
  'jlpt-n5-2017-07',
  'jlpt-n5-2018-07',
  'jlpt-n5-2013-07',
  'jlpt-n5-2012-12',
  'jlpt-n5-2021-12',
  'jlpt-n5-2010-07',
  'jlpt-n5-sample',
  'jlpt-n4-2024-07',
  'jlpt-n4-sample',
  'jlpt-n3-2023-07',
  'jlpt-n3-sample',
  'jlpt-n2-2023-07',
  'jlpt-n2-sample',
  'jlpt-n1-2023-07',
];

const found = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile()).map((e) => e.name);
  const pdfs = files.filter((f) => f.endsWith('.pdf'));
  const audios = files.filter((f) => f.endsWith('.mp3') || f.endsWith('.m4a'));

  if (pdfs.length > 0 && audios.length > 0) {
    found.push({
      dir,
      pdfs,
      audios,
    });
  }

  for (const entry of entries) {
    if (entry.isDirectory()) {
      scanDir(path.join(dir, entry.name));
    }
  }
}

scanDir(path.join(BASE, 'N1'));
scanDir(path.join(BASE, 'N2'));
scanDir(path.join(BASE, 'N3'));
scanDir(path.join(BASE, 'N4'));

console.log(`Tìm thấy ${found.length} thư mục có cả PDF và Audio:\n`);

found.forEach((item, i) => {
  console.log(`--- [${i + 1}] ${item.dir.replace(BASE, '')} ---`);
  console.log('  PDFs:', item.pdfs.join(' | '));
  console.log('  Audios:', item.audios.join(' | '));
});
