import { jlptPapers } from '../packages/shared/jlpt-papers';

let errors = 0;
for (const paper of jlptPapers) {
  for (const s of paper.sections) {
    for (const q of s.questions) {
      const match = q.options.filter((o) => o === q.answer);
      if (match.length !== 1) {
        console.error(`[${paper.id}] Question ${q.id}: Answer "${q.answer}" matches ${match.length} times in options ${JSON.stringify(q.options)}`);
        errors++;
      }
      if (new Set(q.options).size !== q.options.length) {
        console.error(`[${paper.id}] Question ${q.id}: Duplicate options in ${JSON.stringify(q.options)}`);
        errors++;
      }
      if (q.options.length < 3) {
        console.error(`[${paper.id}] Question ${q.id}: Less than 3 options: ${JSON.stringify(q.options)}`);
        errors++;
      }
      if (q.category === 'reading' && (!q.passage || q.passage.length < 50)) {
        console.error(`[${paper.id}] Question ${q.id}: Reading question passage too short (${q.passage?.length || 0})`);
        errors++;
      }
    }
  }
}

if (errors === 0) {
  console.log('✔ ALL PAPERS PASSED ALL QUESTION & OPTION VALIDATIONS!');
} else {
  console.log(`❌ Found ${errors} validation errors.`);
}
