import fs from 'node:fs';
import path from 'node:path';
import { PDFParse } from 'pdf-parse';

const BASE = 'C:\\Users\\Hoang Vuong\\Desktop\\Tiếng nhật\\đề và nghe';

async function scanAllPdfs() {
  const results = [];

  function walk(d) {
    for (const f of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, f.name);
      if (f.isDirectory()) {
        walk(full);
      } else if (f.name.endsWith('.pdf')) {
        results.push(full);
      }
    }
  }

  walk(path.join(BASE, 'N1'));
  walk(path.join(BASE, 'N2'));
  walk(path.join(BASE, 'N3'));
  walk(path.join(BASE, 'N4'));

  console.log(`Kiểm tra ${results.length} file PDF...\n`);

  for (const p of results) {
    try {
      const buf = fs.readFileSync(p);
      const parser = new PDFParse({ data: buf });
      const res = await parser.getText();
      const len = res.text.length;
      const isText = len > 2000;
      console.log(
        `${isText ? '📄 [TEXT ' + len + ' ký tự]' : '🖼️ [SCAN/IMG ' + len + ' ký tự]'} : ${p.replace(BASE, '')}`,
      );
    } catch (e) {
      console.log(`❌ [LỖI ĐỌC] : ${p.replace(BASE, '')} (${e.message})`);
    }
  }
}

scanAllPdfs();
