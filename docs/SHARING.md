# Chia sẻ bản dùng thử qua Internet

Trong PowerShell tại `D:\Demo`:

```powershell
npm run share
```

Lệnh này build website, tạo database dùng thử lần đầu và in ra **LINK DÙNG THỬ** dạng `https://…trycloudflare.com`. Gửi link đó cho người thử. Họ có thể chọn **Dùng tài khoản mẫu**, hoặc đăng ký tài khoản riêng để lưu tiến độ độc lập.

Giữ cửa sổ đang chạy và máy tính có Internet, không để máy ngủ. Nhấn **Ctrl+C** để dừng chia sẻ. Link thay đổi mỗi lần khởi động; link gần nhất nằm trong `.share/url.txt` và chỉ dùng được khi tiến trình còn chạy. Không cần mở cổng router hoặc chạy thêm `npm run dev`.

## Dữ liệu

- Bản dùng thử chạy ở cổng nội bộ 3010, dùng `.share/trial.db` riêng.
- Lần đầu, công cụ tạo snapshot SQLite nhất quán từ `prisma/learning.db`, giữ từ điển đầy đủ, loại bỏ tài khoản và lịch sử cá nhân **chỉ trên bản sao**, rồi tạo dữ liệu mẫu. Database gốc được mở chỉ đọc.
- Tài khoản mẫu của bản dùng thử có quyền người dùng thường. Mọi người dùng chung tài khoản mẫu sẽ thấy thay đổi của nhau; hãy đăng ký riêng để thử tiến độ cá nhân.
- Dữ liệu người thử được giữ lại khi chạy lại lệnh. Database dùng thử không tự đồng bộ với database gốc.
- Bản dùng thử tắt khóa Gemini và ngân sách dịch. Các chức năng AI cần khóa riêng sẽ báo chưa cấu hình.
- Chỉ giao diện đã build và API được chia sẻ; thư mục mã nguồn, `.env`, database và backup không được phục vụ như tệp tải xuống.

## Công cụ kết nối

Máy này đã có `.tools/cloudflared.exe`, bản 2026.10.0 từ kho chính thức, đã đối chiếu SHA-256 của release. Khi chuyển máy, tải bản Windows amd64 từ [Cloudflare](https://developers.cloudflare.com/tunnel/downloads/) và đặt vào đường dẫn này.

[Cloudflare Quick Tunnels](https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/) cung cấp link tạm không cần tài khoản hay tên miền. Ai có link cũng có thể mở trang đăng nhập/đăng ký và tài khoản mẫu. Dịch vụ dành cho thử nghiệm, không đảm bảo hoạt động liên tục.

Nếu cổng 3010 đang bận, dừng cửa sổ chia sẻ cũ trước khi chạy lại. Nếu lần chuẩn bị đầu bị gián đoạn, công cụ giữ bản sao chưa hoàn tất và dừng để kiểm tra; không tự ghi đè dữ liệu.
