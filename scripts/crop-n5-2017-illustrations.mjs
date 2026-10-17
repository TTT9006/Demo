import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const pagesDir = 'd:\\Demo\\scripts\\scratch-2017-all';
const outDir = 'd:\\Demo\\public\\images\\jlpt\\n5-2017-07';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const crops = [
  // Reading Q28: 4 rooms
  { page: 19, w: 560, h: 430, x: 110, y: 300, name: 'reading_q28.png' },

  // Reading Q32: Arakiya flyer
  { page: 24, w: 570, h: 800, x: 100, y: 90, name: 'reading_q32.png' },

  // Listening Mondai 1
  { page: 27, w: 530, h: 410, x: 125, y: 110, name: 'listening_q01.png' },
  { page: 28, w: 530, h: 400, x: 125, y: 110, name: 'listening_q03.png' },
  { page: 28, w: 530, h: 400, x: 125, y: 570, name: 'listening_q04.png' },
  { page: 29, w: 530, h: 400, x: 125, y: 110, name: 'listening_q05.png' },
  { page: 29, w: 530, h: 400, x: 125, y: 570, name: 'listening_q06.png' },

  // Listening Mondai 3 (Q14-Q18)
  { page: 36, w: 530, h: 400, x: 125, y: 110, name: 'listening_q14.png' },
  { page: 36, w: 530, h: 400, x: 125, y: 570, name: 'listening_q15.png' },
  { page: 37, w: 530, h: 400, x: 125, y: 110, name: 'listening_q16.png' },
  { page: 37, w: 530, h: 400, x: 125, y: 570, name: 'listening_q17.png' },
  { page: 38, w: 530, h: 400, x: 125, y: 110, name: 'listening_q18.png' },
];

for (const c of crops) {
  const inFile = path.join(pagesDir, `page-${String(c.page).padStart(2, '0')}.png`);
  const outFile = path.join(outDir, c.name);
  execFileSync(ffmpeg.path, [
    '-y',
    '-i', inFile,
    '-vf', `crop=${c.w}:${c.h}:${c.x}:${c.y}`,
    outFile
  ]);
  console.log(`Cropped 2017 ${c.name} (${fs.statSync(outFile).size} bytes)`);
}

console.log('All 2017 images cropped successfully!');
