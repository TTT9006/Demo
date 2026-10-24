import fs from 'node:fs';
import { PDFParse } from 'pdf-parse';

async function parseN2() {
  const pdfPath = 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N2\\ĐỀ JLPT N2\\ĐỀ JLPT N2\\Đề 3\\N2 T7-2022 Final Version.pdf';
  const scriptPath = 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe\\N2\\ĐỀ JLPT N2\\ĐỀ JLPT N2\\Đề 2\\Script Nghe N2 T7-2022　Yuuki Bui 220711.pdf';

  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: buf });
  const res = await parser.getText();

  fs.writeFileSync('scripts/n2-2022-07-raw.txt', res.text, 'utf-8');
  console.log('Saved n2-2022-07-raw.txt, length:', res.text.length);

  const scriptBuf = fs.readFileSync(scriptPath);
  const scriptParser = new PDFParse({ data: scriptBuf });
  const scriptRes = await scriptParser.getText();

  fs.writeFileSync('scripts/n2-2022-07-script-raw.txt', scriptRes.text, 'utf-8');
  console.log('Saved n2-2022-07-script-raw.txt, length:', scriptRes.text.length);
}

parseN2();
