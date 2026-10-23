import type {
  JlptLevel,
  SkillType,
  SyncStatus,
  SkillExerciseItem,
  SkillCategoryView,
  JlptQuestion,
} from './jlpt-types';
import { words, context, paraphrases, usage } from './jlpt-vocabulary';
import { grammarChoices, sentenceParts, textGrammar } from './jlpt-grammar';
import { reading } from './jlpt-reading';
import { listeningItems } from './jlpt-listening';

export interface SkillExerciseSet {
  id: string;
  title: string;
  level: JlptLevel;
  skill: SkillType;
  book?: string;
  subCategory?: string;
  cd?: number;
  track?: number;
  description: string;
  syncStatus: SyncStatus;
  questions: (JlptQuestion & { term?: string; reading?: string; meaning?: string })[];
}

export const skillCategories: SkillCategoryView[] = [
  {
    skill: 'listening',
    title: 'Luyện Nghe hiểu (聴解)',
    levels: [
      {
        level: 'N5',
        books: ['Goukaku Dekiru N5 (CD1 & CD2)', 'Kho đề thi thật N5 (Audio cắt chuẩn câu hỏi)'],
        count: 48,
        description: 'Luyện nghe hiểu chủ đề, nhiệm vụ, diễn đạt bằng lời nói và phản xạ nhanh.',
      },
      {
        level: 'N4',
        books: ['Goukaku Dekiru N4 (CD1 & CD2)'],
        count: 36,
        description: 'Luyện nghe nắm bắt hành động tiếp theo, nghe chi tiết và phản xạ tình huống.',
      },
      {
        level: 'N3',
        books: ['Speed Master Choukai N3 (CD1 & CD2)'],
        count: 40,
        description:
          'Luyện nghe nắm bắt đại ý, nghe hiểu đề tài, tóm tắt ý chính và nghe phản xạ nhanh.',
      },
      {
        level: 'N2',
        books: ['Shin Kanzen Master Choukai N2 (CD1 & CD2)'],
        count: 38,
        description:
          'Luyện khả năng nắm ý chính, tổng hợp quan điểm người nói, và kỹ năng phản xạ nhanh.',
      },
    ],
  },
  {
    skill: 'reading',
    title: 'Luyện Đọc hiểu (読解)',
    levels: [
      {
        level: 'N5',
        count: 24,
        description: 'Đoạn văn ngắn, thư từ, ghi chú và bảng biểu tìm kiếm thông tin.',
      },
      {
        level: 'N4',
        count: 28,
        description:
          'Đoạn văn vừa, bài văn trải nghiệm, thông báo trường học và tìm kiếm thông tin.',
      },
      {
        level: 'N3',
        books: ['Tuyển tập 26 đề thi N3'],
        count: 32,
        description:
          'Đoạn văn trung bình 350 chữ, bài đọc giải thích, tìm kiếm thông tin theo tiêu chí.',
      },
      {
        level: 'N2',
        books: ['Tuyển tập 40 đề thi N2'],
        count: 35,
        description:
          'Đoạn văn bình luận, nghị luận xã hội, so sánh đa chiều và đọc tìm kiếm thông tin phức hợp.',
      },
    ],
  },
  {
    skill: 'vocabulary',
    title: 'Luyện Từ vựng & Chữ Hán (文字・語彙)',
    levels: [
      {
        level: 'N5',
        count: 40,
        description:
          'Cách đọc Kanji, Cách viết Kanji, Từ trong ngữ cảnh, Diễn đạt tương đương (Hỗ trợ đưa câu sai vào Flashcard SM-2).',
      },
      {
        level: 'N4',
        count: 45,
        description:
          'Đọc Kanji, Viết Kanji, Chọn từ đúng ngữ cảnh, Từ đồng nghĩa (Hỗ trợ đưa câu sai vào Flashcard SM-2).',
      },
      {
        level: 'N3',
        count: 50,
        description: 'Kanji nâng cao, Cấu tạo từ ghép, Từ đồng nghĩa, Cách dùng từ trong văn cảnh.',
      },
      {
        level: 'N2',
        count: 55,
        description:
          'Từ vựng trừu tượng, tiền tố/hậu tố, quán ngữ và sắc thái từ dùng trong thực tế.',
      },
    ],
  },
  {
    skill: 'grammar',
    title: 'Luyện Ngữ pháp (文法)',
    levels: [
      {
        level: 'N5',
        count: 35,
        description:
          'Chọn mẫu ngữ pháp cơ bản, sắp xếp câu ngôi sao ★, ngữ pháp trong đoạn văn ngắn.',
      },
      {
        level: 'N4',
        count: 40,
        description:
          'Thể bị động, sai khiến, cho nhận, điều kiện, sắp xếp câu ngôi sao ★ tự biên soạn.',
      },
      {
        level: 'N3',
        count: 45,
        description:
          'Mẫu câu biểu đạt thái độ, dự đoán, đối chiếu, văn phong trang trọng và sắp xếp câu sao ★.',
      },
      {
        level: 'N2',
        count: 50,
        description:
          'Ngữ pháp trung thượng cấp, sắc thái tinh tế, văn bản lập luận, câu hỏi sao ★ biên soạn chuẩn JLPT.',
      },
    ],
  },
];

