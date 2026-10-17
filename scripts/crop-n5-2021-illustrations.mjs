import ffmpeg from '@ffmpeg-installer/ffmpeg';
import { execFileSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const pagesDir = 'd:\\Demo\\scripts\\scratch-2021-all';
const outDir = 'd:\\Demo\\public\\images\\jlpt\\n5-2021-12';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const crops = [
  // Reading Dokkai Q22 (page 8)
  { page: 8, w: 790, h: 720, x: 60, y: 330, name: 'reading_q22.png' },

  // Listening Q1 (page 9)
  { page: 9, w: 500, h: 400, x: 210, y: 600, name: 'listening_q01.png' },

  // Listening Q2 (page 10)
  { page: 10, w: 500, h: 390, x: 210, y: 140, name: 'listening_q02.png' },

  // Listening Q3 (page 10)
  { page: 10, w: 520, h: 400, x: 160, y: 680, name: 'listening_q03.png' },

  // Listening Q4 (page 11)
  { page: 11, w: 520, h: 380, x: 200, y: 140, name: 'listening_q04.png' },

  // Listening Q7 (page 12)
  { page: 12, w: 460, h: 370, x: 200, y: 110, name: 'listening_q07.png' },

  // Listening Q8 (M2 Q1) (page 13)
  { page: 13, w: 510, h: 380, x: 240, y: 100, name: 'listening_q08.png' },

  // Listening Q9 (M2 Q2) (page 13)
  { page: 13, w: 520, h: 400, x: 240, y: 530, name: 'listening_q09.png' },

  // Listening Q10 (M2 Q3) (page 14)
  { page: 14, w: 530, h: 370, x: 200, y: 90, name: 'listening_q10.png' },

  // Listening Q11 (M2 Q4) (page 14)
  { page: 14, w: 500, h: 390, x: 240, y: 510, name: 'listening_q11.png' },

  // Listening Q13 (M2 Q6) (page 15)
  { page: 15, w: 460, h: 350, x: 270, y: 80, name: 'listening_q13.png' },

  // Listening Q14 (M3 Q1) (page 15)
  { page: 15, w: 390, h: 290, x: 280, y: 790, name: 'listening_q14.png' },

  // Listening Q15 (M3 Q2) (page 16)
  { page: 16, w: 340, h: 250, x: 220, y: 120, name: 'listening_q15.png' },

  // Listening Q16 (M3 Q3) (page 16)
  { page: 16, w: 340, h: 250, x: 220, y: 400, name: 'listening_q16.png' },

  // Listening Q17 (M3 Q4) (page 16)
  { page: 16, w: 330, h: 250, x: 220, y: 700, name: 'listening_q17.png' },

  // Listening Q18 (M3 Q5) (page 17)
  { page: 17, w: 380, h: 290, x: 250, y: 100, name: 'listening_q18.png' },
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
  console.log(`Cropped ${c.name} (${fs.statSync(outFile).size} bytes)`);
}

console.log('All N5-2021 illustrations cropped successfully!');
