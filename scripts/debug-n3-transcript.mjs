import fs from 'node:fs';

function inspect(jsonPath) {
  const trans = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  console.log(`=== ${jsonPath} ===`);
  trans.segments.forEach((s) => {
    if (s.text.includes('問題') || s.text.includes('番') || s.text.includes('例')) {
      console.log(`[${s.start.toFixed(1)}s -> ${s.end.toFixed(1)}s] ${s.text}`);
    }
  });
}

inspect('scripts/n3-2022-07-transcript.json');
