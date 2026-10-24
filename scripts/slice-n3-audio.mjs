import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ffmpegPath = 'D:\\Demo\\node_modules\\@ffmpeg-installer\\win32-x64\\ffmpeg.exe';
const sourceAudio = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N3\\n3\\n3\\7-2023\\Nghe N3 T7-2023 Bản chuẩn Yuuki Bui.mp3';
const outDir = 'D:\\Demo\\public\\audio\\jlpt\\n3-2023-07';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const slices = [
  // Mondai 1
  { id: 'q01', start: 0.0, end: 80.0 },
  { id: 'q02', start: 81.0, end: 162.0 },
  { id: 'q03', start: 163.0, end: 237.0 },
  { id: 'q04', start: 238.0, end: 334.0 },
  { id: 'q05', start: 335.0, end: 428.0 },
  { id: 'q06', start: 429.0, end: 511.0 },

  // Mondai 2
  { id: 'q07', start: 512.0, end: 615.0 },
  { id: 'q08', start: 616.0, end: 716.0 },
  { id: 'q09', start: 717.0, end: 825.0 },
  { id: 'q10', start: 826.0, end: 937.0 },
  { id: 'q11', start: 938.0, end: 1029.0 },
  { id: 'q12', start: 1030.0, end: 1129.0 },

  // Mondai 3
  { id: 'q13', start: 1130.0, end: 1229.0 },
  { id: 'q14', start: 1229.0, end: 1311.5 },
  { id: 'q15', start: 1311.5, end: 1405.0 },

  // Mondai 4
  { id: 'q16', start: 1405.0, end: 1437.0 },
  { id: 'q17', start: 1437.0, end: 1470.0 },
  { id: 'q18', start: 1470.0, end: 1506.0 },
  { id: 'q19', start: 1506.0, end: 1540.0 },

  // Mondai 5
  { id: 'q20', start: 1540.0, end: 1570.0 },
  { id: 'q21', start: 1570.0, end: 1602.0 },
  { id: 'q22', start: 1602.0, end: 1635.0 },
  { id: 'q23', start: 1635.0, end: 1666.0 },
  { id: 'q24', start: 1666.0, end: 1695.0 },
  { id: 'q25', start: 1695.0, end: 1728.0 },
  { id: 'q26', start: 1728.0, end: 1760.0 },
  { id: 'q27', start: 1760.0, end: 1790.0 },
  { id: 'q28', start: 1790.0, end: 1821.5 },
];

console.log(`Starting slicing ${slices.length} questions for N3 2023-07...`);

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

console.log('Finished slicing all questions for N3 2023-07!');
