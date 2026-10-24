import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ffmpegPath = 'D:\\Demo\\node_modules\\@ffmpeg-installer\\win32-x64\\ffmpeg.exe';

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

// 1. Slicing N2 2022-07
function sliceN2() {
  const trans = JSON.parse(fs.readFileSync('scripts/n2-2022-07-transcript.json', 'utf-8'));
  const src = trans.source;
  const outDir = path.resolve('public/audio/jlpt/n2-2022-07');
  ensureDir(outDir);

  const segs = trans.segments;

  function findStart(textMatch, afterSec = 0) {
    const s = segs.find(x => x.start >= afterSec && x.text.includes(textMatch));
    return s ? Math.max(0, s.start - 1.5) : null;
  }

  // Define cut points for N2 2022-07:
  // Mondai 1 (q01 - q05):
  const m1_1 = findStart('1番', 60);
  const m1_2 = findStart('2番', 150);
  const m1_3 = findStart('3番', 230);
  const m1_4 = findStart('先輩と同じように', 350) - 10; // 4番 intro
  const m1_5 = findStart('5番', 430);
  const m2_intro = findStart('問題2', 500);

  // Mondai 2 (q06 - q11):
  const m2_1 = findStart('一番', 560);
  const m2_2 = findStart('2番', 700);
  const m2_3 = findStart('3番', 800);
  const m2_4 = findStart('4番', 920);
  const m2_5 = findStart('5番', 1010);
  const m2_6 = findStart('6番', 1160);
  const m3_intro = findStart('問題3', 1300);

  // Mondai 3 (q12 - q16):
  const m3_1 = findStart('1番', 1350);
  const m3_2 = 1460.0; // between 1 and 3
  const m3_3 = findStart('3番', 1540);
  const m3_4 = findStart('4番', 1640);
  const m3_5 = findStart('5番', 1730);
  const m4_intro = findStart('問題4', 1850);

  // Mondai 4 (q17 - q28):
  const m4_1 = findStart('一番', 1880);
  const m4_2 = findStart('二番', 1920);
  const m4_3 = findStart('三番', 1955);
  const m4_4 = findStart('四番', 1990);
  const m4_5 = findStart('五番', 2025);
  const m4_6 = findStart('六番', 2055);
  const m4_7 = findStart('七番', 2085);
  const m4_8 = findStart('八番', 2120);
  const m4_9 = findStart('九番', 2155);
  const m4_10 = findStart('十番', 2190);
  const m4_11 = findStart('十一番', 2225);
  const m4_12 = 2255.0;
  const m5_intro = findStart('問題五', 2265);

  // Mondai 5 (q29 - q31):
  const m5_1 = findStart('一番', 2280);
  const m5_2_q1 = findStart('それから2つの質問', 2430);
  const m5_2_q2 = findStart('質問2', 2580);

  const cuts = [
    { id: 'q01', start: m1_1, end: m1_2 },
    { id: 'q02', start: m1_2, end: m1_3 },
    { id: 'q03', start: m1_3, end: m1_4 },
    { id: 'q04', start: m1_4, end: m1_5 },
    { id: 'q05', start: m1_5, end: m2_intro },

    { id: 'q06', start: m2_1, end: m2_2 },
    { id: 'q07', start: m2_2, end: m2_3 },
    { id: 'q08', start: m2_3, end: m2_4 },
    { id: 'q09', start: m2_4, end: m2_5 },
    { id: 'q10', start: m2_5, end: m2_6 },
    { id: 'q11', start: m2_6, end: m3_intro },

    { id: 'q12', start: m3_1, end: m3_2 },
    { id: 'q13', start: m3_2, end: m3_3 },
    { id: 'q14', start: m3_3, end: m3_4 },
    { id: 'q15', start: m3_4, end: m3_5 },
    { id: 'q16', start: m3_5, end: m4_intro },

    { id: 'q17', start: m4_1, end: m4_2 },
    { id: 'q18', start: m4_2, end: m4_3 },
    { id: 'q19', start: m4_3, end: m4_4 },
    { id: 'q20', start: m4_4, end: m4_5 },
    { id: 'q21', start: m4_5, end: m4_6 },
    { id: 'q22', start: m4_6, end: m4_7 },
    { id: 'q23', start: m4_7, end: m4_8 },
    { id: 'q24', start: m4_8, end: m4_9 },
    { id: 'q25', start: m4_9, end: m4_10 },
    { id: 'q26', start: m4_10, end: m4_11 },
    { id: 'q27', start: m4_11, end: m4_12 },
    { id: 'q28', start: m4_12, end: m5_intro },

    { id: 'q29', start: m5_1, end: m5_2_q1 },
    { id: 'q30', start: m5_2_q1, end: m5_2_q2 },
    { id: 'q31', start: m5_2_q2, end: trans.duration },
  ];

  console.log(`\nSlicing N2 2022-07 (${cuts.length} files)...`);
  cuts.forEach(c => {
    const dur = c.end - c.start;
    const outFile = path.join(outDir, `${c.id}.mp3`);
    const cmd = `${ffmpegPath} -y -ss ${c.start.toFixed(2)} -i "${src}" -t ${dur.toFixed(2)} -c:a libmp3lame -b:a 128k "${outFile}" -loglevel error`;
    execSync(cmd);
    const sz = fs.statSync(outFile).size;
    console.log(`  ✓ ${c.id}.mp3: ${c.start.toFixed(1)}s -> ${c.end.toFixed(1)}s (${dur.toFixed(1)}s, ${(sz/1024).toFixed(1)} KB)`);
  });
}

