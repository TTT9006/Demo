import fs from 'node:fs';

function findTimestamps(transcriptPath, examName) {
  const data = JSON.parse(fs.readFileSync(transcriptPath, 'utf-8'));
  const segments = data.segments;
  console.log(`\n================== ${examName} (${data.duration.toFixed(1)}s) ==================`);
  
  // Find markers
  segments.forEach((s) => {
    const t = s.text;
    if (
      t.includes('問題') ||
      t.includes('番') ||
      t.includes('例') ||
      t.includes('質問')
    ) {
      console.log(`[${s.start.toFixed(2)} -> ${s.end.toFixed(2)}] ${t}`);
    }
  });
}

findTimestamps('scripts/n2-2022-07-transcript.json', 'N2 2022-07');
findTimestamps('scripts/n3-2022-07-transcript.json', 'N3 2022-07');
findTimestamps('scripts/n4-2017-07-transcript.json', 'N4 2017-07');
