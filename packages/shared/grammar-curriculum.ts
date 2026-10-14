import type { Exercise, LessonContent } from './content';
import { beginnerRows } from './grammar-beginner';
import { intermediateRows } from './grammar-intermediate';
import { alignReading } from './annotation';

// Explicit word boundaries for sentences whose kana anchors admit more than one
// alignment. These readings are authored together with the examples.
const exampleReadings: Record<string, string> = {
  来週: 'らいしゅう',
  友達: 'ともだち',
  美術館: 'びじゅつかん',
  行きます: 'いきます',
  兄: 'あに',
  新しい: 'あたらしい',
  辞書: 'じしょ',
  週: 'しゅう',
  二回: 'にかい',
  泳ぎます: 'およぎます',
  昨日: 'きのう',
  試験: 'しけん',
  難しかった: 'むずかしかった',
  寝る: 'ねる',
  前: 'まえ',
  日記: 'にっき',
  書きます: 'かきます',
  映画: 'えいが',
  面白かった: 'おもしろかった',
  話している: 'はなしている',
  人: 'ひと',
  今日: 'きょう',
  早く: 'はやく',
  寝た: 'ねた',
  夕方: 'ゆうがた',
  雨: 'あめ',
  降る: 'ふる',
  弟: 'おとうと',
  食べられました: 'たべられました',
  母: 'はは',
  子供: 'こども',
  野菜: 'やさい',
  食べさせました: 'たべさせました',
  帰らせて: 'かえらせて',
};
function explicitReadings(text: string, reading: string) {
  if (alignReading(text, reading).some((s) => s.reading)) return undefined;
  return Object.fromEntries(
    Object.entries(exampleReadings).filter(([word]) => text.includes(word)),
  );
}

export type CurriculumRow = readonly [
  title: string,
  pattern: string,
  formation: string,
  explanation: string,
  note: string,
  cloze: string,
  kana: string,
  translation: string,
  ordered: string,
  orderedKana: string,
  orderedTranslation: string,
];
const sourceUrls = {
  N5: 'https://www.vnjpclub.com/ngu-phap-minna-so-cap-1-n5/',
  N4: 'https://www.vnjpclub.com/ngu-phap-minna-so-cap-2-n4/',
  N3: 'https://www.vnjpclub.com/ngu-phap-n3/',
  N2: 'https://www.vnjpclub.com/ngu-phap-n2/',
};
const entries = [
  ...beginnerRows.map((row, i) => ({
    row,
    level: i < 25 ? ('N5' as const) : ('N4' as const),
    chapter: i + 1,
    id: `mnn-${String(i + 1).padStart(2, '0')}`,
    position: 100 + i,
  })),
  ...intermediateRows.map(({ level, row }, i) => ({
    row,
    level,
    chapter: undefined,
    id: `bridge-${level.toLowerCase()}-${String(i + 1).padStart(2, '0')}`,
    position: 200 + i,
  })),
];
export const curriculumLessons = entries.map(({ row, level, chapter, id, position }, index) => {
  const [
    title,
    pattern,
    formation,
    explanation,
    note,
    cloze,
    kana,
    vi,
    ordered,
    orderedKana,
    orderedVi,
  ] = row;
  const target = cloze.match(/\[([^\]]+)\]/)?.[1];
  if (!target) throw new Error(`Missing cloze target in ${id}`);
  const ja = cloze.replace(/\[|\]/g, '');
  const chunks = ordered.split('／');
  const second = chunks.join('');
  const alternatives = [
    orderedVi,
    ...entries
      .filter((e) => e.row[10] !== orderedVi)
      .slice((index * 3) % (entries.length - 4), ((index * 3) % (entries.length - 4)) + 3)
      .map((e) => e.row[10]),
  ];
  const offset = index % alternatives.length;
  const exercises: Exercise[] = [
    {
      id: `${id}-fill`,
      type: 'fill',
      prompt: `Điền theo mẫu ${pattern}: ${cloze.replace(/\[[^\]]+\]/, '___')} (${vi})`,
      answer: target,
      explanation: `${formation}. ${explanation}`,
    },
    {
      id: `${id}-meaning`,
      type: 'choice',
      prompt: `Chọn nghĩa phù hợp: ${second}`,
      readings: explicitReadings(second, orderedKana) || { [second]: orderedKana },
      options: [...alternatives.slice(offset), ...alternatives.slice(0, offset)],
      answer: orderedVi,
      explanation: `${orderedVi} ${explanation}`,
    },
    {
      id: `${id}-order`,
      type: 'order',
      prompt: `Sắp xếp các phần để diễn đạt: ${orderedVi}`,
      options: [...chunks.slice(1), chunks[0]],
      answer: second,
      explanation: `${formation}. ${note}`,
    },
  ];
  const content: LessonContent = {
    meaning: title,
    formation,
    explanation,
    notes: note,
    mistake: `Đối chiếu dạng nối trước khi dùng: ${formation}. ${note}`,
    related: entries
      .filter((e) => e.level === level && e.id !== id && Math.abs(e.position - position) <= 1)
      .map((e) => e.id),
    examples: [
      { ja, kana, vi, readings: explicitReadings(ja, kana) },
      {
        ja: second,
        kana: orderedKana,
        vi: orderedVi,
        readings: explicitReadings(second, orderedKana),
      },
    ],
    curriculum: {
      track: chapter ? `Minna sơ cấp ${chapter <= 25 ? 'I' : 'II'}` : `Bổ sung trung cấp ${level}`,
      chapter,
      topic: title,
      sourceUrl: sourceUrls[level],
      sourceLabel: 'Danh mục tham khảo VNJP Club',
      original: true,
    },
  };
  return { id, title, pattern, level, position, content, exercises };
});
