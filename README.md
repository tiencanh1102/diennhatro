# Nhà Cho Thuê — Phiên bản V10

## Các nâng cấp trong bản V10
1. **Tab Số điện sạch & thông minh hơn:** Xóa số `0` mặc định ở cột *Số điện cũ*; cho phép đính kèm cả **Ảnh đồng hồ tháng cũ** và **Ảnh đồng hồ tháng mới** (sang tháng sau tự động lấy ảnh tháng trước làm ảnh cũ); tự động đồng bộ bản nháp lên máy chủ và **chỉ chuyển xuống Lịch sử chỉ số điện khi bấm nút Lưu / Chốt số điện**.
2. **Màn hình đăng nhập & Thanh tab kính lỏng (Liquid Glass):** Sửa chữ *"Chọn phòng của bạn"* và *"Mật khẩu phòng"* căn giữa cân đối, xóa dòng gợi ý tài khoản mặc định, tăng hiệu ứng kính lỏng nổi bật.
3. **Đổi tên đăng nhập Quản trị viên:** Có nút **Lưu tên đăng nhập QTV** riêng trong Cài đặt, đồng bộ thẳng lên máy chủ.
4. **Tối ưu giao diện Người thuê trên điện thoại:**
   - Chu kỳ tháng căn giữa, **Tên phòng in đậm 1 dòng đầy đủ** phía dưới, tiêu đề *Tiền phòng MM/YYYY* căn giữa.
   - Bố cục nút 2 dòng gọn đẹp: dòng trên gồm *Phiếu thu (QR)* & *Copy phiếu thu* ngang hàng 50/50, dòng dưới là nút *Bill chuyển khoản / Xem Bill C.k* rộng 100% không bị cắt chữ.
   - Cho phép xem cả **ảnh đồng hồ tháng cũ & tháng mới** ngay trong *Lịch sử hóa đơn tiền phòng*.
   - Popup có mũi tên chỉ thẳng vào ô đồng bộ: *"Click vào đây để cập nhật dữ liệu mới từ máy chủ"* khi cần đồng bộ lần đầu.
   - Chuẩn hóa nội dung chuyển khoản thành `<Tên phòng không dấu> tien phong T<MM>.<YYYY>` (VD: `Thao Duong tien phong T11.2026`).

## Cập nhật nhanh lên V10
1. Mở tệp `Code_V10_AppsScript.js` trong gói ZIP → dán vào Google Apps Script → **Lưu** → chạy hàm `testAllFunctions` 1 lần → **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Giải nén `nha_cho_thue_v10.zip` và đẩy toàn bộ tệp (bao gồm `version.json`, trừ `Code_V10_AppsScript.js`) cùng thư mục `functions` lên GitHub / Cloudflare Pages.
