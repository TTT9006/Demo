import fs from 'fs';

const files = [
  'packages/shared/jlpt-papers-n5-2010-2011.ts',
  'packages/shared/jlpt-papers-n5-2012-12.ts',
  'packages/shared/jlpt-papers-n5-2013-07.ts',
  'packages/shared/jlpt-papers-n5-2018.ts',
  'packages/shared/jlpt-papers-n5-2021-12.ts',
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/"answerSource":/g, '"keySource":');
  content = content.replace(/answerSource:/g, 'keySource:');
  fs.writeFileSync(f, content, 'utf8');
  console.log('Updated', f);
}
