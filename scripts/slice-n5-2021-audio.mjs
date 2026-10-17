import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const mp3 = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N5\\N5-2021\\Nghe N5 T12-2021 bản chuẩn Yuuki Bùi.mp3';
const outDir = 'd:\\Demo\\public\\audio\\jlpt\\n5-2021-12';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const segments = [
  // Mondai 1 (Q01-Q07)
  { id: 'q01', start: 206.5, end: 251.5 },
  { id: 'q02', start: 263.0, end: 317.8 },
  { id: 'q03', start: 329.5, end: 380.6 },
  { id: 'q04', start: 392.0, end: 441.3 },
  { id: 'q05', start: 452.8, end: 506.4 },
  { id: 'q06', start: 518.0, end: 583.5 },
  { id: 'q07', start: 595.0, end: 653.8 },

  // Mondai 2 (Q08-Q13)
  { id: 'q08', start: 799.0, end: 847.1 },
  { id: 'q09', start: 858.5, end: 902.8 },
  { id: 'q10', start: 914.2, end: 958.3 },
  { id: 'q11', start: 969.8, end: 1020.6 },
  { id: 'q12', start: 1032.0, end: 1080.6 },
  { id: 'q13', start: 1092.0, end: 1154.1 },

  // Mondai 3 (Q14-Q18)
  { id: 'q14', start: 1306.0, end: 1331.6 },
  { id: 'q15', start: 1341.2, end: 1363.9 },
  { id: 'q16', start: 1373.4, end: 1395.1 },
  { id: 'q17', start: 1404.5, end: 1433.1 },
  { id: 'q18', start: 1442.5, end: 1468.3 },

  // Mondai 4 (Q19-Q24)
  { id: 'q19', start: 1564.0, end: 1581.0 },
  { id: 'q20', start: 1585.5, end: 1607.5 },
  { id: 'q21', start: 1612.0, end: 1634.5 },
  { id: 'q22', start: 1639.0, end: 1662.3 },
  { id: 'q23', start: 1669.8, end: 1695.1 },
  { id: 'q24', start: 1702.6, end: 1729.7 },
];

console.log(`Starting audio slicing for N5-2021 (${segments.length} questions)...`);
for (const seg of segments) {
  const outFile = path.join(outDir, `${seg.id}.mp3`);
  execFileSync(ffmpeg.path, [
    '-y',
    '-ss', String(seg.start),
    '-to', String(seg.end),
    '-i', mp3,
    '-vn',
    '-map', '0:a:0',
    '-c:a', 'libmp3lame',
    '-b:a', '128k',
    outFile
  ]);
  const size = fs.statSync(outFile).size;
  console.log(`Saved ${seg.id}.mp3: ${size} bytes (${(seg.end - seg.start).toFixed(1)}s)`);
}
console.log('N5-2021 audio slicing complete!');
