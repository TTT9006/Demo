# Bàn giao ngắn — Komorebi (14/10/2026)

## Cập nhật cuối ngày — tài khoản dùng chung (ưu tiên thông tin này)

- Đã sửa lỗi đăng nhập tại cổng 5174 do thiếu trong danh sách nguồn cho phép; cập nhật API, `.env.example` và `.env` local.
- Theo yêu cầu người dùng, đã hợp nhất tài khoản local/trial vào `prisma/learning.db`. Người dùng xác nhận hai tài khoản trùng email của mình đều là của mình. Local và script chia sẻ nay dùng **cùng database**; `.share/trial.db` chỉ giữ làm đối chiếu, không tiếp tục sử dụng hoặc seed lại.
- Giữ 3 tài khoản, 52 bộ, 1.494 thẻ, 174 lượt ôn thẻ. Hai mật khẩu cũ của tài khoản gộp đều đăng nhập được; đổi mật khẩu sẽ thu hồi cả hai. Tài khoản mẫu chỉ có quyền `user`, không còn quyền quản trị local. Các bộ cùng tên được giữ riêng để tránh mất chỉnh sửa/lịch sử.
- Migration mới `20261014020000_unified_accounts` đã áp dụng database chính. Backup `.recovery/unified-before-1791993794332/` và `.recovery/unified-1791993837150/`. Kiểm tra toàn vẹn/khóa ngoại đạt. **Không khôi phục trial đè lên database chính.**
- 106/106 kiểm thử đạt; build/TypeScript/lint đạt. Smoke hai máy chủ và trình duyệt desktop/mobile cùng DB đạt. Link Internet thật và local 5173/5174 đã xác minh cùng tài khoản. Chi tiết mã, cách chạy và giới hạn: `docs/UNIFIED-ACCOUNTS.md`.
- Link tại thời điểm kiểm tra: https://cotton-receive-obligation-dean.trycloudflare.com; dùng `.share/url.txt` để lấy link hiện tại. Mobile dùng link HTTPS, không dùng địa chỉ 127.0.0.1 của máy tính. Cần máy chủ bật; chưa có hosting 24/7.
- Commit tài liệu bàn giao trước đó là `893ff40` trên `main`. Các sửa lỗi đăng nhập/hợp nhất dữ liệu và tài liệu được đưa vào commit tiếp theo theo yêu cầu người dùng. Xem lịch sử Git và đối chiếu `origin/main` để xác nhận trạng thái push khi tiếp tục.
- Các đoạn dưới đây ghi nhận mốc trước hợp nhất trong cùng ngày; mọi mô tả local/trial tách tài khoản đã được thay thế bởi kiến trúc dùng chung ở trên.

Đọc file này trước khi tiếp tục. Đây là trạng thái đã kiểm chứng và các việc cần lưu ý, không phải yêu cầu viết lại dự án. Báo cáo chi tiết: `docs/DEFAULT-DECKS.md`, `docs/GRAMMAR-20261014.md`, `docs/UPGRADE-20261013.md`.

## Các thay đổi ngày 14/10/2026

### Bộ thẻ mặc định cho mọi tài khoản

- Thêm 8 bộ, tổng 286 thẻ: Hiragana 104, Katakana 104, Kanji 78 chia thành 6 chủ đề (thiên nhiên; số đếm; con người và cơ thể; trường học; thời gian và phương hướng; động vật và cây cối).
- Thẻ Kanji có nghĩa, cách đọc và bộ thủ tra cứu từ dữ liệu có nguồn. Chú thích theo cài đặt `japanese`/`romanized`; mặt câu hỏi giấu đáp án đến khi lật.
- Mỗi tài khoản nhận bản riêng một lần; tiến độ ôn độc lập. Có kiểm soát cấp trùng; người học sửa/xóa bộ không bị tự tạo lại. Đã cấp bộ cho tài khoản có sẵn trong cả local/trial; tài khoản mới hoặc chưa được cấp nhận tự động khi gửi yêu cầu đã xác thực.
- Migration `20261014000000_default_decks` đã áp dụng local/trial. Mã chính: `apps/api/src/default-decks.ts`; script cấp trước: `scripts/default-decks.ts`. Chi tiết và nguồn: `docs/DEFAULT-DECKS.md`.

### Ngữ pháp, lộ trình và ôn tập

