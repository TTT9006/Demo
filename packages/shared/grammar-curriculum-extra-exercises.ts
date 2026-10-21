// Auto-authored verified supplementary exercises ensuring 10 exercises per curriculum lesson
import type { Exercise } from './content';

export const curriculumExtraExercises: Record<string, Exercise[]> = {
  "mnn-01": [
    {
      "id": "mnn-01-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「は・です・ではありません・か・も」: 姉は看護師(___ )。 (Chị tôi là điều dưỡng.)",
      "options": [
        "せん",
        "だけ",
        "です",
        "のに"
      ],
      "answer": "です",
      "explanation": "Áp dụng quy tắc: N は N です／N ではありません／câu + か／N も. は nêu chủ đề; です xác nhận, ではありません phủ định. か tạo câu hỏi; も thêm đối tượng có cùng đặc điểm."
    },
    {
      "id": "mnn-01-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Em trai tôi cũng là điều dưỡng.\"?",
      "options": [
        "弟も看護師です。",
        "も弟看護師です。",
        "弟もです。看護師",
        "です。弟も看護師"
      ],
      "answer": "弟も看護師です。",
      "explanation": "Cấu trúc chuẩn: N は N です／N ではありません／câu + か／N も. Trật tự câu: 弟も看護師です。."
    },
    {
      "id": "mnn-01-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 弟も看護 [___] (Em trai tôi cũng là điều dưỡng.)",
      "answer": "です",
      "acceptedAnswers": [
        "です",
        "です"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「です」theo cấu trúc: N は N です／N ではありません／câu + か／N も."
    },
    {
      "id": "mnn-01-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Em trai tôi cũng là điều dưỡng.\"",
      "options": [
        "も",
        "看護師",
        "です。",
        "弟"
      ],
      "answer": "弟も看護師です。",
      "explanation": "Trật tự ngữ pháp chính xác là: 弟も看護師です。. Lưu ý: は đọc là wa khi làm trợ từ; không thêm ます vào danh từ."
    },
    {
      "id": "mnn-01-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「は・です・ではありません・か・も」được sử dụng với mục đích chính nào?",
      "options": [
        "Giới thiệu và hỏi thông tin",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Giới thiệu và hỏi thông tin"
      ],
      "answer": "Giới thiệu và hỏi thông tin",
      "explanation": "Mẫu ngữ pháp「は・です・ではありません・か・も」dùng để: Giới thiệu và hỏi thông tin. は nêu chủ đề; です xác nhận, ではありません phủ định. か tạo câu hỏi; も thêm đối tượng có cùng đặc điểm."
    },
    {
      "id": "mnn-01-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Chị tôi là điều dưỡng.\": 姉は看護師___。",
      "answer": "です",
      "acceptedAnswers": [
        "です"
      ],
      "explanation": "Đáp án đúng là「です」. Cách kết hợp: N は N です／N ではありません／câu + か／N も."
    },
    {
      "id": "mnn-01-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Chị tôi là điều dưỡng.\"",
      "options": [
        "看護師",
        "です。",
        "姉は"
      ],
      "answer": "姉は看護師です。",
      "explanation": "Câu hoàn chỉnh: 姉は看護師です。 (あねはかんごしです。). Ý nghĩa: Chị tôi là điều dưỡng.."
    }
  ],
  "mnn-02": [
    {
      "id": "mnn-02-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「これ・それ・あれ・この・の」: この傘は妹(___ )です。 (Chiếc ô này là của em gái tôi.)",
      "options": [
        "あれ",
        "それ",
        "の",
        "のに"
      ],
      "answer": "の",
      "explanation": "Áp dụng quy tắc: これ／それ／あれ は N です；この／その／あの + N；N1 の N2. これ đứng độc lập để chỉ vật gần người nói; それ gần người nghe; あれ xa cả hai. の nối người sở hữu với đồ vật."
    },
    {
      "id": "mnn-02-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Đó là chìa khóa của công ty.\"?",
      "options": [
        "それは会社の鍵です。",
        "はそれ会社の鍵です。",
        "それはです。会社の鍵",
        "です。それは会社の鍵"
      ],
      "answer": "それは会社の鍵です。",
      "explanation": "Cấu trúc chuẩn: これ／それ／あれ は N です；この／その／あの + N；N1 の N2. Trật tự câu: それは会社の鍵です。."
    },
    {
      "id": "mnn-02-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: それは会社 [___] (Đó là chìa khóa của công ty.)",
      "answer": "の",
      "acceptedAnswers": [
        "の",
        "の"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「の」theo cấu trúc: これ／それ／あれ は N です；この／その／あの + N；N1 の N2."
    },
    {
      "id": "mnn-02-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Đó là chìa khóa của công ty.\"",
      "options": [
        "は",
        "会社の鍵",
        "です。",
        "それ"
      ],
      "answer": "それは会社の鍵です。",
      "explanation": "Trật tự ngữ pháp chính xác là: それは会社の鍵です。. Lưu ý: この phải có danh từ phía sau; これ không đứng trực tiếp trước danh từ."
    },
    {
      "id": "mnn-02-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「これ・それ・あれ・この・の」được sử dụng với mục đích chính nào?",
      "options": [
        "Chỉ vật và xác định người sở hữu",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Chỉ vật và xác định người sở hữu"
      ],
      "answer": "Chỉ vật và xác định người sở hữu",
      "explanation": "Mẫu ngữ pháp「これ・それ・あれ・この・の」dùng để: Chỉ vật và xác định người sở hữu. これ đứng độc lập để chỉ vật gần người nói; それ gần người nghe; あれ xa cả hai. の nối người sở hữu với đồ vật."
    },
    {
      "id": "mnn-02-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Chiếc ô này là của em gái tôi.\": こ___傘は妹のです。",
      "answer": "の",
      "acceptedAnswers": [
        "の"
      ],
      "explanation": "Đáp án đúng là「の」. Cách kết hợp: これ／それ／あれ は N です；この／その／あの + N；N1 の N2."
    },
    {
      "id": "mnn-02-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Chiếc ô này là của em gái tôi.\"",
      "options": [
        "は妹の",
        "です。",
        "この傘"
      ],
      "answer": "この傘は妹のです。",
      "explanation": "Câu hoàn chỉnh: この傘は妹のです。 (このかさはいもうとのです。). Ý nghĩa: Chiếc ô này là của em gái tôi.."
    }
  ],
  "mnn-03": [
    {
      "id": "mnn-03-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ここ・そこ・あそこ・どこ・いくら」: 受付は(___ )です。 (Quầy tiếp tân ở phía này.)",
      "options": [
        "こちら",
        "そこ",
        "だけ",
        "のに"
      ],
      "answer": "こちら",
      "explanation": "Áp dụng quy tắc: N は ここ／そこ／あそこ です；N は いくらですか. Dùng nhóm ここ để chỉ địa điểm. どこ hỏi nơi chốn, いくら hỏi giá; こちら là cách chỉ hướng hoặc giới thiệu lịch sự."
    },
    {
      "id": "mnn-03-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Con tem này giá bao nhiêu?\"?",
      "options": [
        "この切手はいくらですか。",
        "はこの切手いくらですか。",
        "この切手はですか。いくら",
        "ですか。この切手はいくら"
      ],
      "answer": "この切手はいくらですか。",
      "explanation": "Cấu trúc chuẩn: N は ここ／そこ／あそこ です；N は いくらですか. Trật tự câu: この切手はいくらですか。."
    },
    {
      "id": "mnn-03-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この切手はい [___] (Con tem này giá bao nhiêu?)",
      "answer": "こちら",
      "acceptedAnswers": [
        "こちら",
        "こちら"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「こちら」theo cấu trúc: N は ここ／そこ／あそこ です；N は いくらですか."
    },
    {
      "id": "mnn-03-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Con tem này giá bao nhiêu?\"",
      "options": [
        "は",
        "いくら",
        "ですか。",
        "この切手"
      ],
      "answer": "この切手はいくらですか。",
      "explanation": "Trật tự ngữ pháp chính xác là: この切手はいくらですか。. Lưu ý: どちら có thể hỏi hướng, nơi hoặc lựa chọn; xác định bằng ngữ cảnh."
    },
    {
      "id": "mnn-03-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ここ・そこ・あそこ・どこ・いくら」được sử dụng với mục đích chính nào?",
      "options": [
        "Địa điểm, xuất xứ và giá tiền",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Địa điểm, xuất xứ và giá tiền"
      ],
      "answer": "Địa điểm, xuất xứ và giá tiền",
      "explanation": "Mẫu ngữ pháp「ここ・そこ・あそこ・どこ・いくら」dùng để: Địa điểm, xuất xứ và giá tiền. Dùng nhóm ここ để chỉ địa điểm. どこ hỏi nơi chốn, いくら hỏi giá; こちら là cách chỉ hướng hoặc giới thiệu lịch sự."
    },
    {
      "id": "mnn-03-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Quầy tiếp tân ở phía này.\": 受付は___です。",
      "answer": "こちら",
      "acceptedAnswers": [
        "こちら"
      ],
      "explanation": "Đáp án đúng là「こちら」. Cách kết hợp: N は ここ／そこ／あそこ です；N は いくらですか."
    },
    {
      "id": "mnn-03-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Quầy tiếp tân ở phía này.\"",
      "options": [
        "こちら",
        "です。",
        "受付は"
      ],
      "answer": "受付はこちらです。",
      "explanation": "Câu hoàn chỉnh: 受付はこちらです。 (うけつけはこちらです。). Ý nghĩa: Quầy tiếp tân ở phía này.."
    }
  ],
  "mnn-04": [
    {
      "id": "mnn-04-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ます・ません・ました・ませんでした・から・まで」: 昨日は九時まで働き(___ )。 (Hôm qua tôi làm việc đến chín giờ.)",
      "options": [
        "した",
        "せん",
        "のに",
        "ました"
      ],
      "answer": "ました",
      "explanation": "Áp dụng quy tắc: Vます／Vません／Vました／Vませんでした；thời điểm に；A から B まで. ます dùng cho hiện tại hoặc tương lai; ました cho quá khứ. から và まで xác định hai đầu của khoảng thời gian."
    },
    {
      "id": "mnn-04-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cuộc họp diễn ra từ hai giờ đến bốn giờ.\"?",
      "options": [
        "会議は二時から四時までです。",
        "は会議二時から四時までです。",
        "会議は二時からです。四時まで",
        "です。会議は二時から四時まで"
      ],
      "answer": "会議は二時から四時までです。",
      "explanation": "Cấu trúc chuẩn: Vます／Vません／Vました／Vませんでした；thời điểm に；A から B まで. Trật tự câu: 会議は二時から四時までです。."
    },
    {
      "id": "mnn-04-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 会議は二時から [___] (Cuộc họp diễn ra từ hai giờ đến bốn giờ.)",
      "answer": "ました",
      "acceptedAnswers": [
        "ました",
        "ました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ました」theo cấu trúc: Vます／Vません／Vました／Vませんでした；thời điểm に；A から B まで."
    },
    {
      "id": "mnn-04-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cuộc họp diễn ra từ hai giờ đến bốn giờ.\"",
      "options": [
        "は",
        "二時から",
        "四時まで",
        "です。",
        "会議"
      ],
      "answer": "会議は二時から四時までです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 会議は二時から四時までです。. Lưu ý: Những từ tương đối như きのう và 毎日 thường không đi với に."
    },
    {
      "id": "mnn-04-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ます・ません・ました・ませんでした・から・まで」được sử dụng với mục đích chính nào?",
      "options": [
        "Thời gian và động từ lịch sự",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thời gian và động từ lịch sự"
      ],
      "answer": "Thời gian và động từ lịch sự",
      "explanation": "Mẫu ngữ pháp「ます・ません・ました・ませんでした・から・まで」dùng để: Thời gian và động từ lịch sự. ます dùng cho hiện tại hoặc tương lai; ました cho quá khứ. から và まで xác định hai đầu của khoảng thời gian."
    },
    {
      "id": "mnn-04-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Hôm qua tôi làm việc đến chín giờ.\": 昨日は九時まで働き___。",
      "answer": "ました",
      "acceptedAnswers": [
        "ました"
      ],
      "explanation": "Đáp án đúng là「ました」. Cách kết hợp: Vます／Vません／Vました／Vませんでした；thời điểm に；A から B まで."
    },
    {
      "id": "mnn-04-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Hôm qua tôi làm việc đến chín giờ.\"",
      "options": [
        "時まで働",
        "きました。",
        "昨日は九"
      ],
      "answer": "昨日は九時まで働きました。",
      "explanation": "Câu hoàn chỉnh: 昨日は九時まで働きました。 (きのうはくじまではたらきました。). Ý nghĩa: Hôm qua tôi làm việc đến chín giờ.."
    }
  ],
  "mnn-05": [
    {
      "id": "mnn-05-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「へ・で・と・いつ」: 日曜日に自転車(___ )公園へ行きます。 (Chủ nhật tôi đạp xe đến công viên.)",
      "options": [
        "だけ",
        "で",
        "と",
        "のに"
      ],
      "answer": "で",
      "explanation": "Áp dụng quy tắc: đích đến へ／に + 行きます；phương tiện で；người と. へ chỉ hướng đến, で chỉ phương tiện và と chỉ người cùng tham gia hành động. いつ hỏi thời điểm."
    },
    {
      "id": "mnn-05-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tuần sau tôi đến bảo tàng mỹ thuật cùng bạn.\"?",
      "options": [
        "来週友達と美術館へ行きます。",
        "友達と来週美術館へ行きます。",
        "来週友達と行きます。美術館へ",
        "行きます。来週友達と美術館へ"
      ],
      "answer": "来週友達と美術館へ行きます。",
      "explanation": "Cấu trúc chuẩn: đích đến へ／に + 行きます；phương tiện で；người と. Trật tự câu: 来週友達と美術館へ行きます。."
    },
    {
      "id": "mnn-05-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 来週友達と美術 [___] (Tuần sau tôi đến bảo tàng mỹ thuật cùng bạn.)",
      "answer": "で",
      "acceptedAnswers": [
        "で",
        "で"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「で」theo cấu trúc: đích đến へ／に + 行きます；phương tiện で；người と."
    },
    {
      "id": "mnn-05-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tuần sau tôi đến bảo tàng mỹ thuật cùng bạn.\"",
      "options": [
        "友達と",
        "美術館へ",
        "行きます。",
        "来週"
      ],
      "answer": "来週友達と美術館へ行きます。",
      "explanation": "Trật tự ngữ pháp chính xác là: 来週友達と美術館へ行きます。. Lưu ý: へ đọc là e; 歩いて diễn tả đi bộ, không dùng 歩いてで."
    },
    {
      "id": "mnn-05-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「へ・で・と・いつ」được sử dụng với mục đích chính nào?",
      "options": [
        "Di chuyển và người đi cùng",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Di chuyển và người đi cùng"
      ],
      "answer": "Di chuyển và người đi cùng",
      "explanation": "Mẫu ngữ pháp「へ・で・と・いつ」dùng để: Di chuyển và người đi cùng. へ chỉ hướng đến, で chỉ phương tiện và と chỉ người cùng tham gia hành động. いつ hỏi thời điểm."
    },
    {
      "id": "mnn-05-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Chủ nhật tôi đạp xe đến công viên.\": 日曜日に自転車___公園へ行きます。",
      "answer": "で",
      "acceptedAnswers": [
        "で"
      ],
      "explanation": "Đáp án đúng là「で」. Cách kết hợp: đích đến へ／に + 行きます；phương tiện で；người と."
    },
    {
      "id": "mnn-05-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Chủ nhật tôi đạp xe đến công viên.\"",
      "options": [
        "転車で公園",
        "へ行きます。",
        "日曜日に自"
      ],
      "answer": "日曜日に自転車で公園へ行きます。",
      "explanation": "Câu hoàn chỉnh: 日曜日に自転車で公園へ行きます。 (にちようびにじてんしゃでこうえんへいきます。). Ý nghĩa: Chủ nhật tôi đạp xe đến công viên.."
    }
  ],
  "mnn-06": [
    {
      "id": "mnn-06-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「を・で・ませんか・ましょう」: 一緒に写真を撮り(___ )。 (Bạn chụp ảnh cùng tôi nhé?)",
      "options": [
        "で",
        "のに",
        "ませんか",
        "んか"
      ],
      "answer": "ませんか",
      "explanation": "Áp dụng quy tắc: N を V；địa điểm で V；Vませんか／Vましょう. を đánh dấu đối tượng tác động; で đánh dấu nơi hành động. ませんか mời người nghe; ましょう đề nghị cùng làm."
    },
    {
      "id": "mnn-06-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Giờ nghỉ trưa chúng ta ăn cơm ở nhà ăn nhé.\"?",
      "options": [
        "昼休みに食堂でご飯を食べましょう。",
        "食堂で昼休みにご飯を食べましょう。",
        "昼休みに食堂で食べましょう。ご飯を",
        "食べましょう。昼休みに食堂でご飯を"
      ],
      "answer": "昼休みに食堂でご飯を食べましょう。",
      "explanation": "Cấu trúc chuẩn: N を V；địa điểm で V；Vませんか／Vましょう. Trật tự câu: 昼休みに食堂でご飯を食べましょう。."
    },
    {
      "id": "mnn-06-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 昼休みに食堂でご [___] (Giờ nghỉ trưa chúng ta ăn cơm ở nhà ăn nhé.)",
      "answer": "ませんか",
      "acceptedAnswers": [
        "ませんか",
        "ませんか"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ませんか」theo cấu trúc: N を V；địa điểm で V；Vませんか／Vましょう."
    },
    {
      "id": "mnn-06-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Giờ nghỉ trưa chúng ta ăn cơm ở nhà ăn nhé.\"",
      "options": [
        "食堂で",
        "ご飯を",
        "食べましょう。",
        "昼休みに"
      ],
      "answer": "昼休みに食堂でご飯を食べましょう。",
      "explanation": "Trật tự ngữ pháp chính xác là: 昼休みに食堂でご飯を食べましょう。. Lưu ý: Nơi có người/vật dùng に với います／あります, không dùng で chỉ địa điểm hành động."
    },
    {
      "id": "mnn-06-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「を・で・ませんか・ましょう」được sử dụng với mục đích chính nào?",
      "options": [
        "Hành động, địa điểm và lời mời",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Hành động, địa điểm và lời mời"
      ],
      "answer": "Hành động, địa điểm và lời mời",
      "explanation": "Mẫu ngữ pháp「を・で・ませんか・ましょう」dùng để: Hành động, địa điểm và lời mời. を đánh dấu đối tượng tác động; で đánh dấu nơi hành động. ませんか mời người nghe; ましょう đề nghị cùng làm."
    },
    {
      "id": "mnn-06-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Bạn chụp ảnh cùng tôi nhé?\": 一緒に写真を撮り___。",
      "answer": "ませんか",
      "acceptedAnswers": [
        "ませんか"
      ],
      "explanation": "Đáp án đúng là「ませんか」. Cách kết hợp: N を V；địa điểm で V；Vませんか／Vましょう."
    },
    {
      "id": "mnn-06-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Bạn chụp ảnh cùng tôi nhé?\"",
      "options": [
        "真を撮り",
        "ませんか。",
        "一緒に写"
      ],
      "answer": "一緒に写真を撮りませんか。",
      "explanation": "Câu hoàn chỉnh: 一緒に写真を撮りませんか。 (いっしょにしゃしんをとりませんか。). Ý nghĩa: Bạn chụp ảnh cùng tôi nhé?."
    }
  ],
  "mnn-07": [
    {
      "id": "mnn-07-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「で・あげます・もらいます・もう」: 祖母に手紙(___ )書きました。 (Tôi đã viết thư cho bà.)",
      "options": [
        "だけ",
        "のに",
        "ます",
        "を"
      ],
      "answer": "を",
      "explanation": "Áp dụng quy tắc: công cụ／ngôn ngữ で V；người に N を あげる／もらう. で chỉ công cụ hay ngôn ngữ. あげる nhìn từ người trao; もらう nhìn từ người nhận. もう hỏi việc đã hoàn tất."
    },
    {
      "id": "mnn-07-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi đã được anh trai cho một cuốn từ điển mới.\"?",
      "options": [
        "兄に新しい辞書をもらいました。",
        "新しい辞書を兄にもらいました。",
        "兄にもらいました。新しい辞書を",
        "もらいました。兄に新しい辞書を"
      ],
      "answer": "兄に新しい辞書をもらいました。",
      "explanation": "Cấu trúc chuẩn: công cụ／ngôn ngữ で V；người に N を あげる／もらう. Trật tự câu: 兄に新しい辞書をもらいました。."
    },
    {
      "id": "mnn-07-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 兄に新しい辞書 [___] (Tôi đã được anh trai cho một cuốn từ điển mới.)",
      "answer": "を",
      "acceptedAnswers": [
        "を",
        "を"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「を」theo cấu trúc: công cụ／ngôn ngữ で V；người に N を あげる／もらう."
    },
    {
      "id": "mnn-07-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi đã được anh trai cho một cuốn từ điển mới.\"",
      "options": [
        "新しい辞書を",
        "もらいました。",
        "兄に"
      ],
      "answer": "兄に新しい辞書をもらいました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 兄に新しい辞書をもらいました。. Lưu ý: Người nhận dùng に với あげる; người cho dùng に／から với もらう."
    },
    {
      "id": "mnn-07-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「で・あげます・もらいます・もう」được sử dụng với mục đích chính nào?",
      "options": [
        "Công cụ và trao nhận đồ vật",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Công cụ và trao nhận đồ vật"
      ],
      "answer": "Công cụ và trao nhận đồ vật",
      "explanation": "Mẫu ngữ pháp「で・あげます・もらいます・もう」dùng để: Công cụ và trao nhận đồ vật. で chỉ công cụ hay ngôn ngữ. あげる nhìn từ người trao; もらう nhìn từ người nhận. もう hỏi việc đã hoàn tất."
    },
    {
      "id": "mnn-07-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đã viết thư cho bà.\": 祖母に手紙___書きました。",
      "answer": "を",
      "acceptedAnswers": [
        "を"
      ],
      "explanation": "Đáp án đúng là「を」. Cách kết hợp: công cụ／ngôn ngữ で V；người に N を あげる／もらう."
    },
    {
      "id": "mnn-07-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đã viết thư cho bà.\"",
      "options": [
        "紙を書き",
        "ました。",
        "祖母に手"
      ],
      "answer": "祖母に手紙を書きました。",
      "explanation": "Câu hoàn chỉnh: 祖母に手紙を書きました。 (そぼにてがみをかきました。). Ý nghĩa: Tôi đã viết thư cho bà.."
    }
  ],
  "mnn-08": [
    {
      "id": "mnn-08-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「い形容詞・な形容詞・とても・あまり」: ここは静か(___ )町です。 (Đây là một thị trấn yên tĩnh.)",
      "options": [
        "ても",
        "な",
        "のに",
        "容詞"
      ],
      "answer": "な",
      "explanation": "Áp dụng quy tắc: Aい + N；Aな + N；Aくないです；Aではありません. Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な. Phủ định tính từ い bằng くない; tính từ な dùng ではありません."
    },
    {
      "id": "mnn-08-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Phòng này không rộng lắm.\"?",
      "options": [
        "この部屋はあまり広くないです。",
        "はこの部屋あまり広くないです。",
        "この部屋は広くないです。あまり",
        "広くないです。この部屋はあまり"
      ],
      "answer": "この部屋はあまり広くないです。",
      "explanation": "Cấu trúc chuẩn: Aい + N；Aな + N；Aくないです；Aではありません. Trật tự câu: この部屋はあまり広くないです。."
    },
    {
      "id": "mnn-08-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この部屋はあま [___] (Phòng này không rộng lắm.)",
      "answer": "な",
      "acceptedAnswers": [
        "な",
        "な"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「な」theo cấu trúc: Aい + N；Aな + N；Aくないです；Aではありません."
    },
    {
      "id": "mnn-08-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Phòng này không rộng lắm.\"",
      "options": [
        "は",
        "あまり",
        "広くないです。",
        "この部屋"
      ],
      "answer": "この部屋はあまり広くないです。",
      "explanation": "Trật tự ngữ pháp chính xác là: この部屋はあまり広くないです。. Lưu ý: きれい là tính từ な dù kết thúc bằng い. いい đổi thành よくない khi phủ định."
    },
    {
      "id": "mnn-08-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「い形容詞・な形容詞・とても・あまり」được sử dụng với mục đích chính nào?",
      "options": [
        "Mô tả bằng tính từ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mô tả bằng tính từ"
      ],
      "answer": "Mô tả bằng tính từ",
      "explanation": "Mẫu ngữ pháp「い形容詞・な形容詞・とても・あまり」dùng để: Mô tả bằng tính từ. Tính từ い đứng trực tiếp trước danh từ; tính từ な cần な. Phủ định tính từ い bằng くない; tính từ な dùng ではありません."
    },
    {
      "id": "mnn-08-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Đây là một thị trấn yên tĩnh.\": ここは静か___町です。",
      "answer": "な",
      "acceptedAnswers": [
        "な"
      ],
      "explanation": "Đáp án đúng là「な」. Cách kết hợp: Aい + N；Aな + N；Aくないです；Aではありません."
    },
    {
      "id": "mnn-08-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Đây là một thị trấn yên tĩnh.\"",
      "options": [
        "静かな",
        "町です。",
        "ここは"
      ],
      "answer": "ここは静かな町です。",
      "explanation": "Câu hoàn chỉnh: ここは静かな町です。 (ここはしずかなまちです。). Ý nghĩa: Đây là một thị trấn yên tĩnh.."
    }
  ],
  "mnn-09": [
    {
      "id": "mnn-09-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「が好き・が上手・わかる・から」: 妹は料理(___ )上手です。 (Em gái tôi nấu ăn giỏi.)",
      "options": [
        "が",
        "かる",
        "のに",
        "上手"
      ],
      "answer": "が",
      "explanation": "Áp dụng quy tắc: N が 好き／上手です；N が わかります；lý do から kết quả. が giới thiệu đối tượng của sở thích, kỹ năng hoặc hiểu biết. から nối lý do với kết quả hoặc lời giải thích."
    },
    {
      "id": "mnn-09-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Vì hôm nay bận nên tôi sẽ nghỉ ở nhà.\"?",
      "options": [
        "今日は忙しいですから、家で休みます。",
        "忙しいですから、今日は家で休みます。",
        "今日は忙しいですから、休みます。家で",
        "休みます。今日は忙しいですから、家で"
      ],
      "answer": "今日は忙しいですから、家で休みます。",
      "explanation": "Cấu trúc chuẩn: N が 好き／上手です；N が わかります；lý do から kết quả. Trật tự câu: 今日は忙しいですから、家で休みます。."
    },
    {
      "id": "mnn-09-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 今日は忙しいですか [___] (Vì hôm nay bận nên tôi sẽ nghỉ ở nhà.)",
      "answer": "が",
      "acceptedAnswers": [
        "が",
        "が"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「が」theo cấu trúc: N が 好き／上手です；N が わかります；lý do から kết quả."
    },
    {
      "id": "mnn-09-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Vì hôm nay bận nên tôi sẽ nghỉ ở nhà.\"",
      "options": [
        "忙しいですから、",
        "家で",
        "休みます。",
        "今日は"
      ],
      "answer": "今日は忙しいですから、家で休みます。",
      "explanation": "Trật tự ngữ pháp chính xác là: 今日は忙しいですから、家で休みます。. Lưu ý: 好き là tính từ な, không phải động từ; trước から giữ dạng vị ngữ phù hợp."
    },
    {
      "id": "mnn-09-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「が好き・が上手・わかる・から」được sử dụng với mục đích chính nào?",
      "options": [
        "Sở thích, năng lực và lý do",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Sở thích, năng lực và lý do"
      ],
      "answer": "Sở thích, năng lực và lý do",
      "explanation": "Mẫu ngữ pháp「が好き・が上手・わかる・から」dùng để: Sở thích, năng lực và lý do. が giới thiệu đối tượng của sở thích, kỹ năng hoặc hiểu biết. から nối lý do với kết quả hoặc lời giải thích."
    },
    {
      "id": "mnn-09-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Em gái tôi nấu ăn giỏi.\": 妹は料理___上手です。",
      "answer": "が",
      "acceptedAnswers": [
        "が"
      ],
      "explanation": "Đáp án đúng là「が」. Cách kết hợp: N が 好き／上手です；N が わかります；lý do から kết quả."
    },
    {
      "id": "mnn-09-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Em gái tôi nấu ăn giỏi.\"",
      "options": [
        "理が上",
        "手です。",
        "妹は料"
      ],
      "answer": "妹は料理が上手です。",
      "explanation": "Câu hoàn chỉnh: 妹は料理が上手です。 (いもうとはりょうりがじょうずです。). Ý nghĩa: Em gái tôi nấu ăn giỏi.."
    }
  ],
  "mnn-10": [
    {
      "id": "mnn-10-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「あります・います・上・下・隣・や」: 机の下に猫が(___ )。 (Có một con mèo dưới bàn.)",
      "options": [
        "います",
        "のに",
        "ます",
        "上"
      ],
      "answer": "います",
      "explanation": "Áp dụng quy tắc: địa điểm に N が ある／いる；N は địa điểm に ある／いる. あります dùng cho đồ vật và thực vật; います thường dùng cho người, động vật. や liệt kê một số ví dụ không đầy đủ."
    },
    {
      "id": "mnn-10-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Bưu điện ở cạnh ngân hàng.\"?",
      "options": [
        "郵便局は銀行の隣にあります。",
        "は郵便局銀行の隣にあります。",
        "郵便局はあります。銀行の隣に",
        "あります。郵便局は銀行の隣に"
      ],
      "answer": "郵便局は銀行の隣にあります。",
      "explanation": "Cấu trúc chuẩn: địa điểm に N が ある／いる；N は địa điểm に ある／いる. Trật tự câu: 郵便局は銀行の隣にあります。."
    },
    {
      "id": "mnn-10-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 郵便局は銀行の [___] (Bưu điện ở cạnh ngân hàng.)",
      "answer": "います",
      "acceptedAnswers": [
        "います",
        "います"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「います」theo cấu trúc: địa điểm に N が ある／いる；N は địa điểm に ある／いる."
    },
    {
      "id": "mnn-10-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Bưu điện ở cạnh ngân hàng.\"",
      "options": [
        "は",
        "銀行の隣に",
        "あります。",
        "郵便局"
      ],
      "answer": "郵便局は銀行の隣にあります。",
      "explanation": "Trật tự ngữ pháp chính xác là: 郵便局は銀行の隣にあります。. Lưu ý: Phân biệt nơi tồn tại に với nơi thực hiện hành động で."
    },
    {
      "id": "mnn-10-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「あります・います・上・下・隣・や」được sử dụng với mục đích chính nào?",
      "options": [
        "Sự tồn tại và vị trí",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Sự tồn tại và vị trí"
      ],
      "answer": "Sự tồn tại và vị trí",
      "explanation": "Mẫu ngữ pháp「あります・います・上・下・隣・や」dùng để: Sự tồn tại và vị trí. あります dùng cho đồ vật và thực vật; います thường dùng cho người, động vật. や liệt kê một số ví dụ không đầy đủ."
    },
    {
      "id": "mnn-10-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Có một con mèo dưới bàn.\": 机の下に猫が___。",
      "answer": "います",
      "acceptedAnswers": [
        "います"
      ],
      "explanation": "Đáp án đúng là「います」. Cách kết hợp: địa điểm に N が ある／いる；N は địa điểm に ある／いる."
    },
    {
      "id": "mnn-10-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Có một con mèo dưới bàn.\"",
      "options": [
        "に猫が",
        "います。",
        "机の下"
      ],
      "answer": "机の下に猫がいます。",
      "explanation": "Câu hoàn chỉnh: 机の下に猫がいます。 (つくえのしたにねこがいます。). Ý nghĩa: Có một con mèo dưới bàn.."
    }
  ],
  "mnn-11": [
    {
      "id": "mnn-11-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「つ・人・枚・回・ぐらい・だけ」: 週に二(___ )泳ぎます。 (Tôi bơi hai lần mỗi tuần.)",
      "options": [
        "のに",
        "人",
        "回",
        "枚"
      ],
      "answer": "回",
      "explanation": "Áp dụng quy tắc: N を số lượng V；khoảng thời gian に số lần V. Từ đếm chọn theo loại đồ vật; số lượng thường đứng sau danh từ và trợ từ. に nối khoảng thời gian với tần suất."
    },
    {
      "id": "mnn-11-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi đã mua ba quả táo.\"?",
      "options": [
        "りんごを三つ買いました。",
        "三つりんごを買いました。",
        "りんごを買いました。三つ",
        "買いました。りんごを三つ"
      ],
      "answer": "りんごを三つ買いました。",
      "explanation": "Cấu trúc chuẩn: N を số lượng V；khoảng thời gian に số lần V. Trật tự câu: りんごを三つ買いました。."
    },
    {
      "id": "mnn-11-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: りんごを三つ [___] (Tôi đã mua ba quả táo.)",
      "answer": "回",
      "acceptedAnswers": [
        "回",
        "回"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「回」theo cấu trúc: N を số lượng V；khoảng thời gian に số lần V."
    },
    {
      "id": "mnn-11-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi đã mua ba quả táo.\"",
      "options": [
        "三つ",
        "買いました。",
        "りんごを"
      ],
      "answer": "りんごを三つ買いました。",
      "explanation": "Trật tự ngữ pháp chính xác là: りんごを三つ買いました。. Lưu ý: 一人 và 二人 đọc là ひとり, ふたり; không dùng に sau khoảng thời gian chỉ độ dài."
    },
    {
      "id": "mnn-11-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「つ・人・枚・回・ぐらい・だけ」được sử dụng với mục đích chính nào?",
      "options": [
        "Đếm số lượng và tần suất",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Đếm số lượng và tần suất"
      ],
      "answer": "Đếm số lượng và tần suất",
      "explanation": "Mẫu ngữ pháp「つ・人・枚・回・ぐらい・だけ」dùng để: Đếm số lượng và tần suất. Từ đếm chọn theo loại đồ vật; số lượng thường đứng sau danh từ và trợ từ. に nối khoảng thời gian với tần suất."
    },
    {
      "id": "mnn-11-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi bơi hai lần mỗi tuần.\": 週に二___泳ぎます。",
      "answer": "回",
      "acceptedAnswers": [
        "回"
      ],
      "explanation": "Đáp án đúng là「回」. Cách kết hợp: N を số lượng V；khoảng thời gian に số lần V."
    },
    {
      "id": "mnn-11-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi bơi hai lần mỗi tuần.\"",
      "options": [
        "回泳ぎ",
        "ます。",
        "週に二"
      ],
      "answer": "週に二回泳ぎます。",
      "explanation": "Câu hoàn chỉnh: 週に二回泳ぎます。 (しゅうににかいおよぎます。). Ý nghĩa: Tôi bơi hai lần mỗi tuần.."
    }
  ],
  "mnn-12": [
    {
      "id": "mnn-12-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「かった・でした・より・一番」: 今年の冬は去年(___ )寒いです。 (Mùa đông năm nay lạnh hơn năm ngoái.)",
      "options": [
        "した",
        "だけ",
        "のに",
        "より"
      ],
      "answer": "より",
      "explanation": "Áp dụng quy tắc: Aかったです；N／Aな でした；A は B より Aです；nhóm で 一番. Tính từ い đổi い thành かった ở quá khứ. より nêu mốc so sánh; 一番 chọn mức cao nhất trong một nhóm."
    },
    {
      "id": "mnn-12-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Bài thi hôm qua khó.\"?",
      "options": [
        "昨日の試験は難しかったです。",
        "は昨日の試験難しかったです。",
        "昨日の試験はです。難しかった",
        "です。昨日の試験は難しかった"
      ],
      "answer": "昨日の試験は難しかったです。",
      "explanation": "Cấu trúc chuẩn: Aかったです；N／Aな でした；A は B より Aです；nhóm で 一番. Trật tự câu: 昨日の試験は難しかったです。."
    },
    {
      "id": "mnn-12-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 昨日の試験は難 [___] (Bài thi hôm qua khó.)",
      "answer": "より",
      "acceptedAnswers": [
        "より",
        "より"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「より」theo cấu trúc: Aかったです；N／Aな でした；A は B より Aです；nhóm で 一番."
    },
    {
      "id": "mnn-12-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Bài thi hôm qua khó.\"",
      "options": [
        "は",
        "難しかった",
        "です。",
        "昨日の試験"
      ],
      "answer": "昨日の試験は難しかったです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 昨日の試験は難しかったです。. Lưu ý: Quá khứ phủ định của 寒い là 寒くなかった; いい đổi thành よかった."
    },
    {
      "id": "mnn-12-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「かった・でした・より・一番」được sử dụng với mục đích chính nào?",
      "options": [
        "Quá khứ và so sánh",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Quá khứ và so sánh"
      ],
      "answer": "Quá khứ và so sánh",
      "explanation": "Mẫu ngữ pháp「かった・でした・より・一番」dùng để: Quá khứ và so sánh. Tính từ い đổi い thành かった ở quá khứ. より nêu mốc so sánh; 一番 chọn mức cao nhất trong một nhóm."
    },
    {
      "id": "mnn-12-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Mùa đông năm nay lạnh hơn năm ngoái.\": 今年の冬は去年___寒いです。",
      "answer": "より",
      "acceptedAnswers": [
        "より"
      ],
      "explanation": "Đáp án đúng là「より」. Cách kết hợp: Aかったです；N／Aな でした；A は B より Aです；nhóm で 一番."
    },
    {
      "id": "mnn-12-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Mùa đông năm nay lạnh hơn năm ngoái.\"",
      "options": [
        "は去年より",
        "寒いです。",
        "今年の冬"
      ],
      "answer": "今年の冬は去年より寒いです。",
      "explanation": "Câu hoàn chỉnh: 今年の冬は去年より寒いです。 (ことしのふゆはきょねんよりさむいです。). Ý nghĩa: Mùa đông năm nay lạnh hơn năm ngoái.."
    }
  ],
  "mnn-13": [
    {
      "id": "mnn-13-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ほしい・たい・に行く」: 図書館へ本を借り(___ )行きます。 (Tôi đến thư viện để mượn sách.)",
      "options": [
        "たい",
        "に",
        "のに",
        "行く"
      ],
      "answer": "に",
      "explanation": "Áp dụng quy tắc: N が ほしい；V bỏ ます + たい；V bỏ ます／N hoạt động + に行く. ほしい dùng cho đồ vật mong muốn; たい cho việc muốn làm. に sau thân động từ chỉ mục đích di chuyển."
    },
    {
      "id": "mnn-13-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi muốn bơi ở biển vào ngày nghỉ.\"?",
      "options": [
        "休日に海で泳ぎたいです。",
        "海で休日に泳ぎたいです。",
        "休日に海でです。泳ぎたい",
        "です。休日に海で泳ぎたい"
      ],
      "answer": "休日に海で泳ぎたいです。",
      "explanation": "Cấu trúc chuẩn: N が ほしい；V bỏ ます + たい；V bỏ ます／N hoạt động + に行く. Trật tự câu: 休日に海で泳ぎたいです。."
    },
    {
      "id": "mnn-13-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 休日に海で泳 [___] (Tôi muốn bơi ở biển vào ngày nghỉ.)",
      "answer": "に",
      "acceptedAnswers": [
        "に",
        "に"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「に」theo cấu trúc: N が ほしい；V bỏ ます + たい；V bỏ ます／N hoạt động + に行く."
    },
    {
      "id": "mnn-13-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi muốn bơi ở biển vào ngày nghỉ.\"",
      "options": [
        "海で",
        "泳ぎたい",
        "です。",
        "休日に"
      ],
      "answer": "休日に海で泳ぎたいです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 休日に海で泳ぎたいです。. Lưu ý: Không khẳng định trực tiếp mong muốn nội tâm của người thứ ba bằng たい nếu thiếu căn cứ."
    },
    {
      "id": "mnn-13-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ほしい・たい・に行く」được sử dụng với mục đích chính nào?",
      "options": [
        "Mong muốn và mục đích di chuyển",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mong muốn và mục đích di chuyển"
      ],
      "answer": "Mong muốn và mục đích di chuyển",
      "explanation": "Mẫu ngữ pháp「ほしい・たい・に行く」dùng để: Mong muốn và mục đích di chuyển. ほしい dùng cho đồ vật mong muốn; たい cho việc muốn làm. に sau thân động từ chỉ mục đích di chuyển."
    },
    {
      "id": "mnn-13-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đến thư viện để mượn sách.\": 図書館へ本を借り___行きます。",
      "answer": "に",
      "acceptedAnswers": [
        "に"
      ],
      "explanation": "Đáp án đúng là「に」. Cách kết hợp: N が ほしい；V bỏ ます + たい；V bỏ ます／N hoạt động + に行く."
    },
    {
      "id": "mnn-13-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đến thư viện để mượn sách.\"",
      "options": [
        "本を借りに",
        "行きます。",
        "図書館へ"
      ],
      "answer": "図書館へ本を借りに行きます。",
      "explanation": "Câu hoàn chỉnh: 図書館へ本を借りに行きます。 (としょかんへほんをかりにいきます。). Ý nghĩa: Tôi đến thư viện để mượn sách.."
    }
  ],
  "mnn-14": [
    {
      "id": "mnn-14-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「て形・てください・ています・ましょうか」: ここに名前を書い(___ )。 (Xin hãy viết tên vào đây.)",
      "options": [
        "さい",
        "てください",
        "のに",
        "ます"
      ],
      "answer": "てください",
      "explanation": "Áp dụng quy tắc: Vて + ください／います；Vます bỏ ます + ましょうか. Thể て nối yêu cầu hoặc hành động đang diễn ra. Nhóm I: く→いて, ぐ→いで, す→して, むぶぬ→んで, うつる→って; nhóm II bỏ る thêm て."
    },
    {
      "id": "mnn-14-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Em trai tôi đang chơi trong vườn.\"?",
      "options": [
        "弟は今庭で遊んでいます。",
        "今弟は庭で遊んでいます。",
        "弟は今遊んでいます。庭で",
        "遊んでいます。弟は今庭で"
      ],
      "answer": "弟は今庭で遊んでいます。",
      "explanation": "Cấu trúc chuẩn: Vて + ください／います；Vます bỏ ます + ましょうか. Trật tự câu: 弟は今庭で遊んでいます。."
    },
    {
      "id": "mnn-14-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 弟は今庭で遊 [___] (Em trai tôi đang chơi trong vườn.)",
      "answer": "てください",
      "acceptedAnswers": [
        "てください",
        "てください"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「てください」theo cấu trúc: Vて + ください／います；Vます bỏ ます + ましょうか."
    },
    {
      "id": "mnn-14-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Em trai tôi đang chơi trong vườn.\"",
      "options": [
        "今",
        "庭で",
        "遊んでいます。",
        "弟は"
      ],
      "answer": "弟は今庭で遊んでいます。",
      "explanation": "Trật tự ngữ pháp chính xác là: 弟は今庭で遊んでいます。. Lưu ý: 行く→行って là ngoại lệ; する→して, 来る→来て."
    },
    {
      "id": "mnn-14-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「て形・てください・ています・ましょうか」được sử dụng với mục đích chính nào?",
      "options": [
        "Thể て, yêu cầu và đang làm",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thể て, yêu cầu và đang làm"
      ],
      "answer": "Thể て, yêu cầu và đang làm",
      "explanation": "Mẫu ngữ pháp「て形・てください・ています・ましょうか」dùng để: Thể て, yêu cầu và đang làm. Thể て nối yêu cầu hoặc hành động đang diễn ra. Nhóm I: く→いて, ぐ→いで, す→して, むぶぬ→んで, うつる→って; nhóm II bỏ る thêm て."
    },
    {
      "id": "mnn-14-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Xin hãy viết tên vào đây.\": ここに名前を書い___。",
      "answer": "てください",
      "acceptedAnswers": [
        "てください"
      ],
      "explanation": "Đáp án đúng là「てください」. Cách kết hợp: Vて + ください／います；Vます bỏ ます + ましょうか."
    },
    {
      "id": "mnn-14-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Xin hãy viết tên vào đây.\"",
      "options": [
        "前を書いて",
        "ください。",
        "ここに名"
      ],
      "answer": "ここに名前を書いてください。",
      "explanation": "Câu hoàn chỉnh: ここに名前を書いてください。 (ここになまえをかいてください。). Ý nghĩa: Xin hãy viết tên vào đây.."
    }
  ],
  "mnn-15": [
    {
      "id": "mnn-15-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「てもいい・てはいけない・ている」: この席に座っ(___ )ですか。 (Tôi ngồi ở ghế này được không?)",
      "options": [
        "いる",
        "てもいい",
        "ない",
        "のに"
      ],
      "answer": "てもいい",
      "explanation": "Áp dụng quy tắc: Vてもいいです；Vてはいけません；Vています. てもいい cho phép; てはいけない cấm làm. ている còn chỉ trạng thái như đang sống, có gia đình hoặc làm nghề."
    },
    {
      "id": "mnn-15-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Không được chụp ảnh ở đây.\"?",
      "options": [
        "ここで写真を撮ってはいけません。",
        "写真をここで撮ってはいけません。",
        "ここで写真をいけません。撮っては",
        "いけません。ここで写真を撮っては"
      ],
      "answer": "ここで写真を撮ってはいけません。",
      "explanation": "Cấu trúc chuẩn: Vてもいいです；Vてはいけません；Vています. Trật tự câu: ここで写真を撮ってはいけません。."
    },
    {
      "id": "mnn-15-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: ここで写真を撮っ [___] (Không được chụp ảnh ở đây.)",
      "answer": "てもいい",
      "acceptedAnswers": [
        "てもいい",
        "てもいい"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「てもいい」theo cấu trúc: Vてもいいです；Vてはいけません；Vています."
    },
    {
      "id": "mnn-15-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Không được chụp ảnh ở đây.\"",
      "options": [
        "写真を",
        "撮っては",
        "いけません。",
        "ここで"
      ],
      "answer": "ここで写真を撮ってはいけません。",
      "explanation": "Trật tự ngữ pháp chính xác là: ここで写真を撮ってはいけません。. Lưu ý: 知っています phủ định thành 知りません trong cách nói thông thường."
    },
    {
      "id": "mnn-15-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「てもいい・てはいけない・ている」được sử dụng với mục đích chính nào?",
      "options": [
        "Cho phép, cấm và trạng thái",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Cho phép, cấm và trạng thái"
      ],
      "answer": "Cho phép, cấm và trạng thái",
      "explanation": "Mẫu ngữ pháp「てもいい・てはいけない・ている」dùng để: Cho phép, cấm và trạng thái. てもいい cho phép; てはいけない cấm làm. ている còn chỉ trạng thái như đang sống, có gia đình hoặc làm nghề."
    },
    {
      "id": "mnn-15-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi ngồi ở ghế này được không?\": この席に座っ___ですか。",
      "answer": "てもいい",
      "acceptedAnswers": [
        "てもいい"
      ],
      "explanation": "Đáp án đúng là「てもいい」. Cách kết hợp: Vてもいいです；Vてはいけません；Vています."
    },
    {
      "id": "mnn-15-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi ngồi ở ghế này được không?\"",
      "options": [
        "座ってもい",
        "いですか。",
        "この席に"
      ],
      "answer": "この席に座ってもいいですか。",
      "explanation": "Câu hoàn chỉnh: この席に座ってもいいですか。 (このせきにすわってもいいですか。). Ý nghĩa: Tôi ngồi ở ghế này được không?."
    }
  ],
  "mnn-16": [
    {
      "id": "mnn-16-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「て、て・てから・くて・で」: 手を洗っ(___ )料理します。 (Tôi rửa tay rồi mới nấu ăn.)",
      "options": [
        "から",
        "くて",
        "てから",
        "のに"
      ],
      "answer": "てから",
      "explanation": "Áp dụng quy tắc: Vて V；Vてから V；Aい→くて；Aな／N + で. て nối các hành động hoặc đặc điểm; てから nhấn mạnh việc trước hoàn tất rồi mới đến việc sau."
    },
    {
      "id": "mnn-16-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cửa hàng này rẻ và tiện.\"?",
      "options": [
        "この店は安くて、便利です。",
        "安くて、この店は便利です。",
        "この店は安くて、です。便利",
        "です。この店は安くて、便利"
      ],
      "answer": "この店は安くて、便利です。",
      "explanation": "Cấu trúc chuẩn: Vて V；Vてから V；Aい→くて；Aな／N + で. Trật tự câu: この店は安くて、便利です。."
    },
    {
      "id": "mnn-16-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この店は安く [___] (Cửa hàng này rẻ và tiện.)",
      "answer": "てから",
      "acceptedAnswers": [
        "てから",
        "てから"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「てから」theo cấu trúc: Vて V；Vてから V；Aい→くて；Aな／N + で."
    },
    {
      "id": "mnn-16-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cửa hàng này rẻ và tiện.\"",
      "options": [
        "安くて、",
        "便利",
        "です。",
        "この店は"
      ],
      "answer": "この店は安くて、便利です。",
      "explanation": "Trật tự ngữ pháp chính xác là: この店は安くて、便利です。. Lưu ý: Không dùng dạng て để nối trực tiếp hai nhận xét đối lập; có thể dùng が."
    },
    {
      "id": "mnn-16-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「て、て・てから・くて・で」được sử dụng với mục đích chính nào?",
      "options": [
        "Nối hành động và tính chất",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nối hành động và tính chất"
      ],
      "answer": "Nối hành động và tính chất",
      "explanation": "Mẫu ngữ pháp「て、て・てから・くて・で」dùng để: Nối hành động và tính chất. て nối các hành động hoặc đặc điểm; てから nhấn mạnh việc trước hoàn tất rồi mới đến việc sau."
    },
    {
      "id": "mnn-16-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi rửa tay rồi mới nấu ăn.\": 手を洗っ___料理します。",
      "answer": "てから",
      "acceptedAnswers": [
        "てから"
      ],
      "explanation": "Đáp án đúng là「てから」. Cách kết hợp: Vて V；Vてから V；Aい→くて；Aな／N + で."
    },
    {
      "id": "mnn-16-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi rửa tay rồi mới nấu ăn.\"",
      "options": [
        "てから料",
        "理します。",
        "手を洗っ"
      ],
      "answer": "手を洗ってから料理します。",
      "explanation": "Câu hoàn chỉnh: 手を洗ってから料理します。 (てをあらってからりょうりします。). Ý nghĩa: Tôi rửa tay rồi mới nấu ăn.."
    }
  ],
  "mnn-17": [
    {
      "id": "mnn-17-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ない形・ないで・なければならない・なくてもいい」: 明日は来(___ )です。 (Ngày mai bạn không cần đến.)",
      "options": [
        "いで",
        "ない",
        "なくてもいい",
        "のに"
      ],
      "answer": "なくてもいい",
      "explanation": "Áp dụng quy tắc: Vないでください；Vなければなりません；Vなくてもいい. Nhóm I đổi âm u sang a rồi thêm ない; う→わない. Nhóm II bỏ る thêm ない. なければならない là bắt buộc; なくてもいい là không cần."
    },
    {
      "id": "mnn-17-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Ở đây phải cởi giày.\"?",
      "options": [
        "ここで靴を脱がなければなりません。",
        "靴をここで脱がなければなりません。",
        "ここで靴をなりません。脱がなければ",
        "なりません。ここで靴を脱がなければ"
      ],
      "answer": "ここで靴を脱がなければなりません。",
      "explanation": "Cấu trúc chuẩn: Vないでください；Vなければなりません；Vなくてもいい. Trật tự câu: ここで靴を脱がなければなりません。."
    },
    {
      "id": "mnn-17-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: ここで靴を脱がな [___] (Ở đây phải cởi giày.)",
      "answer": "なくてもいい",
      "acceptedAnswers": [
        "なくてもいい",
        "なくてもいい"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「なくてもいい」theo cấu trúc: Vないでください；Vなければなりません；Vなくてもいい."
    },
    {
      "id": "mnn-17-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Ở đây phải cởi giày.\"",
      "options": [
        "靴を",
        "脱がなければ",
        "なりません。",
        "ここで"
      ],
      "answer": "ここで靴を脱がなければなりません。",
      "explanation": "Trật tự ngữ pháp chính xác là: ここで靴を脱がなければなりません。. Lưu ý: する→しない, 来る→こない, ある→ない; không nhầm không cần với không được."
    },
    {
      "id": "mnn-17-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ない形・ないで・なければならない・なくてもいい」được sử dụng với mục đích chính nào?",
      "options": [
        "Thể ない, nghĩa vụ và miễn trừ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thể ない, nghĩa vụ và miễn trừ"
      ],
      "answer": "Thể ない, nghĩa vụ và miễn trừ",
      "explanation": "Mẫu ngữ pháp「ない形・ないで・なければならない・なくてもいい」dùng để: Thể ない, nghĩa vụ và miễn trừ. Nhóm I đổi âm u sang a rồi thêm ない; う→わない. Nhóm II bỏ る thêm ない. なければならない là bắt buộc; なくてもいい là không cần."
    },
    {
      "id": "mnn-17-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Ngày mai bạn không cần đến.\": 明日は来___です。",
      "answer": "なくてもいい",
      "acceptedAnswers": [
        "なくてもいい"
      ],
      "explanation": "Đáp án đúng là「なくてもいい」. Cách kết hợp: Vないでください；Vなければなりません；Vなくてもいい."
    },
    {
      "id": "mnn-17-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Ngày mai bạn không cần đến.\"",
      "options": [
        "なくても",
        "いいです。",
        "明日は来"
      ],
      "answer": "明日は来なくてもいいです。",
      "explanation": "Câu hoàn chỉnh: 明日は来なくてもいいです。 (あしたはこなくてもいいです。). Ý nghĩa: Ngày mai bạn không cần đến.."
    }
  ],
  "mnn-18": [
    {
      "id": "mnn-18-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「辞書形・ことができる・趣味・前に」: 寝る(___ )日記を書きます。 (Tôi viết nhật ký trước khi ngủ.)",
      "options": [
        "きる",
        "のに",
        "前に",
        "趣味"
      ],
      "answer": "前に",
      "explanation": "Áp dụng quy tắc: V từ điển + ことができる／前に；N の前に；thời lượng 前に. ことができる diễn đạt khả năng; Vこと biến hành động thành danh từ. 前に đặt hành động sau nó xảy ra trước hành động ở mệnh đề đầu."
    },
    {
      "id": "mnn-18-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi có thể đọc một trăm chữ Kanji.\"?",
      "options": [
        "私は漢字を百字読むことができます。",
        "漢字を私は百字読むことができます。",
        "私は漢字を読むことができます。百字",
        "読むことができます。私は漢字を百字"
      ],
      "answer": "私は漢字を百字読むことができます。",
      "explanation": "Cấu trúc chuẩn: V từ điển + ことができる／前に；N の前に；thời lượng 前に. Trật tự câu: 私は漢字を百字読むことができます。."
    },
    {
      "id": "mnn-18-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 私は漢字を百字読 [___] (Tôi có thể đọc một trăm chữ Kanji.)",
      "answer": "前に",
      "acceptedAnswers": [
        "前に",
        "前に"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「前に」theo cấu trúc: V từ điển + ことができる／前に；N の前に；thời lượng 前に."
    },
    {
      "id": "mnn-18-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi có thể đọc một trăm chữ Kanji.\"",
      "options": [
        "漢字を",
        "百字",
        "読むことができます。",
        "私は"
      ],
      "answer": "私は漢字を百字読むことができます。",
      "explanation": "Trật tự ngữ pháp chính xác là: 私は漢字を百字読むことができます。. Lưu ý: Trước 前に dùng thể từ điển dù toàn câu nói về quá khứ."
    },
    {
      "id": "mnn-18-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「辞書形・ことができる・趣味・前に」được sử dụng với mục đích chính nào?",
      "options": [
        "Thể từ điển, khả năng và trước khi",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thể từ điển, khả năng và trước khi"
      ],
      "answer": "Thể từ điển, khả năng và trước khi",
      "explanation": "Mẫu ngữ pháp「辞書形・ことができる・趣味・前に」dùng để: Thể từ điển, khả năng và trước khi. ことができる diễn đạt khả năng; Vこと biến hành động thành danh từ. 前に đặt hành động sau nó xảy ra trước hành động ở mệnh đề đầu."
    },
    {
      "id": "mnn-18-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi viết nhật ký trước khi ngủ.\": 寝る___日記を書きます。",
      "answer": "前に",
      "acceptedAnswers": [
        "前に"
      ],
      "explanation": "Đáp án đúng là「前に」. Cách kết hợp: V từ điển + ことができる／前に；N の前に；thời lượng 前に."
    },
    {
      "id": "mnn-18-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi viết nhật ký trước khi ngủ.\"",
      "options": [
        "日記を書",
        "きます。",
        "寝る前に"
      ],
      "answer": "寝る前に日記を書きます。",
      "explanation": "Câu hoàn chỉnh: 寝る前に日記を書きます。 (ねるまえににっきをかきます。). Ý nghĩa: Tôi viết nhật ký trước khi ngủ.."
    }
  ],
  "mnn-19": [
    {
      "id": "mnn-19-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「た形・たことがある・たり・なる」: 北海道へ行った(___ )。 (Tôi từng đến Hokkaido.)",
      "options": [
        "ある",
        "ことがあります",
        "たり",
        "のに"
      ],
      "answer": "ことがあります",
      "explanation": "Áp dụng quy tắc: Vたことがある；Vたり Vたりする；Aく／Aに／Nに + なる. Thể た theo quy tắc âm của thể て. たことがある nói kinh nghiệm; たり liệt kê ví dụ hành động; なる diễn tả thay đổi."
    },
    {
      "id": "mnn-19-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Ngày nghỉ tôi làm những việc như dọn dẹp và nấu ăn.\"?",
      "options": [
        "休みの日は掃除したり料理したりします。",
        "掃除したり休みの日は料理したりします。",
        "休みの日は掃除したりします。料理したり",
        "します。休みの日は掃除したり料理したり"
      ],
      "answer": "休みの日は掃除したり料理したりします。",
      "explanation": "Cấu trúc chuẩn: Vたことがある；Vたり Vたりする；Aく／Aに／Nに + なる. Trật tự câu: 休みの日は掃除したり料理したりします。."
    },
    {
      "id": "mnn-19-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 休みの日は掃除した [___] (Ngày nghỉ tôi làm những việc như dọn dẹp và nấu ăn.)",
      "answer": "ことがあります",
      "acceptedAnswers": [
        "ことがあります",
        "ことがあります"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ことがあります」theo cấu trúc: Vたことがある；Vたり Vたりする；Aく／Aに／Nに + なる."
    },
    {
      "id": "mnn-19-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Ngày nghỉ tôi làm những việc như dọn dẹp và nấu ăn.\"",
      "options": [
        "掃除したり",
        "料理したり",
        "します。",
        "休みの日は"
      ],
      "answer": "休みの日は掃除したり料理したりします。",
      "explanation": "Trật tự ngữ pháp chính xác là: 休みの日は掃除したり料理したりします。. Lưu ý: たり không mô tả thứ tự chặt chẽ; kết thúc chuỗi bằng する hoặc dạng chia phù hợp."
    },
    {
      "id": "mnn-19-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「た形・たことがある・たり・なる」được sử dụng với mục đích chính nào?",
      "options": [
        "Thể た, trải nghiệm và thay đổi",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thể た, trải nghiệm và thay đổi"
      ],
      "answer": "Thể た, trải nghiệm và thay đổi",
      "explanation": "Mẫu ngữ pháp「た形・たことがある・たり・なる」dùng để: Thể た, trải nghiệm và thay đổi. Thể た theo quy tắc âm của thể て. たことがある nói kinh nghiệm; たり liệt kê ví dụ hành động; なる diễn tả thay đổi."
    },
    {
      "id": "mnn-19-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi từng đến Hokkaido.\": 北海道へ行った___。",
      "answer": "ことがあります",
      "acceptedAnswers": [
        "ことがあります"
      ],
      "explanation": "Đáp án đúng là「ことがあります」. Cách kết hợp: Vたことがある；Vたり Vたりする；Aく／Aに／Nに + なる."
    },
    {
      "id": "mnn-19-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi từng đến Hokkaido.\"",
      "options": [
        "ったことが",
        "あります。",
        "北海道へ行"
      ],
      "answer": "北海道へ行ったことがあります。",
      "explanation": "Câu hoàn chỉnh: 北海道へ行ったことがあります。 (ほっかいどうへいったことがあります。). Ý nghĩa: Tôi từng đến Hokkaido.."
    }
  ],
  "mnn-20": [
    {
      "id": "mnn-20-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「普通形・だ・じゃない・だった」: 昨日の映画は面白(___ )。 (Bộ phim hôm qua thú vị.)",
      "options": [
        "かった",
        "だ",
        "ない",
        "のに"
      ],
      "answer": "かった",
      "explanation": "Áp dụng quy tắc: V từ điển／ない／た／なかった；N／Aな + だ／じゃない／だった. Thể thông thường được dùng giữa người thân và trong nhiều cấu trúc ghép. Phải chọn đúng dạng theo động từ, tính từ hay danh từ."
    },
    {
      "id": "mnn-20-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Ngày mai tôi không đến trường.\"?",
      "options": [
        "明日は学校へ行かない。",
        "学校へ明日は行かない。",
        "明日は行かない。学校へ",
        "行かない。明日は学校へ"
      ],
      "answer": "明日は学校へ行かない。",
      "explanation": "Cấu trúc chuẩn: V từ điển／ない／た／なかった；N／Aな + だ／じゃない／だった. Trật tự câu: 明日は学校へ行かない。."
    },
    {
      "id": "mnn-20-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 明日は学校 [___] (Ngày mai tôi không đến trường.)",
      "answer": "かった",
      "acceptedAnswers": [
        "かった",
        "かった"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「かった」theo cấu trúc: V từ điển／ない／た／なかった；N／Aな + だ／じゃない／だった."
    },
    {
      "id": "mnn-20-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Ngày mai tôi không đến trường.\"",
      "options": [
        "学校へ",
        "行かない。",
        "明日は"
      ],
      "answer": "明日は学校へ行かない。",
      "explanation": "Trật tự ngữ pháp chính xác là: 明日は学校へ行かない。. Lưu ý: Tính từ い không thêm だ: 高い, không phải 高いだ."
    },
    {
      "id": "mnn-20-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「普通形・だ・じゃない・だった」được sử dụng với mục đích chính nào?",
      "options": [
        "Thể thông thường trong hội thoại",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thể thông thường trong hội thoại"
      ],
      "answer": "Thể thông thường trong hội thoại",
      "explanation": "Mẫu ngữ pháp「普通形・だ・じゃない・だった」dùng để: Thể thông thường trong hội thoại. Thể thông thường được dùng giữa người thân và trong nhiều cấu trúc ghép. Phải chọn đúng dạng theo động từ, tính từ hay danh từ."
    },
    {
      "id": "mnn-20-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Bộ phim hôm qua thú vị.\": 昨日の映画は面白___。",
      "answer": "かった",
      "acceptedAnswers": [
        "かった"
      ],
      "explanation": "Đáp án đúng là「かった」. Cách kết hợp: V từ điển／ない／た／なかった；N／Aな + だ／じゃない／だった."
    },
    {
      "id": "mnn-20-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Bộ phim hôm qua thú vị.\"",
      "options": [
        "画は面白",
        "かった。",
        "昨日の映"
      ],
      "answer": "昨日の映画は面白かった。",
      "explanation": "Câu hoàn chỉnh: 昨日の映画は面白かった。 (きのうのえいがはおもしろかった。). Ý nghĩa: Bộ phim hôm qua thú vị.."
    }
  ],
  "mnn-21": [
    {
      "id": "mnn-21-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「と思う・と言う・でしょう」: この方法は便利だ(___ )。 (Tôi nghĩ cách này tiện.)",
      "options": [
        "と思います",
        "のに",
        "ょう",
        "言う"
      ],
      "answer": "と思います",
      "explanation": "Áp dụng quy tắc: thể thông thường + と思う／と言う；câu + でしょう. と思う đánh dấu ý kiến của người nói; と言う trích nội dung phát ngôn. でしょう với ngữ điệu phù hợp có thể yêu cầu xác nhận."
    },
    {
      "id": "mnn-21-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Thầy cô nói ngày mai được nghỉ.\"?",
      "options": [
        "先生は明日は休みだと言いました。",
        "明日は休みだ先生はと言いました。",
        "先生は明日は休みだ言いました。と",
        "言いました。先生は明日は休みだと"
      ],
      "answer": "先生は明日は休みだと言いました。",
      "explanation": "Cấu trúc chuẩn: thể thông thường + と思う／と言う；câu + でしょう. Trật tự câu: 先生は明日は休みだと言いました。."
    },
    {
      "id": "mnn-21-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 先生は明日は休み [___] (Thầy cô nói ngày mai được nghỉ.)",
      "answer": "と思います",
      "acceptedAnswers": [
        "と思います",
        "と思います"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「と思います」theo cấu trúc: thể thông thường + と思う／と言う；câu + でしょう."
    },
    {
      "id": "mnn-21-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Thầy cô nói ngày mai được nghỉ.\"",
      "options": [
        "明日は休みだ",
        "と",
        "言いました。",
        "先生は"
      ],
      "answer": "先生は明日は休みだと言いました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 先生は明日は休みだと言いました。. Lưu ý: Trước と giữ だ của danh từ và tính từ な khi cần: 便利だと思う."
    },
    {
      "id": "mnn-21-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「と思う・と言う・でしょう」được sử dụng với mục đích chính nào?",
      "options": [
        "Ý kiến, trích lời và xác nhận",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Ý kiến, trích lời và xác nhận"
      ],
      "answer": "Ý kiến, trích lời và xác nhận",
      "explanation": "Mẫu ngữ pháp「と思う・と言う・でしょう」dùng để: Ý kiến, trích lời và xác nhận. と思う đánh dấu ý kiến của người nói; と言う trích nội dung phát ngôn. でしょう với ngữ điệu phù hợp có thể yêu cầu xác nhận."
    },
    {
      "id": "mnn-21-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi nghĩ cách này tiện.\": この方法は便利だ___。",
      "answer": "と思います",
      "acceptedAnswers": [
        "と思います"
      ],
      "explanation": "Đáp án đúng là「と思います」. Cách kết hợp: thể thông thường + と思う／と言う；câu + でしょう."
    },
    {
      "id": "mnn-21-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi nghĩ cách này tiện.\"",
      "options": [
        "は便利だと",
        "思います。",
        "この方法"
      ],
      "answer": "この方法は便利だと思います。",
      "explanation": "Câu hoàn chỉnh: この方法は便利だと思います。 (このほうほうはべんりだとおもいます。). Ý nghĩa: Tôi nghĩ cách này tiện.."
    }
  ],
  "mnn-22": [
    {
      "id": "mnn-22-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「普通形＋名詞」: 昨日買っ(___ )本を読みます。 (Tôi đọc cuốn sách đã mua hôm qua.)",
      "options": [
        "た",
        "だけ",
        "のに",
        "名詞"
      ],
      "answer": "た",
      "explanation": "Áp dụng quy tắc: V thể thông thường + N；Aい + N；Aな + N；NのN. Đặt mệnh đề mô tả trước danh từ. Chủ thể bên trong mệnh đề thường dùng が; không chèn の giữa động từ và danh từ."
    },
    {
      "id": "mnn-22-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Người đang nói chuyện ở đằng kia là anh trai tôi.\"?",
      "options": [
        "あそこで話している人は兄です。",
        "話している人あそこでは兄です。",
        "あそこで話している人兄です。は",
        "兄です。あそこで話している人は"
      ],
      "answer": "あそこで話している人は兄です。",
      "explanation": "Cấu trúc chuẩn: V thể thông thường + N；Aい + N；Aな + N；NのN. Trật tự câu: あそこで話している人は兄です。."
    },
    {
      "id": "mnn-22-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: あそこで話して [___] (Người đang nói chuyện ở đằng kia là anh trai tôi.)",
      "answer": "た",
      "acceptedAnswers": [
        "た",
        "た"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「た」theo cấu trúc: V thể thông thường + N；Aい + N；Aな + N；NのN."
    },
    {
      "id": "mnn-22-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Người đang nói chuyện ở đằng kia là anh trai tôi.\"",
      "options": [
        "話している人",
        "は",
        "兄です。",
        "あそこで"
      ],
      "answer": "あそこで話している人は兄です。",
      "explanation": "Trật tự ngữ pháp chính xác là: あそこで話している人は兄です。. Lưu ý: Thời của động từ bổ nghĩa mô tả quan hệ thời gian, không nhất thiết giống vị ngữ cuối câu."
    },
    {
      "id": "mnn-22-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「普通形＋名詞」được sử dụng với mục đích chính nào?",
      "options": [
        "Mệnh đề bổ nghĩa cho danh từ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mệnh đề bổ nghĩa cho danh từ"
      ],
      "answer": "Mệnh đề bổ nghĩa cho danh từ",
      "explanation": "Mẫu ngữ pháp「普通形＋名詞」dùng để: Mệnh đề bổ nghĩa cho danh từ. Đặt mệnh đề mô tả trước danh từ. Chủ thể bên trong mệnh đề thường dùng が; không chèn の giữa động từ và danh từ."
    },
    {
      "id": "mnn-22-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đọc cuốn sách đã mua hôm qua.\": 昨日買っ___本を読みます。",
      "answer": "た",
      "acceptedAnswers": [
        "た"
      ],
      "explanation": "Đáp án đúng là「た」. Cách kết hợp: V thể thông thường + N；Aい + N；Aな + N；NのN."
    },
    {
      "id": "mnn-22-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đọc cuốn sách đã mua hôm qua.\"",
      "options": [
        "た本を読",
        "みます。",
        "昨日買っ"
      ],
      "answer": "昨日買った本を読みます。",
      "explanation": "Câu hoàn chỉnh: 昨日買った本を読みます。 (きのうかったほんをよみます。). Ý nghĩa: Tôi đọc cuốn sách đã mua hôm qua.."
    }
  ],
  "mnn-23": [
    {
      "id": "mnn-23-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「とき・と」: このボタンを押す(___ )ドアが開きます。 (Bấm nút này thì cửa mở.)",
      "options": [
        "だけ",
        "と",
        "とき",
        "のに"
      ],
      "answer": "と",
      "explanation": "Áp dụng quy tắc: V thường／Aい + とき；Aなとき／Nのとき；V từ điển + と. とき xác định hoàn cảnh thời gian. と nối điều kiện với kết quả thường xuyên, tất yếu hoặc hoạt động máy móc."
    },
    {
      "id": "mnn-23-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Khi không biết đường, tôi hỏi người khác.\"?",
      "options": [
        "道がわからないとき、人に聞きます。",
        "わからないとき、道が人に聞きます。",
        "道がわからないとき、聞きます。人に",
        "聞きます。道がわからないとき、人に"
      ],
      "answer": "道がわからないとき、人に聞きます。",
      "explanation": "Cấu trúc chuẩn: V thường／Aい + とき；Aなとき／Nのとき；V từ điển + と. Trật tự câu: 道がわからないとき、人に聞きます。."
    },
    {
      "id": "mnn-23-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 道がわからないと [___] (Khi không biết đường, tôi hỏi người khác.)",
      "answer": "と",
      "acceptedAnswers": [
        "と",
        "と"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「と」theo cấu trúc: V thường／Aい + とき；Aなとき／Nのとき；V từ điển + と."
    },
    {
      "id": "mnn-23-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Khi không biết đường, tôi hỏi người khác.\"",
      "options": [
        "わからないとき、",
        "人に",
        "聞きます。",
        "道が"
      ],
      "answer": "道がわからないとき、人に聞きます。",
      "explanation": "Trật tự ngữ pháp chính xác là: 道がわからないとき、人に聞きます。. Lưu ý: Sau と mang nghĩa điều kiện tự nhiên thường không dùng lời mời, ý chí hoặc mệnh lệnh."
    },
    {
      "id": "mnn-23-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「とき・と」được sử dụng với mục đích chính nào?",
      "options": [
        "Khi nào và kết quả tự nhiên",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Khi nào và kết quả tự nhiên"
      ],
      "answer": "Khi nào và kết quả tự nhiên",
      "explanation": "Mẫu ngữ pháp「とき・と」dùng để: Khi nào và kết quả tự nhiên. とき xác định hoàn cảnh thời gian. と nối điều kiện với kết quả thường xuyên, tất yếu hoặc hoạt động máy móc."
    },
    {
      "id": "mnn-23-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Bấm nút này thì cửa mở.\": このボタンを押す___ドアが開きます。",
      "answer": "と",
      "acceptedAnswers": [
        "と"
      ],
      "explanation": "Đáp án đúng là「と」. Cách kết hợp: V thường／Aい + とき；Aなとき／Nのとき；V từ điển + と."
    },
    {
      "id": "mnn-23-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Bấm nút này thì cửa mở.\"",
      "options": [
        "を押すとドア",
        "が開きます。",
        "このボタン"
      ],
      "answer": "このボタンを押すとドアが開きます。",
      "explanation": "Câu hoàn chỉnh: このボタンを押すとドアが開きます。 (このぼたんをおすとどあがあきます。). Ý nghĩa: Bấm nút này thì cửa mở.."
    }
  ],
  "mnn-24": [
    {
      "id": "mnn-24-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「くれる・てあげる・てもらう・てくれる」: 友達が荷物を持っ(___ )。 (Bạn đã mang hành lý giúp tôi.)",
      "options": [
        "げる",
        "てくれました",
        "のに",
        "らう"
      ],
      "answer": "てくれました",
      "explanation": "Áp dụng quy tắc: Vてあげる／Vてもらう／Vてくれる. てくれる nhìn việc người khác làm cho phía mình; てもらう nhìn từ người nhận sự giúp đỡ; てあげる nhìn từ người giúp."
    },
    {
      "id": "mnn-24-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi nhờ chị xem bài văn giúp.\"?",
      "options": [
        "私は姉に作文を見てもらいました。",
        "姉に私は作文を見てもらいました。",
        "私は姉に見てもらいました。作文を",
        "見てもらいました。私は姉に作文を"
      ],
      "answer": "私は姉に作文を見てもらいました。",
      "explanation": "Cấu trúc chuẩn: Vてあげる／Vてもらう／Vてくれる. Trật tự câu: 私は姉に作文を見てもらいました。."
    },
    {
      "id": "mnn-24-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 私は姉に作文を見 [___] (Tôi nhờ chị xem bài văn giúp.)",
      "answer": "てくれました",
      "acceptedAnswers": [
        "てくれました",
        "てくれました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「てくれました」theo cấu trúc: Vてあげる／Vてもらう／Vてくれる."
    },
    {
      "id": "mnn-24-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi nhờ chị xem bài văn giúp.\"",
      "options": [
        "姉に",
        "作文を",
        "見てもらいました。",
        "私は"
      ],
      "answer": "私は姉に作文を見てもらいました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 私は姉に作文を見てもらいました。. Lưu ý: Cần xác định người làm và người hưởng lợi; tránh てあげる trực tiếp với cấp trên vì có thể tỏ vẻ ban ơn."
    },
    {
      "id": "mnn-24-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「くれる・てあげる・てもらう・てくれる」được sử dụng với mục đích chính nào?",
      "options": [
        "Trao nhận sự giúp đỡ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Trao nhận sự giúp đỡ"
      ],
      "answer": "Trao nhận sự giúp đỡ",
      "explanation": "Mẫu ngữ pháp「くれる・てあげる・てもらう・てくれる」dùng để: Trao nhận sự giúp đỡ. てくれる nhìn việc người khác làm cho phía mình; てもらう nhìn từ người nhận sự giúp đỡ; てあげる nhìn từ người giúp."
    },
    {
      "id": "mnn-24-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Bạn đã mang hành lý giúp tôi.\": 友達が荷物を持っ___。",
      "answer": "てくれました",
      "acceptedAnswers": [
        "てくれました"
      ],
      "explanation": "Đáp án đúng là「てくれました」. Cách kết hợp: Vてあげる／Vてもらう／Vてくれる."
    },
    {
      "id": "mnn-24-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Bạn đã mang hành lý giúp tôi.\"",
      "options": [
        "を持ってく",
        "れました。",
        "友達が荷物"
      ],
      "answer": "友達が荷物を持ってくれました。",
      "explanation": "Câu hoàn chỉnh: 友達が荷物を持ってくれました。 (ともだちがにもつをもってくれました。). Ý nghĩa: Bạn đã mang hành lý giúp tôi.."
    }
  ],
  "mnn-25": [
    {
      "id": "mnn-25-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「たら・ても」: 雨が降っ(___ )試合をします。 (Dù trời mưa vẫn tổ chức trận đấu.)",
      "options": [
        "だけ",
        "たら",
        "ても",
        "のに"
      ],
      "answer": "ても",
      "explanation": "Áp dụng quy tắc: thể quá khứ thường + ら；Vて／Aくて／Nで + も. たら diễn đạt giả định hoặc sau khi một việc xảy ra. ても cho biết kết quả vẫn giữ dù điều kiện bất lợi xuất hiện."
    },
    {
      "id": "mnn-25-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Khi xong việc hãy gọi điện nhé.\"?",
      "options": [
        "仕事が終わったら、電話してください。",
        "終わったら、仕事が電話してください。",
        "仕事が終わったら、ください。電話して",
        "ください。仕事が終わったら、電話して"
      ],
      "answer": "仕事が終わったら、電話してください。",
      "explanation": "Cấu trúc chuẩn: thể quá khứ thường + ら；Vて／Aくて／Nで + も. Trật tự câu: 仕事が終わったら、電話してください。."
    },
    {
      "id": "mnn-25-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 仕事が終わったら、 [___] (Khi xong việc hãy gọi điện nhé.)",
      "answer": "ても",
      "acceptedAnswers": [
        "ても",
        "ても"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ても」theo cấu trúc: thể quá khứ thường + ら；Vて／Aくて／Nで + も."
    },
    {
      "id": "mnn-25-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Khi xong việc hãy gọi điện nhé.\"",
      "options": [
        "終わったら、",
        "電話して",
        "ください。",
        "仕事が"
      ],
      "answer": "仕事が終わったら、電話してください。",
      "explanation": "Trật tự ngữ pháp chính xác là: 仕事が終わったら、電話してください。. Lưu ý: N／Aな dùng だったら và でも; không ghép danh từ trực tiếp với たら."
    },
    {
      "id": "mnn-25-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「たら・ても」được sử dụng với mục đích chính nào?",
      "options": [
        "Điều kiện và nhượng bộ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Điều kiện và nhượng bộ"
      ],
      "answer": "Điều kiện và nhượng bộ",
      "explanation": "Mẫu ngữ pháp「たら・ても」dùng để: Điều kiện và nhượng bộ. たら diễn đạt giả định hoặc sau khi một việc xảy ra. ても cho biết kết quả vẫn giữ dù điều kiện bất lợi xuất hiện."
    },
    {
      "id": "mnn-25-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Dù trời mưa vẫn tổ chức trận đấu.\": 雨が降っ___試合をします。",
      "answer": "ても",
      "acceptedAnswers": [
        "ても"
      ],
      "explanation": "Đáp án đúng là「ても」. Cách kết hợp: thể quá khứ thường + ら；Vて／Aくて／Nで + も."
    },
    {
      "id": "mnn-25-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Dù trời mưa vẫn tổ chức trận đấu.\"",
      "options": [
        "ても試合",
        "をします。",
        "雨が降っ"
      ],
      "answer": "雨が降っても試合をします。",
      "explanation": "Câu hoàn chỉnh: 雨が降っても試合をします。 (あめがふってもしあいをします。). Ý nghĩa: Dù trời mưa vẫn tổ chức trận đấu.."
    }
  ],
  "mnn-26": [
    {
      "id": "mnn-26-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「んです・ていただけませんか・たらいい」: どこで切符を買っ(___ )ですか。 (Tôi nên mua vé ở đâu?)",
      "options": [
        "いい",
        "たらいい",
        "のに",
        "んか"
      ],
      "answer": "たらいい",
      "explanation": "Áp dụng quy tắc: thể thường + んです；N／Aな + なんです；Vたらいいですか. んです gắn lời nói với hoàn cảnh đã biết hoặc cần giải thích. ていただけませんか nhờ vả lịch sự; たらいい hỏi cách xử lý."
    },
    {
      "id": "mnn-26-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Bạn có thể giải thích lại một lần nữa được không?\"?",
      "options": [
        "もう一度説明していただけませんか。",
        "説明してもう一度いただけませんか。",
        "もう一度いただけませんか。説明して",
        "いただけませんか。もう一度説明して"
      ],
      "answer": "もう一度説明していただけませんか。",
      "explanation": "Cấu trúc chuẩn: thể thường + んです；N／Aな + なんです；Vたらいいですか. Trật tự câu: もう一度説明していただけませんか。."
    },
    {
      "id": "mnn-26-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: もう一度説明して [___] (Bạn có thể giải thích lại một lần nữa được không?)",
      "answer": "たらいい",
      "acceptedAnswers": [
        "たらいい",
        "たらいい"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「たらいい」theo cấu trúc: thể thường + んです；N／Aな + なんです；Vたらいいですか."
    },
    {
      "id": "mnn-26-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Bạn có thể giải thích lại một lần nữa được không?\"",
      "options": [
        "説明して",
        "いただけませんか。",
        "もう一度"
      ],
      "answer": "もう一度説明していただけませんか。",
      "explanation": "Trật tự ngữ pháp chính xác là: もう一度説明していただけませんか。. Lưu ý: Không dùng んです như phần đuôi bắt buộc của mọi câu; mẫu này hàm ý có bối cảnh."
    },
    {
      "id": "mnn-26-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「んです・ていただけませんか・たらいい」được sử dụng với mục đích chính nào?",
      "options": [
        "Giải thích hoàn cảnh và xin lời khuyên",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Giải thích hoàn cảnh và xin lời khuyên"
      ],
      "answer": "Giải thích hoàn cảnh và xin lời khuyên",
      "explanation": "Mẫu ngữ pháp「んです・ていただけませんか・たらいい」dùng để: Giải thích hoàn cảnh và xin lời khuyên. んです gắn lời nói với hoàn cảnh đã biết hoặc cần giải thích. ていただけませんか nhờ vả lịch sự; たらいい hỏi cách xử lý."
    },
    {
      "id": "mnn-26-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi nên mua vé ở đâu?\": どこで切符を買っ___ですか。",
      "answer": "たらいい",
      "acceptedAnswers": [
        "たらいい"
      ],
      "explanation": "Đáp án đúng là「たらいい」. Cách kết hợp: thể thường + んです；N／Aな + なんです；Vたらいいですか."
    },
    {
      "id": "mnn-26-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi nên mua vé ở đâu?\"",
      "options": [
        "を買ったら",
        "いいですか。",
        "どこで切符"
      ],
      "answer": "どこで切符を買ったらいいですか。",
      "explanation": "Câu hoàn chỉnh: どこで切符を買ったらいいですか。 (どこできっぷをかったらいいですか。). Ý nghĩa: Tôi nên mua vé ở đâu?."
    }
  ],
  "mnn-27": [
    {
      "id": "mnn-27-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「可能形・見える・聞こえる・しか」: この窓から海が(___ )。 (Từ cửa sổ này có thể nhìn thấy biển.)",
      "options": [
        "える",
        "だけ",
        "のに",
        "見えます"
      ],
      "answer": "見えます",
      "explanation": "Áp dụng quy tắc: nhóm I u→eる；nhóm II る→られる；する→できる；Nしか + phủ định. Thể khả năng nói việc có thể thực hiện. 見える／聞こえる mô tả tự nhìn thấy/nghe thấy; しか giới hạn số lượng cùng phủ định."
    },
    {
      "id": "mnn-27-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Hôm nay tôi chỉ học được ba mươi phút.\"?",
      "options": [
        "今日は三十分しか勉強できません。",
        "三十分しか今日は勉強できません。",
        "今日は勉強できません。三十分しか",
        "勉強できません。今日は三十分しか"
      ],
      "answer": "今日は三十分しか勉強できません。",
      "explanation": "Cấu trúc chuẩn: nhóm I u→eる；nhóm II る→られる；する→できる；Nしか + phủ định. Trật tự câu: 今日は三十分しか勉強できません。."
    },
    {
      "id": "mnn-27-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 今日は三十分しか [___] (Hôm nay tôi chỉ học được ba mươi phút.)",
      "answer": "見えます",
      "acceptedAnswers": [
        "見えます",
        "見えます"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「見えます」theo cấu trúc: nhóm I u→eる；nhóm II る→られる；する→できる；Nしか + phủ định."
    },
    {
      "id": "mnn-27-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Hôm nay tôi chỉ học được ba mươi phút.\"",
      "options": [
        "三十分しか",
        "勉強できません。",
        "今日は"
      ],
      "answer": "今日は三十分しか勉強できません。",
      "explanation": "Trật tự ngữ pháp chính xác là: 今日は三十分しか勉強できません。. Lưu ý: 見られる là có thể xem, khác 見える là tự lọt vào tầm mắt. 来る→こられる."
    },
    {
      "id": "mnn-27-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「可能形・見える・聞こえる・しか」được sử dụng với mục đích chính nào?",
      "options": [
        "Thể khả năng và giác quan",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thể khả năng và giác quan"
      ],
      "answer": "Thể khả năng và giác quan",
      "explanation": "Mẫu ngữ pháp「可能形・見える・聞こえる・しか」dùng để: Thể khả năng và giác quan. Thể khả năng nói việc có thể thực hiện. 見える／聞こえる mô tả tự nhìn thấy/nghe thấy; しか giới hạn số lượng cùng phủ định."
    },
    {
      "id": "mnn-27-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Từ cửa sổ này có thể nhìn thấy biển.\": この窓から海が___。",
      "answer": "見えます",
      "acceptedAnswers": [
        "見えます"
      ],
      "explanation": "Đáp án đúng là「見えます」. Cách kết hợp: nhóm I u→eる；nhóm II る→られる；する→できる；Nしか + phủ định."
    },
    {
      "id": "mnn-27-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Từ cửa sổ này có thể nhìn thấy biển.\"",
      "options": [
        "ら海が見",
        "えます。",
        "この窓か"
      ],
      "answer": "この窓から海が見えます。",
      "explanation": "Câu hoàn chỉnh: この窓から海が見えます。 (このまどからうみがみえます。). Ý nghĩa: Từ cửa sổ này có thể nhìn thấy biển.."
    }
  ],
  "mnn-28": [
    {
      "id": "mnn-28-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ながら・し・ています」: 音楽を聞き(___ )料理します。 (Tôi vừa nghe nhạc vừa nấu ăn.)",
      "options": [
        "し",
        "ながら",
        "のに",
        "ます"
      ],
      "answer": "ながら",
      "explanation": "Áp dụng quy tắc: thân ます + ながら；thể thường + し、…し；Vています. ながら nối hai hành động cùng chủ thể, vế sau là hành động chính. し liệt kê lý do; ています còn nói thói quen kéo dài."
    },
    {
      "id": "mnn-28-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cửa hàng này vừa rẻ vừa gần ga nên tiện.\"?",
      "options": [
        "この店は安いし、駅にも近いし、便利です。",
        "安いし、この店は駅にも近いし、便利です。",
        "この店は安いし、便利です。駅にも近いし、",
        "便利です。この店は安いし、駅にも近いし、"
      ],
      "answer": "この店は安いし、駅にも近いし、便利です。",
      "explanation": "Cấu trúc chuẩn: thân ます + ながら；thể thường + し、…し；Vています. Trật tự câu: この店は安いし、駅にも近いし、便利です。."
    },
    {
      "id": "mnn-28-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この店は安いし、駅に [___] (Cửa hàng này vừa rẻ vừa gần ga nên tiện.)",
      "answer": "ながら",
      "acceptedAnswers": [
        "ながら",
        "ながら"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ながら」theo cấu trúc: thân ます + ながら；thể thường + し、…し；Vています."
    },
    {
      "id": "mnn-28-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cửa hàng này vừa rẻ vừa gần ga nên tiện.\"",
      "options": [
        "安いし、",
        "駅にも近いし、",
        "便利です。",
        "この店は"
      ],
      "answer": "この店は安いし、駅にも近いし、便利です。",
      "explanation": "Trật tự ngữ pháp chính xác là: この店は安いし、駅にも近いし、便利です。. Lưu ý: Không dùng ながら cho hai hành động do hai người khác nhau thực hiện."
    },
    {
      "id": "mnn-28-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ながら・し・ています」được sử dụng với mục đích chính nào?",
      "options": [
        "Hai hành động và nhiều lý do",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Hai hành động và nhiều lý do"
      ],
      "answer": "Hai hành động và nhiều lý do",
      "explanation": "Mẫu ngữ pháp「ながら・し・ています」dùng để: Hai hành động và nhiều lý do. ながら nối hai hành động cùng chủ thể, vế sau là hành động chính. し liệt kê lý do; ています còn nói thói quen kéo dài."
    },
    {
      "id": "mnn-28-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi vừa nghe nhạc vừa nấu ăn.\": 音楽を聞き___料理します。",
      "answer": "ながら",
      "acceptedAnswers": [
        "ながら"
      ],
      "explanation": "Đáp án đúng là「ながら」. Cách kết hợp: thân ます + ながら；thể thường + し、…し；Vています."
    },
    {
      "id": "mnn-28-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi vừa nghe nhạc vừa nấu ăn.\"",
      "options": [
        "きながら料",
        "理します。",
        "音楽を聞"
      ],
      "answer": "音楽を聞きながら料理します。",
      "explanation": "Câu hoàn chỉnh: 音楽を聞きながら料理します。 (おんがくをききながらりょうりします。). Ý nghĩa: Tôi vừa nghe nhạc vừa nấu ăn.."
    }
  ],
  "mnn-29": [
    {
      "id": "mnn-29-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「自動詞・ています・てしまう」: 財布を忘れ(___ )。 (Tôi lỡ quên ví mất rồi.)",
      "options": [
        "てしまいました",
        "のに",
        "まう",
        "ます"
      ],
      "answer": "てしまいました",
      "explanation": "Áp dụng quy tắc: Nが + tự động từ ている；Vてしまう. Tự động từ tập trung vào sự thay đổi/trạng thái của vật. てしまう diễn tả hoàn tất hoặc cảm giác tiếc nuối, tùy ngữ cảnh."
    },
    {
      "id": "mnn-29-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cửa sổ lớp học đang mở.\"?",
      "options": [
        "教室の窓が開いています。",
        "が教室の窓開いています。",
        "教室の窓がいます。開いて",
        "います。教室の窓が開いて"
      ],
      "answer": "教室の窓が開いています。",
      "explanation": "Cấu trúc chuẩn: Nが + tự động từ ている；Vてしまう. Trật tự câu: 教室の窓が開いています。."
    },
    {
      "id": "mnn-29-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 教室の窓が開 [___] (Cửa sổ lớp học đang mở.)",
      "answer": "てしまいました",
      "acceptedAnswers": [
        "てしまいました",
        "てしまいました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「てしまいました」theo cấu trúc: Nが + tự động từ ている；Vてしまう."
    },
    {
      "id": "mnn-29-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cửa sổ lớp học đang mở.\"",
      "options": [
        "が",
        "開いて",
        "います。",
        "教室の窓"
      ],
      "answer": "教室の窓が開いています。",
      "explanation": "Trật tự ngữ pháp chính xác là: 教室の窓が開いています。. Lưu ý: 開く và 開ける khác nhau về vai của chủ thể; てしまう không phải lúc nào cũng mang nghĩa hối tiếc."
    },
    {
      "id": "mnn-29-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「自動詞・ています・てしまう」được sử dụng với mục đích chính nào?",
      "options": [
        "Tự động từ và hoàn tất đáng tiếc",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Tự động từ và hoàn tất đáng tiếc"
      ],
      "answer": "Tự động từ và hoàn tất đáng tiếc",
      "explanation": "Mẫu ngữ pháp「自動詞・ています・てしまう」dùng để: Tự động từ và hoàn tất đáng tiếc. Tự động từ tập trung vào sự thay đổi/trạng thái của vật. てしまう diễn tả hoàn tất hoặc cảm giác tiếc nuối, tùy ngữ cảnh."
    },
    {
      "id": "mnn-29-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi lỡ quên ví mất rồi.\": 財布を忘れ___。",
      "answer": "てしまいました",
      "acceptedAnswers": [
        "てしまいました"
      ],
      "explanation": "Đáp án đúng là「てしまいました」. Cách kết hợp: Nが + tự động từ ている；Vてしまう."
    },
    {
      "id": "mnn-29-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi lỡ quên ví mất rồi.\"",
      "options": [
        "れてしま",
        "いました。",
        "財布を忘"
      ],
      "answer": "財布を忘れてしまいました。",
      "explanation": "Câu hoàn chỉnh: 財布を忘れてしまいました。 (さいふをわすれてしまいました。). Ý nghĩa: Tôi lỡ quên ví mất rồi.."
    }
  ],
  "mnn-30": [
    {
      "id": "mnn-30-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「てある・ておく・まだ」: 旅行の前にホテルを予約し(___ )。 (Tôi đặt khách sạn trước chuyến đi.)",
      "options": [
        "おく",
        "ておきます",
        "のに",
        "まだ"
      ],
      "answer": "ておきます",
      "explanation": "Áp dụng quy tắc: Nが + tha động từ てある；Vておく. てある trình bày kết quả của việc ai đó chủ động làm. ておく diễn tả chuẩn bị trước hoặc giữ nguyên trạng thái cho mục đích sau."
    },
    {
      "id": "mnn-30-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Lịch trình đã được viết sẵn trên tường.\"?",
      "options": [
        "壁に予定が書いてあります。",
        "予定が壁に書いてあります。",
        "壁に予定があります。書いて",
        "あります。壁に予定が書いて"
      ],
      "answer": "壁に予定が書いてあります。",
      "explanation": "Cấu trúc chuẩn: Nが + tha động từ てある；Vておく. Trật tự câu: 壁に予定が書いてあります。."
    },
    {
      "id": "mnn-30-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 壁に予定が書 [___] (Lịch trình đã được viết sẵn trên tường.)",
      "answer": "ておきます",
      "acceptedAnswers": [
        "ておきます",
        "ておきます"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ておきます」theo cấu trúc: Nが + tha động từ てある；Vておく."
    },
    {
      "id": "mnn-30-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Lịch trình đã được viết sẵn trên tường.\"",
      "options": [
        "予定が",
        "書いて",
        "あります。",
        "壁に"
      ],
      "answer": "壁に予定が書いてあります。",
      "explanation": "Trật tự ngữ pháp chính xác là: 壁に予定が書いてあります。. Lưu ý: ている thường chỉ trạng thái quan sát; てある nhấn mạnh có hành động chuẩn bị tạo ra trạng thái đó."
    },
    {
      "id": "mnn-30-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「てある・ておく・まだ」được sử dụng với mục đích chính nào?",
      "options": [
        "Trạng thái có chủ ý và chuẩn bị",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Trạng thái có chủ ý và chuẩn bị"
      ],
      "answer": "Trạng thái có chủ ý và chuẩn bị",
      "explanation": "Mẫu ngữ pháp「てある・ておく・まだ」dùng để: Trạng thái có chủ ý và chuẩn bị. てある trình bày kết quả của việc ai đó chủ động làm. ておく diễn tả chuẩn bị trước hoặc giữ nguyên trạng thái cho mục đích sau."
    },
    {
      "id": "mnn-30-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đặt khách sạn trước chuyến đi.\": 旅行の前にホテルを予約し___。",
      "answer": "ておきます",
      "acceptedAnswers": [
        "ておきます"
      ],
      "explanation": "Đáp án đúng là「ておきます」. Cách kết hợp: Nが + tha động từ てある；Vておく."
    },
    {
      "id": "mnn-30-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đặt khách sạn trước chuyến đi.\"",
      "options": [
        "テルを予約し",
        "ておきます。",
        "旅行の前にホ"
      ],
      "answer": "旅行の前にホテルを予約しておきます。",
      "explanation": "Câu hoàn chỉnh: 旅行の前にホテルを予約しておきます。 (りょこうのまえにほてるをよやくしておきます。). Ý nghĩa: Tôi đặt khách sạn trước chuyến đi.."
    }
  ],
  "mnn-31": [
    {
      "id": "mnn-31-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「意向形・と思っている・つもり・予定」: 来年留学する(___ )です。 (Tôi dự định du học năm sau.)",
      "options": [
        "いる",
        "つもり",
        "のに",
        "もり"
      ],
      "answer": "つもり",
      "explanation": "Áp dụng quy tắc: nhóm I u→oう；nhóm II る→よう；V ý chí と思っている；V từ điển／ない + つもり. Thể ý chí biểu lộ quyết định hoặc lời rủ thân mật. つもり chỉ dự định cá nhân; 予定 chỉ kế hoạch đã sắp xếp."
    },
    {
      "id": "mnn-31-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cuộc họp dự kiến bắt đầu lúc ba giờ.\"?",
      "options": [
        "会議は三時に始まる予定です。",
        "三時に会議は始まる予定です。",
        "会議は三時に予定です。始まる",
        "予定です。会議は三時に始まる"
      ],
      "answer": "会議は三時に始まる予定です。",
      "explanation": "Cấu trúc chuẩn: nhóm I u→oう；nhóm II る→よう；V ý chí と思っている；V từ điển／ない + つもり. Trật tự câu: 会議は三時に始まる予定です。."
    },
    {
      "id": "mnn-31-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 会議は三時に始 [___] (Cuộc họp dự kiến bắt đầu lúc ba giờ.)",
      "answer": "つもり",
      "acceptedAnswers": [
        "つもり",
        "つもり"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「つもり」theo cấu trúc: nhóm I u→oう；nhóm II る→よう；V ý chí と思っている；V từ điển／ない + つもり."
    },
    {
      "id": "mnn-31-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cuộc họp dự kiến bắt đầu lúc ba giờ.\"",
      "options": [
        "三時に",
        "始まる",
        "予定です。",
        "会議は"
      ],
      "answer": "会議は三時に始まる予定です。",
      "explanation": "Trật tự ngữ pháp chính xác là: 会議は三時に始まる予定です。. Lưu ý: する→しよう, 来る→こよう. Danh từ trước 予定 cần の."
    },
    {
      "id": "mnn-31-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「意向形・と思っている・つもり・予定」được sử dụng với mục đích chính nào?",
      "options": [
        "Ý định và kế hoạch",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Ý định và kế hoạch"
      ],
      "answer": "Ý định và kế hoạch",
      "explanation": "Mẫu ngữ pháp「意向形・と思っている・つもり・予定」dùng để: Ý định và kế hoạch. Thể ý chí biểu lộ quyết định hoặc lời rủ thân mật. つもり chỉ dự định cá nhân; 予定 chỉ kế hoạch đã sắp xếp."
    },
    {
      "id": "mnn-31-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi dự định du học năm sau.\": 来年留学する___です。",
      "answer": "つもり",
      "acceptedAnswers": [
        "つもり"
      ],
      "explanation": "Đáp án đúng là「つもり」. Cách kết hợp: nhóm I u→oう；nhóm II る→よう；V ý chí と思っている；V từ điển／ない + つもり."
    },
    {
      "id": "mnn-31-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi dự định du học năm sau.\"",
      "options": [
        "するつも",
        "りです。",
        "来年留学"
      ],
      "answer": "来年留学するつもりです。",
      "explanation": "Câu hoàn chỉnh: 来年留学するつもりです。 (らいねんりゅうがくするつもりです。). Ý nghĩa: Tôi dự định du học năm sau.."
    }
  ],
  "mnn-32": [
    {
      "id": "mnn-32-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ほうがいい・でしょう・かもしれない」: 今日は早く寝た(___ )です。 (Hôm nay bạn nên ngủ sớm.)",
      "options": [
        "ない",
        "のに",
        "ほうがいい",
        "ょう"
      ],
      "answer": "ほうがいい",
      "explanation": "Áp dụng quy tắc: Vた／Vない + ほうがいい；thể thường + でしょう／かもしれない. ほうがいい khuyên lựa chọn có lợi. でしょう nói dự đoán; かもしれない nêu khả năng với mức chắc chắn thấp hơn."
    },
    {
      "id": "mnn-32-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Chiều tối có thể trời mưa.\"?",
      "options": [
        "夕方雨が降るかもしれません。",
        "雨が夕方降るかもしれません。",
        "夕方雨がかもしれません。降る",
        "かもしれません。夕方雨が降る"
      ],
      "answer": "夕方雨が降るかもしれません。",
      "explanation": "Cấu trúc chuẩn: Vた／Vない + ほうがいい；thể thường + でしょう／かもしれない. Trật tự câu: 夕方雨が降るかもしれません。."
    },
    {
      "id": "mnn-32-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 夕方雨が降るか [___] (Chiều tối có thể trời mưa.)",
      "answer": "ほうがいい",
      "acceptedAnswers": [
        "ほうがいい",
        "ほうがいい"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ほうがいい」theo cấu trúc: Vた／Vない + ほうがいい；thể thường + でしょう／かもしれない."
    },
    {
      "id": "mnn-32-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Chiều tối có thể trời mưa.\"",
      "options": [
        "雨が",
        "降る",
        "かもしれません。",
        "夕方"
      ],
      "answer": "夕方雨が降るかもしれません。",
      "explanation": "Trật tự ngữ pháp chính xác là: 夕方雨が降るかもしれません。. Lưu ý: Bỏ だ sau N／Aな trước でしょう và かもしれない."
    },
    {
      "id": "mnn-32-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ほうがいい・でしょう・かもしれない」được sử dụng với mục đích chính nào?",
      "options": [
        "Lời khuyên và mức độ dự đoán",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Lời khuyên và mức độ dự đoán"
      ],
      "answer": "Lời khuyên và mức độ dự đoán",
      "explanation": "Mẫu ngữ pháp「ほうがいい・でしょう・かもしれない」dùng để: Lời khuyên và mức độ dự đoán. ほうがいい khuyên lựa chọn có lợi. でしょう nói dự đoán; かもしれない nêu khả năng với mức chắc chắn thấp hơn."
    },
    {
      "id": "mnn-32-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Hôm nay bạn nên ngủ sớm.\": 今日は早く寝た___です。",
      "answer": "ほうがいい",
      "acceptedAnswers": [
        "ほうがいい"
      ],
      "explanation": "Đáp án đúng là「ほうがいい」. Cách kết hợp: Vた／Vない + ほうがいい；thể thường + でしょう／かもしれない."
    },
    {
      "id": "mnn-32-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Hôm nay bạn nên ngủ sớm.\"",
      "options": [
        "寝たほうが",
        "いいです。",
        "今日は早く"
      ],
      "answer": "今日は早く寝たほうがいいです。",
      "explanation": "Câu hoàn chỉnh: 今日は早く寝たほうがいいです。 (きょうははやくねたほうがいいです。). Ý nghĩa: Hôm nay bạn nên ngủ sớm.."
    }
  ],
  "mnn-33": [
    {
      "id": "mnn-33-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「命令形・な・という意味・と伝える」: 「入るな」は、入ってはいけない(___ )です。 (“Không vào” có nghĩa là không được đi vào.)",
      "options": [
        "という意味",
        "な",
        "のに",
        "意味"
      ],
      "answer": "という意味",
      "explanation": "Áp dụng quy tắc: nhóm I u→e；nhóm II る→ろ；V từ điển + な；Xという意味. Mệnh lệnh trực tiếp mạnh, thường gặp trong khẩu lệnh, biển báo. な sau thể từ điển cấm hành động; という意味 giải thích ký hiệu hoặc từ."
    },
    {
      "id": "mnn-33-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Hãy nhắn với mẹ rằng tôi sẽ về muộn.\"?",
      "options": [
        "母に遅くなると伝えてください。",
        "遅くなると母に伝えてください。",
        "母に遅くなるとください。伝えて",
        "ください。母に遅くなると伝えて"
      ],
      "answer": "母に遅くなると伝えてください。",
      "explanation": "Cấu trúc chuẩn: nhóm I u→e；nhóm II る→ろ；V từ điển + な；Xという意味. Trật tự câu: 母に遅くなると伝えてください。."
    },
    {
      "id": "mnn-33-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 母に遅くなると [___] (Hãy nhắn với mẹ rằng tôi sẽ về muộn.)",
      "answer": "という意味",
      "acceptedAnswers": [
        "という意味",
        "という意味"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「という意味」theo cấu trúc: nhóm I u→e；nhóm II る→ろ；V từ điển + な；Xという意味."
    },
    {
      "id": "mnn-33-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Hãy nhắn với mẹ rằng tôi sẽ về muộn.\"",
      "options": [
        "遅くなると",
        "伝えて",
        "ください。",
        "母に"
      ],
      "answer": "母に遅くなると伝えてください。",
      "explanation": "Trật tự ngữ pháp chính xác là: 母に遅くなると伝えてください。. Lưu ý: する→しろ, 来る→こい. Tránh dùng mệnh lệnh trực tiếp trong yêu cầu lịch sự."
    },
    {
      "id": "mnn-33-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「命令形・な・という意味・と伝える」được sử dụng với mục đích chính nào?",
      "options": [
        "Mệnh lệnh, cấm và truyền lời",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mệnh lệnh, cấm và truyền lời"
      ],
      "answer": "Mệnh lệnh, cấm và truyền lời",
      "explanation": "Mẫu ngữ pháp「命令形・な・という意味・と伝える」dùng để: Mệnh lệnh, cấm và truyền lời. Mệnh lệnh trực tiếp mạnh, thường gặp trong khẩu lệnh, biển báo. な sau thể từ điển cấm hành động; という意味 giải thích ký hiệu hoặc từ."
    },
    {
      "id": "mnn-33-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"“Không vào” có nghĩa là không được đi vào.\": 「入るな」は、入ってはいけない___です。",
      "answer": "という意味",
      "acceptedAnswers": [
        "という意味"
      ],
      "explanation": "Đáp án đúng là「という意味」. Cách kết hợp: nhóm I u→e；nhóm II る→ろ；V từ điển + な；Xという意味."
    },
    {
      "id": "mnn-33-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"“Không vào” có nghĩa là không được đi vào.\"",
      "options": [
        "入ってはいけない",
        "という意味です。",
        "「入るな」は、"
      ],
      "answer": "「入るな」は、入ってはいけないという意味です。",
      "explanation": "Câu hoàn chỉnh: 「入るな」は、入ってはいけないという意味です。 (「はいるな」は、はいってはいけないといういみです。). Ý nghĩa: “Không vào” có nghĩa là không được đi vào.."
    }
  ],
  "mnn-34": [
    {
      "id": "mnn-34-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「とおりに・あとで・ないで」: 説明の(___ )組み立ててください。 (Hãy lắp ráp theo hướng dẫn.)",
      "options": [
        "いで",
        "とおりに",
        "とで",
        "のに"
      ],
      "answer": "とおりに",
      "explanation": "Áp dụng quy tắc: V từ điển／た + とおりに；Nのとおりに；Vたあとで；Vないで. とおりに chỉ làm theo mẫu hoặc chỉ dẫn. あとで đặt việc sau một hành động đã xong; ないで diễn tả làm việc khác mà không làm việc đầu."
    },
    {
      "id": "mnn-34-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi đã ra ngoài mà không ăn sáng.\"?",
      "options": [
        "朝ご飯を食べないで出かけました。",
        "食べないで朝ご飯を出かけました。",
        "朝ご飯を出かけました。食べないで",
        "出かけました。朝ご飯を食べないで"
      ],
      "answer": "朝ご飯を食べないで出かけました。",
      "explanation": "Cấu trúc chuẩn: V từ điển／た + とおりに；Nのとおりに；Vたあとで；Vないで. Trật tự câu: 朝ご飯を食べないで出かけました。."
    },
    {
      "id": "mnn-34-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 朝ご飯を食べない [___] (Tôi đã ra ngoài mà không ăn sáng.)",
      "answer": "とおりに",
      "acceptedAnswers": [
        "とおりに",
        "とおりに"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「とおりに」theo cấu trúc: V từ điển／た + とおりに；Nのとおりに；Vたあとで；Vないで."
    },
    {
      "id": "mnn-34-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi đã ra ngoài mà không ăn sáng.\"",
      "options": [
        "食べないで",
        "出かけました。",
        "朝ご飯を"
      ],
      "answer": "朝ご飯を食べないで出かけました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 朝ご飯を食べないで出かけました。. Lưu ý: Trước あとで dùng た; trước 前に dùng thể từ điển."
    },
    {
      "id": "mnn-34-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「とおりに・あとで・ないで」được sử dụng với mục đích chính nào?",
      "options": [
        "Làm theo và trình tự hành động",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Làm theo và trình tự hành động"
      ],
      "answer": "Làm theo và trình tự hành động",
      "explanation": "Mẫu ngữ pháp「とおりに・あとで・ないで」dùng để: Làm theo và trình tự hành động. とおりに chỉ làm theo mẫu hoặc chỉ dẫn. あとで đặt việc sau một hành động đã xong; ないで diễn tả làm việc khác mà không làm việc đầu."
    },
    {
      "id": "mnn-34-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Hãy lắp ráp theo hướng dẫn.\": 説明の___組み立ててください。",
      "answer": "とおりに",
      "acceptedAnswers": [
        "とおりに"
      ],
      "explanation": "Đáp án đúng là「とおりに」. Cách kết hợp: V từ điển／た + とおりに；Nのとおりに；Vたあとで；Vないで."
    },
    {
      "id": "mnn-34-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Hãy lắp ráp theo hướng dẫn.\"",
      "options": [
        "りに組み立て",
        "てください。",
        "説明のとお"
      ],
      "answer": "説明のとおりに組み立ててください。",
      "explanation": "Câu hoàn chỉnh: 説明のとおりに組み立ててください。 (せつめいのとおりにくみたててください。). Ý nghĩa: Hãy lắp ráp theo hướng dẫn.."
    }
  ],
  "mnn-35": [
    {
      "id": "mnn-35-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ば・なら・ばいい」: 時間があれ(___ )手伝います。 (Nếu có thời gian tôi sẽ giúp.)",
      "options": [
        "いい",
        "なら",
        "のに",
        "ば"
      ],
      "answer": "ば",
      "explanation": "Áp dụng quy tắc: nhóm I u→eば；nhóm II る→れば；Aい→ければ；Nなら. ば nêu điều kiện cần để có kết quả; なら dựa trên thông tin hoặc giả định vừa được đưa ra để tư vấn."
    },
    {
      "id": "mnn-35-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Nếu đi Kyoto thì chuyến tàu này tiện.\"?",
      "options": [
        "京都へ行くなら、この電車が便利です。",
        "なら、京都へ行くこの電車が便利です。",
        "京都へ行くなら、便利です。この電車が",
        "便利です。京都へ行くなら、この電車が"
      ],
      "answer": "京都へ行くなら、この電車が便利です。",
      "explanation": "Cấu trúc chuẩn: nhóm I u→eば；nhóm II る→れば；Aい→ければ；Nなら. Trật tự câu: 京都へ行くなら、この電車が便利です。."
    },
    {
      "id": "mnn-35-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 京都へ行くなら、こ [___] (Nếu đi Kyoto thì chuyến tàu này tiện.)",
      "answer": "ば",
      "acceptedAnswers": [
        "ば",
        "ば"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ば」theo cấu trúc: nhóm I u→eば；nhóm II る→れば；Aい→ければ；Nなら."
    },
    {
      "id": "mnn-35-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Nếu đi Kyoto thì chuyến tàu này tiện.\"",
      "options": [
        "なら、",
        "この電車が",
        "便利です。",
        "京都へ行く"
      ],
      "answer": "京都へ行くなら、この電車が便利です。",
      "explanation": "Trật tự ngữ pháp chính xác là: 京都へ行くなら、この電車が便利です。. Lưu ý: ない→なければ; điều kiện cùng chủ thể với hành động có ý chí cần xét ngữ cảnh, không thay たら máy móc."
    },
    {
      "id": "mnn-35-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ば・なら・ばいい」được sử dụng với mục đích chính nào?",
      "options": [
        "Điều kiện ば và gợi ý なら",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Điều kiện ば và gợi ý なら"
      ],
      "answer": "Điều kiện ば và gợi ý なら",
      "explanation": "Mẫu ngữ pháp「ば・なら・ばいい」dùng để: Điều kiện ば và gợi ý なら. ば nêu điều kiện cần để có kết quả; なら dựa trên thông tin hoặc giả định vừa được đưa ra để tư vấn."
    },
    {
      "id": "mnn-35-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Nếu có thời gian tôi sẽ giúp.\": 時間があれ___手伝います。",
      "answer": "ば",
      "acceptedAnswers": [
        "ば"
      ],
      "explanation": "Đáp án đúng là「ば」. Cách kết hợp: nhóm I u→eば；nhóm II る→れば；Aい→ければ；Nなら."
    },
    {
      "id": "mnn-35-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Nếu có thời gian tôi sẽ giúp.\"",
      "options": [
        "れば手伝",
        "います。",
        "時間があ"
      ],
      "answer": "時間があれば手伝います。",
      "explanation": "Câu hoàn chỉnh: 時間があれば手伝います。 (じかんがあればてつだいます。). Ý nghĩa: Nếu có thời gian tôi sẽ giúp.."
    }
  ],
  "mnn-36": [
    {
      "id": "mnn-36-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ように・ようになる・ようにする」: 漢字が読める(___ )毎日練習します。 (Tôi luyện mỗi ngày để có thể đọc Kanji.)",
      "options": [
        "する",
        "なる",
        "のに",
        "ように"
      ],
      "answer": "ように",
      "explanation": "Áp dụng quy tắc: V từ điển／ない + ように；V khả năng + ようになる；Vようにする. ように nêu trạng thái mong đạt, thường đi với động từ không ý chí hoặc thể khả năng. ようになる nói thay đổi; ようにする là chủ động tập thói quen."
    },
    {
      "id": "mnn-36-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Gần đây tôi đã có thể tự nấu ăn.\"?",
      "options": [
        "最近一人で料理できるようになりました。",
        "一人で最近料理できるようになりました。",
        "最近一人でなりました。料理できるように",
        "なりました。最近一人で料理できるように"
      ],
      "answer": "最近一人で料理できるようになりました。",
      "explanation": "Cấu trúc chuẩn: V từ điển／ない + ように；V khả năng + ようになる；Vようにする. Trật tự câu: 最近一人で料理できるようになりました。."
    },
    {
      "id": "mnn-36-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 最近一人で料理でき [___] (Gần đây tôi đã có thể tự nấu ăn.)",
      "answer": "ように",
      "acceptedAnswers": [
        "ように",
        "ように"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ように」theo cấu trúc: V từ điển／ない + ように；V khả năng + ようになる；Vようにする."
    },
    {
      "id": "mnn-36-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Gần đây tôi đã có thể tự nấu ăn.\"",
      "options": [
        "一人で",
        "料理できるように",
        "なりました。",
        "最近"
      ],
      "answer": "最近一人で料理できるようになりました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 最近一人で料理できるようになりました。. Lưu ý: ために thường nêu mục đích của hành động có ý chí; ように nhấn mạnh kết quả hoặc khả năng."
    },
    {
      "id": "mnn-36-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ように・ようになる・ようにする」được sử dụng với mục đích chính nào?",
      "options": [
        "Mục tiêu và sự tiến bộ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mục tiêu và sự tiến bộ"
      ],
      "answer": "Mục tiêu và sự tiến bộ",
      "explanation": "Mẫu ngữ pháp「ように・ようになる・ようにする」dùng để: Mục tiêu và sự tiến bộ. ように nêu trạng thái mong đạt, thường đi với động từ không ý chí hoặc thể khả năng. ようになる nói thay đổi; ようにする là chủ động tập thói quen."
    },
    {
      "id": "mnn-36-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi luyện mỗi ngày để có thể đọc Kanji.\": 漢字が読める___毎日練習します。",
      "answer": "ように",
      "acceptedAnswers": [
        "ように"
      ],
      "explanation": "Đáp án đúng là「ように」. Cách kết hợp: V từ điển／ない + ように；V khả năng + ようになる；Vようにする."
    },
    {
      "id": "mnn-36-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi luyện mỗi ngày để có thể đọc Kanji.\"",
      "options": [
        "るように毎日",
        "練習します。",
        "漢字が読め"
      ],
      "answer": "漢字が読めるように毎日練習します。",
      "explanation": "Câu hoàn chỉnh: 漢字が読めるように毎日練習します。 (かんじがよめるようにまいにちれんしゅうします。). Ý nghĩa: Tôi luyện mỗi ngày để có thể đọc Kanji.."
    }
  ],
  "mnn-37": [
    {
      "id": "mnn-37-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「受身形・に・によって」: 弟にケーキを食べ(___ )。 (Tôi bị em trai ăn mất bánh.)",
      "options": [
        "って",
        "に",
        "のに",
        "られました"
      ],
      "answer": "られました",
      "explanation": "Áp dụng quy tắc: nhóm I u→aれる；nhóm II る→られる；する→される；来る→こられる. Bị động chuyển điểm nhìn sang người/vật nhận tác động; に chỉ tác nhân, によって thường dùng với người sáng tạo hoặc phát minh."
    },
    {
      "id": "mnn-37-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cây cầu này được xây một trăm năm trước.\"?",
      "options": [
        "この橋は百年前に造られました。",
        "百年前にこの橋は造られました。",
        "この橋は造られました。百年前に",
        "造られました。この橋は百年前に"
      ],
      "answer": "この橋は百年前に造られました。",
      "explanation": "Cấu trúc chuẩn: nhóm I u→aれる；nhóm II る→られる；する→される；来る→こられる. Trật tự câu: この橋は百年前に造られました。."
    },
    {
      "id": "mnn-37-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この橋は百年前 [___] (Cây cầu này được xây một trăm năm trước.)",
      "answer": "られました",
      "acceptedAnswers": [
        "られました",
        "られました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「られました」theo cấu trúc: nhóm I u→aれる；nhóm II る→られる；する→される；来る→こられる."
    },
    {
      "id": "mnn-37-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cây cầu này được xây một trăm năm trước.\"",
      "options": [
        "百年前に",
        "造られました。",
        "この橋は"
      ],
      "answer": "この橋は百年前に造られました。",
      "explanation": "Trật tự ngữ pháp chính xác là: この橋は百年前に造られました。. Lưu ý: Bị động gián tiếp có thể diễn tả phiền toái dù chủ thể không trực tiếp nhận hành động."
    },
    {
      "id": "mnn-37-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「受身形・に・によって」được sử dụng với mục đích chính nào?",
      "options": [
        "Thể bị động",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thể bị động"
      ],
      "answer": "Thể bị động",
      "explanation": "Mẫu ngữ pháp「受身形・に・によって」dùng để: Thể bị động. Bị động chuyển điểm nhìn sang người/vật nhận tác động; に chỉ tác nhân, によって thường dùng với người sáng tạo hoặc phát minh."
    },
    {
      "id": "mnn-37-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi bị em trai ăn mất bánh.\": 弟にケーキを食べ___。",
      "answer": "られました",
      "acceptedAnswers": [
        "られました"
      ],
      "explanation": "Đáp án đúng là「られました」. Cách kết hợp: nhóm I u→aれる；nhóm II る→られる；する→される；来る→こられる."
    },
    {
      "id": "mnn-37-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi bị em trai ăn mất bánh.\"",
      "options": [
        "キを食べら",
        "れました。",
        "弟にケー"
      ],
      "answer": "弟にケーキを食べられました。",
      "explanation": "Câu hoàn chỉnh: 弟にケーキを食べられました。 (おとうとにけーきをたべられました。). Ý nghĩa: Tôi bị em trai ăn mất bánh.."
    }
  ],
  "mnn-38": [
    {
      "id": "mnn-38-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「のは・のが・のを・のは〜だ」: 写真を撮る(___ )好きです。 (Tôi thích chụp ảnh.)",
      "options": [
        "だけ",
        "のが",
        "のに",
        "のを"
      ],
      "answer": "のが",
      "explanation": "Áp dụng quy tắc: V thể thường + のは／のが／のを；câu + のは Nです. の biến mệnh đề thành danh ngữ để đánh giá, làm chủ ngữ hay tân ngữ. のは…です đưa thông tin cần nhấn mạnh ra cuối."
    },
    {
      "id": "mnn-38-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi quên mang chìa khóa.\"?",
      "options": [
        "鍵を持ってくるのを忘れました。",
        "持ってくるのを鍵を忘れました。",
        "鍵を忘れました。持ってくるのを",
        "忘れました。鍵を持ってくるのを"
      ],
      "answer": "鍵を持ってくるのを忘れました。",
      "explanation": "Cấu trúc chuẩn: V thể thường + のは／のが／のを；câu + のは Nです. Trật tự câu: 鍵を持ってくるのを忘れました。."
    },
    {
      "id": "mnn-38-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 鍵を持ってくる [___] (Tôi quên mang chìa khóa.)",
      "answer": "のが",
      "acceptedAnswers": [
        "のが",
        "のが"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「のが」theo cấu trúc: V thể thường + のは／のが／のを；câu + のは Nです."
    },
    {
      "id": "mnn-38-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi quên mang chìa khóa.\"",
      "options": [
        "持ってくるのを",
        "忘れました。",
        "鍵を"
      ],
      "answer": "鍵を持ってくるのを忘れました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 鍵を持ってくるのを忘れました。. Lưu ý: Không thể thay の và こと cho nhau ở mọi cấu trúc; tránh ghép trực tiếp ます với の."
    },
    {
      "id": "mnn-38-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「のは・のが・のを・のは〜だ」được sử dụng với mục đích chính nào?",
      "options": [
        "Danh từ hóa và nhấn mạnh",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Danh từ hóa và nhấn mạnh"
      ],
      "answer": "Danh từ hóa và nhấn mạnh",
      "explanation": "Mẫu ngữ pháp「のは・のが・のを・のは〜だ」dùng để: Danh từ hóa và nhấn mạnh. の biến mệnh đề thành danh ngữ để đánh giá, làm chủ ngữ hay tân ngữ. のは…です đưa thông tin cần nhấn mạnh ra cuối."
    },
    {
      "id": "mnn-38-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi thích chụp ảnh.\": 写真を撮る___好きです。",
      "answer": "のが",
      "acceptedAnswers": [
        "のが"
      ],
      "explanation": "Đáp án đúng là「のが」. Cách kết hợp: V thể thường + のは／のが／のを；câu + のは Nです."
    },
    {
      "id": "mnn-38-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi thích chụp ảnh.\"",
      "options": [
        "るのが好",
        "きです。",
        "写真を撮"
      ],
      "answer": "写真を撮るのが好きです。",
      "explanation": "Câu hoàn chỉnh: 写真を撮るのが好きです。 (しゃしんをとるのがすきです。). Ý nghĩa: Tôi thích chụp ảnh.."
    }
  ],
  "mnn-39": [
    {
      "id": "mnn-39-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「て・で・ので」: 電車が遅れた(___ )遅刻しました。 (Vì tàu trễ nên tôi đến muộn.)",
      "options": [
        "だけ",
        "で",
        "ので",
        "のに"
      ],
      "answer": "ので",
      "explanation": "Áp dụng quy tắc: Vて／Vなくて；Aくて；Nで；thể thường + ので；N／Aな + なので. Dạng て／で nối nguyên nhân với cảm xúc hay tình trạng không chủ ý. ので trình bày nguyên nhân theo hướng giải thích hoàn cảnh."
    },
    {
      "id": "mnn-39-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi vui vì đã đỗ kỳ thi.\"?",
      "options": [
        "試験に合格して、うれしいです。",
        "合格して、試験にうれしいです。",
        "試験にうれしいです。合格して、",
        "うれしいです。試験に合格して、"
      ],
      "answer": "試験に合格して、うれしいです。",
      "explanation": "Cấu trúc chuẩn: Vて／Vなくて；Aくて；Nで；thể thường + ので；N／Aな + なので. Trật tự câu: 試験に合格して、うれしいです。."
    },
    {
      "id": "mnn-39-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 試験に合格して [___] (Tôi vui vì đã đỗ kỳ thi.)",
      "answer": "ので",
      "acceptedAnswers": [
        "ので",
        "ので"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ので」theo cấu trúc: Vて／Vなくて；Aくて；Nで；thể thường + ので；N／Aな + なので."
    },
    {
      "id": "mnn-39-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi vui vì đã đỗ kỳ thi.\"",
      "options": [
        "合格して、",
        "うれしいです。",
        "試験に"
      ],
      "answer": "試験に合格して、うれしいです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 試験に合格して、うれしいです。. Lưu ý: Không dùng dạng て chỉ nguyên nhân để nối tùy tiện với mệnh lệnh; ので hoặc から phù hợp hơn tùy ngữ cảnh."
    },
    {
      "id": "mnn-39-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「て・で・ので」được sử dụng với mục đích chính nào?",
      "options": [
        "Nguyên nhân và giải thích nhẹ nhàng",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nguyên nhân và giải thích nhẹ nhàng"
      ],
      "answer": "Nguyên nhân và giải thích nhẹ nhàng",
      "explanation": "Mẫu ngữ pháp「て・で・ので」dùng để: Nguyên nhân và giải thích nhẹ nhàng. Dạng て／で nối nguyên nhân với cảm xúc hay tình trạng không chủ ý. ので trình bày nguyên nhân theo hướng giải thích hoàn cảnh."
    },
    {
      "id": "mnn-39-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Vì tàu trễ nên tôi đến muộn.\": 電車が遅れた___遅刻しました。",
      "answer": "ので",
      "acceptedAnswers": [
        "ので"
      ],
      "explanation": "Đáp án đúng là「ので」. Cách kết hợp: Vて／Vなくて；Aくて；Nで；thể thường + ので；N／Aな + なので."
    },
    {
      "id": "mnn-39-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Vì tàu trễ nên tôi đến muộn.\"",
      "options": [
        "たので遅刻",
        "しました。",
        "電車が遅れ"
      ],
      "answer": "電車が遅れたので遅刻しました。",
      "explanation": "Câu hoàn chỉnh: 電車が遅れたので遅刻しました。 (でんしゃがおくれたのでちこくしました。). Ý nghĩa: Vì tàu trễ nên tôi đến muộn.."
    }
  ],
  "mnn-40": [
    {
      "id": "mnn-40-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「か・かどうか・てみる」: 店が開いている(___ )調べます。 (Tôi kiểm tra xem cửa hàng có mở không.)",
      "options": [
        "うか",
        "かどうか",
        "のに",
        "みる"
      ],
      "answer": "かどうか",
      "explanation": "Áp dụng quy tắc: từ hỏi + thể thường + か；thể thường + かどうか；Vてみる. か đưa câu hỏi có từ nghi vấn vào câu lớn; かどうか thể hiện có hay không. てみる là thử làm để biết kết quả."
    },
    {
      "id": "mnn-40-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi thử đôi giày này được không?\"?",
      "options": [
        "この靴を履いてみてもいいですか。",
        "履いてこの靴をみてもいいですか。",
        "この靴を履いていいですか。みても",
        "いいですか。この靴を履いてみても"
      ],
      "answer": "この靴を履いてみてもいいですか。",
      "explanation": "Cấu trúc chuẩn: từ hỏi + thể thường + か；thể thường + かどうか；Vてみる. Trật tự câu: この靴を履いてみてもいいですか。."
    },
    {
      "id": "mnn-40-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この靴を履いてみ [___] (Tôi thử đôi giày này được không?)",
      "answer": "かどうか",
      "acceptedAnswers": [
        "かどうか",
        "かどうか"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「かどうか」theo cấu trúc: từ hỏi + thể thường + か；thể thường + かどうか；Vてみる."
    },
    {
      "id": "mnn-40-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi thử đôi giày này được không?\"",
      "options": [
        "履いて",
        "みても",
        "いいですか。",
        "この靴を"
      ],
      "answer": "この靴を履いてみてもいいですか。",
      "explanation": "Trật tự ngữ pháp chính xác là: この靴を履いてみてもいいですか。. Lưu ý: Trong câu hỏi nhúng thường bỏ だ sau danh từ/tính từ な trước か."
    },
    {
      "id": "mnn-40-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「か・かどうか・てみる」được sử dụng với mục đích chính nào?",
      "options": [
        "Câu hỏi trong câu và thử làm",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Câu hỏi trong câu và thử làm"
      ],
      "answer": "Câu hỏi trong câu và thử làm",
      "explanation": "Mẫu ngữ pháp「か・かどうか・てみる」dùng để: Câu hỏi trong câu và thử làm. か đưa câu hỏi có từ nghi vấn vào câu lớn; かどうか thể hiện có hay không. てみる là thử làm để biết kết quả."
    },
    {
      "id": "mnn-40-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi kiểm tra xem cửa hàng có mở không.\": 店が開いている___調べます。",
      "answer": "かどうか",
      "acceptedAnswers": [
        "かどうか"
      ],
      "explanation": "Đáp án đúng là「かどうか」. Cách kết hợp: từ hỏi + thể thường + か；thể thường + かどうか；Vてみる."
    },
    {
      "id": "mnn-40-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi kiểm tra xem cửa hàng có mở không.\"",
      "options": [
        "いるかどう",
        "か調べます。",
        "店が開いて"
      ],
      "answer": "店が開いているかどうか調べます。",
      "explanation": "Câu hoàn chỉnh: 店が開いているかどうか調べます。 (みせがあいているかどうかしらべます。). Ý nghĩa: Tôi kiểm tra xem cửa hàng có mở không.."
    }
  ],
  "mnn-41": [
    {
      "id": "mnn-41-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「いただく・くださる・やる」: 先生に作文を直し(___ )。 (Tôi đã được thầy cô sửa bài văn.)",
      "options": [
        "さる",
        "ていただきました",
        "のに",
        "やる"
      ],
      "answer": "ていただきました",
      "explanation": "Áp dụng quy tắc: Nに Vていただく；Nが Vてくださる；Vてやる. いただく khiêm nhường về việc mình nhận; くださる tôn kính người trao. やる dùng với đối tượng phù hợp như cây cối, không thay あげる tùy tiện."
    },
    {
      "id": "mnn-41-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Trưởng phòng đã đưa tôi đến ga.\"?",
      "options": [
        "部長が駅まで送ってくださいました。",
        "駅まで部長が送ってくださいました。",
        "部長が駅までくださいました。送って",
        "くださいました。部長が駅まで送って"
      ],
      "answer": "部長が駅まで送ってくださいました。",
      "explanation": "Cấu trúc chuẩn: Nに Vていただく；Nが Vてくださる；Vてやる. Trật tự câu: 部長が駅まで送ってくださいました。."
    },
    {
      "id": "mnn-41-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 部長が駅まで送っ [___] (Trưởng phòng đã đưa tôi đến ga.)",
      "answer": "ていただきました",
      "acceptedAnswers": [
        "ていただきました",
        "ていただきました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ていただきました」theo cấu trúc: Nに Vていただく；Nが Vてくださる；Vてやる."
    },
    {
      "id": "mnn-41-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Trưởng phòng đã đưa tôi đến ga.\"",
      "options": [
        "駅まで",
        "送って",
        "くださいました。",
        "部長が"
      ],
      "answer": "部長が駅まで送ってくださいました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 部長が駅まで送ってくださいました。. Lưu ý: Cần phân biệt phía mình và phía người nghe, không chỉ dựa vào tuổi."
    },
    {
      "id": "mnn-41-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「いただく・くださる・やる」được sử dụng với mục đích chính nào?",
      "options": [
        "Trao nhận với quan hệ xã hội",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Trao nhận với quan hệ xã hội"
      ],
      "answer": "Trao nhận với quan hệ xã hội",
      "explanation": "Mẫu ngữ pháp「いただく・くださる・やる」dùng để: Trao nhận với quan hệ xã hội. いただく khiêm nhường về việc mình nhận; くださる tôn kính người trao. やる dùng với đối tượng phù hợp như cây cối, không thay あげる tùy tiện."
    },
    {
      "id": "mnn-41-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đã được thầy cô sửa bài văn.\": 先生に作文を直し___。",
      "answer": "ていただきました",
      "acceptedAnswers": [
        "ていただきました"
      ],
      "explanation": "Đáp án đúng là「ていただきました」. Cách kết hợp: Nに Vていただく；Nが Vてくださる；Vてやる."
    },
    {
      "id": "mnn-41-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đã được thầy cô sửa bài văn.\"",
      "options": [
        "を直していた",
        "だきました。",
        "先生に作文"
      ],
      "answer": "先生に作文を直していただきました。",
      "explanation": "Câu hoàn chỉnh: 先生に作文を直していただきました。 (せんせいにさくぶんをなおしていただきました。). Ý nghĩa: Tôi đã được thầy cô sửa bài văn.."
    }
  ],
  "mnn-42": [
    {
      "id": "mnn-42-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ために・のに」: 家を買う(___ )貯金しています。 (Tôi đang tiết kiệm để mua nhà.)",
      "options": [
        "だけ",
        "ために",
        "のに",
        "めに"
      ],
      "answer": "ために",
      "explanation": "Áp dụng quy tắc: V từ điển／Nの + ために；V từ điển + のに + tiện／cần／tốn. ために nêu mục đích chủ động; のに có thể nói công dụng, sự cần thiết hoặc chi phí để làm một việc."
    },
    {
      "id": "mnn-42-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Dụng cụ này tiện để cắt rau.\"?",
      "options": [
        "この道具は野菜を切るのに便利です。",
        "野菜を切るのにこの道具は便利です。",
        "この道具は便利です。野菜を切るのに",
        "便利です。この道具は野菜を切るのに"
      ],
      "answer": "この道具は野菜を切るのに便利です。",
      "explanation": "Cấu trúc chuẩn: V từ điển／Nの + ために；V từ điển + のに + tiện／cần／tốn. Trật tự câu: この道具は野菜を切るのに便利です。."
    },
    {
      "id": "mnn-42-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この道具は野菜を [___] (Dụng cụ này tiện để cắt rau.)",
      "answer": "ために",
      "acceptedAnswers": [
        "ために",
        "ために"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ために」theo cấu trúc: V từ điển／Nの + ために；V từ điển + のに + tiện／cần／tốn."
    },
    {
      "id": "mnn-42-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Dụng cụ này tiện để cắt rau.\"",
      "options": [
        "野菜を切るのに",
        "便利です。",
        "この道具は"
      ],
      "answer": "この道具は野菜を切るのに便利です。",
      "explanation": "Trật tự ngữ pháp chính xác là: この道具は野菜を切るのに便利です。. Lưu ý: のに chỉ công dụng khác のに nhượng bộ; nhận diện bằng vị ngữ như 便利、必要、かかる."
    },
    {
      "id": "mnn-42-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ために・のに」được sử dụng với mục đích chính nào?",
      "options": [
        "Mục đích và công dụng",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mục đích và công dụng"
      ],
      "answer": "Mục đích và công dụng",
      "explanation": "Mẫu ngữ pháp「ために・のに」dùng để: Mục đích và công dụng. ために nêu mục đích chủ động; のに có thể nói công dụng, sự cần thiết hoặc chi phí để làm một việc."
    },
    {
      "id": "mnn-42-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đang tiết kiệm để mua nhà.\": 家を買う___貯金しています。",
      "answer": "ために",
      "acceptedAnswers": [
        "ために"
      ],
      "explanation": "Đáp án đúng là「ために」. Cách kết hợp: V từ điển／Nの + ために；V từ điển + のに + tiện／cần／tốn."
    },
    {
      "id": "mnn-42-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đang tiết kiệm để mua nhà.\"",
      "options": [
        "めに貯金し",
        "ています。",
        "家を買うた"
      ],
      "answer": "家を買うために貯金しています。",
      "explanation": "Câu hoàn chỉnh: 家を買うために貯金しています。 (いえをかうためにちょきんしています。). Ý nghĩa: Tôi đang tiết kiệm để mua nhà.."
    }
  ],
  "mnn-43": [
    {
      "id": "mnn-43-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「そうだ（様態）・てくる」: 空が暗くて、雨が降り(___ )。 (Trời tối nên có vẻ sắp mưa.)",
      "options": [
        "くる",
        "そうです",
        "のに",
        "態）"
      ],
      "answer": "そうです",
      "explanation": "Áp dụng quy tắc: thân ます + そう；A bỏ い／な + そう；Vてくる. そう diễn tả điều trông có vẻ xảy ra hoặc đặc điểm nhìn thấy. てくる có thể là đi thực hiện một việc rồi quay về."
    },
    {
      "id": "mnn-43-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi đi mua đồ uống một lát rồi quay lại.\"?",
      "options": [
        "ちょっと飲み物を買ってきます。",
        "飲み物をちょっと買ってきます。",
        "ちょっと飲み物をきます。買って",
        "きます。ちょっと飲み物を買って"
      ],
      "answer": "ちょっと飲み物を買ってきます。",
      "explanation": "Cấu trúc chuẩn: thân ます + そう；A bỏ い／な + そう；Vてくる. Trật tự câu: ちょっと飲み物を買ってきます。."
    },
    {
      "id": "mnn-43-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: ちょっと飲み物 [___] (Tôi đi mua đồ uống một lát rồi quay lại.)",
      "answer": "そうです",
      "acceptedAnswers": [
        "そうです",
        "そうです"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「そうです」theo cấu trúc: thân ます + そう；A bỏ い／な + そう；Vてくる."
    },
    {
      "id": "mnn-43-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi đi mua đồ uống một lát rồi quay lại.\"",
      "options": [
        "飲み物を",
        "買って",
        "きます。",
        "ちょっと"
      ],
      "answer": "ちょっと飲み物を買ってきます。",
      "explanation": "Trật tự ngữ pháp chính xác là: ちょっと飲み物を買ってきます。. Lưu ý: いい→よさそう, ない→なさそう. Phân biệt với thể thường + そうだ để truyền tin nghe được."
    },
    {
      "id": "mnn-43-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「そうだ（様態）・てくる」được sử dụng với mục đích chính nào?",
      "options": [
        "Dự đoán từ biểu hiện và đi rồi về",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Dự đoán từ biểu hiện và đi rồi về"
      ],
      "answer": "Dự đoán từ biểu hiện và đi rồi về",
      "explanation": "Mẫu ngữ pháp「そうだ（様態）・てくる」dùng để: Dự đoán từ biểu hiện và đi rồi về. そう diễn tả điều trông có vẻ xảy ra hoặc đặc điểm nhìn thấy. てくる có thể là đi thực hiện một việc rồi quay về."
    },
    {
      "id": "mnn-43-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Trời tối nên có vẻ sắp mưa.\": 空が暗くて、雨が降り___。",
      "answer": "そうです",
      "acceptedAnswers": [
        "そうです"
      ],
      "explanation": "Đáp án đúng là「そうです」. Cách kết hợp: thân ます + そう；A bỏ い／な + そう；Vてくる."
    },
    {
      "id": "mnn-43-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Trời tối nên có vẻ sắp mưa.\"",
      "options": [
        "、雨が降り",
        "そうです。",
        "空が暗くて"
      ],
      "answer": "空が暗くて、雨が降りそうです。",
      "explanation": "Câu hoàn chỉnh: 空が暗くて、雨が降りそうです。 (そらがくらくて、あめがふりそうです。). Ý nghĩa: Trời tối nên có vẻ sắp mưa.."
    }
  ],
  "mnn-44": [
    {
      "id": "mnn-44-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「すぎる・やすい・にくい・くする・にする」: 昨日は食べ(___ )。 (Hôm qua tôi đã ăn quá nhiều.)",
      "options": [
        "くい",
        "すい",
        "すぎました",
        "のに"
      ],
      "answer": "すぎました",
      "explanation": "Áp dụng quy tắc: thân ます + すぎる／やすい／にくい；Aくする／Aにする；Nにする. すぎる nói mức vượt quá; やすい／にくい đánh giá độ dễ khó. する sau dạng trạng từ diễn tả chủ động thay đổi hoặc quyết định lựa chọn."
    },
    {
      "id": "mnn-44-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cây bút này dễ viết.\"?",
      "options": [
        "このペンは書きやすいです。",
        "書きやすいこのペンはです。",
        "このペンはです。書きやすい",
        "です。このペンは書きやすい"
      ],
      "answer": "このペンは書きやすいです。",
      "explanation": "Cấu trúc chuẩn: thân ます + すぎる／やすい／にくい；Aくする／Aにする；Nにする. Trật tự câu: このペンは書きやすいです。."
    },
    {
      "id": "mnn-44-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: このペンは書 [___] (Cây bút này dễ viết.)",
      "answer": "すぎました",
      "acceptedAnswers": [
        "すぎました",
        "すぎました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「すぎました」theo cấu trúc: thân ます + すぎる／やすい／にくい；Aくする／Aにする；Nにする."
    },
    {
      "id": "mnn-44-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cây bút này dễ viết.\"",
      "options": [
        "書きやすい",
        "です。",
        "このペンは"
      ],
      "answer": "このペンは書きやすいです。",
      "explanation": "Trật tự ngữ pháp chính xác là: このペンは書きやすいです。. Lưu ý: Tính từ い bỏ い trước すぎる; tính từ な bỏ な."
    },
    {
      "id": "mnn-44-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「すぎる・やすい・にくい・くする・にする」được sử dụng với mục đích chính nào?",
      "options": [
        "Quá mức, dễ khó và lựa chọn",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Quá mức, dễ khó và lựa chọn"
      ],
      "answer": "Quá mức, dễ khó và lựa chọn",
      "explanation": "Mẫu ngữ pháp「すぎる・やすい・にくい・くする・にする」dùng để: Quá mức, dễ khó và lựa chọn. すぎる nói mức vượt quá; やすい／にくい đánh giá độ dễ khó. する sau dạng trạng từ diễn tả chủ động thay đổi hoặc quyết định lựa chọn."
    },
    {
      "id": "mnn-44-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Hôm qua tôi đã ăn quá nhiều.\": 昨日は食べ___。",
      "answer": "すぎました",
      "acceptedAnswers": [
        "すぎました"
      ],
      "explanation": "Đáp án đúng là「すぎました」. Cách kết hợp: thân ます + すぎる／やすい／にくい；Aくする／Aにする；Nにする."
    },
    {
      "id": "mnn-44-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Hôm qua tôi đã ăn quá nhiều.\"",
      "options": [
        "食べすぎ",
        "ました。",
        "昨日は"
      ],
      "answer": "昨日は食べすぎました。",
      "explanation": "Câu hoàn chỉnh: 昨日は食べすぎました。 (きのうはたべすぎました。). Ý nghĩa: Hôm qua tôi đã ăn quá nhiều.."
    }
  ],
  "mnn-45": [
    {
      "id": "mnn-45-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「場合・のに」: 約束した(___ )彼は来ませんでした。 (Dù đã hẹn nhưng anh ấy không đến.)",
      "options": [
        "だけ",
        "のに",
        "より",
        "場合"
      ],
      "answer": "のに",
      "explanation": "Áp dụng quy tắc: V thường／Aい + 場合；Nの／Aな + 場合；thể thường + のに. 場合 nêu tình huống để hướng dẫn cách xử lý. のに nêu kết quả trái điều đáng lẽ xảy ra, thường có sắc thái ngạc nhiên hoặc tiếc."
    },
    {
      "id": "mnn-45-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Khi có động đất hãy dùng cầu thang.\"?",
      "options": [
        "地震の場合は、階段を使ってください。",
        "階段を地震の場合は、使ってください。",
        "地震の場合は、階段をください。使って",
        "ください。地震の場合は、階段を使って"
      ],
      "answer": "地震の場合は、階段を使ってください。",
      "explanation": "Cấu trúc chuẩn: V thường／Aい + 場合；Nの／Aな + 場合；thể thường + のに. Trật tự câu: 地震の場合は、階段を使ってください。."
    },
    {
      "id": "mnn-45-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 地震の場合は、階段 [___] (Khi có động đất hãy dùng cầu thang.)",
      "answer": "のに",
      "acceptedAnswers": [
        "のに",
        "のに"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「のに」theo cấu trúc: V thường／Aい + 場合；Nの／Aな + 場合；thể thường + のに."
    },
    {
      "id": "mnn-45-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Khi có động đất hãy dùng cầu thang.\"",
      "options": [
        "階段を",
        "使って",
        "ください。",
        "地震の場合は、"
      ],
      "answer": "地震の場合は、階段を使ってください。",
      "explanation": "Trật tự ngữ pháp chính xác là: 地震の場合は、階段を使ってください。. Lưu ý: N／Aな trước のに dùng なのに; không nhầm với のに chỉ công dụng."
    },
    {
      "id": "mnn-45-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「場合・のに」được sử dụng với mục đích chính nào?",
      "options": [
        "Trường hợp và kết quả trái kỳ vọng",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Trường hợp và kết quả trái kỳ vọng"
      ],
      "answer": "Trường hợp và kết quả trái kỳ vọng",
      "explanation": "Mẫu ngữ pháp「場合・のに」dùng để: Trường hợp và kết quả trái kỳ vọng. 場合 nêu tình huống để hướng dẫn cách xử lý. のに nêu kết quả trái điều đáng lẽ xảy ra, thường có sắc thái ngạc nhiên hoặc tiếc."
    },
    {
      "id": "mnn-45-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Dù đã hẹn nhưng anh ấy không đến.\": 約束した___彼は来ませんでした。",
      "answer": "のに",
      "acceptedAnswers": [
        "のに"
      ],
      "explanation": "Đáp án đúng là「のに」. Cách kết hợp: V thường／Aい + 場合；Nの／Aな + 場合；thể thường + のに."
    },
    {
      "id": "mnn-45-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Dù đã hẹn nhưng anh ấy không đến.\"",
      "options": [
        "に彼は来ま",
        "せんでした。",
        "約束したの"
      ],
      "answer": "約束したのに彼は来ませんでした。",
      "explanation": "Câu hoàn chỉnh: 約束したのに彼は来ませんでした。 (やくそくしたのにかれはきませんでした。). Ý nghĩa: Dù đã hẹn nhưng anh ấy không đến.."
    }
  ],
  "mnn-46": [
    {
      "id": "mnn-46-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ところ・ばかり・はず」: 今から出かける(___ )です。 (Tôi đang chuẩn bị ra ngoài.)",
      "options": [
        "かり",
        "ところ",
        "のに",
        "はず"
      ],
      "answer": "ところ",
      "explanation": "Áp dụng quy tắc: V từ điển／ている／た + ところ；Vたばかり；thể thường + はず. ところ phân biệt sắp, đang và vừa xong. たばかり là vừa mới theo cảm nhận; はず dự đoán dựa trên căn cứ."
    },
    {
      "id": "mnn-46-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Theo dự tính thì anh ấy đã đến rồi.\"?",
      "options": [
        "彼はもう着いたはずです。",
        "もう彼は着いたはずです。",
        "彼はもうはずです。着いた",
        "はずです。彼はもう着いた"
      ],
      "answer": "彼はもう着いたはずです。",
      "explanation": "Cấu trúc chuẩn: V từ điển／ている／た + ところ；Vたばかり；thể thường + はず. Trật tự câu: 彼はもう着いたはずです。."
    },
    {
      "id": "mnn-46-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 彼はもう着い [___] (Theo dự tính thì anh ấy đã đến rồi.)",
      "answer": "ところ",
      "acceptedAnswers": [
        "ところ",
        "ところ"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ところ」theo cấu trúc: V từ điển／ている／た + ところ；Vたばかり；thể thường + はず."
    },
    {
      "id": "mnn-46-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Theo dự tính thì anh ấy đã đến rồi.\"",
      "options": [
        "もう",
        "着いた",
        "はずです。",
        "彼は"
      ],
      "answer": "彼はもう着いたはずです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 彼はもう着いたはずです。. Lưu ý: Nのはず／Aなはず; たばかり không bắt buộc chỉ sự việc vài giây trước."
    },
    {
      "id": "mnn-46-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ところ・ばかり・はず」được sử dụng với mục đích chính nào?",
      "options": [
        "Giai đoạn hành động và suy luận",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Giai đoạn hành động và suy luận"
      ],
      "answer": "Giai đoạn hành động và suy luận",
      "explanation": "Mẫu ngữ pháp「ところ・ばかり・はず」dùng để: Giai đoạn hành động và suy luận. ところ phân biệt sắp, đang và vừa xong. たばかり là vừa mới theo cảm nhận; はず dự đoán dựa trên căn cứ."
    },
    {
      "id": "mnn-46-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đang chuẩn bị ra ngoài.\": 今から出かける___です。",
      "answer": "ところ",
      "acceptedAnswers": [
        "ところ"
      ],
      "explanation": "Đáp án đúng là「ところ」. Cách kết hợp: V từ điển／ている／た + ところ；Vたばかり；thể thường + はず."
    },
    {
      "id": "mnn-46-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đang chuẩn bị ra ngoài.\"",
      "options": [
        "かけると",
        "ころです。",
        "今から出"
      ],
      "answer": "今から出かけるところです。",
      "explanation": "Câu hoàn chỉnh: 今から出かけるところです。 (いまからでかけるところです。). Ý nghĩa: Tôi đang chuẩn bị ra ngoài.."
    }
  ],
  "mnn-47": [
    {
      "id": "mnn-47-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「そうだ（伝聞）・ようだ」: 天気予報によると、明日は晴れる(___ )。 (Theo dự báo, nghe nói ngày mai trời nắng.)",
      "options": [
        "うだ",
        "そうです",
        "のに",
        "聞）"
      ],
      "answer": "そうです",
      "explanation": "Áp dụng quy tắc: thể thường + そうだ；V thường／Aい + ようだ；Nの／Aな + ようだ. そうだ truyền lại thông tin từ nguồn khác. ようだ nêu suy luận từ dấu hiệu hoặc tình hình quan sát."
    },
    {
      "id": "mnn-47-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Có vẻ có ai đó trong phòng.\"?",
      "options": [
        "部屋に誰かいるようです。",
        "誰か部屋にいるようです。",
        "部屋に誰かようです。いる",
        "ようです。部屋に誰かいる"
      ],
      "answer": "部屋に誰かいるようです。",
      "explanation": "Cấu trúc chuẩn: thể thường + そうだ；V thường／Aい + ようだ；Nの／Aな + ようだ. Trật tự câu: 部屋に誰かいるようです。."
    },
    {
      "id": "mnn-47-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 部屋に誰かい [___] (Có vẻ có ai đó trong phòng.)",
      "answer": "そうです",
      "acceptedAnswers": [
        "そうです",
        "そうです"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「そうです」theo cấu trúc: thể thường + そうだ；V thường／Aい + ようだ；Nの／Aな + ようだ."
    },
    {
      "id": "mnn-47-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Có vẻ có ai đó trong phòng.\"",
      "options": [
        "誰か",
        "いる",
        "ようです。",
        "部屋に"
      ],
      "answer": "部屋に誰かいるようです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 部屋に誰かいるようです。. Lưu ý: Truyền tin giữ だ sau danh từ: 休みだそうです; vẻ bề ngoài dùng dạng nối khác."
    },
    {
      "id": "mnn-47-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「そうだ（伝聞）・ようだ」được sử dụng với mục đích chính nào?",
      "options": [
        "Truyền tin và suy đoán có căn cứ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Truyền tin và suy đoán có căn cứ"
      ],
      "answer": "Truyền tin và suy đoán có căn cứ",
      "explanation": "Mẫu ngữ pháp「そうだ（伝聞）・ようだ」dùng để: Truyền tin và suy đoán có căn cứ. そうだ truyền lại thông tin từ nguồn khác. ようだ nêu suy luận từ dấu hiệu hoặc tình hình quan sát."
    },
    {
      "id": "mnn-47-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Theo dự báo, nghe nói ngày mai trời nắng.\": 天気予報によると、明日は晴れる___。",
      "answer": "そうです",
      "acceptedAnswers": [
        "そうです"
      ],
      "explanation": "Đáp án đúng là「そうです」. Cách kết hợp: thể thường + そうだ；V thường／Aい + ようだ；Nの／Aな + ようだ."
    },
    {
      "id": "mnn-47-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Theo dự báo, nghe nói ngày mai trời nắng.\"",
      "options": [
        "ると、明日は晴",
        "れるそうです。",
        "天気予報によ"
      ],
      "answer": "天気予報によると、明日は晴れるそうです。",
      "explanation": "Câu hoàn chỉnh: 天気予報によると、明日は晴れるそうです。 (てんきよほうによると、あしたははれるそうです。). Ý nghĩa: Theo dự báo, nghe nói ngày mai trời nắng.."
    }
  ],
  "mnn-48": [
    {
      "id": "mnn-48-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「使役形・させていただく」: 母は子供に野菜を食べ(___ )。 (Mẹ cho con ăn rau.)",
      "options": [
        "させました",
        "だく",
        "のに",
        "役形"
      ],
      "answer": "させました",
      "explanation": "Áp dụng quy tắc: nhóm I u→aせる；nhóm II る→させる；する→させる；来る→こさせる. Thể sai khiến chỉ cho phép hoặc bắt người khác làm tùy ngữ cảnh. させていただく thường dùng khi xin phép và nhận sự cho phép."
    },
    {
      "id": "mnn-48-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Hôm nay xin phép cho tôi về sớm được không?\"?",
      "options": [
        "今日は早く帰らせていただけませんか。",
        "早く今日は帰らせていただけませんか。",
        "今日は早くいただけませんか。帰らせて",
        "いただけませんか。今日は早く帰らせて"
      ],
      "answer": "今日は早く帰らせていただけませんか。",
      "explanation": "Cấu trúc chuẩn: nhóm I u→aせる；nhóm II る→させる；する→させる；来る→こさせる. Trật tự câu: 今日は早く帰らせていただけませんか。."
    },
    {
      "id": "mnn-48-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 今日は早く帰らせて [___] (Hôm nay xin phép cho tôi về sớm được không?)",
      "answer": "させました",
      "acceptedAnswers": [
        "させました",
        "させました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「させました」theo cấu trúc: nhóm I u→aせる；nhóm II る→させる；する→させる；来る→こさせる."
    },
    {
      "id": "mnn-48-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Hôm nay xin phép cho tôi về sớm được không?\"",
      "options": [
        "早く",
        "帰らせて",
        "いただけませんか。",
        "今日は"
      ],
      "answer": "今日は早く帰らせていただけませんか。",
      "explanation": "Trật tự ngữ pháp chính xác là: 今日は早く帰らせていただけませんか。. Lưu ý: Người bị sai khiến đi với に／を tùy động từ và cấu trúc; không mặc định luôn mang nghĩa ép buộc."
    },
    {
      "id": "mnn-48-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「使役形・させていただく」được sử dụng với mục đích chính nào?",
      "options": [
        "Sai khiến và xin phép hành động",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Sai khiến và xin phép hành động"
      ],
      "answer": "Sai khiến và xin phép hành động",
      "explanation": "Mẫu ngữ pháp「使役形・させていただく」dùng để: Sai khiến và xin phép hành động. Thể sai khiến chỉ cho phép hoặc bắt người khác làm tùy ngữ cảnh. させていただく thường dùng khi xin phép và nhận sự cho phép."
    },
    {
      "id": "mnn-48-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Mẹ cho con ăn rau.\": 母は子供に野菜を食べ___。",
      "answer": "させました",
      "acceptedAnswers": [
        "させました"
      ],
      "explanation": "Đáp án đúng là「させました」. Cách kết hợp: nhóm I u→aせる；nhóm II る→させる；する→させる；来る→こさせる."
    },
    {
      "id": "mnn-48-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Mẹ cho con ăn rau.\"",
      "options": [
        "野菜を食べ",
        "させました。",
        "母は子供に"
      ],
      "answer": "母は子供に野菜を食べさせました。",
      "explanation": "Câu hoàn chỉnh: 母は子供に野菜を食べさせました。 (はははこどもにやさいをたべさせました。). Ý nghĩa: Mẹ cho con ăn rau.."
    }
  ],
  "mnn-49": [
    {
      "id": "mnn-49-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「尊敬語・お〜になる・られる」: 先生はもうお帰り(___ )。 (Thầy cô đã về rồi.)",
      "options": [
        "なる",
        "になりました",
        "のに",
        "れる"
      ],
      "answer": "になりました",
      "explanation": "Áp dụng quy tắc: お + thân ます + になる；V bị động mang nghĩa tôn kính；động từ đặc biệt. Tôn kính ngữ nâng hành động của người cần tôn trọng. いらっしゃる thay 行く／来る／いる; おっしゃる thay 言う; 召し上がる thay 食べる／飲む."
    },
    {
      "id": "mnn-49-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Ngài sẽ đến lúc mấy giờ?\"?",
      "options": [
        "何時にいらっしゃいますか。ね",
        "何時にいらっしゃいますか。よ",
        "何時にいらっしゃいますか。",
        "いらっしゃいますか。何時に"
      ],
      "answer": "何時にいらっしゃいますか。",
      "explanation": "Cấu trúc chuẩn: お + thân ます + になる；V bị động mang nghĩa tôn kính；động từ đặc biệt. Trật tự câu: 何時にいらっしゃいますか。."
    },
    {
      "id": "mnn-49-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 何時にいらっ [___] (Ngài sẽ đến lúc mấy giờ?)",
      "answer": "になりました",
      "acceptedAnswers": [
        "になりました",
        "になりました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「になりました」theo cấu trúc: お + thân ます + になる；V bị động mang nghĩa tôn kính；động từ đặc biệt."
    },
    {
      "id": "mnn-49-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Ngài sẽ đến lúc mấy giờ?\"",
      "options": [
        "いらっしゃいますか。",
        "何時に"
      ],
      "answer": "何時にいらっしゃいますか。",
      "explanation": "Trật tự ngữ pháp chính xác là: 何時にいらっしゃいますか。. Lưu ý: Không dùng tôn kính ngữ để nâng hành động của chính mình khi nói với người ngoài."
    },
    {
      "id": "mnn-49-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「尊敬語・お〜になる・られる」được sử dụng với mục đích chính nào?",
      "options": [
        "Tôn kính ngữ",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Tôn kính ngữ"
      ],
      "answer": "Tôn kính ngữ",
      "explanation": "Mẫu ngữ pháp「尊敬語・お〜になる・られる」dùng để: Tôn kính ngữ. Tôn kính ngữ nâng hành động của người cần tôn trọng. いらっしゃる thay 行く／来る／いる; おっしゃる thay 言う; 召し上がる thay 食べる／飲む."
    },
    {
      "id": "mnn-49-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Thầy cô đã về rồi.\": 先生はもうお帰り___。",
      "answer": "になりました",
      "acceptedAnswers": [
        "になりました"
      ],
      "explanation": "Đáp án đúng là「になりました」. Cách kết hợp: お + thân ます + になる；V bị động mang nghĩa tôn kính；động từ đặc biệt."
    },
    {
      "id": "mnn-49-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Thầy cô đã về rồi.\"",
      "options": [
        "お帰りにな",
        "りました。",
        "先生はもう"
      ],
      "answer": "先生はもうお帰りになりました。",
      "explanation": "Câu hoàn chỉnh: 先生はもうお帰りになりました。 (せんせいはもうおかえりになりました。). Ý nghĩa: Thầy cô đã về rồi.."
    }
  ],
  "mnn-50": [
    {
      "id": "mnn-50-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「謙譲語・お／ご〜する・ございます」: 私がご案内(___ )。 (Tôi xin được hướng dẫn quý khách.)",
      "options": [
        "いたします",
        "する",
        "のに",
        "ます"
      ],
      "answer": "いたします",
      "explanation": "Áp dụng quy tắc: お + thân ます + する；ご + N Hán + する；いたす／申す／伺う. Khiêm nhường ngữ hạ hành động phía mình để thể hiện sự tôn trọng người liên quan. 申す thay 言う; 伺う thay thăm/hỏi trong ngữ cảnh phù hợp."
    },
    {
      "id": "mnn-50-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Ngày mai tôi xin đến văn phòng.\"?",
      "options": [
        "明日事務所に伺います。",
        "事務所に明日伺います。",
        "明日伺います。事務所に",
        "伺います。明日事務所に"
      ],
      "answer": "明日事務所に伺います。",
      "explanation": "Cấu trúc chuẩn: お + thân ます + する；ご + N Hán + する；いたす／申す／伺う. Trật tự câu: 明日事務所に伺います。."
    },
    {
      "id": "mnn-50-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 明日事務所 [___] (Ngày mai tôi xin đến văn phòng.)",
      "answer": "いたします",
      "acceptedAnswers": [
        "いたします",
        "いたします"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「いたします」theo cấu trúc: お + thân ます + する；ご + N Hán + する；いたす／申す／伺う."
    },
    {
      "id": "mnn-50-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Ngày mai tôi xin đến văn phòng.\"",
      "options": [
        "事務所に",
        "伺います。",
        "明日"
      ],
      "answer": "明日事務所に伺います。",
      "explanation": "Trật tự ngữ pháp chính xác là: 明日事務所に伺います。. Lưu ý: Không hạ hành động của khách bằng khiêm nhường ngữ; dùng tôn kính ngữ cho phía khách."
    },
    {
      "id": "mnn-50-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「謙譲語・お／ご〜する・ございます」được sử dụng với mục đích chính nào?",
      "options": [
        "Khiêm nhường ngữ và lời nói trang trọng",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Khiêm nhường ngữ và lời nói trang trọng"
      ],
      "answer": "Khiêm nhường ngữ và lời nói trang trọng",
      "explanation": "Mẫu ngữ pháp「謙譲語・お／ご〜する・ございます」dùng để: Khiêm nhường ngữ và lời nói trang trọng. Khiêm nhường ngữ hạ hành động phía mình để thể hiện sự tôn trọng người liên quan. 申す thay 言う; 伺う thay thăm/hỏi trong ngữ cảnh phù hợp."
    },
    {
      "id": "mnn-50-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi xin được hướng dẫn quý khách.\": 私がご案内___。",
      "answer": "いたします",
      "acceptedAnswers": [
        "いたします"
      ],
      "explanation": "Đáp án đúng là「いたします」. Cách kết hợp: お + thân ます + する；ご + N Hán + する；いたす／申す／伺う."
    },
    {
      "id": "mnn-50-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi xin được hướng dẫn quý khách.\"",
      "options": [
        "案内いた",
        "します。",
        "私がご"
      ],
      "answer": "私がご案内いたします。",
      "explanation": "Câu hoàn chỉnh: 私がご案内いたします。 (わたしがごあんないいたします。). Ý nghĩa: Tôi xin được hướng dẫn quý khách.."
    }
  ],
  "bridge-n3-01": [
    {
      "id": "bridge-n3-01-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ことにする・ことになる・ことにしている」: 毎朝歩く(___ )。 (Tôi đã quyết định đi bộ mỗi sáng.)",
      "options": [
        "いる",
        "ことにしました",
        "なる",
        "のに"
      ],
      "answer": "ことにしました",
      "explanation": "Áp dụng quy tắc: V từ điển／ない + ことにする／ことになる. ことにする nhấn mạnh quyết định của chủ thể; ことになる nhấn mạnh kết quả sắp xếp hoặc quyết định bên ngoài. ことにしている là quy tắc cá nhân duy trì."
    },
    {
      "id": "bridge-n3-01-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Đã có quyết định rằng từ tháng sau tôi làm việc ở Osaka.\"?",
      "options": [
        "来月から大阪で働くことになりました。",
        "大阪で来月から働くことになりました。",
        "来月から大阪でなりました。働くことに",
        "なりました。来月から大阪で働くことに"
      ],
      "answer": "来月から大阪で働くことになりました。",
      "explanation": "Cấu trúc chuẩn: V từ điển／ない + ことにする／ことになる. Trật tự câu: 来月から大阪で働くことになりました。."
    },
    {
      "id": "bridge-n3-01-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 来月から大阪で働く [___] (Đã có quyết định rằng từ tháng sau tôi làm việc ở Osaka.)",
      "answer": "ことにしました",
      "acceptedAnswers": [
        "ことにしました",
        "ことにしました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ことにしました」theo cấu trúc: V từ điển／ない + ことにする／ことになる."
    },
    {
      "id": "bridge-n3-01-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Đã có quyết định rằng từ tháng sau tôi làm việc ở Osaka.\"",
      "options": [
        "大阪で",
        "働くことに",
        "なりました。",
        "来月から"
      ],
      "answer": "来月から大阪で働くことになりました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 来月から大阪で働くことになりました。. Lưu ý: Không dùng ことになる để khẳng định mọi quyết định là do người khác ép buộc."
    },
    {
      "id": "bridge-n3-01-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ことにする・ことになる・ことにしている」được sử dụng với mục đích chính nào?",
      "options": [
        "Quyết định và thói quen",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Quyết định và thói quen"
      ],
      "answer": "Quyết định và thói quen",
      "explanation": "Mẫu ngữ pháp「ことにする・ことになる・ことにしている」dùng để: Quyết định và thói quen. ことにする nhấn mạnh quyết định của chủ thể; ことになる nhấn mạnh kết quả sắp xếp hoặc quyết định bên ngoài. ことにしている là quy tắc cá nhân duy trì."
    },
    {
      "id": "bridge-n3-01-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đã quyết định đi bộ mỗi sáng.\": 毎朝歩く___。",
      "answer": "ことにしました",
      "acceptedAnswers": [
        "ことにしました"
      ],
      "explanation": "Đáp án đúng là「ことにしました」. Cách kết hợp: V từ điển／ない + ことにする／ことになる."
    },
    {
      "id": "bridge-n3-01-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đã quyết định đi bộ mỗi sáng.\"",
      "options": [
        "ことにし",
        "ました。",
        "毎朝歩く"
      ],
      "answer": "毎朝歩くことにしました。",
      "explanation": "Câu hoàn chỉnh: 毎朝歩くことにしました。 (まいあさあるくことにしました。). Ý nghĩa: Tôi đã quyết định đi bộ mỗi sáng.."
    }
  ],
  "bridge-n3-02": [
    {
      "id": "bridge-n3-02-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「てくる・ていく・ようになる」: 最近、日本語がわかっ(___ )。 (Gần đây tôi dần hiểu tiếng Nhật hơn.)",
      "options": [
        "いく",
        "てきました",
        "なる",
        "のに"
      ],
      "answer": "てきました",
      "explanation": "Áp dụng quy tắc: Vてくる／Vていく；V từ điển／khả năng + ようになる. てくる nhìn thay đổi từ quá khứ đến hiện tại; ていく nhìn diễn biến từ mốc hiện tại về sau. ようになる đánh dấu thay đổi về khả năng hay thói quen."
    },
    {
      "id": "bridge-n3-02-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Từ nay tôi vẫn sẽ tiếp tục học.\"?",
      "options": [
        "これからも勉強を続けていきます。",
        "勉強をこれからも続けていきます。",
        "これからも勉強をいきます。続けて",
        "いきます。これからも勉強を続けて"
      ],
      "answer": "これからも勉強を続けていきます。",
      "explanation": "Cấu trúc chuẩn: Vてくる／Vていく；V từ điển／khả năng + ようになる. Trật tự câu: これからも勉強を続けていきます。."
    },
    {
      "id": "bridge-n3-02-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: これからも勉強を [___] (Từ nay tôi vẫn sẽ tiếp tục học.)",
      "answer": "てきました",
      "acceptedAnswers": [
        "てきました",
        "てきました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「てきました」theo cấu trúc: Vてくる／Vていく；V từ điển／khả năng + ようになる."
    },
    {
      "id": "bridge-n3-02-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Từ nay tôi vẫn sẽ tiếp tục học.\"",
      "options": [
        "勉強を",
        "続けて",
        "いきます。",
        "これからも"
      ],
      "answer": "これからも勉強を続けていきます。",
      "explanation": "Trật tự ngữ pháp chính xác là: これからも勉強を続けていきます。. Lưu ý: Phân biệt nghĩa thời gian với nghĩa di chuyển thực của くる／いく."
    },
    {
      "id": "bridge-n3-02-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「てくる・ていく・ようになる」được sử dụng với mục đích chính nào?",
      "options": [
        "Thay đổi theo thời gian",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Thay đổi theo thời gian"
      ],
      "answer": "Thay đổi theo thời gian",
      "explanation": "Mẫu ngữ pháp「てくる・ていく・ようになる」dùng để: Thay đổi theo thời gian. てくる nhìn thay đổi từ quá khứ đến hiện tại; ていく nhìn diễn biến từ mốc hiện tại về sau. ようになる đánh dấu thay đổi về khả năng hay thói quen."
    },
    {
      "id": "bridge-n3-02-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Gần đây tôi dần hiểu tiếng Nhật hơn.\": 最近、日本語がわかっ___。",
      "answer": "てきました",
      "acceptedAnswers": [
        "てきました"
      ],
      "explanation": "Đáp án đúng là「てきました」. Cách kết hợp: Vてくる／Vていく；V từ điển／khả năng + ようになる."
    },
    {
      "id": "bridge-n3-02-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Gần đây tôi dần hiểu tiếng Nhật hơn.\"",
      "options": [
        "語がわかっ",
        "てきました。",
        "最近、日本"
      ],
      "answer": "最近、日本語がわかってきました。",
      "explanation": "Câu hoàn chỉnh: 最近、日本語がわかってきました。 (さいきん、にほんごがわかってきました。). Ý nghĩa: Gần đây tôi dần hiểu tiếng Nhật hơn.."
    }
  ],
  "bridge-n3-03": [
    {
      "id": "bridge-n3-03-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ようとする・ようとしない・かける」: 出かけ(___ )とき、電話が鳴りました。 (Khi tôi định ra ngoài thì điện thoại reo.)",
      "options": [
        "ける",
        "ない",
        "のに",
        "ようとした"
      ],
      "answer": "ようとした",
      "explanation": "Áp dụng quy tắc: V ý chí + とする／としない；thân ます + かける. ようとする diễn tả định hoặc cố thực hiện. ようとしない nói không có ý muốn thử; かける diễn tả mới bắt đầu hoặc dang dở."
    },
    {
      "id": "bridge-n3-03-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Trên bàn có một cuốn sách đang đọc dở.\"?",
      "options": [
        "机に読みかけの本があります。",
        "読みかけの机に本があります。",
        "机に読みかけのあります。本が",
        "あります。机に読みかけの本が"
      ],
      "answer": "机に読みかけの本があります。",
      "explanation": "Cấu trúc chuẩn: V ý chí + とする／としない；thân ます + かける. Trật tự câu: 机に読みかけの本があります。."
    },
    {
      "id": "bridge-n3-03-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 机に読みかけの [___] (Trên bàn có một cuốn sách đang đọc dở.)",
      "answer": "ようとした",
      "acceptedAnswers": [
        "ようとした",
        "ようとした"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ようとした」theo cấu trúc: V ý chí + とする／としない；thân ます + かける."
    },
    {
      "id": "bridge-n3-03-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Trên bàn có một cuốn sách đang đọc dở.\"",
      "options": [
        "読みかけの",
        "本が",
        "あります。",
        "机に"
      ],
      "answer": "机に読みかけの本があります。",
      "explanation": "Trật tự ngữ pháp chính xác là: 机に読みかけの本があります。. Lưu ý: かける không tự xác nhận hành động đã hoàn tất; dùng ngữ cảnh để phân biệt bắt đầu và bỏ dở."
    },
    {
      "id": "bridge-n3-03-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ようとする・ようとしない・かける」được sử dụng với mục đích chính nào?",
      "options": [
        "Hành động sắp xảy ra và cố thử",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Hành động sắp xảy ra và cố thử"
      ],
      "answer": "Hành động sắp xảy ra và cố thử",
      "explanation": "Mẫu ngữ pháp「ようとする・ようとしない・かける」dùng để: Hành động sắp xảy ra và cố thử. ようとする diễn tả định hoặc cố thực hiện. ようとしない nói không có ý muốn thử; かける diễn tả mới bắt đầu hoặc dang dở."
    },
    {
      "id": "bridge-n3-03-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Khi tôi định ra ngoài thì điện thoại reo.\": 出かけ___とき、電話が鳴りました。",
      "answer": "ようとした",
      "acceptedAnswers": [
        "ようとした"
      ],
      "explanation": "Đáp án đúng là「ようとした」. Cách kết hợp: V ý chí + とする／としない；thân ます + かける."
    },
    {
      "id": "bridge-n3-03-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Khi tôi định ra ngoài thì điện thoại reo.\"",
      "options": [
        "したとき、電話",
        "が鳴りました。",
        "出かけようと"
      ],
      "answer": "出かけようとしたとき、電話が鳴りました。",
      "explanation": "Câu hoàn chỉnh: 出かけようとしたとき、電話が鳴りました。 (でかけようとしたとき、でんわがなりました。). Ý nghĩa: Khi tôi định ra ngoài thì điện thoại reo.."
    }
  ],
  "bridge-n3-04": [
    {
      "id": "bridge-n3-04-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「始める・出す・続ける・終わる」: 子供が急に泣き(___ )。 (Đứa trẻ đột nhiên òa khóc.)",
      "options": [
        "ける",
        "のに",
        "出しました",
        "出す"
      ],
      "answer": "出しました",
      "explanation": "Áp dụng quy tắc: thân ます + 始める／出す／続ける／終わる. 始める nói bắt đầu; 出す thường nhấn mạnh khởi phát đột ngột; 続ける nói duy trì; 終わる nói kết thúc hành động có điểm hoàn thành."
    },
    {
      "id": "bridge-n3-04-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi đã làm liên tục ở công ty này mười năm.\"?",
      "options": [
        "この会社で十年間働き続けています。",
        "十年間この会社で働き続けています。",
        "この会社で十年間います。働き続けて",
        "います。この会社で十年間働き続けて"
      ],
      "answer": "この会社で十年間働き続けています。",
      "explanation": "Cấu trúc chuẩn: thân ます + 始める／出す／続ける／終わる. Trật tự câu: この会社で十年間働き続けています。."
    },
    {
      "id": "bridge-n3-04-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この会社で十年間 [___] (Tôi đã làm liên tục ở công ty này mười năm.)",
      "answer": "出しました",
      "acceptedAnswers": [
        "出しました",
        "出しました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「出しました」theo cấu trúc: thân ます + 始める／出す／続ける／終わる."
    },
    {
      "id": "bridge-n3-04-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi đã làm liên tục ở công ty này mười năm.\"",
      "options": [
        "十年間",
        "働き続けて",
        "います。",
        "この会社で"
      ],
      "answer": "この会社で十年間働き続けています。",
      "explanation": "Trật tự ngữ pháp chính xác là: この会社で十年間働き続けています。. Lưu ý: Không phải mọi động từ đều kết hợp tự nhiên với cả bốn dạng; xét tính chất hành động."
    },
    {
      "id": "bridge-n3-04-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「始める・出す・続ける・終わる」được sử dụng với mục đích chính nào?",
      "options": [
        "Bắt đầu, tiếp diễn và hoàn tất",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Bắt đầu, tiếp diễn và hoàn tất"
      ],
      "answer": "Bắt đầu, tiếp diễn và hoàn tất",
      "explanation": "Mẫu ngữ pháp「始める・出す・続ける・終わる」dùng để: Bắt đầu, tiếp diễn và hoàn tất. 始める nói bắt đầu; 出す thường nhấn mạnh khởi phát đột ngột; 続ける nói duy trì; 終わる nói kết thúc hành động có điểm hoàn thành."
    },
    {
      "id": "bridge-n3-04-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Đứa trẻ đột nhiên òa khóc.\": 子供が急に泣き___。",
      "answer": "出しました",
      "acceptedAnswers": [
        "出しました"
      ],
      "explanation": "Đáp án đúng là「出しました」. Cách kết hợp: thân ます + 始める／出す／続ける／終わる."
    },
    {
      "id": "bridge-n3-04-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Đứa trẻ đột nhiên òa khóc.\"",
      "options": [
        "に泣き出",
        "しました。",
        "子供が急"
      ],
      "answer": "子供が急に泣き出しました。",
      "explanation": "Câu hoàn chỉnh: 子供が急に泣き出しました。 (こどもがきゅうになきだしました。). Ý nghĩa: Đứa trẻ đột nhiên òa khóc.."
    }
  ],
  "bridge-n3-05": [
    {
      "id": "bridge-n3-05-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「間・間に・うちに・ないうちに」: 温かい(___ )食べてください。 (Hãy ăn khi còn nóng.)",
      "options": [
        "うちに",
        "ちに",
        "のに",
        "間に"
      ],
      "answer": "うちに",
      "explanation": "Áp dụng quy tắc: Vている／Aい + 間；Nの間；thể thường + うちに. 間 diễn tả suốt khoảng thời gian; 間に đặt một sự kiện trong khoảng đó. うちに khuyên tranh thủ trước khi điều kiện đổi hoặc nói thay đổi xảy ra trong lúc làm."
    },
    {
      "id": "bridge-n3-05-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Bưu kiện đã đến trong lúc tôi vắng nhà.\"?",
      "options": [
        "私が留守の間に、荷物が届きました。",
        "留守の間に、私が荷物が届きました。",
        "私が留守の間に、届きました。荷物が",
        "届きました。私が留守の間に、荷物が"
      ],
      "answer": "私が留守の間に、荷物が届きました。",
      "explanation": "Cấu trúc chuẩn: Vている／Aい + 間；Nの間；thể thường + うちに. Trật tự câu: 私が留守の間に、荷物が届きました。."
    },
    {
      "id": "bridge-n3-05-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 私が留守の間に、 [___] (Bưu kiện đã đến trong lúc tôi vắng nhà.)",
      "answer": "うちに",
      "acceptedAnswers": [
        "うちに",
        "うちに"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「うちに」theo cấu trúc: Vている／Aい + 間；Nの間；thể thường + うちに."
    },
    {
      "id": "bridge-n3-05-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Bưu kiện đã đến trong lúc tôi vắng nhà.\"",
      "options": [
        "留守の間に、",
        "荷物が",
        "届きました。",
        "私が"
      ],
      "answer": "私が留守の間に、荷物が届きました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 私が留守の間に、荷物が届きました。. Lưu ý: Nのうちに／Aなうちに; 間に không có nghĩa hành động kéo dài suốt cả khoảng."
    },
    {
      "id": "bridge-n3-05-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「間・間に・うちに・ないうちに」được sử dụng với mục đích chính nào?",
      "options": [
        "Trong lúc và trước khi thay đổi",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Trong lúc và trước khi thay đổi"
      ],
      "answer": "Trong lúc và trước khi thay đổi",
      "explanation": "Mẫu ngữ pháp「間・間に・うちに・ないうちに」dùng để: Trong lúc và trước khi thay đổi. 間 diễn tả suốt khoảng thời gian; 間に đặt một sự kiện trong khoảng đó. うちに khuyên tranh thủ trước khi điều kiện đổi hoặc nói thay đổi xảy ra trong lúc làm."
    },
    {
      "id": "bridge-n3-05-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Hãy ăn khi còn nóng.\": 温かい___食べてください。",
      "answer": "うちに",
      "acceptedAnswers": [
        "うちに"
      ],
      "explanation": "Đáp án đúng là「うちに」. Cách kết hợp: Vている／Aい + 間；Nの間；thể thường + うちに."
    },
    {
      "id": "bridge-n3-05-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Hãy ăn khi còn nóng.\"",
      "options": [
        "ちに食べて",
        "ください。",
        "温かいう"
      ],
      "answer": "温かいうちに食べてください。",
      "explanation": "Câu hoàn chỉnh: 温かいうちに食べてください。 (あたたかいうちにたべてください。). Ý nghĩa: Hãy ăn khi còn nóng.."
    }
  ],
  "bridge-n3-06": [
    {
      "id": "bridge-n3-06-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「たびに・最中に・ところに・ところで」: この歌を聞く(___ )故郷を思い出します。 (Mỗi lần nghe bài hát này tôi lại nhớ quê.)",
      "options": [
        "たびに",
        "のに",
        "ろに",
        "中に"
      ],
      "answer": "たびに",
      "explanation": "Áp dụng quy tắc: V từ điển／Nの + たびに；Vている／Nの + 最中に；Vところに. たびに chỉ sự lặp lại mỗi khi có sự kiện; 最中に nhấn mạnh đúng lúc hoạt động đang diễn ra; ところに thường có sự kiện xen vào."
    },
    {
      "id": "bridge-n3-06-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Đang giữa cuộc họp thì mất điện.\"?",
      "options": [
        "会議の最中に、停電になりました。",
        "最中に、会議の停電になりました。",
        "会議の最中に、なりました。停電に",
        "なりました。会議の最中に、停電に"
      ],
      "answer": "会議の最中に、停電になりました。",
      "explanation": "Cấu trúc chuẩn: V từ điển／Nの + たびに；Vている／Nの + 最中に；Vところに. Trật tự câu: 会議の最中に、停電になりました。."
    },
    {
      "id": "bridge-n3-06-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 会議の最中に、停 [___] (Đang giữa cuộc họp thì mất điện.)",
      "answer": "たびに",
      "acceptedAnswers": [
        "たびに",
        "たびに"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「たびに」theo cấu trúc: V từ điển／Nの + たびに；Vている／Nの + 最中に；Vところに."
    },
    {
      "id": "bridge-n3-06-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Đang giữa cuộc họp thì mất điện.\"",
      "options": [
        "最中に、",
        "停電に",
        "なりました。",
        "会議の"
      ],
      "answer": "会議の最中に、停電になりました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 会議の最中に、停電になりました。. Lưu ý: ところで ở đầu câu có thể chuyển chủ đề, khác dạng chỉ thời điểm sau động từ."
    },
    {
      "id": "bridge-n3-06-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「たびに・最中に・ところに・ところで」được sử dụng với mục đích chính nào?",
      "options": [
        "Mốc thời gian và mỗi lần",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mốc thời gian và mỗi lần"
      ],
      "answer": "Mốc thời gian và mỗi lần",
      "explanation": "Mẫu ngữ pháp「たびに・最中に・ところに・ところで」dùng để: Mốc thời gian và mỗi lần. たびに chỉ sự lặp lại mỗi khi có sự kiện; 最中に nhấn mạnh đúng lúc hoạt động đang diễn ra; ところに thường có sự kiện xen vào."
    },
    {
      "id": "bridge-n3-06-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Mỗi lần nghe bài hát này tôi lại nhớ quê.\": この歌を聞く___故郷を思い出します。",
      "answer": "たびに",
      "acceptedAnswers": [
        "たびに"
      ],
      "explanation": "Đáp án đúng là「たびに」. Cách kết hợp: V từ điển／Nの + たびに；Vている／Nの + 最中に；Vところに."
    },
    {
      "id": "bridge-n3-06-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Mỗi lần nghe bài hát này tôi lại nhớ quê.\"",
      "options": [
        "たびに故郷を",
        "思い出します。",
        "この歌を聞く"
      ],
      "answer": "この歌を聞くたびに故郷を思い出します。",
      "explanation": "Câu hoàn chỉnh: この歌を聞くたびに故郷を思い出します。 (このうたをきくたびにふるさとをおもいだします。). Ý nghĩa: Mỗi lần nghe bài hát này tôi lại nhớ quê.."
    }
  ],
  "bridge-n3-07": [
    {
      "id": "bridge-n3-07-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「まま・っぱなし・ずに」: 窓を開けた(___ )寝ました。 (Tôi ngủ mà vẫn để cửa sổ mở.)",
      "options": [
        "ずに",
        "なし",
        "のに",
        "まま"
      ],
      "answer": "まま",
      "explanation": "Áp dụng quy tắc: Vた／Vない／Nの + まま；thân ます + っぱなし；Vない bỏ ない + ずに. まま giữ trạng thái không đổi. っぱなし thường nói để mặc hoặc liên tục mà không xử lý; ずに là cách nói không làm hành động đầu."
    },
    {
      "id": "bridge-n3-07-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Đừng để đèn bật suốt như vậy.\"?",
      "options": [
        "電気をつけっぱなしにしないでください。",
        "つけっぱなしに電気をしないでください。",
        "電気をつけっぱなしにください。しないで",
        "ください。電気をつけっぱなしにしないで"
      ],
      "answer": "電気をつけっぱなしにしないでください。",
      "explanation": "Cấu trúc chuẩn: Vた／Vない／Nの + まま；thân ます + っぱなし；Vない bỏ ない + ずに. Trật tự câu: 電気をつけっぱなしにしないでください。."
    },
    {
      "id": "bridge-n3-07-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 電気をつけっぱなし [___] (Đừng để đèn bật suốt như vậy.)",
      "answer": "まま",
      "acceptedAnswers": [
        "まま",
        "まま"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「まま」theo cấu trúc: Vた／Vない／Nの + まま；thân ます + っぱなし；Vない bỏ ない + ずに."
    },
    {
      "id": "bridge-n3-07-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Đừng để đèn bật suốt như vậy.\"",
      "options": [
        "つけっぱなしに",
        "しないで",
        "ください。",
        "電気を"
      ],
      "answer": "電気をつけっぱなしにしないでください。",
      "explanation": "Trật tự ngữ pháp chính xác là: 電気をつけっぱなしにしないでください。. Lưu ý: する→せずに; っぱなし có sắc thái thiếu chăm sóc trong nhiều ngữ cảnh."
    },
    {
      "id": "bridge-n3-07-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「まま・っぱなし・ずに」được sử dụng với mục đích chính nào?",
      "options": [
        "Giữ nguyên và để mặc",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Giữ nguyên và để mặc"
      ],
      "answer": "Giữ nguyên và để mặc",
      "explanation": "Mẫu ngữ pháp「まま・っぱなし・ずに」dùng để: Giữ nguyên và để mặc. まま giữ trạng thái không đổi. っぱなし thường nói để mặc hoặc liên tục mà không xử lý; ずに là cách nói không làm hành động đầu."
    },
    {
      "id": "bridge-n3-07-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi ngủ mà vẫn để cửa sổ mở.\": 窓を開けた___寝ました。",
      "answer": "まま",
      "acceptedAnswers": [
        "まま"
      ],
      "explanation": "Đáp án đúng là「まま」. Cách kết hợp: Vた／Vない／Nの + まま；thân ます + っぱなし；Vない bỏ ない + ずに."
    },
    {
      "id": "bridge-n3-07-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi ngủ mà vẫn để cửa sổ mở.\"",
      "options": [
        "たまま寝",
        "ました。",
        "窓を開け"
      ],
      "answer": "窓を開けたまま寝ました。",
      "explanation": "Câu hoàn chỉnh: 窓を開けたまま寝ました。 (まどをあけたままねました。). Ý nghĩa: Tôi ngủ mà vẫn để cửa sổ mở.."
    }
  ],
  "bridge-n3-08": [
    {
      "id": "bridge-n3-08-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「おかげで・せいで・ために」: 友達の(___ )仕事が早く終わりました。 (Nhờ bạn giúp nên công việc xong sớm.)",
      "options": [
        "いで",
        "おかげで",
        "のに",
        "めに"
      ],
      "answer": "おかげで",
      "explanation": "Áp dụng quy tắc: thể thường + おかげで／せいで；Nの／Aな + おかげで／せいで. おかげで quy kết quả thuận lợi cho một nguyên nhân; せいで quy kết quả bất lợi. ために chỉ nguyên nhân theo văn phong khách quan hơn."
    },
    {
      "id": "bridge-n3-08-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Do tuyết nên xe buýt đến muộn.\"?",
      "options": [
        "雪のせいで、バスが遅れました。",
        "せいで、雪のバスが遅れました。",
        "雪のせいで、遅れました。バスが",
        "遅れました。雪のせいで、バスが"
      ],
      "answer": "雪のせいで、バスが遅れました。",
      "explanation": "Cấu trúc chuẩn: thể thường + おかげで／せいで；Nの／Aな + おかげで／せいで. Trật tự câu: 雪のせいで、バスが遅れました。."
    },
    {
      "id": "bridge-n3-08-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 雪のせいで、バ [___] (Do tuyết nên xe buýt đến muộn.)",
      "answer": "おかげで",
      "acceptedAnswers": [
        "おかげで",
        "おかげで"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「おかげで」theo cấu trúc: thể thường + おかげで／せいで；Nの／Aな + おかげで／せいで."
    },
    {
      "id": "bridge-n3-08-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Do tuyết nên xe buýt đến muộn.\"",
      "options": [
        "せいで、",
        "バスが",
        "遅れました。",
        "雪の"
      ],
      "answer": "雪のせいで、バスが遅れました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 雪のせいで、バスが遅れました。. Lưu ý: おかげで có thể mang ý mỉa mai, nhưng cần ngữ cảnh rõ; không dùng mặc định cho thất bại."
    },
    {
      "id": "bridge-n3-08-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「おかげで・せいで・ために」được sử dụng với mục đích chính nào?",
      "options": [
        "Nguyên nhân tốt và xấu",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nguyên nhân tốt và xấu"
      ],
      "answer": "Nguyên nhân tốt và xấu",
      "explanation": "Mẫu ngữ pháp「おかげで・せいで・ために」dùng để: Nguyên nhân tốt và xấu. おかげで quy kết quả thuận lợi cho một nguyên nhân; せいで quy kết quả bất lợi. ために chỉ nguyên nhân theo văn phong khách quan hơn."
    },
    {
      "id": "bridge-n3-08-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Nhờ bạn giúp nên công việc xong sớm.\": 友達の___仕事が早く終わりました。",
      "answer": "おかげで",
      "acceptedAnswers": [
        "おかげで"
      ],
      "explanation": "Đáp án đúng là「おかげで」. Cách kết hợp: thể thường + おかげで／せいで；Nの／Aな + おかげで／せいで."
    },
    {
      "id": "bridge-n3-08-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Nhờ bạn giúp nên công việc xong sớm.\"",
      "options": [
        "で仕事が早く",
        "終わりました。",
        "友達のおかげ"
      ],
      "answer": "友達のおかげで仕事が早く終わりました。",
      "explanation": "Câu hoàn chỉnh: 友達のおかげで仕事が早く終わりました。 (ともだちのおかげでしごとがはやくおわりました。). Ý nghĩa: Nhờ bạn giúp nên công việc xong sớm.."
    }
  ],
  "bridge-n3-09": [
    {
      "id": "bridge-n3-09-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「らしい・みたい・ようだ」: あの店は今日休み(___ )です。 (Có vẻ cửa hàng kia hôm nay nghỉ.)",
      "options": [
        "うだ",
        "たい",
        "のに",
        "らしい"
      ],
      "answer": "らしい",
      "explanation": "Áp dụng quy tắc: thể thường + らしい；thể thường bỏ だ + みたい；Nらしい. らしい có thể chỉ suy đoán qua thông tin hoặc đặc điểm điển hình. みたい là cách hội thoại nói giống như hoặc có vẻ."
    },
    {
      "id": "bridge-n3-09-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Đám mây này trông giống con cá nhỉ.\"?",
      "options": [
        "この雲は魚みたいですね。",
        "魚この雲はみたいですね。",
        "この雲は魚ですね。みたい",
        "ですね。この雲は魚みたい"
      ],
      "answer": "この雲は魚みたいですね。",
      "explanation": "Cấu trúc chuẩn: thể thường + らしい；thể thường bỏ だ + みたい；Nらしい. Trật tự câu: この雲は魚みたいですね。."
    },
    {
      "id": "bridge-n3-09-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この雲は魚み [___] (Đám mây này trông giống con cá nhỉ.)",
      "answer": "らしい",
      "acceptedAnswers": [
        "らしい",
        "らしい"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「らしい」theo cấu trúc: thể thường + らしい；thể thường bỏ だ + みたい；Nらしい."
    },
    {
      "id": "bridge-n3-09-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Đám mây này trông giống con cá nhỉ.\"",
      "options": [
        "魚",
        "みたい",
        "ですね。",
        "この雲は"
      ],
      "answer": "この雲は魚みたいですね。",
      "explanation": "Trật tự ngữ pháp chính xác là: この雲は魚みたいですね。. Lưu ý: Nらしい có hai cách hiểu theo ngữ cảnh; 子供らしい có thể nghĩa là đúng chất trẻ con."
    },
    {
      "id": "bridge-n3-09-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「らしい・みたい・ようだ」được sử dụng với mục đích chính nào?",
      "options": [
        "Suy đoán và biểu hiện điển hình",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Suy đoán và biểu hiện điển hình"
      ],
      "answer": "Suy đoán và biểu hiện điển hình",
      "explanation": "Mẫu ngữ pháp「らしい・みたい・ようだ」dùng để: Suy đoán và biểu hiện điển hình. らしい có thể chỉ suy đoán qua thông tin hoặc đặc điểm điển hình. みたい là cách hội thoại nói giống như hoặc có vẻ."
    },
    {
      "id": "bridge-n3-09-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Có vẻ cửa hàng kia hôm nay nghỉ.\": あの店は今日休み___です。",
      "answer": "らしい",
      "acceptedAnswers": [
        "らしい"
      ],
      "explanation": "Đáp án đúng là「らしい」. Cách kết hợp: thể thường + らしい；thể thường bỏ だ + みたい；Nらしい."
    },
    {
      "id": "bridge-n3-09-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Có vẻ cửa hàng kia hôm nay nghỉ.\"",
      "options": [
        "今日休みら",
        "しいです。",
        "あの店は"
      ],
      "answer": "あの店は今日休みらしいです。",
      "explanation": "Câu hoàn chỉnh: あの店は今日休みらしいです。 (あのみせはきょうやすみらしいです。). Ý nghĩa: Có vẻ cửa hàng kia hôm nay nghỉ.."
    }
  ],
  "bridge-n3-10": [
    {
      "id": "bridge-n3-10-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「わけだ・わけではない・とは限らない」: 高い物がいつもいい(___ )。 (Đồ đắt không phải lúc nào cũng tốt.)",
      "options": [
        "だけ",
        "とは限りません",
        "ない",
        "のに"
      ],
      "answer": "とは限りません",
      "explanation": "Áp dụng quy tắc: thể thường + わけだ／わけではない；thể thường + とは限らない. わけだ biểu thị kết luận hợp lý sau khi biết lý do. わけではない phủ định một cách hiểu; とは限らない phủ định tính luôn đúng."
    },
    {
      "id": "bridge-n3-10-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Không phải là tôi ghét tiếng Nhật.\"?",
      "options": [
        "日本語が嫌いなわけではありません。",
        "嫌いなわけでは日本語がありません。",
        "日本語がありません。嫌いなわけでは",
        "ありません。日本語が嫌いなわけでは"
      ],
      "answer": "日本語が嫌いなわけではありません。",
      "explanation": "Cấu trúc chuẩn: thể thường + わけだ／わけではない；thể thường + とは限らない. Trật tự câu: 日本語が嫌いなわけではありません。."
    },
    {
      "id": "bridge-n3-10-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 日本語が嫌いなわ [___] (Không phải là tôi ghét tiếng Nhật.)",
      "answer": "とは限りません",
      "acceptedAnswers": [
        "とは限りません",
        "とは限りません"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「とは限りません」theo cấu trúc: thể thường + わけだ／わけではない；thể thường + とは限らない."
    },
    {
      "id": "bridge-n3-10-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Không phải là tôi ghét tiếng Nhật.\"",
      "options": [
        "嫌いなわけでは",
        "ありません。",
        "日本語が"
      ],
      "answer": "日本語が嫌いなわけではありません。",
      "explanation": "Trật tự ngữ pháp chính xác là: 日本語が嫌いなわけではありません。. Lưu ý: N／Aな trước わけ thường dùng な; phủ định từng phần không đồng nghĩa phủ định hoàn toàn."
    },
    {
      "id": "bridge-n3-10-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「わけだ・わけではない・とは限らない」được sử dụng với mục đích chính nào?",
      "options": [
        "Giải thích kết luận và phủ định từng phần",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Giải thích kết luận và phủ định từng phần"
      ],
      "answer": "Giải thích kết luận và phủ định từng phần",
      "explanation": "Mẫu ngữ pháp「わけだ・わけではない・とは限らない」dùng để: Giải thích kết luận và phủ định từng phần. わけだ biểu thị kết luận hợp lý sau khi biết lý do. わけではない phủ định một cách hiểu; とは限らない phủ định tính luôn đúng."
    },
    {
      "id": "bridge-n3-10-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Đồ đắt không phải lúc nào cũng tốt.\": 高い物がいつもいい___。",
      "answer": "とは限りません",
      "acceptedAnswers": [
        "とは限りません"
      ],
      "explanation": "Đáp án đúng là「とは限りません」. Cách kết hợp: thể thường + わけだ／わけではない；thể thường + とは限らない."
    },
    {
      "id": "bridge-n3-10-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Đồ đắt không phải lúc nào cũng tốt.\"",
      "options": [
        "つもいいとは",
        "限りません。",
        "高い物がい"
      ],
      "answer": "高い物がいつもいいとは限りません。",
      "explanation": "Câu hoàn chỉnh: 高い物がいつもいいとは限りません。 (たかいものがいつもいいとはかぎりません。). Ý nghĩa: Đồ đắt không phải lúc nào cũng tốt.."
    }
  ],
  "bridge-n3-11": [
    {
      "id": "bridge-n3-11-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「わけがない・わけにはいかない」: 約束したので、行かない(___ )。 (Vì đã hứa nên tôi không thể không đi.)",
      "options": [
        "だけ",
        "ない",
        "のに",
        "わけにはいきません"
      ],
      "answer": "わけにはいきません",
      "explanation": "Áp dụng quy tắc: thể thường + わけがない；V từ điển／ない + わけにはいかない. わけがない phủ nhận mạnh khả năng. わけにはいかない nói không thể làm vì trách nhiệm hay hoàn cảnh xã hội, không phải vì thiếu năng lực."
    },
    {
      "id": "bridge-n3-11-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Một người không thể ăn hết ngần này thức ăn được.\"?",
      "options": [
        "こんなに多い料理を一人で食べられるわけがありません。",
        "多い料理をこんなに一人で食べられるわけがありません。",
        "こんなに多い料理をわけがありません。一人で食べられる",
        "わけがありません。こんなに多い料理を一人で食べられる"
      ],
      "answer": "こんなに多い料理を一人で食べられるわけがありません。",
      "explanation": "Cấu trúc chuẩn: thể thường + わけがない；V từ điển／ない + わけにはいかない. Trật tự câu: こんなに多い料理を一人で食べられるわけがありません。."
    },
    {
      "id": "bridge-n3-11-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: こんなに多い料理を一人で食 [___] (Một người không thể ăn hết ngần này thức ăn được.)",
      "answer": "わけにはいきません",
      "acceptedAnswers": [
        "わけにはいきません",
        "わけにはいきません"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「わけにはいきません」theo cấu trúc: thể thường + わけがない；V từ điển／ない + わけにはいかない."
    },
    {
      "id": "bridge-n3-11-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Một người không thể ăn hết ngần này thức ăn được.\"",
      "options": [
        "多い料理を",
        "一人で食べられる",
        "わけがありません。",
        "こんなに"
      ],
      "answer": "こんなに多い料理を一人で食べられるわけがありません。",
      "explanation": "Trật tự ngữ pháp chính xác là: こんなに多い料理を一人で食べられるわけがありません。. Lưu ý: ないわけにはいかない mang nghĩa không thể không làm, tức là buộc phải làm."
    },
    {
      "id": "bridge-n3-11-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「わけがない・わけにはいかない」được sử dụng với mục đích chính nào?",
      "options": [
        "Điều không thể và điều không được phép làm",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Điều không thể và điều không được phép làm"
      ],
      "answer": "Điều không thể và điều không được phép làm",
      "explanation": "Mẫu ngữ pháp「わけがない・わけにはいかない」dùng để: Điều không thể và điều không được phép làm. わけがない phủ nhận mạnh khả năng. わけにはいかない nói không thể làm vì trách nhiệm hay hoàn cảnh xã hội, không phải vì thiếu năng lực."
    },
    {
      "id": "bridge-n3-11-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Vì đã hứa nên tôi không thể không đi.\": 約束したので、行かない___。",
      "answer": "わけにはいきません",
      "acceptedAnswers": [
        "わけにはいきません"
      ],
      "explanation": "Đáp án đúng là「わけにはいきません」. Cách kết hợp: thể thường + わけがない；V từ điển／ない + わけにはいかない."
    },
    {
      "id": "bridge-n3-11-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Vì đã hứa nên tôi không thể không đi.\"",
      "options": [
        "行かないわけに",
        "はいきません。",
        "約束したので、"
      ],
      "answer": "約束したので、行かないわけにはいきません。",
      "explanation": "Câu hoàn chỉnh: 約束したので、行かないわけにはいきません。 (やくそくしたので、いかないわけにはいきません。). Ý nghĩa: Vì đã hứa nên tôi không thể không đi.."
    }
  ],
  "bridge-n3-12": [
    {
      "id": "bridge-n3-12-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ても・といっても・くせに・のに」: 料理ができる(___ )簡単な物だけです。 (Nói là biết nấu ăn nhưng tôi chỉ làm được món đơn giản.)",
      "options": [
        "せに",
        "ても",
        "といっても",
        "のに"
      ],
      "answer": "といっても",
      "explanation": "Áp dụng quy tắc: thể thường + といっても；thể thường + くせに；Nの／Aな + くせに. といっても bổ sung giới hạn cho phát biểu trước. くせに chỉ mâu thuẫn với sắc thái phê phán; のに trung tính hơn tùy hoàn cảnh."
    },
    {
      "id": "bridge-n3-12-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Biết vậy mà anh ấy không chịu chỉ cho tôi.\"?",
      "options": [
        "知っているくせに、教えてくれません。",
        "くせに、知っている教えてくれません。",
        "知っているくせに、くれません。教えて",
        "くれません。知っているくせに、教えて"
      ],
      "answer": "知っているくせに、教えてくれません。",
      "explanation": "Cấu trúc chuẩn: thể thường + といっても；thể thường + くせに；Nの／Aな + くせに. Trật tự câu: 知っているくせに、教えてくれません。."
    },
    {
      "id": "bridge-n3-12-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 知っているくせに、 [___] (Biết vậy mà anh ấy không chịu chỉ cho tôi.)",
      "answer": "といっても",
      "acceptedAnswers": [
        "といっても",
        "といっても"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「といっても」theo cấu trúc: thể thường + といっても；thể thường + くせに；Nの／Aな + くせに."
    },
    {
      "id": "bridge-n3-12-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Biết vậy mà anh ấy không chịu chỉ cho tôi.\"",
      "options": [
        "くせに、",
        "教えて",
        "くれません。",
        "知っている"
      ],
      "answer": "知っているくせに、教えてくれません。",
      "explanation": "Trật tự ngữ pháp chính xác là: 知っているくせに、教えてくれません。. Lưu ý: Tránh dùng くせに với người cần tôn trọng; mẫu này dễ gây khó chịu."
    },
    {
      "id": "bridge-n3-12-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ても・といっても・くせに・のに」được sử dụng với mục đích chính nào?",
      "options": [
        "Dù vậy và trái với dự đoán",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Dù vậy và trái với dự đoán"
      ],
      "answer": "Dù vậy và trái với dự đoán",
      "explanation": "Mẫu ngữ pháp「ても・といっても・くせに・のに」dùng để: Dù vậy và trái với dự đoán. といっても bổ sung giới hạn cho phát biểu trước. くせに chỉ mâu thuẫn với sắc thái phê phán; のに trung tính hơn tùy hoàn cảnh."
    },
    {
      "id": "bridge-n3-12-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Nói là biết nấu ăn nhưng tôi chỉ làm được món đơn giản.\": 料理ができる___簡単な物だけです。",
      "answer": "といっても",
      "acceptedAnswers": [
        "といっても"
      ],
      "explanation": "Đáp án đúng là「といっても」. Cách kết hợp: thể thường + といっても；thể thường + くせに；Nの／Aな + くせに."
    },
    {
      "id": "bridge-n3-12-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Nói là biết nấu ăn nhưng tôi chỉ làm được món đơn giản.\"",
      "options": [
        "といっても簡単",
        "な物だけです。",
        "料理ができる"
      ],
      "answer": "料理ができるといっても簡単な物だけです。",
      "explanation": "Câu hoàn chỉnh: 料理ができるといっても簡単な物だけです。 (りょうりができるといってもかんたんなものだけです。). Ý nghĩa: Nói là biết nấu ăn nhưng tôi chỉ làm được món đơn giản.."
    }
  ],
  "bridge-n3-13": [
    {
      "id": "bridge-n3-13-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「としたら・たとえ〜ても・ばよかった」: もっと早く予約すれ(___ )です。 (Giá mà tôi đặt chỗ sớm hơn.)",
      "options": [
        "った",
        "ても",
        "のに",
        "ばよかった"
      ],
      "answer": "ばよかった",
      "explanation": "Áp dụng quy tắc: thể thường + としたら；たとえ + điều kiện ても；Vばよかった. としたら dựng tình huống giả định. たとえ…ても nhấn mạnh kết quả không đổi; ばよかった tiếc một lựa chọn đã không làm."
    },
    {
      "id": "bridge-n3-13-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Dù thất bại tôi vẫn thử thách lại một lần nữa.\"?",
      "options": [
        "たとえ失敗しても、もう一度挑戦します。",
        "失敗しても、たとえもう一度挑戦します。",
        "たとえ失敗しても、挑戦します。もう一度",
        "挑戦します。たとえ失敗しても、もう一度"
      ],
      "answer": "たとえ失敗しても、もう一度挑戦します。",
      "explanation": "Cấu trúc chuẩn: thể thường + としたら；たとえ + điều kiện ても；Vばよかった. Trật tự câu: たとえ失敗しても、もう一度挑戦します。."
    },
    {
      "id": "bridge-n3-13-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: たとえ失敗しても、 [___] (Dù thất bại tôi vẫn thử thách lại một lần nữa.)",
      "answer": "ばよかった",
      "acceptedAnswers": [
        "ばよかった",
        "ばよかった"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ばよかった」theo cấu trúc: thể thường + としたら；たとえ + điều kiện ても；Vばよかった."
    },
    {
      "id": "bridge-n3-13-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Dù thất bại tôi vẫn thử thách lại một lần nữa.\"",
      "options": [
        "失敗しても、",
        "もう一度",
        "挑戦します。",
        "たとえ"
      ],
      "answer": "たとえ失敗しても、もう一度挑戦します。",
      "explanation": "Trật tự ngữ pháp chính xác là: たとえ失敗しても、もう一度挑戦します。. Lưu ý: Hối tiếc về việc đã làm thường dùng Vなければよかった."
    },
    {
      "id": "bridge-n3-13-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「としたら・たとえ〜ても・ばよかった」được sử dụng với mục đích chính nào?",
      "options": [
        "Điều kiện giả định và hối tiếc",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Điều kiện giả định và hối tiếc"
      ],
      "answer": "Điều kiện giả định và hối tiếc",
      "explanation": "Mẫu ngữ pháp「としたら・たとえ〜ても・ばよかった」dùng để: Điều kiện giả định và hối tiếc. としたら dựng tình huống giả định. たとえ…ても nhấn mạnh kết quả không đổi; ばよかった tiếc một lựa chọn đã không làm."
    },
    {
      "id": "bridge-n3-13-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Giá mà tôi đặt chỗ sớm hơn.\": もっと早く予約すれ___です。",
      "answer": "ばよかった",
      "acceptedAnswers": [
        "ばよかった"
      ],
      "explanation": "Đáp án đúng là「ばよかった」. Cách kết hợp: thể thường + としたら；たとえ + điều kiện ても；Vばよかった."
    },
    {
      "id": "bridge-n3-13-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Giá mà tôi đặt chỗ sớm hơn.\"",
      "options": [
        "予約すればよ",
        "かったです。",
        "もっと早く"
      ],
      "answer": "もっと早く予約すればよかったです。",
      "explanation": "Câu hoàn chỉnh: もっと早く予約すればよかったです。 (もっとはやくよやくすればよかったです。). Ý nghĩa: Giá mà tôi đặt chỗ sớm hơn.."
    }
  ],
  "bridge-n3-14": [
    {
      "id": "bridge-n3-14-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ほど・くらい・ば〜ほど」: 練習すればする(___ )上手になります。 (Càng luyện tập càng giỏi.)",
      "options": [
        "だけ",
        "のに",
        "ほど",
        "らい"
      ],
      "answer": "ほど",
      "explanation": "Áp dụng quy tắc: V／A + ほど／くらい；Vば V từ điển + ほど. ほど／くらい diễn tả mức độ; ば…ほど nói hai mức thay đổi cùng nhau. Nほど…ない có thể so sánh rằng không bằng mốc đó."
    },
    {
      "id": "bridge-n3-14-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi ngạc nhiên đến mức không thốt nên lời.\"?",
      "options": [
        "声が出ないほど驚きました。",
        "出ないほど声が驚きました。",
        "声が驚きました。出ないほど",
        "驚きました。声が出ないほど"
      ],
      "answer": "声が出ないほど驚きました。",
      "explanation": "Cấu trúc chuẩn: V／A + ほど／くらい；Vば V từ điển + ほど. Trật tự câu: 声が出ないほど驚きました。."
    },
    {
      "id": "bridge-n3-14-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 声が出ないほ [___] (Tôi ngạc nhiên đến mức không thốt nên lời.)",
      "answer": "ほど",
      "acceptedAnswers": [
        "ほど",
        "ほど"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ほど」theo cấu trúc: V／A + ほど／くらい；Vば V từ điển + ほど."
    },
    {
      "id": "bridge-n3-14-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi ngạc nhiên đến mức không thốt nên lời.\"",
      "options": [
        "出ないほど",
        "驚きました。",
        "声が"
      ],
      "answer": "声が出ないほど驚きました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 声が出ないほど驚きました。. Lưu ý: Không dùng ほど để thay mọi chức năng くらい; nghĩa khoảng chừng và nhấn mạnh mức tối thiểu cần phân biệt."
    },
    {
      "id": "bridge-n3-14-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ほど・くらい・ば〜ほど」được sử dụng với mục đích chính nào?",
      "options": [
        "Mức độ và quan hệ tăng tiến",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mức độ và quan hệ tăng tiến"
      ],
      "answer": "Mức độ và quan hệ tăng tiến",
      "explanation": "Mẫu ngữ pháp「ほど・くらい・ば〜ほど」dùng để: Mức độ và quan hệ tăng tiến. ほど／くらい diễn tả mức độ; ば…ほど nói hai mức thay đổi cùng nhau. Nほど…ない có thể so sánh rằng không bằng mốc đó."
    },
    {
      "id": "bridge-n3-14-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Càng luyện tập càng giỏi.\": 練習すればする___上手になります。",
      "answer": "ほど",
      "acceptedAnswers": [
        "ほど"
      ],
      "explanation": "Đáp án đúng là「ほど」. Cách kết hợp: V／A + ほど／くらい；Vば V từ điển + ほど."
    },
    {
      "id": "bridge-n3-14-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Càng luyện tập càng giỏi.\"",
      "options": [
        "するほど上手",
        "になります。",
        "練習すれば"
      ],
      "answer": "練習すればするほど上手になります。",
      "explanation": "Câu hoàn chỉnh: 練習すればするほど上手になります。 (れんしゅうすればするほどじょうずになります。). Ý nghĩa: Càng luyện tập càng giỏi.."
    }
  ],
  "bridge-n3-15": [
    {
      "id": "bridge-n3-15-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「だけでなく・ばかり・こそ・さえ」: この店は安い(___ )おいしいです。 (Cửa hàng này không chỉ rẻ mà còn ngon.)",
      "options": [
        "かり",
        "こそ",
        "だけでなく",
        "のに"
      ],
      "answer": "だけでなく",
      "explanation": "Áp dụng quy tắc: Nだけでなく Nも；Nばかり／Vてばかり；Nこそ；Nさえ. だけでなく mở rộng phạm vi; ばかり nhấn mạnh gần như chỉ có một loại; こそ nhấn mạnh đúng đối tượng; さえ đưa ví dụ cực đoan."
    },
    {
      "id": "bridge-n3-15-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Chính năm nay tôi muốn đỗ kỳ thi.\"?",
      "options": [
        "今年こそ試験に合格したいです。",
        "試験に今年こそ合格したいです。",
        "今年こそ試験にです。合格したい",
        "です。今年こそ試験に合格したい"
      ],
      "answer": "今年こそ試験に合格したいです。",
      "explanation": "Cấu trúc chuẩn: Nだけでなく Nも；Nばかり／Vてばかり；Nこそ；Nさえ. Trật tự câu: 今年こそ試験に合格したいです。."
    },
    {
      "id": "bridge-n3-15-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 今年こそ試験に [___] (Chính năm nay tôi muốn đỗ kỳ thi.)",
      "answer": "だけでなく",
      "acceptedAnswers": [
        "だけでなく",
        "だけでなく"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「だけでなく」theo cấu trúc: Nだけでなく Nも；Nばかり／Vてばかり；Nこそ；Nさえ."
    },
    {
      "id": "bridge-n3-15-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Chính năm nay tôi muốn đỗ kỳ thi.\"",
      "options": [
        "試験に",
        "合格したい",
        "です。",
        "今年こそ"
      ],
      "answer": "今年こそ試験に合格したいです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 今年こそ試験に合格したいです。. Lưu ý: Không nhầm Vたばかり chỉ vừa mới với Vてばかり chỉ toàn làm một việc."
    },
    {
      "id": "bridge-n3-15-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「だけでなく・ばかり・こそ・さえ」được sử dụng với mục đích chính nào?",
      "options": [
        "Giới hạn và nhấn mạnh",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Giới hạn và nhấn mạnh"
      ],
      "answer": "Giới hạn và nhấn mạnh",
      "explanation": "Mẫu ngữ pháp「だけでなく・ばかり・こそ・さえ」dùng để: Giới hạn và nhấn mạnh. だけでなく mở rộng phạm vi; ばかり nhấn mạnh gần như chỉ có một loại; こそ nhấn mạnh đúng đối tượng; さえ đưa ví dụ cực đoan."
    },
    {
      "id": "bridge-n3-15-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Cửa hàng này không chỉ rẻ mà còn ngon.\": この店は安い___おいしいです。",
      "answer": "だけでなく",
      "acceptedAnswers": [
        "だけでなく"
      ],
      "explanation": "Đáp án đúng là「だけでなく」. Cách kết hợp: Nだけでなく Nも；Nばかり／Vてばかり；Nこそ；Nさえ."
    },
    {
      "id": "bridge-n3-15-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Cửa hàng này không chỉ rẻ mà còn ngon.\"",
      "options": [
        "だけでなくお",
        "いしいです。",
        "この店は安い"
      ],
      "answer": "この店は安いだけでなくおいしいです。",
      "explanation": "Câu hoàn chỉnh: この店は安いだけでなくおいしいです。 (このみせはやすいだけでなくおいしいです。). Ý nghĩa: Cửa hàng này không chỉ rẻ mà còn ngon.."
    }
  ],
  "bridge-n3-16": [
    {
      "id": "bridge-n3-16-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「について・に関して・に対して・にとって」: 私(___ )家族が一番大切です。 (Đối với tôi gia đình là quan trọng nhất.)",
      "options": [
        "して",
        "だけ",
        "にとって",
        "のに"
      ],
      "answer": "にとって",
      "explanation": "Áp dụng quy tắc: Nについて／Nに関して；Nに対して；Nにとって. について／に関して xác định chủ đề; に対して xác định đối tượng hướng đến hoặc đối lập; にとって nêu góc nhìn đánh giá."
    },
    {
      "id": "bridge-n3-16-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi đang tìm hiểu lịch sử Nhật Bản.\"?",
      "options": [
        "日本の歴史について調べています。",
        "歴史について日本の調べています。",
        "日本の歴史についています。調べて",
        "います。日本の歴史について調べて"
      ],
      "answer": "日本の歴史について調べています。",
      "explanation": "Cấu trúc chuẩn: Nについて／Nに関して；Nに対して；Nにとって. Trật tự câu: 日本の歴史について調べています。."
    },
    {
      "id": "bridge-n3-16-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 日本の歴史につい [___] (Tôi đang tìm hiểu lịch sử Nhật Bản.)",
      "answer": "にとって",
      "acceptedAnswers": [
        "にとって",
        "にとって"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「にとって」theo cấu trúc: Nについて／Nに関して；Nに対して；Nにとって."
    },
    {
      "id": "bridge-n3-16-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi đang tìm hiểu lịch sử Nhật Bản.\"",
      "options": [
        "歴史について",
        "調べて",
        "います。",
        "日本の"
      ],
      "answer": "日本の歴史について調べています。",
      "explanation": "Trật tự ngữ pháp chính xác là: 日本の歴史について調べています。. Lưu ý: にとって không dùng để đánh dấu người nhận một hành động trao tặng."
    },
    {
      "id": "bridge-n3-16-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「について・に関して・に対して・にとって」được sử dụng với mục đích chính nào?",
      "options": [
        "Chủ đề, đối tượng và góc nhìn",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Chủ đề, đối tượng và góc nhìn"
      ],
      "answer": "Chủ đề, đối tượng và góc nhìn",
      "explanation": "Mẫu ngữ pháp「について・に関して・に対して・にとって」dùng để: Chủ đề, đối tượng và góc nhìn. について／に関して xác định chủ đề; に対して xác định đối tượng hướng đến hoặc đối lập; にとって nêu góc nhìn đánh giá."
    },
    {
      "id": "bridge-n3-16-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Đối với tôi gia đình là quan trọng nhất.\": 私___家族が一番大切です。",
      "answer": "にとって",
      "acceptedAnswers": [
        "にとって"
      ],
      "explanation": "Đáp án đúng là「にとって」. Cách kết hợp: Nについて／Nに関して；Nに対して；Nにとって."
    },
    {
      "id": "bridge-n3-16-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Đối với tôi gia đình là quan trọng nhất.\"",
      "options": [
        "家族が一番",
        "大切です。",
        "私にとって"
      ],
      "answer": "私にとって家族が一番大切です。",
      "explanation": "Câu hoàn chỉnh: 私にとって家族が一番大切です。 (わたしにとってかぞくがいちばんたいせつです。). Ý nghĩa: Đối với tôi gia đình là quan trọng nhất.."
    }
  ],
  "bridge-n3-17": [
    {
      "id": "bridge-n3-17-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「によって・によると・として」: 国(___ )習慣が違います。 (Phong tục khác nhau tùy quốc gia.)",
      "options": [
        "して",
        "によって",
        "のに",
        "ると"
      ],
      "answer": "によって",
      "explanation": "Áp dụng quy tắc: Nによって；Nによると + thông tin；Nとして. によって có thể nêu sự khác nhau tùy yếu tố hoặc phương tiện/nguyên nhân. によると chỉ nguồn tin. として nêu tư cách hay vai trò."
    },
    {
      "id": "bridge-n3-17-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Anh ấy làm việc với vai trò phiên dịch.\"?",
      "options": [
        "彼は通訳として働いています。",
        "通訳として彼は働いています。",
        "彼は通訳としています。働いて",
        "います。彼は通訳として働いて"
      ],
      "answer": "彼は通訳として働いています。",
      "explanation": "Cấu trúc chuẩn: Nによって；Nによると + thông tin；Nとして. Trật tự câu: 彼は通訳として働いています。."
    },
    {
      "id": "bridge-n3-17-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 彼は通訳として [___] (Anh ấy làm việc với vai trò phiên dịch.)",
      "answer": "によって",
      "acceptedAnswers": [
        "によって",
        "によって"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「によって」theo cấu trúc: Nによって；Nによると + thông tin；Nとして."
    },
    {
      "id": "bridge-n3-17-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Anh ấy làm việc với vai trò phiên dịch.\"",
      "options": [
        "通訳として",
        "働いて",
        "います。",
        "彼は"
      ],
      "answer": "彼は通訳として働いています。",
      "explanation": "Trật tự ngữ pháp chính xác là: 彼は通訳として働いています。. Lưu ý: Không dùng によると làm phương tiện; thường kết hợp đuôi truyền tin như そうだ."
    },
    {
      "id": "bridge-n3-17-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「によって・によると・として」được sử dụng với mục đích chính nào?",
      "options": [
        "Tùy thuộc và nguồn thông tin",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Tùy thuộc và nguồn thông tin"
      ],
      "answer": "Tùy thuộc và nguồn thông tin",
      "explanation": "Mẫu ngữ pháp「によって・によると・として」dùng để: Tùy thuộc và nguồn thông tin. によって có thể nêu sự khác nhau tùy yếu tố hoặc phương tiện/nguyên nhân. によると chỉ nguồn tin. として nêu tư cách hay vai trò."
    },
    {
      "id": "bridge-n3-17-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Phong tục khác nhau tùy quốc gia.\": 国___習慣が違います。",
      "answer": "によって",
      "acceptedAnswers": [
        "によって"
      ],
      "explanation": "Đáp án đúng là「によって」. Cách kết hợp: Nによって；Nによると + thông tin；Nとして."
    },
    {
      "id": "bridge-n3-17-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Phong tục khác nhau tùy quốc gia.\"",
      "options": [
        "て習慣が",
        "違います。",
        "国によっ"
      ],
      "answer": "国によって習慣が違います。",
      "explanation": "Câu hoàn chỉnh: 国によって習慣が違います。 (くにによってしゅうかんがちがいます。). Ý nghĩa: Phong tục khác nhau tùy quốc gia.."
    }
  ],
  "bridge-n3-18": [
    {
      "id": "bridge-n3-18-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「に比べて・代わりに・一方で」: 去年(___ )今年は暖かいです。 (So với năm ngoái thì năm nay ấm hơn.)",
      "options": [
        "に比べて",
        "のに",
        "りに",
        "方で"
      ],
      "answer": "に比べて",
      "explanation": "Áp dụng quy tắc: Nに比べて；V thường／Nの + 代わりに；thể thường + 一方で. に比べて chọn mốc so sánh; 代わりに chỉ thay thế hoặc đổi lại; 一方で nêu một mặt khác cùng tồn tại."
    },
    {
      "id": "bridge-n3-18-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi dùng tàu thay vì đi ô tô.\"?",
      "options": [
        "車で行く代わりに、電車を使います。",
        "代わりに、車で行く電車を使います。",
        "車で行く代わりに、使います。電車を",
        "使います。車で行く代わりに、電車を"
      ],
      "answer": "車で行く代わりに、電車を使います。",
      "explanation": "Cấu trúc chuẩn: Nに比べて；V thường／Nの + 代わりに；thể thường + 一方で. Trật tự câu: 車で行く代わりに、電車を使います。."
    },
    {
      "id": "bridge-n3-18-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 車で行く代わりに [___] (Tôi dùng tàu thay vì đi ô tô.)",
      "answer": "に比べて",
      "acceptedAnswers": [
        "に比べて",
        "に比べて"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「に比べて」theo cấu trúc: Nに比べて；V thường／Nの + 代わりに；thể thường + 一方で."
    },
    {
      "id": "bridge-n3-18-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi dùng tàu thay vì đi ô tô.\"",
      "options": [
        "代わりに、",
        "電車を",
        "使います。",
        "車で行く"
      ],
      "answer": "車で行く代わりに、電車を使います。",
      "explanation": "Trật tự ngữ pháp chính xác là: 車で行く代わりに、電車を使います。. Lưu ý: 代わりに không luôn có nghĩa người thay người; có thể cân đối lợi ích và bất lợi."
    },
    {
      "id": "bridge-n3-18-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「に比べて・代わりに・一方で」được sử dụng với mục đích chính nào?",
      "options": [
        "So sánh, thay thế và đồng thời",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến So sánh, thay thế và đồng thời"
      ],
      "answer": "So sánh, thay thế và đồng thời",
      "explanation": "Mẫu ngữ pháp「に比べて・代わりに・一方で」dùng để: So sánh, thay thế và đồng thời. に比べて chọn mốc so sánh; 代わりに chỉ thay thế hoặc đổi lại; 一方で nêu một mặt khác cùng tồn tại."
    },
    {
      "id": "bridge-n3-18-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"So với năm ngoái thì năm nay ấm hơn.\": 去年___今年は暖かいです。",
      "answer": "に比べて",
      "acceptedAnswers": [
        "に比べて"
      ],
      "explanation": "Đáp án đúng là「に比べて」. Cách kết hợp: Nに比べて；V thường／Nの + 代わりに；thể thường + 一方で."
    },
    {
      "id": "bridge-n3-18-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"So với năm ngoái thì năm nay ấm hơn.\"",
      "options": [
        "て今年は暖",
        "かいです。",
        "去年に比べ"
      ],
      "answer": "去年に比べて今年は暖かいです。",
      "explanation": "Câu hoàn chỉnh: 去年に比べて今年は暖かいです。 (きょねんにくらべてことしはあたたかいです。). Ý nghĩa: So với năm ngoái thì năm nay ấm hơn.."
    }
  ],
  "bridge-n3-19": [
    {
      "id": "bridge-n3-19-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ことだ・べきだ・てほしい・てもらいたい」: 約束は守る(___ )です。 (Nên giữ lời hứa.)",
      "options": [
        "きだ",
        "しい",
        "のに",
        "べき"
      ],
      "answer": "べき",
      "explanation": "Áp dụng quy tắc: V từ điển／ない + ことだ；V từ điển + べきだ；người に Vてほしい. ことだ khuyên việc thiết thực trong hoàn cảnh cụ thể; べきだ nêu điều nên làm theo chuẩn mực. てほしい nói mong người khác làm."
    },
    {
      "id": "bridge-n3-19-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi muốn thầy cô giải thích lại lần nữa.\"?",
      "options": [
        "先生にもう一度説明してほしいです。",
        "もう一度先生に説明してほしいです。",
        "先生にもう一度ほしいです。説明して",
        "ほしいです。先生にもう一度説明して"
      ],
      "answer": "先生にもう一度説明してほしいです。",
      "explanation": "Cấu trúc chuẩn: V từ điển／ない + ことだ；V từ điển + べきだ；người に Vてほしい. Trật tự câu: 先生にもう一度説明してほしいです。."
    },
    {
      "id": "bridge-n3-19-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 先生にもう一度説 [___] (Tôi muốn thầy cô giải thích lại lần nữa.)",
      "answer": "べき",
      "acceptedAnswers": [
        "べき",
        "べき"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「べき」theo cấu trúc: V từ điển／ない + ことだ；V từ điển + べきだ；người に Vてほしい."
    },
    {
      "id": "bridge-n3-19-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi muốn thầy cô giải thích lại lần nữa.\"",
      "options": [
        "もう一度",
        "説明して",
        "ほしいです。",
        "先生に"
      ],
      "answer": "先生にもう一度説明してほしいです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 先生にもう一度説明してほしいです。. Lưu ý: するべき và すべき đều gặp; べき không phải mệnh lệnh nhẹ trong mọi tình huống."
    },
    {
      "id": "bridge-n3-19-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ことだ・べきだ・てほしい・てもらいたい」được sử dụng với mục đích chính nào?",
      "options": [
        "Lời khuyên, mong muốn và yêu cầu",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Lời khuyên, mong muốn và yêu cầu"
      ],
      "answer": "Lời khuyên, mong muốn và yêu cầu",
      "explanation": "Mẫu ngữ pháp「ことだ・べきだ・てほしい・てもらいたい」dùng để: Lời khuyên, mong muốn và yêu cầu. ことだ khuyên việc thiết thực trong hoàn cảnh cụ thể; べきだ nêu điều nên làm theo chuẩn mực. てほしい nói mong người khác làm."
    },
    {
      "id": "bridge-n3-19-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Nên giữ lời hứa.\": 約束は守る___です。",
      "answer": "べき",
      "acceptedAnswers": [
        "べき"
      ],
      "explanation": "Đáp án đúng là「べき」. Cách kết hợp: V từ điển／ない + ことだ；V từ điển + べきだ；người に Vてほしい."
    },
    {
      "id": "bridge-n3-19-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Nên giữ lời hứa.\"",
      "options": [
        "守るべ",
        "きです。",
        "約束は"
      ],
      "answer": "約束は守るべきです。",
      "explanation": "Câu hoàn chỉnh: 約束は守るべきです。 (やくそくはまもるべきです。). Ý nghĩa: Nên giữ lời hứa.."
    }
  ],
  "bridge-n3-20": [
    {
      "id": "bridge-n3-20-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「がち・気味・がる」: 最近、約束を忘れ(___ )です。 (Gần đây tôi hay quên các cuộc hẹn.)",
      "options": [
        "がち",
        "がる",
        "のに",
        "気味"
      ],
      "answer": "がち",
      "explanation": "Áp dụng quy tắc: thân ます／N + がち；thân ます／N + 気味；Aい bỏ い + がる. がち chỉ xu hướng hay xảy ra, thường không tốt. 気味 chỉ hơi có dấu hiệu. がる dựa trên biểu hiện bên ngoài để mô tả cảm giác của người khác."
    },
    {
      "id": "bridge-n3-20-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Hôm nay tôi hơi có vẻ mệt.\"?",
      "options": [
        "今日は少し疲れ気味です。",
        "少し今日は疲れ気味です。",
        "今日は少しです。疲れ気味",
        "です。今日は少し疲れ気味"
      ],
      "answer": "今日は少し疲れ気味です。",
      "explanation": "Cấu trúc chuẩn: thân ます／N + がち；thân ます／N + 気味；Aい bỏ い + がる. Trật tự câu: 今日は少し疲れ気味です。."
    },
    {
      "id": "bridge-n3-20-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 今日は少し疲 [___] (Hôm nay tôi hơi có vẻ mệt.)",
      "answer": "がち",
      "acceptedAnswers": [
        "がち",
        "がち"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「がち」theo cấu trúc: thân ます／N + がち；thân ます／N + 気味；Aい bỏ い + がる."
    },
    {
      "id": "bridge-n3-20-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Hôm nay tôi hơi có vẻ mệt.\"",
      "options": [
        "少し",
        "疲れ気味",
        "です。",
        "今日は"
      ],
      "answer": "今日は少し疲れ気味です。",
      "explanation": "Trật tự ngữ pháp chính xác là: 今日は少し疲れ気味です。. Lưu ý: Không dùng がる để tuyên bố trực tiếp cảm giác bên trong của chính mình trong câu thông thường."
    },
    {
      "id": "bridge-n3-20-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「がち・気味・がる」được sử dụng với mục đích chính nào?",
      "options": [
        "Dễ xảy ra và biểu hiện người khác",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Dễ xảy ra và biểu hiện người khác"
      ],
      "answer": "Dễ xảy ra và biểu hiện người khác",
      "explanation": "Mẫu ngữ pháp「がち・気味・がる」dùng để: Dễ xảy ra và biểu hiện người khác. がち chỉ xu hướng hay xảy ra, thường không tốt. 気味 chỉ hơi có dấu hiệu. がる dựa trên biểu hiện bên ngoài để mô tả cảm giác của người khác."
    },
    {
      "id": "bridge-n3-20-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Gần đây tôi hay quên các cuộc hẹn.\": 最近、約束を忘れ___です。",
      "answer": "がち",
      "acceptedAnswers": [
        "がち"
      ],
      "explanation": "Đáp án đúng là「がち」. Cách kết hợp: thân ます／N + がち；thân ます／N + 気味；Aい bỏ い + がる."
    },
    {
      "id": "bridge-n3-20-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Gần đây tôi hay quên các cuộc hẹn.\"",
      "options": [
        "束を忘れ",
        "がちです。",
        "最近、約"
      ],
      "answer": "最近、約束を忘れがちです。",
      "explanation": "Câu hoàn chỉnh: 最近、約束を忘れがちです。 (さいきん、やくそくをわすれがちです。). Ý nghĩa: Gần đây tôi hay quên các cuộc hẹn.."
    }
  ],
  "bridge-n3-21": [
    {
      "id": "bridge-n3-21-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ということ・というのは・というより」: 彼は静か(___ )無口です。 (Nói anh ấy ít nói thì đúng hơn là yên tĩnh.)",
      "options": [
        "というより",
        "のに",
        "のは",
        "より"
      ],
      "answer": "というより",
      "explanation": "Áp dụng quy tắc: câu + ということだ；Xというのは Yという意味；Xというより Y. ということだ có thể truyền tin hoặc kết luận. というのは xác định chủ đề cần giải thích; というより sửa cách gọi cho chính xác hơn."
    },
    {
      "id": "bridge-n3-21-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"“Miễn phí” có nghĩa là không cần trả tiền.\"?",
      "options": [
        "「無料」というのは、お金が要らないという意味です。",
        "お金が要らない「無料」というのは、という意味です。",
        "「無料」というのは、お金が要らないです。という意味",
        "です。「無料」というのは、お金が要らないという意味"
      ],
      "answer": "「無料」というのは、お金が要らないという意味です。",
      "explanation": "Cấu trúc chuẩn: câu + ということだ；Xというのは Yという意味；Xというより Y. Trật tự câu: 「無料」というのは、お金が要らないという意味です。."
    },
    {
      "id": "bridge-n3-21-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 「無料」というのは、お金 [___] (“Miễn phí” có nghĩa là không cần trả tiền.)",
      "answer": "というより",
      "acceptedAnswers": [
        "というより",
        "というより"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「というより」theo cấu trúc: câu + ということだ；Xというのは Yという意味；Xというより Y."
    },
    {
      "id": "bridge-n3-21-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"“Miễn phí” có nghĩa là không cần trả tiền.\"",
      "options": [
        "お金が要らない",
        "という意味",
        "です。",
        "「無料」というのは、"
      ],
      "answer": "「無料」というのは、お金が要らないという意味です。",
      "explanation": "Trật tự ngữ pháp chính xác là: 「無料」というのは、お金が要らないという意味です。. Lưu ý: Nguồn tin hay kết luận phải rõ trong ngữ cảnh; không chỉ nhìn riêng phần đuôi câu."
    },
    {
      "id": "bridge-n3-21-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ということ・というのは・というより」được sử dụng với mục đích chính nào?",
      "options": [
        "Nghĩa, kết luận và cách diễn đạt lại",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nghĩa, kết luận và cách diễn đạt lại"
      ],
      "answer": "Nghĩa, kết luận và cách diễn đạt lại",
      "explanation": "Mẫu ngữ pháp「ということ・というのは・というより」dùng để: Nghĩa, kết luận và cách diễn đạt lại. ということだ có thể truyền tin hoặc kết luận. というのは xác định chủ đề cần giải thích; というより sửa cách gọi cho chính xác hơn."
    },
    {
      "id": "bridge-n3-21-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Nói anh ấy ít nói thì đúng hơn là yên tĩnh.\": 彼は静か___無口です。",
      "answer": "というより",
      "acceptedAnswers": [
        "というより"
      ],
      "explanation": "Đáp án đúng là「というより」. Cách kết hợp: câu + ということだ；Xというのは Yという意味；Xというより Y."
    },
    {
      "id": "bridge-n3-21-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Nói anh ấy ít nói thì đúng hơn là yên tĩnh.\"",
      "options": [
        "というより",
        "無口です。",
        "彼は静か"
      ],
      "answer": "彼は静かというより無口です。",
      "explanation": "Câu hoàn chỉnh: 彼は静かというより無口です。 (かれはしずかというよりむくちです。). Ý nghĩa: Nói anh ấy ít nói thì đúng hơn là yên tĩnh.."
    }
  ],
  "bridge-n3-22": [
    {
      "id": "bridge-n3-22-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「それでも・その上・ところが・ところで」: 雨でした。(___ )試合は続きました。 (Trời mưa. Dù vậy trận đấu vẫn tiếp tục.)",
      "options": [
        "それでも",
        "のに",
        "の上",
        "ろが"
      ],
      "answer": "それでも",
      "explanation": "Áp dụng quy tắc: câu 1。それでも／その上／ところが／ところで、câu 2. それでも tiếp tục bất chấp điều trước; その上 thêm ý cùng chiều; ところが nêu kết quả bất ngờ; ところで chuyển chủ đề."
    },
    {
      "id": "bridge-n3-22-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Phòng này rộng. Hơn nữa còn sáng.\"?",
      "options": [
        "この部屋は広いです。その上、明るいです。",
        "広いです。この部屋はその上、明るいです。",
        "この部屋は広いです。明るいです。その上、",
        "明るいです。この部屋は広いです。その上、"
      ],
      "answer": "この部屋は広いです。その上、明るいです。",
      "explanation": "Cấu trúc chuẩn: câu 1。それでも／その上／ところが／ところで、câu 2. Trật tự câu: この部屋は広いです。その上、明るいです。."
    },
    {
      "id": "bridge-n3-22-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この部屋は広いです。 [___] (Phòng này rộng. Hơn nữa còn sáng.)",
      "answer": "それでも",
      "acceptedAnswers": [
        "それでも",
        "それでも"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「それでも」theo cấu trúc: câu 1。それでも／その上／ところが／ところで、câu 2."
    },
    {
      "id": "bridge-n3-22-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Phòng này rộng. Hơn nữa còn sáng.\"",
      "options": [
        "広いです。",
        "その上、",
        "明るいです。",
        "この部屋は"
      ],
      "answer": "この部屋は広いです。その上、明るいです。",
      "explanation": "Trật tự ngữ pháp chính xác là: この部屋は広いです。その上、明るいです。. Lưu ý: Chọn liên từ theo quan hệ ý nghĩa, không chỉ dựa vào vị trí đứng đầu câu."
    },
    {
      "id": "bridge-n3-22-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「それでも・その上・ところが・ところで」được sử dụng với mục đích chính nào?",
      "options": [
        "Kết nối ý và chuyển chủ đề",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Kết nối ý và chuyển chủ đề"
      ],
      "answer": "Kết nối ý và chuyển chủ đề",
      "explanation": "Mẫu ngữ pháp「それでも・その上・ところが・ところで」dùng để: Kết nối ý và chuyển chủ đề. それでも tiếp tục bất chấp điều trước; その上 thêm ý cùng chiều; ところが nêu kết quả bất ngờ; ところで chuyển chủ đề."
    },
    {
      "id": "bridge-n3-22-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Trời mưa. Dù vậy trận đấu vẫn tiếp tục.\": 雨でした。___試合は続きました。",
      "answer": "それでも",
      "acceptedAnswers": [
        "それでも"
      ],
      "explanation": "Đáp án đúng là「それでも」. Cách kết hợp: câu 1。それでも／その上／ところが／ところで、câu 2."
    },
    {
      "id": "bridge-n3-22-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Trời mưa. Dù vậy trận đấu vẫn tiếp tục.\"",
      "options": [
        "れでも試合は",
        "続きました。",
        "雨でした。そ"
      ],
      "answer": "雨でした。それでも試合は続きました。",
      "explanation": "Câu hoàn chỉnh: 雨でした。それでも試合は続きました。 (あめでした。それでもしあいはつづきました。). Ý nghĩa: Trời mưa. Dù vậy trận đấu vẫn tiếp tục.."
    }
  ],
  "bridge-n3-23": [
    {
      "id": "bridge-n3-23-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「させられる・ことはない・なくてはならない」: 子供のころ、毎日野菜を食べ(___ )。 (Khi còn nhỏ tôi bị bắt ăn rau mỗi ngày.)",
      "options": [
        "させられました",
        "だけ",
        "ない",
        "のに"
      ],
      "answer": "させられました",
      "explanation": "Áp dụng quy tắc: V sai khiến bị động；V từ điển + ことはない；Vなくてはならない. させられる nêu việc bị bắt làm; ことはない nói không cần làm trong tình huống này; なくてはならない nêu nghĩa vụ."
    },
    {
      "id": "bridge-n3-23-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Bạn không cần lo lắng đến thế.\"?",
      "options": [
        "そんなに心配することはありません。",
        "心配するそんなにことはありません。",
        "そんなに心配するありません。ことは",
        "ありません。そんなに心配することは"
      ],
      "answer": "そんなに心配することはありません。",
      "explanation": "Cấu trúc chuẩn: V sai khiến bị động；V từ điển + ことはない；Vなくてはならない. Trật tự câu: そんなに心配することはありません。."
    },
    {
      "id": "bridge-n3-23-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: そんなに心配する [___] (Bạn không cần lo lắng đến thế.)",
      "answer": "させられました",
      "acceptedAnswers": [
        "させられました",
        "させられました"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「させられました」theo cấu trúc: V sai khiến bị động；V từ điển + ことはない；Vなくてはならない."
    },
    {
      "id": "bridge-n3-23-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Bạn không cần lo lắng đến thế.\"",
      "options": [
        "心配する",
        "ことは",
        "ありません。",
        "そんなに"
      ],
      "answer": "そんなに心配することはありません。",
      "explanation": "Trật tự ngữ pháp chính xác là: そんなに心配することはありません。. Lưu ý: Nhóm II: 食べさせられる. Nhóm I thường rút gọn 読ませられる→読まされる; không rút gọn mọi động từ."
    },
    {
      "id": "bridge-n3-23-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「させられる・ことはない・なくてはならない」được sử dụng với mục đích chính nào?",
      "options": [
        "Bị động sai khiến và trách nhiệm",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Bị động sai khiến và trách nhiệm"
      ],
      "answer": "Bị động sai khiến và trách nhiệm",
      "explanation": "Mẫu ngữ pháp「させられる・ことはない・なくてはならない」dùng để: Bị động sai khiến và trách nhiệm. させられる nêu việc bị bắt làm; ことはない nói không cần làm trong tình huống này; なくてはならない nêu nghĩa vụ."
    },
    {
      "id": "bridge-n3-23-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Khi còn nhỏ tôi bị bắt ăn rau mỗi ngày.\": 子供のころ、毎日野菜を食べ___。",
      "answer": "させられました",
      "acceptedAnswers": [
        "させられました"
      ],
      "explanation": "Đáp án đúng là「させられました」. Cách kết hợp: V sai khiến bị động；V từ điển + ことはない；Vなくてはならない."
    },
    {
      "id": "bridge-n3-23-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Khi còn nhỏ tôi bị bắt ăn rau mỗi ngày.\"",
      "options": [
        "日野菜を食べさ",
        "せられました。",
        "子供のころ、毎"
      ],
      "answer": "子供のころ、毎日野菜を食べさせられました。",
      "explanation": "Câu hoàn chỉnh: 子供のころ、毎日野菜を食べさせられました。 (こどものころ、まいにちやさいをたべさせられました。). Ý nghĩa: Khi còn nhỏ tôi bị bắt ăn rau mỗi ngày.."
    }
  ],
  "bridge-n3-24": [
    {
      "id": "bridge-n3-24-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「まで・までに・て以来・において」: 金曜日(___ )書類を送ってください。 (Hãy gửi giấy tờ chậm nhất vào thứ sáu.)",
      "options": [
        "でに",
        "のに",
        "までに",
        "以来"
      ],
      "answer": "までに",
      "explanation": "Áp dụng quy tắc: thời điểm まで／までに；Vて以来；Nにおいて. まで đánh dấu cuối khoảng kéo dài; までに đánh dấu hạn chót. て以来 nói từ một mốc đến nay; において chỉ nơi/phạm vi theo văn phong trang trọng."
    },
    {
      "id": "bridge-n3-24-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Từ khi đến Nhật tôi dùng tiếng Nhật mỗi ngày.\"?",
      "options": [
        "日本に来て以来、毎日日本語を使っています。",
        "以来、日本に来て毎日日本語を使っています。",
        "日本に来て以来、日本語を使っています。毎日",
        "日本語を使っています。日本に来て以来、毎日"
      ],
      "answer": "日本に来て以来、毎日日本語を使っています。",
      "explanation": "Cấu trúc chuẩn: thời điểm まで／までに；Vて以来；Nにおいて. Trật tự câu: 日本に来て以来、毎日日本語を使っています。."
    },
    {
      "id": "bridge-n3-24-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 日本に来て以来、毎日 [___] (Từ khi đến Nhật tôi dùng tiếng Nhật mỗi ngày.)",
      "answer": "までに",
      "acceptedAnswers": [
        "までに",
        "までに"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「までに」theo cấu trúc: thời điểm まで／までに；Vて以来；Nにおいて."
    },
    {
      "id": "bridge-n3-24-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Từ khi đến Nhật tôi dùng tiếng Nhật mỗi ngày.\"",
      "options": [
        "以来、",
        "毎日",
        "日本語を使っています。",
        "日本に来て"
      ],
      "answer": "日本に来て以来、毎日日本語を使っています。",
      "explanation": "Trật tự ngữ pháp chính xác là: 日本に来て以来、毎日日本語を使っています。. Lưu ý: Một hành động hoàn tất trước hạn dùng までに, không tự thay bằng まで."
    },
    {
      "id": "bridge-n3-24-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「まで・までに・て以来・において」được sử dụng với mục đích chính nào?",
      "options": [
        "Phân biệt thời hạn và thời điểm",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Phân biệt thời hạn và thời điểm"
      ],
      "answer": "Phân biệt thời hạn và thời điểm",
      "explanation": "Mẫu ngữ pháp「まで・までに・て以来・において」dùng để: Phân biệt thời hạn và thời điểm. まで đánh dấu cuối khoảng kéo dài; までに đánh dấu hạn chót. て以来 nói từ một mốc đến nay; において chỉ nơi/phạm vi theo văn phong trang trọng."
    },
    {
      "id": "bridge-n3-24-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Hãy gửi giấy tờ chậm nhất vào thứ sáu.\": 金曜日___書類を送ってください。",
      "answer": "までに",
      "acceptedAnswers": [
        "までに"
      ],
      "explanation": "Đáp án đúng là「までに」. Cách kết hợp: thời điểm まで／までに；Vて以来；Nにおいて."
    },
    {
      "id": "bridge-n3-24-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Hãy gửi giấy tờ chậm nhất vào thứ sáu.\"",
      "options": [
        "に書類を送っ",
        "てください。",
        "金曜日まで"
      ],
      "answer": "金曜日までに書類を送ってください。",
      "explanation": "Câu hoàn chỉnh: 金曜日までに書類を送ってください。 (きんようびまでにしょるいをおくってください。). Ý nghĩa: Hãy gửi giấy tờ chậm nhất vào thứ sáu.."
    }
  ],
  "bridge-n2-25": [
    {
      "id": "bridge-n2-25-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ものの・ながらも・反面・一方」: 説明を読んだ(___ )使い方がわかりません。 (Dù đã đọc hướng dẫn tôi vẫn không hiểu cách dùng.)",
      "options": [
        "のに",
        "ものの",
        "らも",
        "反面"
      ],
      "answer": "ものの",
      "explanation": "Áp dụng quy tắc: thể thường + ものの；thân ます／A + ながらも；thể thường + 反面. ものの thừa nhận điều đầu nhưng kết quả không như mong đợi. ながらも nêu hai mặt trái nhau; 反面 đặt lợi và bất lợi cạnh nhau."
    },
    {
      "id": "bridge-n2-25-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Công việc này vất vả nhưng mặt khác rất đáng làm.\"?",
      "options": [
        "この仕事は大変な反面、やりがいがあります。",
        "大変な反面、この仕事はやりがいがあります。",
        "この仕事は大変な反面、あります。やりがいが",
        "あります。この仕事は大変な反面、やりがいが"
      ],
      "answer": "この仕事は大変な反面、やりがいがあります。",
      "explanation": "Cấu trúc chuẩn: thể thường + ものの；thân ます／A + ながらも；thể thường + 反面. Trật tự câu: この仕事は大変な反面、やりがいがあります。."
    },
    {
      "id": "bridge-n2-25-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: この仕事は大変な反面 [___] (Công việc này vất vả nhưng mặt khác rất đáng làm.)",
      "answer": "ものの",
      "acceptedAnswers": [
        "ものの",
        "ものの"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ものの」theo cấu trúc: thể thường + ものの；thân ます／A + ながらも；thể thường + 反面."
    },
    {
      "id": "bridge-n2-25-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Công việc này vất vả nhưng mặt khác rất đáng làm.\"",
      "options": [
        "大変な反面、",
        "やりがいが",
        "あります。",
        "この仕事は"
      ],
      "answer": "この仕事は大変な反面、やりがいがあります。",
      "explanation": "Trật tự ngữ pháp chính xác là: この仕事は大変な反面、やりがいがあります。. Lưu ý: N／Aな trước ものの thường dùng である／な theo cấu trúc; ながらも khác ながら chỉ đồng thời."
    },
    {
      "id": "bridge-n2-25-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ものの・ながらも・反面・一方」được sử dụng với mục đích chính nào?",
      "options": [
        "Hai mặt và sự tương phản",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Hai mặt và sự tương phản"
      ],
      "answer": "Hai mặt và sự tương phản",
      "explanation": "Mẫu ngữ pháp「ものの・ながらも・反面・一方」dùng để: Hai mặt và sự tương phản. ものの thừa nhận điều đầu nhưng kết quả không như mong đợi. ながらも nêu hai mặt trái nhau; 反面 đặt lợi và bất lợi cạnh nhau."
    },
    {
      "id": "bridge-n2-25-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Dù đã đọc hướng dẫn tôi vẫn không hiểu cách dùng.\": 説明を読んだ___使い方がわかりません。",
      "answer": "ものの",
      "acceptedAnswers": [
        "ものの"
      ],
      "explanation": "Đáp án đúng là「ものの」. Cách kết hợp: thể thường + ものの；thân ます／A + ながらも；thể thường + 反面."
    },
    {
      "id": "bridge-n2-25-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Dù đã đọc hướng dẫn tôi vẫn không hiểu cách dùng.\"",
      "options": [
        "ものの使い方が",
        "わかりません。",
        "説明を読んだ"
      ],
      "answer": "説明を読んだものの使い方がわかりません。",
      "explanation": "Câu hoàn chỉnh: 説明を読んだものの使い方がわかりません。 (せつめいをよんだもののつかいかたがわかりません。). Ý nghĩa: Dù đã đọc hướng dẫn tôi vẫn không hiểu cách dùng.."
    }
  ],
  "bridge-n2-26": [
    {
      "id": "bridge-n2-26-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「にもかかわらず・にかかわらず・を問わず」: 雨(___ )大勢の人が集まりました。 (Mặc dù trời mưa, nhiều người vẫn tập trung.)",
      "options": [
        "にもかかわらず",
        "のに",
        "らず",
        "わず"
      ],
      "answer": "にもかかわらず",
      "explanation": "Áp dụng quy tắc: thể thường／N + にもかかわらず；Nにかかわらず；Nを問わず. にもかかわらず nhấn mạnh trái kỳ vọng. にかかわらず và を問わず loại bỏ một điều kiện khỏi tiêu chí đánh giá."
    },
    {
      "id": "bridge-n2-26-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Có thể ứng tuyển bất kể có kinh nghiệm hay không.\"?",
      "options": [
        "経験の有無を問わず、応募できます。",
        "問わず、経験の有無を応募できます。",
        "経験の有無を問わず、できます。応募",
        "できます。経験の有無を問わず、応募"
      ],
      "answer": "経験の有無を問わず、応募できます。",
      "explanation": "Cấu trúc chuẩn: thể thường／N + にもかかわらず；Nにかかわらず；Nを問わず. Trật tự câu: 経験の有無を問わず、応募できます。."
    },
    {
      "id": "bridge-n2-26-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 経験の有無を問わ [___] (Có thể ứng tuyển bất kể có kinh nghiệm hay không.)",
      "answer": "にもかかわらず",
      "acceptedAnswers": [
        "にもかかわらず",
        "にもかかわらず"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「にもかかわらず」theo cấu trúc: thể thường／N + にもかかわらず；Nにかかわらず；Nを問わず."
    },
    {
      "id": "bridge-n2-26-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Có thể ứng tuyển bất kể có kinh nghiệm hay không.\"",
      "options": [
        "問わず、",
        "応募",
        "できます。",
        "経験の有無を"
      ],
      "answer": "経験の有無を問わず、応募できます。",
      "explanation": "Trật tự ngữ pháp chính xác là: 経験の有無を問わず、応募できます。. Lưu ý: Chữ も làm thay đổi nghĩa: không phụ thuộc khác với mặc dù."
    },
    {
      "id": "bridge-n2-26-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「にもかかわらず・にかかわらず・を問わず」được sử dụng với mục đích chính nào?",
      "options": [
        "Bất chấp và không phụ thuộc",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Bất chấp và không phụ thuộc"
      ],
      "answer": "Bất chấp và không phụ thuộc",
      "explanation": "Mẫu ngữ pháp「にもかかわらず・にかかわらず・を問わず」dùng để: Bất chấp và không phụ thuộc. にもかかわらず nhấn mạnh trái kỳ vọng. にかかわらず và を問わず loại bỏ một điều kiện khỏi tiêu chí đánh giá."
    },
    {
      "id": "bridge-n2-26-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Mặc dù trời mưa, nhiều người vẫn tập trung.\": 雨___大勢の人が集まりました。",
      "answer": "にもかかわらず",
      "acceptedAnswers": [
        "にもかかわらず"
      ],
      "explanation": "Đáp án đúng là「にもかかわらず」. Cách kết hợp: thể thường／N + にもかかわらず；Nにかかわらず；Nを問わず."
    },
    {
      "id": "bridge-n2-26-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Mặc dù trời mưa, nhiều người vẫn tập trung.\"",
      "options": [
        "らず大勢の人が",
        "集まりました。",
        "雨にもかかわ"
      ],
      "answer": "雨にもかかわらず大勢の人が集まりました。",
      "explanation": "Câu hoàn chỉnh: 雨にもかかわらず大勢の人が集まりました。 (あめにもかかわらずおおぜいのひとがあつまりました。). Ý nghĩa: Mặc dù trời mưa, nhiều người vẫn tập trung.."
    }
  ],
  "bridge-n2-27": [
    {
      "id": "bridge-n2-27-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「からには・以上は・上は」: 引き受けた(___ )最後までやります。 (Một khi đã nhận thì tôi sẽ làm đến cùng.)",
      "options": [
        "からには",
        "だけ",
        "のに",
        "上は"
      ],
      "answer": "からには",
      "explanation": "Áp dụng quy tắc: thể thường + からには／以上は；V từ điển／た + 上は. Các mẫu này lấy một sự thật hoặc quyết định làm tiền đề cho trách nhiệm, quyết tâm hay điều đương nhiên tiếp theo. 上は thường trang trọng."
    },
    {
      "id": "bridge-n2-27-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Một khi tham gia thì hãy tuân thủ quy định.\"?",
      "options": [
        "参加する以上は、規則を守ってください。",
        "規則を参加する以上は、守ってください。",
        "参加する以上は、規則をください。守って",
        "ください。参加する以上は、規則を守って"
      ],
      "answer": "参加する以上は、規則を守ってください。",
      "explanation": "Cấu trúc chuẩn: thể thường + からには／以上は；V từ điển／た + 上は. Trật tự câu: 参加する以上は、規則を守ってください。."
    },
    {
      "id": "bridge-n2-27-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 参加する以上は、規 [___] (Một khi tham gia thì hãy tuân thủ quy định.)",
      "answer": "からには",
      "acceptedAnswers": [
        "からには",
        "からには"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「からには」theo cấu trúc: thể thường + からには／以上は；V từ điển／た + 上は."
    },
    {
      "id": "bridge-n2-27-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Một khi tham gia thì hãy tuân thủ quy định.\"",
      "options": [
        "規則を",
        "守って",
        "ください。",
        "参加する以上は、"
      ],
      "answer": "参加する以上は、規則を守ってください。",
      "explanation": "Trật tự ngữ pháp chính xác là: 参加する以上は、規則を守ってください。. Lưu ý: Vế sau thường là ý chí, nghĩa vụ hoặc đánh giá, không chỉ một sự kiện ngẫu nhiên không liên quan."
    },
    {
      "id": "bridge-n2-27-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「からには・以上は・上は」được sử dụng với mục đích chính nào?",
      "options": [
        "Một khi đã quyết định",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Một khi đã quyết định"
      ],
      "answer": "Một khi đã quyết định",
      "explanation": "Mẫu ngữ pháp「からには・以上は・上は」dùng để: Một khi đã quyết định. Các mẫu này lấy một sự thật hoặc quyết định làm tiền đề cho trách nhiệm, quyết tâm hay điều đương nhiên tiếp theo. 上は thường trang trọng."
    },
    {
      "id": "bridge-n2-27-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Một khi đã nhận thì tôi sẽ làm đến cùng.\": 引き受けた___最後までやります。",
      "answer": "からには",
      "acceptedAnswers": [
        "からには"
      ],
      "explanation": "Đáp án đúng là「からには」. Cách kết hợp: thể thường + からには／以上は；V từ điển／た + 上は."
    },
    {
      "id": "bridge-n2-27-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Một khi đã nhận thì tôi sẽ làm đến cùng.\"",
      "options": [
        "らには最後ま",
        "でやります。",
        "引き受けたか"
      ],
      "answer": "引き受けたからには最後までやります。",
      "explanation": "Câu hoàn chỉnh: 引き受けたからには最後までやります。 (ひきうけたからにはさいごまでやります。). Ý nghĩa: Một khi đã nhận thì tôi sẽ làm đến cùng.."
    }
  ],
  "bridge-n2-28": [
    {
      "id": "bridge-n2-28-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「さえ〜ば・ものなら・とすれば」: 時間さえあれ(___ )参加できます。 (Chỉ cần có thời gian là tôi tham gia được.)",
      "options": [
        "なら",
        "のに",
        "ば",
        "れば"
      ],
      "answer": "ば",
      "explanation": "Áp dụng quy tắc: Nさえ + điều kiện ば；V khả năng + ものなら；thể thường + とすれば. さえ…ば coi một điều kiện là đủ. Khả năng + ものなら nêu điều mong nhưng khó thực hiện. とすれば đặt giả định để suy luận."
    },
    {
      "id": "bridge-n2-28-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Nếu có thể quay lại, tôi muốn trở về thời học sinh.\"?",
      "options": [
        "戻れるものなら、学生時代に戻りたいです。",
        "学生時代に戻れるものなら、戻りたいです。",
        "戻れるものなら、学生時代にです。戻りたい",
        "です。戻れるものなら、学生時代に戻りたい"
      ],
      "answer": "戻れるものなら、学生時代に戻りたいです。",
      "explanation": "Cấu trúc chuẩn: Nさえ + điều kiện ば；V khả năng + ものなら；thể thường + とすれば. Trật tự câu: 戻れるものなら、学生時代に戻りたいです。."
    },
    {
      "id": "bridge-n2-28-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 戻れるものなら、学生 [___] (Nếu có thể quay lại, tôi muốn trở về thời học sinh.)",
      "answer": "ば",
      "acceptedAnswers": [
        "ば",
        "ば"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ば」theo cấu trúc: Nさえ + điều kiện ば；V khả năng + ものなら；thể thường + とすれば."
    },
    {
      "id": "bridge-n2-28-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Nếu có thể quay lại, tôi muốn trở về thời học sinh.\"",
      "options": [
        "学生時代に",
        "戻りたい",
        "です。",
        "戻れるものなら、"
      ],
      "answer": "戻れるものなら、学生時代に戻りたいです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 戻れるものなら、学生時代に戻りたいです。. Lưu ý: V từ điển + ものなら có thể cảnh báo hậu quả; khác với khả năng + ものなら thể hiện mong muốn."
    },
    {
      "id": "bridge-n2-28-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「さえ〜ば・ものなら・とすれば」được sử dụng với mục đích chính nào?",
      "options": [
        "Điều kiện đủ và giả định khó",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Điều kiện đủ và giả định khó"
      ],
      "answer": "Điều kiện đủ và giả định khó",
      "explanation": "Mẫu ngữ pháp「さえ〜ば・ものなら・とすれば」dùng để: Điều kiện đủ và giả định khó. さえ…ば coi một điều kiện là đủ. Khả năng + ものなら nêu điều mong nhưng khó thực hiện. とすれば đặt giả định để suy luận."
    },
    {
      "id": "bridge-n2-28-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Chỉ cần có thời gian là tôi tham gia được.\": 時間さえあれ___参加できます。",
      "answer": "ば",
      "acceptedAnswers": [
        "ば"
      ],
      "explanation": "Đáp án đúng là「ば」. Cách kết hợp: Nさえ + điều kiện ば；V khả năng + ものなら；thể thường + とすれば."
    },
    {
      "id": "bridge-n2-28-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Chỉ cần có thời gian là tôi tham gia được.\"",
      "options": [
        "あれば参加",
        "できます。",
        "時間さえ"
      ],
      "answer": "時間さえあれば参加できます。",
      "explanation": "Câu hoàn chỉnh: 時間さえあれば参加できます。 (じかんさえあればさんかできます。). Ý nghĩa: Chỉ cần có thời gian là tôi tham gia được.."
    }
  ],
  "bridge-n2-29": [
    {
      "id": "bridge-n2-29-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「ことから・ものだから・からこそ」: 形が星に似ている(___ )この名前が付きました。 (Tên này được đặt vì hình dáng giống ngôi sao.)",
      "options": [
        "から",
        "こそ",
        "ことから",
        "のに"
      ],
      "answer": "ことから",
      "explanation": "Áp dụng quy tắc: thể thường + ことから／ものだから／からこそ. ことから rút nguyên nhân hoặc căn cứ từ một dữ kiện. ものだから thường giải thích hoàn cảnh mang tính biện hộ. からこそ nhấn mạnh chính nguyên nhân đó."
    },
    {
      "id": "bridge-n2-29-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Chính vì coi trọng nên tôi mới nhắc nhở nghiêm khắc.\"?",
      "options": [
        "大切だからこそ、厳しく注意するのです。",
        "厳しく大切だからこそ、注意するのです。",
        "大切だからこそ、厳しくのです。注意する",
        "のです。大切だからこそ、厳しく注意する"
      ],
      "answer": "大切だからこそ、厳しく注意するのです。",
      "explanation": "Cấu trúc chuẩn: thể thường + ことから／ものだから／からこそ. Trật tự câu: 大切だからこそ、厳しく注意するのです。."
    },
    {
      "id": "bridge-n2-29-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 大切だからこそ、厳 [___] (Chính vì coi trọng nên tôi mới nhắc nhở nghiêm khắc.)",
      "answer": "ことから",
      "acceptedAnswers": [
        "ことから",
        "ことから"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ことから」theo cấu trúc: thể thường + ことから／ものだから／からこそ."
    },
    {
      "id": "bridge-n2-29-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Chính vì coi trọng nên tôi mới nhắc nhở nghiêm khắc.\"",
      "options": [
        "厳しく",
        "注意する",
        "のです。",
        "大切だからこそ、"
      ],
      "answer": "大切だからこそ、厳しく注意するのです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 大切だからこそ、厳しく注意するのです。. Lưu ý: ものだから thường không dùng làm lý do cho mệnh lệnh; sắc thái có thể nghe như thanh minh."
    },
    {
      "id": "bridge-n2-29-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「ことから・ものだから・からこそ」được sử dụng với mục đích chính nào?",
      "options": [
        "Nguyên nhân và căn cứ suy luận",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nguyên nhân và căn cứ suy luận"
      ],
      "answer": "Nguyên nhân và căn cứ suy luận",
      "explanation": "Mẫu ngữ pháp「ことから・ものだから・からこそ」dùng để: Nguyên nhân và căn cứ suy luận. ことから rút nguyên nhân hoặc căn cứ từ một dữ kiện. ものだから thường giải thích hoàn cảnh mang tính biện hộ. からこそ nhấn mạnh chính nguyên nhân đó."
    },
    {
      "id": "bridge-n2-29-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tên này được đặt vì hình dáng giống ngôi sao.\": 形が星に似ている___この名前が付きました。",
      "answer": "ことから",
      "acceptedAnswers": [
        "ことから"
      ],
      "explanation": "Đáp án đúng là「ことから」. Cách kết hợp: thể thường + ことから／ものだから／からこそ."
    },
    {
      "id": "bridge-n2-29-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tên này được đặt vì hình dáng giống ngôi sao.\"",
      "options": [
        "ることからこの名",
        "前が付きました。",
        "形が星に似てい"
      ],
      "answer": "形が星に似ていることからこの名前が付きました。",
      "explanation": "Câu hoàn chỉnh: 形が星に似ていることからこの名前が付きました。 (かたちがほしににていることからこのなまえがつきました。). Ý nghĩa: Tên này được đặt vì hình dáng giống ngôi sao.."
    }
  ],
  "bridge-n2-30": [
    {
      "id": "bridge-n2-30-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「からといって・わりに・にしては」: 安い(___ )買いすぎてはいけません。 (Không nên mua quá nhiều chỉ vì rẻ.)",
      "options": [
        "からといって",
        "ては",
        "のに",
        "りに"
      ],
      "answer": "からといって",
      "explanation": "Áp dụng quy tắc: thể thường + からといって；thể thường／Nの + わりに；thể thường／N + にしては. からといって bác bỏ suy luận chỉ dựa một căn cứ. わりに so với mức độ đã biết; にしては so với chuẩn kỳ vọng cho một trường hợp cụ thể."
    },
    {
      "id": "bridge-n2-30-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"So với lần đầu làm thì kết quả khá tốt.\"?",
      "options": [
        "初めて作ったにしては、よくできています。",
        "にしては、初めて作ったよくできています。",
        "初めて作ったにしては、できています。よく",
        "できています。初めて作ったにしては、よく"
      ],
      "answer": "初めて作ったにしては、よくできています。",
      "explanation": "Cấu trúc chuẩn: thể thường + からといって；thể thường／Nの + わりに；thể thường／N + にしては. Trật tự câu: 初めて作ったにしては、よくできています。."
    },
    {
      "id": "bridge-n2-30-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 初めて作ったにしては [___] (So với lần đầu làm thì kết quả khá tốt.)",
      "answer": "からといって",
      "acceptedAnswers": [
        "からといって",
        "からといって"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「からといって」theo cấu trúc: thể thường + からといって；thể thường／Nの + わりに；thể thường／N + にしては."
    },
    {
      "id": "bridge-n2-30-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"So với lần đầu làm thì kết quả khá tốt.\"",
      "options": [
        "にしては、",
        "よく",
        "できています。",
        "初めて作った"
      ],
      "answer": "初めて作ったにしては、よくできています。",
      "explanation": "Trật tự ngữ pháp chính xác là: 初めて作ったにしては、よくできています。. Lưu ý: にしては thường cần mốc cụ thể để hình thành kỳ vọng; không thay thế mọi trường hợp わりに."
    },
    {
      "id": "bridge-n2-30-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「からといって・わりに・にしては」được sử dụng với mục đích chính nào?",
      "options": [
        "Không suy luận đơn giản từ một điều",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Không suy luận đơn giản từ một điều"
      ],
      "answer": "Không suy luận đơn giản từ một điều",
      "explanation": "Mẫu ngữ pháp「からといって・わりに・にしては」dùng để: Không suy luận đơn giản từ một điều. からといって bác bỏ suy luận chỉ dựa một căn cứ. わりに so với mức độ đã biết; にしては so với chuẩn kỳ vọng cho một trường hợp cụ thể."
    },
    {
      "id": "bridge-n2-30-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Không nên mua quá nhiều chỉ vì rẻ.\": 安い___買いすぎてはいけません。",
      "answer": "からといって",
      "acceptedAnswers": [
        "からといって"
      ],
      "explanation": "Đáp án đúng là「からといって」. Cách kết hợp: thể thường + からといって；thể thường／Nの + わりに；thể thường／N + にしては."
    },
    {
      "id": "bridge-n2-30-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Không nên mua quá nhiều chỉ vì rẻ.\"",
      "options": [
        "って買いすぎて",
        "はいけません。",
        "安いからとい"
      ],
      "answer": "安いからといって買いすぎてはいけません。",
      "explanation": "Câu hoàn chỉnh: 安いからといって買いすぎてはいけません。 (やすいからといってかいすぎてはいけません。). Ý nghĩa: Không nên mua quá nhiều chỉ vì rẻ.."
    }
  ],
  "bridge-n2-31": [
    {
      "id": "bridge-n2-31-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「のみならず・ばかりか・はもとより」: この制度は学生(___ )社会人も利用できます。 (Chế độ này không chỉ sinh viên mà người đi làm cũng sử dụng được.)",
      "options": [
        "のに",
        "のみならず",
        "より",
        "りか"
      ],
      "answer": "のみならず",
      "explanation": "Áp dụng quy tắc: N／thể thường + のみならず／ばかりか；Nはもとより. のみならず mở rộng trang trọng; ばかりか thêm một mức vượt hơn; はもとより coi đối tượng đầu là điều hiển nhiên rồi thêm đối tượng sau."
    },
    {
      "id": "bridge-n2-31-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Anh ấy không chỉ nói được tiếng Anh mà cả tiếng Trung.\"?",
      "options": [
        "彼は英語ばかりか、中国語も話せます。",
        "英語ばかりか、彼は中国語も話せます。",
        "彼は英語ばかりか、話せます。中国語も",
        "話せます。彼は英語ばかりか、中国語も"
      ],
      "answer": "彼は英語ばかりか、中国語も話せます。",
      "explanation": "Cấu trúc chuẩn: N／thể thường + のみならず／ばかりか；Nはもとより. Trật tự câu: 彼は英語ばかりか、中国語も話せます。."
    },
    {
      "id": "bridge-n2-31-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 彼は英語ばかりか、 [___] (Anh ấy không chỉ nói được tiếng Anh mà cả tiếng Trung.)",
      "answer": "のみならず",
      "acceptedAnswers": [
        "のみならず",
        "のみならず"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「のみならず」theo cấu trúc: N／thể thường + のみならず／ばかりか；Nはもとより."
    },
    {
      "id": "bridge-n2-31-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Anh ấy không chỉ nói được tiếng Anh mà cả tiếng Trung.\"",
      "options": [
        "英語ばかりか、",
        "中国語も",
        "話せます。",
        "彼は"
      ],
      "answer": "彼は英語ばかりか、中国語も話せます。",
      "explanation": "Trật tự ngữ pháp chính xác là: 彼は英語ばかりか、中国語も話せます。. Lưu ý: Các vế cần quan hệ cùng chiều rõ ràng; thường phối hợp も／まで／さえ ở vế sau."
    },
    {
      "id": "bridge-n2-31-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「のみならず・ばかりか・はもとより」được sử dụng với mục đích chính nào?",
      "options": [
        "Không chỉ và mở rộng phạm vi",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Không chỉ và mở rộng phạm vi"
      ],
      "answer": "Không chỉ và mở rộng phạm vi",
      "explanation": "Mẫu ngữ pháp「のみならず・ばかりか・はもとより」dùng để: Không chỉ và mở rộng phạm vi. のみならず mở rộng trang trọng; ばかりか thêm một mức vượt hơn; はもとより coi đối tượng đầu là điều hiển nhiên rồi thêm đối tượng sau."
    },
    {
      "id": "bridge-n2-31-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Chế độ này không chỉ sinh viên mà người đi làm cũng sử dụng được.\": この制度は学生___社会人も利用できます。",
      "answer": "のみならず",
      "acceptedAnswers": [
        "のみならず"
      ],
      "explanation": "Đáp án đúng là「のみならず」. Cách kết hợp: N／thể thường + のみならず／ばかりか；Nはもとより."
    },
    {
      "id": "bridge-n2-31-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Chế độ này không chỉ sinh viên mà người đi làm cũng sử dụng được.\"",
      "options": [
        "のみならず社会人",
        "も利用できます。",
        "この制度は学生"
      ],
      "answer": "この制度は学生のみならず社会人も利用できます。",
      "explanation": "Câu hoàn chỉnh: この制度は学生のみならず社会人も利用できます。 (このせいどはがくせいのみならずしゃかいじんもりようできます。). Ý nghĩa: Chế độ này không chỉ sinh viên mà người đi làm cũng sử dụng được.."
    }
  ],
  "bridge-n2-32": [
    {
      "id": "bridge-n2-32-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「に限り・に限らず・限り・を除いて」: 本日に(___ )入場は無料です。 (Chỉ riêng hôm nay vào cửa miễn phí.)",
      "options": [
        "だけ",
        "のに",
        "らず",
        "限り"
      ],
      "answer": "限り",
      "explanation": "Áp dụng quy tắc: Nに限り／Nに限らず；V thường + 限り；Nを除いて. に限り giới hạn đối tượng; に限らず mở rộng; 限り diễn tả phạm vi hoặc điều kiện còn duy trì; を除いて loại một ngoại lệ."
    },
    {
      "id": "bridge-n2-32-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cửa hàng mở mỗi ngày trừ chủ nhật.\"?",
      "options": [
        "日曜日を除いて、毎日営業しています。",
        "除いて、日曜日を毎日営業しています。",
        "日曜日を除いて、営業しています。毎日",
        "営業しています。日曜日を除いて、毎日"
      ],
      "answer": "日曜日を除いて、毎日営業しています。",
      "explanation": "Cấu trúc chuẩn: Nに限り／Nに限らず；V thường + 限り；Nを除いて. Trật tự câu: 日曜日を除いて、毎日営業しています。."
    },
    {
      "id": "bridge-n2-32-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 日曜日を除いて、毎 [___] (Cửa hàng mở mỗi ngày trừ chủ nhật.)",
      "answer": "限り",
      "acceptedAnswers": [
        "限り",
        "限り"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「限り」theo cấu trúc: Nに限り／Nに限らず；V thường + 限り；Nを除いて."
    },
    {
      "id": "bridge-n2-32-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cửa hàng mở mỗi ngày trừ chủ nhật.\"",
      "options": [
        "除いて、",
        "毎日",
        "営業しています。",
        "日曜日を"
      ],
      "answer": "日曜日を除いて、毎日営業しています。",
      "explanation": "Trật tự ngữ pháp chính xác là: 日曜日を除いて、毎日営業しています。. Lưu ý: Vない限り nghĩa là trừ khi; V biết + 限り nghĩa là trong phạm vi mình biết."
    },
    {
      "id": "bridge-n2-32-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「に限り・に限らず・限り・を除いて」được sử dụng với mục đích chính nào?",
      "options": [
        "Giới hạn, ngoại lệ và ngoài phạm vi",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Giới hạn, ngoại lệ và ngoài phạm vi"
      ],
      "answer": "Giới hạn, ngoại lệ và ngoài phạm vi",
      "explanation": "Mẫu ngữ pháp「に限り・に限らず・限り・を除いて」dùng để: Giới hạn, ngoại lệ và ngoài phạm vi. に限り giới hạn đối tượng; に限らず mở rộng; 限り diễn tả phạm vi hoặc điều kiện còn duy trì; を除いて loại một ngoại lệ."
    },
    {
      "id": "bridge-n2-32-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Chỉ riêng hôm nay vào cửa miễn phí.\": 本日に___入場は無料です。",
      "answer": "限り",
      "acceptedAnswers": [
        "限り"
      ],
      "explanation": "Đáp án đúng là「限り」. Cách kết hợp: Nに限り／Nに限らず；V thường + 限り；Nを除いて."
    },
    {
      "id": "bridge-n2-32-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Chỉ riêng hôm nay vào cửa miễn phí.\"",
      "options": [
        "り入場は",
        "無料です。",
        "本日に限"
      ],
      "answer": "本日に限り入場は無料です。",
      "explanation": "Câu hoàn chỉnh: 本日に限り入場は無料です。 (ほんじつにかぎりにゅうじょうはむりょうです。). Ý nghĩa: Chỉ riêng hôm nay vào cửa miễn phí.."
    }
  ],
  "bridge-n2-33": [
    {
      "id": "bridge-n2-33-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「からすると・から見ると・からして・にしたら」: この結果(___ )計画の見直しが必要です。 (Xét kết quả này thì cần xem lại kế hoạch.)",
      "options": [
        "からすると",
        "して",
        "のに",
        "ると"
      ],
      "answer": "からすると",
      "explanation": "Áp dụng quy tắc: Nからすると／から見ると／からして／にしたら. からすると và から見ると xét theo góc nhìn hoặc dấu hiệu. からして lấy ngay một chi tiết làm căn cứ. にしたら đặt mình ở vị trí một người."
    },
    {
      "id": "bridge-n2-33-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Đứng ở góc nhìn trẻ em, đây chắc là bài khó.\"?",
      "options": [
        "子供にしたら、難しい問題でしょう。",
        "難しい問題子供にしたら、でしょう。",
        "子供にしたら、でしょう。難しい問題",
        "でしょう。子供にしたら、難しい問題"
      ],
      "answer": "子供にしたら、難しい問題でしょう。",
      "explanation": "Cấu trúc chuẩn: Nからすると／から見ると／からして／にしたら. Trật tự câu: 子供にしたら、難しい問題でしょう。."
    },
    {
      "id": "bridge-n2-33-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 子供にしたら、難 [___] (Đứng ở góc nhìn trẻ em, đây chắc là bài khó.)",
      "answer": "からすると",
      "acceptedAnswers": [
        "からすると",
        "からすると"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「からすると」theo cấu trúc: Nからすると／から見ると／からして／にしたら."
    },
    {
      "id": "bridge-n2-33-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Đứng ở góc nhìn trẻ em, đây chắc là bài khó.\"",
      "options": [
        "難しい問題",
        "でしょう。",
        "子供にしたら、"
      ],
      "answer": "子供にしたら、難しい問題でしょう。",
      "explanation": "Trật tự ngữ pháp chính xác là: 子供にしたら、難しい問題でしょう。. Lưu ý: にしたら cần đối tượng có quan điểm, không dùng như một trợ từ chung cho mọi tiêu chí."
    },
    {
      "id": "bridge-n2-33-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「からすると・から見ると・からして・にしたら」được sử dụng với mục đích chính nào?",
      "options": [
        "Góc nhìn và tiêu chuẩn đánh giá",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Góc nhìn và tiêu chuẩn đánh giá"
      ],
      "answer": "Góc nhìn và tiêu chuẩn đánh giá",
      "explanation": "Mẫu ngữ pháp「からすると・から見ると・からして・にしたら」dùng để: Góc nhìn và tiêu chuẩn đánh giá. からすると và から見ると xét theo góc nhìn hoặc dấu hiệu. からして lấy ngay một chi tiết làm căn cứ. にしたら đặt mình ở vị trí một người."
    },
    {
      "id": "bridge-n2-33-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Xét kết quả này thì cần xem lại kế hoạch.\": この結果___計画の見直しが必要です。",
      "answer": "からすると",
      "acceptedAnswers": [
        "からすると"
      ],
      "explanation": "Đáp án đúng là「からすると」. Cách kết hợp: Nからすると／から見ると／からして／にしたら."
    },
    {
      "id": "bridge-n2-33-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Xét kết quả này thì cần xem lại kế hoạch.\"",
      "options": [
        "ると計画の見直",
        "しが必要です。",
        "この結果からす"
      ],
      "answer": "この結果からすると計画の見直しが必要です。",
      "explanation": "Câu hoàn chỉnh: この結果からすると計画の見直しが必要です。 (このけっかからするとけいかくのみなおしがひつようです。). Ý nghĩa: Xét kết quả này thì cần xem lại kế hoạch.."
    }
  ],
  "bridge-n2-34": [
    {
      "id": "bridge-n2-34-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「に基づいて・に応じて・に沿って」: 調査結果(___ )計画を作ります。 (Chúng tôi lập kế hoạch dựa trên kết quả khảo sát.)",
      "options": [
        "じて",
        "って",
        "に基づいて",
        "のに"
      ],
      "answer": "に基づいて",
      "explanation": "Áp dụng quy tắc: Nに基づいて／Nに応じて／Nに沿って. に基づいて dựa trên cơ sở; に応じて điều chỉnh theo nhu cầu/mức độ; に沿って đi theo phương hướng, kế hoạch hay mong muốn."
    },
    {
      "id": "bridge-n2-34-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Chúng tôi phân công công việc tùy kinh nghiệm.\"?",
      "options": [
        "経験に応じて、仕事を分担します。",
        "仕事を経験に応じて、分担します。",
        "経験に応じて、仕事をします。分担",
        "します。経験に応じて、仕事を分担"
      ],
      "answer": "経験に応じて、仕事を分担します。",
      "explanation": "Cấu trúc chuẩn: Nに基づいて／Nに応じて／Nに沿って. Trật tự câu: 経験に応じて、仕事を分担します。."
    },
    {
      "id": "bridge-n2-34-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 経験に応じて、仕 [___] (Chúng tôi phân công công việc tùy kinh nghiệm.)",
      "answer": "に基づいて",
      "acceptedAnswers": [
        "に基づいて",
        "に基づいて"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「に基づいて」theo cấu trúc: Nに基づいて／Nに応じて／Nに沿って."
    },
    {
      "id": "bridge-n2-34-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Chúng tôi phân công công việc tùy kinh nghiệm.\"",
      "options": [
        "仕事を",
        "分担",
        "します。",
        "経験に応じて、"
      ],
      "answer": "経験に応じて、仕事を分担します。",
      "explanation": "Trật tự ngữ pháp chính xác là: 経験に応じて、仕事を分担します。. Lưu ý: に沿って không tự có nghĩa sao chép y nguyên; nó nói sự phù hợp với định hướng."
    },
    {
      "id": "bridge-n2-34-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「に基づいて・に応じて・に沿って」được sử dụng với mục đích chính nào?",
      "options": [
        "Căn cứ và phản hồi tương ứng",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Căn cứ và phản hồi tương ứng"
      ],
      "answer": "Căn cứ và phản hồi tương ứng",
      "explanation": "Mẫu ngữ pháp「に基づいて・に応じて・に沿って」dùng để: Căn cứ và phản hồi tương ứng. に基づいて dựa trên cơ sở; に応じて điều chỉnh theo nhu cầu/mức độ; に沿って đi theo phương hướng, kế hoạch hay mong muốn."
    },
    {
      "id": "bridge-n2-34-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Chúng tôi lập kế hoạch dựa trên kết quả khảo sát.\": 調査結果___計画を作ります。",
      "answer": "に基づいて",
      "acceptedAnswers": [
        "に基づいて"
      ],
      "explanation": "Đáp án đúng là「に基づいて」. Cách kết hợp: Nに基づいて／Nに応じて／Nに沿って."
    },
    {
      "id": "bridge-n2-34-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Chúng tôi lập kế hoạch dựa trên kết quả khảo sát.\"",
      "options": [
        "基づいて計画",
        "を作ります。",
        "調査結果に"
      ],
      "answer": "調査結果に基づいて計画を作ります。",
      "explanation": "Câu hoàn chỉnh: 調査結果に基づいて計画を作ります。 (ちょうさけっかにもとづいてけいかくをつくります。). Ý nghĩa: Chúng tôi lập kế hoạch dựa trên kết quả khảo sát.."
    }
  ],
  "bridge-n2-35": [
    {
      "id": "bridge-n2-35-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「につれて・に従って・に伴って・とともに」: 気温が上がる(___ )花が咲き始めました。 (Nhiệt độ tăng dần thì hoa bắt đầu nở.)",
      "options": [
        "だけ",
        "って",
        "につれて",
        "のに"
      ],
      "answer": "につれて",
      "explanation": "Áp dụng quy tắc: V từ điển／N + につれて／に従って／に伴って／とともに. Các mẫu nối biến đổi của yếu tố đầu với biến đổi đi kèm. に従って còn có nghĩa tuân theo; とともに còn có nghĩa cùng với."
    },
    {
      "id": "bridge-n2-35-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Cùng với số người dùng tăng, chúng tôi tăng thêm thiết bị.\"?",
      "options": [
        "利用者の増加に伴って、設備を増やします。",
        "設備を利用者の増加に伴って、増やします。",
        "利用者の増加に伴って、増やします。設備を",
        "増やします。利用者の増加に伴って、設備を"
      ],
      "answer": "利用者の増加に伴って、設備を増やします。",
      "explanation": "Cấu trúc chuẩn: V từ điển／N + につれて／に従って／に伴って／とともに. Trật tự câu: 利用者の増加に伴って、設備を増やします。."
    },
    {
      "id": "bridge-n2-35-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 利用者の増加に伴って [___] (Cùng với số người dùng tăng, chúng tôi tăng thêm thiết bị.)",
      "answer": "につれて",
      "acceptedAnswers": [
        "につれて",
        "につれて"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「につれて」theo cấu trúc: V từ điển／N + につれて／に従って／に伴って／とともに."
    },
    {
      "id": "bridge-n2-35-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Cùng với số người dùng tăng, chúng tôi tăng thêm thiết bị.\"",
      "options": [
        "設備を",
        "増やします。",
        "利用者の増加に伴って、"
      ],
      "answer": "利用者の増加に伴って、設備を増やします。",
      "explanation": "Trật tự ngữ pháp chính xác là: 利用者の増加に伴って、設備を増やします。. Lưu ý: につれて thường dùng cho thay đổi tự nhiên, không thuận với mệnh lệnh tùy ý ở vế sau."
    },
    {
      "id": "bridge-n2-35-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「につれて・に従って・に伴って・とともに」được sử dụng với mục đích chính nào?",
      "options": [
        "Hai thay đổi đi cùng nhau",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Hai thay đổi đi cùng nhau"
      ],
      "answer": "Hai thay đổi đi cùng nhau",
      "explanation": "Mẫu ngữ pháp「につれて・に従って・に伴って・とともに」dùng để: Hai thay đổi đi cùng nhau. Các mẫu nối biến đổi của yếu tố đầu với biến đổi đi kèm. に従って còn có nghĩa tuân theo; とともに còn có nghĩa cùng với."
    },
    {
      "id": "bridge-n2-35-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Nhiệt độ tăng dần thì hoa bắt đầu nở.\": 気温が上がる___花が咲き始めました。",
      "answer": "につれて",
      "acceptedAnswers": [
        "につれて"
      ],
      "explanation": "Đáp án đúng là「につれて」. Cách kết hợp: V từ điển／N + につれて／に従って／に伴って／とともに."
    },
    {
      "id": "bridge-n2-35-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Nhiệt độ tăng dần thì hoa bắt đầu nở.\"",
      "options": [
        "につれて花が咲",
        "き始めました。",
        "気温が上がる"
      ],
      "answer": "気温が上がるにつれて花が咲き始めました。",
      "explanation": "Câu hoàn chỉnh: 気温が上がるにつれて花が咲き始めました。 (きおんがあがるにつれてはながさきはじめました。). Ý nghĩa: Nhiệt độ tăng dần thì hoa bắt đầu nở.."
    }
  ],
  "bridge-n2-36": [
    {
      "id": "bridge-n2-36-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「を通して・を通じて・にわたって」: 友人(___ )その仕事を知りました。 (Tôi biết công việc đó thông qua một người bạn.)",
      "options": [
        "じて",
        "って",
        "のに",
        "を通じて"
      ],
      "answer": "を通じて",
      "explanation": "Áp dụng quy tắc: Nを通して／Nを通じて／Nにわたって. を通して／を通じて nói phương tiện trung gian hoặc suốt một khoảng. にわたって nhấn mạnh độ rộng thời gian/không gian."
    },
    {
      "id": "bridge-n2-36-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Hội nghị diễn ra trong suốt ba ngày.\"?",
      "options": [
        "会議は三日間にわたって行われました。",
        "三日間にわたって会議は行われました。",
        "会議は行われました。三日間にわたって",
        "行われました。会議は三日間にわたって"
      ],
      "answer": "会議は三日間にわたって行われました。",
      "explanation": "Cấu trúc chuẩn: Nを通して／Nを通じて／Nにわたって. Trật tự câu: 会議は三日間にわたって行われました。."
    },
    {
      "id": "bridge-n2-36-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 会議は三日間にわた [___] (Hội nghị diễn ra trong suốt ba ngày.)",
      "answer": "を通じて",
      "acceptedAnswers": [
        "を通じて",
        "を通じて"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「を通じて」theo cấu trúc: Nを通して／Nを通じて／Nにわたって."
    },
    {
      "id": "bridge-n2-36-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Hội nghị diễn ra trong suốt ba ngày.\"",
      "options": [
        "三日間にわたって",
        "行われました。",
        "会議は"
      ],
      "answer": "会議は三日間にわたって行われました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 会議は三日間にわたって行われました。. Lưu ý: Không dùng にわたって cho một thời điểm đơn lẻ; cần một phạm vi có độ dài."
    },
    {
      "id": "bridge-n2-36-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「を通して・を通じて・にわたって」được sử dụng với mục đích chính nào?",
      "options": [
        "Suốt phạm vi và thông qua",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Suốt phạm vi và thông qua"
      ],
      "answer": "Suốt phạm vi và thông qua",
      "explanation": "Mẫu ngữ pháp「を通して・を通じて・にわたって」dùng để: Suốt phạm vi và thông qua. を通して／を通じて nói phương tiện trung gian hoặc suốt một khoảng. にわたって nhấn mạnh độ rộng thời gian/không gian."
    },
    {
      "id": "bridge-n2-36-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi biết công việc đó thông qua một người bạn.\": 友人___その仕事を知りました。",
      "answer": "を通じて",
      "acceptedAnswers": [
        "を通じて"
      ],
      "explanation": "Đáp án đúng là「を通じて」. Cách kết hợp: Nを通して／Nを通じて／Nにわたって."
    },
    {
      "id": "bridge-n2-36-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi biết công việc đó thông qua một người bạn.\"",
      "options": [
        "てその仕事を",
        "知りました。",
        "友人を通じ"
      ],
      "answer": "友人を通じてその仕事を知りました。",
      "explanation": "Câu hoàn chỉnh: 友人を通じてその仕事を知りました。 (ゆうじんをつうじてそのしごとをしりました。). Ý nghĩa: Tôi biết công việc đó thông qua một người bạn.."
    }
  ],
  "bridge-n2-37": [
    {
      "id": "bridge-n2-37-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「に際して・にあたって・に先立って」: 出発(___ )説明会を開きます。 (Trước khi khởi hành, chúng tôi tổ chức buổi hướng dẫn.)",
      "options": [
        "だけ",
        "って",
        "に先立って",
        "のに"
      ],
      "answer": "に先立って",
      "explanation": "Áp dụng quy tắc: V từ điển／N + に際して／にあたって；Nに先立って. に際して và にあたって đặt bối cảnh một dịp quan trọng. に先立って nói việc chuẩn bị xảy ra trước sự kiện chính."
    },
    {
      "id": "bridge-n2-37-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Nhân lúc bắt đầu công việc mới, tôi đã đặt mục tiêu.\"?",
      "options": [
        "新しい仕事を始めるにあたって、目標を決めました。",
        "始めるにあたって、新しい仕事を目標を決めました。",
        "新しい仕事を始めるにあたって、決めました。目標を",
        "決めました。新しい仕事を始めるにあたって、目標を"
      ],
      "answer": "新しい仕事を始めるにあたって、目標を決めました。",
      "explanation": "Cấu trúc chuẩn: V từ điển／N + に際して／にあたって；Nに先立って. Trật tự câu: 新しい仕事を始めるにあたって、目標を決めました。."
    },
    {
      "id": "bridge-n2-37-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 新しい仕事を始めるにあた [___] (Nhân lúc bắt đầu công việc mới, tôi đã đặt mục tiêu.)",
      "answer": "に先立って",
      "acceptedAnswers": [
        "に先立って",
        "に先立って"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「に先立って」theo cấu trúc: V từ điển／N + に際して／にあたって；Nに先立って."
    },
    {
      "id": "bridge-n2-37-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Nhân lúc bắt đầu công việc mới, tôi đã đặt mục tiêu.\"",
      "options": [
        "始めるにあたって、",
        "目標を",
        "決めました。",
        "新しい仕事を"
      ],
      "answer": "新しい仕事を始めるにあたって、目標を決めました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 新しい仕事を始めるにあたって、目標を決めました。. Lưu ý: にあたって thường đi với việc chủ động chuẩn bị cho dịp tích cực hoặc quan trọng."
    },
    {
      "id": "bridge-n2-37-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「に際して・にあたって・に先立って」được sử dụng với mục đích chính nào?",
      "options": [
        "Nhân dịp và trước một sự kiện",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nhân dịp và trước một sự kiện"
      ],
      "answer": "Nhân dịp và trước một sự kiện",
      "explanation": "Mẫu ngữ pháp「に際して・にあたって・に先立って」dùng để: Nhân dịp và trước một sự kiện. に際して và にあたって đặt bối cảnh một dịp quan trọng. に先立って nói việc chuẩn bị xảy ra trước sự kiện chính."
    },
    {
      "id": "bridge-n2-37-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Trước khi khởi hành, chúng tôi tổ chức buổi hướng dẫn.\": 出発___説明会を開きます。",
      "answer": "に先立って",
      "acceptedAnswers": [
        "に先立って"
      ],
      "explanation": "Đáp án đúng là「に先立って」. Cách kết hợp: V từ điển／N + に際して／にあたって；Nに先立って."
    },
    {
      "id": "bridge-n2-37-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Trước khi khởi hành, chúng tôi tổ chức buổi hướng dẫn.\"",
      "options": [
        "って説明会",
        "を開きます。",
        "出発に先立"
      ],
      "answer": "出発に先立って説明会を開きます。",
      "explanation": "Câu hoàn chỉnh: 出発に先立って説明会を開きます。 (しゅっぱつにさきだってせつめいかいをひらきます。). Ý nghĩa: Trước khi khởi hành, chúng tôi tổ chức buổi hướng dẫn.."
    }
  ],
  "bridge-n2-38": [
    {
      "id": "bridge-n2-38-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「たとたん・かと思うと・次第・てからでないと」: 窓を開けた(___ )強い風が入りました。 (Vừa mở cửa sổ thì gió mạnh lùa vào.)",
      "options": [
        "うと",
        "とたん",
        "のに",
        "次第"
      ],
      "answer": "とたん",
      "explanation": "Áp dụng quy tắc: Vたとたん；Vたかと思うと；thân ます + 次第；Vてからでないと. たとたん và かと思うと mô tả biến chuyển xảy ra ngay, thường ngoài dự tính. 次第 hứa làm ngay khi điều kiện hoàn tất. てからでないと nói chưa làm bước trước thì chưa thể làm bước sau."
    },
    {
      "id": "bridge-n2-38-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Ngay khi biết kết quả tôi sẽ liên hệ.\"?",
      "options": [
        "結果がわかり次第、ご連絡します。",
        "わかり次第、結果がご連絡します。",
        "結果がわかり次第、します。ご連絡",
        "します。結果がわかり次第、ご連絡"
      ],
      "answer": "結果がわかり次第、ご連絡します。",
      "explanation": "Cấu trúc chuẩn: Vたとたん；Vたかと思うと；thân ます + 次第；Vてからでないと. Trật tự câu: 結果がわかり次第、ご連絡します。."
    },
    {
      "id": "bridge-n2-38-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 結果がわかり次第 [___] (Ngay khi biết kết quả tôi sẽ liên hệ.)",
      "answer": "とたん",
      "acceptedAnswers": [
        "とたん",
        "とたん"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「とたん」theo cấu trúc: Vたとたん；Vたかと思うと；thân ます + 次第；Vてからでないと."
    },
    {
      "id": "bridge-n2-38-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Ngay khi biết kết quả tôi sẽ liên hệ.\"",
      "options": [
        "わかり次第、",
        "ご連絡",
        "します。",
        "結果が"
      ],
      "answer": "結果がわかり次第、ご連絡します。",
      "explanation": "Trật tự ngữ pháp chính xác là: 結果がわかり次第、ご連絡します。. Lưu ý: Vế sau たとたん thường không phải chủ ý hoặc lời nhờ; dùng 次第 cho kế hoạch chủ động."
    },
    {
      "id": "bridge-n2-38-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「たとたん・かと思うと・次第・てからでないと」được sử dụng với mục đích chính nào?",
      "options": [
        "Ngay sau khi và từ lúc đó",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Ngay sau khi và từ lúc đó"
      ],
      "answer": "Ngay sau khi và từ lúc đó",
      "explanation": "Mẫu ngữ pháp「たとたん・かと思うと・次第・てからでないと」dùng để: Ngay sau khi và từ lúc đó. たとたん và かと思うと mô tả biến chuyển xảy ra ngay, thường ngoài dự tính. 次第 hứa làm ngay khi điều kiện hoàn tất. てからでないと nói chưa làm bước trước thì chưa thể làm bước sau."
    },
    {
      "id": "bridge-n2-38-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Vừa mở cửa sổ thì gió mạnh lùa vào.\": 窓を開けた___強い風が入りました。",
      "answer": "とたん",
      "acceptedAnswers": [
        "とたん"
      ],
      "explanation": "Đáp án đúng là「とたん」. Cách kết hợp: Vたとたん；Vたかと思うと；thân ます + 次第；Vてからでないと."
    },
    {
      "id": "bridge-n2-38-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Vừa mở cửa sổ thì gió mạnh lùa vào.\"",
      "options": [
        "たん強い風が",
        "入りました。",
        "窓を開けたと"
      ],
      "answer": "窓を開けたとたん強い風が入りました。",
      "explanation": "Câu hoàn chỉnh: 窓を開けたとたん強い風が入りました。 (まどをあけたとたんつよいかぜがはいりました。). Ý nghĩa: Vừa mở cửa sổ thì gió mạnh lùa vào.."
    }
  ],
  "bridge-n2-39": [
    {
      "id": "bridge-n2-39-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「あげく・末に・たところ・きり」: 何度も相談した(___ )引っ越すことにしました。 (Sau nhiều lần bàn bạc, chúng tôi quyết định chuyển nhà.)",
      "options": [
        "ころ",
        "だけ",
        "のに",
        "末に"
      ],
      "answer": "末に",
      "explanation": "Áp dụng quy tắc: Vた／Nの + あげく／末に；Vたところ；Vたきり. あげく thường dẫn đến kết quả không mong muốn sau nhiều diễn biến; 末に nói kết quả cuối quá trình. たところ nêu điều phát hiện sau khi làm; たきり chỉ từ đó không có việc tiếp theo."
    },
    {
      "id": "bridge-n2-39-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Khi hỏi thử thì vẫn còn chỗ.\"?",
      "options": [
        "問い合わせたところ、まだ席がありました。",
        "まだ問い合わせたところ、席がありました。",
        "問い合わせたところ、まだありました。席が",
        "ありました。問い合わせたところ、まだ席が"
      ],
      "answer": "問い合わせたところ、まだ席がありました。",
      "explanation": "Cấu trúc chuẩn: Vた／Nの + あげく／末に；Vたところ；Vたきり. Trật tự câu: 問い合わせたところ、まだ席がありました。."
    },
    {
      "id": "bridge-n2-39-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 問い合わせたところ、 [___] (Khi hỏi thử thì vẫn còn chỗ.)",
      "answer": "末に",
      "acceptedAnswers": [
        "末に",
        "末に"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「末に」theo cấu trúc: Vた／Nの + あげく／末に；Vたところ；Vたきり."
    },
    {
      "id": "bridge-n2-39-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Khi hỏi thử thì vẫn còn chỗ.\"",
      "options": [
        "まだ",
        "席が",
        "ありました。",
        "問い合わせたところ、"
      ],
      "answer": "問い合わせたところ、まだ席がありました。",
      "explanation": "Trật tự ngữ pháp chính xác là: 問い合わせたところ、まだ席がありました。. Lưu ý: Không phải mọi kết quả sau một việc ngắn đều dùng 末に; cần cảm giác quá trình."
    },
    {
      "id": "bridge-n2-39-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「あげく・末に・たところ・きり」được sử dụng với mục đích chính nào?",
      "options": [
        "Kết quả sau quá trình",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Kết quả sau quá trình"
      ],
      "answer": "Kết quả sau quá trình",
      "explanation": "Mẫu ngữ pháp「あげく・末に・たところ・きり」dùng để: Kết quả sau quá trình. あげく thường dẫn đến kết quả không mong muốn sau nhiều diễn biến; 末に nói kết quả cuối quá trình. たところ nêu điều phát hiện sau khi làm; たきり chỉ từ đó không có việc tiếp theo."
    },
    {
      "id": "bridge-n2-39-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Sau nhiều lần bàn bạc, chúng tôi quyết định chuyển nhà.\": 何度も相談した___引っ越すことにしました。",
      "answer": "末に",
      "acceptedAnswers": [
        "末に"
      ],
      "explanation": "Đáp án đúng là「末に」. Cách kết hợp: Vた／Nの + あげく／末に；Vたところ；Vたきり."
    },
    {
      "id": "bridge-n2-39-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Sau nhiều lần bàn bạc, chúng tôi quyết định chuyển nhà.\"",
      "options": [
        "末に引っ越すこ",
        "とにしました。",
        "何度も相談した"
      ],
      "answer": "何度も相談した末に引っ越すことにしました。",
      "explanation": "Câu hoàn chỉnh: 何度も相談した末に引っ越すことにしました。 (なんどもそうだんしたすえにひっこすことにしました。). Ý nghĩa: Sau nhiều lần bàn bạc, chúng tôi quyết định chuyển nhà.."
    }
  ],
  "bridge-n2-40": [
    {
      "id": "bridge-n2-40-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「おそれがある・かねない・一方だ・つつある」: このままでは事故が起こり(___ )。 (Cứ thế này có thể xảy ra tai nạn.)",
      "options": [
        "かねません",
        "ない",
        "のに",
        "方だ"
      ],
      "answer": "かねません",
      "explanation": "Áp dụng quy tắc: V từ điển／Nの + おそれがある；thân ます + かねない／つつある；V từ điển + 一方だ. おそれがある và かねない cảnh báo kết quả xấu. 一方だ nói một chiều biến đổi liên tục; つつある nói biến đổi đang tiến triển."
    },
    {
      "id": "bridge-n2-40-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Dân số thị trấn cứ giảm mãi.\"?",
      "options": [
        "町の人口は減る一方です。",
        "減る町の人口は一方です。",
        "町の人口は減るです。一方",
        "です。町の人口は減る一方"
      ],
      "answer": "町の人口は減る一方です。",
      "explanation": "Cấu trúc chuẩn: V từ điển／Nの + おそれがある；thân ます + かねない／つつある；V từ điển + 一方だ. Trật tự câu: 町の人口は減る一方です。."
    },
    {
      "id": "bridge-n2-40-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 町の人口は減 [___] (Dân số thị trấn cứ giảm mãi.)",
      "answer": "かねません",
      "acceptedAnswers": [
        "かねません",
        "かねません"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「かねません」theo cấu trúc: V từ điển／Nの + おそれがある；thân ます + かねない／つつある；V từ điển + 一方だ."
    },
    {
      "id": "bridge-n2-40-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Dân số thị trấn cứ giảm mãi.\"",
      "options": [
        "減る",
        "一方",
        "です。",
        "町の人口は"
      ],
      "answer": "町の人口は減る一方です。",
      "explanation": "Trật tự ngữ pháp chính xác là: 町の人口は減る一方です。. Lưu ý: かねない mang nghĩa có thể xảy ra điều xấu, không phải không thể làm."
    },
    {
      "id": "bridge-n2-40-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「おそれがある・かねない・一方だ・つつある」được sử dụng với mục đích chính nào?",
      "options": [
        "Nguy cơ và khuynh hướng",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nguy cơ và khuynh hướng"
      ],
      "answer": "Nguy cơ và khuynh hướng",
      "explanation": "Mẫu ngữ pháp「おそれがある・かねない・一方だ・つつある」dùng để: Nguy cơ và khuynh hướng. おそれがある và かねない cảnh báo kết quả xấu. 一方だ nói một chiều biến đổi liên tục; つつある nói biến đổi đang tiến triển."
    },
    {
      "id": "bridge-n2-40-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Cứ thế này có thể xảy ra tai nạn.\": このままでは事故が起こり___。",
      "answer": "かねません",
      "acceptedAnswers": [
        "かねません"
      ],
      "explanation": "Đáp án đúng là「かねません」. Cách kết hợp: V từ điển／Nの + おそれがある；thân ます + かねない／つつある；V từ điển + 一方だ."
    },
    {
      "id": "bridge-n2-40-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Cứ thế này có thể xảy ra tai nạn.\"",
      "options": [
        "事故が起こり",
        "かねません。",
        "このままでは"
      ],
      "answer": "このままでは事故が起こりかねません。",
      "explanation": "Câu hoàn chỉnh: このままでは事故が起こりかねません。 (このままではじこがおこりかねません。). Ý nghĩa: Cứ thế này có thể xảy ra tai nạn.."
    }
  ],
  "bridge-n2-41": [
    {
      "id": "bridge-n2-41-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「かねる・ざるを得ない・ないではいられない」: 大雪で予定を変更せ(___ )。 (Vì tuyết lớn nên buộc phải đổi kế hoạch.)",
      "options": [
        "ざるを得ません",
        "だけ",
        "ない",
        "のに"
      ],
      "answer": "ざるを得ません",
      "explanation": "Áp dụng quy tắc: thân ます + かねる；Vない bỏ ない + ざるを得ない／ないではいられない. かねる từ chối hoặc nói khó đáp ứng một cách trang trọng. ざるを得ない là không có lựa chọn khác; ないではいられない là không kìm được hành động."
    },
    {
      "id": "bridge-n2-41-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi khó có thể trả lời câu hỏi đó.\"?",
      "options": [
        "その質問にはお答えしかねます。",
        "お答えその質問にはしかねます。",
        "その質問にはしかねます。お答え",
        "しかねます。その質問にはお答え"
      ],
      "answer": "その質問にはお答えしかねます。",
      "explanation": "Cấu trúc chuẩn: thân ます + かねる；Vない bỏ ない + ざるを得ない／ないではいられない. Trật tự câu: その質問にはお答えしかねます。."
    },
    {
      "id": "bridge-n2-41-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: その質問にはお [___] (Tôi khó có thể trả lời câu hỏi đó.)",
      "answer": "ざるを得ません",
      "acceptedAnswers": [
        "ざるを得ません",
        "ざるを得ません"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ざるを得ません」theo cấu trúc: thân ます + かねる；Vない bỏ ない + ざるを得ない／ないではいられない."
    },
    {
      "id": "bridge-n2-41-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi khó có thể trả lời câu hỏi đó.\"",
      "options": [
        "お答え",
        "しかねます。",
        "その質問には"
      ],
      "answer": "その質問にはお答えしかねます。",
      "explanation": "Trật tự ngữ pháp chính xác là: その質問にはお答えしかねます。. Lưu ý: する→せざるを得ない. かねる khác かねない cả về nghĩa lẫn thái độ."
    },
    {
      "id": "bridge-n2-41-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「かねる・ざるを得ない・ないではいられない」được sử dụng với mục đích chính nào?",
      "options": [
        "Không thể đáp ứng và buộc phải làm",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Không thể đáp ứng và buộc phải làm"
      ],
      "answer": "Không thể đáp ứng và buộc phải làm",
      "explanation": "Mẫu ngữ pháp「かねる・ざるを得ない・ないではいられない」dùng để: Không thể đáp ứng và buộc phải làm. かねる từ chối hoặc nói khó đáp ứng một cách trang trọng. ざるを得ない là không có lựa chọn khác; ないではいられない là không kìm được hành động."
    },
    {
      "id": "bridge-n2-41-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Vì tuyết lớn nên buộc phải đổi kế hoạch.\": 大雪で予定を変更せ___。",
      "answer": "ざるを得ません",
      "acceptedAnswers": [
        "ざるを得ません"
      ],
      "explanation": "Đáp án đúng là「ざるを得ません」. Cách kết hợp: thân ます + かねる；Vない bỏ ない + ざるを得ない／ないではいられない."
    },
    {
      "id": "bridge-n2-41-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Vì tuyết lớn nên buộc phải đổi kế hoạch.\"",
      "options": [
        "を変更せざる",
        "を得ません。",
        "大雪で予定"
      ],
      "answer": "大雪で予定を変更せざるを得ません。",
      "explanation": "Câu hoàn chỉnh: 大雪で予定を変更せざるを得ません。 (おおゆきでよていをへんこうせざるをえません。). Ý nghĩa: Vì tuyết lớn nên buộc phải đổi kế hoạch.."
    }
  ],
  "bridge-n2-42": [
    {
      "id": "bridge-n2-42-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「てたまらない・てならない・てしょうがない」: 試験の結果が気になっ(___ )。 (Tôi bồn chồn vô cùng về kết quả thi.)",
      "options": [
        "だけ",
        "てたまりません",
        "ない",
        "のに"
      ],
      "answer": "てたまりません",
      "explanation": "Áp dụng quy tắc: Vて／Aくて／Aで + たまらない／ならない／しょうがない. Các mẫu nhấn mạnh cảm giác không kiềm được. てならない thường thiên về cảm xúc tự nảy sinh; てたまらない có thể diễn tả cảm giác thể chất mạnh."
    },
    {
      "id": "bridge-n2-42-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi cứ nhớ quê nhà không nguôi.\"?",
      "options": [
        "故郷のことが思い出されてなりません。",
        "思い出されて故郷のことがなりません。",
        "故郷のことがなりません。思い出されて",
        "なりません。故郷のことが思い出されて"
      ],
      "answer": "故郷のことが思い出されてなりません。",
      "explanation": "Cấu trúc chuẩn: Vて／Aくて／Aで + たまらない／ならない／しょうがない. Trật tự câu: 故郷のことが思い出されてなりません。."
    },
    {
      "id": "bridge-n2-42-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 故郷のことが思い出 [___] (Tôi cứ nhớ quê nhà không nguôi.)",
      "answer": "てたまりません",
      "acceptedAnswers": [
        "てたまりません",
        "てたまりません"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「てたまりません」theo cấu trúc: Vて／Aくて／Aで + たまらない／ならない／しょうがない."
    },
    {
      "id": "bridge-n2-42-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi cứ nhớ quê nhà không nguôi.\"",
      "options": [
        "思い出されて",
        "なりません。",
        "故郷のことが"
      ],
      "answer": "故郷のことが思い出されてなりません。",
      "explanation": "Trật tự ngữ pháp chính xác là: 故郷のことが思い出されてなりません。. Lưu ý: Không dùng tùy ý để nhấn mạnh một sự thật khách quan không phải cảm giác của chủ thể."
    },
    {
      "id": "bridge-n2-42-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「てたまらない・てならない・てしょうがない」được sử dụng với mục đích chính nào?",
      "options": [
        "Cảm xúc mạnh và cảm nhận tự nhiên",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Cảm xúc mạnh và cảm nhận tự nhiên"
      ],
      "answer": "Cảm xúc mạnh và cảm nhận tự nhiên",
      "explanation": "Mẫu ngữ pháp「てたまらない・てならない・てしょうがない」dùng để: Cảm xúc mạnh và cảm nhận tự nhiên. Các mẫu nhấn mạnh cảm giác không kiềm được. てならない thường thiên về cảm xúc tự nảy sinh; てたまらない có thể diễn tả cảm giác thể chất mạnh."
    },
    {
      "id": "bridge-n2-42-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi bồn chồn vô cùng về kết quả thi.\": 試験の結果が気になっ___。",
      "answer": "てたまりません",
      "acceptedAnswers": [
        "てたまりません"
      ],
      "explanation": "Đáp án đúng là「てたまりません」. Cách kết hợp: Vて／Aくて／Aで + たまらない／ならない／しょうがない."
    },
    {
      "id": "bridge-n2-42-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi bồn chồn vô cùng về kết quả thi.\"",
      "options": [
        "気になってた",
        "まりません。",
        "試験の結果が"
      ],
      "answer": "試験の結果が気になってたまりません。",
      "explanation": "Câu hoàn chỉnh: 試験の結果が気になってたまりません。 (しけんのけっかがきになってたまりません。). Ý nghĩa: Tôi bồn chồn vô cùng về kết quả thi.."
    }
  ],
  "bridge-n2-43": [
    {
      "id": "bridge-n2-43-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「に違いない・に決まっている・ものだ」: 電気がついているので、誰かいる(___ )。 (Vì đèn đang bật nên chắc hẳn có người.)",
      "options": [
        "いる",
        "に違いありません",
        "のだ",
        "のに"
      ],
      "answer": "に違いありません",
      "explanation": "Áp dụng quy tắc: thể thường bỏ だ + に違いない／に決まっている；thể thường + ものだ. に違いない thể hiện suy đoán chắc chắn. に決まっている khẳng định chủ quan mạnh. ものだ có thể nêu bản chất, chuẩn mực hoặc hồi tưởng thói quen."
    },
    {
      "id": "bridge-n2-43-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Hồi nhỏ tôi thường chơi ở sông.\"?",
      "options": [
        "子供のころはよく川で遊んだものです。",
        "よく子供のころは川で遊んだものです。",
        "子供のころはよくものです。川で遊んだ",
        "ものです。子供のころはよく川で遊んだ"
      ],
      "answer": "子供のころはよく川で遊んだものです。",
      "explanation": "Cấu trúc chuẩn: thể thường bỏ だ + に違いない／に決まっている；thể thường + ものだ. Trật tự câu: 子供のころはよく川で遊んだものです。."
    },
    {
      "id": "bridge-n2-43-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 子供のころはよく川 [___] (Hồi nhỏ tôi thường chơi ở sông.)",
      "answer": "に違いありません",
      "acceptedAnswers": [
        "に違いありません",
        "に違いありません"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「に違いありません」theo cấu trúc: thể thường bỏ だ + に違いない／に決まっている；thể thường + ものだ."
    },
    {
      "id": "bridge-n2-43-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Hồi nhỏ tôi thường chơi ở sông.\"",
      "options": [
        "よく",
        "川で遊んだ",
        "ものです。",
        "子供のころは"
      ],
      "answer": "子供のころはよく川で遊んだものです。",
      "explanation": "Trật tự ngữ pháp chính xác là: 子供のころはよく川で遊んだものです。. Lưu ý: Đây là mức tin tưởng của người nói, không biến điều chưa kiểm chứng thành sự thật khách quan."
    },
    {
      "id": "bridge-n2-43-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「に違いない・に決まっている・ものだ」được sử dụng với mục đích chính nào?",
      "options": [
        "Nhận định chắc chắn và điều tự nhiên",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Nhận định chắc chắn và điều tự nhiên"
      ],
      "answer": "Nhận định chắc chắn và điều tự nhiên",
      "explanation": "Mẫu ngữ pháp「に違いない・に決まっている・ものだ」dùng để: Nhận định chắc chắn và điều tự nhiên. に違いない thể hiện suy đoán chắc chắn. に決まっている khẳng định chủ quan mạnh. ものだ có thể nêu bản chất, chuẩn mực hoặc hồi tưởng thói quen."
    },
    {
      "id": "bridge-n2-43-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Vì đèn đang bật nên chắc hẳn có người.\": 電気がついているので、誰かいる___。",
      "answer": "に違いありません",
      "acceptedAnswers": [
        "に違いありません"
      ],
      "explanation": "Đáp án đúng là「に違いありません」. Cách kết hợp: thể thường bỏ だ + に違いない／に決まっている；thể thường + ものだ."
    },
    {
      "id": "bridge-n2-43-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Vì đèn đang bật nên chắc hẳn có người.\"",
      "options": [
        "ので、誰かいるに",
        "違いありません。",
        "電気がついている"
      ],
      "answer": "電気がついているので、誰かいるに違いありません。",
      "explanation": "Câu hoàn chỉnh: 電気がついているので、誰かいるに違いありません。 (でんきがついているので、だれかいるにちがいありません。). Ý nghĩa: Vì đèn đang bật nên chắc hẳn có người.."
    }
  ],
  "bridge-n2-44": [
    {
      "id": "bridge-n2-44-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「どころではない・どころか・にすぎない」: 仕事が忙しくて旅行(___ )。 (Công việc quá bận nên không có tâm trí đi du lịch.)",
      "options": [
        "どころではありません",
        "ない",
        "のに",
        "ろか"
      ],
      "answer": "どころではありません",
      "explanation": "Áp dụng quy tắc: V từ điển／N + どころではない；thể thường + どころか；thể thường／N + にすぎない. どころではない nói hoàn cảnh không cho phép nghĩ đến việc ấy. どころか phủ nhận mức đầu rồi đưa mức khác hẳn. にすぎない giới hạn đánh giá ở mức chỉ là."
    },
    {
      "id": "bridge-n2-44-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Đây chỉ là một ví dụ.\"?",
      "options": [
        "これは一つの例にすぎません。",
        "一つの例にこれはすぎません。",
        "これはすぎません。一つの例に",
        "すぎません。これは一つの例に"
      ],
      "answer": "これは一つの例にすぎません。",
      "explanation": "Cấu trúc chuẩn: V từ điển／N + どころではない；thể thường + どころか；thể thường／N + にすぎない. Trật tự câu: これは一つの例にすぎません。."
    },
    {
      "id": "bridge-n2-44-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: これは一つの例 [___] (Đây chỉ là một ví dụ.)",
      "answer": "どころではありません",
      "acceptedAnswers": [
        "どころではありません",
        "どころではありません"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「どころではありません」theo cấu trúc: V từ điển／N + どころではない；thể thường + どころか；thể thường／N + にすぎない."
    },
    {
      "id": "bridge-n2-44-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Đây chỉ là một ví dụ.\"",
      "options": [
        "一つの例に",
        "すぎません。",
        "これは"
      ],
      "answer": "これは一つの例にすぎません。",
      "explanation": "Trật tự ngữ pháp chính xác là: これは一つの例にすぎません。. Lưu ý: どころか có thể đi theo chiều tốt hoặc xấu; phải xác định điều bị bác bỏ."
    },
    {
      "id": "bridge-n2-44-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「どころではない・どころか・にすぎない」được sử dụng với mục đích chính nào?",
      "options": [
        "Mức độ cực đoan và không chỉ thế",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Mức độ cực đoan và không chỉ thế"
      ],
      "answer": "Mức độ cực đoan và không chỉ thế",
      "explanation": "Mẫu ngữ pháp「どころではない・どころか・にすぎない」dùng để: Mức độ cực đoan và không chỉ thế. どころではない nói hoàn cảnh không cho phép nghĩ đến việc ấy. どころか phủ nhận mức đầu rồi đưa mức khác hẳn. にすぎない giới hạn đánh giá ở mức chỉ là."
    },
    {
      "id": "bridge-n2-44-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Công việc quá bận nên không có tâm trí đi du lịch.\": 仕事が忙しくて旅行___。",
      "answer": "どころではありません",
      "acceptedAnswers": [
        "どころではありません"
      ],
      "explanation": "Đáp án đúng là「どころではありません」. Cách kết hợp: V từ điển／N + どころではない；thể thường + どころか；thể thường／N + にすぎない."
    },
    {
      "id": "bridge-n2-44-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Công việc quá bận nên không có tâm trí đi du lịch.\"",
      "options": [
        "て旅行どころで",
        "はありません。",
        "仕事が忙しく"
      ],
      "answer": "仕事が忙しくて旅行どころではありません。",
      "explanation": "Câu hoàn chỉnh: 仕事が忙しくて旅行どころではありません。 (しごとがいそがしくてりょこうどころではありません。). Ý nghĩa: Công việc quá bận nên không có tâm trí đi du lịch.."
    }
  ],
  "bridge-n2-45": [
    {
      "id": "bridge-n2-45-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「はともかく・は別として・抜きで」: 値段(___ )品質はいいです。 (Tạm chưa bàn giá, chất lượng thì tốt.)",
      "options": [
        "きで",
        "して",
        "のに",
        "はともかく"
      ],
      "answer": "はともかく",
      "explanation": "Áp dụng quy tắc: Nはともかく；Nは別として；N抜きで／Nを抜きにして. はともかく tạm không xét một điểm để bàn điểm khác. は別として tách ngoại lệ; 抜きで loại một yếu tố khỏi hoạt động."
    },
    {
      "id": "bridge-n2-45-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Không đùa đâu, hãy suy nghĩ nghiêm túc.\"?",
      "options": [
        "冗談抜きで、真剣に考えてください。",
        "真剣に冗談抜きで、考えてください。",
        "冗談抜きで、真剣にください。考えて",
        "ください。冗談抜きで、真剣に考えて"
      ],
      "answer": "冗談抜きで、真剣に考えてください。",
      "explanation": "Cấu trúc chuẩn: Nはともかく；Nは別として；N抜きで／Nを抜きにして. Trật tự câu: 冗談抜きで、真剣に考えてください。."
    },
    {
      "id": "bridge-n2-45-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 冗談抜きで、真剣 [___] (Không đùa đâu, hãy suy nghĩ nghiêm túc.)",
      "answer": "はともかく",
      "acceptedAnswers": [
        "はともかく",
        "はともかく"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「はともかく」theo cấu trúc: Nはともかく；Nは別として；N抜きで／Nを抜きにして."
    },
    {
      "id": "bridge-n2-45-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Không đùa đâu, hãy suy nghĩ nghiêm túc.\"",
      "options": [
        "真剣に",
        "考えて",
        "ください。",
        "冗談抜きで、"
      ],
      "answer": "冗談抜きで、真剣に考えてください。",
      "explanation": "Trật tự ngữ pháp chính xác là: 冗談抜きで、真剣に考えてください。. Lưu ý: Tạm gác không có nghĩa phủ định giá trị của yếu tố đó; cần giữ đúng trọng tâm so sánh."
    },
    {
      "id": "bridge-n2-45-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「はともかく・は別として・抜きで」được sử dụng với mục đích chính nào?",
      "options": [
        "Tạm gác và bỏ qua một yếu tố",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Tạm gác và bỏ qua một yếu tố"
      ],
      "answer": "Tạm gác và bỏ qua một yếu tố",
      "explanation": "Mẫu ngữ pháp「はともかく・は別として・抜きで」dùng để: Tạm gác và bỏ qua một yếu tố. はともかく tạm không xét một điểm để bàn điểm khác. は別として tách ngoại lệ; 抜きで loại một yếu tố khỏi hoạt động."
    },
    {
      "id": "bridge-n2-45-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tạm chưa bàn giá, chất lượng thì tốt.\": 値段___品質はいいです。",
      "answer": "はともかく",
      "acceptedAnswers": [
        "はともかく"
      ],
      "explanation": "Đáp án đúng là「はともかく」. Cách kết hợp: Nはともかく；Nは別として；N抜きで／Nを抜きにして."
    },
    {
      "id": "bridge-n2-45-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tạm chưa bàn giá, chất lượng thì tốt.\"",
      "options": [
        "かく品質は",
        "いいです。",
        "値段はとも"
      ],
      "answer": "値段はともかく品質はいいです。",
      "explanation": "Câu hoàn chỉnh: 値段はともかく品質はいいです。 (ねだんはともかくひんしつはいいです。). Ý nghĩa: Tạm chưa bàn giá, chất lượng thì tốt.."
    }
  ],
  "bridge-n2-46": [
    {
      "id": "bridge-n2-46-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「やら〜やら・にしろ〜にしろ・も〜ば〜も」: 引っ越しの準備(___ )仕事やらで忙しいです。 (Tôi bận đủ việc như chuẩn bị chuyển nhà và công việc.)",
      "options": [
        "〜も",
        "しろ",
        "のに",
        "やら"
      ],
      "answer": "やら",
      "explanation": "Áp dụng quy tắc: Nやら Nやら；Aにしろ Bにしろ；Nも Vば Nも. やら liệt kê trong cảm giác nhiều thứ, thường bận rộn hoặc rối. にしろ…にしろ đặt hai khả năng đều dẫn cùng kết luận; も…ば…も kết hợp hai đặc điểm."
    },
    {
      "id": "bridge-n2-46-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Dù đi hay không, hãy báo sớm.\"?",
      "options": [
        "行くにしろ行かないにしろ、早く連絡してください。",
        "行かないにしろ、行くにしろ早く連絡してください。",
        "行くにしろ行かないにしろ、連絡してください。早く",
        "連絡してください。行くにしろ行かないにしろ、早く"
      ],
      "answer": "行くにしろ行かないにしろ、早く連絡してください。",
      "explanation": "Cấu trúc chuẩn: Nやら Nやら；Aにしろ Bにしろ；Nも Vば Nも. Trật tự câu: 行くにしろ行かないにしろ、早く連絡してください。."
    },
    {
      "id": "bridge-n2-46-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 行くにしろ行かないにしろ [___] (Dù đi hay không, hãy báo sớm.)",
      "answer": "やら",
      "acceptedAnswers": [
        "やら",
        "やら"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「やら」theo cấu trúc: Nやら Nやら；Aにしろ Bにしろ；Nも Vば Nも."
    },
    {
      "id": "bridge-n2-46-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Dù đi hay không, hãy báo sớm.\"",
      "options": [
        "行かないにしろ、",
        "早く",
        "連絡してください。",
        "行くにしろ"
      ],
      "answer": "行くにしろ行かないにしろ、早く連絡してください。",
      "explanation": "Trật tự ngữ pháp chính xác là: 行くにしろ行かないにしろ、早く連絡してください。. Lưu ý: やら không phải danh sách đầy đủ; dạng も…ば…も cần vị ngữ thích hợp ở cả hai vế."
    },
    {
      "id": "bridge-n2-46-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「やら〜やら・にしろ〜にしろ・も〜ば〜も」được sử dụng với mục đích chính nào?",
      "options": [
        "Liệt kê và hai lựa chọn",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Liệt kê và hai lựa chọn"
      ],
      "answer": "Liệt kê và hai lựa chọn",
      "explanation": "Mẫu ngữ pháp「やら〜やら・にしろ〜にしろ・も〜ば〜も」dùng để: Liệt kê và hai lựa chọn. やら liệt kê trong cảm giác nhiều thứ, thường bận rộn hoặc rối. にしろ…にしろ đặt hai khả năng đều dẫn cùng kết luận; も…ば…も kết hợp hai đặc điểm."
    },
    {
      "id": "bridge-n2-46-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi bận đủ việc như chuẩn bị chuyển nhà và công việc.\": 引っ越しの準備___仕事やらで忙しいです。",
      "answer": "やら",
      "acceptedAnswers": [
        "やら"
      ],
      "explanation": "Đáp án đúng là「やら」. Cách kết hợp: Nやら Nやら；Aにしろ Bにしろ；Nも Vば Nも."
    },
    {
      "id": "bridge-n2-46-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi bận đủ việc như chuẩn bị chuyển nhà và công việc.\"",
      "options": [
        "備やら仕事やら",
        "で忙しいです。",
        "引っ越しの準"
      ],
      "answer": "引っ越しの準備やら仕事やらで忙しいです。",
      "explanation": "Câu hoàn chỉnh: 引っ越しの準備やら仕事やらで忙しいです。 (ひっこしのじゅんびやらしごとやらでいそがしいです。). Ý nghĩa: Tôi bận đủ việc như chuẩn bị chuyển nhà và công việc.."
    }
  ],
  "bridge-n2-47": [
    {
      "id": "bridge-n2-47-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「したがって・すなわち・ただし・なお」: 参加費は無料です。(___ )予約が必要です。 (Phí tham gia miễn phí. Tuy nhiên cần đặt trước.)",
      "options": [
        "だし",
        "ただし",
        "のに",
        "わち"
      ],
      "answer": "ただし",
      "explanation": "Áp dụng quy tắc: câu。したがって／すなわち／ただし／なお、câu. したがって dẫn kết luận logic. すなわち diễn đạt tương đương; ただし thêm giới hạn hay ngoại lệ; なお bổ sung thông tin trong văn bản."
    },
    {
      "id": "bridge-n2-47-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tài liệu chưa đủ. Vì vậy chúng tôi hoãn việc đưa ra quyết định.\"?",
      "options": [
        "資料が不足しています。したがって、判断を延期します。",
        "したがって、資料が不足しています。判断を延期します。",
        "資料が不足しています。したがって、延期します。判断を",
        "延期します。資料が不足しています。したがって、判断を"
      ],
      "answer": "資料が不足しています。したがって、判断を延期します。",
      "explanation": "Cấu trúc chuẩn: câu。したがって／すなわち／ただし／なお、câu. Trật tự câu: 資料が不足しています。したがって、判断を延期します。."
    },
    {
      "id": "bridge-n2-47-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 資料が不足しています。した [___] (Tài liệu chưa đủ. Vì vậy chúng tôi hoãn việc đưa ra quyết định.)",
      "answer": "ただし",
      "acceptedAnswers": [
        "ただし",
        "ただし"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「ただし」theo cấu trúc: câu。したがって／すなわち／ただし／なお、câu."
    },
    {
      "id": "bridge-n2-47-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tài liệu chưa đủ. Vì vậy chúng tôi hoãn việc đưa ra quyết định.\"",
      "options": [
        "したがって、",
        "判断を",
        "延期します。",
        "資料が不足しています。"
      ],
      "answer": "資料が不足しています。したがって、判断を延期します。",
      "explanation": "Trật tự ngữ pháp chính xác là: 資料が不足しています。したがって、判断を延期します。. Lưu ý: Không dùng すなわち cho một ý chỉ liên quan xa; hai vế cần quan hệ giải thích tương đương."
    },
    {
      "id": "bridge-n2-47-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「したがって・すなわち・ただし・なお」được sử dụng với mục đích chính nào?",
      "options": [
        "Văn viết và tổ chức lập luận",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Văn viết và tổ chức lập luận"
      ],
      "answer": "Văn viết và tổ chức lập luận",
      "explanation": "Mẫu ngữ pháp「したがって・すなわち・ただし・なお」dùng để: Văn viết và tổ chức lập luận. したがって dẫn kết luận logic. すなわち diễn đạt tương đương; ただし thêm giới hạn hay ngoại lệ; なお bổ sung thông tin trong văn bản."
    },
    {
      "id": "bridge-n2-47-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Phí tham gia miễn phí. Tuy nhiên cần đặt trước.\": 参加費は無料です。___予約が必要です。",
      "answer": "ただし",
      "acceptedAnswers": [
        "ただし"
      ],
      "explanation": "Đáp án đúng là「ただし」. Cách kết hợp: câu。したがって／すなわち／ただし／なお、câu."
    },
    {
      "id": "bridge-n2-47-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Phí tham gia miễn phí. Tuy nhiên cần đặt trước.\"",
      "options": [
        "です。ただし予",
        "約が必要です。",
        "参加費は無料"
      ],
      "answer": "参加費は無料です。ただし予約が必要です。",
      "explanation": "Câu hoàn chỉnh: 参加費は無料です。ただし予約が必要です。 (さんかひはむりょうです。ただしよやくがひつようです。). Ý nghĩa: Phí tham gia miễn phí. Tuy nhiên cần đặt trước.."
    }
  ],
  "bridge-n2-48": [
    {
      "id": "bridge-n2-48-q4",
      "type": "choice",
      "prompt": "Chọn phương án đúng theo ngữ pháp「まい・ようか〜まいか・ものか」: 同じ失敗は二度とする(___ )と思いました。 (Tôi đã quyết không lặp lại sai lầm ấy.)",
      "options": [
        "いか",
        "のか",
        "のに",
        "まい"
      ],
      "answer": "まい",
      "explanation": "Áp dụng quy tắc: V từ điển + まい；V ý chí + か V từ điển + まいか；thể thường + ものか. まい biểu thị ý định không làm hoặc suy đoán phủ định theo văn phong. ようか…まいか nói phân vân; ものか phủ định quyết liệt bằng câu hỏi tu từ."
    },
    {
      "id": "bridge-n2-48-q5",
      "type": "choice",
      "prompt": "Câu nào sau đây có trật tự và cấu trúc tự nhiên nhất để diễn đạt: \"Tôi đang phân vân có nên du học hay không.\"?",
      "options": [
        "留学しようかするまいか、迷っています。",
        "するまいか、留学しようか迷っています。",
        "留学しようかするまいか、います。迷って",
        "います。留学しようかするまいか、迷って"
      ],
      "answer": "留学しようかするまいか、迷っています。",
      "explanation": "Cấu trúc chuẩn: V từ điển + まい；V ý chí + か V từ điển + まいか；thể thường + ものか. Trật tự câu: 留学しようかするまいか、迷っています。."
    },
    {
      "id": "bridge-n2-48-q6",
      "type": "fill",
      "prompt": "Điền vào chỗ trống thành tố ngữ pháp thích hợp: 留学しようかするま [___] (Tôi đang phân vân có nên du học hay không.)",
      "answer": "まい",
      "acceptedAnswers": [
        "まい",
        "まい"
      ],
      "explanation": "Thành phần ngữ pháp cần điền là「まい」theo cấu trúc: V từ điển + まい；V ý chí + か V từ điển + まいか；thể thường + ものか."
    },
    {
      "id": "bridge-n2-48-q7",
      "type": "order",
      "prompt": "Sắp xếp các cụm từ sau thành câu hoàn chỉnh mang ý nghĩa: \"Tôi đang phân vân có nên du học hay không.\"",
      "options": [
        "するまいか、",
        "迷って",
        "います。",
        "留学しようか"
      ],
      "answer": "留学しようかするまいか、迷っています。",
      "explanation": "Trật tự ngữ pháp chính xác là: 留学しようかするまいか、迷っています。. Lưu ý: Với nhóm II và する có biến thể nối まい; ものか là cách nói mạnh, không dùng vô tư trong đối thoại trang trọng."
    },
    {
      "id": "bridge-n2-48-q8",
      "type": "choice",
      "prompt": "Mẫu ngữ pháp「まい・ようか〜まいか・ものか」được sử dụng với mục đích chính nào?",
      "options": [
        "Quyết tâm phủ định và sự lưỡng lự",
        "Phủ định hoàn toàn mọi khả năng trong giao tiếp",
        "Chỉ dùng trong văn viết cổ điển, không dùng hiện đại",
        "Diễn đạt hành động trong quá khứ không liên quan đến Quyết tâm phủ định và sự lưỡng lự"
      ],
      "answer": "Quyết tâm phủ định và sự lưỡng lự",
      "explanation": "Mẫu ngữ pháp「まい・ようか〜まいか・ものか」dùng để: Quyết tâm phủ định và sự lưỡng lự. まい biểu thị ý định không làm hoặc suy đoán phủ định theo văn phong. ようか…まいか nói phân vân; ものか phủ định quyết liệt bằng câu hỏi tu từ."
    },
    {
      "id": "bridge-n2-48-q9",
      "type": "fill",
      "prompt": "Hoàn thiện câu thể hiện \"Tôi đã quyết không lặp lại sai lầm ấy.\": 同じ失敗は二度とする___と思いました。",
      "answer": "まい",
      "acceptedAnswers": [
        "まい"
      ],
      "explanation": "Đáp án đúng là「まい」. Cách kết hợp: V từ điển + まい；V ý chí + か V từ điển + まいか；thể thường + ものか."
    },
    {
      "id": "bridge-n2-48-q10",
      "type": "order",
      "prompt": "Sắp xếp các thành phần sau để tạo thành câu hoàn chỉnh: \"Tôi đã quyết không lặp lại sai lầm ấy.\"",
      "options": [
        "度とするまい",
        "と思いました。",
        "同じ失敗は二"
      ],
      "answer": "同じ失敗は二度とするまいと思いました。",
      "explanation": "Câu hoàn chỉnh: 同じ失敗は二度とするまいと思いました。 (おなじしっぱいはにどとするまいとおもいました。). Ý nghĩa: Tôi đã quyết không lặp lại sai lầm ấy.."
    }
  ]
};
