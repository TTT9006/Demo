import { db } from '../apps/api/src/db';
import { indexEntry } from '../apps/api/src/dictionary';

// Curated definitions for common Japanese vocabulary (N5/N4 core).
// Each word specifies Japanese headword (kanji or kana), preferred reading, and sense translations.
interface WordDef {
  key: string; // kanji or reading
  reading?: string;
  senses: {
    // English keywords to match gloss, or if omitted, applies to sense index
    match?: RegExp | string;
    vi: string;
  }[];
}

const lexicon: WordDef[] = [
  // --- Objects & Everyday items ---
  {
    key: '本',
    reading: 'ほん',
    senses: [
      { match: /book|volume|script/i, vi: 'sách, cuốn sách, kịch bản' },
      { match: /main|head|principal/i, vi: 'chính, chủ yếu' },
      { match: /real|genuine/i, vi: 'thật, đích thực' },
      { match: /counter for long/i, vi: 'trợ từ đếm vật dài (bút, chai, cây...)' },
    ],
  },
  {
    key: '本',
    reading: 'もと',
    senses: [
      { match: /origin|source|beginning/i, vi: 'nguồn gốc, căn nguyên, khởi đầu' },
      { match: /basis|base|foundation/i, vi: 'cơ sở, nền tảng, gốc rễ' },
    ],
  },
  {
    key: '辞書',
    reading: 'じしょ',
    senses: [{ match: /dictionary|lexicon/i, vi: 'từ điển' }],
  },
  {
    key: '雑誌',
    reading: 'ざっし',
    senses: [{ match: /magazine|journal/i, vi: 'tạp chí' }],
  },
  {
    key: '新聞',
    reading: 'しんぶん',
    senses: [{ match: /newspaper/i, vi: 'báo, tờ báo' }],
  },
  {
    key: '手紙',
    reading: 'てがみ',
    senses: [{ match: /letter/i, vi: 'thư, bức thư' }],
  },
  {
    key: '切手',
    reading: 'きって',
    senses: [{ match: /stamp/i, vi: 'tem, con tem' }],
  },
  {
    key: '写真',
    reading: 'しゃしん',
    senses: [{ match: /photograph|photo|picture/i, vi: 'ảnh, bức ảnh' }],
  },
  {
    key: '時計',
    reading: 'とけい',
    senses: [{ match: /watch|clock/i, vi: 'đồng hồ' }],
  },
  {
    key: '傘',
    reading: 'かさ',
    senses: [{ match: /umbrella|parasol/i, vi: 'ô, cái dù' }],
  },
  {
    key: '鞄',
    reading: 'かばん',
    senses: [{ match: /bag|basket/i, vi: 'cặp sách, túi xách, ba lô' }],
  },
  {
    key: '財布',
    reading: 'さいふ',
    senses: [{ match: /purse|wallet/i, vi: 'ví, bóp tiền' }],
  },
  {
    key: '鍵',
    reading: 'かぎ',
    senses: [{ match: /key/i, vi: 'chìa khóa' }],
  },
  {
    key: '眼鏡',
    reading: 'めがね',
    senses: [{ match: /glasses|spectacles/i, vi: 'kính, mắt kính' }],
  },
  {
    key: '靴',
    reading: 'くつ',
    senses: [{ match: /shoes|footwear/i, vi: 'giày, dép' }],
  },
  {
    key: '服',
    reading: 'ふく',
    senses: [{ match: /clothes|clothing/i, vi: 'quần áo, trang phục' }],
  },
  {
    key: '帽子',
    reading: 'ぼうし',
    senses: [{ match: /hat|cap/i, vi: 'mũ, nón' }],
  },
  {
    key: '机',
    reading: 'つくえ',
    senses: [{ match: /desk/i, vi: 'bàn, bàn làm việc' }],
  },
  {
    key: '椅子',
    reading: 'いす',
    senses: [{ match: /chair|stool/i, vi: 'ghế' }],
  },
  {
    key: '窓',
    reading: 'まど',
    senses: [{ match: /window/i, vi: 'cửa sổ' }],
  },
  {
    key: 'ドア',
    senses: [{ match: /door/i, vi: 'cửa, cửa ra vào' }],
  },
  {
    key: '部屋',
    reading: 'へや',
    senses: [{ match: /room|chamber/i, vi: 'phòng, căn phòng' }],
  },
  {
    key: '家',
    reading: 'いえ',
    senses: [
      { match: /house|residence|dwelling/i, vi: 'nhà, ngôi nhà, chỗ ở' },
      { match: /family|household/i, vi: 'gia đình, dòng họ' },
    ],
  },
  {
    key: '家',
    reading: 'うち',
    senses: [
      { match: /house|home/i, vi: 'nhà mình, gia đình' },
    ],
  },
  {
    key: '庭',
    reading: 'にわ',
    senses: [{ match: /garden|yard/i, vi: 'vườn, sân vườn' }],
  },
  {
    key: '電話',
    reading: 'でんわ',
    senses: [
      { match: /telephone|phone call/i, vi: 'điện thoại, cuộc gọi' },
    ],
  },
  {
    key: 'テレビ',
    senses: [{ match: /television|TV/i, vi: 'ti vi, vô tuyến' }],
  },
  {
    key: 'パソコン',
    senses: [{ match: /personal computer|PC/i, vi: 'máy tính cá nhân, laptop' }],
  },
  {
    key: 'カメラ',
    senses: [{ match: /camera/i, vi: 'máy ảnh, camera' }],
  },

  // --- Vehicles & Transport ---
  {
    key: '車',
    reading: 'くるま',
    senses: [
      { match: /car|automobile|vehicle/i, vi: 'xe, xe hơi, ô tô' },
      { match: /wheel/i, vi: 'bánh xe' },
    ],
  },
  {
    key: '自動車',
    reading: 'じどうしゃ',
    senses: [{ match: /automobile|car/i, vi: 'xe ô tô, xe hơi' }],
  },
  {
    key: '自転車',
    reading: 'じてんしゃ',
    senses: [{ match: /bicycle|bike/i, vi: 'xe đạp' }],
  },
  {
    key: '電車',
    reading: 'でんしゃ',
    senses: [{ match: /train|electric train/i, vi: 'tàu điện' }],
  },
  {
    key: '地下鉄',
    reading: 'ちかてつ',
    senses: [{ match: /subway|underground/i, vi: 'tàu điện ngầm' }],
  },
  {
    key: '飛行機',
    reading: 'ひこうき',
    senses: [{ match: /airplane|aeroplane|aircraft/i, vi: 'máy bay' }],
  },
  {
    key: '船',
    reading: 'ふね',
    senses: [{ match: /ship|boat|vessel/i, vi: 'tàu thủy, thuyền' }],
  },
  {
    key: 'バス',
    senses: [{ match: /bus/i, vi: 'xe buýt' }, { match: /bath/i, vi: 'bồn tắm' }],
  },
  {
    key: 'タクシー',
    senses: [{ match: /taxi|cab/i, vi: 'xe taxi' }],
  },
  {
    key: '駅',
    reading: 'えき',
    senses: [{ match: /station/i, vi: 'nhà ga, ga tàu' }],
  },
  {
    key: '空港',
    reading: 'くうこう',
    senses: [{ match: /airport/i, vi: 'sân bay, phi trường' }],
  },
  {
    key: '道',
    reading: 'みち',
    senses: [
      { match: /road|street|way|path/i, vi: 'con đường, lối đi' },
      { match: /course|route/i, vi: 'đường đi, lộ trình' },
      { match: /teachings|morality/i, vi: 'đạo, đạo lý' },
    ],
  },
  {
    key: '橋',
    reading: 'はし',
    senses: [{ match: /bridge/i, vi: 'cây cầu' }],
  },
  {
    key: '町',
    reading: 'まち',
    senses: [{ match: /town|block|neighborhood/i, vi: 'thị trấn, khu phố, thành phố' }],
  },
  {
    key: '国',
    reading: 'くに',
    senses: [
      { match: /country|state|nation/i, vi: 'quốc gia, đất nước' },
      { match: /home country|hometown/i, vi: 'quê hương, quê nhà' },
    ],
  },

  // --- Places ---
  {
    key: '学校',
    reading: 'がっこう',
    senses: [{ match: /school/i, vi: 'trường học' }],
  },
  {
    key: '大学',
    reading: 'だいがく',
    senses: [{ match: /university|college/i, vi: 'trường đại học' }],
  },
  {
    key: '教室',
    reading: 'きょうしつ',
    senses: [{ match: /classroom/i, vi: 'phòng học, lớp học' }],
  },
  {
    key: '図書館',
    reading: 'としょかん',
    senses: [{ match: /library/i, vi: 'thư viện' }],
  },
  {
    key: '病院',
    reading: 'びょういん',
    senses: [{ match: /hospital|clinic/i, vi: 'bệnh viện' }],
  },
  {
    key: '銀行',
    reading: 'ぎんこう',
    senses: [{ match: /bank/i, vi: 'ngân hàng' }],
  },
  {
    key: '郵便局',
    reading: 'ゆうびんきょく',
    senses: [{ match: /post office/i, vi: 'bưu điện' }],
  },
  {
    key: '公園',
    reading: 'こうえん',
    senses: [{ match: /park/i, vi: 'công viên' }],
  },
  {
    key: '店',
    reading: 'みせ',
    senses: [{ match: /store|shop/i, vi: 'cửa hàng, tiệm' }],
  },
  {
    key: 'スーパー',
    senses: [{ match: /supermarket/i, vi: 'siêu thị' }],
  },
  {
    key: 'レストラン',
    senses: [{ match: /restaurant/i, vi: 'nhà hàng, quán ăn' }],
  },
  {
    key: '喫茶店',
    reading: 'きっさてん',
    senses: [{ match: /coffee shop|cafe/i, vi: 'quán cà phê, tiệm giải khát' }],
  },
  {
    key: 'デパート',
    senses: [{ match: /department store/i, vi: 'trung tâm thương mại, bách hóa' }],
  },

  // --- People & Family ---
  {
    key: '人',
    reading: 'ひと',
    senses: [
      { match: /person|someone|human/i, vi: 'người, con người' },
      { match: /character|personality/i, vi: 'tính cách, phẩm chất' },
    ],
  },
  {
    key: '男',
    reading: 'おとこ',
    senses: [{ match: /man|male/i, vi: 'nam, đàn ông, con trai' }],
  },
  {
    key: '女',
    reading: 'おんな',
    senses: [{ match: /woman|female/i, vi: 'nữ, phụ nữ, con gái' }],
  },
  {
    key: '男の子',
    reading: 'おとこのこ',
    senses: [{ match: /boy/i, vi: 'bé trai, cậu bé' }],
  },
  {
    key: '女の子',
    reading: 'おんなのこ',
    senses: [{ match: /girl/i, vi: 'bé gái, cô bé' }],
  },
  {
    key: '子供',
    reading: 'こども',
    senses: [{ match: /child|children/i, vi: 'trẻ con, con cái' }],
  },
  {
    key: '家族',
    reading: 'かぞく',
    senses: [{ match: /family|members of a family/i, vi: 'gia đình' }],
  },
  {
    key: '両親',
    reading: 'りょうしん',
    senses: [{ match: /parents|both parents/i, vi: 'bố mẹ, cha mẹ' }],
  },
  {
    key: '父',
    reading: 'ちち',
    senses: [{ match: /father/i, vi: 'bố, cha (của mình)' }],
  },
  {
    key: '母',
    reading: 'はは',
    senses: [{ match: /mother/i, vi: 'mẹ (của mình)' }],
  },
  {
    key: 'お父さん',
    reading: 'おとうさん',
    senses: [{ match: /father/i, vi: 'bố, cha, ba (lịch sự)' }],
  },
  {
    key: 'お母さん',
    reading: 'おかあさん',
    senses: [{ match: /mother/i, vi: 'mẹ, má (lịch sự)' }],
  },
  {
    key: '兄',
    reading: 'あに',
    senses: [{ match: /older brother|elder brother/i, vi: 'anh trai (của mình)' }],
  },
  {
    key: '弟',
    reading: 'おとうと',
    senses: [{ match: /younger brother|little brother/i, vi: 'em trai' }],
  },
  {
    key: '姉',
    reading: 'あね',
    senses: [{ match: /older sister|elder sister/i, vi: 'chị gái (của mình)' }],
  },
  {
    key: '妹',
    reading: 'いもうと',
    senses: [{ match: /younger sister|little sister/i, vi: 'em gái' }],
  },
  {
    key: '友達',
    reading: 'ともだち',
    senses: [{ match: /friend|companion/i, vi: 'bạn bè, người bạn' }],
  },
  {
    key: '先生',
    reading: 'せんせい',
    senses: [
      { match: /teacher|master|doctor/i, vi: 'thầy cô giáo, bác sĩ, bậc tiền bối' },
      { match: /former life/i, vi: 'tiền kiếp' },
    ],
  },
  {
    key: '学生',
    reading: 'がくせい',
    senses: [{ match: /student/i, vi: 'học sinh, sinh viên' }],
  },
  {
    key: '医者',
    reading: 'いしゃ',
    senses: [{ match: /doctor|physician/i, vi: 'bác sĩ' }],
  },
  {
    key: '会社員',
    reading: 'かいしゃいん',
    senses: [{ match: /company employee/i, vi: 'nhân viên công ty' }],
  },

  // --- Food & Drinks ---
  {
    key: 'ご飯',
    reading: 'ごはん',
    senses: [
      { match: /cooked rice/i, vi: 'cơm' },
      { match: /meal/i, vi: 'bữa ăn' },
    ],
  },
  {
    key: '朝ご飯',
    reading: 'あさごはん',
    senses: [{ match: /breakfast/i, vi: 'bữa sáng, điểm tâm' }],
  },
  {
    key: '昼ご飯',
    reading: 'ひるごはん',
    senses: [{ match: /lunch/i, vi: 'bữa trưa' }],
  },
  {
    key: '晩ご飯',
    reading: 'ばんごはん',
    senses: [{ match: /dinner|evening meal/i, vi: 'bữa tối' }],
  },
  {
    key: 'パン',
    senses: [{ match: /bread/i, vi: 'bánh mì' }],
  },
  {
    key: '肉',
    reading: 'にく',
    senses: [
      { match: /meat/i, vi: 'thịt' },
      { match: /flesh/i, vi: 'thịt, da thịt' },
    ],
  },
  {
    key: '魚',
    reading: 'さかな',
    senses: [{ match: /fish/i, vi: 'cá' }],
  },
  {
    key: '卵',
    reading: 'たまご',
    senses: [
      { match: /egg/i, vi: 'trứng' },
      { match: /spawn|roe/i, vi: 'trứng cá' },
    ],
  },
  {
    key: '野菜',
    reading: 'やさい',
    senses: [{ match: /vegetable/i, vi: 'rau, rau củ' }],
  },
  {
    key: '果物',
    reading: 'くだもの',
    senses: [{ match: /fruit/i, vi: 'hoa quả, trái cây' }],
  },
  {
    key: '水',
    reading: 'みず',
    senses: [
      { match: /water/i, vi: 'nước, nước lọc' },
      { match: /fluid|liquid/i, vi: 'chất lỏng' },
    ],
  },
  {
    key: 'お湯',
    reading: 'おゆ',
    senses: [{ match: /hot water/i, vi: 'nước nóng, nước sôi' }],
  },
  {
    key: 'お茶',
    reading: 'おちゃ',
    senses: [{ match: /tea|green tea/i, vi: 'trà, trà xanh' }],
  },
  {
    key: 'コーヒー',
    senses: [{ match: /coffee/i, vi: 'cà phê' }],
  },
  {
    key: '牛乳',
    reading: 'ぎゅうにゅう',
    senses: [{ match: /milk/i, vi: 'sữa bò' }],
  },
  {
    key: 'ビール',
    senses: [{ match: /beer/i, vi: 'bia' }],
  },
  {
    key: 'お酒',
    reading: 'おさけ',
    senses: [{ match: /alcohol|sake/i, vi: 'rượu, rượu sake' }],
  },
  {
    key: '料理',
    reading: 'りょうり',
    senses: [
      { match: /cooking|cuisine|dish/i, vi: 'nấu ăn, món ăn, ẩm thực' },
    ],
  },
  {
    key: '砂糖',
    reading: 'さとう',
    senses: [{ match: /sugar/i, vi: 'đường ăn' }],
  },
  {
    key: '塩',
    reading: 'しお',
    senses: [{ match: /salt/i, vi: 'muối' }],
  },
  {
    key: '醤油',
    reading: 'しょうゆ',
    senses: [{ match: /soy sauce/i, vi: 'nước tương, xì dầu' }],
  },

  // --- Body parts ---
  {
    key: '体',
    reading: 'からだ',
    senses: [
      { match: /body/i, vi: 'cơ thể, thân thể' },
      { match: /health/i, vi: 'sức khỏe' },
    ],
  },
  {
    key: '頭',
    reading: 'あたま',
    senses: [
      { match: /head/i, vi: 'đầu' },
      { match: /mind|brain|intellect/i, vi: 'đầu óc, trí tuệ' },
    ],
  },
  {
    key: '目',
    reading: 'め',
    senses: [
      { match: /eye|eyeball/i, vi: 'mắt, đôi mắt' },
      { match: /sight|vision/i, vi: 'tầm nhìn, thị giác' },
      { match: /look|glance/i, vi: 'cái nhìn, ánh mắt' },
    ],
  },
  {
    key: '耳',
    reading: 'みみ',
    senses: [{ match: /ear|hearing/i, vi: 'tai, thính giác' }],
  },
  {
    key: '口',
    reading: 'くち',
    senses: [
      { match: /mouth/i, vi: 'miệng' },
      { match: /opening|gate|entrance/i, vi: 'cửa vào, lối vào' },
    ],
  },
  {
    key: '鼻',
    reading: 'はな',
    senses: [{ match: /nose/i, vi: 'mũi' }],
  },
  {
    key: '手',
    reading: 'て',
    senses: [
      { match: /hand|arm/i, vi: 'tay, bàn tay' },
      { match: /means|way|trick/i, vi: 'cách, phương pháp' },
    ],
  },
  {
    key: '足',
    reading: 'あし',
    senses: [
      { match: /foot|leg/i, vi: 'chân, bàn chân' },
      { match: /pace|step/i, vi: 'bước chân' },
    ],
  },
  {
    key: '顔',
    reading: 'かお',
    senses: [{ match: /face|visage/i, vi: 'khuôn mặt, mặt' }],
  },
  {
    key: '声',
    reading: 'こえ',
    senses: [{ match: /voice/i, vi: 'tiếng, giọng nói' }],
  },

  // --- Nature & Animals ---
  {
    key: '天気',
    reading: 'てんき',
    senses: [
      { match: /weather/i, vi: 'thời tiết' },
      { match: /fair weather|fine weather/i, vi: 'trời đẹp' },
    ],
  },
  {
    key: '雨',
    reading: 'あめ',
    senses: [{ match: /rain/i, vi: 'mưa, cơn mưa' }],
  },
  {
    key: '雪',
    reading: 'ゆき',
    senses: [{ match: /snow/i, vi: 'tuyết' }],
  },
  {
    key: '風',
    reading: 'かぜ',
    senses: [{ match: /wind|breeze/i, vi: 'gió, cơn gió' }],
  },
  {
    key: '太陽',
    reading: 'たいよう',
    senses: [{ match: /sun/i, vi: 'mặt trời' }],
  },
  {
    key: '空',
    reading: 'そら',
    senses: [{ match: /sky|air/i, vi: 'bầu trời' }],
  },
  {
    key: '海',
    reading: 'うみ',
    senses: [{ match: /sea|ocean/i, vi: 'biển, đại dương' }],
  },
  {
    key: '山',
    reading: 'やま',
    senses: [{ match: /mountain|hill/i, vi: 'núi' }],
  },
  {
    key: '川',
    reading: 'かわ',
    senses: [{ match: /river|stream/i, vi: 'sông, con sông' }],
  },
  {
    key: '花',
    reading: 'はな',
    senses: [{ match: /flower|blossom|bloom/i, vi: 'hoa, bông hoa' }],
  },
  {
    key: '桜',
    reading: 'さくら',
    senses: [{ match: /cherry blossom|cherry tree/i, vi: 'hoa anh đào' }],
  },
  {
    key: '木',
    reading: 'き',
    senses: [
      { match: /tree|shrub/i, vi: 'cây cối, cái cây' },
      { match: /wood|timber/i, vi: 'gỗ' },
    ],
  },
  {
    key: '犬',
    reading: 'いぬ',
    senses: [{ match: /dog/i, vi: 'chó, con chó' }],
  },
  {
    key: '猫',
    reading: 'ねこ',
    senses: [{ match: /cat/i, vi: 'mèo, con mèo' }],
  },
  {
    key: '鳥',
    reading: 'とり',
    senses: [{ match: /bird/i, vi: 'chim, con chim' }],
  },

  // --- Time ---
  {
    key: '時間',
    reading: 'じかん',
    senses: [
      { match: /time/i, vi: 'thời gian' },
      { match: /hours/i, vi: 'tiếng đồng hồ' },
    ],
  },
  {
    key: '朝',
    reading: 'あさ',
    senses: [{ match: /morning/i, vi: 'buổi sáng' }],
  },
  {
    key: '昼',
    reading: 'ひる',
    senses: [
      { match: /noon|midday/i, vi: 'buổi trưa' },
      { match: /daytime/i, vi: 'ban ngày' },
    ],
  },
  {
    key: '夜',
    reading: 'よる',
    senses: [{ match: /evening|night/i, vi: 'buổi tối, ban đêm' }],
  },
  {
    key: '晩',
    reading: 'ばん',
    senses: [{ match: /evening|night/i, vi: 'buổi tối' }],
  },
  {
    key: '今',
    reading: 'いま',
    senses: [
      { match: /now|the present time/i, vi: 'bây giờ, hiện tại' },
      { match: /just now|soon/i, vi: 'vừa mới, ngay bây giờ' },
    ],
  },
  {
    key: '今日',
    reading: 'きょう',
    senses: [{ match: /today|this day/i, vi: 'hôm nay' }],
  },
  {
    key: '明日',
    reading: 'あした',
    senses: [{ match: /tomorrow/i, vi: 'ngày mai' }],
  },
  {
    key: '昨日',
    reading: 'きのう',
    senses: [{ match: /yesterday/i, vi: 'hôm qua' }],
  },
  {
    key: '毎日',
    reading: 'まいにち',
    senses: [{ match: /every day/i, vi: 'mỗi ngày, hàng ngày' }],
  },
  {
    key: '今週',
    reading: 'こんしゅう',
    senses: [{ match: /this week/i, vi: 'tuần này' }],
  },
  {
    key: '来週',
    reading: 'らいしゅう',
    senses: [{ match: /next week/i, vi: 'tuần sau' }],
  },
  {
    key: '先週',
    reading: 'せんしゅう',
    senses: [{ match: /last week/i, vi: 'tuần trước' }],
  },
  {
    key: '今月',
    reading: 'こんげつ',
    senses: [{ match: /this month/i, vi: 'tháng này' }],
  },
  {
    key: '来月',
    reading: 'らいげつ',
    senses: [{ match: /next month/i, vi: 'tháng sau' }],
  },
  {
    key: '先月',
    reading: 'せんげつ',
    senses: [{ match: /last month/i, vi: 'tháng trước' }],
  },
  {
    key: '今年',
    reading: 'ことし',
    senses: [{ match: /this year/i, vi: 'năm nay' }],
  },
  {
    key: '来年',
    reading: 'らいねん',
    senses: [{ match: /next year/i, vi: 'năm sau' }],
  },
  {
    key: '去年',
    reading: 'きょねん',
    senses: [{ match: /last year/i, vi: 'năm ngoái' }],
  },
  {
    key: '春',
    reading: 'はる',
    senses: [{ match: /spring|springtime/i, vi: 'mùa xuân' }],
  },
  {
    key: '夏',
    reading: 'なつ',
    senses: [{ match: /summer/i, vi: 'mùa hè' }],
  },
  {
    key: '秋',
    reading: 'あき',
    senses: [{ match: /autumn|fall/i, vi: 'mùa thu' }],
  },
  {
    key: '冬',
    reading: 'ふゆ',
    senses: [{ match: /winter/i, vi: 'mùa đông' }],
  },
  {
    key: '休み',
    reading: 'やすみ',
    senses: [
      { match: /rest|repose/i, vi: 'nghỉ ngơi' },
      { match: /vacation|holiday/i, vi: 'ngày nghỉ, kỳ nghỉ' },
      { match: /absence/i, vi: 'vắng mặt, nghỉ học' },
    ],
  },
  {
    key: '誕生日',
    reading: 'たんじょうび',
    senses: [{ match: /birthday/i, vi: 'sinh nhật, ngày sinh' }],
  },

  // --- Verbs ---
  {
    key: '食べる',
    reading: 'たべる',
    senses: [
      { match: /to eat/i, vi: 'ăn, dùng bữa' },
      { match: /to live on|to survive/i, vi: 'kiếm sống' },
    ],
  },
  {
    key: '飲む',
    reading: 'のむ',
    senses: [
      { match: /to drink|to swallow/i, vi: 'uống, nuốt' },
      { match: /to take \(medicine\)/i, vi: 'uống (thuốc)' },
      { match: /to gulp down/i, vi: 'uống ực, nuốt trọn' },
    ],
  },
  {
    key: '見る',
    reading: 'みる',
    senses: [
      { match: /to see|to look|to watch/i, vi: 'nhìn, xem, ngắm' },
      { match: /to examine|to check/i, vi: 'kiểm tra, khám' },
      { match: /to look after/i, vi: 'chăm sóc, trông coi' },
    ],
  },
  {
    key: '聞く',
    reading: 'きく',
    senses: [
      { match: /to hear/i, vi: 'nghe' },
      { match: /to listen/i, vi: 'lắng nghe' },
      { match: /to ask|to inquire/i, vi: 'hỏi' },
    ],
  },
  {
    key: '読む',
    reading: 'よむ',
    senses: [
      { match: /to read/i, vi: 'đọc' },
      { match: /to chant|to recite/i, vi: 'ngâm thơ, tụng' },
      { match: /to understand|to divine/i, vi: 'đoán ý, hiểu thấu' },
    ],
  },
  {
    key: '書く',
    reading: 'かく',
    senses: [
      { match: /to write|to compose/i, vi: 'viết, soạn thảo' },
      { match: /to draw|to paint/i, vi: 'vẽ' },
    ],
  },
  {
    key: '話す',
    reading: 'はなす',
    senses: [
      { match: /to talk|to speak|to converse/i, vi: 'nói chuyện, trò chuyện' },
      { match: /to tell|to explain/i, vi: 'kể lại, giải thích' },
    ],
  },
  {
    key: '言う',
    reading: 'いう',
    senses: [
      { match: /to say|to utter|to declare/i, vi: 'nói, phát biểu, bảo' },
      { match: /to be called/i, vi: 'gọi là' },
    ],
  },
  {
    key: '買う',
    reading: 'かう',
    senses: [
      { match: /to buy|to purchase/i, vi: 'mua' },
    ],
  },
  {
    key: '売る',
    reading: 'うる',
    senses: [
      { match: /to sell/i, vi: 'bán' },
    ],
  },
  {
    key: '行く',
    reading: 'いく',
    senses: [
      { match: /to go|to move/i, vi: 'đi, di chuyển' },
      { match: /to proceed|to take place/i, vi: 'tiến hành, diễn ra' },
      { match: /to die|to pass away/i, vi: 'qua đời' },
    ],
  },
  {
    key: '来る',
    reading: 'くる',
    senses: [
      { match: /to come/i, vi: 'đến, tới' },
      { match: /to arrive/i, vi: 'đến nơi' },
    ],
  },
  {
    key: '帰る',
    reading: 'かえる',
    senses: [
      { match: /to return|to come home|to go home/i, vi: 'về, trở về nhà' },
    ],
  },
  {
    key: '会う',
    reading: 'あう',
    senses: [
      { match: /to meet|to encounter/i, vi: 'gặp, gặp gỡ' },
    ],
  },
  {
    key: '待つ',
    reading: 'まつ',
    senses: [
      { match: /to wait|to await/i, vi: 'chờ, đợi' },
      { match: /to look forward to/i, vi: 'mong chờ' },
    ],
  },
  {
    key: '立つ',
    reading: 'たつ',
    senses: [
      { match: /to stand|to rise/i, vi: 'đứng, đứng dậy' },
    ],
  },
  {
    key: '座る',
    reading: 'すわる',
    senses: [
      { match: /to sit/i, vi: 'ngồi' },
    ],
  },
  {
    key: '寝る',
    reading: 'ねる',
    senses: [
      { match: /to sleep|to go to bed/i, vi: 'ngủ, đi ngủ' },
      { match: /to lie down/i, vi: 'nằm xuống' },
    ],
  },
  {
    key: '起きる',
    reading: 'おきる',
    senses: [
      { match: /to get up|to rise|to wake up/i, vi: 'thức dậy, dậy' },
      { match: /to occur|to happen/i, vi: 'xảy ra' },
    ],
  },
  {
    key: '歩く',
    reading: 'あるく',
    senses: [
      { match: /to walk/i, vi: 'đi bộ, rảo bước' },
    ],
  },
  {
    key: '走る',
    reading: 'はしる',
    senses: [
      { match: /to run/i, vi: 'chạy' },
    ],
  },
  {
    key: '泳ぐ',
    reading: 'およぐ',
    senses: [
      { match: /to swim/i, vi: 'bơi, bơi lội' },
    ],
  },
  {
    key: '働く',
    reading: 'はたらく',
    senses: [
      { match: /to work|to labor/i, vi: 'làm việc, lao động' },
      { match: /to function|to operate/i, vi: 'hoạt động' },
    ],
  },
  {
    key: '休む',
    reading: 'やすむ',
    senses: [
      { match: /to rest|to take a break/i, vi: 'nghỉ ngơi, nghỉ ngơi lấy sức' },
      { match: /to be absent/i, vi: 'nghỉ học, nghỉ làm' },
    ],
  },
  {
    key: '遊ぶ',
    reading: 'あそぶ',
    senses: [
      { match: /to play|to enjoy oneself/i, vi: 'chơi, vui chơi' },
    ],
  },
  {
    key: '知る',
    reading: 'しる',
    senses: [
      { match: /to know|to be aware/i, vi: 'biết, nhận biết' },
      { match: /to learn|to find out/i, vi: 'tìm hiểu' },
    ],
  },
  {
    key: '分かる',
    reading: 'わかる',
    senses: [
      { match: /to understand|to comprehend/i, vi: 'hiểu, nắm rõ' },
      { match: /to become clear|to be known/i, vi: 'sáng tỏ, biết được' },
    ],
  },
  {
    key: '思う',
    reading: 'おもう',
    senses: [
      { match: /to think|to consider/i, vi: 'nghĩ, suy nghĩ' },
      { match: /to feel/i, vi: 'cảm thấy' },
    ],
  },
  {
    key: '持つ',
    reading: 'もつ',
    senses: [
      { match: /to hold|to carry/i, vi: 'cầm, nắm' },
      { match: /to possess|to have/i, vi: 'có, sở hữu' },
    ],
  },
  {
    key: '使う',
    reading: 'つかう',
    senses: [
      { match: /to use|to make use of/i, vi: 'dùng, sử dụng' },
    ],
  },
  {
    key: '作る',
    reading: 'つくる',
    senses: [
      { match: /to make|to produce|to manufacture/i, vi: 'làm, chế tạo, tạo ra' },
      { match: /to cook|to prepare \(food\)/i, vi: 'nấu, chế biến món ăn' },
    ],
  },
  {
    key: '開ける',
    reading: 'あける',
    senses: [
      { match: /to open/i, vi: 'mở (cửa, hộp, sách...)' },
    ],
  },
  {
    key: '閉める',
    reading: 'しめる',
    senses: [
      { match: /to close|to shut/i, vi: 'đóng (cửa...)' },
    ],
  },
  {
    key: '始める',
    reading: 'はじめる',
    senses: [
      { match: /to start|to begin/i, vi: 'bắt đầu, khởi đầu' },
    ],
  },
  {
    key: '終わる',
    reading: 'おわる',
    senses: [
      { match: /to end|to finish|to conclude/i, vi: 'kết thúc, hoàn thành, xong' },
    ],
  },
  {
    key: '忘れる',
    reading: 'わすれる',
    senses: [
      { match: /to forget/i, vi: 'quên' },
      { match: /to leave behind/i, vi: 'để quên' },
    ],
  },
  {
    key: '思い出す',
    reading: 'おもいだす',
    senses: [
      { match: /to remember|to recall/i, vi: 'nhớ lại, hồi tưởng' },
    ],
  },
  {
    key: '貸す',
    reading: 'かす',
    senses: [
      { match: /to lend|to loan/i, vi: 'cho vay, cho mượn' },
    ],
  },
  {
    key: '借りる',
    reading: 'かりる',
    senses: [
      { match: /to borrow|to rent/i, vi: 'vay, mượn, thuê' },
    ],
  },
  {
    key: '教える',
    reading: 'おしえる',
    senses: [
      { match: /to teach|to instruct/i, vi: 'dạy, giảng dạy' },
      { match: /to tell|to inform/i, vi: 'chỉ bảo, cho biết' },
    ],
  },
  {
    key: '習う',
    reading: 'ならう',
    senses: [
      { match: /to learn|to take lessons/i, vi: 'học tập (từ thầy cô, người khác)' },
    ],
  },
  {
    key: '手伝う',
    reading: 'てつだう',
    senses: [
      { match: /to help|to assist/i, vi: 'giúp đỡ, phụ giúp' },
    ],
  },
  {
    key: '送る',
    reading: 'おくる',
    senses: [
      { match: /to send|to dispatch/i, vi: 'gửi' },
      { match: /to see off/i, vi: 'tiễn đưa' },
    ],
  },
  {
    key: '乗る',
    reading: 'のる',
    senses: [
      { match: /to board|to get on|to ride/i, vi: 'lên xe, đi xe, cưỡi' },
    ],
  },
  {
    key: '降りる',
    reading: 'おりる',
    senses: [
      { match: /to get off|to disembark/i, vi: 'xuống xe, xuống tàu' },
    ],
  },
  {
    key: '頼む',
    reading: 'たのむ',
    senses: [
      { match: /to request|to ask/i, vi: 'nhờ vả, yêu cầu, gọi món' },
    ],
  },

  // --- Adjectives ---
  {
    key: '大きい',
    reading: 'おおきい',
    senses: [
      { match: /big|large|great/i, vi: 'to, lớn' },
      { match: /loud/i, vi: 'to (âm thanh)' },
    ],
  },
  {
    key: '小さい',
    reading: 'ちいさい',
    senses: [
      { match: /small|little|tiny/i, vi: 'nhỏ, bé' },
    ],
  },
  {
    key: '新しい',
    reading: 'あたらしい',
    senses: [
      { match: /new|novel|fresh/i, vi: 'mới, tươi mới' },
    ],
  },
  {
    key: '古い',
    reading: 'ふるい',
    senses: [
      { match: /old \(not person\)|aged|ancient/i, vi: 'cũ, cổ xưa' },
    ],
  },
  {
    key: '良い',
    reading: 'よい',
    senses: [
      { match: /good|excellent|fine/i, vi: 'tốt, đẹp, hay' },
    ],
  },
  {
    key: 'いい',
    senses: [
      { match: /good|excellent|fine/i, vi: 'tốt, hay, được' },
    ],
  },
  {
    key: '悪い',
    reading: 'わるい',
    senses: [
      { match: /bad|poor|undesirable/i, vi: 'xấu, tồi, tệ' },
    ],
  },
  {
    key: '暑い',
    reading: 'あつい',
    senses: [
      { match: /hot|warm/i, vi: 'nóng (thời tiết)' },
    ],
  },
  {
    key: '寒い',
    reading: 'さむい',
    senses: [
      { match: /cold/i, vi: 'lạnh, rét (thời tiết)' },
    ],
  },
  {
    key: '熱い',
    reading: 'あつい',
    senses: [
      { match: /hot \(to the touch\)/i, vi: 'nóng (nhiệt độ đồ vật, nước)' },
      { match: /passionate/i, vi: 'nhiệt huyết' },
    ],
  },
  {
    key: '冷たい',
    reading: 'つめたい',
    senses: [
      { match: /cold \(to the touch\)/i, vi: 'lạnh, mát lạnh (đồ vật, nước)' },
      { match: /coldhearted|aloof/i, vi: 'lạnh lùng (tính cách)' },
    ],
  },
  {
    key: '高い',
    reading: 'たかい',
    senses: [
      { match: /high|tall/i, vi: 'cao' },
      { match: /expensive|costly/i, vi: 'đắt, đắt tiền' },
    ],
  },
  {
    key: '低い',
    reading: 'ひくい',
    senses: [
      { match: /low|short/i, vi: 'thấp' },
    ],
  },
  {
    key: '安い',
    reading: 'やすい',
    senses: [
      { match: /cheap|inexpensive/i, vi: 'rẻ, giá rẻ' },
      { match: /calm|peaceful/i, vi: 'yên tâm, bình an' },
    ],
  },
  {
    key: '広い',
    reading: 'ひろい',
    senses: [
      { match: /spacious|vast|wide/i, vi: 'rộng, rộng rãi' },
    ],
  },
  {
    key: '狭い',
    reading: 'せまい',
    senses: [
      { match: /narrow|confined|small/i, vi: 'hẹp, chật chội' },
    ],
  },
  {
    key: '重い',
    reading: 'おもい',
    senses: [
      { match: /heavy|massive/i, vi: 'nặng, nặng nề' },
    ],
  },
  {
    key: '軽い',
    reading: 'かるい',
    senses: [
      { match: /light/i, vi: 'nhẹ' },
    ],
  },
  {
    key: '速い',
    reading: 'はやい',
    senses: [
      { match: /fast|quick|rapid/i, vi: 'nhanh, tốc độ' },
    ],
  },
  {
    key: '早い',
    reading: 'はやい',
    senses: [
      { match: /early/i, vi: 'sớm' },
    ],
  },
  {
    key: '遅い',
    reading: 'おそい',
    senses: [
      { match: /slow/i, vi: 'chậm' },
      { match: /late/i, vi: 'muộn, trễ' },
    ],
  },
  {
    key: '近い',
    reading: 'ちかい',
    senses: [
      { match: /near|close/i, vi: 'gần' },
    ],
  },
  {
    key: '遠い',
    reading: 'とおい',
    senses: [
      { match: /far|distant/i, vi: 'xa' },
    ],
  },
  {
    key: '美味しい',
    reading: 'おいしい',
    senses: [
      { match: /delicious|tasty/i, vi: 'ngon, thơm ngon' },
    ],
  },
  {
    key: '甘い',
    reading: 'あまい',
    senses: [
      { match: /sweet|sugary/i, vi: 'ngọt, có vị ngọt' },
      { match: /lenient|indulgent/i, vi: 'dễ dãi' },
    ],
  },
  {
    key: '辛い',
    reading: 'からい',
    senses: [
      { match: /spicy|hot/i, vi: 'cay, nồng' },
      { match: /salty/i, vi: 'mặn' },
    ],
  },
  {
    key: '難しい',
    reading: 'むずかしい',
    senses: [
      { match: /difficult|hard/i, vi: 'khó, phức tạp' },
    ],
  },
  {
    key: '易しい',
    reading: 'やさしい',
    senses: [
      { match: /easy|simple|plain/i, vi: 'dễ, đơn giản' },
    ],
  },
  {
    key: '優しい',
    reading: 'やさしい',
    senses: [
      { match: /tender|kind|gentle/i, vi: 'dịu dàng, hiền từ, tốt bụng' },
    ],
  },
  {
    key: '忙しい',
    reading: 'いそがしい',
    senses: [
      { match: /busy|occupied/i, vi: 'bận rộn' },
    ],
  },
  {
    key: '楽しい',
    reading: 'たのしい',
    senses: [
      { match: /enjoyable|fun|pleasant/i, vi: 'vui vẻ, vui sướng, thú vị' },
    ],
  },
  {
    key: '面白い',
    reading: 'おもしろい',
    senses: [
      { match: /interesting|fascinating/i, vi: 'thú vị, hấp dẫn' },
      { match: /amusing|funny/i, vi: 'hài hước, vui nhộn' },
    ],
  },

  // --- Na-adjectives ---
  {
    key: '静か',
    reading: 'しずか',
    senses: [
      { match: /quiet|silent/i, vi: 'yên tĩnh, tĩnh lặng' },
      { match: /calm|peaceful/i, vi: 'thanh bình, yên ả' },
    ],
  },
  {
    key: '賑やか',
    reading: 'にぎやか',
    senses: [
      { match: /bustling|busy|lively/i, vi: 'nhộn nhịp, náo nhiệt, tấp nập' },
    ],
  },
  {
    key: 'きれい',
    senses: [
      { match: /pretty|lovely|beautiful/i, vi: 'đẹp, xinh đẹp' },
      { match: /clean|clear/i, vi: 'sạch sẽ' },
    ],
  },
  {
    key: '綺麗',
    reading: 'きれい',
    senses: [
      { match: /pretty|lovely|beautiful/i, vi: 'đẹp, xinh xắn' },
      { match: /clean|clear/i, vi: 'sạch sẽ, gọn gàng' },
    ],
  },
  {
    key: '有名',
    reading: 'ゆうめい',
    senses: [
      { match: /famous/i, vi: 'nổi tiếng' },
    ],
  },
  {
    key: '親切',
    reading: 'しんせつ',
    senses: [
      { match: /kind|gentle|considerate/i, vi: 'thân thiện, tốt bụng, chu đáo' },
    ],
  },
  {
    key: '元気',
    reading: 'げんき',
    senses: [
      { match: /lively|energetic|healthy/i, vi: 'khỏe mạnh, hoạt bát, tràn đầy năng lượng' },
    ],
  },
  {
    key: '便利',
    reading: 'べんり',
    senses: [
      { match: /convenient|handy|useful/i, vi: 'tiện lợi, thuận tiện' },
    ],
  },
  {
    key: '不便',
    reading: 'ふべん',
    senses: [
      { match: /inconvenient/i, vi: 'bất tiện' },
    ],
  },
  {
    key: '好き',
    reading: 'すき',
    senses: [
      { match: /liked|well-liked|favorite/i, vi: 'thích, yêu thích' },
    ],
  },
  {
    key: '嫌い',
    reading: 'きらい',
    senses: [
      { match: /disliked|hated/i, vi: 'ghét, không thích' },
    ],
  },
  {
    key: '上手',
    reading: 'じょうず',
    senses: [
      { match: /skillful|skilled|proficient/i, vi: 'giỏi, khéo léo, thành thạo' },
    ],
  },
  {
    key: '下手',
    reading: 'へた',
    senses: [
      { match: /unskillful|poor|awkward/i, vi: 'kém, vụng về, dở' },
    ],
  },
  {
    key: '大切',
    reading: 'たいせつ',
    senses: [
      { match: /important|necessary/i, vi: 'quan trọng, quý giá' },
    ],
  },
  {
    key: '大丈夫',
    reading: 'だいじょうぶ',
    senses: [
      { match: /safe|all right|okay/i, vi: 'ổn, không sao, an toàn' },
    ],
  },

  // --- Greetings & Conversational ---
  {
    key: 'ありがとう',
    senses: [{ match: /thank you|thanks/i, vi: 'cảm ơn' }],
  },
  {
    key: 'こんにちは',
    senses: [{ match: /hello|good day/i, vi: 'xin chào (ban ngày)' }],
  },
  {
    key: 'おはよう',
    senses: [{ match: /good morning/i, vi: 'chào buổi sáng' }],
  },
  {
    key: 'こんばんは',
    senses: [{ match: /good evening/i, vi: 'chào buổi tối' }],
  },
  {
    key: 'さようなら',
    senses: [{ match: /goodbye|farewell/i, vi: 'tạm biệt' }],
  },
  {
    key: 'すみません',
    senses: [
      { match: /excuse me/i, vi: 'xin lỗi, xin làm phiền' },
      { match: /thank you/i, vi: 'cảm ơn' },
    ],
  },
  {
    key: 'お願いします',
    reading: 'おねがいします',
    senses: [{ match: /please/i, vi: 'làm ơn, xin nhờ giúp' }],
  },
  {
    key: 'はい',
    senses: [{ match: /yes|certainly/i, vi: 'vâng, dạ, đúng' }],
  },
  {
    key: 'いいえ',
    senses: [{ match: /no|not at all/i, vi: 'không, không phải' }],
  },

  // --- Pronouns & Interrogatives ---
  {
    key: 'これ',
    senses: [{ match: /this/i, vi: 'cái này, vật này' }],
  },
  {
    key: 'それ',
    senses: [{ match: /that/i, vi: 'cái đó, vật đó' }],
  },
  {
    key: 'あれ',
    senses: [{ match: /that/i, vi: 'cái kia' }],
  },
  {
    key: 'どれ',
    senses: [{ match: /which/i, vi: 'cái nào' }],
  },
  {
    key: 'ここ',
    senses: [{ match: /here/i, vi: 'ở đây, chỗ này' }],
  },
  {
    key: 'そこ',
    senses: [{ match: /there/i, vi: 'ở đó, chỗ đó' }],
  },
  {
    key: 'あそこ',
    senses: [{ match: /there|over there/i, vi: 'ở kia, chỗ kia' }],
  },
  {
    key: 'どこ',
    senses: [{ match: /where/i, vi: 'ở đâu' }],
  },
  {
    key: '何',
    reading: 'なに',
    senses: [{ match: /what/i, vi: 'cái gì, gì' }],
  },
  {
    key: '何',
    reading: 'なん',
    senses: [{ match: /what/i, vi: 'gì, mấy' }],
  },
  {
    key: '誰',
    reading: 'だれ',
    senses: [{ match: /who/i, vi: 'ai, người nào' }],
  },
  {
    key: 'いつ',
    senses: [{ match: /when/i, vi: 'khi nào, bao giờ' }],
  },
  {
    key: 'どうして',
    senses: [{ match: /why/i, vi: 'tại sao, vì sao' }],
  },
  {
    key: 'なぜ',
    senses: [{ match: /why/i, vi: 'tại sao, cớ sao' }],
  },
  {
    key: 'どう',
    senses: [{ match: /how/i, vi: 'như thế nào, ra sao' }],
  },
  {
    key: 'いくら',
    senses: [{ match: /how much/i, vi: 'bao nhiêu tiền, bao nhiêu' }],
  },
  {
    key: 'いくつ',
    senses: [{ match: /how many|how old/i, vi: 'mấy cái, bao nhiêu tuổi' }],
  },
  {
    key: '私',
    reading: 'わたし',
    senses: [{ match: /I|me/i, vi: 'tôi, mình' }],
  },
  {
    key: 'あなた',
    senses: [{ match: /you/i, vi: 'bạn, anh, chị' }],
  },
  {
    key: '彼',
    reading: 'かれ',
    senses: [
      { match: /he|him/i, vi: 'anh ấy' },
      { match: /boyfriend/i, vi: 'bạn trai, người yêu' },
    ],
  },
  {
    key: '彼女',
    reading: 'かのじょ',
    senses: [
      { match: /she|her/i, vi: 'cô ấy, nàng' },
      { match: /girlfriend/i, vi: 'bạn gái, người yêu' },
    ],
  },

  // --- Numbers ---
  {
    key: '一',
    reading: 'いち',
    senses: [{ match: /one/i, vi: 'một, số 1' }],
  },
  {
    key: '二',
    reading: 'に',
    senses: [{ match: /two/i, vi: 'hai, số 2' }],
  },
  {
    key: '三',
    reading: 'さん',
    senses: [{ match: /three/i, vi: 'ba, số 3' }],
  },
  {
    key: '四',
    reading: 'よん',
    senses: [{ match: /four/i, vi: 'bốn, số 4' }],
  },
  {
    key: '五',
    reading: 'ご',
    senses: [{ match: /five/i, vi: 'năm, số 5' }],
  },
  {
    key: '六',
    reading: 'ろく',
    senses: [{ match: /six/i, vi: 'sáu, số 6' }],
  },
  {
    key: '七',
    reading: 'なな',
    senses: [{ match: /seven/i, vi: 'bảy, số 7' }],
  },
  {
    key: '八',
    reading: 'はち',
    senses: [{ match: /eight/i, vi: 'tám, số 8' }],
  },
  {
    key: '九',
    reading: 'きゅう',
    senses: [{ match: /nine/i, vi: 'chín, số 9' }],
  },
  {
    key: '十',
    reading: 'じゅう',
    senses: [{ match: /ten/i, vi: 'mười, số 10' }],
  },
  {
    key: '百',
    reading: 'ひゃく',
    senses: [{ match: /hundred/i, vi: 'trăm, 100' }],
  },
  {
    key: '千',
    reading: 'せん',
    senses: [{ match: /thousand/i, vi: 'nghìn, một ngàn, 1.000' }],
  },
  {
    key: '万',
    reading: 'まん',
    senses: [{ match: /10,000|ten thousand/i, vi: 'vạn, mười nghìn, 10.000' }],
  },
  {
    key: '円',
    reading: 'えん',
    senses: [
      { match: /yen/i, vi: 'yên (đơn vị tiền tệ Nhật Bản)' },
      { match: /circle/i, vi: 'hình tròn' },
    ],
  },
];