// 2. Slicing N3 2022-07
function sliceN3() {
  const trans = JSON.parse(fs.readFileSync('scripts/n3-2022-07-transcript.json', 'utf-8'));
  const src = trans.source;
  const outDir = path.resolve('public/audio/jlpt/n3-2022-07');
  ensureDir(outDir);

  const segs = trans.segments;
  function findStart(textMatch, afterSec = 0) {
    const s = segs.find(x => x.start >= afterSec && x.text.includes(textMatch));
    return s ? Math.max(0, s.start - 1.5) : null;
  }

  // Mondai 1 (6 Qs):
  const m1_1 = 155.0; // after intro
  const m1_2 = findStart('2番', 230);
  const m1_3 = findStart('3番', 310);
  const m1_4 = findStart('4番', 400);
  const m1_5 = findStart('5番', 490);
  const m1_6 = findStart('6番', 580);
  const m2_intro = findStart('問題2', 670);

  // Mondai 2 (6 Qs):
  const m2_1 = findStart('一番', 710);
  const m2_2 = findStart('2番', 820);
  const m2_3 = findStart('3番', 950);
  const m2_4 = findStart('4番', 1050);
  const m2_5 = findStart('5番', 1160);
  const m2_6 = findStart('6番', 1260);
  const m3_intro = findStart('問題3', 1410);

  // Mondai 3 (3 Qs):
  const m3_1 = findStart('1番', 1465);
  const m3_2 = findStart('2番', 1570);
  const m3_3 = findStart('3番', 1670);
  const m4_intro = findStart('問題4', 1765);

  // Mondai 4 (4 Qs):
  const m4_1 = 1795.0; // after intro
  const m4_2 = findStart('2番', 1835);
  const m4_3 = findStart('3番', 1875);
  const m4_4 = findStart('4番', 1920);
  const m5_intro = findStart('問題後', 1970) || findStart('問題5', 1970) || 1980.0;

  // Mondai 5 (9 Qs):
  const m5_1 = findStart('1番', 2005);
  const m5_2 = findStart('2番', 2040);
  const m5_3 = findStart('3番', 2075);
  const m5_4 = findStart('4番', 2115);
  const m5_5 = findStart('5番', 2150);
  const m5_6 = findStart('6番', 2185);
  const m5_7 = findStart('7番', 2220);
  const m5_8 = findStart('8番', 2255);
  const m5_9 = findStart('9番', 2290);

  const cuts = [
    { id: 'q01', start: m1_1, end: m1_2 },
    { id: 'q02', start: m1_2, end: m1_3 },
    { id: 'q03', start: m1_3, end: m1_4 },
    { id: 'q04', start: m1_4, end: m1_5 },
    { id: 'q05', start: m1_5, end: m1_6 },
    { id: 'q06', start: m1_6, end: m2_intro },

    { id: 'q07', start: m2_1, end: m2_2 },
    { id: 'q08', start: m2_2, end: m2_3 },
    { id: 'q09', start: m2_3, end: m2_4 },
    { id: 'q10', start: m2_4, end: m2_5 },
    { id: 'q11', start: m2_5, end: m2_6 },
    { id: 'q12', start: m2_6, end: m3_intro },

    { id: 'q13', start: m3_1, end: m3_2 },
    { id: 'q14', start: m3_2, end: m3_3 },
    { id: 'q15', start: m3_3, end: m4_intro },

    { id: 'q16', start: m4_1, end: m4_2 },
    { id: 'q17', start: m4_2, end: m4_3 },
    { id: 'q18', start: m4_3, end: m4_4 },
    { id: 'q19', start: m4_4, end: m5_intro },

    { id: 'q20', start: m5_1, end: m5_2 },
    { id: 'q21', start: m5_2, end: m5_3 },
    { id: 'q22', start: m5_3, end: m5_4 },
    { id: 'q23', start: m5_4, end: m5_5 },
    { id: 'q24', start: m5_5, end: m5_6 },
    { id: 'q25', start: m5_6, end: m5_7 },
    { id: 'q26', start: m5_7, end: m5_8 },
    { id: 'q27', start: m5_8, end: m5_9 },
    { id: 'q28', start: m5_9, end: trans.duration },
  ];

  console.log(`\nSlicing N3 2022-07 (${cuts.length} files)...`);
  cuts.forEach(c => {
    const dur = c.end - c.start;
    const outFile = path.join(outDir, `${c.id}.mp3`);
    const cmd = `${ffmpegPath} -y -ss ${c.start.toFixed(2)} -i "${src}" -t ${dur.toFixed(2)} -c:a libmp3lame -b:a 128k "${outFile}" -loglevel error`;
    execSync(cmd);
    const sz = fs.statSync(outFile).size;
    console.log(`  ✓ ${c.id}.mp3: ${c.start.toFixed(1)}s -> ${c.end.toFixed(1)}s (${dur.toFixed(1)}s, ${(sz/1024).toFixed(1)} KB)`);
  });
}

