import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const audioSource = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\日本語JLPT\\日本語JLPT\\N5\\listening\\2012\\Nghe N5-2012年12月.m4a';
const outDir = 'd:\\Demo\\public\\audio\\jlpt\\n5-2012-12';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// 24 questions aligned with Whisper timestamps & PDF script
const segments = [
  // Mondai 1 (Q01-Q07)
  { id: 'q01', start: 214.5, end: 261.5 },
  { id: 'q02', start: 261.5, end: 318.5 },
  { id: 'q03', start: 318.5, end: 373.5 },
  { id: 'q04', start: 373.5, end: 430.5 },
  { id: 'q05', start: 430.5, end: 493.5 },
  { id: 'q06', start: 493.5, end: 558.0 },
  { id: 'q07', start: 558.0, end: 630.0 },

  // Mondai 2 (Q08-Q13)
  { id: 'q08', start: 767.0, end: 823.0 },
  { id: 'q09', start: 823.0, end: 885.5 },
  { id: 'q10', start: 885.5, end: 947.5 },
  { id: 'q11', start: 947.5, end: 1010.5 },
  { id: 'q12', start: 1010.5, end: 1087.0 },
  { id: 'q13', start: 1087.0, end: 1160.0 },

  // Mondai 3 (Q14-Q18)
  { id: 'q14', start: 1293.0, end: 1325.5 },
  { id: 'q15', start: 1325.5, end: 1360.0 },
  { id: 'q16', start: 1360.0, end: 1395.0 },
  { id: 'q17', start: 1395.0, end: 1432.5 },
  { id: 'q18', start: 1432.5, end: 1465.0 },

  // Mondai 4 (Q19-Q24)
  { id: 'q19', start: 1549.5, end: 1580.5 },
  { id: 'q20', start: 1580.5, end: 1612.5 },
  { id: 'q21', start: 1612.5, end: 1642.0 },
  { id: 'q22', start: 1642.0, end: 1672.5 },
  { id: 'q23', start: 1672.5, end: 1704.5 },
  { id: 'q24', start: 1704.5, end: 1735.0 },
];

console.log(`Starting audio slicing for N5 2012-12 (${segments.length} questions)...`);
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
console.log('Done slicing N5 2012-12.');
