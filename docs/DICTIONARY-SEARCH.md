# Tra cứu dạng chia

Tìm kiếm hỗ trợ romaji, Hiragana, Katakana và cách viết có Kanji. Ví dụ `ikimasu`, `ikimashita`, `ikimasen`, `いきませんでした`, `行かなかった` đều có thể tìm mục từ `行く`.

Các nhóm dạng được xử lý:

- Động từ nhóm một, nhóm hai; bất quy tắc する, 来る, 行く và phủ định của ある.
- Lịch sự, quá khứ, phủ định, phủ định quá khứ; thể て, たら, たり, ば; mệnh lệnh, ý chí, mong muốn.
- Khả năng, bị động, sai khiến, sai khiến bị động; các tổ hợp như `食べさせられませんでした`.
- Tiếp diễn ている, làm trước ておく, hoàn tất てしまう, yêu cầu てください và một số dạng rút gọn như てる, ちゃう, じゃう.
- Tính từ đuôi い và な: các dạng quá khứ, phủ định, lịch sự, điều kiện; trường hợp いい / よい.
- Danh từ kết hợp する, ví dụ `benkyoushimashita` → `勉強`.

Ứng dụng ưu tiên khớp nguyên văn và dạng chuẩn hóa, tiếp theo là từ gốc suy ra, sau đó là kết quả khớp một phần và nghĩa dịch. Một cách đọc có thể thuộc nhiều từ: `ikimasu` có thể là 行きます hoặc 生きます; ứng dụng giữ các kết quả hợp lệ và không tự khẳng định ý định của người tra.

Kết quả suy ra hiển thị **Dạng gốc** và các bước nhận diện. Việc suy ra được kiểm tra bằng nhãn loại từ JMdict, tìm trên chỉ mục, giới hạn 6 bước và tối đa 255 ứng viên. Không gọi AI, không thay đổi dữ liệu từ điển hay tài khoản. Đây là tra cứu từ/dạng chia, chưa phải phân tích nguyên câu, và không cam kết bao phủ mọi phương ngữ, cổ ngữ hay lối viết tiếng lóng.

Quy tắc được tự triển khai; đối chiếu ngữ pháp từ [Tae Kim: quá khứ](https://www.guidetojapanese.org/pastverb.html) và [sai khiến, bị động](https://guidetojapanese.org/learn/grammar/causepass).
