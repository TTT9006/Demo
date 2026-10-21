import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('wakaba_cookie_consent') || localStorage.getItem('komorebi_cookie_consent');
      if (!consent) {
        // Small delay so it transitions in smoothly
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is disabled
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('wakaba_cookie_consent', 'true');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" role="complementary" aria-label="Thông báo về Cookie và Lưu trữ">
      <div className="cookie-banner-content">
        <div className="cookie-banner-icon">
          <Cookie size={22} />
        </div>
        <div className="cookie-banner-text">
          <p>
            <strong>Minh bạch về Cookie:</strong> Wakaba chỉ sử dụng cookie kỹ thuật thiết yếu (<code>wakaba_session</code>) để duy trì phiên đăng nhập bảo mật và bộ nhớ cục bộ để ghi nhớ tùy chọn giao diện hiển thị. Chúng tôi <strong>tuyệt đối không sử dụng cookie theo dõi quảng cáo của bên thứ ba</strong>.
          </p>
          <div className="cookie-banner-links">
            <Link to="/cookies" className="cookie-policy-link">
              Đọc Chính sách Cookie chi tiết <ArrowRight size={13} />
            </Link>
            <span className="dot-divider">•</span>
            <Link to="/privacy" className="cookie-policy-link">
              Chính sách bảo mật (NĐ 13/2023)
            </Link>
          </div>
        </div>
      </div>
      <div className="cookie-banner-actions">
        <Button size="small" variant="primary" onClick={handleAccept} className="cookie-accept-btn">
          <Check size={15} />
          Đã hiểu & Tiếp tục
        </Button>
      </div>
    </aside>
  );
}
