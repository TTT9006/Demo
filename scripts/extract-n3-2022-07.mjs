import fs from 'node:fs';
import { PDFParse } from 'pdf-parse';

async function parseN3() {
  const pdfPath = 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N3\\n3\\n3\\7-2022\\N3 T7-2022 Final Version.pdf';
  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: buf });
  const res = await parser.getText();

  fs.writeFileSync('scripts/n3-2022-07-raw.txt', res.text, 'utf-8');
  console.log('Saved n3-2022-07-raw.txt, length:', res.text.length);
}

parseN3();
