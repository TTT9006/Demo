import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const mp3 = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N5\\N5-2013\\Nghe N5-2013年7月.mp3';
const outDir = 'd:\\Demo\\public\\audio\\jlpt\\n5-2013-07';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const segments = [
  // Mondai 1 (Q01-Q07)
  { id: 'q01', start: 208.0, end: 257.5 },
  { id: 'q02', start: 269.0, end: 313.0 },
  { id: 'q03', start: 324.5, end: 375.2 },
  { id: 'q04', start: 386.8, end: 438.9 },
  { id: 'q05', start: 450.4, end: 501.9 },
  { id: 'q06', start: 513.3, end: 575.1 },
  { id: 'q07', start: 586.5, end: 655.6 },

  // Mondai 2 (Q08-Q13)
  { id: 'q08', start: 794.0, end: 836.2 },
  { id: 'q09', start: 847.7, end: 900.2 },
  { id: 'q10', start: 911.7, end: 959.8 },
  { id: 'q11', start: 971.3, end: 1022.0 },
  { id: 'q12', start: 1033.5, end: 1086.2 },
  { id: 'q13', start: 1097.7, end: 1168.2 },

  // Mondai 3 (Q14-Q18)
  { id: 'q14', start: 1320.0, end: 1339.6 },
  { id: 'q15', start: 1349.1, end: 1379.0 },
  { id: 'q16', start: 1388.5, end: 1415.1 },
  { id: 'q17', start: 1424.5, end: 1450.1 },
  { id: 'q18', start: 1459.6, end: 1488.0 },

  // Mondai 4 (Q19-Q24)
  { id: 'q19', start: 1583.8, end: 1602.2 },
  { id: 'q20', start: 1609.7, end: 1631.3 },
  { id: 'q21', start: 1638.8, end: 1662.7 },
  { id: 'q22', start: 1670.1, end: 1694.8 },
  { id: 'q23', start: 1702.3, end: 1726.2 },
  { id: 'q24', start: 1733.7, end: 1761.5 },
];

console.log(`Starting audio slicing for N5-2013 (${segments.length} questions)...`);
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
console.log('N5-2013 audio slicing complete!');
