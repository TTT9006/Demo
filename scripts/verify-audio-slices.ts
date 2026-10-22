import fs from 'fs';
import path from 'path';

type SliceDef = {
  examId: string;
  examTitle: string;
  dir: string;
  expectedCount: number;
  segments: { id: string; start: number; end: number }[];
  syncStatus: 'chưa kiểm' | 'khớp tự động' | 'đã soát thủ công';
};

const sliceDefinitions: SliceDef[] = [
  {
    examId: 'jlpt-n5-2010-2011',
    examTitle: 'JLPT N5 2010-2011',
    dir: 'd:\\Demo\\public\\audio\\jlpt\\n5-2010-2011',
    expectedCount: 24,
    syncStatus: 'khớp tự động',
    segments: [
      { id: 'q01', start: 172.5, end: 235.0 },
      { id: 'q02', start: 235.0, end: 293.0 },
      { id: 'q03', start: 293.0, end: 346.5 },
      { id: 'q04', start: 346.5, end: 412.5 },
      { id: 'q05', start: 412.5, end: 486.5 },
      { id: 'q06', start: 486.5, end: 554.0 },
      { id: 'q07', start: 554.0, end: 618.0 },
      { id: 'q08', start: 757.5, end: 826.5 },
      { id: 'q09', start: 826.5, end: 899.5 },
      { id: 'q10', start: 899.5, end: 963.5 },
      { id: 'q11', start: 963.5, end: 1025.5 },
      { id: 'q12', start: 1025.5, end: 1091.5 },
      { id: 'q13', start: 1091.5, end: 1152.5 },
      { id: 'q14', start: 1259.5, end: 1292.5 },
      { id: 'q15', start: 1292.5, end: 1328.0 },
      { id: 'q16', start: 1328.0, end: 1361.0 },
      { id: 'q17', start: 1361.0, end: 1396.5 },
      { id: 'q18', start: 1396.5, end: 1435.0 },
      { id: 'q19', start: 1518.5, end: 1546.5 },
      { id: 'q20', start: 1546.5, end: 1576.5 },
      { id: 'q21', start: 1576.5, end: 1606.5 },
      { id: 'q22', start: 1606.5, end: 1637.5 },
      { id: 'q23', start: 1637.5, end: 1665.5 },
      { id: 'q24', start: 1665.5, end: 1700.0 },
    ],
  },
  {
    examId: 'jlpt-n5-2012-12',
    examTitle: 'JLPT N5 12/2012',
    dir: 'd:\\Demo\\public\\audio\\jlpt\\n5-2012-12',
    expectedCount: 24,
    syncStatus: 'khớp tự động',
    segments: [
      { id: 'q01', start: 214.5, end: 261.5 },
      { id: 'q02', start: 261.5, end: 318.5 },
      { id: 'q03', start: 318.5, end: 373.5 },
      { id: 'q04', start: 373.5, end: 430.5 },
      { id: 'q05', start: 430.5, end: 493.5 },
      { id: 'q06', start: 493.5, end: 558.0 },
      { id: 'q07', start: 558.0, end: 630.0 },
      { id: 'q08', start: 767.0, end: 823.0 },
      { id: 'q09', start: 823.0, end: 885.5 },
      { id: 'q10', start: 885.5, end: 947.5 },
      { id: 'q11', start: 947.5, end: 1010.5 },
      { id: 'q12', start: 1010.5, end: 1087.0 },
      { id: 'q13', start: 1087.0, end: 1160.0 },
      { id: 'q14', start: 1293.0, end: 1325.5 },
      { id: 'q15', start: 1325.5, end: 1360.0 },
      { id: 'q16', start: 1360.0, end: 1395.0 },
      { id: 'q17', start: 1395.0, end: 1432.5 },
      { id: 'q18', start: 1432.5, end: 1465.0 },
      { id: 'q19', start: 1549.5, end: 1580.5 },
      { id: 'q20', start: 1580.5, end: 1612.5 },
      { id: 'q21', start: 1612.5, end: 1642.0 },
      { id: 'q22', start: 1642.0, end: 1672.5 },
      { id: 'q23', start: 1672.5, end: 1704.5 },
      { id: 'q24', start: 1704.5, end: 1735.0 },
    ],
  },
  {
    examId: 'jlpt-n5-2013-07',
    examTitle: 'JLPT N5 07/2013',
    dir: 'd:\\Demo\\public\\audio\\jlpt\\n5-2013-07',
    expectedCount: 24,
    syncStatus: 'khớp tự động',
    segments: [
      { id: 'q01', start: 208.0, end: 257.5 },
      { id: 'q02', start: 269.0, end: 313.0 },
      { id: 'q03', start: 324.5, end: 375.2 },
      { id: 'q04', start: 386.8, end: 438.9 },
      { id: 'q05', start: 450.4, end: 501.9 },
      { id: 'q06', start: 513.3, end: 575.1 },
      { id: 'q07', start: 586.5, end: 655.6 },
      { id: 'q08', start: 794.0, end: 836.2 },
      { id: 'q09', start: 847.7, end: 900.2 },
      { id: 'q10', start: 911.7, end: 959.8 },
      { id: 'q11', start: 971.3, end: 1022.0 },
      { id: 'q12', start: 1033.5, end: 1086.2 },
      { id: 'q13', start: 1097.7, end: 1168.2 },
      { id: 'q14', start: 1320.0, end: 1339.6 },
      { id: 'q15', start: 1349.1, end: 1379.0 },
      { id: 'q16', start: 1388.5, end: 1415.1 },
      { id: 'q17', start: 1424.5, end: 1450.1 },
      { id: 'q18', start: 1459.6, end: 1488.0 },
      { id: 'q19', start: 1583.8, end: 1602.2 },
      { id: 'q20', start: 1609.7, end: 1631.3 },
      { id: 'q21', start: 1638.8, end: 1662.7 },
      { id: 'q22', start: 1670.1, end: 1694.8 },
      { id: 'q23', start: 1702.3, end: 1726.2 },
      { id: 'q24', start: 1733.7, end: 1761.5 },
    ],
  },
  {
    examId: 'jlpt-n5-2018',
    examTitle: 'JLPT N5 2018',
    dir: 'd:\\Demo\\public\\audio\\jlpt\\n5-2018',
    expectedCount: 24,
    syncStatus: 'khớp tự động',
    segments: [
      { id: 'q01', start: 159.5, end: 220.5 },
      { id: 'q02', start: 220.5, end: 280.5 },
      { id: 'q03', start: 280.5, end: 343.0 },
      { id: 'q04', start: 343.0, end: 413.5 },
      { id: 'q05', start: 413.5, end: 501.5 },
      { id: 'q06', start: 501.5, end: 564.0 },
      { id: 'q07', start: 564.0, end: 635.0 },
      { id: 'q08', start: 757.0, end: 812.0 },
      { id: 'q09', start: 812.0, end: 869.5 },
      { id: 'q10', start: 869.5, end: 930.0 },
      { id: 'q11', start: 930.0, end: 1007.5 },
      { id: 'q12', start: 1007.5, end: 1106.0 },
      { id: 'q13', start: 1106.0, end: 1175.0 },
      { id: 'q14', start: 1267.0, end: 1310.5 },
      { id: 'q15', start: 1310.5, end: 1346.5 },
      { id: 'q16', start: 1346.5, end: 1367.5 },
      { id: 'q17', start: 1367.5, end: 1402.5 },
      { id: 'q18', start: 1402.5, end: 1450.0 },
      { id: 'q19', start: 1530.0, end: 1567.5 },
      { id: 'q20', start: 1567.5, end: 1596.5 },
      { id: 'q21', start: 1596.5, end: 1616.0 },
      { id: 'q22', start: 1616.0, end: 1650.0 },
      { id: 'q23', start: 1650.0, end: 1682.5 },
      { id: 'q24', start: 1682.5, end: 1715.0 },
    ],
  },
  {
    examId: 'jlpt-n5-2021-12',
    examTitle: 'JLPT N5 12/2021',
    dir: 'd:\\Demo\\public\\audio\\jlpt\\n5-2021-12',
    expectedCount: 24,
    syncStatus: 'khớp tự động',
    segments: [
      { id: 'q01', start: 206.5, end: 251.5 },
      { id: 'q02', start: 263.0, end: 317.8 },
      { id: 'q03', start: 329.5, end: 380.6 },
      { id: 'q04', start: 392.0, end: 441.3 },
      { id: 'q05', start: 452.8, end: 506.4 },
      { id: 'q06', start: 518.0, end: 583.5 },
      { id: 'q07', start: 595.0, end: 653.8 },
      { id: 'q08', start: 799.0, end: 847.1 },
      { id: 'q09', start: 858.5, end: 902.8 },
      { id: 'q10', start: 914.2, end: 958.3 },
      { id: 'q11', start: 969.8, end: 1020.6 },
      { id: 'q12', start: 1032.0, end: 1080.6 },
      { id: 'q13', start: 1092.0, end: 1154.1 },
      { id: 'q14', start: 1306.0, end: 1331.6 },
      { id: 'q15', start: 1341.2, end: 1363.9 },
      { id: 'q16', start: 1373.4, end: 1395.1 },
      { id: 'q17', start: 1404.5, end: 1433.1 },
      { id: 'q18', start: 1442.5, end: 1468.3 },
      { id: 'q19', start: 1564.0, end: 1581.0 },
      { id: 'q20', start: 1585.5, end: 1607.5 },
      { id: 'q21', start: 1612.0, end: 1634.5 },
      { id: 'q22', start: 1639.0, end: 1662.3 },
      { id: 'q23', start: 1669.8, end: 1695.1 },
      { id: 'q24', start: 1702.6, end: 1729.7 },
    ],
  },
];

