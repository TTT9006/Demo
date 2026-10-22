import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const audioSource = 'c:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\日本語JLPT\\日本語JLPT\\N5\\listening\\2010-2011\\Nghe N5-2010-2011年.m4a';
const outDir = 'd:\\Demo\\public\\audio\\jlpt\\n5-2010-2011';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// 24 questions aligned with Whisper timestamps & PDF script
const segments = [
  // Mondai 1 (Q01-Q07)
  { id: 'q01', start: 172.5, end: 235.0 },
  { id: 'q02', start: 235.0, end: 293.0 },
  { id: 'q03', start: 293.0, end: 346.5 },
  { id: 'q04', start: 346.5, end: 412.5 },
  { id: 'q05', start: 412.5, end: 486.5 },
  { id: 'q06', start: 486.5, end: 554.0 },
  { id: 'q07', start: 554.0, end: 618.0 },

  // Mondai 2 (Q08-Q13)
  { id: 'q08', start: 757.5, end: 826.5 },
  { id: 'q09', start: 826.5, end: 899.5 },
  { id: 'q10', start: 899.5, end: 963.5 },
  { id: 'q11', start: 963.5, end: 1025.5 },
  { id: 'q12', start: 1025.5, end: 1091.5 },
  { id: 'q13', start: 1091.5, end: 1152.5 },

  // Mondai 3 (Q14-Q18)
  { id: 'q14', start: 1259.5, end: 1292.5 },
  { id: 'q15', start: 1292.5, end: 1328.0 },
  { id: 'q16', start: 1328.0, end: 1361.0 },
  { id: 'q17', start: 1361.0, end: 1396.5 },
  { id: 'q18', start: 1396.5, end: 1435.0 },

  // Mondai 4 (Q19-Q24)
  { id: 'q19', start: 1518.5, end: 1546.5 },
  { id: 'q20', start: 1546.5, end: 1576.5 },
  { id: 'q21', start: 1576.5, end: 1606.5 },
  { id: 'q22', start: 1606.5, end: 1637.5 },
  { id: 'q23', start: 1637.5, end: 1665.5 },
  { id: 'q24', start: 1665.5, end: 1700.0 },
];

console.log(`Starting audio slicing for N5 2010-2011 (${segments.length} questions)...`);
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
console.log('Done slicing N5 2010-2011.');
