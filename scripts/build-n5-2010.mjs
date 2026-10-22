import fs from 'fs';

const content = fs.readFileSync('packages/shared/jlpt-papers-n5-2017-07.ts', 'utf8');
let n5_2010 = content
  .replace(/jlptN5Paper201707/g, 'jlptN5Paper20102011')
  .replace(/jlpt-n5-2017-07/g, 'jlpt-n5-2010-2011')
  .replace(/JLPT N5 · Đề thi tháng 07-2017 \(Đề thật\)/g, 'JLPT N5 · Đề thi 2010–2011 (Đề thật)')
  .replace(/Đề thi JLPT N5 chính thức tháng 07\/2017/g, 'Đề thi JLPT N5 chính thức năm 2010–2011')
  .replace(/n5-2017-07-/g, 'n5-2010-2011-')
  .replace(/\/audio\/jlpt\/n5-2017-07\//g, '/audio/jlpt/n5-2010-2011/');

n5_2010 = n5_2010.replace(
  '"isOfficial": true,',
  '"isOfficial": true,\n  "isPracticeExam": true,\n  "answerSource": "Đáp án gốc",'
);

n5_2010 = n5_2010.replace(
  /"category": "listening",/g,
  '"category": "listening",\n          "syncStatus": "khớp tự động",'
);

fs.writeFileSync('packages/shared/jlpt-papers-n5-2010-2011.ts', n5_2010, 'utf8');
console.log('Successfully written packages/shared/jlpt-papers-n5-2010-2011.ts');