type VerificationResult = {
  examId: string;
  examTitle: string;
  syncStatus: string;
  totalSegments: number;
  expectedCount: number;
  hasCorrectCount: boolean;
  hasEmptySegments: boolean;
  hasOverlaps: boolean;
  isChronological: boolean;
  details: {
    id: string;
    start: number;
    end: number;
    duration: number;
    sizeBytes: number;
    status: 'ok' | 'suspicious' | 'error';
    note?: string;
  }[];
  suspiciousCount: number;
};

const results: VerificationResult[] = [];
const flaggedForReview: any[] = [];

console.log('--- BẮT ĐẦU KIỂM TRA ĐỒNG BỘ ÂM THANH TỰ ĐỘNG ---');

for (const def of sliceDefinitions) {
  let hasEmpty = false;
  let hasOverlap = false;
  let isChronological = true;

  const filesInDir = fs.existsSync(def.dir) ? fs.readdirSync(def.dir).filter(f => f.endsWith('.mp3')) : [];
  const correctCount = filesInDir.length === def.expectedCount && def.segments.length === def.expectedCount;

  const details: VerificationResult['details'] = [];

  for (let i = 0; i < def.segments.length; i++) {
    const seg = def.segments[i];
    const filePath = path.join(def.dir, `${seg.id}.mp3`);
    let size = 0;
    if (fs.existsSync(filePath)) {
      size = fs.statSync(filePath).size;
    }

    const duration = +(seg.end - seg.start).toFixed(1);
    let status: 'ok' | 'suspicious' | 'error' = 'ok';
    const notes: string[] = [];

    if (size === 0) {
      hasEmpty = true;
      status = 'error';
      notes.push('File rỗng hoặc không tồn tại (0 bytes)');
    } else if (size < 50000) {
      status = 'suspicious';
      notes.push(`Dung lượng nhỏ bất thường (${(size / 1024).toFixed(1)} KB)`);
    }

    if (duration <= 1.0) {
      hasEmpty = true;
      status = 'error';
      notes.push('Thời lượng quá ngắn <= 1.0s');
    } else if (duration < 15.0) {
      // Short questions: check if Mondai 3 or 4 which are naturally short, else suspicious
      if (!['q14', 'q15', 'q16', 'q17', 'q18', 'q19', 'q20', 'q21', 'q22', 'q23', 'q24'].includes(seg.id)) {
        status = 'suspicious';
        notes.push(`Thời lượng câu Mondai 1/2 ngắn bất thường (${duration}s)`);
      }
    } else if (duration > 115.0) {
      status = 'suspicious';
      notes.push(`Thời lượng câu quá dài (${duration}s)`);
    }

    // Check overlap with next question
    if (i < def.segments.length - 1) {
      const nextSeg = def.segments[i + 1];
      if (seg.end > nextSeg.start) {
        hasOverlap = true;
        status = 'error';
        notes.push(`Chồng lấn với câu tiếp theo (kết thúc ${seg.end}s > bắt đầu ${nextSeg.start}s)`);
      }
      if (nextSeg.start < seg.start) {
        isChronological = false;
        status = 'error';
        notes.push('Thứ tự thời gian bị đảo ngược');
      }
    }

    if (status !== 'ok') {
      flaggedForReview.push({
        exam: def.examTitle,
        question: seg.id,
        range: `${seg.start}s - ${seg.end}s (${duration}s)`,
        sizeKb: (size / 1024).toFixed(1),
        status,
        issues: notes.join('; '),
      });
    }

    details.push({
      id: seg.id,
      start: seg.start,
      end: seg.end,
      duration,
      sizeBytes: size,
      status,
      note: notes.join('; '),
    });
  }

  const suspiciousCount = details.filter(d => d.status !== 'ok').length;
  results.push({
    examId: def.examId,
    examTitle: def.examTitle,
    syncStatus: def.syncStatus,
    totalSegments: def.segments.length,
    expectedCount: def.expectedCount,
    hasCorrectCount: correctCount,
    hasEmptySegments: hasEmpty,
    hasOverlaps: hasOverlap,
    isChronological,
    details,
    suspiciousCount,
  });

  console.log(`[${def.examTitle}]`);
  console.log(` - Số đoạn: ${filesInDir.length}/${def.expectedCount} ${correctCount ? '✔ ĐỦ' : '❌ THIẾU'}`);
  console.log(` - Chồng lấn: ${hasOverlap ? '❌ CÓ CHỒNG LẤN' : '✔ KHÔNG CHỒNG LẤN'}`);
  console.log(` - Đoạn rỗng: ${hasEmpty ? '❌ CÓ ĐOẠN RỖNG' : '✔ KHÔNG CÓ'}`);
  console.log(` - Thứ tự: ${isChronological ? '✔ CHÍNH XÁC' : '❌ SAI THỨ TỰ'}`);
  console.log(` - Cần người soát lại: ${suspiciousCount} câu`);
}

