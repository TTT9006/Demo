import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { toHiragana } from 'wanakana';
import { searchTerms } from '../packages/shared/japanese-query';

const normalize = (s: string) =>
  toHiragana(s.normalize('NFKC').trim().toLowerCase(), { passRomaji: true });
const hash = (s: string) => createHash('sha256').update(s).digest('hex');

const dbPath = path.resolve('prisma/learning.db');
const db = new DatabaseSync(dbPath);
db.exec('PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=30000;');

// 1. Load AnhViet109K
console.log('1. Đang nạp từ điển Anh - Việt (103.000 từ)...');
const avContent = fs.readFileSync('data/anhviet109K.txt', 'utf8');
const enVi = new Map<string, string[]>();
const avEntries = avContent.split('\n@');
for (let i = 0; i < avEntries.length; i++) {
  const e = avEntries[i];
  const firstLineEnd = e.indexOf('\n');
  if (firstLineEnd === -1) continue;
  const header = (i === 0 ? e.replace(/^@/, '') : e).slice(0, firstLineEnd).trim();
  const word = header.split('/')[0].trim().toLowerCase();
  const defs: string[] = [];
  for (const line of e.slice(firstLineEnd).split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('-') && !trimmed.startsWith('--')) {
      let d = trimmed.slice(1).trim();
      if (d && !d.startsWith('(xem)')) {
        d = d.replace(/\(\([^)]*\)\)/g, '').replace(/=.*$/g, '').trim();
        if (d) defs.push(d);
      }
    }
  }
  if (defs.length && !enVi.has(word)) enVi.set(word, defs);
}
console.log(`✓ Đã nạp ${enVi.size} từ Anh - Việt.`);

// 2. Load Mazii
console.log('2. Đang nạp từ điển Mazii Nhật - Việt (266.000 mục)...');
const maziiMap = new Map<string, Array<{ term: string; reading: string; hanViet: string | null; senses: string[] }>>();

function parseMaziiDef(raw: string) {
  if (!raw) return { hanViet: null, senses: [] };
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
  let hanViet: string | null = null;
  const senses: string[] = [];
  for (const line of lines) {
    const numMatch = line.match(/^\d+\.\s*(.+)$/);
    if (numMatch) {
      let s = numMatch[1].trim();
      if (s.endsWith('.')) s = s.slice(0, -1).trim();
      senses.push(s);
    } else if (!hanViet && /^[A-ZÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ\s,]+$/.test(line) && line.length < 50) {
      hanViet = line;
    } else if (senses.length > 0) {
      senses[senses.length - 1] += '; ' + line;
    } else {
      senses.push(line);
    }
  }
  return { hanViet, senses };
}

const files = fs.readdirSync('data/temp_mazii').filter(f => f.startsWith('term_bank_'));
for (const file of files) {
  const content = JSON.parse(fs.readFileSync(path.join('data/temp_mazii', file), 'utf8'));
  for (const item of content) {
    const term = item[0] as string;
    const reading = item[1] as string;
    const { hanViet, senses } = parseMaziiDef(item[5][0] || '');
    if (!senses.length) continue;

    let list = maziiMap.get(term);
    if (!list) {
      list = [];
      maziiMap.set(term, list);
    }
    list.push({ term, reading, hanViet, senses });
  }
}
console.log(`✓ Đã nạp ${maziiMap.size} từ vựng Mazii.`);

