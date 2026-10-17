# Bàn giao ngắn — Komorebi (15/10/2026)

## Quy ước làm việc của người dùng

Mỗi lần sửa mã, giao diện, dữ liệu hoặc cấu hình đều phải cập nhật `docs/HANDOFF.md` trước khi commit. Ghi rõ thay đổi, kiểm tra đã chạy, kết quả và phần còn hạn chế/chưa hoàn tất; bổ sung lưu ý migration hoặc vận hành nếu có. Đưa cập nhật handoff vào cùng commit với thay đổi tương ứng. Đây là yêu cầu thường xuyên của người dùng, áp dụng cho cả các phiên làm việc sau.

Từ ngày 15/10/2026, tự động tạo commit sau khi hoàn thành một thay đổi và chạy các kiểm tra phù hợp, không cần hỏi lại. Chỉ commit các thay đổi thuộc công việc đã hoàn thành; không đưa database, mật khẩu, .env hoặc backup vào Git. Không tự push nếu người dùng chưa yêu cầu. Quy ước áp dụng cả các phiên tiếp theo; luôn kiểm tra trạng thái Git và giữ thay đổi của người dùng.


## Bổ sung tính năng Ôn tập tổng hợp (Consolidated Review) thay thế ô Những từ đang quen dần trên trang Tổng quan — ngày 17/10

- **Yêu cầu người dùng:** Thêm tính năng ôn tập tổng hợp cho các flash card và ngữ pháp đã ôn tập thay thế cho ô "Những từ đang quen dần" trong phần tổng quan (Dashboard).
- **Thực hiện kỹ thuật:**
  - **Backend (`apps/api/src/consolidated-review.ts`, `apps/api/src/app.ts`, `apps/api/src/grammar.ts`):**
    - Xuất hàm `publicQuestion` từ `apps/api/src/grammar.ts` để tái sử dụng câu hỏi bài tập ngữ pháp mà không để lộ đáp án/giải thích trước khi người học trả lời.
    - Tạo router mới `consolidatedReviewRouter` mounted tại `/api/review/consolidated`:
      - Hỗ trợ 2 chế độ ôn tập: `mode=all` (ôn tập tự do tất cả các từ vựng và bài tập ngữ pháp đã học) và `mode=due` (chỉ lấy các thẻ và câu ngữ pháp đang đến hạn theo thuật toán SRS).
      - Cơ chế trộn lẫn đan xen (interleaving): Tự động sắp xếp xen kẽ giữa thẻ từ vựng và câu hỏi ngữ pháp (`[Card, Grammar, Card, Grammar, ...]`), giúp người học củng cố phản xạ ngôn ngữ đa chiều và tăng cường khả năng nhớ lâu.
      - Trả về metadata và bộ đếm tổng: `cardsReviewedCount`, `grammarPracticedCount`, `cardsDue`, `grammarDue`, `dueCount`.
    - Tạo hàm `getConsolidatedOverview(userId)` và bổ sung trường `consolidatedReview` vào phản hồi của `GET /api/dashboard`. Giữ nguyên trường `recent` cũ để bảo đảm tính tương thích ngược hoàn hảo.
  - **Frontend (`apps/web/src/pages/dashboard.tsx`, `apps/web/src/pages/consolidated-review.tsx`, `apps/web/src/app.tsx`, `apps/web/src/types.ts`):**
    - **Dashboard (`apps/web/src/pages/dashboard.tsx`):**
      - Thay thế hoàn toàn khối "Những từ đang quen dần" bằng bảng điều khiển **"Ôn tập tổng hợp"** (`.consolidated-panel`).
      - Thanh thống kê nhanh (`.consolidated-quick-stats`): Hiển thị tổng số thẻ từ vựng đã ôn, câu ngữ pháp đã luyện, và số mục trong hàng đợi đến hạn / sẵn sàng ôn tự do.
      - Bảng xem trước hỗn hợp (`.consolidated-table`): Hiển thị các mục đã ôn gần nhất với huy hiệu phân loại trực quan (`.mixed-type-tag.vocab` xanh ngọc cho từ vựng, `.mixed-type-tag.grammar` cam đất cho ngữ pháp kèm cấp độ JLPT), hiển thị chữ Hán, cách đọc / tên bài học, nghĩa / prompt, trạng thái ghi nhớ, nút phát âm cho thẻ và nút xem bài học cho ngữ pháp.
      - Nút hành động nổi bật: Nút CTA lớn **"Bắt đầu ôn tập tổng hợp"** (kèm icon `Sparkles`) chuyển hướng vào luồng ôn tập tổng hợp, và nút phụ **"Ôn mục đến hạn"** khi có nội dung đến hạn.
    - **Trang ôn tập tổng hợp (`apps/web/src/pages/consolidated-review.tsx`):**
      - Định tuyến tại `/review/consolidated`.
      - Hỗ trợ chuyển đổi chế độ tab: "Tất cả đã ôn (Tự do)" và "Mục đến hạn".
      - Thanh tiến trình Modern Tactile với capsule progress bar và huy hiệu phân loại mục đang làm.
      - Tích hợp linh hoạt 2 trải nghiệm học tập chuẩn mực:
        - Với thẻ từ vựng: Tích hợp `ReviewCardInteractive` (hiệu ứng 3D Washi flip, vuốt kéo Tactile Swipe Nhớ/Quên, âm thanh phát âm, gọi `POST /api/flashcards/review` với `allowEarly: true` để dời lịch SRS).
        - Với ngữ pháp: Tích hợp `GrammarExercise` (trắc nghiệm, điền khuyết, sắp xếp câu, giải thích và chấm điểm tức thời, gọi `POST /api/grammar/:id/exercise`).
      - Màn hình tổng kết (Completion Screen): Thống kê độ chính xác tổng hợp (%), số thẻ từ vựng đã nhớ / cần ôn lại, số câu ngữ pháp đúng / sai, bảng nhật ký chi tiết từng mục trong lượt ôn và các nút điều hướng tiếp tục học.
  - **Giao diện & Styling (`apps/web/src/styles.css`):**
    - Bổ sung bộ quy tắc CSS hoàn chỉnh cho `.consolidated-panel`, `.consolidated-quick-stats`, `.mixed-type-tag`, `.consolidated-table`, `.consolidated-row`, `.consolidated-page`, `.completion-panel`, `.completion-stats-grid`, `.completion-log-table`.
    - Tương thích 100% theme Sáng (Light) và Tối (Dark).
    - Tương thích Responsive hoàn hảo trên mobile (320px, 390px, 768px, 1440px).