// Write flagged-audio-review.json
const jsonPath = 'd:\\Demo\\docs\\flagged-audio-review.json';
fs.writeFileSync(jsonPath, JSON.stringify({ results, flaggedForReview }, null, 2), 'utf8');

// Write flagged-audio-review.md
let md = `# Báo cáo đối chiếu và kiểm tra đồng bộ Audio — 23/10/2026\n\n`;
md += `Báo cáo kiểm tra tự động 4 tiêu chí chất lượng cho từng đoạn cắt audio theo yêu cầu:\n`;
md += `1. **Số đoạn = số câu hỏi** (24 câu mỗi đề N5: 7 câu Mondai 1, 6 câu Mondai 2, 5 câu Mondai 3, 6 câu Mondai 4).\n`;
md += `2. **Không chồng lấn thời gian** (no overlapping timestamps).\n`;
md += `3. **Không đoạn rỗng** (dung lượng > 0, thời lượng hợp lệ).\n`;
md += `4. **Thứ tự tăng dần chuẩn xác** theo dòng thời gian bài nghe.\n\n`;

md += `## 1. Bảng tổng hợp các đề thi N5\n\n`;
md += `| Đề thi | Số đoạn | Không chồng lấn | Không đoạn rỗng | Thứ tự | Trạng thái đồng bộ | Cần người soát |\n`;
md += `|---|:---:|:---:|:---:|:---:|:---:|:---:|\n`;
for (const r of results) {
  md += `| ${r.examTitle} | ${r.totalSegments}/${r.expectedCount} (${r.hasCorrectCount ? 'Đạt' : 'Lỗi'}) | ${r.hasOverlaps ? '❌ Chồng lấn' : '✔ Hợp lệ'} | ${r.hasEmptySegments ? '❌ Có rỗng' : '✔ Hợp lệ'} | ${r.isChronological ? '✔ Đúng' : '❌ Sai'} | \`${r.syncStatus}\` | ${r.suspiciousCount} câu |\n`;
}