// 3. Curated mappings for common Japanese conversational phrases / idioms
const curatedMap: Record<string, string[]> = {
  'おい': ['này', 'ơi (tiếng gọi)'],
  'おめでとうございます': ['xin chúc mừng', 'chúc mừng'],
  'おめでとう御座います': ['xin chúc mừng', 'chúc mừng'],
  'それとも': ['hoặc là', 'hay là'],
  'というわけ': ['có nghĩa là', 'vì thế mà', 'do đó'],
  'と言うわけ': ['có nghĩa là', 'vì thế mà', 'do đó'],
  'ニューヨーカー': ['người New York'],
  'ホームセキュリティ': ['hệ thống an ninh gia đình'],
  'しなやか': ['mềm dẻo', 'uyển chuyển', 'linh hoạt'],
  'いいえ': ['không', 'không có chi (đáp lại lời cảm ơn)'],
  'ぞ': ['trợ từ nhấn mạnh / quả quyết (cuối câu)'],
  '無くてはいけない': ['không thể thiếu', 'nhất định phải có', 'bắt buộc'],
  'なくてはいけない': ['không thể thiếu', 'nhất định phải có', 'bắt buộc'],
  '可能にする': ['làm cho có thể', 'cho phép', 'tạo điều kiện thực hiện'],
  'いらして': ['đến (kính ngữ)', 'đi (kính ngữ)', 'ở lại (kính ngữ)'],
  '禁止事項': ['hạng mục cấm', 'những điều bị cấm'],
  '実際は': ['trên thực tế', 'thực tế là'],
  'お手数ですが': ['xin lỗi vì đã làm phiền nhưng...', 'phiền bạn...'],
  '御手数ですが': ['xin lỗi vì đã làm phiền nhưng...', 'phiền bạn...'],
  'おはよう': ['chào buổi sáng'],
  'おはようございます': ['chào buổi sáng (lịch sự)'],
  'こんにちは': ['xin chào (ban ngày)'],
  'こんばんは': ['chào buổi tối'],
  'さようなら': ['tạm biệt'],
  'ありがとう': ['cảm ơn'],
  'ありがとうございます': ['xin cảm ơn (lịch sự)'],
  'どういたしまして': ['không có chi', 'không có gì'],
  'すみません': ['xin lỗi; xin thứ lỗi; làm ơn'],
  'ごめんなさい': ['xin lỗi; tha lỗi cho tôi'],
  'いただきます': ['mời dùng bữa (lời cảm ơn trước khi ăn)'],
  'ごちそうさまでした': ['cảm ơn vì bữa ăn (sau khi ăn xong)'],
  'いってきます': ['tôi đi đây (khi ra khỏi nhà)'],
  'いってらっしゃい': ['bạn đi nhé (chúc người đi đường may mắn)'],
  'ただいま': ['tôi đã về rồi'],
  'おかえりなさい': ['bạn đã về rồi đấy à'],
  'お疲れ様でした': ['bạn đã vất vả rồi', 'cảm ơn vì công việc hôm nay'],
  'よろしくおねがいします': ['rất mong nhận được sự giúp đỡ'],
};

// 4. Grammar translation helper
function translateGrammarGloss(en: string): string | null {
  const lower = en.trim().toLowerCase();
  if (lower.startsWith('counter for ')) {
    const what = lower.replace(/^counter for\s+/, '').trim();
    if (what.includes('long') || what.includes('thin') || what.includes('stick') || what.includes('bottle')) {
      return 'trợ từ đếm vật dài (bút, chai, cây...)';
    }
    if (what.includes('book') || what.includes('volume')) {
      return 'trợ từ đếm sách, vở, cuốn, quyển';
    }
    if (what.includes('flat') || what.includes('sheet') || what.includes('paper')) {
      return 'trợ từ đếm vật mỏng phẳng (tờ, bức, cái...)';
    }
    if (what.includes('small animal') || what.includes('dog') || what.includes('cat')) {
      return 'trợ từ đếm động vật nhỏ (con)';
    }
    if (what.includes('large animal')) {
      return 'trợ từ đếm động vật lớn (con)';
    }
    if (what.includes('bird') || what.includes('rabbit')) {
      return 'trợ từ đếm chim hoặc thỏ (con)';
    }
    if (what.includes('machine') || what.includes('car') || what.includes('vehicle')) {
      return 'trợ từ đếm máy móc, xe cộ (chiếc, cái)';
    }
    if (what.includes('people') || what.includes('person')) {
      return 'trợ từ đếm người';
    }
    if (what.includes('order') || what.includes('rank') || what.includes('occurrence') || what.includes('time')) {
      return 'trợ từ đếm lần, thứ tự, bậc';
    }
    if (what.includes('days') || what.includes('day')) {
      return 'trợ từ đếm số ngày';
    }
    if (what.includes('years') || what.includes('year')) {
      return 'trợ từ đếm số năm / tuổi';
    }
    if (what.includes('months') || what.includes('month')) {
      return 'trợ từ đếm số tháng';
    }
    return `trợ từ đếm (${what})`;
  }

  if (lower === 'onomatopoeic or mimetic word') return 'từ tượng thanh hoặc tượng hình';
  if (lower === 'humble language') return 'khiêm nhường ngữ';
  if (lower === 'honorific language') return 'tôn kính ngữ';
  if (lower === 'polite language') return 'thể lịch sự';

  return null;
}

