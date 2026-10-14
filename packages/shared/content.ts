import { curriculumLessons } from './grammar-curriculum';
export type Exercise = {
  acceptedAnswers?: string[];
  annotationDisabled?: boolean;
  readings?: Record<string,string>;
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
          ja: '今日は休みではありません。',
          kana: 'きょうはやすみではありません。',
          vi: 'Hôm nay không phải ngày nghỉ.',
        },
      ],
    },
    exercises: [
      {
        id: 'janai-1',
        type: 'choice',
        prompt: 'Chọn câu: Tôi không phải học sinh.',
        options: ['私は学生ではありません。', '私は学生です。', '私は学生ます。'],
        answer: '私は学生ではありません。',
        explanation: 'ではありません phủ định danh từ 学生.',
      },
      {
        id: 'janai-2',
        type: 'complete',
        prompt: 'Hoàn thành câu phủ định: これは本',
        answer: 'ではありません',
        explanation: 'Sau danh từ 本, thêm ではありません.',
      },
    ],
  },
  {
    id: 'ka',
    pattern: '〜ですか',
    title: 'Đặt câu hỏi đơn giản',
    level: 'N5',
    position: 3,
    content: {
      meaning: 'Có phải… không?',
      formation: 'Câu lịch sự + か',
      explanation: 'Thêm か ở cuối câu để tạo câu hỏi. Không cần đổi trật tự các từ.',
      notes: 'Trả lời khẳng định bằng はい và phủ định bằng いいえ.',
      mistake: 'Không thêm か sau dấu chấm của câu.',
      related: ['desu', 'janai'],
      examples: [
        {
          ja: '田中さんは先生ですか。',
          kana: 'たなかさんはせんせいですか。',
          vi: 'Anh/chị Tanaka có phải giáo viên không?',
        },
        {
          ja: 'これはあなたの本ですか。',
          kana: 'これはあなたのほんですか。',
          vi: 'Đây có phải sách của bạn không?',
        },
      ],
    },
    exercises: [
      {
        id: 'ka-1',
        type: 'fill',
        prompt: 'あなたは学生です ___。',
        answer: 'か',
        explanation: 'か biến câu khẳng định thành câu hỏi.',
      },
      {
        id: 'ka-2',
        type: 'match',
        prompt: '「はい、そうです。」 có nghĩa là gì?',
        options: ['Vâng, đúng vậy.', 'Không, không phải.', 'Tạm biệt.'],
        answer: 'Vâng, đúng vậy.',
        explanation: 'はい、そうです xác nhận thông tin trong câu hỏi.',
      },
    ],
  },
  {
    id: 'no',
    pattern: '〜の〜',
    title: 'Sở hữu và mối quan hệ',
    level: 'N5',
    position: 4,
    content: {
      meaning: 'Của; thuộc về',
      formation: 'Danh từ 1 + の + danh từ 2',
      explanation: 'の nối hai danh từ. Danh từ phía trước bổ nghĩa cho danh từ phía sau.',
      notes: 'の còn thể hiện xuất xứ hoặc tổ chức, không chỉ quyền sở hữu.',
      mistake: 'Tiếng Nhật đặt người sở hữu trước vật được sở hữu.',
      related: ['desu'],
      examples: [
        { ja: 'これは私の本です。', kana: 'これはわたしのほんです。', vi: 'Đây là sách của tôi.' },
        {
          ja: '日本語の先生です。',
          kana: 'にほんごのせんせいです。',
          vi: 'Là giáo viên tiếng Nhật.',
        },
      ],
    },
    exercises: [
      {
        id: 'no-1',
        type: 'choice',
        prompt: '私 ___ 名前はリンです。',
        options: ['の', 'を', 'に', 'で'],
        answer: 'の',
        explanation: '私の名前 nghĩa là tên của tôi.',
      },
      {
        id: 'no-2',
        type: 'order',
        prompt: 'Sắp xếp: Sách của tôi',
        options: ['本', '私', 'の'],
        answer: '私の本',
        explanation: 'Người sở hữu + の + vật sở hữu.',
      },
    ],
  },
  {
    id: 'wo',
    pattern: '〜を〜ます',
    title: 'Hành động hằng ngày',
    level: 'N5',
    position: 5,
    content: {
      meaning: 'Làm một hành động với đối tượng',
      formation: 'Danh từ + を + động từ thể ます',
      explanation: 'を đánh dấu đối tượng trực tiếp của hành động. ます là đuôi động từ lịch sự.',
      notes: 'を thường đọc là お. Dạng phủ định của ます là ません.',
      mistake: 'Không dùng を để đánh dấu chủ thể thực hiện hành động.',
      related: ['ni', 'de'],
      examples: [
        {
          ja: '毎日、日本語を勉強します。',
          kana: 'まいにち、にほんごをべんきょうします。',
          vi: 'Mỗi ngày tôi học tiếng Nhật.',
        },
        { ja: '朝ご飯を食べます。', kana: 'あさごはんをたべます。', vi: 'Tôi ăn sáng.' },
      ],
    },
    exercises: [
      {
        id: 'wo-1',
        type: 'fill',
        prompt: '水 ___ 飲みます。',
        answer: 'を',
        explanation: '水 là đối tượng của hành động 飲みます.',
      },
      {
        id: 'wo-2',
        type: 'choice',
        prompt: 'Chọn câu: Tôi đọc sách.',
        options: ['本を読みます。', '本は食べます。', '本に飲みます。'],
        answer: '本を読みます。',
        explanation: '読む là đọc; を đánh dấu sách là đối tượng.',
      },
    ],
  },
  {
    id: 'ni',
    pattern: '〜に行きます',
    title: 'Nói về điểm đến',
    level: 'N5',
    position: 6,
    content: {
      meaning: 'Đi đến…',
      formation: 'Địa điểm + に + 行きます',
      explanation:
        'に đánh dấu điểm đến với động từ di chuyển. Có thể dùng へ để nhấn mạnh hướng đi.',
      notes: 'へ khi làm trợ từ được đọc là え.',
      mistake: 'Phân biệt điểm đến に với địa điểm diễn ra hành động で.',
      related: ['de', 'wo'],
      examples: [
        {
          ja: '明日、学校に行きます。',
          kana: 'あした、がっこうにいきます。',
          vi: 'Ngày mai tôi đi đến trường.',
        },
        { ja: '駅に行きます。', kana: 'えきにいきます。', vi: 'Tôi đi đến ga.' },
      ],
    },
    exercises: [
      {
        id: 'ni-1',
        type: 'choice',
        prompt: '学校 ___ 行きます。',
        options: ['に', 'を', 'が', 'と'],
        answer: 'に',
        explanation: 'に đánh dấu điểm đến 学校.',
      },
    ],
  },
  {
    id: 'de',
    pattern: '〜で〜ます',
    title: 'Nơi diễn ra hành động',
    level: 'N5',
    position: 7,
    content: {
      meaning: 'Làm gì tại đâu',
      formation: 'Địa điểm + で + động từ hành động',
      explanation: 'で chỉ nơi một hành động diễn ra. Không dùng mẫu này để diễn tả sự tồn tại.',
      notes: 'Với あります hoặc います, địa điểm thường được đánh dấu bằng に.',
      mistake: '「図書館に勉強します」 sai; dùng で với 勉強します.',
      related: ['ni', 'wo'],
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
