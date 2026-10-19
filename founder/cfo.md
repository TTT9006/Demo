# Ghi chú của Giám đốc Tài chính (CFO Note)

> **Mục tiêu của bạn:** Chi phí server 0đ (Render), thu hồi vốn 1.000.000đ và **lãi ròng > 500.000đ**.  
> **Tổng doanh thu cần đạt:** **1.500.000 VNĐ** (1tr vốn + 500k lãi).

- **Số lượng đơn hàng cần bán để đạt mục tiêu:**
  - Nếu bán gói **Pro (80.000đ)**: Bạn chỉ cần **19 khách hàng** ($19 \times 80.000 = 1.520.000đ$).
  - Nếu bán gói **Plus (50.000đ)**: Bạn cần **30 khách hàng** ($30 \times 50.000 = 1.500.000đ$).
- **Biên lợi nhuận gộp:** **98%** (chỉ mất ~1.5% phí giao dịch ngân hàng/cổng thanh toán).
- **Điểm hòa vốn:** **13 khách hàng** ở gói 80k (hoặc 20 khách ở gói 50k) để thu hồi đủ 1.000.000đ tiền vốn ban đầu.

---

### Cảnh báo rủi ro kỹ thuật từ CFO & Kỹ sư: Bẫy "Render 0đ"
1. **Hiện tượng Sleep / Cold Start (50 - 90 giây):**
   - Render Free Web Service sẽ **tự động ngủ (spin down)** sau 15 phút không có truy cập. Khi khách hàng bấm vào web, họ sẽ phải chờ **gần 1 phút** để server thức dậy. Tỷ lệ người dùng thoát trang ngay lập tức (Bounce rate) khi web load quá 5 giây là trên 70%.
2. **Cơ sở dữ liệu Render Free bị xóa sau 30 ngày:**
   - PostgreSQL trên Render Free sẽ bị xóa vĩnh viễn sau 30 ngày nếu không gia hạn.
3. **Khuyến nghị kiến trúc 0đ tối ưu để không mất khách:**
   - **Frontend:** Đưa lên **Vercel** hoặc **Cloudflare Pages** (0đ trọn đời, tải trang tức thì, có CDN tại Việt Nam, không bao giờ ngủ).
   - **Database & Auth:** Dùng **Supabase** hoặc **Neon.tech** (Free tier vĩnh viễn, không tự xóa sau 30 ngày).

---

# Unit economics: Web tự học tiếng Nhật N5-N2 (Gói Pro 80k - Render 0đ)

Every number below comes from the input file. Nothing is looked up or guessed.

## One tài khoản

| line | per tài khoản |
| --- | ---: |
| Price | $80,000.00 |
| Phí cổng thanh toán / ngân hàng (1.5%) | -$1,200.00 |
| **Contribution** (what each tài khoản leaves to pay the fixed costs) | **$78,800.00** (98%) |

## The margin that matters

Fixed costs: $0 a month (Hosting Render (Free tier) $0, Database Neon / Supabase (Free tier) $0).

- **Break-even: 0 tài khoảns a day.** Below that you lose money every month.
- **Profit margin at your plan** (1 a day): **98%** of every sale, after every cost.
- Capacity: 100 a day.

## Year 1, month by month

| month | tài khoảns a day | revenue | profit | cumulative (after $1,000,000 startup) |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 0 | $480,000 | $472,800 | -$527,200 |
| 2 | 0 | $720,000 | $709,200 | $182,000 |
| 3 | 0 | $1,200,000 | $1,182,000 | $1,364,000 |
| 4 | 1 | $1,680,000 | $1,654,800 | $3,018,800 |
| 5 | 1 | $2,400,000 | $2,364,000 | $5,382,800 |
| 6 | 1 | $2,400,000 | $2,364,000 | $7,746,800 |
| 7 | 1 | $2,400,000 | $2,364,000 | $10,110,800 |
| 8 | 1 | $2,400,000 | $2,364,000 | $12,474,800 |
| 9 | 1 | $2,400,000 | $2,364,000 | $14,838,800 |
| 10 | 1 | $2,400,000 | $2,364,000 | $17,202,800 |
| 11 | 1 | $2,400,000 | $2,364,000 | $19,566,800 |
| 12 | 1 | $2,400,000 | $2,364,000 | $21,930,800 |

- **Year 1 operating profit: $22,930,800** on $23,280,000 of revenue.
- After the $1,000,000 startup spend: $21,930,800.
- Startup money earned back: month 2.
- Cash you need before it pays for itself: **$1,000,000**.

## What if

| scenario | margin at plan | break-even a day | year 1 profit |
| --- | ---: | ---: | ---: |
| Base plan | 98% | 0 | $22,930,800 |
| Price -10% | 98% | 0 | $20,602,800 |
| Volume -20% | 98% | 0 | $18,344,640 |
| Unit costs +15% | 98% | 0 | $22,878,420 |

No red flags in these numbers. They are only as good as the inputs: check every cost against a real quote.
