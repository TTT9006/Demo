import json
import os

answers = [
    {
        "id": "P001",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "convenience",
        "reason": "Mình từng bỏ cuộc với Anki vì giao diện quá phức tạp. Wakaba có giao diện tiếng Việt sạch sẽ, lại cho học thử trọn gói N5 miễn phí nên mình sẵn sàng bỏ 50k để học tiếp N3.",
        "objection": "Có cho học thử bài bản không hay chỉ vài từ vựng rồi bắt trả tiền?",
        "would_change_my_mind": "Được học thử trọn vẹn N5 miễn phí để kiểm chứng trước khi mua.",
        "price_too_cheap": 20000,
        "price_cheap": 40000,
        "price_expensive": 90000,
        "price_too_expensive": 150000
    },
    {
        "id": "P002",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "habit",
        "reason": "Mình đang dùng Mazii và app Migii trên điện thoại quen rồi, mở lên là tra được ngay. Dùng web trên điện thoại hơi bất tiện khi di chuyển.",
        "objection": "Mazii, Migii và Anki miễn phí đầy ra, web này có gì hơn để tôi phải bỏ tiền?",
        "would_change_my_mind": "Có ứng dụng di động mượt mà tải được từ App Store / Google Play.",
        "price_too_cheap": 25000,
        "price_cheap": 50000,
        "price_expensive": 120000,
        "price_too_expensive": 200000
    },
    {
        "id": "P003",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "price",
        "reason": "80.000đ trọn đời cho toàn bộ kiến thức đến N2 là quá hời so với việc mua sách Minna hay các khóa học tiền triệu, miễn là không bắt mình gia hạn hàng tháng.",
        "objection": "Gói 80k là trả một lần dùng mãi mãi hay mỗi tháng/mỗi năm đều phải đóng lại?",
        "would_change_my_mind": "Ghi rõ ràng là trả 1 lần dùng vĩnh viễn không thu phí ẩn.",
        "price_too_cheap": 30000,
        "price_cheap": 60000,
        "price_expensive": 150000,
        "price_too_expensive": 250000
    },
    {
        "id": "P004",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "need",
        "reason": "Mình hay bị nản sau 1 tuần. Một trang web tự học dù giao diện đẹp đến mấy mà không có người nhắc nhở hay tương tác thì mình mua xong cũng vứt đó.",
        "objection": "Mazii, Migii và Anki miễn phí đầy ra, web này có gì hơn để tôi phải bỏ tiền?",
        "would_change_my_mind": "Có tính năng gửi nhắc nhở qua Zalo/Email hàng ngày hoặc bảng xếp hạng thi đua.",
        "price_too_cheap": 30000,
        "price_cheap": 70000,
        "price_expensive": 180000,
        "price_too_expensive": 300000
    },
    {
        "id": "P005",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "habit",
        "reason": "Mình học theo giáo trình sách giấy Minna và app Mazii đã thành thói quen 2 năm nay rồi, đổi sang web khác lại phải làm quen từ đầu.",
        "objection": "Mazii, Migii và Anki miễn phí đầy ra, web này có gì hơn để tôi phải bỏ tiền?",
        "would_change_my_mind": "Tính năng import từ vựng từ sách Minna no Nihongo hoặc đồng bộ với Mazii.",
        "price_too_cheap": 20000,
        "price_cheap": 50000,
        "price_expensive": 100000,
        "price_too_expensive": 180000
    },
    {
        "id": "P006",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "trust",
        "reason": "Giá 80k rất rẻ nhưng mình băn khoăn không biết đội ngũ phát triển là ai, nội dung ngữ pháp và đề thi có được giáo viên bản xứ thẩm định không.",
        "objection": "Giá 50k - 80k thì rẻ thật nhưng chất lượng dịch và giải thích ngữ pháp có chuẩn JLPT không hay lấy từ mạng?",
        "would_change_my_mind": "Có thông tin kiểm định nội dung từ giáo viên hoặc đối chiếu đề thi thật các năm.",
        "price_too_cheap": 40000,
        "price_cheap": 80000,
        "price_expensive": 200000,
        "price_too_expensive": 350000
    },
    {
        "id": "P007",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "quality",
        "reason": "80k chỉ bằng 2 cốc cà phê Highland. Web không có quảng cáo rác, giao diện tối giản kiểu Nhật rất dễ chịu, giúp mình tập trung ôn nhanh để thi N2.",
        "objection": "Tự học một mình rất dễ nản, web có ai nhắc nhở hay hỗ trợ giải đáp khi không hiểu không?",
        "would_change_my_mind": "",
        "price_too_cheap": 50000,
        "price_cheap": 100000,
        "price_expensive": 300000,
        "price_too_expensive": 500000
    },
    {
        "id": "P008",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "price",
        "reason": "Hiện tại gói Free cho học thử N5 là đủ cho mình rồi. Mình sinh viên chưa có thu nhập nên sẽ tận dụng đồ free trước chừng nào cần thi mới tính.",
        "objection": "Gói 80k là trả một lần dùng mãi mãi hay mỗi tháng/mỗi năm đều phải đóng lại?",
        "would_change_my_mind": "Giảm giá đặc biệt cho sinh viên còn 39k hoặc chia sẻ bạn bè được tặng gói Plus.",
        "price_too_cheap": 15000,
        "price_cheap": 35000,
        "price_expensive": 80000,
        "price_too_expensive": 150000
    },
    {
        "id": "P009",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "quality",
        "reason": "Mình đã so sánh nhiều web thì thấy Wakaba có thuật toán SM-2 lặp lại ngắt quãng khoa học và không bị giật lag. Giá 50k là hoàn toàn hợp túi tiền sinh viên.",
        "objection": "Có cho học thử bài bản không hay chỉ vài từ vựng rồi bắt trả tiền?",
        "would_change_my_mind": "",
        "price_too_cheap": 20000,
        "price_cheap": 45000,
        "price_expensive": 90000,
        "price_too_expensive": 160000
    },
    {
        "id": "P010",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "need",
        "reason": "Mình mới học thử N5 vỡ lòng, phần miễn phí trên web đã đủ dùng. Khi nào học lên N3 mình mới cân nhắc mua tiếp.",
        "objection": "Có cho học thử bài bản không hay chỉ vài từ vựng rồi bắt trả tiền?",
        "would_change_my_mind": "Gói combo tiết kiệm hoặc tặng kèm bộ tài liệu ngữ pháp PDF độc quyền.",
        "price_too_cheap": 30000,
        "price_cheap": 60000,
        "price_expensive": 150000,
        "price_too_expensive": 250000
    },
    {
        "id": "P011",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "convenience",
        "reason": "Mình cần học flashcard mỗi ngày nhưng ghét cài đặt lằng nhằng của Anki. Wakaba mở trình duyệt lên học ngay, lưu tiến độ tự động, 80k cho Pro là quá đáng giá.",
        "objection": "Mazii, Migii và Anki miễn phí đầy ra, web này có gì hơn để tôi phải bỏ tiền?",
        "would_change_my_mind": "",
        "price_too_cheap": 30000,
        "price_cheap": 70000,
        "price_expensive": 160000,
        "price_too_expensive": 250000
    },
    {
        "id": "P012",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "convenience",
        "reason": "Mình chủ yếu học trên điện thoại khi đi xe buýt. Web mobile dù tốt nhưng không thể tiện và mượt bằng app native có thông báo đẩy.",
        "objection": "Học trên web di động có mượt và tiện bằng tải ứng dụng từ App Store/Google Play không?",
        "would_change_my_mind": "Có ứng dụng PWA cài trực tiếp ra màn hình chính và hỗ trợ học offline.",
        "price_too_cheap": 20000,
        "price_cheap": 50000,
        "price_expensive": 100000,
        "price_too_expensive": 180000
    },
    {
        "id": "P013",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "need",
        "reason": "Mình đang cần bằng N3 gấp để kịp làm hồ sơ xuất khẩu lao động tháng 12. 80k có đề thi chấm điểm tự động và bấm giờ là mình mua ngay không cần nghĩ.",
        "objection": "Mazii, Migii và Anki miễn phí đầy ra, web này có gì hơn để tôi phải bỏ tiền?",
        "would_change_my_mind": "",
        "price_too_cheap": 25000,
        "price_cheap": 60000,
        "price_expensive": 140000,
        "price_too_expensive": 220000
    },
    {
        "id": "P014",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "habit",
        "reason": "Mình hay mua các khóa học online rồi để đó không học. Giao diện đẹp nhưng nếu không có lộ trình ép tiến độ thì mình cũng sẽ bỏ cuộc sau vài ngày.",
        "objection": "Học trên web di động có mượt và tiện bằng tải ứng dụng từ App Store/Google Play không?",
        "would_change_my_mind": "Có chế độ thử thách 30 ngày hoàn tiền nếu hoàn thành đủ bài học.",
        "price_too_cheap": 30000,
        "price_cheap": 70000,
        "price_expensive": 180000,
        "price_too_expensive": 300000
    },
    {
        "id": "P015",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "habit",
        "reason": "Mình quen viết tay ra giấy và học theo sách Minna ở trung tâm. Học trên web luyện viết chữ bằng chuột cảm giác rất gượng gạo.",
        "objection": "Học trên web di động có mượt và tiện bằng tải ứng dụng từ App Store/Google Play không?",
        "would_change_my_mind": "Tập trung vào phần nghe hiểu và ngữ pháp thay vì luyện viết chữ trên web.",
        "price_too_cheap": 20000,
        "price_cheap": 45000,
        "price_expensive": 100000,
        "price_too_expensive": 170000
    },
    {
        "id": "P016",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "quality",
        "reason": "Tính năng theo dõi số liệu học tập và luyện đề thi có giải thích giúp mình biết rõ điểm yếu phần nào để bù đắp trước kỳ thi. 80k là mức giá quá hợp lý.",
        "objection": "Tự học một mình rất dễ nản, web có ai nhắc nhở hay hỗ trợ giải đáp khi không hiểu không?",
        "would_change_my_mind": "",
        "price_too_cheap": 30000,
        "price_cheap": 70000,
        "price_expensive": 150000,
        "price_too_expensive": 240000
    },
    {
        "id": "P017",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "price",
        "reason": "Mình là sinh viên năm nhất, 50k gói Plus bằng đúng 2 bữa cơm trưa để học ngữ pháp và từ vựng N3 bài bản thì mình ủng hộ ngay.",
        "objection": "Học trên web di động có mượt và tiện bằng tải ứng dụng từ App Store/Google Play không?",
        "would_change_my_mind": "",
        "price_too_cheap": 15000,
        "price_cheap": 40000,
        "price_expensive": 85000,
        "price_too_expensive": 140000
    },
    {
        "id": "P018",
        "buys": True,
        "purchases_first_month": 1,
        "reason_code": "convenience",
        "reason": "Dân IT như mình ngồi máy tính cả ngày, mở một tab Wakaba sạch sẽ, không quảng cáo pop-up để tranh thủ học 10 phút rất tiện. 80k không đáng để đắn đo.",
        "objection": "Mazii, Migii và Anki miễn phí đầy ra, web này có gì hơn để tôi phải bỏ tiền?",
        "would_change_my_mind": "",
        "price_too_cheap": 50000,
        "price_cheap": 90000,
        "price_expensive": 250000,
        "price_too_expensive": 400000
    },
    {
        "id": "P019",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "trust",
        "reason": "Mình cần học lên N2 để phỏng vấn công ty Nhật. Nếu web chỉ tổng hợp tài liệu trôi nổi trên mạng mà không cam kết độ chính xác thì mình thà mua sách bản quyền Shinkanzen.",
        "objection": "Giá 50k - 80k thì rẻ thật nhưng chất lượng dịch và giải thích ngữ pháp có chuẩn JLPT không hay lấy từ mạng?",
        "would_change_my_mind": "Cam kết chuẩn kiến thức theo giáo trình Soumatome/Shinkanzen Master.",
        "price_too_cheap": 40000,
        "price_cheap": 90000,
        "price_expensive": 220000,
        "price_too_expensive": 350000
    },
    {
        "id": "P020",
        "buys": False,
        "purchases_first_month": 0,
        "reason_code": "price",
        "reason": "Mình chỉ cần học từ vựng cơ bản, bản Free N5 của Wakaba đã quá tốt rồi nên mình chưa có lý do gì phải bỏ tiền mua gói Plus.",
        "objection": "Có cho học thử bài bản không hay chỉ vài từ vựng rồi bắt trả tiền?",
        "would_change_my_mind": "Khi nào học hết N5 và cần luyện thi N3 gấp.",
        "price_too_cheap": 20000,
        "price_cheap": 45000,
        "price_expensive": 100000,
        "price_too_expensive": 170000
    }
]

os.makedirs(r"d:\Demo\founder\panel\answers", exist_ok=True)
for a in answers:
    path = os.path.join(r"d:\Demo\founder\panel\answers", f"{a['id']}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(a, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {len(answers)} buyer answers.")
