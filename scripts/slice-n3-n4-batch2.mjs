import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ffmpegPath = 'D:\\Demo\\node_modules\\@ffmpeg-installer\\win32-x64\\ffmpeg.exe';

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

// 2. Slicing N3 2022-07
function sliceN3() {
  const trans = JSON.parse(fs.readFileSync('scripts/n3-2022-07-transcript.json', 'utf-8'));
  const src = trans.source;
  const outDir = path.resolve('public/audio/jlpt/n3-2022-07');
  ensureDir(outDir);

  const cuts = [
    // Mondai 1 (6 Qs)
    { id: 'q01', start: 120.0, end: 193.0 },
    { id: 'q02', start: 193.0, end: 289.0 },
    { id: 'q03', start: 289.0, end: 393.0 },
    { id: 'q04', start: 393.0, end: 473.0 },
    { id: 'q05', start: 473.0, end: 568.0 },
    { id: 'q06', start: 568.0, end: 678.0 },

    // Mondai 2 (6 Qs)
    { id: 'q07', start: 719.0, end: 834.0 },
    { id: 'q08', start: 834.0, end: 962.0 },
    { id: 'q09', start: 962.0, end: 1065.0 },
    { id: 'q10', start: 1065.0, end: 1176.0 },
    { id: 'q11', start: 1176.0, end: 1274.0 },
    { id: 'q12', start: 1274.0, end: 1423.0 },

    // Mondai 3 (3 Qs)
    { id: 'q13', start: 1475.0, end: 1580.0 },
    { id: 'q14', start: 1580.0, end: 1682.0 },
    { id: 'q15', start: 1682.0, end: 1773.0 },

    // Mondai 4 (4 Qs)
    { id: 'q16', start: 1795.0, end: 1846.0 },
    { id: 'q17', start: 1846.0, end: 1887.0 },
    { id: 'q18', start: 1887.0, end: 1934.0 },
    { id: 'q19', start: 1934.0, end: 1982.0 },

    // Mondai 5 (9 Qs)
    { id: 'q20', start: 2016.0, end: 2050.0 },
    { id: 'q21', start: 2050.0, end: 2086.0 },
    { id: 'q22', start: 2086.0, end: 2125.0 },
    { id: 'q23', start: 2125.0, end: 2160.0 },
    { id: 'q24', start: 2160.0, end: 2194.0 },
    { id: 'q25', start: 2194.0, end: 2230.0 },
    { id: 'q26', start: 2230.0, end: 2265.0 },
    { id: 'q27', start: 2265.0, end: 2300.0 },
    { id: 'q28', start: 2300.0, end: trans.duration },
  ];

  console.log(`\nSlicing N3 2022-07 (${cuts.length} files)...`);
  cuts.forEach((c) => {
    const dur = c.end - c.start;
    const outFile = path.join(outDir, `${c.id}.mp3`);
    const cmd = `${ffmpegPath} -y -ss ${c.start.toFixed(2)} -i "${src}" -t ${dur.toFixed(2)} -c:a libmp3lame -b:a 128k "${outFile}" -loglevel error`;
    execSync(cmd);
    const sz = fs.statSync(outFile).size;
    console.log(
      `  ✓ ${c.id}.mp3: ${c.start.toFixed(1)}s -> ${c.end.toFixed(1)}s (${dur.toFixed(1)}s, ${(sz / 1024).toFixed(1)} KB)`,
    );
  });
}

// 3. Slicing N4 2017-07
function sliceN4() {
  const trans = JSON.parse(fs.readFileSync('scripts/n4-2017-07-transcript.json', 'utf-8'));
  const src = trans.source;
  const outDir = path.resolve('public/audio/jlpt/n4-2017-07');
  ensureDir(outDir);

  const cuts = [
    // Mondai 1 (8 Qs)
    { id: 'q01', start: 161.0, end: 227.0 },
    { id: 'q02', start: 227.0, end: 302.0 },
    { id: 'q03', start: 302.0, end: 366.0 },
    { id: 'q04', start: 366.0, end: 442.0 },
    { id: 'q05', start: 442.0, end: 517.0 },
    { id: 'q06', start: 517.0, end: 585.0 },
    { id: 'q07', start: 585.0, end: 640.0 },
    { id: 'q08', start: 640.0, end: 735.0 },

    // Mondai 2 (7 Qs)
    { id: 'q09', start: 872.0, end: 961.0 },
    { id: 'q10', start: 961.0, end: 1064.0 },
    { id: 'q11', start: 1064.0, end: 1151.0 },
    { id: 'q12', start: 1151.0, end: 1227.0 },
    { id: 'q13', start: 1227.0, end: 1339.0 },
    { id: 'q14', start: 1339.0, end: 1440.0 },
    { id: 'q15', start: 1440.0, end: 1537.0 },

    // Mondai 3 (5 Qs)
    { id: 'q16', start: 1623.0, end: 1660.0 },
    { id: 'q17', start: 1660.0, end: 1699.0 },
    { id: 'q18', start: 1699.0, end: 1739.0 },
    { id: 'q19', start: 1739.0, end: 1777.0 },
    { id: 'q20', start: 1777.0, end: 1815.0 },

    // Mondai 4 (8 Qs)
    { id: 'q21', start: 1902.0, end: 1930.0 },
    { id: 'q22', start: 1930.0, end: 1961.0 },
    { id: 'q23', start: 1961.0, end: 1993.0 },
    { id: 'q24', start: 1993.0, end: 2025.0 },
    { id: 'q25', start: 2025.0, end: 2056.0 },
    { id: 'q26', start: 2056.0, end: 2087.0 },
    { id: 'q27', start: 2087.0, end: 2117.0 },
    { id: 'q28', start: 2117.0, end: trans.duration },
  ];

  console.log(`\nSlicing N4 2017-07 (${cuts.length} files)...`);
  cuts.forEach((c) => {
    const dur = c.end - c.start;
    const outFile = path.join(outDir, `${c.id}.mp3`);
    const cmd = `${ffmpegPath} -y -ss ${c.start.toFixed(2)} -i "${src}" -t ${dur.toFixed(2)} -c:a libmp3lame -b:a 128k "${outFile}" -loglevel error`;
    execSync(cmd);
    const sz = fs.statSync(outFile).size;
    console.log(
      `  ✓ ${c.id}.mp3: ${c.start.toFixed(1)}s -> ${c.end.toFixed(1)}s (${dur.toFixed(1)}s, ${(sz / 1024).toFixed(1)} KB)`,
    );
  });
}

try {
  sliceN3();
  sliceN4();
  console.log('\n🎉 N3 AND N4 AUDIO SLICING COMPLETED!');
} catch (e) {
  console.error('Error slicing batch 2:', e);
}
