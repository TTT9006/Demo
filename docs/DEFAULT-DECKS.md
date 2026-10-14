# Bộ thẻ mặc định — 14/10/2026

8 bộ, 286 thẻ: Hiragana và Katakana (104 thẻ mỗi bộ: 46 cơ bản, 25 đục/bán đục, 33 âm ghép), 78 Kanji chia theo Thiên nhiên, Số đếm, Con người và cơ thể, Trường học, Thời gian và phương hướng, Động vật và cây cối. Không bao gồm mọi tổ hợp Katakana dùng cho từ ngoại lai.

Mỗi tài khoản nhận bản riêng một lần. Tài khoản cũ được bổ sung trong yêu cầu đăng nhập đã xác thực tiếp theo; tài khoản mới cũng dùng cơ chế này. Có thể cấp trước bằng `node --import tsx scripts/default-decks.ts`. Cột `User.defaultDeckVersion` và transaction ngăn tạo trùng khi nhiều yêu cầu đến cùng lúc. Người dùng có thể đổi tên, sửa, xóa thẻ/bộ mà không bị tạo lại; lịch ôn vẫn dùng SRS hiện có và không chia sẻ giữa tài khoản.

Kanji lấy cách đọc, nghĩa Anh, số nét và bộ thủ cổ điển từ dữ liệu KANJIDIC2 hiện có. Mỗi thẻ dùng một cách đọc có nguồn, không chứa dấu đánh dấu okurigana; không có ý nghĩa rằng đó là cách đọc duy nhất hoặc luôn dùng khi chữ đứng riêng. Nghĩa Việt là chú giải biên tập cho 78 chữ cơ bản. Tên bộ thủ tiếng Anh dùng tên Unicode, tránh nhầm các nghĩa khác của chữ đại diện bộ thủ. Đây là bộ thủ tra cứu, không suy diễn nguồn gốc/cấu tạo của chữ. Nguồn và license chi tiết: [data/kanji/README.md](../data/kanji/README.md); dữ liệu phái sinh KANJIDIC2 theo CC BY-SA 4.0.

Danh sách thẻ và mặt đáp án dùng preference Japanese/Romanized hiện có. Mặt câu hỏi không hiện reading, nghĩa hay bộ thủ. Kana hiển thị cách đọc ở dòng riêng; Kanji có thêm ruby.

Migration `20261014000000_default_decks` chỉ bổ sung cột, đã áp dụng vào local và trial, không reset/import lại dữ liệu. Đã cấp bộ cho tài khoản hiện có trong cả hai database.

Kiểm tra: 94/94 unit/integration; build/typecheck đạt. Browser smoke kiểm tra 390/1440 px, sáng/tối, hai chế độ chú thích và giấu đáp án trước khi lật: `node tests/browser/default-decks-smoke.mjs`. Smoke dùng tài khoản mẫu, không đánh giá thẻ, khôi phục preference sau khi chạy. Ảnh kiểm tra nằm ở `test-results/default-decks/` (không commit).