async function main() {
  console.log(`Bắt đầu dịch từ điển thông dụng (${lexicon.length} từ mục tiêu)...`);

  let translatedGlosses = 0;
  const reindexEntryIds = new Set<string>();

  for (const item of lexicon) {
    // 1. Fast indexed lookup of entryId
    let entryIds: { entryId: string }[] = [];
    if (item.reading && item.key !== item.reading) {
      entryIds = await db.$queryRaw<{ entryId: string }[]>`
        SELECT k.entryId
        FROM DictionaryKanji k
        JOIN DictionaryReading r ON k.entryId = r.entryId
        WHERE k.text = ${item.key} AND r.text = ${item.reading}
        LIMIT 2
      `;
    }
    if (!entryIds.length) {
      entryIds = await db.$queryRaw<{ entryId: string }[]>`
        SELECT entryId FROM DictionaryKanji WHERE text = ${item.key}
        UNION
        SELECT entryId FROM DictionaryReading WHERE text = ${item.key}
        LIMIT 2
      `;
    }

    for (const { entryId } of entryIds) {
      const entry = await db.dictionaryEntry.findUnique({
        where: { id: entryId },
        include: {
          kanji: true,
          readings: true,
          senses: {
            include: {
              glosses: {
                include: { translation: true },
              },
            },
          },
        },
      });
      if (!entry) continue;

      for (const sense of entry.senses) {
        for (const gloss of sense.glosses) {
          // Check if matches any sense rule
          let matchedVi: string | null = null;
          for (const sRule of item.senses) {
            if (sRule.match) {
              const reg = typeof sRule.match === 'string' ? new RegExp(sRule.match, 'i') : sRule.match;
              if (reg.test(gloss.originalText)) {
                matchedVi = sRule.vi;
                break;
              }
            } else {
              matchedVi = sRule.vi;
              break;
            }
          }

          if (matchedVi) {
            await db.dictionaryTranslation.upsert({
              where: { glossId: gloss.id },
              create: {
                glossId: gloss.id,
                targetLanguage: 'vi',
                translatedText: matchedVi,
                status: 'completed',
                provider: 'curated-lexicon',
                model: 'n5-n4-common',
                sourceHash: gloss.sourceHash,
                reviewedAt: new Date(),
              },
              update: {
                translatedText: matchedVi,
                status: 'completed',
                provider: 'curated-lexicon',
                model: 'n5-n4-common',
                sourceHash: gloss.sourceHash,
                reviewedAt: new Date(),
                translatedAt: new Date(),
              },
            });
            translatedGlosses++;
            reindexEntryIds.add(entry.id);
          }
        }
      }
    }
  }

  console.log(`Đã cập nhật ${translatedGlosses} định nghĩa cho ${reindexEntryIds.size} từ!`);
  console.log(`Đang tái lập chỉ mục tìm kiếm (reindexing)...`);

  let count = 0;
  for (const id of reindexEntryIds) {
    await indexEntry(id);
    count++;
  }

  console.log(`Hoàn tất reindex ${count} từ vựng vào từ điển!`);
}

main()
  .catch((e) => {
    console.error('Lỗi thực hiện:', e);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
