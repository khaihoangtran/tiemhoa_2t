# Landing Page Hoa 8/3 - Ads Focus

Landing page static tối ưu chuyển đổi cho Facebook Ads / TikTok Ads với mục tiêu gọi điện hoặc nhắn Zalo.

## Cấu trúc thư mục

```
/
 ├── index.html
 ├── assets/
 │   ├── css/style.css
 │   ├── js/main.js
 │   └── images/
 ├── _headers
 └── README.md
```

## Điểm chính của phiên bản này

- Mobile-first
- Không hiển thị giá
- Không giỏ hàng
- CTA rõ ràng ngay hero và cuối trang
- Sticky CTA dưới mobile
- Floating Zalo button
- Countdown urgency đến 07/03

## Cách đổi hotline / Zalo

Mở `index.html`, thay toàn bộ:

- `href="tel:0909123456"`
- `href="https://zalo.me/0909123456"`

## Cách thay ảnh sản phẩm thật

1. Upload ảnh vào `assets/images/`
2. Trong `index.html`, đổi `src` ảnh sang file local, ví dụ:

```html
<img src="assets/images/hoa-01.jpg" alt="Mẫu hoa 8/3" loading="lazy" width="900" height="1200" />
```

Khuyến nghị giữ tỉ lệ ảnh 3:4 (portrait) để card đồng đều.

## Cách chỉnh deadline countdown

Trong `index.html`, tìm `.countdown` và sửa `data-deadline`:

```html
data-deadline="2026-03-07T23:59:59+07:00"
```

## Chèn tracking quảng cáo

Trong `index.html` đã có placeholder:

- `<!-- Facebook Pixel -->`
- `<!-- Google Tag Manager -->`

Dán mã tracking thực tế vào đúng vị trí này.

## Đổi màu nếu cần

Mở `assets/css/style.css`, chỉnh các biến ở `:root`:

- `--bg`
- `--surface`
- `--surface-soft`
- `--surface-soft-2`
- `--accent`
- `--accent-dark`
- `--border`

## Deploy GitHub + Cloudflare Pages

Workflow đã có sẵn tại `.github/workflows/deploy-cloudflare-pages.yml`.

### 1) Tạo project Cloudflare Pages

1. Vào Cloudflare Pages -> Create a project.
2. Tạo project mới (hoặc dùng project sẵn có) cho repo này.

### 2) Cấu hình GitHub repository secrets/variables

Trong GitHub repo -> Settings -> Secrets and variables -> Actions:

- **Secret** `CLOUDFLARE_API_TOKEN`
- **Secret** `CLOUDFLARE_ACCOUNT_ID`
- **Variable** `CLOUDFLARE_PROJECT_NAME`

`CLOUDFLARE_API_TOKEN` cần quyền deploy Pages (Account + Pages write).

### 3) Deploy

- Push lên branch `main` để tự động deploy production.
- Hoặc chạy thủ công từ tab Actions với workflow **Deploy to Cloudflare Pages**.

## Checklist trước khi chạy Ads

- Kiểm tra nút Gọi và Zalo hoạt động trên mobile
- Kiểm tra sticky CTA hiển thị đúng
- Kiểm tra countdown chạy đúng timezone
- Thay ảnh placeholder feedback bằng ảnh thật
- Gắn Facebook Pixel và GTM
