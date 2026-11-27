# Nhà Cho Thuê — Phiên bản V2

Ứng dụng Web App (PWA) quản lý 9 phòng trọ giao diện **Kính lỏng (Liquid Glass)**, hỗ trợ chế độ Sáng/Tối, phân quyền Quản trị viên & Người thuê theo từng phòng, đính kèm ảnh công tơ điện & bill thanh toán chất lượng gốc lên Google Drive, xuất phiếu thu PNG kèm mã QR, và bảo mật link máy chủ qua **Cloudflare Pages Functions**.

## Cấu trúc thư mục dự án

```text
├── functions/
│   └── api.js        # Cloudflare Pages Function ẩn link Google Apps Script (đọc biến GAS_URL)
├── index.html        # Ứng dụng Web App hoàn chỉnh (V2)
├── manifest.json     # Cấu hình PWA cài lên màn hình chính
├── sw.js             # Service Worker hỗ trợ tải nhanh & offline
├── icon-192.png      # Biểu tượng ứng dụng 192x192
├── icon-192.svg      # Biểu tượng vector 192x192
├── icon-512.png      # Biểu tượng ứng dụng 512x512
├── icon-512.svg      # Biểu tượng vector 512x512
└── README.md         # Tài liệu hướng dẫn triển khai
```

## Hướng dẫn triển khai nhanh

### Bước 1: Triển khai Google Apps Script (Backend)
1. Mở file Google Sheets quản lý nhà trọ của bạn → chọn **Tiện ích mở rộng → Apps Script**.
2. Xóa code mặc định, dán toàn bộ nội dung file `Code_V2.gs` vào và bấm **Lưu**.
3. Chạy hàm `initSheets` 1 lần và cấp quyền truy cập Google Sheets + Google Drive cho script.
4. Chọn **Triển khai → Tùy chọn triển khai mới → Ứng dụng web**:
   - **Thực thi dưới dạng:** Tôi (tài khoản Google của bạn)
   - **Ai có quyền truy cập:** Bất kỳ ai (Anyone)
5. Sao chép link `/exec` vừa tạo.

### Bước 2: Ẩn link Google Apps Script trên Cloudflare Pages
1. Upload toàn bộ các file trong thư mục dự án lên GitHub và kết nối với **Cloudflare Pages**.
2. Trong dự án Cloudflare Pages, vào **Settings → Variables and Secrets → Add**.
3. Tạo biến môi trường:
   - **Variable name:** `GAS_URL`
   - **Value:** Dán link Google Apps Script `/exec` của bạn
   - Bấm **Encrypt (Secret)** để mã hóa kín và bấm **Save**, sau đó **Retry deployment** (triển khai lại).
4. Mặc định Web App sẽ gọi qua `/api` (file `functions/api.js`), link thật hoàn toàn không xuất hiện trong mã nguồn hay trên trình duyệt.

### Bước 3: Đăng nhập & Thiết lập ban đầu
- **Tài khoản Quản trị viên mặc định:**
  - Tài khoản: `admin`
  - Mật khẩu: `123456`
  - Mã Quản trị viên (PIN mở khóa sửa): `123456`
- Sau khi đăng nhập trên thiết bị mới, ô **Đồng bộ** ở góc trên sẽ **nhấp nháy xanh - vàng - đỏ** → Bấm vào đó để kéo dữ liệu từ Google Sheets xuống trước, sau đó hệ thống tự mở khóa đồng bộ 2 chiều.
- Vào icon **Bánh răng (Cài đặt quản trị viên)** để:
  1. Đổi mật khẩu & Mã Quản trị viên.
  2. Điền thông tin ngân hàng & tải lên **ảnh mã QR** cho phiếu thu.
  3. Tạo tài khoản đăng nhập riêng cho từng phòng thuê.
  4. Kéo xuống mục **Đồng bộ máy chủ** ở cuối để dán **Link thư mục Google Drive** lưu ảnh đồng hồ điện và bill thanh toán chất lượng gốc.