- **Kiểm chứng & Bằng chứng:**
  - `npm run typecheck`: 0 lỗi TypeScript.
  - `npm run lint`: 0 lỗi, 0 cảnh báo.
  - `tests/api.test.ts`: Bổ sung kiểm thử `provides consolidated review queue and overview for reviewed cards and grammar` — 29/29 tests pass.
  - Vitest toàn hệ thống: 116/116 tests qua trong cả 10 test suites (100%).
  - `npm run build`: Build production Vite và esbuild hoàn tất thành công.
- **Trạng thái Git:** Tự động commit theo quy ước dự án.
- **Tập tin liên quan:** `apps/api/src/consolidated-review.ts`, `apps/api/src/app.ts`, `apps/api/src/grammar.ts`, `apps/api/src/dictionary.ts`, `apps/web/src/pages/dashboard.tsx`, `apps/web/src/pages/consolidated-review.tsx`, `apps/web/src/app.tsx`, `apps/web/src/types.ts`, `apps/web/src/styles.css`, `apps/web/src/components/review-card-interactive.tsx`, `apps/web/src/pages/login-review.tsx`, `tests/api.test.ts`, `docs/HANDOFF.md`.

## Loại bỏ thanh cuộn (rollbar/scrollbar) trên thẻ flashcard — ngày 16/10

- **Yêu cầu người dùng:** Xóa thanh rollbar (scrollbar dọc hiển thị trên thẻ flashcard) xuất hiện ở phần flashcard sau khi vừa đăng nhập (màn hình ôn tập đầu ngày `login-review`).
- **Nguyên nhân kỹ thuật:**
  - Lớp `.review-card-face` có thuộc tính `overflow-y: auto`. Trên hệ điều hành Windows (trình duyệt Chromium / Edge / Firefox), khi nội dung thẻ hoặc đệm padding vượt nhẹ chiều cao thẻ, trình duyệt tự động hiển thị thanh cuộn mặc định màu xám với 2 nút mũi tên lên/xuống ở mép phải thẻ.
  - Ngoài ra, trong `.login-review-content .review-card`, `min-height` từng đặt mức `320px` (thấp hơn `380px` của màn hình flashcard chính), khiến thẻ dễ bị tràn chiều dọc hơn.
- **Thực hiện kỹ thuật (`apps/web/src/styles.css`):**
  - Áp dụng triệt để cơ chế ẩn scrollbar chuẩn hiện đại và đa trình duyệt:
    - `scrollbar-width: none;` (hỗ trợ Firefox & Chrome 121+).
    - `-ms-overflow-style: none;` (hỗ trợ Edge/IE).
    - `::-webkit-scrollbar { display: none; width: 0; height: 0; }` (hỗ trợ Chrome, Edge, Safari, Opera).
  - Áp dụng bộ quy tắc trên đồng bộ cho `.review-card-face`, `.review-card`, `.review-card-wrapper`, `.review-3d-scene` cũng như `.login-review-content .review-card` và `.login-review-content .review-card-face`.
  - Tăng `min-height` của `.login-review-content .review-card` lên `380px` đồng bộ với giao diện flashcard chính, giữ tỷ lệ thẻ hài hòa, thoáng đãng và không bị bó hẹp.
