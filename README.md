# Reanty — Real Estate Landing Page

Dự án hiện thực hóa giao diện Landing Page Bất động sản cao cấp từ bản thiết kế Figma **`testsample01`** (Frame `01_home-01`, kích thước gốc `1920x9850px`).

Mã nguồn được xây dựng theo **tiêu chuẩn Fastcoding & UI/UX Pro Max**:
- **Code thuần 100%:** Sử dụng HTML5 Semantic và Vanilla CSS3 (không dùng Bootstrap, Tailwind, hay bất kỳ CSS/JS framework nào).
- **Đường dẫn tương đối (Relative Paths):** Toàn bộ liên kết mã nguồn (`./css/`, `./images/`, `./js/`) đều là đường dẫn tương đối, bảo đảm chạy độc lập hoàn hảo trên mọi môi trường và hosting con.
- **Web Responsive toàn diện:** Tối ưu mượt mà trên cả màn hình Desktop (PC) và Smartphone (SP), không có lỗi tràn thanh cuộn ngang (No horizontal scrollbar).
- **Mã nguồn sạch, chuẩn ngữ nghĩa:** Có đầy đủ cấu trúc BEM, biến màu `:root` CSS, accessibility (WCAG 2.2 AA), touch targets $\ge 44\text{px}$.

---

## 📁 Cấu trúc Thư mục

```text
test-fastcoding/
├── index.html              # Mã nguồn HTML5 Semantic đầy đủ 14 sections
├── vercel.json             # File cấu hình deploy Vercel (bảo mật + caching)
├── css/
│   ├── reset.css           # Modern CSS Reset triệt tiêu lỗi trình duyệt
│   └── style.css           # Hệ thống CSS Variables, Layout, Responsive PC & SP
├── js/
│   └── main.js             # Xử lý Hamburger Menu SP, Tab lọc, Gallery switcher, Form
├── images/                 # Trọn bộ 33 SVG icons vector nét căng & hình ảnh chất lượng cao
└── README.md               # Tài liệu hướng dẫn sử dụng và nộp bài
```

---

## 🚀 Hướng dẫn Triển khai lên Vercel (Máy chủ thử nghiệm)

Bạn có thể đưa trang web lên Vercel làm **"URL máy chủ thử nghiệm"** theo một trong 2 cách cực kỳ nhanh chóng:

### Cách 1: Sử dụng Vercel CLI (Nhanh nhất - dưới 1 phút)
1. Mở Terminal (PowerShell hoặc Command Prompt) ngay tại thư mục dự án này:
   ```bash
   cd "c:\Users\ngtam\Downloads\test fastcoding"
   ```
2. Cài đặt và chạy lệnh deploy của Vercel (nếu chưa cài):
   ```bash
   npx vercel
   ```
3. Nhấn `Enter` để đồng ý các tùy chọn mặc định (Set up and deploy? $\rightarrow$ `Y`, Which scope? $\rightarrow$ chọn tài khoản của bạn, Link to existing project? $\rightarrow$ `N`, Project name $\rightarrow$ `reanty-landing-page`, Directory $\rightarrow$ `./`).
4. Vercel sẽ cung cấp ngay một đường link dạng:
   👉 **`https://reanty-landing-page.vercel.app`** (Đây chính là URL máy chủ thử nghiệm để nộp bài).

---

### Cách 2: Triển khai qua GitHub (Chuẩn quản lý mã nguồn)
1. Khởi tạo Git repo và đẩy code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete reanty real estate landing page pure html css"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/reanty-fastcoding.git
   git push -u origin main
   ```
2. Đăng nhập vào [Vercel Dashboard](https://vercel.com).
3. Bấm **"Add New..."** $\rightarrow$ **"Project"** $\rightarrow$ Chọn repository vừa tạo.
4. Ở phần **Framework Preset**, chọn **Other** (hoặc để mặc định).
5. Bấm **Deploy**. Sau 15 giây, bạn sẽ nhận được đường link live demo.

---

## 📦 Hướng dẫn Nộp bài (Theo đúng yêu cầu đề bài)

Khi nộp bài thi, đính kèm đầy đủ 2 thông tin theo đúng yêu cầu đề bài:
1. **URL máy chủ thử nghiệm (Test Server URL):**
   👉 **`https://fastcodingtest-mocha.vercel.app`**
2. **Data Server (Mã nguồn):**
   👉 **`https://github.com/tamak4go/fastcodingtest`**
   *(Hoặc file nén đính kèm `reanty-fastcoding.zip`)*

---

## 🌟 Danh sách Tính năng & Chi tiết Kỹ thuật Hoàn thiện

1. **Top Bar:** Địa chỉ, email và cụm icon mạng xã hội vector SVG nét căng.
2. **Main Navigation:** Logo thương hiệu, menu ngang trên PC; **Hamburger menu trượt** êm ái trên SP/Mobile với accessibility (`aria-expanded`).
3. **Hero Section:** Tiêu đề lớn, nút CTA membership, mũi tên uốn lượn trang trí, khối ảnh lớn kèm thẻ doanh thu nổi (`$7,454.21`), nút video (`How it works ▶`) và bộ 3 ảnh thumbnail tương tác (`HOUSE 1`, `HOUSE 2`, `HOUSE 3`).
4. **Guides / Categories:** 3 thẻ dịch vụ hướng dẫn, thẻ giữa active màu cam nổi bật.
5. **Dream Living Spaces:** Khối ảnh ghép có gắn huy hiệu `★ 5 Star Rating` và danh sách 3 tính năng có icon.
6. **Today Sells Properties:** Danh sách gạch đầu dòng cam + bộ chỉ số phân trang + lưới 3 ảnh mosaic bất đối xứng.
7. **Services Provide For You:** Lưới 6 thẻ dịch vụ hiện đại có hiệu ứng nâng thẻ khi hover.
8. **Featured Property:** Bộ lọc Tab (`Appartment`, `Vila`, `Land`) hoạt động bằng Vanilla JS, 3 thẻ bất động sản kèm giá và nút mũi tên cam.
9. **Full-width Showcase Banner:** Khối banner toàn chiều ngang với thẻ nổi chi tiết căn nhà (`$4,000`, 2 beds, 2 baths, 500sqf) và badge tròn `UNIT NO. 9A`.
10. **Testimonials:** Đánh giá khách hàng kèm chân dung có khung nền cam lệch tầng, dấu ngoặc kép trích dẫn, 5 sao vàng và 2 nút mũi tên chuyển slide.
11. **Projects & Newsletter:** 3 thẻ thành phố (`San Francisco`, `Washington DC`, `Chicago`) có lớp phủ tối gradient + Thanh đăng ký email dạng pill.
12. **From Our Blog:** 3 bài viết tin tức kèm thẻ tag `Rentals` và thông tin tác giả.
13. **Contact Us:** Khối minh họa và form liên hệ chuẩn form controls (`Name`, `Email`, `Message`, nút `Send` có phản hồi trạng thái gửi).
14. **Footer:** Chân trang nền tối Dark Navy 5 cột, đầy đủ thông tin trụ sở, form nhận tin nhanh, bản quyền và dải viền cam chân trang.