// Helper to build skill exercises per skill and level
export function getSkillExercises(skill: SkillType, level: JlptLevel): SkillExerciseSet[] {
  if (skill === 'vocabulary') {
    return buildVocabularySkillSets(level);
  }
  if (skill === 'grammar') {
    return buildGrammarSkillSets(level);
  }
  if (skill === 'reading') {
    return buildReadingSkillSets(level);
  }
  if (skill === 'listening') {
    return buildListeningSkillSets(level);
  }
  return [];
}

// 1. VOCABULARY BUILDER (Includes term, reading, meaning for SM-2 flashcard integration)
function buildVocabularySkillSets(level: JlptLevel): SkillExerciseSet[] {
  const bank = words[level];
  const kanjiReadings: JlptQuestion[] = bank.slice(0, 10).map(([word, kana], i) => ({
    id: `vocab-${level}-read-${i + 1}`,
    type: 'choice' as const,
    category: 'vocabulary' as const,
    group: 'Cách đọc Kanji (漢字読み)',
    prompt: `「${word}」の読み方はどれですか。`,
    options: shuffleOptions([
      kana,
      ...bank
        .filter((_, j) => j !== i)
        .slice(0, 3)
        .map((r) => r[1]),
    ]),
    answer: kana,
    explanation: `「${word}」 đọc là 「${kana}」.`,
    annotationDisabled: true as const,
    term: word,
    reading: kana,
    meaning: `Từ vựng JLPT ${level}: ${word} (${kana})`,
  }));

  const kanjiWritings: JlptQuestion[] = bank.slice(10, 20).map(([word, kana]) => ({
    id: `vocab-${level}-write-${word}`,
    type: 'choice' as const,
    category: 'vocabulary' as const,
    group: 'Cách viết Kanji (表記)',
    prompt: `「${kana}」を漢字で書くと、どれですか。`,
    options: shuffleOptions([
      word,
      ...bank
        .filter((r) => r[0] !== word)
        .slice(-3)
        .map((r) => r[0]),
    ]),
    answer: word,
    explanation: `「${kana}」 được viết bằng chữ Hán là 「${word}」.`,
    annotationDisabled: true as const,
    term: word,
    reading: kana,
    meaning: `Cách viết chữ Hán của ${kana}: ${word}`,
  }));

  const contextItems: JlptQuestion[] = context[level].slice(0, 10).map((row, i) => ({
    id: `vocab-${level}-context-${i + 1}`,
    type: 'choice' as const,
    category: 'vocabulary' as const,
    group: 'Từ trong ngữ cảnh (文脈規定)',
    prompt: row[0],
    options: shuffleOptions(row.slice(1)),
    answer: row[1],
    explanation: `Trong ngữ cảnh này dùng 「${row[1]}」.`,
    annotationDisabled: true as const,
    term: row[1],
    reading: row[1],
    meaning: `Từ điền ngữ cảnh: ${row[1]}`,
  }));

  const paraphraseItems: JlptQuestion[] = paraphrases[level].slice(0, 8).map((row, i) => ({
    id: `vocab-${level}-para-${i + 1}`,
    type: 'choice' as const,
    category: 'vocabulary' as const,
    group: 'Diễn đạt tương đương (言い換え類義)',
    prompt: `意味が最も近い文を選んでください。\n${row[0]}`,
    options: shuffleOptions(row.slice(1)),
    answer: row[1],
    explanation: `Câu diễn đạt tương đương: 「${row[1]}」.`,
    annotationDisabled: true as const,
    term: row[0],
    reading: '',
    meaning: `Diễn đạt tương đương: ${row[1]}`,
  }));

  return [
    {
      id: `set-vocab-${level}-01`,
      title: `Luyện từ vựng ${level} · Chữ Hán & Cách đọc`,
      level,
      skill: 'vocabulary',
      description: 'Chuyên đề nhận diện mặt chữ Kanji và luyện cách đọc chuẩn xác (Kun/On).',
      syncStatus: 'khớp tự động',
      questions: [...kanjiReadings, ...kanjiWritings],
    },
    {
      id: `set-vocab-${level}-02`,
      title: `Luyện từ vựng ${level} · Ngữ cảnh & Diễn đạt tương đương`,
      level,
      skill: 'vocabulary',
      description: 'Chuyên đề điền từ theo văn cảnh tự nhiên và tìm câu có ý nghĩa tương đương.',
      syncStatus: 'khớp tự động',
      questions: [...contextItems, ...paraphraseItems],
    },
  ];
}

