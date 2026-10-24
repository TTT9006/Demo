import fs from 'node:fs';
import { PDFParse } from 'pdf-parse';

async function parseN4() {
  const pdfPath = 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N4\\n4\\n4\\7-2017\\N4-2017年-7月.pdf';
  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: buf });
  const res = await parser.getText();

  fs.writeFileSync('scripts/n4-2017-07-raw.txt', res.text, 'utf-8');
  console.log('Saved n4-2017-07-raw.txt, length:', res.text.length);
}

parseN4();
