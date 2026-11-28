# Nhà Cho Thuê — Phiên bản V8

## Các nâng cấp trong bản V8
1. **Tự động gửi Email hóa đơn khi chốt số điện:** Thêm ô nhập **Email nhận phiếu thu** trong Tab *Dữ liệu* cho từng phòng. Khi Quản trị viên bấm **Chốt số điện & Kết tiền**, hệ thống tự động gửi email phiếu thu đầy đủ chi tiết + nút mở web cho những phòng có điền email; phòng nào để trống email sẽ tự động bỏ qua.
2. **Nút "Copy thông báo nhóm Zalo" 1 chạm:** Đặt ngay trong Tab *Tiền phòng*, tự soạn sẵn thông báo tổng hợp tiền phòng kỳ hiện tại, hạn thanh toán và đường link mở web để bạn dán thẳng vào nhóm Zalo nhà trọ.
3. **Tự động xóa cache web (`v8.0.0`):** Mọi thiết bị tự động cập nhật giao diện V8 mới nhất.

## Cập nhật nhanh lên V8
1. Mở tệp `Code_V8_AppsScript.js` trong gói ZIP → dán vào Google Apps Script → **Lưu** → chạy hàm `testAllFunctions` 1 lần → **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Giải nén `nha_cho_thue_v8.zip` và đẩy toàn bộ tệp (trừ `Code_V8_AppsScript.js`) cùng thư mục `functions` lên GitHub / Cloudflare Pages.