// 2. GRAMMAR BUILDER (Original authoring, no copyright infringement)
function buildGrammarSkillSets(level: JlptLevel): SkillExerciseSet[] {
  const choices: JlptQuestion[] = grammarChoices[level].map((row, i) => ({
    id: `grammar-${level}-choice-${i + 1}`,
    type: 'choice' as const,
    category: 'grammar' as const,
    group: 'Chọn mẫu ngữ pháp (文の文法 1)',
    prompt: row[0],
    options: shuffleOptions(row.slice(1)),
    answer: row[1],
    explanation: `Mẫu ngữ pháp phù hợp: 「${row[1]}」. Câu hoàn chỉnh: ${row[0].replace('（　）', row[1])}`,
    annotationDisabled: true as const,
  }));

  const stars: JlptQuestion[] = sentenceParts[level].map((chunks, i) => ({
    id: `grammar-${level}-star-${i + 1}`,
    type: 'choice' as const,
    category: 'grammar' as const,
    group: 'Sắp xếp câu tìm sao ★ (文の文法 2)',
    prompt: '正しい文になるように並べたとき、★に入るものを選んでください。\n＿＿　＿＿　★　＿＿',
    options: shuffleOptions([chunks[2], chunks[0], chunks[3], chunks[1]]),
    answer: chunks[2],
    explanation: `Thứ tự hoàn chỉnh: 【${chunks.join('】【')}】 -> Vị trí ★ là: 「${chunks[2]}」.`,
    annotationDisabled: true as const,
  }));

  const textPassage = textGrammar[level];
  const textItems: JlptQuestion[] = textPassage.items.map((row, i) => ({
    id: `grammar-${level}-text-${i + 1}`,
    type: 'choice' as const,
    category: 'grammar' as const,
    group: 'Ngữ pháp văn bản (文章の文法)',
    prompt: `文章の（${row[0]}）に入るものを選んでください。`,
    passage: textPassage.passage,
    options: shuffleOptions(row.slice(1)),
    answer: row[1],
    explanation: `Tại vị trí (${row[0]}) sử dụng cấu trúc: 「${row[1]}」.`,
    annotationDisabled: true as const,
  }));

  return [
    {
      id: `set-grammar-${level}-01`,
      title: `Luyện ngữ pháp ${level} · Chọn mẫu câu & Sắp xếp câu sao ★`,
      level,
      skill: 'grammar',
      description:
        'Luyện phân biệt trợ từ, liên từ và cấu trúc ngữ pháp trọng điểm kèm dạng bài sắp xếp ★.',
      syncStatus: 'khớp tự động',
      questions: [...choices, ...stars],
    },
    {
      id: `set-grammar-${level}-02`,
      title: `Luyện ngữ pháp ${level} · Ngữ pháp văn bản`,
      level,
      skill: 'grammar',
      description: 'Luyện điền từ nối, đại từ chỉ thị và mạch logic xuyên suốt trong đoạn văn dài.',
      syncStatus: 'khớp tự động',
      questions: textItems,
    },
  ];
}