// 3. Slicing N4 2017-07
function sliceN4() {
  const trans = JSON.parse(fs.readFileSync('scripts/n4-2017-07-transcript.json', 'utf-8'));
  const src = trans.source;
  const outDir = path.resolve('public/audio/jlpt/n4-2017-07');
  ensureDir(outDir);

  const segs = trans.segments;
  function findStart(textMatch, afterSec = 0) {
    const s = segs.find(x => x.start >= afterSec && x.text.includes(textMatch));
    return s ? Math.max(0, s.start - 1.5) : null;
  }

  // Mondai 1 (8 Qs):
  const m1_1 = findStart('一番', 150);
  const m1_2 = findStart('2番', 220);
  const m1_3 = findStart('3番', 295);
  const m1_4 = findStart('4番', 360);
  const m1_5 = findStart('5番', 435);
  const m1_6 = findStart('6番', 510);
  const m1_7 = findStart('7番', 580);
  const m1_8 = 640.0;
  const m2_intro = findStart('問題2', 725);

  // Mondai 2 (7 Qs):
  const m2_1 = findStart('一番', 865);
  const m2_2 = findStart('二番', 955);
  const m2_3 = findStart('3番', 1055);
  const m2_4 = findStart('4番', 1145);
  const m2_5 = findStart('5番', 1220);
  const m2_6 = findStart('6番', 1330);
  const m2_7 = findStart('7番', 1435);
  const m3_intro = findStart('問題3', 1530);

  // Mondai 3 (5 Qs):
  const m3_1 = findStart('1番', 1615);
  const m3_2 = findStart('2番', 1655);
  const m3_3 = findStart('3番', 1695);
  const m3_4 = findStart('4番', 1735);
  const m3_5 = findStart('5番', 1770);
  const m4_intro = findStart('問題4', 1810);

  // Mondai 4 (8 Qs):
  const m4_1 = findStart('1番', 1895);
  const m4_2 = findStart('2番', 1925);
  const m4_3 = findStart('3番', 1955);
  const m4_4 = findStart('4番', 1985);
  const m4_5 = findStart('5番', 2020);
  const m4_6 = findStart('6番', 2050);
  const m4_7 = findStart('7番', 2080);
  const m4_8 = findStart('8番', 2110);

  const cuts = [
    { id: 'q01', start: m1_1, end: m1_2 },
    { id: 'q02', start: m1_2, end: m1_3 },
    { id: 'q03', start: m1_3, end: m1_4 },
    { id: 'q04', start: m1_4, end: m1_5 },
    { id: 'q05', start: m1_5, end: m1_6 },
    { id: 'q06', start: m1_6, end: m1_7 },
    { id: 'q07', start: m1_7, end: m1_8 },
    { id: 'q08', start: m1_8, end: m2_intro },

    { id: 'q09', start: m2_1, end: m2_2 },
    { id: 'q10', start: m2_2, end: m2_3 },
    { id: 'q11', start: m2_3, end: m2_4 },
    { id: 'q12', start: m2_4, end: m2_5 },
    { id: 'q13', start: m2_5, end: m2_6 },
    { id: 'q14', start: m2_6, end: m2_7 },
    { id: 'q15', start: m2_7, end: m3_intro },

    { id: 'q16', start: m3_1, end: m3_2 },
    { id: 'q17', start: m3_2, end: m3_3 },
    { id: 'q18', start: m3_3, end: m3_4 },
    { id: 'q19', start: m3_4, end: m3_5 },
    { id: 'q20', start: m3_5, end: m4_intro },

    { id: 'q21', start: m4_1, end: m4_2 },
    { id: 'q22', start: m4_2, end: m4_3 },
    { id: 'q23', start: m4_3, end: m4_4 },
    { id: 'q24', start: m4_4, end: m4_5 },
    { id: 'q25', start: m4_5, end: m4_6 },
    { id: 'q26', start: m4_6, end: m4_7 },
    { id: 'q27', start: m4_7, end: m4_8 },
    { id: 'q28', start: m4_8, end: trans.duration },
  ];

  console.log(`\nSlicing N4 2017-07 (${cuts.length} files)...`);
  cuts.forEach(c => {
    const dur = c.end - c.start;
    const outFile = path.join(outDir, `${c.id}.mp3`);
    const cmd = `${ffmpegPath} -y -ss ${c.start.toFixed(2)} -i "${src}" -t ${dur.toFixed(2)} -c:a libmp3lame -b:a 128k "${outFile}" -loglevel error`;
    execSync(cmd);
    const sz = fs.statSync(outFile).size;
    console.log(`  ✓ ${c.id}.mp3: ${c.start.toFixed(1)}s -> ${c.end.toFixed(1)}s (${dur.toFixed(1)}s, ${(sz/1024).toFixed(1)} KB)`);
  });
}

try {
  sliceN2();
  sliceN3();
  sliceN4();
  console.log('\n🎉 ALL BATCH 2 AUDIO SLICES COMPLETED!');
} catch (e) {
  console.error('Error slicing batch 2:', e);
}