- Giữ 8 bài cũ cùng ID/tiến độ; thêm 98 bài, thành 106 bài: N5 33, N4 25, N3 24, N2 24. Nội dung mới gồm 50 bài theo trình tự chủ điểm sơ cấp Minna và 48 nhóm bổ sung N3–N2; có 196 ví dụ, 294 câu luyện mới (điền mẫu, chọn nghĩa, sắp xếp).
- Lộ trình 4 cấp có tìm kiếm, phân trang, lọc đánh dấu/câu sai/đến hạn/đã làm đúng hết; gợi ý ưu tiên đến hạn → câu sai → bài đang làm → bài tiếp theo. Điều hướng bài trước/sau xuyên cấp, dashboard dùng gợi ý mới.
- Tách “đã đọc” khỏi kết quả bài tập. Máy chủ chấm và lưu từng câu theo tài khoản; không gửi sẵn đáp án trong câu hỏi. Mã lần nộp chống ghi nhận hai lần khi gửi lại.
- Ôn câu sai hoặc đến hạn tối đa 20 câu/lượt; sai hẹn ôn lại sau 10 phút, đúng lên lịch theo SRS hiện có. Đổi chú thích không mất câu đang trả lời. Ví dụ hỗ trợ Japanese/Romaji.
- Mã nội dung: `packages/shared/grammar-beginner.ts`, `grammar-intermediate.ts`, `grammar-curriculum.ts`; API: `apps/api/src/grammar.ts`; giao diện: `apps/web/src/pages/grammar.tsx`.
- **Giới hạn cần giữ rõ:** người dùng muốn đầy đủ theo giáo trình và trích ví dụ sách, nhưng bản hiện tại dùng giải thích/ví dụ/bài tập tự biên soạn, tham khảo trình tự từ 3A Network và VNJPClub do người dùng cung cấp. Chưa đối chiếu hết từng mẫu trong sách; không được báo đã hoàn thành toàn bộ giáo trình. N3–N2 là nhóm bổ sung, không tương ứng chương Minna trung cấp. Phân cấp JLPT chỉ định hướng; 3 câu mỗi bài chưa luyện riêng mọi mẫu. Nguồn và phạm vi chi tiết trong `docs/GRAMMAR-20261014.md`.

### Dữ liệu và kiểm chứng hôm nay

- Migration `20261014010000_grammar_review` thêm `GrammarExerciseProgress` và `GrammarAnswer`, đã áp dụng local/trial. Nội dung được đồng bộ theo ID khi API khởi động; script riêng `scripts/grammar-content.ts`. Không reset DB, không nhập lại từ điển.
- Backup trước cập nhật ngữ pháp: `.recovery/grammar-1791991973313/`. Đối chiếu lúc migration giữ nguyên local: 2 tài khoản/604 thẻ/86 lượt ôn thẻ/10 tiến độ ngữ pháp; trial: 3 tài khoản/890 thẻ/88 lượt ôn thẻ/2 tiến độ ngữ pháp. Đây là số liệu tại thời điểm kiểm tra, có thể tăng khi tiếp tục học.
- Bộ thẻ: 94/94 kiểm thử lúc hoàn thành; browser smoke sáng/tối, 390/1440 px, chú thích và giấu đáp án. Lượt cuối sau cập nhật ngữ pháp: **100/100 unit/integration đạt; build kèm TypeScript đạt; lint 0 lỗi, 0 cảnh báo**.
- Smoke ngữ pháp chạy trên bản build cuối và DB thử riêng: **16 tổ hợp layout đạt** (390/1440 px × 4 cấp × sáng/tối), cùng tìm bài, chấm bài, lưu qua tải lại, ôn sai/đến hạn, đổi chú thích và giữ câu trả lời. Script `tests/browser/grammar-smoke.mjs`; bằng chứng `test-results/grammar/`. Chưa kiểm tra thiết bị thật/Safari hoặc thẩm định toàn bộ nội dung bởi giáo viên. Bundle còn cảnh báo dung lượng (~428 KB gzip).

### Git và trạng thái chạy

- `1dbb5d8` — bộ thẻ mặc định; đã push `codex/handoff-conjugation`, sau đó merge fast-forward vào `main` và push theo yêu cầu người dùng.
- `6fe1067` — ngữ pháp N5–N2 và ôn tập; đã commit và push `origin/main` tại `https://github.com/TTT9006/Demo`. Sau push, HEAD và origin/main đều là `6fe1067ba8d04ecb95fdb5857c4b790fbaee4a62`, thư mục làm việc sạch trước lần sửa tài liệu bàn giao này.
- Lần sửa handoff hiện tại là thay đổi tài liệu sau commit trên; chưa commit/push riêng. Luôn kiểm tra lại Git khi tiếp tục, không mặc định trạng thái này còn nguyên.
- Đã build mã mới và khởi động lại dev trong phiên. Không mặc định các tiến trình còn chạy ở phiên sau; kiểm tra cổng 5173/3001 trước khi mở thêm. Chưa xác minh công khai bản ngữ pháp mới; trial DB đã cập nhật nhưng máy chủ chia sẻ cần chạy bản build mới.
- Web local/Quick Tunnel cần máy chủ đang bật và tiến trình đang chạy; người khác không truy cập được khi máy này tắt. Chưa triển khai hosting hoạt động 24/7.

