# Giao diện điện thoại

Mở link HTTPS được in khi chạy `npm run share` trên trình duyệt điện thoại. Điện thoại không cần cùng Wi-Fi với máy chủ. Máy chạy website cần bật và có Internet; link tạm thay đổi khi mở tunnel mới. Tài khoản và bài học đã lưu vẫn dùng database `.share/trial.db` hiện có.

## Thay đổi giao diện

- Ở chiều rộng tối đa 760 px, có thanh điều hướng dưới: Tổng quan, Từ điển, Thẻ từ vựng, Luyện viết và Thêm.
- Menu trượt dùng Radix Dialog để quản lý focus, khóa cuộn nền và đóng bằng nút đóng, chạm nền hoặc Escape. Menu tự đóng sau khi chuyển trang.
- Tăng cỡ chữ nội dung và vùng chạm; ô nhập dùng chữ 16 px; giữ khả năng phóng to của trình duyệt.
- Hộp thoại mở từ dưới, nội dung cuộn được, có khoảng trống cho vùng an toàn của màn hình. Thông báo nằm trên thanh điều hướng.
- Trang đăng nhập rút gọn phần giới thiệu để ưu tiên biểu mẫu. Các nút ôn tập, thanh công cụ và nút luyện viết xuống hàng trên màn hình hẹp.
- Giữ bảng vẽ theo tỷ lệ vuông và xử lý pointer/touch. IndexedDB tiếp tục giữ bản nháp theo tài khoản và địa chỉ website.
- Giữ giao diện desktop và bảng màu hiện tại, không thêm gradient.

## Kiểm tra

Sau khi mở bản dùng thử, chạy `npm run test:mobile`. Mặc định bài kiểm tra đọc link trong `.share/url.txt`; có thể đặt biến `MOBILE_TEST_URL` nếu muốn kiểm tra địa chỉ khác.

Bài kiểm tra dùng Microsoft Edge headless, mô phỏng các chiều rộng 320, 390, 430, 768 và 1440 px; mở 13 trang sau đăng nhập, chờ tải dữ liệu, kiểm tra tràn ngang và lỗi JavaScript; thử menu, hộp thoại và chạm canvas. Chỉ dùng tài khoản mẫu, không ghi bài luyện viết hay thẻ vào database. Ảnh và báo cáo nằm trong `test-results/mobile`.

Đây là kiểm tra trình duyệt mô phỏng, chưa phải kiểm tra trên thiết bị iPhone/Android thật hoặc Safari iOS. Bàn phím ảo và phát âm còn phụ thuộc trình duyệt/thiết bị.

Kết quả ngày 13/10/2026: build thành công; 65 lượt kiểm tra trang ở 5 chiều rộng không tràn ngang hoặc phát sinh lỗi JavaScript. Menu, hộp thoại và chạm canvas đạt ở ba kích thước điện thoại. Kiểm tra cuối xác nhận bảng chọn chữ cuộn được, menu dùng được khi xoay ngang (667 × 375), ô nhập 16 px và tra `ikimasu` có `行く` trên link công khai.
