import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const pagesDir = 'd:\\Demo\\scripts\\scratch\\n5-2024-07-pages';
const outDir = 'd:\\Demo\\public\\images\\jlpt\\n5-2024-07';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const crops = [
  // Reading Dokkai Q22 (page 13)
  { page: 13, w: 2170, h: 2470, x: 280, y: 230, name: 'reading_q22.png' },

  // Listening Q1 (page 14)
  { page: 14, w: 1400, h: 1100, x: 270, y: 1870, name: 'listening_q01.png' },

  // Listening Q5 (page 16)
  { page: 16, w: 1570, h: 1320, x: 230, y: 370, name: 'listening_q05.png' },

  // Listening Q7 (page 17)
  { page: 17, w: 1160, h: 1420, x: 280, y: 410, name: 'listening_q07.png' },

  // Listening Q8 (page 18)
  { page: 18, w: 1740, h: 1420, x: 240, y: 1490, name: 'listening_q08.png' },

  // Listening Q9 (page 19 top)
  { page: 19, w: 1020, h: 1300, x: 320, y: 380, name: 'listening_q09.png' },

  // Listening Q10 (page 19 bottom)
  { page: 19, w: 1300, h: 1060, x: 360, y: 1950, name: 'listening_q10.png' },

  // Listening Q12 (page 20 bottom)
  { page: 20, w: 1840, h: 1460, x: 220, y: 1490, name: 'listening_q12.png' },

  // Listening Q14 (page 22)
  { page: 22, w: 2080, h: 1560, x: 210, y: 430, name: 'listening_q14.png' },

  // Listening Q15 (page 23 top)
  { page: 23, w: 1480, h: 1180, x: 280, y: 370, name: 'listening_q15.png' },

  // Listening Q16 (page 23 bottom)
  { page: 23, w: 1450, h: 1220, x: 300, y: 1820, name: 'listening_q16.png' },

  // Listening Q17 (page 24 top)
  { page: 24, w: 1300, h: 1090, x: 220, y: 400, name: 'listening_q17.png' },

  // Listening Q18 (page 24 bottom)
  { page: 24, w: 1480, h: 1150, x: 270, y: 1830, name: 'listening_q18.png' },
];

for (const c of crops) {
  const inFile = path.join(pagesDir, `page-${String(c.page).padStart(2, '0')}.jpg`);
  const outFile = path.join(outDir, c.name);
  execFileSync(ffmpeg.path, [
    '-y',
    '-i', inFile,
    '-vf', `crop=${c.w}:${c.h}:${c.x}:${c.y}`,
    outFile
  ]);
  console.log(`Cropped ${c.name} (${fs.statSync(outFile).size} bytes)`);
}

console.log('All images cropped successfully!');