## Hướng tiếp tục cho phiên sau

1. Đọc trạng thái Git, kiểm tra tiến trình và chọn đúng DB local/trial. Giữ mọi thay đổi mới của người dùng; không reset dữ liệu hoặc ghi đè bằng backup cũ.
2. Nếu cần phục vụ bản mới qua link chia sẻ, kiểm tra tiến trình hiện có, chạy lại quy trình `npm run share`, lấy URL từ `.share/url.txt` và xác minh đăng nhập/ngữ pháp. Không coi link cũ bên dưới là còn hoạt động.
3. Nếu tiếp tục yêu cầu “đầy đủ giáo trình”, đối chiếu từng chủ điểm/mẫu còn thiếu và bổ sung bài luyện riêng; không chỉ tăng số bài rồi tuyên bố đầy đủ. Giữ ID bài/câu ổn định để bảo toàn lịch sử. Không thu thập hàng loạt ví dụ nguyên văn có bản quyền; có thể xử lý nội dung người dùng cung cấp hoặc viết ví dụ mới.
4. Chỉ thay đổi tài liệu ở lần bàn giao này; không chạy lại toàn bộ kiểm thử nếu chưa sửa mã. Các kết quả nêu trên là kiểm chứng của bản tính năng đã commit.

## Dự án và quy tắc
- Website tự học tiếng Nhật, giao diện Việt; repository `D:\Demo`, GitHub `TTT9006/Demo`. Người dùng muốn giao diện gọn, không gradient/thiết kế kiểu AI, tốt trên mobile, desktop và dark mode.
- React 19/Vite 7/TypeScript; Express 5; Prisma 6.19/SQLite; React Query/Zustand; **npm + package-lock.json**, Node >=24. Không dùng `node_modules-pnpm-backup`.
- Sửa trực tiếp kiến trúc hiện có, tái sử dụng component. Không xóa/reset database, tài khoản, tiến độ, JMdict; không bịa từ/cách đọc/dịch Việt, không tự thêm AI trả phí.

## Lịch sử và phần đã hoàn thành
1. **Khôi phục dự án:** từng thiếu package.json gây ENOENT; phục hồi cấu hình/mã nguồn dựa trên lịch sử patch, imports và dependency thực tế. Build và dev hoạt động. Báo cáo nguồn phục hồi: `docs/RECOVERY.md`.
2. **Tài khoản/dữ liệu:** tài khoản, mật khẩu băm và tiến độ lưu SQLite máy chủ; IndexedDB `komorebi-drafts` chỉ lưu bản nháp luyện viết theo người dùng, không lưu mật khẩu/token. Hiện local và chia sẻ dùng chung `prisma/learning.db`; trial cũ đã hợp nhất, xem cập nhật cuối ngày phía trên.
3. **Chia sẻ miễn phí:** Cloudflare Quick Tunnel qua `npm run share`; máy phải bật và tiến trình phải chạy. URL thay đổi sau khởi động lại; lấy từ `.share/url.txt`. Giữ `.share/ready.json` và trial.db để giữ dữ liệu. Từng kiểm tra các đường dẫn file riêng trả HTML ứng dụng, không lộ nội dung file; đây không phải kiểm toán bảo mật toàn diện. Không triển khai hosting 24/7.
4. **Từ điển:** giữ 218.863 mục JMdict, mọi dạng kanji/reading/sense; chỉ có 97 bản dịch Việt thật. Normalizer dùng WanaKana xử lý kana/romaji/macron/Unicode; tìm nhiều tầng, ưu tiên chính xác, có suy ra từ gốc, fuzzy giới hạn, phân trang backend. Bảng search có 868.356 terms, version `jp-search-3`, thêm index; sửa tìm Việt lẫn nghĩa Anh. UI debounce 250ms, IME, hủy request cũ, highlight và nhãn “Dạng gốc”. Không đưa JMdict nguyên khối vào frontend.
5. **Bộ thủ/luyện viết:** 214 Kangxi, 10.384 Kanji metadata, 1.314 assets nét tải khi cần; hai chế độ Kanji/bộ thủ, biến thể, liên kết Kanji↔bộ thủ, animation, touch, tiến độ tài khoản và SRS. Dữ liệu KANJIDIC2/Unicode/KanjiVG có nguồn và license; không suy đoán cấu tạo. Canvas chưa chấm đúng/sai thứ tự nét.
6. **Chú thích:** `JapaneseAnnotatedText`, setting đúng hai giá trị `japanese` (mặc định)/`romanized`; ruby trên Kanji, tách okurigana, giữ câu gốc. Ưu tiên reading có sẵn rồi Kuromoji local, không chắc thì để nguyên. Tích hợp bài tập/quiz/grammar/review; bảo vệ bài kiểm tra cách đọc khỏi lộ đáp án. Đổi setting không reset bài/timer; có preview và preference theo tài khoản.
7. **Mobile:** đã chỉnh responsive và kiểm tra nhiều độ rộng, sáng/tối, canvas touch; chưa kiểm chứng đầy đủ thiết bị thật/Safari/screen reader.

