import fs from 'fs';

for (const file of [
  'packages/shared/jlpt-papers-n5-2013-07.ts',
  'packages/shared/jlpt-papers-n5-2021-12.ts',
]) {
  let content = fs.readFileSync(file, 'utf8');
  // replace category: "listening" with syncStatus: "khớp tự động"
  content = content.replace(
    /"category": "listening",/g,
    '"category": "listening",\n          "syncStatus": "khớp tự động",'
  );
  content = content.replace(
    /category: 'listening',/g,
    "category: 'listening',\n          syncStatus: 'khớp tự động',"
  );
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated syncStatus in', file);
}
