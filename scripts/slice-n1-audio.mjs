import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ffmpegPath = 'D:\\Demo\\node_modules\\@ffmpeg-installer\\win32-x64\\ffmpeg.exe';
const sourceAudio = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N1\\N1\\ĐỀ JLPT N1\\Đề 1\\Nghe N1 T7-2023 Bản chuẩn Yuuki Bui.mp3';
const outDir = 'D:\\Demo\\public\\audio\\jlpt\\n1-2023-07';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const slices = [
  // Mondai 1
  { id: 'q01', start: 0.0, end: 82.0 },
  { id: 'q02', start: 82.0, end: 182.0 },
  { id: 'q03', start: 182.0, end: 274.0 },
  { id: 'q04', start: 274.0, end: 378.0 },
  { id: 'q05', start: 378.0, end: 464.0 },

  // Mondai 2
  { id: 'q06', start: 464.0, end: 599.0 },
  { id: 'q07', start: 599.0, end: 735.0 },
  { id: 'q08', start: 735.0, end: 832.0 },
  { id: 'q09', start: 832.0, end: 984.0 },
  { id: 'q10', start: 984.0, end: 1071.0 },
  { id: 'q11', start: 1071.0, end: 1184.0 },

  // Mondai 3
  { id: 'q12', start: 1184.0, end: 1294.0 },
  { id: 'q13', start: 1294.0, end: 1387.0 },
  { id: 'q14', start: 1387.0, end: 1490.0 },
  { id: 'q15', start: 1490.0, end: 1572.0 },
  { id: 'q16', start: 1572.0, end: 1670.0 },

  // Mondai 4
  { id: 'q17', start: 1670.0, end: 1700.0 },
  { id: 'q18', start: 1700.0, end: 1736.0 },
  { id: 'q19', start: 1736.0, end: 1769.0 },
  { id: 'q20', start: 1769.0, end: 1794.0 },
  { id: 'q21', start: 1794.0, end: 1833.0 },
  { id: 'q22', start: 1833.0, end: 1866.0 },
  { id: 'q23', start: 1866.0, end: 1890.0 },
  { id: 'q24', start: 1890.0, end: 1920.0 },
  { id: 'q25', start: 1920.0, end: 1950.0 },
  { id: 'q26', start: 1950.0, end: 1987.0 },
  { id: 'q27', start: 1987.0, end: 2014.0 },

  // Mondai 5
  { id: 'q28', start: 2014.0, end: 2161.0 },
  { id: 'q29', start: 2161.0, end: 2295.0 },
  { id: 'q30', start: 2295.0, end: 2325.6 },
];

console.log(`Starting slicing ${slices.length} questions for N1 2023-07...`);

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

console.log('Finished slicing all questions for N1 2023-07!');
