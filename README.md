# Nhà Cho Thuê — Phiên bản V9

## Các nâng cấp trong bản V9
1. **Bỏ thông báo "Chào mừng quản trị viên"** khi đăng nhập và thao tác dữ liệu.
2. **Nhận diện thiết bị mới vs thiết bị đã đăng nhập:** Thiết bị mới lần đầu cần bấm đồng bộ xuống; thiết bị đã từng đồng bộ sẽ tự động tải dữ liệu xuống ngay khi đăng nhập lại và bật đồng bộ 2 chiều 6 giây/lần.
3. **Tự động xóa cache & tự động đăng xuất khi lên phiên bản mới (`version.json`):** Mọi thiết bị tự động phát hiện bản mới qua `version.json`, dọn sạch cache/Service Worker cũ và yêu cầu đăng nhập lại trên giao diện mới nhất.
4. **Nút "Bill chuyển khoản" / "Xem Bill C.k" thông minh:** Đã đính kèm bill tự đổi thành nút **Xem Bill C.k** cho cả Quản trị viên và Người thuê, bấm vào xem ảnh ngay trên web kèm tùy chọn *Đính kèm lại ảnh thay thế*.
5. **Tab "Nội quy" mới:** Quản trị viên soạn và đồng bộ nội quy (có sẵn mẫu cơ bản), tất cả các phòng đều bấm sang Tab *Nội quy* để xem.
6. **Cài đặt quản trị viên gọn gàng hơn:** Tiêu đề 2 dòng (**Số nhà** + **Địa chỉ**) hiển thị ở cả màn hình chính & màn hình khóa; 4 mục lớn trong Cài đặt đều có **nút gạt mở rộng/thu gọn** (mặc định thu gọn).
7. **Chuẩn hóa mẫu Copy nhóm Zalo & Tin nhắn nhắc nhẹ quá hạn.**

## Cập nhật nhanh lên V9
1. Mở tệp `Code_V9_AppsScript.js` trong gói ZIP → dán vào Google Apps Script → **Lưu** → chạy hàm `testAllFunctions` 1 lần → **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Giải nén `nha_cho_thue_v9.zip` và đẩy toàn bộ tệp (bao gồm cả **`version.json`** mới, trừ `Code_V9_AppsScript.js`) cùng thư mục `functions` lên GitHub / Cloudflare Pages.