// 3. READING BUILDER
function buildReadingSkillSets(level: JlptLevel): SkillExerciseSet[] {
  const bundles = reading[level];
  const sets: SkillExerciseSet[] = [];

  bundles.forEach((b, idx) => {
    const questions: JlptQuestion[] = b.items.map((row, i) => ({
      id: `reading-${level}-${idx}-${i + 1}`,
      type: 'choice' as const,
      category: 'reading' as const,
      group: b.group,
      prompt: row[0],
      passage: b.passage,
      options: shuffleOptions(row.slice(1)),
      answer: row[1],
      explanation: `Căn cứ vào nội dung và suy luận trong đoạn văn: Đáp án là 「${row[1]}」.`,
      annotationDisabled: true as const,
    }));

    sets.push({
      id: `set-reading-${level}-${idx + 1}`,
      title: `Luyện đọc hiểu ${level} · ${b.group} (${idx + 1})`,
      level,
      skill: 'reading',
      subCategory: b.group,
      description: `Bài đọc hiểu ${b.group.toLowerCase()}, rèn luyện kỹ năng nắm bắt mạch văn và định vị thông tin nhanh.`,
      syncStatus: 'khớp tự động',
      questions,
    });
  });

  return sets;
}

// 4. LISTENING BUILDER (Shin Kanzen N2, Speed Master N3, Goukaku Dekiru N4-N5 & Authentic slices)
function buildListeningSkillSets(level: JlptLevel): SkillExerciseSet[] {
  const items = listeningItems(level);

  // Group listening items into sets by book / subCategory
  const bookName =
    level === 'N2'
      ? 'Shin Kanzen Master Choukai N2'
      : level === 'N3'
        ? 'Speed Master Choukai N3'
        : 'Goukaku Dekiru Choukai N4-N5';

  const sets: SkillExerciseSet[] = [
    {
      id: `set-listening-${level}-01`,
      title: `Luyện nghe ${level} · ${bookName} (Bài luyện kỹ năng)`,
      level,
      skill: 'listening',
      book: bookName,
      subCategory: 'Hiểu chủ đề & Điểm cốt lõi',
      description: `Rèn luyện kỹ năng nghe hiểu nhiệm vụ và điểm quan trọng. Cho phép nghe lại nhiều lần, tùy chỉnh tốc độ phát và hiện script sau khi nộp.`,
      syncStatus: level === 'N5' ? 'khớp tự động' : 'chưa kiểm',
      questions: items.slice(0, Math.ceil(items.length / 2)).map((it, i) => ({
        id: `listen-${level}-01-${i + 1}`,
        type: 'choice' as const,
        category: 'listening' as const,
        group: it.group,
        prompt: it.prompt,
        options: shuffleOptions(it.choices),
        answer: it.choices[0],
        transcript: it.script,
        audioUrl: `/api/tts?text=${encodeURIComponent(it.script)}`,
        audioOptions: it.audioOptions,
        explanation: `Nội dung nghe dẫn đến lựa chọn đáp án: 「${it.choices[0]}」.`,
        annotationDisabled: true as const,
        syncStatus: (level === 'N5' ? 'khớp tự động' : 'chưa kiểm') as SyncStatus,
      })),
    },
    {
      id: `set-listening-${level}-02`,
      title: `Luyện nghe ${level} · ${bookName} (Phản xạ & Diễn đạt)`,
      level,
      skill: 'listening',
      book: bookName,
      subCategory: 'Diễn đạt bằng lời & Phản xạ nhanh',
      description: `Rèn luyện kỹ năng phản xạ đối đáp trong giao tiếp hàng ngày và hiểu mục đích phát ngôn.`,
      syncStatus: level === 'N5' ? 'khớp tự động' : 'chưa kiểm',
      questions: items.slice(Math.ceil(items.length / 2)).map((it, i) => ({
        id: `listen-${level}-02-${i + 1}`,
        type: 'choice' as const,
        category: 'listening' as const,
        group: it.group,
        prompt: it.prompt,
        options: shuffleOptions(it.choices),
        answer: it.choices[0],
        transcript: it.script,
        audioUrl: `/api/tts?text=${encodeURIComponent(it.script)}`,
        audioOptions: it.audioOptions,
        explanation: `Lời đáp tự nhiên và phù hợp nhất trong văn cảnh: 「${it.choices[0]}」.`,
        annotationDisabled: true as const,
        syncStatus: (level === 'N5' ? 'khớp tự động' : 'chưa kiểm') as SyncStatus,
      })),
    },
  ];

  return sets;
}

// Utility: Deterministic shuffle for options so correct answer isn't always first
function shuffleOptions(arr: string[]): string[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = (i * 7 + 3) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
