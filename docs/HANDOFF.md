# Bàn giao ngắn — Komorebi (13/10/2026)

Đọc file này trước khi tiếp tục; chi tiết kỹ thuật: `docs/UPGRADE-20261013.md`. Đây là tóm tắt lịch sử và trạng thái đã kiểm chứng, không phải yêu cầu viết lại dự án.

## Dự án và quy tắc
- Website tự học tiếng Nhật, giao diện Việt; repository `D:\Demo`, GitHub `TTT9006/Demo`. Người dùng muốn giao diện gọn, không gradient/thiết kế kiểu AI, tốt trên mobile, desktop và dark mode.
- React 19/Vite 7/TypeScript; Express 5; Prisma 6.19/SQLite; React Query/Zustand; **npm + package-lock.json**, Node >=24. Không dùng `node_modules-pnpm-backup`.
- Sửa trực tiếp kiến trúc hiện có, tái sử dụng component. Không xóa/reset database, tài khoản, tiến độ, JMdict; không bịa từ/cách đọc/dịch Việt, không tự thêm AI trả phí.

## Lịch sử và phần đã hoàn thành
1. **Khôi phục dự án:** từng thiếu package.json gây ENOENT; phục hồi cấu hình/mã nguồn dựa trên lịch sử patch, imports và dependency thực tế. Build và dev hoạt động. Báo cáo nguồn phục hồi: `docs/RECOVERY.md`.
2. **Tài khoản/dữ liệu:** tài khoản, mật khẩu băm và tiến độ lưu SQLite máy chủ; IndexedDB `komorebi-drafts` chỉ lưu bản nháp luyện viết theo người dùng, không lưu mật khẩu/token. DB local `prisma/learning.db`; DB dùng thử `.share/trial.db` riêng biệt, nên tài khoản giữa hai DB không tự đồng bộ.
3. **Chia sẻ miễn phí:** Cloudflare Quick Tunnel qua `npm run share`; máy phải bật và tiến trình phải chạy. URL thay đổi sau khởi động lại; lấy từ `.share/url.txt`. Giữ `.share/ready.json` và trial.db để giữ dữ liệu. Từng kiểm tra các đường dẫn file riêng trả HTML ứng dụng, không lộ nội dung file; đây không phải kiểm toán bảo mật toàn diện. Không triển khai hosting 24/7.
4. **Từ điển:** giữ 218.863 mục JMdict, mọi dạng kanji/reading/sense; chỉ có 97 bản dịch Việt thật. Normalizer dùng WanaKana xử lý kana/romaji/macron/Unicode; tìm nhiều tầng, ưu tiên chính xác, có suy ra từ gốc, fuzzy giới hạn, phân trang backend. Bảng search có 868.356 terms, version `jp-search-3`, thêm index; sửa tìm Việt lẫn nghĩa Anh. UI debounce 250ms, IME, hủy request cũ, highlight và nhãn “Dạng gốc”. Không đưa JMdict nguyên khối vào frontend.
5. **Bộ thủ/luyện viết:** 214 Kangxi, 10.384 Kanji metadata, 1.314 assets nét tải khi cần; hai chế độ Kanji/bộ thủ, biến thể, liên kết Kanji↔bộ thủ, animation, touch, tiến độ tài khoản và SRS. Dữ liệu KANJIDIC2/Unicode/KanjiVG có nguồn và license; không suy đoán cấu tạo. Canvas chưa chấm đúng/sai thứ tự nét.
6. **Chú thích:** `JapaneseAnnotatedText`, setting đúng hai giá trị `japanese` (mặc định)/`romanized`; ruby trên Kanji, tách okurigana, giữ câu gốc. Ưu tiên reading có sẵn rồi Kuromoji local, không chắc thì để nguyên. Tích hợp bài tập/quiz/grammar/review; bảo vệ bài kiểm tra cách đọc khỏi lộ đáp án. Đổi setting không reset bài/timer; có preview và preference theo tài khoản.
7. **Mobile:** đã chỉnh responsive và kiểm tra nhiều độ rộng, sáng/tối, canvas touch; chưa kiểm chứng đầy đủ thiết bị thật/Safari/screen reader.

## Phần dở tối hôm trước — đã chốt
Phần thuật toán suy ra từ gốc đã viết xong; việc còn lại là khởi động bản dùng thử và xác minh công khai. Ngày 13/10 đã build lại, chạy bằng trial.db hiện có, kiểm tra đăng nhập cùng API/UI và nhãn “Dạng gốc” **4/4 pass**:
`ikimasu→行く`, `tabemashita→食べる`, `benkyoushimashita→勉強`, `食べさせられませんでした→食べる`.

Script: `tests/browser/conjugation-smoke.mjs`; bằng chứng: `test-results/handoff/conjugation-smoke.json` (10:41:46 UTC). Link lúc kiểm tra: https://sega-followed-spas-having.trycloudflare.com — luôn kiểm tra lại `.share/url.txt`, không mặc định link còn sống. Không cần viết lại engine để hoàn thành việc bàn giao này.

## Kiểm thử, migration và giới hạn
- Lượt nâng cấp trước: 92/92 unit/integration, 6/6 E2E, 40 kiểm tra layout tính năng mới; build/typecheck pass, lint 0 lỗi/2 cảnh báo imports cũ. Lượt bàn giao này chạy lại build và smoke công khai 4 truy vấn, không chạy lại toàn bộ suite.
- Benchmark 35 query: 30 query Nhật/romaji đạt; Việt 4/5 có dữ liệu, “sách” thiếu bản dịch. Median warm 46,59→2,42ms, không phải benchmark tải đồng thời.
- Hai migration thêm: `20261013000000_learning_upgrade`, `20261013010000_exact_search_indexes`, đã áp dụng local/trial. Backup `.recovery/upgrade-20261013/`; đối chiếu nâng cấp giữ nguyên tài khoản/tiến độ, SQLite kiểm tra toàn vẹn đạt. Rollback ưu tiên code cũ với schema bổ sung; không reset/ghi đè DB đang có dữ liệu mới.
- Giới hạn: reading theo ngữ cảnh chưa hoàn hảo; dữ liệu Việt ít; một số bộ thủ thiếu nét/animation có fallback; không bao phủ mọi tiếng Nhật cổ/phương ngữ/dạng chia. Bundle còn lớn (~425KB gzip), Node có cảnh báo deprecated. Chi tiết nguồn/license, benchmark và file đổi trong báo cáo nâng cấp.

## Cách chạy và Git
Tại `D:\Demo`: `npm run dev` (web 127.0.0.1:5173, API 3001); `npm run share` (build + server 3010 + tunnel). Kiểm tra tiến trình/cổng trước khi mở thêm. Kiểm thử: `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`, `npm run test:e2e`; E2E dùng DB thử riêng. Smoke link hiện tại: `node tests/browser/conjugation-smoke.mjs` (cần Edge và mạng). Không tải/import lại từ điển hay chạy setup/reset chỉ để khởi động.

Git cập nhật sau bàn giao: phần nâng cấp đã nằm trong commit `1325324` (`update`). Người dùng yêu cầu commit tiếp phần smoke test và tài liệu bàn giao; commit này được tạo trên nhánh `codex/handoff-conjugation` để tránh bỏ lại commit ở detached HEAD. Chưa xác nhận push phần nâng cấp; lượt commit bàn giao không thực hiện push. Khi tiếp tục phải kiểm tra Git lại và giữ thay đổi của người dùng. Không đưa `.env`, database, backup hoặc dữ liệu riêng vào commit.