// 5. English gloss translator
function translateEnglishGloss(en: string): string[] {
  const grammar = translateGrammarGloss(en);
  if (grammar) return [grammar];

  const cleaned = en.replace(/\([^)]*\)/g, '').replace(/^to\s+/, '').trim().toLowerCase();
  if (enVi.has(cleaned)) return enVi.get(cleaned)!;

  const words = cleaned.split(/[\s,;-]+/).filter(w => w.length > 2);
  const results: string[] = [];
  for (const w of words) {
    const d = enVi.get(w);
    if (d) results.push(...d.slice(0, 2));
  }
  return results;
}

// 6. Sense aligner
function alignSenseToVietnamese(
  enGlosses: string[],
  maziiSenses: string[],
  senseIndex: number
): { mainVi: string; subGlosses: string[] } {
  // Check for grammar gloss first
  for (const g of enGlosses) {
    const gr = translateGrammarGloss(g);
    if (gr) {
      return { mainVi: gr, subGlosses: enGlosses.map(() => gr) };
    }
  }

  // Get English gloss Vietnamese keywords
  const viKeywords = enGlosses.flatMap(translateEnglishGloss);
  const viTokens = new Set(
    viKeywords.flatMap(k => k.toLowerCase().split(/[\s,;.-]+/)).filter(w => w.length > 1)
  );

  let bestSense = '';
  let bestScore = -1;

  for (let i = 0; i < maziiSenses.length; i++) {
    const mSense = maziiSenses[i];
    const mTokens = mSense.toLowerCase().split(/[\s,;.-]+/);
    let score = 0;
    for (const t of mTokens) {
      if (viTokens.has(t)) score += 5;
    }
    if (i === senseIndex) score += 2;

    if (score > bestScore) {
      bestScore = score;
      bestSense = mSense;
    }
  }

  let finalMain = '';
  if (bestScore > 0) {
    finalMain = bestSense;
  } else if (maziiSenses[senseIndex]) {
    finalMain = maziiSenses[senseIndex];
  } else if (viKeywords.length) {
    finalMain = viKeywords[0];
  } else if (maziiSenses[0]) {
    finalMain = maziiSenses[0];
  } else {
    finalMain = enGlosses[0];
  }

  // Split into distinct sub-glosses if available
  const subClauses = finalMain.split(/;\s*/).map(s => s.trim()).filter(Boolean);
  const subGlosses: string[] = [];
  for (let j = 0; j < enGlosses.length; j++) {
    // If gloss j matches a specific English translation in viKeywords
    const gEn = enGlosses[j];
    const gGr = translateGrammarGloss(gEn);
    if (gGr) {
      subGlosses.push(gGr);
    } else if (subClauses[j]) {
      subGlosses.push(subClauses[j]);
    } else {
      subGlosses.push(subClauses[j % subClauses.length] || finalMain);
    }
  }

  return { mainVi: finalMain, subGlosses };
}

