import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { searchDictionary } from '../apps/api/src/dictionary';
import { db } from '../apps/api/src/db';
const groups:[string,string[]][]=[['学校',['学校','がっこう','ガッコウ','gakkou','gakkō']],['日本',['日本','にほん','nihon','nippon']],['東京',['東京','とうきょう','toukyou','tōkyō']],['食べる',['食べる','たべる','taberu']],['勉強',['勉強','べんきょう','benkyou']],['こんにちは',['こんにちは','konnichiwa']],['スーパー',['スーパー','suupaa','sūpā']],['今日',['今日','きょう','kyou']],['学生',['学生','がくせい','gakusei']]];
const queries = [
  '学校',
  'がっこう',
  'ガッコウ',
  'gakkou',
  'gakkō',
  '日本',
  'にほん',
  'nihon',
  'nippon',
  '東京',
  'とうきょう',
  'toukyou',
  'tōkyō',
  '食べる',
  'たべる',
  'taberu',
  '勉強',
  'べんきょう',
  'benkyou',
  'こんにちは',
  'konnichiwa',
  'スーパー',
  'suupaa',
  'sūpā',
  '今日',
  'きょう',
  'kyou',
  '学生',
  'がくせい',
  'gakusei',
  'nước',
  'sách',
  'trường học',
  'ăn',
  'uống',
];
const results = [];
try {
  for (const query of queries) {
    const ms = [];
    let total = 0,
      heads: string[] = [];
    const expected=groups.find(([,inputs])=>inputs.includes(query))?.[0];
    let foundExpected:boolean|undefined;
    for (let i = 0; i < 3; i++) {
      const t = performance.now();
      const r = await searchDictionary(query);
      ms.push(performance.now() - t);
      total = r.total;
      heads = r.items.slice(0, 3).map((e) => e.kanji[0]?.text || e.readings[0]?.text);
      if(expected)foundExpected=r.items.some(e=>[...e.kanji,...e.readings].some(f=>f.text===expected));
    }
    results.push({ query, total, heads, expected,foundExpected,ms });
  }
} finally {
  await db.$disconnect();
}
mkdirSync('test-results/upgrade', { recursive: true });
let before: unknown;
try {
  before = JSON.parse(readFileSync('.recovery/upgrade-20261013/baseline.json', 'utf8')).benchmark;
} catch {
  /* optional baseline */
}
writeFileSync(
  'test-results/upgrade/search-benchmark.json',
  JSON.stringify({ before, after: results }, null, 2),
);
console.log(JSON.stringify(results, null, 2));
