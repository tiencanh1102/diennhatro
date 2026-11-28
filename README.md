# Nhà Cho Thuê — Phiên bản V15

## Các nâng cấp & sửa lỗi trong bản V15
1. **Sửa triệt để nút "Nhập mã QTV":** Xác thực trực tiếp lên máy chủ qua `verifyAdminPin`, tự động mở khóa quyền Quản trị viên và kéo đầy đủ dữ liệu quản trị xuống ngay để chỉnh sửa.
2. **Đơn giản hóa đăng nhập Quản trị viên (chỉ dùng 1 mật khẩu duy nhất):**
   - Bỏ hoàn toàn ô nhập tài khoản QTV ngoài màn hình khóa và trong Cài đặt.
   - Gộp Mã QTV và Mật khẩu Quản trị viên làm 1 mật khẩu số duy nhất (nhập đúng tự động đăng nhập, đổi và đồng bộ trực tiếp lên máy chủ).
3. **Đưa nút "Quản trị viên" xuống cuối màn hình khóa:** Hiển thị danh sách phòng thuê lên trên cùng, nút *Quản trị viên* nằm gọn ở hàng cuối cùng.

## Cập nhật nhanh lên V15
1. Mở `Code_V15_AppsScript.js` trong gói ZIP → dán vào Google Apps Script → **Lưu** → chạy hàm `testAllFunctions` 1 lần → **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Giải nén `nha_cho_thue_v15.zip` và đẩy toàn bộ tệp (gồm `index.html`, `version.json`, `sw.js`, `manifest.json`, thư mục `functions`, 4 tệp icon; không cần đẩy `Code_V15_AppsScript.js`) lên GitHub / Cloudflare Pages.
