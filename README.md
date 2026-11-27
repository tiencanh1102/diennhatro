# Nhà Cho Thuê — Phiên bản V5

## Các nâng cấp & sửa lỗi trong bản V5
1. **Ẩn địa chỉ Gmail quản trị trong Cài đặt** (vẫn tự động gửi mã OTP khôi phục khi nhập sai quá 5 lần).
2. **Thu gọn thanh tiêu đề:** Xếp dọc ô **Đồng bộ máy chủ** phía trên và **3 icon màu thu nhỏ** thẳng hàng ngay bên dưới để hiển thị trọn vẹn tên nhà trọ & tên phòng trọ.
3. **Bỏ dòng chữ gợi ý vuốt** trên thanh chọn tháng cho gọn giao diện.
4. **Tab Dữ liệu tự động đồng bộ:** Bỏ nút lưu thủ công, mọi thông tin sửa ở 9 phòng tự động đồng bộ lên máy chủ ngay sau khi nhập.
5. **Icon thùng rác xóa lịch sử:** Quản trị viên có nút thùng rác xóa từng dòng ở cả **Lịch sử chỉ số điện** và **Lịch sử hóa đơn tiền phòng**.
6. **Sửa triệt để lỗi kết xuất số điện & mất dữ liệu khi làm mới:** Chuẩn hóa định dạng văn bản (`@`) trên Google Sheets để tránh tự chuyển `"11/2026"` thành kiểu Ngày (Date), đồng thời chống xung đột với đồng bộ nền 6 giây.
7. **Sửa lỗi hiển thị mã QR trên Phiếu thu:** Tích hợp proxy ảnh VietQR sạch CORS tại `/api?action=qrProxy` + tự bỏ dấu tiếng Việt ở nội dung chuyển khoản + cơ chế dự phòng đa tầng.
8. **Sửa lỗi đổi mật khẩu Quản trị viên:** Giữ nguyên số 0 ở đầu mật khẩu trên Google Sheets, tự tương thích ngược khi chưa triển khai lại script.

## Cập nhật nhanh lên V5
1. Dán mã `Code_V5_AppsScript.js` vào Apps Script → **Lưu** → chạy hàm **`testAllFunctions`** 1 lần → **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Giải nén `nha_cho_thue_v5.zip` và tải toàn bộ tệp (trừ `Code_V5_AppsScript.js`) cùng thư mục `functions` lên GitHub / Cloudflare Pages.
