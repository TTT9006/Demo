# Tài khoản dùng chung — 14/10/2026

## Trạng thái hiện tại

Local (5173/5174 → API 3001) và link Internet (API 3010) cùng dùng `prisma/learning.db`, hoặc cùng `DATABASE_URL` được cấu hình. Không còn sao chép tài khoản sang một database dùng thử riêng mỗi khi chia sẻ. Điện thoại truy cập link HTTPS từ `.share/url.txt`; `127.0.0.1` trên điện thoại là chính điện thoại, không phải máy chủ.

Mỗi trình duyệt/địa chỉ vẫn cần đăng nhập riêng vì cookie riêng. Tài khoản, mật khẩu và dữ liệu đã lưu trên máy chủ dùng chung. Bản nháp IndexedDB chưa bấm lưu vẫn chỉ nằm trong trình duyệt cũ; khi ID tài khoản trial được gộp vào ID local, không tự chuyển bản nháp đó.

## Hợp nhất dữ liệu cũ

- Người dùng đã xác nhận hai tài khoản trùng email của mình đều do mình tạo. Hợp nhất giữ ID local, gán lại dữ liệu trial về chủ sở hữu tương ứng. Tài khoản chỉ có ở trial được giữ ID và mật khẩu.
- Có 3 tài khoản sau hợp nhất; giữ đủ 52 bộ, 1.494 thẻ, 174 lượt ôn thẻ, 3 lượt thi, 3 phiên thi và 5 bài viết. 12 bản ghi tiến độ ngữ pháp trước hợp nhất thành 10 khóa duy nhất; trạng thái đã đọc/đánh dấu được hợp nhất bằng OR. Không xóa bộ có cùng tên vì có thể đã chỉnh sửa và có lịch sử riêng, nên người dùng có thể thấy bộ mặc định trùng tên.
- Hai mật khẩu cũ của tài khoản đã gộp tiếp tục dùng được. Chỉ lưu hash; không thu thập mật khẩu gốc. Đổi mật khẩu trong cài đặt chấp nhận mật khẩu cũ hợp lệ, xóa các hash bổ sung và thu hồi các phiên cũ; sau đó chỉ mật khẩu mới có hiệu lực.
- Tài khoản mẫu `demo@komorebi.local` được hạ về quyền `user` vì nay dùng chung qua Internet. API đăng nhập mẫu từ chối tài khoản có quyền quản trị. Không dùng tài khoản mẫu để lưu dữ liệu riêng.
- `.share/trial.db` giữ nguyên làm bản đối chiếu, không còn là database hoạt động. API từ chối cấu hình đường dẫn này. `AccountImport` ghi nhận đã nhập, chạy lại không nhân đôi. Script chia sẻ dừng nếu còn trial chưa nhập, thay vì âm thầm bỏ lại tài khoản.
- Backup trước migration: `.recovery/unified-before-1791993794332/`; backup ngay trước hợp nhất và kết quả: `.recovery/unified-1791993837150/`. SQLite `quick_check` đạt, không lỗi khóa ngoại.
- Migration `20261014020000_unified_accounts` đã áp dụng cho database chính, thêm `UserPasswordCredential` và `AccountImport`. Không cần migration trial đã ngừng dùng. Không nhập lại từ điển.

## Mã và vận hành

- `packages/shared/database-location.ts` chuẩn hóa SQLite URL thành đường dẫn tuyệt đối; API và script chia sẻ cùng dùng hàm này. Đường dẫn tương đối được tính từ thư mục `prisma`, giống Prisma.
- `scripts/lib/merge-accounts.ts`: transaction, mapping người dùng, bảo toàn lịch sử, rollback khi email chưa xác nhận hoặc ID xung đột. Không tự gộp người dùng chỉ vì trùng email.
- `scripts/unify-databases.ts`: mặc định chỉ xem email trùng. Khi cần nhập dữ liệu cũ ở máy khác, dừng các API, sao lưu, áp dụng migration, rồi dùng `--apply --merge-email=<email-đã-xác-nhận>`. Script tự sao lưu trước nhập. Không chạy seed/reset và không ghi đè dữ liệu mới bằng backup.
- `scripts/share.ts` phục vụ database chính, không còn đoạn tạo bản sao/xóa tài khoản/seed trial. Vẫn tắt khóa dịch trả phí cho tiến trình chia sẻ.
- Cho phép đăng nhập local tại cổng 5173 và 5174 trong mặc định API, `.env.example` và `.env` tại máy này. `APP_ORIGINS` cấu hình riêng vẫn được tôn trọng; không cho phép nguồn bất kỳ.
- Lần xác minh cuối: dev 5173/5174, API 3001 và chia sẻ 3010 đang chạy. Link lúc đó: https://cotton-receive-obligation-dean.trycloudflare.com. Luôn đọc lại `.share/url.txt` và kiểm tra tiến trình ở phiên sau. Máy phải bật/có mạng; chưa phải hosting 24/7, chưa đồng bộ với máy chủ độc lập khác.

## Kiểm chứng

- 106/106 unit/integration đạt, build/TypeScript và lint đạt. Bao gồm nhập tài khoản, rollback, chạy lại không trùng, mật khẩu cũ, đổi mật khẩu thu hồi hash cũ/phiên cũ và quyền tài khoản mẫu.
- `tests/browser/shared-accounts-smoke.mjs`: hai server chung DB thử, hai browser context desktop/mobile độc lập; đăng ký/đăng nhập hai chiều, tiến độ và hồ sơ dùng chung, cookie tồn tại khi tải lại, dữ liệu người dùng khác vẫn tách biệt. Đạt; không tạo tài khoản kiểm thử trong DB thật.
- Kiểm tra trên link Internet thật và local 5173/5174 bằng phiên mẫu tạm: cả ba trả HTTP 200, cùng ID, quyền `user`; đã đăng xuất phiên thử.
- Chưa kiểm chứng thiết bị điện thoại thật/Safari. Không đảm bảo đăng nhập thành công khi sai mật khẩu, máy chủ tắt hoặc link tunnel hết hiệu lực.