md += `\n> **Ghi chú về quy ước trạng thái:** Mọi đoạn audio cắt tự động chỉ được đặt là \`khớp tự động\`. Tuyệt đối không tự đặt là \`đã soát thủ công\` khi chưa có xác nhận từ người dùng.\n\n`;

md += `## 2. Danh sách các câu nghi ngờ cần người nghe lại (${flaggedForReview.length} mục)\n\n`;
if (flaggedForReview.length === 0) {
  md += `*Không có câu nào phát hiện lỗi nghiêm trọng hoặc chồng lấn. Tất cả các mốc cắt đều nằm trong ngưỡng an toàn.*\n`;
} else {
  md += `| Đề thi | Câu hỏi | Mốc thời gian | Dung lượng | Vấn đề ghi nhận |\n`;
  md += `|---|:---:|:---:|:---:|---|\n`;
  for (const item of flaggedForReview) {
    md += `| ${item.exam} | ${item.question} | ${item.range} | ${item.sizeKb} KB | ${item.issues} |\n`;
  }
}

const mdPath = 'd:\\Demo\\docs\\flagged-audio-review.md';
fs.writeFileSync(mdPath, md, 'utf8');

console.log(`\nĐã xuất kết quả kiểm tra vào:`);
console.log(` - ${mdPath}`);
console.log(` - ${jsonPath}`);
