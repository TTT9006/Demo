import { curriculumLessons } from './grammar-curriculum';
import { jlptGrammarLessons } from './jlpt-grammar-additions';

export type Exercise = {
  acceptedAnswers?: string[];
  annotationDisabled?: boolean;
  readings?: Record<string, string>;
  id: string;
  type: 'choice' | 'fill' | 'order' | 'complete' | 'match' | 'matching';
  prompt: string;
  options?: string[];
  rows?: string[];
  answer: string;
  explanation: string;
};

export type LessonContent = {
  curriculum?: { track: string; chapter?: number; topic: string; sourceUrl: string; sourceLabel: string; original: boolean };
  meaning: string;
  formation: string;
  explanation: string;
  notes: string;
  mistake: string;
  related: string[];
  examples: { ja: string; kana: string; vi: string; readings?: Record<string, string> }[];
};

export const lessons: {
  id: string;
  pattern: string;
  title: string;
  level: string;
  position: number;
  content: LessonContent;
  exercises: Exercise[];
}[] = [
  {
    id: 'desu',
    pattern: '〜は〜です',
    title: 'Giới thiệu bản thân',
    level: 'N5',
    position: 1,
    content: {
      meaning: 'A là B',
      formation: 'Danh từ A + は + danh từ B + です',
      explanation:
        'Dùng để giới thiệu hoặc mô tả một người, một vật. は đánh dấu chủ đề; です tạo sắc thái lịch sự.',
      notes: 'Trợ từ は được đọc là わ. Có thể lược bỏ chủ đề khi người nghe đã biết.',
      mistake: 'Không dùng です ngay sau động từ ở thể từ điển.',
      related: ['janai', 'ka'],
      examples: [
        { ja: '私は学生です。', kana: 'わたしはがくせいです。', vi: 'Tôi là học sinh.' },
        {
          ja: 'これは日本の本です。',
          kana: 'これはにほんのほんです。',
          vi: 'Đây là sách của Nhật.',
        },
      ],
    },
    exercises: [
      {
        id: 'desu-1',
        type: 'choice',
        prompt: '私は学生 ___。',
        options: ['です', 'ます', 'を', 'に'],
        answer: 'です',
        explanation: 'Danh từ 学生 kết hợp với です để tạo câu lịch sự.',
      },
      {
        id: 'desu-2',
        type: 'fill',
        prompt: 'Điền trợ từ: 私 ___ ベトナム人です。',
        answer: 'は',
        explanation: 'は đánh dấu chủ đề 私.',
      },
      {
        id: 'desu-3',
        type: 'order',
        prompt: 'Sắp xếp: Tôi là giáo viên.',
        options: ['です', '先生', 'は', '私'],
        answer: '私は先生です',
        explanation: 'Trật tự: chủ đề + は + danh từ + です.',
      },
    ],
  },
  {
    id: 'janai',
    pattern: '〜ではありません',
    title: 'Phủ định với danh từ',
    level: 'N5',
    position: 2,
    content: {
      meaning: 'Không phải là…',
      formation: 'Danh từ + ではありません',
      explanation:
        'Dùng để phủ định câu có vị ngữ là danh từ. Trong hội thoại, じゃありません cũng được dùng.',
      notes: 'ではありません là cách nói lịch sự. じゃない là cách nói thân mật.',
      mistake: 'Không dùng ではありません để phủ định động từ.',
      related: ['desu', 'ka'],
      examples: [
        {
          ja: '私は先生ではありません。',
          kana: 'わたしはせんせいではありません。',
          vi: 'Tôi không phải giáo viên.',
        },
        {
          ja: 'あれは私の傘ではありません。',
          kana: 'あれはわたしのかさではありません。',
          vi: 'Đó không phải là ô của tôi.',
        },
      ],
    },
    exercises: [
      {
        id: 'janai-1',
        type: 'choice',
        prompt: '私は医者 ___。',
        options: ['ではありません', 'あります', 'を', 'に'],
        answer: 'ではありません',
        explanation: 'Phủ định của です là ではありません.',
      },
    ],
  },
  {
    id: 'ka',
    pattern: '〜ですか',
    title: 'Câu hỏi xác nhận',
    level: 'N5',
    position: 3,
    content: {
      meaning: '…có phải không?',
      formation: 'Câu + か',
      explanation:
        'Thêm trợ từ か vào cuối câu để tạo câu hỏi. Không cần đổi trật tự từ trong câu.',
      notes: 'Khi nói, lên giọng ở cuối câu. Trong văn viết lịch sự thường dùng dấu chấm thay vì ?.',
      mistake: 'Không thêm か sau các trợ từ chỉ quan hệ sở hữu ở giữa câu.',
      related: ['desu', 'janai'],
      examples: [
        {
          ja: 'あなたは田中さんですか。',
          kana: 'あなたはたなかさんですか。',
          vi: 'Bạn có phải là anh Tanaka không?',
        },
        { ja: 'これはペンですか。', kana: 'これはぺんですか。', vi: 'Đây là cái bút phải không?' },
      ],
    },
    exercises: [
      {
        id: 'ka-1',
        type: 'choice',
        prompt: 'これは何 ___。',
        options: ['ですか', 'ますか', 'ですね', 'でした'],
        answer: 'ですか',
        explanation: '何 kết hợp với ですか để tạo câu hỏi "cái gì?".',
      },
    ],
  },
  {
    id: 'no',
    pattern: '〜の〜',
    title: 'Trợ từ sở hữu và bổ nghĩa',
    level: 'N5',
    position: 4,
    content: {
      meaning: 'Của / thuộc về…',
      formation: 'Danh từ 1 + の + Danh từ 2',
      explanation:
        'Trợ từ の dùng để nối hai danh từ, danh từ đứng trước bổ nghĩa cho danh từ đứng sau (sở hữu, xuất xứ, chủng loại).',
      notes: 'Có thể dùng の thay thế cho danh từ phía sau khi đã rõ danh từ đó là gì.',
      mistake: 'Không dùng の trực tiếp sau tính từ đuôi い.',
      related: ['desu'],
      examples: [
        {
          ja: '私の本はどこですか。',
          kana: 'わたしのほんはどこですか。',
          vi: 'Cuốn sách của tôi ở đâu?',
        },
        {
          ja: '日本の車を買いました。',
          kana: 'にほんのくるまをかいました。',
          vi: 'Tôi đã mua xe ô tô của Nhật.',
        },
      ],
    },
    exercises: [
      {
        id: 'no-1',
        type: 'fill',
        prompt: '私 ___ 傘は青いです。',
        answer: 'の',
        explanation: 'Trợ từ の biểu thị sở hữu giữa 私 và 傘.',
      },
    ],
  },
  {
    id: 'wo',
    pattern: '〜を〜ます',
    title: 'Tân ngữ trực tiếp',
    level: 'N5',
    position: 5,
    content: {
      meaning: 'Làm cái gì đó',
      formation: 'Danh từ + を + ngoại động từ',
      explanation: 'Trợ từ を đánh dấu tân ngữ trực tiếp chịu tác động của hành động.',
      notes: 'Trợ từ を được phát âm giống お.',
      mistake: 'Không dùng を với nội động từ như 行きます, 走ります khi không có ý nghĩa xuyên qua.',
      related: ['ni', 'de'],
      examples: [
        { ja: 'ご飯を食べます。', kana: 'ごはんをたべます。', vi: 'Tôi ăn cơm.' },
        { ja: '水を飲みます。', kana: 'みずをのみます。', vi: 'Tôi uống nước.' },
      ],
    },
    exercises: [
      {
        id: 'wo-1',
        type: 'choice',
        prompt: 'りんご ___ 食べます。',
        options: ['を', 'が', 'で', 'に'],
        answer: 'を',
        explanation: 'りんご là tân ngữ trực tiếp của 食べます nên dùng を.',
      },
    ],
  },
  {
    id: 'ni',
    pattern: '〜に行きます',
    title: 'Điểm đến và thời gian',
    level: 'N5',
    position: 6,
    content: {
      meaning: 'Đi đến đâu / vào lúc nào',
      formation: 'Địa điểm + に + động từ di chuyển / Thời gian + に + động từ',
      explanation: 'Trợ từ に chỉ điểm đến của hành động di chuyển hoặc thời điểm cụ thể diễn ra hành động.',
      notes: 'Với động từ di chuyển, へ cũng có thể dùng thay に để nhấn mạnh phương hướng.',
      mistake: 'Không dùng に với các từ chỉ thời gian tương đối như 今日, 明日, 毎日.',
      related: ['wo', 'de'],
      examples: [
        { ja: '学校に行きます。', kana: 'がっこうにいきます。', vi: 'Tôi đi đến trường.' },
        { ja: '七時に起きます。', kana: 'しちじにおきます。', vi: 'Tôi thức dậy lúc 7 giờ.' },
      ],
    },
    exercises: [
      {
        id: 'ni-1',
        type: 'choice',
        prompt: 'スーパー ___ 行きます。',
        options: ['に', 'を', 'で', 'から'],
        answer: 'に',
        explanation: 'Điểm đến của 行きます dùng に hoặc へ.',
      },
    ],
  },
  {
    id: 'de',
    pattern: '〜で〜ます',
    title: 'Nơi diễn ra hành động và phương tiện',
    level: 'N5',
    position: 7,
    content: {
      meaning: 'Tại / bằng cách nào…',
      formation: 'Địa điểm + で + hành động / Công cụ, phương tiện + で + hành động',
      explanation:
        'Trợ từ で chỉ địa điểm nơi diễn ra một hành động, hoặc phương tiện/công cụ để thực hiện hành động.',
      notes: 'Phân biệt với に (dùng cho sự tồn tại hoặc điểm đến).',
      mistake: 'Không dùng で với います/あります khi chỉ sự tồn tại đơn thuần.',
      related: ['wo', 'ni'],
      examples: [
        {
          ja: '図書館で勉強します。',
          kana: 'としょかんでべんきょうします。',
          vi: 'Tôi học ở thư viện.',
        },
        { ja: '家でご飯を食べます。', kana: 'いえでごはんをたべます。', vi: 'Tôi ăn cơm ở nhà.' },
      ],
    },
    exercises: [
      {
        id: 'de-1',
        type: 'fill',
        prompt: 'カフェ ___ 本を読みます。',
        answer: 'で',
        explanation: 'Hành động đọc sách diễn ra tại quán cà phê nên dùng で.',
      },
    ],
  },
  {
    id: 'tai',
    pattern: '〜たいです',
    title: 'Diễn đạt mong muốn',
    level: 'N5',
    position: 8,
    content: {
      meaning: 'Muốn làm…',
      formation: 'Bỏ ます từ động từ + たいです',
      explanation: 'Diễn đạt mong muốn của người nói hoặc hỏi mong muốn của người nghe.',
      notes:
        'Dạng phủ định: 〜たくないです. Tránh dùng để khẳng định mong muốn của người thứ ba khi không có ngữ cảnh.',
      mistake: '食べます → 食べたいです, không phải 食べるたいです.',
      related: ['wo', 'ni'],
      examples: [
        { ja: '日本に行きたいです。', kana: 'にほんにいきたいです。', vi: 'Tôi muốn đi Nhật.' },
        { ja: 'お茶を飲みたいです。', kana: 'おちゃをのみたいです。', vi: 'Tôi muốn uống trà.' },
      ],
    },
    exercises: [
      {
        id: 'tai-1',
        type: 'choice',
        prompt: '「食べます」 → muốn ăn',
        options: ['食べたいです', '食べるたいです', '食べますたいです'],
        answer: '食べたいです',
        explanation: 'Bỏ ます rồi thêm たいです.',
      },
    ],
  },
  ...curriculumLessons,
  ...jlptGrammarLessons,
];

export const testDefinitions = [
  {
    id: 'mini-desu',
    title: 'Lời chào đầu tiên',
    description: 'Ôn cách giới thiệu bản thân',
    lessonIds: ['desu'],
    kind: 'mini',
  },
  {
    id: 'medium-1',
    title: 'Nền tảng giao tiếp',
    description: 'Giới thiệu, phủ định và câu hỏi',
    lessonIds: ['desu', 'janai', 'ka'],
    kind: 'medium',
  },
  {
    id: 'medium-2',
    title: 'Một ngày của bạn',
    description: 'Hành động, điểm đến và địa điểm',
    lessonIds: ['wo', 'ni', 'de'],
    kind: 'medium',
  },
];