// 7. Main execution
export async function runFullDictionaryTranslation() {
  console.log('\n3. Bắt đầu đối chiếu và nạp bản dịch Việt ngữ chuẩn cho 22.644 từ thông dụng...');

  // Prepared statements for high performance SQLite batch operations
  const insertTranslation = db.prepare(`
    INSERT INTO DictionaryTranslation(
      id, glossId, targetLanguage, translatedText, status, provider, model, sourceHash, translatedAt, reviewedAt
    ) VALUES(?, ?, 'vi', ?, 'completed', 'mazii-curated', 'v1.0', ?, datetime('now'), datetime('now'))
    ON CONFLICT(glossId) DO UPDATE SET
      translatedText = excluded.translatedText,
      status = 'completed',
      provider = excluded.provider,
      model = excluded.model,
      sourceHash = excluded.sourceHash,
      translatedAt = excluded.translatedAt,
      reviewedAt = excluded.reviewedAt,
      errorMessage = null
  `);

  const deleteFts = db.prepare('DELETE FROM DictionaryFts WHERE entryId=?');
  const insertFts = db.prepare('INSERT INTO DictionaryFts(entryId,japanese,english,vietnamese) VALUES(?,?,?,?)');
  const deleteTri = db.prepare('DELETE FROM DictionaryTrigram WHERE entryId=?');
  const insertTri = db.prepare('INSERT INTO DictionaryTrigram(entryId,content) VALUES(?,?)');
  const deleteGram = db.prepare('DELETE FROM DictionaryGram WHERE entryId=?');
  const insertGram = db.prepare('INSERT OR IGNORE INTO DictionaryGram(token,entryId) VALUES(?,?)');
  const deleteTerms = db.prepare('DELETE FROM DictionarySearchTerm WHERE entryId=?');
  const insertTerm = db.prepare('INSERT OR IGNORE INTO DictionarySearchTerm(entryId,kind,term) VALUES(?,?,?)');

  const getEntryDetails = db.prepare(`
    SELECT DISTINCT e.id
    FROM DictionaryEntry e
    JOIN DictionarySense s ON s.entryId = e.id
    JOIN DictionaryGloss g ON g.senseId = s.id
    LEFT JOIN DictionaryTranslation t ON t.glossId = g.id
    WHERE e.common = 1 AND (t.id IS NULL OR t.status != 'completed')
  `);

  const commonEntries = getEntryDetails.all() as { id: string }[];
  console.log(`Tìm thấy ${commonEntries.length} từ thông dụng cần dịch.`);

  const start = Date.now();
  let totalTranslatedGlosses = 0;
  let processedEntries = 0;

  // Process in transactions of 500 entries for ACID safety & high speed
  const BATCH_SIZE = 500;
  for (let i = 0; i < commonEntries.length; i += BATCH_SIZE) {
    const batch = commonEntries.slice(i, i + BATCH_SIZE);
    const batchIds = batch.map((b) => b.id);
    const idPlaceholders = batchIds.map(() => '?').join(',');

    const kanjiRows = db.prepare(`SELECT entryId, text FROM DictionaryKanji WHERE entryId IN (${idPlaceholders})`).all(...batchIds) as any[];
    const readingRows = db.prepare(`SELECT entryId, text FROM DictionaryReading WHERE entryId IN (${idPlaceholders})`).all(...batchIds) as any[];
    const senseRows = db.prepare(`SELECT id, entryId, senseIndex FROM DictionarySense WHERE entryId IN (${idPlaceholders}) ORDER BY senseIndex`).all(...batchIds) as any[];

    const senseIds = senseRows.map((s) => s.id);
    const sensePlaceholders = senseIds.map(() => '?').join(',');
    const glossRows = senseIds.length > 0
      ? (db.prepare(`SELECT id, senseId, glossIndex, originalText, sourceHash FROM DictionaryGloss WHERE senseId IN (${sensePlaceholders}) ORDER BY glossIndex`).all(...senseIds) as any[])
      : [];

    const kanjiByEntry = new Map<string, string[]>();
    for (const r of kanjiRows) {
      let l = kanjiByEntry.get(r.entryId);
      if (!l) { l = []; kanjiByEntry.set(r.entryId, l); }
      l.push(r.text);
    }

    const readingByEntry = new Map<string, string[]>();
    for (const r of readingRows) {
      let l = readingByEntry.get(r.entryId);
      if (!l) { l = []; readingByEntry.set(r.entryId, l); }
      l.push(r.text);
    }

    const glossesBySense = new Map<string, any[]>();
    for (const g of glossRows) {
      let l = glossesBySense.get(g.senseId);
      if (!l) { l = []; glossesBySense.set(g.senseId, l); }
      l.push(g);
    }

    const sensesByEntry = new Map<string, any[]>();
    for (const s of senseRows) {
      let l = sensesByEntry.get(s.entryId);
      if (!l) { l = []; sensesByEntry.set(s.entryId, l); }
      l.push(s);
    }
    
    db.exec('BEGIN TRANSACTION;');
    try {
      for (const entry of batch) {
        const headwords = kanjiByEntry.get(entry.id) || [];
        const readings = readingByEntry.get(entry.id) || [];
        const senses = sensesByEntry.get(entry.id) || [];

        // 1. Find Mazii or curated entry
        let maziiSenses: string[] = [];
        let hanViet: string | null = null;

        for (const h of headwords) {
          if (curatedMap[h]) { maziiSenses = curatedMap[h]; break; }
          const matches = maziiMap.get(h);
          if (matches) {
            const best = matches.find(m => readings.includes(m.reading)) || matches[0];
            maziiSenses = best.senses;
            hanViet = best.hanViet;
            break;
          }
        }

        if (!maziiSenses.length) {
          for (const r of readings) {
            if (curatedMap[r]) { maziiSenses = curatedMap[r]; break; }
            const matches = maziiMap.get(r);
            if (matches) {
              maziiSenses = matches[0].senses;
              hanViet = matches[0].hanViet;
              break;
            }
          }
        }

        const viSensesList: string[] = [];
        const allEnGlosses: string[] = [];

        // 2. Align and translate each sense
        for (const s of senses) {
          const glosses = glossesBySense.get(s.id) || [];
          const enTexts = glosses.map((g: any) => g.originalText);
          allEnGlosses.push(...enTexts);

          const { mainVi, subGlosses } = alignSenseToVietnamese(enTexts, maziiSenses, s.senseIndex);
          viSensesList.push(mainVi);

          // Insert translation for each gloss
          for (let gIdx = 0; gIdx < glosses.length; gIdx++) {
            const g = glosses[gIdx];
            const textToSave = subGlosses[gIdx] || mainVi;
            const transId = `trans_${g.id}`;
            insertTranslation.run(transId, g.id, textToSave, g.sourceHash);
            totalTranslatedGlosses++;
          }
        }

        // 3. Rebuild search indexes for this entry
        const jaText = [...headwords, ...readings].join(' ');
        const enText = allEnGlosses.join(' ');
        const viText = viSensesList.join(' ');

        deleteFts.run(entry.id);
        insertFts.run(entry.id, jaText, enText, viText);

        deleteTri.run(entry.id);
        insertTri.run(entry.id, normalize(`${jaText} ${enText} ${viText}`));

        deleteGram.run(entry.id);
        const grams = new Set<string>();
        for (const form of [...headwords, ...readings]) {
          const norm = normalize(form);
          for (let k = 0; k < norm.length; k++) {
            grams.add(norm.slice(k, k + 1));
            if (k + 1 < norm.length) grams.add(norm.slice(k, k + 2));
          }
        }
        for (const token of grams) {
          insertGram.run(token, entry.id);
        }

        deleteTerms.run(entry.id);
        const terms = searchTerms(headwords, readings, [viText]);
        for (const t of terms) {
          insertTerm.run(entry.id, t.kind, t.term);
        }

        // Add Han-Viet to search terms if available
        if (hanViet) {
          const hvWords = hanViet.toLowerCase().split(/\s+/);
          for (const hv of hvWords) {
            if (hv.length > 1) insertTerm.run(entry.id, 'exact', hv);
          }
          insertTerm.run(entry.id, 'exact', hanViet.toLowerCase());
        }

        processedEntries++;
      }

      db.exec('COMMIT;');
      const elapsed = ((Date.now() - start) / 1000).toFixed(1);
      console.log(`Đã xử lý: ${processedEntries} / ${commonEntries.length} từ (${totalTranslatedGlosses} nghĩa, ${elapsed}s)...`);
    } catch (err) {
      db.exec('ROLLBACK;');
      console.error(`Lỗi tại lô từ ${i}:`, err);
      throw err;
    }
  }

  // Optimize and flush WAL
  try {
    db.exec('PRAGMA wal_checkpoint(TRUNCATE);');
    console.log('✓ Đã đồng bộ SQLite WAL.');
  } catch (e) {
    console.warn('Lỗi checkpoint:', e);
  }

  const totalElapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n🎉 HOÀN TẤT XỬ LÝ TOÀN BỘ TỪ ĐIỂN!`);
  console.log(`- Tổng số từ thông dụng đã xử lý: ${processedEntries}`);
  console.log(`- Tổng số định nghĩa tiếng Việt đã cập nhật: ${totalTranslatedGlosses}`);
  console.log(`- Thời gian thực thi: ${totalElapsed}s`);
}

if (process.argv[1] && process.argv[1].includes('translate-full-common')) {
  runFullDictionaryTranslation()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('Lỗi thực thi:', err);
      process.exit(1);
    });
}
