# Nhà Cho Thuê — Phiên bản V11

## Các nâng cấp & sửa lỗi trong bản V11
1. **Sửa triệt để lỗi ảnh đồng hồ đã lên Drive nhưng không hiển thị trên web/app:**
   - Bổ sung proxy ảnh Google Drive (`/api?action=driveImg&id=...`) ngay trong `functions/api.js`, kèm `referrerpolicy="no-referrer"` và cơ chế tự dự phòng 3 nguồn ảnh Google Drive.
   - Đảm bảo chờ đồng bộ nền rảnh trước khi đẩy link ảnh lên máy chủ, không bị mất link ảnh.
2. **Nút ảnh đồng hồ gọn & trực quan cho Quản trị viên (Tab Số điện):**
   - Chưa đính kèm: **`+ Ảnh cũ`** / **`+ Ảnh mới`** → bấm để chọn ảnh.
   - Đã đính kèm: tự đổi thành **`Xem ảnh cũ`** / **`Xem ảnh mới`** → bấm xem trực tiếp ảnh phóng to trên web/app (kèm nút *Đổi ảnh đồng hồ* ngay dưới ảnh nếu cần thay).
3. **Mục "Ảnh chụp đồng hồ" riêng cho Người thuê (Tab Số điện):**
   - Đặt ngay bên trên *Lịch sử chỉ số điện* gồm 2 nút 1 dòng gọn đẹp: **`Xem ảnh chụp đồng hồ tháng hiện tại`** và **`Xem ảnh chụp đồng hồ tháng trước`**, đồng bộ trực tiếp ảnh từ Quản trị viên.
4. **Gọn bảng Lịch sử chỉ số điện:** Đã xóa cột *Ảnh đồng hồ* ở bảng *Lịch sử chỉ số điện*.

## Cập nhật nhanh lên V11
1. Mở `Code_V11_AppsScript.js` trong gói ZIP → dán vào Google Apps Script → **Lưu** → chạy hàm `testAllFunctions` 1 lần → **Triển khai → Quản lý các bản triển khai → biểu tượng cây bút → Phiên bản mới → Triển khai**.
2. Giải nén `nha_cho_thue_v11.zip` và đẩy toàn bộ tệp (bao gồm `version.json`, `functions/api.js` mới có `driveImg`, trừ `Code_V11_AppsScript.js`) lên GitHub / Cloudflare Pages.
