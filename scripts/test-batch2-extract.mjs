import fs from 'node:fs';
import { PDFParse } from 'pdf-parse';

const targets = [
  {
    name: 'N4 12-2021 Exam',
    path: 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N4\\n4\\n4\\12-2021\\Đề N4 T12-2021 Mark.pdf',
  },
  {
    name: 'N4 12-2021 Script',
    path: 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N4\\n4\\n4\\12-2021\\Script Nghe N4 T12-2021 Mark.pdf',
  },
  {
    name: 'N3 12-2023 Exam',
    path: 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N3\\n3\\n3\\12-2023\\ĐỀ THI JLPT N3 12.2023.pdf',
  },
  {
    name: 'N2 07-2022 Exam',
    path: 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N2\\ĐỀ JLPT N2\\ĐỀ JLPT N2\\Đề 3\\N2 T7-2022 Final Version.pdf',
  },
  {
    name: 'N1 12-2022 Exam',
    path: 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N1\\N1\\ĐỀ JLPT N1\\Đề 2\\N1 T12-2022 Final Version Yuuki Bùi [MARK].pdf',
  },
];

for (const t of targets) {
  console.log(`\n=================== ${t.name} ===================`);
  if (!fs.existsSync(t.path)) {
    console.log('FILE NOT FOUND:', t.path);
    continue;
  }
  const buf = fs.readFileSync(t.path);
  const parser = new PDFParse({ data: buf });
  const res = await parser.getText();
  console.log('Text length:', res.text.length);
  const lines = res.text.split('\n').map((l) => l.trim()).filter(Boolean);
  console.log('Line count:', lines.length);
  console.log('First 10 lines:');
  lines.slice(0, 10).forEach((l, i) => console.log(`  [${i + 1}] ${l}`));

  // Check for answer key at the end
  const tail = lines.slice(-30);
  console.log('Tail sample (last 10 lines):');
  tail.slice(-10).forEach((l, i) => console.log(`  [-${10 - i}] ${l}`));
}
