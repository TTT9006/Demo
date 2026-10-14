# Chia sẻ bản dùng thử qua Internet

Trong PowerShell tại `D:\Demo`:

```powershell
npm run share
```

Lệnh này build website, dùng chung database với local và in ra **LINK DÙNG THỬ** dạng `https://…trycloudflare.com`. Gửi link đó cho người thử hoặc mở trên điện thoại. Họ có thể chọn **Dùng tài khoản mẫu**, hoặc đăng nhập/đăng ký tài khoản riêng để lưu tiến độ độc lập.

Giữ cửa sổ đang chạy và máy tính có Internet, không để máy ngủ. Nhấn **Ctrl+C** để dừng chia sẻ. Link thay đổi mỗi lần khởi động; link gần nhất nằm trong `.share/url.txt` và chỉ dùng được khi tiến trình còn chạy. Không cần mở cổng router hoặc chạy thêm `npm run dev`.

## Dữ liệu

- Bản chia sẻ chạy ở cổng nội bộ 3010, dùng chung `prisma/learning.db` với local (hoặc cùng `DATABASE_URL`). Không tạo bản sao và không xóa tài khoản khi chạy chia sẻ.
- Dữ liệu trial trước đây đã hợp nhất ngày 14/10; xem `docs/UNIFIED-ACCOUNTS.md`. Nếu trên máy khác còn trial chưa nhập, script dừng để xử lý bảo toàn dữ liệu trước.
- Tài khoản mẫu của bản dùng thử có quyền người dùng thường. Mọi người dùng chung tài khoản mẫu sẽ thấy thay đổi của nhau; hãy đăng ký riêng để thử tiến độ cá nhân.
- Tài khoản đăng ký từ local, điện thoại hoặc link Internet đều nằm trong cùng database và dùng được ở các địa chỉ này. Mỗi trình duyệt/địa chỉ cần đăng nhập riêng. Điện thoại dùng link HTTPS; địa chỉ 127.0.0.1 trên điện thoại không trỏ đến máy tính.
- Trang luyện viết tự lưu bản nháp gần nhất vào IndexedDB (`komorebi-drafts`, store `writing`), tách theo ID tài khoản. Nút **Lưu bài viết** lưu vào máy chủ. IndexedDB không lưu mật khẩu hoặc cookie đăng nhập.
- Bản nháp chỉ thuộc trình duyệt và địa chỉ website hiện tại: đổi link tunnel, đổi trình duyệt hoặc xóa dữ liệu website sẽ không còn truy cập bản nháp cũ. Bài đã lưu vào máy chủ và tài khoản vẫn nằm trong database chung. Đây chưa phải chế độ chạy toàn bộ website offline.
- Bản dùng thử tắt khóa Gemini và ngân sách dịch. Các chức năng AI cần khóa riêng sẽ báo chưa cấu hình.
- Chỉ giao diện đã build và API được chia sẻ; thư mục mã nguồn, `.env`, database và backup không được phục vụ như tệp tải xuống.

## Công cụ kết nối

Máy này đã có `.tools/cloudflared.exe`, bản 2026.10.0 từ kho chính thức, đã đối chiếu SHA-256 của release. Khi chuyển máy, tải bản Windows amd64 từ [Cloudflare](https://developers.cloudflare.com/tunnel/downloads/) và đặt vào đường dẫn này.

[Cloudflare Quick Tunnels](https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/) cung cấp link tạm không cần tài khoản hay tên miền. Ai có link cũng có thể mở trang đăng nhập/đăng ký và tài khoản mẫu. Dịch vụ dành cho thử nghiệm, không đảm bảo hoạt động liên tục.

Nếu cổng 3010 đang bận, dừng tiến trình chia sẻ cũ trước khi chạy lại. Không chạy lại công cụ seed/reset để sửa lỗi đăng nhập; kiểm tra cấu hình database, nguồn truy cập và trạng thái máy chủ.
