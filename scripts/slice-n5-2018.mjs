import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const audioSource = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\日本語JLPT\\日本語JLPT\\N5\\listening\\2018\\Nghe N5-2018年.m4a';
const outDir = 'd:\\Demo\\public\\audio\\jlpt\\n5-2018';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// 24 questions aligned with Whisper timestamps & PDF script
const segments = [
  // Mondai 1 (Q01-Q07)
  { id: 'q01', start: 159.5, end: 220.5 },
  { id: 'q02', start: 220.5, end: 280.5 },
  { id: 'q03', start: 280.5, end: 343.0 },
  { id: 'q04', start: 343.0, end: 413.5 },
  { id: 'q05', start: 413.5, end: 501.5 },
  { id: 'q06', start: 501.5, end: 564.0 },
  { id: 'q07', start: 564.0, end: 635.0 },

  // Mondai 2 (Q08-Q13)
  { id: 'q08', start: 757.0, end: 812.0 },
  { id: 'q09', start: 812.0, end: 869.5 },
  { id: 'q10', start: 869.5, end: 930.0 },
  { id: 'q11', start: 930.0, end: 1007.5 },
  { id: 'q12', start: 1007.5, end: 1106.0 },
  { id: 'q13', start: 1106.0, end: 1175.0 },

  // Mondai 3 (Q14-Q18)
  { id: 'q14', start: 1267.0, end: 1310.5 },
  { id: 'q15', start: 1310.5, end: 1346.5 },
  { id: 'q16', start: 1346.5, end: 1367.5 },
  { id: 'q17', start: 1367.5, end: 1402.5 },
  { id: 'q18', start: 1402.5, end: 1450.0 },

  // Mondai 4 (Q19-Q24)
  { id: 'q19', start: 1530.0, end: 1567.5 },
  { id: 'q20', start: 1567.5, end: 1596.5 },
  { id: 'q21', start: 1596.5, end: 1616.0 },
  { id: 'q22', start: 1616.0, end: 1650.0 },
  { id: 'q23', start: 1650.0, end: 1682.5 },
  { id: 'q24', start: 1682.5, end: 1715.0 },
];

console.log(`Starting audio slicing for N5 2018 (${segments.length} questions)...`);
for (const seg of segments) {
  const outFile = path.join(outDir, `${seg.id}.mp3`);
  execFileSync(ffmpeg.path, [
    '-y',
    '-ss', String(seg.start),
    '-to', String(seg.end),
    '-i', audioSource,
    '-vn',
    '-map', '0:a:0',
    '-c:a', 'libmp3lame',
    '-b:a', '128k',
    outFile
  ]);
  const size = fs.statSync(outFile).size;
  console.log(`Saved ${seg.id}.mp3: ${size} bytes (${(seg.end - seg.start).toFixed(1)}s)`);
}
console.log('Done slicing N5 2018.');
