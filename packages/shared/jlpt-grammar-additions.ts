import type { Exercise, LessonContent } from './content';

export type AdditionalGrammarSpec = {
  id: string;
  pattern: string;
  title: string;
  level: 'N5' | 'N4' | 'N3' | 'N2';
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

export const additionalGrammarSpecs: AdditionalGrammarSpec[] = [
  {
    "id": "jlpt-n5-tekara",
    "pattern": "〜てから",
    "title": "Sau khi làm gì đó",
    "level": "N5",
    "position": 151,
    "meaning": "【Dạng 1】Sau khi làm xong A thì tiến hành làm B (Thứ tự trước sau)；【Dạng 2】Kể từ sau khi A xảy ra thì trạng thái B tiếp diễn mãi",
    "formation": "【Dạng 1】Động từ thể て + から、Hành động tiếp theo\n【Dạng 2】Vて + からというもの (Mở rộng nâng cao)",
    "explanation": "Diễn tả hành động B được tiến hành ngay sau khi hành động A hoàn thành, nhấn mạnh trình tự thời gian rõ ràng giữa hai hành động.",
    "notes": "Chú thích phân biệt: Khác với 〜たあとで (chỉ đơn thuần nói việc A xong rồi đến việc B bất kể thời gian xa hay gần), 〜てから nhấn mạnh tính liên tục và điều kiện tiên quyết: phải làm xong A rồi mới làm B.",
    "mistake": "Không chia động từ trước から ở thể quá khứ (sai: 食べたから寝ます với nghĩa sau khi ăn; phải dùng 食べてから寝ます).",
    "related": [
      "mnn-14",
      "mnn-16",
      "jlpt-n5-maeni"
    ],
    "examples": [
      {
        "ja": "手を洗ってからご飯を食べます。",
        "kana": "てをあらってからごはんをたべます。",
        "vi": "Sau khi rửa tay sạch sẽ, tôi ăn cơm.",
        "readings": {
          "手": "て",
          "洗って": "あらって",
          "ご飯": "ごはん",
          "食べます": "たべます"
        }
      },
      {
        "ja": "宿題をしてから遊びに行きます。",
        "kana": "しゅくだいをしてからあそびにいきます。",
        "vi": "Sau khi hoàn thành bài tập về nhà, tôi mới đi chơi.",
        "readings": {
          "宿題": "しゅくだい",
          "遊び": "あそび",
          "行きます": "いきます"
        }
      },
      {
        "ja": "薬を飲んでから寝てください。",
        "kana": "くすりをのんでからねてください。",
        "vi": "Hãy uống thuốc xong rồi đi ngủ nhé.",
        "readings": {
          "薬": "くすり",
          "飲んで": "のんで",
          "寝て": "ねて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-tekara-1",
        "type": "choice",
        "prompt": "薬を ___ から寝てください。",
        "options": [
          "飲んで",
          "飲む",
          "飲んだ",
          "飲み"
        ],
        "answer": "飲んで",
        "explanation": "Mẫu câu \"sau khi\": Động từ thể て + から."
      },
      {
        "id": "jlpt-n5-tekara-2",
        "type": "fill",
        "prompt": "Điền từ nối: ご飯を食べて ___ 、歯を磨きます。",
        "answer": "から",
        "explanation": "Ăn cơm xong rồi đánh răng: Vて + から."
      },
      {
        "id": "jlpt-n5-tekara-3",
        "type": "order",
        "prompt": "Sắp xếp: Sau khi làm việc xong thì về nhà.",
        "options": [
          "仕事を",
          "終えてから",
          "家に",
          "帰ります"
        ],
        "answer": "仕事を終えてから家に帰ります",
        "explanation": "Thứ tự: Vてから + vế câu tiếp theo."
      },
      {
        "id": "jlpt-n5-tekara-4",
        "type": "choice",
        "prompt": "Chọn câu diễn đạt đúng: \"Sau khi tắm xong thì tôi uống sữa.\"",
        "options": [
          "シャワーを浴びてから牛乳を飲みます",
          "シャワーを浴びるから牛乳を飲みます",
          "シャワーを浴びたから牛乳を飲みます",
          "シャワーを浴びから牛乳を飲みます"
        ],
        "answer": "シャワーを浴びてから牛乳を飲みます",
        "explanation": "Động từ 浴びます chuyển sang thể て là 浴びて + から."
      },
      {
        "id": "jlpt-n5-tekara-5",
        "type": "fill",
        "prompt": "Chia động từ「見ます」sang thể thích hợp: 説明書を ___ から使ってください。",
        "answer": "見て",
        "explanation": "見ます thể て là 見て + から (Sau khi xem sách hướng dẫn)."
      },
      {
        "id": "jlpt-n5-tekara-6",
        "type": "order",
        "prompt": "Sắp xếp: Sau khi tốt nghiệp đại học, tôi sẽ đi làm.",
        "options": [
          "大学を",
          "卒業してから",
          "会社で",
          "働きます"
        ],
        "answer": "大学を卒業してから会社で働きます",
        "explanation": "Trật tự: 大学を卒業してから + 会社で働きます."
      },
      {
        "id": "jlpt-n5-tekara-7",
        "type": "choice",
        "prompt": "Câu nào sau đây dùng SAI thể trước「から」?",
        "options": [
          "靴を脱いだからのぼってください",
          "靴を脱いでからのぼってください",
          "手を洗ってから入ってください",
          "よく考えてから決めてください"
        ],
        "answer": "靴を脱いだからのぼってください",
        "explanation": "Trước から mang nghĩa sau khi phải là thể て, không được dùng thể quá khứ 脱いだ."
      },
      {
        "id": "jlpt-n5-tekara-8",
        "type": "fill",
        "prompt": "Điền từ vào chỗ trống: 日本へ来て ___ 、三年が経ちました。",
        "answer": "から",
        "explanation": "Kể từ khi đến Nhật: 来てから."
      },
      {
        "id": "jlpt-n5-tekara-9",
        "type": "choice",
        "prompt": "「先生に聞いてから答えます」nghĩa là gì?",
        "options": [
          "Sau khi hỏi thầy giáo tôi sẽ trả lời",
          "Vì thầy giáo hỏi nên tôi trả lời",
          "Tôi trả lời trước khi thầy giáo hỏi",
          "Tôi không trả lời thầy giáo"
        ],
        "answer": "Sau khi hỏi thầy giáo tôi sẽ trả lời",
        "explanation": "聞いてから: Sau khi hỏi."
      },
      {
        "id": "jlpt-n5-tekara-10",
        "type": "order",
        "prompt": "Sắp xếp: Hãy đọc kỹ rồi ký tên.",
        "options": [
          "サインしてください",
          "よく読んでから"
        ],
        "answer": "よく読んでからサインしてください",
        "explanation": "Trật tự: よく読んでから + サインしてください."
      }
    ]
  },
  {
    "id": "jlpt-n5-maeni",
    "pattern": "〜前に",
    "title": "Trước khi làm gì đó",
    "level": "N5",
    "position": 152,
    "meaning": "【Dạng 1】Trước khi thực hiện hành động V (Động từ nguyên dạng)；【Dạng 2】Trước một mốc thời gian/sự kiện N (Danh từ の前に)",
    "formation": "【Dạng 1】Động từ thể từ điển (Vる) + 前に\n【Dạng 2】Danh từ + の + 前に\n【Dạng 3】Khoảng thời gian + 前に (Ví dụ: 3年前に)",
    "explanation": "Diễn tả một hành động hoặc trạng thái xảy ra trước một hành động khác, hoặc trước một sự kiện, thời điểm cụ thể.",
    "notes": "Chú thích phân biệt: Động từ đứng trước 前に LUÔN LUÔN ở thể từ điển (thể nguyên dạng), bất kể câu ở quá khứ, hiện tại hay tương lai. Không chia thể quá khứ trước 前に.",
    "mistake": "Không dùng Vた + 前に (sai: 行った前に; đúng: 行く前に). Với danh từ phải có の (sai: 食事前に; đúng: 食事の前に).",
    "related": [
      "jlpt-n5-tekara",
      "mnn-18"
    ],
    "examples": [
      {
        "ja": "寝る前に日記を書きます。",
        "kana": "ねるまえににっきをかきます。",
        "vi": "Trước khi đi ngủ, tôi viết nhật ký.",
        "readings": {
          "寝る": "ねる",
          "前": "まえ",
          "日記": "にっき",
          "書きます": "かきます"
        }
      },
      {
        "ja": "食事の前に手を洗います。",
        "kana": "しょくじのまえにてをあらいます。",
        "vi": "Trước bữa ăn, tôi rửa tay.",
        "readings": {
          "食事": "しょくじ",
          "前": "まえ",
          "手": "て",
          "洗います": "あらいます"
        }
      },
      {
        "ja": "日本へ来る前に日本語を勉強しました。",
        "kana": "にほんへくるまえににほんごをべんきょうしました。",
        "vi": "Trước khi sang Nhật, tôi đã học tiếng Nhật.",
        "readings": {
          "日本": "にほん",
          "来る": "くる",
          "前": "まえ",
          "勉強": "べんきょう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-maeni-1",
        "type": "choice",
        "prompt": "寝る ___ 日記を書きます。",
        "options": [
          "前に",
          "から",
          "あとで",
          "ときに"
        ],
        "answer": "前に",
        "explanation": "Trước khi đi ngủ: V từ điển + 前に."
      },
      {
        "id": "jlpt-n5-maeni-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối với danh từ: 食事 ___ 前に手を洗います。",
        "answer": "の",
        "explanation": "Danh từ nối với 前に bằng trợ từ の: 食事の前に."
      },
      {
        "id": "jlpt-n5-maeni-3",
        "type": "order",
        "prompt": "Sắp xếp: Trước khi đi du lịch, tôi đổi tiền.",
        "options": [
          "旅行の前に",
          "お金を",
          "両替します"
        ],
        "answer": "旅行の前にお金を両替します",
        "explanation": "Trật tự: Danh từ + の前に + vế câu tiếp theo."
      },
      {
        "id": "jlpt-n5-maeni-4",
        "type": "choice",
        "prompt": "Chọn thể đúng của động từ: ご飯を ___ 前に、「いただきます」と言います。",
        "options": [
          "食べる",
          "食べた",
          "食べて",
          "食べ"
        ],
        "answer": "食べる",
        "explanation": "Trước 前に luôn là động từ thể từ điển (nguyên dạng): 食べる前に."
      },
      {
        "id": "jlpt-n5-maeni-5",
        "type": "fill",
        "prompt": "Điền từ thích hợp: 家を出る ___ 、鍵を確認してください。",
        "answer": "前に",
        "explanation": "Trước khi ra khỏi nhà: 出る前に."
      },
      {
        "id": "jlpt-n5-maeni-6",
        "type": "order",
        "prompt": "Sắp xếp: Hãy uống thuốc trước bữa ăn.",
        "options": [
          "薬を飲んでください",
          "食事の前に"
        ],
        "answer": "食事の前に薬を飲んでください",
        "explanation": "Trật tự: 食事の前に + 薬を飲んでください."
      },
      {
        "id": "jlpt-n5-maeni-7",
        "type": "choice",
        "prompt": "Câu nào sau đây chia động từ SAI trước「前に」?",
        "options": [
          "泳いだ前に準備運動をします",
          "泳ぐ前に準備運動をします",
          "運動の前に水を飲みます",
          "寝る前に歯を磨きます"
        ],
        "answer": "泳いだ前に準備運動をします",
        "explanation": "Sai vì dùng 泳いだ (thể quá khứ) trước 前に. Đúng phải là 泳ぐ前に."
      },
      {
        "id": "jlpt-n5-maeni-8",
        "type": "fill",
        "prompt": "Điền từ chỉ mốc thời gian: 彼は一時間 ___ に帰りました。",
        "answer": "前",
        "explanation": "Khoảng thời gian + 前に: Cách đây 1 tiếng."
      },
      {
        "id": "jlpt-n5-maeni-9",
        "type": "choice",
        "prompt": "「会議の前に資料をコピーしておきます」nghĩa là gì?",
        "options": [
          "Trước cuộc họp tôi sẽ photo sẵn tài liệu",
          "Sau cuộc họp tôi mới photo tài liệu",
          "Trong cuộc họp tôi photo tài liệu",
          "Vì có cuộc họp nên không photo tài liệu"
        ],
        "answer": "Trước cuộc họp tôi sẽ photo sẵn tài liệu",
        "explanation": "会議の前に: Trước cuộc họp."
      },
      {
        "id": "jlpt-n5-maeni-10",
        "type": "order",
        "prompt": "Sắp xếp: Hãy tắt đèn trước khi đi ngủ.",
        "options": [
          "電気を消してください",
          "寝る前に"
        ],
        "answer": "寝る前に電気を消してください",
        "explanation": "Trật tự: 寝る前に + 電気を消してください."
      }
    ]
  },
  {
    "id": "jlpt-n5-nagara",
    "pattern": "〜ながら",
    "title": "Vừa làm A vừa làm B",
    "level": "N5",
    "position": 153,
    "meaning": "【Dạng 1】Vừa làm hành động A vừa đồng thời làm hành động B (Cùng một chủ thể)",
    "formation": "Động từ thể ます (bỏ ます) + ながら + Vế câu chính B",
    "explanation": "Diễn tả hai hành động diễn ra song song cùng một lúc do một người thực hiện. Hành động ở vế B là hành động chính, hành động trước ながら là hành động phụ kèm theo.",
    "notes": "Chú thích phân biệt: Hai hành động phải do CÙNG MỘT NGƯỜI thực hiện. Vế sau ながら mang trọng tâm chính của câu nói.",
    "mistake": "Không dùng thể từ điển trước ながら (sai: 食べるながら; đúng: 食べながら).",
    "related": [
      "mnn-28"
    ],
    "examples": [
      {
        "ja": "音楽を聞きながら勉強します。",
        "kana": "おんがくをききながらべんきょうします。",
        "vi": "Tôi vừa nghe nhạc vừa học bài.",
        "readings": {
          "音楽": "おんがく",
          "聞き": "きき",
          "勉強": "べんきょう"
        }
      },
      {
        "ja": "お茶を飲みながら話しましょう。",
        "kana": "おちゃをのみながらはなしましょう。",
        "vi": "Chúng ta hãy vừa uống trà vừa trò chuyện nhé.",
        "readings": {
          "お茶": "おちゃ",
          "飲み": "のみ",
          "話し": "はなし"
        }
      },
      {
        "ja": "歩きながらスマホを見てはいけません。",
        "kana": "あるきながらすまほをみてはいけません。",
        "vi": "Không được vừa đi bộ vừa nhìn vào điện thoại.",
        "readings": {
          "歩き": "あるき",
          "見て": "みて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-nagara-1",
        "type": "choice",
        "prompt": "テレビを ___ ご飯を食べます。",
        "options": [
          "見ながら",
          "見るながら",
          "見てながら",
          "見ながらで"
        ],
        "answer": "見ながら",
        "explanation": "Bỏ ます rồi thêm ながら: 見ます → 見ながら."
      },
      {
        "id": "jlpt-n5-nagara-2",
        "type": "fill",
        "prompt": "Điền từ nối: 音楽を聞き ___ 散歩するのが好きです。",
        "answer": "ながら",
        "explanation": "Vừa nghe nhạc vừa đi dạo: 聞きながら."
      },
      {
        "id": "jlpt-n5-nagara-3",
        "type": "order",
        "prompt": "Sắp xếp: Hãy vừa uống cà phê vừa nói chuyện.",
        "options": [
          "話しましょう",
          "コーヒーを飲みながら"
        ],
        "answer": "コーヒーを飲みながら話しましょう",
        "explanation": "Trật tự: Vます(bỏ ます)ながら + vế chính."
      },
      {
        "id": "jlpt-n5-nagara-4",
        "type": "choice",
        "prompt": "Động từ「話します」khi kết hợp với ながら sẽ trở thành dạng nào?",
        "options": [
          "話しながら",
          "話すながら",
          "話してながら",
          "話しながらに"
        ],
        "answer": "話しながら",
        "explanation": "Bỏ đuôi ます: 話します → 話しながら."
      },
      {
        "id": "jlpt-n5-nagara-5",
        "type": "fill",
        "prompt": "Chia động từ「運転します」: 運転 ___ 電話をしてはいけません (vừa lái xe vừa...).",
        "answer": "しながら",
        "explanation": "運転します bỏ ます thành 運転し + ながら."
      },
      {
        "id": "jlpt-n5-nagara-6",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy vừa đi làm vừa theo học đại học.",
        "options": [
          "大学に通っています",
          "働きながら",
          "彼は"
        ],
        "answer": "彼は働きながら大学に通っています",
        "explanation": "Trật tự: 彼は + 働きながら + 大学に通っています."
      },
      {
        "id": "jlpt-n5-nagara-7",
        "type": "choice",
        "prompt": "Trong câu「歌を歌いながら料理を作ります」, hành động nào là hành động chính?",
        "options": [
          "Nấu ăn (料理を作る)",
          "Hát (歌を歌う)",
          "Cả hai đều là hành động phụ",
          "Không có hành động nào"
        ],
        "answer": "Nấu ăn (料理を作る)",
        "explanation": "Hành động ở vế sau ながら là hành động trọng tâm chính."
      },
      {
        "id": "jlpt-n5-nagara-8",
        "type": "fill",
        "prompt": "Điền đuôi liên kết: 景色を見 ___ 電車に乗る。",
        "answer": "ながら",
        "explanation": "見ます bỏ ます + ながら = 見ながら."
      },
      {
        "id": "jlpt-n5-nagara-9",
        "type": "choice",
        "prompt": "Câu nào chia dạng SAI ngữ pháp với「ながら」?",
        "options": [
          "食べながら本を読みます",
          "歩きながら話します",
          "読むながら食べます",
          "聞きながら書きます"
        ],
        "answer": "読むながら食べます",
        "explanation": "Sai ở \"読むながら\", dạng đúng phải là 読みながら (bỏ ます)."
      },
      {
        "id": "jlpt-n5-nagara-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi vừa nghĩ ngợi vừa viết báo cáo.",
        "options": [
          "レポートを書きました",
          "考えながら"
        ],
        "answer": "考えながらレポートを書きました",
        "explanation": "Trật tự: 考えながら (vừa suy nghĩ) + レポートを書きました (vừa viết báo cáo)."
      }
    ]
  },
  {
    "id": "jlpt-n5-hougaii",
    "pattern": "〜ほうがいい",
    "title": "Khuyên nên / không nên làm gì",
    "level": "N5",
    "position": 154,
    "meaning": "【Dạng 1】Nên làm gì (Khuyên làm V: Vたほうがいい)；【Dạng 2】Không nên làm gì (Khuyên tránh V: Vないほうがいい)",
    "formation": "【Dạng 1】Động từ thể quá khứ (Vた) + ほうがいいです\n【Dạng 2】Động từ thể phủ định (Vない) + ほうがいいです",
    "explanation": "Dùng để đưa ra lời khuyên hoặc gợi ý một phương án tốt hơn cho đối phương. Mang tính khuyên răn trực tiếp.",
    "notes": "Chú thích phân biệt: Khi khuyên nên làm gì, dùng thể quá khứ Vた (ngụ ý đã cân nhắc so sánh xong xuôi). Khi khuyên không nên làm gì, dùng thể Vない.",
    "mistake": "Khuyên nên làm gì tránh dùng Vるほうがいい (sai: 行くほうがいい; chuẩn mực là 行ったほうがいい).",
    "related": [
      "mnn-32",
      "jlpt-n5-kamoshirenai"
    ],
    "examples": [
      {
        "ja": "風邪ですから、早く寝たほうがいいですよ。",
        "kana": "かぜですから、はやくねたほうがいいですよ。",
        "vi": "Vì bạn bị cảm nên tốt hơn hết là hãy đi ngủ sớm nhé.",
        "readings": {
          "風邪": "かぜ",
          "早く": "はやく",
          "寝た": "ねた"
        }
      },
      {
        "ja": "あまりお酒を飲まないほうがいいです。",
        "kana": "あまりおさけをのまないほうがいいです。",
        "vi": "Bạn không nên uống quá nhiều rượu đâu.",
        "readings": {
          "お酒": "おさけ",
          "飲まない": "のまない"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-hougaii-1",
        "type": "choice",
        "prompt": "熱があるから、病院へ ___ ほうがいいです。",
        "options": [
          "行った",
          "行く",
          "行って",
          "行かない"
        ],
        "answer": "行った",
        "explanation": "Khuyên nên làm: Động từ chia thể Vた + ほうがいい."
      },
      {
        "id": "jlpt-n5-hougaii-2",
        "type": "fill",
        "prompt": "Điền thể phủ định: 夜遅く甘いものを ___ ほうがいいです (không nên ăn)。",
        "answer": "食べない",
        "explanation": "Khuyên không nên làm: Vない + ほうがいい."
      },
      {
        "id": "jlpt-n5-hougaii-3",
        "type": "order",
        "prompt": "Sắp xếp: Bạn nên uống nhiều nước vào.",
        "options": [
          "たくさん水を",
          "飲んだほうがいいです"
        ],
        "answer": "たくさん水を飲んだほうがいいです",
        "explanation": "Trật tự: Tân ngữ + Vたほうがいいです."
      },
      {
        "id": "jlpt-n5-hougaii-4",
        "type": "choice",
        "prompt": "Khuyên bạn bè: \"Mệt rồi thì nên nghỉ ngơi đi\":",
        "options": [
          "休んだほうがいいよ",
          "休むほうがいいよ",
          "休んでほうがいいよ",
          "休みほうがいいよ"
        ],
        "answer": "休んだほうがいいよ",
        "explanation": "休みます chuyển sang thể た là 休んだ + ほうがいい."
      },
      {
        "id": "jlpt-n5-hougaii-5",
        "type": "fill",
        "prompt": "Điền từ còn thiếu vào mẫu khuyên răn: 傘を持っていった ___ がいいです。",
        "answer": "ほう",
        "explanation": "Cụm từ cố định: 〜ほうがいい (nở dạng kanji hoặc hiragana: ほう/方)."
      },
      {
        "id": "jlpt-n5-hougaii-6",
        "type": "order",
        "prompt": "Sắp xếp: Không nên nói chuyện lớn tiếng ở đây.",
        "options": [
          "話さないほうがいいです",
          "ここでは大声で"
        ],
        "answer": "ここでは大声で話さないほうがいいです",
        "explanation": "Trật tự: Ở đây + Vないほうがいいです."
      },
      {
        "id": "jlpt-n5-hougaii-7",
        "type": "choice",
        "prompt": "Câu nào sau đây đưa ra lời khuyên KHÔNG NÊN làm gì đúng cấu trúc?",
        "options": [
          "無理をしないほうがいいです",
          "無理をしたほうがいいです",
          "無理をしてほうがいいです",
          "無理をするでないほうがいいです"
        ],
        "answer": "無理をしないほうがいいです",
        "explanation": "無理をしない (không gượng ép quá sức) + ほうがいいです."
      },
      {
        "id": "jlpt-n5-hougaii-8",
        "type": "fill",
        "prompt": "Chia động từ「聞きます」: 分からないときは先生に ___ ほうがいいです。",
        "answer": "聞いた",
        "explanation": "Khuyên nên hỏi thầy giáo: 聞いたほうがいい."
      },
      {
        "id": "jlpt-n5-hougaii-9",
        "type": "choice",
        "prompt": "「明日は早く起きたほうがいいですか」— Câu hỏi này có nghĩa là gì?",
        "options": [
          "Ngày mai tôi có nên dậy sớm không?",
          "Ngày mai tôi đã dậy sớm chưa?",
          "Ngày mai bạn có muốn dậy sớm không?",
          "Tại sao ngày mai phải dậy sớm?"
        ],
        "answer": "Ngày mai tôi có nên dậy sớm không?",
        "explanation": "Hỏi xin lời khuyên: Có nên làm V không?"
      },
      {
        "id": "jlpt-n5-hougaii-10",
        "type": "order",
        "prompt": "Sắp xếp: Vì trời sắp mưa nên bạn nên về sớm.",
        "options": [
          "帰ったほうがいいです",
          "雨が降りそうだから",
          "早く"
        ],
        "answer": "雨が降りそうだから早く帰ったほうがいいです",
        "explanation": "Trật tự: Lý do + 早く + 帰ったほうがいいです."
      }
    ]
  },
  {
    "id": "jlpt-n5-kamoshirenai",
    "pattern": "〜かもしれない",
    "title": "Có lẽ, có thể là",
    "level": "N5",
    "position": 155,
    "meaning": "【Dạng 1】Phỏng đoán khả năng xảy ra (Khoảng 50% hoặc thấp hơn: Có lẽ, không chừng)",
    "formation": "Động từ/Tính từ thể thông thường (bỏ だ sau N và tính từ な) + かもしれません / かもしれない",
    "explanation": "Diễn tả phán đoán không chắc chắn của người nói về một sự việc trong hiện tại, tương lai hoặc quá khứ, tỷ lệ xảy ra khoảng 50%.",
    "notes": "Chú thích phân biệt: Sắc thái chắc chắn thấp hơn でしょう (khoảng 70-80%). Sau danh từ và tính từ đuôi な, bỏ だ đi trực tiếp với かもしれない (ví dụ: 雨かもしれない, không dùng 雨だかもしれない).",
    "mistake": "Không thêm だ trước かもしれません sau danh từ (sai: 病気だかもしれません; đúng: 病気かもしれません).",
    "related": [
      "mnn-32",
      "jlpt-n5-hougaii"
    ],
    "examples": [
      {
        "ja": "明日は雨が降るかもしれません。",
        "kana": "あしたはあめがふるかもしれません。",
        "vi": "Ngày mai có lẽ trời sẽ mưa.",
        "readings": {
          "明日": "あした",
          "雨": "あめ",
          "降る": "ふる"
        }
      },
      {
        "ja": "田中さんは病気かもしれません。",
        "kana": "たなかさんはびょうきかもしれません。",
        "vi": "Anh Tanaka có thể là đang bị ốm.",
        "readings": {
          "田中": "たなか",
          "病気": "びょうき"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-kamoshirenai-1",
        "type": "choice",
        "prompt": "午後は雨が ___ かもしれません。",
        "options": [
          "降る",
          "降ります",
          "降って",
          "降り"
        ],
        "answer": "降る",
        "explanation": "Đi cùng thể thông thường của động từ: 降る + かもしれません."
      },
      {
        "id": "jlpt-n5-kamoshirenai-2",
        "type": "fill",
        "prompt": "Điền từ phỏng đoán: 電車に遅れる ___ しれません。",
        "answer": "かも",
        "explanation": "Mẫu câu: 〜かもしれません."
      },
      {
        "id": "jlpt-n5-kamoshirenai-3",
        "type": "order",
        "prompt": "Sắp xếp: Cuộc họp ngày mai có lẽ sẽ bị hoãn.",
        "options": [
          "明日の会議は",
          "中止になる",
          "かもしれません"
        ],
        "answer": "明日の会議は中止になるかもしれません",
        "explanation": "Trật tự: Chủ ngữ + Động từ thể từ điển + かもしれません."
      },
      {
        "id": "jlpt-n5-kamoshirenai-4",
        "type": "choice",
        "prompt": "Cách kết hợp nào sau đây với danh từ「休み」là ĐÚNG?",
        "options": [
          "休みかもしれません",
          "休みだかもしれません",
          "休みの宿かもしれません",
          "休みにかもしれません"
        ],
        "answer": "休みかもしれません",
        "explanation": "Danh từ đi trực tiếp không có だ: 休みかもしれません."
      },
      {
        "id": "jlpt-n5-kamoshirenai-5",
        "type": "fill",
        "prompt": "Hoàn thiện đuôi câu lịch sự: 彼はもう帰ったかも ___。",
        "answer": "しれません",
        "explanation": "Đuôi lịch sự: かもしれません."
      },
      {
        "id": "jlpt-n5-kamoshirenai-6",
        "type": "order",
        "prompt": "Sắp xếp: Chiếc cặp này có thể đắt tiền đấy.",
        "options": [
          "高いかもしれません",
          "この鞄は"
        ],
        "answer": "この鞄は高いかもしれません",
        "explanation": "Tính từ đuôi い giữ nguyên: 高いかもしれません."
      },
      {
        "id": "jlpt-n5-kamoshirenai-7",
        "type": "choice",
        "prompt": "So với「〜でしょう」, mức độ chắc chắn của「〜かもしれません」như thế nào?",
        "options": [
          "Thấp hơn (khoảng 50% hoặc thấp hơn)",
          "Cao hơn (khoảng 90%)",
          "Chắc chắn 100%",
          "Hoàn toàn phủ định"
        ],
        "answer": "Thấp hơn (khoảng 50% hoặc thấp hơn)",
        "explanation": "かもしれません biểu thị phán đoán không chắc chắn, chỉ khoảng 50%."
      },
      {
        "id": "jlpt-n5-kamoshirenai-8",
        "type": "fill",
        "prompt": "Điền tính từ な「暇」: 明日は ___ かもしれません (rảnh rỗi)。",
        "answer": "暇",
        "explanation": "Tính từ đuôi な bỏ な và bỏ だ: 暇かもしれません."
      },
      {
        "id": "jlpt-n5-kamoshirenai-9",
        "type": "choice",
        "prompt": "「約束の時間に間に合わないかもしれない」nghĩa là gì?",
        "options": [
          "Có thể tôi sẽ không kịp giờ hẹn",
          "Chắc chắn tôi kịp giờ hẹn",
          "Tôi không muốn đến giờ hẹn",
          "Tôi đã đến trước giờ hẹn"
        ],
        "answer": "Có thể tôi sẽ không kịp giờ hẹn",
        "explanation": "間に合わないかもしれない: Có thể không kịp."
      },
      {
        "id": "jlpt-n5-kamoshirenai-10",
        "type": "order",
        "prompt": "Sắp xếp: Có lẽ câu trả lời đó bị sai.",
        "options": [
          "間違っているかもしれません",
          "その答えは"
        ],
        "answer": "その答えは間違っているかもしれません",
        "explanation": "Trật tự: その答えは + 間違っているかもしれません."
      }
    ]
  },
  {
    "id": "jlpt-n5-karamade",
    "pattern": "〜から〜まで",
    "title": "Từ... đến...",
    "level": "N5",
    "position": 156,
    "meaning": "【Dạng 1】Khoảng thời gian: Từ lúc nào đến lúc nào；【Dạng 2】Khoảng không gian: Từ đâu đến đâu",
    "formation": "Điểm khởi đầu (thời gian / địa điểm) + から + Điểm kết thúc + まで",
    "explanation": "Xác định điểm khởi đầu (から) và điểm kết thúc (まで) của một hành động, sự việc theo thời gian hoặc không gian địa lý.",
    "notes": "Chú thích phân biệt: Có thể dùng riêng lẻ chỉ mỗi から (từ...) hoặc chỉ mỗi まで (đến...). Khi đi kèm động từ di chuyển, までに khác với まで (までに là hạn chót phải hoàn tất).",
    "mistake": "Tránh đảo lộn trật tự から và まで.",
    "related": [
      "mnn-04",
      "mnn-05"
    ],
    "examples": [
      {
        "ja": "銀行は午前九時から午後三時までです。",
        "kana": "ぎんこうはごぜんくじからごごさんじまでです。",
        "vi": "Ngân hàng mở cửa từ 9 giờ sáng đến 3 giờ chiều.",
        "readings": {
          "銀行": "ぎんこう",
          "午前": "ごぜん",
          "九時": "くじ",
          "午後": "ごご",
          "三時": "さんじ"
        }
      },
      {
        "ja": "東京から京都まで新幹線で行きました。",
        "kana": "とうきょうからきょうとまでしんかんせんでいきました。",
        "vi": "Tôi đã đi từ Tokyo đến Kyoto bằng tàu Shinkansen.",
        "readings": {
          "東京": "とうきょう",
          "京都": "きょうと",
          "新幹線": "しんかんせん",
          "行きました": "いきました"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-karamade-1",
        "type": "choice",
        "prompt": "九時 ___ 五時 ___ 働きます。",
        "options": [
          "から／まで",
          "まで／から",
          "に／で",
          "を／に"
        ],
        "answer": "から／まで",
        "explanation": "Từ 9 giờ đến 5 giờ: 九時から五時まで."
      },
      {
        "id": "jlpt-n5-karamade-2",
        "type": "fill",
        "prompt": "Điền trợ từ điểm xuất phát: 家 ___ 駅まで歩いて十分です。",
        "answer": "から",
        "explanation": "Từ nhà: 家から."
      },
      {
        "id": "jlpt-n5-karamade-3",
        "type": "fill",
        "prompt": "Điền trợ từ điểm kết thúc: 昼休みは十二時から一時 ___ です。",
        "answer": "まで",
        "explanation": "Đến 1 giờ: 一時まで."
      },
      {
        "id": "jlpt-n5-karamade-4",
        "type": "order",
        "prompt": "Sắp xếp: Tôi học từ thứ Hai đến thứ Sáu.",
        "options": [
          "勉強します",
          "金曜日まで",
          "月曜日から"
        ],
        "answer": "月曜日から金曜日まで勉強します",
        "explanation": "Trật tự: Thời gian bắt đầu から + Thời gian kết thúc まで + Động từ."
      },
      {
        "id": "jlpt-n5-karamade-5",
        "type": "choice",
        "prompt": "「ここから空港までどのくらいかかりますか」hỏi về điều gì?",
        "options": [
          "Thời gian/chi phí đi từ đây đến sân bay",
          "Sân bay mở cửa lúc mấy giờ",
          "Có bao nhiêu chuyến bay từ đây",
          "Sân bay nằm ở hướng nào"
        ],
        "answer": "Thời gian/chi phí đi từ đây đến sân bay",
        "explanation": "Hỏi mất bao lâu từ đây đến sân bay."
      },
      {
        "id": "jlpt-n5-karamade-6",
        "type": "fill",
        "prompt": "Hoàn thành câu: ハノイ ___ ホーチミンまで飛行機で行きます。",
        "answer": "から",
        "explanation": "Từ Hà Nội: ハノイから."
      },
      {
        "id": "jlpt-n5-karamade-7",
        "type": "order",
        "prompt": "Sắp xếp: Thư viện mở cửa từ 8 giờ sáng.",
        "options": [
          "開いています",
          "朝八時から",
          "図書館は"
        ],
        "answer": "図書館は朝八時から開いています",
        "explanation": "Trật tự: 図書館は + 朝八時から + 開いています."
      },
      {
        "id": "jlpt-n5-karamade-8",
        "type": "choice",
        "prompt": "Điền cặp trợ từ đúng: 大阪 ___ 名古屋 ___ 電車で行きます。",
        "options": [
          "から／まで",
          "で／に",
          "を／へ",
          "より／ほど"
        ],
        "answer": "から／まで",
        "explanation": "Từ Osaka đến Nagoya: 大阪から名古屋まで."
      },
      {
        "id": "jlpt-n5-karamade-9",
        "type": "fill",
        "prompt": "Điền trợ từ: 昨日は夜遅く ___ 残業しました (đến tận khuya)。",
        "answer": "まで",
        "explanation": "Đến khuya: 夜遅くまで."
      },
      {
        "id": "jlpt-n5-karamade-10",
        "type": "order",
        "prompt": "Sắp xếp: Cuộc họp kéo dài từ 2 giờ đến 4 giờ chiều.",
        "options": [
          "会議がありました",
          "四時まで",
          "二時から"
        ],
        "answer": "二時から四時まで会議がありました",
        "explanation": "Trật tự: 二時から四時まで + 会議がありました."
      }
    ]
  },
  {
    "id": "jlpt-n5-teikemasen",
    "pattern": "〜てもいい・〜てはいけない",
    "title": "Được phép & Cấm đoán",
    "level": "N5",
    "position": 157,
    "meaning": "【Dạng 1】Được phép làm gì (Cho phép / Xin phép: 〜てもいいです)；【Dạng 2】Không được phép làm gì (Cấm đoán quy tắc: 〜てはいけません)",
    "formation": "【Dạng 1】Động từ thể て + もいいです (か)\n【Dạng 2】Động từ thể て + はいけません",
    "explanation": "Dùng để biểu thị sự cho phép (làm việc này cũng được) hoặc nghiêm cấm không được thực hiện một hành vi nào đó dựa trên nội quy, pháp luật hoặc quy tắc chung.",
    "notes": "Chú thích phân biệt: Câu hỏi xin phép「〜てもいいですか」(Tôi làm... có được không?) thường được trả lời là「ええ、いいですよ」hoặc nếu từ chối khéo thì nói「すみません、ちょっと...」thay vì nói thẳng「いけません」(quá nặng nề).",
    "mistake": "Trợ từ は trong てはいけません phát âm là /wa/. Không dùng thể nguyên dạng trước もいい (sai: 飲むもいい; đúng: 飲んでもいい).",
    "related": [
      "mnn-15",
      "jlpt-n5-kudasai"
    ],
    "examples": [
      {
        "ja": "ここで写真を撮ってもいいですか。",
        "kana": "ここでしゃしんをとってもいいですか。",
        "vi": "Tôi có thể chụp ảnh ở đây được không ạ?",
        "readings": {
          "写真": "しゃしん",
          "撮って": "とって"
        }
      },
      {
        "ja": "美術館の中でタバコを吸ってはいけません。",
        "kana": "びじゅつかんのなかでたばこをすってはいけません。",
        "vi": "Không được hút thuốc trong bảo tàng mỹ thuật.",
        "readings": {
          "美術館": "びじゅつかん",
          "中": "なか",
          "吸って": "すって"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-teikemasen-1",
        "type": "choice",
        "prompt": "ここで写真を ___ もいいですか。",
        "options": [
          "撮って",
          "撮る",
          "撮った",
          "撮り"
        ],
        "answer": "撮って",
        "explanation": "Cấu trúc xin phép: Động từ thể て + もいいですか."
      },
      {
        "id": "jlpt-n5-teikemasen-2",
        "type": "fill",
        "prompt": "Điền từ cấm đoán: 教室で大声で話しては ___。",
        "answer": "いけません",
        "explanation": "Mẫu câu cấm đoán quy tắc: 〜てはいけません."
      },
      {
        "id": "jlpt-n5-teikemasen-3",
        "type": "order",
        "prompt": "Sắp xếp: Bạn có thể vào phòng được rồi.",
        "options": [
          "入ってもいいですよ",
          "部屋に"
        ],
        "answer": "部屋に入ってもいいですよ",
        "explanation": "Trật tự: 部屋に入ってもいいですよ."
      },
      {
        "id": "jlpt-n5-teikemasen-4",
        "type": "choice",
        "prompt": "Khi muốn từ chối khéo léo một câu hỏi xin phép「座ってもいいですか」, người Nhật thường đáp:",
        "options": [
          "すみません、ここは席が決まっています",
          "絶対に座ってはいけません",
          "座るな",
          "だめです"
        ],
        "answer": "すみません、ここは席が決まっています",
        "explanation": "Trong văn hóa Nhật, người ta từ chối khéo léo bằng cách xin lỗi và đưa ra lý do khách quan."
      },
      {
        "id": "jlpt-n5-teikemasen-5",
        "type": "fill",
        "prompt": "Chia động từ「使います」: このペンを ___ もいいですか (tôi dùng có được không)。",
        "answer": "使って",
        "explanation": "使います thể て là 使って."
      },
      {
        "id": "jlpt-n5-teikemasen-6",
        "type": "order",
        "prompt": "Sắp xếp: Không được đỗ xe ở chỗ này.",
        "options": [
          "車を止めてはいけません",
          "ここに"
        ],
        "answer": "ここに車を止めてはいけません",
        "explanation": "Trật tự: ここに + 車を止めてはいけません."
      },
      {
        "id": "jlpt-n5-teikemasen-7",
        "type": "choice",
        "prompt": "Điền liên từ thích hợp: お酒を飲んで運転し ___ はいけません。",
        "options": [
          "て",
          "た",
          "る",
          "ない"
        ],
        "answer": "て",
        "explanation": "Động từ thể て: 運転して + はいけません."
      },
      {
        "id": "jlpt-n5-teikemasen-8",
        "type": "fill",
        "prompt": "Điền từ cho phép: もう帰っ ___ もいいですか (Tôi về được chưa ạ)。",
        "answer": "て",
        "explanation": "帰って + もいいですか."
      },
      {
        "id": "jlpt-n5-teikemasen-9",
        "type": "choice",
        "prompt": "Biển báo mang ý nghĩa「入ってはいけません」thường thấy ở đâu?",
        "options": [
          "Khu vực cấm vào (Không phận sự miễn vào)",
          "Lối vào công cộng",
          "Phòng chờ xe buýt",
          "Cửa hàng tiện lợi"
        ],
        "answer": "Khu vực cấm vào (Không phận sự miễn vào)",
        "explanation": "入ってはいけません: Cấm vào."
      },
      {
        "id": "jlpt-n5-teikemasen-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi có thể mượn cuốn sách này một chút được không?",
        "options": [
          "この本を借りてもいいですか",
          "ちょっと"
        ],
        "answer": "ちょっとこの本を借りてもいいですか",
        "explanation": "Trật tự: ちょっと + この本を借りてもいいですか."
      }
    ]
  },
  {
    "id": "jlpt-n5-kudasai",
    "pattern": "〜てください・〜ないでください",
    "title": "Yêu cầu làm & Xin đừng làm",
    "level": "N5",
    "position": 158,
    "meaning": "【Dạng 1】Xin hãy làm gì (Yêu cầu lịch sự: 〜てください)；【Dạng 2】Xin đừng làm gì (Yêu cầu kiêng tránh: 〜ないでください)",
    "formation": "【Dạng 1】Động từ thể て + ください\n【Dạng 2】Động từ thể ない + でください",
    "explanation": "Dùng để nhờ vả, yêu cầu, chỉ dẫn đối phương thực hiện hoặc không thực hiện một hành vi nào đó với thái độ lịch sự.",
    "notes": "Chú thích phân biệt: Không dùng 〜てください khi nói với cấp trên, sếp hoặc khách hàng nếu mang tính mệnh lệnh cá nhân; khi đó trong kinh doanh cần dùng cách nói tôn kính hơn như 〜ていただけますか hoặc 〜てくださいませ.",
    "mistake": "Tránh nhầm giữa Vないでください (xin đừng làm) với Vなくてはいけません (phải làm).",
    "related": [
      "mnn-14",
      "mnn-17"
    ],
    "examples": [
      {
        "ja": "名前と住所をここに書いてください。",
        "kana": "なまえとじゅうしょをここにかいてください。",
        "vi": "Xin hãy viết họ tên và địa chỉ vào đây.",
        "readings": {
          "名前": "なまえ",
          "住所": "じゅうしょ",
          "書いて": "かいて"
        }
      },
      {
        "ja": "ここでタバコを吸わないでください。",
        "kana": "ここでたばこをすわないでください。",
        "vi": "Xin đừng hút thuốc ở đây.",
        "readings": {
          "吸わないで": "すわないで"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-kudasai-1",
        "type": "choice",
        "prompt": "ここに名前を ___ ください。",
        "options": [
          "書いて",
          "書く",
          "書いた",
          "書き"
        ],
        "answer": "書いて",
        "explanation": "Yêu cầu làm việc gì: Động từ thể て + ください."
      },
      {
        "id": "jlpt-n5-kudasai-2",
        "type": "fill",
        "prompt": "Điền dạng phủ định: 心配し ___ でください (Xin đừng lo lắng)。",
        "answer": "ない",
        "explanation": "Mẫu câu xin đừng làm: Vない + でください (心配しないでください)."
      },
      {
        "id": "jlpt-n5-kudasai-3",
        "type": "order",
        "prompt": "Sắp xếp: Hãy mở cửa sổ ra.",
        "options": [
          "開けてください",
          "窓を"
        ],
        "answer": "窓を開けてください",
        "explanation": "Trật tự: 窓を + 開けてください."
      },
      {
        "id": "jlpt-n5-kudasai-4",
        "type": "choice",
        "prompt": "Chia động từ「忘れます」thành câu xin đừng quên:",
        "options": [
          "忘れないでください",
          "忘れてください",
          "忘れなくてください",
          "忘れないてください"
        ],
        "answer": "忘れないでください",
        "explanation": "忘れます thể ない là 忘れない + でください."
      },
      {
        "id": "jlpt-n5-kudasai-5",
        "type": "fill",
        "prompt": "Điền từ cầu khiến lịch sự: もう一度言って ___ (xin hãy nói lại)。",
        "answer": "ください",
        "explanation": "Nói xin hãy làm: 〜てください."
      },
      {
        "id": "jlpt-n5-kudasai-6",
        "type": "order",
        "prompt": "Sắp xếp: Xin đừng chụp ảnh ở đây.",
        "options": [
          "写真を撮らないでください",
          "ここで"
        ],
        "answer": "ここで写真を撮らないでください",
        "explanation": "Trật tự: ここで + 写真を撮らないでください."
      },
      {
        "id": "jlpt-n5-kudasai-7",
        "type": "choice",
        "prompt": "Chọn câu chỉ dẫn dùng thể「〜てください」chính xác:",
        "options": [
          "ゆっくり話してください",
          "ゆっくり話すてください",
          "ゆっくり話したください",
          "ゆっくり話しでください"
        ],
        "answer": "ゆっくり話してください",
        "explanation": "話します thể て là 話して + ください."
      },
      {
        "id": "jlpt-n5-kudasai-8",
        "type": "fill",
        "prompt": "Chia động từ「入ります」: 危ないですから、___ でください (đừng vào)。",
        "answer": "入らない",
        "explanation": "入ります thể ない là 入らない."
      },
      {
        "id": "jlpt-n5-kudasai-9",
        "type": "choice",
        "prompt": "「パスポートを見せてください」nghĩa là gì?",
        "options": [
          "Xin vui lòng cho tôi xem hộ chiếu",
          "Tôi đã xem hộ chiếu của bạn",
          "Xin đừng làm mất hộ chiếu",
          "Bạn có mang theo hộ chiếu không?"
        ],
        "answer": "Xin vui lòng cho tôi xem hộ chiếu",
        "explanation": "見せてください: Xin vui lòng cho tôi xem."
      },
      {
        "id": "jlpt-n5-kudasai-10",
        "type": "order",
        "prompt": "Sắp xếp: Hãy lắng nghe thật kỹ.",
        "options": [
          "聞いてください",
          "よく"
        ],
        "answer": "よく聞いてください",
        "explanation": "Trật tự: よく + 聞いてください."
      }
    ]
  },
  {
    "id": "jlpt-n5-taritari",
    "pattern": "〜たり〜たりする",
    "title": "Liệt kê hành động/trạng thái tiêu biểu",
    "level": "N5",
    "position": 159,
    "meaning": "【Dạng 1】Liệt kê hành động tiêu biểu (Khi thì làm A, lúc thì làm B...)；【Dạng 2】Biến đổi qua lại giữa hai trạng thái đối lập",
    "formation": "Động từ thể た + り、Động từ thể た + り + します / しています",
    "explanation": "Dùng để liệt kê một vài hành động tiêu biểu đại diện trong số nhiều hành động, không nhất thiết theo đúng thứ tự thời gian.",
    "notes": "Chú thích phân biệt: Khác với thể て nối tiếp (Vて、Vて chỉ tuần tự trước sau nghiêm ngặt), 〜たり〜たり chỉ nêu ví dụ tượng trưng. Luôn kết thúc bằng động từ する.",
    "mistake": "Quên chia động từ cuối câu sang する (sai: 本を読んだり、映画を見たり; đúng: 本を読んだり、映画を見たりします).",
    "related": [
      "mnn-19"
    ],
    "examples": [
      {
        "ja": "休みの日は掃除したり、洗濯したりします。",
        "kana": "やすみのひはそうじしたり、せんたくしたりします。",
        "vi": "Vào ngày nghỉ, tôi lúc thì dọn dẹp, lúc thì giặt giũ quần áo.",
        "readings": {
          "休み": "やすみ",
          "日": "ひ",
          "掃除": "そうじ",
          "洗濯": "せんたく"
        }
      },
      {
        "ja": "天気が良くなったり悪くなったりします。",
        "kana": "てんきがよくなったりわるくなったりします。",
        "vi": "Thời tiết lúc thì tốt lúc thì xấu thất thường.",
        "readings": {
          "天気": "てんき",
          "良く": "よく",
          "悪く": "わるく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-taritari-1",
        "type": "choice",
        "prompt": "日曜日は本を ___ 、テレビを見たりします。",
        "options": [
          "読んだり",
          "読むたり",
          "読んで",
          "読んだ"
        ],
        "answer": "読んだり",
        "explanation": "Động từ chia thể た + り: 読んだ → 読んだり."
      },
      {
        "id": "jlpt-n5-taritari-2",
        "type": "fill",
        "prompt": "Điền trợ từ liệt kê: 歌を歌ったり、踊っ ___ します。",
        "answer": "たり",
        "explanation": "踊った + り = 踊ったり."
      },
      {
        "id": "jlpt-n5-taritari-3",
        "type": "order",
        "prompt": "Sắp xếp: Ngày nghỉ tôi lúc thì mua sắm, lúc thì xem phim.",
        "options": [
          "映画を見たりします",
          "買い物したり、",
          "休みの日は"
        ],
        "answer": "休みの日は買い物したり、映画を見たりします",
        "explanation": "Trật tự: 休みの日は + 買い物したり、映画を見たりします."
      },
      {
        "id": "jlpt-n5-taritari-4",
        "type": "choice",
        "prompt": "Động từ cuối cùng trong cấu trúc〜たり〜たり luôn là động từ nào?",
        "options": [
          "します",
          "あります",
          "います",
          "なります"
        ],
        "answer": "します",
        "explanation": "Mẫu câu luôn kết thúc bằng động từ する (します/しました)."
      },
      {
        "id": "jlpt-n5-taritari-5",
        "type": "fill",
        "prompt": "Điền động từ kết câu: 昨日は散歩したり本を読んだり ___。",
        "answer": "しました",
        "explanation": "Quá khứ hôm qua kết thúc bằng しました."
      },
      {
        "id": "jlpt-n5-taritari-6",
        "type": "order",
        "prompt": "Sắp xếp: Giá cả lúc thì tăng lúc thì giảm.",
        "options": [
          "下がったりします",
          "値段が上がったり、"
        ],
        "answer": "値段が上がったり、下がったりします",
        "explanation": "Trật tự: 値段が上がったり、下がったりします."
      },
      {
        "id": "jlpt-n5-taritari-7",
        "type": "choice",
        "prompt": "Chia tính từ đuôi い「寒い」sang dạng 〜たり:",
        "options": [
          "寒かったり",
          "寒いたり",
          "寒いだったり",
          "寒くたり"
        ],
        "answer": "寒かったり",
        "explanation": "Tính từ đuôi い: Đổi い thành かったり (寒かったり)."
      },
      {
        "id": "jlpt-n5-taritari-8",
        "type": "fill",
        "prompt": "Chia động từ「行きます」: 旅行では山へ ___ 海へ行ったりした。",
        "answer": "行ったり",
        "explanation": "行った + り = 行ったり."
      },
      {
        "id": "jlpt-n5-taritari-9",
        "type": "choice",
        "prompt": "Ý nghĩa chính của cấu trúc「〜たり〜たりする」là gì?",
        "options": [
          "Liệt kê một vài hành động tiêu biểu đại diện",
          "Bắt buộc hành động phải theo đúng tuần tự",
          "Chỉ được làm duy nhất 2 hành động đó",
          "Hành động xảy ra đồng thời cùng lúc"
        ],
        "answer": "Liệt kê một vài hành động tiêu biểu đại diện",
        "explanation": "Mẫu câu dùng để liệt kê hành động tiêu biểu, không gò bó thứ tự."
      },
      {
        "id": "jlpt-n5-taritari-10",
        "type": "order",
        "prompt": "Sắp xếp: Buổi tối tôi lúc thì nghe nhạc lúc thì đọc sách.",
        "options": [
          "本を読んだりします",
          "音楽を聞いたり、",
          "夜は"
        ],
        "answer": "夜は音楽を聞いたり、本を読んだりします",
        "explanation": "Trật tự: 夜は + 音楽を聞いたり、本を読んだりします."
      }
    ]
  },
  {
    "id": "jlpt-n5-takotogaaru",
    "pattern": "〜たことがある",
    "title": "Kinh nghiệm đã từng làm gì",
    "level": "N5",
    "position": 160,
    "meaning": "【Dạng 1】Đã từng làm gì trong quá khứ (Khẳng định trải nghiệm)；【Dạng 2】Chưa từng làm việc đó bao giờ (Phủ định trải nghiệm: 〜たことがない)",
    "formation": "【Dạng 1】Động từ thể quá khứ (Vた) + ことがある / あります\n【Dạng 2】Vた + ことがない / ありません\n【Dạng 3】Vた + ことがありますか (Hỏi kinh nghiệm)",
    "explanation": "Dùng để nói về trải nghiệm hoặc kinh nghiệm mà một người đã từng trải qua trong đời tính đến thời điểm hiện tại.",
    "notes": "Chú thích phân biệt: Không dùng mẫu này cho những việc diễn ra hiển nhiên hàng ngày (như \"hôm nay tôi đã ăn sáng\"). Khi trả lời câu hỏi「〜たことがありますか」, nếu chưa từng ta đáp「いいえ、一度もありません」.",
    "mistake": "Trước ことがある luôn là động từ thể Vた (sai: 行くことがある; đúng: 行ったことがある).",
    "related": [
      "mnn-19",
      "jlpt-n5-taritari"
    ],
    "examples": [
      {
        "ja": "日本へ行ったことがあります。",
        "kana": "にほんへいったことがあります。",
        "vi": "Tôi đã từng đi Nhật Bản rồi.",
        "readings": {
          "日本": "にほん",
          "行った": "いった"
        }
      },
      {
        "ja": "富士山に登ったことがありません。",
        "kana": "ふじさんにのぼったことがありません。",
        "vi": "Tôi chưa từng leo núi Phú Sĩ bao giờ.",
        "readings": {
          "富士山": "ふじさん",
          "登った": "のぼった"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-takotogaaru-1",
        "type": "choice",
        "prompt": "寿司を ___ ことがありますか。",
        "options": [
          "食べた",
          "食べる",
          "食べて",
          "食べ"
        ],
        "answer": "食べた",
        "explanation": "Kinh nghiệm trải nghiệm: Động từ thể Vた + ことがある."
      },
      {
        "id": "jlpt-n5-takotogaaru-2",
        "type": "fill",
        "prompt": "Điền từ chỉ trải nghiệm: 歌舞伎を見た ___ があります。",
        "answer": "こと",
        "explanation": "Mẫu câu: 〜たことがある."
      },
      {
        "id": "jlpt-n5-takotogaaru-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi chưa từng cưỡi ngựa bao giờ.",
        "options": [
          "馬に乗ったことがありません",
          "一度も"
        ],
        "answer": "一度も馬に乗ったことがありません",
        "explanation": "Trật tự: 一度も (chưa từng một lần) + 馬に乗ったことがありません."
      },
      {
        "id": "jlpt-n5-takotogaaru-4",
        "type": "choice",
        "prompt": "Hỏi ai đó đã từng ăn món ăn Nhật chưa:",
        "options": [
          "日本料理を食べたことがありますか",
          "日本料理を食べることがありますか",
          "日本料理を食べてことがありますか",
          "日本料理を食べましたことがありますか"
        ],
        "answer": "日本料理を食べたことがありますか",
        "explanation": "Động từ chia thể た: 食べたことがありますか."
      },
      {
        "id": "jlpt-n5-takotogaaru-5",
        "type": "fill",
        "prompt": "Chia động từ「会います」: 有名人に ___ ことがあります (từng gặp người nổi tiếng)。",
        "answer": "会った",
        "explanation": "会います thể た là 会った."
      },
      {
        "id": "jlpt-n5-takotogaaru-6",
        "type": "order",
        "prompt": "Sắp xếp: Bạn đã từng đi trượt tuyết chưa?",
        "options": [
          "スキーに行ったことがありますか",
          "北海道へ"
        ],
        "answer": "北海道へスキーに行ったことがありますか",
        "explanation": "Trật tự: 北海道へ + スキーに行ったことがありますか."
      },
      {
        "id": "jlpt-n5-takotogaaru-7",
        "type": "choice",
        "prompt": "Câu nào sau đây dùng SAI mẫu câu「〜たことがある」?",
        "options": [
          "今朝朝ご飯を食べたことがあります",
          "フランスへ行ったことがあります",
          "納豆を食べたことがあります",
          "新幹線に乗ったことがあります"
        ],
        "answer": "今朝朝ご飯を食べたことがあります",
        "explanation": "Không dùng 〜たことがある cho những việc sinh hoạt bình thường hàng ngày như ăn sáng sáng nay."
      },
      {
        "id": "jlpt-n5-takotogaaru-8",
        "type": "fill",
        "prompt": "Điền phủ định: 私は一度もお酒を飲んだことが ___。",
        "answer": "ありません",
        "explanation": "Chưa từng uống rượu: 飲んだことがありません."
      },
      {
        "id": "jlpt-n5-takotogaaru-9",
        "type": "choice",
        "prompt": "「富士山を見たことがありますか」— Trả lời chưa từng:",
        "options": [
          "いいえ、一度もありません",
          "はい、ありません",
          "いいえ、あります",
          "はい、一度もありません"
        ],
        "answer": "いいえ、一度もありません",
        "explanation": "Trả lời phủ định trải nghiệm: いいえ、一度もありません."
      },
      {
        "id": "jlpt-n5-takotogaaru-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi đã từng sống ở Tokyo 2 năm.",
        "options": [
          "住んだことがあります",
          "東京に二年",
          "私は"
        ],
        "answer": "私は東京に二年住んだことがあります",
        "explanation": "Trật tự: 私は + 東京に二年 + 住んだことがあります."
      }
    ]
  },
  {
    "id": "jlpt-n5-hikaku",
    "pattern": "〜より〜のほうが",
    "title": "So sánh hơn & So sánh nhất",
    "level": "N5",
    "position": 161,
    "meaning": "【Dạng 1】A hơn B (So sánh hơn: A のほうが B より...); 【Dạng 2】Giữa A và B thì cái nào hơn? (Câu hỏi lựa chọn); 【Dạng 3】Trong số... thì cái gì nhất (So sánh nhất: ...の中で一番...)",
    "formation": "【Dạng 1】A のほうが + B より + Tính từ + です\n【Dạng 2】A と B と どちらが + Tính từ + ですか\n【Dạng 3】Nhóm N + の中で + [Từ để hỏi] が 一番 + Tính từ + ですか",
    "explanation": "Dùng để so sánh mức độ, tính chất giữa 2 sự vật hiện tượng với nhau, hoặc tìm ra đối tượng có tính chất vượt trội nhất trong một tập hợp.",
    "notes": "Chú thích phân biệt: Khi so sánh 2 vật dùng どちら (không dùng どれ). Đối tượng đứng trước のほうが là đối tượng có tính chất vượt trội hơn.",
    "mistake": "Không nhầm lẫn vị trí của より và のほうが (A のほうが B より... nghĩa là A hơn B).",
    "related": [
      "mnn-12"
    ],
    "examples": [
      {
        "ja": "飛行機のほうが電車より速いです。",
        "kana": "ひこうきのほうがでんしゃよりはやいです。",
        "vi": "Máy bay thì nhanh hơn tàu điện.",
        "readings": {
          "飛行機": "ひこうき",
          "電車": "でんしゃ",
          "速い": "はやい"
        }
      },
      {
        "ja": "一年の中で春が一番好きです。",
        "kana": "いちねんのなかではるがいちばんすきです。",
        "vi": "Trong một năm, tôi thích mùa xuân nhất.",
        "readings": {
          "一年": "いちねん",
          "中": "なか",
          "春": "はる",
          "一番": "いちばん",
          "好き": "すき"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-hikaku-1",
        "type": "choice",
        "prompt": "バス ___ 電車のほうが速いです。",
        "options": [
          "より",
          "ほど",
          "から",
          "まで"
        ],
        "answer": "より",
        "explanation": "Đối tượng bị so sánh đứng trước より: バスより (hơn xe buýt)."
      },
      {
        "id": "jlpt-n5-hikaku-2",
        "type": "fill",
        "prompt": "Điền từ so sánh nhất: クラスの中で誰が ___ 背が高いですか。",
        "answer": "一番",
        "explanation": "So sánh nhất dùng 一番 (nhất)."
      },
      {
        "id": "jlpt-n5-hikaku-3",
        "type": "order",
        "prompt": "Sắp xếp: Tiếng Nhật thì khó hơn tiếng Anh.",
        "options": [
          "英語より難しいです",
          "日本語のほうが"
        ],
        "answer": "日本語のほうが英語より難しいです",
        "explanation": "Trật tự: A のほうが + B より + Tính từ です."
      },
      {
        "id": "jlpt-n5-hikaku-4",
        "type": "choice",
        "prompt": "Hỏi so sánh giữa 2 đối tượng「りんごとみかんと（　）が好きですか」:",
        "options": [
          "どちら",
          "どれ",
          "どこ",
          "だれ"
        ],
        "answer": "どちら",
        "explanation": "So sánh giữa 2 đối tượng dùng từ để hỏi どちら."
      },
      {
        "id": "jlpt-n5-hikaku-5",
        "type": "fill",
        "prompt": "Điền trợ từ: このリンゴの ___ が甘いです。",
        "answer": "ほう",
        "explanation": "Cụm từ chỉ bên vượt trội: 〜のほうが."
      },
      {
        "id": "jlpt-n5-hikaku-6",
        "type": "order",
        "prompt": "Sắp xếp: Giữa thịt và cá bạn thích cái nào hơn?",
        "options": [
          "どちらが好きですか",
          "肉と魚と"
        ],
        "answer": "肉と魚とどちらが好きですか",
        "explanation": "Trật tự: A と B と どちらが好きですか."
      },
      {
        "id": "jlpt-n5-hikaku-7",
        "type": "choice",
        "prompt": "Trong câu「夏より冬のほうが好きです」, người nói thích mùa nào hơn?",
        "options": [
          "Thích mùa đông hơn (冬)",
          "Thích mùa hè hơn (夏)",
          "Thích cả hai mùa bằng nhau",
          "Không thích mùa nào"
        ],
        "answer": "Thích mùa đông hơn (冬)",
        "explanation": "冬のほうが: Bên mùa đông thì thích hơn."
      },
      {
        "id": "jlpt-n5-hikaku-8",
        "type": "fill",
        "prompt": "Điền trợ từ: スポーツの中でサッカー ___ 一番面白いです。",
        "answer": "が",
        "explanation": "Chủ ngữ mang tính chất nhất đi với trợ từ が: サッカーが一番面白い."
      },
      {
        "id": "jlpt-n5-hikaku-9",
        "type": "choice",
        "prompt": "Câu nào diễn đạt đúng \"Hôm nay lạnh hơn hôm qua\"?",
        "options": [
          "今日のほうが昨日より寒いです",
          "昨日のほうが今日より寒いです",
          "今日は昨日より寒いのほうがです",
          "昨日より今日のほうが寒いでした"
        ],
        "answer": "今日のほうが昨日より寒いです",
        "explanation": "Hôm nay hơn hôm qua: 今日のほうが昨日より寒いです."
      },
      {
        "id": "jlpt-n5-hikaku-10",
        "type": "order",
        "prompt": "Sắp xếp: Trong tất cả các món ăn, tôi thích ramen nhất.",
        "options": [
          "ラーメンが一番好きです",
          "料理の中で"
        ],
        "answer": "料理の中でラーメンが一番好きです",
        "explanation": "Trật tự: 料理の中で + ラーメンが一番好きです."
      }
    ]
  },
  {
    "id": "jlpt-n5-tsumori",
    "pattern": "〜つもりだ",
    "title": "Dự định chắc chắn",
    "level": "N5",
    "position": 162,
    "meaning": "【Dạng 1】Dự định làm gì (Quyết định ý chí cá nhân: Vるつもりだ)；【Dạng 2】Dự định không làm gì (Vないつもりだ / Vるつもりはない)",
    "formation": "【Dạng 1】Động từ thể từ điển (Vる) + つもりです\n【Dạng 2】Động từ thể ない (Vない) + つもりです",
    "explanation": "Diễn tả ý định, dự tính đã được người nói quyết định chắc chắn từ trước và sẽ thực hiện trong tương lai.",
    "notes": "Chú thích phân biệt: つもりだ thể hiện ý định chắc chắn hơn 〜ようと思っている. Không dùng để hỏi ý định của người bề trên hay người lớn tuổi.",
    "mistake": "Không dùng thể quá khứ trước つもり để nói dự định tương lai (sai: 行ったつもりです với nghĩa dự định đi).",
    "related": [
      "mnn-31"
    ],
    "examples": [
      {
        "ja": "来年日本へ留学するつもりです。",
        "kana": "らいねんにほんへりゅうがくするつもりです。",
        "vi": "Tôi dự định sang năm sẽ đi du học Nhật Bản.",
        "readings": {
          "来年": "らいねん",
          "日本": "にほん",
          "留学": "りゅうがく"
        }
      },
      {
        "ja": "タバコはもう吸わないつもりです。",
        "kana": "たばこはもうすわないつもりです。",
        "vi": "Tôi có dự định sẽ không hút thuốc nữa.",
        "readings": {
          "吸わない": "すわない"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-tsumori-1",
        "type": "choice",
        "prompt": "大学を卒業したら、国へ ___ つもりです。",
        "options": [
          "帰る",
          "帰った",
          "帰って",
          "帰り"
        ],
        "answer": "帰る",
        "explanation": "Dự định làm gì: V từ điển + つもりです (帰るつもりです)."
      },
      {
        "id": "jlpt-n5-tsumori-2",
        "type": "fill",
        "prompt": "Điền từ chỉ dự định: 今週末は家で休む ___ です。",
        "answer": "つもり",
        "explanation": "Mẫu câu dự định: 〜つもりです."
      },
      {
        "id": "jlpt-n5-tsumori-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi dự định mua một chiếc ô tô mới.",
        "options": [
          "新しい車を買うつもりです",
          "来月"
        ],
        "answer": "来月新しい車を買うつもりです",
        "explanation": "Trật tự: Thời gian + 新しい車を買うつもりです."
      },
      {
        "id": "jlpt-n5-tsumori-4",
        "type": "choice",
        "prompt": "Dự định \"không tham gia bữa tiệc\" nói thế nào?",
        "options": [
          "パーティーに参加しないつもりです",
          "パーティーに参加するつもりではありません",
          "パーティーに参加しなかったつもりです",
          "パーティーに参加しないでしたつもりです"
        ],
        "answer": "パーティーに参加しないつもりです",
        "explanation": "Dự định không làm gì: Vない + つもりです."
      },
      {
        "id": "jlpt-n5-tsumori-5",
        "type": "fill",
        "prompt": "Chia động từ「買います」: 何も ___ つもりです (dự định không mua gì)。",
        "answer": "買わない",
        "explanation": "買います thể ない là 買わない."
      },
      {
        "id": "jlpt-n5-tsumori-6",
        "type": "order",
        "prompt": "Sắp xếp: Bạn dự định học tiếng Nhật bao lâu?",
        "options": [
          "日本語を勉強するつもりですか",
          "どのくらい"
        ],
        "answer": "どのくらい日本語を勉強するつもりですか",
        "explanation": "Trật tự: どのくらい + 日本語を勉強するつもりですか."
      },
      {
        "id": "jlpt-n5-tsumori-7",
        "type": "choice",
        "prompt": "Tại sao không nên hỏi sếp「先生は何を食べるつもりですか」?",
        "options": [
          "Vì hỏi trực tiếp ý định đối phương nghe không lịch sự đối với người bề trên",
          "Vì ngữ pháp sai",
          "Vì sếp không ăn uống",
          "Vì từ つもり chỉ dùng cho trẻ em"
        ],
        "answer": "Vì hỏi trực tiếp ý định đối phương nghe không lịch sự đối với người bề trên",
        "explanation": "つもりだ mang tính hỏi thẳng ý định cá nhân nên tránh dùng với cấp trên."
      },
      {
        "id": "jlpt-n5-tsumori-8",
        "type": "fill",
        "prompt": "Hoàn thiện câu: 明日友達に ___ つもりです (dự định gặp: 会います → ___ )。",
        "answer": "会う",
        "explanation": "会います thể từ điển là 会う + つもりです."
      },
      {
        "id": "jlpt-n5-tsumori-9",
        "type": "choice",
        "prompt": "「仕事を辞めるつもりはありません」thể hiện thái độ gì?",
        "options": [
          "Quyết tâm tuyệt đối không có ý định nghỉ việc",
          "Chắc chắn sẽ nghỉ việc",
          "Đã nghỉ việc rồi",
          "Đang phân vân có nên nghỉ không"
        ],
        "answer": "Quyết tâm tuyệt đối không có ý định nghỉ việc",
        "explanation": "〜つもりはない: Hoàn toàn không có ý định làm gì."
      },
      {
        "id": "jlpt-n5-tsumori-10",
        "type": "order",
        "prompt": "Sắp xếp: Nghỉ hè tôi dự định về quê thăm gia đình.",
        "options": [
          "実家へ帰るつもりです",
          "夏休みに"
        ],
        "answer": "夏休みに実家へ帰るつもりです",
        "explanation": "Trật tự: 夏休みに + 実家へ帰るつもりです."
      }
    ]
  },
  {
    "id": "jlpt-n5-sugiru",
    "pattern": "〜すぎる",
    "title": "Quá mức chịu đựng / Vượt ngưỡng",
    "level": "N5",
    "position": 163,
    "meaning": "【Dạng 1】Làm việc gì quá mức (Động từ)；【Dạng 2】Trạng thái tính chất vượt quá ngưỡng (Tính từ)",
    "formation": "【Dạng 1】Động từ thể ます (bỏ ます) + すぎる / すぎます\n【Dạng 2】Tính từ đuôi い (bỏ い) + すぎる\n【Dạng 3】Tính từ đuôi な (bỏ な) + すぎる",
    "explanation": "Diễn tả một hành động hoặc trạng thái vượt quá giới hạn thông thường, thường mang sắc thái tiêu cực, không tốt hoặc gây khó khăn.",
    "notes": "Chú thích phân biệt: 〜すぎる chia như một động từ nhóm 2 (すぎます, すぎた, すぎて). Ngoại lệ: いい (tốt) → よさすぎる.",
    "mistake": "Không giữ lại đuôi い hay ます trước すぎる (sai: 辛いすぎる; đúng: 辛すぎる).",
    "related": [
      "mnn-44"
    ],
    "examples": [
      {
        "ja": "昨日お酒を飲みすぎました。",
        "kana": "きのうおさけをのみすぎました。",
        "vi": "Hôm qua tôi đã uống quá nhiều rượu.",
        "readings": {
          "昨日": "きのう",
          "お酒": "おさけ",
          "飲み": "のみ"
        }
      },
      {
        "ja": "このラーメンは辛すぎます。",
        "kana": "このらーめんはからすぎます。",
        "vi": "Bát mì ramen này cay quá mức.",
        "readings": {
          "辛すぎます": "からすぎます"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-sugiru-1",
        "type": "choice",
        "prompt": "ご飯を ___ すぎて、お腹が痛いです。",
        "options": [
          "食べ",
          "食べる",
          "食べた",
          "食べて"
        ],
        "answer": "食べ",
        "explanation": "Động từ bỏ ます: 食べます → 食べ + すぎて."
      },
      {
        "id": "jlpt-n5-sugiru-2",
        "type": "fill",
        "prompt": "Chia tính từ「高い」với すぎる: この時計は ___ すぎます (đắt quá)。",
        "answer": "高",
        "explanation": "Tính từ đuôi い bỏ い: 高い → 高すぎる."
      },
      {
        "id": "jlpt-n5-sugiru-3",
        "type": "order",
        "prompt": "Sắp xếp: Hôm qua tôi đã làm việc quá sức.",
        "options": [
          "働きすぎました",
          "昨日は"
        ],
        "answer": "昨日は働きすぎました",
        "explanation": "Trật tự: 昨日は + 働きすぎました."
      },
      {
        "id": "jlpt-n5-sugiru-4",
        "type": "choice",
        "prompt": "Tính từ「いい」(tốt) khi chia với すぎる sẽ thành dạng nào?",
        "options": [
          "よさすぎる",
          "いいすぎる",
          "よすぎる",
          "いくすぎる"
        ],
        "answer": "よさすぎる",
        "explanation": "Ngoại lệ đặc biệt của いい là よさすぎる (tốt quá mức)."
      },
      {
        "id": "jlpt-n5-sugiru-5",
        "type": "fill",
        "prompt": "Chia động từ「寝ます」: 朝 ___ すぎて遅刻しました (ngủ quên quá giờ)。",
        "answer": "寝",
        "explanation": "寝ます bỏ ます là 寝 + すぎて."
      },
      {
        "id": "jlpt-n5-sugiru-6",
        "type": "order",
        "prompt": "Sắp xếp: Căn phòng này yên tĩnh quá mức.",
        "options": [
          "静かすぎます",
          "この部屋は"
        ],
        "answer": "この部屋は静かすぎます",
        "explanation": "Tính từ đuôi な bỏ な: 静かすぎます."
      },
      {
        "id": "jlpt-n5-sugiru-7",
        "type": "choice",
        "prompt": "Câu nào sau đây chia SAI khi kết hợp với「すぎる」?",
        "options": [
          "甘いすぎる",
          "甘すぎる",
          "飲みすぎる",
          "難しすぎる"
        ],
        "answer": "甘いすぎる",
        "explanation": "Sai vì chưa bỏ đuôi い (phải là 甘すぎる)."
      },
      {
        "id": "jlpt-n5-sugiru-8",
        "type": "fill",
        "prompt": "Điền dạng chia của「買います」: 服を買い ___ てお金がなくなった。",
        "answer": "すぎ",
        "explanation": "Mua sắm quá nhiều: 買いすぎて."
      },
      {
        "id": "jlpt-n5-sugiru-9",
        "type": "choice",
        "prompt": "Sắc thái chung của mẫu câu「〜すぎる」thường là:",
        "options": [
          "Không tốt, vượt quá mức chịu đựng hoặc bình thường",
          "Rất tích cực và đáng khen ngợi",
          "Chỉ dùng để khen ngợi người khác",
          "Không có cảm xúc gì"
        ],
        "answer": "Không tốt, vượt quá mức chịu đựng hoặc bình thường",
        "explanation": "すぎる thường chỉ việc quá mức dẫn đến hệ quả không mong muốn."
      },
      {
        "id": "jlpt-n5-sugiru-10",
        "type": "order",
        "prompt": "Sắp xếp: Cái áo này quá to đối với tôi.",
        "options": [
          "大きすぎます",
          "私には",
          "このシャツは"
        ],
        "answer": "このシャツは私には大きすぎます",
        "explanation": "Trật tự: このシャツは + 私には + 大きすぎます."
      }
    ]
  },
  {
    "id": "jlpt-n5-yasuikui",
    "pattern": "〜やすい・〜にくい",
    "title": "Dễ làm & Khó làm",
    "level": "N5",
    "position": 164,
    "meaning": "【Dạng 1】Dễ thực hiện / Có xu hướng dễ xảy ra (〜やすい)；【Dạng 2】Khó thực hiện / Ít khi xảy ra (〜にくい)",
    "formation": "Động từ thể ます (bỏ ます) + やすい / にくい (chia như tính từ đuôi い)",
    "explanation": "Diễn tả tính chất của một sự vật khiến cho việc thực hiện hành động trở nên dễ dàng hoặc khó khăn, hoặc khả năng dễ xảy ra hiện tượng gì.",
    "notes": "Chú thích phân biệt: 〜やすい và 〜にくい chia giống hệt tính từ đuôi い (〜やすかった, 〜やすくない, 〜にくかった...).",
    "mistake": "Không gắn trực tiếp vào thể từ điển (sai: 使うやすい; đúng: 使いやすい).",
    "related": [
      "mnn-44",
      "jlpt-n5-sugiru"
    ],
    "examples": [
      {
        "ja": "このペンはとても書きやすいです。",
        "kana": "このぺんはとてもかきやすいです。",
        "vi": "Chiếc bút này viết rất êm tay (dễ viết).",
        "readings": {
          "書きやすい": "かきやすい"
        }
      },
      {
        "ja": "この漢字は読みにくいです。",
        "kana": "このかんじはよみにくいです。",
        "vi": "Chữ Hán này rất khó đọc.",
        "readings": {
          "漢字": "かんじ",
          "読みにくい": "よみにくい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-yasuikui-1",
        "type": "choice",
        "prompt": "この薬は甘くて ___ やすいです。",
        "options": [
          "飲み",
          "飲む",
          "飲んだ",
          "飲んで"
        ],
        "answer": "飲み",
        "explanation": "Động từ bỏ ます: 飲みます → 飲みやすい."
      },
      {
        "id": "jlpt-n5-yasuikui-2",
        "type": "fill",
        "prompt": "Điền từ đối nghĩa: 魚は骨が多くて食べ ___ です (khó ăn)。",
        "answer": "にくい",
        "explanation": "Khó ăn: 食べにくい."
      },
      {
        "id": "jlpt-n5-yasuikui-3",
        "type": "order",
        "prompt": "Sắp xếp: Từ điển này rất dễ sử dụng.",
        "options": [
          "使いやすいです",
          "この辞書は",
          "とても"
        ],
        "answer": "この辞書はとても使いやすいです",
        "explanation": "Trật tự: この辞書は + とても + 使いやすいです."
      },
      {
        "id": "jlpt-n5-yasuikui-4",
        "type": "choice",
        "prompt": "Câu nào nói về đường xá khó đi lại vào mùa mưa?",
        "options": [
          "道が歩きにくいです",
          "道が歩くやすいです",
          "道が歩いてにくいです",
          "道が歩かないやすいです"
        ],
        "answer": "道が歩きにくいです",
        "explanation": "歩きます bỏ ます + にくい = 歩きにくい."
      },
      {
        "id": "jlpt-n5-yasuikui-5",
        "type": "fill",
        "prompt": "Chia động từ「分かります」: この説明は分かり ___ (rất dễ hiểu)。",
        "answer": "やすい",
        "explanation": "分かりやすい: Dễ hiểu."
      },
      {
        "id": "jlpt-n5-yasuikui-6",
        "type": "order",
        "prompt": "Sắp xếp: Giày này vừa vặn và rất dễ đi lại.",
        "options": [
          "歩きやすいです",
          "この靴は"
        ],
        "answer": "この靴は歩きやすいです",
        "explanation": "Trật tự: この靴は + 歩きやすいです."
      },
      {
        "id": "jlpt-n5-yasuikui-7",
        "type": "choice",
        "prompt": "Dạng phủ định của「分かりやすいです」(không dễ hiểu) là gì?",
        "options": [
          "分かりやすくないです",
          "分かりやすいではないです",
          "分かりやすかったないです",
          "分かりやすくないでした"
        ],
        "answer": "分かりやすくないです",
        "explanation": "〜やすい chia như tính từ đuôi い: 〜やすくない."
      },
      {
        "id": "jlpt-n5-yasuikui-8",
        "type": "fill",
        "prompt": "Điền đuôi từ: 東京は交通が便利で住み ___ です (dễ sống/tiện sống)。",
        "answer": "やすい",
        "explanation": "住みやすい: Dễ sống, đáng sống."
      },
      {
        "id": "jlpt-n5-yasuikui-9",
        "type": "choice",
        "prompt": "「雨の日は滑りやすいですから気をつけてください」nghĩa là gì?",
        "options": [
          "Ngày mưa đường dễ trượt ngã nên hãy chú ý",
          "Ngày mưa đường không trượt ngã",
          "Trời sắp mưa nên hãy về nhà",
          "Mưa to quá không thể đi được"
        ],
        "answer": "Ngày mưa đường dễ trượt ngã nên hãy chú ý",
        "explanation": "滑りやすい: Dễ trơn trượt."
      },
      {
        "id": "jlpt-n5-yasuikui-10",
        "type": "order",
        "prompt": "Sắp xếp: Giọng nói của thầy giáo rất dễ nghe.",
        "options": [
          "聞きやすかったです",
          "先生の声は"
        ],
        "answer": "先生の声は聞きやすかったです",
        "explanation": "Trật tự: 先生の声は + 聞きやすかったです."
      }
    ]
  },
  {
    "id": "jlpt-n5-ndesu",
    "pattern": "〜んです・〜のです",
    "title": "Giải thích hoàn cảnh và lý do",
    "level": "N5",
    "position": 165,
    "meaning": "【Dạng 1】Giải thích lý do, nguyên nhân ngầm ẩn；【Dạng 2】Hỏi để tìm hiểu rõ tình huống người khác；【Dạng 3】Mở đầu câu chuyện trước khi nhờ vả",
    "formation": "Thể thông thường + んです (Tính từ na / Danh từ + なんです)",
    "explanation": "Dùng để nhấn mạnh lý do giải thích cho một tình huống mà cả hai bên cùng quan sát thấy, hoặc hỏi han quan tâm khi thấy đối phương có biểu hiện khác thường.",
    "notes": "Chú thích phân biệt: 〜んです dùng trong văn nói khẩu ngữ; 〜のです dùng trong văn viết trang trọng. Sau danh từ và tính từ đuôi な, dùng なんです (ví dụ: 休みなんです, không dùng 休みんです).",
    "mistake": "Không thêm だ trước んです (sai: 雨だんです; đúng: 雨なんです).",
    "related": [
      "mnn-26"
    ],
    "examples": [
      {
        "ja": "どうして遅刻したんですか。— 電車が止まったんです。",
        "kana": "どうしてちこくしたんですか。— でんしゃがとまったんです。",
        "vi": "Tại sao bạn lại đi muộn thế? — Dạ tại vì tàu điện bị dừng đột ngột ạ.",
        "readings": {
          "遅刻": "ちこく",
          "電車": "でんしゃ",
          "止まった": "とまった"
        }
      },
      {
        "ja": "頭が痛いんです。",
        "kana": "あたまがいたいんです。",
        "vi": "Tại vì tôi đang bị đau đầu (giải thích vẻ mặt mệt mỏi).",
        "readings": {
          "頭": "あたま",
          "痛い": "いたい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n5-ndesu-1",
        "type": "choice",
        "prompt": "「どうしたんですか。」—「お腹が ___ んです。」",
        "options": [
          "痛い",
          "痛いだ",
          "痛くて",
          "痛く"
        ],
        "answer": "痛い",
        "explanation": "Tính từ đuôi い đi trực tiếp với んです: 痛いんです."
      },
      {
        "id": "jlpt-n5-ndesu-2",
        "type": "fill",
        "prompt": "Điền dạng nối với danh từ: 今日は休み ___ んです。",
        "answer": "な",
        "explanation": "Danh từ đi với んです phải có な: 休みなんです."
      },
      {
        "id": "jlpt-n5-ndesu-3",
        "type": "order",
        "prompt": "Sắp xếp: Tại sao hôm qua bạn lại không đến?",
        "options": [
          "来なかったんですか",
          "どうして昨日は"
        ],
        "answer": "どうして昨日は来なかったんですか",
        "explanation": "Trật tự: どうして昨日は + 来なかったんですか."
      },
      {
        "id": "jlpt-n5-ndesu-4",
        "type": "choice",
        "prompt": "Động từ「行きます」khi chia với んです dạng quá khứ phủ định:",
        "options": [
          "行かなかったんです",
          "行かないんです",
          "行きますんです",
          "行ったではないんです"
        ],
        "answer": "行かなかったんです",
        "explanation": "Thể thông thường quá khứ phủ định: 行かなかった + んです."
      },
      {
        "id": "jlpt-n5-ndesu-5",
        "type": "fill",
        "prompt": "Điền từ giải thích hoàn cảnh: バスが来なかった ___。",
        "answer": "んです",
        "explanation": "Đuôi giải thích hoàn cảnh là んです."
      },
      {
        "id": "jlpt-n5-ndesu-6",
        "type": "order",
        "prompt": "Sắp xếp: Tôi muốn học tiếng Nhật, bạn chỉ giúp tôi được không?",
        "options": [
          "教えていただけませんか",
          "日本語を勉強したいんですが、"
        ],
        "answer": "日本語を勉強したいんですが、教えていただけませんか",
        "explanation": "Trật tự mở đầu nhờ vả: 〜んですが、+ nhờ vả."
      },
      {
        "id": "jlpt-n5-ndesu-7",
        "type": "choice",
        "prompt": "Khi thấy bạn ôm bụng nhăn nhó, câu hỏi thăm tự nhiên nhất là:",
        "options": [
          "どうしたんですか",
          "どうですか",
          "何をしますか",
          "だれですか"
        ],
        "answer": "どうしたんですか",
        "explanation": "Hỏi han tình huống khác thường: どうしたんですか (Bạn bị làm sao thế?)."
      },
      {
        "id": "jlpt-n5-ndesu-8",
        "type": "fill",
        "prompt": "Chia tính từ な「暇」: 今はあまり ___ なんです (không bận/rảnh)。",
        "answer": "暇",
        "explanation": "Tính từ な + なんです: 暇なんです."
      },
      {
        "id": "jlpt-n5-ndesu-9",
        "type": "choice",
        "prompt": "Dạng trang trọng trong văn viết của「〜んです」là gì?",
        "options": [
          "〜のです",
          "〜んです",
          "〜からだ",
          "〜わけだ"
        ],
        "answer": "〜のです",
        "explanation": "Văn viết trang trọng của んです là のです."
      },
      {
        "id": "jlpt-n5-ndesu-10",
        "type": "order",
        "prompt": "Sắp xếp: Vì tôi bị sốt nên xin phép về sớm.",
        "options": [
          "早く帰ってもいいですか",
          "熱があるんです。"
        ],
        "answer": "熱があるんです。早く帰ってもいいですか",
        "explanation": "Trật tự: Đưa lý do んです + Xin phép."
      }
    ]
  },
  {
    "id": "jlpt-n4-hazu",
    "pattern": "〜はずだ・はずがない",
    "title": "Chắc chắn là / Chắc chắn không thể",
    "level": "N4",
    "position": 156,
    "meaning": "【Dạng 1: はずだ】Chắc chắn là (suy luận logic có căn cứ)\n【Dạng 2: はずがない】Làm sao có chuyện... / Chắc chắn không thể nào",
    "formation": "【Dạng 1】Thể thường (V/A/N) + はずだ (Aな + な / N + の)\n【Dạng 2】Thể thường (V/A/N) + はずがない / はずはない",
    "explanation": "【Dạng 1: Khẳng định】Người nói phán đoán dựa trên lý do xác thực, lịch trình định sẵn hoặc logic tất yếu.\n【Dạng 2: Phủ định tuyệt đối】Khẳng định sự việc hoàn toàn không có khả năng xảy ra theo nhận định của người nói.",
    "notes": "Chú thích phân biệt:\n- はずだ: Dự đoán khách quan dựa trên dữ liệu/lý lẽ (anh ấy học giỏi thì chắc chắn đỗ).\n- にちがいない: Suy đoán chủ quan dựa trên linh tính/trực giác mạnh mẽ của bản thân.",
    "mistake": "Cảnh báo lỗi: Danh từ tuyệt đối phải thêm trợ từ の (VD: 日本人のはずだ, không nói 日本人はずだ). Tính từ đuôi な phải giữ な (VD: 暇なはずだ).",
    "related": [
      "mnn-46",
      "jlpt-n5-kamoshirenai"
    ],
    "examples": [
      {
        "ja": "彼は昨日準備したから、知っているはずです。",
        "kana": "かれはきのうじゅんびしたから、しっているはずです。",
        "vi": "Hôm qua anh ấy đã chuẩn bị rồi nên chắc chắn biết điều đó.",
        "readings": {
          "彼": "かれ",
          "昨日": "きのう",
          "準備": "じゅんび",
          "知って": "しって"
        }
      },
      {
        "ja": "そんなはずはありません。嘘でしょう。",
        "kana": "そんなはずはありません。うそでしょう。",
        "vi": "Làm sao có chuyện vô lý như thế được! Chắc chắn là nói dối.",
        "readings": {
          "嘘": "うそ"
        }
      },
      {
        "ja": "真面目な山田さんが約束を破るはずがない。",
        "kana": "まじめなやまださんがやくそくをやぶるはずがない。",
        "vi": "Người nghiêm túc như anh Yamada chắc chắn không thể nào thất hứa.",
        "readings": {
          "真面目": "まじめ",
          "山田": "やまだ",
          "約束": "やくそく",
          "破る": "やぶる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-hazu-1",
        "type": "choice",
        "prompt": "田中さんは英語が得意だから、読める ___ です。",
        "options": [
          "はず",
          "つもり",
          "わけ",
          "そう"
        ],
        "answer": "はず",
        "explanation": "Dựa trên căn cứ chắc chắn: V thể thường + はずです."
      },
      {
        "id": "jlpt-n4-hazu-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối danh từ với はず: 彼は日本人 ___ はずです。",
        "answer": "の",
        "explanation": "Danh từ + の + はずだ: 日本人のはずです."
      },
      {
        "id": "jlpt-n4-hazu-3",
        "type": "order",
        "prompt": "Sắp xếp: Chuyến tàu chắc chắn sẽ đến đúng giờ.",
        "options": [
          "電車は",
          "時間通りに",
          "来る",
          "はずです"
        ],
        "answer": "電車は時間通りに来るはずです",
        "explanation": "Cấu trúc phán đoán: V từ điển + はずです."
      },
      {
        "id": "jlpt-n4-hazu-4",
        "type": "choice",
        "prompt": "彼が犯人の ___ がありません。アリバイがあります。",
        "options": [
          "はず",
          "わけ",
          "こと",
          "もの"
        ],
        "answer": "はず",
        "explanation": "Phủ định chắc chắn không thể: はずがない."
      },
      {
        "id": "jlpt-n4-hazu-5",
        "type": "fill",
        "prompt": "Điền đuôi liên kết tính từ な: この機械の使い方は簡単 ___ はずです。",
        "answer": "な",
        "explanation": "Tính từ な + な + はず: 簡単なはずです."
      },
      {
        "id": "jlpt-n4-hazu-6",
        "type": "choice",
        "prompt": "鍵をポケットに入れた ___ なのに、見つかりません。",
        "options": [
          "はず",
          "よう",
          "そう",
          "ため"
        ],
        "answer": "はず",
        "explanation": "〜はずなのに: đinh ninh chắc chắn đã làm vậy mà thực tế lại khác."
      },
      {
        "id": "jlpt-n4-hazu-7",
        "type": "order",
        "prompt": "Sắp xếp: Hôm nay là chủ nhật nên bưu điện chắc chắn nghỉ.",
        "options": [
          "今日は",
          "日曜日だから",
          "郵便局は",
          "休みなはずです"
        ],
        "answer": "今日は日曜日だから郵便局は休みなはずです",
        "explanation": "Trật tự: Lý do logic + Chủ ngữ + Danh từ tính thái + なはずです."
      },
      {
        "id": "jlpt-n4-hazu-8",
        "type": "choice",
        "prompt": "子供にそんな難しいことが ___ はずがない。",
        "options": [
          "分かる",
          "分かり",
          "分かって",
          "分かろう"
        ],
        "answer": "分かる",
        "explanation": "V thể thường (khẳng định) + はずがない: 分かるはずがない."
      },
      {
        "id": "jlpt-n4-hazu-9",
        "type": "fill",
        "prompt": "Điền dạng phủ định: 来週は試験がない ___ です。（ありません）",
        "answer": "ないはず",
        "explanation": "Không có: ない + はずです = ないはずです."
      },
      {
        "id": "jlpt-n4-hazu-10",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy nhất định không thể nói dối.",
        "options": [
          "彼が",
          "嘘を",
          "つくはずが",
          "ありません"
        ],
        "answer": "彼が嘘をつくはずがありません",
        "explanation": "Trật tự: Chủ ngữ が + Tân ngữ + V + はずがありません."
      }
    ]
  },
  {
    "id": "jlpt-n4-youkamoshirenai",
    "pattern": "〜ようだ・ように",
    "title": "Hình như là / Có vẻ như (trực giác)",
    "level": "N4",
    "position": 157,
    "meaning": "【Dạng 1: ようだ（Suy đoán）】Hình như là, có vẻ như (cảm nhận từ giác quan)\n【Dạng 2: ように（Tỉ dụ / So sánh）】Như là, tựa như là",
    "formation": "【Dạng 1】Thể thường (V/A/N) + ようだ (Aな + な / N + の)\n【Dạng 2】N + のように / V thể thường + ように (hành động như)",
    "explanation": "【Dạng 1: Suy đoán】Diễn tả nhận định phán đoán dựa trên âm thanh, mùi vị, nhiệt độ hoặc quan sát bề ngoài gián tiếp.\n【Dạng 2: So sánh ví von】Ví von đối tượng mang đặc điểm giống như hình tượng được nhắc tới.",
    "notes": "Chú thích phân biệt:\n- ようだ: Suy đoán dựa trên cảm giác trực giác, âm thanh hoặc mùi (VD: Có mùi khét, hình như cháy).\n- そうだ: Nhìn diện mạo tức thời trước mắt (VD: Quả táo trông có vẻ ngọt).\n- らしい: Nghe nguồn tin đồn hoặc bằng chứng khách quan từ bên ngoài.",
    "mistake": "Cảnh báo lỗi: Trước ようだ, danh từ phải thêm の (VD: 雨のようだ, sai: 雨ようだ).",
    "related": [
      "mnn-47",
      "bridge-n3-09"
    ],
    "examples": [
      {
        "ja": "外は風が強くて寒いようです。",
        "kana": "そとはかぜがつよくてさむいようです。",
        "vi": "Bên ngoài gió to, hình như trời lạnh.",
        "readings": {
          "外": "そと",
          "風": "かぜ",
          "強く": "つよく",
          "寒い": "さむい"
        }
      },
      {
        "ja": "誰もいないようです。静かですね。",
        "kana": "だれもいないようです。しずかですね。",
        "vi": "Hình như chẳng có ai ở nhà. Yên ắng quá.",
        "readings": {
          "誰": "だれ",
          "静か": "しずか"
        }
      },
      {
        "ja": "彼女はまるで太陽のように明るい人です。",
        "kana": "かのじょはまるでたいようのようにあかるいひとです。",
        "vi": "Cô ấy là người tươi vui, tỏa sáng hệt như ánh mặt trời.",
        "readings": {
          "彼女": "かのじょ",
          "太陽": "たいよう",
          "明るい": "あかるい",
          "人": "ひと"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-youkamoshirenai-1",
        "type": "choice",
        "prompt": "隣の部屋から声がします。誰か ___ ようです。",
        "options": [
          "いる",
          "いて",
          "いた",
          "います"
        ],
        "answer": "いる",
        "explanation": "Thể thường + ようだ: いるようです."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-2",
        "type": "fill",
        "prompt": "Điền từ nối: 静かですから、彼は親切 ___ ようです。",
        "answer": "な",
        "explanation": "Tính từ đuôi な đi với な trước ようだ: 親切なようです."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-3",
        "type": "order",
        "prompt": "Sắp xếp: Hình như cơn mưa sắp tạnh.",
        "options": [
          "雨が",
          "止む",
          "よう",
          "です"
        ],
        "answer": "雨が止むようです",
        "explanation": "Trật tự suy đoán: V(thể thường) + ようです."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-4",
        "type": "choice",
        "prompt": "外が暗くなってきました。雨が ___ ようです。",
        "options": [
          "降る",
          "降って",
          "降り",
          "降ろう"
        ],
        "answer": "降る",
        "explanation": "V thể từ điển + ようです: 降るようです."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-5",
        "type": "fill",
        "prompt": "Điền từ nối danh từ ví von: 鳥 ___ 自由に空を飛びたい。",
        "answer": "のように",
        "explanation": "So sánh ví von: Danh từ + のように (tựa như cánh chim)."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-6",
        "type": "choice",
        "prompt": "このスープは変な味がします。牛乳が腐って ___ ようです。",
        "options": [
          "いる",
          "ある",
          "みる",
          "おく"
        ],
        "answer": "いる",
        "explanation": "Trạng thái ôi thiu tiếp diễn: 腐っているようです."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-7",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy chạy nhanh tựa như gió vậy.",
        "options": [
          "彼は",
          "風のように",
          "速く",
          "走ります"
        ],
        "answer": "彼は風のように速く走ります",
        "explanation": "Trật tự so sánh: Chủ ngữ + Nのように + Phó từ + V."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-8",
        "type": "choice",
        "prompt": "先生は今日、とてもお忙しい ___ です。",
        "options": [
          "よう",
          "そう",
          "らしい",
          "はず"
        ],
        "answer": "よう",
        "explanation": "Tính từ い + ようです: お忙しいようです."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-9",
        "type": "fill",
        "prompt": "Điền trợ từ danh từ suy đoán: 救急車の音が聞こえます。事故 ___ ようです。",
        "answer": "の",
        "explanation": "N + の + ようだ: 事故のようです (hình như có vụ tai nạn)."
      },
      {
        "id": "jlpt-n4-youkamoshirenai-10",
        "type": "order",
        "prompt": "Sắp xếp: Hình như cuộc họp đã kết thúc rồi.",
        "options": [
          "会議は",
          "もう",
          "終わった",
          "ようです"
        ],
        "answer": "会議はもう終わったようです",
        "explanation": "Trật tự: Chủ ngữ + Đã xong + Quá khứ Vた + ようです."
      }
    ]
  },
  {
    "id": "jlpt-n4-bakari",
    "pattern": "〜たばかり・ばかり",
    "title": "Vừa mới làm xong (cảm giác chủ quan) / Toàn là",
    "level": "N4",
    "position": 158,
    "meaning": "【Dạng 1: Vたばかり】Vừa mới làm xong (cảm giác thời gian chủ quan)\n【Dạng 2: Nばかり / Vてばかり】Toàn là, chỉ toàn làm...",
    "formation": "【Dạng 1】Vた + ばかりだ\n【Dạng 2】N + ばかり / Vて + ばかりいる",
    "explanation": "【Dạng 1】Diễn tả một hành động vừa mới xảy ra theo cảm nhận của người nói (có thể vừa xảy ra vài phút trước, hoặc vài tháng trước nhưng cảm giác vẫn như mới).\n【Dạng 2】Diễn tả số lượng đối tượng quá nhiều lặp đi lặp lại khiến người nói cảm thấy phàn nàn, tiêu cực.",
    "notes": "Chú thích phân biệt:\n- Vたばかり: Cảm giác chủ quan (dù mua xe 3 tháng trước, vẫn nói 買ったばかり).\n- Vたところ: Khoảnh khắc khách quan vừa kết thúc ngay tức thì chỉ vài giây/vài phút trước.",
    "mistake": "Cảnh báo lỗi: Vたばかり đi với động từ thể た. Nばかり đi thẳng với danh từ chỉ số lượng hoặc danh từ đối tượng.",
    "related": [
      "mnn-46",
      "jlpt-n4-tokoro"
    ],
    "examples": [
      {
        "ja": "先月日本に来たばかりなので、まだ慣れていません。",
        "kana": "せんげつにほんにきたばかりなので、まだなれていません。",
        "vi": "Tôi vừa mới sang Nhật tháng trước nên vẫn chưa quen lắm.",
        "readings": {
          "先月": "せんげつ",
          "日本": "にほん",
          "来た": "きた",
          "慣れて": "なれて"
        }
      },
      {
        "ja": "弟は遊んでばかりいて、全然勉強しません。",
        "kana": "おとうとはあそんでばかりいて、ぜんぜんべんきょうしません。",
        "vi": "Em trai tôi toàn lo chơi bời, chẳng chịu học hành gì cả.",
        "readings": {
          "弟": "おとうと",
          "遊んで": "あそんで",
          "全然": "ぜんぜん",
          "勉強": "べんきょう"
        }
      },
      {
        "ja": "この靴は昨日買ったばかりなのに、もう汚れてしまった。",
        "kana": "このくつはきのうかったばかりなのに、もうよごれてしまった。",
        "vi": "Đôi giày này vừa mới mua hôm qua vậy mà đã bẩn mất rồi.",
        "readings": {
          "靴": "くつ",
          "昨日": "きのう",
          "買った": "かった",
          "汚れて": "よごれて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-bakari-1",
        "type": "choice",
        "prompt": "このパソコンは先週 ___ ばかりです。",
        "options": [
          "買った",
          "買う",
          "買っている",
          "買おう"
        ],
        "answer": "買った",
        "explanation": "Vừa mới làm: Vた + ばかり: 買ったばかり."
      },
      {
        "id": "jlpt-n4-bakari-2",
        "type": "fill",
        "prompt": "Điền từ chỉ thói quen tiêu cực: テレビを見て ___ いないで宿題をしなさい。",
        "answer": "ばかり",
        "explanation": "Vて + ばかりいる: Toàn là xem tivi."
      },
      {
        "id": "jlpt-n4-bakari-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi vừa ăn trưa xong nên vẫn còn no.",
        "options": [
          "昼ご飯を",
          "食べた",
          "ばかりなので",
          "お腹がいっぱいです"
        ],
        "answer": "昼ご飯を食べたばかりなのでお腹がいっぱいです",
        "explanation": "Trật tự: Vたばかり + なので + Kết quả."
      },
      {
        "id": "jlpt-n4-bakari-4",
        "type": "choice",
        "prompt": "肉 ___ 食べないで、野菜も食べなさい。",
        "options": [
          "ばかり",
          "ところ",
          "ほど",
          "わけ"
        ],
        "answer": "ばかり",
        "explanation": "N + ばかり: Chỉ toàn ăn thịt."
      },
      {
        "id": "jlpt-n4-bakari-5",
        "type": "fill",
        "prompt": "Điền thể đúng của động từ 入る: 会社に ___ ばかりの新人です。",
        "answer": "入った",
        "explanation": "Vた + ばかり: 入ったばかり (vừa mới vào công ty)."
      },
      {
        "id": "jlpt-n4-bakari-6",
        "type": "choice",
        "prompt": "さっき ___ ばかりなのに、もうお腹が空きました。",
        "options": [
          "食べた",
          "食べる",
          "食べて",
          "食べよう"
        ],
        "answer": "食べた",
        "explanation": "さっき + Vたばかり: vừa mới ăn lúc nãy."
      },
      {
        "id": "jlpt-n4-bakari-7",
        "type": "order",
        "prompt": "Sắp xếp: Em gái suốt ngày chỉ chơi điện tử.",
        "options": [
          "妹は",
          "ゲームをして",
          "ばかり",
          "います"
        ],
        "answer": "妹はゲームをしてばかりいます",
        "explanation": "Trật tự: Chủ ngữ + Tân ngữ + Vて + ばかりいます."
      },
      {
        "id": "jlpt-n4-bakari-8",
        "type": "choice",
        "prompt": "日本に ___ ばかりの時は、日本語が話せませんでした。",
        "options": [
          "来た",
          "来る",
          "来て",
          "来よう"
        ],
        "answer": "来た",
        "explanation": "Vた + ばかりの時: Khi vừa mới tới."
      },
      {
        "id": "jlpt-n4-bakari-9",
        "type": "fill",
        "prompt": "Điền từ còn thiếu: 文句 ___ 言っていないで手伝ってください。",
        "answer": "ばかり",
        "explanation": "N + ばかり: 文句ばかり (toàn là phàn nàn cằn nhằn)."
      },
      {
        "id": "jlpt-n4-bakari-10",
        "type": "order",
        "prompt": "Sắp xếp: Cuốn sách này tôi vừa mới mua ban sáng.",
        "options": [
          "この本は",
          "今朝",
          "買った",
          "ばかりです"
        ],
        "answer": "この本は今朝買ったばかりです",
        "explanation": "Trật tự: Chủ ngữ + Thời gian + Vた + ばかりです."
      }
    ]
  },
  {
    "id": "jlpt-n4-tokoro",
    "pattern": "〜ところだ（Vる・Vている・Vた）",
    "title": "Đúng vào thời điểm (sắp làm / đang làm / vừa làm xong)",
    "level": "N4",
    "position": 159,
    "meaning": "【Dạng 1: Vる＋ところだ】Chuẩn bị làm, sắp sửa làm\n【Dạng 2: Vている＋ところだ】Đang trong lúc làm\n【Dạng 3: Vた＋ところだ】Vừa mới làm xong tức thì",
    "formation": "【Dạng 1】V từ điển + ところだ (thường đi với これから, 今から)\n【Dạng 2】Vている + ところだ (thường đi với 今, ちょうど)\n【Dạng 3】Vた + ところだ (thường đi với たった今)",
    "explanation": "Dùng để nhấn mạnh lát cắt khoảnh khắc cực kỳ chính xác của một hành động theo dòng thời gian tuyến tính.",
    "notes": "Chú thích phân biệt:\n- Vたところだ: Đi kèm たった今 (vừa kết thúc trong nháy mắt vài giây/vài phút).\n- Vたばかりだ: Cảm giác tâm lý của người nói, có thể dùng cho sự việc đã qua một tuần, một tháng.",
    "mistake": "Cảnh báo lỗi: Không dùng Vたところ cho việc đã diễn ra cách đây nhiều ngày.",
    "related": [
      "mnn-46",
      "jlpt-n4-bakari"
    ],
    "examples": [
      {
        "ja": "今から出かけるところです。また後で連絡します。",
        "kana": "いまからでかけるところです。またあとでれんらくします。",
        "vi": "Tôi chuẩn bị ra ngoài bây giờ đây. Lát nữa tôi sẽ liên lạc lại nhé.",
        "readings": {
          "今": "いま",
          "出かける": "でかける",
          "後": "あと",
          "連絡": "れんらく"
        }
      },
      {
        "ja": "今、会議の資料を印刷しているところです。",
        "kana": "いま、かいぎのしりょうをいんさつしているところです。",
        "vi": "Tôi đang trong lúc in tài liệu cuộc họp đây.",
        "readings": {
          "会議": "かいぎ",
          "資料": "しりょう",
          "印刷": "いんさつ"
        }
      },
      {
        "ja": "たった今空港に着いたところです。無事着きました。",
        "kana": "たったいまくうこうについたところです。ぶじつきました。",
        "vi": "Tôi vừa mới đáp xuống sân bay tức thì. Đã đến nơi bình an vô sự.",
        "readings": {
          "今": "いま",
          "空港": "くうこう",
          "着いた": "ついた",
          "無事": "ぶじ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-tokoro-1",
        "type": "choice",
        "prompt": "これからお風呂に ___ ところです。",
        "options": [
          "入る",
          "入った",
          "入っている",
          "入り"
        ],
        "answer": "入る",
        "explanation": "これから (chuẩn bị làm): V từ điển + ところ: 入るところ."
      },
      {
        "id": "jlpt-n4-tokoro-2",
        "type": "fill",
        "prompt": "Điền từ: たった今、荷物が届い ___ ところです。",
        "answer": "た",
        "explanation": "たった今 (vừa mới xong): Vた + ところ: 届いたところ."
      },
      {
        "id": "jlpt-n4-tokoro-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi hiện đang kiểm tra tài liệu.",
        "options": [
          "今、書類を",
          "調べている",
          "ところ",
          "です"
        ],
        "answer": "今、書類を調べているところです",
        "explanation": "Trật tự: Đang làm gì: Vている + ところです."
      },
      {
        "id": "jlpt-n4-tokoro-4",
        "type": "choice",
        "prompt": "今からご飯を ___ ところですから、一緒に食べませんか。",
        "options": [
          "食べる",
          "食べた",
          "食べている",
          "食べ"
        ],
        "answer": "食べる",
        "explanation": "今から: sắp sửa ăn: 食べる + ところ."
      },
      {
        "id": "jlpt-n4-tokoro-5",
        "type": "fill",
        "prompt": "Điền thể đúng của động từ 帰る: たった今、家に ___ ところです。",
        "answer": "帰った",
        "explanation": "たった今: vừa mới về đến nơi: 帰ったところ."
      },
      {
        "id": "jlpt-n4-tokoro-6",
        "type": "choice",
        "prompt": "ちょうど今、彼と電話で ___ ところです。",
        "options": [
          "話している",
          "話す",
          "話した",
          "話そう"
        ],
        "answer": "話している",
        "explanation": "ちょうど今: đang trong lúc nói chuyện: 話しているところ."
      },
      {
        "id": "jlpt-n4-tokoro-7",
        "type": "order",
        "prompt": "Sắp xếp: Tàu điện bây giờ chuẩn bị chuyển bánh.",
        "options": [
          "電車が",
          "今にも",
          "発車する",
          "ところです"
        ],
        "answer": "電車が今にも発車するところです",
        "explanation": "Trật tự: Chủ ngữ + Phó từ sắp sửa + V từ điển + ところです."
      },
      {
        "id": "jlpt-n4-tokoro-8",
        "type": "choice",
        "prompt": "宿題はもう終わりましたか。— いえ、今 ___ ところです。",
        "options": [
          "やっている",
          "やった",
          "やる",
          "やろう"
        ],
        "answer": "やっている",
        "explanation": "Đang làm: 今やっているところです."
      },
      {
        "id": "jlpt-n4-tokoro-9",
        "type": "fill",
        "prompt": "Điền từ: 電車を降り ___ ところで財布がないことに気づいた。",
        "answer": "た",
        "explanation": "Vたところで: đúng khoảnh khắc vừa bước xuống tàu."
      },
      {
        "id": "jlpt-n4-tokoro-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi chuẩn bị gọi điện cho bạn đây.",
        "options": [
          "今からあなたに",
          "電話を",
          "かけようと",
          "していたところです"
        ],
        "answer": "今からあなたに電話をかけようとしていたところです",
        "explanation": "Trật tự: Đang đúng lúc định gọi điện thoại."
      }
    ]
  },
  {
    "id": "jlpt-n4-saseteitadaku",
    "pattern": "〜させていただけませんか",
    "title": "Xin phép đối phương cho mình làm gì (kính ngữ cao)",
    "level": "N4",
    "position": 160,
    "meaning": "【Dạng 1: 〜させてください】Xin hãy cho phép tôi làm...\n【Dạng 2: 〜させていただけませんか】Làm ơn cho phép tôi được làm... có được không ạ?",
    "formation": "V sai khiến (使役) thể て + ください / いただけませんか / もらえませんか\n- Nhóm 1: 書く → 書かせて\n- Nhóm 2: 食べる → 食べさせて\n- Nhóm 3: する → させて / 来る → 来させて",
    "explanation": "Cách diễn đạt cực kỳ lịch thiệp và khiêm tốn khi xin phép cấp trên, đối tác hoặc người lớn tuổi để bản thân mình thực hiện một hành động.",
    "notes": "Chú thích phân biệt:\n- 〜ていただけませんか: Nhờ đối phương làm (VD: Bạn mở cửa giúp tôi được không?).\n- 〜させていただけませんか: Xin phép cho chính bản thân mình làm (VD: Xin phép cho tôi về sớm có được không?).",
    "mistake": "Cảnh báo lỗi: Tuyệt đối tránh nhầm giữa thể て (nhờ người khác làm) và thể sai khiến て (xin phép mình làm).",
    "related": [
      "mnn-48",
      "mnn-50"
    ],
    "examples": [
      {
        "ja": "気分が悪いので、早く帰らせていただけませんか。",
        "kana": "きぶんがわるいので、はやくかえらせていただけませんか。",
        "vi": "Vì trong người không khỏe, làm ơn cho phép tôi về sớm có được không ạ?",
        "readings": {
          "気分": "きぶん",
          "悪い": "わるい",
          "早く": "はやく",
          "帰らせて": "かえらせて"
        }
      },
      {
        "ja": "会議で自己紹介をさせてください。",
        "kana": "かいぎでじこしょうかいをさせてください。",
        "vi": "Xin hãy cho phép tôi được tự giới thiệu trong cuộc họp.",
        "readings": {
          "会議": "かいぎ",
          "自己紹介": "じこしょうかい"
        }
      },
      {
        "ja": "この企画は私に担当させていただけないでしょうか。",
        "kana": "このきかくはわたしにたんとうさせていただけないでしょうか。",
        "vi": "Dự án này, liệu có thể cho phép tôi được đảm nhận phụ trách không ạ?",
        "readings": {
          "企画": "きかく",
          "私": "わたし",
          "担当": "たんとう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-saseteitadaku-1",
        "type": "choice",
        "prompt": "この仕事は私に ___ いただけませんか。",
        "options": [
          "やらせて",
          "やって",
          "やられて",
          "やりまして"
        ],
        "answer": "やらせて",
        "explanation": "Xin phép cho tôi làm: やる → やらせて (sai khiến thể て) + いただけませんか."
      },
      {
        "id": "jlpt-n4-saseteitadaku-2",
        "type": "fill",
        "prompt": "Điền từ sai khiến: 少し休ま ___ いただけませんか。",
        "answer": "せて",
        "explanation": "休む → 休ませる → 休ませて いただけませんか."
      },
      {
        "id": "jlpt-n4-saseteitadaku-3",
        "type": "order",
        "prompt": "Sắp xếp: Xin phép cho tôi chụp một bức ảnh.",
        "options": [
          "写真を",
          "一枚",
          "撮らせて",
          "いただけますか"
        ],
        "answer": "写真を一枚撮らせていただけますか",
        "explanation": "Trật tự kính ngữ xin phép: Tân ngữ + Số lượng + V sai khiến thể て + いただけますか."
      },
      {
        "id": "jlpt-n4-saseteitadaku-4",
        "type": "choice",
        "prompt": "明日の午前中、病院へ行きたいので休 ___ ください。",
        "options": [
          "ませて",
          "んで",
          "まれて",
          "みまして"
        ],
        "answer": "ませて",
        "explanation": "Xin phép nghỉ: 休む → 休ませてください."
      },
      {
        "id": "jlpt-n4-saseteitadaku-5",
        "type": "fill",
        "prompt": "Điền thể sai khiến của する: 質問を ___ いただけませんか。",
        "answer": "させて",
        "explanation": "する → させて: 質問をさせていただけませんか."
      },
      {
        "id": "jlpt-n4-saseteitadaku-6",
        "type": "choice",
        "prompt": "すみません、この電話を ___ もらえませんか。",
        "options": [
          "使わせて",
          "使って",
          "使われて",
          "使いまして"
        ],
        "answer": "使わせて",
        "explanation": "Xin phép sử dụng: 使う → 使わせて + もらえませんか."
      },
      {
        "id": "jlpt-n4-saseteitadaku-7",
        "type": "order",
        "prompt": "Sắp xếp: Xin phép cho tôi được suy nghĩ một chút.",
        "options": [
          "少し",
          "考えさせて",
          "いただけ",
          "ないでしょうか"
        ],
        "answer": "少し考えさせていただけないでしょうか",
        "explanation": "Trật tự: Phó từ + V sai khiến thể て + いただけないでしょうか."
      },
      {
        "id": "jlpt-n4-saseteitadaku-8",
        "type": "choice",
        "prompt": "本日は私がご案内 ___ いただきます。",
        "options": [
          "させて",
          "して",
          "されて",
          "やりまして"
        ],
        "answer": "させて",
        "explanation": "Khiêm nhường ngữ thông báo bản thân đảm nhiệm: ご案内させていただきます."
      },
      {
        "id": "jlpt-n4-saseteitadaku-9",
        "type": "fill",
        "prompt": "Điền thể sai khiến của 読む: その資料を私にも ___ てください。",
        "answer": "読ませ",
        "explanation": "読む → 読ませる → 読ませてください (hãy cho tôi đọc với)."
      },
      {
        "id": "jlpt-n4-saseteitadaku-10",
        "type": "order",
        "prompt": "Sắp xếp: Xin phép cho tôi được nói lời cảm ơn.",
        "options": [
          "一言",
          "お礼を",
          "言わせて",
          "ください"
        ],
        "answer": "一言お礼を言わせてください",
        "explanation": "Trật tự: Phó từ + Tân ngữ + V sai khiến thể て + ください."
      }
    ]
  },
  {
    "id": "jlpt-n4-ba",
    "pattern": "〜ば",
    "title": "Điều kiện giả định mang tính quy luật",
    "level": "N4",
    "position": 166,
    "meaning": "【Dạng 1】Nếu A xảy ra thì B là kết quả tự nhiên (Quy luật)；【Dạng 2】Càng... càng (〜ば〜ほど)；【Dạng 3】Gợi ý nên làm gì (〜ばいい)",
    "formation": "【Dạng 1】Động từ thể điều kiện (Vば)\n・Nhóm 1: Đổi đuôi [u] thành [eba] (行けば、話せば)\n・Nhóm 2: Bỏ る thêm れば (食べれば、見れば)\n・Nhóm 3: すれば、くれば\n【Dạng 2】Tính từ đuôi い: Bỏ い thêm ければ (安ければ)\n【Dạng 3】Tính từ な / Danh từ: なら / であれば",
    "explanation": "Dùng để nêu điều kiện giả định cần thiết để dẫn đến một kết quả tất yếu, logic hoặc đưa ra lời khuyên nên làm gì.",
    "notes": "Chú thích phân biệt: Vế sau của 〜ば thường KHÔNG dùng câu mệnh lệnh hay ý chí của người nói (trừ khi động từ ở vế trước là trạng thái hoặc tính từ). Muốn dùng mệnh lệnh, ý chí thì dùng 〜たら.",
    "mistake": "Tránh dùng 〜ば khi vế sau là hành vi ý chí nếu vế trước là hành động có chủ ý (ví dụ: 日本へ行けば買い物しよう là không tự nhiên, nên dùng 日本へ行ったら買い物しよう).",
    "related": [
      "mnn-35",
      "jlpt-n4-tara"
    ],
    "examples": [
      {
        "ja": "春になれば桜が咲きます。",
        "kana": "はるになればさくらがさきます。",
        "vi": "Hễ mùa xuân đến thì hoa anh đào sẽ nở rộ.",
        "readings": {
          "春": "はる",
          "桜": "さくら",
          "咲きます": "さきます"
        }
      },
      {
        "ja": "安ければ買いたいです。",
        "kana": "やすければかいたいです。",
        "vi": "Nếu giá rẻ thì tôi muốn mua.",
        "readings": {
          "安ければ": "やすければ",
          "買いたい": "かいたい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-ba-1",
        "type": "choice",
        "prompt": "薬を ___ 熱が下がります。",
        "options": [
          "飲めば",
          "飲むば",
          "飲んだらば",
          "飲め"
        ],
        "answer": "飲めば",
        "explanation": "Nhóm 1: 飲みます → 飲めば."
      },
      {
        "id": "jlpt-n4-ba-2",
        "type": "fill",
        "prompt": "Chia tính từ「高い」sang thể điều kiện: ___ 買いません (nếu đắt thì không mua)。",
        "answer": "高ければ",
        "explanation": "Tính từ đuôi い: Bỏ い + ければ → 高ければ."
      },
      {
        "id": "jlpt-n4-ba-3",
        "type": "order",
        "prompt": "Sắp xếp: Nếu chăm chỉ luyện tập thì sẽ trở nên giỏi giang.",
        "options": [
          "上手になります",
          "練習すれば"
        ],
        "answer": "練習すれば上手になります",
        "explanation": "Trật tự: 練習すれば + 上手になります."
      },
      {
        "id": "jlpt-n4-ba-4",
        "type": "choice",
        "prompt": "Động từ「来ます」(đến) chia sang thể ば là gì?",
        "options": [
          "くれば",
          "きれば",
          "こ入れば",
          "くるば"
        ],
        "answer": "くれば",
        "explanation": "Động từ bất quy tắc 来ます chia thành くれば."
      },
      {
        "id": "jlpt-n4-ba-5",
        "type": "fill",
        "prompt": "Chia động từ「急ぎます」: ___ 終電に間に合います (nếu vội thì sẽ kịp)。",
        "answer": "急げば",
        "explanation": "急ぎます → 急げば."
      },
      {
        "id": "jlpt-n4-ba-6",
        "type": "order",
        "prompt": "Sắp xếp: Nếu không hiểu thì bạn nên hỏi giáo viên.",
        "options": [
          "先生に聞いたほうがいいです",
          "分からなければ"
        ],
        "answer": "分からなければ先生に聞いたほうがいいです",
        "explanation": "Trật tự: 分からなければ + 先生に聞いたほうがいいです."
      },
      {
        "id": "jlpt-n4-ba-7",
        "type": "choice",
        "prompt": "Thể điều kiện phủ định của「行きます」là gì?",
        "options": [
          "行かなければ",
          "行けばない",
          "行かなくば",
          "行かないれば"
        ],
        "answer": "行かなければ",
        "explanation": "Phủ định: 行かない → 行かなければ."
      },
      {
        "id": "jlpt-n4-ba-8",
        "type": "fill",
        "prompt": "Điền từ khuyên răn: どう ___ いいですか (Tôi nên làm thế nào bây giờ?)。",
        "answer": "すれば",
        "explanation": "Cụm từ hỏi xin lời khuyên: どうすればいいですか."
      },
      {
        "id": "jlpt-n4-ba-9",
        "type": "choice",
        "prompt": "Mẫu câu「読めば読むほど面白い」mang ý nghĩa gì?",
        "options": [
          "Càng đọc thì lại càng thấy thú vị",
          "Nếu đọc một lần thì thấy thú vị",
          "Đọc xong rồi mới thấy thú vị",
          "Dù không đọc cũng thấy thú vị"
        ],
        "answer": "Càng đọc thì lại càng thấy thú vị",
        "explanation": "Cấu trúc 〜ば〜ほど: Càng... càng..."
      },
      {
        "id": "jlpt-n4-ba-10",
        "type": "order",
        "prompt": "Sắp xếp: Nếu thời tiết đẹp thì chúng ta đi dạo nhé.",
        "options": [
          "散歩しましょう",
          "天気がよければ"
        ],
        "answer": "天気がよければ散歩しましょう",
        "explanation": "Trật tự: 天気がよければ + 散歩しましょう."
      }
    ]
  },
  {
    "id": "jlpt-n4-tara",
    "pattern": "〜たら",
    "title": "Điều kiện giả định & Trình tự hành động",
    "level": "N4",
    "position": 167,
    "meaning": "【Dạng 1】Nếu (Giả định điều kiện: Nếu trời mưa thì ở nhà)；【Dạng 2】Sau khi làm xong A thì làm B (Trình tự thời gian)；【Dạng 3】Khi làm A thì bất ngờ phát hiện ra B",
    "formation": "Động từ/Tính từ thể quá khứ ngắn (thể た) + ら\n・Vた + ら\n・Vなかった + ら\n・Aかった + ら / Aじゃなかった + ら\n・N / Aな だった + ら",
    "explanation": "Là mẫu câu điều kiện linh hoạt và phổ biến nhất trong tiếng Nhật. Có thể dùng cả cho giả định, cả cho việc sau khi hoàn tất điều kiện thì làm hành động tiếp theo, và vế sau thoải mái dùng câu mệnh lệnh, nhờ vả, ý chí.",
    "notes": "Chú thích phân biệt: Khi vế sau là câu rủ rê, mệnh lệnh, xin phép (〜てください, 〜ましょう, 〜たい), bắt buộc dùng 〜たら chứ KHÔNG dùng 〜と hay 〜ば.",
    "mistake": "Tránh nhầm giữa 〜たら mang nghĩa \"sau khi\" với 〜たら mang nghĩa \"giả định nếu\". Ngữ cảnh câu quyết định ý nghĩa.",
    "related": [
      "mnn-25",
      "jlpt-n4-ba"
    ],
    "examples": [
      {
        "ja": "雨が降ったら、出かけません。",
        "kana": "あめがふったら、でかけません。",
        "vi": "Nếu trời mưa thì tôi sẽ không ra ngoài.",
        "readings": {
          "雨": "あめ",
          "降ったら": "ふったら",
          "出かけません": "でかけません"
        }
      },
      {
        "ja": "駅に着いたら、電話してください。",
        "kana": "えきについたら、でんわしてください。",
        "vi": "Sau khi đến nhà ga, hãy gọi điện thoại cho tôi nhé.",
        "readings": {
          "駅": "えき",
          "着いたら": "ついたら",
          "電話": "でんわ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-tara-1",
        "type": "choice",
        "prompt": "家に ___ 、すぐお風呂に入ります。",
        "options": [
          "帰ったら",
          "帰れば",
          "帰ると",
          "帰り"
        ],
        "answer": "帰ったら",
        "explanation": "Sau khi về nhà thì làm B: Vたら."
      },
      {
        "id": "jlpt-n4-tara-2",
        "type": "fill",
        "prompt": "Chia động từ「安いです」với たら: ___ 買いたいです (nếu rẻ)。",
        "answer": "安かったら",
        "explanation": "Tính từ đuôi い thể quá khứ: 安かった + ら."
      },
      {
        "id": "jlpt-n4-tara-3",
        "type": "order",
        "prompt": "Sắp xếp: Nếu có thời gian thì hãy đến chơi nhé.",
        "options": [
          "遊びに来てください",
          "時間があったら"
        ],
        "answer": "時間があったら遊びに来てください",
        "explanation": "Trật tự: 時間があったら + 遊びに来てください."
      },
      {
        "id": "jlpt-n4-tara-4",
        "type": "choice",
        "prompt": "Vế sau có「〜てください」thì mẫu câu điều kiện nào thích hợp nhất?",
        "options": [
          "〜たら",
          "〜と",
          "〜ば",
          "〜なら (cho danh từ)"
        ],
        "answer": "〜たら",
        "explanation": "〜たら kết hợp tự nhiên nhất với câu nhờ vả, mệnh lệnh ở vế sau."
      },
      {
        "id": "jlpt-n4-tara-5",
        "type": "fill",
        "prompt": "Chia động từ「読みます」: この本を ___ 感想を教えてください (đọc xong thì)。",
        "answer": "読んだら",
        "explanation": "読んだ + ら = 読んだら."
      },
      {
        "id": "jlpt-n4-tara-6",
        "type": "order",
        "prompt": "Sắp xếp: Sau khi công việc kết thúc, chúng ta đi uống nhé.",
        "options": [
          "飲みに行きましょう",
          "仕事が終わったら"
        ],
        "answer": "仕事が終わったら飲みに行きましょう",
        "explanation": "Trật tự: 仕事が終わったら + 飲みに行きましょう."
      },
      {
        "id": "jlpt-n4-tara-7",
        "type": "choice",
        "prompt": "Dạng điều kiện quá khứ phủ định của「行きます」là gì?",
        "options": [
          "行かなかったら",
          "行かないたら",
          "行かなかったれば",
          "行かなら"
        ],
        "answer": "行かなかったら",
        "explanation": "Thể quá khứ phủ định: 行かなかった + ら."
      },
      {
        "id": "jlpt-n4-tara-8",
        "type": "fill",
        "prompt": "Chia danh từ「暇」với たら: 明日 ___ 映画を見に行きませんか。",
        "answer": "暇だったら",
        "explanation": "Danh từ/tính từ な + だったら."
      },
      {
        "id": "jlpt-n4-tara-9",
        "type": "choice",
        "prompt": "「窓を開けたら、雪が降っていた」thể hiện ý nghĩa gì?",
        "options": [
          "Khi mở cửa sổ ra thì bất ngờ thấy tuyết đang rơi",
          "Nếu mở cửa sổ thì tuyết sẽ rơi",
          "Hãy mở cửa sổ ra để xem tuyết",
          "Trước khi tuyết rơi tôi đã mở cửa sổ"
        ],
        "answer": "Khi mở cửa sổ ra thì bất ngờ thấy tuyết đang rơi",
        "explanation": "Vたら diễn tả phát hiện bất ngờ sau khi làm một hành động."
      },
      {
        "id": "jlpt-n4-tara-10",
        "type": "order",
        "prompt": "Sắp xếp: Nếu ngày mai trời nắng thì chúng ta đi biển nhé.",
        "options": [
          "海へ行きましょう",
          "明日晴れたら"
        ],
        "answer": "明日晴れたら海へ行きましょう",
        "explanation": "Trật tự: 明日晴れたら + 海へ行きましょう."
      }
    ]
  },
  {
    "id": "jlpt-n4-youda",
    "pattern": "〜ようだ",
    "title": "Dường như / Giống như là",
    "level": "N4",
    "position": 168,
    "meaning": "【Dạng 1】Suy đoán có căn cứ từ giác quan/quan sát (Dường như, hình như)；【Dạng 2】So sánh ví von (Cứ như là...)",
    "formation": "【Dạng 1】Thể thông thường + ようだ / ように / ような N\n・Tính từ な + なようだ\n・Danh từ + のようだ",
    "explanation": "Dùng khi người nói đưa ra phán đoán dựa trên những gì mình trực tiếp cảm nhận qua các giác quan (nhìn, nghe, sờ, ngửi), hoặc dùng để so sánh ví von hình ảnh ví von.",
    "notes": "Chú thích phân biệt: So với そうだ (nhìn bề ngoài trực quan tức thì), ようだ dựa trên sự tổng hợp nhiều giác quan hoặc suy ngẫm logic hơn. Danh từ phải có の (子供のようだ).",
    "mistake": "Quên trợ từ の khi đi kèm danh từ (sai: 子供ようだ; đúng: 子供のようだ).",
    "related": [
      "mnn-43",
      "jlpt-n4-souda-kigou",
      "jlpt-n4-rashii"
    ],
    "examples": [
      {
        "ja": "外は雨が降っているようです。",
        "kana": "そとはあめがふっているようです。",
        "vi": "Bên ngoài dường như trời đang mưa (nhìn thấy người cầm ô).",
        "readings": {
          "外": "そと",
          "雨": "あめ",
          "降っている": "ふっている"
        }
      },
      {
        "ja": "あの人はまるで人形のようです。",
        "kana": "あのひとはまるでにんぎょうのようです。",
        "vi": "Người đó đẹp cứ như là một con búp bê vậy.",
        "readings": {
          "人形": "にんぎょう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-youda-1",
        "type": "choice",
        "prompt": "彼は疲れている ___ です。",
        "options": [
          "よう",
          "そう",
          "らしい",
          "みたい"
        ],
        "answer": "よう",
        "explanation": "Phán đoán dựa trên quan sát: 〜ようです."
      },
      {
        "id": "jlpt-n4-youda-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối với danh từ: 彼女は天使 ___ 優しいです (như thiên thần)。",
        "answer": "のよう",
        "explanation": "Danh từ + のようだ/のように."
      },
      {
        "id": "jlpt-n4-youda-3",
        "type": "order",
        "prompt": "Sắp xếp: Dường như kế hoạch đã bị thay đổi.",
        "options": [
          "計画が変更されたようです",
          "どうやら"
        ],
        "answer": "どうやら計画が変更されたようです",
        "explanation": "Trật tự: どうやら + 計画が変更されたようです."
      },
      {
        "id": "jlpt-n4-youda-4",
        "type": "choice",
        "prompt": "Từ nào sau đây thường đi kèm ở đầu câu để bổ trợ cho so sánh ví von「〜ようだ」?",
        "options": [
          "まるで",
          "けっして",
          "ぜんぜん",
          "おそらく"
        ],
        "answer": "まるで",
        "explanation": "Phó từ まるで đi với 〜ようだ nghĩa là \"cứ như thể là\"."
      },
      {
        "id": "jlpt-n4-youda-5",
        "type": "fill",
        "prompt": "Chia tính từ な「元気」khi bổ nghĩa cho ようだ: 田中さんは ___ なようです。",
        "answer": "元気",
        "explanation": "Tính từ na + な + ようだ: 元気なようです."
      },
      {
        "id": "jlpt-n4-youda-6",
        "type": "order",
        "prompt": "Sắp xếp: Dường như hôm nay anh ấy không đến công ty.",
        "options": [
          "会社に来ないようです",
          "今日は"
        ],
        "answer": "今日は会社に来ないようです",
        "explanation": "Trật tự: 今日は + 会社に来ないようです."
      },
      {
        "id": "jlpt-n4-youda-7",
        "type": "choice",
        "prompt": "Khi「〜ようだ」đứng trước một danh từ để bổ nghĩa, nó biến đổi thành gì?",
        "options": [
          "〜ような N",
          "〜ように N",
          "〜ようなの N",
          "〜ようの N"
        ],
        "answer": "〜ような N",
        "explanation": "Bổ nghĩa cho danh từ: 〜ような + N (ví dụ: 夢のような話)."
      },
      {
        "id": "jlpt-n4-youda-8",
        "type": "fill",
        "prompt": "Điền trợ từ: 氷 ___ 冷たい手 (bàn tay lạnh ngắt như băng)。",
        "answer": "のように",
        "explanation": "Bổ nghĩa cho tính từ/động từ: N + のように."
      },
      {
        "id": "jlpt-n4-youda-9",
        "type": "choice",
        "prompt": "「部屋の電気が消えている。誰もいないようだ」thể hiện căn cứ gì?",
        "options": [
          "Quan sát thấy đèn tắt nên suy đoán không có ai ở nhà",
          "Nghe người khác kể lại",
          "Chắc chắn 100% bằng chứng",
          "Mong muốn không ai ở nhà"
        ],
        "answer": "Quan sát thấy đèn tắt nên suy đoán không có ai ở nhà",
        "explanation": "Căn cứ trực quan dẫn đến phán đoán."
      },
      {
        "id": "jlpt-n4-youda-10",
        "type": "order",
        "prompt": "Sắp xếp: Cuộc đời cứ như một bộ phim truyền hình vậy.",
        "options": [
          "人生はドラマのようです",
          "まるで"
        ],
        "answer": "まるで人生はドラマのようです",
        "explanation": "Trật tự: まるで + 人生はドラマのようです."
      }
    ]
  },
  {
    "id": "jlpt-n4-souda-kigou",
    "pattern": "〜そうだ",
    "title": "Phỏng đoán & Truyền văn",
    "level": "N4",
    "position": 169,
    "meaning": "【Dạng 1】Phỏng đoán thị giác: Trông có vẻ / Sắp sửa xảy ra (Vます bỏ ます / Tính từ bỏ đuôi + そうだ)；【Dạng 2】Truyền văn: Nghe nói là (Thể thông thường + そうだ)",
    "formation": "【Dạng 1: Phỏng đoán】\n・V thân ます + そうだ (降る → 降りそうだ)\n・Aい (bỏ い) + そうだ (おいしい → おいしそうだ)\n・Aな (bỏ な) + そうだ\n【Dạng 2: Truyền văn】\n・Thể thông thường (V/A/N) + そうだ",
    "explanation": "Có 2 dạng hoàn toàn khác nhau cần phân biệt sâu sắc: Dạng 1 là nhìn bằng mắt thấy có vẻ sắp xảy ra hoặc có tính chất đó; Dạng 2 là dẫn lại lời kể hay thông tin đọc/nghe được từ nguồn khác.",
    "notes": "Chú thích phân biệt: Dạng 1 phủ định là 〜そうにない hoặc 〜そうではない; Dạng 2 không có dạng phủ định của そうだ mà phủ định ở vế trước (〜ないそうだ). Ngoại lệ Dạng 1: いい → よさそうだ; ない → なさそうだ.",
    "mistake": "Tránh nhầm lẫn cách nối: おいしそうだ (Trông ngon mắt - Dạng 1) vs おいしいそうだ (Nghe nói ngon lắm - Dạng 2).",
    "related": [
      "mnn-43",
      "mnn-47",
      "jlpt-n4-youda"
    ],
    "examples": [
      {
        "ja": "雨が今にも降りそうです。",
        "kana": "あめがいまにもふりそうです。",
        "vi": "Trời trông có vẻ sắp mưa đến nơi rồi.",
        "readings": {
          "雨": "あめ",
          "今にも": "いまにも",
          "降りそう": "ふりそう"
        }
      },
      {
        "ja": "天気予報によると、明日は晴れるそうです。",
        "kana": "てんきよほうによると、あしたははれるそうです。",
        "vi": "Theo dự báo thời tiết thì ngày mai nghe nói sẽ có nắng.",
        "readings": {
          "天気予報": "てんきよほう",
          "晴れる": "はれる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-souda-kigou-1",
        "type": "choice",
        "prompt": "今にも雨が ___ そうです。",
        "options": [
          "降り",
          "降る",
          "降って",
          "降った"
        ],
        "answer": "降り",
        "explanation": "Phỏng đoán thị giác: Động từ bỏ ます → 降りそうだ."
      },
      {
        "id": "jlpt-n4-souda-kigou-2",
        "type": "fill",
        "prompt": "Điền thể đúng của「おいしい」với nghĩa \"Trông có vẻ ngon\": このケーキはとても ___ そうです。",
        "answer": "おいし",
        "explanation": "Tính từ đuôi い bỏ い: おいし + そうです."
      },
      {
        "id": "jlpt-n4-souda-kigou-3",
        "type": "order",
        "prompt": "Sắp xếp: Nghe nói ngày mai tuyết sẽ rơi.",
        "options": [
          "雪が降るそうです",
          "明日は"
        ],
        "answer": "明日は雪が降るそうです",
        "explanation": "Truyền văn: Thể từ điển + そうです."
      },
      {
        "id": "jlpt-n4-souda-kigou-4",
        "type": "choice",
        "prompt": "Tính từ「いい」khi chuyển sang dạng phỏng đoán \"Trông có vẻ tốt\" sẽ là:",
        "options": [
          "よさそうだ",
          "いいそうだ",
          "いさそうだ",
          "よいそうだ"
        ],
        "answer": "よさそうだ",
        "explanation": "Ngoại lệ đặc biệt của いい là よさそうだ."
      },
      {
        "id": "jlpt-n4-souda-kigou-5",
        "type": "fill",
        "prompt": "Điền từ chỉ nguồn tin truyền văn: ニュースに ___ 、大きな地震があったそうです。",
        "answer": "よると",
        "explanation": "〜によると: Theo nguồn tin..."
      },
      {
        "id": "jlpt-n4-souda-kigou-6",
        "type": "order",
        "prompt": "Sắp xếp: Cái nút áo này trông như sắp đứt rơi ra.",
        "options": [
          "ボタンが落ちそうです",
          "この"
        ],
        "answer": "このボタンが落ちそうです",
        "explanation": "Trật tự: このボタンが落ちそうです."
      },
      {
        "id": "jlpt-n4-souda-kigou-7",
        "type": "choice",
        "prompt": "Phân biệt:「田中さんは結婚するそうです」có nghĩa là gì?",
        "options": [
          "Nghe nói anh Tanaka sắp kết hôn",
          "Nhìn bề ngoài anh Tanaka giống như sắp cưới",
          "Anh Tanaka muốn kết hôn",
          "Tôi khuyên anh Tanaka kết hôn"
        ],
        "answer": "Nghe nói anh Tanaka sắp kết hôn",
        "explanation": "Thể thông thường + そうです = Nghe nói là (truyền văn)."
      },
      {
        "id": "jlpt-n4-souda-kigou-8",
        "type": "fill",
        "prompt": "Điền thể phủ định của phỏng đoán: 雨は降り ___ にない (khó có vẻ mưa)。",
        "answer": "そう",
        "explanation": "Phủ định phỏng đoán: Vます(bỏ ます) + そうにない."
      },
      {
        "id": "jlpt-n4-souda-kigou-9",
        "type": "choice",
        "prompt": "Câu nào sau đây là câu truyền văn (nghe nói lại)?",
        "options": [
          "先生は明日休みだそうです",
          "先生は忙しそうです",
          "荷物が落ちそうです",
          "寒そうな顔をしている"
        ],
        "answer": "先生は明日休みだそうです",
        "explanation": "Danh từ + だそうです là truyền văn."
      },
      {
        "id": "jlpt-n4-souda-kigou-10",
        "type": "order",
        "prompt": "Sắp xếp: Nghe nói giá vé máy bay sắp tăng.",
        "options": [
          "航空券が高くなるそうです",
          "来月から"
        ],
        "answer": "来月から航空券が高くなるそうです",
        "explanation": "Trật tự: 来月から + 航空券が高くなるそうです."
      }
    ]
  },
  {
    "id": "jlpt-n4-tameni",
    "pattern": "〜ために",
    "title": "Vì mục đích / Vì nguyên nhân",
    "level": "N4",
    "position": 170,
    "meaning": "【Dạng 1】Để đạt được mục đích (Hành động có ý chí: Vるために / Nのために)；【Dạng 2】Vì lý do, nguyên nhân khách quan (Sự cố, thiên tai: Nのために / Vたために)",
    "formation": "【Dạng 1: Mục đích】V thể từ điển (Vる) / N の + ために (Vế sau có ý chí)\n【Dạng 2: Nguyên nhân】V thể thông thường / Tính từ / N の + ために (Vế sau thường là kết quả)",
    "explanation": "Dùng để diễn tả mục đích phấn đấu thực hiện hành động, hoặc diễn tả nguyên nhân khách quan dẫn đến kết quả.",
    "notes": "Chú thích phân biệt: Khi chỉ mục đích, cả hai vế của 〜ために đều phải cùng một chủ thể và động từ trước ために là ĐỘNG TỪ CÓ Ý CHÍ. Khác với 〜ように (trước ように là động từ không có ý chí hoặc thể khả năng).",
    "mistake": "Không dùng động từ thể khả năng trước ために để chỉ mục đích (sai: 見えるために; đúng: 見えるように; hoặc 見るために).",
    "related": [
      "mnn-42",
      "jlpt-n4-younisuru"
    ],
    "examples": [
      {
        "ja": "将来自分の店を持つために、貯金しています。",
        "kana": "しょうらいじぶんのみせをもつために、ちょきんしています。",
        "vi": "Tôi đang tiết kiệm tiền để tương lai có thể mở cửa hàng của riêng mình.",
        "readings": {
          "将来": "しょうらい",
          "自分": "じぶん",
          "店": "みせ",
          "持つ": "もつ",
          "貯金": "ちょきん"
        }
      },
      {
        "ja": "大雨のために電車が遅れました。",
        "kana": "おおあめのていんででんしゃがおくれました。",
        "vi": "Vì mưa lớn nên tàu điện đã bị chậm trễ.",
        "readings": {
          "大雨": "おおあめ",
          "電車": "でんしゃ",
          "遅れました": "おくれました"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-tameni-1",
        "type": "choice",
        "prompt": "家を ___ ために、一生懸命働きます。",
        "options": [
          "買う",
          "買った",
          "買わない",
          "買い"
        ],
        "answer": "買う",
        "explanation": "Chỉ mục đích hành động: Động từ thể từ điển (Vる) + ために."
      },
      {
        "id": "jlpt-n4-tameni-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối với danh từ: 健康 ___ ために毎朝ジョギングをしています。",
        "answer": "の",
        "explanation": "Danh từ + のために: Vì sức khỏe."
      },
      {
        "id": "jlpt-n4-tameni-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi học tiếng Nhật để sang Nhật Bản du học.",
        "options": [
          "日本語を勉強しています",
          "留学するために",
          "日本へ"
        ],
        "answer": "日本へ留学するために日本語を勉強しています",
        "explanation": "Trật tự: Mục đích + ために + Hành động."
      },
      {
        "id": "jlpt-n4-tameni-4",
        "type": "choice",
        "prompt": "Phân biệt: Câu nào sau đây dùng ĐÚNG cấu trúc chỉ mục đích「ために」?",
        "options": [
          "日本へ行くためにビザを取った",
          "日本語が話せるために練習する",
          "試験に合格できるために勉強する",
          "早く治るために薬を飲む"
        ],
        "answer": "日本へ行くためにビザを取った",
        "explanation": "Đi trước ために phải là động từ ý chí (行く). Động từ khả năng (話せる, できる) phải đi với ように."
      },
      {
        "id": "jlpt-n4-tameni-5",
        "type": "fill",
        "prompt": "Điền từ chỉ nguyên nhân: 事故の ___ 道が渋滞しています。",
        "answer": "ため",
        "explanation": "N のため(に): Vì tai nạn giao thông."
      },
      {
        "id": "jlpt-n4-tameni-6",
        "type": "order",
        "prompt": "Sắp xếp: Vì bão lớn nên tất cả các chuyến bay đều bị hủy.",
        "options": [
          "全便が欠航になった",
          "台風のために"
        ],
        "answer": "台風のために全便が欠航になった",
        "explanation": "Trật tự: Nguyên nhân + ために + Hậu quả."
      },
      {
        "id": "jlpt-n4-tameni-7",
        "type": "choice",
        "prompt": "「家族のために毎日頑張って働いています」nghĩa là gì?",
        "options": [
          "Tôi cố gắng làm việc mỗi ngày vì gia đình",
          "Gia đình bảo tôi làm việc",
          "Tôi không muốn làm việc cho gia đình",
          "Gia đình làm việc giúp tôi"
        ],
        "answer": "Tôi cố gắng làm việc mỗi ngày vì gia đình",
        "explanation": "家族のために: Vì gia đình thân yêu."
      },
      {
        "id": "jlpt-n4-tameni-8",
        "type": "fill",
        "prompt": "Chia động từ「買います」: 車を ___ ためにお金を貯めている。",
        "answer": "買う",
        "explanation": "買う + ために: Để mua xe."
      },
      {
        "id": "jlpt-n4-tameni-9",
        "type": "choice",
        "prompt": "Vế trước「〜ために」chỉ mục đích KHÔNG ĐƯỢC LÀ dạng động từ nào?",
        "options": [
          "Động từ thể khả năng (話せる, 見える)",
          "Động từ hành động ý chí (行く, 買う)",
          "Danh từ chỉ người/vật (家族の)",
          "Động từ nhóm 3 (勉強する)"
        ],
        "answer": "Động từ thể khả năng (話せる, 見える)",
        "explanation": "Động từ thể khả năng không đi với ために."
      },
      {
        "id": "jlpt-n4-tameni-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi mua máy tính xách tay để dùng cho công việc.",
        "options": [
          "パソコンを買いました",
          "仕事のために"
        ],
        "answer": "仕事のためにパソコンを買いました",
        "explanation": "Trật tự: 仕事のために + パソコンを買いました."
      }
    ]
  },
  {
    "id": "jlpt-n4-shishi",
    "pattern": "〜し、〜し",
    "title": "Liệt kê nhiều lý do",
    "level": "N4",
    "position": 171,
    "meaning": "【Dạng 1】Liệt kê từ 2 lý do trở lên để đi đến một kết luận；【Dạng 2】Bổ sung nhiều đặc điểm, ưu điểm hoặc nhược điểm",
    "formation": "Thể thông thường (V/A/N) + し、〜 (Tính từ na / Danh từ + だし)",
    "explanation": "Dùng để liệt kê nhiều nguyên nhân, lý do cùng lúc dẫn đến nhận định, quyết định ở vế cuối câu, hoặc liệt kê nhiều phẩm chất song song.",
    "notes": "Chú thích phân biệt: So với から (chỉ 1 lý do cụ thể duy nhất), 〜し hàm ý \"không chỉ có lý do này mà còn có những lý do khác nữa\".",
    "mistake": "Quên thêm だ sau danh từ và tính từ な (sai: 親切し; đúng: 親切だし).",
    "related": [
      "mnn-28"
    ],
    "examples": [
      {
        "ja": "この店は料理もおいしいし、値段も安いし、いつも混んでいます。",
        "kana": "このみせはりょうりもおおいしいし、ねだんもやすいし、いつもこんでいます。",
        "vi": "Quán này thức ăn vừa ngon, giá lại vừa rẻ, thảo nào lúc nào cũng đông khách.",
        "readings": {
          "料理": "りょうり",
          "値段": "ねだん",
          "安い": "やすい",
          "混んで": "こんで"
        }
      },
      {
        "ja": "頭も痛いし、熱もあるし、今日は休みます。",
        "kana": "あたまもいたいし、ねつもあるし、きょうはやすみます。",
        "vi": "Đầu thì đau, sốt thì có, nên hôm nay tôi xin phép nghỉ.",
        "readings": {
          "頭": "あたま",
          "痛い": "いたい",
          "熱": "ねつ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-shishi-1",
        "type": "choice",
        "prompt": "駅からも ___ 、家賃も安いし、このアパートに決めました。",
        "options": [
          "近いし",
          "近くだし",
          "近くてし",
          "近いに"
        ],
        "answer": "近いし",
        "explanation": "Tính từ đuôi い đi trực tiếp với し: 近いし."
      },
      {
        "id": "jlpt-n4-shishi-2",
        "type": "fill",
        "prompt": "Chia tính từ な「親切」với し: 先生は優しいし、___ だし、大人気です。",
        "answer": "親切",
        "explanation": "Tính từ đuôi な + だし: 親切だし."
      },
      {
        "id": "jlpt-n4-shishi-3",
        "type": "order",
        "prompt": "Sắp xếp: Trời vừa mưa gió lại vừa lạnh nên tôi không ra ngoài.",
        "options": [
          "出かけません",
          "寒いし、",
          "雨も降っているし、"
        ],
        "answer": "雨も降っているし、寒いし、出かけません",
        "explanation": "Trật tự: Lý do 1 し + Lý do 2 し + Kết luận."
      },
      {
        "id": "jlpt-n4-shishi-4",
        "type": "choice",
        "prompt": "Sau danh từ「日曜日」kết hợp với「し」như thế nào?",
        "options": [
          "日曜日だし",
          "日曜日し",
          "日曜日なし",
          "日曜日のし"
        ],
        "answer": "日曜日だし",
        "explanation": "Danh từ + だし: 日曜日だし."
      },
      {
        "id": "jlpt-n4-shishi-5",
        "type": "fill",
        "prompt": "Điền từ nối: 荷物も多い ___ 、タクシーで行きましょう。",
        "answer": "し",
        "explanation": "Nêu lý do gợi ý: 多いし."
      },
      {
        "id": "jlpt-n4-shishi-6",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy vừa thông minh lại vừa hát hay.",
        "options": [
          "歌もうまいです",
          "頭もいいし、",
          "彼は"
        ],
        "answer": "彼は頭もいいし、歌もうまいです",
        "explanation": "Trật tự: 彼は + 頭もいいし、+ 歌もうまいです."
      },
      {
        "id": "jlpt-n4-shishi-7",
        "type": "choice",
        "prompt": "Điểm khác biệt chính giữa「〜し」và「〜から」là gì?",
        "options": [
          "〜し ngụ ý ngoài lý do này còn có nhiều lý do khác",
          "〜し chỉ dùng cho 1 lý do duy nhất",
          "〜し chỉ dùng trong văn viết",
          "〜し luôn đi kèm xin lỗi"
        ],
        "answer": "〜し ngụ ý ngoài lý do này còn có nhiều lý do khác",
        "explanation": "〜し mang tính liệt kê song song nhiều lý do."
      },
      {
        "id": "jlpt-n4-shishi-8",
        "type": "fill",
        "prompt": "Chia động từ「疲れます」với し: 今日は ___ し、早く寝よう (hôm nay mệt quá)。",
        "answer": "疲れた",
        "explanation": "Thể quá khứ: 疲れたし."
      },
      {
        "id": "jlpt-n4-shishi-9",
        "type": "choice",
        "prompt": "「お腹もすいたし、何か食べよう」thể hiện điều gì?",
        "options": [
          "Bụng thì đói nên rủ đi ăn gì đó",
          "Không đói bụng nhưng vẫn ăn",
          "Đã ăn no rồi",
          "Không muốn ăn gì cả"
        ],
        "answer": "Bụng thì đói nên rủ đi ăn gì đó",
        "explanation": "Đưa ra lý do bụng đói rồi rủ rê."
      },
      {
        "id": "jlpt-n4-shishi-10",
        "type": "order",
        "prompt": "Sắp xếp: Thiết kế đẹp, lại nhẹ nên chiếc máy tính này bán rất chạy.",
        "options": [
          "よく売れています",
          "デザインもいいし、軽いし、"
        ],
        "answer": "デザインもいいし、軽いし、よく売れています",
        "explanation": "Trật tự: Liệt kê ưu điểm + Kết quả tiêu thụ tốt."
      }
    ]
  },
  {
    "id": "jlpt-n4-rashii",
    "pattern": "〜らしい",
    "title": "Dường như / Đậm chất",
    "level": "N4",
    "position": 172,
    "meaning": "【Dạng 1】Suy đoán qua thông tin gián tiếp/nghe kể (Nghe đồn dường như là)；【Dạng 2】Đậm chất, ra dáng bản chất của danh từ (Đúng chất đàn ông, ra dáng học sinh)",
    "formation": "【Dạng 1】Thể thông thường (V/A/N bỏ だ) + らしい\n【Dạng 2】Danh từ + らしい / らしく",
    "explanation": "Dùng khi phán đoán dựa trên tin đồn hoặc nguồn tin gián tiếp nghe được từ người khác; hoặc dùng sau danh từ để khen ngợi/nhận xét ai đó mang đầy đủ bản chất điển hình vốn có của danh từ đó.",
    "notes": "Chú thích phân biệt: Ở Dạng 2 (Nらしい), chỉ dùng khi đối tượng THỰC SỰ là danh từ đó (ví dụ 男らしい: người đàn ông thực sự mang nét nam tính; khác với 男のよう: cô gái trông giống đàn ông).",
    "mistake": "Không thêm だ sau danh từ hay tính từ な trước らしい (sai: 雨だらしい; đúng: 雨らしい).",
    "related": [
      "jlpt-n4-youda",
      "jlpt-n4-souda-kigou"
    ],
    "examples": [
      {
        "ja": "噂によると、田中さんは会社を辞めるらしいです。",
        "kana": "うわさによると、たなかさんはかいしゃをやめるらしいです。",
        "vi": "Theo lời đồn thì nghe đâu anh Tanaka dường như sắp nghỉ việc.",
        "readings": {
          "噂": "うわさ",
          "田中": "たなか",
          "辞める": "やめる"
        }
      },
      {
        "ja": "今日は春らしい暖かい一日ですね。",
        "kana": "きょうははるらしいあたたかいいちにちですね。",
        "vi": "Hôm nay đúng là một ngày ấm áp đậm chất mùa xuân nhỉ.",
        "readings": {
          "春らしい": "はるらしい",
          "暖かい": "あたたかい",
          "一日": "いちにち"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-rashii-1",
        "type": "choice",
        "prompt": "ニュースによると、明日は台風が ___ らしいです。",
        "options": [
          "来る",
          "来ます",
          "来て",
          "来"
        ],
        "answer": "来る",
        "explanation": "Thể thông thường + らしい: 来るらしい."
      },
      {
        "id": "jlpt-n4-rashii-2",
        "type": "fill",
        "prompt": "Điền từ chỉ bản chất: 男なら、男 ___ 堂々と話しなさい (đậm chất đàn ông)。",
        "answer": "らしく",
        "explanation": "Bổ nghĩa cho động từ: N + らしく (男らしく)."
      },
      {
        "id": "jlpt-n4-rashii-3",
        "type": "order",
        "prompt": "Sắp xếp: Nghe đâu kỳ thi lần này khá khó.",
        "options": [
          "今度の試験は",
          "かなり難しいらしいです"
        ],
        "answer": "今度の試験はかなり難しいらしいです",
        "explanation": "Trật tự: 今度の試験は + かなり難しいらしいです."
      },
      {
        "id": "jlpt-n4-rashii-4",
        "type": "choice",
        "prompt": "Khác biệt giữa「子供のようだ」và「子供らしい」là gì?",
        "options": [
          "子供らしい dùng cho chính đứa trẻ cư xử đúng lứa tuổi, còn 子供のようだ ví von người lớn như trẻ con",
          "Cả hai hoàn toàn giống nhau",
          "子供らしい dùng cho người già",
          "子供のようだ mang nghĩa xấu"
        ],
        "answer": "子供らしい dùng cho chính đứa trẻ cư xử đúng lứa tuổi, còn 子供のようだ ví von người lớn như trẻ con",
        "explanation": "Nらしい: Đúng chất bản chất vốn có của đối tượng."
      },
      {
        "id": "jlpt-n4-rashii-5",
        "type": "fill",
        "prompt": "Kết hợp danh từ「雨」với らしい: 午後は ___ らしいよ (nghe đâu trời mưa đấy)。",
        "answer": "雨",
        "explanation": "Danh từ đi trực tiếp không có だ: 雨らしい."
      },
      {
        "id": "jlpt-n4-rashii-6",
        "type": "order",
        "prompt": "Sắp xếp: Nghe đâu cửa hàng mới kia rất đông khách.",
        "options": [
          "とても人気があるらしいです",
          "あの新しい店は"
        ],
        "answer": "あの新しい店はとても人気があるらしいです",
        "explanation": "Trật tự: あの新しい店は + とても人気があるらしいです."
      },
      {
        "id": "jlpt-n4-rashii-7",
        "type": "choice",
        "prompt": "Dạng phủ định của らしい chia như thế nào?",
        "options": [
          "〜らしくない",
          "〜らしいではない",
          "〜らしいくない",
          "〜らしかったない"
        ],
        "answer": "〜らしくない",
        "explanation": "らしい chia như tính từ đuôi い: 〜らしくない."
      },
      {
        "id": "jlpt-n4-rashii-8",
        "type": "fill",
        "prompt": "Điền đuôi: 学生なら、学生 ___ 勉強しなさい (ra dáng học sinh)。",
        "answer": "らしく",
        "explanation": "学生らしく: Đúng phong cách học sinh."
      },
      {
        "id": "jlpt-n4-rashii-9",
        "type": "choice",
        "prompt": "「先生は明日出張らしいです」dựa trên căn cứ nào?",
        "options": [
          "Nghe thông tin truyền tai/lịch công tác",
          "Trực tiếp nhìn thấy thầy đang trên máy bay",
          "Phỏng đoán vô căn cứ",
          "Mong muốn thầy đi công tác"
        ],
        "answer": "Nghe thông tin truyền tai/lịch công tác",
        "explanation": "らしい dựa trên thông tin gián tiếp đáng tin cậy."
      },
      {
        "id": "jlpt-n4-rashii-10",
        "type": "order",
        "prompt": "Sắp xếp: Bạn ấy cư xử không đúng chất của bản thân chút nào.",
        "options": [
          "らしくない態度です",
          "彼"
        ],
        "answer": "彼らしくない態度です",
        "explanation": "Trật tự: 彼らしくない態度です."
      }
    ]
  },
  {
    "id": "jlpt-n4-teshimau",
    "pattern": "〜てしまう",
    "title": "Lỡ làm việc gì & Hoàn tất toàn bộ",
    "level": "N4",
    "position": 173,
    "meaning": "【Dạng 1】Lỡ làm điều gì đáng tiếc, không cứu vãn được (Hối hận, tiếc nuối)；【Dạng 2】Đã hoàn thành toàn bộ công việc một cách triệt để",
    "formation": "Động từ thể て + しまう / しまいました (Trong văn nói: 〜ちゃう / 〜じゃう)",
    "explanation": "Có 2 sắc thái nghĩa: Một là sự tiếc nuối, hối hận vì một chuyện không may đã lỡ xảy ra; hai là sự hoàn tất trọn vẹn dứt điểm một hành động nào đó.",
    "notes": "Chú thích phân biệt: Trong hội thoại thân mật hàng ngày, 〜てしまう biến thành 〜ちゃう (ví dụ: 食べちゃう), còn 〜でしまう biến thành 〜じゃう (ví dụ: 飲んじゃう).",
    "mistake": "Tránh dùng 〜てしまう với những việc vui vẻ may mắn trừ phi muốn nhấn mạnh tính hoàn thành triệt để.",
    "related": [
      "mnn-29"
    ],
    "examples": [
      {
        "ja": "電車の中に財布を忘れてしまいました。",
        "kana": "でんしゃのなかにさいふをわすれてしまいました。",
        "vi": "Tôi đã lỡ để quên chiếc ví ở trên tàu điện mất rồi (tiếc nuối).",
        "readings": {
          "電車": "でんしゃ",
          "財布": "さいふ",
          "忘れてしまいました": "わすれてしまいました"
        }
      },
      {
        "ja": "宿題はもう全部やってしまいました。",
        "kana": "しゅくだいはもうぜんぶやってしまいました。",
        "vi": "Tôi đã hoàn thành xong sạch sẽ toàn bộ bài tập rồi (hoàn tất).",
        "readings": {
          "宿題": "しゅくだい",
          "全部": "ぜんぶ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-teshimau-1",
        "type": "choice",
        "prompt": "大事な書類を失くして ___。",
        "options": [
          "しまいました",
          "ありました",
          "おきました",
          "みました"
        ],
        "answer": "しまいました",
        "explanation": "Lỡ làm mất tài liệu quan trọng: 失くしてしまいました."
      },
      {
        "id": "jlpt-n4-teshimau-2",
        "type": "fill",
        "prompt": "Điền từ tiếc nuối: 道で転んで ___ (lỡ ngã nhào trên đường)。",
        "answer": "しまった",
        "explanation": "転んで + しまった."
      },
      {
        "id": "jlpt-n4-teshimau-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi đã lỡ uống hết cốc nước ép của em gái.",
        "options": [
          "飲んでしまいました",
          "妹のジュースを"
        ],
        "answer": "妹のジュースを飲んでしまいました",
        "explanation": "Trật tự: 妹のジュースを + 飲んでしまいました."
      },
      {
        "id": "jlpt-n4-teshimau-4",
        "type": "choice",
        "prompt": "Dạng văn nói thân mật của「食べてしまいました」là gì?",
        "options": [
          "食べちゃった",
          "食べじゃった",
          "食べちゃいました",
          "食べちゃったです"
        ],
        "answer": "食べちゃった",
        "explanation": "〜てしまった chuyển thành 〜ちゃった trong khẩu ngữ."
      },
      {
        "id": "jlpt-n4-teshimau-5",
        "type": "fill",
        "prompt": "Dạng văn nói của「飲んでしまった」: 全部飲ん ___ (uống sạch mất rồi)。",
        "answer": "じゃった",
        "explanation": "〜でしまった chuyển thành 〜じゃった."
      },
      {
        "id": "jlpt-n4-teshimau-6",
        "type": "order",
        "prompt": "Sắp xếp: Cuốn sách này hay quá nên tôi đã đọc xong sạch trong một ngày.",
        "options": [
          "一日で読んでしまいました",
          "この本は"
        ],
        "answer": "この本は一日で読んでしまいました",
        "explanation": "Trật tự: この本は + 一日で読んでしまいました."
      },
      {
        "id": "jlpt-n4-teshimau-7",
        "type": "choice",
        "prompt": "Câu「鍵を落としてしまいました」thể hiện cảm xúc gì của người nói?",
        "options": [
          "Hối tiếc, lo lắng vì lỡ đánh rơi chìa khóa",
          "Vui mừng vì mất chìa khóa",
          "Chủ ý vứt chìa khóa",
          "Nhờ ai đó tìm chìa khóa"
        ],
        "answer": "Hối tiếc, lo lắng vì lỡ đánh rơi chìa khóa",
        "explanation": "Hối tiếc về một sự việc không may."
      },
      {
        "id": "jlpt-n4-teshimau-8",
        "type": "fill",
        "prompt": "Hoàn thành câu hoàn tất: 今日の仕事は午前中に終えて ___ (hoàn thành dứt điểm)。",
        "answer": "しまおう",
        "explanation": "Thể ý chí: 終えてしまおう."
      },
      {
        "id": "jlpt-n4-teshimau-9",
        "type": "choice",
        "prompt": "Điền từ thích hợp: 遅刻しそうだから、走って ___ (chạy luôn cho rồi):",
        "options": [
          "しまおう",
          "おこう",
          "みよう",
          "あろう"
        ],
        "answer": "しまおう",
        "explanation": "Chạy luôn đi: 走ってしまおう."
      },
      {
        "id": "jlpt-n4-teshimau-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi lỡ ngủ quên mất nên đã muộn cuộc hẹn.",
        "options": [
          "約束に遅れました",
          "寝坊してしまって、"
        ],
        "answer": "寝坊してしまって、約束に遅れました",
        "explanation": "Trật tự: 寝坊してしまって、+ 約束に遅れました."
      }
    ]
  },
  {
    "id": "jlpt-n4-teoku",
    "pattern": "〜ておく",
    "title": "Làm sẵn chuẩn bị trước",
    "level": "N4",
    "position": 174,
    "meaning": "【Dạng 1】Làm sẵn một việc để chuẩn bị cho mục đích sau này；【Dạng 2】Làm xong rồi giữ nguyên hiện trạng；【Dạng 3】Cứ để nguyên như vậy không cần dọn",
    "formation": "Động từ thể て + おく / おきます (Trong văn nói rút gọn thành 〜とく)",
    "explanation": "Dùng để diễn tả việc hoàn thành sẵn một hành động trước thời điểm diễn ra sự kiện tiếp theo nhằm mục đích chuẩn bị chu đáo hoặc duy trì trạng thái tiện lợi.",
    "notes": "Chú thích phân biệt: Phân biệt 〜ておく (hành động chuẩn bị trước) với 〜てある (kết quả của sự chuẩn bị đang tồn tại). Trong hội thoại: 〜ておく nói gọn là 〜とく (ví dụ: 見ておく → 見とく).",
    "mistake": "Tránh dùng thể phủ định nhầm lẫn với ないでおく (quyết định không làm gì).",
    "related": [
      "mnn-30",
      "jlpt-n4-tearu"
    ],
    "examples": [
      {
        "ja": "旅行の前にホテルを予約しておきます。",
        "kana": "りょこうのまえにほてるをよやくしておきます。",
        "vi": "Tôi sẽ đặt phòng khách sạn sẵn trước chuyến đi du lịch.",
        "readings": {
          "旅行": "りょこう",
          "予約": "よやく"
        }
      },
      {
        "ja": "使った後は元の場所に戻しておいてください。",
        "kana": "つかったあとはもとのばしょにもどしておいてください。",
        "vi": "Sau khi dùng xong, xin hãy để lại đúng vị trí ban đầu nhé.",
        "readings": {
          "場所": "ばしょ",
          "戻して": "もどして"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-teoku-1",
        "type": "choice",
        "prompt": "友達が来る前に部屋を掃除して ___。",
        "options": [
          "おきます",
          "あります",
          "しまいます",
          "みます"
        ],
        "answer": "おきます",
        "explanation": "Dọn dẹp sẵn để đón bạn: 掃除しておきます."
      },
      {
        "id": "jlpt-n4-teoku-2",
        "type": "fill",
        "prompt": "Dạng nói tắt của「買っておきます」trong khẩu ngữ là: 買っ ___。",
        "answer": "とく",
        "explanation": "〜ておく rút gọn thành 〜とく (買っとく)."
      },
      {
        "id": "jlpt-n4-teoku-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi sẽ xem trước tài liệu cuộc họp.",
        "options": [
          "資料を読んでおきます",
          "会議の"
        ],
        "answer": "会議の資料を読んでおきます",
        "explanation": "Trật tự: 会議の資料を + 読んでおきます."
      },
      {
        "id": "jlpt-n4-teoku-4",
        "type": "choice",
        "prompt": "「窓を開けておいてください」nghĩa là gì?",
        "options": [
          "Xin hãy cứ để cửa sổ mở như vậy",
          "Xin hãy đóng cửa sổ lại",
          "Đừng mở cửa sổ",
          "Cửa sổ đã mở từ bao giờ"
        ],
        "answer": "Xin hãy cứ để cửa sổ mở như vậy",
        "explanation": "Giữ nguyên trạng thái mở cửa: 開けておいてください."
      },
      {
        "id": "jlpt-n4-teoku-5",
        "type": "fill",
        "prompt": "Chia động từ「調べます」với おく: 電車の時間を ___ おこう (tra sẵn)。",
        "answer": "調べて",
        "explanation": "調べます thể て là 調べて + おく."
      },
      {
        "id": "jlpt-n4-teoku-6",
        "type": "order",
        "prompt": "Sắp xếp: Hãy viết sẵn ghi chú vào đây.",
        "options": [
          "メモしておいてください",
          "ここに"
        ],
        "answer": "ここにメモしておいてください",
        "explanation": "Trật tự: ここに + メモしておいてください."
      },
      {
        "id": "jlpt-n4-teoku-7",
        "type": "choice",
        "prompt": "Khác biệt chính giữa「予約してあります」và「予約しておきます」là gì?",
        "options": [
          "予約してあります là trạng thái đã được đặt sẵn rồi; 予約しておきます là hành động sẽ đặt sẵn",
          "Hai câu hoàn toàn giống nhau",
          "予約しておきます là do người khác làm",
          "予約してあります là cấm đặt"
        ],
        "answer": "予約してあります là trạng thái đã được đặt sẵn rồi; 予約しておきます là hành động sẽ đặt sẵn",
        "explanation": "〜てある là kết quả hiện hữu; 〜ておく là hành động chuẩn bị."
      },
      {
        "id": "jlpt-n4-teoku-8",
        "type": "fill",
        "prompt": "Điền từ giữ nguyên: そのままにして ___ ください (cứ để nguyên thế nhé)。",
        "answer": "おいて",
        "explanation": "そのままにしておいてください."
      },
      {
        "id": "jlpt-n4-teoku-9",
        "type": "choice",
        "prompt": "Điền thể thích hợp: パーティーの料理を準備し ___ ました。",
        "options": [
          "ておき",
          "てあり",
          "てしまい",
          "てみ"
        ],
        "answer": "ておき",
        "explanation": "Chuẩn bị sẵn: 準備しておきました."
      },
      {
        "id": "jlpt-n4-teoku-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi sẽ mua vé trước chuyến đi.",
        "options": [
          "切符を買っておきます",
          "出発の前に"
        ],
        "answer": "出発の前に切符を買っておきます",
        "explanation": "Trật tự: 出発の前に + 切符を買っておきます."
      }
    ]
  },
  {
    "id": "jlpt-n4-tearu",
    "pattern": "〜てある",
    "title": "Trạng thái có chủ ý",
    "level": "N4",
    "position": 175,
    "meaning": "【Dạng 1】Trạng thái là kết quả của hành động có chủ ý chuẩn bị từ trước (Đã được làm sẵn)",
    "formation": "Danh từ + が + Ngoại động từ thể て + ある / あります",
    "explanation": "Diễn tả một trạng thái hiện hữu là kết quả của một hành động đã được ai đó thực hiện có mục đích rõ ràng từ trước. Chủ ngữ là đồ vật đi với trợ từ が.",
    "notes": "Chú thích phân biệt: Phân biệt 〜てある (đi với ngoại động từ, nhấn mạnh có bàn tay con người chủ ý làm, ví dụ ドアが開けてある) với 〜ている (đi với nội động từ, chỉ trạng thái tự nhiên, ví dụ ドアが開いている).",
    "mistake": "Không dùng nội động từ với 〜てある (sai: ドアが開いてある; đúng: ドアが開けてある).",
    "related": [
      "mnn-30",
      "jlpt-n4-teoku"
    ],
    "examples": [
      {
        "ja": "カレンダーに今月の予定が書いてあります。",
        "kana": "かれんだーにこんげつのよていがかいてあります。",
        "vi": "Trên tờ lịch đã được ghi sẵn lịch trình của tháng này.",
        "readings": {
          "予定": "よてい",
          "書いてあります": "かいてあります"
        }
      },
      {
        "ja": "壁に絵が掛けてあります。",
        "kana": "かべにえがかけてあります。",
        "vi": "Trên tường có treo sẵn một bức tranh.",
        "readings": {
          "壁": "かべ",
          "絵": "え",
          "掛けて": "かけて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-tearu-1",
        "type": "choice",
        "prompt": "黒板に連絡事項が ___ あります。",
        "options": [
          "書いて",
          "書く",
          "書いた",
          "書き"
        ],
        "answer": "書いて",
        "explanation": "Ngoại động từ thể て + ある: 書いてあります."
      },
      {
        "id": "jlpt-n4-tearu-2",
        "type": "fill",
        "prompt": "Điền trợ từ đi với đồ vật: 机の上に花 ___ 飾ってあります。",
        "answer": "が",
        "explanation": "Đối tượng trong cấu trúc 〜てある đi với trợ từ が: 花が飾ってあります."
      },
      {
        "id": "jlpt-n4-tearu-3",
        "type": "order",
        "prompt": "Sắp xếp: Khách sạn đã được đặt sẵn từ trước rồi.",
        "options": [
          "予約してあります",
          "ホテルはもう"
        ],
        "answer": "ホテルはもう予約してあります",
        "explanation": "Trật tự: ホテルはもう + 予約してあります."
      },
      {
        "id": "jlpt-n4-tearu-4",
        "type": "choice",
        "prompt": "Cặp câu nào sau đây phân biệt ĐÚNG giữa tự động từ và tha động từ?",
        "options": [
          "窓が開けてある (chủ ý)／窓が開いている (tự nhiên)",
          "窓が開いてある／窓が開けている",
          "窓が閉まってある／窓を閉めてある",
          "窓が開くある／窓を開けるある"
        ],
        "answer": "窓が開けてある (chủ ý)／窓が開いている (tự nhiên)",
        "explanation": "〜てある đi với tha động từ (開ける → 開けてある)."
      },
      {
        "id": "jlpt-n4-tearu-5",
        "type": "fill",
        "prompt": "Chia ngoại động từ「並べます」(sắp xếp): 椅子が綺麗に ___ あります。",
        "answer": "並べて",
        "explanation": "並べます thể て là 並べて + あります."
      },
      {
        "id": "jlpt-n4-tearu-6",
        "type": "order",
        "prompt": "Sắp xếp: Tên đã được viết sẵn trên chiếc túi.",
        "options": [
          "名前が書いてあります",
          "鞄に"
        ],
        "answer": "鞄に名前が書いてあります",
        "explanation": "Trật tự: 鞄に + 名前が書いてあります."
      },
      {
        "id": "jlpt-n4-tearu-7",
        "type": "choice",
        "prompt": "Động từ nào sau đây KHÔNG THỂ kết hợp với「〜てある」?",
        "options": [
          "落ちる (tự động từ: rơi)",
          "置く (tha động từ: đặt)",
          "貼る (tha động từ: dán)",
          "準備する (tha động từ: chuẩn bị)"
        ],
        "answer": "落ちる (tự động từ: rơi)",
        "explanation": "落ちる là tự động từ, không kết hợp với 〜てある."
      },
      {
        "id": "jlpt-n4-tearu-8",
        "type": "fill",
        "prompt": "Điền từ hoàn tất: 冷蔵庫にビールが冷やして ___。",
        "answer": "あります",
        "explanation": "Bia đã được ướp lạnh sẵn trong tủ lạnh: 冷やしてあります."
      },
      {
        "id": "jlpt-n4-tearu-9",
        "type": "choice",
        "prompt": "「パスポートは鞄の中にしまってあります」nghĩa là gì?",
        "options": [
          "Hộ chiếu đã được cất cẩn thận trong túi xách rồi",
          "Hộ chiếu bị rơi mất",
          "Hãy cất hộ chiếu vào túi đi",
          "Tôi không biết hộ chiếu ở đâu"
        ],
        "answer": "Hộ chiếu đã được cất cẩn thận trong túi xách rồi",
        "explanation": "Trạng thái đã được cất giữ cẩn thận."
      },
      {
        "id": "jlpt-n4-tearu-10",
        "type": "order",
        "prompt": "Sắp xếp: Bản đồ đã được dán sẵn trên tường.",
        "options": [
          "地図が貼ってあります",
          "壁に"
        ],
        "answer": "壁に地図が貼ってあります",
        "explanation": "Trật tự: 壁に + 地図が貼ってあります."
      }
    ]
  },
  {
    "id": "jlpt-n4-temiru",
    "pattern": "〜てみる",
    "title": "Thử làm việc gì đó",
    "level": "N4",
    "position": 176,
    "meaning": "【Dạng 1】Thử làm một hành động để xem kết quả ra sao",
    "formation": "Động từ thể て + みる / みます",
    "explanation": "Dùng khi người nói thực hiện một hành động mang tính thử nghiệm, thăm dò hoặc muốn trải nghiệm xem kết quả như thế nào.",
    "notes": "Chú thích phân biệt: Chữ みる trong ngữ pháp này luôn viết bằng hiragana (〜てみる), không viết bằng kanji 見る.",
    "mistake": "Không dùng cho những hành động nguy hiểm hiển nhiên trừ phi có ngữ cảnh cảnh báo.",
    "related": [
      "mnn-40"
    ],
    "examples": [
      {
        "ja": "この服を着てみてもいいですか。",
        "kana": "このふくをきてみてもいいですか。",
        "vi": "Tôi có thể mặc thử bộ quần áo này được không ạ?",
        "readings": {
          "服": "ふく",
          "着て": "きて"
        }
      },
      {
        "ja": "日本の納豆を食べてみましたが、おいしかったです。",
        "kana": "にほんのなっとうをたべてみましたが、おいしかったです。",
        "vi": "Tôi đã ăn thử món Natto của Nhật và thấy rất ngon.",
        "readings": {
          "日本": "にほん",
          "納豆": "なっとう",
          "食べて": "たべて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-temiru-1",
        "type": "choice",
        "prompt": "新しい靴を履いて ___ ました。",
        "options": [
          "み",
          "おき",
          "あり",
          "しまい"
        ],
        "answer": "み",
        "explanation": "Thử xỏ giày: 履いてみました."
      },
      {
        "id": "jlpt-n4-temiru-2",
        "type": "fill",
        "prompt": "Điền từ thử nghiệm: 一度日本へ行っ ___ たいです (muốn đi thử)。",
        "answer": "てみ",
        "explanation": "Vて + みたい: Muốn đi thử."
      },
      {
        "id": "jlpt-n4-temiru-3",
        "type": "order",
        "prompt": "Sắp xếp: Hãy làm thử một lần xem sao.",
        "options": [
          "やってみてください",
          "一度"
        ],
        "answer": "一度やってみてください",
        "explanation": "Trật tự: 一度 + やってみてください."
      },
      {
        "id": "jlpt-n4-temiru-4",
        "type": "choice",
        "prompt": "Khi muốn nói \"Hãy thử hỏi ý kiến của anh Tanaka xem sao\":",
        "options": [
          "田中さんに聞いてみてください",
          "田中さんに聞くみてください",
          "田中さんに聞いたみてください",
          "田中さんに聞きてみてください"
        ],
        "answer": "田中さんに聞いてみてください",
        "explanation": "聞きます thể て là 聞いて + みてください."
      },
      {
        "id": "jlpt-n4-temiru-5",
        "type": "fill",
        "prompt": "Chia động từ「作ります」với みる: 自分でケーキを ___ みました (tự làm thử)。",
        "answer": "作って",
        "explanation": "作って + みました."
      },
      {
        "id": "jlpt-n4-temiru-6",
        "type": "order",
        "prompt": "Sắp xếp: Tôi muốn thử nói chuyện bằng tiếng Nhật.",
        "options": [
          "話してみたいです",
          "日本語で"
        ],
        "answer": "日本語で話してみたいです",
        "explanation": "Trật tự: 日本語で + 話してみたいです."
      },
      {
        "id": "jlpt-n4-temiru-7",
        "type": "choice",
        "prompt": "Tại sao chữ「みる」trong cấu trúc này không viết bằng chữ Hán「見る」?",
        "options": [
          "Vì nó là trợ động từ ngữ pháp chỉ sự thử nghiệm chứ không phải hành động nhìn bằng mắt",
          "Vì chữ 見る khó viết",
          "Vì không có chữ Hán tương ứng",
          "Vì viết chữ Hán bị phạt"
        ],
        "answer": "Vì nó là trợ động từ ngữ pháp chỉ sự thử nghiệm chứ không phải hành động nhìn bằng mắt",
        "explanation": "Quy ước viết hiragana cho các trợ động từ bổ trợ."
      },
      {
        "id": "jlpt-n4-temiru-8",
        "type": "fill",
        "prompt": "Hoàn thành câu: 美味しいかどうか、食べて ___ (ăn thử xem sao)。",
        "answer": "みる",
        "explanation": "食べてみる: Ăn thử."
      },
      {
        "id": "jlpt-n4-temiru-9",
        "type": "choice",
        "prompt": "「先生に相談してみます」nghĩa là gì?",
        "options": [
          "Tôi sẽ thử bàn bạc trao đổi với thầy giáo xem sao",
          "Tôi đã từ chối thầy giáo",
          "Thầy giáo yêu cầu tôi gặp",
          "Tôi không dám hỏi thầy giáo"
        ],
        "answer": "Tôi sẽ thử bàn bạc trao đổi với thầy giáo xem sao",
        "explanation": "Thử tham khảo ý kiến: 相談してみます."
      },
      {
        "id": "jlpt-n4-temiru-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi sẽ suy nghĩ thử xem sao.",
        "options": [
          "考えてみます",
          "もう一度"
        ],
        "answer": "もう一度考えてみます",
        "explanation": "Trật tự: もう一度 + 考えてみます."
      }
    ]
  },
  {
    "id": "jlpt-n4-younisuru",
    "pattern": "〜ようにする・〜ようになる",
    "title": "Tập thói quen & Biến đổi năng lực",
    "level": "N4",
    "position": 177,
    "meaning": "【Dạng 1】Cố gắng nỗ lực hình thành thói quen (〜ようにする)；【Dạng 2】Dần dần biến đổi khả năng/thói quen theo thời gian (〜ようになる)",
    "formation": "【Dạng 1】Động từ V thể từ điển / Vない + ようにする / ようにしてください\n【Dạng 2】Động từ V thể khả năng / V thể từ điển + ようになる / ようになりました",
    "explanation": "Có 2 dạng biến đổi cần phân biệt: 〜ようにする là sự cố gắng có ý chí của con người để tạo lập thói quen tốt; 〜ようになる là sự biến đổi tự nhiên của năng lực hoặc thói quen theo thời gian (từ không biết thành biết làm).",
    "notes": "Chú thích phân biệt: ようにする mang tính nỗ lực bản thân (hôm nay tôi cố gắng dậy sớm); ようになる là kết quả tự nhiên (tôi đã có thể nói được tiếng Nhật).",
    "mistake": "Tránh dùng 〜ようにする khi nói về những thay đổi tự nhiên ngoài tầm kiểm soát như thời tiết.",
    "related": [
      "mnn-36"
    ],
    "examples": [
      {
        "ja": "毎日野菜をたくさん食べるようにしています。",
        "kana": "まいにちやさいをたくさんたべるようにしています。",
        "vi": "Tôi luôn cố gắng ăn thật nhiều rau xanh mỗi ngày (duy trì thói quen).",
        "readings": {
          "毎日": "まいにち",
          "野菜": "やさい",
          "食べる": "たべる"
        }
      },
      {
        "ja": "日本語の新聞が読めるようになりました。",
        "kana": "にほんごのしんぶんがよめるようになりました。",
        "vi": "Tôi đã dần đọc được báo tiếng Nhật rồi (thay đổi khả năng).",
        "readings": {
          "日本語": "にほんご",
          "新聞": "しんぶん",
          "読める": "よめる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-younisuru-1",
        "type": "choice",
        "prompt": "健康のために、毎朝走る ___ しています。",
        "options": [
          "ように",
          "ことに",
          "そうに",
          "ために"
        ],
        "answer": "ように",
        "explanation": "Cố gắng tạo thói quen: Vる + ようにしている."
      },
      {
        "id": "jlpt-n4-younisuru-2",
        "type": "fill",
        "prompt": "Chia động từ「泳ぎます」với ようになる: 練習して、泳げる ___ ました (đã biết bơi)。",
        "answer": "ように",
        "explanation": "Biến đổi khả năng: Thể khả năng + ようになる."
      },
      {
        "id": "jlpt-n4-younisuru-3",
        "type": "order",
        "prompt": "Sắp xếp: Hãy cố gắng đừng quên chìa khóa nhé.",
        "options": [
          "忘れないようにしてください",
          "鍵を"
        ],
        "answer": "鍵を忘れないようにしてください",
        "explanation": "Trật tự: 鍵を + 忘れないようにしてください."
      },
      {
        "id": "jlpt-n4-younisuru-4",
        "type": "choice",
        "prompt": "Khác biệt chính giữa「ようにする」và「ようになる」là gì?",
        "options": [
          "ようにする là nỗ lực tạo thói quen; ようになる là thay đổi khả năng theo thời gian",
          "Cả hai giống nhau",
          "ようになる là ép buộc người khác",
          "ようにする chỉ dùng cho quá khứ"
        ],
        "answer": "ようにする là nỗ lực tạo thói quen; ようになる là thay đổi khả năng theo thời gian",
        "explanation": "Phân biệt ý chí nỗ lực vs biến đổi năng lực."
      },
      {
        "id": "jlpt-n4-younisuru-5",
        "type": "fill",
        "prompt": "Điền từ khuyên răn: 夜遅く甘いものを食べない ___ しましょう。",
        "answer": "ように",
        "explanation": "Cố gắng kiêng tránh: Vない + ようにする."
      },
      {
        "id": "jlpt-n4-younisuru-6",
        "type": "order",
        "prompt": "Sắp xếp: Tôi đã dần hiểu được các bộ phim hoạt hình Nhật Bản.",
        "options": [
          "分かるようになりました",
          "日本のアニメが"
        ],
        "answer": "日本のアニメが分かるようになりました",
        "explanation": "Trật tự: 日本のアニメが + 分かるようになりました."
      },
      {
        "id": "jlpt-n4-younisuru-7",
        "type": "choice",
        "prompt": "Điền thể thích hợp: 漢字が書ける ___ ました。",
        "options": [
          "ように",
          "ために",
          "ことに",
          "そうに"
        ],
        "answer": "ように",
        "explanation": "Thay đổi khả năng viết Hán tự: 書けるようになりました."
      },
      {
        "id": "jlpt-n4-younisuru-8",
        "type": "fill",
        "prompt": "Chia động từ「寝ます」: 早く ___ ようにしています (luôn cố gắng ngủ sớm)。",
        "answer": "寝る",
        "explanation": "Động từ thể từ điển: 寝る + ようにしている."
      },
      {
        "id": "jlpt-n4-younisuru-9",
        "type": "choice",
        "prompt": "「最近眼鏡をかけなくても字が見えるようになりました」nghĩa là gì?",
        "options": [
          "Gần đây dù không đeo kính tôi cũng đã nhìn thấy rõ chữ",
          "Tôi phải đeo kính mới đọc được",
          "Kính bị hỏng không nhìn thấy",
          "Tôi không muốn đeo kính nữa"
        ],
        "answer": "Gần đây dù không đeo kính tôi cũng đã nhìn thấy rõ chữ",
        "explanation": "Biến đổi thị lực đã nhìn thấy được."
      },
      {
        "id": "jlpt-n4-younisuru-10",
        "type": "order",
        "prompt": "Sắp xếp: Hãy cố gắng vận động ít nhất 30 phút mỗi ngày.",
        "options": [
          "運動するようにしてください",
          "毎日三十分"
        ],
        "answer": "毎日三十分運動するようにしてください",
        "explanation": "Trật tự: 毎日三十分 + 運動するようにしてください."
      }
    ]
  },
  {
    "id": "jlpt-n4-noni",
    "pattern": "〜のに",
    "title": "Thế mà / Dùng để vào việc",
    "level": "N4",
    "position": 178,
    "meaning": "【Dạng 1】Thế mà / Vậy mà (Trái ngược kỳ vọng, tiếc nuối, bất mãn)；【Dạng 2】Dùng để làm gì (Đánh giá công dụng, tiện ích, chi phí)",
    "formation": "【Dạng 1: Trái ngược】Thể thông thường + のに (Tính từ な / Danh từ + なのに)\n【Dạng 2: Mục đích công dụng】V thể từ điển (Vる) + のに + 使います / 便利です / 時間がかかります",
    "explanation": "Có 2 dạng ngữ pháp: Dạng 1 diễn tả sự bất ngờ, tiếc nuối hoặc trách móc khi kết quả thực tế trái ngược hoàn toàn với dự đoán thông thường; Dạng 2 dùng để đánh giá mục đích, công năng của một sự vật.",
    "notes": "Chú thích phân biệt: Dạng 1 (trái ngược) không dùng câu mệnh lệnh ở vế sau. Dạng 2 thường đi với các vị ngữ như: 時間がかかる, お金がかかる, 役に立つ, 使う.",
    "mistake": "Sau danh từ ở Dạng 1 phải dùng なのに (sai: 雨なのに; đúng: 雨なのに; không dùng 雨だのに).",
    "related": [
      "mnn-45",
      "jlpt-n4-tameni"
    ],
    "examples": [
      {
        "ja": "一生懸命勉強したのに、試験に不合格でした。",
        "kana": "いっしょうけんめいべんきょうしたのに、しけんにふごうかくでした。",
        "vi": "Tôi đã học hành vô cùng chăm chỉ thế mà lại bị trượt kỳ thi (tiếc nuối).",
        "readings": {
          "一生懸命": "いっしょうけんめい",
          "勉強": "べんきょう",
          "試験": "しけん",
          "不合格": "ふごうかく"
        }
      },
      {
        "ja": "このハサミは紙を切るのに使います。",
        "kana": "このはさみはかみをきるのにつかいます。",
        "vi": "Chiếc kéo này dùng để cắt giấy (công dụng).",
        "readings": {
          "紙": "かみ",
          "切る": "きる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-noni-1",
        "type": "choice",
        "prompt": "約束した ___ 、彼は来ませんでした。",
        "options": [
          "のに",
          "ので",
          "から",
          "ため"
        ],
        "answer": "のに",
        "explanation": "Đã hẹn thế mà lại không đến: 約束したのに."
      },
      {
        "id": "jlpt-n4-noni-2",
        "type": "fill",
        "prompt": "Chia tính từ な「好き」với のに: 彼女のことが ___ なのに、告白できません。",
        "answer": "好き",
        "explanation": "Tính từ đuôi な + なのに: 好きなのに."
      },
      {
        "id": "jlpt-n4-noni-3",
        "type": "order",
        "prompt": "Sắp xếp: Mặc dù đã uống thuốc rồi thế mà cơn sốt vẫn chưa hạ.",
        "options": [
          "熱が下がりません",
          "薬を飲んだのに、"
        ],
        "answer": "薬を飲んだのに、熱が下がりません",
        "explanation": "Trật tự: 薬を飲んだのに、+ 熱が下がりません."
      },
      {
        "id": "jlpt-n4-noni-4",
        "type": "choice",
        "prompt": "Trong câu「このカバンは旅行に行くのに便利です」,「のに」mang nghĩa gì?",
        "options": [
          "Dùng vào việc / mục đích tiện lợi cho du lịch",
          "Trái ngược tiếc nuối",
          "Vì đi du lịch",
          "Nếu đi du lịch"
        ],
        "answer": "Dùng vào việc / mục đích tiện lợi cho du lịch",
        "explanation": "Vるのに便利です: Tiện cho mục đích du lịch."
      },
      {
        "id": "jlpt-n4-noni-5",
        "type": "fill",
        "prompt": "Điền từ nối: 日曜日 ___ 、仕事に行かなければならない (chủ nhật thế mà vẫn phải đi làm)。",
        "answer": "なのに",
        "explanation": "Danh từ + なのに: 日曜日なのに."
      },
      {
        "id": "jlpt-n4-noni-6",
        "type": "order",
        "prompt": "Sắp xếp: Mất những 3 tiếng đồng hồ để đến nhà ga.",
        "options": [
          "三時間もかかりました",
          "駅へ行くのに"
        ],
        "answer": "駅へ行くのに三時間もかかりました",
        "explanation": "Trật tự: Điểm đến/Hành động のに + Chi phí/Thời gian."
      },
      {
        "id": "jlpt-n4-noni-7",
        "type": "choice",
        "prompt": "Sắc thái cảm xúc nổi bật nhất của「〜のに」ở Dạng 1 là:",
        "options": [
          "Bất ngờ, tiếc nuối hoặc trách móc",
          "Rất vui vẻ và phấn khởi",
          "Tự hào khen ngợi",
          "Bình thản vô cảm"
        ],
        "answer": "Bất ngờ, tiếc nuối hoặc trách móc",
        "explanation": "Thể hiện sự bất mãn hoặc tiếc nuối trái kỳ vọng."
      },
      {
        "id": "jlpt-n4-noni-8",
        "type": "fill",
        "prompt": "Chia tính từ đuôi い「高い」: こんなに ___ のに、すぐ壊れました (đắt thế mà lại hỏng)。",
        "answer": "高い",
        "explanation": "Tính từ đuôi い giữ nguyên + のに: 高いのに."
      },
      {
        "id": "jlpt-n4-noni-9",
        "type": "choice",
        "prompt": "Câu nào dùng SAI ngữ pháp với「のに」ở dạng chỉ nguyên nhân trái ngược?",
        "options": [
          "雨なのに傘を持っていきなさい",
          "雨なのに出かけました",
          "一生懸命やったのに負けました",
          "寝たのにまだ眠いです"
        ],
        "answer": "雨なのに傘を持っていきなさい",
        "explanation": "Vế sau của のに không được là câu mệnh lệnh như 持っていきなさい."
      },
      {
        "id": "jlpt-n4-noni-10",
        "type": "order",
        "prompt": "Sắp xếp: Trời đã khuya rồi thế mà đứa trẻ vẫn chưa chịu ngủ.",
        "options": [
          "子供がまだ寝ません",
          "夜遅いのに、"
        ],
        "answer": "夜遅いのに、子供がまだ寝ません",
        "explanation": "Trật tự: 夜遅いのに、+ 子供がまだ寝ません."
      }
    ]
  },
  {
    "id": "jlpt-n4-koto-ni-suru",
    "pattern": "〜ことにする・〜ことになる",
    "title": "Quyết định chủ quan & Khách quan",
    "level": "N4",
    "position": 179,
    "meaning": "【Dạng 1】Bản thân tự đưa ra quyết định (〜ことにする)；【Dạng 2】Được tập thể, tổ chức hoặc hoàn cảnh quyết định (〜ことになる)",
    "formation": "【Dạng 1】Động từ V thể từ điển / V thể ない + ことにする / ことにしました\n【Dạng 2】Động từ V thể từ điển / V thể ない + ことになる / ことになりました",
    "explanation": "Dùng để diễn tả quyết định. 〜ことにする nhấn mạnh ý chí chủ quan tự quyết của người nói; 〜ことになる nhấn mạnh kết quả do ngoại cảnh, tập thể hoặc cấp trên quyết định, người nói chỉ là người tuân theo.",
    "notes": "Chú thích phân biệt: Khi muốn nói thói quen tự mình đặt ra và tuân theo, ta dùng 〜ことにしている (ví dụ: 毎朝走ることにしている: Tôi tự đặt ra nguyên tắc mỗi sáng đi chạy).",
    "mistake": "Tránh dùng 〜ことにする khi thông báo quyết định chuyển công tác của công ty (phải dùng ことになりました).",
    "related": [
      "bridge-n3-01"
    ],
    "examples": [
      {
        "ja": "今年から毎日運動することにしました。",
        "kana": "ことしからまいにちうんどうすることにしました。",
        "vi": "Kể từ năm nay, tôi đã tự quyết định sẽ tập thể dục mỗi ngày (tự quyết).",
        "readings": {
          "今年": "ことし",
          "毎日": "まいにち",
          "運動": "うんどう"
        }
      },
      {
        "ja": "来月から東京へ転勤することになりました。",
        "kana": "らいげつからとうきょうへてんきんすることになりました。",
        "vi": "Đã có quyết định rằng từ tháng sau tôi sẽ chuyển công tác lên Tokyo (tổ chức quyết).",
        "readings": {
          "来月": "らいげつ",
          "転勤": "てんきん"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-koto-ni-suru-1",
        "type": "choice",
        "prompt": "健康のために、タバコをやめる ___ しました。",
        "options": [
          "ことに",
          "ように",
          "そうに",
          "ために"
        ],
        "answer": "ことに",
        "explanation": "Bản thân tự quyết định: Vる + ことにする."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-2",
        "type": "fill",
        "prompt": "Điền từ chỉ quyết định của tổ chức: 来月出張する ___ になりました。",
        "answer": "こと",
        "explanation": "Quyết định từ bên ngoài: 〜ことになる."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi quyết định không uống rượu nữa.",
        "options": [
          "お酒を飲まないことにしました",
          "今日から"
        ],
        "answer": "今日からお酒を飲まないことにしました",
        "explanation": "Trật tự: 今日から + お酒を飲まないことにしました."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-4",
        "type": "choice",
        "prompt": "Khi công ty quyết định cử bạn đi Nhật, bạn nên thông báo với bạn bè bằng câu nào?",
        "options": [
          "日本へ行くことになりました",
          "日本へ行くことにしました",
          "日本へ行くようにしました",
          "日本へ行くそうにしました"
        ],
        "answer": "日本へ行くことになりました",
        "explanation": "Quyết định của cơ quan/tổ chức dùng 〜ことになりました."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-5",
        "type": "fill",
        "prompt": "Chia động từ「買います」: 新しいパソコンを ___ ことにしました (quyết định mua)。",
        "answer": "買う",
        "explanation": "買う + ことにしました."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-6",
        "type": "order",
        "prompt": "Sắp xếp: Đã có quyết định rằng cuộc thi sẽ bị hủy bỏ.",
        "options": [
          "中止になることになりました",
          "試合が"
        ],
        "answer": "試合が中止になることになりました",
        "explanation": "Trật tự: 試合が + 中止になることになりました."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-7",
        "type": "choice",
        "prompt": "Cấu trúc「〜ことにしている」mang ý nghĩa gì?",
        "options": [
          "Quy tắc, thói quen bản thân tự đặt ra và duy trì đều đặn",
          "Quyết định của người khác ép buộc",
          "Đã bỏ cuộc không làm nữa",
          "Chưa bao giờ làm"
        ],
        "answer": "Quy tắc, thói quen bản thân tự đặt ra và duy trì đều đặn",
        "explanation": "〜ことにしている: Tự duy trì thói quen."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-8",
        "type": "fill",
        "prompt": "Điền thể phủ định: 二度と嘘を ___ ことにした (quyết định không nói dối nữa)。",
        "answer": "つかない",
        "explanation": "嘘をつかない + ことにした."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-9",
        "type": "choice",
        "prompt": "「結婚することになりました」thể hiện sự tế nhị gì trong văn hóa Nhật?",
        "options": [
          "Nói một cách khiêm nhường rằng việc kết hôn đã được hai bên gia đình thống nhất sắp xếp",
          "Khoe khoang tự quyết",
          "Bị ép cưới",
          "Không muốn kết hôn"
        ],
        "answer": "Nói một cách khiêm nhường rằng việc kết hôn đã được hai bên gia đình thống nhất sắp xếp",
        "explanation": "Cách thông báo lịch sự, khiêm nhường."
      },
      {
        "id": "jlpt-n4-koto-ni-suru-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi quyết định hè này sẽ đi leo núi Phú Sĩ.",
        "options": [
          "富士山に登ることにしました",
          "今年の夏は"
        ],
        "answer": "今年の夏は富士山に登ることにしました",
        "explanation": "Trật tự: 今年の夏は + 富士山に登ることにしました."
      }
    ]
  },
  {
    "id": "jlpt-n4-youni-iu",
    "pattern": "〜ように言う・〜ように頼む",
    "title": "Truyền đạt mệnh lệnh gián tiếp",
    "level": "N4",
    "position": 180,
    "meaning": "【Dạng 1】Bảo ai đó hãy làm gì (Truyền đạt gián tiếp: Vるように言う)；【Dạng 2】Bảo ai đó đừng làm gì (Vないように言う)",
    "formation": "Động từ thể từ điển (Vる) / V thể ない + ように + 言う / 頼む / 伝える",
    "explanation": "Dùng để truyền đạt lại lời dặn dò, mệnh lệnh, yêu cầu từ người thứ ba đến người nghe một cách gián tiếp, lịch sự và nhẹ nhàng.",
    "notes": "Chú thích phân biệt: So với thể mệnh lệnh trực tiếp (〜と命令した / と言った), 〜ように言う mang sắc thái mềm mỏng và tế nhị hơn rất nhiều.",
    "mistake": "Tránh dùng thể mệnh lệnh trước ように (sai: 行けように言う; đúng: 行くように言う).",
    "related": [
      "mnn-33",
      "mnn-36"
    ],
    "examples": [
      {
        "ja": "先生に宿題を忘れないように言われました。",
        "kana": "せんせいにしゅくだいをわすれないようにいわれました。",
        "vi": "Tôi bị thầy giáo nhắc nhở rằng không được quên bài tập về nhà.",
        "readings": {
          "先生": "せんせい",
          "宿題": "しゅくだい",
          "忘れない": "わすれない"
        }
      },
      {
        "ja": "田中さんに早く来るように伝えてください。",
        "kana": "たなかさんにはやくくるようにつたえてください。",
        "vi": "Xin hãy nhắn lại với anh Tanaka là hãy đến sớm nhé.",
        "readings": {
          "早く": "はやく",
          "来る": "くる",
          "伝えて": "つたえて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n4-youni-iu-1",
        "type": "choice",
        "prompt": "医者にタバコを吸わない ___ 言われました。",
        "options": [
          "ように",
          "ために",
          "ことに",
          "そうに"
        ],
        "answer": "ように",
        "explanation": "Truyền đạt lời dặn dò gián tiếp: Vない + ように言われる."
      },
      {
        "id": "jlpt-n4-youni-iu-2",
        "type": "fill",
        "prompt": "Điền động từ liên kết: 明日九時に来る ___ 伝えてください。",
        "answer": "ように",
        "explanation": "Nhắn ai đó làm gì: Vる + ように伝える."
      },
      {
        "id": "jlpt-n4-youni-iu-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi đã nhờ anh ấy gửi tài liệu giúp.",
        "options": [
          "資料を送るように頼みました",
          "彼に"
        ],
        "answer": "彼に資料を送るように頼みました",
        "explanation": "Trật tự: 彼に + 資料を送るように頼みました."
      },
      {
        "id": "jlpt-n4-youni-iu-4",
        "type": "choice",
        "prompt": "Mẹ bảo em trai: \"Hãy dọn dẹp phòng đi\". Em trai kể lại:",
        "options": [
          "母に部屋を掃除するように言われた",
          "母に部屋を掃除するように言った",
          "母に部屋を掃除することにした",
          "母に部屋を掃除するようになった"
        ],
        "answer": "母に部屋を掃除するように言われた",
        "explanation": "Được/bị mẹ nhắc nhở: 〜ように言われた."
      },
      {
        "id": "jlpt-n4-youni-iu-5",
        "type": "fill",
        "prompt": "Chia động từ「静かにします」: 教室では静かに ___ ように注意された。",
        "answer": "する",
        "explanation": "Động từ thể từ điển: 静かにする + ように."
      },
      {
        "id": "jlpt-n4-youni-iu-6",
        "type": "order",
        "prompt": "Sắp xếp: Hãy nhắc nhở mọi người đừng đi muộn.",
        "options": [
          "遅刻しないように伝えてください",
          "みんなに"
        ],
        "answer": "みんなに遅刻しないように伝えてください",
        "explanation": "Trật tự: みんなに + 遅刻しないように伝えてください."
      },
      {
        "id": "jlpt-n4-youni-iu-7",
        "type": "choice",
        "prompt": "Sắc thái của「〜ように言う」so với「〜と言った」(trích nguyên văn mệnh lệnh) là:",
        "options": [
          "Mềm mỏng, lịch sự và mang tính dặn dò nhẹ nhàng hơn",
          "Gay gắt hơn",
          "Tức giận hơn",
          "Không có sắc thái nào"
        ],
        "answer": "Mềm mỏng, lịch sự và mang tính dặn dò nhẹ nhàng hơn",
        "explanation": "Truyền đạt gián tiếp luôn mềm mại hơn trích dẫn nguyên văn mệnh lệnh."
      },
      {
        "id": "jlpt-n4-youni-iu-8",
        "type": "fill",
        "prompt": "Điền động từ: 先生にすぐ職員室に来るように ___ ました (bị bảo)。",
        "answer": "言われ",
        "explanation": "Thể bị động: 言われました."
      },
      {
        "id": "jlpt-n4-youni-iu-9",
        "type": "choice",
        "prompt": "「部長が書類を今日中に提出するようにとおっしゃっていました」nghĩa là:",
        "options": [
          "Trưởng phòng đã dặn là hãy nộp tài liệu trong ngày hôm nay",
          "Trưởng phòng đã nộp tài liệu rồi",
          "Tôi đã bảo trưởng phòng nộp tài liệu",
          "Không cần nộp tài liệu hôm nay"
        ],
        "answer": "Trưởng phòng đã dặn là hãy nộp tài liệu trong ngày hôm nay",
        "explanation": "Truyền đạt lại lời dặn của cấp trên một cách kính cẩn."
      },
      {
        "id": "jlpt-n4-youni-iu-10",
        "type": "order",
        "prompt": "Sắp xếp: Bác sĩ bảo tôi hãy uống nhiều nước ấm.",
        "options": [
          "白湯をたくさん飲むように言われました",
          "医者に"
        ],
        "answer": "医者に白湯をたくさん飲むように言われました",
        "explanation": "Trật tự: 医者に + 白湯をたくさん飲むように言われました."
      }
    ]
  },
  {
    "id": "jlpt-n3-wakehanai",
    "pattern": "〜わけではない・わけがない",
    "title": "Phủ định từng phần & Tuyệt đối không thể",
    "level": "N3",
    "position": 251,
    "meaning": "【Dạng 1】Không hẳn là / Không nhất thiết là (Phủ định từng phần: 〜わけではない)；【Dạng 2】Tuyệt đối không thể có chuyện đó (Phủ định tuyệt đối: 〜わけがない)",
    "formation": "【Dạng 1】Thể thông thường + わけではない (Aな + なわけではない, N + というわけではない)\n【Dạng 2】Thể thông thường + わけがない (Aな + なわけがない, N + の／である わけがない)",
    "explanation": "〜わけではない dùng để phủ định một phần nhận định, tránh việc đối phương suy diễn cực đoan (không phải ghét mà chỉ là không thích lắm). Trái lại, 〜わけがない biểu thị sự khẳng định chắc chắn 100% rằng một việc là hoàn toàn vô lý, không đời nào xảy ra.",
    "notes": "Chú thích phân biệt: So sánh: 嫌いなわけではない (không hẳn là ghét) vs 嫌いなわけがない (lẽ nào lại ghét/tuyệt đối không ghét). 〜わけがない tương đương với 〜はずがない.",
    "mistake": "Tránh nhầm giữa わけではない (không hẳn là) và わけにはいかない (không thể làm vì lý do đạo đức/xã hội).",
    "related": [
      "bridge-n3-10",
      "bridge-n3-14"
    ],
    "examples": [
      {
        "ja": "日本料理が嫌いなわけではありませんが、納豆は苦手です。",
        "kana": "にほんりょうりがきらいなわけではありませんが、なっとうはにがてです。",
        "vi": "Không hẳn là tôi ghét món Nhật, chỉ là tôi không quen ăn Natto mà thôi.",
        "readings": {
          "日本料理": "にほんりょうり",
          "嫌い": "きらい",
          "納豆": "なっとう",
          "苦手": "にがて"
        }
      },
      {
        "ja": "彼が犯人のわけがありません。その時一緒にいました。",
        "kana": "かれがはんにんのわけがありません。そのときいっしょにいました。",
        "vi": "Anh ấy tuyệt đối không thể là thủ phạm được. Lúc đó chúng tôi đang ở cùng nhau.",
        "readings": {
          "犯人": "はんにん",
          "一緒": "いっしょ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-wakehanai-1",
        "type": "choice",
        "prompt": "生活に困っている ___ ではないが、贅沢はできない。",
        "options": [
          "わけ",
          "はず",
          "もの",
          "こと"
        ],
        "answer": "わけ",
        "explanation": "Không hẳn là khó khăn: 困っているわけではない."
      },
      {
        "id": "jlpt-n3-wakehanai-2",
        "type": "fill",
        "prompt": "Điền dạng phủ định tuyệt đối: そんな嘘を信じるわけが ___ (không đời nào tin)。",
        "answer": "ない",
        "explanation": "Tuyệt đối không có chuyện đó: わけがない."
      },
      {
        "id": "jlpt-n3-wakehanai-3",
        "type": "order",
        "prompt": "Sắp xếp: Không phải là tôi không muốn đi, chỉ là tôi quá bận rộn.",
        "options": [
          "行きたくないわけではないですが、",
          "忙しいんです"
        ],
        "answer": "行きたくないわけではないですが、忙しいんです",
        "explanation": "Trật tự: Phủ định một phần + Đưa lý do thực tế."
      },
      {
        "id": "jlpt-n3-wakehanai-4",
        "type": "choice",
        "prompt": "Cụm từ「走れるわけがない」thể hiện thái độ gì?",
        "options": [
          "Tin chắc chắn 100% là không thể chạy được",
          "Có thể chạy được",
          "Hy vọng sẽ chạy được",
          "Khuyên người khác nên chạy"
        ],
        "answer": "Tin chắc chắn 100% là không thể chạy được",
        "explanation": "〜わけがない: Tuyệt đối không thể."
      },
      {
        "id": "jlpt-n3-wakehanai-5",
        "type": "fill",
        "prompt": "Chia tính từ な「暇」với わけではない: 毎日 ___ なわけではない (không hẳn là rảnh)。",
        "answer": "暇",
        "explanation": "Tính từ đuôi な + なわけではない: 暇なわけではない."
      },
      {
        "id": "jlpt-n3-wakehanai-6",
        "type": "order",
        "prompt": "Sắp xếp: Một đứa trẻ làm sao có thể làm được việc khó khăn như thế này.",
        "options": [
          "子供にできるわけがありません",
          "そんな難しいこと、"
        ],
        "answer": "そんな難しいこと、子供にできるわけがありません",
        "explanation": "Trật tự: そんな難しいこと、+ 子供にできるわけがありません."
      },
      {
        "id": "jlpt-n3-wakehanai-7",
        "type": "choice",
        "prompt": "Phân biệt:「全部知っているわけではない」nghĩa là gì?",
        "options": [
          "Không phải là tôi biết hết tất cả (chỉ biết một phần)",
          "Tôi biết tất cả mọi chuyện",
          "Tôi hoàn toàn không biết gì",
          "Tôi không muốn biết"
        ],
        "answer": "Không phải là tôi biết hết tất cả (chỉ biết một phần)",
        "explanation": "Phủ định từng phần."
      },
      {
        "id": "jlpt-n3-wakehanai-8",
        "type": "fill",
        "prompt": "Điền từ nối: 努力したからといって、必ず成功する ___ ではない。",
        "answer": "わけ",
        "explanation": "Không hẳn là: わけではない."
      },
      {
        "id": "jlpt-n3-wakehanai-9",
        "type": "choice",
        "prompt": "Điền thể thích hợp: 一人で全部食べられる ___ がない。",
        "options": [
          "わけ",
          "こと",
          "もの",
          "ところ"
        ],
        "answer": "わけ",
        "explanation": "Lẽ nào lại ăn hết một mình: 食べられるわけがない."
      },
      {
        "id": "jlpt-n3-wakehanai-10",
        "type": "order",
        "prompt": "Sắp xếp: Giá đắt không có nghĩa là chất lượng lúc nào cũng tốt.",
        "options": [
          "高いものが必ずしもいいわけではない",
          "値段が"
        ],
        "answer": "値段が高いものが必ずしもいいわけではない",
        "explanation": "Trật tự: 値段が高いものが必ずしもいいわけではない."
      }
    ]
  },
  {
    "id": "jlpt-n3-kotoitadaku",
    "pattern": "〜ことにしている・ことになる",
    "title": "Duy trì thói quen & Quy định sẵn",
    "level": "N3",
    "position": 252,
    "meaning": "【Dạng 1】Tự đặt ra và kiên trì duy trì quy tắc bản thân (〜ことにしている)；【Dạng 2】Được quy định thành tập quán, luật lệ xã hội (〜ことになっている)",
    "formation": "【Dạng 1】Động từ thể từ điển (Vる) / V thể ない + ことにしている\n【Dạng 2】Động từ thể từ điển (Vる) / V thể ない + ことになっている",
    "explanation": "〜ことにしている thể hiện ý chí quyết tâm của cá nhân tạo thành thói quen lâu dài; 〜ことになっている thể hiện quy định, tập quán hoặc lịch trình của tập thể/pháp luật mà mọi người phải tuân theo.",
    "notes": "Chú thích phân biệt: 法律で決まっていること (quy định pháp luật) dùng ことになっている; 自分の習慣 (thói quen cá nhân) dùng ことにしている.",
    "mistake": "Không dùng ことにしている cho quy định của trường học hay công ty.",
    "related": [
      "bridge-n3-01"
    ],
    "examples": [
      {
        "ja": "健康のため、エレベーターを使わずに階段を使うことにしています。",
        "kana": "けんこうのため、えれべーたーをつかわずにかいだんをつかうことにしています。",
        "vi": "Vì sức khỏe, tôi luôn duy trì thói quen đi cầu thang bộ chứ không đi thang máy.",
        "readings": {
          "健康": "けんこう",
          "階段": "かいだん",
          "使う": "つかう"
        }
      },
      {
        "ja": "日本では車は左側を走ることになっています。",
        "kana": "にほんではくるまはひだりがわをはしることになっています。",
        "vi": "Ở Nhật Bản có quy định rằng xe ô tô phải lưu thông ở phần đường bên trái.",
        "readings": {
          "日本": "にほん",
          "車": "くるま",
          "左側": "ひだりがわ",
          "走る": "はしる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-kotoitadaku-1",
        "type": "choice",
        "prompt": "毎朝六時に起きる ___ しています。",
        "options": [
          "ことに",
          "ように",
          "そうに",
          "ために"
        ],
        "answer": "ことに",
        "explanation": "Duy trì thói quen tự đặt ra: Vる + ことにしている."
      },
      {
        "id": "jlpt-n3-kotoitadaku-2",
        "type": "fill",
        "prompt": "Điền từ quy định tập thể: この寮では十時以降は静かにする ___ になっている。",
        "answer": "こと",
        "explanation": "Quy định nội quy tập thể: 〜ことになっている."
      },
      {
        "id": "jlpt-n3-kotoitadaku-3",
        "type": "order",
        "prompt": "Sắp xếp: Ở đây có quy định không được hút thuốc.",
        "options": [
          "タバコを吸ってはいけないことになっています",
          "法律で"
        ],
        "answer": "法律でタバコを吸ってはいけないことになっています",
        "explanation": "Trật tự: 法律で + タバコを吸ってはいけないことになっています."
      },
      {
        "id": "jlpt-n3-kotoitadaku-4",
        "type": "choice",
        "prompt": "Câu nào nói về thói quen cá nhân tự kỷ luật?",
        "options": [
          "休みの日は自炊することにしている",
          "休みの日は自炊することになっている",
          "休みの日は自炊するそうだ",
          "休みの日は自炊するらしい"
        ],
        "answer": "休みの日は自炊することにしている",
        "explanation": "ことにしている là thói quen do bản thân tự giác duy trì."
      },
      {
        "id": "jlpt-n3-kotoitadaku-5",
        "type": "fill",
        "prompt": "Chia thể phủ định: 甘い飲み物は ___ ことにしている (thói quen không uống)。",
        "answer": "飲まない",
        "explanation": "Vない + ことにしている: 飲まないことにしている."
      },
      {
        "id": "jlpt-n3-kotoitadaku-6",
        "type": "order",
        "prompt": "Sắp xếp: Theo lịch trình tuần tới tôi sẽ đi công tác Osaka.",
        "options": [
          "出張することになっています",
          "来週大阪へ"
        ],
        "answer": "来週大阪へ出張することになっています",
        "explanation": "Trật tự: 来週大阪へ + 出張することになっています."
      },
      {
        "id": "jlpt-n3-kotoitadaku-7",
        "type": "choice",
        "prompt": "「契約書では、家賃は毎月25日までに支払うことになっている」thể hiện điều gì?",
        "options": [
          "Điều khoản hợp đồng đã quy định bắt buộc phải đóng tiền nhà trước ngày 25",
          "Tôi tự nguyện trả tiền ngày 25",
          "Chủ nhà nhờ tôi trả tiền ngày 25",
          "Không ai biết ngày trả tiền"
        ],
        "answer": "Điều khoản hợp đồng đã quy định bắt buộc phải đóng tiền nhà trước ngày 25",
        "explanation": "ことになっている: Quy định trong hợp đồng."
      },
      {
        "id": "jlpt-n3-kotoitadaku-8",
        "type": "fill",
        "prompt": "Hoàn thành câu: どんなに忙しくても、朝食は ___ ことにしている (ăn sáng)。",
        "answer": "食べる",
        "explanation": "食べることにしている: Duy trì thói quen ăn sáng."
      },
      {
        "id": "jlpt-n3-kotoitadaku-9",
        "type": "choice",
        "prompt": "Điền từ thích hợp: 授業中は携帯電話の電源を切る ___ になっている。",
        "options": [
          "こと",
          "もの",
          "わけ",
          "ところ"
        ],
        "answer": "こと",
        "explanation": "Quy định trong lớp học: 切ることになっている."
      },
      {
        "id": "jlpt-n3-kotoitadaku-10",
        "type": "order",
        "prompt": "Sắp xếp: Tôi luôn duy trì thói quen đọc sách 30 phút trước khi đi ngủ.",
        "options": [
          "読書することにしています",
          "寝る前に三十分"
        ],
        "answer": "寝る前に三十分読書することにしています",
        "explanation": "Trật tự: 寝る前に三十分 + 読書することにしています."
      }
    ]
  },
  {
    "id": "jlpt-n3-hodo-kurai",
    "pattern": "〜ほど・〜くらい（ぐらい）",
    "title": "Đến mức / Cỡ như là",
    "level": "N3",
    "position": 253,
    "meaning": "【Dạng 1】Mức độ cao đến nỗi (Đến mức muốn khóc, mệt đến mức không bước nổi)；【Dạng 2】Độ chừng khoảng ước lượng (Khoảng 3 tiếng)；【Dạng 3】Càng... càng (〜ば〜ほど)",
    "formation": "【Dạng 1: Mức độ】V thể thông thường / Tính từ / N + ほど / くらい\n【Dạng 2: Ước lượng】Số từ + くらい / ぐらい / ほど\n【Dạng 3: Càng... càng】Vば + Vるほど / Aければ + Aいほど",
    "explanation": "Dùng để diễn tả mức độ của một trạng thái thông qua việc đưa ra ví dụ so sánh cụ thể hoặc thậm chí phóng đại để người nghe dễ hình dung; hoặc biểu thị sự tương quan tỷ lệ thuận tăng dần.",
    "notes": "Chú thích phân biệt: So với くらい, ほど mang sắc thái trang trọng hơn và thường dùng trong các câu miêu tả mức độ cực độ hoặc cấu trúc tỷ lệ thuận 〜ば〜ほど. くらい gần gũi hơn trong văn nói.",
    "mistake": "Trong so sánh nhất (A là nhất, không ai bằng A), dùng: B ほど〜はない (không ai bằng B).",
    "related": [
      "bridge-n3-15"
    ],
    "examples": [
      {
        "ja": "昨日は涙が出るほど笑いました。",
        "kana": "きのうはなみだがでるほどわらいました。",
        "vi": "Hôm qua tôi cười đến mức ứa cả nước mắt.",
        "readings": {
          "昨日": "きのう",
          "涙": "なみだ",
          "出る": "でる",
          "笑いました": "わらいました"
        }
      },
      {
        "ja": "考えれば考えるほど分からなくなります。",
        "kana": "かんがえればかんがえるほどわからなくなります。",
        "vi": "Càng suy nghĩ thì tôi lại càng không hiểu nổi.",
        "readings": {
          "考えれば": "かんがえれば",
          "考える": "かんがえる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-hodo-kurai-1",
        "type": "choice",
        "prompt": "死ぬ ___ 忙しい毎日を送っています。",
        "options": [
          "ほど",
          "ばかり",
          "さえ",
          "こそ"
        ],
        "answer": "ほど",
        "explanation": "Bận đến mức chết đi được (ví von phóng đại): 死ぬほど."
      },
      {
        "id": "jlpt-n3-hodo-kurai-2",
        "type": "fill",
        "prompt": "Điền từ so sánh tương quan: 日本語は勉強すればする ___ 面白くなります。",
        "answer": "ほど",
        "explanation": "Cấu trúc 〜ば〜ほど: Càng... càng..."
      },
      {
        "id": "jlpt-n3-hodo-kurai-3",
        "type": "order",
        "prompt": "Sắp xếp: Mệt đến mức không thể đứng dậy nổi.",
        "options": [
          "立てないくらい",
          "疲れました"
        ],
        "answer": "立てないくらい疲れました",
        "explanation": "Trật tự: 立てないくらい + 疲れました."
      },
      {
        "id": "jlpt-n3-hodo-kurai-4",
        "type": "choice",
        "prompt": "「彼ほど優しい人はいない」có nghĩa là gì?",
        "options": [
          "Không có ai tốt bụng bằng anh ấy (anh ấy là người tốt bụng nhất)",
          "Anh ấy không tốt bụng",
          "Ai cũng tốt bụng như anh ấy",
          "Anh ấy ngày càng tốt bụng"
        ],
        "answer": "Không có ai tốt bụng bằng anh ấy (anh ấy là người tốt bụng nhất)",
        "explanation": "N ほど〜はない: Không gì/ai bằng N."
      },
      {
        "id": "jlpt-n3-hodo-kurai-5",
        "type": "fill",
        "prompt": "Chia tính từ「高い」trong cấu trúc càng... càng: 高ければ高い ___ 質がいい。",
        "answer": "ほど",
        "explanation": "Càng đắt thì chất lượng càng tốt: 高ければ高いほど."
      },
      {
        "id": "jlpt-n3-hodo-kurai-6",
        "type": "order",
        "prompt": "Sắp xếp: Đau đến mức không ngủ nổi.",
        "options": [
          "眠れないほど痛いです",
          "お腹が"
        ],
        "answer": "お腹が眠れないほど痛いです",
        "explanation": "Trật tự: お腹が + 眠れないほど痛いです."
      },
      {
        "id": "jlpt-n3-hodo-kurai-7",
        "type": "choice",
        "prompt": "So sánh giữa「ほど」và「くらい」:",
        "options": [
          "ほど mang tính trang trọng và mức độ nhấn mạnh cao hơn くらい",
          "くらい trang trọng hơn ほど",
          "Cả hai không bao giờ thay thế được cho nhau",
          "ほど chỉ dùng cho đồ ăn"
        ],
        "answer": "ほど mang tính trang trọng và mức độ nhấn mạnh cao hơn くらい",
        "explanation": "ほど trang trọng và mức độ mạnh hơn."
      },
      {
        "id": "jlpt-n3-hodo-kurai-8",
        "type": "fill",
        "prompt": "Điền từ chỉ mức độ: 声が出ない ___ 喉が痛い (đau họng đến mức không ra tiếng)。",
        "answer": "くらい",
        "explanation": "声が出ないくらい."
      },
      {
        "id": "jlpt-n3-hodo-kurai-9",
        "type": "choice",
        "prompt": "「息が止まるほど美しい景色」nghĩa là gì?",
        "options": [
          "Khung cảnh đẹp đến mức nghẹt thở (ngưng thở)",
          "Khung cảnh khiến người ta khó thở",
          "Khung cảnh bình thường",
          "Cảnh vật xấu xí"
        ],
        "answer": "Khung cảnh đẹp đến mức nghẹt thở (ngưng thở)",
        "explanation": "Đẹp đến mức nín thở: 息が止まるほど美しい."
      },
      {
        "id": "jlpt-n3-hodo-kurai-10",
        "type": "order",
        "prompt": "Sắp xếp: Dễ đến mức đứa trẻ con cũng có thể làm được.",
        "options": [
          "子供でもできるくらい簡単です",
          "この問題は"
        ],
        "answer": "この問題は子供でもできるくらい簡単です",
        "explanation": "Trật tự: この問題は + 子供でもできるくらい簡単です."
      }
    ]
  },
  {
    "id": "jlpt-n3-dokoroka",
    "pattern": "〜どころか",
    "title": "Không những không... mà trái lại",
    "level": "N3",
    "position": 254,
    "meaning": "【Dạng 1】Không những không đạt được A mà trái lại còn tồi tệ hơn ở mức B；【Dạng 2】Nói gì đến A, ngay cả mức độ thấp hơn là B còn không có",
    "formation": "Danh từ / Động từ / Tính từ thể thông thường (Tính từ na bỏ だ) + どころか",
    "explanation": "Dùng để nhấn mạnh sự thật thực tế hoàn toàn trái ngược hoặc khác xa một trời một vực so với điều kỳ vọng hoặc nhận định thông thường.",
    "notes": "Chú thích phân biệt: Vế sau của 〜どころか luôn mang kết quả trái ngược bất ngờ hoặc tiêu cực hơn rất nhiều so với vế trước.",
    "mistake": "Tránh dùng 〜どころか cho những sự việc song song cùng chiều hướng nhẹ nhàng (trường hợp đó dùng ばかりか).",
    "related": [
      "bridge-n3-14",
      "bridge-n2-44"
    ],
    "examples": [
      {
        "ja": "喉が痛くて、ご飯を食べるどころか水も飲めない。",
        "kana": "のどがいたくて、ごはんをたべるどころかみずものめない。",
        "vi": "Họng tôi đau đến mức nói gì đến ăn cơm, ngay cả một ngụm nước cũng không nuốt nổi.",
        "readings": {
          "喉": "のど",
          "痛くて": "いたくて",
          "食べる": "たべる",
          "水": "みず",
          "飲めない": "のめない"
        }
      },
      {
        "ja": "貯金どころか借金が増える一方です。",
        "kana": "ちょきんどころかしゃっきんがふえるいっぽうです。",
        "vi": "Nói gì đến chuyện tiết kiệm, nợ nần trái lại còn ngày một chồng chất thêm.",
        "readings": {
          "貯金": "ちょきん",
          "借金": "しゃっきん",
          "増える": "ふえる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-dokoroka-1",
        "type": "choice",
        "prompt": "忙しくて、海外旅行 ___ 国内旅行にも行けない。",
        "options": [
          "どころか",
          "ばかりか",
          "わりに",
          "反面"
        ],
        "answer": "どころか",
        "explanation": "Nói gì đến du lịch nước ngoài, ngay cả trong nước cũng không đi được: どころか."
      },
      {
        "id": "jlpt-n3-dokoroka-2",
        "type": "fill",
        "prompt": "Điền từ trái ngược cực độ: 感謝される ___ 、逆に怒られた。",
        "answer": "どころか",
        "explanation": "Chẳng những không được cảm ơn mà trái lại còn bị mắng: どころか."
      },
      {
        "id": "jlpt-n3-dokoroka-3",
        "type": "order",
        "prompt": "Sắp xếp: Bệnh chẳng thuyên giảm chút nào mà trái lại ngày càng nặng thêm.",
        "options": [
          "悪化してしまった",
          "病気は良くなるどころか、"
        ],
        "answer": "病気は良くなるどころか、悪化してしまった",
        "explanation": "Trật tự: 良くなるどころか、+ 悪化してしまった."
      },
      {
        "id": "jlpt-n3-dokoroka-4",
        "type": "choice",
        "prompt": "「漢字どころか平仮名も読めない」nghĩa là gì?",
        "options": [
          "Nói gì đến chữ Hán, ngay cả bảng chữ cái Hiragana còn chưa đọc nổi",
          "Chữ Hán đọc tốt nhưng chữ Hiragana thì kém",
          "Đọc được cả chữ Hán lẫn Hiragana",
          "Đang học chữ Hán"
        ],
        "answer": "Nói gì đến chữ Hán, ngay cả bảng chữ cái Hiragana còn chưa đọc nổi",
        "explanation": "Nhấn mạnh thực tế trái ngược từ mức cơ bản."
      },
      {
        "id": "jlpt-n3-dokoroka-5",
        "type": "fill",
        "prompt": "Điền từ: 痩せる ___ 太ってしまいました (chẳng những không gầy mà còn béo lên)。",
        "answer": "どころか",
        "explanation": "痩せるどころか: Chẳng những không gầy."
      },
      {
        "id": "jlpt-n3-dokoroka-6",
        "type": "order",
        "prompt": "Sắp xếp: Tôi chưa từng đi Nhật chứ nói gì đến chuyện sống ở đó.",
        "options": [
          "行ったこともありません",
          "日本に住むどころか、"
        ],
        "answer": "日本に住むどころか、行ったこともありません",
        "explanation": "Trật tự: 日本に住むどころか、+ 行ったこともありません."
      },
      {
        "id": "jlpt-n3-dokoroka-7",
        "type": "choice",
        "prompt": "Sắc thái của「AどころかB」thường là:",
        "options": [
          "A còn chưa đạt được, B tệ hơn nhiều / hoàn toàn trái ngược",
          "A và B tương đương nhau",
          "A và B đều rất tốt",
          "A nguyên nhân của B"
        ],
        "answer": "A còn chưa đạt được, B tệ hơn nhiều / hoàn toàn trái ngược",
        "explanation": "Trái ngược cách biệt lớn."
      },
      {
        "id": "jlpt-n3-dokoroka-8",
        "type": "fill",
        "prompt": "Điền từ: 独身 ___ 、子供が三人います (độc thân đâu mà độc thân, có 3 con rồi)。",
        "answer": "どころか",
        "explanation": "独身どころか."
      },
      {
        "id": "jlpt-n3-dokoroka-9",
        "type": "choice",
        "prompt": "「静かになるどころかますます騒がしくなった」thể hiện thực tế gì?",
        "options": [
          "Chẳng những không yên tĩnh mà trái lại càng lúc càng ồn ào hơn",
          "Phòng rất yên tĩnh",
          "Mọi người đã đi ngủ",
          "Yên tĩnh hơn lúc trước"
        ],
        "answer": "Chẳng những không yên tĩnh mà trái lại càng lúc càng ồn ào hơn",
        "explanation": "ますます騒がしくなった: Càng lúc càng ồn ào."
      },
      {
        "id": "jlpt-n3-dokoroka-10",
        "type": "order",
        "prompt": "Sắp xếp: Trúng xổ số đâu chẳng thấy, toàn tiêu tốn mất tiền.",
        "options": [
          "損ばかりしている",
          "宝くじに当たるどころか、"
        ],
        "answer": "宝くじに当たるどころか、損ばかりしている",
        "explanation": "Trật tự: 宝くじに当たるどころか、+ 損ばかりしている."
      }
    ]
  },
  {
    "id": "jlpt-n3-nioujite",
    "pattern": "〜に応じて・に応じた",
    "title": "Tùy theo / Tương ứng với",
    "level": "N3",
    "position": 255,
    "meaning": "【Dạng 1】Tùy theo, tương ứng với điều kiện (Tuổi tác, năng lực, ngân sách, khí hậu)；【Dạng 2】Đáp ứng theo yêu cầu/nguyện vọng",
    "formation": "Danh từ + に応じて (phó từ hóa bổ nghĩa động từ)\nDanh từ + に応じた + Danh từ (bổ nghĩa danh từ)",
    "explanation": "Dùng để diễn tả việc thay đổi kế hoạch, chính sách hoặc hành động sao cho phù hợp, tương ứng và thích nghi với điều kiện, năng lực hoặc yêu cầu của tình hình thực tế.",
    "notes": "Chú thích phân biệt: So với によって (nhấn mạnh sự khác nhau hoặc tùy theo đối tượng), に応じて nhấn mạnh sự điều chỉnh linh hoạt cho \"phù hợp, tương xứng\" (ví dụ: 給料は能力に応じて決まる: Lương được quyết định tương xứng với năng lực).",
    "mistake": "Tránh dùng に応じて cho những mối quan hệ nguyên nhân kết quả ép buộc không có sự tương ứng linh hoạt.",
    "related": [
      "bridge-n3-17",
      "bridge-n2-34"
    ],
    "examples": [
      {
        "ja": "能力や経験に応じて、給料が決められます。",
        "kana": "のうりょくやけいけんにおうじて、きゅうりょうがきめられます。",
        "vi": "Mức lương sẽ được quyết định tương xứng với năng lực và kinh nghiệm.",
        "readings": {
          "能力": "のうりょく",
          "経験": "けいけん",
          "応じて": "おうじて",
          "給料": "きゅうりょう"
        }
      },
      {
        "ja": "お客様のご希望に応じたプランをご提案いたします。",
        "kana": "おきゃくさまのごきぼうにおうじたぷらんをごていあんいたします。",
        "vi": "Chúng tôi xin đề xuất gói dịch vụ tương ứng đáp ứng theo đúng nguyện vọng của quý khách.",
        "readings": {
          "お客様": "おきゃくさま",
          "希望": "きぼう",
          "提案": "ていあん"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-nioujite-1",
        "type": "choice",
        "prompt": "体力に ___ 、無理のない運動をしましょう。",
        "options": [
          "応じて",
          "反して",
          "向かって",
          "つれて"
        ],
        "answer": "応じて",
        "explanation": "Tương ứng phù hợp với thể lực: 体力に応じて."
      },
      {
        "id": "jlpt-n3-nioujite-2",
        "type": "fill",
        "prompt": "Điền dạng bổ nghĩa danh từ: 予算に ___ 部屋を選びます (căn phòng tương ứng với ngân sách)。",
        "answer": "応じた",
        "explanation": "Bổ nghĩa cho danh từ 部屋: に応じた + N."
      },
      {
        "id": "jlpt-n3-nioujite-3",
        "type": "order",
        "prompt": "Sắp xếp: Tùy theo thời tiết mà thay đổi trang phục cho phù hợp.",
        "options": [
          "服装を変えます",
          "天候に応じて"
        ],
        "answer": "天候に応じて服装を変えます",
        "explanation": "Trật tự: 天候に応じて + 服装を変えます."
      },
      {
        "id": "jlpt-n3-nioujite-4",
        "type": "choice",
        "prompt": "Khi muốn nói \"Học phí thay đổi tùy theo độ tuổi\", câu nào chính xác?",
        "options": [
          "年齢に応じて授業料が異なります",
          "年齢に反して授業料が異なります",
          "年齢にとって授業料が異なります",
          "年齢に際して授業料が異なります"
        ],
        "answer": "年齢に応じて授業料が異なります",
        "explanation": "Tùy theo độ tuổi: 年齢に応じて."
      },
      {
        "id": "jlpt-n3-nioujite-5",
        "type": "fill",
        "prompt": "Hoàn thiện cụm từ: 必要に ___ 書類を提出してください (tùy theo nhu cầu)。",
        "answer": "応じて",
        "explanation": "必要に応じて: Tùy theo nhu cầu cần thiết."
      },
      {
        "id": "jlpt-n3-nioujite-6",
        "type": "order",
        "prompt": "Sắp xếp: Chúng tôi sẽ hướng dẫn phù hợp với trình độ của từng học viên.",
        "options": [
          "指導を行います",
          "レベルに応じて"
        ],
        "answer": "レベルに応じて指導を行います",
        "explanation": "Trật tự: レベルに応じて + 指導を行います."
      },
      {
        "id": "jlpt-n3-nioujite-7",
        "type": "choice",
        "prompt": "Sau「〜に応じて」thường là các danh từ mang tính chất gì?",
        "options": [
          "Khả năng, mức độ, yêu cầu, biến đổi (năng lực, tuổi tác, thời tiết, ngân sách)",
          "Tên riêng địa danh",
          "Thời gian quá khứ cố định",
          "Số đếm đồ vật đơn thuần"
        ],
        "answer": "Khả năng, mức độ, yêu cầu, biến đổi (năng lực, tuổi tác, thời tiết, ngân sách)",
        "explanation": "Các danh từ chỉ tiêu chí, điều kiện có thể co giãn thay đổi."
      },
      {
        "id": "jlpt-n3-nioujite-8",
        "type": "fill",
        "prompt": "Điền từ: 状況に ___ 臨機応変に対応する (tùy cơ ứng biến theo tình hình)。",
        "answer": "応じて",
        "explanation": "状況に応じて."
      },
      {
        "id": "jlpt-n3-nioujite-9",
        "type": "choice",
        "prompt": "「ご要望に応じたサービス」nghĩa là gì?",
        "options": [
          "Dịch vụ đáp ứng tương ứng theo nguyện vọng của quý khách",
          "Dịch vụ chống lại nguyện vọng",
          "Dịch vụ bắt buộc",
          "Không có dịch vụ"
        ],
        "answer": "Dịch vụ đáp ứng tương ứng theo nguyện vọng của quý khách",
        "explanation": "Đáp ứng nguyện vọng của khách."
      },
      {
        "id": "jlpt-n3-nioujite-10",
        "type": "order",
        "prompt": "Sắp xếp: Tùy theo sở thích mà thêm lượng gia vị vừa ăn.",
        "options": [
          "味を調節してください",
          "お好みに応じて"
        ],
        "answer": "お好みに応じて味を調節してください",
        "explanation": "Trật tự: お好みに応じて + 味を調節してください."
      }
    ]
  },
  {
    "id": "jlpt-n3-wake-niwa-ikanai",
    "pattern": "〜わけにはいかない",
    "title": "Không thể làm vì đạo đức / quy tắc",
    "level": "N3",
    "position": 256,
    "meaning": "【Dạng 1】Không thể làm vì đạo đức, lương tâm, dư luận xã hội (〜わけにはいかない)；【Dạng 2】Buộc phải làm, không thể không làm (〜ないわけにはいかない)",
    "formation": "【Dạng 1】Động từ thể từ điển (Vる) + わけにはいかない\n【Dạng 2】Động từ thể ない (Vない) + わけにはいかない",
    "explanation": "Dùng khi chủ thể muốn làm nhưng vì rào cản đạo đức, trách nhiệm, luật pháp hoặc mắt nhìn của xã hội mà \"không thể làm được\"; hoặc trong dạng phủ định kép (〜ないわけにはいかない) nghĩa là \"buộc phải làm vì trách nhiệm/bổn phận\".",
    "notes": "Chú thích phân biệt: Khác với thể khả năng (〜できない là không thể về năng lực thể chất), 〜わけにはいかない là bản thân có đủ năng lực làm nhưng lương tâm hoặc quy tắc đạo đức không cho phép làm.",
    "mistake": "Tránh dùng 〜わけにはいかない khi nói về sự bất khả kháng thuần túy về vật lý hay năng lực.",
    "related": [
      "bridge-n3-10",
      "jlpt-n3-wakehanai"
    ],
    "examples": [
      {
        "ja": "大事な会議がありますから、休むわけにはいきません。",
        "kana": "だいじなかいぎがありますから、やすむわけにはいきません。",
        "vi": "Vì có cuộc họp vô cùng quan trọng nên tôi không thể nào nghỉ được (trách nhiệm).",
        "readings": {
          "大事": "だいじ",
          "会議": "かいぎ",
          "休む": "やすむ"
        }
      },
      {
        "ja": "親友の頼みだから、断らないわけにはいかない。",
        "kana": "しんゆうのたのみだから、ことわらないわけにはいかない。",
        "vi": "Vì là lời nhờ vả của bạn thân nên tôi không thể không đồng ý (buộc phải nhận lời).",
        "readings": {
          "親友": "しんゆう",
          "頼み": "たのみ",
          "断らない": "ことわらない"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-wake-niwa-ikanai-1",
        "type": "choice",
        "prompt": "明日試験があるから、遊んでいる ___ にはいかない。",
        "options": [
          "わけ",
          "はず",
          "もの",
          "こと"
        ],
        "answer": "わけ",
        "explanation": "Không thể thong dong chơi bời: わけにはいかない."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-2",
        "type": "fill",
        "prompt": "Điền dạng buộc phải làm (không thể không đi): 社長の命令だから、行か ___ わけにはいかない。",
        "answer": "ない",
        "explanation": "Buộc phải làm: Vない + わけにはいかない."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi không thể tiết lộ bí mật này cho bất cứ ai.",
        "options": [
          "話すわけにはいきません",
          "この秘密を誰にも"
        ],
        "answer": "この秘密を誰にも話すわけにはいきません",
        "explanation": "Trật tự: この秘密を誰にも + 話すわけにはいきません."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-4",
        "type": "choice",
        "prompt": "Khác biệt giữa「運転できない」và「運転するわけにはいかない」là:",
        "options": [
          "運転できない là không biết lái xe; 運転するわけにはいかない là biết lái nhưng uống rượu rồi nên đạo đức/luật cấm lái",
          "Hai câu giống nhau",
          "運転するわけにはいかない là xe bị hỏng",
          "運転できない là không thích lái"
        ],
        "answer": "運転できない là không biết lái xe; 運転するわけにはいかない là biết lái nhưng uống rượu rồi nên đạo đức/luật cấm lái",
        "explanation": "Phân biệt giữa năng lực thuần túy và rào cản đạo đức/luật pháp."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-5",
        "type": "fill",
        "prompt": "Chia động từ「あきらめます」: 途中で ___ わけにはいかない (không thể bỏ cuộc giữa chừng)。",
        "answer": "あきらめる",
        "explanation": "Động từ thể từ điển: あきらめる + わけにはいかない."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-6",
        "type": "order",
        "prompt": "Sắp xếp: Đã mượn tiền của bạn thì không thể không trả.",
        "options": [
          "返さないわけにはいかない",
          "お金を借りた以上、"
        ],
        "answer": "お金を借りた以上、返さないわけにはいかない",
        "explanation": "Trật tự: お金を借りた以上、+ 返さないわけにはいかない."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-7",
        "type": "choice",
        "prompt": "Câu「いくら嫌いでも、挨拶しないわけにはいかない」nghĩa là gì?",
        "options": [
          "Dù ghét đến mấy thì phép lịch sự tối thiểu vẫn buộc phải chào hỏi",
          "Vì ghét nên không chào",
          "Tôi không biết chào ai",
          "Chào hỏi là không cần thiết"
        ],
        "answer": "Dù ghét đến mấy thì phép lịch sự tối thiểu vẫn buộc phải chào hỏi",
        "explanation": "Phép lịch sự tối thiểu buộc phải làm: 〜ないわけにはいかない."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-8",
        "type": "fill",
        "prompt": "Điền từ hoàn thành mẫu câu: 車を運転するから、お酒を飲む ___ にはいきません。",
        "answer": "わけ",
        "explanation": "Mẫu câu: わけにはいかない."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-9",
        "type": "choice",
        "prompt": "Điền thể thích hợp: 迷惑をかける ___ にはいかない。",
        "options": [
          "わけ",
          "はず",
          "もの",
          "ところ"
        ],
        "answer": "わけ",
        "explanation": "Không thể làm phiền người khác: 迷惑をかけるわけにはいかない."
      },
      {
        "id": "jlpt-n3-wake-niwa-ikanai-10",
        "type": "order",
        "prompt": "Sắp xếp: Vì mọi người đang đợi nên tôi không thể về sớm được.",
        "options": [
          "先に帰るわけにはいきません",
          "みんなが待っているから、"
        ],
        "answer": "みんなが待っているから、先に帰るわけにはいきません",
        "explanation": "Trật tự: みんなが待っているから、+ 先に帰るわけにはいきません."
      }
    ]
  },
  {
    "id": "jlpt-n3-kkonai",
    "pattern": "〜っこない",
    "title": "Tuyệt đối không thể / Không đời nào",
    "level": "N3",
    "position": 257,
    "meaning": "【Dạng 1】Tuyệt đối không thể, không đời nào xảy ra (Phủ định mạnh mẽ trong văn nói)",
    "formation": "Động từ thể ます (bỏ ます) + っこない",
    "explanation": "Dùng trong hội thoại thân mật để phủ định hoàn toàn khả năng xảy ra của một sự việc, thể hiện sự tin chắc của người nói rằng \"chắc chắn không thể nào có chuyện đó\".",
    "notes": "Chú thích phân biệt: Mang tính văn nói khẩu ngữ tương đương với 絶対に〜できない hoặc 〜わけがない. Thường dùng khi bác bỏ một ý tưởng phi thực tế.",
    "mistake": "Không gắn vào thể từ điển (sai: 行くっこない; đúng: 行きっこない).",
    "related": [
      "jlpt-n3-wakehanai",
      "bridge-n3-10"
    ],
    "examples": [
      {
        "ja": "一日でこの分厚い本を全部読めっこないよ。",
        "kana": "いちにちでこのぶあついほんをぜんぶよめっこないよ。",
        "vi": "Làm sao mà trong một ngày có thể đọc hết cuốn sách dày cộp thế này được cơ chứ!",
        "readings": {
          "一日": "いちにち",
          "分厚い": "ぶあつい",
          "本": "ほん",
          "読めっこない": "よめっこない"
        }
      },
      {
        "ja": "彼が約束を忘れっこないよ。",
        "kana": "かれがやくそくをわすれっこないよ。",
        "vi": "Anh ấy đời nào lại quên lời hẹn ước chứ!",
        "readings": {
          "約束": "やくそく",
          "忘れっこない": "わすれっこない"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-kkonai-1",
        "type": "choice",
        "prompt": "そんな難しいこと、でき ___ よ。",
        "options": [
          "っこない",
          "わけない",
          "はずない",
          "ものない"
        ],
        "answer": "っこない",
        "explanation": "Động từ bỏ ます: できます → できっこない."
      },
      {
        "id": "jlpt-n3-kkonai-2",
        "type": "fill",
        "prompt": "Chia động từ「勝ちます」: こんな強い相手に ___ っこないよ (đời nào thắng nổi)。",
        "answer": "勝ち",
        "explanation": "勝ちます bỏ ます là 勝ち + っこない."
      },
      {
        "id": "jlpt-n3-kkonai-3",
        "type": "order",
        "prompt": "Sắp xếp: Làm sao tôi hiểu được cảm xúc của người đó chứ!",
        "options": [
          "分かりっこないよ",
          "あの人の気持ちなんて"
        ],
        "answer": "あの人の気持ちなんて分かりっこないよ",
        "explanation": "Trật tự: あの人の気持ちなんて + 分かりっこないよ."
      },
      {
        "id": "jlpt-n3-kkonai-4",
        "type": "choice",
        "prompt": "Sắc thái của「〜っこない」thường được dùng trong ngữ cảnh nào?",
        "options": [
          "Hội thoại thân mật khẩu ngữ hàng ngày để phủ định mạnh",
          "Báo cáo trang trọng trước hội nghị",
          "Văn bản pháp luật",
          "Thư từ kinh doanh đối tác"
        ],
        "answer": "Hội thoại thân mật khẩu ngữ hàng ngày để phủ định mạnh",
        "explanation": "Là lối nói khẩu ngữ thân mật."
      },
      {
        "id": "jlpt-n3-kkonai-5",
        "type": "fill",
        "prompt": "Chia động từ「走ります」: 今から走ったって間に合い ___ よ (không đời nào kịp)。",
        "answer": "っこない",
        "explanation": "間に合います bỏ ます là 間に合い + っこない."
      },
      {
        "id": "jlpt-n3-kkonai-6",
        "type": "order",
        "prompt": "Sắp xếp: Không đời nào anh ấy lại nói dối đâu.",
        "options": [
          "嘘をつきっこないよ",
          "彼が"
        ],
        "answer": "彼が嘘をつきっこないよ",
        "explanation": "Trật tự: 彼が + 嘘をつきっこないよ."
      },
      {
        "id": "jlpt-n3-kkonai-7",
        "type": "choice",
        "prompt": "Động từ「話します」kết hợp với「っこない」sẽ thành dạng nào?",
        "options": [
          "話しっこない",
          "話すっこない",
          "話したっこない",
          "話してっこない"
        ],
        "answer": "話しっこない",
        "explanation": "話します bỏ ます là 話し + っこない."
      },
      {
        "id": "jlpt-n3-kkonai-8",
        "type": "fill",
        "prompt": "Điền từ: 宝くじなんて当たり ___ よ (trúng thế nào được mà trúng)。",
        "answer": "っこない",
        "explanation": "当たりっこない: Đời nào trúng."
      },
      {
        "id": "jlpt-n3-kkonai-9",
        "type": "choice",
        "prompt": "「一人で全部食べきれっこない」nghĩa là gì?",
        "options": [
          "Một mình thì tuyệt đối không thể nào ăn hết sạch được",
          "Tôi sẽ ăn hết một mình",
          "Ai cũng ăn được hết",
          "Món ăn rất ngon"
        ],
        "answer": "Một mình thì tuyệt đối không thể nào ăn hết sạch được",
        "explanation": "Phủ định hoàn toàn khả năng ăn hết."
      },
      {
        "id": "jlpt-n3-kkonai-10",
        "type": "order",
        "prompt": "Sắp xếp: Không bao giờ tin được những lời đồn như thế đâu.",
        "options": [
          "信じっこないよ",
          "そんな噂"
        ],
        "answer": "そんな噂信じっこないよ",
        "explanation": "Trật tự: そんな噂 + 信じっこないよ."
      }
    ]
  },
  {
    "id": "jlpt-n3-saichuuni",
    "pattern": "〜最中に",
    "title": "Đang đúng lúc cao trào",
    "level": "N3",
    "position": 258,
    "meaning": "【Dạng 1】Đang đúng lúc hành động diễn ra sôi nổi nhất thì có sự việc bất ngờ chen ngang làm gián đoạn",
    "formation": "Động từ thể Vている / Danh từ + の + 最中だ / 最中に",
    "explanation": "Diễn tả khoảnh khắc một hành động đang ở đỉnh điểm cao trào hoặc diễn ra tập trung nhất thì đột ngột xảy ra một việc ngoài ý muốn làm cản trở.",
    "notes": "Chú thích phân biệt: Thường mang sắc thái phiền toái hoặc bất ngờ vì bị gián đoạn. Vế sau là hành động bất ngờ xen vào.",
    "mistake": "Không dùng cho những hành động kéo dài mang tính trạng thái tĩnh (sai: 日本に住んでいる最中に; đúng: 日本に住んでいる間に).",
    "related": [
      "bridge-n3-06",
      "jlpt-n3-uchini"
    ],
    "examples": [
      {
        "ja": "試験の最中に携帯電話が鳴り出しました。",
        "kana": "しけんのさいちゅうにけいたいでんわがなりだしました。",
        "vi": "Đúng lúc đang thi căng thẳng thì điện thoại di động bỗng reo vang.",
        "readings": {
          "試験": "しけん",
          "最中": "さいちゅう",
          "携帯電話": "けいたいでんわ"
        }
      },
      {
        "ja": "食事の最中に客が来ました。",
        "kana": "しょくじのさいちゅうにきゃくがきまました。",
        "vi": "Đúng lúc cả nhà đang ăn cơm thì có khách đến thăm.",
        "readings": {
          "食事": "しょくじ",
          "客": "きゃく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-saichuuni-1",
        "type": "choice",
        "prompt": "会議の ___ に地震が起きました。",
        "options": [
          "最中",
          "うち",
          "間",
          "ところ"
        ],
        "answer": "最中",
        "explanation": "Đúng lúc cuộc họp đang diễn ra: 会議の最中に."
      },
      {
        "id": "jlpt-n3-saichuuni-2",
        "type": "fill",
        "prompt": "Chia động từ「シャワーを浴びます」với 最中に: シャワーを浴びて ___ 最中に電話が鳴った。",
        "answer": "いる",
        "explanation": "Vている + 最中に."
      },
      {
        "id": "jlpt-n3-saichuuni-3",
        "type": "order",
        "prompt": "Sắp xếp: Đúng lúc đang suy nghĩ thì bị bạn cất tiếng gọi.",
        "options": [
          "声をかけられた",
          "考えている最中に"
        ],
        "answer": "考えている最中に声をかけられた",
        "explanation": "Trật tự: 考えている最中に + 声をかけられた."
      },
      {
        "id": "jlpt-n3-saichuuni-4",
        "type": "choice",
        "prompt": "Kết hợp danh từ「スピーチ」với 最中に như thế nào?",
        "options": [
          "スピーチの最中に",
          "スピーチ最中に",
          "スピーチな最中に",
          "スピーチで最中に"
        ],
        "answer": "スピーチの最中に",
        "explanation": "Danh từ + の最中に."
      },
      {
        "id": "jlpt-n3-saichuuni-5",
        "type": "fill",
        "prompt": "Điền từ: 試合の ___ に雨が降ってきた (đang đúng lúc trận đấu diễn ra)。",
        "answer": "最中",
        "explanation": "Mẫu câu: 〜最中に."
      },
      {
        "id": "jlpt-n3-saichuuni-6",
        "type": "order",
        "prompt": "Sắp xếp: Đúng lúc đang phát biểu thì chuông báo cháy reo.",
        "options": [
          "ベルが鳴った",
          "発表している最中に"
        ],
        "answer": "発表している最中にベルが鳴った",
        "explanation": "Trật tự: 発表している最中に + ベルが鳴った."
      },
      {
        "id": "jlpt-n3-saichuuni-7",
        "type": "choice",
        "prompt": "Vế sau của「〜最中に」thường là sự việc có tính chất gì?",
        "options": [
          "Sự việc bất ngờ, thường gây phiền toái hoặc làm gián đoạn",
          "Hành động kéo dài đều đặn",
          "Kế hoạch đã định sẵn từ trước",
          "Lời chúc mừng"
        ],
        "answer": "Sự việc bất ngờ, thường gây phiền toái hoặc làm gián đoạn",
        "explanation": "Biến cố bất ngờ xen vào làm gián đoạn hành động."
      },
      {
        "id": "jlpt-n3-saichuuni-8",
        "type": "fill",
        "prompt": "Chia động từ「話します」: 熱心に ___ いる最中だ (đang say sưa nói chuyện)。",
        "answer": "話して",
        "explanation": "話している + 最中だ."
      },
      {
        "id": "jlpt-n3-saichuuni-9",
        "type": "choice",
        "prompt": "「お取り込み中のところ恐れ入ります」chứa ý nghĩa tương tự như từ nào?",
        "options": [
          "最中 (Đúng lúc đang bận rộn)",
          "後 (Sau khi)",
          "前 (Trước khi)",
          "初め (Mới bắt đầu)"
        ],
        "answer": "最中 (Đúng lúc đang bận rộn)",
        "explanation": "Đúng lúc đang có việc bận rộn."
      },
      {
        "id": "jlpt-n3-saichuuni-10",
        "type": "order",
        "prompt": "Sắp xếp: Đúng lúc đang nấu cơm thì bị cúp điện.",
        "options": [
          "停電になった",
          "料理を作っている最中に"
        ],
        "answer": "料理を作っている最中に停電になった",
        "explanation": "Trật tự: 料理を作っている最中に + 停電になった."
      }
    ]
  },
  {
    "id": "jlpt-n3-uchini",
    "pattern": "〜うちに",
    "title": "Tranh thủ lúc còn / Trong lúc đang",
    "level": "N3",
    "position": 259,
    "meaning": "【Dạng 1】Tranh thủ làm việc gì khi trạng thái còn thuận lợi (Trước khi điều kiện thay đổi)；【Dạng 2】Trong lúc đang làm A thì trạng thái B tự nhiên biến đổi mà không hay biết",
    "formation": "【Dạng 1】V thể từ điển / V thể ない / Tính từ / Danh từ + の + うちに\n【Dạng 2】Vている / V thể từ điển + うちに",
    "explanation": "Có 2 dạng ý nghĩa: Dạng 1 là lời khuyên tranh thủ làm ngay khi điều kiện còn đang tốt (khi còn nóng, khi còn trẻ, trước khi trời mưa); Dạng 2 là sự biến đổi tự nhiên không chủ ý diễn ra trong quá trình một hành động kéo dài.",
    "notes": "Chú thích phân biệt: So với 間に (chỉ đơn thuần nói mốc thời gian khách quan), うちに ở Dạng 1 mang ý thức khẩn trương \"nếu không làm ngay thì điều kiện sẽ biến mất, sau này muốn làm cũng không kịp\".",
    "mistake": "Trước うちに nếu dùng Vない mang nghĩa \"trước khi điều kiện xấu xảy ra\" (ví dụ: 忘れないうちに: tranh thủ lúc chưa quên).",
    "related": [
      "bridge-n3-05",
      "jlpt-n3-saichuuni"
    ],
    "examples": [
      {
        "ja": "温かいうちに早く召し上がってください。",
        "kana": "あたたかいうちにはやくめしあがってください。",
        "vi": "Xin hãy dùng bữa ngay khi món ăn còn đang nóng hổi nhé.",
        "readings": {
          "温かい": "あたたかい",
          "早く": "はやく"
        }
      },
      {
        "ja": "何度も聞いているうちに、意味が分かってきました。",
        "kana": "なんどもきいているうちに、いみがわかってきました。",
        "vi": "Trong lúc nghe đi nghe lại nhiều lần, tôi đã dần hiểu ra ý nghĩa.",
        "readings": {
          "何度も": "なんども",
          "聞いている": "きいている",
          "意味": "いみ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-uchini-1",
        "type": "choice",
        "prompt": "冷めない ___ スープを飲んでください。",
        "options": [
          "うちに",
          "あいだに",
          "までに",
          "まえに"
        ],
        "answer": "うちに",
        "explanation": "Tranh thủ lúc chưa nguội: 冷めないうちに."
      },
      {
        "id": "jlpt-n3-uchini-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối với tính từ な: 元気 ___ うちにいろいろな国へ旅行したい。",
        "answer": "な",
        "explanation": "Tính từ đuôi な + なうちに: 元気なうちに."
      },
      {
        "id": "jlpt-n3-uchini-3",
        "type": "order",
        "prompt": "Sắp xếp: Tranh thủ lúc trời chưa mưa hãy về nhà thôi.",
        "options": [
          "家に帰りましょう",
          "雨が降らないうちに"
        ],
        "answer": "雨が降らないうちに家に帰りましょう",
        "explanation": "Trật tự: 雨が降らないうちに + 家に帰りましょう."
      },
      {
        "id": "jlpt-n3-uchini-4",
        "type": "choice",
        "prompt": "Ý nghĩa của「若いうちに勉強しておきなさい」là gì?",
        "options": [
          "Tranh thủ lúc còn trẻ thì hãy nỗ lực học tập đi",
          "Khi già rồi mới học",
          "Học hành khiến người ta trẻ lại",
          "Người trẻ không cần học"
        ],
        "answer": "Tranh thủ lúc còn trẻ thì hãy nỗ lực học tập đi",
        "explanation": "若いうちに: Khi còn trẻ."
      },
      {
        "id": "jlpt-n3-uchini-5",
        "type": "fill",
        "prompt": "Chia động từ「忘れます」: 記憶が新しい ___ メモを取る (khi chưa quên: 忘れ___)。",
        "answer": "ないうちに",
        "explanation": "忘れないうちに: Tranh thủ lúc chưa quên."
      },
      {
        "id": "jlpt-n3-uchini-6",
        "type": "order",
        "prompt": "Sắp xếp: Trong lúc luyện tập hàng ngày, tôi đã bơi giỏi lúc nào không hay.",
        "options": [
          "上手に泳げるようになった",
          "毎日練習しているうちに"
        ],
        "answer": "毎日練習しているうちに上手に泳げるようになった",
        "explanation": "Trật tự: 毎日練習しているうちに + 上手に泳げるようになった."
      },
      {
        "id": "jlpt-n3-uchini-7",
        "type": "choice",
        "prompt": "Điền trợ từ kết hợp danh từ: 日本にいる ___ 富士山に登りたい。",
        "options": [
          "うちに",
          "までに",
          "からに",
          "とともに"
        ],
        "answer": "うちに",
        "explanation": "Tranh thủ lúc còn ở Nhật: 日本にいるうちに."
      },
      {
        "id": "jlpt-n3-uchini-8",
        "type": "fill",
        "prompt": "Điền dạng nối danh từ: 独身 ___ うちにたくさん遊んでおこう。",
        "answer": "の",
        "explanation": "Danh từ + のうちに: 独身のうちに."
      },
      {
        "id": "jlpt-n3-uchini-9",
        "type": "choice",
        "prompt": "Khác biệt giữa「明るいうちに」và「明るい間に」là:",
        "options": [
          "明るいうちに có sắc thái giục giã khẩn trương kẻo trời tối mất; 明るい間に chỉ là khoảng thời gian thuần túy",
          "Hai câu y hệt nhau",
          "明るい間に là cấm làm",
          "明るいうちに chỉ dùng cho ban đêm"
        ],
        "answer": "明るいうちに có sắc thái giục giã khẩn trương kẻo trời tối mất; 明るい間に chỉ là khoảng thời gian thuần túy",
        "explanation": "うちに nhấn mạnh tính cấp bách tranh thủ."
      },
      {
        "id": "jlpt-n3-uchini-10",
        "type": "order",
        "prompt": "Sắp xếp: Tranh thủ lúc hoa còn chưa tàn, chúng ta đi ngắm hoa nhé.",
        "options": [
          "お花見に行きましょう",
          "桜が散らないうちに"
        ],
        "answer": "桜が散らないうちにお花見に行きましょう",
        "explanation": "Trật tự: 桜が散らないうちに + お花見に行きましょう."
      }
    ]
  },
  {
    "id": "jlpt-n3-tsuujite",
    "pattern": "〜を通じて・〜を通して",
    "title": "Thông qua / Suốt khoảng thời gian",
    "level": "N3",
    "position": 260,
    "meaning": "【Dạng 1】Thông qua phương tiện, người môi giới làm cầu nối (〜を通じて)；【Dạng 2】Trải qua suốt toàn bộ khoảng thời gian liên tục (〜を通して)",
    "formation": "Danh từ + を通じて (つうじて) / を通して (とおして)\nDanh từ + を通じた / を通した + Danh từ",
    "explanation": "Dùng để diễn tả một phương tiện, nhân vật trung gian đóng vai trò cầu nối giúp đạt được thông tin/kết quả; hoặc dùng với các danh từ chỉ thời gian (bốn mùa, cả năm, cả đời) để chỉ sự việc diễn ra xuyên suốt.",
    "notes": "Chú thích phân biệt: Hai từ hầu như có thể thay thế cho nhau. Khi bổ nghĩa cho danh từ phía sau, dùng dạng 〜を通じた N hoặc 〜を通した N.",
    "mistake": "Không dùng を通して cho những công cụ trực tiếp cầm tay như dùng dao cắt (sai: ナイフを通して; đúng: ナイフで).",
    "related": [
      "bridge-n3-24",
      "bridge-n2-36"
    ],
    "examples": [
      {
        "ja": "友人の紹介を通じて、現在の妻と知り合いました。",
        "kana": "ゆうじんのしょうかいをつうじて、げんざいのつまとしりあいました。",
        "vi": "Thông qua sự giới thiệu của một người bạn, tôi đã quen biết người vợ hiện tại.",
        "readings": {
          "友人": "ゆうじん",
          "紹介": "しょうかい",
          "現在": "げんざい",
          "妻": "つま"
        }
      },
      {
        "ja": "この地域は一年を通じて温暖な気候です。",
        "kana": "このちいきはいちねんをつうじておんだんなきこうです。",
        "vi": "Khu vực này có khí hậu ôn hòa ấm áp suốt cả năm.",
        "readings": {
          "地域": "ちいき",
          "一年": "いちねん",
          "温暖": "おんだん",
          "気候": "きこう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-tsuujite-1",
        "type": "choice",
        "prompt": "インターネットを ___ 世界中の情報が手に入る。",
        "options": [
          "通じて",
          "めぐって",
          "対して",
          "沿って"
        ],
        "answer": "通じて",
        "explanation": "Thông qua mạng Internet: インターネットを通じて."
      },
      {
        "id": "jlpt-n3-tsuujite-2",
        "type": "fill",
        "prompt": "Điền từ chỉ sự xuyên suốt thời gian: この島は四季を ___ 花が咲いている。",
        "answer": "通して",
        "explanation": "Suốt bốn mùa: 四季を通して."
      },
      {
        "id": "jlpt-n3-tsuujite-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi biết được tin tức đó thông qua truyền hình.",
        "options": [
          "ニュースを知りました",
          "テレビの報道を通じて"
        ],
        "answer": "テレビの報道を通じてニュースを知りました",
        "explanation": "Trật tự: テレビの報道を通じて + ニュースを知りました."
      },
      {
        "id": "jlpt-n3-tsuujite-4",
        "type": "choice",
        "prompt": "Dạng bổ nghĩa cho danh từ của「〜を通して」là:",
        "options": [
          "〜を通した N",
          "〜を通したの N",
          "〜を通しに N",
          "〜を通しての N"
        ],
        "answer": "〜を通した N",
        "explanation": "Bổ nghĩa danh từ: 〜を通した N (hoặc 〜を通しての N)."
      },
      {
        "id": "jlpt-n3-tsuujite-5",
        "type": "fill",
        "prompt": "Hoàn thiện câu: スポーツを ___ 健康な体を作る (thông qua thể thao)。",
        "answer": "通じて",
        "explanation": "スポーツを通じて."
      },
      {
        "id": "jlpt-n3-tsuujite-6",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy đã làm việc cống hiến suốt cả cuộc đời mình.",
        "options": [
          "研究を続けました",
          "生涯を通じて"
        ],
        "answer": "生涯を通じて研究を続けました",
        "explanation": "Trật tự: 生涯を通じて + 研究を続けました."
      },
      {
        "id": "jlpt-n3-tsuujite-7",
        "type": "choice",
        "prompt": "Câu nào dùng SAI ngữ pháp với「〜を通じて」?",
        "options": [
          "ハサミを通じて紙を切る",
          "ボランティア活動を通じて多くのことを学んだ",
          "知人を通じて仕事を探す",
          "一年を通じて観光客が訪れる"
        ],
        "answer": "ハサミを通じて紙を切る",
        "explanation": "Dụng cụ cầm tay trực tiếp như kéo cắt giấy dùng trợ từ で (ハサミで), không dùng を通じて."
      },
      {
        "id": "jlpt-n3-tsuujite-8",
        "type": "fill",
        "prompt": "Điền trợ từ: 読書 ___ 豊かな教養を身につける。",
        "answer": "を通して",
        "explanation": "読書を通して: Thông qua việc đọc sách."
      },
      {
        "id": "jlpt-n3-tsuujite-9",
        "type": "choice",
        "prompt": "「一年を通じて」nghĩa là gì?",
        "options": [
          "Xuyên suốt từ đầu năm đến cuối năm",
          "Chỉ một tháng trong năm",
          "Vào mùa hè",
          "Không bao giờ trong năm"
        ],
        "answer": "Xuyên suốt từ đầu năm đến cuối năm",
        "explanation": "Suốt cả năm trời."
      },
      {
        "id": "jlpt-n3-tsuujite-10",
        "type": "order",
        "prompt": "Sắp xếp: Thông qua kỳ thực tập, tôi đã học hỏi được nhiều kinh nghiệm quý báu.",
        "options": [
          "貴重な体験ができました",
          "インターンシップを通じて"
        ],
        "answer": "インターンシップを通じて貴重な体験ができました",
        "explanation": "Trật tự: インターンシップを通じて + 貴重な体験ができました."
      }
    ]
  },
  {
    "id": "jlpt-n3-nichigainai",
    "pattern": "〜に違いない",
    "title": "Chắc chắn là",
    "level": "N3",
    "position": 261,
    "meaning": "【Dạng 1】Chắc chắn là... (Khẳng định với độ tin cậy rất cao từ suy luận cá nhân)",
    "formation": "Thể thông thường (Tính từ na / Danh từ bỏ だ) + に違いない / に違いありません",
    "explanation": "Dùng khi người nói dựa trên một chứng cứ hoặc trực giác mạnh mẽ để khẳng định chắc chắn 90-99% rằng một việc là đúng như thế, không thể sai lệch đi đâu được.",
    "notes": "Chú thích phân biệt: So với 〜はずだ (dựa trên lý lẽ khách quan, lịch trình tất yếu), 〜に違いない mang sắc thái phán đoán chủ quan, quyết đoán và cảm tính mạnh mẽ hơn.",
    "mistake": "Không thêm だ sau danh từ và tính từ đuôi な (sai: 犯人だに違いない; đúng: 犯人に違いない).",
    "related": [
      "bridge-n3-09",
      "bridge-n2-43"
    ],
    "examples": [
      {
        "ja": "夜遅くまで電気がついているから、まだ残業しているに違いない。",
        "kana": "よるおそくまででんきがついているから、まだざんぎょうしているにちがいない。",
        "vi": "Đèn vẫn sáng đến tận đêm khuya thế kia, chắc chắn là anh ấy vẫn đang tăng ca rồi.",
        "readings": {
          "夜遅く": "よるおそく",
          "残業": "ざんぎょう",
          "違い": "ちがい"
        }
      },
      {
        "ja": "犯人はあの男に違いありません。",
        "kana": "はんにんはあのおとこにちがいありません。",
        "vi": "Thủ phạm chắc chắn chính là gã đàn ông đó.",
        "readings": {
          "犯人": "はんにん",
          "男": "おとこ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-nichigainai-1",
        "type": "choice",
        "prompt": "あれだけ勉強したのだから、合格する ___。",
        "options": [
          "に違いない",
          "に決まった",
          "はずがない",
          "わけがない"
        ],
        "answer": "に違いない",
        "explanation": "Khẳng định chắc chắn: 合格するに違いない."
      },
      {
        "id": "jlpt-n3-nichigainai-2",
        "type": "fill",
        "prompt": "Điền từ chắc chắn: 鍵がない。どこかに落としたに ___ ない。",
        "answer": "違い",
        "explanation": "〜に違いない: Chắc chắn là đã làm rơi."
      },
      {
        "id": "jlpt-n3-nichigainai-3",
        "type": "order",
        "prompt": "Sắp xếp: Chắc chắn anh ấy đang rất buồn bã.",
        "options": [
          "悲しんでいるに違いありません",
          "彼は今頃"
        ],
        "answer": "彼は今頃悲しんでいるに違いありません",
        "explanation": "Trật tự: 彼は今頃 + 悲しんでいるに違いありません."
      },
      {
        "id": "jlpt-n3-nichigainai-4",
        "type": "choice",
        "prompt": "Cách kết hợp của danh từ「本物」(đồ thật) với「に違いない」:",
        "options": [
          "本物に違いない",
          "本物だに違いない",
          "本物の違いない",
          "本物でに違いない"
        ],
        "answer": "本物に違いない",
        "explanation": "Danh từ bỏ だ đi trực tiếp: 本物に違いない."
      },
      {
        "id": "jlpt-n3-nichigainai-5",
        "type": "fill",
        "prompt": "Điền đuôi lịch sự: これが一番いい方法に違い ___。",
        "answer": "ありません",
        "explanation": "Dạng lịch sự: に違いありません."
      },
      {
        "id": "jlpt-n3-nichigainai-6",
        "type": "order",
        "prompt": "Sắp xếp: Món ăn này trông ngon thế kia thì chắc chắn là đắt tiền rồi.",
        "options": [
          "高いに違いない",
          "この料理は"
        ],
        "answer": "この料理は高いに違いない",
        "explanation": "Trật tự: この料理は + 高いに違いない."
      },
      {
        "id": "jlpt-n3-nichigainai-7",
        "type": "choice",
        "prompt": "Mức độ chắc chắn của「〜に違いない」so với「〜かもしれない」:",
        "options": [
          "Cao hơn rất nhiều (gần như chắc chắn 100% so với 50%)",
          "Thấp hơn",
          "Bằng nhau",
          "Đều là phủ định"
        ],
        "answer": "Cao hơn rất nhiều (gần như chắc chắn 100% so với 50%)",
        "explanation": "に違いない khẳng định chắc nịch không còn nghi ngờ."
      },
      {
        "id": "jlpt-n3-nichigainai-8",
        "type": "fill",
        "prompt": "Chia tính từ な「便利」: 新幹線はとても ___ に違いない。",
        "answer": "便利",
        "explanation": "Tính từ na bỏ な/だ: 便利に違いない."
      },
      {
        "id": "jlpt-n3-nichigainai-9",
        "type": "choice",
        "prompt": "「誰も知らないに違いない」nghĩa là gì?",
        "options": [
          "Chắc chắn không có một ai biết chuyện này",
          "Có lẽ có người biết",
          "Ai cũng biết hết",
          "Tôi không biết"
        ],
        "answer": "Chắc chắn không có một ai biết chuyện này",
        "explanation": "Chắc chắn không ai biết."
      },
      {
        "id": "jlpt-n3-nichigainai-10",
        "type": "order",
        "prompt": "Sắp xếp: Tin đồn đó chắc chắn là sai sự thật.",
        "options": [
          "嘘に違いない",
          "その噂は"
        ],
        "answer": "その噂は嘘に違いない",
        "explanation": "Trật tự: その噂は + 嘘に違いない."
      }
    ]
  },
  {
    "id": "jlpt-n3-hanmen",
    "pattern": "〜反面",
    "title": "Một mặt... nhưng mặt khác",
    "level": "N3",
    "position": 262,
    "meaning": "【Dạng 1】Hai mặt đối lập cùng tồn tại song song trong một sự vật hiện tượng",
    "formation": "Thể thông thường (Tính từ na + な / である, Danh từ + である) + 反面",
    "explanation": "Dùng để diễn tả hai mặt trái ngược, tương phản cùng tồn tại đồng thời trong cùng một chủ thể, người hoặc sự việc (ví dụ: tiện lợi nhưng đắt đỏ; có ưu điểm nhưng cũng có nhược điểm).",
    "notes": "Chú thích phân biệt: Đối tượng được miêu tả ở hai vế phải là CÙNG MỘT SỰ VẬT/NGƯỜI (mặt tốt đi cùng mặt xấu).",
    "mistake": "Không dùng cho 2 người khác nhau ở 2 vế (trường hợp so sánh 2 người dùng 一方で).",
    "related": [
      "bridge-n3-18",
      "bridge-n2-25"
    ],
    "examples": [
      {
        "ja": "都会の生活は便利な反面、生活費が高い。",
        "kana": "とかいのせいかつはべんりなはんめん、せいかつひがたかい。",
        "vi": "Cuộc sống ở đô thị một mặt thì rất tiện lợi, nhưng mặt khác chi phí sinh hoạt lại đắt đỏ.",
        "readings": {
          "都会": "とかい",
          "生活": "せいかつ",
          "便利": "べんり",
          "反面": "はんめん",
          "生活費": "せいかつひ"
        }
      },
      {
        "ja": "この薬はよく効く反面、副作用も強い。",
        "kana": "このくすりはよくきくはんめん、ふくさようもつよい。",
        "vi": "Loại thuốc này hiệu quả rất tốt nhưng mặt trái lại có tác dụng phụ khá mạnh.",
        "readings": {
          "薬": "くすり",
          "効く": "きく",
          "副作用": "ふくさよう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-hanmen-1",
        "type": "choice",
        "prompt": "一人暮らしは自由な ___ 、寂しいこともある。",
        "options": [
          "反面",
          "ため",
          "おかげ",
          "せい"
        ],
        "answer": "反面",
        "explanation": "Tự do nhưng mặt khác cô đơn: 自由な反面."
      },
      {
        "id": "jlpt-n3-hanmen-2",
        "type": "fill",
        "prompt": "Điền từ chỉ tính 2 mặt: 給料が高い ___ 、残業が多くて大変だ。",
        "answer": "反面",
        "explanation": "〜反面: Mặt khác."
      },
      {
        "id": "jlpt-n3-hanmen-3",
        "type": "order",
        "prompt": "Sắp xếp: Công việc này trách nhiệm nặng nề nhưng đổi lại rất có ý nghĩa.",
        "options": [
          "やりがいもある",
          "責任が重い反面、"
        ],
        "answer": "責任が重い反面、やりがいもある",
        "explanation": "Trật tự: 責任が重い反面、+ やりがいもある."
      },
      {
        "id": "jlpt-n3-hanmen-4",
        "type": "choice",
        "prompt": "Tính từ な「便利」khi kết hợp với「反面」chia như thế nào?",
        "options": [
          "便利な反面",
          "便利反面",
          "便利の反面",
          "便利に反面"
        ],
        "answer": "便利な反面",
        "explanation": "Tính từ na + な反面: 便利な反面."
      },
      {
        "id": "jlpt-n3-hanmen-5",
        "type": "fill",
        "prompt": "Chia động từ「使います」: この車は便利な ___ 、維持費がかかる。",
        "answer": "反面",
        "explanation": "Mẫu câu: 〜反面."
      },
      {
        "id": "jlpt-n3-hanmen-6",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy nghiêm khắc nhưng mặt khác lại rất chu đáo.",
        "options": [
          "とても優しいところもある",
          "厳しい反面、",
          "彼は"
        ],
        "answer": "彼は厳しい反面、とても優しいところもある",
        "explanation": "Trật tự: 彼は + 厳しい反面、+ とても優しいところもある."
      },
      {
        "id": "jlpt-n3-hanmen-7",
        "type": "choice",
        "prompt": "Đặc trưng cơ bản của mẫu câu「〜反面」là:",
        "options": [
          "Nêu 2 mặt đối lập của cùng 1 đối tượng",
          "Chỉ nói về mặt tích cực",
          "Chỉ nói về mặt tiêu cực",
          "So sánh 2 đất nước với nhau"
        ],
        "answer": "Nêu 2 mặt đối lập của cùng 1 đối tượng",
        "explanation": "Nêu tính chất 2 mặt của cùng 1 sự vật."
      },
      {
        "id": "jlpt-n3-hanmen-8",
        "type": "fill",
        "prompt": "Điền dạng kết hợp danh từ: 彼は学者である ___ 、優れた実業家でもある。",
        "answer": "反面",
        "explanation": "Danh từ + である反面."
      },
      {
        "id": "jlpt-n3-hanmen-9",
        "type": "choice",
        "prompt": "「パソコンは便利な反面、目が疲れやすい」nghĩa là:",
        "options": [
          "Máy tính một mặt rất tiện lợi nhưng mặt khác lại dễ gây mỏi mắt",
          "Máy tính không tiện",
          "Máy tính làm mắt sáng hơn",
          "Không nên dùng máy tính"
        ],
        "answer": "Máy tính một mặt rất tiện lợi nhưng mặt khác lại dễ gây mỏi mắt",
        "explanation": "Hai mặt tiện lợi và mỏi mắt."
      },
      {
        "id": "jlpt-n3-hanmen-10",
        "type": "order",
        "prompt": "Sắp xếp: Du lịch một mình tự do nhưng mặt khác cũng có lúc bất an.",
        "options": [
          "不安なこともある",
          "一人旅は気楽な反面、"
        ],
        "answer": "一人旅は気楽な反面、不安なこともある",
        "explanation": "Trật tự: 一人旅は気楽な反面、+ 不安なこともある."
      }
    ]
  },
  {
    "id": "jlpt-n3-totomoni",
    "pattern": "〜とともに",
    "title": "Cùng với / Đồng thời kéo theo",
    "level": "N3",
    "position": 263,
    "meaning": "【Dạng 1】Cùng với ai đó (Đồng hành: Danh từ + とともに)；【Dạng 2】A thay đổi đồng thời kéo theo B biến đổi；【Dạng 3】Vừa là A đồng thời cũng là B",
    "formation": "【Dạng 1】Danh từ + とともに\n【Dạng 2】Động từ thể từ điển (Vる) + とともに\n【Dạng 3】Thể thông thường + とともに",
    "explanation": "Dùng trong văn phong trang trọng để diễn tả sự đồng hành cùng ai đó, hoặc sự biến đổi song hành cùng lúc giữa hai hiện tượng.",
    "notes": "Chú thích phân biệt: So với 〜と一緒に (văn nói thân mật), 〜とともに mang sắc thái trang trọng, văn viết hơn.",
    "mistake": "Tránh dùng 〜とともに cho những việc vặt khẩu ngữ suồng sã.",
    "related": [
      "bridge-n3-13",
      "jlpt-n3-nitsurete"
    ],
    "examples": [
      {
        "ja": "時代の変化とともに、人々の価値観も変わってきた。",
        "kana": "じだいのへんかとともに、ひとびとのかちかんもかわってきた。",
        "vi": "Cùng với sự đổi thay của thời đại, giá trị quan của con người cũng đổi thay theo.",
        "readings": {
          "時代": "じだい",
          "変化": "へんか",
          "価値観": "かちかん"
        }
      },
      {
        "ja": "家族とともに新年を祝いました。",
        "kana": "かぞくとともにしんねんをいわいました。",
        "vi": "Tôi đã cùng với gia đình đón mừng năm mới.",
        "readings": {
          "家族": "かぞく",
          "新年": "しんねん",
          "祝い": "いわい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-totomoni-1",
        "type": "choice",
        "prompt": "経済の発展と ___ 、環境破壊が進んだ。",
        "options": [
          "ともに",
          "つれて",
          "したがって",
          "よって"
        ],
        "answer": "ともに",
        "explanation": "Cùng với sự phát triển kinh tế: 経済の発展とともに."
      },
      {
        "id": "jlpt-n3-totomoni-2",
        "type": "fill",
        "prompt": "Điền từ đồng hành trang trọng: 恩師と ___ 記念写真を撮った。",
        "answer": "ともに",
        "explanation": "Cùng với ân sư: 恩師とともに."
      },
      {
        "id": "jlpt-n3-totomoni-3",
        "type": "order",
        "prompt": "Sắp xếp: Cùng với việc dân số già hóa, chi phí y tế đang tăng lên.",
        "options": [
          "医療費が増加している",
          "高齢化が進むとともに、"
        ],
        "answer": "高齢化が進むとともに、医療費が増加している",
        "explanation": "Trật tự: 高齢化が進むとともに、+ 医療費が増加している."
      },
      {
        "id": "jlpt-n3-totomoni-4",
        "type": "choice",
        "prompt": "Trong văn phong trang trọng, cụm từ nào tương đương với「家族と一緒に」?",
        "options": [
          "家族とともに",
          "家族につれて",
          "家族にとって",
          "家族において"
        ],
        "answer": "家族とともに",
        "explanation": "家族とともに là cách nói trang trọng của 家族と一緒に."
      },
      {
        "id": "jlpt-n3-totomoni-5",
        "type": "fill",
        "prompt": "Điền động từ thể từ điển: 年をとる ___ 体力が衰えてくる。",
        "answer": "とともに",
        "explanation": "Cùng với tuổi tác: 年をとるとともに."
      },
      {
        "id": "jlpt-n3-totomoni-6",
        "type": "order",
        "prompt": "Sắp xếp: Chiến thắng này đem lại niềm vui và đồng thời là trách nhiệm lớn.",
        "options": [
          "重い責任も感じている",
          "優勝の喜びとともに、"
        ],
        "answer": "優勝の喜びとともに、重い責任も感じている",
        "explanation": "Trật tự: 優勝の喜びとともに、+ 重い責任も感じている."
      },
      {
        "id": "jlpt-n3-totomoni-7",
        "type": "choice",
        "prompt": "Vế trước「〜とともに」ở Dạng 2 (biến đổi) thường là các từ chỉ gì?",
        "options": [
          "Sự thay đổi tiến triển (phát triển, biến đổi, già đi, tăng trưởng)",
          "Đồ vật tĩnh tại",
          "Tên màu sắc",
          "Đồ ăn uống"
        ],
        "answer": "Sự thay đổi tiến triển (phát triển, biến đổi, già đi, tăng trưởng)",
        "explanation": "Chỉ các quá trình biến đổi đồng thời."
      },
      {
        "id": "jlpt-n3-totomoni-8",
        "type": "fill",
        "prompt": "Điền từ: インターネットの普及と ___ 、生活が便利になった。",
        "answer": "ともに",
        "explanation": "インターネットの普及とともに."
      },
      {
        "id": "jlpt-n3-totomoni-9",
        "type": "choice",
        "prompt": "「夜明けとともに鳥たちが鳴き始めた」nghĩa là:",
        "options": [
          "Cùng với lúc bình minh vừa hé rạng thì bầy chim cất tiếng hót",
          "Sau khi trời sáng chim mới hót",
          "Trước khi bình minh chim đã hót",
          "Chim không hót"
        ],
        "answer": "Cùng với lúc bình minh vừa hé rạng thì bầy chim cất tiếng hót",
        "explanation": "Cùng lúc bình minh vừa ló dạng."
      },
      {
        "id": "jlpt-n3-totomoni-10",
        "type": "order",
        "prompt": "Sắp xếp: Cùng với sự hồi phục kinh tế, thị trường việc làm cũng khởi sắc.",
        "options": [
          "雇用情勢も改善してきた",
          "景気の回復とともに、"
        ],
        "answer": "景気の回復とともに、雇用情勢も改善してきた",
        "explanation": "Trật tự: 景気の回復とともに、+ 雇用情勢も改善してきた."
      }
    ]
  },
  {
    "id": "jlpt-n3-nitsurete",
    "pattern": "〜につれて・〜にしたがって",
    "title": "Càng... càng / Tuân theo",
    "level": "N3",
    "position": 264,
    "meaning": "【Dạng 1】A biến đổi kéo theo B biến đổi tự nhiên theo tỷ lệ thuận (〜につれて)；【Dạng 2】Tuân theo quy tắc, chỉ thị (〜にしたがって)",
    "formation": "【Dạng 1】Động từ thể từ điển (Vる) / Danh từ chỉ biến đổi + につれて / に従って\n【Dạng 2】Danh từ chỉ luật lệ / chỉ thị + に従って (ルールに従って)",
    "explanation": "Dùng để diễn tả một sự biến đổi tự nhiên mang tính tỷ lệ thuận, khi một yếu tố thay đổi thì yếu tố khác cũng dần biến chuyển theo. Ngoài ra, に従って còn mang nghĩa tuân thủ quy tắc.",
    "notes": "Chú thích phân biệt: につれて chỉ dùng cho biến đổi một chiều tự nhiên, KHÔNG dùng nghĩa tuân theo người khác; に従って có thể dùng cả nghĩa biến đổi và nghĩa \"tuân thủ mệnh lệnh, luật lệ\".",
    "mistake": "Không dùng 〜につれて khi vế sau là hành động cố ý hay mệnh lệnh (sai: 台風が近づくにつれて家にいなさい).",
    "related": [
      "bridge-n3-13",
      "jlpt-n3-totomoni"
    ],
    "examples": [
      {
        "ja": "台風が近づくにつれて、風と雨が強くなってきた。",
        "kana": "たいふうがちかづくにつれて、かぜとあめがつよくなってきた。",
        "vi": "Càng tiến gần đến tâm bão thì mưa gió lại càng lúc càng dữ dội.",
        "readings": {
          "台風": "たいふう",
          "近づく": "ちかづく",
          "風": "かぜ",
          "雨": "あめ",
          "強く": "つよく"
        }
      },
      {
        "ja": "先生の指示に従って実験を行ってください。",
        "kana": "せんせいのしじにしたがってじっけんをおこなってください。",
        "vi": "Xin hãy tiến hành thí nghiệm tuân theo đúng chỉ thị của giáo viên.",
        "readings": {
          "指示": "しじ",
          "従って": "したがって",
          "実験": "じっけん"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-nitsurete-1",
        "type": "choice",
        "prompt": "山を高く登るに ___ 、気温が下がっていきます。",
        "options": [
          "つれて",
          "反して",
          "向かって",
          "対して"
        ],
        "answer": "つれて",
        "explanation": "Càng leo lên cao thì nhiệt độ càng hạ: 登るにつれて."
      },
      {
        "id": "jlpt-n3-nitsurete-2",
        "type": "fill",
        "prompt": "Điền từ tuân theo chỉ thị: 係員の案内に ___ お進みください。",
        "answer": "従って",
        "explanation": "Tuân theo hướng dẫn: 案内に従って."
      },
      {
        "id": "jlpt-n3-nitsurete-3",
        "type": "order",
        "prompt": "Sắp xếp: Càng trưởng thành thì bạn bè lại càng ít dần đi.",
        "options": [
          "友達が少なくなってきた",
          "大人になるにつれて、"
        ],
        "answer": "大人になるにつれて、友達が少なくなってきた",
        "explanation": "Trật tự: 大人になるにつれて、+ 友達が少なくなってきた."
      },
      {
        "id": "jlpt-n3-nitsurete-4",
        "type": "choice",
        "prompt": "Điểm khác biệt quan trọng giữa「〜にしたがって」và「〜につれて」là:",
        "options": [
          "にしたがって có thể mang nghĩa tuân theo luật lệ/chỉ thị của người khác, còn につれて thì không",
          "につれて chỉ dùng cho quá khứ",
          "Hai từ không bao giờ thay thế được",
          "にしたがって chỉ dùng trong hội thoại thân mật"
        ],
        "answer": "にしたがって có thể mang nghĩa tuân theo luật lệ/chỉ thị của người khác, còn につれて thì không",
        "explanation": "〜に従って có thêm nét nghĩa tuân thủ quy tắc."
      },
      {
        "id": "jlpt-n3-nitsurete-5",
        "type": "fill",
        "prompt": "Chia động từ「年をとります」: 年をとるに ___ 、物忘れが多くなる。",
        "answer": "つれて",
        "explanation": "年をとるにつれて: Càng có tuổi."
      },
      {
        "id": "jlpt-n3-nitsurete-6",
        "type": "order",
        "prompt": "Sắp xếp: Hãy tuân thủ đúng nội quy của ký túc xá.",
        "options": [
          "生活してください",
          "寮の規則に従って"
        ],
        "answer": "寮の規則に従って生活してください",
        "explanation": "Trật tự: 寮の規則に従って + 生活してください."
      },
      {
        "id": "jlpt-n3-nitsurete-7",
        "type": "choice",
        "prompt": "Động từ trước「〜につれて」phải là dạng nào?",
        "options": [
          "Động từ thể từ điển biểu thị sự biến đổi",
          "Động từ thể quá khứ",
          "Động từ thể ý chí",
          "Động từ thể mệnh lệnh"
        ],
        "answer": "Động từ thể từ điển biểu thị sự biến đổi",
        "explanation": "Động từ thể từ điển chỉ quá trình biến đổi."
      },
      {
        "id": "jlpt-n3-nitsurete-8",
        "type": "fill",
        "prompt": "Điền từ: 時間の経過に ___ 、悲しみも薄れていった。",
        "answer": "つれて",
        "explanation": "時間の経過につれて: Cùng với thời gian trôi qua."
      },
      {
        "id": "jlpt-n3-nitsurete-9",
        "type": "choice",
        "prompt": "「法律に従って処罰される」nghĩa là gì?",
        "options": [
          "Bị xử phạt đúng theo quy định của pháp luật",
          "Pháp luật bị thay đổi",
          "Trừng phạt pháp luật",
          "Không theo pháp luật"
        ],
        "answer": "Bị xử phạt đúng theo quy định của pháp luật",
        "explanation": "Tuân thủ đúng pháp luật."
      },
      {
        "id": "jlpt-n3-nitsurete-10",
        "type": "order",
        "prompt": "Sắp xếp: Càng về chiều muộn thì nhiệt độ càng hạ thấp.",
        "options": [
          "寒くなってきた",
          "日が暮れるにつれて、"
        ],
        "answer": "日が暮れるにつれて、寒くなってきた",
        "explanation": "Trật tự: 日が暮れるにつれて、+ 寒くなってきた."
      }
    ]
  },
  {
    "id": "jlpt-n3-sai-ni",
    "pattern": "〜際(に)・〜際の",
    "title": "Khi / Vào thời điểm trọng đại",
    "level": "N3",
    "position": 265,
    "meaning": "【Dạng 1】Khi, vào thời điểm trang trọng (Cách nói trang trọng của とき)",
    "formation": "Động từ thể từ điển (Vる) / V thể た / Danh từ + の + 際(に)",
    "explanation": "Dùng như một cách nói trang trọng, lịch sự của từ とき (khi), thường xuất hiện trong các thông báo nghi thức, hướng dẫn dịch vụ hoặc văn bản kinh doanh.",
    "notes": "Chú thích phân biệt: Khác với とき (dùng tự do trong giao tiếp hàng ngày), 際 mang tính nghi thức và trang trọng, không dùng cho những việc vặt vãnh thông thường.",
    "mistake": "Tránh dùng 際 khi nói về các thói quen hàng ngày với bạn bè (ví dụ: 朝起きた際 là gượng gạo, nên dùng 朝起きたとき).",
    "related": [
      "bridge-n3-06",
      "mnn-23"
    ],
    "examples": [
      {
        "ja": "非常の際は、エレベーターを使わないでください。",
        "kana": "ひじょうのさいは、えれべーたーをつかわないでください。",
        "vi": "Trong trường hợp khẩn cấp, xin vui lòng không sử dụng thang máy.",
        "readings": {
          "非常": "ひじょう",
          "際": "さい"
        }
      },
      {
        "ja": "お申し込みの際は、身分証明書をご提示ください。",
        "kana": "おもうしこみのさいは、みぶんしょうめいしょをごていじください。",
        "vi": "Khi đăng ký, xin quý khách vui lòng xuất trình giấy tờ tùy thân.",
        "readings": {
          "申込": "もうしこみ",
          "身分証明書": "みぶんしょうめいしょ",
          "提示": "ていじ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-sai-ni-1",
        "type": "choice",
        "prompt": "帰国の ___ 、先生にお世話になったお礼を言いました。",
        "options": [
          "際",
          "うち",
          "間",
          "最中"
        ],
        "answer": "際",
        "explanation": "Vào thời điểm về nước: 帰国の際."
      },
      {
        "id": "jlpt-n3-sai-ni-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối danh từ với 際: 会員登録 ___ 際はメールアドレスが必要です。",
        "answer": "の",
        "explanation": "Danh từ + の際(に)."
      },
      {
        "id": "jlpt-n3-sai-ni-3",
        "type": "order",
        "prompt": "Sắp xếp: Khi sử dụng dịch vụ, xin hãy đọc kỹ điều khoản.",
        "options": [
          "利用規約をお読みください",
          "ご利用の際は、"
        ],
        "answer": "ご利用の際は、利用規約をお読みください",
        "explanation": "Trật tự: ご利用の際は、+ 利用規約をお読みください."
      },
      {
        "id": "jlpt-n3-sai-ni-4",
        "type": "choice",
        "prompt": "So với「〜とき」,「〜際」có đặc điểm văn phong gì?",
        "options": [
          "Trang trọng, mang tính nghi thức và thường dùng trong văn bản thông báo",
          "Là tiếng lóng của giới trẻ",
          "Chỉ dùng cho trẻ em",
          "Thô lỗ hơn"
        ],
        "answer": "Trang trọng, mang tính nghi thức và thường dùng trong văn bản thông báo",
        "explanation": "Đặc trưng trang trọng, nghi thức."
      },
      {
        "id": "jlpt-n3-sai-ni-5",
        "type": "fill",
        "prompt": "Chia động từ「支払います」: お支払いの ___ はクレジットカードがご利用いただけます。",
        "answer": "際",
        "explanation": "お支払いの際は: Khi thanh toán."
      },
      {
        "id": "jlpt-n3-sai-ni-6",
        "type": "order",
        "prompt": "Sắp xếp: Khi bạn đến thăm Nhật Bản lần tới, nhất định hãy liên lạc với tôi nhé.",
        "options": [
          "ぜひ連絡してください",
          "今度来日された際には、"
        ],
        "answer": "今度来日された際には、ぜひ連絡してください",
        "explanation": "Trật tự: 今度来日された際には、+ ぜひ連絡してください."
      },
      {
        "id": "jlpt-n3-sai-ni-7",
        "type": "choice",
        "prompt": "Khi bổ nghĩa trực tiếp cho danh từ,「際」biến đổi thành dạng nào?",
        "options": [
          "〜の際の N",
          "〜の際な N",
          "〜の際に N",
          "〜の際で N"
        ],
        "answer": "〜の際の N",
        "explanation": "Bổ nghĩa danh từ: 〜の際の N (ví dụ: 非常の際の避難経路)."
      },
      {
        "id": "jlpt-n3-sai-ni-8",
        "type": "fill",
        "prompt": "Điền thể từ điển của「質問します」: ご質問が ___ 際はお気軽にお尋ねください (khi có câu hỏi: ご質問がある___)。",
        "answer": "ある際",
        "explanation": "ある際: Khi có câu hỏi."
      },
      {
        "id": "jlpt-n3-sai-ni-9",
        "type": "choice",
        "prompt": "「お降りの際は、足元にご注意ください」thường được phát ở đâu?",
        "options": [
          "Trên tàu điện hoặc xe buýt công cộng",
          "Ở bãi biển",
          "Trong phòng ngủ",
          "Ở rạp chiếu phim lúc đang chiếu"
        ],
        "answer": "Trên tàu điện hoặc xe buýt công cộng",
        "explanation": "Thông báo trên tàu xe công cộng."
      },
      {
        "id": "jlpt-n3-sai-ni-10",
        "type": "order",
        "prompt": "Sắp xếp: Khi mở nắp chai, xin hãy chú ý để nước không bắn ra ngoài.",
        "options": [
          "ご注意ください",
          "蓋を開ける際は、"
        ],
        "answer": "蓋を開ける際は、ご注意ください",
        "explanation": "Trật tự: 蓋を開ける際は、+ ご注意ください."
      }
    ]
  },
  {
    "id": "jlpt-n3-totan",
    "pattern": "〜たとたん(に)",
    "title": "Vừa mới dứt thì ngay lập tức",
    "level": "N3",
    "position": 266,
    "meaning": "【Dạng 1】Vừa mới dứt hành động thì ngay lập tức xảy ra điều bất ngờ ngoài dự kiến",
    "formation": "Động từ thể quá khứ (Vた) + とたん(に)",
    "explanation": "Diễn tả một sự việc hoặc phản ứng bất ngờ, ngoài ý muốn lập tức xảy ra ngay tại thời điểm vừa dứt một hành động nào đó.",
    "notes": "Chú thích phân biệt: Vế sau KHÔNG ĐƯỢC dùng hành động ý chí, nguyện vọng, rủ rê hay mệnh lệnh (ví dụ: không dùng たとたん đi với 〜たい hay 〜てください). Vế sau luôn là sự việc xảy ra khách quan bất ngờ.",
    "mistake": "Trước とたん luôn là động từ thể quá khứ Vた (sai: 開けるとたん; đúng: 開けたとたん).",
    "related": [
      "bridge-n3-06",
      "bridge-n2-38"
    ],
    "examples": [
      {
        "ja": "ドアを開けたとたん、猫が飛び出してきた。",
        "kana": "どあをあけたとたん、ねこがとびだしてきた。",
        "vi": "Vừa mới mở cửa ra thì chú mèo đã bất ngờ lao vụt ra ngoài.",
        "readings": {
          "開けた": "あけた",
          "猫": "ねこ",
          "飛び出してきた": "とびだしてきた"
        }
      },
      {
        "ja": "一口飲んだとたんに、辛くて吹き出してしまった。",
        "kana": "ひとくちのんだとたんに、からくてふきだしてしまった。",
        "vi": "Vừa mới nhấp một ngụm thì cay quá đến mức phun phụt cả ra ngoài.",
        "readings": {
          "一口": "ひとくち",
          "飲んだ": "のんだ",
          "辛くて": "からくて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-totan-1",
        "type": "choice",
        "prompt": "疲れていたので、ベッドに入った ___ 眠ってしまった。",
        "options": [
          "とたん",
          "うちに",
          "最中",
          "ところ"
        ],
        "answer": "とたん",
        "explanation": "Vừa ngả lưng xuống giường là ngủ thiếp đi ngay: 入ったとたん."
      },
      {
        "id": "jlpt-n3-totan-2",
        "type": "fill",
        "prompt": "Chia động từ「立ち上がります」với とたん: 立ち上がっ ___ めまいがした (vừa đứng dậy thì hoa mắt)。",
        "answer": "たとたん",
        "explanation": "Vた + とたん: 立ち上がったとたん."
      },
      {
        "id": "jlpt-n3-totan-3",
        "type": "order",
        "prompt": "Sắp xếp: Vừa nhìn thấy mặt mẹ là đứa bé òa khóc.",
        "options": [
          "泣き出しました",
          "母親の顔を見たとたんに、"
        ],
        "answer": "母親の顔を見たとたんに、泣き出しました",
        "explanation": "Trật tự: 母親の顔を見たとたんに、+ 泣き出しました."
      },
      {
        "id": "jlpt-n3-totan-4",
        "type": "choice",
        "prompt": "Vế sau của「〜たとたん」có được dùng câu mệnh lệnh như「〜てください」không?",
        "options": [
          "Không, tuyệt đối không được dùng câu mệnh lệnh/ý chí",
          "Có, rất hay dùng",
          "Bắt buộc phải dùng",
          "Chỉ dùng trong câu hỏi"
        ],
        "answer": "Không, tuyệt đối không được dùng câu mệnh lệnh/ý chí",
        "explanation": "Vế sau phải là sự việc bất ngờ xảy ra khách quan."
      },
      {
        "id": "jlpt-n3-totan-5",
        "type": "fill",
        "prompt": "Điền từ nối: 家を出た ___ に大雨が降り始めた。",
        "answer": "とたん",
        "explanation": "出たとたんに: Vừa ra khỏi nhà."
      },
      {
        "id": "jlpt-n3-totan-6",
        "type": "order",
        "prompt": "Sắp xếp: Vừa nghe tin đó xong thì cô ấy tái mét mặt mày.",
        "options": [
          "顔色が青くなった",
          "その知らせを聞いたとたん、"
        ],
        "answer": "その知らせを聞いたとたん、顔色が青くなった",
        "explanation": "Trật tự: その知らせを聞いたとたん、+ 顔色が青くなった."
      },
      {
        "id": "jlpt-n3-totan-7",
        "type": "choice",
        "prompt": "Trước「とたん」phải là dạng chia nào của động từ?",
        "options": [
          "Thể quá khứ (Vた)",
          "Thể từ điển (Vる)",
          "Thể ない",
          "Thể ます"
        ],
        "answer": "Thể quá khứ (Vた)",
        "explanation": "Bắt buộc chia thể Vた."
      },
      {
        "id": "jlpt-n3-totan-8",
        "type": "fill",
        "prompt": "Chia động từ「押します」: ボタンを ___ とたん、警報が鳴った (vừa ấn nút)。",
        "answer": "押した",
        "explanation": "押した + とたん."
      },
      {
        "id": "jlpt-n3-totan-9",
        "type": "choice",
        "prompt": "「七月に入ったとたん、急に暑くなった」thể hiện cảm giác gì?",
        "options": [
          "Bất ngờ trước việc vừa bước sang tháng 7 trời đã nóng bức ngay",
          "Trời không nóng",
          "Tháng 7 trời lạnh",
          "Mong chờ tháng 7"
        ],
        "answer": "Bất ngờ trước việc vừa bước sang tháng 7 trời đã nóng bức ngay",
        "explanation": "Sự thay đổi thời tiết diễn ra tức thì."
      },
      {
        "id": "jlpt-n3-totan-10",
        "type": "order",
        "prompt": "Sắp xếp: Vừa mới bước lên tàu điện thì cánh cửa lập tức đóng sầm lại.",
        "options": [
          "ドアが閉まった",
          "電車に乗ったとたん、"
        ],
        "answer": "電車に乗ったとたん、ドアが閉まった",
        "explanation": "Trật tự: 電車に乗ったとたん、+ ドアが閉まった."
      }
    ]
  },
  {
    "id": "jlpt-n3-wohajime",
    "pattern": "〜をはじめ・〜をはじめとする",
    "title": "Trước tiên phải kể đến",
    "level": "N3",
    "position": 267,
    "meaning": "【Dạng 1】Đưa ra ví dụ tiêu biểu, đại diện hàng đầu trong số nhiều đối tượng",
    "formation": "Danh từ + をはじめ / をはじめとして\nDanh từ + をはじめとする + Danh từ",
    "explanation": "Dùng để nêu ra một ví dụ điển hình, quan trọng hoặc nổi tiếng nhất trong một tập hợp, theo sau đó ngụ ý còn có rất nhiều đối tượng khác nữa cùng loại.",
    "notes": "Chú thích phân biệt: Mang tính văn viết trang trọng. Khi bổ nghĩa cho danh từ phía sau, bắt buộc dùng 〜をはじめとする N.",
    "mistake": "Ví dụ đưa ra trước をはじめ phải là ví dụ tiêu biểu hàng đầu, không đưa ví dụ mờ nhạt.",
    "related": [
      "bridge-n3-15"
    ],
    "examples": [
      {
        "ja": "富士山をはじめ、日本には美しい山がたくさんあります。",
        "kana": "ふじさんをはじめ、にほんにはうつくしいやまがたくさんあります。",
        "vi": "Trước tiên phải kể đến núi Phú Sĩ, ở Nhật Bản có rất nhiều ngọn núi tuyệt đẹp.",
        "readings": {
          "富士山": "ふじさん",
          "美しい": "うつくしい",
          "山": "やま"
        }
      },
      {
        "ja": "校長先生をはじめとする先生方のご指導に感謝いたします。",
        "kana": "こうちょうせんせいをはじめとするせんせいがたのごしどうにかんしゃいたします。",
        "vi": "Chúng em xin chân thành cảm ơn sự chỉ bảo tận tình của các thầy cô giáo mà tiêu biểu là thầy Hiệu trưởng.",
        "readings": {
          "校長先生": "こうちょうせんせい",
          "指導": "しどう",
          "感謝": "かんしゃ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-wohajime-1",
        "type": "choice",
        "prompt": "日本のアニメは、ドラえもんを ___ 世界中で愛されている。",
        "options": [
          "はじめ",
          "めぐって",
          "通して",
          "対して"
        ],
        "answer": "はじめ",
        "explanation": "Tiêu biểu là Doraemon: ドラえもんをはじめ."
      },
      {
        "id": "jlpt-n3-wohajime-2",
        "type": "fill",
        "prompt": "Điền dạng bổ nghĩa danh từ: 会長をはじめ ___ 役員の方々が出席した。",
        "answer": "とする",
        "explanation": "Bổ nghĩa danh từ: 〜をはじめとする N."
      },
      {
        "id": "jlpt-n3-wohajime-3",
        "type": "order",
        "prompt": "Sắp xếp: Tiêu biểu là phở, món ăn Việt Nam được người Nhật rất yêu thích.",
        "options": [
          "ベトナム料理は日本人に大人気です",
          "フォーをはじめ、"
        ],
        "answer": "フォーをはじめ、ベトナム料理は日本人に大人気です",
        "explanation": "Trật tự: フォーをはじめ、+ ベトナム料理は日本人に大人気です."
      },
      {
        "id": "jlpt-n3-wohajime-4",
        "type": "choice",
        "prompt": "Từ đứng trước「〜をはじめ」thường đóng vai trò gì?",
        "options": [
          "Ví dụ tiêu biểu, nổi bật và quan trọng nhất",
          "Ví dụ kém cỏi nhất",
          "Từ chỉ thời gian",
          "Từ phủ định"
        ],
        "answer": "Ví dụ tiêu biểu, nổi bật và quan trọng nhất",
        "explanation": "Đại diện tiêu biểu nhất trong nhóm."
      },
      {
        "id": "jlpt-n3-wohajime-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 東京 ___ 各地で桜が開花した。",
        "answer": "をはじめ",
        "explanation": "東京をはじめ: Đi đầu là Tokyo."
      },
      {
        "id": "jlpt-n3-wohajime-6",
        "type": "order",
        "prompt": "Sắp xếp: Cảm ơn sự hỗ trợ của gia đình và nhiều người khác.",
        "options": [
          "多くの人に支えられました",
          "両親をはじめ、"
        ],
        "answer": "両親をはじめ、多くの人に支えられました",
        "explanation": "Trật tự: 両親をはじめ、+ 多くの人に支えられました."
      },
      {
        "id": "jlpt-n3-wohajime-7",
        "type": "choice",
        "prompt": "Câu nào dùng ĐÚNG ngữ pháp bổ nghĩa danh từ với「〜をはじめ」?",
        "options": [
          "アジア諸国をはじめとする国々",
          "アジア諸国をはじめの国々",
          "アジア諸国をはじめになる国々",
          "アジア諸国をはじめにした国々"
        ],
        "answer": "アジア諸国をはじめとする国々",
        "explanation": "Mẫu chuẩn: N1 をはじめとする N2."
      },
      {
        "id": "jlpt-n3-wohajime-8",
        "type": "fill",
        "prompt": "Điền từ: 新宿や渋谷を ___ 各駅周辺は賑やかです。",
        "answer": "はじめとして",
        "explanation": "〜をはじめとして."
      },
      {
        "id": "jlpt-n3-wohajime-9",
        "type": "choice",
        "prompt": "「家族をはじめ周りの方々に感謝します」thể hiện điều gì?",
        "options": [
          "Cảm ơn mọi người xung quanh, mà trước hết là gia đình thân yêu",
          "Chỉ cảm ơn gia đình, không cảm ơn người ngoài",
          "Không muốn cảm ơn ai",
          "Gia đình cảm ơn tôi"
        ],
        "answer": "Cảm ơn mọi người xung quanh, mà trước hết là gia đình thân yêu",
        "explanation": "Nêu gia đình là đối tượng đại diện cảm ơn đầu tiên."
      },
      {
        "id": "jlpt-n3-wohajime-10",
        "type": "order",
        "prompt": "Sắp xếp: Hội nghị có sự tham gia của các nhà khoa học hàng đầu thế giới.",
        "options": [
          "著名な学者たちが集まった",
          "ノーベル賞受賞者をはじめとする"
        ],
        "answer": "ノーベル賞受賞者をはじめとする著名な学者たちが集まった",
        "explanation": "Trật tự: ノーベル賞受賞者をはじめとする + 著名な学者たちが集まった."
      }
    ]
  },
  {
    "id": "jlpt-n3-wokansuru",
    "pattern": "〜に関して・〜に関する",
    "title": "Liên quan đến vấn đề",
    "level": "N3",
    "position": 268,
    "meaning": "【Dạng 1】Liên quan đến, về vấn đề/chủ đề (Cách nói trang trọng của について)",
    "formation": "Danh từ + に関して (phó từ bổ nghĩa vị ngữ)\nDanh từ + に関する + Danh từ (bổ nghĩa danh từ)",
    "explanation": "Dùng để nêu ra chủ đề, đề tài hoặc lĩnh vực nghiên cứu, điều tra, thảo luận. Mang tính trang trọng và phạm vi rộng hơn について.",
    "notes": "Chú thích phân biệt: So với 〜について (nói về một đối tượng cụ thể), 〜に関して thường dùng cho các chủ đề rộng, mang tính học thuật, pháp lý, chính trị hoặc điều tra xã hội.",
    "mistake": "Khi đứng trước danh từ để bổ nghĩa, bắt buộc dùng 〜に関する N (không dùng に関して N).",
    "related": [
      "bridge-n3-16"
    ],
    "examples": [
      {
        "ja": "環境問題に関する論文を執筆しています。",
        "kana": "かんきょうもんだいにかんするろんぶんをしっぴつしています。",
        "vi": "Tôi đang chấp bút viết luận văn liên quan đến vấn đề môi trường.",
        "readings": {
          "環境問題": "かんきょうもんだい",
          "論文": "ろんぶん",
          "執筆": "しっぴつ"
        }
      },
      {
        "ja": "この事件に関して、警察が詳しく調査を行っています。",
        "kana": "このじけんにかんして、けいさつがくわしくちょうさをおこなっています。",
        "vi": "Liên quan đến vụ án này, cảnh sát đang tiến hành điều tra chi tiết.",
        "readings": {
          "事件": "じけん",
          "警察": "けいさつ",
          "調査": "ちょうさ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-wokansuru-1",
        "type": "choice",
        "prompt": "日本の歴史に ___ 本を読んでいます。",
        "options": [
          "関する",
          "対する",
          "よる",
          "おける"
        ],
        "answer": "関する",
        "explanation": "Bổ nghĩa danh từ 本: 日本の歴史に関する本."
      },
      {
        "id": "jlpt-n3-wokansuru-2",
        "type": "fill",
        "prompt": "Điền từ liên quan: その質問に ___ お答えいたします。",
        "answer": "関して",
        "explanation": "Bổ nghĩa động từ: 〜に関して."
      },
      {
        "id": "jlpt-n3-wokansuru-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi muốn tìm hiểu các thông tin liên quan đến kỳ thi tuyển sinh.",
        "options": [
          "情報を集めています",
          "入学試験に関する"
        ],
        "answer": "入学試験に関する情報を集めています",
        "explanation": "Trật tự: 入学試験に関する + 情報を集めています."
      },
      {
        "id": "jlpt-n3-wokansuru-4",
        "type": "choice",
        "prompt": "Khác biệt chính giữa「〜に関して」và「〜について」là:",
        "options": [
          "に関して trang trọng hơn và phạm vi bao quát rộng hơn について",
          "について trang trọng hơn",
          "に関して chỉ dùng cho thể thao",
          "Cả hai không có gì khác"
        ],
        "answer": "に関して trang trọng hơn và phạm vi bao quát rộng hơn について",
        "explanation": "に関して trang trọng và bao quát rộng hơn."
      },
      {
        "id": "jlpt-n3-wokansuru-5",
        "type": "fill",
        "prompt": "Hoàn thành câu: 政治に ___ 議論が交わされた (liên quan đến chính trị)。",
        "answer": "関する",
        "explanation": "政治に関する議論."
      },
      {
        "id": "jlpt-n3-wokansuru-6",
        "type": "order",
        "prompt": "Sắp xếp: Về vấn đề này, xin quý vị hãy hỏi người phụ trách.",
        "options": [
          "担当者にお尋ねください",
          "この件に関しましては、"
        ],
        "answer": "この件に関しましては、担当者にお尋ねください",
        "explanation": "Trật tự: この件に関しましては、+ 担当者にお尋ねください."
      },
      {
        "id": "jlpt-n3-wokansuru-7",
        "type": "choice",
        "prompt": "Câu nào sau đây dùng SAI dạng bổ nghĩa danh từ?",
        "options": [
          "経済に関して本",
          "経済に関する本",
          "経済に関する研究",
          "経済に関する調査"
        ],
        "answer": "経済に関して本",
        "explanation": "Sai vì bổ nghĩa danh từ phải dùng に関する chứ không phải に関して."
      },
      {
        "id": "jlpt-n3-wokansuru-8",
        "type": "fill",
        "prompt": "Điền dạng lịch sự: 今回の事故に ___ お詫び申し上げます。",
        "answer": "関しまして",
        "explanation": "Lịch sự: に関しまして."
      },
      {
        "id": "jlpt-n3-wokansuru-9",
        "type": "choice",
        "prompt": "「AIに関する最新の技術」nghĩa là gì?",
        "options": [
          "Công nghệ mới nhất liên quan đến trí tuệ nhân tạo (AI)",
          "Công nghệ cổ điển",
          "Không dùng AI",
          "AI bị lỗi"
        ],
        "answer": "Công nghệ mới nhất liên quan đến trí tuệ nhân tạo (AI)",
        "explanation": "Liên quan đến lĩnh vực AI."
      },
      {
        "id": "jlpt-n3-wokansuru-10",
        "type": "order",
        "prompt": "Sắp xếp: Báo cáo kết quả khảo sát liên quan đến việc bảo vệ môi trường.",
        "options": [
          "調査結果を報告します",
          "環境保護に関する"
        ],
        "answer": "環境保護に関する調査結果を報告します",
        "explanation": "Trật tự: 環境保護に関する + 調査結果を報告します."
      }
    ]
  },
  {
    "id": "jlpt-n3-wotaishite",
    "pattern": "〜に対して・〜に対する",
    "title": "Đối với đối tượng / Trái ngược so sánh",
    "level": "N3",
    "position": 269,
    "meaning": "【Dạng 1】Đối với đối tượng chịu hành vi, thái độ (Người, khách hàng)；【Dạng 2】Trái ngược hoàn toàn giữa hai vế so sánh đối lập",
    "formation": "【Dạng 1】Danh từ + に対して / に対する + Danh từ\n【Dạng 2】V/A/N (thể thông thường) + のに対して (Tính từ na / N + な／であるのに対して)",
    "explanation": "Có 2 dạng nghĩa quan trọng: Dạng 1 chỉ thái độ ứng xử hoặc hành động hướng tới một đối tượng cụ thể; Dạng 2 dùng để đặt 2 sự vật hoặc 2 người lên bàn cân so sánh sự đối lập hoàn toàn (anh thích thể thao trái ngược với em thích đọc sách).",
    "notes": "Chú thích phân biệt: So với にとって (xét từ lập trường góc nhìn: đối với tôi tiền không quan trọng), に対して ở Dạng 1 là hướng hành động/thái độ tới đối tượng (tôn trọng đối với người già).",
    "mistake": "Tránh nhầm giữa にとって (đánh giá từ góc nhìn cá nhân) và に対して (thái độ tác động lên đối tượng).",
    "related": [
      "bridge-n3-16"
    ],
    "examples": [
      {
        "ja": "お客様に対して、いつも丁寧な言葉遣いを心がけています。",
        "kana": "おきゃくさまにたいして、いつもていねいなことばづかいをこころがけています。",
        "vi": "Đối với khách hàng, tôi luôn luôn chú ý sử dụng ngôn từ thật lịch sự chu đáo.",
        "readings": {
          "お客様": "おきゃくさま",
          "対して": "たいして",
          "丁寧": "ていねい",
          "言葉遣い": "ことばづかい"
        }
      },
      {
        "ja": "兄は活発なのに対して、弟はおとなしい性格だ。",
        "kana": "あにはかっぱつなのに対して、おとうとはおとなしいせいかくだ。",
        "vi": "Trái ngược với người anh trai rất hoạt bát năng nổ thì cậu em trai lại có tính cách trầm lặng hiền lành.",
        "readings": {
          "兄": "あに",
          "活発": "かっぱつ",
          "弟": "おとうと",
          "性格": "せいかく"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-wotaishite-1",
        "type": "choice",
        "prompt": "目上の人に ___ 、敬語を使わなければなりません。",
        "options": [
          "対して",
          "関して",
          "おいて",
          "沿って"
        ],
        "answer": "対して",
        "explanation": "Thái độ đối với người bề trên: 目上の人に対して."
      },
      {
        "id": "jlpt-n3-wotaishite-2",
        "type": "fill",
        "prompt": "Điền dạng bổ nghĩa danh từ: 住民の不満に ___ 対策を講じる (đối với sự bất mãn)。",
        "answer": "対する",
        "explanation": "Bổ nghĩa danh từ 対策: に対する + N."
      },
      {
        "id": "jlpt-n3-wotaishite-3",
        "type": "order",
        "prompt": "Sắp xếp: Trái ngược với hôm qua rất nóng thì hôm nay lại rất mát mẻ.",
        "options": [
          "今日はとても涼しいです",
          "昨日は暑かったのに対して、"
        ],
        "answer": "昨日は暑かったのに対して、今日はとても涼しいです",
        "explanation": "Trật tự: So sánh vế 1 のに対して、+ vế 2."
      },
      {
        "id": "jlpt-n3-wotaishite-4",
        "type": "choice",
        "prompt": "Khác biệt giữa「私にとって」và「私に対して」là:",
        "options": [
          "私にとって là \"xét theo quan điểm/đánh giá của tôi\"; 私に対して là \"hành động/thái độ hướng vào tôi\"",
          "Hai cụm từ giống nhau",
          "私にとって mang nghĩa cấm đoán",
          "私に対して chỉ dùng cho động vật"
        ],
        "answer": "私にとって là \"xét theo quan điểm/đánh giá của tôi\"; 私に対して là \"hành động/thái độ hướng vào tôi\"",
        "explanation": "Phân biệt góc nhìn đánh giá vs hướng tác động thái độ."
      },
      {
        "id": "jlpt-n3-wotaishite-5",
        "type": "fill",
        "prompt": "Chia tính từ な「真面目」với のに対して: 兄が ___ なのに対して、弟は怠け者だ。",
        "answer": "真面目",
        "explanation": "Tính từ na + なのに対して."
      },
      {
        "id": "jlpt-n3-wotaishite-6",
        "type": "order",
        "prompt": "Sắp xếp: Thái độ lạnh lùng đối với mọi người là không tốt.",
        "options": [
          "冷たい態度はよくありません",
          "人に対して"
        ],
        "answer": "人に対して冷たい態度はよくありません",
        "explanation": "Trật tự: 人に対して + 冷たい態度はよくありません."
      },
      {
        "id": "jlpt-n3-wotaishite-7",
        "type": "choice",
        "prompt": "Câu nào sau đây dùng「〜に対して」với nghĩa so sánh hai đối tượng trái ngược?",
        "options": [
          "都市部は人口が増加しているのに対して、農村部は減少している",
          "先生に対して礼儀正しくする",
          "質問に対して答える",
          "親に対して感謝する"
        ],
        "answer": "都市部は人口が増加しているのに対して、農村部は減少している",
        "explanation": "So sánh tương phản giữa đô thị tăng dân số và nông thôn giảm."
      },
      {
        "id": "jlpt-n3-wotaishite-8",
        "type": "fill",
        "prompt": "Điền từ: 批判に ___ 真摯に受け止める (đối với những lời chỉ trích)。",
        "answer": "対して",
        "explanation": "批判に対して."
      },
      {
        "id": "jlpt-n3-wotaishite-9",
        "type": "choice",
        "prompt": "「先生に対する質問」nghĩa là gì?",
        "options": [
          "Câu hỏi gửi tới thầy giáo",
          "Câu hỏi của thầy giáo",
          "Thầy giáo không biết câu hỏi",
          "Hỏi về đời tư thầy giáo"
        ],
        "answer": "Câu hỏi gửi tới thầy giáo",
        "explanation": "Hướng đối tượng tiếp nhận câu hỏi là thầy giáo."
      },
      {
        "id": "jlpt-n3-wotaishite-10",
        "type": "order",
        "prompt": "Sắp xếp: Trái ngược với việc anh thích đồ ngọt thì em lại thích đồ cay.",
        "options": [
          "弟は辛いものが好きだ",
          "兄は甘いものが好きなのに対して、"
        ],
        "answer": "兄は甘いものが好きなのに対して、弟は辛いものが好きだ",
        "explanation": "Trật tự: 兄は甘いものが好きなのに対して、+ 弟は辛いものが好きだ."
      }
    ]
  },
  {
    "id": "jlpt-n3-niokite",
    "pattern": "〜において・〜における",
    "title": "Ở / Tại / Trong bối cảnh",
    "level": "N3",
    "position": 270,
    "meaning": "【Dạng 1】Ở / tại địa điểm, thời đại, lĩnh vực bối cảnh (Cách nói trang trọng của で)",
    "formation": "Danh từ + において (bổ nghĩa vị ngữ)\nDanh từ + における + Danh từ (bổ nghĩa danh từ)",
    "explanation": "Dùng như một cách nói trang trọng, mang tính nghi thức của trợ từ で, dùng để chỉ địa điểm tổ chức sự kiện, thời kỳ lịch sử, lĩnh vực chuyên môn hoặc hoàn cảnh diễn ra sự việc.",
    "notes": "Chú thích phân biệt: Mang tính văn viết, báo chí, diễn thuyết. Khi bổ nghĩa trực tiếp cho danh từ đi sau, bắt buộc dùng 〜における N.",
    "mistake": "Không dùng cho những hành động sinh hoạt đời thường lặt vặt (sai: 台所において料理を作る; đúng: 台所で料理を作る).",
    "related": [
      "bridge-n3-24"
    ],
    "examples": [
      {
        "ja": "オリンピックは四年ごとに世界各地において開催される。",
        "kana": "おりんぴっくはよねんごとにせかいかくちにおいてかいさいされる。",
        "vi": "Thế vận hội Olympic được đăng cai tổ chức bốn năm một lần tại nhiều nơi trên thế giới.",
        "readings": {
          "四年": "よねん",
          "世界各地": "せかいかくち",
          "開催": "かいさい"
        }
      },
      {
        "ja": "現代社会におけるインターネットの役割は非常に大きい。",
        "kana": "げんだいしゃかいにおけるいんたーねっとのやくわりはひじょうにおおきい。",
        "vi": "Vai trò của mạng Internet trong bối cảnh xã hội hiện đại là vô cùng to lớn.",
        "readings": {
          "現代社会": "げんだいしゃかい",
          "役割": "やくわり",
          "非常に": "ひじょうに"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-niokite-1",
        "type": "choice",
        "prompt": "式典は第一ホールに ___ 行われます。",
        "options": [
          "おいて",
          "つれて",
          "対して",
          "沿って"
        ],
        "answer": "おいて",
        "explanation": "Địa điểm tổ chức trang trọng: 第一ホールにおいて."
      },
      {
        "id": "jlpt-n3-niokite-2",
        "type": "fill",
        "prompt": "Điền dạng bổ nghĩa danh từ: 医療の分野に ___ 最新の技術 (công nghệ trong lĩnh vực y tế)。",
        "answer": "おける",
        "explanation": "Bổ nghĩa cho danh từ: における + N."
      },
      {
        "id": "jlpt-n3-niokite-3",
        "type": "order",
        "prompt": "Sắp xếp: Lễ tốt nghiệp đã được tổ chức trang trọng tại hội trường lớn.",
        "options": [
          "卒業式が挙行されました",
          "大講堂において"
        ],
        "answer": "大講堂において卒業式が挙行されました",
        "explanation": "Trật tự: 大講堂において + 卒業式が挙行されました."
      },
      {
        "id": "jlpt-n3-niokite-4",
        "type": "choice",
        "prompt": "So với trợ từ「で」,「〜において」có tính chất gì?",
        "options": [
          "Rất trang trọng, lịch sự và mang tính văn viết/thông báo nghi thức",
          "Chỉ dùng cho trẻ em",
          "Là khẩu ngữ thân mật",
          "Chỉ dùng để hỏi đường"
        ],
        "answer": "Rất trang trọng, lịch sự và mang tính văn viết/thông báo nghi thức",
        "explanation": "Văn phong nghi thức trang trọng."
      },
      {
        "id": "jlpt-n3-niokite-5",
        "type": "fill",
        "prompt": "Hoàn thiện câu: 人生に ___ 最も大切なことは何ですか (trong cuộc đời: 人生に___)。",
        "answer": "おいて",
        "explanation": "人生において: Trong cuộc đời."
      },
      {
        "id": "jlpt-n3-niokite-6",
        "type": "order",
        "prompt": "Sắp xếp: Tầm quan trọng của tiếng Anh trong thế giới ngày nay.",
        "options": [
          "英語の重要性",
          "国際社会における"
        ],
        "answer": "国際社会における英語の重要性",
        "explanation": "Trật tự: 国際社会における + 英語の重要性."
      },
      {
        "id": "jlpt-n3-niokite-7",
        "type": "choice",
        "prompt": "Câu nào sau đây dùng SAI ngữ cảnh của「〜において」?",
        "options": [
          "台所において朝ご飯を食べた",
          "国際会議において共同宣言が採択された",
          "教育の現場において様々な問題が生じている",
          "歴史上において画期的な出来事だ"
        ],
        "answer": "台所において朝ご飯を食べた",
        "explanation": "Ăn sáng trong bếp là sinh hoạt thông thường, dùng 台所で chứ không dùng において."
      },
      {
        "id": "jlpt-n3-niokite-8",
        "type": "fill",
        "prompt": "Điền từ: 本社ビル大会議室に ___ 会議を開催いたします。",
        "answer": "おいて",
        "explanation": "Địa điểm tổ chức họp trang trọng: において."
      },
      {
        "id": "jlpt-n3-niokite-9",
        "type": "choice",
        "prompt": "「日本における外国人労働者の現状」nghĩa là gì?",
        "options": [
          "Thực trạng người lao động nước ngoài tại Nhật Bản",
          "Người Nhật lao động ở nước ngoài",
          "Không có lao động nước ngoài",
          "Quy tắc xuất cảnh"
        ],
        "answer": "Thực trạng người lao động nước ngoài tại Nhật Bản",
        "explanation": "Thực trạng tại Nhật Bản."
      },
      {
        "id": "jlpt-n3-niokite-10",
        "type": "order",
        "prompt": "Sắp xếp: Vấn đề cấp bách cần giải quyết trong nền kinh tế hiện nay.",
        "options": [
          "緊急の課題です",
          "現在の経済における"
        ],
        "answer": "現在の経済における緊急の課題です",
        "explanation": "Trật tự: 現在の経済における + 緊急の課題です."
      }
    ]
  },
  {
    "id": "jlpt-n3-niwatatte",
    "pattern": "〜にわたって・〜にわたる",
    "title": "Suốt khoảng thời gian / Khắp phạm vi",
    "level": "N3",
    "position": 271,
    "meaning": "【Dạng 1】Kéo dài suốt một khoảng thời gian dài；【Dạng 2】Trải rộng trên một phạm vi không gian, khu vực hoặc số lần quy mô lớn",
    "formation": "Danh từ (khoảng thời gian / phạm vi / số lượng) + にわたって / にわたり\nDanh từ + にわたる + Danh từ",
    "explanation": "Dùng để nhấn mạnh quy mô rộng lớn của một không gian địa lý, hoặc sự kéo dài liên tục, bền bỉ của một khoảng thời gian dài, hoặc số lần diễn ra nhiều đợt.",
    "notes": "Chú thích phân biệt: So với 〜を通じて (thông qua hoặc suốt), 〜にわたって nhấn mạnh vào \"độ rộng của quy mô\" hoặc \"độ dài đằng đẵng của thời gian\" (ví dụ: 10 năm ròng rã, trên toàn quốc).",
    "mistake": "Trước にわたって phải là từ chỉ quy mô hoặc khoảng thời gian (khoảng, số lượng), không dùng mốc điểm thời gian đơn lẻ.",
    "related": [
      "bridge-n3-24",
      "bridge-n2-36"
    ],
    "examples": [
      {
        "ja": "三日間にわたる大雨で、川が氾濫した。",
        "kana": "みっかかんにわたるおおあめで、かわがはんらんした。",
        "vi": "Do mưa lớn kéo dài ròng rã suốt 3 ngày trời, nước sông đã bị tràn bờ.",
        "readings": {
          "三日間": "みっかかん",
          "大雨": "おおあめ",
          "川": "かわ",
          "氾濫": "はんらん"
        }
      },
      {
        "ja": "全国にわたって激しい嵐が吹き荒れました。",
        "kana": "ぜんこくにわたってはげしいあらしがふきあれました。",
        "vi": "Cơn bão dữ dội đã hoành hành trải rộng khắp trên quy mô toàn quốc.",
        "readings": {
          "全国": "ぜんこく",
          "激しい": "はげしい",
          "嵐": "あらし"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n3-niwatatte-1",
        "type": "choice",
        "prompt": "十時間 ___ 会議が続いた。",
        "options": [
          "にわたって",
          "について",
          "に対して",
          "にそって"
        ],
        "answer": "にわたって",
        "explanation": "Kéo dài suốt 10 tiếng đồng hồ: 十時間にわたって."
      },
      {
        "id": "jlpt-n3-niwatatte-2",
        "type": "fill",
        "prompt": "Điền dạng bổ nghĩa danh từ: 二十年間 ___ 研究生活 (cuộc đời nghiên cứu suốt 20 năm)。",
        "answer": "にわたる",
        "explanation": "Bổ nghĩa danh từ: にわたる + N."
      },
      {
        "id": "jlpt-n3-niwatatte-3",
        "type": "order",
        "prompt": "Sắp xếp: Tuyết rơi dày đặc khắp khu vực toàn vùng Tohoku.",
        "options": [
          "大雪が降りました",
          "東北地方全域にわたって"
        ],
        "answer": "東北地方全域にわたって大雪が降りました",
        "explanation": "Trật tự: 東北地方全域にわたって + 大雪が降りました."
      },
      {
        "id": "jlpt-n3-niwatatte-4",
        "type": "choice",
        "prompt": "Từ nào sau đây KHÔNG THỂ đứng trước「〜にわたって」?",
        "options": [
          "昨日 (mốc thời gian đơn lẻ)",
          "三日間 (khoảng thời gian)",
          "全国 (phạm vi không gian)",
          "数百キロ (độ dài khoảng cách)"
        ],
        "answer": "昨日 (mốc thời gian đơn lẻ)",
        "explanation": "Phải là khoảng thời gian hoặc phạm vi quy mô, không dùng mốc điểm đơn lẻ như 昨日."
      },
      {
        "id": "jlpt-n3-niwatatte-5",
        "type": "fill",
        "prompt": "Hoàn thiện câu: 五回 ___ 交渉が行われた (đàm phán qua 5 đợt)。",
        "answer": "にわたり",
        "explanation": "Thể liên từ: にわたり / にわたって."
      },
      {
        "id": "jlpt-n3-niwatatte-6",
        "type": "order",
        "prompt": "Sắp xếp: Cuộc điều tra quy mô lớn đã được tiến hành suốt một năm ròng.",
        "options": [
          "大規模な調査が行われました",
          "一年にわたって"
        ],
        "answer": "一年にわたって大規模な調査が行われました",
        "explanation": "Trật tự: 一年にわたって + 大規模な調査が行われました."
      },
      {
        "id": "jlpt-n3-niwatatte-7",
        "type": "choice",
        "prompt": "Cấu trúc「〜にわたって」nhấn mạnh vào sắc thái gì?",
        "options": [
          "Quy mô lớn của không gian hoặc độ dài kéo dài của thời gian",
          "Hành động nhanh chóng chớp nhoáng",
          "Lời xin lỗi lịch sự",
          "Chỉ mục đích cá nhân"
        ],
        "answer": "Quy mô lớn của không gian hoặc độ dài kéo dài của thời gian",
        "explanation": "Nhấn mạnh quy mô và độ dài kéo dài."
      },
      {
        "id": "jlpt-n3-niwatatte-8",
        "type": "fill",
        "prompt": "Điền từ: 多方面 ___ 支援活動が続けられている (trên nhiều phương diện)。",
        "answer": "にわたり",
        "explanation": "多方面にわたり."
      },
      {
        "id": "jlpt-n3-niwatatte-9",
        "type": "choice",
        "prompt": "「数十キロにわたる渋滞」nghĩa là gì?",
        "options": [
          "Ùn tắc giao thông kéo dài suốt hàng chục cây số",
          "Đường rất vắng xe",
          "Chạy xe tốc độ cao",
          "Đường bị cấm"
        ],
        "answer": "Ùn tắc giao thông kéo dài suốt hàng chục cây số",
        "explanation": "Ùn tắc trên quy mô hàng chục km."
      },
      {
        "id": "jlpt-n3-niwatatte-10",
        "type": "order",
        "prompt": "Sắp xếp: Suốt một tuần lễ vừa qua, ngày nào trời cũng nắng gắt.",
        "options": [
          "真夏日が続きました",
          "一週間にわたって"
        ],
        "answer": "一週間にわたって真夏日が続きました",
        "explanation": "Trật tự: 一週間にわたって + 真夏日が続きました."
      }
    ]
  },
  {
    "id": "jlpt-n2-mononara",
    "pattern": "〜ものなら・ようものなら",
    "title": "Nếu như có thể làm được / Nếu lỡ làm điều đó thì hậu quả khôn lường",
    "level": "N2",
    "position": 256,
    "meaning": "【Dạng 1: V khả năng + ものなら】Giá như có thể làm được (ước muốn điều bất khả thi)\n【Dạng 2: V ý chí + ものなら】Nếu lỡ làm... thì hậu quả tai hại sẽ ập tới",
    "formation": "【Dạng 1】V khả năng (可能形) + ものなら\n【Dạng 2】V ý chí (意向形) + ものなら",
    "explanation": "【Dạng 1】Bày tỏ ước nguyện cháy bỏng về một điều trên thực tế gần như không có cơ hội xảy ra.\n【Dạng 2】Cảnh báo nghiêm trọng: nếu lỡ xảy ra một hành động sai sót thì kết cục tồi tệ không thể cứu vãn.",
    "notes": "Chú thích phân biệt:\n- V khả năng + ものなら: Thường kết thúc bằng 〜たい, 〜てほしい (nguyện vọng mãnh liệt).\n- Vようものなら: Thường đi kèm các từ cảnh báo rủi ro: 大変なことになる, 怒られる, クビになる.",
    "mistake": "Cảnh báo lỗi: Không dùng Dạng 1 cho những việc hiển nhiên hằng ngày (sai: 明日晴れるものなら, đúng: 明日晴れたら).",
    "related": [
      "bridge-n2-28",
      "jlpt-n4-tara"
    ],
    "examples": [
      {
        "ja": "戻れるものなら、子供の頃に戻りたい。",
        "kana": "もどれるものなら、こどものころにもどりたい。",
        "vi": "Giá như mà có thể quay lại được, tôi muốn trở về những tháng ngày tuổi thơ.",
        "readings": {
          "戻れる": "もどれる",
          "子供": "こども",
          "頃": "ころ",
          "戻りたい": "もどりたい"
        }
      },
      {
        "ja": "秘密を話そうものなら、大変なことになる。",
        "kana": "ひみつをはなそうものなら、たいへんなことになる。",
        "vi": "Nếu lỡ mà để lộ bí mật này ra ngoài thì hậu quả sẽ khôn lường.",
        "readings": {
          "秘密": "ひみつ",
          "話そう": "はなそう",
          "大変": "たいへん"
        }
      },
      {
        "ja": "一度でも遅刻しようものなら、試験を受けさせてもらえない。",
        "kana": "いちどでもちこくしようものなら、しけんをうけさせてもらえない。",
        "vi": "Nếu lỡ đến muộn dù chỉ một lần, bạn sẽ không được phép tham gia thi.",
        "readings": {
          "一度": "いちど",
          "遅刻": "ちこく",
          "試験": "しけん",
          "受け": "うけ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-mononara-1",
        "type": "choice",
        "prompt": "できる ___ 、今すぐ仕事を辞めて世界一周旅行に行きたい。",
        "options": [
          "ものなら",
          "ことなら",
          "わけなら",
          "はずなら"
        ],
        "answer": "ものなら",
        "explanation": "Giả định điều khó xảy ra: V khả năng + ものなら (できるものなら)."
      },
      {
        "id": "jlpt-n2-mononara-2",
        "type": "fill",
        "prompt": "Điền từ cảnh báo hậu quả: 一言でも文句を言おう ___ なら、怒鳴られる。",
        "answer": "もの",
        "explanation": "V ý chí + ものなら: 言おうものなら (nếu lỡ hé nửa lời phàn nàn)."
      },
      {
        "id": "jlpt-n2-mononara-3",
        "type": "order",
        "prompt": "Sắp xếp: Nếu chữa được bệnh này thì tôi muốn làm bất cứ điều gì.",
        "options": [
          "治せる",
          "ものなら",
          "何でも",
          "したいです"
        ],
        "answer": "治せるものなら何でもしたいです",
        "explanation": "Trật tự: V khả năng + ものなら + Vế ước muốn."
      },
      {
        "id": "jlpt-n2-mononara-4",
        "type": "choice",
        "prompt": "あの厳しい教授の授業を ___ ものなら、単位はもらえない。",
        "options": [
          "サボろう",
          "サボる",
          "サボれば",
          "サボった"
        ],
        "answer": "サボろう",
        "explanation": "V ý chí + ものなら: サボろうものなら (nếu lỡ cúp học)."
      },
      {
        "id": "jlpt-n2-mononara-5",
        "type": "fill",
        "prompt": "Điền thể khả năng của 行く: ___ ものなら、宇宙旅行に行ってみたい。",
        "answer": "行ける",
        "explanation": "V khả năng + ものなら: 行けるものなら (nếu có thể đi được)."
      },
      {
        "id": "jlpt-n2-mononara-6",
        "type": "choice",
        "prompt": "生まれ変われる ___ 、鳥になって空を飛びたい。",
        "options": [
          "ものなら",
          "ことなら",
          "ところなら",
          "わけなら"
        ],
        "answer": "ものなら",
        "explanation": "Ước nguyện luân hồi bất khả thi: 生まれ変われるものなら."
      },
      {
        "id": "jlpt-n2-mononara-7",
        "type": "order",
        "prompt": "Sắp xếp: Nếu lỡ đánh rơi cái bình hoa quý này thì đền không nổi đâu.",
        "options": [
          "この花瓶を",
          "落とそう",
          "ものなら",
          "弁償できない"
        ],
        "answer": "この花瓶を落とそうものなら弁償できない",
        "explanation": "Trật tự: Tân ngữ + V ý chí + ものなら + Hậu quả xấu."
      },
      {
        "id": "jlpt-n2-mononara-8",
        "type": "choice",
        "prompt": "時間を巻き戻せる ___ 、あの失敗をやり直したい。",
        "options": [
          "ものなら",
          "はずなら",
          "つもりなら",
          "とおりなら"
        ],
        "answer": "ものなら",
        "explanation": "V khả năng + ものなら: 巻き戻せるものなら (nếu quay ngược được thời gian)."
      },
      {
        "id": "jlpt-n2-mononara-9",
        "type": "fill",
        "prompt": "Điền từ ý chí của 見つかる: 親に ___ ものなら、携帯を没収されてしまう。",
        "answer": "見つかろう",
        "explanation": "V ý chí + ものなら: 見つかろうものなら (nếu lỡ bị bố mẹ phát hiện)."
      },
      {
        "id": "jlpt-n2-mononara-10",
        "type": "order",
        "prompt": "Sắp xếp: Nếu tự mình làm được thì đã tự làm từ lâu rồi.",
        "options": [
          "自分で",
          "やれるものなら",
          "とっくに",
          "やっています"
        ],
        "answer": "自分でやれるものならとっくにやっています",
        "explanation": "Trật tự: Chủ thể + V khả năng + ものなら + Đã làm từ lâu."
      }
    ]
  },
  {
    "id": "jlpt-n2-kanenai",
    "pattern": "〜かねない・かねる",
    "title": "Có nguy cơ dẫn đến hậu quả xấu / Khó lòng có thể làm được",
    "level": "N2",
    "position": 257,
    "meaning": "【Dạng 1: Vます＋かねない】Có nguy cơ / Rất có thể sẽ xảy ra (kết cục xấu)\n【Dạng 2: Vます＋かねる】Khó lòng / Không thể (từ chối khéo léo, trang trọng)",
    "formation": "【Dạng 1】V thân ます + かねない\n【Dạng 2】V thân ます + かねる (dạng lịch sự: かねます)",
    "explanation": "【Dạng 1: Nguy cơ】Cảnh báo một hậu quả tồi tệ rất có khả năng phát sinh nếu tình trạng hiện tại tiếp diễn.\n【Dạng 2: Khó lòng đáp ứng】Cách nói khiêm nhường trong thương mại, từ chối yêu cầu của đối phương vì lý do đạo đức, khả năng hoặc quy định.",
    "notes": "Chú thích phân biệt:\n- かねない: Hình thức có ない nhưng mang ý nghĩa KHẲNG ĐỊNH (\"rất có thể sẽ...\").\n- かねる: Mang ý nghĩa PHỦ ĐỊNH (\"không thể làm được...\"). Tránh hiểu lầm ngược nghĩa!",
    "mistake": "Cảnh báo lỗi: Tuyệt đối không dùng かねない cho kết quả tốt đẹp (sai: 合格しかねない, đúng: 合格するかもしれない).",
    "related": [
      "bridge-n2-40",
      "bridge-n2-41",
      "jlpt-n5-kamoshirenai"
    ],
    "examples": [
      {
        "ja": "このまま運転を続けると、大事故を起こしかねない。",
        "kana": "このままうんてんをつづけると、だいじこをおこしかねない。",
        "vi": "Cứ tiếp tục lái xe thế này thì có nguy cơ cao sẽ gây ra tai nạn lớn.",
        "readings": {
          "運転": "うんてん",
          "続ける": "つづける",
          "大事故": "だいじこ",
          "起こし": "おこし"
        }
      },
      {
        "ja": "お客様のご要望にはお応えしかねます。申し訳ございません。",
        "kana": "おきゃくさまのごようぼうにはおこたえしかねます。もうしわけございません。",
        "vi": "Chúng tôi rất tiếc là khó lòng có thể đáp ứng yêu cầu của quý khách.",
        "readings": {
          "お客様": "おきゃくさま",
          "要望": "ようぼう",
          "応え": "こたえ",
          "申し訳": "もうしわけ"
        }
      },
      {
        "ja": "そんな暴飲暴食をしていれば、体を壊しかねないよ。",
        "kana": "そんなぼういんぼうしょくをしていれば、からだをこわしかねないよ。",
        "vi": "Nếu cứ ăn uống vô độ như vậy thì rất dễ phá hoại sức khỏe đấy.",
        "readings": {
          "暴飲暴食": "ぼういんぼうしょく",
          "体": "からだ",
          "壊し": "こわし"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-kanenai-1",
        "type": "choice",
        "prompt": "スピードを出しすぎると、大事故になり ___ 。",
        "options": [
          "かねない",
          "かねる",
          "得ない",
          "すぎない"
        ],
        "answer": "かねない",
        "explanation": "Nguy cơ xấu xảy ra: V thân ます + かねない: なりかねない."
      },
      {
        "id": "jlpt-n2-kanenai-2",
        "type": "fill",
        "prompt": "Điền đuôi từ chối khéo: 個人情報はお教えし ___ ます。",
        "answer": "かね",
        "explanation": "Khó lòng có thể tiết lộ: お教えしかねます."
      },
      {
        "id": "jlpt-n2-kanenai-3",
        "type": "order",
        "prompt": "Sắp xếp: Thức khuya liên tục có thể gây hại cho sức khỏe.",
        "options": [
          "無理を続けると",
          "体を",
          "壊しかね",
          "ません"
        ],
        "answer": "無理を続けると体を壊しかねません",
        "explanation": "Trật tự: Điều kiện + Tân ngữ + V thân ます + かねません."
      },
      {
        "id": "jlpt-n2-kanenai-4",
        "type": "choice",
        "prompt": "その件につきましては、私の一存では決め ___ ます。",
        "options": [
          "かね",
          "かねない",
          "得",
          "すぎ"
        ],
        "answer": "かね",
        "explanation": "Không thể tự quyết định được: 決めかねます."
      },
      {
        "id": "jlpt-n2-kanenai-5",
        "type": "fill",
        "prompt": "Điền từ cảnh báo nguy cơ: 休まず働くと倒れ ___ ない。",
        "answer": "かね",
        "explanation": "Vます + かねない: 倒れかねない (có nguy cơ ngất xỉu/gục ngã)."
      },
      {
        "id": "jlpt-n2-kanenai-6",
        "type": "choice",
        "prompt": "あんな無責任な人なら、約束を ___ かねない。",
        "options": [
          "破り",
          "破る",
          "破って",
          "破った"
        ],
        "answer": "破り",
        "explanation": "V thân ます + かねない: 破りかねない."
      },
      {
        "id": "jlpt-n2-kanenai-7",
        "type": "order",
        "prompt": "Sắp xếp: Tôi khó lòng có thể tán thành đề xuất đó.",
        "options": [
          "そのご提案には",
          "賛成",
          "しかね",
          "ます"
        ],
        "answer": "そのご提案には賛成しかねます",
        "explanation": "Trật tự: Đối tượng + Danh từ する dạng ます + かねます."
      },
      {
        "id": "jlpt-n2-kanenai-8",
        "type": "choice",
        "prompt": "ちょっとした油断が、取り返しのつかない事態を ___ かねない。",
        "options": [
          "招き",
          "招く",
          "招いて",
          "招いた"
        ],
        "answer": "招き",
        "explanation": "V thân ます + かねない: 招きかねない (rất dễ rước lấy hậu quả)."
      },
      {
        "id": "jlpt-n2-kanenai-9",
        "type": "fill",
        "prompt": "Điền từ: 彼の秘密をばらしかね ___ 。（có nguy cơ）",
        "answer": "ない",
        "explanation": "Đuôi phủ định biểu thị khẳng định nguy cơ: かねない."
      },
      {
        "id": "jlpt-n2-kanenai-10",
        "type": "order",
        "prompt": "Sắp xếp: Trực giác mách bảo việc này rất dễ bị phát hiện.",
        "options": [
          "この秘密は",
          "誰かに",
          "知られ",
          "かねない"
        ],
        "answer": "この秘密は誰かに知られかねない",
        "explanation": "Trật tự: Chủ ngữ + Ai đó + Bị động Vます + かねない."
      }
    ]
  },
  {
    "id": "jlpt-n2-zarwoenai",
    "pattern": "〜ざるを得ない",
    "title": "Buộc lòng phải làm (dù không muốn)",
    "level": "N2",
    "position": 258,
    "meaning": "【〜ざるを得ない】Đành phải / Buộc lòng phải làm gì (dù bản thân không mong muốn)",
    "formation": "V thể ない bỏ ない + ざるを得ない\n* Ngoại lệ đặc biệt: する → せざるを得ない",
    "explanation": "Diễn tả tình thế bắt buộc do hoàn cảnh khách quan, áp lực công việc hoặc quy định đẩy đưa khiến người nói không còn lựa chọn nào khác ngoài việc thực hiện hành động đó.",
    "notes": "Chú thích phân biệt:\n- 〜ざるを得ない: Văn viết trang trọng, thể hiện sự miễn cưỡng nội tâm trước tình thế khách quan.\n- 〜なければならない: Nghĩa vụ, bổn phận thông thường cần làm.",
    "mistake": "Cảnh báo lỗi: Động từ nhóm 3 する bắt buộc chuyển thành せざるを得ない (tuyệt đối không nói しざるを得ない).",
    "related": [
      "bridge-n2-41",
      "bridge-n3-23"
    ],
    "examples": [
      {
        "ja": "台風が近づいているため、旅行は中止せざるを得ない。",
        "kana": "たいふうがちかづいているため、りょこうはちゅうしせざるをえない。",
        "vi": "Do bão đang tiến lại gần, chúng tôi đành phải hủy chuyến du lịch.",
        "readings": {
          "台風": "たいふう",
          "近づいて": "ちかづいて",
          "旅行": "りょこう",
          "中止": "ちゅうし"
        }
      },
      {
        "ja": "明白な証拠がある以上、事実を認めざるを得ない。",
        "kana": "めいはくなしょうこがあるいじょう、じじつをみとめざるをえない。",
        "vi": "Một khi đã có bằng chứng rõ ràng, đành phải thừa nhận sự thật.",
        "readings": {
          "明白": "めいはく",
          "証拠": "しょうこ",
          "以上": "いじょう",
          "事実": "じじつ",
          "認め": "みとめ"
        }
      },
      {
        "ja": "体調を崩してしまったので、会社を休まざるを得ない。",
        "kana": "たいちょうをくずしてしまったので、かいしゃをやすまざるをえない。",
        "vi": "Vì ngã bệnh nên tôi đành phải xin nghỉ làm ở công ty.",
        "readings": {
          "体調": "たいちょう",
          "崩して": "くずして",
          "会社": "かいしゃ",
          "休ま": "やすま"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-zarwoenai-1",
        "type": "choice",
        "prompt": "上司の命令なので、残業 ___ を得ない。",
        "options": [
          "せざる",
          "しざる",
          "させざる",
          "されざる"
        ],
        "answer": "せざる",
        "explanation": "Động từ する biến đổi đặc biệt: せざるを得ない."
      },
      {
        "id": "jlpt-n2-zarwoenai-2",
        "type": "fill",
        "prompt": "Điền phần cấu trúc còn thiếu: 事情を説明して謝罪せざるを ___ 。",
        "answer": "得ない",
        "explanation": "Cấu trúc đành phải: せざるを + 得ない."
      },
      {
        "id": "jlpt-n2-zarwoenai-3",
        "type": "order",
        "prompt": "Sắp xếp: Đành phải đồng ý với ý kiến của họ.",
        "options": [
          "彼らの提案に",
          "賛成せざる",
          "を",
          "得ませんでした"
        ],
        "answer": "彼らの提案に賛成せざるを得ませんでした",
        "explanation": "Trật tự: Đối tượng + Vせざる + を + 得ませんでした."
      },
      {
        "id": "jlpt-n2-zarwoenai-4",
        "type": "choice",
        "prompt": "これだけ反対意見が多いなら、計画を変更せざるを ___ 。",
        "options": [
          "得ない",
          "かねない",
          "たまらない",
          "ならない"
        ],
        "answer": "得ない",
        "explanation": "Buộc phải thay đổi: 変更せざるを得ない."
      },
      {
        "id": "jlpt-n2-zarwoenai-5",
        "type": "fill",
        "prompt": "Điền thể chia của 言う: 真実を ___ ざるを得なかった。",
        "answer": "言わ",
        "explanation": "言う → 言わない → 言わざるを得ない."
      },
      {
        "id": "jlpt-n2-zarwoenai-6",
        "type": "choice",
        "prompt": "資金不足のため、事業を ___ せざるを得ない。",
        "options": [
          "縮小",
          "縮小し",
          "縮小する",
          "縮小して"
        ],
        "answer": "縮小",
        "explanation": "Danh từ Hán tự ghép trực tiếp với せざるを得ない: 縮小せざるを得ない."
      },
      {
        "id": "jlpt-n2-zarwoenai-7",
        "type": "order",
        "prompt": "Sắp xếp: Trước tình hình này, tôi buộc lòng phải nhận lỗi.",
        "options": [
          "自分の責任を",
          "認めざる",
          "を",
          "得ない"
        ],
        "answer": "自分の責任を認めざるを得ない",
        "explanation": "Trật tự: Trách nhiệm + 認めざる + を + 得ない."
      },
      {
        "id": "jlpt-n2-zarwoenai-8",
        "type": "choice",
        "prompt": "雨が激しくなったので、試合は ___ せざるを得ない。",
        "options": [
          "延期",
          "延期し",
          "延期する",
          "延期して"
        ],
        "answer": "延期",
        "explanation": "延期せざるを得ない: Buộc lòng phải hoãn."
      },
      {
        "id": "jlpt-n2-zarwoenai-9",
        "type": "fill",
        "prompt": "Điền thể chia của 行く: 代表として私が ___ ざるを得ない。",
        "answer": "行か",
        "explanation": "行く → 行かない → 行かざるを得ない."
      },
      {
        "id": "jlpt-n2-zarwoenai-10",
        "type": "order",
        "prompt": "Sắp xếp: Chúng tôi đành phải rút lui khỏi dự án.",
        "options": [
          "プロジェクトから",
          "撤退せざる",
          "を",
          "得なくなった"
        ],
        "answer": "プロジェクトから撤退せざるを得なくなった",
        "explanation": "Trật tự: Dự án + 撤退せざる + を + 得なくなった."
      }
    ]
  },
  {
    "id": "jlpt-n2-nitomonatte",
    "pattern": "〜に伴って・とともに",
    "title": "Kéo theo sự biến đổi / Cùng với sự thay đổi của",
    "level": "N2",
    "position": 259,
    "meaning": "【Dạng 1: 〜に伴って / に伴い】Cùng với sự biến đổi lớn của A thì B cũng biến chuyển theo\n【Dạng 2: 〜に伴う＋N】Bổ nghĩa cho danh từ: Các thay đổi/chi phí/rủi ro đi kèm",
    "formation": "【Dạng 1】V từ điển / N + に伴って / に伴い (văn viết)\n【Dạng 2】V từ điển / N + に伴う + Danh từ",
    "explanation": "Diễn tả quy luật vận động khách quan mang tính vĩ mô (dân số, kinh tế, công nghệ, xã hội, biến đổi khí hậu) kéo theo những chuyển biến dây chuyền tương ứng.",
    "notes": "Chú thích phân biệt:\n- 〜に伴って: Biến đổi xã hội, quy mô lớn, tính nhân quả và hệ quả hệ thống sâu rộng.\n- 〜につれて: Sự biến đổi tỉ lệ thuận hai chiều mang tính tự nhiên thường ngày (VD: Trời càng tối thì càng lạnh).",
    "mistake": "Cảnh báo lỗi: Bổ nghĩa cho danh từ bắt buộc chia thành に伴う (VD: 開発に伴う環境破壊, sai: 開発に伴って環境破壊).",
    "related": [
      "bridge-n2-35",
      "jlpt-n3-totomoni",
      "jlpt-n3-nitsurete"
    ],
    "examples": [
      {
        "ja": "少子高齢化が進むに伴って、労働力不足が深刻になっている。",
        "kana": "しょうしこうれいかがすすむにともなって、ろうどうりょくぶそくがしんこくになっている。",
        "vi": "Cùng với sự gia tăng của già hóa dân số, sự thiếu hụt lao động đang trở nên nghiêm trọng.",
        "readings": {
          "少子高齢化": "しょうしこうれいか",
          "進む": "すすむ",
          "労働力": "ろうどうりょく",
          "深刻": "しんこく"
        }
      },
      {
        "ja": "経済の発展に伴い、人々の生活水準が向上した。",
        "kana": "けいざいのはってんにともない、ひとびとのせいかつすいじゅんがこうじょうした。",
        "vi": "Đi đôi với sự phát triển kinh tế, mức sống của người dân đã được nâng cao.",
        "readings": {
          "経済": "けいざい",
          "発展": "はってん",
          "人々": "ひとびと",
          "生活水準": "せいかつすいじゅん",
          "向上": "こうじょう"
        }
      },
      {
        "ja": "工場の移転に伴う費用は会社が全額負担します。",
        "kana": "こうじょうのいてんにともなうひようはかいしゃがぜんがくふたんします。",
        "vi": "Chi phí phát sinh đi kèm với việc di dời nhà máy sẽ do công ty chi trả toàn bộ.",
        "readings": {
          "工場": "こうじょう",
          "移転": "いてん",
          "費用": "ひよう",
          "負担": "ふたん"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-nitomonatte-1",
        "type": "choice",
        "prompt": "都市の開発に ___ 、緑地が減少している。",
        "options": [
          "伴って",
          "向かって",
          "反して",
          "限って"
        ],
        "answer": "伴って",
        "explanation": "Cùng với sự phát triển đô thị: 開発に伴って."
      },
      {
        "id": "jlpt-n2-nitomonatte-2",
        "type": "fill",
        "prompt": "Điền từ bổ nghĩa danh từ: 地球温暖化に伴 ___ 異常気象が増加している。",
        "answer": "う",
        "explanation": "Bổ nghĩa cho 異常気象 (danh từ): に伴う + N."
      },
      {
        "id": "jlpt-n2-nitomonatte-3",
        "type": "order",
        "prompt": "Sắp xếp: Cùng với sự thay đổi thời đại, lối sống cũng thay đổi.",
        "options": [
          "時代の変化に",
          "伴って",
          "生活様式も",
          "変わってきた"
        ],
        "answer": "時代の変化に伴って生活様式も変わってきた",
        "explanation": "Trật tự: Biến đổi vĩ mô + に伴って + Hệ quả thay đổi theo."
      },
      {
        "id": "jlpt-n2-nitomonatte-4",
        "type": "choice",
        "prompt": "円高に ___ 、輸出産業は大打撃を受けた。",
        "options": [
          "伴い",
          "際し",
          "応じ",
          "対し"
        ],
        "answer": "伴い",
        "explanation": "Dạng văn viết báo chí: N + に伴い."
      },
      {
        "id": "jlpt-n2-nitomonatte-5",
        "type": "fill",
        "prompt": "Điền từ còn thiếu: 法律の改正 ___ 伴って、手続きが変わりました。",
        "answer": "に",
        "explanation": "Trợ từ đi với 伴って là に: 改正に伴って."
      },
      {
        "id": "jlpt-n2-nitomonatte-6",
        "type": "choice",
        "prompt": "人口の増加に ___ リスクも増えている。",
        "options": [
          "伴う",
          "伴って",
          "伴い",
          "伴えば"
        ],
        "answer": "伴う",
        "explanation": "Bổ nghĩa cho danh từ リスク: に伴う + N."
      },
      {
        "id": "jlpt-n2-nitomonatte-7",
        "type": "order",
        "prompt": "Sắp xếp: Đi kèm với sự cải cách kỹ thuật là nhiều ngành nghề mới ra đời.",
        "options": [
          "技術革新に",
          "伴い",
          "新しい職業が",
          "生まれた"
        ],
        "answer": "技術革新に伴い新しい職業が生まれた",
        "explanation": "Trật tự: Đột phá công nghệ + に伴い + Nghề nghiệp mới ra đời."
      },
      {
        "id": "jlpt-n2-nitomonatte-8",
        "type": "choice",
        "prompt": "年齢を ___ に伴って、体力が衰えてくる。",
        "options": [
          "重ねる",
          "重ねた",
          "重ねて",
          "重ね"
        ],
        "answer": "重ねる",
        "explanation": "V thể từ điển + に伴って: 重ねるに伴って."
      },
      {
        "id": "jlpt-n2-nitomonatte-9",
        "type": "fill",
        "prompt": "Điền trợ từ: グローバル化 ___ 伴い、英語教育が見直されている。",
        "answer": "に",
        "explanation": "Danh từ + に伴い: グローバル化に伴い."
      },
      {
        "id": "jlpt-n2-nitomonatte-10",
        "type": "order",
        "prompt": "Sắp xếp: Kéo theo sự sụt giảm doanh thu, nhân sự đã bị cắt giảm.",
        "options": [
          "売上の減少に",
          "伴って",
          "人員削減が",
          "行われた"
        ],
        "answer": "売上の減少に伴って人員削減が行われた",
        "explanation": "Trật tự: Giảm doanh số + に伴って + Cắt giảm nhân sự."
      }
    ]
  },
  {
    "id": "jlpt-n2-shidaida",
    "pattern": "〜次第だ・次第で",
    "title": "Tùy thuộc vào / Nguồn cơn sự việc / Ngay sau khi",
    "level": "N2",
    "position": 260,
    "meaning": "【Dạng 1: N＋次第で / 次第だ】Tùy thuộc vào A mà B thay đổi / quyết định\n【Dạng 2: Vます＋次第】Ngay sau khi hoàn thành A thì sẽ tiến hành B ngay\n【Dạng 3: 〜次第です】Toàn bộ đầu đuôi nguồn cơn lý do (văn thư doanh nghiệp)",
    "formation": "【Dạng 1】N + 次第だ / 次第では\n【Dạng 2】V thân ます + 次第 (vế sau là hành động ý chí của người nói)\n【Dạng 3】Thể thường + 次第です (kết thúc câu trần thuật trang trọng)",
    "explanation": "【Dạng 1: Tùy thuộc】Biểu thị kết quả thắng bại, mức độ tùy thuộc hoàn toàn vào nỗ lực, quyết định hoặc điều kiện.\n【Dạng 2: Ngay sau khi】Dùng trong thông báo công việc: Ngay khi có thông tin/hàng về sẽ xử lý ngay.\n【Dạng 3: Nguồn cơn】Giải thích bối cảnh, nguồn cơn dẫn tới quyết định trong báo cáo công việc.",
    "notes": "Chú thích phân biệt:\n- N次第: Đi trực tiếp với danh từ, KHÔNG có trợ từ の (nói 努力次第, không nói 努力の次第).\n- Vます次第: Vế sau luôn mang tính ý chí quyết định của người nói (〜します, 〜ご連絡します).",
    "mistake": "Cảnh báo lỗi: Trong Dạng 2 (Vます次第), vế sau không dùng thì quá khứ (không nói 届き次第連絡した, mà phải dùng たら hoặc と).",
    "related": [
      "bridge-n2-38",
      "bridge-n3-17",
      "jlpt-n3-totan"
    ],
    "examples": [
      {
        "ja": "試験に合格できるかどうかは、本人の努力次第です。",
        "kana": "しけんにごうかくできるかどうかは、ほんにんのどりょくしだいです。",
        "vi": "Việc có đỗ kỳ thi hay không tùy thuộc hoàn toàn vào nỗ lực của chính bản thân.",
        "readings": {
          "試験": "しけん",
          "合格": "ごうかく",
          "本人": "ほんにん",
          "努力": "どりょく"
        }
      },
      {
        "ja": "詳しい日程が決まり次第、すぐにご連絡いたします。",
        "kana": "くわしいにっていがきまりしだい、すぐにごれんらくいたします。",
        "vi": "Ngay sau khi lịch trình cụ thể được quyết định, tôi sẽ liên lạc lại cho quý khách ngay.",
        "readings": {
          "詳しい": "くわしい",
          "日程": "にってい",
          "決まり": "きまり",
          "連絡": "れんらく"
        }
      },
      {
        "ja": "急な事情により計画を変更せざるを得なくなった次第です。",
        "kana": "きゅうなじじょうによりけいかくをへんこうせざるをえなくなったしだいです。",
        "vi": "Đó là nguồn cơn dẫn đến việc chúng tôi đành phải thay đổi kế hoạch do tình huống bất khả kháng.",
        "readings": {
          "急": "きゅう",
          "事情": "じじょう",
          "計画": "けいかく",
          "変更": "へんこう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-shidaida-1",
        "type": "choice",
        "prompt": "結果はあなたのやり方 ___ です。",
        "options": [
          "次第",
          "とおり",
          "はず",
          "わけ"
        ],
        "answer": "次第",
        "explanation": "Tùy thuộc vào: N + 次第です: やり方次第です."
      },
      {
        "id": "jlpt-n2-shidaida-2",
        "type": "fill",
        "prompt": "Điền thể đúng của động từ 届く: 荷物が ___ 次第、確認します。",
        "answer": "届き",
        "explanation": "V thân ます + 次第 (ngay sau khi): 届き次第."
      },
      {
        "id": "jlpt-n2-shidaida-3",
        "type": "order",
        "prompt": "Sắp xếp: Tùy theo thời tiết ngày mai mà chuyến đi có thể bị hủy.",
        "options": [
          "明日の天気",
          "次第では",
          "旅行を",
          "中止します"
        ],
        "answer": "明日の天気次第では旅行を中止します",
        "explanation": "Trật tự: N + 次第では + Tân ngữ + V."
      },
      {
        "id": "jlpt-n2-shidaida-4",
        "type": "choice",
        "prompt": "準備が ___ 次第、出発いたします。",
        "options": [
          "でき",
          "できる",
          "できた",
          "できよう"
        ],
        "answer": "でき",
        "explanation": "V thân ます + 次第: でき次第 (ngay sau khi chuẩn bị xong)."
      },
      {
        "id": "jlpt-n2-shidaida-5",
        "type": "fill",
        "prompt": "Điền từ giải thích nguồn cơn: このような事情で遅れた ___ です。",
        "answer": "次第",
        "explanation": "〜次第です: đó là toàn bộ lý do nguồn cơn sự việc."
      },
      {
        "id": "jlpt-n2-shidaida-6",
        "type": "choice",
        "prompt": "考え方 ___ で、人生は楽しくも辛くもなる。",
        "options": [
          "ひとつ",
          "ひとつ次第",
          "ひとり",
          "そのもの"
        ],
        "answer": "ひとつ次第",
        "explanation": "N + ひとつ次第で: chỉ tùy thuộc vào một góc nhìn suy nghĩ."
      },
      {
        "id": "jlpt-n2-shidaida-7",
        "type": "order",
        "prompt": "Sắp xếp: Ngay sau khi họp xong tôi sẽ gọi lại cho anh.",
        "options": [
          "会議が",
          "終わり次第",
          "折り返し",
          "お電話します"
        ],
        "answer": "会議が終わり次第折り返しお電話します",
        "explanation": "Trật tự: Chủ ngữ cuộc họp + Vます次第 + Gọi lại ngay."
      },
      {
        "id": "jlpt-n2-shidaida-8",
        "type": "choice",
        "prompt": "検査の結果 ___ では、入院が必要になるかもしれません。",
        "options": [
          "次第",
          "きり",
          "ばかり",
          "ほど"
        ],
        "answer": "次第",
        "explanation": "N + 次第では: Tùy vào kết quả xét nghiệm."
      },
      {
        "id": "jlpt-n2-shidaida-9",
        "type": "fill",
        "prompt": "Điền thể đúng của 分かる: 状況が ___ 次第、お知らせします。",
        "answer": "分かり",
        "explanation": "V thân ます + 次第: 分かり次第."
      },
      {
        "id": "jlpt-n2-shidaida-10",
        "type": "order",
        "prompt": "Sắp xếp: Thành bại tùy thuộc vào sự cố gắng của bạn.",
        "options": [
          "成功するかどうかは",
          "君の頑張り",
          "次第",
          "だ"
        ],
        "answer": "成功するかどうかは君の頑張り次第だ",
        "explanation": "Trật tự: Thành công hay không + N + 次第だ."
      }
    ]
  },
  {
    "id": "jlpt-n2-amari",
    "pattern": "〜あまり",
    "title": "Vì quá... nên dẫn đến kết quả ngoài ý muốn",
    "level": "N2",
    "position": 261,
    "meaning": "【〜あまり（に）】Vì mức độ cảm xúc hoặc trạng thái quá cao nên dẫn đến hành vi, kết quả bất thường hoặc tiêu cực",
    "formation": "V thể thường (thường là V thể từ điển hoặc Vた) + あまり\nTính từ い (dạng い hoặc さ) + あまり\nTính từ な + な + あまり\nN + の + あまり",
    "explanation": "Diễn tả nguyên nhân xuất phát từ cảm xúc tột cùng (vui sướng, lo lắng, hồi hộp, tức giận, đau đớn) khiến người ta mất tự chủ hoặc gây ra kết quả không bình thường.",
    "notes": "Chú thích phân biệt:\n- 〜あまり: Đi với các từ chỉ cảm xúc nội tâm sâu sắc (心配, 悲しみ, 緊張, 喜び).\n- 〜すぎて: Khách quan hơn, có thể dùng cho số lượng, độ lớn vật lý (食べすぎた, 飲みすぎた).",
    "mistake": "Cảnh báo lỗi: Danh từ đi trước あまり phải thêm の (VD: 心配のあまり, sai: 心配あまり).",
    "related": [
      "bridge-n2-36",
      "jlpt-n5-sugiru"
    ],
    "examples": [
      {
        "ja": "母は私の体を心配するあまり、毎日電話をかけてくる。",
        "kana": "はははわたしのからだをしんぱいするあまり、まいにちでんわをかけてくる。",
        "vi": "Mẹ tôi vì quá lo lắng cho sức khỏe của tôi nên ngày nào cũng gọi điện.",
        "readings": {
          "母": "はは",
          "体": "からだ",
          "心配": "しんぱい",
          "毎日": "まいにち",
          "電話": "でんわ"
        }
      },
      {
        "ja": "試験に合格した嬉しさのあまり、思わず涙が出た。",
        "kana": "しけんにごうかくしたうれしさのあまり、おもわずなみだがでた。",
        "vi": "Vì quá vui sướng khi thi đỗ, tôi bất giác bật khóc.",
        "readings": {
          "試験": "しけん",
          "合格": "ごうかく",
          "嬉しさ": "うれしさ",
          "思わず": "おもわず",
          "涙": "なみだ"
        }
      },
      {
        "ja": "緊張のあまり、言いたいことを全部忘れてしまった。",
        "kana": "きんちょうのあまり、いいたいことをぜんぶわすれてしまった。",
        "vi": "Vì quá căng thẳng, tôi đã quên sạch những điều mình muốn nói.",
        "readings": {
          "緊張": "きんちょう",
          "言いたい": "いいたい",
          "全部": "ぜんぶ",
          "忘れて": "わすれて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-amari-1",
        "type": "choice",
        "prompt": "緊張の ___ 、面接で声が震えてしまった。",
        "options": [
          "あまり",
          "おかげ",
          "せいで",
          "とおり"
        ],
        "answer": "あまり",
        "explanation": "Cảm xúc cực độ dẫn đến mất tự chủ: N + のあまり: 緊張のあまり."
      },
      {
        "id": "jlpt-n2-amari-2",
        "type": "fill",
        "prompt": "Điền trợ từ liên kết danh từ: 怒り ___ あまり、我を忘れて怒鳴ってしまった。",
        "answer": "の",
        "explanation": "N + の + あまり: 怒りのあまり (vì quá giận dữ)."
      },
      {
        "id": "jlpt-n2-amari-3",
        "type": "order",
        "prompt": "Sắp xếp: Vì quá vội vàng nên tôi đã bỏ quên ví tiền.",
        "options": [
          "急ぐ",
          "あまり",
          "財布を忘れて",
          "出かけてしまった"
        ],
        "answer": "急ぐあまり財布を忘れて出かけてしまった",
        "explanation": "Trật tự: V từ điển + あまり + Hệ quả sơ suất."
      },
      {
        "id": "jlpt-n2-amari-4",
        "type": "choice",
        "prompt": "驚きのあまり、言葉が ___ 。",
        "options": [
          "出なかった",
          "出た",
          "出そうだった",
          "出ている"
        ],
        "answer": "出なかった",
        "explanation": "Vì quá kinh ngạc nên không thốt nên lời: 言葉が出なかった."
      },
      {
        "id": "jlpt-n2-amari-5",
        "type": "fill",
        "prompt": "Điền từ nối tính từ đuôi な: 彼女は熱心 ___ あまり、周りが見えなくなっている。",
        "answer": "な",
        "explanation": "Tính từ な + な + あまり: 熱心なあまり."
      },
      {
        "id": "jlpt-n2-amari-6",
        "type": "choice",
        "prompt": "子供を愛する ___ 、厳しくしすぎてしまった。",
        "options": [
          "あまり",
          "ゆえに",
          "せいで",
          "わりに"
        ],
        "answer": "あまり",
        "explanation": "V từ điển + あまり: 愛するあまり (vì quá thương yêu con)."
      },
      {
        "id": "jlpt-n2-amari-7",
        "type": "order",
        "prompt": "Sắp xếp: Vì quá đau đớn tôi đã không thể đứng dậy được.",
        "options": [
          "痛みのあまり",
          "その場に",
          "倒れ込んで",
          "しまった"
        ],
        "answer": "痛みのあまりその場に倒れ込んでしまった",
        "explanation": "Trật tự: Cảm xúc thể xác + のあまり + Gục ngã tại chỗ."
      },
      {
        "id": "jlpt-n2-amari-8",
        "type": "choice",
        "prompt": "悲しみの ___ 、食事も喉を通らない。",
        "options": [
          "あまり",
          "かぎり",
          "ところ",
          "しだい"
        ],
        "answer": "あまり",
        "explanation": "悲しみのあまり: vì quá đau buồn nuốt cơm không trôi."
      },
      {
        "id": "jlpt-n2-amari-9",
        "type": "fill",
        "prompt": "Điền từ: 働きすぎた ___ 、体を壊して入院した。",
        "answer": "あまり",
        "explanation": "Vた + あまり: 働きすぎたあまり (vì làm việc quá kiệt sức)."
      },
      {
        "id": "jlpt-n2-amari-10",
        "type": "order",
        "prompt": "Sắp xếp: Vì quá sốc tôi không nói được lời nào.",
        "options": [
          "ショックの",
          "あまり",
          "一言も",
          "話せなかった"
        ],
        "answer": "ショックのあまり一言も話せなかった",
        "explanation": "Trật tự: N + のあまり + Không nói được lời nào."
      }
    ]
  },
  {
    "id": "jlpt-n2-ijuuwa",
    "pattern": "〜以上・以上は",
    "title": "Một khi đã... thì đương nhiên phải",
    "level": "N2",
    "position": 262,
    "meaning": "【〜以上（は）】Một khi đã xác định / đã hứa / đã ở vào vị trí đó thì đương nhiên phải có trách nhiệm thực hiện đến cùng",
    "formation": "V thể thường (thường là V từ điển hoặc Vた) + 以上(は)\nN + である + 以上(は)",
    "explanation": "Diễn tả quyết tâm mạnh mẽ hoặc đòi hỏi đạo lý tất yếu: khi tiền đề đã được xác lập thì vế sau bắt buộc phải có nghĩa vụ, ý chí tương xứng.",
    "notes": "Chú thích phân biệt:\n- 〜以上: Vế sau luôn đi kèm các dạng mệnh lệnh, nghĩa vụ, khuyên bảo: 〜べきだ, 〜なければならない, 〜つもりだ, 〜てください.\n- 〜からには: Đồng nghĩa nhưng mang sắc thái ý chí cá nhân quyết liệt hơn.",
    "mistake": "Cảnh báo lỗi: Vế sau không dùng câu chỉ khả năng thông thường hoặc quá khứ trần thuật không có ý chí.",
    "related": [
      "bridge-n2-32",
      "jlpt-n2-bekida"
    ],
    "examples": [
      {
        "ja": "約束した以上、どんなことがあっても守らなければならない。",
        "kana": "やくそくしたいじょう、どんなことがあってもまもらなければならない。",
        "vi": "Một khi đã hứa thì dù có chuyện gì xảy ra cũng phải giữ lời.",
        "readings": {
          "約束": "やくそく",
          "以上": "いじょう",
          "守らなければ": "まもらなければ"
        }
      },
      {
        "ja": "学生である以上、勉強を第一に考えるべきだ。",
        "kana": "がくせいであるいじょう、べんきょうをだいいちにかんがえるべきだ。",
        "vi": "Một khi đã là học sinh thì nên coi việc học là ưu tiên hàng đầu.",
        "readings": {
          "学生": "がくせい",
          "勉強": "べんきょう",
          "第一": "だいいち",
          "考える": "かんがえる"
        }
      },
      {
        "ja": "引き受けた以上は、最後まで責任を持ってやり遂げます。",
        "kana": "ひきうけたいじょうは、さいごまでせきにんをもってやりとげます。",
        "vi": "Một khi đã nhận lời, tôi sẽ chịu trách nhiệm làm cho đến cùng.",
        "readings": {
          "引き受けた": "ひきうけた",
          "最後": "さいご",
          "責任": "せきにん",
          "遂げます": "とげます"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-ijuuwa-1",
        "type": "choice",
        "prompt": "自分で決めた ___ 、途中で諦めるわけにはいかない。",
        "options": [
          "以上は",
          "あまりは",
          "くせには",
          "わりに"
        ],
        "answer": "以上は",
        "explanation": "Một khi đã tự quyết định: Vた + 以上は."
      },
      {
        "id": "jlpt-n2-ijuuwa-2",
        "type": "fill",
        "prompt": "Điền dạng liên kết danh từ: プロ ___ ある以上、最高のパフォーマンスを見せるべきだ。",
        "answer": "で",
        "explanation": "N + である + 以上: プロである以上."
      },
      {
        "id": "jlpt-n2-ijuuwa-3",
        "type": "order",
        "prompt": "Sắp xếp: Một khi đã tham gia trận đấu thì tôi muốn giành chiến thắng.",
        "options": [
          "試合に出る",
          "以上は",
          "絶対に",
          "勝ちたいです"
        ],
        "answer": "試合に出る以上は絶対に勝ちたいです",
        "explanation": "Trật tự: Tiền đề quyết tâm + 以上は + Ý chí mãnh liệt."
      },
      {
        "id": "jlpt-n2-ijuuwa-4",
        "type": "choice",
        "prompt": "契約を結んだ ___ 、条件を守る義務がある。",
        "options": [
          "以上",
          "ばかり",
          "ところ",
          "ほど"
        ],
        "answer": "以上",
        "explanation": "Một khi đã ký kết hợp đồng: 結んだ以上."
      },
      {
        "id": "jlpt-n2-ijuuwa-5",
        "type": "fill",
        "prompt": "Điền từ: 日本に住んでいる ___ は、日本の法律を守るべきだ。",
        "answer": "以上",
        "explanation": "V thể thường + 以上は: 住んでいる以上は."
      },
      {
        "id": "jlpt-n2-ijuuwa-6",
        "type": "choice",
        "prompt": "お金を払った以上、___ サービスを受ける権利がある。",
        "options": [
          "きちんとした",
          "きちんとして",
          "きちんと",
          "きちんとな"
        ],
        "answer": "きちんとした",
        "explanation": "Một khi đã trả tiền thì có quyền nhận dịch vụ đàng hoàng."
      },
      {
        "id": "jlpt-n2-ijuuwa-7",
        "type": "order",
        "prompt": "Sắp xếp: Một khi đã nhận tiền lương thì hãy làm việc nghiêm túc.",
        "options": [
          "給料をもらっている",
          "以上は",
          "真面目に",
          "働いてください"
        ],
        "answer": "給料をもらっている以上は真面目に働いてください",
        "explanation": "Trật tự: Tiền đề nhận lương + 以上は + Yêu cầu nghiêm túc."
      },
      {
        "id": "jlpt-n2-ijuuwa-8",
        "type": "choice",
        "prompt": "リーダーに選ばれた以上、全力を ___ つもりです。",
        "options": [
          "尽くす",
          "尽くした",
          "尽くして",
          "尽くそう"
        ],
        "answer": "尽くす",
        "explanation": "V từ điển + つもり: 全力を尽くすつもりです."
      },
      {
        "id": "jlpt-n2-ijuuwa-9",
        "type": "fill",
        "prompt": "Điền thể chia của 始める: ___ 以上は、最後まで続けなさい。",
        "answer": "始めた",
        "explanation": "Vた + 以上は: 始めた以上は (một khi đã bắt đầu làm)."
      },
      {
        "id": "jlpt-n2-ijuuwa-10",
        "type": "order",
        "prompt": "Sắp xếp: Một khi đã biết rõ thì không thể vờ như không biết.",
        "options": [
          "真相を知った",
          "以上",
          "黙っている",
          "わけにはいかない"
        ],
        "answer": "真相を知った以上黙っているわけにはいかない",
        "explanation": "Trật tự: Biết chân tướng + 以上 + Không thể im lặng."
      }
    ]
  },
  {
    "id": "jlpt-n2-kawari-ni",
    "pattern": "〜代わりに",
    "title": "Thay vì / Đổi lại, bù lại",
    "level": "N2",
    "position": 263,
    "meaning": "【Dạng 1: Thay thế đối tượng】Thay vì làm A thì làm B / Đại diện cho A\n【Dạng 2: Bù lại, đánh đổi】Mặt tốt A bù trừ cho mặt xấu B (hoặc ngược lại)",
    "formation": "【Dạng 1】V từ điển + 代わりに / N + の代わりに\n【Dạng 2】Thể thường (V/A/N) + 代わりに (Aな + な / N + の)",
    "explanation": "【Dạng 1: Thay thế】Hành động khác được chọn để thế chỗ cho hành động dự kiến ban đầu.\n【Dạng 2: Đánh đổi bù trừ】Có lợi thế này nhưng bù lại phải chịu một thiệt thòi tương đương, hoặc ngược lại.",
    "notes": "Chú thích phân biệt:\n- Nの代わりに: Thay cho người đó (người khác làm đại diện).\n- 〜にかわって: Mang tính chính thức, văn phong trang trọng hơn trong thông báo công ty.",
    "mistake": "Cảnh báo lỗi: Trong Dạng 2 (bù trừ), hai vế phải có tính chất tương phản hai mặt (được mặt này mất mặt kia).",
    "related": [
      "bridge-n2-31",
      "mnn-40"
    ],
    "examples": [
      {
        "ja": "風邪を引いた父の代わりに、私が運転します。",
        "kana": "かぜをひいたちちのかわりに、わたしがうんてんします。",
        "vi": "Thay cho bố tôi đang bị cảm, tôi sẽ lái xe.",
        "readings": {
          "風邪": "かぜ",
          "父": "ちち",
          "代わりに": "かわりに",
          "運転": "うんてん"
        }
      },
      {
        "ja": "このアパートは家賃が安い代わりに、駅から遠い。",
        "kana": "このあぱーとはやちんがやすいかわりに、えきからとおい。",
        "vi": "Căn hộ này tiền thuê rẻ, nhưng bù lại thì xa ga.",
        "readings": {
          "家賃": "やちん",
          "安い": "やすい",
          "駅": "えき",
          "遠い": "とおい"
        }
      },
      {
        "ja": "英語を教えてもらう代わりに、日本語を教えてあげた。",
        "kana": "えいごをおしえてもらうかわりに、にほんごをおしえてあげた。",
        "vi": "Đổi lại việc được anh ấy dạy tiếng Anh, tôi đã dạy tiếng Nhật cho anh ấy.",
        "readings": {
          "英語": "えいご",
          "教えて": "おしえて",
          "日本語": "にほんご"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-kawari-ni-1",
        "type": "choice",
        "prompt": "私が出席できないので、田中さんに ___ 出席してもらいます。",
        "options": [
          "代わりに",
          "あまりに",
          "くせに",
          "とおりに"
        ],
        "answer": "代わりに",
        "explanation": "Thay thế người đại diện: 代わりに出席してもらいます."
      },
      {
        "id": "jlpt-n2-kawari-ni-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối danh từ: 車 ___ 代わりに自転車で通勤しています。",
        "answer": "の",
        "explanation": "N + の + 代わりに: 車の代わりに (thay vì đi ô tô)."
      },
      {
        "id": "jlpt-n2-kawari-ni-3",
        "type": "order",
        "prompt": "Sắp xếp: Công việc này tự do nhưng đổi lại thu nhập không ổn định.",
        "options": [
          "自由な",
          "代わりに",
          "収入が",
          "不安定です"
        ],
        "answer": "自由な代わりに収入が不安定です",
        "explanation": "Trật tự: Tính từ な + 代わりに + Hệ quả bù trừ."
      },
      {
        "id": "jlpt-n2-kawari-ni-4",
        "type": "choice",
        "prompt": "映画を見に行く代わりに、家で本を ___ ことにした。",
        "options": [
          "読む",
          "読んで",
          "読んだ",
          "読もう"
        ],
        "answer": "読む",
        "explanation": "V từ điển + ことにした: 読むことにした."
      },
      {
        "id": "jlpt-n2-kawari-ni-5",
        "type": "fill",
        "prompt": "Điền từ nối tính từ: この仕事は給料が高い ___ 、とても忙しい。",
        "answer": "代わりに",
        "explanation": "Tính từ い + 代わりに: 高い代わりに (lương cao bù lại cực bận)."
      },
      {
        "id": "jlpt-n2-kawari-ni-6",
        "type": "choice",
        "prompt": "食事をおごる ___ 、荷物の運搬を手伝ってくれない？",
        "options": [
          "代わりに",
          "わりに",
          "くせに",
          "あまり"
        ],
        "answer": "代わりに",
        "explanation": "Trao đổi có qua có lại: V từ điển + 代わりに."
      },
      {
        "id": "jlpt-n2-kawari-ni-7",
        "type": "order",
        "prompt": "Sắp xếp: Thay vì mua mới, tôi quyết định đem đi sửa chữa.",
        "options": [
          "新しく買う",
          "代わりに",
          "修理して",
          "使うことにした"
        ],
        "answer": "新しく買う代わりに修理して使うことにした",
        "explanation": "Trật tự: Thay vì mua mới + Sửa chữa để dùng tiếp."
      },
      {
        "id": "jlpt-n2-kawari-ni-8",
        "type": "choice",
        "prompt": "日曜日に出勤した ___ 、月曜日に休みを取った。",
        "options": [
          "代わりに",
          "くせに",
          "あまり",
          "とおり"
        ],
        "answer": "代わりに",
        "explanation": "Nghỉ bù lại ngày đi làm: Vた + 代わりに."
      },
      {
        "id": "jlpt-n2-kawari-ni-9",
        "type": "fill",
        "prompt": "Điền từ: バターの ___ にマーガリンを使う。",
        "answer": "代わり",
        "explanation": "Nの代わりに: thay thế bơ bằng magarine."
      },
      {
        "id": "jlpt-n2-kawari-ni-10",
        "type": "order",
        "prompt": "Sắp xếp: Điện thoại này nhỏ gọn nhưng bù lại màn hình hơi khó nhìn.",
        "options": [
          "コンパクトな",
          "代わりに",
          "画面が",
          "少し見づらい"
        ],
        "answer": "コンパクトな代わりに画面が少し見づらい",
        "explanation": "Trật tự: Ưu điểm + 代わりに + Nhược điểm đánh đổi."
      }
    ]
  },
  {
    "id": "jlpt-n2-kuseni",
    "pattern": "〜くせに",
    "title": "Mặc dù... vậy mà (chỉ trích, mỉa mai, bất mãn)",
    "level": "N2",
    "position": 264,
    "meaning": "【〜くせに】Mặc dù... vậy mà (biểu thị thái độ khinh thị, trách móc gay gắt hoặc mỉa mai sự không tương xứng)",
    "formation": "Thể thường (V/A/N) + くせに\n- Aな + な + くせに\n- N + の + くせに",
    "explanation": "Dùng khi đối tượng có điều kiện hoặc bản chất A nhưng lại thể hiện thái độ hoặc hành vi B hoàn toàn tương phản, gây cảm giác chướng tai gai mắt cho người nói.",
    "notes": "Chú thích phân biệt:\n- 〜くせに: Luôn chứa hàm ý chỉ trích, coi thường tiêu cực (tuyệt đối không dùng cho lời khen ngợi).\n- 〜のに: Thất vọng, ngạc nhiên trung tính.\n- Chủ ngữ của hai vế trong 〜くせに bắt buộc phải là cùng một người (hoặc cùng một nhóm đối tượng).",
    "mistake": "Cảnh báo lỗi: Không dùng 〜くせに cho chính bản thân mình (sai: 私は知っているくせに言わなかった), trừ trường hợp tự mỉa mai tự ti.",
    "related": [
      "jlpt-n4-noni",
      "bridge-n2-30"
    ],
    "examples": [
      {
        "ja": "彼は何も知らないくせに、知っているような顔をする。",
        "kana": "かれはなにもしらないくせに、しっているようなかおをする。",
        "vi": "Hắn ta chẳng biết cái gì vậy mà lúc nào cũng làm ra vẻ thông thái.",
        "readings": {
          "彼": "かれ",
          "何も": "なにも",
          "知らない": "しらない",
          "顔": "かお"
        }
      },
      {
        "ja": "子供のくせに、大人のような生意気な口を利くな。",
        "kana": "こどものくせに、おとなのようななまいきなくちをきくな。",
        "vi": "Nít ranh con nít mà dám ăn nói xấc xược như người lớn vậy hả!",
        "readings": {
          "子供": "こども",
          "大人": "おとな",
          "生意気": "なまいき",
          "口": "くち"
        }
      },
      {
        "ja": "自分では何もしないくせに、他人の文句ばかり言う。",
        "kana": "じぶんではなにもしないくせに、たにんのもんくばかりいう。",
        "vi": "Bản thân thì chẳng làm nên tích sự gì vậy mà suốt ngày chỉ toàn phàn nàn người khác.",
        "readings": {
          "自分": "じぶん",
          "他人": "たにん",
          "文句": "もんく",
          "言う": "いう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-kuseni-1",
        "type": "choice",
        "prompt": "お金がない ___ 、高いブランド品ばかり買っている。",
        "options": [
          "くせに",
          "あまりに",
          "かぎりに",
          "とおりに"
        ],
        "answer": "くせに",
        "explanation": "Trách móc thói tiêu hoang: ない + くせに."
      },
      {
        "id": "jlpt-n2-kuseni-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối danh từ: 男 ___ くせに、そんな些細なことで泣くな。",
        "answer": "の",
        "explanation": "N + の + くせに: 男のくせに (đàn ông con trai mà lại...)."
      },
      {
        "id": "jlpt-n2-kuseni-3",
        "type": "order",
        "prompt": "Sắp xếp: Thừa biết rồi vậy mà cứ giả vờ không biết.",
        "options": [
          "知っている",
          "くせに",
          "知らない",
          "ふりをしている"
        ],
        "answer": "知っているくせに知らないふりをしている",
        "explanation": "Trật tự: Vế thực tế + くせに + Vế giả vờ mỉa mai."
      },
      {
        "id": "jlpt-n2-kuseni-4",
        "type": "choice",
        "prompt": "下手な ___ 、プロぶるなよ。",
        "options": [
          "くせに",
          "わりに",
          "ために",
          "ように"
        ],
        "answer": "くせに",
        "explanation": "Tính từ な + な + くせに: 下手なくせに (dở mà làm vẻ chuyên nghiệp)."
      },
      {
        "id": "jlpt-n2-kuseni-5",
        "type": "fill",
        "prompt": "Điền từ chỉ trích: できると言った ___ 、全然進んでいない。",
        "answer": "くせに",
        "explanation": "Vた + くせに: đã nói là làm được vậy mà."
      },
      {
        "id": "jlpt-n2-kuseni-6",
        "type": "choice",
        "prompt": "若いの ___ 、少し歩いただけで疲れたと言っている。",
        "options": [
          "くせに",
          "あまり",
          "おかげ",
          "とおり"
        ],
        "answer": "くせに",
        "explanation": "Tính từ い + くせに: 若いくせに."
      },
      {
        "id": "jlpt-n2-kuseni-7",
        "type": "order",
        "prompt": "Sắp xếp: Chẳng bao giờ tập luyện vậy mà lúc nào cũng mong thắng.",
        "options": [
          "練習もしない",
          "くせに",
          "勝ちたいだなんて",
          "甘いよ"
        ],
        "answer": "練習もしないくせに勝ちたいだなんて甘いよ",
        "explanation": "Trật tự: Không tập luyện + くせに + Đòi thắng là quá viển vông."
      },
      {
        "id": "jlpt-n2-kuseni-8",
        "type": "choice",
        "prompt": "約束した ___ 、すっぽかすなんてひどい。",
        "options": [
          "くせに",
          "わりに",
          "ために",
          "しだいに"
        ],
        "answer": "くせに",
        "explanation": "Đã hứa thế mà lại cho leo cây: 約束したくせに."
      },
      {
        "id": "jlpt-n2-kuseni-9",
        "type": "fill",
        "prompt": "Điền từ nối: 元気 ___ くせに、病気のふりをして会社を休んだ。",
        "answer": "な",
        "explanation": "Tính từ な + な + くせに: 元気なくせに."
      },
      {
        "id": "jlpt-n2-kuseni-10",
        "type": "order",
        "prompt": "Sắp xếp: Đã không giúp đỡ mà còn đứng cười cợt.",
        "options": [
          "手伝いも",
          "しないくせに",
          "笑って",
          "見ているだけだ"
        ],
        "answer": "手伝いもしないくせに笑って見ているだけだ",
        "explanation": "Trật tự: Không chịu giúp + しないくせに + Đứng cười."
      }
    ]
  },
  {
    "id": "jlpt-n2-kotoni-wa",
    "pattern": "〜ないことには（〜ない）",
    "title": "Nếu không làm... thì không thể",
    "level": "N2",
    "position": 265,
    "meaning": "【〜ないことには...ない】Nếu như điều kiện A chưa được thỏa mãn thì tuyệt đối không thể tiến hành hoặc đạt được kết quả B",
    "formation": "V1 thể ない + ことには + V2 thể phủ định (〜ない / 〜できない)",
    "explanation": "Khẳng định điều kiện tiên quyết bắt buộc phải hoàn thành trước: chừng nào vế trước chưa xong thì vế sau không thể nào thực hiện được.",
    "notes": "Chú thích phân biệt:\n- 〜ないことには: Vế sau luôn luôn là PHỦ ĐỊNH (〜ない, 〜わからない, 〜始まらない).\n- 〜なければ: Câu điều kiện giả định thông thường, vế sau có thể khẳng định hoặc phủ định.",
    "mistake": "Cảnh báo lỗi: Vế sau không bao giờ dùng câu khẳng định tích cực (sai: 行かないことには分かる, đúng: 行かないことには分からない).",
    "related": [
      "bridge-n2-29",
      "jlpt-n4-ba"
    ],
    "examples": [
      {
        "ja": "実際に会ってみないことには、どんな人か分からない。",
        "kana": "じっさいにあってみないことには、どんなひとかわからない。",
        "vi": "Nếu chưa gặp mặt trực tiếp thì không thể nào biết được người đó ra sao.",
        "readings": {
          "実際": "じっさい",
          "会って": "あって",
          "人": "ひと",
          "分からない": "わからない"
        }
      },
      {
        "ja": "予算が決まらないことには、計画を進めようがない。",
        "kana": "よさんがきまらないことには、けいかくをすすめようがない。",
        "vi": "Nếu ngân sách chưa được duyệt thì chẳng có cách nào xúc tiến kế hoạch được.",
        "readings": {
          "予算": "よさん",
          "決まらない": "きまらない",
          "計画": "けいかく",
          "進めよう": "すすめよう"
        }
      },
      {
        "ja": "現物を見てみないことには、買うかどうか決められません。",
        "kana": "げんぶつをみてみないことには、かうかどうかきめられません。",
        "vi": "Nếu chưa tận mắt xem món hàng thật thì tôi không thể quyết định có mua hay không.",
        "readings": {
          "現物": "げんぶつ",
          "見て": "みて",
          "買う": "かう",
          "決められません": "きめられません"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-kotoni-wa-1",
        "type": "choice",
        "prompt": "話を聞いて ___ ことには、どちらが正しいか判断できない。",
        "options": [
          "みない",
          "みる",
          "みたら",
          "みれば"
        ],
        "answer": "みない",
        "explanation": "Vない + ことには: みないことには (nếu chưa thử lắng nghe)."
      },
      {
        "id": "jlpt-n2-kotoni-wa-2",
        "type": "fill",
        "prompt": "Điền phần còn thiếu của cấu trúc điều kiện tiên quyết: 書類を提出し ___ ことには、審査は始まりません。",
        "answer": "ない",
        "explanation": "Vない + ことには: 提出しないことには."
      },
      {
        "id": "jlpt-n2-kotoni-wa-3",
        "type": "order",
        "prompt": "Sắp xếp: Nếu chưa ăn thử thì không biết vị ngon hay dở.",
        "options": [
          "食べてみない",
          "ことには",
          "美味しいかどうか",
          "分からない"
        ],
        "answer": "食べてみないことには美味しいかどうか分からない",
        "explanation": "Trật tự: Vない + ことには + Phủ định không biết."
      },
      {
        "id": "jlpt-n2-kotoni-wa-4",
        "type": "choice",
        "prompt": "全員が揃わないことには、会議を ___ 。",
        "options": [
          "始められない",
          "始められる",
          "始める",
          "始めよう"
        ],
        "answer": "始められない",
        "explanation": "Vế sau luôn mang nghĩa phủ định: 始められない."
      },
      {
        "id": "jlpt-n2-kotoni-wa-5",
        "type": "fill",
        "prompt": "Điền từ: 本人に確かめない ___ には、事実が分からない。",
        "answer": "こと",
        "explanation": "Cấu trúc 〜ないことには: 確かめないことには."
      },
      {
        "id": "jlpt-n2-kotoni-wa-6",
        "type": "choice",
        "prompt": "やって ___ ことには、うまくいくかどうか分からないよ。",
        "options": [
          "みない",
          "みる",
          "みて",
          "みた"
        ],
        "answer": "みない",
        "explanation": "やってみないことには: nếu không làm thử thì không biết."
      },
      {
        "id": "jlpt-n2-kotoni-wa-7",
        "type": "order",
        "prompt": "Sắp xếp: Nếu đôi bên chưa đồng ý thì không thể ký kết hợp đồng.",
        "options": [
          "双方が合意しない",
          "ことには",
          "契約を",
          "結べません"
        ],
        "answer": "双方が合意しないことには契約を結べません",
        "explanation": "Trật tự: Điều kiện tiên quyết + ことには + Không thể ký."
      },
      {
        "id": "jlpt-n2-kotoni-wa-8",
        "type": "choice",
        "prompt": "値段を ___ ことには、予算が足りるか判断できない。",
        "options": [
          "聞かない",
          "聞く",
          "聞いて",
          "聞いた"
        ],
        "answer": "聞かない",
        "explanation": "Vない + ことには: 聞かないことには."
      },
      {
        "id": "jlpt-n2-kotoni-wa-9",
        "type": "fill",
        "prompt": "Điền thể đúng của 行く: 現地へ ___ ことには、被害の規模が分からない。",
        "answer": "行かない",
        "explanation": "Vない + ことには: 行かないことには (nếu không đến tận nơi)."
      },
      {
        "id": "jlpt-n2-kotoni-wa-10",
        "type": "order",
        "prompt": "Sắp xếp: Nếu phụ huynh chưa đồng ý thì không thể xuất cảnh.",
        "options": [
          "親の許可を",
          "得ないことには",
          "留学することは",
          "できない"
        ],
        "answer": "親の許可を得ないことには留学することはできない",
        "explanation": "Trật tự: Chưa có phép + 得ないことには + Không thể du học."
      }
    ]
  },
  {
    "id": "jlpt-n2-tamaranai",
    "pattern": "〜てたまらない・てならない",
    "title": "Không chịu nổi / Vô cùng... khôn nguôi",
    "level": "N2",
    "position": 266,
    "meaning": "【Dạng 1: 〜てたまらない】Không chịu nổi (cảm giác cơ thể hoặc bức bối chủ quan không kìm nén được)\n【Dạng 2: 〜てならない】Cứ cảm thấy... khôn nguôi (cảm xúc, linh tính tự nhiên dâng trào trong tâm trí)",
    "formation": "【Dạng 1】Vて / Aくて / Aで + たまらない (たまらなく...)\n【Dạng 2】Vて / Aくて / Aで + ならない (thường đi với động từ cảm xúc, giác quan tự phát: 気になる, 思える, 心配だ)",
    "explanation": "【Dạng 1: たまらない】Mức độ thôi thúc mãnh liệt của thể xác hoặc tinh thần đến mức bản thân không còn sức chịu đựng (ngứa, đau, khát, thèm gặp).\n【Dạng 2: ならない】Tâm trạng hoặc cảm giác lo âu tự nhiên nảy sinh từ sâu thẳm tâm can mà ý chí không thể dập tắt.",
    "notes": "Chú thích phân biệt:\n- てたまらない: Chứa đựng nhu cầu giải tỏa hành vi tức khắc (đói không chịu nổi, muốn gặp người yêu không chịu nổi).\n- てならない: Tâm trạng tự phát, linh cảm sâu xa (lo lắng cho tương lai của con cái khôn nguôi).",
    "mistake": "Cảnh báo lỗi: Không dùng てならない cho các cảm giác sinh lý vật lý đơn thuần như ngứa hay đói bụng (sai: 痒くてならない, đúng: 痒くてたまらない).",
    "related": [
      "bridge-n2-37",
      "tai"
    ],
    "examples": [
      {
        "ja": "今日は暑くてたまらない。冷たいビールが飲みたい。",
        "kana": "きょうはあつくてたまらない。つめたいびーるがのみたい。",
        "vi": "Hôm nay trời nóng không chịu nổi. Thèm uống bia lạnh quá.",
        "readings": {
          "今日": "きょう",
          "暑くて": "あつくて",
          "冷たい": "つめたい"
        }
      },
      {
        "ja": "合格発表の結果が気になってならない。",
        "kana": "ごうかくはっぴょうのけっかがきになってならない。",
        "vi": "Tôi cứ bồn chồn bứt rứt khôn nguôi về kết quả thông báo thi đỗ.",
        "readings": {
          "合格": "ごうかく",
          "発表": "はっぴょう",
          "結果": "けっか",
          "気になって": "きになって"
        }
      },
      {
        "ja": "家族に会いたくてたまらない。",
        "kana": "かぞくにあいたくてたまらない。",
        "vi": "Tôi nhớ và muốn gặp lại gia đình đến cồn cào không chịu nổi.",
        "readings": {
          "家族": "かぞく",
          "会いたくて": "あいたくて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-tamaranai-1",
        "type": "choice",
        "prompt": "虫に刺されたところが痒くて ___ 。",
        "options": [
          "たまらない",
          "ならない",
          "いけない",
          "すぎない"
        ],
        "answer": "たまらない",
        "explanation": "Cảm giác sinh lý thể xác: 痒くてたまらない (ngứa không chịu nổi)."
      },
      {
        "id": "jlpt-n2-tamaranai-2",
        "type": "fill",
        "prompt": "Điền dạng て của 心配だ: 一人暮らしの祖母のことが ___ ならない。",
        "answer": "心配で",
        "explanation": "Tính từ な thể て: 心配で + ならない (lo lắng khôn nguôi)."
      },
      {
        "id": "jlpt-n2-tamaranai-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi muốn biết kết quả thi đến mức không chịu nổi.",
        "options": [
          "試験の合否が",
          "知りたくて",
          "たまり",
          "ません"
        ],
        "answer": "試験の合否が知りたくてたまりません",
        "explanation": "Trật tự: Tân ngữ + Vたい chia て + たまりません."
      },
      {
        "id": "jlpt-n2-tamaranai-4",
        "type": "choice",
        "prompt": "故郷の母の健康が案じられて ___ 。",
        "options": [
          "ならない",
          "たまらない",
          "かねない",
          "得ない"
        ],
        "answer": "ならない",
        "explanation": "Động từ tự phát 案じられる (lo âu): 案じられてならない."
      },
      {
        "id": "jlpt-n2-tamaranai-5",
        "type": "fill",
        "prompt": "Điền dạng て của 寂しい: 一人きりの夜は ___ てたまらない。",
        "answer": "寂しく",
        "explanation": "Tính từ い chia くて: 寂しくてたまらない."
      },
      {
        "id": "jlpt-n2-tamaranai-6",
        "type": "choice",
        "prompt": "喉が渇いて ___ から、自販機で水を買いましょう。",
        "options": [
          "たまらない",
          "ならない",
          "おかない",
          "やまない"
        ],
        "answer": "たまらない",
        "explanation": "Cơn khát thể xác: 渇いてたまらない."
      },
      {
        "id": "jlpt-n2-tamaranai-7",
        "type": "order",
        "prompt": "Sắp xếp: Tôi cứ cảm thấy dường như có điều gì đó chẳng lành sắp xảy ra.",
        "options": [
          "何か悪いことが",
          "起こりそうで",
          "なって",
          "ならない"
        ],
        "answer": "何か悪いことが起こりそうでなってならない",
        "explanation": "Trật tự: Điềm báo + そうで + なってならない."
      },
      {
        "id": "jlpt-n2-tamaranai-8",
        "type": "choice",
        "prompt": "あの映画の結末が残念で ___ 。",
        "options": [
          "ならない",
          "かねる",
          "すぎる",
          "おかない"
        ],
        "answer": "ならない",
        "explanation": "Tâm trạng tiếc nuối tự phát: 残念でならない."
      },
      {
        "id": "jlpt-n2-tamaranai-9",
        "type": "fill",
        "prompt": "Điền thể て của 眠い: 昨夜徹夜したから ___ てたまらない。",
        "answer": "眠く",
        "explanation": "眠い → 眠くてたまらない (buồn ngủ không thể cưỡng lại)."
      },
      {
        "id": "jlpt-n2-tamaranai-10",
        "type": "order",
        "prompt": "Sắp xếp: Thất bại lần này khiến tôi vô cùng hối tiếc.",
        "options": [
          "今回の失敗は",
          "悔しくて",
          "たまり",
          "ません"
        ],
        "answer": "今回の失敗は悔しくてたまりません",
        "explanation": "Trật tự: Chủ đề thất bại + 悔しくて + たまりません."
      }
    ]
  },
  {
    "id": "jlpt-n2-dokorodehanai",
    "pattern": "〜どころではない・どころか",
    "title": "Không phải lúc / Không thể nào / Đâu chỉ có thế",
    "level": "N2",
    "position": 267,
    "meaning": "【Dạng 1: 〜どころではない】Không phải là lúc để... / Hoàn cảnh không cho phép làm...\n【Dạng 2: 〜どころか】Đâu chỉ có thế mà còn... / Thậm chí đến mức trái ngược hoàn toàn",
    "formation": "【Dạng 1】V từ điển / N + どころではない\n【Dạng 2】Thể thường (V/A/N) + どころか",
    "explanation": "【Dạng 1: Không thể làm trong hoàn cảnh này】Vì bận rộn, ồn ào, ốm đau hoặc khó khăn tiền bạc nên hoàn toàn không có tâm trí hoặc điều kiện để làm việc dự định.\n【Dạng 2: Tương phản cực độ】Phủ nhận mức độ thấp để khẳng định một thực tế tồi tệ hoặc vượt trội hơn gấp nhiều lần.",
    "notes": "Chú thích phân biệt:\n- どころではない: Nhấn mạnh sự cản trở của hoàn cảnh khách quan (đang ôn thi sấp mặt, không rảnh đi chơi).\n- どころか: Đòn bẩy so sánh độ lệch (nói gì đến tiếng Nhật thông thạo, bảng chữ cái còn chưa thuộc).",
    "mistake": "Cảnh báo lỗi: Trong Dạng 1, danh từ đi trực tiếp không có trợ từ (VD: 旅行どころではない, sai: 旅行のどころではない).",
    "related": [
      "jlpt-n3-dokoroka",
      "bridge-n2-34"
    ],
    "examples": [
      {
        "ja": "明日締め切りのレポートがあって、遊ぶどころではない。",
        "kana": "あしたしめきりのれぽーとがあって、あそぶどころではない。",
        "vi": "Tôi có bài báo cáo hạn chót ngày mai, bây giờ đâu phải là lúc thảnh thơi đi chơi.",
        "readings": {
          "明日": "あした",
          "締切": "しめきり",
          "遊ぶ": "あそぶ"
        }
      },
      {
        "ja": "風邪を引いて喉が痛くて、ご飯を食べるどころじゃないよ。",
        "kana": "かぜをひいてのどがいたくて、ごはんをたべるどころじゃないよ。",
        "vi": "Bị cảm đau rát họng, ngay cả nuốt cơm còn chẳng nuốt nổi nói gì đến ăn.",
        "readings": {
          "風邪": "かぜ",
          "喉": "のど",
          "痛くて": "いたくて",
          "食べる": "たべる"
        }
      },
      {
        "ja": "貯金どころか、借金まで抱えているありさまだ。",
        "kana": "ちょきんどころか、しゃっきんまでかかえているありさまだ。",
        "vi": "Tiết kiệm đâu chẳng thấy, thậm chí còn đang gánh một đống nợ nần.",
        "readings": {
          "貯金": "ちょきん",
          "借金": "しゃっきん",
          "抱えて": "かかえて"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-dokorodehanai-1",
        "type": "choice",
        "prompt": "台風で電車が止まって、出社 ___ ではない。",
        "options": [
          "どころ",
          "ばかり",
          "あまり",
          "とおり"
        ],
        "answer": "どころ",
        "explanation": "Hoàn cảnh cản trở: N + どころではない: 出社どころではない."
      },
      {
        "id": "jlpt-n2-dokorodehanai-2",
        "type": "fill",
        "prompt": "Điền từ tương phản: 独身どころ ___ 、子供が3人もいますよ。",
        "answer": "か",
        "explanation": "〜どころか: Đâu chỉ độc thân, đã có 3 đứa con rồi."
      },
      {
        "id": "jlpt-n2-dokorodehanai-3",
        "type": "order",
        "prompt": "Sắp xếp: Bận rộn đến mức không có thời gian ăn trưa.",
        "options": [
          "忙しくて",
          "昼ご飯を",
          "食べるどころでは",
          "ありません"
        ],
        "answer": "忙しくて昼ご飯を食べるどころではありません",
        "explanation": "Trật tự: Nguyên nhân bận + V từ điển + どころではありません."
      },
      {
        "id": "jlpt-n2-dokorodehanai-4",
        "type": "choice",
        "prompt": "静かになるどころか、ますます ___ なった。",
        "options": [
          "うるさく",
          "うるさい",
          "うるさくて",
          "うるさかった"
        ],
        "answer": "うるさく",
        "explanation": "Tính từ い chia く + なった: ますますうるさくなった."
      },
      {
        "id": "jlpt-n2-dokorodehanai-5",
        "type": "fill",
        "prompt": "Điền từ: この騒音の中では、勉強 ___ ではない。",
        "answer": "どころ",
        "explanation": "N + どころではない: 勉強どころではない (không thể nào học nổi)."
      },
      {
        "id": "jlpt-n2-dokorodehanai-6",
        "type": "choice",
        "prompt": "景気は回復するどころか、さらに ___ している。",
        "options": [
          "悪化",
          "悪化し",
          "悪化する",
          "悪化して"
        ],
        "answer": "悪化",
        "explanation": "Nghịch lý đi xuống: さらに悪化している."
      },
      {
        "id": "jlpt-n2-dokorodehanai-7",
        "type": "order",
        "prompt": "Sắp xếp: Đang ốm nằm liệt giường, đâu phải lúc đi dự tiệc.",
        "options": [
          "高熱が出ているので",
          "パーティーに行く",
          "どころでは",
          "ない"
        ],
        "answer": "高熱が出ているのでパーティーに行くどころではない",
        "explanation": "Trật tự: Sốt cao + Đi dự tiệc + どころではない."
      },
      {
        "id": "jlpt-n2-dokorodehanai-8",
        "type": "choice",
        "prompt": "感謝されるどころか、逆に ___ を言われた。",
        "options": [
          "文句",
          "お礼",
          "褒め言葉",
          "挨拶"
        ],
        "answer": "文句",
        "explanation": "Chẳng những không được cảm ơn mà ngược lại còn bị trách móc."
      },
      {
        "id": "jlpt-n2-dokorodehanai-9",
        "type": "fill",
        "prompt": "Điền thể đúng của động từ 休む: 締め切り直前で、___ どころではない。",
        "answer": "休む",
        "explanation": "V từ điển + どころではない: 休むどころではない."
      },
      {
        "id": "jlpt-n2-dokorodehanai-10",
        "type": "order",
        "prompt": "Sắp xếp: Lương chẳng những không tăng mà còn bị giảm.",
        "options": [
          "給料は",
          "上がるどころか",
          "減らされて",
          "しまった"
        ],
        "answer": "給料は上がるどころか減らされてしまった",
        "explanation": "Trật tự: Lương + 上がるどころか + Bị cắt giảm mất."
      }
    ]
  },
  {
    "id": "jlpt-n2-bekida",
    "pattern": "〜べきだ・べきではない",
    "title": "Nên / Phải / Không được (bổn phận, đạo đức)",
    "level": "N2",
    "position": 268,
    "meaning": "【Dạng 1: 〜べきだ】Nên / Cần phải làm (xét theo đạo lý, chuẩn mực xã hội)\n【Dạng 2: 〜べきではない】Không được / Không nên làm (trái với đạo đức, lương tâm)",
    "formation": "V từ điển + べきだ / べきではない (Đặc biệt: する → すべきだ hoặc するべきだ)\nBổ nghĩa cho danh từ: V từ điển + べき + N",
    "explanation": "Khuyên bảo hoặc khẳng định mạnh mẽ về một hành vi đúng đắn dựa trên luân thường đạo lý, lương tâm con người hoặc trách nhiệm nghề nghiệp.",
    "notes": "Chú thích phân biệt:\n- 〜べきだ: Đạo lý làm người hiển nhiên (người trẻ nên nhường ghế cho người già).\n- 〜なければならない: Mệnh lệnh, quy định hành chính bắt buộc (phải nộp thuế trước ngày 30).\n- 〜たほうがいい: Lời khuyên cá nhân mang tính đem lại lợi ích tốt hơn.",
    "mistake": "Cảnh báo lỗi: Không dùng 〜べきだ khi đưa ra chỉ thị trực tiếp cho cấp trên hoặc người bề trên trong giao tiếp hàng ngày.",
    "related": [
      "bridge-n2-39",
      "jlpt-n5-hougaii"
    ],
    "examples": [
      {
        "ja": "約束はどんなことがあっても守るべきだ。",
        "kana": "やくそくはどんなことがあってもまもるべきだ。",
        "vi": "Lời hứa thì dù có chuyện gì xảy ra cũng phải nên giữ lấy.",
        "readings": {
          "約束": "やくそく",
          "守る": "まもる"
        }
      },
      {
        "ja": "他人の悪口を言うべきではない。",
        "kana": "たにんのわるくちをいうべきではない。",
        "vi": "Không nên nói xấu sau lưng người khác.",
        "readings": {
          "他人": "たにん",
          "悪口": "わるくち",
          "言う": "いう"
        }
      },
      {
        "ja": "学生時代にやるべきことをしっかりやっておこう。",
        "kana": "がくせいじだいにやるべきことをしっかりやっておこう。",
        "vi": "Hãy làm cho thật tốt những việc cần phải làm trong thời học sinh.",
        "readings": {
          "学生時代": "がくせいじだい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-bekida-1",
        "type": "choice",
        "prompt": "困っている人を見たら、助ける ___ だ。",
        "options": [
          "べき",
          "はず",
          "わけ",
          "こと"
        ],
        "answer": "べき",
        "explanation": "Đạo lý xã hội: V từ điển + べきだ: 助けるべきだ."
      },
      {
        "id": "jlpt-n2-bekida-2",
        "type": "fill",
        "prompt": "Điền dạng phủ định đạo đức: 嘘をつく ___ ではない。",
        "answer": "べき",
        "explanation": "Không nên làm trái đạo đức: つくべきではない."
      },
      {
        "id": "jlpt-n2-bekida-3",
        "type": "order",
        "prompt": "Sắp xếp: Trẻ em nên đi ngủ sớm.",
        "options": [
          "子供は",
          "早く",
          "寝る",
          "べきです"
        ],
        "answer": "子供は早く寝るべきです",
        "explanation": "Trật tự: Chủ ngữ + Phó từ + V từ điển + べきです."
      },
      {
        "id": "jlpt-n2-bekida-4",
        "type": "choice",
        "prompt": "分からないことがあれば、すぐに質問 ___ だ。",
        "options": [
          "すべき",
          "しべき",
          "されるべき",
          "させべき"
        ],
        "answer": "すべき",
        "explanation": "Động từ する biến đổi: すべきだ (hoặc するべきだ)."
      },
      {
        "id": "jlpt-n2-bekida-5",
        "type": "fill",
        "prompt": "Điền thể đúng của 言う: 自分の意見ははっきりと ___ べきだ。",
        "answer": "言う",
        "explanation": "V từ điển + べきだ: 言うべきだ."
      },
      {
        "id": "jlpt-n2-bekida-6",
        "type": "choice",
        "prompt": "上司にそんな失礼な態度を ___ ではない。",
        "options": [
          "取るべき",
          "取ったべき",
          "取ろうべき",
          "取ればべき"
        ],
        "answer": "取るべき",
        "explanation": "V từ điển + べきではない: 取るべきではない."
      },
      {
        "id": "jlpt-n2-bekida-7",
        "type": "order",
        "prompt": "Sắp xếp: Hãy chịu trách nhiệm về lời nói của bản thân.",
        "options": [
          "自分の発言には",
          "責任を",
          "持つ",
          "べきだ"
        ],
        "answer": "自分の発言には責任を持つべきだ",
        "explanation": "Trật tự: Lời nói + Trách nhiệm + 持つべきだ."
      },
      {
        "id": "jlpt-n2-bekida-8",
        "type": "choice",
        "prompt": "これは我々が真剣に考える ___ 問題である。",
        "options": [
          "べき",
          "はず",
          "もの",
          "こと"
        ],
        "answer": "べき",
        "explanation": "Bổ nghĩa cho danh từ: 考えるべき問題 (vấn đề cần phải suy ngẫm)."
      },
      {
        "id": "jlpt-n2-bekida-9",
        "type": "fill",
        "prompt": "Điền từ: 若いうちに多くの経験を積む ___ だ。",
        "answer": "べき",
        "explanation": "V từ điển + べきだ: 積むべきだ (nên tích lũy nhiều trải nghiệm)."
      },
      {
        "id": "jlpt-n2-bekida-10",
        "type": "order",
        "prompt": "Sắp xếp: Bạn nên xin lỗi anh ấy càng sớm càng tốt.",
        "options": [
          "彼に",
          "できるだけ早く",
          "謝る",
          "べきですよ"
        ],
        "answer": "彼にできるだけ早く謝るべきですよ",
        "explanation": "Trật tự: Đối tượng + Càng sớm càng tốt + 謝るべきですよ."
      }
    ]
  },
  {
    "id": "jlpt-n2-monoda",
    "pattern": "〜ものだ・ものではない",
    "title": "Bản chất sự việc / Thói quen quá khứ / Lời khuyên nhẹ / Cảm thán",
    "level": "N2",
    "position": 269,
    "meaning": "【Dạng 1: Quy luật tự nhiên】Vốn dĩ là bản chất hiển nhiên của sự vật\n【Dạng 2: Vた＋ものだ】Thường hay làm... trong quá khứ (hoài niệm)\n【Dạng 3: Cảm thán】Thật là... xiết bao (thể hiện cảm xúc sâu sắc)\n【Dạng 4: Lời khuyên đạo đức nhẹ nhàng】Người ta ai cũng nên làm thế",
    "formation": "【Dạng 1】V từ điển / Aい / Aな + ものだ\n【Dạng 2】Vた + ものだ (thường đi với よく, 子供の頃, 昔)\n【Dạng 3】Vたい / Aい + ものだ (cảm thán mong mỏi: たいものだ)\n【Dạng 4】V từ điển + ものではない (không nên)",
    "explanation": "Một trong những cấu trúc đa nghĩa và giàu tính biểu cảm nhất của tiếng Nhật trung - cao cấp, kết nối giữa hoài niệm, triết lý sống và cảm thán nhân sinh.",
    "notes": "Chú thích phân biệt:\n- Vたものだ: Hoài niệm quá khứ xa xôi (昔はよく川で泳いだものだ).\n- Vるものだ: Chân lý cuộc đời (人は誰でも失敗するものだ - con người ai cũng có lúc sai lầm).\n- たいものだ: Khát khao tha thiết sâu xa từ tâm hồn.",
    "mistake": "Cảnh báo lỗi: Không dùng Vたものだ cho sự việc đơn lẻ chỉ diễn ra một lần trong quá khứ (không nói 昨日映画を見たものだ).",
    "related": [
      "bridge-n2-42",
      "bridge-n3-14"
    ],
    "examples": [
      {
        "ja": "子供の頃は、夏になるとよく川で泳いだものだ。",
        "kana": "こどものころは、なつになるとよくかわでおよいだものだ。",
        "vi": "Thời còn thơ bé, cứ mỗi độ hè về là tôi thường hay ra sông tắm bơi lội.",
        "readings": {
          "子供": "こども",
          "頃": "ころ",
          "夏": "なつ",
          "川": "かわ",
          "泳いだ": "およいだ"
        }
      },
      {
        "ja": "時間は本当に早く過ぎるものですね。",
        "kana": "じかんはほんとうにはやくすぎるものですね。",
        "vi": "Thời gian quả thật trôi qua nhanh xiết bao.",
        "readings": {
          "時間": "じかん",
          "本当に": "ほんとうに",
          "早く": "はやく",
          "過ぎる": "すぎる"
        }
      },
      {
        "ja": "他人の親切を当たり前だと思うものではない。",
        "kana": "たにんのしんせつをあたりまえだとおもうものではない。",
        "vi": "Không nên xem lòng tốt của người khác là điều dĩ nhiên được hưởng.",
        "readings": {
          "他人": "たにん",
          "親切": "しんせつ",
          "当たり前": "あたりまえ",
          "思う": "おもう"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-monoda-1",
        "type": "choice",
        "prompt": "昔はこの辺りも静かだった ___ だ。",
        "options": [
          "もの",
          "こと",
          "わけ",
          "はず"
        ],
        "answer": "もの",
        "explanation": "Hoài niệm quá khứ: 昔は〜だったものだ."
      },
      {
        "id": "jlpt-n2-monoda-2",
        "type": "fill",
        "prompt": "Điền từ quy luật tự nhiên: 人間は誰でも年を取る ___ だ。",
        "answer": "もの",
        "explanation": "Bản chất sinh lão bệnh tử: 取るものだ."
      },
      {
        "id": "jlpt-n2-monoda-3",
        "type": "order",
        "prompt": "Sắp xếp: Thuở nhỏ tôi hay đánh nhau với anh trai.",
        "options": [
          "小さい頃は",
          "よく兄と",
          "喧嘩をした",
          "ものだ"
        ],
        "answer": "小さい頃はよく兄と喧嘩をしたものだ",
        "explanation": "Trật tự: Thời ấu thơ + Vた + ものだ."
      },
      {
        "id": "jlpt-n2-monoda-4",
        "type": "choice",
        "prompt": "目上の人にそんな態度は取る ___ ではない。",
        "options": [
          "もの",
          "こと",
          "わけ",
          "ところ"
        ],
        "answer": "もの",
        "explanation": "Lời khuyên đạo đức: 取るものではない."
      },
      {
        "id": "jlpt-n2-monoda-5",
        "type": "fill",
        "prompt": "Điền thể chia của 食べる: 若い頃はラーメンを3杯も ___ ものだ。",
        "answer": "食べた",
        "explanation": "Thói quen quá khứ: Vた + ものだ: 食べたものだ."
      },
      {
        "id": "jlpt-n2-monoda-6",
        "type": "choice",
        "prompt": "一度でいいから、あんな豪邸に住んでみたい ___ ですね。",
        "options": [
          "もの",
          "こと",
          "わけ",
          "はず"
        ],
        "answer": "もの",
        "explanation": "Nguyện vọng cảm thán tha thiết: 住んでみたいものですね."
      },
      {
        "id": "jlpt-n2-monoda-7",
        "type": "order",
        "prompt": "Sắp xếp: Không nên dễ dàng bỏ cuộc giữa chừng như thế.",
        "options": [
          "途中で",
          "簡単に",
          "諦める",
          "ものではない"
        ],
        "answer": "途中で簡単に諦めるものではない",
        "explanation": "Trật tự: Giữa chừng + Dễ dàng + 諦めるものではない."
      },
      {
        "id": "jlpt-n2-monoda-8",
        "type": "choice",
        "prompt": "親のありがたさは、自分が親になってみて初めて分かる ___ だ。",
        "options": [
          "もの",
          "こと",
          "わけ",
          "ところ"
        ],
        "answer": "もの",
        "explanation": "Chân lý cuộc đời: 分かるものだ."
      },
      {
        "id": "jlpt-n2-monoda-9",
        "type": "fill",
        "prompt": "Điền từ: 月日の経つのは本当に早い ___ ですね。",
        "answer": "もの",
        "explanation": "Cảm thán dòng đời: 早いものですね."
      },
      {
        "id": "jlpt-n2-monoda-10",
        "type": "order",
        "prompt": "Sắp xếp: Hồi còn là sinh viên tôi thường hay thức trắng đêm đọc sách.",
        "options": [
          "学生時代は",
          "よく徹夜で",
          "本を読んだ",
          "ものだ"
        ],
        "answer": "学生時代はよく徹夜で本を読んだものだ",
        "explanation": "Trật tự: Thời sinh viên + Vた + ものだ."
      }
    ]
  },
  {
    "id": "jlpt-n2-hokananai",
    "pattern": "〜ほかない・よりほかない",
    "title": "Không còn cách nào khác ngoài việc",
    "level": "N2",
    "position": 270,
    "meaning": "【〜ほかない / よりほかない / よりほかはない】Chẳng còn phương kế, lựa chọn nào khác ngoài việc đành phải thực hiện hành động duy nhất này",
    "formation": "V từ điển + (より) ほかない / ほかはない",
    "explanation": "Bày tỏ tâm trạng bế tắc hoặc hạ quyết tâm dứt khoát khi các lựa chọn khác đều đã bế tắc, chỉ còn lại con đường duy nhất này.",
    "notes": "Chú thích phân biệt:\n- 〜ほかない: Văn phong bình dị, dùng linh hoạt trong cả văn nói và viết.\n- 〜ざるを得ない: Nhấn mạnh sự miễn cưỡng gượng ép của tâm lý trước áp lực bên ngoài.",
    "mistake": "Cảnh báo lỗi: Trước ほかない luôn là động từ thể từ điển khẳng định (không dùng thể quá khứ hoặc phủ định).",
    "related": [
      "jlpt-n2-zarwoenai",
      "bridge-n2-41"
    ],
    "examples": [
      {
        "ja": "終電に乗り遅れてしまったので、歩いて帰るほかない。",
        "kana": "しゅうでんにのりおくれてしまったので、あるいてかえるほかない。",
        "vi": "Vì lỡ chuyến tàu cuối cùng rồi nên tôi chẳng còn cách nào khác ngoài cuốc bộ về nhà.",
        "readings": {
          "終電": "しゅうでん",
          "乗り遅れて": "のりおくれて",
          "歩いて": "あるいて",
          "帰る": "かえる"
        }
      },
      {
        "ja": "こうなった以上、事実をありのままに話すよりほかはない。",
        "kana": "こうなったいじょう、じじつをありのままにはなすよりほかはない。",
        "vi": "Một khi sự tình đã ra nông nỗi này, tôi không còn cách nào khác ngoài kể rõ toàn bộ sự thật.",
        "readings": {
          "以上": "いじょう",
          "事実": "じじつ",
          "話す": "はなす"
        }
      },
      {
        "ja": "どんなに困難でも、前に進むほかないのだ。",
        "kana": "どんなにこんなんでも、まえにすすむほかないのだ。",
        "vi": "Dù có gian nan đến mấy, ta cũng chỉ còn cách duy nhất là tiến về phía trước.",
        "readings": {
          "困難": "こんなん",
          "前": "まえ",
          "進む": "すすむ"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-hokananai-1",
        "type": "choice",
        "prompt": "バスもタクシーもないので、歩く ___ ない。",
        "options": [
          "ほか",
          "わけ",
          "はず",
          "もの"
        ],
        "answer": "ほか",
        "explanation": "Không còn cách nào khác: V từ điển + ほかない: 歩くほかない."
      },
      {
        "id": "jlpt-n2-hokananai-2",
        "type": "fill",
        "prompt": "Điền từ nhấn mạnh con đường duy nhất: 成功するまで諦めずに続けるより ___ はない。",
        "answer": "ほか",
        "explanation": "〜よりほかはない: chỉ còn cách duy nhất."
      },
      {
        "id": "jlpt-n2-hokananai-3",
        "type": "order",
        "prompt": "Sắp xếp: Đã hứa rồi thì chỉ còn cách làm cho xong.",
        "options": [
          "約束したからには",
          "最後まで",
          "やり遂げる",
          "ほかない"
        ],
        "answer": "約束したからには最後までやり遂げるほかない",
        "explanation": "Trật tự: Tiền đề hứa + Đến cùng + V từ điển + ほかない."
      },
      {
        "id": "jlpt-n2-hokananai-4",
        "type": "choice",
        "prompt": "天候が悪化した場合、計画を中止する ___ ありません。",
        "options": [
          "よりほかに",
          "わけには",
          "はずには",
          "あまりに"
        ],
        "answer": "よりほかに",
        "explanation": "Chỉ còn cách hủy bỏ: 中止するよりほかにありません."
      },
      {
        "id": "jlpt-n2-hokananai-5",
        "type": "fill",
        "prompt": "Điền thể đúng của 待つ: 連絡が来るのを ___ ほかない。",
        "answer": "待つ",
        "explanation": "V từ điển + ほかない: 待つほかない (chỉ còn nước đợi)."
      },
      {
        "id": "jlpt-n2-hokananai-6",
        "type": "choice",
        "prompt": "パソコンが壊れたので、手書きでレポートを ___ ほかなかった。",
        "options": [
          "書く",
          "書いて",
          "書いた",
          "書こう"
        ],
        "answer": "書く",
        "explanation": "V từ điển + ほかなかった: 書くほかなかった."
      },
      {
        "id": "jlpt-n2-hokananai-7",
        "type": "order",
        "prompt": "Sắp xếp: Tôi chỉ còn cách chân thành nhận lỗi với cấp trên.",
        "options": [
          "上司に素直に",
          "謝罪する",
          "よりほか",
          "ないだろう"
        ],
        "answer": "上司に素直に謝罪するよりほかないだろう",
        "explanation": "Trật tự: Đối tượng + V từ điển + よりほかないだろう."
      },
      {
        "id": "jlpt-n2-hokananai-8",
        "type": "choice",
        "prompt": "いくら頼んでも断られたので、自分で ___ ほかない。",
        "options": [
          "やる",
          "やって",
          "やった",
          "やろう"
        ],
        "answer": "やる",
        "explanation": "V từ điển + ほかない: 自分でやるほかない."
      },
      {
        "id": "jlpt-n2-hokananai-9",
        "type": "fill",
        "prompt": "Điền từ: この難局を乗り越えるには耐える ___ ない。",
        "answer": "ほか",
        "explanation": "V từ điển + ほかない: 耐えるほかない (chỉ còn cách cắn răng chịu đựng)."
      },
      {
        "id": "jlpt-n2-hokananai-10",
        "type": "order",
        "prompt": "Sắp xếp: Chúng ta chỉ còn cách tin tưởng vào quyết định của anh ấy.",
        "options": [
          "彼の判断を",
          "信じる",
          "ほかないと",
          "思います"
        ],
        "answer": "彼の判断を信じるほかないと思います",
        "explanation": "Trật tự: Tân ngữ + V từ điển + ほかないと思います."
      }
    ]
  },
  {
    "id": "jlpt-n2-kikkake",
    "pattern": "〜をきっかけに・を契機に",
    "title": "Nhân dịp / Bước ngoặt / Khởi đầu từ",
    "level": "N2",
    "position": 271,
    "meaning": "【〜をきっかけに（して） / を契機に（して）】Lấy một sự việc, biến cố hoặc cơ duyên làm điểm khởi phát, tạo bước ngoặt dẫn đến sự thay đổi lớn sau đó",
    "formation": "N + をきっかけに(して) / をきっかけとして\nV từ điển + の / ことをきっかけに\n* Văn viết trang trọng: N + を契機に(して)",
    "explanation": "Mô tả nguyên cớ ban đầu kích hoạt một chuỗi hành động hoặc tạo nên bước ngoặt thay đổi cuộc đời, lối sống, suy nghĩ.",
    "notes": "Chú thích phân biệt:\n- をきっかけに: Rất phổ biến, dùng cả đời thường lẫn văn viết (duyên cớ quen nhau, bắt đầu học tiếng Nhật).\n- を契機に: Mang tính chính luận, văn viết trang trọng cho sự kiện lịch sử, chính sách hoặc phát triển xã hội vĩ mô.",
    "mistake": "Cảnh báo lỗi: Vế sau phải là sự thay đổi trạng thái hoặc bắt đầu một thói quen/hành vi mới tiếp diễn (không dùng cho hành động đơn lẻ chớp nhoáng).",
    "related": [
      "bridge-n2-33",
      "jlpt-n5-tekara"
    ],
    "examples": [
      {
        "ja": "日本のアニメを見たのをきっかけに、日本語の勉強を始めた。",
        "kana": "にほんのあにめをみたのをきっかけに、にほんごのべんきょうをはじめた。",
        "vi": "Khởi đầu từ việc xem anime Nhật Bản, tôi đã bắt đầu hành trình học tiếng Nhật.",
        "readings": {
          "日本": "にほん",
          "見た": "みた",
          "勉強": "べんきょう",
          "始めた": "はじめた"
        }
      },
      {
        "ja": "病気になったことを契機に、健康的な生活を心がけるようになった。",
        "kana": "びょうきになったことをけいきに、けんこうてきなせいかつをこころがけるようになった。",
        "vi": "Lấy bước ngoặt trận ốm vừa qua, tôi đã bắt đầu chú trọng lối sống lành mạnh.",
        "readings": {
          "病気": "びょうき",
          "契機": "けいき",
          "健康的": "けんこうてき",
          "生活": "せいかつ"
        }
      },
      {
        "ja": "大学入学をきっかけにして、一人暮らしを始めました。",
        "kana": "だいがくにゅうがくをきっかけにして、ひとりぐらしをはじめました。",
        "vi": "Nhân dịp nhập học đại học, tôi đã bắt đầu cuộc sống tự lập một mình.",
        "readings": {
          "大学入学": "だいがくにゅうがく",
          "一人暮らし": "ひとりぐらし"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-kikkake-1",
        "type": "choice",
        "prompt": "友人の結婚式を ___ して、久しぶりに同窓生が集まった。",
        "options": [
          "きっかけに",
          "あまりに",
          "かぎりに",
          "とおりに"
        ],
        "answer": "きっかけに",
        "explanation": "Nhân cơ hội sự kiện: N + をきっかけにして."
      },
      {
        "id": "jlpt-n2-kikkake-2",
        "type": "fill",
        "prompt": "Điền trợ từ: 卒業 ___ きっかけに、髪を短く切りました。",
        "answer": "を",
        "explanation": "Trợ từ đi trước きっかけ là を: 卒業をきっかけに."
      },
      {
        "id": "jlpt-n2-kikkake-3",
        "type": "order",
        "prompt": "Sắp xếp: Nhân dịp chuyển nhà, tôi đã thanh lý hết đồ đạc cũ.",
        "options": [
          "引っ越しを",
          "きっかけとして",
          "不用品を",
          "処分した"
        ],
        "answer": "引っ越しをきっかけとして不用品を処分した",
        "explanation": "Trật tự: Bước ngoặt chuyển nhà + をきっかけとして + Xử lý đồ cũ."
      },
      {
        "id": "jlpt-n2-kikkake-4",
        "type": "choice",
        "prompt": "オリンピック開催を ___ に、外国人観光客が急増した。",
        "options": [
          "契機",
          "あまり",
          "くせ",
          "わり"
        ],
        "answer": "契機",
        "explanation": "Sự kiện vĩ mô mang tính bước ngoặt: を契機に."
      },
      {
        "id": "jlpt-n2-kikkake-5",
        "type": "fill",
        "prompt": "Điền từ hóa danh từ: 日本へ旅行した ___ をきっかけに、文化に興味を持った。",
        "answer": "の",
        "explanation": "Vた + のをきっかけに: 旅行したのをきっかけに."
      },
      {
        "id": "jlpt-n2-kikkake-6",
        "type": "choice",
        "prompt": "些細な喧嘩をきっかけに、彼とは口を ___ なった。",
        "options": [
          "利かなく",
          "利いて",
          "利き",
          "利こう"
        ],
        "answer": "利かなく",
        "explanation": "Hệ quả không thèm nhìn mặt nói chuyện: 口を利かなくなった."
      },
      {
        "id": "jlpt-n2-kikkake-7",
        "type": "order",
        "prompt": "Sắp xếp: Lấy sự cố lần này làm bài học bước ngoặt, hệ thống bảo mật đã được nâng cấp.",
        "options": [
          "今回の事故を",
          "契機として",
          "安全管理が",
          "強化された"
        ],
        "answer": "今回の事故を契機として安全管理が強化された",
        "explanation": "Trật tự: Biến cố + 契機として + Tăng cường quản lý an toàn."
      },
      {
        "id": "jlpt-n2-kikkake-8",
        "type": "choice",
        "prompt": "定年退職をきっかけに、新しい趣味を ___ 人が多い。",
        "options": [
          "始める",
          "始めた",
          "始めて",
          "始めよう"
        ],
        "answer": "始める",
        "explanation": "Định ngữ danh từ: 新しい趣味を始める人が多い."
      },
      {
        "id": "jlpt-n2-kikkake-9",
        "type": "fill",
        "prompt": "Điền từ: ボランティア活動に参加した ___ をきっかけに、価値観が変わった。",
        "answer": "こと",
        "explanation": "Vた + ことをきっかけに: việc tham gia tình nguyện đã làm thay đổi giá trị quan."
      },
      {
        "id": "jlpt-n2-kikkake-10",
        "type": "order",
        "prompt": "Sắp xếp: Khởi đầu từ một lời khuyên của giáo viên, tôi đã quyết chí du học.",
        "options": [
          "先生の助言を",
          "きっかけに",
          "留学を",
          "決意しました"
        ],
        "answer": "先生の助言をきっかけに留学を決意しました",
        "explanation": "Trật tự: Lời khuyên + をきっかけに + Quyết định du học."
      }
    ]
  },
  {
    "id": "jlpt-n2-megutte",
    "pattern": "〜をめぐって・をめぐる",
    "title": "Xoay quanh vấn đề / Tranh cãi quanh",
    "level": "N2",
    "position": 272,
    "meaning": "【〜をめぐって / をめぐる＋N】Xoay quanh một vấn đề, chủ đề tranh cãi hoặc xung đột lợi ích giữa nhiều bên",
    "formation": "N + をめぐって / をめぐり (văn viết)\nBổ nghĩa cho danh từ: N1 + をめぐる + N2",
    "explanation": "Diễn tả tâm điểm của cuộc tranh luận, đối đầu, đàm phán hoặc xung đột ý kiến giữa các bên liên quan.",
    "notes": "Chú thích phân biệt:\n- 〜をめぐって: Luôn có nhiều bên tranh luận, bất đồng ý kiến (tranh luận, kiện tụng, đối đầu).\n- 〜について: Đơn giản chỉ là chủ đề nói chuyện hoặc nghiên cứu khách quan của một cá nhân.",
    "mistake": "Cảnh báo lỗi: Vế sau phải là các động từ tranh cãi, tranh chấp, đối đầu (議論する, 争う, 対立する, 対談する), không đi với hành động đơn độc cá nhân.",
    "related": [
      "bridge-n2-26",
      "jlpt-n3-wokansuru"
    ],
    "examples": [
      {
        "ja": "遺産の分配をめぐって、兄弟の間で激しい争いが起きた。",
        "kana": "いさんのぶんぱいをめぐって、きょうだいのあいだではげしいあらそいがおきた。",
        "vi": "Xoay quanh việc phân chia di sản, giữa các anh em đã nổ ra cuộc tranh chấp nảy lửa.",
        "readings": {
          "遺産": "いさん",
          "分配": "ぶんぱい",
          "兄弟": "きょうだい",
          "争い": "あらそい"
        }
      },
      {
        "ja": "新しい税制をめぐる議論が国会で続いている。",
        "kana": "あたらしいぜいせいをめぐるぎろんがこっかいでつづいている。",
        "vi": "Các cuộc tranh luận xoay quanh chính sách thuế mới vẫn đang tiếp diễn tại quốc hội.",
        "readings": {
          "新しい": "あたらしい",
          "税制": "ぜいせい",
          "議論": "ぎろん",
          "国会": "こっかい"
        }
      },
      {
        "ja": "環境問題をめぐり、各国の代表が意見を戦わせた。",
        "kana": "かんきょうもんだいをめぐり、かっこくのだいひょうがいけんをたたかわせた。",
        "vi": "Xoay quanh vấn đề môi trường, đại diện các nước đã tranh biện gay gắt.",
        "readings": {
          "環境問題": "かんきょうもんだい",
          "各国": "かっこく",
          "代表": "だいひょう",
          "意見": "いけん"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-megutte-1",
        "type": "choice",
        "prompt": "土地の所有権を ___ 、裁判が行われている。",
        "options": [
          "めぐって",
          "とおして",
          "こめて",
          "かねて"
        ],
        "answer": "めぐって",
        "explanation": "Tranh chấp quanh quyền sở hữu: をめぐって."
      },
      {
        "id": "jlpt-n2-megutte-2",
        "type": "fill",
        "prompt": "Điền từ bổ nghĩa danh từ: 憲法改正を ___ 激しい議論が交わされた。",
        "answer": "めぐる",
        "explanation": "Bổ nghĩa cho danh từ 議論: をめぐる + N."
      },
      {
        "id": "jlpt-n2-megutte-3",
        "type": "order",
        "prompt": "Sắp xếp: Cuộc tranh luận nổ ra xoay quanh việc xây dựng sân bay mới.",
        "options": [
          "新空港の建設を",
          "めぐって",
          "住民の対立が",
          "深まっている"
        ],
        "answer": "新空港の建設をめぐって住民の対立が深まっている",
        "explanation": "Trật tự: Chủ đề tranh cãi + をめぐって + Xung đột dâng cao."
      },
      {
        "id": "jlpt-n2-megutte-4",
        "type": "choice",
        "prompt": "教育改革を ___ 、有識者による会議が開かれた。",
        "options": [
          "めぐり",
          "すぎ",
          "あまり",
          "かぎり"
        ],
        "answer": "めぐり",
        "explanation": "Dạng liên từ văn viết: N + をめぐり."
      },
      {
        "id": "jlpt-n2-megutte-5",
        "type": "fill",
        "prompt": "Điền trợ từ: その事件 ___ めぐって、様々な噂が飛び交っている。",
        "answer": "を",
        "explanation": "Trợ từ cố định: をめぐって."
      },
      {
        "id": "jlpt-n2-megutte-6",
        "type": "choice",
        "prompt": "次期社長の座をめぐる ___ が激化している。",
        "options": [
          "争い",
          "協力",
          "感謝",
          "お礼"
        ],
        "answer": "争い",
        "explanation": "Xoay quanh chiếc ghế giám đốc tiếp theo: cuộc tranh giành (争い)."
      },
      {
        "id": "jlpt-n2-megutte-7",
        "type": "order",
        "prompt": "Sắp xếp: Các bên thảo luận xoay quanh các điều khoản trong bản hợp đồng.",
        "options": [
          "契約書の条件を",
          "めぐって",
          "双方が",
          "話し合っている"
        ],
        "answer": "契約書の条件をめぐって双方が話し合っている",
        "explanation": "Trật tự: Điều khoản hợp đồng + をめぐって + Đôi bên đàm phán."
      },
      {
        "id": "jlpt-n2-megutte-8",
        "type": "choice",
        "prompt": "原子力をめぐる安全性について、国民の間で ___ が分かれている。",
        "options": [
          "意見",
          "挨拶",
          "感謝",
          "趣味"
        ],
        "answer": "意見",
        "explanation": "Ý kiến bất đồng chia rẽ: 意見が分かれている."
      },
      {
        "id": "jlpt-n2-megutte-9",
        "type": "fill",
        "prompt": "Điền từ: 政策の優先順位を ___ 対立が続いている。",
        "answer": "めぐる",
        "explanation": "Bổ nghĩa cho 対立 (xung đột): をめぐる + N."
      },
      {
        "id": "jlpt-n2-megutte-10",
        "type": "order",
        "prompt": "Sắp xếp: Tranh luận sôi nổi nổ ra xoay quanh dự thảo ngân sách năm nay.",
        "options": [
          "今年度の予算案を",
          "めぐって",
          "熱心な議論が",
          "行われた"
        ],
        "answer": "今年度の予算案をめぐって熱心な議論が行われた",
        "explanation": "Trật tự: Dự thảo ngân sách + をめぐって + Tranh luận sôi nổi diễn ra."
      }
    ]
  },
  {
    "id": "jlpt-n2-komete",
    "pattern": "〜をこめて",
    "title": "Gửi gắm tất cả tâm tư, tình cảm",
    "level": "N2",
    "position": 273,
    "meaning": "【〜をこめて】Đong đầy / Gửi gắm toàn bộ tấm lòng, tâm tư tình cảm (yêu thương, biết ơn, cầu nguyện, tức giận) vào trong một hành động hay tác phẩm",
    "formation": "N (chỉ cảm xúc, tâm tư) + をこめて\nBổ nghĩa danh từ: N1 + をこめた + N2",
    "explanation": "Biểu thị hành động được thực hiện với sự tập trung trọn vẹn của cảm xúc sâu sắc nhất (viết thư với trọn vẹn lòng biết ơn, đan áo len bằng tất cả tình yêu thương).",
    "notes": "Chú thích phân biệt: Danh từ trước をこめて chỉ đi với các từ tâm trạng, cảm xúc tinh thần (愛, 心, 感謝, 祈り, 願い, 怒り). Tuyệt đối không đi với đồ vật cụ thể.",
    "mistake": "Cảnh báo lỗi: Bổ nghĩa cho danh từ bắt buộc dùng をこめた (VD: 愛をこめた手紙, sai: 愛をこめて手紙).",
    "related": [
      "bridge-n2-27",
      "jlpt-n4-tameni"
    ],
    "examples": [
      {
        "ja": "母への感謝の気持ちをこめて、プレゼントを選びました。",
        "kana": "ははへのかんしゃのきもちをこめて、ぷれぜんとをえらびました。",
        "vi": "Gửi gắm trọn vẹn lòng biết ơn đối với mẹ, tôi đã chọn một món quà ý nghĩa.",
        "readings": {
          "母": "はは",
          "感謝": "かんしゃ",
          "気持ち": "きもち",
          "選んで": "えらんで"
        }
      },
      {
        "ja": "平和への祈りをこめて、千羽鶴を折った。",
        "kana": "へいわへのいのりをこめて、せんばづるをおった。",
        "vi": "Gửi gắm lời nguyện cầu cho hòa bình, tôi đã gấp một ngàn cánh hạc giấy.",
        "readings": {
          "平和": "へいわ",
          "祈り": "いのり",
          "千羽鶴": "せんばづる",
          "折った": "おった"
        }
      },
      {
        "ja": "これは心をこめて作った手作りのクッキーです。",
        "kana": "これはこころをこめてつくったてづくりのくっきーです。",
        "vi": "Đây là những chiếc bánh quy handmade tôi làm bằng tất cả tấm lòng.",
        "readings": {
          "心": "こころ",
          "作った": "つくった",
          "手作り": "てづくり"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-komete-1",
        "type": "choice",
        "prompt": "愛を ___ 編んだセーターを彼に贈った。",
        "options": [
          "こめて",
          "とおして",
          "めぐって",
          "かねて"
        ],
        "answer": "こめて",
        "explanation": "Gửi gắm trọn tình yêu thương: 愛をこめて."
      },
      {
        "id": "jlpt-n2-komete-2",
        "type": "fill",
        "prompt": "Điền từ bổ nghĩa danh từ: 感謝の気持ちを ___ 手紙を書きました。",
        "answer": "こめた",
        "explanation": "Bổ nghĩa cho 手紙 (bức thư): をこめた + N."
      },
      {
        "id": "jlpt-n2-komete-3",
        "type": "order",
        "prompt": "Sắp xếp: Tôi cầu nguyện bình an cho người dân vùng chịu thiên tai.",
        "options": [
          "被災地の人々のために",
          "祈りを",
          "こめて",
          "歌いました"
        ],
        "answer": "被災地の人々のために祈りをこめて歌いました",
        "explanation": "Trật tự: Đối tượng + 祈りを + こめて + Cất tiếng hát."
      },
      {
        "id": "jlpt-n2-komete-4",
        "type": "choice",
        "prompt": "心を ___ 歌う歌は、聴く人の胸を打つ。",
        "options": [
          "こめて",
          "めぐり",
          "あまり",
          "すぎて"
        ],
        "answer": "こめて",
        "explanation": "心をこめて: hát bằng cả con tim."
      },
      {
        "id": "jlpt-n2-komete-5",
        "type": "fill",
        "prompt": "Điền trợ từ: 怒り ___ こめて犯人を睨みつけた。",
        "answer": "を",
        "explanation": "怒りをこめて: dồn hết cơn thịnh nộ."
      },
      {
        "id": "jlpt-n2-komete-6",
        "type": "choice",
        "prompt": "合格の願いを ___ 、神社でお参りをした。",
        "options": [
          "こめて",
          "かぎり",
          "とおして",
          "わりに"
        ],
        "answer": "こめて",
        "explanation": "Gửi gắm ước nguyện đỗ đạt: 願いをこめて."
      },
      {
        "id": "jlpt-n2-komete-7",
        "type": "order",
        "prompt": "Sắp xếp: Đây là món quà tôi chọn bằng tất cả sự chân thành.",
        "options": [
          "真心",
          "をこめて",
          "選んだ",
          "品物です"
        ],
        "answer": "真心をこめて選んだ品物です",
        "explanation": "Trật tự: Chân thành + をこめて + Món đồ đã chọn."
      },
      {
        "id": "jlpt-n2-komete-8",
        "type": "choice",
        "prompt": "先生への敬意を ___ 、花束を贈呈した。",
        "options": [
          "こめて",
          "めぐって",
          "あまり",
          "とおり"
        ],
        "answer": "こめて",
        "explanation": "敬意をこめて: với trọn lòng tôn kính."
      },
      {
        "id": "jlpt-n2-komete-9",
        "type": "fill",
        "prompt": "Điền từ: 丹精を ___ 育てた花が綺麗に咲いた。",
        "answer": "こめて",
        "explanation": "丹精をこめて: dồn trọn tâm huyết chăm bẵm."
      },
      {
        "id": "jlpt-n2-komete-10",
        "type": "order",
        "prompt": "Sắp xếp: Anh ấy đã gửi cho cô ấy bức thư chứa chan tình cảm.",
        "options": [
          "彼は思いを",
          "こめた手紙を",
          "彼女に",
          "送った"
        ],
        "answer": "彼は思いをこめた手紙を彼女に送った",
        "explanation": "Trật tự: Chủ ngữ + Bức thư chứa chan tình cảm + Gửi người thương."
      }
    ]
  },
  {
    "id": "jlpt-n2-toshitemo",
    "pattern": "〜としても・にしても",
    "title": "Dẫu cho / Cho dù giả sử có... đi chăng nữa",
    "level": "N2",
    "position": 274,
    "meaning": "【〜としても / にしても】Dẫu cho / Giả định trường hợp xấu nhất xảy ra hoặc chấp nhận sự thật đó thì kết quả, thái độ ở vế sau vẫn không thay đổi",
    "formation": "Thể thường (V/A/N) + としても / にしても\n* Lưu ý: N/Aな có thể đi thẳng với としても hoặc であるとしても",
    "explanation": "Đặt ra một tình huống giả định hoặc nhượng bộ một thực tế để nhấn mạnh rằng điều đó không làm lung lay ý chí, lập trường hay kết luận ở vế sau.",
    "notes": "Chú thích phân biệt:\n- 〜としても: Giả định thuần túy (dẫu cho ngày mai có tuyết rơi đi nữa thì tôi vẫn đi).\n- 〜にしても: Thường mang sắc thái nhượng bộ có phần bất mãn hoặc chấp nhận thực tại (dẫu là bận rộn đến mấy cũng phải gọi một cú điện thoại chứ).",
    "mistake": "Cảnh báo lỗi: Không dùng 〜としても cho các điều kiện kéo theo tự nhiên không có ý chí của con người.",
    "related": [
      "bridge-n2-43",
      "jlpt-n4-tara"
    ],
    "examples": [
      {
        "ja": "たとえ失敗したとしても、後悔はしない。",
        "kana": "たとえしっぱいしたとしても、こうかいはしない。",
        "vi": "Dẫu cho giả sử có thất bại đi chăng nữa, tôi cũng không bao giờ hối hận.",
        "readings": {
          "失敗": "しっぱい",
          "後悔": "こうかい"
        }
      },
      {
        "ja": "どんなに忙しいにしても、連絡ぐらいはするべきだ。",
        "kana": "どんなにいそがしいにしても、れんらくぐらいはするべきだ。",
        "vi": "Dù có bận rộn đến đâu đi chăng nữa, chí ít cũng nên nhắn lại một lời.",
        "readings": {
          "忙しい": "いそがしい",
          "連絡": "れんらく"
        }
      },
      {
        "ja": "行くとしても、午後からになります。",
        "kana": "いくとしても、ごごからになります。",
        "vi": "Dẫu tôi có đi chăng nữa thì cũng phải tầm chiều mới sang được.",
        "readings": {
          "行く": "いく",
          "午後": "ごご"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-toshitemo-1",
        "type": "choice",
        "prompt": "たとえ大雪が降った ___ 、試合は予定通り行われます。",
        "options": [
          "としても",
          "あまりに",
          "かぎりに",
          "とおりに"
        ],
        "answer": "としても",
        "explanation": "Giả định nhượng bộ: たとえ〜としても: 降ったとしても."
      },
      {
        "id": "jlpt-n2-toshitemo-2",
        "type": "fill",
        "prompt": "Điền từ đi kèm với たとえ: たとえ反対された ___ 、自分の夢を諦めない。",
        "answer": "としても",
        "explanation": "Cặp phó từ liên kết: たとえ〜としても."
      },
      {
        "id": "jlpt-n2-toshitemo-3",
        "type": "order",
        "prompt": "Sắp xếp: Cho dù có mua được đi nữa thì cũng không có chỗ để đặt.",
        "options": [
          "買える",
          "としても",
          "置く場所が",
          "ありません"
        ],
        "answer": "買えるとしても置く場所がありません",
        "explanation": "Trật tự: V khả năng + として + Vế phủ định điều kiện."
      },
      {
        "id": "jlpt-n2-toshitemo-4",
        "type": "choice",
        "prompt": "冗談 ___ 、言っていいことと悪いことがある。",
        "options": [
          "にしても",
          "あまりに",
          "かぎりに",
          "とおりに"
        ],
        "answer": "にしても",
        "explanation": "Nhượng bộ thực tế: N + にしても (dẫu chỉ là đùa)."
      },
      {
        "id": "jlpt-n2-toshitemo-5",
        "type": "fill",
        "prompt": "Điền từ nhượng bộ: いくら安かった ___ 、必要のないものは買わない。",
        "answer": "にしても",
        "explanation": "いくら〜にしても: dẫu cho có rẻ đến mấy."
      },
      {
        "id": "jlpt-n2-toshitemo-6",
        "type": "choice",
        "prompt": "全員が賛成したとしても、私は反対 ___ 。",
        "options": [
          "します",
          "しました",
          "するだろう",
          "した"
        ],
        "answer": "します",
        "explanation": "Ý chí kiên định không đổi: 反対します."
      },
      {
        "id": "jlpt-n2-toshitemo-7",
        "type": "order",
        "prompt": "Sắp xếp: Dẫu có trúng tuyển đi nữa thì học phí cũng quá đắt đỏ.",
        "options": [
          "合格したとしても",
          "学費が",
          "高すぎて",
          "通えない"
        ],
        "answer": "合格したとしても学費が高すぎて通えない",
        "explanation": "Trật tự: Thi đỗ chăng nữa + Học phí quá đắt + Không thể đi học."
      },
      {
        "id": "jlpt-n2-toshitemo-8",
        "type": "choice",
        "prompt": "引き受ける ___ 、締め切りは守ってください。",
        "options": [
          "にしても",
          "あまり",
          "くせに",
          "とおり"
        ],
        "answer": "にしても",
        "explanation": "V từ điển + にしても (dẫu có nhận lời làm)."
      },
      {
        "id": "jlpt-n2-toshitemo-9",
        "type": "fill",
        "prompt": "Điền thể chia của なる: プロに ___ としても、毎日の練習は欠かせない。",
        "answer": "なる",
        "explanation": "V từ điển + としても: プロになるとしても."
      },
      {
        "id": "jlpt-n2-toshitemo-10",
        "type": "order",
        "prompt": "Sắp xếp: Dù lý do là gì đi nữa thì bạo lực là điều không thể tha thứ.",
        "options": [
          "どんな理由が",
          "あるにしても",
          "暴力は",
          "許されない"
        ],
        "answer": "どんな理由があるにしても暴力は許されない",
        "explanation": "Trật tự: Dù bất kể lý do gì + あるにしても + Bạo lực không thể dung thứ."
      }
    ]
  },
  {
    "id": "jlpt-n2-kagiri",
    "pattern": "〜限り・限らない",
    "title": "Chừng nào còn... thì / Trong phạm vi giới hạn",
    "level": "N2",
    "position": 275,
    "meaning": "【Dạng 1: 〜限り（は）】Chừng nào điều kiện A còn tiếp diễn thì tình trạng B vẫn giữ nguyên\n【Dạng 2: 〜かぎり（Phạm vi）】Trong phạm vi (những gì tôi biết/tôi thấy)\n【Dạng 3: 〜とは限らない】Không nhất thiết là / Chưa chắc đã...",
    "formation": "【Dạng 1】V thể thường / Aい / Aな + な / N + である + 限り(は)\n【Dạng 2】V từ điển (知る, 見る, 聞く, 調べる) + 限りでは\n【Dạng 3】Thể thường + とは限らない",
    "explanation": "【Dạng 1: Điều kiện thời gian】Giới hạn trong khoảng thời gian điều kiện còn hiệu lực.\n【Dạng 2: Giới hạn nhận thức】Khẳng định tính chính xác chỉ bảo đảm trong phạm vi nguồn tin mình nắm giữ.\n【Dạng 3: Phủ định phiến diện】Bác bỏ quan niệm máy móc rằng cứ A thì nhất định là B.",
    "notes": "Chú thích phân biệt:\n- 〜限り: Giới hạn biên độ (chừng nào còn sống, tôi còn yêu em).\n- 〜だけに: Vì có lý do đặc biệt nên mức độ càng sâu đậm hơn.",
    "mistake": "Cảnh báo lỗi: Trong Dạng 2, động từ thường hạn chế ở nhóm tri giác: 私が知っている限り (trong phạm vi tôi biết), 調べた限り (theo những gì tra cứu).",
    "related": [
      "bridge-n2-44",
      "bridge-n3-12"
    ],
    "examples": [
      {
        "ja": "日本にいる限りは、日本語を話す機会がたくさんある。",
        "kana": "にほんにいるかぎりは、にほんごをはなすきかいがたくさんある。",
        "vi": "Chừng nào còn ở Nhật Bản thì còn có rất nhiều cơ hội để nói tiếng Nhật.",
        "readings": {
          "日本": "にほん",
          "話す": "はなす",
          "機会": "きかい"
        }
      },
      {
        "ja": "私が知っている限りでは、彼はそんな嘘をつく人ではありません。",
        "kana": "わたしがしっているかぎりでは、かれはそんなうそをつくひとではありません。",
        "vi": "Theo như những gì tôi biết thì anh ấy không phải loại người nói dối như vậy.",
        "readings": {
          "私": "わたし",
          "知って": "しって",
          "嘘": "うそ",
          "人": "ひと"
        }
      },
      {
        "ja": "値段が高いものが必ずしも良いものだとは限らない。",
        "kana": "ねだんがたかいものがかならずしもよいものだとはかぎらない。",
        "vi": "Đồ đắt tiền chưa chắc đã luôn luôn là đồ tốt.",
        "readings": {
          "値段": "ねだん",
          "高い": "たかい",
          "必ずしも": "かならずしも",
          "良い": "よい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-kagiri-1",
        "type": "choice",
        "prompt": "体が健康で ___ 、いくらでも働ける。",
        "options": [
          "ある限り",
          "あるあまり",
          "あるわりに",
          "あるとおり"
        ],
        "answer": "ある限り",
        "explanation": "Chừng nào còn điều kiện: N + である限り."
      },
      {
        "id": "jlpt-n2-kagiri-2",
        "type": "fill",
        "prompt": "Điền từ giới hạn nhận thức: 私が調べた ___ では、異常は見つかりませんでした。",
        "answer": "限り",
        "explanation": "Trong phạm vi đã điều tra: 調べた限りでは."
      },
      {
        "id": "jlpt-n2-kagiri-3",
        "type": "order",
        "prompt": "Sắp xếp: Giàu có chưa hẳn đã là hạnh phúc.",
        "options": [
          "お金持ちだからといって",
          "幸せだとは",
          "限らない",
          "ですよ"
        ],
        "answer": "お金持ちだからといって幸せだとは限らないですよ",
        "explanation": "Trật tự: Tiền đề giàu có + Phủ định chưa chắc hạnh phúc + とは限らない."
      },
      {
        "id": "jlpt-n2-kagiri-4",
        "type": "choice",
        "prompt": "生きている ___ 、希望を捨ててはいけない。",
        "options": [
          "限り",
          "あまり",
          "くせに",
          "わりに"
        ],
        "answer": "限り",
        "explanation": "Chừng nào còn sống: 生きている限り."
      },
      {
        "id": "jlpt-n2-kagiri-5",
        "type": "fill",
        "prompt": "Điền từ phủ định: 日本人だからといって、全員が敬語を正しく使えるとは ___ 。",
        "answer": "限らない",
        "explanation": "Chưa chắc đã: とは限らない."
      },
      {
        "id": "jlpt-n2-kagiri-6",
        "type": "choice",
        "prompt": "私の記憶にある ___ 、そんな約束はしていません。",
        "options": [
          "限り",
          "ところ",
          "とおり",
          "わけ"
        ],
        "answer": "限り",
        "explanation": "Trong phạm vi ký ức của tôi: 記憶にある限り."
      },
      {
        "id": "jlpt-n2-kagiri-7",
        "type": "order",
        "prompt": "Sắp xếp: Chừng nào chưa giải quyết được vấn đề này thì không thể yên tâm.",
        "options": [
          "この問題が",
          "解決しない限り",
          "安心することは",
          "できない"
        ],
        "answer": "この問題が解決しない限り安心することはできない",
        "explanation": "Trật tự: Vない + 限り + Không thể an lòng."
      },
      {
        "id": "jlpt-n2-kagiri-8",
        "type": "choice",
        "prompt": "時間の許す ___ 、観光地を巡りたい。",
        "options": [
          "限り",
          "あまり",
          "せいで",
          "おかげ"
        ],
        "answer": "限り",
        "explanation": "Trong giới hạn thời gian cho phép: 時間の許す限り."
      },
      {
        "id": "jlpt-n2-kagiri-9",
        "type": "fill",
        "prompt": "Điền thể chia của 続ける: 諦めずに ___ 限り、可能性はゼロではない。",
        "answer": "続ける",
        "explanation": "V từ điển + 限り: 続ける限り (chừng nào còn kiên trì tiếp tục)."
      },
      {
        "id": "jlpt-n2-kagiri-10",
        "type": "order",
        "prompt": "Sắp xếp: Lực lượng cảnh sát đã nỗ lực hết sức mình.",
        "options": [
          "警察は",
          "力の限りを",
          "尽くして",
          "捜査を続けた"
        ],
        "answer": "警察は力の限りを尽くして捜査を続けた",
        "explanation": "Trật tự: Chủ ngữ + Dốc hết sức mình (力の限りを尽くして) + Điều tra."
      }
    ]
  },
  {
    "id": "jlpt-n2-ue-de",
    "pattern": "〜上で・上の",
    "title": "Sau khi làm A thì làm B / Về mặt",
    "level": "N2",
    "position": 276,
    "meaning": "【Dạng 1: Vた上で】Sau khi thực hiện A chu đáo thì mới tiến hành B\n【Dạng 2: Vる上で / Nの上で】Trong quá trình thực hiện / Xét về mặt, phương diện...",
    "formation": "【Dạng 1】Vた + 上で / N + の上で\n【Dạng 2】V từ điển + 上で(は) / N + の上で(は) (bổ nghĩa danh từ: 上の + N)",
    "explanation": "【Dạng 1: Thứ tự chuẩn bị】Hành động A là tiền đề chuẩn bị cẩn trọng bắt buộc trước khi đưa ra quyết định hành động B.\n【Dạng 2: Phạm vi khía cạnh】Xét trên phương diện công việc, pháp lý hoặc cuộc sống thường nhật.",
    "notes": "Chú thích phân biệt:\n- Vた上で: Nhấn mạnh tính suy xét, bàn bạc kĩ lưỡng (sau khi thảo luận mới ký hợp đồng).\n- Vてから: Thứ tự thời gian thuần túy (rửa tay xong ăn cơm).",
    "mistake": "Cảnh báo lỗi: Nhầm lẫn giữa Vた上で (sau khi làm) và Vる上で (trong quá trình / để làm được việc đó).",
    "related": [
      "bridge-n2-32",
      "jlpt-n5-tekara"
    ],
    "examples": [
      {
        "ja": "家族とよく相談した上で、進路を決めたいと思います。",
        "kana": "かぞくとよくそうだんしたうえで、しんろをきめたいとおもいます。",
        "vi": "Sau khi trao đổi kỹ lưỡng với gia đình, tôi mới quyết định hướng đi tương lai.",
        "readings": {
          "家族": "かぞく",
          "相談": "そうだん",
          "進路": "しんろ",
          "決めたい": "きめたい"
        }
      },
      {
        "ja": "外国語を勉強する上で、毎日の継続が最も重要です。",
        "kana": "がいこくごをべんきょうするうえで、まいにちのけいぞくがもっともじゅうようです。",
        "vi": "Trong quá trình học ngoại ngữ, sự duy trì đều đặn mỗi ngày là quan trọng nhất.",
        "readings": {
          "外国語": "がいこくご",
          "勉強": "べんきょう",
          "継続": "けいぞく",
          "重要": "じゅうよう"
        }
      },
      {
        "ja": "暦の上ではもう秋ですが、まだまだ暑い日が続いています。",
        "kana": "こよみのうえではもうあきですが、まだまだあついひがつづいています。",
        "vi": "Xét về mặt lịch biểu thì đã sang thu rồi, nhưng những ngày nắng nóng vẫn kéo dài.",
        "readings": {
          "暦": "こよみ",
          "秋": "あき",
          "暑い": "あつい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-ue-de-1",
        "type": "choice",
        "prompt": "内容をよく確認した ___ 、サインをしてください。",
        "options": [
          "上で",
          "あまり",
          "くせに",
          "かぎり"
        ],
        "answer": "上で",
        "explanation": "Sau khi kiểm tra kỹ lưỡng: Vた + 上で: 確認した上で."
      },
      {
        "id": "jlpt-n2-ue-de-2",
        "type": "fill",
        "prompt": "Điền trợ từ nối danh từ: 契約書は双方合意 ___ 上で取り交わされた。",
        "answer": "の",
        "explanation": "N + の + 上で: 合意の上で (trên cơ sở đôi bên đồng thuận)."
      },
      {
        "id": "jlpt-n2-ue-de-3",
        "type": "order",
        "prompt": "Sắp xếp: Trong quá trình làm việc, sự giao tiếp là không thể thiếu.",
        "options": [
          "仕事をする",
          "上で",
          "コミュニケーションは",
          "欠かせない"
        ],
        "answer": "仕事をする上でコミュニケーションは欠かせない",
        "explanation": "Trật tự: V từ điển + 上で + Giao tiếp là không thể thiếu."
      },
      {
        "id": "jlpt-n2-ue-de-4",
        "type": "choice",
        "prompt": "健康 ___ の理由により、退職することにいたしました。",
        "options": [
          "上",
          "中",
          "下",
          "外"
        ],
        "answer": "上",
        "explanation": "Bổ nghĩa danh từ lý do sức khỏe: 健康上の理由."
      },
      {
        "id": "jlpt-n2-ue-de-5",
        "type": "fill",
        "prompt": "Điền thể chia của 検討する: 社内で十分に ___ 上で、お返事いたします。",
        "answer": "検討した",
        "explanation": "Vた + 上で: 検討した上で (sau khi cân nhắc kỹ)."
      },
      {
        "id": "jlpt-n2-ue-de-6",
        "type": "choice",
        "prompt": "アパートを借りる ___ 、連帯保証人が必要になる。",
        "options": [
          "上で",
          "あまり",
          "くせに",
          "わりに"
        ],
        "answer": "上で",
        "explanation": "Trong quá trình thuê nhà: 借りる上で."
      },
      {
        "id": "jlpt-n2-ue-de-7",
        "type": "order",
        "prompt": "Sắp xếp: Xét về mặt pháp lý thì hành động này không có bất kỳ vấn đề gì.",
        "options": [
          "法律の",
          "上では",
          "何の問題も",
          "ありません"
        ],
        "answer": "法律の上では何の問題もありません",
        "explanation": "Trật tự: N + の上では + Hoàn toàn không có vấn đề gì."
      },
      {
        "id": "jlpt-n2-ue-de-8",
        "type": "choice",
        "prompt": "実物を見た ___ ないと、購入は決められません。",
        "options": [
          "上で",
          "あまり",
          "くせに",
          "かぎり"
        ],
        "answer": "上で",
        "explanation": "Vた上でないと: nếu không sau khi xem tận mắt."
      },
      {
        "id": "jlpt-n2-ue-de-9",
        "type": "fill",
        "prompt": "Điền từ: 計画を立てる ___ で、予算の把握が不可欠だ。",
        "answer": "上",
        "explanation": "V từ điển + 上で: 立てる上で (trong quá trình lập kế hoạch)."
      },
      {
        "id": "jlpt-n2-ue-de-10",
        "type": "order",
        "prompt": "Sắp xếp: Sau khi đã suy nghĩ thấu đáo, tôi quyết định nhận công việc này.",
        "options": [
          "熟慮した",
          "上で",
          "この仕事を",
          "引き受けることにした"
        ],
        "answer": "熟慮した上でこの仕事を引き受けることにした",
        "explanation": "Trật tự: Vた + 上で + Quyết định nhận lời."
      }
    ]
  },
  {
    "id": "jlpt-n2-wari-ni",
    "pattern": "〜割に・割には",
    "title": "So với mức độ... thì kết quả ngoài dự kiến",
    "level": "N2",
    "position": 277,
    "meaning": "【〜割に（は）】So với tỷ lệ, tiêu chuẩn hay điều kiện A thì kết quả B mang lại sự chênh lệch bất ngờ (tốt hơn hoặc tệ hơn tưởng tượng)",
    "formation": "Thể thường (V/A/N) + 割に(は)\n- Aな + な + 割に\n- N + の + 割に",
    "explanation": "So sánh tương quan giữa tiền đề và kết quả thực tế, nêu bật sự không cân xứng vượt ra ngoài phán đoán thông thường.",
    "notes": "Chú thích phân biệt:\n- 〜割には: Có thể đi với các từ có giá trị đo lường, giá tiền, độ tuổi cụ thể (70 tuổi, 1000 yên).\n- 〜にしては: Không đi trực tiếp với con số chỉ lượng đo lường chung chung mà đi với một sự kiện mốc cụ thể.",
    "mistake": "Cảnh báo lỗi: Danh từ đi với 割に bắt buộc phải có trợ từ の (VD: 年齢の割に, sai: 年齢割に).",
    "related": [
      "bridge-n2-30",
      "jlpt-n4-noni"
    ],
    "examples": [
      {
        "ja": "このレストランは値段の割に、料理の質が高くて美味しい。",
        "kana": "このれすとらんはねだんのわりに、りょうりのしつがたかくておいしい。",
        "vi": "Nhà hàng này so với mức giá bình dân thì chất lượng món ăn rất cao và ngon miệng.",
        "readings": {
          "値段": "ねだん",
          "割に": "わりに",
          "料理": "りょうり",
          "質": "しつ",
          "高くて": "たかくて"
        }
      },
      {
        "ja": "彼は70歳という年齢の割には、体が若々しくて元気だ。",
        "kana": "かれはななじゅっさいというねんれいのわりには、からだがわかわかしくてげんきだ。",
        "vi": "Bác ấy so với độ tuổi 70 thì vóc dáng trông vô cùng trẻ trung và khỏe khoắn.",
        "readings": {
          "年齢": "ねんれい",
          "体": "からだ",
          "若々しくて": "わかわかしくて"
        }
      },
      {
        "ja": "たくさん勉強した割には、あまり点数が良くなかった。",
        "kana": "たくさんべんきょうしたわりには、あまりてんすがよくなかった。",
        "vi": "So với công sức học hành cày cuốc rất nhiều thì điểm số lại không cao như kỳ vọng.",
        "readings": {
          "勉強": "べんきょう",
          "点数": "てんすう",
          "良くなかった": "よくなかった"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-wari-ni-1",
        "type": "choice",
        "prompt": "この服は安かった ___ 、生地がしっかりしていて長持ちする。",
        "options": [
          "割に",
          "あまり",
          "くせに",
          "かぎり"
        ],
        "answer": "割に",
        "explanation": "So với mức giá rẻ: 安かった割に."
      },
      {
        "id": "jlpt-n2-wari-ni-2",
        "type": "fill",
        "prompt": "Điền trợ từ liên kết danh từ: 年齢 ___ 割には若く見えますね。",
        "answer": "の",
        "explanation": "N + の + 割に: 年齢の割には."
      },
      {
        "id": "jlpt-n2-wari-ni-3",
        "type": "order",
        "prompt": "Sắp xếp: Căn phòng này so với độ rộng thì tiền thuê rất hời.",
        "options": [
          "広い",
          "割には",
          "家賃が",
          "安いです"
        ],
        "answer": "広い割には家賃が安いです",
        "explanation": "Trật tự: Tính từ い + 割には + Tiền thuê rẻ."
      },
      {
        "id": "jlpt-n2-wari-ni-4",
        "type": "choice",
        "prompt": "彼女はよく食べる ___ 、ちっとも太らない。",
        "options": [
          "割に",
          "あまり",
          "ために",
          "とおり"
        ],
        "answer": "割に",
        "explanation": "V từ điển + 割に: 食べる割に (ăn nhiều thế mà không mập)."
      },
      {
        "id": "jlpt-n2-wari-ni-5",
        "type": "fill",
        "prompt": "Điền từ nối tính từ đuôi な: 静か ___ 割に、便利な場所にあります。",
        "answer": "な",
        "explanation": "Tính từ な + な + 割に: 静かな割に."
      },
      {
        "id": "jlpt-n2-wari-ni-6",
        "type": "choice",
        "prompt": "練習をあまりしなかった ___ 、いい結果が出せた。",
        "options": [
          "割に",
          "くせに",
          "あまり",
          "ために"
        ],
        "answer": "割に",
        "explanation": "Ít tập vậy mà kết quả tốt ngoài mong đợi: しなかった割に."
      },
      {
        "id": "jlpt-n2-wari-ni-7",
        "type": "order",
        "prompt": "Sắp xếp: Đồ đạc này kích cỡ nhỏ vậy mà chứa được nhiều thứ.",
        "options": [
          "小さい",
          "割に",
          "荷物が",
          "たくさん入る"
        ],
        "answer": "小さい割に荷物がたくさん入る",
        "explanation": "Trật tự: Nhỏ gọn + 割に + Chứa được nhiều."
      },
      {
        "id": "jlpt-n2-wari-ni-8",
        "type": "choice",
        "prompt": "初心者 ___ は、とても上手に弾けていますね。",
        "options": [
          "の割に",
          "のあまり",
          "のくせに",
          "のとおり"
        ],
        "answer": "の割に",
        "explanation": "So với người mới bắt đầu: 初心者の割には."
      },
      {
        "id": "jlpt-n2-wari-ni-9",
        "type": "fill",
        "prompt": "Điền thể đúng của 働く: 毎日一生懸命 ___ 割には、給料が上がらない。",
        "answer": "働いている",
        "explanation": "Vている + 割には: Cày cuốc thế mà lương không tăng."
      },
      {
        "id": "jlpt-n2-wari-ni-10",
        "type": "order",
        "prompt": "Sắp xếp: Món đồ này rẻ vậy mà tính năng lại đa dạng bất ngờ.",
        "options": [
          "低価格の",
          "割に",
          "機能が",
          "充実している"
        ],
        "answer": "低価格の割に機能が充実している",
        "explanation": "Trật tự: Giá thấp + 割に + Tính năng đầy đủ."
      }
    ]
  },
  {
    "id": "jlpt-n2-ni-sakadatte",
    "pattern": "〜に先立って・に先立ち",
    "title": "Trước khi tiến hành sự kiện lớn quan trọng",
    "level": "N2",
    "position": 278,
    "meaning": "【〜に先立って / に先立ち】Trước khi bước vào một sự kiện lớn, dự án trọng đại hoặc kế hoạch công khai quan trọng, cần chuẩn bị hoặc làm trước một việc",
    "formation": "N + に先立って / に先立ち (văn viết trang trọng)\nV từ điển + の / ことに先立って\nBổ nghĩa cho danh từ: N1 + に先立つ + N2",
    "explanation": "Dùng trong thông báo thời sự, văn kiện doanh nghiệp hoặc bài phát biểu nghi lễ: diễn tả hành động chuẩn bị long trọng trước giờ khai mạc hay xuất phát.",
    "notes": "Chú thích phân biệt:\n- 〜に先立って: Sự kiện có tính công cộng, tập thể, quy mô lớn (khai mạc hội nghị, bấm máy bộ phim, mở cửa nhà ga).\n- 〜まえに: Dùng cho mọi việc sinh hoạt cá nhân đời thường (trước khi ăn cơm, trước khi ngủ).",
    "mistake": "Cảnh báo lỗi: Tuyệt đối không dùng に先立って cho việc cá nhân vụn vặt (sai: 寝るに先立って歯を磨く, đúng: 寝る前に).",
    "related": [
      "bridge-n2-25",
      "jlpt-n5-maeni"
    ],
    "examples": [
      {
        "ja": "新製品の発売に先立って、記者会見が行われた。",
        "kana": "しんせいひんのはつばいにさきだって、きしゃかいけんがおこなわれた。",
        "vi": "Trước thềm phát hành sản phẩm mới, một buổi họp báo long trọng đã được tổ chức.",
        "readings": {
          "新製品": "しんせいひん",
          "発売": "はつばい",
          "記者会見": "きしゃかいけん",
          "行われた": "おこなわれた"
        }
      },
      {
        "ja": "映画の公開に先立ち、主要キャストによる舞台挨拶があった。",
        "kana": "えいがのこうかいにさきだち、しゅようきゃすとによるぶあいさつがあった。",
        "vi": "Trước ngày công chiếu bộ phim, dàn diễn viên chính đã có buổi giao lưu trên sân khấu.",
        "readings": {
          "映画": "えいが",
          "公開": "こうかい",
          "舞台挨拶": "ぶあいさつ"
        }
      },
      {
        "ja": "工事を開始するに先立って、近隣住民への説明会を開いた。",
        "kana": "こうじをかいしするにさきだって、きんりんじゅうみんへのせつめいかいをひらいた。",
        "vi": "Trước khi khởi công công trình, chúng tôi đã tổ chức buổi gặp mặt giải thích cho cư dân lân cận.",
        "readings": {
          "工事": "こうじ",
          "開始": "かいし",
          "近隣住民": "きんりんじゅうみん",
          "説明会": "せつめいかい"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-ni-sakadatte-1",
        "type": "choice",
        "prompt": "試合の開始に ___ 、国家斉唱が行われた。",
        "options": [
          "先立って",
          "伴って",
          "応じて",
          "向かって"
        ],
        "answer": "先立って",
        "explanation": "Trước khi bắt đầu trận đấu long trọng: 開始に先立って."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-2",
        "type": "fill",
        "prompt": "Điền trợ từ: 会議の開催 ___ 先立ち、資料を配布いたします。",
        "answer": "に",
        "explanation": "Cấu trúc trang trọng: N + に先立ち."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-3",
        "type": "order",
        "prompt": "Sắp xếp: Trước khi mở cửa triển lãm, buổi chiếu thử đã được tổ chức.",
        "options": [
          "展覧会のオープンに",
          "先立って",
          "内覧会が",
          "催された"
        ],
        "answer": "展覧会のオープンに先立って内覧会が催された",
        "explanation": "Trật tự: Sự kiện + に先立って + Buổi xem thử được tổ chức."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-4",
        "type": "choice",
        "prompt": "総選挙に ___ 演説会が開かれた。",
        "options": [
          "先立つ",
          "先立って",
          "先立ち",
          "先立てば"
        ],
        "answer": "先立つ",
        "explanation": "Bổ nghĩa cho danh từ 演説会: に先立つ + N."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-5",
        "type": "fill",
        "prompt": "Điền từ hóa danh từ: 出発 ___ に先立って荷物の点検を行う。",
        "answer": "するの",
        "explanation": "V từ điển + のに先立って: 出発するのに先立って."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-6",
        "type": "choice",
        "prompt": "新しい事業を始めるに ___ 、綿密な市場調査を行った。",
        "options": [
          "先立ち",
          "かぎり",
          "あまり",
          "とおり"
        ],
        "answer": "先立ち",
        "explanation": "Trước khi bắt đầu dự án mới: 始めるに先立ち."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-7",
        "type": "order",
        "prompt": "Sắp xếp: Trước giờ ký hiệp ước, các bên đã chụp ảnh lưu niệm.",
        "options": [
          "調印式に",
          "先立って",
          "記念撮影が",
          "行われた"
        ],
        "answer": "調印式に先立って記念撮影が行われた",
        "explanation": "Trật tự: Lễ ký kết + に先立って + Chụp ảnh lưu niệm."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-8",
        "type": "choice",
        "prompt": "本公演に先立って、無料の ___ 公演が開催された。",
        "options": [
          "プレ",
          "アフター",
          "ポスト",
          "ラスト"
        ],
        "answer": "プレ",
        "explanation": "プレ公演: buổi diễn tiền sự kiện (pre-performance)."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-9",
        "type": "fill",
        "prompt": "Điền từ: 実験を ___ に先立って、安全確認を徹底する。",
        "answer": "行うの",
        "explanation": "V từ điển + のに先立って: 行うのに先立って."
      },
      {
        "id": "jlpt-n2-ni-sakadatte-10",
        "type": "order",
        "prompt": "Sắp xếp: Trước thềm đàm phán chính thức, hai nhà lãnh đạo đã bắt tay thân mật.",
        "options": [
          "首脳会談に",
          "先立ち",
          "両首脳が",
          "固い握手を交わした"
        ],
        "answer": "首脳会談に先立ち両首脳が固い握手を交わした",
        "explanation": "Trật tự: Hội đàm thượng đỉnh + に先立ち + Bắt tay thân mật."
      }
    ]
  },
  {
    "id": "jlpt-n2-te-hajimete",
    "pattern": "〜てはじめて",
    "title": "Chỉ sau khi... mới nhận ra / mới hiểu được",
    "level": "N2",
    "position": 279,
    "meaning": "【〜てはじめて】Chỉ sau khi trải qua sự việc hay biến cố A thì người ta mới thấu hiểu, nhận thức sâu sắc được bài học hay giá trị B (mà trước đó không hề hay biết)",
    "formation": "V thể て + はじめて\n* Thường kết thúc bằng: 〜と分かった, 〜に気づいた, 〜を知った",
    "explanation": "Nhấn mạnh một bước ngoặt nhận thức: chỉ khi đích thân trải nghiệm hoặc mất đi một điều gì quý giá thì con người ta mới thực sự tỉnh ngộ hoặc trân trọng.",
    "notes": "Chú thích phân biệt:\n- 〜てはじめて: Nhấn mạnh sự giác ngộ, nhận ra chân lý sau trải nghiệm.\n- 〜てから: Chỉ thuần túy là mốc thời gian (kể từ khi... thì tiếp diễn mãi).",
    "mistake": "Cảnh báo lỗi: Vế sau thường là nhận thức mới xuất hiện trong đầu (thấu hiểu, nhận ra), không dùng cho những hành động thông thường vô cảm.",
    "related": [
      "bridge-n2-25",
      "jlpt-n5-tekara"
    ],
    "examples": [
      {
        "ja": "病気になってはじめて、健康のありがたさが分かった。",
        "kana": "びょうきになってはじめて、けんこうのありがたさがわかった。",
        "vi": "Chỉ sau khi ngã bệnh, tôi mới thấu hiểu được sức khỏe đáng quý đến nhường nào.",
        "readings": {
          "病気": "びょうき",
          "健康": "けんこう",
          "分かった": "わかった"
        }
      },
      {
        "ja": "親元を離れて一人暮らしをしてはじめて、親の苦労が身に染みた。",
        "kana": "おやもとをはなれてひとりぐらしをしてはじめて、おやのくろうがみにしみた。",
        "vi": "Chỉ khi rời xa vòng tay cha mẹ để tự lập, tôi mới thấm thía những nhọc nhằn của đấng sinh thành.",
        "readings": {
          "親元": "おやもと",
          "離れて": "はなれて",
          "一人暮らし": "ひとりぐらし",
          "苦労": "くろう"
        }
      },
      {
        "ja": "実際に自分でやってみてはじめて、その難しさに気づいた。",
        "kana": "じっさいにじぶんでやってみてはじめて、そのむずかしさにきづいた。",
        "vi": "Chỉ khi đích thân bắt tay vào làm thử, tôi mới nhận ra nó khó khăn đến dường nào.",
        "readings": {
          "実際": "じっさい",
          "自分": "じぶん",
          "難しさ": "むずかしさ",
          "気づいた": "きづいた"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-te-hajimete-1",
        "type": "choice",
        "prompt": "海外に住んで ___ 、日本の良さを再発見した。",
        "options": [
          "はじめて",
          "あまり",
          "くせに",
          "かぎり"
        ],
        "answer": "はじめて",
        "explanation": "Nhận ra chân lý sau khi trải nghiệm: Vて + はじめて: 住んではじめて."
      },
      {
        "id": "jlpt-n2-te-hajimete-2",
        "type": "fill",
        "prompt": "Điền thể て của 失う: 大切なものを ___ はじめてその価値に気づく。",
        "answer": "失って",
        "explanation": "失う → 失ってはじめて (chỉ khi đánh mất mới nhận ra giá trị)."
      },
      {
        "id": "jlpt-n2-te-hajimete-3",
        "type": "order",
        "prompt": "Sắp xếp: Chỉ sau khi làm cha mẹ người ta mới hiểu được lòng đấng sinh thành.",
        "options": [
          "親になって",
          "はじめて",
          "親の恩が",
          "分かるものだ"
        ],
        "answer": "親になってはじめて親の恩が分かるものだ",
        "explanation": "Trật tự: Vて + はじめて + Nhận ra công ơn."
      },
      {
        "id": "jlpt-n2-te-hajimete-4",
        "type": "choice",
        "prompt": "事故に遭ってはじめて、安全運転の ___ を痛感した。",
        "options": [
          "大切さ",
          "危険さ",
          "簡単さ",
          "退屈さ"
        ],
        "answer": "大切さ",
        "explanation": "Thấm thía tầm quan trọng của việc lái xe an toàn: 大切さ."
      },
      {
        "id": "jlpt-n2-te-hajimete-5",
        "type": "fill",
        "prompt": "Điền từ giác ngộ: 失敗し ___ はじめて、自分の甘さに気づいた。",
        "answer": "て",
        "explanation": "Vて + はじめて: 失敗してはじめて."
      },
      {
        "id": "jlpt-n2-te-hajimete-6",
        "type": "choice",
        "prompt": "先生に指摘されて ___ 、自分のミスに気づきました。",
        "options": [
          "はじめて",
          "あまり",
          "とおり",
          "しだい"
        ],
        "answer": "はじめて",
        "explanation": "Chỉ khi được nhắc nhở mới nhận ra: 指摘されてはじめて."
      },
      {
        "id": "jlpt-n2-te-hajimete-7",
        "type": "order",
        "prompt": "Sắp xếp: Chỉ khi trò chuyện trực tiếp tôi mới hiểu được con người thật của anh ấy.",
        "options": [
          "直接話してみて",
          "はじめて",
          "彼の優しさが",
          "分かった"
        ],
        "answer": "直接話してみてはじめて彼の優しさが分かった",
        "explanation": "Trật tự: Nói chuyện trực tiếp + はじめて + Hiểu được sự dịu dàng."
      },
      {
        "id": "jlpt-n2-te-hajimete-8",
        "type": "choice",
        "prompt": "就職して ___ 、社会の厳しさを知った。",
        "options": [
          "はじめて",
          "かぎり",
          "くせに",
          "わりに"
        ],
        "answer": "はじめて",
        "explanation": "Chỉ sau khi đi làm mới biết sự khắc nghiệt: 就職してはじめて."
      },
      {
        "id": "jlpt-n2-te-hajimete-9",
        "type": "fill",
        "prompt": "Điền thể chia của 読む: 原作を ___ はじめて、物語の本当の面白さが理解できた。",
        "answer": "読んで",
        "explanation": "V thể て: 読んで + はじめて."
      },
      {
        "id": "jlpt-n2-te-hajimete-10",
        "type": "order",
        "prompt": "Sắp xếp: Chỉ khi đứng trên sân khấu tôi mới thấu hiểu cảm giác căng thẳng tột cùng.",
        "options": [
          "舞台に立って",
          "はじめて",
          "本当の緊張感を",
          "味わった"
        ],
        "answer": "舞台に立ってはじめて本当の緊張感を味わった",
        "explanation": "Trật tự: Đứng trên sân khấu + はじめて + Nếm trải sự căng thẳng thực sự."
      }
    ]
  },
  {
    "id": "jlpt-n2-kara-toitte",
    "pattern": "〜からといって",
    "title": "Chỉ vì lý do là... mà bảo rằng thì cũng không hẳn",
    "level": "N2",
    "position": 280,
    "meaning": "【〜からといって（〜とは限らない / 〜わけではない）】Chỉ vì lý do A mà đã vội vàng suy diễn hoặc biện minh cho B thì không được, chưa hẳn là đúng hoàn toàn",
    "formation": "Thể thường (V/A/N) + からといって\n* Vế sau gần như luôn đi kèm các dạng phủ định bộ phận: 〜とは限らない, 〜わけではない, 〜べきではない, 〜ないでください",
    "explanation": "Bác bỏ một định kiến hoặc lời biện minh nông cạn: không thể lấy một lý do phiến diện để hợp thức hóa một kết luận sai lầm hay hành vi sai trái.",
    "notes": "Chú thích phân biệt:\n- 〜からといって: Nhấn mạnh sự bác bỏ suy luận hoặc phê bình hành vi (không thể vì giàu mà coi thường người khác).\n- 〜のに: Bày tỏ sự tiếc nuối, ấm ức cá nhân đơn thuần.",
    "mistake": "Cảnh báo lỗi: Vế sau bắt buộc phải có tính chất phủ định hoặc khuyên can, không kết thúc bằng câu trần thuật khẳng định tuyệt đối.",
    "related": [
      "bridge-n2-44",
      "jlpt-n4-noni"
    ],
    "examples": [
      {
        "ja": "お金持ちだからといって、必ずしも幸せだとは限らない。",
        "kana": "おかねもちだからといって、かならずしもしあわせだとはかぎらない。",
        "vi": "Chỉ vì người ta giàu có không có nghĩa là lúc nào họ cũng hạnh phúc.",
        "readings": {
          "金持ち": "かねもち",
          "幸せ": "しあわせ",
          "限らない": "かぎらない"
        }
      },
      {
        "ja": "忙しいからといって、朝ご飯を抜くのは体によくない。",
        "kana": "いそがしいからといって、あさごはんをぬくのはからだによくない。",
        "vi": "Chỉ vì bận rộn mà bỏ bữa ăn sáng thì thật không tốt cho sức khỏe chút nào.",
        "readings": {
          "忙しい": "いそがしい",
          "朝ご飯": "あさごはん",
          "抜く": "ぬく",
          "体": "からだ"
        }
      },
      {
        "ja": "日本に長く住んでいるからといって、日本語がペラペラとは言えない。",
        "kana": "にほんにながくすんでいるからといって、にほんごがぺらぺらとはいえない。",
        "vi": "Chỉ vì sống ở Nhật lâu năm mà bảo rằng ai cũng nói tiếng Nhật lưu loát là không đúng.",
        "readings": {
          "日本": "にほん",
          "長く": "ながく",
          "住んでいる": "すんでいる"
        }
      }
    ],
    "exercises": [
      {
        "id": "jlpt-n2-kara-toitte-1",
        "type": "choice",
        "prompt": "好きだから ___ 、そればかり食べるのは良くない。",
        "options": [
          "といって",
          "あまりに",
          "かぎりに",
          "とおりに"
        ],
        "answer": "といって",
        "explanation": "Chỉ vì thích mà toàn ăn món đó: 好きだからといって."
      },
      {
        "id": "jlpt-n2-kara-toitte-2",
        "type": "fill",
        "prompt": "Điền từ bác bỏ suy đoán: 日本人だから ___ 、全員が納豆を食べられるわけではない。",
        "answer": "といって",
        "explanation": "〜だからといって: chỉ vì là người Nhật không hẳn ai cũng ăn được natto."
      },
      {
        "id": "jlpt-n2-kara-toitte-3",
        "type": "order",
        "prompt": "Sắp xếp: Không thể vì mệt mỏi mà thất hứa được.",
        "options": [
          "疲れているから",
          "といって",
          "約束を破って",
          "はいけない"
        ],
        "answer": "疲れているからといって約束を破ってはいけない",
        "explanation": "Trật tự: Biện minh mệt + といって + Thất hứa là không được."
      },
      {
        "id": "jlpt-n2-kara-toitte-4",
        "type": "choice",
        "prompt": "値段が高いからといって、必ずしも質が良い ___ 。",
        "options": [
          "とは限らない",
          "はずだ",
          "にちがいない",
          "べきだ"
        ],
        "answer": "とは限らない",
        "explanation": "Chưa chắc đã: とは限らない."
      },
      {
        "id": "jlpt-n2-kara-toitte-5",
        "type": "fill",
        "prompt": "Điền từ phủ định bộ phận: 暇だからといって、遊んでばかりいる ___ ではない。",
        "answer": "わけ",
        "explanation": "Không hẳn là: わけではない."
      },
      {
        "id": "jlpt-n2-kara-toitte-6",
        "type": "choice",
        "prompt": "若いからといって、無理をして ___ 。体を大切にしなさい。",
        "options": [
          "はいけない",
          "もいい",
          "べきだ",
          "はずだ"
        ],
        "answer": "はいけない",
        "explanation": "Khuyên can không được quá sức: 無理をしてはいけない."
      },
      {
        "id": "jlpt-n2-kara-toitte-7",
        "type": "order",
        "prompt": "Sắp xếp: Chỉ vì chưa hiểu mà bỏ cuộc ngay là quá sớm.",
        "options": [
          "一度失敗したから",
          "といって",
          "諦めるのは",
          "まだ早い"
        ],
        "answer": "一度失敗したからといって諦めるのはまだ早い",
        "explanation": "Trật tự: Mới thất bại một lần + といって + Bỏ cuộc là quá sớm."
      },
      {
        "id": "jlpt-n2-kara-toitte-8",
        "type": "choice",
        "prompt": "英語が話せるからといって、通訳が ___ わけではない。",
        "options": [
          "できる",
          "できない",
          "できよう",
          "できた"
        ],
        "answer": "できる",
        "explanation": "Không hẳn là làm thông dịch viên được: できるわけではない."
      },
      {
        "id": "jlpt-n2-kara-toitte-9",
        "type": "fill",
        "prompt": "Điền thể chia của 欲しい: ___ からといって、何でも買ってあげるのは甘やかしすぎだ。",
        "answer": "欲しい",
        "explanation": "Tính từ い: 欲しいからといって (chỉ vì con muốn mà mua hết)."
      },
      {
        "id": "jlpt-n2-kara-toitte-10",
        "type": "order",
        "prompt": "Sắp xếp: Không thể vì người khác làm mà mình cũng làm theo điều xấu được.",
        "options": [
          "他人がやっているから",
          "といって",
          "真似をして",
          "いい理由にはならない"
        ],
        "answer": "他人がやっているからといって真似をしていい理由にはならない",
        "explanation": "Trật tự: Người khác làm + といって + Bắt chước không phải lý do chính đáng."
      }
    ]
  }
];

export const jlptGrammarLessons = additionalGrammarSpecs.map((spec) => {
  const content: LessonContent = {
    meaning: spec.meaning,
    formation: spec.formation,
    explanation: spec.explanation,
    notes: spec.notes,
    mistake: spec.mistake,
    related: spec.related,
    examples: spec.examples,
    curriculum: {
      track: `Ngữ pháp trọng điểm JLPT ${spec.level}`,
      topic: spec.title,
      sourceUrl: `https://www.vnjpclub.com/ngu-phap-${spec.level.toLowerCase()}/`,
      sourceLabel: 'Tổng hợp đề thi chứng chỉ tiếng Nhật thực tế',
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
