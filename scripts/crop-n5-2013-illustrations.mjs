import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const pagesDir = 'd:\\Demo\\scripts\\scratch-2013-all';
const outDir = 'd:\\Demo\\public\\images\\jlpt\\n5-2013-07';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const crops = [
  // Reading Q32: Summer travel flyer (page 9)
  { page: 9, w: 1150, h: 1450, x: 800, y: 200, name: 'reading_q32.png' },

  // Listening Mondai 1 (page 10)
  { page: 10, w: 700, h: 520, x: 260, y: 1140, name: 'listening_q02.png' },
  { page: 10, w: 700, h: 530, x: 260, y: 1870, name: 'listening_q03.png' },
  { page: 10, w: 700, h: 540, x: 260, y: 2620, name: 'listening_q04.png' },

  // Listening Mondai 1 (page 11)
  { page: 11, w: 860, h: 660, x: 380, y: 280, name: 'listening_q05.png' },
  { page: 11, w: 860, h: 660, x: 380, y: 1120, name: 'listening_q06.png' },

  // Listening Mondai 2 Q5 (page 12)
  { page: 12, w: 860, h: 650, x: 220, y: 280, name: 'listening_q12.png' },

  // Listening Mondai 3 (page 12)
  { page: 12, w: 700, h: 550, x: 230, y: 1720, name: 'listening_q14.png' },
  { page: 12, w: 700, h: 550, x: 230, y: 2420, name: 'listening_q15.png' },

  // Listening Mondai 3 (page 13)
  { page: 13, w: 700, h: 500, x: 400, y: 250, name: 'listening_q16.png' },
  { page: 13, w: 700, h: 500, x: 400, y: 880, name: 'listening_q17.png' },
  { page: 13, w: 700, h: 500, x: 400, y: 1540, name: 'listening_q18.png' },
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
  console.log(`Cropped 2013 ${c.name} (${fs.statSync(outFile).size} bytes)`);
}

console.log('All 2013 images cropped successfully!');