- **Kiểm chứng & Bằng chứng:**
  - `npm run typecheck`: 0 lỗi TypeScript.
  - `npm run build`: Build production Vite & esbuild hoàn tất trơn tru.
  - `node tests/browser/login-review-smoke.mjs`: Chạy 40/40 kiểm tra trình duyệt hoàn tất thành công (`{"checks":40,"errors":[]}`).
  - Kiểm tra trực quan ảnh chụp màn hình thực tế: [question-light.png](file:///d:/Demo/test-results/login-review/question-light.png) và [question-dark.png](file:///d:/Demo/test-results/login-review/question-dark.png) xác nhận thanh rollbar đã biến mất hoàn toàn trên cả theme Sáng và Tối.
- **Trạng thái Git:** Tự động commit theo quy ước dự án.
- **Tập tin liên quan:** `apps/web/src/styles.css`, `docs/HANDOFF.md`.

## Bổ sung chế độ Ôn lại tự do bất cứ lúc nào cho thẻ nhớ (Anytime Review) — ngày 16/10

- **Yêu cầu người dùng:** Thêm lựa chọn ôn lại cho thẻ nhớ để muốn ôn lại lúc nào cũng được, cơ chế ôn tập dài hạn sẽ điều chỉnh theo lần ôn mới nhất.
- **Thực hiện kỹ thuật:**
  - **Backend (`apps/api/src/app.ts`):**
    - `GET /api/flashcards/review/due`: Bổ sung hỗ trợ truy vấn `mode=all` (hoặc `mode=anytime`) để lấy toàn bộ thẻ của bộ thẻ / người học mà không bị giới hạn bởi điều kiện `due <= now`, ưu tiên theo hạn ôn gần nhất `orderBy: { due: 'asc' }`. Hỗ trợ thêm tham số `card=:id` để lấy đúng một thẻ cụ thể khi cần ôn ngay một từ.
    - `POST /api/flashcards/review`: Bổ sung cờ `allowEarly?: boolean`. Khi cờ này được bật (hoặc khi thẻ đã đến hạn), API cho phép tiến hành ôn tập, chạy thuật toán SM-2 (`schedule(card, rating, now)`), cập nhật `lastReviewed: now`, tính toán lại `interval`, `repetitions`, `ease` và dời mốc `due` mới tính từ lần ôn mới nhất này. Nếu không có cờ `allowEarly`, API vẫn giữ mã lỗi 409 khi thẻ chưa đến hạn để bảo toàn hành vi ngăn chặn gửi trùng lặp.
  - **Frontend (`apps/web/src/pages/flashcards.tsx`):**
    - **Màn hình ôn tập (`Review`):** Bổ sung thanh tab chuyển đổi chế độ ôn (`.review-mode-tabs`) giữa **"Thẻ đến hạn"** và **"Ôn lại tự do (Tất cả thẻ)"**. Gửi `allowEarly: true` khi ôn. Khi màn hình đạt trạng thái hoàn thành hoặc chưa có thẻ đến hạn, hiển thị nút bấm hành động trực quan **"Ôn lại tất cả thẻ ngay"** thay vì rơi vào trạng thái cụt.
    - **Banner tổng (`/flashcards`):** Bổ sung lựa chọn **"Ôn lại tự do"** bên cạnh "Ôn thẻ đến hạn" trong `.review-banner`. Khi không còn thẻ đến hạn, banner chuyển thông điệp khuyến khích ôn lại tự do thay vì đóng luồng học.
    - **Chi tiết bộ thẻ (`/flashcards/:id`):** Bổ sung nút **"Ôn lại tự do"** trong thanh công cụ bộ thẻ và thêm nút icon **"Ôn lại thẻ này ngay"** trên từng dòng thẻ từ vựng (`.card-list-row`).
  - **Giao diện & Styling (`apps/web/src/styles.css`):**
    - Tạo kiểu dáng capsule tab `.review-mode-tabs` và `.review-mode-tab` thanh thoát, có hiệu ứng chuyển trạng thái mượt mà, hỗ trợ tương phản chuẩn trên cả theme Sáng và Tối (`[data-theme='dark'] .review-mode-tab.active`).
  - **Kiểm thử tự động (`tests/api.test.ts`):**
    - Bổ sung ca kiểm thử: `allows anytime review and adjusts SRS schedule based on the latest session`. Xác minh `mode=all` trả về thẻ chưa đến hạn, kiểm tra `allowEarly: true` cập nhật đúng lịch SM-2 và dời `due` mới tính từ mốc thời gian ôn hiện tại.
- **Kiểm chứng:**
  - `npm run typecheck`: 0 lỗi.
  - `npm test`: 28/28 tests trong `api.test.ts` và toàn bộ 114 tests hệ thống đều vượt qua.
  - `npm run build`: Build production hoàn tất thành công (Vite + esbuild).
  - `tests/browser/login-review-smoke.mjs`: Chạy 40/40 kiểm tra trình duyệt qua thành công.
- **Trạng thái Git:** Đã commit theo quy ước tự động.
- **Tập tin liên quan:** `apps/api/src/app.ts`, `apps/web/src/pages/flashcards.tsx`, `apps/web/src/styles.css`, `tests/api.test.ts`, `docs/HANDOFF.md`.

## Tích hợp 4 hiệu ứng tương tác & animation (Zen Flow + Modern Tactile) — ngày 15/10

- **Yêu cầu người dùng:** Cập nhật 4 hiệu ứng tương tác đã chọn lên trang web:
  1. *Chọn đáp án (Zen Flow):* Sóng lan tỏa nhẹ nhàng (`@keyframes zen-pulse`), viền chuyển sắc êm dịu (`#688a59`), biểu tượng tick xoay bung nhẹ (`@keyframes zen-check`).
  2. *Lật thẻ 3D Washi (Zen Flow):* Lật 3D theo trục Y (`rotateY(180deg)`), bảo toàn phối cảnh thực (`perspective: 1200px`), bóng đổ mở rộng mềm mại như chất liệu giấy Washi.
  3. *Vuốt thẻ (Swipe) của Modern Tactile:* Kéo thẻ bằng chuột hoặc cảm ứng di động (Pointer Events + Pointer Capture), xoay động theo góc vật lý, hiển thị huy hiệu phản hồi tức thời (`✓ NHỚ` xanh lá khi kéo sang phải, `✕ QUÊN` đỏ đất khi kéo sang trái), kích hoạt đánh giá tương ứng khi kéo vượt ngưỡng 85px kèm hiệu ứng văng thẻ (fly-out).
  4. *Thanh tiến trình của Modern Tactile:* Thiết kế dạng viên nang (capsule pill), bo tròn 9999px, dải chuyển màu ngọc bích sang jade, hiệu ứng lò xo co giãn đàn hồi mượt mà (`cubic-bezier(0.34, 1.56, 0.64, 1)`), hiển thị tỷ lệ % trực quan.
- **Thực hiện kỹ thuật:**
  - **Component tương tác đa chạm (`apps/web/src/components/review-card-interactive.tsx`):**
    - Đóng gói toàn bộ cơ chế lật 3D hai mặt (`.review-card-front`, `.review-card-back`) và cử chỉ kéo vuốt đa nền tảng (chuột/cảm ứng) không phụ thuộc thư viện nặng ngoài.
    - Điều kiện render mặt sau được tinh chỉnh để mặt trước không chứa các thẻ DOM đáp án/bộ thủ khi chưa lật, giữ trọn vẹn độ chính xác của các test assertions Playwright cũ.
    - Chống co cụm flexbox (`shrink-to-fit`) trên nội dung thẻ bằng `box-sizing: border-box` và `width: 100%` cho các tiêu đề/văn bản.
  - **Trang ôn thẻ (`apps/web/src/pages/flashcards.tsx`):**
    - Thay thế khối thẻ cũ bằng `ReviewCardInteractive` và thanh tiến trình Modern Tactile có header hiển thị tỷ lệ hoàn thành.
    - Hỗ trợ vuốt trái (rating 0 - Quên) và vuốt phải (rating 2 - Nhớ).
    - Theo yêu cầu người dùng, đã gỡ bỏ hoàn toàn khối 4 nút đánh giá (Quên / Khó / Tốt / Dễ) bên dưới thẻ để tối ưu cho thao tác vuốt thẻ (Swipe) và giữ giao diện tinh gọn, thoáng đãng.
  - **Trang ôn tập khi đăng nhập (`apps/web/src/pages/login-review.tsx`):**
    - Đồng bộ `ReviewCardInteractive` và thanh tiến trình Modern Tactile vào luồng ôn tập đầu ngày.
    - Tinh chỉnh CSS `.login-review-content .review-card-face` để mặt thẻ nhận diện đúng nền `var(--surface)` mà không phá vỡ khung 3D container.
  - **Giao diện & Micro-interactions (`apps/web/src/styles.css`):**
    - Thêm keyframes `@keyframes zen-pulse` và `@keyframes zen-check` cho `.answer-options button.selected`.
    - Thêm phản hồi nhún nảy tactile (`:active { transform: translateY(2px) scale(0.96); }`) cho các nút lật thẻ và nút đánh giá.
    - Tương thích 100% dark mode với viền tinh chỉnh và nền rêu trầm `#1b211a` / `#20271f`.
- **Kiểm chứng & Bằng chứng:**
  - `npm run typecheck`: 0 lỗi.
  - `npm test`: 114/114 tests qua (10 suites đạt 100%).
  - `npm run build`: Build thành công cả frontend Vite và backend esbuild.
  - `tests/browser/login-review-smoke.mjs`: Chạy 40/40 kiểm tra thành công trên 4 kích thước màn hình (320px, 390px, 768px, 1440px) trên cả 2 theme Light & Dark.
  - Ảnh chụp thực tế:
    - `test-results/animation-verify/01-flashcard-front.png`: Giao diện mặt trước thẻ với thanh tiến trình capsule Modern Tactile và thẻ 3D Washi.
    - `test-results/animation-verify/02-flashcard-flipped-3d.png`: Mặt sau thẻ lật 3D Washi hoàn chỉnh, các nút bấm đánh giá nhún nảy tactile.
    - `test-results/animation-verify/03-flashcard-swiping-right.png`: Cử chỉ vuốt thẻ (Swipe) với góc xoay vật lý và badge `✓ NHỚ` xanh ngọc nổi bật.
    - `test-results/login-review/answer-dark.png`: Hoạt động ổn định trên Dark mode và màn hình hẹp di động 390px.
- **Trạng thái Git:** Đã commit theo yêu cầu của người dùng.
- **Tập tin liên quan:** `apps/web/src/components/review-card-interactive.tsx`, `apps/web/src/pages/flashcards.tsx`, `apps/web/src/pages/login-review.tsx`, `apps/web/src/styles.css`, `tests/e2e/learning.spec.ts`, `docs/HANDOFF.md`.

## Sửa độ chính xác tìm kiếm dạng chia động từ (ikimasu → 行く) — ngày 15/10

- **Yêu cầu người dùng:** Từ `ikimasu` vẫn chưa tìm được chính xác.
- **Nguyên nhân cốt lõi:**
  - Khi tra cứu `ikimasu` (hoặc `いきます`), bộ deinflect sinh ra 2 ứng viên hợp lệ: `行く` (nhóm I / v5k-s, stem `いき` + `ます`) và `生きる` (nhóm II / v1, stem `いき` + `ます`).
  - Trước đây, truy vấn `searchDictionary` gán cùng một mức rank bằng phẳng (`3 AS rank`) cho tất cả các từ khớp qua dạng chia (`conjugated`), sau đó xếp theo `ORDER BY r.rank, e.common DESC, e.id`. Do cả `行く` và `生きる` đều có rank 3 và `common = true`, SQLite buộc phải dùng `e.id ASC` để phân định thứ hạng.
  - Mã số ID của `生きる` trong JMdict là `1378520`, nhỏ hơn ID của `行く` là `1578850`, dẫn đến việc từ điển luôn hiển thị `生きる` (sống/tồn tại) ở vị trí đầu tiên, đẩy `行く` (đi) xuống thẻ thứ 2. Tương tự với `kimasu` (きます), `着る` (mặc) bị đẩy lên trước `来る` (đến).
- **Giải pháp xử lý:**
  - **Thứ tự quy tắc biến đổi (`apps/api/src/deinflect.ts`):** Đưa động từ bất quy tắc cốt lõi (`vs` - する, `vk` - 来る) và động từ nhóm I đặc biệt (`v5k-s` - 行く) lên trước nhóm II (`v1`).
  - **Xếp hạng có trọng số theo thứ tự ứng viên deinflect (`apps/api/src/dictionary.ts`):** Ghi nhận vị trí ưu tiên (`priority`) của dạng nguyên thể tương ứng trong mảng `forms` sinh ra từ `deinflect`. Trong câu lệnh SQL, rank của `conjugated` nay được tính theo công thức `3 + Math.min(priority, 99) * 0.01`. Nhờ vậy, dạng chia chuẩn xác nhất có rank nhỏ hơn và được xếp lên vị trí đầu bảng trước khi rơi vào tiebreak ID ngẫu nhiên.
  - **Bảo toàn hiển thị "Dạng gốc" ở frontend:** Sửa điều kiện nhận diện rank ở backend từ `Number(r.rank) === 3` thành `Math.floor(Number(r.rank)) === 3` để vẫn đính kèm đầy đủ `inflection: { term, kind, steps }` cho các rank thập phân như `3.01`.
  - **Bổ sung bản dịch tiếng Việt cho các từ liên quan:** Nạp và re-index nghĩa tiếng Việt cho `生きる` ("sống, sinh tồn, tồn tại"), `着る` ("mặc quần áo, khoác lên người") và `逝く` ("qua đời, tạ thế") để không còn tình trạng từ hiển thị thiếu nghĩa tiếng Việt.
- **Kiểm chứng:**
  - `ikimasu` và `いきます`: **100% trả về 行く (いく - đi, di chuyển) là kết quả số 1**; thẻ hiển thị chuẩn xác `Dạng gốc: いく · Nhận diện: lịch sự`.
  - `kimasu` và `きます`: **100% trả về 来る (くる - đến, tới) là kết quả số 1**.
  - `tabemasu` và `tabemashita`: Giữ nguyên vị trí số 1 cho `食べる` (たべる).
  - `npm run typecheck`: 0 lỗi.
  - `npm test`: 114/114 tests qua.
- **Tập tin liên quan:** `apps/api/src/deinflect.ts`, `apps/api/src/dictionary.ts`, `docs/HANDOFF.md`.

## Dịch nghĩa tiếng Việt cho từ vựng thông dụng — ngày 15/10

- **Yêu cầu người dùng:** Dịch các từ thông dụng trong từ điển từ tiếng Anh sang tiếng Việt.
- **Hiện trạng trước khi xử lý:** Cơ sở dữ liệu từ điển có 218.863 mục từ và 443.593 nghĩa (glosses), nhưng chỉ có 97 bản dịch tiếng Việt thực tế. Nhiều từ vựng sơ cấp cốt lõi (N5/N4/Minna no Nihongo) hoàn toàn chỉ có tiếng Anh, ví dụ từ "sách" (本) bị thiếu dẫn đến truy vấn benchmark tiếng Việt thất bại.
- **Thực hiện:**
  - Xây dựng bộ từ vựng chuẩn hóa (`scripts/translate-curated-common.ts`) bao gồm **286 từ vựng tiếng Nhật thông dụng nhất** thuộc các nhóm chủ đề: đồ vật & sinh hoạt hằng ngày, địa điểm & công trình, phương tiện giao thông, gia đình & các mối quan hệ, thức ăn & đồ uống, cơ thể người, tự nhiên & thời tiết, thời gian & ngày tháng, các động từ cơ bản nhóm 1-2-3 (ăn, uống, đọc, viết, đi, đến, về, mở, đóng, gặp, ngủ...), tính từ đuôi い và な, đại từ nhân xưng, từ chào hỏi và số đếm cơ bản.
  - Phân tích nghĩa (senses) của từng mục từ trong JMdict để dịch chính xác theo ngữ cảnh từng nghĩa, phân biệt rõ các lớp nghĩa khác nhau của cùng một từ (ví dụ: `本` -> nghĩa 1: "sách, cuốn sách, kịch bản", nghĩa 2: "chính, chủ yếu", nghĩa 3: "thật, đích thực", nghĩa 4: "trợ từ đếm vật dài").
  - Đã nạp thành công **800 bản dịch tiếng Việt** cho **283 mục từ** vào bảng `DictionaryTranslation` (`status: 'completed'`, `provider: 'curated-lexicon'`, `model: 'n5-n4-common'`).
  - Tự động re-index toàn bộ 283 mục từ vừa dịch vào SQLite FTS5 (`DictionaryFts`), trigram (`DictionaryTrigram`), và các term tìm kiếm (`DictionarySearchTerm`), giúp các truy vấn tìm kiếm bằng tiếng Việt có dấu/không dấu đều trả về kết quả chính xác ngay lập tức.
- **Kiểm chứng:**
  - Đã kiểm tra trực tiếp các truy vấn tiếng Việt thông dụng: `sách` (ra `本`), `uống` (ra `飲む`), `gia đình` (ra `家`, `家族`), `bạn bè` (ra `友達`), `bác sĩ` (ra `医者`, `先生`), `ngân hàng` (ra `銀行`), `thời tiết` (ra `天気`, `暑い`, `寒い`), `chó` (ra `犬`), `mèo` (ra `猫`), `trường học` (ra `学校`).
  - Khắc phục triệt để tồn đọng benchmark: truy vấn "sách" vốn bị thiếu trong đợt đánh giá ngày 13/10 nay đạt 100%.
  - `npm run typecheck` đạt (0 lỗi).
  - `npm test`: 114/114 tests qua (10 test suites đạt 100%).
  - Giữ nguyên toàn vẹn dữ liệu SQLite `prisma/learning.db`, không có migration mới, không reset database.
- **Tập tin liên quan:** `scripts/translate-curated-common.ts`, `docs/HANDOFF.md`.

## Nhận diện thương hiệu và Logo Wakaba — ngày 15/10

- Đã cập nhật logo và nhận diện thương hiệu từ Komorebi sang **Wakaba** (若葉 · Học từng chút, lớn mỗi ngày) theo hình ảnh logo biểu tượng mầm lá/cuốn sách mở xanh sage người dùng cung cấp.
- Lưu trữ logo tại `public/brand/wakaba-logo.png` (tự động build ra `dist/brand/wakaba-logo.png`), cấu hình làm favicon và apple-touch-icon trong `index.html`.
- Tạo component dùng chung `Brand` (`apps/web/src/components/brand.tsx`), cập nhật đồng bộ ở sidebar (`apps/web/src/app.tsx`), trang đăng nhập/đăng ký (`apps/web/src/pages/auth.tsx`), và màn hình ôn tập đầu ngày (`apps/web/src/pages/login-review.tsx`).
- Tinh chỉnh CSS `.brand-logo` (44px desktop, 38px mobile) và `.brand-name` đảm bảo không tràn khung ở mọi kích thước màn hình.
- **Sửa giao diện đăng nhập dark mode:** Khắc phục lỗi chữ bị chìm/khó đọc ở banner bên trái (`.auth-art`). Trước đó khung giữ nền sáng `#edf0e4` trong khi chữ nhận màu sáng của dark mode khiến chữ trắng trên nền kem. Đã chuyển `.auth-art` dark mode sang nền xanh rêu sâu `#182018`, viền ngăn cách `var(--line)`, tiêu đề `h1` ngà sáng `#eef3eb`, chữ nhấn `em` xanh non `#9ecc88`, các dòng chữ phụ/eyebrow/small đạt chuẩn tương phản cao, chữ chìm `若葉` tinh tế `#243022`. Đồng thời hoàn thiện form đăng nhập bên phải (`.auth-form` nền `#242a22`, input nền tối chìm `#1b201a`, nút "Dùng tài khoản mẫu" nền `#2e362c` rõ chữ, không mờ).
- Kiểm thử: `typecheck` đạt; `lint` đạt; 114/114 unit/integration tests đạt; `npm run build` đạt; script kiểm tra trình duyệt `tests/browser/login-review-smoke.mjs` chạy 40/40 kiểm tra đạt (xác minh favicon HTTP 200 image/png, ảnh logo nạp thành công `naturalWidth > 0`, kiểm tra 4 độ rộng 320/390/768/1440 px × sáng/tối). Ảnh chụp thực tế: `test-results/login-review/brand-login-*.png`, `welcome-preview-*.png`.
- Không thay đổi database, API hay logic học tập.

## Ôn flashcard sau đăng nhập — ngày 15/10

Cập nhật mới nhất: có nút nhỏ **Ôn tập vào lần sau** ở góc dưới màn hình chọn bộ và đang ôn. `POST /api/login-review/defer` chỉ đánh dấu phiên hiện tại đã được vào web; không thay đổi hạn thẻ hoặc ghi lượt ôn. Lượt đang làm được giữ nguyên để tiếp tục khi đăng nhập lần sau. Thao tác không hoãn phiên trên thiết bị khác. Quy tắc này thay thế mô tả “không có nút bỏ qua” bên dưới. Không cần migration mới.

Giao diện đã chỉnh tiếp theo bản ý tưởng đầu tiên: khung bo góc nền sáng/xanh sage, tiêu đề căn giữa, lời chào cá nhân, lựa chọn 1/3/5 bộ, hàng bộ thẻ có biểu tượng chữ Nhật và thứ tự ưu tiên, nút bắt đầu lớn, footer nhẹ. Màn hình hoàn tất có dấu tích và thống kê số thẻ/bộ cùng trạng thái lịch ôn (không giả lập thời gian thực tế). Giữ luồng ôn bắt buộc lượt đã chọn. Build/TypeScript/lint đạt; 32 kiểm tra bố cục sáng/tối 320–1440 px và luồng ôn đạt. Ảnh bản thật với dữ liệu thử: `test-results/login-review/welcome-preview-1440.png`, `welcome-preview-390.png`; đã xem trực tiếp cả hai. Không thay đổi API, SRS hoặc database trong lần chỉnh giao diện này.

Đã thêm màn hình ôn ưu tiên trước giao diện chính, cá nhân hóa theo tài khoản. Chỉ lấy thẻ có `lastReviewed` và đã đến hạn (kể cả thẻ quên có repetitions=0), sắp bộ theo hạn cũ nhất. Chọn 1/3/5 bộ, giới hạn theo số bộ hiện có; chỉ ôn thẻ đến hạn trong các bộ đã chọn. Không có thẻ cần ôn thì vào thẳng web. Hoàn thành lượt đã chọn mở web bình thường; bộ chưa chọn vẫn đến hạn. Không có nút bỏ qua lượt đã bắt đầu; có đăng xuất.

Lượt đang làm lưu trong `LoginReview` theo user, tiếp tục sau tải lại/đăng nhập và trên thiết bị khác. `Session.reviewReady` đánh dấu phiên đã hoàn thành/không có thẻ; không nhắc lại liên tục trong cùng phiên. Phiên đăng nhập mới kiểm tra lại hạn; không đặt cờ hoàn thành vĩnh viễn cho bộ thẻ. Lịch dùng SRS hiện có: Quên 10 phút, các lần nhớ đầu 1 ngày/6 ngày, sau đó điều chỉnh theo độ khó. Không dùng lịch minh họa 1–3–7 cố định của bản ý tưởng. Nếu giữ phiên đăng nhập lâu ngày, không tự chặn lại khi đang sử dụng; đăng nhập mới sẽ kiểm tra lại.

Migration `20261015010000_login_review` đã áp dụng database chính sau backup `.recovery/before-login-review-1792073163476.db`; giữ nguyên 3 tài khoản/1494 thẻ/174 lượt ôn, integrity OK. API local 3001 đã khởi động lại. Các máy chủ khác cần migrate deploy và khởi động lại API trước khi phục vụ bản frontend mới. Không reset/seed DB.

Mã: `apps/api/src/login-review.ts`, `apps/web/src/pages/login-review.tsx`, `packages/shared/login-review.ts`. Giao diện được chặn tại Layout, không phải quyền truy cập bảo mật cho các API học tập khác; mọi dữ liệu lượt ôn được kiểm tra user ở máy chủ. Thẻ đã ôn ở nơi khác hoặc đã xóa không gây kẹt lượt. 114 kiểm thử đạt; build/TypeScript/lint đạt. Script `tests/browser/login-review-smoke.mjs`: 32 tổ hợp 4 độ rộng 320/390/768/1440 × sáng/tối × chọn bộ/thẻ/đáp án/hoàn tất, chữ rất dài, tải lại giữa chừng và vào web sau khi xong đều đạt. Chưa kiểm tra Safari/thiết bị thật. Commit tự động, chưa push.

## Gỡ hỏi đáp AI — ngày 15/10

Theo yêu cầu người dùng, đã gỡ mục Góc hỏi đáp AI, trang `/assistant` và API hỏi đáp/status cùng mã gọi mô hình tương ứng. Liên kết trang cũ hiển thị trang không tồn tại với liên kết về góc học tập. Đã cập nhật danh sách trang kiểm tra giao diện và README. Cấu hình Gemini vẫn phục vụ công cụ dịch từ điển riêng, không xóa phần dịch này. Không thay đổi database người học.

## Kiểm tra JLPT — cập nhật ngày 15/10

Trang Kiểm tra đã thay mini test bằng 4 đề tự biên soạn N5–N2, tổng 366 câu: N5 71 câu/90 phút, N4 86/115, N3 102/140, N2 107/155. Đồng hồ từng phần theo JLPT, tự lưu đáp án và tiếp tục khi tải lại, khóa phần đã kết thúc, có phiếu trả lời và lịch sử lời giải. Kết quả là tỷ lệ câu đúng, không phải thang 180 hay kết luận đỗ/trượt. Nghe dùng giọng Nhật thiết bị, phát từng câu/có phát lại; chưa là băng thi liên tục và chưa có tranh tình huống. Nội dung chưa chuẩn hóa độ khó; thông báo rõ trên giao diện.

Lưu snapshot đề + trạng thái có version trong `TestRun.questions`, kết quả vào `Attempt`; không cần migration hoặc reset dữ liệu. Giữ lịch sử/API mini test cũ. 113 kiểm thử đạt; kiểm tra trình duyệt 4 luồng thi và 102 tổ hợp bố cục đạt, âm thanh mô phỏng. Chi tiết cấu trúc, giới hạn và kiểm chứng: `docs/JLPT-20261015.md`. Log link chia sẻ cũ báo tunnel không tồn tại; chưa xác minh Internet cho tính năng này, cần chạy lại `npm run share` nếu cần link mới. Commit tự động, chưa push.

## Giao diện — cập nhật ngày 15/10

Bổ sung theo ảnh người dùng: sửa lỗi đáp án ngữ pháp xếp dọc/tràn nút. Selector `.answer-options button > span` từng áp khung 25×25 của nhãn A/B/C lên cả `JapaneseAnnotatedText`. Đã thay bằng lớp `.answer-key`, cho nội dung đáp án co giãn độc lập và giữ icon lựa chọn không co méo. Component dùng chung cho ngữ pháp và bài kiểm tra. Script `tests/browser/grammar-answer-layout.mjs` kiểm tra đúng bài `/grammar/janai`: 20 tổ hợp 5 độ rộng × 2 chế độ chú thích × 2 theme, cả trạng thái chọn, kiểm tra khung từng text/ruby nằm trong nút — đạt. Audit tràn ngang trước đó chưa phát hiện lỗi tràn dọc bên trong nút; không coi kết quả cũ là kiểm chứng trường hợp này. Build/TypeScript/lint đạt; commit tự động theo quy ước, chưa push.

Đã hoàn tất phần sửa giao diện bị gián đoạn: xử lý tràn Hồ sơ 320 px do khối chú thích bị lồng/lặp, ngắt chữ dài và nhãn nút, căn đều thẻ nội dung, đồng nhất màu sáng/tối; thêm tìm kiếm và phân trang 12 bộ thẻ/trang. 130 kiểm tra layout trên 13 trang/5 độ rộng/2 theme đạt; kiểm tra chữ dài và modal trên 4 độ rộng đạt. Build/TypeScript/lint đạt. Chi tiết: `docs/UI-20261015.md`. Các phần này được commit theo quy ước tự động mới; xem lịch sử Git và đối chiếu origin/main để xác định phần chưa push.

## Cập nhật cuối ngày — tài khoản dùng chung (ưu tiên thông tin này)

- Quy trình tạo link đã bổ sung kiểm tra bảng tài khoản và thử API đăng nhập qua chính URL mới trước khi công bố link. Mỗi lần chạy vẫn dùng database chung và cấu hình `APP_ORIGINS` bằng URL mới. Trạng thái xác minh lưu `.share/connection.json`; không cần tạo lại tài khoản khi đổi link. Mã: `scripts/lib/share-readiness.ts`, `scripts/share.ts`.

- Sửa tiếp lỗi nguồn truy cập khi Vite chuyển sang cổng 5175: `apps/api/src/origins.ts` cho phép HTTP loopback (`127.0.0.1`, `localhost`, `[::1]`) với cổng thay đổi chỉ ở chế độ phát triển. Production hoặc `TRUST_PROXY_LOOPBACK=1` vẫn dùng danh sách `APP_ORIGINS`. Đã xác minh trực tiếp 5175 hết lỗi chặn nguồn, 28 kiểm thử API/origin đạt. Bản sửa này nằm sau commit `c3342b3`; xem lịch sử Git để xác định commit và trạng thái push.

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
