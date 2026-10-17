import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const m4a = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N5\\N5-2017\\Nghe N5-2017年7月.m4a';
const outDir = 'd:\\Demo\\public\\audio\\jlpt\\n5-2017-07';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const segments = [
  // Mondai 1 (Q01-Q07)
  { id: 'q01', start: 170.2, end: 217.3 },
  { id: 'q02', start: 229.0, end: 275.0 },
  { id: 'q03', start: 286.7, end: 328.6 },
  { id: 'q04', start: 340.3, end: 394.7 },
  { id: 'q05', start: 406.4, end: 469.0 },
  { id: 'q06', start: 480.7, end: 536.5 },
  { id: 'q07', start: 548.3, end: 616.4 },

  // Mondai 2 (Q08-Q13)
  { id: 'q08', start: 757.9, end: 812.0 },
  { id: 'q09', start: 823.5, end: 885.2 },
  { id: 'q10', start: 896.8, end: 949.1 },
  { id: 'q11', start: 960.7, end: 1010.9 },
  { id: 'q12', start: 1022.5, end: 1076.7 },
  { id: 'q13', start: 1088.4, end: 1153.2 },

  // Mondai 3 (Q14-Q18)
  { id: 'q14', start: 1264.0, end: 1284.0 },
  { id: 'q15', start: 1293.6, end: 1319.6 },
  { id: 'q16', start: 1329.2, end: 1352.8 },
  { id: 'q17', start: 1362.4, end: 1387.9 },
  { id: 'q18', start: 1397.5, end: 1427.1 },

  // Mondai 4 (Q19-Q24)
  { id: 'q19', start: 1526.0, end: 1543.2 },
  { id: 'q20', start: 1550.9, end: 1573.3 },
  { id: 'q21', start: 1580.9, end: 1603.3 },
  { id: 'q22', start: 1611.0, end: 1633.9 },
  { id: 'q23', start: 1641.5, end: 1662.0 },
  { id: 'q24', start: 1669.6, end: 1691.9 },
];

console.log(`Starting audio slicing for N5-2017 (${segments.length} questions)...`);
for (const seg of segments) {
  const outFile = path.join(outDir, `${seg.id}.mp3`);
  execFileSync(ffmpeg.path, [
    '-y',
    '-ss', String(seg.start),
    '-to', String(seg.end),
    '-i', m4a,
    '-vn',
    '-map', '0:a:0',
    '-c:a', 'libmp3lame',
    '-b:a', '128k',
    outFile
  ]);
  const size = fs.statSync(outFile).size;
  console.log(`Saved ${seg.id}.mp3: ${size} bytes (${(seg.end - seg.start).toFixed(1)}s)`);
}
console.log('N5-2017 audio slicing complete!');
