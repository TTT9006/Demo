import { createReadStream } from 'node:fs';
import { writeFile, mkdir } from 'node:fs/promises';
import parserStream from 'stream-json';
import pick from 'stream-json/filters/pick.js';
import streamArray from 'stream-json/streamers/stream-array.js';
import type { SourceWord } from '../apps/api/src/dictionary';
const wanted = new Set([
  '食べる',
  '飲む',
  '学校',
  '学生',
  '先生',
  '勉強',
  '日本語',
  '日本',
  '本',
  '水',
  '猫',
  '犬',
  '山',
  '川',
  '桜',
  '花',
  '友達',
  '今日',
  '明日',
  '昨日',
  '家',
  '電車',
  '駅',
  '時間',
  '読む',
  '書く',
  '聞く',
  '見る',
  '行く',
  '来る',
  'ありがとう',
  'こんにちは',
  '朝',
  '夜',
  '大きい',
  '小さい',
  '新しい',
  '古い',
  '美しい',
  '楽しい',
]);
const words: SourceWord[] = [];
const stream = createReadStream('data/raw/jmdict.json')
  .pipe(parserStream())
  .pipe(pick.asStream({ filter: 'words' }))
  .pipe(streamArray.asStream());
for await (const item of stream) {
  const word = (item as { value: SourceWord }).value;
  const matched = [...word.kanji.slice(0, 1), ...word.kana].find((f) => wanted.has(f.text));
  if (matched) {
    words.push(word);
    wanted.delete(matched.text);
  }
  if (!wanted.size) {
    stream.destroy();
    break;
  }
}
await mkdir('data/processed', { recursive: true });
await writeFile(
  'data/processed/fixture.json',
  JSON.stringify(
    {
      version: '3.6.2+20261005200550',
      source: 'https://github.com/scriptin/jmdict-simplified/releases/tag/3.6.2%2B20261005200550',
      license: 'CC-BY-SA-4.0',
      words,
    },
    null,
    2,
  ),
);
console.log({ entries: words.length, missing: [...wanted] });
