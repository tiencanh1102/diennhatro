# Nhà Cho Thuê — Phiên bản V3.1

## Điểm cập nhật trong bản V3.1
- **Sửa triệt để lỗi cú pháp RegExp** ở dòng 566 tệp Google Apps Script (`/[\/\\]/g`).
- **Tăng độ ổn định đồng bộ đa thiết bị:** bổ sung `LockService` chống xung đột khi nhiều máy đồng bộ 6 giây/lần.
- **Chống tràn ô Google Sheets (>50.000 ký tự):** tự động tối ưu kích thước ảnh mã QR tải lên và tự chia nhỏ dữ liệu lớn trong `_System_Meta`.
- **Tích hợp hàm `testAllFunctions`** ngay trong `Code_V3.1_AppsScript.js` để bấm chạy kiểm thử nhanh trực tiếp trong Apps Script.

## Hướng dẫn cập nhật
1. Mở Google Apps Script → thay toàn bộ mã bằng `Code_V3.1_AppsScript.js` → bấm **Lưu** → chọn hàm `testAllFunctions` và bấm **Chạy** để kiểm chứng không lỗi → chọn **Triển khai → Quản lý các bản triển khai → Sửa → Phiên bản mới → Triển khai**.
2. Đẩy toàn bộ các tệp còn lại (`index.html`, `sw.js`, `manifest.json`, `functions/api.js`, 4 tệp icon, `README.md`) lên GitHub / Cloudflare Pages.
