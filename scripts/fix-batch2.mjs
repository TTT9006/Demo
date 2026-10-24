import fs from 'node:fs';

// 1. Fix options in N4, N3, N2
function fixOptions() {
  const n4Path = 'packages/shared/jlpt-papers-n4-2017-07.ts';
  let n4 = fs.readFileSync(n4Path, 'utf-8');
  n4 = n4.replace(
    "options: ['りょしん', 'りょうしん', 'りょしん', 'りょうしん']",
    "options: ['りょしん', 'りょうしん', 'りょじん', 'りょうじん']"
  );
  n4 = n4.replace(
    "options: ['たてもの', 'たてもん', 'たてぶつ', 'たてぶつ']",
    "options: ['たてもの', 'たてもん', 'たてぶつ', 'たちぶつ']"
  );
  n4 = n4.replace(
    "options: ['軽い', '重い', '重い', '強い']",
    "options: ['軽い', '重い', '遅い', '強い']"
  );
  fs.writeFileSync(n4Path, n4, 'utf-8');
  console.log('Fixed options in N4 2017-07');

  const n3Path = 'packages/shared/jlpt-papers-n3-2022-07.ts';
  let n3 = fs.readFileSync(n3Path, 'utf-8');
  n3 = n3.replace(
    "options: ['絵面', '図面', '絵画', '図面']",
    "options: ['絵面', '図画', '絵画', '図面']"
  );
  fs.writeFileSync(n3Path, n3, 'utf-8');
  console.log('Fixed options in N3 2022-07');

  const n2Path = 'packages/shared/jlpt-papers-n2-2022-07.ts';
  let n2 = fs.readFileSync(n2Path, 'utf-8');
  n2 = n2.replace(
    "options: ['点型的', '典形的', '点型的', '典型的']",
    "options: ['点型的', '典形的', '典型性', '典型的']"
  );
  fs.writeFileSync(n2Path, n2, 'utf-8');
  console.log('Fixed options in N2 2022-07');
}

// 2. Propagate reading passages in AST/object form
// Since these are exported TS files, let's load the paper modules, propagate passages, and rewrite them.
async function fixReadingPassages() {
  const papers = [
    { file: 'packages/shared/jlpt-papers-n4-2017-07.ts', exportName: 'jlptN4Paper201707' },
    { file: 'packages/shared/jlpt-papers-n3-2022-07.ts', exportName: 'jlptN3Paper202207' },
    { file: 'packages/shared/jlpt-papers-n2-2022-07.ts', exportName: 'jlptN2Paper202207' },
  ];

  for (const p of papers) {
    const mod = await import('../' + p.file);
    const paperObj = mod[p.exportName];

    let currentPassage = '';
    let currentGroup = '';

    for (const sec of paperObj.sections) {
      for (const q of sec.questions) {
        if (q.category === 'reading') {
          if (q.passage && q.passage.length > 50) {
            currentPassage = q.passage;
            currentGroup = q.group;
          } else if (currentPassage && q.group === currentGroup) {
            q.passage = currentPassage;
          }
        }
      }
    }

    const code = `import type { JlptPaper } from './jlpt-types';\n\nexport const ${p.exportName}: JlptPaper = ${JSON.stringify(paperObj, null, 2)};\n`;
    fs.writeFileSync(p.file, code, 'utf-8');
    console.log(`Propagated passages in ${p.file}`);
  }
}

fixOptions();
await fixReadingPassages();
console.log('Done!');
