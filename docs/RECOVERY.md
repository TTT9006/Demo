# Khôi phục cấu hình và mã nguồn — 12/10/2026

## Tình trạng ban đầu

`D:\Demo\package.json` và các tệp cấu hình ở thư mục gốc đã mất. Các thư mục `apps`, `packages`, `scripts`, `tests`, `docs` vẫn tồn tại nhưng không còn tệp nguồn. Schema, migration và fixture mẫu cũng bị thiếu. Bản build `dist`, `dist-api`, dữ liệu JMdict gốc, database và hai thư mục dependencies vẫn còn.

Git có thư mục `.git` nhưng chưa có commit hoặc reflog có thể phục hồi. Kiểm tra các object Git không tìm được package hoặc migration phù hợp. Không xác định được nguyên nhân các tệp biến mất từ những bằng chứng hiện có.

## Cách khôi phục

- Khôi phục mã nguồn và cấu hình từ các bản vá đã ghi trong lịch sử phiên triển khai của chính dự án này. Bỏ qua bản vá đã thất bại ở phiên cũ; giữ bản vá thành công thay thế sau đó.
- Khôi phục `package.json` dựa trên cấu hình cũ, các import trong mã nguồn và phiên bản thực tế trong `node_modules/*/package.json`.
- Phục hồi metadata của lockfile từ `node_modules/.package-lock.json`, sau đó chạy `npm install` để tạo `package-lock.json` chuẩn.
- Thống nhất **npm**. `node_modules-pnpm-backup` được giữ nguyên làm bản lưu; không dùng nó làm thư mục cài đặt hiện hành. Không tạo pnpm lockfile mới.
- Phục hồi migration đầu tiên bằng Prisma từ schema đúng thời điểm trong lịch sử; hai migration bổ sung từ các bản vá gốc. Cả **3 tệp đều khớp SHA-256** của các migration đã áp dụng trong `_prisma_migrations`.
- Tái tạo fixture 40 từ bằng script trích xuất từ `data/raw/jmdict.json` hiện có, không tải lại hoặc nhập lại từ điển.
- Giữ nguyên `.env`; không in giá trị bí mật hoặc ghi đè cấu hình này.

Bản phục hồi trung gian và bằng chứng kiểm tra được lưu trong `.recovery/` và được loại khỏi Git. Không thực hiện reset database, không chạy seed trên database thật trong lần sửa này.

## Kết quả kiểm tra

| Kiểm tra | Kết quả |
| --- | --- |
| `npm install --prefer-offline --no-audit --no-fund --fetch-retries=0 --fetch-timeout=15000` | Thành công |
| `npm ls --depth=0` | Mã thoát 0; không thiếu dependency trực tiếp |
| `prisma migrate status` | Database đúng phiên bản, 3 migrations |
| `npm run build` | Thành công: TypeScript, Vite và bundle API |
| `npm run test` | 23/23 kiểm thử qua, 2 tệp test |
| `npm run dev` | Vite ở `127.0.0.1:5173`, API ở `127.0.0.1:3001` |
| Kiểm tra Edge chạy ẩn | 12 trang mở thành công; không có lỗi JavaScript trên trang |
| Tra cứu chính xác | `食べる` trả về JMdict `1358280` |
| Giao diện 390 px | Không tràn ngang |

Các trang đã kiểm tra: tổng quan, từ điển, thẻ từ, danh sách ngữ pháp, bài ngữ pháp, luyện viết, kiểm tra, tiến độ, hồ sơ, cài đặt, trợ lý AI và quản lý từ điển. Kiểm tra trình duyệt chỉ đọc dữ liệu học tập; phiên đăng nhập tạm đã được đăng xuất. Đây là kiểm tra nhanh trên trình duyệt, không phải chạy toàn bộ `test:e2e`.

Build/test ban đầu bị sandbox của công cụ chặn `realpath` với lỗi EPERM. Chạy lại ngoài sandbox đã thành công. Đây không phải lỗi ENOENT của dự án. Node đang dùng là `26.11.1`, npm `11.20.0`; dự án khai báo Node từ 24 trở lên.

Còn hai cảnh báo không chặn chạy: bundle frontend khoảng 1,39 MB trước gzip và cảnh báo deprecation của `module.register()` khi dùng tsx hiện tại với Node 26. Không thay đổi chức năng để xử lý các cảnh báo ngoài phạm vi phục hồi này.

## Dữ liệu trước và sau

| Bảng | Trước | Sau |
| --- | ---: | ---: |
| User | 2 | 2 |
| Card | 32 | 32 |
| Review | 84 | 84 |
| Grammar | 8 | 8 |
| DictionaryEntry | 218.863 | 218.863 |
| DictionaryGloss | 443.593 | 443.593 |
| DictionaryTranslation | 97 | 97 |

Các file database và dữ liệu gốc JMdict được giữ tại chỗ. Test API dùng database riêng trong `test-results/api`, không dùng database học tập thật.

## Chạy website

Trong PowerShell:

```powershell
cd D:\Demo
npm run dev
```

Mở **http://127.0.0.1:5173** và chọn **Dùng tài khoản mẫu**. Giữ cửa sổ terminal đang chạy; nhấn Ctrl+C khi muốn dừng. Nếu server đã chạy thì mở URL trực tiếp, không cần khởi động thêm.

Không cần chạy lại `db:setup` hoặc nhập JMdict cho database hiện có. Khi cần cài lại dependencies trên máy khác, dùng `npm ci` với `package-lock.json`. Với một bản sao hoàn toàn chưa có database, chạy `npm run db:setup` trước khi chạy `npm run dev`.
