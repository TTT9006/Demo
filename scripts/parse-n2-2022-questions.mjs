import fs from 'node:fs';

const raw = fs.readFileSync('scripts/n2-2022-07-raw.txt', 'utf-8');
const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

console.log('Total lines:', lines.length);

const mondais = [];
let currentMondai = null;

lines.forEach((l, idx) => {
  if (l.startsWith('問題') || l.startsWith('言語知識') || l.startsWith('読解') || l.startsWith('文法')) {
    console.log(`[Line ${idx + 1}] ${l}`);
  }
});
