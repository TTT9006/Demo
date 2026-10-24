import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ffmpegPath = 'D:\\Demo\\node_modules\\@ffmpeg-installer\\win32-x64\\ffmpeg.exe';
const sourceAudio = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N2\\ĐỀ JLPT N2\\ĐỀ JLPT N2\\Đề 1\\Nghe N2 T7-2023 Bản chuẩn Yuuki Bui.mp3';
const outDir = 'D:\\Demo\\public\\audio\\jlpt\\n2-2023-07';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const slices = [
  // Mondai 1
  { id: 'q01', start: 0.0, end: 109.0 },
  { id: 'q02', start: 110.0, end: 198.0 },
  { id: 'q03', start: 199.0, end: 294.0 },
  { id: 'q04', start: 295.0, end: 392.0 },
  { id: 'q05', start: 393.0, end: 455.0 },

  // Mondai 2
  { id: 'q06', start: 456.0, end: 575.0 },
  { id: 'q07', start: 576.0, end: 699.0 },
  { id: 'q08', start: 700.0, end: 827.0 },
  { id: 'q09', start: 828.0, end: 950.0 },
  { id: 'q10', start: 951.0, end: 1050.0 },
  { id: 'q11', start: 1051.0, end: 1157.0 },

  // Mondai 3
  { id: 'q12', start: 1158.0, end: 1250.0 },
  { id: 'q13', start: 1251.0, end: 1345.0 },
  { id: 'q14', start: 1346.0, end: 1443.0 },
  { id: 'q15', start: 1444.0, end: 1536.0 },
  { id: 'q16', start: 1537.0, end: 1639.0 },

  // Mondai 4
  { id: 'q17', start: 1640.0, end: 1670.0 },
  { id: 'q18', start: 1671.0, end: 1703.0 },
  { id: 'q19', start: 1704.0, end: 1733.0 },
  { id: 'q20', start: 1734.0, end: 1765.0 },
  { id: 'q21', start: 1766.0, end: 1794.0 },
  { id: 'q22', start: 1795.0, end: 1825.0 },
  { id: 'q23', start: 1826.0, end: 1856.0 },
  { id: 'q24', start: 1857.0, end: 1889.0 },
  { id: 'q25', start: 1890.0, end: 1921.0 },
  { id: 'q26', start: 1922.0, end: 1953.0 },

  // Mondai 5
  { id: 'q27', start: 1953.0, end: 2100.0 },
  { id: 'q28', start: 2100.0, end: 2225.0 },
  { id: 'q29', start: 2225.0, end: 2254.5 },
];

console.log(`Starting slicing ${slices.length} questions for N2 2023-07...`);

for (const s of slices) {
  const dest = path.join(outDir, `${s.id}.mp3`);
  const dur = (s.end - s.start).toFixed(2);
  const args = [
    '-y',
    '-ss', s.start.toFixed(2),
    '-t', dur,
    '-i', sourceAudio,
    '-vn',
    '-map', '0:a:0',
    '-c:a', 'libmp3lame',
    '-b:a', '128k',
    dest
  ];
  const res = spawnSync(ffmpegPath, args, { stdio: 'pipe' });
  if (res.status !== 0) {
    console.error(`Failed ${s.id}:`, res.stderr.toString());
  } else {
    const sz = fs.statSync(dest).size;
    console.log(`✓ ${s.id}.mp3 [${s.start}s -> ${s.end}s, dur ${dur}s]: ${(sz / 1024).toFixed(1)} KB`);
  }
}

console.log('Finished slicing all questions for N2 2023-07!');
