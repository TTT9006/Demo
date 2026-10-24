import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ffmpegPath = 'D:\\Demo\\node_modules\\@ffmpeg-installer\\win32-x64\\ffmpeg.exe';
const sourceAudio = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N4\\N4 tháng 7-2024\\Nghe N4 T7-2024 Yuuki Bùi.mp3';
const outDir = 'D:\\Demo\\public\\audio\\jlpt\\n4-2024-07';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const slices = [
  // Mondai 1
  { id: 'q01', start: 188.0, end: 255.0 },
  { id: 'q02', start: 260.0, end: 328.0 },
  { id: 'q03', start: 334.0, end: 405.0 },
  { id: 'q04', start: 411.5, end: 490.0 },
  { id: 'q05', start: 495.0, end: 570.0 },
  { id: 'q06', start: 574.5, end: 635.0 },
  { id: 'q07', start: 643.0, end: 712.0 },
  { id: 'q08', start: 718.0, end: 798.0 },

  // Mondai 2
  { id: 'q09', start: 935.5, end: 1022.0 },
  { id: 'q10', start: 1028.0, end: 1115.0 },
  { id: 'q11', start: 1120.0, end: 1218.0 },
  { id: 'q12', start: 1223.5, end: 1314.0 },
  { id: 'q13', start: 1320.0, end: 1408.0 },
  { id: 'q14', start: 1414.0, end: 1498.0 },
  { id: 'q15', start: 1504.5, end: 1630.0 },

  // Mondai 3
  { id: 'q16', start: 1718.5, end: 1750.0 },
  { id: 'q17', start: 1752.5, end: 1786.0 },
  { id: 'q18', start: 1788.5, end: 1820.0 },
  { id: 'q19', start: 1821.5, end: 1852.0 },
  { id: 'q20', start: 1854.5, end: 1886.0 },

  // Mondai 4
  { id: 'q21', start: 1968.0, end: 1993.0 },
  { id: 'q22', start: 1995.0, end: 2023.0 },
  { id: 'q23', start: 2025.0, end: 2051.0 },
  { id: 'q24', start: 2052.0, end: 2079.0 },
  { id: 'q25', start: 2080.0, end: 2106.0 },
  { id: 'q26', start: 2108.0, end: 2136.0 },
  { id: 'q27', start: 2137.0, end: 2167.0 },
  { id: 'q28', start: 2168.0, end: 2198.0 },
];

console.log(`Starting slicing ${slices.length} questions for N4 2024-07...`);

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

console.log('Finished slicing all questions for N4 2024-07!');
