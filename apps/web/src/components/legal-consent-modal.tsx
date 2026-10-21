import { useState, useRef, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ShieldCheck, FileText, Cookie, AlertCircle, CheckCircle2, ArrowDown, Lock } from 'lucide-react';
import { Button } from './ui';

interface LegalConsentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  busy?: boolean;
}

export function LegalConsentModal({ open, onOpenChange, onConfirm, busy = false }: LegalConsentModalProps) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'terms' | 'privacy' | 'cookies'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset scroll detection when modal reopens
  useEffect(() => {
    if (open) {
      setHasScrolledToBottom(false);
      setAgreed(false);
    }
  }, [open]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // Check if scrolled within 30px of bottom
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight <= 30;
    if (isAtBottom) {
      setHasScrolledToBottom(true);
    }
  };

  const scrollToBottom = () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={(val) => { if (!busy) onOpenChange(val); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay legal-modal-overlay" />
        <Dialog.Content className="dialog-content legal-consent-dialog" aria-describedby="legal-modal-desc">
          <header className="legal-modal-header">
            <div className="legal-modal-title-group">
              <span className="eyebrow"><Lock size={12} /> BƯỚC XÁC THỰC PHÁP LÝ BẮT BUỘC</span>
              <Dialog.Title className="dialog-title">Thỏa thuận Dịch vụ & Bảo vệ Dữ liệu Cá nhân</Dialog.Title>
              <p id="legal-modal-desc" className="legal-modal-desc">
                Căn cứ <strong>Nghị định 13/2023/NĐ-CP</strong>, <strong>Luật An ninh mạng 2018</strong> và <strong>Luật Trẻ em 2016</strong>. Bạn vui lòng cuộn và đọc hết toàn bộ nội dung văn bản dưới đây trước khi đồng ý tạo tài khoản.
              </p>
            </div>
            {!busy && (
              <Dialog.Close asChild>
                <button type="button" className="dialog-close" aria-label="Đóng cửa sổ điều khoản">
                  <X size={20} />
                </button>
              </Dialog.Close>
            )}
          </header>

          <div className="legal-modal-tab-bar">
            <button
              type="button"
              className={'legal-modal-tab ' + (activeTab === 'all' ? 'active' : '')}
              onClick={() => setActiveTab('all')}
            >
              Toàn bộ văn bản (Điều khoản + NĐ 13 + Cookie)
            </button>
            <button
              type="button"
              className={'legal-modal-tab ' + (activeTab === 'terms' ? 'active' : '')}
              onClick={() => setActiveTab('terms')}
            >
              <FileText size={14} /> Điều khoản
            </button>
            <button
              type="button"
              className={'legal-modal-tab ' + (activeTab === 'privacy' ? 'active' : '')}
              onClick={() => setActiveTab('privacy')}
            >
              <ShieldCheck size={14} /> Bảo mật NĐ 13
            </button>
            <button
              type="button"
              className={'legal-modal-tab ' + (activeTab === 'cookies' ? 'active' : '')}
              onClick={() => setActiveTab('cookies')}
            >
              <Cookie size={14} /> Cookie
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="legal-modal-scroll-area"
            tabIndex={0}
            role="region"
            aria-label="Nội dung văn bản pháp lý cần cuộn đọc"
          >
            {(activeTab === 'all' || activeTab === 'terms') && (
              <section className="legal-modal-section">
                <div className="legal-section-tag">
                  <FileText size={14} /> PHẦN 1: ĐIỀU KHOẢN SỬ DỤNG DỊCH VỤ
                </div>
                <h3>1. Chấp thuận điều khoản & Độ tuổi tham gia</h3>
                <p>
                  Khi tích chọn ô đồng ý và tạo tài khoản trên Wakaba, bạn xác lập một hợp đồng điện tử có giá trị pháp lý theo <strong>Luật Giao dịch điện tử 2023</strong>.
                  Người dùng phải từ <strong>đủ 16 tuổi trở lên</strong> để tự mình đăng ký tài khoản. Trường hợp dưới 16 tuổi (trẻ em theo Điều 1 Luật Trẻ em 2016), việc đăng ký bắt buộc phải có sự đồng ý của cha, mẹ hoặc người giám hộ hợp pháp.
                </p>

                <h3>2. Bản quyền nội dung & Dữ liệu</h3>
                <p>
                  Toàn bộ ngữ pháp N5–N1, câu ví dụ và bài tập thực hành được tổng hợp bám sát chuẩn giáo trình JLPT từ các tài liệu tham khảo mở trên internet phục vụ việc học tập cá nhân. Dữ liệu từ điển được dẫn nguồn theo giấy phép Creative Commons CC BY-SA 4.0 (JMdict/EDRDG) và nét vẽ chữ Hán CC BY-SA 3.0 (KanjiVG).
                </p>

                <h3>3. Hành vi bị nghiêm cấm theo Luật An ninh mạng 2018</h3>
                <p>
                  Nghiêm cấm mọi hành vi truyền tải nội dung vi phạm pháp luật Việt Nam, sử dụng bot/crawler/scraper thu thập dữ liệu trái phép, can thiệp vào máy chủ, tấn công từ chối dịch vụ (DDoS) hoặc gian lận kết quả học tập.
                </p>

                <h3>4. Giới hạn trách nhiệm & Giải quyết tranh chấp</h3>
                <p>
                  Nền tảng được cung cấp nhằm mục đích giáo dục cá nhân. Mọi tranh chấp phát sinh sẽ được giải quyết dựa trên thương lượng thiện chí hoặc đưa ra Tòa án có thẩm quyền tại Việt Nam theo luật định.
                </p>
              </section>
            )}

            {(activeTab === 'all' || activeTab === 'privacy') && (
              <section className="legal-modal-section">
                <div className="legal-section-tag">
                  <ShieldCheck size={14} /> PHẦN 2: CHÍNH SÁCH BẢO VỆ DỮ LIỆU CÁ NHÂN (NGHỊ ĐỊNH 13/2023/NĐ-CP)
                </div>
                <h3>1. Bên Kiểm soát và Xử lý dữ liệu cá nhân</h3>
                <p>
                  Đơn vị vận hành Ứng dụng Học tiếng Nhật Wakaba (若葉). Bộ phận phụ trách bảo vệ dữ liệu cá nhân (DPO): Email tiếp nhận <code>privacy@wakaba.local</code>.
                </p>

                <h3>2. Dữ liệu cá nhân thu thập (Điều 2 Khoản 3 NĐ 13)</h3>
                <p>
                  Wakaba <strong>chỉ thu thập dữ liệu cá nhân cơ bản tối thiểu</strong>: Tên hiển thị, Địa chỉ email, Mật khẩu đã được mã hóa bảo mật (bcrypt salt 12), Ảnh đại diện, và dữ liệu tiến độ học tập (thẻ từ vựng, điểm số bài thi JLPT, bài tập ngữ pháp).
                </p>
                <div className="legal-modal-note-box">
                  <strong>Cam kết quan trọng:</strong> Wakaba KHÔNG thu thập bất kỳ dữ liệu cá nhân nhạy cảm nào (Điều 2 Khoản 4 NĐ 13) như tình trạng tài chính, tôn giáo, quan điểm chính trị, sinh trắc học hoặc định vị vị trí địa lý.
                </div>

                <h3>3. Mục đích & Nguyên tắc xử lý dữ liệu (Điều 3 & Điều 13 NĐ 13)</h3>
                <p>
                  Dữ liệu được xử lý nhằm duy trì dịch vụ học tiếng Nhật, cá nhân hóa thuật toán lặp lại ngắt quãng (SRS), bảo vệ tài khoản chống tấn công xâm nhập và thực thi các quyền của chủ thể dữ liệu. <strong>Wakaba tuyệt đối KHÔNG bán, cho thuê hay chia sẻ dữ liệu cá nhân cho bên thứ ba vì mục đích tiếp thị hoặc thương mại.</strong>
                </p>

                <h3>4. Mười một (11) quyền của Chủ thể dữ liệu (Điều 9 NĐ 13)</h3>
                <p>
                  Người dùng có trọn vẹn 11 quyền theo luật định: Quyền được biết, Quyền đồng ý, Quyền truy cập thông tin, Quyền rút lại sự đồng ý, Quyền xóa dữ liệu (Right to be forgotten), Quyền hạn chế xử lý, Quyền cung cấp dữ liệu (tải bản sao số JSON), Quyền phản đối xử lý, Quyền khiếu nại/tố cáo/khởi kiện, Quyền yêu cầu bồi thường thiệt hại và Quyền tự bảo vệ.
                </p>

                <h3>5. Thời hạn lưu trữ & Quyền xóa dữ liệu (Điều 16 NĐ 13)</h3>
                <p>
                  Dữ liệu cá nhân được lưu trữ chừng nào tài khoản còn hoạt động. Khi bạn bấm "Xóa tài khoản" tại trang Hồ sơ, toàn bộ dữ liệu cá nhân và tiến độ sẽ được xóa vĩnh viễn trong thời hạn không quá <strong>72 giờ</strong>.
                </p>

                <h3>6. Biện pháp an toàn kỹ thuật (Điều 38 NĐ 13)</h3>
                <p>
                  Áp dụng mã hóa mật khẩu một chiều bcrypt 12 vòng, băm SHA-256 đối với mã phiên làm việc, giao thức truyền tải bảo mật HTTPS/HSTS, chính sách Content Security Policy (CSP), và ngăn chặn tấn công dò quét mật khẩu bằng cơ chế Rate Limiting.
                </p>
              </section>
            )}

            {(activeTab === 'all' || activeTab === 'cookies') && (
              <section className="legal-modal-section">
                <div className="legal-section-tag">
                  <Cookie size={14} /> PHẦN 3: CHÍNH SÁCH COOKIE & BỘ NHỚ CỤC BỘ (TRANG RIÊNG)
                </div>
                <h3>1. Cookie kỹ thuật thiết yếu</h3>
                <p>
                  Wakaba chỉ sử dụng duy nhất 01 cookie chính chủ là <code>wakaba_session</code> phục vụ mục đích kỹ thuật thiết yếu để nhận diện phiên làm việc đăng nhập của bạn, tồn tại tối đa 30 ngày hoặc kết thúc ngay khi bấm đăng xuất. Cookie được bảo vệ bởi các thuộc tính <code>HttpOnly</code>, <code>SameSite=Lax</code> và <code>Secure</code>.
                </p>

                <h3>2. Không cookie theo dõi bên thứ ba</h3>
                <p>
                  Wakaba KHÔNG sử dụng cookie của bên thứ ba, không nhúng mã theo dõi quảng cáo từ Google, Facebook hay mạng tiếp thị nào.
                </p>

                <h3>3. Bộ nhớ cục bộ (Local Storage)</h3>
                <p>
                  Lưu trữ các tiện ích giao diện: <code>theme</code> (giao diện sáng/tối), <code>annotationMode</code> (chế độ furigana/romaji), và <code>wakaba_cookie_consent</code> (ghi nhớ đã đọc thông báo cookie).
                </p>
              </section>
            )}

            <div className="legal-nonprofit-banner">
              Hiện tại web chỉ phục vụ mục đích học tập, không kinh doanh bất kì mặt hàng nào!
            </div>

            <div className="legal-modal-scroll-end">
              <CheckCircle2 size={20} />
              <span>Bạn đã đến cuối văn bản pháp lý. Bây giờ bạn có thể tích chọn vào ô đồng ý bên dưới.</span>
            </div>
          </div>

          <div className="legal-modal-footer">
            {!hasScrolledToBottom ? (
              <div className="legal-modal-hint-box warning">
                <AlertCircle size={17} />
                <div className="legal-modal-hint-text">
                  <strong>Vui lòng cuộn và đọc hết nội dung văn bản bên trên</strong>
                  <p>Để đảm bảo quyền được biết theo Điều 9 Nghị định 13/2023/NĐ-CP, ô đồng ý chỉ được kích hoạt khi bạn đã cuộn đọc đến dòng cuối cùng.</p>
                </div>
                <Button variant="secondary" size="small" onClick={scrollToBottom} className="legal-scroll-btn">
                  <ArrowDown size={14} /> Cuộn xuống cuối
                </Button>
              </div>
            ) : (
              <div className="legal-modal-hint-box success">
                <CheckCircle2 size={17} />
                <div className="legal-modal-hint-text">
                  <strong>Đã hoàn thành việc đọc toàn bộ văn bản pháp lý</strong>
                  <p>Vui lòng tích chọn ô xác nhận dưới đây để kích hoạt nút hoàn tất đăng ký.</p>
                </div>
              </div>
            )}

            <label className={'legal-consent-checkbox-wrap ' + (!hasScrolledToBottom ? 'disabled' : '')}>
              <input
                type="checkbox"
                id="legal-agreement-checkbox"
                disabled={!hasScrolledToBottom || busy}
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span className="legal-consent-label">
                Tôi xác nhận đã đọc toàn bộ, hiểu rõ và tự nguyện đồng ý với <strong>Điều khoản sử dụng</strong>, <strong>Chính sách bảo mật (theo Nghị định 13/2023/NĐ-CP)</strong> và <strong>Chính sách Cookie</strong> của Wakaba. Tôi xác nhận mình từ <strong>đủ 16 tuổi trở lên</strong> hoặc <strong>đã có sự đồng ý của cha, mẹ/người giám hộ hợp pháp</strong>.
              </span>
            </label>

            <div className="legal-modal-actions">
              <Button
                variant="ghost"
                disabled={busy}
                onClick={() => onOpenChange(false)}
                type="button"
              >
                Quay lại sửa thông tin
              </Button>
              <Button
                variant="primary"
                disabled={!agreed || !hasScrolledToBottom || busy}
                onClick={onConfirm}
                type="button"
                className="legal-submit-btn"
              >
                {busy ? 'Đang khởi tạo tài khoản…' : 'Đồng ý & Hoàn tất tạo tài khoản'}
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
