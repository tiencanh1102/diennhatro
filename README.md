# Nhà Cho Thuê — Phiên bản V4

## Các nâng cấp chính trong bản V4
1. **Đổi mật khẩu Quản trị viên trực tiếp & đồng bộ ngay lên máy chủ:** Có ô/khung **Thay đổi mật khẩu quản trị viên** riêng trong phần *Tài khoản & Mật khẩu Quản trị viên*, tự chờ đồng bộ rảnh và cập nhật trực tiếp lên máy chủ (thay thế mật khẩu cũ).
2. **Khôi phục mật khẩu Quản trị viên qua Gmail (`tiencanh.ntc@gmail.com`):** Khi nhập sai mật khẩu Quản trị viên quá 5 lần ngoài màn hình khóa, ứng dụng cho phép bấm **Gửi mã xác nhận 6 số về Gmail `tiencanh.ntc@gmail.com`**, nhập mã OTP nhận được để đặt mật khẩu Quản trị viên mới ngay lập tức.
3. **Đổi vị trí & tô màu nổi bật 3 icon góc phải:** Thứ tự mới gồm **Người đăng nhập** (xanh dương ngọc) → **Chuyển Sáng/Tối** (vàng cam / tím đêm) → **Cài đặt** (tím hồng), biểu tượng trắng sắc nét nổi bật trên nền kính lỏng.

## Hướng dẫn cập nhật lên V4
1. Mở Google Apps Script → thay toàn bộ mã bằng `Code_V4_AppsScript.js` → bấm **Lưu** → chọn hàm **`testAllFunctions`** và bấm **Chạy** (để Google hiện hộp thoại cấp thêm quyền gửi email `MailApp` cho chức năng quên mật khẩu) → chọn **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Giải nén `nha_cho_thue_v4.zip` và tải toàn bộ tệp (trừ `Code_V4_AppsScript.js`) cùng thư mục `functions` lên GitHub / Cloudflare Pages.
