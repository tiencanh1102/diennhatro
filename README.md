# Nhà Cho Thuê — Phiên bản V12

## Các nâng cấp trong bản V12
1. **Popup "Đang tải ảnh vui lòng đợi":** Hiển thị tự động khi Quản trị viên đính kèm ảnh đồng hồ (cũ/mới) và khi Người thuê đính kèm bill chuyển khoản; tự động ẩn ngay khi tải lên hoàn tất.
2. **Lịch sử hóa đơn tiền phòng gọn 1 dòng:** Các cột *Tiền phòng, Nước, Điện, Nợ cũ/PS, Tổng cộng* giữ nguyên trên 1 dòng không bị xuống dòng.
3. **Nổi bật nhắc đính kèm ảnh chuyển khoản:** Dòng *"Vui lòng đính kèm ảnh chuyển khoản"* đổi sang nền đỏ, chữ vàng đậm nổi bật.
4. **Tab Nội quy chuẩn đẹp:** Đổi tiêu đề thành **`NỘI QUY TOÀ NHÀ`** viết hoa in đậm căn giữa; nội dung nội quy canh đều lề hai bên (`text-align: justify`).
5. **Tự động xóa cache (`version.json` `12.0.0`):** Mọi thiết bị tự cập nhật giao diện V12 mới nhất.

## Cập nhật nhanh lên V12
1. Giải nén `nha_cho_thue_v12.zip`, mở `Code_V12_AppsScript.js` dán vào Google Apps Script → **Lưu** → chạy hàm `testAllFunctions` 1 lần → **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Đẩy toàn bộ tệp còn lại (bao gồm `version.json`, trừ `Code_V12_AppsScript.js`) cùng thư mục `functions` lên GitHub / Cloudflare Pages.
