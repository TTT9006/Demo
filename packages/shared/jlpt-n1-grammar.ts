import type { Exercise, LessonContent } from './content';

export type AdditionalGrammarSpecN1 = {
  id: string;
  pattern: string;
  title: string;
  level: 'N1';
  position: number;
  meaning: string;
  formation: string;
  explanation: string;
  notes: string;
  mistake: string;
  related: string[];
  examples: {
    ja: string;
    kana: string;
    vi: string;
    readings?: Record<string, string>;
  }[];
  exercises: Exercise[];
};

export const jlptN1Specs: AdditionalGrammarSpecN1[] = [
  {
    "id": "jlpt-n1-deare",
    "pattern": "〜であれ・であろうと",
    "title": "Dù cho là A hay B thì cũng / Bất kể là ai",
    "level": "N1",
    "position": 301,
    "meaning": "【Dạng 1: N＋であれ / であろうと】Dù cho có là... đi chăng nữa\n【Dạng 2: AであれBであれ】Dù là A hay là B thì kết quả, nguyên tắc vẫn không thay đổi",
    "formation": "N / Nghi vấn từ (誰, 何, どこ) + であれ / であろうと\nN1であれN2であれ / N1であろうとN2であろうと",
    "explanation": "Dùng trong văn phong trang trọng, diễn văn chính luận: khẳng định tính bất biến của quy luật, nghĩa vụ hoặc pháp luật trước mọi đối tượng và hoàn cảnh.",
    "notes": "Chú thích phân biệt:\n- 〜であれ: Thường kết thúc bằng câu chỉ nguyên tắc, mệnh lệnh hoặc phán đoán tất yếu (〜なければならない, 〜平等だ).\n- 〜としても: Giả định một trường hợp cá biệt trong cuộc sống.",
    "mistake": "Cảnh báo lỗi: Đi trực tiếp với danh từ, không chèn trợ từ の hoặc な (sai: 子供のであれ, đúng: 子供であれ).",
    "related": [
      "jlpt-n2-toshitemo",
      "bridge-n2-43"
    ],
    "examples": [
      {
        "ja": "たとえ国王であれ、国の法律に従わなければならない。",
        "kana": "たとえこくおうであれ、くにのほうりつにしたがわなければならない。",
        "vi": "Dù cho có là quốc vương đi chăng nữa thì cũng phải tuân thủ luật pháp quốc gia.",
        "readings": {
          "国王": "こくおう",
          "法律": "ほうりつ",
          "従わなければ": "したがわなければ"
        }
      },
      {
        "ja": "理由が何であれ、暴力は絶対に許されることではない。",
        "kana": "りゆうがなんであれ、ぼうりょくはぜったいにゆるされることではない。",
        "vi": "Bất kể lý do là gì đi nữa, bạo lực tuyệt đối không bao giờ được tha thứ.",
        "readings": {
          "理由": "りゆう",
          "暴力": "ぼうりょく",
          "許される": "ゆるされる"
        }
      },
      {
        "ja": "大人であれ子供であれ、ルールは守らなければならない。",
        "kana": "おとなであれこどもであれ、るーるはまもらなければならない。",
        "vi": "Dù là người lớn hay trẻ con thì đều phải tuân thủ quy tắc.",
        "readings": {
          "大人": "おとな",
          "子供": "こども",
          "守らなければ": "まもらなければ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-deare-1",
        "type": "choice",
        "prompt": "いかに困難 ___ 、途中で投げ出してはならない。",
        "options": [
          "であれ",
          "にあれ",
          "とあれ",
          "へあれ"
        ],
        "answer": "であれ",
        "explanation": "Khẳng định bất biến trang trọng: いかに + Tính từ/Danh từ + であれ."
      },
      {
        "id": "jlpt-n1-deare-2",
        "type": "fill",
        "prompt": "Điền từ nguyên tắc bất biến: 相手が誰で ___ 、礼儀を忘れてはならない。",
        "answer": "あれ",
        "explanation": "誰であれ: bất kể đối phương là ai."
      },
      {
        "id": "jlpt-n1-deare-3",
        "type": "order",
        "prompt": "Sắp xếp: Dù là lý do gì thì trễ hẹn cũng là điều không được.",
        "options": [
          "どんな理由で",
          "あれ",
          "遅刻は",
          "認められない"
        ],
        "answer": "どんな理由であれ遅刻は認められない",
        "explanation": "Trật tự: Lý do gì đi nữa + であれ + Không được chấp nhận."
      },
      {
        "id": "jlpt-n1-deare-4",
        "type": "choice",
        "prompt": "プロ ___ アマチュア ___ 、フェアプレー精神が大切だ。",
        "options": [
          "であれ／であれ",
          "なら／なら",
          "たり／たり",
          "とか／とか"
        ],
        "answer": "であれ／であれ",
        "explanation": "Cấu trúc cặp tương phản: AであれBであれ."
      },
      {
        "id": "jlpt-n1-deare-5",
        "type": "fill",
        "prompt": "Điền từ: 結果がどうで ___ と、全力を尽くしたことに価値がある。",
        "answer": "あろう",
        "explanation": "どうであろうと: dẫu kết quả có ra sao đi chăng nữa."
      },
      {
        "id": "jlpt-n1-deare-6",
        "type": "choice",
        "prompt": "いかなる権力者 ___ 、国民の声を無視することはできない。",
        "options": [
          "であれ",
          "において",
          "について",
          "にとって"
        ],
        "answer": "であれ",
        "explanation": "いかなる権力者であれ: bất kể kẻ nắm quyền lực cỡ nào."
      },
      {
        "id": "jlpt-n1-deare-7",
        "type": "order",
        "prompt": "Sắp xếp: Dù là công hay tư thì cũng phải phân minh rạch ròi.",
        "options": [
          "公であれ",
          "私であれ",
          "けじめを",
          "つけるべきだ"
        ],
        "answer": "公であれ私であれけじめをつけるべきだ",
        "explanation": "Trật tự: 公であれ私であれ + Phải phân minh rõ ràng."
      },
      {
        "id": "jlpt-n1-deare-8",
        "type": "choice",
        "prompt": "雨 ___ 嵐 ___ 、明日のイベントは決行します。",
        "options": [
          "であれ／であれ",
          "にして／にして",
          "につれ／につれ",
          "ながら／ながら"
        ],
        "answer": "であれ／であれ",
        "explanation": "Dù là mưa hay bão tố: 雨であれ嵐であれ."
      },
      {
        "id": "jlpt-n1-deare-9",
        "type": "fill",
        "prompt": "Điền từ: どこで ___ と、君の幸せを祈っているよ。",
        "answer": "あろう",
        "explanation": "どこであろうと: dù ở bất cứ nơi đâu."
      },
      {
        "id": "jlpt-n1-deare-10",
        "type": "order",
        "prompt": "Sắp xếp: Dù ai có nói ngả nói nghiêng tôi cũng không lung lay ý chí.",
        "options": [
          "誰が何と",
          "言おうと",
          "私の決意は",
          "変わらない"
        ],
        "answer": "誰が何と言おうと私の決意は変わらない",
        "explanation": "Trật tự: Ai nói gì chăng nữa + Quyết tâm không đổi."
      }
    ]
  },
  {
    "id": "jlpt-n1-tohaie",
    "pattern": "〜とはいえ",
    "title": "Dẫu nói là vậy nhưng trên thực tế",
    "level": "N1",
    "position": 302,
    "meaning": "【〜とはいえ】Dẫu nói là... / Mặc dù sự thật thừa nhận là như vậy nhưng thực tế vế sau lại không hoàn toàn thuận theo suy nghĩ đó",
    "formation": "Thể thường (V/A/N) + とはいえ\n* N và tính từ đuôi な thường đi trực tiếp: Nとはいえ / 暇とはいえ",
    "explanation": "Thừa nhận sự thật ở vế trước là đúng, nhưng ở vế sau đưa ra góc nhìn thực tế, hạn chế hoặc tình huống ngoại lệ khiến người ta phải lưu tâm.",
    "notes": "Chú thích phân biệt:\n- 〜とはいえ: Văn viết lịch sự, khách quan, mang tính cân nhắc thấu đáo.\n- 〜けれども / 〜のに: Dùng phổ thông, đời thường hơn.",
    "mistake": "Cảnh báo lỗi: Trước とはいえ không thêm だ sau danh từ (VD: 4月とはいえ, không nói 4月だとはいえ).",
    "related": [
      "jlpt-n2-toshitemo",
      "jlpt-n4-noni"
    ],
    "examples": [
      {
        "ja": "4月に入ったとはいえ、朝晩はまだまだ冷え込む。",
        "kana": "しがつにはいったとはいえ、あさばんはまだまだひえこむ。",
        "vi": "Dẫu nói là đã bước sang tháng tư, ban sáng và ban tối trời vẫn còn lạnh cóng.",
        "readings": {
          "四月": "しがつ",
          "入った": "はいった",
          "朝晩": "あさばん",
          "冷え込む": "ひえこむ"
        }
      },
      {
        "ja": "プロとはいえ、時には失敗することもある。",
        "kana": "ぷろとはいえ、ときにはしっぱいすることもある。",
        "vi": "Dẫu mang danh là dân chuyên nghiệp, đôi khi người ta vẫn có thể mắc sai lầm.",
        "readings": {
          "失敗": "しっぱい"
        }
      },
      {
        "ja": "いくら便利とはいえ、AIにすべてを任せるのは危険だ。",
        "kana": "いくらべんりとはいえ、えーあいにすべてをまかせるのはきけんだ。",
        "vi": "Dẫu tiện lợi đến mấy chăng nữa, việc phó mặc toàn bộ cho AI là điều vô cùng nguy hiểm.",
        "readings": {
          "便利": "べんり",
          "任せる": "まかせる",
          "危険": "きけん"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-tohaie-1",
        "type": "choice",
        "prompt": "春 ___ 、北海道では雪が降っている。",
        "options": [
          "とはいえ",
          "とあって",
          "たるもの",
          "ならでは"
        ],
        "answer": "とはいえ",
        "explanation": "Dẫu nói là mùa xuân: N + とはいえ: 春とはいえ."
      },
      {
        "id": "jlpt-n1-tohaie-2",
        "type": "fill",
        "prompt": "Điền từ thừa nhận ngoại lệ: まだ子供 ___ 、自分の行動に責任を持たせるべきだ。",
        "answer": "とはいえ",
        "explanation": "子供とはいえ: dẫu nói vẫn còn là một đứa trẻ."
      },
      {
        "id": "jlpt-n1-tohaie-3",
        "type": "order",
        "prompt": "Sắp xếp: Dẫu nói là đã khỏi bệnh nhưng không được chủ quan.",
        "options": [
          "治ったとはいえ",
          "まだ無理をしては",
          "いけません",
          "よ"
        ],
        "answer": "治ったとはいえまだ無理をしてはいけませんよ",
        "explanation": "Trật tự: Dẫu khỏi bệnh + Không được gắng sức."
      },
      {
        "id": "jlpt-n1-tohaie-4",
        "type": "choice",
        "prompt": "親しい仲 ___ 、礼儀をわきまえるべきだ。",
        "options": [
          "とはいえ",
          "とあれば",
          "にして",
          "なりに"
        ],
        "answer": "とはいえ",
        "explanation": "Thừa nhận thân thiết nhưng vẫn phải giữ lễ nghi: 親しい仲とはいえ."
      },
      {
        "id": "jlpt-n1-tohaie-5",
        "type": "fill",
        "prompt": "Điền từ: 休日 ___ 、仕事のメールが次々と届く。",
        "answer": "とはいえ",
        "explanation": "N + とはいえ: 休日とはいえ (dẫu là ngày nghỉ)."
      },
      {
        "id": "jlpt-n1-tohaie-6",
        "type": "choice",
        "prompt": "初心者向けコース ___ 、かなりの体力が必要だ。",
        "options": [
          "とはいえ",
          "と相まって",
          "はおろか",
          "まみれ"
        ],
        "answer": "とはいえ",
        "explanation": "Dẫu dành cho người mới: 初心者向けコースとはいえ."
      },
      {
        "id": "jlpt-n1-tohaie-7",
        "type": "order",
        "prompt": "Sắp xếp: Dẫu lương có cao nhưng làm việc quá sức thì cũng có hại.",
        "options": [
          "高給とはいえ",
          "体を壊しては",
          "元も子も",
          "ない"
        ],
        "answer": "高給とはいえ体を壊しては元も子もない",
        "explanation": "Trật tự: Lương cao chăng nữa + Phá hủy sức khỏe thì chẳng còn ý nghĩa."
      },
      {
        "id": "jlpt-n1-tohaie-8",
        "type": "choice",
        "prompt": "景気が回復傾向にある ___ 、中小企業の経営は依然として厳しい。",
        "options": [
          "とはいえ",
          "とあれば",
          "たるもの",
          "ならでは"
        ],
        "answer": "とはいえ",
        "explanation": "Dẫu kinh tế phục hồi: 回復傾向にあるとはいえ."
      },
      {
        "id": "jlpt-n1-tohaie-9",
        "type": "fill",
        "prompt": "Điền từ: 多少の改善は見られた ___ 、根本的な解決には至っていない。",
        "answer": "とはいえ",
        "explanation": "Vた + とはいえ: 見られたとはいえ."
      },
      {
        "id": "jlpt-n1-tohaie-10",
        "type": "order",
        "prompt": "Sắp xếp: Dẫu nói là việc gấp nhưng cũng phải làm theo đúng trình tự.",
        "options": [
          "緊急の用件とはいえ",
          "所定の手続きを",
          "踏むべき",
          "である"
        ],
        "answer": "緊急の用件とはいえ所定の手続きを踏むべきである",
        "explanation": "Trật tự: Việc khẩn cấp chăng nữa + Cần tuân thủ thủ tục."
      }
    ]
  },
  {
    "id": "jlpt-n1-toatte",
    "pattern": "〜とあって",
    "title": "Chính vì hoàn cảnh đặc biệt nên kết quả đương nhiên",
    "level": "N1",
    "position": 303,
    "meaning": "【〜とあって】Chính vì ở vào một tình huống hoặc dịp đặc biệt hiếm có, nên việc xảy ra ở vế sau là điều hoàn toàn hiển nhiên, dễ hiểu",
    "formation": "Thể thường (V/A/N) + とあって (N và Aな thường đi trực tiếp: Nとあって)",
    "explanation": "Dùng nhiều trên bản tin báo chí, thời sự để giải thích không khí náo nhiệt, đông đúc hoặc sự kiện đặc biệt thu hút đông đảo người tham gia.",
    "notes": "Chú thích phân biệt:\n- 〜とあって: Dùng cho tình huống đặc biệt của xã hội hoặc đám đông, không dùng cho lý do vụn vặt cá nhân người nói.\n- 〜ので / 〜から: Nguyên nhân thông thường đời sống.",
    "mistake": "Cảnh báo lỗi: Vế sau thường là trạng thái khách quan (đông đúc, náo nhiệt, bán chạy), không dùng câu mệnh lệnh hay yêu cầu (sai: 夏休みとあって勉強しなさい).",
    "related": [
      "jlpt-n4-tameni",
      "jlpt-n1-tohaie"
    ],
    "examples": [
      {
        "ja": "夏休み最初の週末とあって、プールは家族連れで大混雑している。",
        "kana": "なつやすみさいしょのしゅうまつとあって、ぷーるはかぞくづれでだいこんざつしている。",
        "vi": "Chính vì là dịp cuối tuần đầu tiên của kỳ nghỉ hè, hồ bơi đông nghịt các gia đình đến vui chơi.",
        "readings": {
          "夏休み": "なつやすみ",
          "最初": "さいしょ",
          "週末": "しゅうまつ",
          "家族連れ": "かぞくづれ",
          "大混雑": "だいこんざつ"
        }
      },
      {
        "ja": "人気アイドルの初コンサートとあって、チケットは即日完売した。",
        "kana": "にんきあいどるのはつこんさーととあって、ちけっとはそくじつかんばいした。",
        "vi": "Chính vì là buổi hòa nhạc đầu tay của thần tượng nổi tiếng, vé đã bán sạch veo ngay trong ngày.",
        "readings": {
          "人気": "にんき",
          "初": "はつ",
          "即日完売": "そくじつかんばい"
        }
      },
      {
        "ja": "有名シェフが来日するとあって、レストランには予約が殺到している。",
        "kana": "ゆうめいしぇふがらいにちするとあって、れすとらんにはよやくがさっとうしている。",
        "vi": "Vì đầu bếp danh tiếng sang Nhật nên các cuộc gọi đặt bàn đổ dồn về nhà hàng tới tấp.",
        "readings": {
          "有名": "ゆうめい",
          "来日": "らいにち",
          "予約": "よやく",
          "殺到": "さっとう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-toatte-1",
        "type": "choice",
        "prompt": "桜が満開の日曜日 ___ 、公園は花見客で溢れている。",
        "options": [
          "とあって",
          "とはいえ",
          "たるもの",
          "ならでは"
        ],
        "answer": "とあって",
        "explanation": "Chính vì dịp đặc biệt hoa nở rộ: とあって."
      },
      {
        "id": "jlpt-n1-toatte-2",
        "type": "fill",
        "prompt": "Điền từ giải thích hoàn cảnh đặc biệt: 全品半額セール ___ 、朝から長蛇の列ができた。",
        "answer": "とあって",
        "explanation": "Giảm giá 50% toàn bộ mặt hàng: セールとあって."
      },
      {
        "id": "jlpt-n1-toatte-3",
        "type": "order",
        "prompt": "Sắp xếp: Vì là trận chung kết nên khán đài chật kín không còn một chỗ trống.",
        "options": [
          "決勝戦とあって",
          "スタジアムは",
          "超満員",
          "だった"
        ],
        "answer": "決勝戦とあってスタジアムは超満員だった",
        "explanation": "Trật tự: Dịp chung kết + とあって + Sân vận động chật kín."
      },
      {
        "id": "jlpt-n1-toatte-4",
        "type": "choice",
        "prompt": "久しぶりの大型連休とあって、空港は出国客で ___ 。",
        "options": [
          "ごった返している",
          "静まり返っている",
          "ガラガラだ",
          "閉鎖された"
        ],
        "answer": "ごった返している",
        "explanation": "Đông đúc náo loạn vì kỳ nghỉ lễ dài: ごった返している."
      },
      {
        "id": "jlpt-n1-toatte-5",
        "type": "fill",
        "prompt": "Điền từ: 天皇陛下の即位パレード ___ 、沿道には何万人もの市民が集まった。",
        "answer": "とあって",
        "explanation": "Sự kiện hoàng gia trang trọng: パレードとあって."
      },
      {
        "id": "jlpt-n1-toatte-6",
        "type": "choice",
        "prompt": "滅多にないチャンス ___ 、誰もが真剣な表情で挑んでいる。",
        "options": [
          "とあって",
          "まみれ",
          "ずくめ",
          "極まりない"
        ],
        "answer": "とあって",
        "explanation": "Cơ hội hiếm có: チャンスとあって."
      },
      {
        "id": "jlpt-n1-toatte-7",
        "type": "order",
        "prompt": "Sắp xếp: Vì miễn phí vé vào cửa nên khách tham quan nườm nượp kéo đến.",
        "options": [
          "入場無料とあって",
          "開館前から",
          "多くの人が",
          "並んでいた"
        ],
        "answer": "入場無料とあって開館前から多くの人が並んでいた",
        "explanation": "Trật tự: Miễn phí vé vào cửa + Xếp hàng dài trước giờ mở cửa."
      },
      {
        "id": "jlpt-n1-toatte-8",
        "type": "choice",
        "prompt": "台風が直撃する ___ 、スーパーの食料品売り場は買いだめの人で混雑した。",
        "options": [
          "とあって",
          "たるもの",
          "をおいて",
          "ならでは"
        ],
        "answer": "とあって",
        "explanation": "V từ điển + とあって: 直撃するとあって."
      },
      {
        "id": "jlpt-n1-toatte-9",
        "type": "fill",
        "prompt": "Điền từ: 新型車の発表会 ___ 、会場は熱気と興奮に包まれた。",
        "answer": "とあって",
        "explanation": "Buổi ra mắt mẫu xe mới: 発表会とあって."
      },
      {
        "id": "jlpt-n1-toatte-10",
        "type": "order",
        "prompt": "Sắp xếp: Vì là năm kỷ niệm 100 năm thành lập nên lễ hội vô cùng hoành tráng.",
        "options": [
          "創立100周年とあって",
          "祝賀行事は",
          "盛大に",
          "執り行われた"
        ],
        "answer": "創立100周年とあって祝賀行事は盛大に執り行われた",
        "explanation": "Trật tự: Kỷ niệm 100 năm + とあって + Sự kiện diễn ra long trọng."
      }
    ]
  },
  {
    "id": "jlpt-n1-tarumono",
    "pattern": "〜たるもの",
    "title": "Đã ở cương vị, thiên chức... thì phải xứng đáng",
    "level": "N1",
    "position": 304,
    "meaning": "【N＋たるもの】Đã là người gánh vác cương vị, vị thế cao quý, nghề nghiệp danh giá thì đạo lý đòi hỏi phải có phong thái và trách nhiệm gương mẫu tương xứng",
    "formation": "N (chỉ nghề nghiệp, thân phận, cương vị cao: 医師, 教師, リーダー, 政治家) + たるもの",
    "explanation": "Khẳng định chuẩn mực đạo đức khắt khe mà xã hội kỳ vọng vào những người đứng ở vị trí lãnh đạo hoặc nghề nghiệp có sứ mệnh cao cả.",
    "notes": "Chú thích phân biệt:\n- 〜たるもの: Vế sau luôn là câu khẳng định đạo nghĩa: 〜べきだ, 〜ねばならない, 〜てはならない.\n- 〜として: Trung tính, dùng cho mọi vai trò chức năng (với tư cách là học sinh).",
    "mistake": "Cảnh báo lỗi: Không dùng cho các vị trí bình thường hoặc đồ vật vô tri (không nói 店員たるもの hay 携帯たるもの).",
    "related": [
      "jlpt-n2-bekida",
      "jlpt-n1-majiki"
    ],
    "examples": [
      {
        "ja": "医者たるもの、患者の命を最優先に考えるべきだ。",
        "kana": "いしゃたるもの、かんじゃのいのちをさいゆうせんにかんがえるべきだ。",
        "vi": "Đã là người thầy thuốc thì phải đặt tính mạng của người bệnh lên trên hết.",
        "readings": {
          "医者": "いしゃ",
          "患者": "かんじゃ",
          "命": "いのち",
          "最優先": "さいゆうせん"
        }
      },
      {
        "ja": "一国のリーダーたるもの、国民の安全に全責任を負わねばならない。",
        "kana": "いっこくのりーだーたるもの、こくみんのあんぜんにぜんせきにんをおわねばならない。",
        "vi": "Đã là bậc lãnh tụ của một quốc gia thì phải gánh vác toàn bộ trách nhiệm đối với sự an nguy của nhân dân.",
        "readings": {
          "一国": "いっこく",
          "国民": "こくみん",
          "安全": "あんぜん",
          "責任": "せきにん"
        }
      },
      {
        "ja": "教育者たるもの、常に自らの行動を厳しく律するべきである。",
        "kana": "きょういくしゃたるもの、つねにみずからのこうどうをきびしくりっするべきである。",
        "vi": "Đã là người làm công tác giáo dục thì phải luôn nghiêm khắc kỷ luật chính hành vi của mình.",
        "readings": {
          "教育者": "きょういくしゃ",
          "常に": "つねに",
          "行動": "こうどう",
          "律する": "りっする"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-tarumono-1",
        "type": "choice",
        "prompt": "警察官 ___ 、不正を決して見逃してはならない。",
        "options": [
          "たるもの",
          "とあって",
          "ならでは",
          "をおいて"
        ],
        "answer": "たるもの",
        "explanation": "Cương vị cảnh sát tôn nghiêm: 警察官たるもの."
      },
      {
        "id": "jlpt-n1-tarumono-2",
        "type": "fill",
        "prompt": "Điền từ cương vị: 政治家 ___ もの、私利私欲に走ってはならない。",
        "answer": "たる",
        "explanation": "Cấu trúc N + たるもの: 政治家たるもの."
      },
      {
        "id": "jlpt-n1-tarumono-3",
        "type": "order",
        "prompt": "Sắp xếp: Đã là nhà nghiên cứu thì phải tôn trọng sự thật khách quan.",
        "options": [
          "研究者たるもの",
          "客観的な事実を",
          "尊重すべき",
          "である"
        ],
        "answer": "研究者たるもの客観的な事実を尊重すべきである",
        "explanation": "Trật tự: Cương vị + たるもの + Tôn trọng sự thật khách quan."
      },
      {
        "id": "jlpt-n1-tarumono-4",
        "type": "choice",
        "prompt": "プロのスポーツ選手たるもの、常に体調管理を ___ 。",
        "options": [
          "徹底すべきだ",
          "怠るべきだ",
          "無視すべきだ",
          "忘れるべきだ"
        ],
        "answer": "徹底すべきだ",
        "explanation": "Đã là tuyển thủ chuyên nghiệp thì phải quản lý thể lực triệt để."
      },
      {
        "id": "jlpt-n1-tarumono-5",
        "type": "fill",
        "prompt": "Điền từ: 裁判官 ___ 、いかなる情実にも左右されてはならない。",
        "answer": "たるもの",
        "explanation": "N + たるもの: 裁判官たるもの (đã là thẩm phán)."
      },
      {
        "id": "jlpt-n1-tarumono-6",
        "type": "choice",
        "prompt": "親 ___ 、子供の模範となる生き方を見せるべきだ。",
        "options": [
          "たるもの",
          "とあって",
          "はおろか",
          "まみれ"
        ],
        "answer": "たるもの",
        "explanation": "Thiên chức làm cha mẹ: 親たるもの."
      },
      {
        "id": "jlpt-n1-tarumono-7",
        "type": "order",
        "prompt": "Sắp xếp: Đã là người đại diện công ty thì phải ăn mặc chỉnh tề.",
        "options": [
          "代表たるもの",
          "身だしなみには",
          "細心の注意を",
          "払うべきだ"
        ],
        "answer": "代表たるもの身だしなみには細心の注意を払うべきだ",
        "explanation": "Trật tự: Cương vị + たるもの + Chú ý ăn mặc diện mạo."
      },
      {
        "id": "jlpt-n1-tarumono-8",
        "type": "choice",
        "prompt": "学者たるもの、真理の追究に生涯を ___ べきだ。",
        "options": [
          "捧げる",
          "捧げない",
          "諦める",
          "避ける"
        ],
        "answer": "捧げる",
        "explanation": "Cống hiến trọn đời cho chân lý: 生涯を捧げるべきだ."
      },
      {
        "id": "jlpt-n1-tarumono-9",
        "type": "fill",
        "prompt": "Điền từ: 兵士 ___ 、命令には絶対に従わねばならない。",
        "answer": "たるもの",
        "explanation": "Kỷ luật quân nhân: 兵士たるもの."
      },
      {
        "id": "jlpt-n1-tarumono-10",
        "type": "order",
        "prompt": "Sắp xếp: Đã là bậc quân tử thì không nên thốt lời hai lòng.",
        "options": [
          "君子たるもの",
          "二枚舌を",
          "使うべきでは",
          "ない"
        ],
        "answer": "君子たるもの二枚舌を使うべきではない",
        "explanation": "Trật tự: 君子たるもの + Không được nói lời lắt léo hai lòng."
      }
    ]
  },
  {
    "id": "jlpt-n1-naradewa",
    "pattern": "〜ならでは・ならではの",
    "title": "Chỉ có ở / Độc nhất vô nhị chỉ có",
    "level": "N1",
    "position": 305,
    "meaning": "【N＋ならでは（の＋N）】Chỉ có riêng ở đối tượng đó mới có được nét đặc sắc, hương vị, phong cách độc đáo tuyệt vời mà không nơi nào khác bắt chước được",
    "formation": "N + ならでは\nBổ nghĩa cho danh từ: N1 + ならではの + N2",
    "explanation": "Dùng để khen ngợi tán dương phẩm chất tinh túy độc bản: chỉ có ở Nhật Bản, chỉ có ở truyền thống lâu đời, chỉ có bàn tay nghệ nhân đó.",
    "notes": "Chú thích phân biệt:\n- 〜ならでは: Luôn mang nghĩa KHEN NGỢI tích cực, tôn vinh nét riêng có.\n- 〜に限り: Quy định giới hạn hành chính (chỉ giảm giá cho học sinh).",
    "mistake": "Cảnh báo lỗi: Không bao giờ dùng ならでは cho nét tiêu cực hoặc chê bai (sai: 彼の怠慢ならではの失敗).",
    "related": [
      "bridge-n2-27",
      "jlpt-n1-wo-oite"
    ],
    "examples": [
      {
        "ja": "これは京都ならではの伝統的な風情が漂う景色だ。",
        "kana": "これはきょうとならではのでんとうてきなふぜいがただようけしきだ。",
        "vi": "Đây là phong cảnh toát lên nét thi vị hoài cổ chỉ có ở Kyoto.",
        "readings": {
          "京都": "きょうと",
          "伝統的": "でんとうてき",
          "風情": "ふぜい",
          "景色": "けしき"
        }
      },
      {
        "ja": "手作りならではの温かみと素朴な味わいがある。",
        "kana": "てづくりならではのあたたかみとそぼくなあじわいがある。",
        "vi": "Món ăn có được hơi ấm và hương vị mộc mạc chỉ có được từ đồ tự tay làm thủ công.",
        "readings": {
          "手作り": "てづくり",
          "温かみ": "あたたかみ",
          "素朴": "そぼく",
          "味わい": "あじわい"
        }
      },
      {
        "ja": "一流プロならではの華麗な技に観客は見とれた。",
        "kana": "いちりゅうぷろならではのかれいなわざにかんきゃくはみとれた。",
        "vi": "Khán giả say sưa chiêm ngưỡng kỹ nghệ điêu luyện chỉ có ở các tuyển thủ nhà nghề đỉnh cao.",
        "readings": {
          "一流": "いちりゅう",
          "華麗": "かれい",
          "技": "わざ",
          "観客": "かんきゃく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-naradewa-1",
        "type": "choice",
        "prompt": "現地 ___ の美味しい郷土料理を堪能した。",
        "options": [
          "ならでは",
          "たるもの",
          "とあって",
          "はおろか"
        ],
        "answer": "ならでは",
        "explanation": "Chỉ có ở bản địa: 現地ならではの郷土料理."
      },
      {
        "id": "jlpt-n1-naradewa-2",
        "type": "fill",
        "prompt": "Điền từ tán dương độc bản: この細やかな心配りは、日本 ___ のおもてなしだ。",
        "answer": "ならでは",
        "explanation": "Chỉ có ở Nhật Bản: 日本ならではのおもてなし."
      },
      {
        "id": "jlpt-n1-naradewa-3",
        "type": "order",
        "prompt": "Sắp xếp: Đây là bức tranh toát lên sức hút độc đáo chỉ có ở tranh vẽ tay.",
        "options": [
          "手描きならではの",
          "独特の魅力が",
          "溢れて",
          "いる"
        ],
        "answer": "手描きならではの独特の魅力が溢れている",
        "explanation": "Trật tự: Chỉ có ở vẽ tay + Nét quyến rũ độc đáo trào dâng."
      },
      {
        "id": "jlpt-n1-naradewa-4",
        "type": "choice",
        "prompt": "ベテラン職人 ___ の素晴らしい技が光っている。",
        "options": [
          "ならでは",
          "まみれ",
          "ずくめ",
          "極まりない"
        ],
        "answer": "ならでは",
        "explanation": "Kỹ nghệ chỉ nghệ nhân kỳ cựu mới có: 職人ならではの技."
      },
      {
        "id": "jlpt-n1-naradewa-5",
        "type": "fill",
        "prompt": "Điền trợ từ nối danh từ: 冬 ___ の楽しみといえば温泉旅行だ。",
        "answer": "ならでは",
        "explanation": "Thú vui chỉ mùa đông mới có: 冬ならではの楽しみ."
      },
      {
        "id": "jlpt-n1-naradewa-6",
        "type": "choice",
        "prompt": "この感動は、劇場に足を運んだ人 ___ 味わえない。",
        "options": [
          "でなくては",
          "ならでは",
          "とあって",
          "たるもの"
        ],
        "answer": "でなくては",
        "explanation": "Phân biệt: Người đích thân đến rạp mới cảm nhận được: でなくては味わえない."
      },
      {
        "id": "jlpt-n1-naradewa-7",
        "type": "order",
        "prompt": "Sắp xếp: Món quà chứa đựng tình thương chỉ có ở người mẹ.",
        "options": [
          "母ならではの",
          "愛情がこもった",
          "手料理を",
          "いただいた"
        ],
        "answer": "母ならではの愛情がこもった手料理をいただいた",
        "explanation": "Trật tự: Tình thương chỉ người mẹ có + Món ăn tự tay nấu."
      },
      {
        "id": "jlpt-n1-naradewa-8",
        "type": "choice",
        "prompt": "田舎町 ___ ののんびりとした時間が流れている。",
        "options": [
          "ならでは",
          "とあって",
          "はおろか",
          "まみれ"
        ],
        "answer": "ならでは",
        "explanation": "Thời gian trôi thong thả chỉ có ở vùng quê: 田舎町ならでは."
      },
      {
        "id": "jlpt-n1-naradewa-9",
        "type": "fill",
        "prompt": "Điền từ: 若い感性 ___ の斬新な発想に驚かされた。",
        "answer": "ならでは",
        "explanation": "Ý tưởng đột phá chỉ có ở sức trẻ: 若い感性ならではの."
      },
      {
        "id": "jlpt-n1-naradewa-10",
        "type": "order",
        "prompt": "Sắp xếp: Không khí trong lành này là trải nghiệm chỉ vùng cao nguyên mới có.",
        "options": [
          "この清々しい空気は",
          "高原ならではの",
          "贅沢な体験",
          "である"
        ],
        "answer": "この清々しい空気は高原ならではの贅沢な体験である",
        "explanation": "Trật tự: Không khí thanh khiết + Trải nghiệm chỉ có ở cao nguyên."
      }
    ]
  },
  {
    "id": "jlpt-n1-wo-oite",
    "pattern": "〜をおいて〜ない",
    "title": "Ngoài... ra thì không còn ai xứng đáng hơn",
    "level": "N1",
    "position": 306,
    "meaning": "【N＋をおいて〜ない】Ngoài người này / phương án này ra thì không một ai khác có đủ tư cách, phẩm chất để đảm đương hay sánh bằng",
    "formation": "N + をおいて + (他には) + V thể phủ định (ない / いない)",
    "explanation": "Cách diễn đạt ca ngợi tột đỉnh sự độc nhất và không thể thay thế của một cá nhân, tác phẩm hay giải pháp trong một tình thế quyết định.",
    "notes": "Chú thích phân biệt:\n- 〜をおいて: Đánh giá cao nhất một đối tượng cụ thể (người đảm nhiệm vai trò này chỉ có thể là anh ấy).\n- 〜のほかに: Liệt kê trừ ra bình thường trong toán học hay sự vụ.",
    "mistake": "Cảnh báo lỗi: Vế sau luôn luôn bắt buộc kết thúc bằng thể phủ định (ない, いない, 考えられない).",
    "related": [
      "jlpt-n2-hokananai",
      "jlpt-n1-naradewa"
    ],
    "examples": [
      {
        "ja": "この大役を務められる人物は、彼をおいて他にはいない。",
        "kana": "このたいやくをつとめられるじんぶつは、かれをおいてほかにはいない。",
        "vi": "Người có thể đảm đương trọng trách to lớn này, ngoài anh ấy ra thì không còn ai khác.",
        "readings": {
          "大役": "たいやく",
          "務められる": "つとめられる",
          "人物": "じんぶつ",
          "彼": "かれ"
        }
      },
      {
        "ja": "今度のプロジェクトのリーダーには、山田さんをおいて適任者はいない。",
        "kana": "こんどのぷろじぇくとのりーだーには、やまださんをおいててきにんしゃはいない。",
        "vi": "Cho vị trí trưởng dự án lần này, ngoài anh Yamada ra không ai là người phù hợp hơn.",
        "readings": {
          "適任者": "てきにんしゃ"
        }
      },
      {
        "ja": "世界平和を実現する道は、対話をおいて他にない。",
        "kana": "せかいへいわをじつげんするみちは、たいわをおいてほかにはない。",
        "vi": "Con đường để kiến tạo hòa bình thế giới, ngoài đối thoại ra chẳng còn cách nào khác.",
        "readings": {
          "世界平和": "せかいへいわ",
          "実現": "じつげん",
          "道": "みち",
          "対話": "たいわ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-wo-oite-1",
        "type": "choice",
        "prompt": "主役にふさわしい女優は、彼女を ___ 他には考えられない。",
        "options": [
          "おいて",
          "こめて",
          "めぐって",
          "とおして"
        ],
        "answer": "おいて",
        "explanation": "Khẳng định độc tôn duy nhất: をおいて他にはない."
      },
      {
        "id": "jlpt-n1-wo-oite-2",
        "type": "fill",
        "prompt": "Điền từ phủ định: この問題を解決できるのは、あなたをおいて他には ___ 。",
        "answer": "いない",
        "explanation": "Vế sau đi với phủ định chỉ người: 他にはいない."
      },
      {
        "id": "jlpt-n1-wo-oite-3",
        "type": "order",
        "prompt": "Sắp xếp: Ngày tiến hành đám cưới không có ngày nào đẹp bằng hôm nay.",
        "options": [
          "結婚式の日取りは",
          "今日をおいて",
          "他に良い日は",
          "ない"
        ],
        "answer": "結婚式の日取りは今日をおいて他に良い日はない",
        "explanation": "Trật tự: Ngày cưới + 今日をおいて + Không có ngày nào đẹp hơn."
      },
      {
        "id": "jlpt-n1-wo-oite-4",
        "type": "choice",
        "prompt": "このピンチを救えるのは、キャプテン ___ 他にいない。",
        "options": [
          "をおいて",
          "たるもの",
          "とあって",
          "はおろか"
        ],
        "answer": "をおいて",
        "explanation": "Chỉ có đội trưởng: をおいて他にいない."
      },
      {
        "id": "jlpt-n1-wo-oite-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 彼 ___ おいて、この難事業を成功させられる人はいない。",
        "answer": "を",
        "explanation": "Cấu trúc N + をおいて."
      },
      {
        "id": "jlpt-n1-wo-oite-6",
        "type": "choice",
        "prompt": "彼女の無実を証明できる証拠は、この映像を ___ 他にない。",
        "options": [
          "おいて",
          "こめて",
          "あまり",
          "すぎて"
        ],
        "answer": "おいて",
        "explanation": "Ngoài thước phim này ra không còn gì khác: をおいて他にない."
      },
      {
        "id": "jlpt-n1-wo-oite-7",
        "type": "order",
        "prompt": "Sắp xếp: Người am hiểu thị trường này nhất ngoài ông ấy ra không còn ai.",
        "options": [
          "この市場に精通している人は",
          "彼をおいて",
          "他に",
          "見当たらない"
        ],
        "answer": "この市場に精通している人は彼をおいて他に見当たらない",
        "explanation": "Trật tự: Người am hiểu thị trường + 彼をおいて + Không thấy ai khác."
      },
      {
        "id": "jlpt-n1-wo-oite-8",
        "type": "choice",
        "prompt": "今、この瞬間を ___ 、告白するチャンスはない。",
        "options": [
          "おいて",
          "へて",
          "こめて",
          "かねて"
        ],
        "answer": "おいて",
        "explanation": "Ngoài khoảnh khắc này ra: 今をおいて."
      },
      {
        "id": "jlpt-n1-wo-oite-9",
        "type": "fill",
        "prompt": "Điền từ phủ định: 信頼できる相談相手は、親友をおいて他には ___ 。",
        "answer": "いない",
        "explanation": "Không có ai khác ngoài bạn thân: 他にはいない."
      },
      {
        "id": "jlpt-n1-wo-oite-10",
        "type": "order",
        "prompt": "Sắp xếp: Để vượt qua khủng hoảng không có con đường nào khác ngoài đoàn kết.",
        "options": [
          "一致団結をおいて",
          "この危機を乗り切る道は",
          "他に",
          "ない"
        ],
        "answer": "一致団結をおいてこの危機を乗り切る道は他にない",
        "explanation": "Trật tự: 一致団結をおいて + Ngoài ra không còn đường nào khác."
      }
    ]
  },
  {
    "id": "jlpt-n1-wo-fumaete",
    "pattern": "〜を踏まえて",
    "title": "Dựa trên cơ sở / Tiền đề kinh nghiệm thực tiễn",
    "level": "N1",
    "position": 307,
    "meaning": "【N＋を踏まえて】Lấy các số liệu, bài học kinh nghiệm, ý kiến đóng góp hoặc kết quả điều tra thực tế làm điểm tựa vững chắc để xây dựng kế hoạch, chính sách mới",
    "formation": "N + を踏まえて / を踏まえ (văn phong báo cáo)\nBổ nghĩa cho danh từ: N1 + を踏まえた + N2",
    "explanation": "Dùng trong quản trị doanh nghiệp, hoạch định chính sách nhà nước và nghiên cứu khoa học: thể hiện cách tiếp cận bài bản, có căn cứ thực chứng.",
    "notes": "Chú thích phân biệt:\n- 〜を踏まえて: Căn cứ vào dữ liệu, tiền đề thực tế và bài học xương máu trong quá khứ.\n- 〜をもとに: Lấy nguyên liệu, chất liệu để sáng tác hoặc tạo ra sản phẩm mới.",
    "mistake": "Cảnh báo lỗi: Danh từ đi trước を踏まえて là những khái niệm trừu tượng (kết quả, kinh nghiệm, ý kiến, luật pháp), không đi với vật liệu vật lý thô (như gỗ, sắt, bột mì).",
    "related": [
      "bridge-n2-26",
      "jlpt-n2-ue-de"
    ],
    "examples": [
      {
        "ja": "前回の失敗を踏まえて、業務プロセスの全面的な見直しを行った。",
        "kana": "ぜんかいのしっぱいをふまえて、ぎょうむぷろせすのぜんめんてきなみなおしをおこなった。",
        "vi": "Rút ra bài học từ thất bại lần trước, chúng tôi đã tiến hành rà soát lại toàn bộ quy trình làm việc.",
        "readings": {
          "前回": "ぜんかい",
          "失敗": "しっぱい",
          "業務": "ぎょうむ",
          "見直し": "みなおし"
        }
      },
      {
        "ja": "アンケートの結果を踏まえ、新商品の開発方針を決定した。",
        "kana": "あんけーとのけっかをふまえ、しんしょうひんのかいはつほうしんをけっていした。",
        "vi": "Dựa trên kết quả khảo sát ý kiến khách hàng, chúng tôi đã quyết định định hướng phát triển sản phẩm mới.",
        "readings": {
          "結果": "けっか",
          "新商品": "しんしょうひん",
          "開発方針": "かいはつほうしん"
        }
      },
      {
        "ja": "住民の意見を踏まえた都市計画を推進していく方針だ。",
        "kana": "じゅうみんのいけんをふまえたとしけいかくをすいしんしていくほうしんだ。",
        "vi": "Định hướng của chúng tôi là thúc đẩy quy hoạch đô thị trên cơ sở tiếp thu ý kiến của người dân.",
        "readings": {
          "住民": "じゅうみん",
          "意見": "いけん",
          "都市計画": "としけいかく",
          "推進": "すいしん"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-wo-fumaete-1",
        "type": "choice",
        "prompt": "過去の反省を ___ 、新たなルールを策定した。",
        "options": [
          "踏まえて",
          "おいて",
          "まみれて",
          "極めて"
        ],
        "answer": "踏まえて",
        "explanation": "Dựa trên bài học kiểm điểm quá khứ: を踏まえて."
      },
      {
        "id": "jlpt-n1-wo-fumaete-2",
        "type": "fill",
        "prompt": "Điền từ bổ nghĩa danh từ: 現状の課題を ___ 改革案を提示した。",
        "answer": "踏まえた",
        "explanation": "Bổ nghĩa cho 改革案: を踏まえた + N."
      },
      {
        "id": "jlpt-n1-wo-fumaete-3",
        "type": "order",
        "prompt": "Sắp xếp: Kế hoạch được lập dựa trên kết quả khảo sát thực địa.",
        "options": [
          "現地の調査結果を",
          "踏まえて",
          "対策を",
          "検討した"
        ],
        "answer": "現地の調査結果を踏まえて対策を検討した",
        "explanation": "Trật tự: Dữ liệu điều tra + を踏まえて + Bàn bạc đối sách."
      },
      {
        "id": "jlpt-n1-wo-fumaete-4",
        "type": "choice",
        "prompt": "これまでの議論の経緯を ___ 、最終判断を下します。",
        "options": [
          "踏まえ",
          "こめ",
          "あまり",
          "かね"
        ],
        "answer": "踏まえ",
        "explanation": "Dạng liên từ báo cáo: 経緯を踏まえ."
      },
      {
        "id": "jlpt-n1-wo-fumaete-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 市場のニーズ ___ 踏まえた商品開発が求められている。",
        "answer": "を",
        "explanation": "Trợ từ cố định: を踏まえた."
      },
      {
        "id": "jlpt-n1-wo-fumaete-6",
        "type": "choice",
        "prompt": "専門家の助言を ___ 、医療体制を強化した。",
        "options": [
          "踏まえて",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "踏まえて",
        "explanation": "Dựa trên lời khuyên của chuyên gia: 助言を踏まえて."
      },
      {
        "id": "jlpt-n1-wo-fumaete-7",
        "type": "order",
        "prompt": "Sắp xếp: Chúng tôi sẽ đưa ra câu trả lời dựa trên sự thỏa thuận giữa đôi bên.",
        "options": [
          "両者の合意を",
          "踏まえた上で",
          "正式な回答を",
          "差し上げます"
        ],
        "answer": "両者の合意を踏まえた上で正式な回答を差し上げます",
        "explanation": "Trật tự: Thỏa thuận đôi bên + を踏まえた上で + Đưa ra câu trả lời chính thức."
      },
      {
        "id": "jlpt-n1-wo-fumaete-8",
        "type": "choice",
        "prompt": "前例の成功体験を ___ 指針を作成した。",
        "options": [
          "踏まえた",
          "踏まえて",
          "踏まえ",
          "踏まえれば"
        ],
        "answer": "踏まえた",
        "explanation": "Bổ nghĩa cho danh từ 指針 (kim chỉ nam): を踏まえた + N."
      },
      {
        "id": "jlpt-n1-wo-fumaete-9",
        "type": "fill",
        "prompt": "Điền từ: このような社会的背景を ___ 議論を深める必要がある。",
        "answer": "踏まえて",
        "explanation": "Căn cứ bối cảnh xã hội: 背景を踏まえて."
      },
      {
        "id": "jlpt-n1-wo-fumaete-10",
        "type": "order",
        "prompt": "Sắp xếp: Quy định mới được thiết lập dựa trên thực trạng hiện nay.",
        "options": [
          "現場の実態を",
          "踏まえて",
          "新規則が",
          "導入された"
        ],
        "answer": "現場の実態を踏まえて新規則が導入された",
        "explanation": "Trật tự: Thực trạng hiện trường + を踏まえて + Đưa vào quy tắc mới."
      }
    ]
  },
  {
    "id": "jlpt-n1-to-aimatte",
    "pattern": "〜と相まって",
    "title": "Cộng hưởng với / Kết hợp cùng tạo nên tác động lớn",
    "level": "N1",
    "position": 308,
    "meaning": "【N1＋と相まって / が相まって】Yếu tố A kết hợp cộng hưởng cùng với yếu tố B tạo nên hiệu ứng nhân đôi, mang lại kết quả vượt trội (tích cực hoặc tiêu cực)",
    "formation": "N + と相まって / が相まって\nBổ nghĩa cho danh từ: N1 + と相まった + N2",
    "explanation": "Diễn tả sự hòa quyện tác động qua lại giữa hai hoặc nhiều nguyên nhân khách quan, khiến sự việc chuyển biến mạnh mẽ hơn nhiều lần.",
    "notes": "Chú thích phân biệt:\n- 〜と相まって: Tác động cộng hưởng tương hỗ (ánh trăng hòa cùng tiếng sóng biển tạo nên khung cảnh lãng mạn).\n- 〜とともに: Cùng đồng thời diễn ra (anh cùng tôi bước đi).",
    "mistake": "Cảnh báo lỗi: Đi với hai nhân tố cùng tồn tại, không dùng cho sự việc diễn ra trước sau đứt đoạn.",
    "related": [
      "jlpt-n3-totomoni",
      "bridge-n2-35"
    ],
    "examples": [
      {
        "ja": "美しい紅葉が秋の澄んだ青空と相まって、息をのむ絶景を作り出している。",
        "kana": "うつくしいこうようがあきのすんだあおぞらとあいまって、いきをのむぜっけいをつくりだしている。",
        "vi": "Sắc lá đỏ tuyệt mỹ hòa quyện cùng bầu trời thu xanh trong đã tạo nên một tuyệt cảnh làm nức lòng người.",
        "readings": {
          "紅葉": "こうよう",
          "秋": "あき",
          "澄んだ": "すんだ",
          "青空": "あおぞら",
          "絶景": "ぜっけい"
        }
      },
      {
        "ja": "厳しい猛暑が水不足と相まって、農作物に深刻な被害をもたらした。",
        "kana": "きびしいもうしょがみずぶそくとあいまって、のうさくぶつにしんこくなひがいをもたらした。",
        "vi": "Nắng nóng gay gắt cộng hưởng với tình trạng thiếu nước đã gây thiệt hại nghiêm trọng cho cây trồng.",
        "readings": {
          "猛暑": "もうしょ",
          "水不足": "みずぶそく",
          "農作物": "のうさくぶつ",
          "深刻": "しんこく"
        }
      },
      {
        "ja": "本人の才能と絶え間ない努力とが相まって、ついに世界チャンピオンに輝いた。",
        "kana": "ほんにんのさいのうとたえまないどりょくとがあいまって、ついにせかいちゃんぴおんにかがやいた。",
        "vi": "Tài năng thiên bẩm hòa cùng những nỗ lực không ngừng nghỉ đã giúp anh tỏa sáng giành ngôi vô địch thế giới.",
        "readings": {
          "才能": "さいのう",
          "努力": "どりょく",
          "輝いた": "かがやいた"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-to-aimatte-1",
        "type": "choice",
        "prompt": "好天と ___ 、行楽地は多くの人々で賑わった。",
        "options": [
          "相まって",
          "踏まえて",
          "おいて",
          "まみれて"
        ],
        "answer": "相まって",
        "explanation": "Cộng hưởng với thời tiết đẹp: 好天と相まって."
      },
      {
        "id": "jlpt-n1-to-aimatte-2",
        "type": "fill",
        "prompt": "Điền từ cộng hưởng: 不況が人手不足と ___ 、倒産する企業が続出した。",
        "answer": "相まって",
        "explanation": "Suy thoái cộng hưởng thiếu nhân lực: 不況が〜と相まって."
      },
      {
        "id": "jlpt-n1-to-aimatte-3",
        "type": "order",
        "prompt": "Sắp xếp: Ánh đèn rực rỡ hòa cùng âm nhạc tạo nên không gian tuyệt vời.",
        "options": [
          "照明の演出が",
          "音楽と相まって",
          "素晴らしい雰囲気を",
          "醸し出している"
        ],
        "answer": "照明の演出が音楽と相まって素晴らしい雰囲気を醸し出している",
        "explanation": "Trật tự: Hiệu ứng ánh sáng + Hòa cùng âm nhạc + Tạo không khí tuyệt vời."
      },
      {
        "id": "jlpt-n1-to-aimatte-4",
        "type": "choice",
        "prompt": "立地の良さが味の評判 ___ 、その店は連日大繁盛だ。",
        "options": [
          "と相まって",
          "はおろか",
          "たるもの",
          "ずくめ"
        ],
        "answer": "と相まって",
        "explanation": "Vị trí đắc địa hòa cùng danh tiếng món ngon: と相まって."
      },
      {
        "id": "jlpt-n1-to-aimatte-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 原材料の高騰 ___ 円安が相まって、物価が上昇した。",
        "answer": "と",
        "explanation": "Cặp trợ từ kết hợp: N1 と N2 が相まって."
      },
      {
        "id": "jlpt-n1-to-aimatte-6",
        "type": "choice",
        "prompt": "歴史ある建築が雪景色と相まって ___ 美しさを放っている。",
        "options": [
          "幽玄な",
          "下品な",
          "退屈な",
          "安っぽい"
        ],
        "answer": "幽玄な",
        "explanation": "Tạo nên vẻ đẹp huyền ảo thanh tịnh: 幽玄な美しさ."
      },
      {
        "id": "jlpt-n1-to-aimatte-7",
        "type": "order",
        "prompt": "Sắp xếp: Tinh thần đoàn kết cộng với chiến thuật tài tình đã mang lại thắng lợi.",
        "options": [
          "団結力が",
          "優れた戦術と",
          "相まって",
          "勝利をもたらした"
        ],
        "answer": "団結力が優れた戦術と相まって勝利をもたらした",
        "explanation": "Trật tự: Sức mạnh đoàn kết + Cộng hưởng chiến thuật + Mang lại thắng lợi."
      },
      {
        "id": "jlpt-n1-to-aimatte-8",
        "type": "choice",
        "prompt": "静寂が夜の闇と相まって、周囲には ___ 空気が漂っていた。",
        "options": [
          "神秘的な",
          "騒がしい",
          "明るい",
          "陽気な"
        ],
        "answer": "神秘的な",
        "explanation": "Sự yên ắng hòa cùng bóng đêm tĩnh mịch: 神秘的な空気."
      },
      {
        "id": "jlpt-n1-to-aimatte-9",
        "type": "fill",
        "prompt": "Điền từ: 彼の熱意が周囲の支え ___ 相まって、大成功を収めた。",
        "answer": "と",
        "explanation": "熱意が周囲の支えと相まって."
      },
      {
        "id": "jlpt-n1-to-aimatte-10",
        "type": "order",
        "prompt": "Sắp xếp: Tác dụng cộng hưởng của hai yếu tố đã giải quyết dứt điểm vấn đề.",
        "options": [
          "二つの要因が",
          "相まって",
          "問題の早期解決に",
          "つながった"
        ],
        "answer": "二つの要因が相まって問題の早期解決につながった",
        "explanation": "Trật tự: Hai nhân tố cộng hưởng + Dẫn tới giải quyết nhanh chóng."
      }
    ]
  },
  {
    "id": "jlpt-n1-kiwamaru",
    "pattern": "〜極まる・極まりない",
    "title": "Cực kỳ / Vô cùng... không gì sánh nổi",
    "level": "N1",
    "position": 309,
    "meaning": "【Aな＋極まる / 極まりない】Đạt đến mức độ tột cùng, tột đỉnh (thường dùng cho các tính từ cảm xúc tiêu cực, nguy hiểm, phẫn nộ hoặc thiếu thận trọng)",
    "formation": "Aな (bỏ な) + 極まる / 極まりない\n* Ngoại lệ: Tính từ đuôi い có dạng cổ: 感極まる (xúc động trào dâng)",
    "explanation": "Diễn tả trạng thái hoặc hành vi đã chạm đến giới hạn cao nhất không thể vượt qua: vô cùng nguy hiểm, cực kỳ vô lễ, tột cùng bất cẩn.",
    "notes": "Chú thích phân biệt:\n- 〜極まる / 極まりない: Dùng chủ yếu cho đánh giá tiêu cực nghiêm trọng (失礼極まりない, 危険極まる, 不愉快極まりない).\n- 〜この上ない: Có thể dùng cho cả điều vô cùng hạnh phúc tốt đẹp.",
    "mistake": "Cảnh báo lỗi: Cả 極まる (khẳng định) và 極まりない (phủ định hình thức) đều mang cùng MỘT ý nghĩa nhấn mạnh mức độ tột đỉnh.",
    "related": [
      "bridge-n2-36",
      "jlpt-n1-tittaranai"
    ],
    "examples": [
      {
        "ja": "あの男の態度は、失礼極まりない。二度と会いたくない。",
        "kana": "あのおとこのたいどは、しつれいきわまりない。にどとあいたくない。",
        "vi": "Thái độ của gã đàn ông đó vô lễ cùng cực. Tôi không bao giờ muốn gặp lại nữa.",
        "readings": {
          "男": "おとこ",
          "態度": "たいど",
          "失礼": "しつれい",
          "二度と": "にどと"
        }
      },
      {
        "ja": "命綱もつけずに高所で作業するなんて、危険極まる行為だ。",
        "kana": "いのちづなもつけずにこうしょでさぎょうするなんて、きけんきわまるこういだ。",
        "vi": "Làm việc trên cao mà không thắt dây an toàn thì đúng là một hành vi nguy hiểm tột độ.",
        "readings": {
          "命綱": "いのちづな",
          "高所": "こうしょ",
          "作業": "さぎょう",
          "危険": "きけん",
          "行為": "こうい"
        }
      },
      {
        "ja": "優勝の瞬間、監督は感極まって涙を流した。",
        "kana": "ゆうしょうのしゅんかん、かんとくはかんきわまってなみだをながした。",
        "vi": "Đúng khoảnh khắc đội nhà vô địch, vị huấn luyện viên xúc động tột cùng bật khóc.",
        "readings": {
          "優勝": "ゆうしょう",
          "瞬間": "しゅんかん",
          "監督": "かんとく",
          "感極まって": "かんきわまって",
          "涙": "なみだ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-kiwamaru-1",
        "type": "choice",
        "prompt": "そんな無責任な発言をするとは、非常識 ___ 。",
        "options": [
          "極まりない",
          "に相まって",
          "をおいて",
          "ならでは"
        ],
        "answer": "極まりない",
        "explanation": "Hành vi vô ý thức tột độ: 非常識極まりない."
      },
      {
        "id": "jlpt-n1-kiwamaru-2",
        "type": "fill",
        "prompt": "Điền từ mức độ cực hạn: 夜間の山道でのスピード運転は危険 ___ 行為だ。",
        "answer": "極まる",
        "explanation": "Bổ nghĩa cho 行為: 危険極まる行為 (hành vi nguy hiểm tột cùng)."
      },
      {
        "id": "jlpt-n1-kiwamaru-3",
        "type": "order",
        "prompt": "Sắp xếp: Thất bại vì lý do ngớ ngẩn như vậy thì đúng là đáng tiếc vô cùng.",
        "options": [
          "こんな些細なミスで負けるとは",
          "残念",
          "極まり",
          "ない"
        ],
        "answer": "こんな些細なミスで負けるとは残念極まりない",
        "explanation": "Trật tự: Nhận định + 残念 + 極まり + ない."
      },
      {
        "id": "jlpt-n1-kiwamaru-4",
        "type": "choice",
        "prompt": "彼の身勝手な振る舞いは、不愉快 ___ 。",
        "options": [
          "極まる",
          "まみれる",
          "ずくめだ",
          "はおろかだ"
        ],
        "answer": "極まる",
        "explanation": "Không thể chịu nổi, khó chịu tột đỉnh: 不愉快極まる."
      },
      {
        "id": "jlpt-n1-kiwamaru-5",
        "type": "fill",
        "prompt": "Điền từ cụm cố định: 表彰台に立った選手は感 ___ 涙ぐんだ。",
        "answer": "極まって",
        "explanation": "Cụm thành ngữ cố định: 感極まって (xúc động nghẹn ngào)."
      },
      {
        "id": "jlpt-n1-kiwamaru-6",
        "type": "choice",
        "prompt": "何の根拠もない噂を信じるなんて、愚劣 ___ 話だ。",
        "options": [
          "極まる",
          "極める",
          "極み",
          "極まれば"
        ],
        "answer": "極まる",
        "explanation": "Bổ nghĩa danh từ: 愚劣極まる話 (câu chuyện ngu xuẩn tột độ)."
      },
      {
        "id": "jlpt-n1-kiwamaru-7",
        "type": "order",
        "prompt": "Sắp xếp: Phải chịu sự sỉ nhục trước mặt đám đông đúng là điều nhục nhã vô bờ.",
        "options": [
          "人前で侮辱され",
          "屈辱",
          "極まり",
          "なかった"
        ],
        "answer": "人前で侮辱され屈辱極まりなかった",
        "explanation": "Trật tự: Bị sỉ nhục + 屈辱 + 極まり + なかった."
      },
      {
        "id": "jlpt-n1-kiwamaru-8",
        "type": "choice",
        "prompt": "この期に及んで言い訳をするとは、見苦しいこと ___ 。",
        "options": [
          "極まりない",
          "にほかならない",
          "を余儀なくされる",
          "まじき"
        ],
        "answer": "極まりない",
        "explanation": "Vô cùng chướng mắt: 見苦しいこと極まりない."
      },
      {
        "id": "jlpt-n1-kiwamaru-9",
        "type": "fill",
        "prompt": "Điền từ: 命を粗末にする行為は無謀 ___ 。",
        "answer": "極まる",
        "explanation": "Vô cùng liều lĩnh: 無謀極まる (hoặc 無謀極まりない)."
      },
      {
        "id": "jlpt-n1-kiwamaru-10",
        "type": "order",
        "prompt": "Sắp xếp: Thái độ bất lịch sự như thế khiến người khác tức giận khôn cùng.",
        "options": [
          "あの無礼な態度は",
          "失礼極まりなく",
          "許しがたい",
          "ものだ"
        ],
        "answer": "あの無礼な態度は失礼極まりなく許しがたいものだ",
        "explanation": "Trật tự: Thái độ đó + 失礼極まりなく + Không thể tha thứ được."
      }
    ]
  },
  {
    "id": "jlpt-n1-ni-itaru",
    "pattern": "〜に至る・に至っては・に至るまで",
    "title": "Đạt tới / Đến mức / Đến cả trường hợp",
    "level": "N1",
    "position": 310,
    "meaning": "【Dạng 1: 〜に至る】Diễn tiến đạt tới một kết cục, tình thế cực hạn\n【Dạng 2: 〜に至っては】Đến mức như trường hợp cực đoan này thì thật hết nói nổi\n【Dạng 3: 〜から〜に至るまで】Từ A cho đến tận cả B (phạm vi bao quát toàn diện)",
    "formation": "【Dạng 1】V từ điển / N + に至る / に至った\n【Dạng 2】N + に至っては\n【Dạng 3】N1 + から + N2 + に至るまで",
    "explanation": "Một trong những cấu trúc xương sống của văn phong học thuật và nhật báo: diễn tả sự leo thang của sự việc từ mức độ bình thường đến mức độ cực đoan nhất.",
    "notes": "Chú thích phân biệt:\n- 〜に至っては: Nêu ra ví dụ tiêu biểu tồi tệ nhất, bày tỏ thái độ ngán ngẩm, bất lực.\n- 〜に至るまで: Bao quát đến tận chi tiết nhỏ nhất (từ đầu tóc đến tận ngón chân).",
    "mistake": "Cảnh báo lỗi: 〜に至る thường nói về kết cục nghiêm trọng hoặc quyết định bước ngoặt (事ここに至っては: cơ sự đã đến nước này).",
    "related": [
      "bridge-n2-35",
      "jlpt-n3-niwatatte"
    ],
    "examples": [
      {
        "ja": "事ここに至っては、もはや法的手続きを取るしかない。",
        "kana": "ことここにいたっては、もはやほうてきてつづきをとるしかない。",
        "vi": "Cơ sự một khi đã đến nước này thì chẳng còn cách nào khác ngoài nhờ đến pháp luật can thiệp.",
        "readings": {
          "事": "こと",
          "法的手続き": "ほうてきてつづき"
        }
      },
      {
        "ja": "服装から持ち物に至るまで、全て高級ブランドで固めている。",
        "kana": "ふくそうからもちものにいたるまで、すべてこうきゅうぶらんどでかためている。",
        "vi": "Từ trang phục cho đến tận những món đồ phụ kiện nhỏ nhất, tất cả đều được dát toàn hàng hiệu đắt tiền.",
        "readings": {
          "服装": "ふくそう",
          "持ち物": "もちもの",
          "高級": "こうきゅう"
        }
      },
      {
        "ja": "多くの関係者の協力を得て、ついに合意に至った。",
        "kana": "おおくのかんけいしゃのきょうりょくをえて、ついにごういにいたった。",
        "vi": "Nhờ sự chung tay hỗ trợ của đông đảo các bên liên quan, cuối cùng các bên đã đạt tới thỏa thuận chung.",
        "readings": {
          "関係者": "かんけいしゃ",
          "協力": "きょうりょく",
          "合意": "ごうい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-ni-itaru-1",
        "type": "choice",
        "prompt": "長年の研究が実を結び、製品化に ___ 。",
        "options": [
          "至った",
          "限った",
          "おいた",
          "こめた"
        ],
        "answer": "至った",
        "explanation": "Đạt tới giai đoạn thương mại hóa: 製品化に至った."
      },
      {
        "id": "jlpt-n1-ni-itaru-2",
        "type": "fill",
        "prompt": "Điền từ ví dụ cực đoan tồi tệ: 弟の怠け癖はひどく、昨日に ___ は昼過ぎまで寝ていた。",
        "answer": "至って",
        "explanation": "N + に至っては: 昨日に至っては (đến nước như hôm qua)."
      },
      {
        "id": "jlpt-n1-ni-itaru-3",
        "type": "order",
        "prompt": "Sắp xếp: Từ trẻ nhỏ cho tới tận các cụ già ai nấy đều hân hoan.",
        "options": [
          "子供から",
          "お年寄りに",
          "至るまで",
          "楽しめた"
        ],
        "answer": "子供からお年寄りに至るまで楽しめた",
        "explanation": "Trật tự: Aから + Bに + 至るまで + Thưởng thức."
      },
      {
        "id": "jlpt-n1-ni-itaru-4",
        "type": "choice",
        "prompt": "事態が最悪の局面に ___ 前に、手を打つべきだ。",
        "options": [
          "至る",
          "至った",
          "至って",
          "至ろう"
        ],
        "answer": "至る",
        "explanation": "V từ điển + 前に: 至る前に."
      },
      {
        "id": "jlpt-n1-ni-itaru-5",
        "type": "fill",
        "prompt": "Điền trợ từ: この結論 ___ 至るまでに、多くの議論を重ねた。",
        "answer": "に",
        "explanation": "Trợ từ cố định: N + に至る."
      },
      {
        "id": "jlpt-n1-ni-itaru-6",
        "type": "choice",
        "prompt": "他の社員はともかく、課長に ___ は一度も顔を出さなかった。",
        "options": [
          "至っては",
          "相まって",
          "おいては",
          "ならでは"
        ],
        "answer": "至っては",
        "explanation": "Đến mức cỡ như trưởng phòng mà lại không lộ mặt: 課長に至っては."
      },
      {
        "id": "jlpt-n1-ni-itaru-7",
        "type": "order",
        "prompt": "Sắp xếp: Từ thiết kế cho đến tận chế tạo sản xuất đều diễn ra trong nước.",
        "options": [
          "設計から",
          "製造に至るまで",
          "国内で",
          "行われた"
        ],
        "answer": "設計から製造に至るまで国内で行われた",
        "explanation": "Trật tự: Từ thiết kế + Đến tận chế tạo (製造に至るまで) + Trong nước."
      },
      {
        "id": "jlpt-n1-ni-itaru-8",
        "type": "choice",
        "prompt": "病状が悪化し、入院を余儀なくされるに ___ 。",
        "options": [
          "至った",
          "おいた",
          "限った",
          "こめた"
        ],
        "answer": "至った",
        "explanation": "Đến nông nỗi buộc lòng phải nhập viện: に至った."
      },
      {
        "id": "jlpt-n1-ni-itaru-9",
        "type": "fill",
        "prompt": "Điền từ: 天文学から日常会話に ___ まで、幅広い知識を持っている。",
        "answer": "至る",
        "explanation": "Cấu trúc bao quát: 〜に至るまで."
      },
      {
        "id": "jlpt-n1-ni-itaru-10",
        "type": "order",
        "prompt": "Sắp xếp: Tình hình đã đến nước này thì hối hận cũng đã muộn màng.",
        "options": [
          "事ここに至っては",
          "後悔しても",
          "始まら",
          "ない"
        ],
        "answer": "事ここに至っては後悔しても始まらない",
        "explanation": "Trật tự: Thành ngữ 事ここに至っては + Hối hận cũng không kịp."
      }
    ]
  },
  {
    "id": "jlpt-n1-mamire",
    "pattern": "〜まみれ",
    "title": "Bao phủ dính đầy chất bẩn / Ngập trong nợ nần",
    "level": "N1",
    "position": 311,
    "meaning": "【N＋まみれ】Bề mặt cơ thể hoặc đồ vật bị bao phủ, bám dính đầy các chất dơ bẩn, nhơ nhớp (bùn, bụi, mồ hôi, máu) hoặc rơi vào cảnh khốn đốn (nợ nần chồng chất)",
    "formation": "N (chất bẩn dính bết: 泥, 汗, 血, 埃, 借金) + まみれ",
    "explanation": "Diễn tả trạng thái nhơ nhuốc, bết dính toàn thân trông vô cùng nhếch nhác hoặc tình cảnh bi đát của một người bị vùi lấp trong khó khăn.",
    "notes": "Chú thích phân biệt:\n- 〜まみれ: Bám dính toàn chất bẩn trên bề mặt da thịt, đồ vật (泥まみれ, 血まみれ, 借金まみれ).\n- 〜だらけ: Đầy rẫy những lỗi lầm hoặc vật vụn vặt rải rác trong không gian (間違いだらけ, ゴミだらけ).\n- 〜ずくめ: Toàn những chuyện tốt lành hoặc bao trùm một tông màu trong suốt một giai đoạn (いいことずくめ, 黒ずくめ).",
    "mistake": "Cảnh báo lỗi: Tuyệt đối không dùng まみれ cho những điều tích cực hoặc điều sạch sẽ (không nói 幸せまみれ hay お金まみれ).",
    "related": [
      "jlpt-n1-zukume",
      "bridge-n2-34"
    ],
    "examples": [
      {
        "ja": "子供たちは泥まみれになって公園でサッカーをしている。",
        "kana": "こどもたちはどろまみれになってこうえんでさっかーをしている。",
        "vi": "Lũ trẻ lấm lem bùn đất khắp người đang mải mê đá bóng trong công viên.",
        "readings": {
          "子供": "こども",
          "泥": "どろ",
          "公園": "こうえん"
        }
      },
      {
        "ja": "倒産した社長は、借金まみれの生活から抜け出せないでいる。",
        "kana": "とうさんしたしゃちょうは、しゃっきんまみれのせいかつからぬけだせないでいる。",
        "vi": "Vị giám đốc phá sản vẫn chưa thể nào thoát ra khỏi cảnh ngập ngụa nợ nần chồng chất.",
        "readings": {
          "倒産": "とうさん",
          "社長": "しゃちょう",
          "借金": "しゃっきん",
          "生活": "せいかつ"
        }
      },
      {
        "ja": "大掃除をしたら、体中が埃まみれになってしまった。",
        "kana": "おおそうじをしたら、からだじゅうがほこりまみれになってしまった。",
        "vi": "Dọn dẹp tổng vệ sinh xong là toàn thân tôi bám đầy bụi bặm lấm lem.",
        "readings": {
          "大掃除": "おおそうじ",
          "体中": "からだじゅう",
          "埃": "ほこり"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-mamire-1",
        "type": "choice",
        "prompt": "ラグビーの選手たちは ___ になってボールを奪い合っている。",
        "options": [
          "泥まみれ",
          "泥ずくめ",
          "泥ならでは",
          "泥たるもの"
        ],
        "answer": "泥まみれ",
        "explanation": "Lấm lem bùn đất khắp người: 泥まみれ."
      },
      {
        "id": "jlpt-n1-mamire-2",
        "type": "fill",
        "prompt": "Điền từ bám dính chất lỏng: 激しい戦いで、彼は血 ___ になって倒れた。",
        "answer": "まみれ",
        "explanation": "Toàn thân nhuốm máu: 血まみれ."
      },
      {
        "id": "jlpt-n1-mamire-3",
        "type": "order",
        "prompt": "Sắp xếp: Toàn thân mồ hôi nhễ nhại sau khi chạy marathon.",
        "options": [
          "マラソンを終えて",
          "汗まみれに",
          "なって",
          "息を切らした"
        ],
        "answer": "マラソンを終えて汗まみれになって息を切らした",
        "explanation": "Trật tự: Chạy xong + 汗まみれになって + Thở dốc."
      },
      {
        "id": "jlpt-n1-mamire-4",
        "type": "choice",
        "prompt": "長年放置された倉庫は、クモの巣と ___ だった。",
        "options": [
          "埃まみれ",
          "埃ずくめ",
          "埃ならでは",
          "埃をおいて"
        ],
        "answer": "埃まみれ",
        "explanation": "Bụi bặm bám dính bao phủ: 埃まみれ."
      },
      {
        "id": "jlpt-n1-mamire-5",
        "type": "fill",
        "prompt": "Điền từ khốn đốn nợ nần: ギャンブルにのめり込み、借金 ___ の人生を送っている。",
        "answer": "まみれ",
        "explanation": "Nợ nần ngập ngụa: 借金まみれ."
      },
      {
        "id": "jlpt-n1-mamire-6",
        "type": "choice",
        "prompt": "油 ___ の作業服を着て、黙々と機械を修理した。",
        "options": [
          "まみれ",
          "ずくめ",
          "きわまる",
          "ならでは"
        ],
        "answer": "まみれ",
        "explanation": "Quần áo bảo hộ bám đầy dầu nhớt: 油まみれ."
      },
      {
        "id": "jlpt-n1-mamire-7",
        "type": "order",
        "prompt": "Sắp xếp: Vụ bê bối đã khiến cả sự nghiệp ngập trong tai tiếng.",
        "options": [
          "その政治家は",
          "疑惑まみれで",
          "政界を",
          "去った"
        ],
        "answer": "その政治家は疑惑まみれで政界を去った",
        "explanation": "Trật tự: Chính trị gia + Ngập trong nghi vấn + Rời chính trường."
      },
      {
        "id": "jlpt-n1-mamire-8",
        "type": "choice",
        "prompt": "砂浜を転げ回って、服も髪も ___ になった。",
        "options": [
          "砂まみれ",
          "砂ずくめ",
          "砂だらけ",
          "砂ばかり"
        ],
        "answer": "砂まみれ",
        "explanation": "Cát bám dính dơ khắp người: 砂まみれ."
      },
      {
        "id": "jlpt-n1-mamire-9",
        "type": "fill",
        "prompt": "Điền từ: 傷 ___ の体を引きずってゴールラインを越えた。",
        "answer": "まみれ",
        "explanation": "Toàn thân bầm dập thương tích: 傷まみれ (hoặc 傷だらけ)."
      },
      {
        "id": "jlpt-n1-mamire-10",
        "type": "order",
        "prompt": "Sắp xếp: Chú cún chạy ngoài mưa về nhà ướt sũng bùn lầy.",
        "options": [
          "雨の中を走ってきた犬が",
          "泥まみれの足で",
          "部屋に",
          "入ってきた"
        ],
        "answer": "雨の中を走ってきた犬が泥まみれの足で部屋に入ってきた",
        "explanation": "Trật tự: Chú cún + Chân dính đầy bùn đất + Bước vào phòng."
      }
    ]
  },
  {
    "id": "jlpt-n1-zukume",
    "pattern": "〜ずくめ",
    "title": "Toàn là điều may mắn / Toàn là một tông màu",
    "level": "N1",
    "position": 312,
    "meaning": "【N＋ずくめ】Toàn là / Chỉ toàn những sự kiện tốt lành, may mắn, hạnh phúc diễn ra liên tiếp trong một giai đoạn, hoặc toàn một tông màu duy nhất từ đầu đến chân",
    "formation": "N (thường là: いいこと, 結構なこと, 幸運, 黒, 白) + ずくめ",
    "explanation": "Bày tỏ tâm trạng hân hoan tột cùng khi vận may mỉm cười liên tục, hoặc mô tả một diện mạo mang một màu sắc đồng nhất từ trên xuống dưới.",
    "notes": "Chú thích phân biệt:\n- 〜ずくめ: Chủ yếu là ĐIỀU TỐT LÀNH may mắn (いいことずくめ), hoặc màu sắc (黒ずくめの男: gã đàn ông mặc nguyên cây đen bí ẩn).\n- 〜まみれ: Dính đầy chất bẩn dơ dớp.\n- 〜だらけ: Toàn sai sót hoặc rác rưởi.",
    "mistake": "Cảnh báo lỗi: Không dùng 〜ずくめ cho lỗi sai rải rác (sai: 間違いずくめ, đúng: 間違いだらけ).",
    "related": [
      "jlpt-n1-mamire",
      "bridge-n2-34"
    ],
    "examples": [
      {
        "ja": "昇進も決まり、子供も生まれ、今年はいいことずくめの素晴らしい年だった。",
        "kana": "しょうしんもきまり、こどももうまれ、ことしはいいことずくめのすばらしいとしだった。",
        "vi": "Vừa được thăng chức, vừa đón con chào đời, năm nay đúng là một năm toàn những điều tốt lành may mắn.",
        "readings": {
          "昇進": "しょうしん",
          "生まれ": "うまれ",
          "今年": "ことし",
          "素晴らしい": "すばらしい"
        }
      },
      {
        "ja": "黒ずくめの怪しい男が、ビルの周りをうろついている。",
        "kana": "くろずくめのあやしいおとこが、びるのまわりをうろついている。",
        "vi": "Gã đàn ông khả nghi diện nguyên cây đen từ đầu đến chân đang lảng vảng quanh tòa nhà.",
        "readings": {
          "黒": "くろ",
          "怪しい": "あやしい",
          "男": "おとこ"
        }
      },
      {
        "ja": "ご馳走に温泉、今回の旅行は贅沢ずくめで大満足だった。",
        "kana": "ごちそうにおんせん、こんかいのりょこうはぜいたくずくめでだいまんぞくだった。",
        "vi": "Sơn hào hải vị rồi tắm suối nước nóng, chuyến đi này chỉ toàn những điều xa hoa mỹ mãn.",
        "readings": {
          "馳走": "ちそう",
          "温泉": "おんせん",
          "旅行": "りょこう",
          "贅沢": "ぜいたく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-zukume-1",
        "type": "choice",
        "prompt": "宝くじが当たり、試験にも合格して、最近は ___ だ。",
        "options": [
          "いいことずくめ",
          "いいことまみれ",
          "いいことだらけ",
          "いいこと極まりない"
        ],
        "answer": "いいことずくめ",
        "explanation": "Toàn là điều may mắn phước lành: いいことずくめ."
      },
      {
        "id": "jlpt-n1-zukume-2",
        "type": "fill",
        "prompt": "Điền từ trang phục nguyên một màu: 彼は頭から靴まで黒 ___ のファッションを好む。",
        "answer": "ずくめ",
        "explanation": "Toàn màu đen: 黒ずくめ."
      },
      {
        "id": "jlpt-n1-zukume-3",
        "type": "order",
        "prompt": "Sắp xếp: Kỳ nghỉ này đối với tôi chỉ toàn là những kỷ niệm vui vẻ hạnh phúc.",
        "options": [
          "この休暇は",
          "楽しいことずくめで",
          "最高の思い出に",
          "なった"
        ],
        "answer": "この休暇は楽しいことずくめで最高の思い出になった",
        "explanation": "Trật tự: Kỳ nghỉ này + 楽しいことずくめで + Thành kỷ niệm tuyệt nhất."
      },
      {
        "id": "jlpt-n1-zukume-4",
        "type": "choice",
        "prompt": "白 ___ のドレスを身にまとった花嫁は息をのむほど美しかった。",
        "options": [
          "ずくめ",
          "まみれ",
          "きわまりない",
          "ならでは"
        ],
        "answer": "ずくめ",
        "explanation": "Toàn một màu trắng tinh khôi: 白ずくめ."
      },
      {
        "id": "jlpt-n1-zukume-5",
        "type": "fill",
        "prompt": "Điền từ: この新制度は、従業員にとってメリット ___ の素晴らしい内容だ。",
        "answer": "ずくめ",
        "explanation": "Toàn những điều có lợi: メリットずくめ."
      },
      {
        "id": "jlpt-n1-zukume-6",
        "type": "choice",
        "prompt": "毎日ごちそうを食べて、結構 ___ の日々を送っている。",
        "options": [
          "ずくめ",
          "まみれ",
          "だらけ",
          "きわまる"
        ],
        "answer": "ずくめ",
        "explanation": "Toàn những ngày tháng êm ấm no đủ: 結構ずくめ."
      },
      {
        "id": "jlpt-n1-zukume-7",
        "type": "order",
        "prompt": "Sắp xếp: Năm nay đối với đội bóng của chúng tôi là một năm toàn những điều may mắn.",
        "options": [
          "我がチームにとって",
          "今年は幸運ずくめの",
          "記念すべき",
          "一年となった"
        ],
        "answer": "我がチームにとって今年は幸運ずくめの記念すべき一年となった",
        "explanation": "Trật tự: Đối với đội bóng + 幸運ずくめの + Một năm đáng nhớ."
      },
      {
        "id": "jlpt-n1-zukume-8",
        "type": "choice",
        "prompt": "こんなに ___ の話には、裏があるのではないかと疑ってしまう。",
        "options": [
          "うまいことずくめ",
          "うまいことまみれ",
          "うまいこと極まる",
          "うまいことたるもの"
        ],
        "answer": "うまいことずくめ",
        "explanation": "Toàn điều hời ngon ăn: うまいことずくめ."
      },
      {
        "id": "jlpt-n1-zukume-9",
        "type": "fill",
        "prompt": "Điền từ: 彼女の結婚生活は幸せ ___ で、皆から羨ましがられている。",
        "answer": "ずくめ",
        "explanation": "Hạnh phúc tràn trề liên tiếp: 幸せずくめ."
      },
      {
        "id": "jlpt-n1-zukume-10",
        "type": "order",
        "prompt": "Sắp xếp: Việc mua căn nhà này mang lại toàn điểm lợi cho cuộc sống.",
        "options": [
          "この物件の購入は",
          "我が家にとって",
          "利点ずくめの",
          "選択だった"
        ],
        "answer": "この物件の購入は我が家にとって利点ずくめの選択だった",
        "explanation": "Trật tự: Mua nhà + 利点ずくめの + Sự lựa chọn mang lại toàn lợi ích."
      }
    ]
  },
  {
    "id": "jlpt-n1-tittaranai",
    "pattern": "〜といったらない",
    "title": "Không thốt nên lời / Không kể xiết",
    "level": "N1",
    "position": 313,
    "meaning": "【A / N＋といったらない】Mức độ của cảm xúc, vẻ đẹp, sự kinh ngạc hay khó chịu lớn đến nỗi không có ngôn từ nào trong nhân gian có thể diễn tả trọn vẹn",
    "formation": "Aい / Aな (dạng だ hoặc の) / N + といったらない (thân mật hơn: ったらありゃしない)",
    "explanation": "Dùng cả trong văn đàm thoại sống động lẫn văn tự sự cảm thán: truyền tải sự ngỡ ngàng tột bậc trước một trải nghiệm không từ ngữ nào tả xiết.",
    "notes": "Chú thích phân biệt:\n- 〜といったらない: Nhấn mạnh sự bất lực của ngôn từ khi muốn miêu tả mức độ (đẹp không tả xiết, ngon không tả nổi).\n- 〜てたまらない: Cảm giác cơ thể hoặc bức bối nội tâm đòi hỏi giải tỏa.",
    "mistake": "Cảnh báo lỗi: Mặc dù có hình thức phủ định ない nhưng cấu trúc này khẳng định MỨC ĐỘ CỰC CAO của sự vật.",
    "related": [
      "jlpt-n2-tamaranai",
      "jlpt-n1-kiwamaru"
    ],
    "examples": [
      {
        "ja": "富士山頂から見たご来光の美しさといったらなかった。",
        "kana": "ふじさんちょうからみたごらいこうのうつくしさといったらなかった。",
        "vi": "Vẻ đẹp của vầng mặt trời mọc ngắm nhìn từ đỉnh núi Phú Sĩ thật không có ngôn từ nào tả xiết.",
        "readings": {
          "富士山頂": "ふじさんちょう",
          "見た": "みた",
          "美しさ": "うつくしさ"
        }
      },
      {
        "ja": "試験に満点で合格した時の嬉しさといったらなかった。",
        "kana": "しけんにまんてんでごうかくしたときのうれしさといったらなかった。",
        "vi": "Nỗi mừng vui sướng khi hay tin thi đỗ điểm tuyệt đối thật không sao kể xiết.",
        "readings": {
          "満点": "まんてん",
          "合格": "ごうかく",
          "嬉しさ": "うれしさ"
        }
      },
      {
        "ja": "満員電車の蒸し暑さと不快さといったらありゃしない。",
        "kana": "まんいんでんしゃのむしあつさとふかいさといったらありゃしない。",
        "vi": "Sự ngột ngạt và bức bối trong toa tàu điện chật ních người đúng là không từ nào diễn tả nổi.",
        "readings": {
          "満員電車": "まんいんでんしゃ",
          "蒸し暑さ": "むしあつさ",
          "不快さ": "ふかいさ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-tittaranai-1",
        "type": "choice",
        "prompt": "息子の晴れ姿を見た時の感激 ___ 。",
        "options": [
          "といったらなかった",
          "とあって",
          "たるものだ",
          "ならではだ"
        ],
        "answer": "といったらなかった",
        "explanation": "Xúc động không ngôn từ nào tả xiết trong quá khứ: といったらなかった."
      },
      {
        "id": "jlpt-n1-tittaranai-2",
        "type": "fill",
        "prompt": "Điền từ không tả xiết: あの店のケーキの美味しさ ___ 、毎日でも通いたいほどだ。",
        "answer": "といったら",
        "explanation": "〜といったら(ない): ngon không sao tả xiết."
      },
      {
        "id": "jlpt-n1-tittaranai-3",
        "type": "order",
        "prompt": "Sắp xếp: Căn phòng này bừa bộn đến mức không thể diễn tả nổi.",
        "options": [
          "彼の部屋の",
          "散らかりようと",
          "いったら",
          "ない"
        ],
        "answer": "彼の部屋の散らかりようといったらない",
        "explanation": "Trật tự: Mức độ bừa bộn + と + いったら + ない."
      },
      {
        "id": "jlpt-n1-tittaranai-4",
        "type": "choice",
        "prompt": "一人で異国の地に放り出された時の心細さ ___ 。",
        "options": [
          "といったらなかった",
          "はおろかだった",
          "まみれだった",
          "ずくめだった"
        ],
        "answer": "といったらなかった",
        "explanation": "Nỗi cô đơn lạc lõng không sao kể xiết: といったらなかった."
      },
      {
        "id": "jlpt-n1-tittaranai-5",
        "type": "fill",
        "prompt": "Điền từ dạng thân mật: あの人の失礼さといった ___ しないよ。",
        "answer": "らありゃ",
        "explanation": "Dạng nói thân mật bức xúc: といったらありゃしない."
      },
      {
        "id": "jlpt-n1-tittaranai-6",
        "type": "choice",
        "prompt": "久しぶりに食べた母の手料理の懐かしさ ___ 。",
        "options": [
          "といったらなかった",
          "とあって",
          "たるもの",
          "ならでは"
        ],
        "answer": "といったらなかった",
        "explanation": "Cảm giác hoài niệm không tả xiết: といったらなかった."
      },
      {
        "id": "jlpt-n1-tittaranai-7",
        "type": "order",
        "prompt": "Sắp xếp: Trận động đất lúc đó đáng sợ đến mức không thốt nên lời.",
        "options": [
          "あの時の地震の",
          "恐ろしさと",
          "いったら",
          "なかった"
        ],
        "answer": "あの時の地震の恐ろしさといったらなかった",
        "explanation": "Trật tự: Cơn động đất + 恐ろしさと + いったら + なかった."
      },
      {
        "id": "jlpt-n1-tittaranai-8",
        "type": "choice",
        "prompt": "真冬の夜の寒さ ___ 、体の芯まで凍りつくようだった。",
        "options": [
          "といったら",
          "とあって",
          "をおいて",
          "ならでは"
        ],
        "answer": "といったら",
        "explanation": "Lạnh không kể xiết: 寒さといったら."
      },
      {
        "id": "jlpt-n1-tittaranai-9",
        "type": "fill",
        "prompt": "Điền từ đuôi: その時の恥ずかしさといったら ___ 。",
        "answer": "なかった",
        "explanation": "Quá khứ: といったらなかった."
      },
      {
        "id": "jlpt-n1-tittaranai-10",
        "type": "order",
        "prompt": "Sắp xếp: Cảnh tượng tráng lệ của bầu trời đầy sao không từ nào diễn tả nổi.",
        "options": [
          "満天の星空の",
          "美しさと",
          "いったら",
          "言葉にできない"
        ],
        "answer": "満天の星空の美しさといったら言葉にできない",
        "explanation": "Trật tự: Bầu trời sao + 美しさと + いったら + Không lời nào diễn tả được."
      }
    ]
  },
  {
    "id": "jlpt-n1-yoginaku",
    "pattern": "〜を余儀なくされる・余儀なくさせる",
    "title": "Bị đẩy vào thế bắt buộc phải / Buộc phải chấp nhận",
    "level": "N1",
    "position": 314,
    "meaning": "【Dạng 1: N＋を余儀なくされる】Chủ ngữ chịu cảnh ngộ éo le, bị hoàn cảnh khách quan ép buộc phải làm điều không hề mong muốn\n【Dạng 2: N＋を余儀なくさせる】Hoàn cảnh khách quan đó làm phát sinh điều bắt buộc đối với chủ thể khác",
    "formation": "N (thường là: 中止, 延期, 変更, 避難, 撤退) + を余儀なくされる (bị động)\nN + を余儀なくさせる (sai khiến)",
    "explanation": "Cụm từ ngữ cốt lõi trong ngôn ngữ chính trị, bản tin thiên tai, kinh tế của đài NHK và các báo lớn: phản ánh các quyết định đau đớn bị hoàn cảnh khắc nghiệt đẩy đưa.",
    "notes": "Chú thích phân biệt:\n- 〜を余儀なくされる: Ngôi thứ nhất hoặc tổ chức bị hoàn cảnh ép buộc (chúng tôi đành phải rút lui).\n- 〜を余儀なくさせる: Thiên tai/khủng hoảng là chủ ngữ gây ra ép buộc cho người khác (trận bão đã buộc hàng ngàn người phải sơ tán).",
    "mistake": "Cảnh báo lỗi: Nhầm lẫn giữa thể bị động (される - người bị ép) và thể sai khiến (させる - hoàn cảnh tác động).",
    "related": [
      "jlpt-n2-zarwoenai",
      "bridge-n2-41"
    ],
    "examples": [
      {
        "ja": "大型台風の直撃を受け、航空各社は全便欠航を余儀なくされた。",
        "kana": "おおがたたいふうのちょくげきをうけ、こうくうかくしゃはぜんびんけっこうをよぎなくされた。",
        "vi": "Hứng chịu đòn tấn công trực diện của cơn bão lớn, các hãng hàng không đã buộc lòng phải hủy toàn bộ các chuyến bay.",
        "readings": {
          "直撃": "ちょくげき",
          "航空": "こうくう",
          "全便欠航": "ぜんびんけっこう",
          "余儀なく": "よぎなく"
        }
      },
      {
        "ja": "深刻な資金難が、同社に工場の閉鎖を余儀なくさせた。",
        "kana": "しんこくなしきんなんが、どうしゃにこうじょうのへいさをよぎなくさせた。",
        "vi": "Khó khăn tài chính nghiêm trọng đã buộc công ty này phải đóng cửa nhà máy sản xuất.",
        "readings": {
          "資金難": "しきんなん",
          "閉鎖": "へいさ"
        }
      },
      {
        "ja": "怪我の悪化により、彼は惜しまれつつも現役引退を余儀なくされた。",
        "kana": "けがのあっかにより、かれはおしまれつつもげんえきいんたいをよぎなくされた。",
        "vi": "Do chấn thương chuyển biến xấu, anh đã đành phải giải nghệ thi đấu chuyên nghiệp trong sự tiếc nuối khôn nguôi của người hâm mộ.",
        "readings": {
          "悪化": "あっか",
          "引退": "いんたい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-yoginaku-1",
        "type": "choice",
        "prompt": "大雪のため、列車の運行停止を ___ 。",
        "options": [
          "余儀なくされた",
          "極まりなかった",
          "おいていなかった",
          "ならなかった"
        ],
        "answer": "余儀なくされた",
        "explanation": "Bị ép buộc dừng chạy tàu: 運行停止を余儀なくされた."
      },
      {
        "id": "jlpt-n1-yoginaku-2",
        "type": "fill",
        "prompt": "Điền thể bị động: 戦争によって、多くの市民が国外への避難を余儀なく ___ 。",
        "answer": "された",
        "explanation": "Bị động: 余儀なくされた."
      },
      {
        "id": "jlpt-n1-yoginaku-3",
        "type": "order",
        "prompt": "Sắp xếp: Vụ việc bất ngờ đã buộc ban tổ chức phải thay đổi kế hoạch.",
        "options": [
          "突然のトラブルが",
          "主催者に計画の変更を",
          "余儀なく",
          "させた"
        ],
        "answer": "突然のトラブルが主催者に計画の変更を余儀なくさせた",
        "explanation": "Trật tự: Hoàn cảnh + Ép ban tổ chức (〜に) + 余儀なくさせた."
      },
      {
        "id": "jlpt-n1-yoginaku-4",
        "type": "choice",
        "prompt": "急激な為替変動が、企業に経営戦略の抜本的な修正を ___ 。",
        "options": [
          "余儀なくさせた",
          "余儀なくされた",
          "余儀なくした",
          "余儀なくなった"
        ],
        "answer": "余儀なくさせた",
        "explanation": "Biến động tỷ giá (chủ ngữ) buộc doanh nghiệp phải sửa đổi: 余儀なくさせた."
      },
      {
        "id": "jlpt-n1-yoginaku-5",
        "type": "fill",
        "prompt": "Điền trợ từ: コロナ禍により、店舗の休業 ___ 余儀なくされた。",
        "answer": "を",
        "explanation": "Trợ từ đi trước 余儀なく là を: 休業を余儀なくされた."
      },
      {
        "id": "jlpt-n1-yoginaku-6",
        "type": "choice",
        "prompt": "健康上の理由から、彼は志半ばで帰国を ___ 。",
        "options": [
          "余儀なくされた",
          "とあって",
          "はおろか",
          "たるものだ"
        ],
        "answer": "余儀なくされた",
        "explanation": "Buộc phải về nước giữa chừng: 帰国を余儀なくされた."
      },
      {
        "id": "jlpt-n1-yoginaku-7",
        "type": "order",
        "prompt": "Sắp xếp: Dự án bị buộc phải hoãn lại do cắt giảm ngân sách.",
        "options": [
          "予算削減により",
          "プロジェクトの延期を",
          "余儀なく",
          "されてしまった"
        ],
        "answer": "予算削減によりプロジェクトの延期を余儀なくされてしまった",
        "explanation": "Trật tự: Cắt giảm ngân sách + 延期を + 余儀なく + されてしまった."
      },
      {
        "id": "jlpt-n1-yoginaku-8",
        "type": "choice",
        "prompt": "長引く不況が、多くの若者に不安定な雇用を ___ いる。",
        "options": [
          "余儀なくさせて",
          "余儀なくされて",
          "余儀なくして",
          "余儀なくなった"
        ],
        "answer": "余儀なくさせて",
        "explanation": "Suy thoái kinh tế ép thanh niên vào việc làm bấp bênh: 余儀なくさせている."
      },
      {
        "id": "jlpt-n1-yoginaku-9",
        "type": "fill",
        "prompt": "Điền từ: 住民は長期間の避難生活を ___ された。",
        "answer": "余儀なく",
        "explanation": "Cụm cố định: 〜を余儀なくされた."
      },
      {
        "id": "jlpt-n1-yoginaku-10",
        "type": "order",
        "prompt": "Sắp xếp: Bất đồng chính kiến đã buộc các thành viên phải chia rẽ.",
        "options": [
          "意見の対立が",
          "グループの解散を",
          "余儀なく",
          "させた"
        ],
        "answer": "意見の対立がグループの解散を余儀なくさせた",
        "explanation": "Trật tự: Bất đồng ý kiến + Giải tán nhóm + 余儀なくさせた."
      }
    ]
  },
  {
    "id": "jlpt-n1-kirai-ga-aru",
    "pattern": "〜きらいがある",
    "title": "Có khuynh hướng, tật xấu không mong muốn",
    "level": "N1",
    "position": 315,
    "meaning": "【Vる / Nの＋きらいがある】Có khuynh hướng xấu, có thói tật hoặc chiều hướng tiêu cực hay xảy ra đối với đối tượng",
    "formation": "V từ điển / N + の + きらいがある",
    "explanation": "Dùng khi phê bình khéo léo hoặc nhận xét thận trọng về một thói quen, tật xấu hoặc thiên hướng tiêu cực của một cá nhân, tập thể.",
    "notes": "Chú thích phân biệt:\n- 〜きらいがある: Luôn nói về THÓI TẬT TIÊU CỰC, không mong muốn (nóng vội, suy nghĩ phiến diện, độc đoán).\n- 〜がちだ: Tần suất dễ xảy ra sự việc (dễ bị cảm cúm, hay quên chìa khóa).\n- 〜っぽい: Tính chất bề ngoài nhiều hơn (nhiều dầu mỡ, tính như trẻ con).",
    "mistake": "Cảnh báo lỗi: Không bao giờ dùng cho chiều hướng tốt đẹp (sai: 彼は親切なきらいがある).",
    "related": [
      "bridge-n2-36",
      "jlpt-n2-kuseni"
    ],
    "examples": [
      {
        "ja": "彼は物事を一人で独断で決めてしまうきらいがある。",
        "kana": "かれはものごとをひとりでどくだんできめてしまうきらいがある。",
        "vi": "Anh ta có cái tật xấu là hay tự mình độc đoán quyết định mọi việc.",
        "readings": {
          "物事": "ものごと",
          "独断": "どくだん",
          "決めて": "きめて"
        }
      },
      {
        "ja": "現代人はインターネットの情報を鵜呑みにするきらいがある。",
        "kana": "げんだいじんはいんたーねっとのじょうほうをうのみにするきらいがある。",
        "vi": "Con người thời nay có xu hướng dở là hay tin sái cổ vào thông tin trên mạng Internet.",
        "readings": {
          "現代人": "げんだいじん",
          "情報": "じょうほう",
          "鵜呑み": "うのみ"
        }
      },
      {
        "ja": "どうも最近の若者は、苦労を避けるきらいが見受けられる。",
        "kana": "どうもさいきんのわかものは、くろうをさけるきらいがみうけられる。",
        "vi": "Dường như giới trẻ thời nay có chiều hướng ngại khó ngại khổ.",
        "readings": {
          "最近": "さいきん",
          "若者": "わかもの",
          "苦労": "くろう",
          "避ける": "さける"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-kirai-ga-aru-1",
        "type": "choice",
        "prompt": "彼は人の意見を聞かず、独善的に ___ きらいがある。",
        "options": [
          "陥る",
          "陥った",
          "陥って",
          "陥ろう"
        ],
        "answer": "陥る",
        "explanation": "V từ điển + きらいがある: 陥るきらいがある (có xu hướng rơi vào bảo thủ độc đoán)."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối danh từ: 彼女は物事を悲観的に考えすぎる傾向 ___ きらいがある。",
        "answer": "の",
        "explanation": "N + の + きらいがある: 傾向のきらいがある."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-3",
        "type": "order",
        "prompt": "Sắp xếp: Giám đốc có tật xấu là hay nóng nảy thúc ép cấp dưới.",
        "options": [
          "部長は",
          "結果を焦るあまり",
          "部下を急かす",
          "きらいがある"
        ],
        "answer": "部長は結果を焦るあまり部下を急かすきらいがある",
        "explanation": "Trật tự: Chủ ngữ + Nóng vội kết quả + Thúc ép cấp dưới + きらいがある."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-4",
        "type": "choice",
        "prompt": "あの評論家の意見は、批判のための批判に ___ きらいがある。",
        "options": [
          "走る",
          "走った",
          "走って",
          "走ろう"
        ],
        "answer": "走る",
        "explanation": "V từ điển + きらいがある: 走るきらいがある."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-5",
        "type": "fill",
        "prompt": "Điền từ phê bình khéo léo: 自分を過大評価する ___ があるから注意したほうがいい。",
        "answer": "きらい",
        "explanation": "Thói tật tự cao tự đại: 過大評価するきらいがある."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-6",
        "type": "choice",
        "prompt": "この組織は前例を踏襲する ___ が強く、変革が進まない。",
        "options": [
          "きらい",
          "まみれ",
          "ずくめ",
          "極み"
        ],
        "answer": "きらい",
        "explanation": "Thiên hướng bảo thủ dập khuôn: きらいが強い."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-7",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy có thói quen hễ gặp khó khăn là đổ lỗi cho người khác.",
        "options": [
          "困ると",
          "他人のせいにする",
          "きらいが",
          "ある"
        ],
        "answer": "困ると他人のせいにするきらいがある",
        "explanation": "Trật tự: Hễ gặp khó + Đổ lỗi người khác + きらいがある."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-8",
        "type": "choice",
        "prompt": "感情的になって冷静さを ___ きらいがあるのは彼の弱点だ。",
        "options": [
          "失う",
          "失った",
          "失って",
          "失おう"
        ],
        "answer": "失う",
        "explanation": "V từ điển: 失うきらいがある."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-9",
        "type": "fill",
        "prompt": "Điền thể đúng của 誇張する: 話を ___ きらいがある。",
        "answer": "誇張する",
        "explanation": "V từ điển: 誇張するきらいがある (có tật hay nói quá thổi phồng)."
      },
      {
        "id": "jlpt-n1-kirai-ga-aru-10",
        "type": "order",
        "prompt": "Sắp xếp: Chính sách này có phần thiên vị các doanh nghiệp lớn.",
        "options": [
          "大企業を",
          "優遇しすぎる",
          "きらいが",
          "否めない"
        ],
        "answer": "大企業を優遇しすぎるきらいが否めない",
        "explanation": "Trật tự: Ưu ái doanh nghiệp lớn + きらいが + Không thể phủ nhận (否めない)."
      }
    ]
  },
  {
    "id": "jlpt-n1-nbakari",
    "pattern": "〜んばかりだ・んばかりに",
    "title": "Dường như muốn... đến mức như sắp",
    "level": "N1",
    "position": 316,
    "meaning": "【Vない bỏ ない＋んばかり（だ / に）】Cứ như thể muốn nói / như sắp sửa làm điều đó đến nơi (mặc dù thực tế chưa làm ra hành động cụ thể)",
    "formation": "V thể ない bỏ ない + んばかりだ / んばかりに / んばかりの + N\n* Ngoại lệ nhóm 3: する → せんばかり",
    "explanation": "Miêu tả thái độ, ánh mắt hoặc áp lực biểu cảm vô cùng sống động của đối phương đến mức người nhìn có cảm giác việc đó sắp sửa diễn ra trước mắt.",
    "notes": "Chú thích phân biệt:\n- 〜んばかり: Thường đi với biểu cảm gương mặt hoặc thái độ kịch tính (nói bằng ánh mắt hệt như muốn đuổi đi).\n- 〜そう: Trực giác diện mạo thông thường (trời có vẻ sắp mưa).",
    "mistake": "Cảnh báo lỗi: Không dùng cho chính bản thân mình (không nói 私は泣かんばかりだ), mà dùng để quan sát người khác.",
    "related": [
      "bridge-n3-09",
      "jlpt-n4-souda-kigou"
    ],
    "examples": [
      {
        "ja": "彼女は今にも泣き出さんばかりの顔で立ち尽くしていた。",
        "kana": "かのじょはいまにもなきださんばかりのかおでたちつくしていた。",
        "vi": "Cô ấy đứng chôn chân với khuôn mặt hệt như sắp òa khóc nức nở đến nơi.",
        "readings": {
          "彼女": "かのじょ",
          "今にも": "いまにも",
          "泣き出さん": "なきださん",
          "顔": "かお"
        }
      },
      {
        "ja": "「早く出て行け」と言わんばかりの冷たい視線を向けられた。",
        "kana": "「はやくでていけ」といわんばかりのつめたいしせんをむけられた。",
        "vi": "Tôi bị chĩa vào một ánh nhìn lạnh băng hệt như muốn gắt lên: \"Mau cút xéo khỏi đây đi!\".",
        "readings": {
          "言わん": "いわん",
          "冷たい": "つめたい",
          "視線": "しせん"
        }
      },
      {
        "ja": "割れんばかりの拍手と歓声がスタジアムに響き渡った。",
        "kana": "われんばかりのはくしゅとかんせいがすたじあむにひびきわたった。",
        "vi": "Tràng pháo tay và tiếng reo hò rền vang như muốn vỡ tung cả sân vận động.",
        "readings": {
          "割れん": "われん",
          "拍手": "はくしゅ",
          "歓声": "かんせい",
          "響き渡った": "ひびきわたった"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-nbakari-1",
        "type": "choice",
        "prompt": "会場には ___ ばかりの拍手が鳴り響いた。",
        "options": [
          "割れん",
          "割れる",
          "割れた",
          "割れそう"
        ],
        "answer": "割れん",
        "explanation": "Cụm từ kinh điển: 割れんばかりの拍手 (vỗ tay như vỡ òa)."
      },
      {
        "id": "jlpt-n1-nbakari-2",
        "type": "fill",
        "prompt": "Điền thể chia của 言う: 「邪魔だ」と ___ ばかりの態度を取られた。",
        "answer": "言わん",
        "explanation": "言う → 言わない → 言わんばかり (như muốn nói)."
      },
      {
        "id": "jlpt-n1-nbakari-3",
        "type": "order",
        "prompt": "Sắp xếp: Cậu bé cúi gập đầu tạ lỗi như thể sắp chạm trán xuống sàn.",
        "options": [
          "頭を",
          "床に擦り付けん",
          "ばかりに",
          "深く謝罪した"
        ],
        "answer": "頭を床に擦り付けんばかりに深く謝罪した",
        "explanation": "Trật tự: Đầu + 床に擦り付けん (sát sàn) + ばかりに + Cúi đầu xin lỗi."
      },
      {
        "id": "jlpt-n1-nbakari-4",
        "type": "choice",
        "prompt": "怒りで胸が張り ___ ばかりだった。",
        "options": [
          "裂けん",
          "裂ける",
          "裂けた",
          "裂けそう"
        ],
        "answer": "裂けん",
        "explanation": "Lồng ngực như muốn vỡ toang vì giận: 張り裂けんばかり."
      },
      {
        "id": "jlpt-n1-nbakari-5",
        "type": "fill",
        "prompt": "Điền thể ngoại lệ của する: 襲いかからんばかりの勢いで突進して ___ 。",
        "answer": "きた",
        "explanation": "Thế lao đến như sắp vồ lấy: 襲いかからんばかり."
      },
      {
        "id": "jlpt-n1-nbakari-6",
        "type": "choice",
        "prompt": "今にも飛び ___ ばかりに喜びを爆発させた。",
        "options": [
          "上がらん",
          "上がる",
          "上がった",
          "上がろう"
        ],
        "answer": "上がらん",
        "explanation": "Vui như muốn nhảy cẫng lên trời: 飛び上がらんばかり."
      },
      {
        "id": "jlpt-n1-nbakari-7",
        "type": "order",
        "prompt": "Sắp xếp: Anh ta nhìn tôi chằm chằm bằng ánh mắt hệt như muốn nuốt chửng.",
        "options": [
          "私を",
          "飲み込まん",
          "ばかりの目つきで",
          "睨みつけた"
        ],
        "answer": "私を飲み込まんばかりの目つきで睨みつけた",
        "explanation": "Trật tự: Tôi + 飲み込まん (như muốn nuốt sống) + ばかりの目つきで + Nhìn chằm chằm."
      },
      {
        "id": "jlpt-n1-nbakari-8",
        "type": "choice",
        "prompt": "溢れんばかりの情熱を ___ 語った。",
        "options": [
          "込めて",
          "おいて",
          "まみれて",
          "きわめて"
        ],
        "answer": "込めて",
        "explanation": "溢れんばかりの情熱を込めて: dồn hết nhiệt huyết trào dâng."
      },
      {
        "id": "jlpt-n1-nbakari-9",
        "type": "fill",
        "prompt": "Điền thể chia của 崩れる: 今にも ___ ばかりに傾いている古い小屋。",
        "answer": "崩れん",
        "explanation": "崩れる → 崩れない → 崩れんばかり (như sắp đổ sập)."
      },
      {
        "id": "jlpt-n1-nbakari-10",
        "type": "order",
        "prompt": "Sắp xếp: Đứa trẻ nài nỉ xin xỏ với vẻ mặt như sắp khóc đến nơi.",
        "options": [
          "泣かんばかりの",
          "顔で",
          "おもちゃを",
          "ねだった"
        ],
        "answer": "泣かんばかりの顔でおもちゃをねだった",
        "explanation": "Trật tự: Mặt như sắp khóc + 顔で + Đòi mua đồ chơi."
      }
    ]
  },
  {
    "id": "jlpt-n1-sobakara",
    "pattern": "〜そばから",
    "title": "Vừa mới làm xong thì ngay lập tức lại bị (lặp đi lặp lại)",
    "level": "N1",
    "position": 317,
    "meaning": "【Vる / Vた＋そばから】Vừa mới dọn dẹp/nhắc nhở/học xong thì ngay tắp lự lại bị bừa bãi/tái phạm/quên béng mất (chu kỳ lặp đi lặp lại gây ngán ngẩm)",
    "formation": "V từ điển / Vた + そばから",
    "explanation": "Diễn tả sự bất lực hoặc ngán ngẩm khi một công sức vừa mới bỏ ra lập tức bị vô hiệu hóa vì sự việc đối nghịch lại ập đến ngay sau đó nhiều lần.",
    "notes": "Chú thích phân biệt:\n- 〜そばから: Luôn mang tính LẶP ĐI LẶP LẠI nhiều lần khiến người nói ngán ngẩm (vừa quét xong lại rụng lá).\n- 〜が早いか / 〜やいなや: Chỉ khoảnh khắc đơn lẻ tức thì của một hành động chớp nhoáng duy nhất.",
    "mistake": "Cảnh báo lỗi: Không dùng cho những sự việc chỉ diễn ra một lần duy nhất mà không có tính chu kỳ quay vòng.",
    "related": [
      "jlpt-n1-gahayaka",
      "jlpt-n1-ya-inaya"
    ],
    "examples": [
      {
        "ja": "部屋を片付けるそばから、子供がおもちゃを散らかしてしまう。",
        "kana": "へやをかたづけるそばから、こどもがおもちゃをちらかしてしまう。",
        "vi": "Vừa mới dọn phòng xong thì đứa con lại bày bừa đồ chơi ra tứ tung.",
        "readings": {
          "部屋": "へや",
          "片付ける": "かたづける",
          "子供": "こども",
          "散らかして": "ちらかして"
        }
      },
      {
        "ja": "単語を覚えたそばから忘れていくので、復習が欠かせない。",
        "kana": "たんごをおぼえたそばからわすれていくので、ふくしゅうがかかせない。",
        "vi": "Từ vựng vừa mới học thuộc xong là lại quên béng ngay nên việc ôn tập là không thể thiếu.",
        "readings": {
          "単語": "たんご",
          "覚えた": "おぼえた",
          "忘れて": "わすれて",
          "復習": "ふくしゅう"
        }
      },
      {
        "ja": "注意するそばから同じミスを繰り返すので、本当に困る。",
        "kana": "ちゅういするそばからおなじみすをくりかえすので、ほんとうにこまる。",
        "vi": "Vừa mới nhắc nhở xong lại tái phạm đúng lỗi cũ, thật là đau đầu hết biết.",
        "readings": {
          "注意": "ちゅうい",
          "同じ": "おなじ",
          "繰り返す": "くりかえす"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-sobakara-1",
        "type": "choice",
        "prompt": "掃除をした ___ 落ち葉が舞い散ってくる。",
        "options": [
          "そばから",
          "んばかりに",
          "きらいに",
          "ならでは"
        ],
        "answer": "そばから",
        "explanation": "Vừa quét xong lá lại rụng: 掃除をしたそばから."
      },
      {
        "id": "jlpt-n1-sobakara-2",
        "type": "fill",
        "prompt": "Điền từ chu kỳ lặp lại gây chán nản: 給料が入った ___ から借金の返済に消えていく。",
        "answer": "そば",
        "explanation": "Lương vừa vào đã bốc hơi: 入ったそばから."
      },
      {
        "id": "jlpt-n1-sobakara-3",
        "type": "order",
        "prompt": "Sắp xếp: Bánh mì vừa mới nướng xong là bán hết sạch veo ngay lập tức.",
        "options": [
          "焼いた",
          "そばから",
          "次々と",
          "売れていく"
        ],
        "answer": "焼いたそばから次々と売れていく",
        "explanation": "Trật tự: Vた + そばから + Liên tục bán hết."
      },
      {
        "id": "jlpt-n1-sobakara-4",
        "type": "choice",
        "prompt": "いくら注意 ___ そばから、またスマホをいじっている。",
        "options": [
          "する",
          "し",
          "しよう",
          "され"
        ],
        "answer": "する",
        "explanation": "V từ điển + そばから: 注意するそばから."
      },
      {
        "id": "jlpt-n1-sobakara-5",
        "type": "fill",
        "prompt": "Điền từ: 覚える ___ から忘れてしまうのでメモを取ることにした。",
        "answer": "そば",
        "explanation": "Vừa nhớ đã quên: 覚えるそばから."
      },
      {
        "id": "jlpt-n1-sobakara-6",
        "type": "choice",
        "prompt": "雪を掻くそばから ___ 降り積もってくる。",
        "options": [
          "どんどん",
          "めっきり",
          "まるっきり",
          "ちっとも"
        ],
        "answer": "どんどん",
        "explanation": "Tuyết lại dồn dập rơi xuống: どんどん降り積もる."
      },
      {
        "id": "jlpt-n1-sobakara-7",
        "type": "order",
        "prompt": "Sắp xếp: Cốc nước vừa rót đầy là đã uống cạn sạch ngay tức thì.",
        "options": [
          "注いだそばから",
          "一気に",
          "飲み干して",
          "しまった"
        ],
        "answer": "注いだそばから一気に飲み干してしまった",
        "explanation": "Trật tự: Vừa rót xong + Một hơi cạn sạch."
      },
      {
        "id": "jlpt-n1-sobakara-8",
        "type": "choice",
        "prompt": "作ったそばから食べられてしまい、皿には ___ 残っていない。",
        "options": [
          "何も",
          "すべて",
          "たくさん",
          "全部"
        ],
        "answer": "何も",
        "explanation": "Vừa nấu xong bị ăn hết trơn: 何も残っていない."
      },
      {
        "id": "jlpt-n1-sobakara-9",
        "type": "fill",
        "prompt": "Điền thể đúng của 聞く: 説明を ___ そばから分からなくなってしまう。",
        "answer": "聞いた",
        "explanation": "Vた + そばから: 聞いたそばから."
      },
      {
        "id": "jlpt-n1-sobakara-10",
        "type": "order",
        "prompt": "Sắp xếp: Thư mới gửi đi là lập tức nhận lại thư khiếu nại.",
        "options": [
          "返信を送った",
          "そばから",
          "新たな抗議が",
          "届いた"
        ],
        "answer": "返信を送ったそばから新たな抗議が届いた",
        "explanation": "Trật tự: Gửi phản hồi xong + Lập tức nhận thư phản đối mới."
      }
    ]
  },
  {
    "id": "jlpt-n1-gahayaka",
    "pattern": "〜が早いか",
    "title": "Vừa mới dứt thì ngay tức khắc",
    "level": "N1",
    "position": 318,
    "meaning": "【Vる / Vた＋が早いか】Hành động A vừa dứt khoát diễn ra xong thì ngay tức khắc hành động B kế tiếp bùng nổ trong chớp mắt",
    "formation": "V từ điển / Vた + が早いか",
    "explanation": "Dùng trong văn kể chuyện sinh động để diễn tả sự khẩn trương, mau lẹ cực hạn của hành động B ngay khi hành động A vừa khép lại.",
    "notes": "Chú thích phân biệt:\n- 〜が早いか: Vế sau là HÀNH ĐỘNG CÓ Ý CHÍ thực hiện ngay tức khắc của con người (lao ra khỏi cửa, ôm chầm lấy).\n- 〜や否や: Có thể dùng cho cả hiện tượng tự nhiên khách quan tức thì.",
    "mistake": "Cảnh báo lỗi: Vế sau không dùng câu thể hiện nguyện vọng (たい) hoặc mệnh lệnh (てください), mà là một sự thật đã diễn ra.",
    "related": [
      "jlpt-n1-ya-inaya",
      "jlpt-n1-nari"
    ],
    "examples": [
      {
        "ja": "終業のチャイムが鳴るが早いか、生徒たちは教室を飛び出した。",
        "kana": "しゅうぎょうのちゃいむがなるがはやいか、せいとたちはきょうしつをとびだした。",
        "vi": "Chuông tan học vừa mới dứt tiếng, lũ học sinh đã lao vụt ra khỏi lớp học.",
        "readings": {
          "終業": "しゅうぎょう",
          "鳴る": "なる",
          "生徒": "せいと",
          "教室": "きょうしつ",
          "飛び出した": "とびだした"
        }
      },
      {
        "ja": "セール開始の合図が響くが早いか、客は目当ての売り場へ駆け出した。",
        "kana": "せーるかいしのあいずがひびくがはやいか、きゃくはめあてのうりばへかけだした。",
        "vi": "Hiệu lệnh mở màn đợt giảm giá vừa vang lên, khách mua sắm đã nhào ngay về phía quầy hàng mục tiêu.",
        "readings": {
          "開始": "かいし",
          "合図": "あいず",
          "客": "きゃく",
          "売り場": "うりば"
        }
      },
      {
        "ja": "彼は玄関ドアを開けるが早いか、カバンを放り投げてベッドに倒れ込んだ。",
        "kana": "かれはげんかんどあをあけるがはやいか、かばんをほうりなげてべっどにたおれこんだ。",
        "vi": "Vừa mở cửa nhà ra là anh ta quẳng ngay chiếc cặp xách rồi đổ sập xuống giường.",
        "readings": {
          "玄関": "げんかん",
          "開ける": "あける",
          "放り投げて": "ほうりなげて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-gahayaka-1",
        "type": "choice",
        "prompt": "ベルが鳴るが ___ 、受話器を取った。",
        "options": [
          "早いか",
          "遅いか",
          "そばから",
          "ばかりか"
        ],
        "answer": "早いか",
        "explanation": "Chuông vừa kêu là nhấc máy tức khắc: が早いか."
      },
      {
        "id": "jlpt-n1-gahayaka-2",
        "type": "fill",
        "prompt": "Điền từ hành động thần tốc: 彼は席に着くが ___ か、パソコンを開いて作業を始めた。",
        "answer": "早い",
        "explanation": "〜が早いか: vừa mới ngồi xuống đã mở máy."
      },
      {
        "id": "jlpt-n1-gahayaka-3",
        "type": "order",
        "prompt": "Sắp xếp: Vừa nhìn thấy mẹ là em bé đã òa khóc nức nở.",
        "options": [
          "母親の顔を見るが",
          "早いか",
          "子供は",
          "大声で泣き出した"
        ],
        "answer": "母親の顔を見るが早いか子供は大声で泣き出した",
        "explanation": "Trật tự: V từ điển + が早いか + Bật khóc."
      },
      {
        "id": "jlpt-n1-gahayaka-4",
        "type": "choice",
        "prompt": "電車がホームに ___ が早いか、乗客がどっと降りてきた。",
        "options": [
          "止まる",
          "止まって",
          "止まろう",
          "止まれば"
        ],
        "answer": "止まる",
        "explanation": "V từ điển + が早いか: 止まるが早いか."
      },
      {
        "id": "jlpt-n1-gahayaka-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 合図の手旗が振られる ___ 早いか、レーシングカーが一斉にスタートした。",
        "answer": "が",
        "explanation": "Cấu trúc V + が早いか."
      },
      {
        "id": "jlpt-n1-gahayaka-6",
        "type": "choice",
        "prompt": "犯人は警察の姿を ___ が早いか、路地裏へ逃げ込んだ。",
        "options": [
          "認める",
          "認めた",
          "認めて",
          "認めよう"
        ],
        "answer": "認める",
        "explanation": "V từ điển: 認めるが早いか (vừa thoáng thấy bóng cảnh sát)."
      },
      {
        "id": "jlpt-n1-gahayaka-7",
        "type": "order",
        "prompt": "Sắp xếp: Vừa đặt lưng xuống giường là anh ấy đã ngáy khò khò.",
        "options": [
          "横になるが",
          "早いか",
          "彼は深い眠りに",
          "落ちた"
        ],
        "answer": "横になるが早いか彼は深い眠りに落ちた",
        "explanation": "Trật tự: Vừa ngả lưng + が早いか + Chìm vào giấc ngủ sâu."
      },
      {
        "id": "jlpt-n1-gahayaka-8",
        "type": "choice",
        "prompt": "話題を振るが早いか、彼女は熱心に ___ 始めた。",
        "options": [
          "語り",
          "語る",
          "語って",
          "語ろう"
        ],
        "answer": "語り",
        "explanation": "V thân ます + 始めた: 語り始めた."
      },
      {
        "id": "jlpt-n1-gahayaka-9",
        "type": "fill",
        "prompt": "Điền thể chia của 見る: スープを一口 ___ が早いか、「うまい！」と叫んだ。",
        "answer": "飲む",
        "explanation": "V từ điển + が早いか: 飲むが早いか (vừa húp một ngụm)."
      },
      {
        "id": "jlpt-n1-gahayaka-10",
        "type": "order",
        "prompt": "Sắp xếp: Cánh cửa vừa hé mở là chú cún đã phóng vụt ra ngoài.",
        "options": [
          "ドアが開くが",
          "早いか",
          "犬は外へ",
          "飛び出していった"
        ],
        "answer": "ドアが開くが早いか犬は外へ飛び出していった",
        "explanation": "Trật tự: Cửa vừa mở + が早いか + Lao vụt ra ngoài."
      }
    ]
  },
  {
    "id": "jlpt-n1-ya-inaya",
    "pattern": "〜や・や否や",
    "title": "Ngay trong chớp mắt vừa xong thì",
    "level": "N1",
    "position": 319,
    "meaning": "【Vる＋や / や否や】Hành động A vừa xảy ra xong thì gần như cùng lúc đó hành động hoặc sự biến chuyển B lập tức xuất hiện",
    "formation": "V từ điển + や / や否や (やいなや)",
    "explanation": "Nhấn mạnh tính đồng thời cực độ của hai sự việc nối tiếp nhau không một giây chậm trễ, thường tạo cảm giác bất ngờ hoặc phản ứng tức thời.",
    "notes": "Chú thích phân biệt:\n- 〜や否や: Có thể đi với cả hiện tượng tự nhiên khách quan hoặc phản ứng cơ thể (thuốc vừa uống xong thì cơn đau tan biến ngay).\n- 〜が早いか: Thường tập trung vào hành vi chủ động vội vã của con người.",
    "mistake": "Cảnh báo lỗi: Không dùng động từ ở thể quá khứ trước や否や (sai: 食べたや否や, đúng: 食べるや否や).",
    "related": [
      "jlpt-n1-gahayaka",
      "jlpt-n1-nari"
    ],
    "examples": [
      {
        "ja": "薬を飲むや否や、激しい胃の痛みが嘘のように引いていった。",
        "kana": "くすりをのむやいなや、はげしいいのいたみがうそのようにひいていった。",
        "vi": "Vừa uống viên thuốc xong thì cơn đau dạ dày dữ dội dịu đi nhanh chóng như một phép màu.",
        "readings": {
          "薬": "くすり",
          "飲む": "のむ",
          "痛": "いた",
          "胃": "い"
        }
      },
      {
        "ja": "空がピカッと光るや否や、ものすごい雷鳴が轟いた。",
        "kana": "そらがぴかっとひかるやいなや、ものすごきらいめいがとどろいた。",
        "vi": "Bầu trời vừa lóe lên tia chớp thì tức thì một tiếng sấm sét đinh tai rền vang.",
        "readings": {
          "空": "そら",
          "光る": "ひかる",
          "雷鳴": "らいめい",
          "轟いた": "とどろいた"
        }
      },
      {
        "ja": "ニュースを聞くや、彼は顔色を変えて部屋を飛び出した。",
        "kana": "にゅーすをきくや、かれはかおいろをかえてへやをとびだした。",
        "vi": "Vừa nghe xong mẩu tin, anh ấy biến sắc mặt rồi lập tức phóng vụt ra khỏi phòng.",
        "readings": {
          "聞く": "きく",
          "顔色": "かおいろ",
          "部屋": "へや"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-ya-inaya-1",
        "type": "choice",
        "prompt": "彼女の顔を見る ___ 、彼は大粒の涙をこぼした。",
        "options": [
          "や否や",
          "そばから",
          "んばかりに",
          "きらいに"
        ],
        "answer": "や否や",
        "explanation": "Vừa thấy mặt là rơi lệ tức thì: 見るや否や."
      },
      {
        "id": "jlpt-n1-ya-inaya-2",
        "type": "fill",
        "prompt": "Điền từ tính tức thời: チャイムが鳴る ___ 否や、生徒たちは席を立った。",
        "answer": "や",
        "explanation": "Cấu trúc V từ điển + や否や."
      },
      {
        "id": "jlpt-n1-ya-inaya-3",
        "type": "order",
        "prompt": "Sắp xếp: Tàu vừa đáp xuống ga là cửa xe đã mở toang ra ngay.",
        "options": [
          "列車が到着する",
          "や否や",
          "ドアが",
          "一斉に開いた"
        ],
        "answer": "列車が到着するや否やドアが一斉に開いた",
        "explanation": "Trật tự: Tàu cập bến + や否や + Cửa mở đồng loạt."
      },
      {
        "id": "jlpt-n1-ya-inaya-4",
        "type": "choice",
        "prompt": "家に帰る ___ 、バタッと倒れて眠ってしまった。",
        "options": [
          "や",
          "と",
          "へ",
          "に"
        ],
        "answer": "や",
        "explanation": "Thể rút gọn của や否や trong văn viết cổ điển: 帰るや."
      },
      {
        "id": "jlpt-n1-ya-inaya-5",
        "type": "fill",
        "prompt": "Điền thể chia của 食べる: 料理を口に ___ や否や、感動の声を上げた。",
        "answer": "入れる",
        "explanation": "V từ điển: 入れるや否や."
      },
      {
        "id": "jlpt-n1-ya-inaya-6",
        "type": "choice",
        "prompt": "地震の揺れを感じるや否や、机の ___ 隠れた。",
        "options": [
          "下に",
          "上に",
          "横に",
          "前に"
        ],
        "answer": "下に",
        "explanation": "Cảm nhận rung chấn là nấp ngay xuống gầm bàn: 机の下に隠れた."
      },
      {
        "id": "jlpt-n1-ya-inaya-7",
        "type": "order",
        "prompt": "Sắp xếp: Vừa nghe thấy tiếng còi hú là đám đông đã dạt sang hai bên.",
        "options": [
          "サイレンを聞く",
          "や否や",
          "群衆は道を",
          "あけた"
        ],
        "answer": "サイレンを聞くや否や群衆は道をあけた",
        "explanation": "Trật tự: Nghe tiếng còi + や否や + Dạt sang nhường đường."
      },
      {
        "id": "jlpt-n1-ya-inaya-8",
        "type": "choice",
        "prompt": "試合終了の笛が鳴るや否や、選手たちは抱き合って ___ 。",
        "options": [
          "喜んだ",
          "喜ぶ",
          "喜ぼう",
          "喜べば"
        ],
        "answer": "喜んだ",
        "explanation": "Thực tế quá khứ diễn ra ngay: 喜んだ."
      },
      {
        "id": "jlpt-n1-ya-inaya-9",
        "type": "fill",
        "prompt": "Điền từ: 合図を見る ___ 否や、一斉に走り出した。",
        "answer": "や",
        "explanation": "V từ điển + や否や: 見るや否や."
      },
      {
        "id": "jlpt-n1-ya-inaya-10",
        "type": "order",
        "prompt": "Sắp xếp: Mở phong bì thư ra một cái là bức thư bị gió cuốn bay mất.",
        "options": [
          "封筒を開けるや",
          "手紙が風に",
          "吹き飛ばされて",
          "しまった"
        ],
        "answer": "封筒を開けるや手紙が風に吹き飛ばされてしまった",
        "explanation": "Trật tự: Mở phong bì (開けるや) + Bị gió thổi bay mất."
      }
    ]
  },
  {
    "id": "jlpt-n1-nari",
    "pattern": "〜なり",
    "title": "Vừa mới... lập tức hành động bất ngờ tiếp theo",
    "level": "N1",
    "position": 320,
    "meaning": "【Vる＋なり】Chủ thể vừa mới hoàn thành hành vi A thì ngay lập tức có một hành động kế tiếp bất ngờ, đột ngột ngoài dự đoán của người quan sát",
    "formation": "V từ điển + なり",
    "explanation": "Dùng trong tiểu thuyết và văn kể chuyện mô tả ngôi thứ ba: đối tượng thực hiện hành động liên hoàn mau lẹ khiến người ngoài ngạc nhiên.",
    "notes": "Chú thích phân biệt:\n- 〜なり: Chủ ngữ của hai vế THƯỜNG LÀ MỘT NGƯỜI ở ngôi thứ ba (anh ấy vừa về đến nhà là nằm lăn ra đất).\n- Không dùng cho hành động của chính người nói.",
    "mistake": "Cảnh báo lỗi: Vế sau là hành vi thực tế đã diễn ra ở thì quá khứ (không dùng câu mệnh lệnh hay phán đoán tương lai).",
    "related": [
      "jlpt-n1-gahayaka",
      "jlpt-n1-ya-inaya"
    ],
    "examples": [
      {
        "ja": "彼は部屋に入るなり、コートを脱ぎ捨ててソファに倒れ込んだ。",
        "kana": "かれはへやにはいるなり、こーとをぬぎすててそふぁにたおれこんだ。",
        "vi": "Anh ta vừa bước vào phòng một cái là cởi phắt chiếc áo khoác rồi nằm vật xuống ghế sofa.",
        "readings": {
          "部屋": "へや",
          "入る": "はいる",
          "脱ぎ捨てて": "ぬぎすてて"
        }
      },
      {
        "ja": "子供は母の顔を見るなり、わっと泣き出した。",
        "kana": "こどもはははのかおをみるなり、わっとなきだした。",
        "vi": "Đứa bé vừa thoáng thấy bóng mẹ là òa khóc nức nở.",
        "readings": {
          "子供": "こども",
          "母": "はは",
          "顔": "かお",
          "見る": "みる"
        }
      },
      {
        "ja": "電話を切るなり、彼女は何も言わずに飛び出していった。",
        "kana": "でんわをきるなり、かのじょはなにもいわずにとびだしていった。",
        "vi": "Vừa cúp máy điện thoại xong, cô ấy chẳng nói chẳng rằng phóng vụt ra ngoài.",
        "readings": {
          "電話": "でんわ",
          "切る": "きる",
          "彼女": "かのじょ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-nari-1",
        "type": "choice",
        "prompt": "席に着く ___ 、彼は猛烈な勢いで書類をめくり始めた。",
        "options": [
          "なり",
          "そばから",
          "んばかりに",
          "きらいに"
        ],
        "answer": "なり",
        "explanation": "Hành động liên hoàn ngôi thứ 3: V từ điển + なり: 着くなり."
      },
      {
        "id": "jlpt-n1-nari-2",
        "type": "fill",
        "prompt": "Điền từ hành vi kế tiếp bất ngờ: ドアを開ける ___ 、大声で怒鳴りつけた。",
        "answer": "なり",
        "explanation": "V từ điển + なり: 開けるなり."
      },
      {
        "id": "jlpt-n1-nari-3",
        "type": "order",
        "prompt": "Sắp xếp: Vừa đọc xong tin nhắn anh ấy liền đổi sắc mặt.",
        "options": [
          "メッセージを読む",
          "なり",
          "彼は青ざめた",
          "表情になった"
        ],
        "answer": "メッセージを読むなり彼は青ざめた表情になった",
        "explanation": "Trật tự: Đọc tin nhắn + なり + Biến sắc mặt."
      },
      {
        "id": "jlpt-n1-nari-4",
        "type": "choice",
        "prompt": "手紙を ___ なり、彼はそれを破り捨ててしまった。",
        "options": [
          "読む",
          "読んだ",
          "読んで",
          "読もう"
        ],
        "answer": "読む",
        "explanation": "V từ điển: 読むなり (vừa đọc xong là xé toạc vứt đi)."
      },
      {
        "id": "jlpt-n1-nari-5",
        "type": "fill",
        "prompt": "Điền thể đúng của 立つ: 立ち上がる ___ 、めまいでふらついた。",
        "answer": "なり",
        "explanation": "V từ điển + なり: 立ち上がるなり."
      },
      {
        "id": "jlpt-n1-nari-6",
        "type": "choice",
        "prompt": "彼は私の顔を ___ なり、慌てて逃げ出した。",
        "options": [
          "見る",
          "見た",
          "見て",
          "見よう"
        ],
        "answer": "見る",
        "explanation": "V từ điển: 見るなり (vừa chạm mặt là cuống cuồng chạy trốn)."
      },
      {
        "id": "jlpt-n1-nari-7",
        "type": "order",
        "prompt": "Sắp xếp: Cầm lấy gói hàng xong là anh ấy lập tức mở ra xem ngay.",
        "options": [
          "荷物を受け取る",
          "なり",
          "中身を",
          "確認し始めた"
        ],
        "answer": "荷物を受け取るなり中身を確認し始めた",
        "explanation": "Trật tự: Nhận kiện hàng + なり + Mở ra kiểm tra."
      },
      {
        "id": "jlpt-n1-nari-8",
        "type": "choice",
        "prompt": "知らせを聞くやいなや ___ 、部屋を飛び出していった。",
        "options": [
          "ともなく",
          "なり",
          "とあって",
          "はおろか"
        ],
        "answer": "なり",
        "explanation": "聞くなり: vừa nghe tin là phóng vụt đi."
      },
      {
        "id": "jlpt-n1-nari-9",
        "type": "fill",
        "prompt": "Điền từ: 家に着く ___ 、バタンと倒れ込んで眠ってしまった。",
        "answer": "なり",
        "explanation": "V từ điển + なり: 着くなり."
      },
      {
        "id": "jlpt-n1-nari-10",
        "type": "order",
        "prompt": "Sắp xếp: Vừa nhìn thấy món quà cậu bé đã reo hò vui sướng.",
        "options": [
          "プレゼントを見る",
          "なり",
          "子供は歓声を",
          "上げた"
        ],
        "answer": "プレゼントを見るなり子供は歓声を上げた",
        "explanation": "Trật tự: Thấy quà + なり + Reo hò sung sướng."
      }
    ]
  },
  {
    "id": "jlpt-n1-gotoki",
    "pattern": "〜ごとき・ごとく",
    "title": "Như là, tựa như / Xem thường: loại người như",
    "level": "N1",
    "position": 321,
    "meaning": "【Dạng 1: Ví von tao nhã】Tựa như là / Giống như là (văn phong cổ điển)\n【Dạng 2: Khinh miệt / Khiêm nhường】Loại người như... / Kẻ mọn như...",
    "formation": "【Dạng 1】N + のごとき + N / N + のごとく + V / A\n【Dạng 2】N (hoặc đại từ 私, あいつ) + ごとき (hoặc ごとく)",
    "explanation": "Một cấu trúc cổ kinh điển xuất hiện dày đặc trong văn học và diễn ngôn nghệ thuật: vừa dùng để ví von văn hoa, vừa dùng để hạ thấp bản thân khiêm nhường hoặc mỉa mai khinh thường đối thủ.",
    "notes": "Chú thích phân biệt:\n- 〜のごとく: Bổ nghĩa cho động từ (走るがごとく: chạy nhanh như bay).\n- 〜のごとき: Bổ nghĩa cho danh từ (夢のごとき日々: những ngày đẹp tựa giấc mơ).\n- 私ごとき: Kẻ hèn mọn như tôi (khiêm nhường tột đỉnh trong thương gia Nhật).",
    "mistake": "Cảnh báo lỗi: Khi dùng hạ mình (私ごとき) phải đi với câu khiêm tốn; khi dùng cho kẻ khác (あいつごとき) mang sắc thái coi thường ra mặt.",
    "related": [
      "bridge-n3-09",
      "jlpt-n4-youda"
    ],
    "examples": [
      {
        "ja": "光陰矢のごとし。時間は矢のように飛び去っていく。",
        "kana": "こういんやのごとし。じかんはやのようにとびさっていく。",
        "vi": "Thời gian thấm thoắt thoi đưa, tựa như mũi tên vút bay không bao giờ trở lại.",
        "readings": {
          "光陰": "こういん",
          "矢": "や",
          "時間": "じかん"
        }
      },
      {
        "ja": "私ごとき若輩者に、このような大役が務まるでしょうか。",
        "kana": "わたしごときじゃくはいしゃに、このようなたいやくがつとまるでしょうか。",
        "vi": "Kẻ hậu bối nông cạn mọn hèn như tôi, liệu có thể đảm đương nổi trọng trách lớn lao này chăng?",
        "readings": {
          "若輩者": "じゃくはいしゃ",
          "大役": "たいやく"
        }
      },
      {
        "ja": "あいつごときに負けてたまるか。",
        "kana": "あいつごとにまけてたまるか。",
        "vi": "Làm sao ta có thể để thua một kẻ hạ đẳng tép riu như gã đó được chứ!",
        "readings": {
          "負けて": "まけて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-gotoki-1",
        "type": "choice",
        "prompt": "私 ___ 未熟者に、温かい励ましのお言葉をいただき恐縮です。",
        "options": [
          "ごとき",
          "まみれ",
          "ずくめ",
          "たるもの"
        ],
        "answer": "ごとき",
        "explanation": "Hạ mình khiêm nhường sâu sắc: 私ごとき (kẻ mọn như tôi)."
      },
      {
        "id": "jlpt-n1-gotoki-2",
        "type": "fill",
        "prompt": "Điền từ ví von bổ nghĩa động từ: 水が流れる ___ 滑らかに話す。",
        "answer": "ごとく",
        "explanation": "Chảy mượt mà tựa dòng nước: 流れるがごとく."
      },
      {
        "id": "jlpt-n1-gotoki-3",
        "type": "order",
        "prompt": "Sắp xếp: Tháng ngày hạnh phúc trôi qua êm đềm tựa một giấc chiêm bao.",
        "options": [
          "夢の",
          "ごとき日々が",
          "あっという間に",
          "過ぎ去った"
        ],
        "answer": "夢のごとき日々があっという間に過ぎ去った",
        "explanation": "Trật tự: 夢の + ごとき日々が + Trôi qua trong chớp mắt."
      },
      {
        "id": "jlpt-n1-gotoki-4",
        "type": "choice",
        "prompt": "あんな奴 ___ の言葉に惑わされてはいけない。",
        "options": [
          "ごとき",
          "まみれ",
          "ずくめ",
          "ならでは"
        ],
        "answer": "ごとき",
        "explanation": "Khinh miệt kẻ không ra gì: 奴ごとき."
      },
      {
        "id": "jlpt-n1-gotoki-5",
        "type": "fill",
        "prompt": "Điền từ: 怒涛の ___ 勢いで敵陣に攻め入った。",
        "answer": "ごとく",
        "explanation": "Thế như sóng cuộn thác trào: 怒涛のごとく."
      },
      {
        "id": "jlpt-n1-gotoki-6",
        "type": "choice",
        "prompt": "雷の ___ 轟音が鳴り響いた。",
        "options": [
          "ごとき",
          "ごとく",
          "ごとし",
          "ごとな"
        ],
        "answer": "ごとき",
        "explanation": "Bổ nghĩa danh từ 轟音 (tiếng ầm vang): 雷のごとき轟音."
      },
      {
        "id": "jlpt-n1-gotoki-7",
        "type": "order",
        "prompt": "Sắp xếp: Không thể lùi bước trước một thất bại nhỏ nhoi cỡ này.",
        "options": [
          "これ",
          "ごときの失敗で",
          "諦める",
          "わけにはいかない"
        ],
        "answer": "これごときの失敗で諦めるわけにはいかない",
        "explanation": "Trật tự: Chuyện nhỏ nhoi như thế này + これごときの失敗で + Không thể bỏ cuộc."
      },
      {
        "id": "jlpt-n1-gotoki-8",
        "type": "choice",
        "prompt": "白百合の ___ 純真な心を持っている。",
        "options": [
          "ごとき",
          "ごとく",
          "ごとし",
          "ごとな"
        ],
        "answer": "ごとき",
        "explanation": "Bổ nghĩa cho 純真な心: 白百合のごとき."
      },
      {
        "id": "jlpt-n1-gotoki-9",
        "type": "fill",
        "prompt": "Điền từ thành ngữ: 光陰矢の ___ 。",
        "answer": "ごとし",
        "explanation": "Thành ngữ kết câu: 光陰矢のごとし (thời gian tựa tên bay)."
      },
      {
        "id": "jlpt-n1-gotoki-10",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy dũng cảm chiến đấu tựa như một mãnh sư.",
        "options": [
          "獅子の",
          "ごとく勇ましく",
          "戦場を",
          "駆け巡った"
        ],
        "answer": "獅子のごとく勇ましく戦場を駆け巡った",
        "explanation": "Trật tự: 獅子のごとく + Dũng mãnh + Tung hoành chiến trường."
      }
    ]
  },
  {
    "id": "jlpt-n1-nishite",
    "pattern": "〜にして",
    "title": "Chính vào lúc / Dù là tầm cỡ... mà cũng / Vừa là A vừa là B",
    "level": "N1",
    "position": 322,
    "meaning": "【Dạng 1: Nhấn mạnh thời điểm/giai đoạn】Phải đến tận độ tuổi/lần thứ... thì mới làm được\n【Dạng 2: Tầm cỡ cao cấp mà cũng chào thua】Ngay cả cỡ như thiên tài mà còn...\n【Dạng 3: Đồng thời hai vai trò】Vừa là A lại đồng thời là B",
    "formation": "N (thường là tuổi tác, số lần, tư cách cao quý) + にして",
    "explanation": "Mẫu câu cực kỳ tinh tế và cô đọng của tiếng Nhật thượng lưu: thể hiện sự ngỡ ngàng trước cột mốc thời gian, hoặc ca ngợi sự kiêm nhiệm tài năng đa phương diện.",
    "notes": "Chú thích phân biệt:\n- 40歳にしてはじめて: Phải tới tận 40 tuổi mới...\n- 天才にして解けない: Ngay cả thiên tài cũng không giải nổi.",
    "mistake": "Cảnh báo lỗi: Đi trực tiếp với danh từ, không chèn trợ từ khác vào giữa.",
    "related": [
      "bridge-n2-30",
      "jlpt-n2-te-hajimete"
    ],
    "examples": [
      {
        "ja": "彼は弱冠15歳にして、難関大学の入試にトップ合格した。",
        "kana": "かれはじゃっかんじゅうごさいにして、なんかんだいがくのにゅうしにとっぷごうかくした。",
        "vi": "Cậu ấy khi mới vừa tròn 15 tuổi đã xuất sắc đỗ thủ khoa kỳ thi đại học danh giá.",
        "readings": {
          "弱冠": "じゃっかん",
          "難関": "なんかん",
          "入試": "にゅうし"
        }
      },
      {
        "ja": "この難問は、一流の数学者にして解けなかった。",
        "kana": "このなんもんは、いちりゅうのすうがくしゃにしてとけなかった。",
        "vi": "Bài toán hóc búa này, ngay đến cỡ các nhà toán học hàng đầu mà cũng chào thua.",
        "readings": {
          "難問": "なんもん",
          "一流": "いちりゅう",
          "数学者": "すうがくしゃ",
          "解けなかった": "とけなかった"
        }
      },
      {
        "ja": "彼女は優れた作家にして、情熱的な社会活動家でもある。",
        "kana": "かのじょはすぐれたさっかにして、じょうねつてきなしゃかいかつどうかでもある。",
        "vi": "Bà ấy vừa là một văn hào kiệt xuất, đồng thời cũng là một nhà hoạt động xã hội đầy nhiệt huyết.",
        "readings": {
          "優れて": "すぐれて",
          "作家": "さっか",
          "情熱的": "じょうねつてき",
          "活動家": "かつどうか"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-nishite-1",
        "type": "choice",
        "prompt": "名医 ___ 治せない難病がある。",
        "options": [
          "にして",
          "ならでは",
          "たるもの",
          "とあって"
        ],
        "answer": "にして",
        "explanation": "Ngay cả tầm cỡ danh y mà cũng không chữa nổi: 名医にして治せない."
      },
      {
        "id": "jlpt-n1-nishite-2",
        "type": "fill",
        "prompt": "Điền từ mốc tuổi tác đặc biệt: 彼は80歳に ___ エベレスト登頂に成功した。",
        "answer": "して",
        "explanation": "N + にして: 80歳にして (ở độ tuổi 80 mà leo đỉnh Everest)."
      },
      {
        "id": "jlpt-n1-nishite-3",
        "type": "order",
        "prompt": "Sắp xếp: Phải đến lần thứ 5 thi tôi mới đỗ được kỳ thi này.",
        "options": [
          "5回目の受験に",
          "して",
          "ようやく合格することが",
          "できた"
        ],
        "answer": "5回目の受験にしてようやく合格することができた",
        "explanation": "Trật tự: Lần thứ 5 + にして + Cuối cùng mới đỗ."
      },
      {
        "id": "jlpt-n1-nishite-4",
        "type": "choice",
        "prompt": "学者 ___ 政治家でもある多才な人物だ。",
        "options": [
          "にして",
          "まみれ",
          "ずくめ",
          "きわまりない"
        ],
        "answer": "にして",
        "explanation": "Vừa là học giả vừa là chính khách: 学者にして政治家."
      },
      {
        "id": "jlpt-n1-nishite-5",
        "type": "fill",
        "prompt": "Điền từ: 天才の彼に ___ 、そのミスを防ぐことはできなかった。",
        "answer": "して",
        "explanation": "彼にして: ngay cỡ như thiên tài như anh ấy mà cũng..."
      },
      {
        "id": "jlpt-n1-nishite-6",
        "type": "choice",
        "prompt": "この親 ___ この子あり。二人とも頑固な性格だ。",
        "options": [
          "にして",
          "とあって",
          "たるもの",
          "はおろか"
        ],
        "answer": "にして",
        "explanation": "Thành ngữ cha nào con nấy: この親にしてこの子あり."
      },
      {
        "id": "jlpt-n1-nishite-7",
        "type": "order",
        "prompt": "Sắp xếp: Một thiên tài trăm năm có một như thế xuất hiện quả là điều kỳ diệu.",
        "options": [
          "彼のような逸材は",
          "百年に一人に",
          "して",
          "現れるかどうかだ"
        ],
        "answer": "彼のような逸材は百年に一人にして現れるかどうかだ",
        "explanation": "Trật tự: Nhân tài như anh ấy + 百年に一人にして + Liệu có xuất hiện hay không."
      },
      {
        "id": "jlpt-n1-nishite-8",
        "type": "choice",
        "prompt": "一瞬 ___ 、すべてが灰燼に帰した。",
        "options": [
          "にして",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "にして",
        "explanation": "Chỉ trong tích tắc mà tất cả thành tro bụi: 一瞬にして."
      },
      {
        "id": "jlpt-n1-nishite-9",
        "type": "fill",
        "prompt": "Điền từ: わずか3歳に ___ ピアノの神童と呼ばれた。",
        "answer": "して",
        "explanation": "Mới tròn 3 tuổi: 3歳にして."
      },
      {
        "id": "jlpt-n1-nishite-10",
        "type": "order",
        "prompt": "Sắp xếp: Vừa là lãnh đạo công ty vừa là người thầy dẫn dắt tận tâm.",
        "options": [
          "経営者に",
          "して",
          "優れた指導者でも",
          "ある"
        ],
        "answer": "経営者にして優れた指導者でもある",
        "explanation": "Trật tự: 経営者にして + Vừa là người thầy xuất sắc."
      }
    ]
  },
  {
    "id": "jlpt-n1-atteno",
    "pattern": "〜あっての",
    "title": "Tất cả là nhờ có... nếu không có thì không thể tồn tại",
    "level": "N1",
    "position": 323,
    "meaning": "【N1＋あっての＋N2】Chính nhờ có sự hiện diện quý báu của N1 làm nền tảng cốt tử thì mới có được sự tồn tại và phát triển của N2 (nếu thiếu N1 thì N2 hoàn toàn vô nghĩa)",
    "formation": "N1 + あっての + N2",
    "explanation": "Bày tỏ lòng biết ơn sâu sắc đối với nền tảng cốt tử đã tạo nên thành công hay ý nghĩa sinh mệnh của mình: khách hàng, người hâm mộ, sức khỏe, gia đình.",
    "notes": "Chú thích phân biệt:\n- 〜あっての: N1 là điều kiện TIÊN QUYẾT BẮT BUỘC quyết định sự tồn tại của N2 (khách hàng là huyết mạch của doanh nghiệp: お客様あっての店).\n- 〜のおかげで: Biết ơn thông thường đối với sự giúp đỡ.",
    "mistake": "Cảnh báo lỗi: Cấu trúc cố định luôn là N1 + あっての + N2 (không dùng danh từ ngược vị trí: sai: 店あってのお客様, đúng: お客様あっての店).",
    "related": [
      "bridge-n2-27",
      "jlpt-n4-tameni"
    ],
    "examples": [
      {
        "ja": "お客様あっての我が社です。常に感謝の気持ちを忘れてはなりません。",
        "kana": "おきゃくさまあってのわがしゃです。つねにかんしゃのきもちをわすれてはなりません。",
        "vi": "Công ty chúng ta có tồn tại được là nhờ có khách hàng. Tuyệt đối không bao giờ được quên lòng biết ơn.",
        "readings": {
          "お客様": "おきゃくさま",
          "我が社": "わがしゃ",
          "感謝": "かんしゃ",
          "気持ち": "きもち"
        }
      },
      {
        "ja": "健康あっての仕事だ。無理をして体を壊しては意味がない。",
        "kana": "けんこうあってのしごとだ。むりをしてからだをこわしてはいみがない。",
        "vi": "Có sức khỏe thì mới có công việc. Làm việc quá sức mà hủy hoại cơ thể thì chẳng còn ý nghĩa gì.",
        "readings": {
          "健康": "けんこう",
          "仕事": "しごと",
          "壊して": "こわして",
          "意味": "いみ"
        }
      },
      {
        "ja": "ファンあってのプロ野球選手であることを自覚すべきだ。",
        "kana": "ふぁんあってのぷろやきゅうせんしゅであることをじかくすべきだ。",
        "vi": "Cần phải tự ý thức sâu sắc rằng tuyển thủ bóng chày nhà nghề có được vị thế hôm nay tất cả là nhờ có người hâm mộ.",
        "readings": {
          "野球選手": "やきゅうせんしゅ",
          "自覚": "じかく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-atteno-1",
        "type": "choice",
        "prompt": "読者 ___ 出版社です。読者の声を第一に考えます。",
        "options": [
          "あっての",
          "とあって",
          "たるもの",
          "ならでは"
        ],
        "answer": "あっての",
        "explanation": "Nhờ có độc giả nhà xuất bản mới tồn tại: 読者あっての出版社."
      },
      {
        "id": "jlpt-n1-atteno-2",
        "type": "fill",
        "prompt": "Điền từ nền tảng sinh mệnh: 命 ___ 人生だ。安全第一で行動しなさい。",
        "answer": "あっての",
        "explanation": "Có mạng sống mới có cuộc đời: 命あっての人生."
      },
      {
        "id": "jlpt-n1-atteno-3",
        "type": "order",
        "prompt": "Sắp xếp: Thắng lợi ngày hôm nay tất cả là nhờ có sự cổ vũ của mọi người.",
        "options": [
          "皆様の応援",
          "あっての",
          "今日の",
          "勝利です"
        ],
        "answer": "皆様の応援あっての今日の勝利です",
        "explanation": "Trật tự: Sự cổ vũ của quý vị + あっての + Thắng lợi hôm nay."
      },
      {
        "id": "jlpt-n1-atteno-4",
        "type": "choice",
        "prompt": "信頼関係 ___ 提携であり、裏切りは絶対に許されない。",
        "options": [
          "あっての",
          "まみれの",
          "ずくめの",
          "きわまる"
        ],
        "answer": "あっての",
        "explanation": "Hợp tác dựa trên nền tảng lòng tin: 信頼関係あっての提携."
      },
      {
        "id": "jlpt-n1-atteno-5",
        "type": "fill",
        "prompt": "Điền từ: 家族の支え ___ 今の私があります。",
        "answer": "あっての",
        "explanation": "Có tôi ngày hôm nay là nhờ gia đình chở che: 支えあっての今の私."
      },
      {
        "id": "jlpt-n1-atteno-6",
        "type": "choice",
        "prompt": "平和 ___ 繁栄であり、戦争はすべてを破壊する。",
        "options": [
          "あっての",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "あっての",
        "explanation": "Có hòa bình mới có phồn vinh: 平和あっての繁栄."
      },
      {
        "id": "jlpt-n1-atteno-7",
        "type": "order",
        "prompt": "Sắp xếp: Thành công của dự án tất cả là nhờ sự đoàn kết của tập thể.",
        "options": [
          "チームの団結",
          "あっての",
          "プロジェクトの",
          "成功だった"
        ],
        "answer": "チームの団結あってのプロジェクトの成功だった",
        "explanation": "Trật tự: Đoàn kết tập thể + あっての + Thành công dự án."
      },
      {
        "id": "jlpt-n1-atteno-8",
        "type": "choice",
        "prompt": "日々の地道な練習 ___ 本番の素晴らしい演技だ。",
        "options": [
          "あっての",
          "まみれの",
          "ずくめの",
          "ごときの"
        ],
        "answer": "あっての",
        "explanation": "Có luyện tập gian khổ mới có màn trình diễn xuất thần: 練習あっての演技."
      },
      {
        "id": "jlpt-n1-atteno-9",
        "type": "fill",
        "prompt": "Điền từ: 国民 ___ 国家であることを忘れてはならない。",
        "answer": "あっての",
        "explanation": "Quốc gia tồn tại là vì nhân dân: 国民あっての国家."
      },
      {
        "id": "jlpt-n1-atteno-10",
        "type": "order",
        "prompt": "Sắp xếp: Có tình yêu thương của cha mẹ mới có sự trưởng thành của con cái.",
        "options": [
          "親の深い愛情",
          "あっての",
          "子供の健全な",
          "成長だ"
        ],
        "answer": "親の深い愛情あっての子供の健全な成長だ",
        "explanation": "Trật tự: Tình thương sâu nặng + あっての + Sự khôn lớn khỏe mạnh."
      }
    ]
  },
  {
    "id": "jlpt-n1-karasuru",
    "pattern": "〜からする・からある・からの",
    "title": "Lên tới con số khổng lồ (giá cả / trọng lượng / số lượng)",
    "level": "N1",
    "position": 324,
    "meaning": "【Số từ＋からする / からある / からの】Lên tới con số khổng lồ, vượt xa dự đoán bình thường:\n- 〜からする: Đi với GIÁ TIỀN (hàng trăm triệu, hàng tỷ yên)\n- 〜からある / からの: Đi với TRỌNG LƯỢNG, CHIỀU CAO, CỰ LY hoặc SỐ LƯỢNG NGƯỜI",
    "formation": "Số từ chỉ giá cả + からする + N\nSố từ chỉ cân nặng, chiều dài, số lượng + からある / からの + N",
    "explanation": "Nhấn mạnh sự kinh ngạc trước quy mô khổng lồ, giá trị cực lớn hoặc số lượng áp đảo của đối tượng.",
    "notes": "Chú thích phân biệt:\n- 〜からする: Chỉ dùng cho GIÁ CẢ (VD: 1億円からする豪邸: căn biệt thự trị giá từ 100 triệu yên trở lên).\n- 〜からある: Dùng cho kích cỡ, trọng lượng, số người (VD: 100キロからある巨体: thân hình nặng trên 100 ký).",
    "mistake": "Cảnh báo lỗi: Không dùng からする cho độ dài hay số lượng người (sai: 1000人からする, đúng: 1000人からある hoặc 1000人からの).",
    "related": [
      "bridge-n2-36",
      "jlpt-n3-hodo-kurai"
    ],
    "examples": [
      {
        "ja": "彼は数千万円からする高級外車を何台も所有している。",
        "kana": "かれはすうせんまんえんからするこうきゅうがいしゃをなんだいもしょゆうしている。",
        "vi": "Anh ta sở hữu cả một bộ sưu tập xe ngoại hạng sang có giá từ vài chục triệu yên trở lên mỗi chiếc.",
        "readings": {
          "数千万円": "すうせんまんえん",
          "高級外車": "こうきゅうがいしゃ",
          "所有": "しょゆう"
        }
      },
      {
        "ja": "重さ50キロからある大岩を一人で持ち上げた。",
        "kana": "おもさごじっきろからあるおおいわをひとりでもちあげた。",
        "vi": "Anh ấy đã một mình nhấc bổng tảng đá nặng trên 50 ký.",
        "readings": {
          "重さ": "おもさ",
          "大岩": "おおいわ",
          "持ち上げた": "もちあげた"
        }
      },
      {
        "ja": "デモには5万人からの市民が参加し、通りを埋め尽くした。",
        "kana": "でもにはごまんにんからのしみんがさんかし、とおりをうめつくした。",
        "vi": "Hơn 5 vạn người dân đã tham gia cuộc biểu tình, lấp kín toàn bộ đường phố.",
        "readings": {
          "市民": "しみん",
          "参加": "さんか",
          "埋め尽くした": "うめつくした"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-karasuru-1",
        "type": "choice",
        "prompt": "1億円 ___ ダイヤの指輪が盗難に遭った。",
        "options": [
          "からする",
          "からある",
          "からの",
          "に相まって"
        ],
        "answer": "からする",
        "explanation": "Nhấn mạnh giá tiền khổng lồ: 1億円からする."
      },
      {
        "id": "jlpt-n1-karasuru-2",
        "type": "fill",
        "prompt": "Điền từ nhấn mạnh trọng lượng khổng lồ: 100キロから ___ 巨漢が突進してきた。",
        "answer": "ある",
        "explanation": "Trọng lượng trên 100kg: からある."
      },
      {
        "id": "jlpt-n1-karasuru-3",
        "type": "order",
        "prompt": "Sắp xếp: Hơn 3 vạn người hâm mộ đã đổ dồn về sân khấu ngoài trời.",
        "options": [
          "3万人からの",
          "大観衆が",
          "会場に",
          "詰めかけた"
        ],
        "answer": "3万人からの大観衆が会場に詰めかけた",
        "explanation": "Trật tự: Số lượng khổng lồ (3万人からの) + Khán giả + Đổ về kín sân."
      },
      {
        "id": "jlpt-n1-karasuru-4",
        "type": "choice",
        "prompt": "長さ2メートル ___ 大魚を釣り上げた。",
        "options": [
          "からある",
          "からする",
          "たるもの",
          "まみれ"
        ],
        "answer": "からある",
        "explanation": "Nhấn mạnh chiều dài kích thước: 長さ〜からある."
      },
      {
        "id": "jlpt-n1-karasuru-5",
        "type": "fill",
        "prompt": "Điền từ giá tiền: 1杯5000円 ___ 高級コーヒーを味わった。",
        "answer": "からする",
        "explanation": "Giá tiền đắt đỏ: からする."
      },
      {
        "id": "jlpt-n1-karasuru-6",
        "type": "choice",
        "prompt": "500ページ ___ 大著をわずか3日で読み切った。",
        "options": [
          "からある",
          "からする",
          "きわまる",
          "ずくめ"
        ],
        "answer": "からある",
        "explanation": "Độ dày cuốn sách trên 500 trang: 500ページからある大著."
      },
      {
        "id": "jlpt-n1-karasuru-7",
        "type": "order",
        "prompt": "Sắp xếp: Chiếc đồng hồ trị giá tiền tỷ được bảo quản nghiêm ngặt.",
        "options": [
          "数千万円からする",
          "高級時計が",
          "金庫に",
          "保管されている"
        ],
        "answer": "数千万円からする高級時計が金庫に保管されている",
        "explanation": "Trật tự: Giá trị khổng lồ + Đồng hồ cao cấp + Cất trong két sắt."
      },
      {
        "id": "jlpt-n1-karasuru-8",
        "type": "choice",
        "prompt": "何十キロ ___ 荷物を背負って山道を登った。",
        "options": [
          "からある",
          "からする",
          "たるもの",
          "はおろか"
        ],
        "answer": "からある",
        "explanation": "Trọng lượng hành lý: 何十キロからある."
      },
      {
        "id": "jlpt-n1-karasuru-9",
        "type": "fill",
        "prompt": "Điền từ số lượng: 1000通 ___ 応募ハガキが殺到した。",
        "answer": "からの",
        "explanation": "Số lượng thư khổng lồ: 1000通からの."
      },
      {
        "id": "jlpt-n1-karasuru-10",
        "type": "order",
        "prompt": "Sắp xếp: Con gấu khổng lồ nặng hơn 300 ký đã xuất hiện.",
        "options": [
          "体重300キロからある",
          "巨大な熊が",
          "森から",
          "姿を現した"
        ],
        "answer": "体重300キロからある巨大な熊が森から姿を現した",
        "explanation": "Trật tự: Trọng lượng khổng lồ + Gấu khổng lồ + Xuất hiện từ rừng."
      }
    ]
  },
  {
    "id": "jlpt-n1-bekarazu",
    "pattern": "〜べからず・べからざる",
    "title": "Tuyệt đối cấm / Không thể dung thứ",
    "level": "N1",
    "position": 325,
    "meaning": "【Dạng 1: 〜べからず】Tuyệt đối không được làm (mệnh lệnh cấm chỉ nghiêm ngặt trên biển báo, thông tri)\n【Dạng 2: 〜べからざる＋N】Hành vi, tội ác không thể nào chấp nhận hay tha thứ được",
    "formation": "【Dạng 1】V từ điển + べからず (Đặc biệt: する → すべからず / するべからず)\n【Dạng 2】V từ điển + べからざる + N",
    "explanation": "Hình thức ngữ pháp cổ kính, trang nghiêm bậc nhất: dùng cho các biển cấm nghiêm khắc nơi công cộng, hoặc lên án những tội ác, hành vi vượt qua lằn ranh đạo đức tối thiểu.",
    "notes": "Chú thích phân biệt:\n- 〜べからず: Lệnh cấm tuyệt đối mang tính pháp lệnh (芝生に入るべからず: cấm dẫm lên cỏ).\n- 〜てはならない: Cấm chỉ trong giao tiếp và quy tắc hàng ngày.",
    "mistake": "Cảnh báo lỗi: Bổ nghĩa cho danh từ bắt buộc dùng dạng べからざる (VD: 許すべからざる罪, không dùng 許すべからず罪).",
    "related": [
      "jlpt-n2-bekida",
      "jlpt-n1-majiki"
    ],
    "examples": [
      {
        "ja": "【掲示】ここにゴミを捨てるべからず。",
        "kana": "【けいじ】ここにごみをすてるべからず。",
        "vi": "【Bảng thông báo】Tuyệt đối cấm vứt rác tại nơi này.",
        "readings": {
          "掲示": "けいじ",
          "捨てる": "すてる"
        }
      },
      {
        "ja": "無辜の市民を傷つける行為は、断じて許すべからざる暴挙である。",
        "kana": "むこのしみんをきずつけるこういは、だんじてゆるすべからざるぼうきょである。",
        "vi": "Hành vi sát hại những người dân vô tội là một hành động bạo ngược tàn độc tuyệt đối không thể dung thứ.",
        "readings": {
          "無辜": "むこ",
          "傷つける": "きずつける",
          "行為": "こうい",
          "許す": "ゆるす",
          "暴挙": "ぼうきょ"
        }
      },
      {
        "ja": "初心忘るべからず。（芸道や学問の戒め）",
        "kana": "しょしんわするべからず。",
        "vi": "Vạn lần không được quên tâm niệm thuở ban đầu.",
        "readings": {
          "初心": "しょしん",
          "忘る": "わする"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-bekarazu-1",
        "type": "choice",
        "prompt": "【工事現場の看板】関係者以外、立ち入る ___ 。",
        "options": [
          "べからず",
          "たるもの",
          "ならでは",
          "をおいて"
        ],
        "answer": "べからず",
        "explanation": "Biển báo nghiêm cấm người không phận sự bước vào: 立ち入るべからず."
      },
      {
        "id": "jlpt-n1-bekarazu-2",
        "type": "fill",
        "prompt": "Điền từ bổ nghĩa tội ác không thể dung thứ: 罪のない子供を巻き込むとは、許す ___ 犯罪だ。",
        "answer": "べからざる",
        "explanation": "Bổ nghĩa cho danh từ: 許すべからざる犯罪."
      },
      {
        "id": "jlpt-n1-bekarazu-3",
        "type": "order",
        "prompt": "Sắp xếp: Tuyệt đối không được vứt tàn thuốc lá bừa bãi nơi này.",
        "options": [
          "吸い殻を",
          "捨てる",
          "べから",
          "ず"
        ],
        "answer": "吸い殻を捨てるべからず",
        "explanation": "Trật tự: Tàn thuốc + V từ điển + べから + ず."
      },
      {
        "id": "jlpt-n1-bekarazu-4",
        "type": "choice",
        "prompt": "国家の機密を漏洩するなど、あっては ___ ことだ。",
        "options": [
          "ならない",
          "べからざる",
          "まじき",
          "たるもの"
        ],
        "answer": "ならない",
        "explanation": "Dạng phân biệt ngữ cảm: あってはならない (không được phép có)."
      },
      {
        "id": "jlpt-n1-bekarazu-5",
        "type": "fill",
        "prompt": "Điền từ thành ngữ Zeami: 初心 ___ べからず。",
        "answer": "忘る",
        "explanation": "Thành ngữ cổ Zeami: 初心忘るべからず (chớ quên tâm niệm ban đầu)."
      },
      {
        "id": "jlpt-n1-bekarazu-6",
        "type": "choice",
        "prompt": "平穏な市民生活を脅かすテロは、断じて容認 ___ 暴挙だ。",
        "options": [
          "すべからざる",
          "すべからず",
          "たるもの",
          "ならでは"
        ],
        "answer": "すべからざる",
        "explanation": "Không thể chấp nhận dung thứ: 容認すべからざる暴挙."
      },
      {
        "id": "jlpt-n1-bekarazu-7",
        "type": "order",
        "prompt": "Sắp xếp: Đây là bức tường kiên cố bất khả xâm phạm.",
        "options": [
          "何者も",
          "侵すべからざる",
          "神聖な",
          "領域である"
        ],
        "answer": "何者も侵すべからざる神聖な領域である",
        "explanation": "Trật tự: Không ai có thể xâm phạm (侵すべからざる) + Vùng đất thiêng."
      },
      {
        "id": "jlpt-n1-bekarazu-8",
        "type": "choice",
        "prompt": "【池の看板】ここで魚を ___ べからず。",
        "options": [
          "釣る",
          "釣った",
          "釣ろう",
          "釣れば"
        ],
        "answer": "釣る",
        "explanation": "V từ điển + べからず: 釣るべからず (cấm câu cá)."
      },
      {
        "id": "jlpt-n1-bekarazu-9",
        "type": "fill",
        "prompt": "Điền từ cấm: 芝生に ___ べからず。",
        "answer": "入る",
        "explanation": "V từ điển: 入るべからず (cấm đi vào)."
      },
      {
        "id": "jlpt-n1-bekarazu-10",
        "type": "order",
        "prompt": "Sắp xếp: Đó là sai lầm nghiêm trọng không thể nào xóa bỏ trong đời.",
        "options": [
          "生涯において",
          "消すべからざる",
          "汚点を",
          "残してしまった"
        ],
        "answer": "生涯において消すべからざる汚点を残してしまった",
        "explanation": "Trật tự: Trong đời + Vết nhơ không thể gột rửa (消すべからざる汚点) + Đã để lại."
      }
    ]
  },
  {
    "id": "jlpt-n1-majiki",
    "pattern": "〜まじき",
    "title": "Hành vi không thể chấp nhận được ở một cương vị",
    "level": "N1",
    "position": 326,
    "meaning": "【Nにあるまじき＋N / Vるまじき＋N】Xét từ vị thế, tư cách, cương vị hay chuẩn mực nghề nghiệp đó thì hành vi sai trái này là điều tuyệt đối không được phép xảy ra",
    "formation": "N (chỉ cương vị: 教師, 医者, 警察官, 政治家) + にあるまじき + N (chỉ hành vi: 暴言, 行為, 態度)\nV từ điển + まじき + N (Đặc biệt: する → すまじき / するまじき)",
    "explanation": "Lên án gay gắt những hành vi đồi bại, phản bội lại đạo đức nghề nghiệp và niềm tin của xã hội đối với người nắm giữ chức trách cao.",
    "notes": "Chú thích phân biệt:\n- 〜あるまじき: Luôn đứng trước một danh từ chỉ hành vi sai trái (hành động không được có ở một người thầy: 教師にあるまじき暴行).\n- 〜たるもの: Đòi hỏi bổn phận tích cực (đã là người thầy thì phải gương mẫu).",
    "mistake": "Cảnh báo lỗi: Mẫu này luôn dùng để BỔ NGHĨA CHO DANH TỪ (まじき + N), không đứng ở cuối câu.",
    "related": [
      "jlpt-n1-tarumono",
      "jlpt-n1-bekarazu"
    ],
    "examples": [
      {
        "ja": "賄賂を受け取るなど、公務員にあるまじき背信行為だ。",
        "kana": "わいろをうけとるなど、こうむいんにあるまじきはいしんこういだ。",
        "vi": "Nhận hối lộ là một hành vi bội tín nhơ nhớp không thể chấp nhận được ở một công chức nhà nước.",
        "readings": {
          "賄賂": "わいろ",
          "公務員": "こうむいん",
          "背信行為": "はいしんこうい"
        }
      },
      {
        "ja": "患者の情報を漏洩するなど、医師としてあるまじき過ちである。",
        "kana": "かんじゃのじょうほうをろうえいするなど、いしとしてあるまじきあやまちである。",
        "vi": "Để lộ thông tin bệnh nhân là một sai lầm không thể dung thứ đối với y đức của người thầy thuốc.",
        "readings": {
          "患者": "かんじゃ",
          "漏洩": "ろうえい",
          "医師": "いし",
          "過ち": "あやまち"
        }
      },
      {
        "ja": "子供を虐待するなど、親として許すまじき凶行だ。",
        "kana": "こどもをぎゃくたいするなど、おやとしてゆるすまじききょうこうだ。",
        "vi": "Ngược đãi bạo hành con nhỏ là một tội ác tày trời không thể tha thứ ở cương vị làm cha mẹ.",
        "readings": {
          "虐待": "ぎゃくたい",
          "許すまじき": "ゆるすまじき",
          "凶行": "きょうこう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-majiki-1",
        "type": "choice",
        "prompt": "生徒に暴力を振るうなど、教師にある ___ 行為だ。",
        "options": [
          "まじき",
          "べからざる",
          "たるもの",
          "ならでは"
        ],
        "answer": "まじき",
        "explanation": "Cương vị + にあるまじき + Hành vi: 教師にあるまじき行為."
      },
      {
        "id": "jlpt-n1-majiki-2",
        "type": "fill",
        "prompt": "Điền từ lên án: 審判を罵倒するとは、プロ選手にある ___ 態度だ。",
        "answer": "まじき",
        "explanation": "〜にあるまじき態度: thái độ không thể chấp nhận được ở một tuyển thủ."
      },
      {
        "id": "jlpt-n1-majiki-3",
        "type": "order",
        "prompt": "Sắp xếp: Phát ngôn phân biệt đối xử là điều không được phép có ở một chính khách.",
        "options": [
          "政治家にある",
          "まじき",
          "差別的な",
          "発言である"
        ],
        "answer": "政治家にあるまじき差別的な発言である",
        "explanation": "Trật tự: 政治家にある + まじき + Lời phát ngôn kỳ thị."
      },
      {
        "id": "jlpt-n1-majiki-4",
        "type": "choice",
        "prompt": "公金を横領するなど、法を司る裁判官として ___ 汚行だ。",
        "options": [
          "許すまじき",
          "許すたるもの",
          "許すならでは",
          "許すとあって"
        ],
        "answer": "許すまじき",
        "explanation": "Hành vi nhơ nhuốc không thể thứ tha: 許すまじき汚行."
      },
      {
        "id": "jlpt-n1-majiki-5",
        "type": "fill",
        "prompt": "Điền từ: 警察官 ___ あるまじき汚職事件が発覚した。",
        "answer": "に",
        "explanation": "Cấu trúc N + にあるまじき."
      },
      {
        "id": "jlpt-n1-majiki-6",
        "type": "choice",
        "prompt": "顧客の信頼を裏切るような行為は、商人にあるまじき ___ だ。",
        "options": [
          "振る舞い",
          "成功",
          "功績",
          "栄光"
        ],
        "answer": "振る舞い",
        "explanation": "Hành vi cử chỉ không thể chấp nhận: あるまじき振る舞い."
      },
      {
        "id": "jlpt-n1-majiki-7",
        "type": "order",
        "prompt": "Sắp xếp: Làm giả số liệu là điều cấm kỵ tối kỵ của người nghiên cứu.",
        "options": [
          "データの改ざんは",
          "研究者にある",
          "まじき不正",
          "行為だ"
        ],
        "answer": "データの改ざんは研究者にあるまじき不正行為だ",
        "explanation": "Trật tự: Giả mạo dữ liệu + 研究者にある + まじき不正 + 行為だ."
      },
      {
        "id": "jlpt-n1-majiki-8",
        "type": "choice",
        "prompt": "国民の命を軽視する発言は、首相として言う ___ 言葉だ。",
        "options": [
          "まじき",
          "べき",
          "はず",
          "わけ"
        ],
        "answer": "まじき",
        "explanation": "Lời không được phép thốt ra: 言う連語: 言うまじき言葉."
      },
      {
        "id": "jlpt-n1-majiki-9",
        "type": "fill",
        "prompt": "Điền từ: 医療従事者にある ___ 怠慢によって事故が起きた。",
        "answer": "まじき",
        "explanation": "Sự tắc trách không thể chấp nhận được: あるまじき怠慢."
      },
      {
        "id": "jlpt-n1-majiki-10",
        "type": "order",
        "prompt": "Sắp xếp: Bỏ rơi đồng đội trong lúc hiểm nghèo là hành vi hèn hạ không được có ở người lính.",
        "options": [
          "仲間を見捨てるのは",
          "軍人にある",
          "まじき卑劣な",
          "行動だ"
        ],
        "answer": "仲間を見捨てるのは軍人にあるまじき卑劣な行動だ",
        "explanation": "Trật tự: Bỏ rơi đồng đội + 軍人にある + まじき卑劣な + Hành động hèn hạ."
      }
    ]
  },
  {
    "id": "jlpt-n1-totodomarazu",
    "pattern": "〜にとどまらず",
    "title": "Không chỉ dừng lại ở phạm vi... mà còn lan rộng sang",
    "level": "N1",
    "position": 327,
    "meaning": "【N / Vる＋にとどまらず】Không chỉ dừng lại, giới hạn trong phạm vi ban đầu của A mà phạm vi ảnh hưởng đã lan rộng, bùng phát sang tầm vĩ mô B",
    "formation": "N / V từ điển + にとどまらず",
    "explanation": "Diễn tả sự lan tỏa, phát triển bùng nổ vượt ra khỏi ranh giới hẹp (từ địa phương sang toàn quốc, từ một lĩnh vực sang toàn bộ nền kinh tế thế giới).",
    "notes": "Chú thích phân biệt:\n- 〜にとどまらず: Nhấn mạnh sự mở rộng BIÊN ĐỘ ĐỊA LÝ, LĨNH VỰC hoặc QUY MÔ ảnh hưởng vượt bậc.\n- 〜だけでなく / 〜ばかりか: Liệt kê thêm điều khác.",
    "mistake": "Cảnh báo lỗi: Vế B phải có quy mô lớn hơn hoặc phạm vi rộng hơn nhiều so với vế A.",
    "related": [
      "bridge-n2-35",
      "jlpt-n4-shishi"
    ],
    "examples": [
      {
        "ja": "このアニメの人気は日本国内にとどまらず、全世界へと広がっている。",
        "kana": "このあにめのにんきはにほんこくないにとどまらず、ぜんせかいへとひろがっている。",
        "vi": "Sức hút của bộ anime này không chỉ dừng lại ở nội địa Nhật Bản, mà còn lan tỏa ra khắp toàn cầu.",
        "readings": {
          "国内": "こくない",
          "全世界": "ぜんせかい",
          "広がって": "ひろがって"
        }
      },
      {
        "ja": "環境破壊の影響は一国の問題にとどまらず、地球規模の危機となっている。",
        "kana": "かんきょうはかいのえいきょうはいっこくのもんだいにとどまらず、ちきゅうきぼのききとなっている。",
        "vi": "Tác động của hủy hoại môi trường không dừng lại ở vấn đề riêng một quốc gia, mà đã trở thành cuộc khủng hoảng mang tầm vóc toàn cầu.",
        "readings": {
          "環境破壊": "かんきょうはかい",
          "地球規模": "ちきゅうきぼ",
          "危機": "きき"
        }
      },
      {
        "ja": "彼は歌手にとどまらず、俳優や小説家としても多方面で活躍している。",
        "kana": "かれはかしゅにとどまらず、はいゆうやしょうせつかとしてもたほうめんでかつやくしている。",
        "vi": "Anh ấy không chỉ dừng lại ở vai trò ca sĩ, mà còn tỏa sáng trên nhiều lĩnh vực với tư cách diễn viên và tiểu thuyết gia.",
        "readings": {
          "歌手": "かしゅ",
          "俳優": "はいゆう",
          "小説家": "しょうせつか",
          "活躍": "かつやく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-totodomarazu-1",
        "type": "choice",
        "prompt": "その感染症はアジア ___ 、瞬く間に世界中へ拡大した。",
        "options": [
          "にとどまらず",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "にとどまらず",
        "explanation": "Không chỉ dừng lại ở châu Á: アジアにとどまらず."
      },
      {
        "id": "jlpt-n1-totodomarazu-2",
        "type": "fill",
        "prompt": "Điền từ lan tỏa quy mô: 被害は農作物に ___ 、インフラ全体に及んだ。",
        "answer": "とどまらず",
        "explanation": "Cấu trúc N + にとどまらず."
      },
      {
        "id": "jlpt-n1-totodomarazu-3",
        "type": "order",
        "prompt": "Sắp xếp: Trận động đất không chỉ gây thiệt hại về vật chất mà còn để lại tổn thương tâm lý.",
        "options": [
          "物質的な被害に",
          "とどまらず",
          "精神的な傷も",
          "深く残した"
        ],
        "answer": "物質的な被害にとどまらず精神的な傷も深く残した",
        "explanation": "Trật tự: Thiệt hại vật chất + とどまらず + Tổn thương tinh thần."
      },
      {
        "id": "jlpt-n1-totodomarazu-4",
        "type": "choice",
        "prompt": "彼の挑戦は、単なる趣味の領域を ___ いる。",
        "options": [
          "超えて",
          "とどまって",
          "踏まえて",
          "おいて"
        ],
        "answer": "超えて",
        "explanation": "Vượt ra khỏi phạm vi sở thích: 趣味の領域を超えている."
      },
      {
        "id": "jlpt-n1-totodomarazu-5",
        "type": "fill",
        "prompt": "Điền trợ từ: この技術は医療 ___ とどまらず、宇宙開発にも応用される。",
        "answer": "に",
        "explanation": "Trợ từ cố định: 医療にとどまらず."
      },
      {
        "id": "jlpt-n1-totodomarazu-6",
        "type": "choice",
        "prompt": "伝統を守る ___ 、新しい表現手法を積極的に取り入れている。",
        "options": [
          "にとどまらず",
          "まみれて",
          "ずくめで",
          "極まって"
        ],
        "answer": "にとどまらず",
        "explanation": "V từ điển + にとどまらず: 守るにとどまらず."
      },
      {
        "id": "jlpt-n1-totodomarazu-7",
        "type": "order",
        "prompt": "Sắp xếp: Lễ hội thu hút không chỉ dân địa phương mà đông đảo du khách từ khắp các nơi kéo đến.",
        "options": [
          "地元住民に",
          "とどまらず",
          "全国から観光客が",
          "集まった"
        ],
        "answer": "地元住民にとどまらず全国から観光客が集まった",
        "explanation": "Trật tự: Dân địa phương + とどまらず + Du khách cả nước kéo đến."
      },
      {
        "id": "jlpt-n1-totodomarazu-8",
        "type": "choice",
        "prompt": "AIの進化はIT業界 ___ 、社会構造全体を劇的に変えつつある。",
        "options": [
          "にとどまらず",
          "たるもの",
          "ならでは",
          "とあって"
        ],
        "answer": "にとどまらず",
        "explanation": "Không chỉ dừng lại ở ngành công nghệ thông tin: IT業界にとどまらず."
      },
      {
        "id": "jlpt-n1-totodomarazu-9",
        "type": "fill",
        "prompt": "Điền thể chia của 批判する: 単に ___ にとどまらず、具体的な対案を提示すべきだ。",
        "answer": "批判する",
        "explanation": "V từ điển + にとどまらず: 批判するにとどまらず (không chỉ dừng ở chỉ trích)."
      },
      {
        "id": "jlpt-n1-totodomarazu-10",
        "type": "order",
        "prompt": "Sắp xếp: Sự việc này không chỉ là vấn đề của riêng anh ấy mà ảnh hưởng tới cả đội ngũ.",
        "options": [
          "彼個人の問題に",
          "とどまらず",
          "チーム全体に",
          "関わる事態だ"
        ],
        "answer": "彼個人の問題にとどまらずチーム全体に関わる事態だ",
        "explanation": "Trật tự: Vấn đề riêng cá nhân + とどまらず + Liên quan cả đội ngũ."
      }
    ]
  },
  {
    "id": "jlpt-n1-kawakiri",
    "pattern": "〜を皮切りに・を皮切りにして",
    "title": "Mở màn / Khởi đầu cho chuỗi sự kiện bùng nổ",
    "level": "N1",
    "position": 328,
    "meaning": "【N＋を皮切りに（して） / を皮切りとして】Lấy sự kiện đầu tiên làm phát súng mở màn, kích hoạt hàng loạt các sự kiện, tour lưu diễn hoặc phong trào tương tự bùng nổ theo sau",
    "formation": "N + を皮切りに(して) / を皮切りとして",
    "explanation": "Dùng nhiều trong thông tin giải trí, lưu diễn văn hóa, phong trào xã hội để mô tả điểm phát xuất của một chuỗi sự kiện quy mô lớn tiếp diễn liên tục.",
    "notes": "Chú thích phân biệt:\n- 〜を皮切りに: Sự kiện đầu tiên mở đường cho HÀNG LOẠT SỰ KIỆN TƯƠNG TỰ liên tiếp (tour diễn mở màn tại Tokyo sau đó đi qua 10 thành phố khác).\n- 〜をきっかけに: Lấy cơ duyên dẫn tới một sự thay đổi bước ngoặt trong tư duy hay cuộc đời.",
    "mistake": "Cảnh báo lỗi: Vế sau phải là chuỗi các hành động cùng tính chất diễn ra liên tiếp sau đó, không dùng cho hiện tượng thiên nhiên đơn lẻ.",
    "related": [
      "jlpt-n2-kikkake",
      "bridge-n2-33"
    ],
    "examples": [
      {
        "ja": "東京公演を皮切りに、全国10都市を巡るライブツアーがスタートする。",
        "kana": "とうきょうこうえんをかわきりに、ぜんこくじゅっとしをめぐるらいぶつあーがすたーとする。",
        "vi": "Khởi đầu với đêm diễn mở màn tại Tokyo, tour lưu diễn vòng quanh 10 thành phố trên toàn quốc sẽ chính thức khởi động.",
        "readings": {
          "東京公演": "とうきょうこうえん",
          "皮切り": "かわきり",
          "全国": "ぜんこく"
        }
      },
      {
        "ja": "あの事件を皮切りにして、政界の不正が次々と明るみに出た。",
        "kana": "あのじけんをかわきりにして、せいかいのふせいがつぎつぎとあかるみにでた。",
        "vi": "Mở đầu từ vụ bê bối đó, hàng loạt hành vi phi pháp trong chính trường đã lần lượt bị phanh phui ra ánh sáng.",
        "readings": {
          "事件": "じけん",
          "政界": "せいかい",
          "不正": "ふせい",
          "明るみ": "あかるみ"
        }
      },
      {
        "ja": "新人作家の受賞作を皮切りとして、続々と話題作が刊行されている。",
        "kana": "しんじんさっかのじゅしょうさくをかわきりとして、ぞくぞくとわだいさくがかんこうされている。",
        "vi": "Mở màn từ tác phẩm đoạt giải của cây bút trẻ, hàng loạt cuốn sách gây sốt liên tiếp được xuất bản.",
        "readings": {
          "新人作家": "しんじんさっか",
          "受賞作": "じゅしょうさく",
          "話題作": "わだいさく",
          "刊行": "かんこう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-kawakiri-1",
        "type": "choice",
        "prompt": "大阪での展示会を ___ 、全国各地で巡回展が開催される。",
        "options": [
          "皮切りに",
          "まみれに",
          "ずくめに",
          "極まりなく"
        ],
        "answer": "皮切りに",
        "explanation": "Khởi đầu bằng triển lãm ở Osaka: を皮切りに."
      },
      {
        "id": "jlpt-n1-kawakiri-2",
        "type": "fill",
        "prompt": "Điền từ mở màn chuỗi sự kiện: 彼のヒット曲を ___ に、数々の名曲が生み出された。",
        "answer": "皮切り",
        "explanation": "〜を皮切りに: lấy bài hát hit đó làm điểm mở màn."
      },
      {
        "id": "jlpt-n1-kawakiri-3",
        "type": "order",
        "prompt": "Sắp xếp: Khởi đầu bằng buổi họp báo hôm nay, các chiến dịch quảng bá sẽ rầm rộ bắt đầu.",
        "options": [
          "今日の記者会見を",
          "皮切りとして",
          "プロモーションが",
          "本格化する"
        ],
        "answer": "今日の記者会見を皮切りとしてプロモーションが本格化する",
        "explanation": "Trật tự: Cuộc họp báo + 皮切りとして + Quảng bá rầm rộ bắt đầu."
      },
      {
        "id": "jlpt-n1-kawakiri-4",
        "type": "choice",
        "prompt": "第1号店のオープンを皮切りに、今年中に ___ 店舗を出店する計画だ。",
        "options": [
          "50",
          "ゼロ",
          "少し",
          "ほんのわずか"
        ],
        "answer": "50",
        "explanation": "Mở màn bằng cửa hàng số 1, tiếp tục mở 50 cửa hàng."
      },
      {
        "id": "jlpt-n1-kawakiri-5",
        "type": "fill",
        "prompt": "Điền trợ từ: その発言 ___ 皮切りにして、激しい論争が巻き起こった。",
        "answer": "を",
        "explanation": "Trợ từ cố định: を皮切りにして."
      },
      {
        "id": "jlpt-n1-kawakiri-6",
        "type": "choice",
        "prompt": "春の桜まつりを ___ 、この街では様々なイベントが続く。",
        "options": [
          "皮切りに",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "皮切りに",
        "explanation": "Mở màn chuỗi lễ hội của thị trấn: を皮切りに."
      },
      {
        "id": "jlpt-n1-kawakiri-7",
        "type": "order",
        "prompt": "Sắp xếp: Bắt đầu từ thị trường châu Á, hãng dự định mở rộng ra toàn cầu.",
        "options": [
          "アジア市場への進出を",
          "皮切りにして",
          "世界展開を",
          "図る予定だ"
        ],
        "answer": "アジア市場への進出を皮切りにして世界展開を図る予定だ",
        "explanation": "Trật tự: Thị trường châu Á + 皮切りにして + Mở rộng toàn cầu."
      },
      {
        "id": "jlpt-n1-kawakiri-8",
        "type": "choice",
        "prompt": "主将のホームランを皮切りに、打線が ___ 大量得点を奪った。",
        "options": [
          "爆発して",
          "冷え込んで",
          "沈黙して",
          "途切れて"
        ],
        "answer": "爆発して",
        "explanation": "Chuỗi đập bóng bùng nổ ghi điểm: 打線が爆発して."
      },
      {
        "id": "jlpt-n1-kawakiri-9",
        "type": "fill",
        "prompt": "Điền từ: 最初の抗議デモを ___ に、運動は全国に波及した。",
        "answer": "皮切り",
        "explanation": "Khởi đầu từ biểu tình đầu tiên: を皮切りに."
      },
      {
        "id": "jlpt-n1-kawakiri-10",
        "type": "order",
        "prompt": "Sắp xếp: Khởi đầu bằng buổi ra mắt phim, dàn sao bắt đầu lịch trình giao lưu dày đặc.",
        "options": [
          "映画の初日舞台挨拶を",
          "皮切りに",
          "過密なスケジュールが",
          "始まった"
        ],
        "answer": "映画の初日舞台挨拶を皮切りに過密なスケジュールが始まった",
        "explanation": "Trật tự: Buổi chào sân khấu ngày đầu + 皮切りに + Lịch trình dày đặc bắt đầu."
      }
    ]
  },
  {
    "id": "jlpt-n1-kinjienai",
    "pattern": "〜を禁じ得ない",
    "title": "Không thể kiềm chế nổi xúc cảm trào dâng",
    "level": "N1",
    "position": 329,
    "meaning": "【N＋を禁じ得ない】Không thể kìm nén, ngăn cản nổi những dòng cảm xúc mãnh liệt (thương xót, phẫn nộ, kinh ngạc, xúc động) tự nhiên trào dâng trong lòng",
    "formation": "N (chỉ cảm xúc mạnh mẽ: 涙, 怒り, 憤り, 同情, 驚き) + を禁じ得ない",
    "explanation": "Cách diễn đạt trang trọng trong văn học và diễn ngôn xã hội: thể hiện sự xúc động sâu sắc hay nỗi phẫn nộ tột cùng trước một sự việc quá đau lòng hoặc bất công.",
    "notes": "Chú thích phân biệt:\n- 〜を禁じ得ない: Chỉ đi với các DANH TỪ CẢM XÚC (涙, 怒り, 悲しみ, 同情).\n- 〜ざるを得ない: Đi với ĐỘNG TỪ chỉ hành vi bắt buộc phải làm.",
    "mistake": "Cảnh báo lỗi: Tuyệt đối không dùng cho các hành động thể chất thông thường (sai: 行くを禁じ得ない). Phải là danh từ cảm xúc.",
    "related": [
      "jlpt-n2-tamaranai",
      "jlpt-n2-zarwoenai"
    ],
    "examples": [
      {
        "ja": "被災地の悲惨な光景を目の当たりにして、涙を禁じ得なかった。",
        "kana": "ひさいちのひさんなこうけいをまのあたりにして、なみだをきんじえなかった。",
        "vi": "Tận mắt chứng kiến cảnh tượng hoang tàn bi thảm nơi vùng thiên tai, tôi không thể nào kìm nén nổi những giọt nước mắt.",
        "readings": {
          "被災地": "ひさいち",
          "悲惨": "ひさん",
          "光景": "こうけい",
          "涙": "なみだ",
          "禁じ得なかった": "きんじえなかった"
        }
      },
      {
        "ja": "罪のない市民を巻き込んだ凶悪事件に、激しい憤りを禁じ得ない。",
        "kana": "つみのないしみんをまきこんだきょうあくじけんに、はげらしいいきどおりをきんじえない。",
        "vi": "Trước vụ án hung ác tàn nhẫn hãm hại những người dân vô tội, tôi không thể nào kìm nén nổi cơn phẫn nộ tột cùng.",
        "readings": {
          "罪": "つみ",
          "市民": "しみん",
          "凶悪事件": "きょうあくじけん",
          "憤り": "いきどおり"
        }
      },
      {
        "ja": "彼の突然の悲報に接し、驚きと深い悲しみを禁じ得ない。",
        "kana": "かれのとつぜんのひほうにせっし、おどろきとふかいかなしみをきんじえない。",
        "vi": "Nhận được hung tin đột ngột về sự ra đi của anh ấy, tôi không sao ngăn nổi sự ngỡ ngàng cùng niềm tiếc thương sâu sắc.",
        "readings": {
          "悲報": "ひほう",
          "驚き": "おどろき",
          "悲しみ": "かなしみ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-kinjienai-1",
        "type": "choice",
        "prompt": "その悲劇的な結末に、誰もが同情を ___ 。",
        "options": [
          "禁じ得なかった",
          "余儀なくされた",
          "皮切りにした",
          "極まりなかった"
        ],
        "answer": "禁じ得なかった",
        "explanation": "Không thể kìm nén lòng thương cảm: 同情を禁じ得なかった."
      },
      {
        "id": "jlpt-n1-kinjienai-2",
        "type": "fill",
        "prompt": "Điền từ kìm nén cảm xúc: 不正を隠蔽しようとする会社の態度に、強い怒りを禁じ ___ 。",
        "answer": "得ない",
        "explanation": "〜を禁じ得ない: không thể kiềm nổi cơn giận."
      },
      {
        "id": "jlpt-n1-kinjienai-3",
        "type": "order",
        "prompt": "Sắp xếp: Tận mắt thấy cậu bé kiên cường vượt qua nghịch cảnh, tôi không ngăn nổi giọt lệ.",
        "options": [
          "少年の健気な姿に",
          "涙を",
          "禁じ",
          "得なかった"
        ],
        "answer": "少年の健気な姿に涙を禁じ得なかった",
        "explanation": "Trật tự: Trước tấm gương kiên cường + 涙を + 禁じ + 得なかった."
      },
      {
        "id": "jlpt-n1-kinjienai-4",
        "type": "choice",
        "prompt": "あんな身勝手な振る舞いには、呆れを ___ 。",
        "options": [
          "禁じ得ない",
          "おいてない",
          "まみれない",
          "ずくめだ"
        ],
        "answer": "禁じ得ない",
        "explanation": "Không thể kìm nổi sự ngán ngẩm ngao ngán: 呆れを禁じ得ない."
      },
      {
        "id": "jlpt-n1-kinjienai-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 彼のあまりの変貌ぶりに驚き ___ 禁じ得なかった。",
        "answer": "を",
        "explanation": "Trợ từ cố định: 驚きを禁じ得ない."
      },
      {
        "id": "jlpt-n1-kinjienai-6",
        "type": "choice",
        "prompt": "長年の恩師の訃報を聞き、深い哀悼の意を ___ 。",
        "options": [
          "禁じ得ない",
          "余儀なくさせる",
          "たるものだ",
          "ならではだ"
        ],
        "answer": "禁じ得ない",
        "explanation": "Không kìm nén nổi niềm tiếc thương sâu sắc: 哀悼の意を禁じ得ない."
      },
      {
        "id": "jlpt-n1-kinjienai-7",
        "type": "order",
        "prompt": "Sắp xếp: Trước vụ bê bối liên hoàn của chính quyền, sự phẫn nộ không thể kìm nén được.",
        "options": [
          "相次ぐ汚職に",
          "国民は不信感を",
          "禁じ得ないで",
          "いる"
        ],
        "answer": "相次ぐ汚職に国民は不信感を禁じ得ないでいる",
        "explanation": "Trật tự: Tham nhũng liên hoàn + Bất tín không kìm nén nổi + 禁じ得ないでいる."
      },
      {
        "id": "jlpt-n1-kinjienai-8",
        "type": "choice",
        "prompt": "親を亡くした幼い兄弟の境遇に、悲哀を ___ 。",
        "options": [
          "禁じ得ない",
          "皮切りにしている",
          "極まる",
          "ずくめだ"
        ],
        "answer": "禁じ得ない",
        "explanation": "Cảm xúc xót xa khôn xiết: 悲哀を禁じ得ない."
      },
      {
        "id": "jlpt-n1-kinjienai-9",
        "type": "fill",
        "prompt": "Điền từ: このような理不尽な判決には、強い憤りを ___ 得ない。",
        "answer": "禁じ",
        "explanation": "〜を禁じ得ない: không thể kìm nổi phẫn uất."
      },
      {
        "id": "jlpt-n1-kinjienai-10",
        "type": "order",
        "prompt": "Sắp xếp: Ngắm nhìn công trình vĩ đại của tiền nhân, lòng thán phục dâng trào khôn nguôi.",
        "options": [
          "先人の偉業に",
          "感嘆を",
          "禁じ",
          "得ない"
        ],
        "answer": "先人の偉業に感嘆を禁じ得ない",
        "explanation": "Trật tự: Thành tựu tiền nhân + 感嘆を + 禁じ + 得ない."
      }
    ]
  },
  {
    "id": "jlpt-n1-kagiri-ni",
    "pattern": "〜を限りに",
    "title": "Lấy mốc này làm lần cuối cùng / Hết sức có thể",
    "level": "N1",
    "position": 330,
    "meaning": "【Dạng 1: Mốc kết thúc vĩnh viễn】Lấy ngày/khoảnh khắc hôm nay làm thời điểm cuối cùng kết thúc hoàn toàn một sự việc\n【Dạng 2: Hết mức năng lực thể chất】Hết mức có thể (声を限りに: hét hết cỡ tiếng, 力を限りに: dốc hết tàn lực)",
    "formation": "【Dạng 1】Mốc thời gian (今日, 今月, 本年度) + を限りに (chấm dứt, giải nghệ)\n【Dạng 2】Cụm cố định: 声 / 力 + を限りに + V",
    "explanation": "Dùng trong thông báo chính thức tuyên bố đóng cửa dịch vụ, giải nghệ hoặc trong văn miêu tả sự bùng nổ hết tàn lực của giọng nói, sức lực.",
    "notes": "Chú thích phân biệt:\n- 〜を限りに: Chấm dứt dứt khoát không bao giờ lặp lại (VD: 今日を限りにタバコをやめる - từ hôm nay tuyệt đối bỏ thuốc lá).\n- 〜までに: Hạn chót phải hoàn thành.",
    "mistake": "Cảnh báo lỗi: Thường đi với các mốc thời điểm mang tính bước ngoặt (hôm nay, tháng này, giải đấu lần này).",
    "related": [
      "jlpt-n2-kagiri",
      "bridge-n2-44"
    ],
    "examples": [
      {
        "ja": "当店は今月末日を限りに、閉店することとなりました。",
        "kana": "とうてんはこんげつまつじつをかぎりに、へいてんすることとなりました。",
        "vi": "Cửa hàng chúng tôi sẽ chính thức đóng cửa vĩnh viễn kể từ ngày cuối cùng của tháng này.",
        "readings": {
          "当店": "とうてん",
          "今月末日": "こんげつまつじつ",
          "閉店": "へいてん"
        }
      },
      {
        "ja": "遭難者は救助隊に向かって、声を限りに助けを求めた。",
        "kana": "そうなんしゃはきゅうじょたいにむかって、こえをかぎりにたすけをもとめた。",
        "vi": "Người bị nạn đã hướng về phía đội cứu hộ gào thét hết cỡ giọng để cầu cứu.",
        "readings": {
          "遭難者": "そうなんしゃ",
          "救助隊": "きゅうじょたい",
          "声": "こえ",
          "助け": "たすけ"
        }
      },
      {
        "ja": "今回の大会を限りに、現役生活に終止符を打つ決意を固めた。",
        "kana": "こんかいのたいかいをかぎりに、げんえきせいかつにしゅうしふをうつけついをかためた。",
        "vi": "Tôi đã hạ quyết tâm lấy giải đấu lần này làm dấu chấm hết cho sự nghiệp thi đấu của mình.",
        "readings": {
          "大会": "たいかい",
          "現役生活": "げんえきせいかつ",
          "終止符": "しゅうしふ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-kagiri-ni-1",
        "type": "choice",
        "prompt": "本日 ___ このサービスを終了させていただきます。",
        "options": [
          "を限りに",
          "を皮切りに",
          "に相まって",
          "ならでは"
        ],
        "answer": "を限りに",
        "explanation": "Lấy ngày hôm nay làm mốc kết thúc: 本日を限りに."
      },
      {
        "id": "jlpt-n1-kagiri-ni-2",
        "type": "fill",
        "prompt": "Điền cụm từ hết cỡ giọng: 子供たちは声を ___ 応援歌を歌った。",
        "answer": "限りに",
        "explanation": "Cụm thành ngữ cố định: 声を限りに (hét hết sức giọng)."
      },
      {
        "id": "jlpt-n1-kagiri-ni-3",
        "type": "order",
        "prompt": "Sắp xếp: Kể từ giải đấu này tôi sẽ từ giã sân cỏ.",
        "options": [
          "今年度の大会を",
          "限りに",
          "引退することを",
          "表明した"
        ],
        "answer": "今年度の大会を限りに引退することを表明した",
        "explanation": "Trật tự: Đại hội năm nay + 限りに + Tuyên bố giải nghệ."
      },
      {
        "id": "jlpt-n1-kagiri-ni-4",
        "type": "choice",
        "prompt": "力を ___ 漕ぎ続けたボートが、ついに岸にたどり着いた。",
        "options": [
          "限りに",
          "あまりに",
          "とおりに",
          "くせに"
        ],
        "answer": "限りに",
        "explanation": "Dốc hết tàn lực chèo thuyền: 力を限りに."
      },
      {
        "id": "jlpt-n1-kagiri-ni-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 3月31日 ___ 限りに、旧会員証は無効となります。",
        "answer": "を",
        "explanation": "Trợ từ cố định: を限りに."
      },
      {
        "id": "jlpt-n1-kagiri-ni-6",
        "type": "choice",
        "prompt": "今日を限りに、甘いものを ___ 決意を固めた。",
        "options": [
          "断つ",
          "食べる",
          "買う",
          "配る"
        ],
        "answer": "断つ",
        "explanation": "Cai đồ ngọt kể từ hôm nay: 今日を限りに甘いものを断つ."
      },
      {
        "id": "jlpt-n1-kagiri-ni-7",
        "type": "order",
        "prompt": "Sắp xếp: Thuyền cứu hộ gào thét còi hú hết công suất.",
        "options": [
          "汽笛を",
          "鳴らせる限りに",
          "鳴らして",
          "合図を送った"
        ],
        "answer": "汽笛を鳴らせる限りに鳴らして合図を送った",
        "explanation": "Trật tự: Hú còi hết mức có thể để ra tín hiệu."
      },
      {
        "id": "jlpt-n1-kagiri-ni-8",
        "type": "choice",
        "prompt": "今期を限りに ___ を退くことになりました。",
        "options": [
          "役職",
          "給料",
          "ボーナス",
          "休暇"
        ],
        "answer": "役職",
        "explanation": "Rút lui khỏi chức vụ kể từ kỳ này: 役職を退く."
      },
      {
        "id": "jlpt-n1-kagiri-ni-9",
        "type": "fill",
        "prompt": "Điền từ: 今回の公演を ___ に、劇団は活動を休止します。",
        "answer": "限り",
        "explanation": "Lấy buổi diễn này làm mốc dừng: 公演を限りに."
      },
      {
        "id": "jlpt-n1-kagiri-ni-10",
        "type": "order",
        "prompt": "Sắp xếp: Cô ấy khóc hét hết cỡ tiếng trong cơn đau đớn.",
        "options": [
          "痛みに耐えかねて",
          "声を限りに",
          "叫び声を",
          "上げた"
        ],
        "answer": "痛みに耐えかねて声を限りに叫び声を上げた",
        "explanation": "Trật tự: Không chịu nổi đau + 声を限りに + Hét toáng lên."
      }
    ]
  },
  {
    "id": "jlpt-n1-nakushitewa",
    "pattern": "〜なくしては〜ない",
    "title": "Nếu không có... thì tuyệt đối không thể",
    "level": "N1",
    "position": 331,
    "meaning": "【N＋なくしては〜ない】Nếu thiếu vắng đi yếu tố cốt tử N (nỗ lực, tình yêu thương, sự đồng lòng) thì tuyệt đối không bao giờ có thể đạt được thành quả ở vế sau",
    "formation": "N + なくしては + (は) + V thể phủ định (〜ない / 〜あり得ない)",
    "explanation": "Khẳng định điều kiện sống còn, yếu tố quyết định không thể thiếu để tạo nên thành công, kỳ tích hay hạnh phúc.",
    "notes": "Chú thích phân biệt:\n- 〜なくしては: Vế sau luôn luôn kết thúc bằng PHỦ ĐỊNH TUYỆT ĐỐI (〜ない, 〜できない, 〜成立しない).\n- 〜がなければ: Điều kiện giả định thông thường.",
    "mistake": "Cảnh báo lỗi: Đi trực tiếp sau danh từ (không dùng động từ dạng なくしては).",
    "related": [
      "jlpt-n2-kotoni-wa",
      "jlpt-n1-atteno"
    ],
    "examples": [
      {
        "ja": "日々の地道な努力なくしては、いかなる偉業も達成し得ない。",
        "kana": "ひびのじみちなどりょくなくしては、いかなるいぎょうもたっせいしえない。",
        "vi": "Nếu không có những nỗ lực bền bỉ mỗi ngày, không một đại nghiệp nào có thể hoàn thành được.",
        "readings": {
          "地道": "じみち",
          "努力": "どりょく",
          "偉業": "いぎょう",
          "達成": "たっせい"
        }
      },
      {
        "ja": "国民の理解と協力なくして、この改革の成功はあり得ない。",
        "kana": "こくみんのりかいときょうりょくなくして、このかいかくのせいこうはありえない。",
        "vi": "Nếu không có sự thấu hiểu và chung tay của nhân dân, sự thành công của công cuộc cải cách này là điều không tưởng.",
        "readings": {
          "国民": "こくみん",
          "理解": "りかい",
          "協力": "きょうりょく",
          "改革": "かいかく"
        }
      },
      {
        "ja": "互いの深い信頼関係なくしては、真の友情など成り立たない。",
        "kana": "たがいのふかいしんらいかんけいなくしては、しんのゆうじょうなどなりたたない。",
        "vi": "Nếu không có sự tin tưởng sâu sắc lẫn nhau, một tình bạn chân chính tuyệt đối không thể tồn tại.",
        "readings": {
          "信頼関係": "しんらいかんけい",
          "友情": "ゆうじょう",
          "成り立たない": "なりたたない"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-nakushitewa-1",
        "type": "choice",
        "prompt": "皆様のご支援 ___ 、今日の栄光はあり得ませんでした。",
        "options": [
          "なくしては",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "なくしては",
        "explanation": "Nếu không có sự ủng hộ của quý vị: ご支援なくしては."
      },
      {
        "id": "jlpt-n1-nakushitewa-2",
        "type": "fill",
        "prompt": "Điền từ điều kiện cốt tử: 絶え間ない練習 ___ して、オリンピックでの金メダルは獲れなかった。",
        "answer": "なく",
        "explanation": "〜なくして: nếu không có luyện tập không ngừng."
      },
      {
        "id": "jlpt-n1-nakushitewa-3",
        "type": "order",
        "prompt": "Sắp xếp: Nếu không có sự tin cậy thì hợp đồng kinh doanh không thể thành công.",
        "options": [
          "信頼なくしては",
          "ビジネスの成功など",
          "望むことは",
          "できない"
        ],
        "answer": "信頼なくしてはビジネスの成功など望むことはできない",
        "explanation": "Trật tự: 信頼なくしては + Không thể kỳ vọng thành công."
      },
      {
        "id": "jlpt-n1-nakushitewa-4",
        "type": "choice",
        "prompt": "愛なくしては、人生に真の ___ は生まれない。",
        "options": [
          "幸福",
          "不幸",
          "困難",
          "絶望"
        ],
        "answer": "幸福",
        "explanation": "Nếu thiếu vắng tình yêu thì hạnh phúc đích thực không thể sinh sôi: 幸福."
      },
      {
        "id": "jlpt-n1-nakushitewa-5",
        "type": "fill",
        "prompt": "Điền từ đuôi phủ định: 資金の調達なくして、工場の建設は進め ___ 。",
        "answer": "られない",
        "explanation": "Tiến độ không thể thúc đẩy: 進められない."
      },
      {
        "id": "jlpt-n1-nakushitewa-6",
        "type": "choice",
        "prompt": "過去の反省なくして、未来の発展は ___ 。",
        "options": [
          "あり得ない",
          "確実だ",
          "簡単だ",
          "当然だ"
        ],
        "answer": "あり得ない",
        "explanation": "Không kiểm điểm quá khứ thì tương lai không thể có: あり得ない."
      },
      {
        "id": "jlpt-n1-nakushitewa-7",
        "type": "order",
        "prompt": "Sắp xếp: Nếu không có sự hy sinh của các bậc tiền bối thì không có ngày hòa bình hôm nay.",
        "options": [
          "先人の尊い犠牲なくして",
          "今日の平和は",
          "存在し",
          "得なかった"
        ],
        "answer": "先人の尊い犠牲なくして今日の平和は存在し得なかった",
        "explanation": "Trật tự: Sự hy sinh cao cả + Hòa bình hôm nay không thể tồn tại."
      },
      {
        "id": "jlpt-n1-nakushitewa-8",
        "type": "choice",
        "prompt": "技術の革新なくして、企業の生き残りは ___ 。",
        "options": [
          "極めて困難だ",
          "極めて容易だ",
          "とても順調だ",
          "全く問題ない"
        ],
        "answer": "極めて困難だ",
        "explanation": "Không đổi mới kỹ thuật thì tồn tại vô cùng khó khăn: 極めて困難だ."
      },
      {
        "id": "jlpt-n1-nakushitewa-9",
        "type": "fill",
        "prompt": "Điền từ: 住民の合意 ___ しては、この計画は実行に移せない。",
        "answer": "なく",
        "explanation": "N + なくしては: 合意なくしては."
      },
      {
        "id": "jlpt-n1-nakushitewa-10",
        "type": "order",
        "prompt": "Sắp xếp: Nếu không có sức khỏe thì tiền tài danh vọng cũng vô nghĩa.",
        "options": [
          "健康なくしては",
          "どれほど富があっても",
          "何の意味も",
          "持たない"
        ],
        "answer": "健康なくしてはどれほど富があっても何の意味も持たない",
        "explanation": "Trật tự: 健康なくしては + Giàu có mấy cũng không ý nghĩa."
      }
    ]
  },
  {
    "id": "jlpt-n1-haoroka",
    "pattern": "〜はおろか",
    "title": "Đến cả A còn không thể huống chi là B",
    "level": "N1",
    "position": 332,
    "meaning": "【N＋はおろか（〜も / さえ / すら〜ない）】Đến cả điều cơ bản, dễ dàng A mà còn chưa làm nổi hoặc không có được, thì nói chi tới chuyện xa vời, khó khăn B",
    "formation": "N + はおろか + N (hoặc cụm từ) + も / さえ / すら + Phủ định",
    "explanation": "Nhấn mạnh sự cách biệt cực đại: phủ nhận ngay từ ngưỡng đơn giản nhất để khẳng định điều phức tạp hơn ở vế sau là hoàn toàn bất khả thi.",
    "notes": "Chú thích phân biệt:\n- 〜はおろか: A là điều bình thường đương nhiên phải có, nhưng đến A còn không có thì B càng không thể (cơm còn không có ăn, nói chi sơn hào hải vị).\n- 〜ばかりか: Không những A mà còn có cả B (cả hai đều có).",
    "mistake": "Cảnh báo lỗi: Vế sau luôn có trợ từ nhấn mạnh も, さえ, すら đi kèm vị ngữ phủ định.",
    "related": [
      "jlpt-n3-dokoroka",
      "jlpt-n2-dokorodehanai"
    ],
    "examples": [
      {
        "ja": "怪我をして、歩くことはおろか立ち上がることさえできない。",
        "kana": "けがをして、あるくことはおろかたちあがることさえできない。",
        "vi": "Bị thương nặng, đến đứng dậy còn không nổi huống chi là bảo đi lại.",
        "readings": {
          "怪我": "けが",
          "歩く": "あるく",
          "立ち上がる": "たちあがる"
        }
      },
      {
        "ja": "彼は漢字はおろか、ひらがなさえまだ正確に書けない。",
        "kana": "かれはかんじはおろか、ひらがなさえまだせいかくにかけない。",
        "vi": "Cậu ta đến chữ Hiragana còn chưa viết đúng nổi nói chi đến chữ Hán.",
        "readings": {
          "漢字": "かんじ",
          "正確": "せいかく",
          "書けない": "かけない"
        }
      },
      {
        "ja": "貧しくて日々の食事はおろか、明日の家賃すら払えない状態だ。",
        "kana": "まずしくてひびのしょくじはおろか、あしたのやちんすらはらえないじょうたいだ。",
        "vi": "Nghèo khó đến bữa ăn qua ngày còn chưa lo nổi huống chi là tiền trả nhà trọ ngày mai.",
        "readings": {
          "貧しくて": "まずしくて",
          "食事": "しょくじ",
          "家賃": "やちん",
          "状態": "じょうたい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-haoroka-1",
        "type": "choice",
        "prompt": "喉が痛くて、ご飯 ___ 水を飲むことさえつらい。",
        "options": [
          "はおろか",
          "とあって",
          "たるもの",
          "ならでは"
        ],
        "answer": "はおろか",
        "explanation": "Cơm còn không ăn nổi huống chi nước: ご飯はおろか."
      },
      {
        "id": "jlpt-n1-haoroka-2",
        "type": "fill",
        "prompt": "Điền trợ từ nhấn mạnh vế sau: 英語はおろか、日本語 ___ まともに話せない。",
        "answer": "さえ",
        "explanation": "Cặp liên kết: 〜はおろか〜さえ: 日本語さえ."
      },
      {
        "id": "jlpt-n1-haoroka-3",
        "type": "order",
        "prompt": "Sắp xếp: Đến cả xe đạp còn không có huống chi là mua ô tô.",
        "options": [
          "車はおろか",
          "自転車さえ",
          "持っていない",
          "生活だ"
        ],
        "answer": "車はおろか自転車さえ持っていない生活だ",
        "explanation": "Trật tự: Xe hơi là điều xa vời + Xe đạp còn không có + Đang sống."
      },
      {
        "id": "jlpt-n1-haoroka-4",
        "type": "choice",
        "prompt": "忙しすぎて、海外旅行はおろか国内旅行に ___ 行けない。",
        "options": [
          "すら",
          "こそ",
          "ほど",
          "わけ"
        ],
        "answer": "すら",
        "explanation": "Trợ từ nhấn mạnh tiêu cực vế sau: すら行けない."
      },
      {
        "id": "jlpt-n1-haoroka-5",
        "type": "fill",
        "prompt": "Điền từ so sánh hạ bậc: 敬語 ___ 、普通の挨拶すらろくにできない新入社員だ。",
        "answer": "はおろか",
        "explanation": "Kính ngữ còn chưa nói nổi: 敬語はおろか."
      },
      {
        "id": "jlpt-n1-haoroka-6",
        "type": "choice",
        "prompt": "高熱で起き上がること ___ 、寝返りを打つのも苦痛だ。",
        "options": [
          "はおろか",
          "とあって",
          "たるもの",
          "ならでは"
        ],
        "answer": "はおろか",
        "explanation": "Ngồi dậy còn không nổi: 起き上がることはおろか."
      },
      {
        "id": "jlpt-n1-haoroka-7",
        "type": "order",
        "prompt": "Sắp xếp: Thất bại trận này thì vô địch nói chi, vào chung kết còn không nổi.",
        "options": [
          "優勝はおろか",
          "決勝進出さえ",
          "危うくなって",
          "きた"
        ],
        "answer": "優勝はおろか決勝進出さえ危うくなってきた",
        "explanation": "Trật tự: Vô địch nói chi + Vào chung kết còn nguy hiểm."
      },
      {
        "id": "jlpt-n1-haoroka-8",
        "type": "choice",
        "prompt": "スマートフォンはおろか、___ さえ持っていない高齢者もいる。",
        "options": [
          "固定電話",
          "豪邸",
          "自家用車",
          "別荘"
        ],
        "answer": "固定電話",
        "explanation": "Điện thoại thông minh chưa nói, đến điện thoại bàn cố định còn không có."
      },
      {
        "id": "jlpt-n1-haoroka-9",
        "type": "fill",
        "prompt": "Điền từ: 100万円はおろか、1万円 ___ 貸せないよ。",
        "answer": "すら",
        "explanation": "1 triệu yên nói chi, đến 1 vạn còn không thể cho vay: 1万円すら."
      },
      {
        "id": "jlpt-n1-haoroka-10",
        "type": "order",
        "prompt": "Sắp xếp: Mệt mỏi đến mức nói chuyện còn chẳng nổi huống chi là chạy nhảy.",
        "options": [
          "走ることはおろか",
          "話すことさえ",
          "億劫なほど",
          "疲れている"
        ],
        "answer": "走ることはおろか話すことさえ億劫なほど疲れている",
        "explanation": "Trật tự: Chạy nhảy là xa vời + Nói chuyện còn ngại ngần vì quá mệt."
      }
    ]
  },
  {
    "id": "jlpt-n1-kakawaru",
    "pattern": "〜にかかわる",
    "title": "Ảnh hưởng nghiêm trọng đến sinh mệnh, danh dự",
    "level": "N1",
    "position": 333,
    "meaning": "【N＋にかかわる / にかかわる＋N】Tác động trực tiếp, đe dọa hoặc làm ảnh hưởng vô cùng nghiêm trọng đến những giá trị sinh tử cốt lõi (tính mạng, danh dự, uy tín, thể diện)",
    "formation": "N (chỉ giá trị cốt tử: 命, 名誉, 信用, 存亡) + にかかわる / にかかわる + N",
    "explanation": "Dùng trong các tình huống sinh tử, khủng hoảng uy tín doanh nghiệp hoặc pháp lý: cảnh báo mức độ hệ trọng không thể lơ là xem nhẹ.",
    "notes": "Chú thích phân biệt:\n- 〜にかかわる: Đi với những danh từ chỉ SỰ SINH TỬ, DANH DỰ (命にかかわる病気: bệnh đe dọa mạng sống).\n- 〜に関係する: Mối liên quan khách quan thông thường.",
    "mistake": "Cảnh báo lỗi: Không dùng cho những việc vụn vặt hàng ngày (không nói 今日の昼ご飯にかかわる).",
    "related": [
      "bridge-n2-26",
      "jlpt-n3-wokansuru"
    ],
    "examples": [
      {
        "ja": "これは人の命にかかわる重大な問題だ。一刻の猶予も許されない。",
        "kana": "これはひとのいのちにかかわるじゅうだいなもんだいだ。いっこくのゆうよもゆるされない。",
        "vi": "Đây là vấn đề hệ trọng liên quan trực tiếp đến tính mạng con người. Không được phép chậm trễ dù chỉ một giây.",
        "readings": {
          "命": "いのち",
          "重大": "じゅうだい",
          "猶予": "ゆうよ"
        }
      },
      {
        "ja": "企業の信用にかかわる不祥事を起こしてしまい、深く反省している。",
        "kana": "きぎょうのしんようにかかわるふしょうじをおこしてしまい、ふかくはんせいしている。",
        "vi": "Để xảy ra vụ bê bối ảnh hưởng trực tiếp đến uy tín của doanh nghiệp, chúng tôi vô cùng ân hận kiểm điểm.",
        "readings": {
          "信用": "しんよう",
          "不祥事": "ふしょうじ",
          "反省": "はんせい"
        }
      },
      {
        "ja": "国家の存亡にかかわる危機を乗り越えなければならない。",
        "kana": "こっかのそんぼうにかかわるききをのりこえなければならない。",
        "vi": "Chúng ta phải cùng nhau vượt qua cuộc khủng hoảng liên quan đến sự tồn vong của cả quốc gia.",
        "readings": {
          "存亡": "そんぼう",
          "危機": "きき"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-kakawaru-1",
        "type": "choice",
        "prompt": "患者の命に ___ 手術だから、医師団は慎重を期した。",
        "options": [
          "かかわる",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "かかわる",
        "explanation": "Liên quan trực tiếp sinh mệnh: 命にかかわる."
      },
      {
        "id": "jlpt-n1-kakawaru-2",
        "type": "fill",
        "prompt": "Điền từ đe dọa danh dự: 学校の評判に ___ 不祥事だけは避けたい。",
        "answer": "かかわる",
        "explanation": "Ảnh hưởng uy tín nhà trường: 評判にかかわる."
      },
      {
        "id": "jlpt-n1-kakawaru-3",
        "type": "order",
        "prompt": "Sắp xếp: Đây là sự việc trọng đại liên quan đến sự sống còn của công ty.",
        "options": [
          "会社の存亡に",
          "かかわる",
          "重大な",
          "局面である"
        ],
        "answer": "会社の存亡にかかわる重大な局面である",
        "explanation": "Trật tự: Tồn vong công ty + かかわる + Cục diện trọng đại."
      },
      {
        "id": "jlpt-n1-kakawaru-4",
        "type": "choice",
        "prompt": "個人の名誉に ___ 情報を軽々しく口にしてはならない。",
        "options": [
          "かかわる",
          "まみれる",
          "ずくめる",
          "きわまる"
        ],
        "answer": "かかわる",
        "explanation": "Ảnh hưởng đến danh dự cá nhân: 名誉にかかわる."
      },
      {
        "id": "jlpt-n1-kakawaru-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 一生 ___ かかわる進路の選択だから、慎重に考えなさい。",
        "answer": "に",
        "explanation": "Cấu trúc N + にかかわる: 一生にかかわる."
      },
      {
        "id": "jlpt-n1-kakawaru-6",
        "type": "choice",
        "prompt": "食品の安全に ___ トラブルは、決して隠蔽してはならない。",
        "options": [
          "かかわる",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "かかわる",
        "explanation": "Liên quan an toàn thực phẩm: 安全にかかわる."
      },
      {
        "id": "jlpt-n1-kakawaru-7",
        "type": "order",
        "prompt": "Sắp xếp: Trận đấu này liên quan trực tiếp đến thể diện của toàn đội.",
        "options": [
          "チームのプライドに",
          "かかわる一戦だから",
          "絶対に",
          "負けられない"
        ],
        "answer": "チームのプライドにかかわる一戦だから絶対に負けられない",
        "explanation": "Trật tự: Thể diện toàn đội + かかわる一戦 + Tuyệt đối không thể thua."
      },
      {
        "id": "jlpt-n1-kakawaru-8",
        "type": "choice",
        "prompt": "国家の主権にかかわる問題については、妥協 ___ 。",
        "options": [
          "できない",
          "できる",
          "しそうだ",
          "してよい"
        ],
        "answer": "できない",
        "explanation": "Chủ quyền quốc gia không thể thỏa hiệp: 妥協できない."
      },
      {
        "id": "jlpt-n1-kakawaru-9",
        "type": "fill",
        "prompt": "Điền từ: 人生の成否に ___ 重要な決断を下した。",
        "answer": "かかわる",
        "explanation": "Ảnh hưởng đến thành bại cả đời: 成否にかかわる."
      },
      {
        "id": "jlpt-n1-kakawaru-10",
        "type": "order",
        "prompt": "Sắp xếp: Bác sĩ không bao giờ được phép lơ là sai sót liên quan đến mạng người.",
        "options": [
          "人の生死に",
          "かかわる現場で",
          "油断は",
          "禁物だ"
        ],
        "answer": "人の生死にかかわる現場で油断は禁物だ",
        "explanation": "Trật tự: Nơi liên quan sống chết + 油断は禁物だ (cấm lơ là)."
      }
    ]
  },
  {
    "id": "jlpt-n1-taenai",
    "pattern": "〜に堪えない",
    "title": "Không chịu nổi sự đau xót / Hết sức cảm kích",
    "level": "N1",
    "position": 334,
    "meaning": "【Dạng 1: Không thể chịu đựng nổi】Đau đớn, xót xa hoặc thảm hại đến mức tai không nỡ nghe, mắt không nỡ nhìn\n【Dạng 2: Hết sức khôn nguôi】Vô cùng cảm kích, biết ơn sâu nặng (thường đi với 感謝, 感激)",
    "formation": "【Dạng 1】V từ điển (見る, 聞く) + に堪えない (たえない)\n【Dạng 2】N (chỉ cảm xúc biết ơn: 感謝, 感激) + に堪えない",
    "explanation": "Một cấu trúc cổ điển thanh nhã: ở nghĩa tiêu cực thì mắt không nỡ chứng kiến cảnh bi thảm, ở nghĩa tích cực thì tấm lòng biết ơn dâng trào không kìm nổi.",
    "notes": "Chú thích phân biệt:\n- 見るに堪えない: Cảnh tượng thê thảm, nhếch nhác mắt không nỡ nhìn.\n- 聞くに堪えない: Lời lẽ thô bỉ, tai không muốn nghe.\n- 感謝に堪えません: Xin bày tỏ lòng biết ơn sâu sắc nhất (lễ nghi kính ngữ cao nhất trong phát biểu).",
    "mistake": "Cảnh báo lỗi: Viết chữ Hán 堪 (堪えない), chú ý phân biệt với 耐える (chịu đựng tải trọng vật lý).",
    "related": [
      "jlpt-n1-kinjienai",
      "jlpt-n2-tamaranai"
    ],
    "examples": [
      {
        "ja": "事故現場の惨状は、あまりに悲惨で見るに堪えなかった。",
        "kana": "じこげんばのさんじょうは、あまりにひさんでみるにたえなかった。",
        "vi": "Hiện trường vụ tai nạn hoang tàn bi thương đến mức mắt không nỡ nhìn.",
        "readings": {
          "現場": "げんば",
          "惨状": "さんじょう",
          "悲惨": "ひさん",
          "見る": "みる"
        }
      },
      {
        "ja": "長年にわたる皆様の温かいご支援に対し、感謝に堪えません。",
        "kana": "ながねんにわたるみなさまのあたたかいごしえんにたいし、かんしゃにたえません。",
        "vi": "Trước sự ủng hộ ấm áp của quý vị trong suốt nhiều năm qua, tôi xin bày tỏ lòng biết ơn vô hạn.",
        "readings": {
          "長年": "ながねん",
          "支援": "しえん",
          "感謝": "かんしゃ"
        }
      },
      {
        "ja": "彼のあまりに品のない暴言は、聞くに堪えないものだった。",
        "kana": "かれのあまりにひんのないぼうげんは、きくにたえないものだった。",
        "vi": "Những lời lẽ thô tục hạ đẳng của hắn ta quả thật tai không thể nào nghe nổi.",
        "readings": {
          "品のない": "ひんのない",
          "暴言": "ぼうげん",
          "聞く": "きく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-taenai-1",
        "type": "choice",
        "prompt": "その映画の残酷なシーンは、あまりに凄惨で見るに ___ 。",
        "options": [
          "堪えなかった",
          "とあって",
          "はおろか",
          "たるものだ"
        ],
        "answer": "堪えなかった",
        "explanation": "Cảnh tàn khốc mắt không nỡ nhìn: 見るに堪えなかった."
      },
      {
        "id": "jlpt-n1-taenai-2",
        "type": "fill",
        "prompt": "Điền từ biểu thị lòng biết ơn vô hạn: 皆様のご厚情に対し、感謝に ___ ません。",
        "answer": "堪え",
        "explanation": "Cụm phát biểu trang trọng: 感謝に堪えません."
      },
      {
        "id": "jlpt-n1-taenai-3",
        "type": "order",
        "prompt": "Sắp xếp: Những lời lẽ chửi bới xúc phạm đó tai không thể nào nghe nổi.",
        "options": [
          "彼の口から出た悪口は",
          "聞くに",
          "堪えない",
          "ものだった"
        ],
        "answer": "彼の口から出た悪口は聞くに堪えないものだった",
        "explanation": "Trật tự: Lời chửi bới + 聞くに + 堪えない + ものだった."
      },
      {
        "id": "jlpt-n1-taenai-4",
        "type": "choice",
        "prompt": "受賞の喜びに、感激に ___ 表情を浮かべた。",
        "options": [
          "堪えない",
          "まみれた",
          "ずくめの",
          "きわまる"
        ],
        "answer": "堪えない",
        "explanation": "Vô cùng cảm kích: 感激に堪えない."
      },
      {
        "id": "jlpt-n1-taenai-5",
        "type": "fill",
        "prompt": "Điền thể chia của 見る: 無残な敗北の姿は、___ に堪えない。",
        "answer": "見る",
        "explanation": "V từ điển: 見るに堪えない (mắt không nỡ nhìn)."
      },
      {
        "id": "jlpt-n1-taenai-6",
        "type": "choice",
        "prompt": "ヘイトスピーチのような差別発言は、まさに ___ に堪えない。",
        "options": [
          "聞く",
          "話す",
          "言う",
          "叫ぶ"
        ],
        "answer": "聞く",
        "explanation": "Lời thù ghét tai không nỡ nghe: 聞くに堪えない."
      },
      {
        "id": "jlpt-n1-taenai-7",
        "type": "order",
        "prompt": "Sắp xếp: Lòng tốt không mong đáp lại của bà cụ khiến tôi vô cùng cảm kích.",
        "options": [
          "おばあさんの温かい心遣いに",
          "感謝に",
          "堪えない",
          "思いだった"
        ],
        "answer": "おばあさんの温かい心遣いに感謝に堪えない思いだった",
        "explanation": "Trật tự: Tấm lòng bà cụ + 感謝に + 堪えない + Tâm trạng."
      },
      {
        "id": "jlpt-n1-taenai-8",
        "type": "choice",
        "prompt": "下品な冗談ばかりで、大人の会話として ___ に堪えない。",
        "options": [
          "聞く",
          "見る",
          "触る",
          "嗅ぐ"
        ],
        "answer": "聞く",
        "explanation": "Trò đùa tục tĩu tai không thể nghe nổi: 聞くに堪えない."
      },
      {
        "id": "jlpt-n1-taenai-9",
        "type": "fill",
        "prompt": "Điền từ: 先生のご恩情に接し、感銘に ___ ません。",
        "answer": "堪え",
        "explanation": "Cảm động sâu sắc: 感銘に堪えません."
      },
      {
        "id": "jlpt-n1-taenai-10",
        "type": "order",
        "prompt": "Sắp xếp: Trận đấu kết thúc với tỷ số cách biệt tơi bời mắt không nỡ nhìn.",
        "options": [
          "大差で惨敗した試合は",
          "見るに",
          "堪えない",
          "惨状だった"
        ],
        "answer": "大差で惨敗した試合は見るに堪えない惨状だった",
        "explanation": "Trật tự: Trận thua thảm hại + 見るに + 堪えない + Thảm cảnh."
      }
    ]
  },
  {
    "id": "jlpt-n1-tomonaku",
    "pattern": "〜ともなく・ともなしに",
    "title": "Không chủ đích làm gì mà tự nhiên / Không rõ từ đâu",
    "level": "N1",
    "position": 335,
    "meaning": "【Dạng 1: Vる＋ともなく / ともなしに】Không hề có chủ đích hay chú tâm nhìn ngắm hay lắng nghe, nhưng tự nhiên sự việc lại lọt vào tầm mắt, vào tai\n【Dạng 2: Từ để hỏi＋ともなく】Không rõ là ai / từ đâu / bao giờ mà...",
    "formation": "【Dạng 1】V từ điển (thường là: 見る, 聞く, 考える) + ともなく / ともなしに\n【Dạng 2】Nghi vấn từ (どこから, 誰から, いつから) + ともなく / ともなしに",
    "explanation": "Miêu tả trạng thái tâm trí lơ đãng, thong dong thả trôi suy nghĩ: hành động diễn ra một cách vô thức, không gượng ép.",
    "notes": "Chú thích phân biệt:\n- 見るともなく見ている: Nhìn bâng quơ vô định, không chủ đích ngắm nghía.\n- どこからともなく: Không biết từ đâu ra mà tiếng đàn cất lên.",
    "mistake": "Cảnh báo lỗi: Trong Dạng 1, động từ thường lặp lại: 見るともなく窓の外を見ている (nhìn bâng quơ ra cửa sổ).",
    "related": [
      "bridge-n3-14",
      "jlpt-n2-monoda"
    ],
    "examples": [
      {
        "ja": "見るともなくテレビをぼんやり眺めていたら、友人が画面に映った。",
        "kana": "みるともなくてれびをぼんやりながめていたら、ゆうじんががめんにうつった。",
        "vi": "Đang lơ đãng nhìn bâng quơ vào màn hình tivi thì bỗng thấy người bạn xuất hiện trên sóng.",
        "readings": {
          "見る": "みる",
          "眺めて": "ながめて",
          "友人": "ゆうじん",
          "画面": "がめん"
        }
      },
      {
        "ja": "どこからともなく、心地よい花の香りが漂ってきた。",
        "kana": "どこからともなく、ここちよいはなのかおりがただよってきた。",
        "vi": "Không biết tự nơi nào thoảng đến một mùi hương hoa thơm ngát dịu dàng.",
        "readings": {
          "心地よい": "ここちよい",
          "花": "はな",
          "香り": "かおり",
          "漂って": "ただよって"
        }
      },
      {
        "ja": "聞くともなしに隣の会話を耳に挟んでしまった。",
        "kana": "きくともなしにとなりのかいわをみみにはさんでしまった。",
        "vi": "Tôi chẳng hề có ý nghe lén nhưng cuộc trò chuyện của bàn bên cạnh tự nhiên cứ lọt vào tai.",
        "readings": {
          "聞く": "きく",
          "会話": "かいわ",
          "耳": "みみ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-tomonaku-1",
        "type": "choice",
        "prompt": "どこから ___ 美しいピアノの音色が聞こえてきた。",
        "options": [
          "ともなく",
          "とあって",
          "はおろか",
          "たるもの"
        ],
        "answer": "ともなく",
        "explanation": "Không rõ từ nơi nào vang lại: どこからともなく."
      },
      {
        "id": "jlpt-n1-tomonaku-2",
        "type": "fill",
        "prompt": "Điền từ hành vi bâng quơ không chủ đích: 見る ___ なしに窓の外の雪を眺めていた。",
        "answer": "とも",
        "explanation": "Cấu trúc V từ điển + ともなしに: 見るともなしに."
      },
      {
        "id": "jlpt-n1-tomonaku-3",
        "type": "order",
        "prompt": "Sắp xếp: Không biết tự bao giờ mùa thu đã lặng lẽ ghé qua.",
        "options": [
          "いつから",
          "ともなく",
          "秋の気配が",
          "漂い始めた"
        ],
        "answer": "いつからともなく秋の気配が漂い始めた",
        "explanation": "Trật tự: いつから + ともなく + Thu đã thoảng về."
      },
      {
        "id": "jlpt-n1-tomonaku-4",
        "type": "choice",
        "prompt": "ラジオを聞く ___ 聞いていたら、懐かしい曲が流れてきた。",
        "options": [
          "ともなく",
          "とあって",
          "まみれて",
          "ずくめで"
        ],
        "answer": "ともなく",
        "explanation": "Nghe lơ đãng không chủ đích: 聞くともなく."
      },
      {
        "id": "jlpt-n1-tomonaku-5",
        "type": "fill",
        "prompt": "Điền từ: 誰から ___ 、その噂が社内に広まっていった。",
        "answer": "ともなく",
        "explanation": "Chẳng rõ xuất phát từ ai: 誰からともなく."
      },
      {
        "id": "jlpt-n1-tomonaku-6",
        "type": "choice",
        "prompt": "考えるともなしに ___ いたら、ふと良いアイデアが浮かんだ。",
        "options": [
          "ぼんやりして",
          "集中して",
          "怒って",
          "泣いて"
        ],
        "answer": "ぼんやりして",
        "explanation": "Thả lỏng suy nghĩ mơ màng: ぼんやりしていたら."
      },
      {
        "id": "jlpt-n1-tomonaku-7",
        "type": "order",
        "prompt": "Sắp xếp: Chẳng rõ từ ai mà tiếng vỗ tay bắt đầu vang lên rồi lan khắp phòng.",
        "options": [
          "誰からともなく",
          "拍手が沸き起こり",
          "会場全体に",
          "広がった"
        ],
        "answer": "誰からともなく拍手が沸き起こり会場全体に広がった",
        "explanation": "Trật tự: Chẳng rõ từ ai + 拍手が沸き起こり + Lan tỏa khắp khán phòng."
      },
      {
        "id": "jlpt-n1-tomonaku-8",
        "type": "choice",
        "prompt": "電車の窓ガラスを眺めるともなく ___ いた。",
        "options": [
          "見て",
          "見ないで",
          "見ようと",
          "見れば"
        ],
        "answer": "見て",
        "explanation": "Nhìn bâng quơ ra cửa kính tàu: 眺めるともなく見ていた."
      },
      {
        "id": "jlpt-n1-tomonaku-9",
        "type": "fill",
        "prompt": "Điền từ: 何を言う ___ 、ぶつぶつと呟いている。",
        "answer": "ともなく",
        "explanation": "Nói lảm nhảm chẳng rõ ý gì: 何を言うともなく."
      },
      {
        "id": "jlpt-n1-tomonaku-10",
        "type": "order",
        "prompt": "Sắp xếp: Không biết từ hướng nào mà làn gió mát rượi thổi qua.",
        "options": [
          "どこからともなく",
          "爽やかな風が",
          "吹き抜けて",
          "いった"
        ],
        "answer": "どこからともなく爽やかな風が吹き抜けていった",
        "explanation": "Trật tự: どこからともなく + Làn gió mát rượi + Thổi vụt qua."
      }
    ]
  },
  {
    "id": "jlpt-n1-nitaru",
    "pattern": "〜に足る・に足りない",
    "title": "Xứng đáng để... / Đủ tư cách tin cậy",
    "level": "N1",
    "position": 336,
    "meaning": "【Vる / N＋に足る】Đạt đủ giá trị, phẩm chất, chứng cứ hoặc tư cách để xứng đáng được tin tưởng, tôn trọng, đánh giá cao\n【Vる / N＋に足りない】Không đáng bận tâm, không đủ tư cách",
    "formation": "V từ điển / N + に足る / に足らない (に足りない)\nBổ nghĩa cho danh từ: V từ điển + に足る + N",
    "explanation": "Dùng trong đánh giá học thuật, phẩm định năng lực lãnh đạo hoặc kiểm chứng độ tin cậy của tài liệu, chứng cứ.",
    "notes": "Chú thích phân biệt:\n- 信頼に足る人物: Nhân vật hoàn toàn xứng đáng để đặt trọn niềm tin.\n- 取るに足りない: Không đáng để bận tâm (vấn đề cỏn con tép riu).",
    "mistake": "Cảnh báo lỗi: Động từ kết hợp thường giới hạn ở các động từ đánh giá: 信じる, 信頼する, 評価する, 恐れる.",
    "related": [
      "jlpt-n1-atteno",
      "jlpt-n2-bekida"
    ],
    "examples": [
      {
        "ja": "彼はどんな秘密でも守ってくれる、信頼に足る人物である。",
        "kana": "かれはどんなひみつでもまもってくれる、しんらいにたるじんぶつである。",
        "vi": "Anh ấy là một nhân vật hoàn toàn xứng đáng để gửi trọn niềm tin, giữ kín mọi bí mật.",
        "readings": {
          "秘密": "ひみつ",
          "信頼": "しんらい",
          "人物": "じんぶつ"
        }
      },
      {
        "ja": "これは科学的な検証に足る確実な証拠とは言えない。",
        "kana": "これはかがくてきなけんしょうにたるかくじつなしょうことはいえない。",
        "vi": "Đây chưa thể coi là bằng chứng xác thực đủ giá trị cho việc kiểm chứng khoa học.",
        "readings": {
          "科学的": "かがくてき",
          "検証": "けんしょう",
          "証拠": "しょうこ"
        }
      },
      {
        "ja": "そんな取るに足りない些細な噂に惑わされるな。",
        "kana": "そんなとるにたりないささいなうわさにまどわされるな。",
        "vi": "Đừng để bị dao động bởi những lời đồn đại cỏn con không đáng bận tâm như vậy.",
        "readings": {
          "取る": "とる",
          "些細": "ささい",
          "噂": "うわさ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-nitaru-1",
        "type": "choice",
        "prompt": "その情報は確かな情報源に基づいており、信じるに ___ 。",
        "options": [
          "足る",
          "あまり",
          "くせに",
          "まみれだ"
        ],
        "answer": "足る",
        "explanation": "Đủ giá trị để tin tưởng: 信じるに足る."
      },
      {
        "id": "jlpt-n1-nitaru-2",
        "type": "fill",
        "prompt": "Điền từ cụm thành ngữ không đáng bận tâm: 取るに ___ ない失敗をいつまでも気にするな。",
        "answer": "足り",
        "explanation": "Cụm cố định: 取るに足りない (không đáng để ý)."
      },
      {
        "id": "jlpt-n1-nitaru-3",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy là nhân tài xuất chúng xứng đáng để gánh vác tương lai công ty.",
        "options": [
          "彼は次期リーダーの任に",
          "足る素晴らしい",
          "器の持ち主",
          "である"
        ],
        "answer": "彼は次期リーダーの任に足る素晴らしい器の持ち主である",
        "explanation": "Trật tự: 任に + 足る + Khí chất tuyệt vời của người lãnh đạo."
      },
      {
        "id": "jlpt-n1-nitaru-4",
        "type": "choice",
        "prompt": "恐れるに ___ 相手ではない。落ち着いて戦えば勝てる。",
        "options": [
          "足りない",
          "足る",
          "あまり",
          "すぎない"
        ],
        "answer": "足りない",
        "explanation": "Đối thủ không đáng phải run sợ: 恐れるに足りない."
      },
      {
        "id": "jlpt-n1-nitaru-5",
        "type": "fill",
        "prompt": "Điền từ bổ nghĩa danh từ: 高い評価に ___ 優れた研究成果だ。",
        "answer": "足る",
        "explanation": "Xứng đáng nhận đánh giá cao: 評価に足る."
      },
      {
        "id": "jlpt-n1-nitaru-6",
        "type": "choice",
        "prompt": "この事件は、改めて社会全体で議論するに ___ 重大なテーマだ。",
        "options": [
          "足る",
          "まみれる",
          "ずくめる",
          "きわまる"
        ],
        "answer": "足る",
        "explanation": "Xứng đáng để đem ra thảo luận: 議論するに足る."
      },
      {
        "id": "jlpt-n1-nitaru-7",
        "type": "order",
        "prompt": "Sắp xếp: Đây là bộ phim kinh điển xứng đáng để xem lại nhiều lần.",
        "options": [
          "何度でも鑑賞するに",
          "足る不朽の",
          "名作映画",
          "である"
        ],
        "answer": "何度でも鑑賞するに足る不朽の名作映画である",
        "explanation": "Trật tự: 鑑賞するに + 足る + Tuyệt tác bất hủ."
      },
      {
        "id": "jlpt-n1-nitaru-8",
        "type": "choice",
        "prompt": "取るに足らないミスを、鬼の首を取ったように ___ な。",
        "options": [
          "騒ぎ立てる",
          "喜ぶ",
          "褒める",
          "感謝する"
        ],
        "answer": "騒ぎ立てる",
        "explanation": "Lỗi cỏn con mà làm ầm ĩ lên: 騒ぎ立てるな."
      },
      {
        "id": "jlpt-n1-nitaru-9",
        "type": "fill",
        "prompt": "Điền từ: 推薦するに ___ 人物が見当たらない。",
        "answer": "足る",
        "explanation": "V từ điển: 推薦するに足る (đủ phẩm chất tiến cử)."
      },
      {
        "id": "jlpt-n1-nitaru-10",
        "type": "order",
        "prompt": "Sắp xếp: Tài liệu này có đủ giá trị để lưu trữ làm tư liệu lịch sử.",
        "options": [
          "歴史的資料として",
          "保存するに",
          "足る価値が",
          "ある"
        ],
        "answer": "歴史的資料として保存するに足る価値がある",
        "explanation": "Trật tự: Tư liệu lịch sử + 保存するに + 足る価値がある."
      }
    ]
  },
  {
    "id": "jlpt-n1-shimatsuda",
    "pattern": "〜始末だ",
    "title": "Rốt cuộc kết cục tồi tệ là (sau chuỗi rắc rối)",
    "level": "N1",
    "position": 337,
    "meaning": "【Vる / この＋始末だ】Sau khi trải qua một chuỗi các sai lầm, bê bối hoặc tình trạng tồi tệ kéo dài, rốt cuộc dẫn đến một kết cục bi đát, đáng xấu hổ",
    "formation": "V từ điển + 始末だ (しまつだ)\nこの / その / あの + 始末だ",
    "explanation": "Dùng khi tự trách bản thân hoặc phê phán ngán ngẩm đối phương vì đã để mọi chuyện trượt dài dẫn tới một cái kết tồi tệ không thể cứu vãn.",
    "notes": "Chú thích phân biệt:\n- 〜始末だ: Luôn là KẾT CỤC TỒI TỆ, đáng hổ thẹn (rốt cuộc bị đuổi việc, bị vợ bỏ, tán gia bại sản).\n- この始末だ: Rốt cuộc ra nông nỗi tệ hại thế này đây.",
    "mistake": "Cảnh báo lỗi: Tuyệt đối không dùng 始末だ cho kết quả tốt đẹp hay thành công.",
    "related": [
      "bridge-n2-41",
      "jlpt-n1-yoginaku"
    ],
    "examples": [
      {
        "ja": "弟は散々遊び回った挙句、借金を抱えて親に泣きつく始末だ。",
        "kana": "おとうとはさんざんあそびまわったあげく、しゃっきんをかかえておやになきつくしまつだ。",
        "vi": "Em trai tôi sau một thời gian dài đàn đúm chơi bời, rốt cuộc ôm một đống nợ nần rồi về khóc lóc cầu cứu bố mẹ.",
        "readings": {
          "弟": "おとうと",
          "挙句": "あげく",
          "借金": "しゃっきん",
          "始末": "しまつ"
        }
      },
      {
        "ja": "念入りに準備したはずなのに、当日は遅刻した上に書類を忘れる始末だ。",
        "kana": "ねんいりにじゅんびしたはずなのに、とうじつはちこくしたうえにしりょうをわすれるしまつだ。",
        "vi": "Đinh ninh chuẩn bị kỹ lưỡng thế mà đến ngày hẹn chẳng những đến muộn mà rốt cuộc còn bỏ quên cả tài liệu.",
        "readings": {
          "念入り": "ねんいり",
          "当日": "とうじつ",
          "遅刻": "ちこく",
          "書類": "しょるい"
        }
      },
      {
        "ja": "あれほど注意したのに、この始末は何だ。情けない。",
        "kana": "あれほどちゅういしたのに、このしまつはなんだ。なさけない。",
        "vi": "Đã nhắc nhở kỹ đến thế rồi mà rốt cuộc ra cái nông nỗi tệ hại thế này đây hả? Thật đáng thất vọng.",
        "readings": {
          "注意": "ちゅうい",
          "情けない": "なさけない"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-shimatsuda-1",
        "type": "choice",
        "prompt": "酒を飲みすぎて記憶をなくし、警察に保護される ___ だ。",
        "options": [
          "始末",
          "ところ",
          "とおり",
          "わけ"
        ],
        "answer": "始末",
        "explanation": "Kết cục đáng xấu hổ: V từ điển + 始末だ: 保護される始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-2",
        "type": "fill",
        "prompt": "Điền từ nông nỗi tệ hại: せっかく買ったパソコンを一日で壊してしまう ___ だ。",
        "answer": "始末",
        "explanation": "Rốt cuộc làm hỏng mất: 壊してしまう始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-3",
        "type": "order",
        "prompt": "Sắp xếp: Thất hứa liên miên rốt cuộc bị tất cả bạn bè xa lánh.",
        "options": [
          "嘘を重ねた挙句",
          "友達全員から",
          "見放される",
          "始末だ"
        ],
        "answer": "嘘を重ねた挙句友達全員から見放される始末だ",
        "explanation": "Trật tự: Nói dối liên miên + Bạn bè quay lưng + 見放される始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-4",
        "type": "choice",
        "prompt": "あんなに威張っていたのに、いざとなると逃げ出す ___ 。",
        "options": [
          "始末だ",
          "とあってだ",
          "はおろかだ",
          "たるものだ"
        ],
        "answer": "始末だ",
        "explanation": "Lúc lâm trận rốt cuộc lại bỏ chạy nhục nhã: 逃げ出す始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-5",
        "type": "fill",
        "prompt": "Điền đại từ chỉ định: これほど大騒ぎして、結局 ___ 始末か。",
        "answer": "この",
        "explanation": "Thành ngữ cảm thán: この始末か (kết cục nông nỗi này sao)."
      },
      {
        "id": "jlpt-n1-shimatsuda-6",
        "type": "choice",
        "prompt": "無駄遣いを続けた結果、家賃すら ___ 始末だ。",
        "options": [
          "払えない",
          "払える",
          "払う",
          "払えば"
        ],
        "answer": "払えない",
        "explanation": "Rốt cuộc tiền trọ cũng không trả nổi: 払えない始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-7",
        "type": "order",
        "prompt": "Sắp xếp: Cãi nhau với cấp trên rồi rốt cuộc đùng đùng nộp đơn thôi việc.",
        "options": [
          "上司と口論の末",
          "会社を辞めると",
          "言い出す",
          "始末だ"
        ],
        "answer": "上司と口論の末会社を辞めると言い出す始末だ",
        "explanation": "Trật tự: Cãi nhau với sếp + Đòi nghỉ việc + 言い出す始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-8",
        "type": "choice",
        "prompt": "ダイエットを始めたのに、逆に体重が増える ___ 。",
        "options": [
          "始末だ",
          "とあってだ",
          "ならではだ",
          "たるものだ"
        ],
        "answer": "始末だ",
        "explanation": "Nghịch lý tệ hại tăng cân: 増える始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-9",
        "type": "fill",
        "prompt": "Điền thể chia của 忘れる: 会議に遅刻した上、資料まで ___ 始末だ。",
        "answer": "忘れる",
        "explanation": "V từ điển: 忘れる始末だ."
      },
      {
        "id": "jlpt-n1-shimatsuda-10",
        "type": "order",
        "prompt": "Sắp xếp: Vì ham cờ bạc mà rốt cuộc đánh mất cả gia đình.",
        "options": [
          "ギャンブルに溺れ",
          "大切な家族まで",
          "失う",
          "始末だ"
        ],
        "answer": "ギャンブルに溺れ大切な家族まで失う始末だ",
        "explanation": "Trật tự: Say mê bài bạc + Mất cả gia đình + 失う始末だ."
      }
    ]
  },
  {
    "id": "jlpt-n1-te-yamanai",
    "pattern": "〜てやまない",
    "title": "Khôn nguôi / Luôn mong mỏi từ tận đáy lòng",
    "level": "N1",
    "position": 338,
    "meaning": "【Vて＋やまない】Cầu chúc, mong mỏi, kỳ vọng hay ngưỡng mộ sâu sắc từ tận đáy con tim mà cảm xúc ấy không bao giờ phai nhạt hay ngơi nghỉ",
    "formation": "V thể て + やまない\n* Thường kết hợp với các động từ tâm nguyện cao quý: 祈る, 願う, 望む, 愛する, 尊敬する, 期待する",
    "explanation": "Dùng trong các bài diễn văn chúc phúc, lời tựa trang trọng hoặc tâm nguyện thiêng liêng: thể hiện cảm xúc chân thành, bền bỉ cùng năm tháng.",
    "notes": "Chú thích phân biệt:\n- 〜てやまない: Đi với các động từ TÂM NGUYỆN TỐT ĐẸP BỀN BỈ (祈ってやまない, 願ってやまない).\n- 〜てたまらない: Cảm giác bức bối đòi giải tỏa ngắn hạn.",
    "mistake": "Cảnh báo lỗi: Không dùng cho các hành động sinh hoạt đời thường hay cảm xúc tiêu cực nhất thời.",
    "related": [
      "bridge-n2-27",
      "jlpt-n2-tamaranai"
    ],
    "examples": [
      {
        "ja": "卒業生の皆さんの今後のご活躍とご多幸を、祈ってやみません。",
        "kana": "そつぎょうせいのなんさまのこんごのごかつやくとごたこうを、いのってやみません。",
        "vi": "Tôi luôn cầu chúc từ tận đáy lòng cho những bước đường thành công và niềm hạnh phúc ngập tràn của các em học sinh tốt nghiệp.",
        "readings": {
          "卒業生": "そつぎょうせい",
          "活躍": "かつやく",
          "多幸": "たこう",
          "祈って": "いのって"
        }
      },
      {
        "ja": "紛争地域に一刻も早く平和が訪れることを、願ってやまない。",
        "kana": "ふんそうちいきにいっこくもはやくへいわがおとずれることを、ねがってやまない。",
        "vi": "Tôi không nguôi khát khao và cầu nguyện cho nền hòa bình sớm trở lại trên mảnh đất chiến sự đau thương này.",
        "readings": {
          "紛争地域": "ふんそうちいき",
          "平和": "へいわ",
          "訪れる": "おとずれる",
          "願って": "ねがって"
        }
      },
      {
        "ja": "幾多の困難を乗り越えて偉業を成し遂げた彼を、尊敬してやまない。",
        "kana": "いくたのこんなんをのりこえていぎょうをなしとげたかれを、そんけいしてやまない。",
        "vi": "Tôi luôn dành trọn lòng tôn kính sâu sắc nhất cho người đã kiên cường vượt qua muôn vàn gian nan để kiến tạo nên đại nghiệp.",
        "readings": {
          "幾多": "いくた",
          "困難": "こんなん",
          "偉業": "いぎょう",
          "尊敬": "そんけい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-te-yamanai-1",
        "type": "choice",
        "prompt": "両国の末永い友好関係を ___ やみません。",
        "options": [
          "願って",
          "願う",
          "願おう",
          "願えば"
        ],
        "answer": "願って",
        "explanation": "V thể て + やみません: 願ってやみません."
      },
      {
        "id": "jlpt-n1-te-yamanai-2",
        "type": "fill",
        "prompt": "Điền dạng て của 祈る: 被災地の皆様の一日も早い復興を ___ やみません。",
        "answer": "祈って",
        "explanation": "祈る → 祈ってやみません (cầu chúc khôn nguôi)."
      },
      {
        "id": "jlpt-n1-te-yamanai-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi luôn tôn kính trọn vẹn người thầy suốt đời tận tụy vì học trò.",
        "options": [
          "生涯を教育に捧げた恩師を",
          "尊敬して",
          "やみ",
          "ません"
        ],
        "answer": "生涯を教育に捧げた恩師を尊敬してやみません",
        "explanation": "Trật tự: 恩師を + 尊敬して + やみ + ません."
      },
      {
        "id": "jlpt-n1-te-yamanai-4",
        "type": "choice",
        "prompt": "若き才能の未来に、大きな期待を ___ やまない。",
        "options": [
          "寄せて",
          "寄せる",
          "寄せよう",
          "寄せては"
        ],
        "answer": "寄せて",
        "explanation": "Kỳ vọng sâu sắc: 期待を寄せてやまない."
      },
      {
        "id": "jlpt-n1-te-yamanai-5",
        "type": "fill",
        "prompt": "Điền đuôi phủ định: 子供たちの明るい未来を信じて ___ 。",
        "answer": "やまない",
        "explanation": "Vて + やまない: 信じてやまない (tin tưởng son sắt từ đáy lòng)."
      },
      {
        "id": "jlpt-n1-te-yamanai-6",
        "type": "choice",
        "prompt": "伝統芸能を愛して ___ 人々によって文化が継承されてきた。",
        "options": [
          "やまない",
          "たる",
          "まみれた",
          "ずくめの"
        ],
        "answer": "やまない",
        "explanation": "Những con người yêu tha thiết nghệ thuật truyền thống: 愛してやまない人々."
      },
      {
        "id": "jlpt-n1-te-yamanai-7",
        "type": "order",
        "prompt": "Sắp xếp: Tôi luôn cầu chúc cho dự án mới của bạn gặt hái thành công rực rỡ.",
        "options": [
          "新プロジェクトの成功を",
          "心から念じて",
          "やみ",
          "ません"
        ],
        "answer": "新プロジェクトの成功を心から念じてやみません",
        "explanation": "Trật tự: Thành công dự án + 心から念じて + やみ + ません."
      },
      {
        "id": "jlpt-n1-te-yamanai-8",
        "type": "choice",
        "prompt": "祖国の平和を ___ やまない思いが、彼のペンを動かした。",
        "options": [
          "希求して",
          "希求する",
          "希求しよう",
          "希求すれば"
        ],
        "answer": "希求して",
        "explanation": "Khát khao khôn nguôi: 希求してやまない."
      },
      {
        "id": "jlpt-n1-te-yamanai-9",
        "type": "fill",
        "prompt": "Điền thể đúng của 望む: 新婚のお二人の幸せを ___ やみません。",
        "answer": "望んで",
        "explanation": "望む → 望んでやみません (chúc phúc lứa đôi)."
      },
      {
        "id": "jlpt-n1-te-yamanai-10",
        "type": "order",
        "prompt": "Sắp xếp: Chúng tôi luôn kỳ vọng vào sự tiến bộ vượt bậc của thế hệ trẻ.",
        "options": [
          "若者たちの飛躍的な成長を",
          "期待して",
          "やま",
          "ない"
        ],
        "answer": "若者たちの飛躍的な成長を期待してやまない",
        "explanation": "Trật tự: Sự trưởng thành của thanh niên + 期待して + やま + ない."
      }
    ]
  },
  {
    "id": "jlpt-n1-hokanaranai",
    "pattern": "〜にほかならない",
    "title": "Chính là / Không gì khác ngoài",
    "level": "N1",
    "position": 339,
    "meaning": "【N / から＋にほかならない】Khẳng định chắc nịch 100% nguyên nhân, bản chất hoặc lý do duy nhất của sự việc (hoàn toàn không có bất kỳ lý do nào khác)",
    "formation": "N + にほかならない\nThể thường + からにほかならない (chính là vì lý do...)",
    "explanation": "Dùng trong các bài nghị luận, hùng biện sắc bén để chỉ ra bản chất duy nhất đằng sau một hiện tượng hay thành quả.",
    "notes": "Chú thích phân biệt:\n- 〜にほかならない: Khẳng định duy nhất bản chất nguyên nhân một cách quả quyết tuyệt đối.\n- 〜にすぎない: Chỉ là... mà thôi (hạ thấp mức độ).",
    "mistake": "Cảnh báo lỗi: Không dùng khi còn ngập ngừng hoặc có nhiều nguyên nhân khác cùng tồn tại.",
    "related": [
      "jlpt-n2-hokananai",
      "bridge-n2-39"
    ],
    "examples": [
      {
        "ja": "今回の成功は、チーム全員の献身的な努力の賜物にほかならない。",
        "kana": "こんかいのせいこうは、ちーむぜんいんのけんしんてきなどりょくのたまものにほかならない。",
        "vi": "Thành công lần này không gì khác ngoài việc chính là kết tinh từ những nỗ lực cống hiến quên mình của toàn thể đội ngũ.",
        "readings": {
          "成功": "せいこう",
          "献身的": "けんしんてき",
          "努力": "どりょく",
          "賜物": "たまもの"
        }
      },
      {
        "ja": "彼が厳しい言葉をかけたのは、君の将来を心から心配しているからにほかならない。",
        "kana": "かれがきびしいことばをかけたのは、きみのしょうらいをこころからしんぱいしているからにほかならない。",
        "vi": "Anh ấy nặng lời khắt khe với bạn như vậy chính là vì anh ấy lo lắng thật lòng cho tương lai của bạn mà thôi.",
        "readings": {
          "厳しい": "きびしい",
          "将来": "しょうらい",
          "心配": "しんぱい"
        }
      },
      {
        "ja": "自然の破壊は、巡り巡って人類自身の破滅を招くことにほかならない。",
        "kana": "しぜんのはかいは、めぐりめぐってじんるいじしんのはめつをまねくことにほかならない。",
        "vi": "Việc tàn phá thiên nhiên rốt cuộc không gì khác chính là tự rước lấy sự diệt vong cho chính loài người.",
        "readings": {
          "自然": "しぜん",
          "破壊": "はかい",
          "人類": "じんるい",
          "破滅": "はめつ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-hokanaranai-1",
        "type": "choice",
        "prompt": "彼が合格できたのは、日頃の努力の成果 ___ 。",
        "options": [
          "にほかならない",
          "とあってだ",
          "はおろかだ",
          "たるものだ"
        ],
        "answer": "にほかならない",
        "explanation": "Khẳng định bản chất thành quả: N + にほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-2",
        "type": "fill",
        "prompt": "Điền từ khẳng định duy nhất: この失敗は、我々の油断が招いたもの ___ ならない。",
        "answer": "にほか",
        "explanation": "〜にほかならない: không gì khác ngoài."
      },
      {
        "id": "jlpt-n1-hokanaranai-3",
        "type": "order",
        "prompt": "Sắp xếp: Mẹ mắng con chính là vì tình yêu thương thương xót con.",
        "options": [
          "親が子供を叱るのは",
          "愛情があるから",
          "にほかなら",
          "ない"
        ],
        "answer": "親が子供を叱るのは愛情があるからにほかならない",
        "explanation": "Trật tự: Mẹ mắng con + Vì có tình yêu thương + にほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-4",
        "type": "choice",
        "prompt": "戦争は、人間性の完全な否定 ___ 。",
        "options": [
          "にほかならない",
          "にすぎない",
          "とおいてない",
          "まみれだ"
        ],
        "answer": "にほかならない",
        "explanation": "Chiến tranh chính là sự phủ định tính người: 否定にほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-5",
        "type": "fill",
        "prompt": "Điền từ liên kết nguyên nhân: 彼女が涙を流したのは、嬉しかった ___ にほかならない。",
        "answer": "から",
        "explanation": "Khẳng định nguyên nhân: 〜からにほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-6",
        "type": "choice",
        "prompt": "この新記録は、彼の不屈の闘志がもたらした奇跡 ___ 。",
        "options": [
          "にほかならない",
          "たるものだ",
          "ならではだ",
          "とあってだ"
        ],
        "answer": "にほかならない",
        "explanation": "Chính là phép màu: 奇跡にほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-7",
        "type": "order",
        "prompt": "Sắp xếp: Thất bại lần này chính là do thiếu sự chuẩn bị chu đáo.",
        "options": [
          "今回の敗因は",
          "準備不足であったこと",
          "にほか",
          "ならない"
        ],
        "answer": "今回の敗因は準備不足であったことにほかならない",
        "explanation": "Trật tự: Nguyên nhân thất bại + Do thiếu chuẩn bị + にほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-8",
        "type": "choice",
        "prompt": "政治家が国民の信頼を失うのは、公約を軽視した結果 ___ 。",
        "options": [
          "にほかならない",
          "に相まって",
          "はおろか",
          "たるもの"
        ],
        "answer": "にほかならない",
        "explanation": "Chính là hệ quả: 結果にほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-9",
        "type": "fill",
        "prompt": "Điền từ: 人生の価値は、他者にどれだけ貢献できたか ___ ほかならない。",
        "answer": "に",
        "explanation": "Cấu trúc: N + にほかならない."
      },
      {
        "id": "jlpt-n1-hokanaranai-10",
        "type": "order",
        "prompt": "Sắp xếp: Doanh nghiệp phát triển rực rỡ chính là nhờ biết nắm bắt nhu cầu khách hàng.",
        "options": [
          "企業の発展は",
          "顧客の要望に応えたから",
          "にほかなら",
          "ない"
        ],
        "answer": "企業の発展は顧客の要望に応えたからにほかならない",
        "explanation": "Trật tự: Doanh nghiệp phát triển + Vì đáp ứng yêu cầu khách + にほかならない."
      }
    ]
  },
  {
    "id": "jlpt-n1-zu-niwa-okanai",
    "pattern": "〜ずにはおかない・ないではおかない",
    "title": "Nhất định phải khiến cho / Không thể không làm",
    "level": "N1",
    "position": 340,
    "meaning": "【Dạng 1: Quyết tâm hành động】Nhất định sẽ trừng phạt/đòi lại công lý/không bao giờ bỏ qua\n【Dạng 2: Tác động cảm xúc tất yếu】Sức mạnh lay động lòng người đến mức tất yếu khiến bất kỳ ai cũng phải rơi lệ, rung cảm",
    "formation": "V thể ない bỏ ない + ずにはおかない (Đặc biệt: する → せずにはおかない)\nV thể ない + ではおかない",
    "explanation": "Một trong những cấu trúc giàu nội lực nhất của N1: vừa biểu thị ý chí trừng phạt đanh thép, vừa biểu thị sức cảm hóa mãnh liệt của nghệ thuật khiến người thưởng lãm không thể không lay động.",
    "notes": "Chú thích phân biệt:\n- 〜ずにはおかない: Tác động ngoại cảnh bắt buộc KẺ KHÁC PHẢI CHỊU (bộ phim nhất định làm khán giả khóc; ta nhất định bắt ngươi đền tội).\n- 〜ずにはいられない: Bản thân người nói tự mình không thể kìm nén được (tôi không thể không cười).",
    "mistake": "Cảnh báo lỗi: Tuyệt đối phân biệt giữa おかない (tác động lên đối tượng khác) và いられない (bản thân người nói tự bộc phát).",
    "related": [
      "bridge-n2-41",
      "jlpt-n1-kinjienai"
    ],
    "examples": [
      {
        "ja": "真相を徹底的に究明し、不正に関わった者を処罰せずにはおかない。",
        "kana": "しんそうをてっていてきにきゅうめいし、ふせいにかかわったものをしょばつせずにはおかない。",
        "vi": "Chúng tôi sẽ điều tra triệt để chân tướng, và nhất định sẽ trừng phạt thích đáng những kẻ dính líu đến đường dây phi pháp này.",
        "readings": {
          "真相": "しんそう",
          "究明": "きゅうめい",
          "不正": "ふせい",
          "処罰": "しょばつ"
        }
      },
      {
        "ja": "彼女の圧倒的な歌声は、聴く者の心を揺さぶらずにはおかない。",
        "kana": "かのじょのおっとうてきなうたごえは、きくもののこころをゆさぶらずにはおかない。",
        "vi": "Giọng hát nội lực phi thường của cô ấy nhất định sẽ làm rung chuyển con tim của bất kỳ ai lắng nghe.",
        "readings": {
          "圧倒的": "あっとうてき",
          "歌声": "うたごえ",
          "心": "こころ",
          "揺さぶらず": "ゆさぶらず"
        }
      },
      {
        "ja": "あれだけの被害を出したのだから、責任者には損害を賠償させずにはおかない。",
        "kana": "あれだけのひがいをだしたのだから、せきにんしゃにはそんがいをばいしょうさせずにはおかない。",
        "vi": "Gây ra thiệt hại to lớn đến dường ấy, chúng tôi nhất định sẽ bắt kẻ chịu trách nhiệm phải bồi thường thỏa đáng.",
        "readings": {
          "被害": "ひがい",
          "責任者": "せきにんしゃ",
          "損害": "そんがい",
          "賠償": "ばいしょう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n1-zu-niwa-okanai-1",
        "type": "choice",
        "prompt": "その感動的な物語は、読者の涙を ___ 。",
        "options": [
          "誘わずにはおかない",
          "誘わずにはいられない",
          "誘うたるものだ",
          "誘うならではだ"
        ],
        "answer": "誘わずにはおかない",
        "explanation": "Khiến người đọc tất yếu rơi lệ: 誘わずにはおかない."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-2",
        "type": "fill",
        "prompt": "Điền dạng する: 犯人を突き止め、必ず裁判にかけて処罰 ___ ずにはおかない。",
        "answer": "せ",
        "explanation": "Động từ する biến đổi: せずにはおかない."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-3",
        "type": "order",
        "prompt": "Sắp xếp: Tác phẩm điêu khắc tuyệt mỹ lay động tâm hồn người chiêm ngưỡng.",
        "options": [
          "その彫刻は",
          "見る人を",
          "感動させずには",
          "おかない魅力がある"
        ],
        "answer": "その彫刻は見る人を感動させずにはおかない魅力がある",
        "explanation": "Trật tự: Tác phẩm điêu khắc + Người ngắm + 感動させずには + おかない魅力がある."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-4",
        "type": "choice",
        "prompt": "あれほどひどい裏切りをしたのだから、一言 ___ ではおかない。",
        "options": [
          "言わない",
          "言った",
          "言おう",
          "言えば"
        ],
        "answer": "言わない",
        "explanation": "Vない + ではおかない: 言わないではおかない (nhất định phải mắng cho một trận)."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-5",
        "type": "fill",
        "prompt": "Điền đuôi quyết tâm không tha: 家族を傷つけた奴は、絶対に許さずには ___ 。",
        "answer": "おかない",
        "explanation": "〜ずにはおかない: nhất định không tha."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-6",
        "type": "choice",
        "prompt": "彼の熱意あふれる演説は、聴衆を ___ おかなかった。",
        "options": [
          "奮い立たせずには",
          "奮い立たせては",
          "奮い立たせるには",
          "奮い立たせようには"
        ],
        "answer": "奮い立たせずには",
        "explanation": "Thổi bùng nhiệt huyết khán giả: 奮い立たせずにはおかなかった."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-7",
        "type": "order",
        "prompt": "Sắp xếp: Nếu dám làm chuyện xấu xa đó lần nữa thì ta nhất định không bỏ qua đâu.",
        "options": [
          "今度同じことをしたら",
          "承知しない",
          "では",
          "おかないぞ"
        ],
        "answer": "今度同じことをしたら承知しないではおかないぞ",
        "explanation": "Trật tự: Nếu tái phạm + 承知しない + では + おかないぞ."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-8",
        "type": "choice",
        "prompt": "この美しい絵画は、見る者の心を ___ にはおかない。",
        "options": [
          "奪わず",
          "奪って",
          "奪おう",
          "奪えば"
        ],
        "answer": "奪わず",
        "explanation": "V thể ない bỏ ない: 奪わずにはおかない (nhất định hớp hồn người xem)."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-9",
        "type": "fill",
        "prompt": "Điền trợ từ: 約束を破った彼に、謝罪させず ___ はおかない。",
        "answer": "に",
        "explanation": "Cấu trúc 〜ずにはおかない."
      },
      {
        "id": "jlpt-n1-zu-niwa-okanai-10",
        "type": "order",
        "prompt": "Sắp xếp: Vụ bê bối này chắc chắn sẽ giáng một đòn nặng nề lên công ty.",
        "options": [
          "この問題は",
          "会社に大打撃を",
          "与えずには",
          "おかないだろう"
        ],
        "answer": "この問題は会社に大打撃を与えずにはおかないだろう",
        "explanation": "Trật tự: Vấn đề này + Giáng đòn nặng nề + 与えずには + おかないだろう."
      }
    ]
  }
];

export const jlptN1GrammarLessons = jlptN1Specs.map((spec) => {
  const content: LessonContent = {
    meaning: spec.meaning,
    formation: spec.formation,
    explanation: spec.explanation,
    notes: spec.notes,
    mistake: spec.mistake,
    related: spec.related,
    examples: spec.examples,
    curriculum: {
      track: 'Ngữ pháp chuyên sâu JLPT N1',
      topic: spec.title,
      sourceUrl: 'https://www.vnjpclub.com/ngu-phap-n1/',
      sourceLabel: 'Tuyển tập ngữ pháp cao cấp JLPT N1 chính thống',
      original: true,
    },
  };

  return {
    id: spec.id,
    pattern: spec.pattern,
    title: spec.title,
    level: spec.level,
    position: spec.position,
    content,
    exercises: spec.exercises,
  };
});