## Lịch sử bàn giao ngày 13/10 — đã chốt
Phần thuật toán suy ra từ gốc đã viết xong; việc còn lại là khởi động bản dùng thử và xác minh công khai. Ngày 13/10 đã build lại, chạy bằng trial.db hiện có, kiểm tra đăng nhập cùng API/UI và nhãn “Dạng gốc” **4/4 pass**:
`ikimasu→行く`, `tabemashita→食べる`, `benkyoushimashita→勉強`, `食べさせられませんでした→食べる`.

Script: `tests/browser/conjugation-smoke.mjs`; bằng chứng: `test-results/handoff/conjugation-smoke.json` (10:41:46 UTC). Link lúc kiểm tra: https://sega-followed-spas-having.trycloudflare.com — luôn kiểm tra lại `.share/url.txt`, không mặc định link còn sống. Không cần viết lại engine để hoàn thành việc bàn giao này.

## Kiểm thử, migration và giới hạn từ ngày 13/10
- Lượt nâng cấp ngày 13/10: 92/92 unit/integration, 6/6 E2E, 40 kiểm tra layout tính năng mới; build/typecheck pass, lint 0 lỗi/2 cảnh báo imports cũ. Lượt bàn giao ngày 13/10 chạy lại build và smoke công khai 4 truy vấn, không chạy lại toàn bộ suite. Kết quả mới nhất ngày 14/10 nằm ở đầu tài liệu.
- Benchmark 35 query: 30 query Nhật/romaji đạt; Việt 4/5 có dữ liệu, “sách” thiếu bản dịch. Median warm 46,59→2,42ms, không phải benchmark tải đồng thời.
- Hai migration thêm: `20261013000000_learning_upgrade`, `20261013010000_exact_search_indexes`, đã áp dụng local/trial. Backup `.recovery/upgrade-20261013/`; đối chiếu nâng cấp giữ nguyên tài khoản/tiến độ, SQLite kiểm tra toàn vẹn đạt. Rollback ưu tiên code cũ với schema bổ sung; không reset/ghi đè DB đang có dữ liệu mới.
- Giới hạn: reading theo ngữ cảnh chưa hoàn hảo; dữ liệu Việt ít; một số bộ thủ thiếu nét/animation có fallback; không bao phủ mọi tiếng Nhật cổ/phương ngữ/dạng chia. Bundle còn lớn (~425KB gzip), Node có cảnh báo deprecated. Chi tiết nguồn/license, benchmark và file đổi trong báo cáo nâng cấp.

## Cách chạy và Git
Tại `D:\Demo`: `npm run dev` (web 127.0.0.1:5173, API 3001); `npm run share` (build + server 3010 + tunnel). Kiểm tra tiến trình/cổng trước khi mở thêm. Kiểm thử: `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`, `npm run test:e2e`; E2E dùng DB thử riêng. Smoke link hiện tại: `node tests/browser/conjugation-smoke.mjs` (cần Edge và mạng). Không tải/import lại từ điển hay chạy setup/reset chỉ để khởi động.

Lịch sử Git: `1325324` (`update`) và `f0d467c` (smoke từ điển/bàn giao) đã được đưa vào `main` cùng phần thẻ mặc định ngày 14/10. Trạng thái Git mới nhất xem đầu tài liệu. Không đưa `.env`, database, backup hoặc dữ liệu riêng vào commit.
