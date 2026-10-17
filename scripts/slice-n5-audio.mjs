import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const mp3 = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N5\\N5 tháng 7-2024\\Nghe N5 T7-2024 Full Yuuki Bùi (1).mp3';
const outDir = 'd:\\Demo\\public\\audio\\jlpt\\n5-2024-07';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const segments = [
  // Mondai 1 (Q1-Q7)
  { id: 'q01', start: 197.8, end: 240.0 },
  { id: 'q02', start: 251.5, end: 311.0 },
  { id: 'q03', start: 322.3, end: 372.0 },
  { id: 'q04', start: 383.3, end: 434.0 },
  { id: 'q05', start: 444.8, end: 514.5 },
  { id: 'q06', start: 525.6, end: 582.0 },
  { id: 'q07', start: 593.1, end: 651.0 },

  // Mondai 2 (Q8-Q13)
  { id: 'q08', start: 778.6, end: 838.0 },
  { id: 'q09', start: 848.8, end: 891.0 },
  { id: 'q10', start: 902.4, end: 953.0 },
  { id: 'q11', start: 964.4, end: 1018.0 },
  { id: 'q12', start: 1029.0, end: 1089.0 },
  { id: 'q13', start: 1099.8, end: 1153.0 },

  // Mondai 3 (Q14-Q18)
  { id: 'q14', start: 1290.8, end: 1317.0 },
  { id: 'q15', start: 1326.3, end: 1346.0 },
  { id: 'q16', start: 1355.6, end: 1381.0 },
  { id: 'q17', start: 1390.4, end: 1416.5 },
  { id: 'q18', start: 1425.9, end: 1453.5 },

  // Mondai 4 (Q19-Q24)
  { id: 'q19', start: 1539.0, end: 1559.5 },
  { id: 'q20', start: 1566.8, end: 1589.5 },
  { id: 'q21', start: 1597.0, end: 1616.5 },
  { id: 'q22', start: 1623.8, end: 1644.5 },
  { id: 'q23', start: 1652.1, end: 1672.0 },
  { id: 'q24', start: 1679.7, end: 1699.5 },
];

console.log(`Starting audio slicing for ${segments.length} questions...`);
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
console.log('Audio slicing complete!');
