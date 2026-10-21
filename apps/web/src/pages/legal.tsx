import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brand } from '../components/brand';
import { ArrowLeft, ShieldCheck, FileText, Cookie, Printer, CheckCircle, Scale, Clock, Lock } from 'lucide-react';
import { Button } from '../components/ui';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  activeTab: 'terms' | 'privacy' | 'cookies';
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, subtitle, activeTab, lastUpdated = '21/10/2026', children }: LegalLayoutProps) {
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="legal-shell">
      <header className="legal-header">
        <div className="legal-header-inner">
          <Link to="/" className="brand">
            <Brand tagline />
          </Link>
          <div className="legal-header-actions">
            <Button variant="ghost" onClick={handlePrint} className="legal-action-btn" aria-label="In văn bản pháp lý" title="In văn bản pháp lý">
              <Printer size={16} />
              <span>In văn bản</span>
            </Button>
            <Button variant="secondary" onClick={handleCopyLink} className="legal-action-btn" aria-label="Chia sẻ liên kết" title="Chia sẻ liên kết">
              {copied ? <CheckCircle size={16} /> : <FileText size={16} />}
              <span>{copied ? 'Đã sao chép liên kết' : 'Chia sẻ'}</span>
            </Button>
            <Link to="/login" className="legal-back-link" aria-label="Quay lại" title="Quay lại">
              <ArrowLeft size={16} />
              <span>Quay lại</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="legal-container">
        <div className="legal-hero">
          <div className="legal-badge">
            <Scale size={14} />
            <span>Căn cứ pháp luật Việt Nam hiện hành</span>
          </div>
          <h1>{title}</h1>
          <p className="legal-subtitle">{subtitle}</p>
          <div className="legal-meta">
            <span><Clock size={14} /> Phiên bản hiệu lực: <strong>Tháng 10/2026</strong></span>
            <span>•</span>
            <span>Cập nhật lần cuối: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span>Áp dụng cho: <strong>Wakaba (若葉)</strong></span>
          </div>
        </div>

        <nav className="legal-nav" aria-label="Điều hướng các văn bản pháp lý">
          <Link
            to="/terms"
            className={'legal-nav-item ' + (activeTab === 'terms' ? 'active' : '')}
          >
            <FileText size={18} />
            <div>
              <strong>Điều khoản sử dụng</strong>
              <small>Quy tắc & cam kết người dùng</small>
            </div>
          </Link>
          <Link
            to="/privacy"
            className={'legal-nav-item ' + (activeTab === 'privacy' ? 'active' : '')}
          >
            <ShieldCheck size={18} />
            <div>
              <strong>Chính sách bảo mật</strong>
              <small>Theo Nghị định 13/2023/NĐ-CP</small>
            </div>
          </Link>
          <Link
            to="/cookies"
            className={'legal-nav-item ' + (activeTab === 'cookies' ? 'active' : '')}
          >
            <Cookie size={18} />
            <div>
              <strong>Chính sách Cookie</strong>
              <small>Cookie kỹ thuật & lưu trữ</small>
            </div>
          </Link>
        </nav>

        <article className="legal-card legal-document">
          {children}
          <div className="legal-nonprofit-banner">
            Hiện tại web chỉ phục vụ mục đích học tập, không kinh doanh bất kì mặt hàng nào!
          </div>
        </article>

        <footer className="legal-page-footer">
          <div className="legal-compliance-notice">
            <Lock size={18} />
            <div>
              <strong>Cam kết tuân thủ pháp lý toàn diện</strong>
              <p>
                Wakaba tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân, Luật An ninh mạng 2018, Luật Trẻ em 2016 và Luật Giao dịch điện tử 2023 của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
              </p>
            </div>
          </div>
          <div className="legal-links-footer">
            <Link to="/terms">Điều khoản sử dụng</Link>
            <span>•</span>
            <Link to="/privacy">Chính sách bảo mật</Link>
            <span>•</span>
            <Link to="/cookies">Chính sách Cookie</Link>
            <span>•</span>
            <Link to="/settings#sources">Nguồn dữ liệu & Bản quyền</Link>
          </div>
          <small className="muted">
            © 2026 Wakaba (若葉). Mọi quyền được bảo lưu. Liên hệ bảo vệ dữ liệu: privacy@wakaba.local
          </small>
        </footer>
      </main>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalLayout
      title="Chính sách Bảo vệ Dữ liệu Cá nhân & Quyền Riêng tư"
      subtitle="Thông báo minh bạch về việc thu thập, xử lý và bảo vệ dữ liệu cá nhân theo Nghị định số 13/2023/NĐ-CP của Chính phủ."
      activeTab="privacy"
    >
      <div className="legal-section-callout">
        <h3>Tóm tắt cam kết bảo vệ dữ liệu của Wakaba</h3>
        <ul>
          <li><strong>Minh bạch tuyệt đối:</strong> Wakaba chỉ thu thập dữ liệu cá nhân cơ bản tối thiểu (email, tên hiển thị, tiến độ học tập) để phục vụ duy nhất mục đích cung cấp trải nghiệm học tiếng Nhật cá nhân hóa.</li>
          <li><strong>Không dữ liệu nhạy cảm:</strong> Wakaba KHÔNG thu thập dữ liệu cá nhân nhạy cảm (quan điểm chính trị, tôn giáo, tài chính, sinh trắc học, định vị địa lý...).</li>
          <li><strong>Không quảng cáo, không thương mại hóa:</strong> Wakaba tuyệt đối KHÔNG bán, cho thuê hay chia sẻ dữ liệu của bạn cho bất kỳ đơn vị quảng cáo hoặc bên thứ ba nào.</li>
          <li><strong>Toàn quyền làm chủ:</strong> Bạn có đầy đủ 11 quyền của chủ thể dữ liệu theo Nghị định 13/2023/NĐ-CP, bao gồm quyền xem, tải về bản sao dữ liệu (JSON) và quyền xóa vĩnh viễn tài khoản bất kỳ lúc nào.</li>
        </ul>
      </div>

      <section>
        <h2>1. Căn cứ pháp lý</h2>
        <p>Chính sách bảo vệ dữ liệu cá nhân này được xây dựng và thực thi căn cứ theo hệ thống văn bản quy phạm pháp luật hiện hành của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam, bao gồm:</p>
        <ol>
          <li><strong>Hiến pháp nước Cộng hòa Xã hội Chủ nghĩa Việt Nam năm 2013</strong> (Điều 21 về quyền bất khả xâm phạm về đời sống riêng tư, bí mật cá nhân);</li>
          <li><strong>Bộ luật Dân sự số 91/2015/QH13</strong> ngày 24/11/2015 (Điều 38 về quyền về đời sống riêng tư, bí mật cá nhân, bí mật gia đình);</li>
          <li><strong>Luật An toàn thông tin mạng số 86/2015/QH13</strong> ngày 19/11/2015;</li>
          <li><strong>Luật An ninh mạng số 24/2018/QH14</strong> ngày 12/06/2018 (Điều 26 về bảo đảm an ninh thông tin trên không gian mạng);</li>
          <li><strong>Luật Trẻ em số 102/2016/QH13</strong> ngày 05/04/2016 (Điều 1 và Điều 54 về bảo vệ trẻ em trên môi trường mạng);</li>
          <li><strong>Luật Giao dịch điện tử số 20/2023/QH15</strong> ngày 22/06/2023;</li>
          <li><strong>Nghị định số 13/2023/NĐ-CP</strong> ngày 17/04/2023 của Chính phủ về bảo vệ dữ liệu cá nhân (có hiệu lực thi hành từ ngày 01/07/2023).</li>
        </ol>
      </section>

      <section>
        <h2>2. Thông tin Bên Kiểm soát và Xử lý dữ liệu cá nhân</h2>
        <p>Theo quy định tại Khoản 8, 9 và 10 Điều 2 Nghị định 13/2023/NĐ-CP:</p>
        <ul>
          <li><strong>Bên Kiểm soát và Xử lý dữ liệu cá nhân:</strong> Ban vận hành Ứng dụng Học tiếng Nhật Wakaba (若葉).</li>
          <li><strong>Bộ phận phụ trách Bảo vệ dữ liệu cá nhân (DPO):</strong> Đơn vị An toàn thông tin & Pháp chế Wakaba.</li>
          <li><strong>Địa chỉ thư điện tử tiếp nhận yêu cầu:</strong> <code>privacy@wakaba.local</code></li>
          <li><strong>Kênh tiếp nhận trực tuyến:</strong> Chức năng Quản lý Quyền riêng tư tại trang Cài đặt / Hồ sơ người dùng.</li>
        </ul>
      </section>

      <section>
        <h2>3. Giải thích từ ngữ (Căn cứ Điều 2 Nghị định 13/2023/NĐ-CP)</h2>
        <p>Trong khuôn khổ chính sách này, các thuật ngữ dưới đây được hiểu thống nhất theo quy định pháp luật:</p>
        <ul>
          <li><strong>Dữ liệu cá nhân (Khoản 1 Điều 2):</strong> Là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con người cụ thể.</li>
          <li><strong>Dữ liệu cá nhân cơ bản (Khoản 3 Điều 2):</strong> Bao gồm họ tên, địa chỉ email, thông tin tài khoản số, hình ảnh đại diện, và dữ liệu phản ánh hoạt động của cá nhân trên không gian mạng của nền tảng Wakaba.</li>
          <li><strong>Dữ liệu cá nhân nhạy cảm (Khoản 4 Điều 2):</strong> Là dữ liệu gắn liền với quyền riêng tư của cá nhân mà khi bị xâm phạm sẽ gây ảnh hưởng trực tiếp tới quyền và lợi ích hợp pháp. <em>Wakaba khẳng định KHÔNG thu thập bất kỳ dữ liệu cá nhân nhạy cảm nào.</em></li>
          <li><strong>Chủ thể dữ liệu (Khoản 6 Điều 2):</strong> Là cá nhân được dữ liệu cá nhân phản ánh, cụ thể là người dùng, người học đăng ký và sử dụng nền tảng Wakaba.</li>
          <li><strong>Xử lý dữ liệu cá nhân (Khoản 7 Điều 2):</strong> Là một hoặc nhiều hoạt động tác động tới dữ liệu cá nhân, bao gồm: thu thập, ghi, phân tích, lưu trữ, chỉnh sửa, trích xuất, sử dụng, truyền đưa, cung cấp, xóa hoặc hủy dữ liệu.</li>
        </ul>
      </section>

      <section>
        <h2>4. Nguyên tắc xử lý dữ liệu cá nhân (Căn cứ Điều 3 Nghị định 13/2023/NĐ-CP)</h2>
        <p>Wakaba cam kết tuân thủ trọn vẹn 8 nguyên tắc cốt lõi theo quy định pháp luật:</p>
        <ol>
          <li><strong>Tính hợp pháp:</strong> Dữ liệu cá nhân được xử lý theo đúng quy định của pháp luật Việt Nam.</li>
          <li><strong>Minh bạch:</strong> Chủ thể dữ liệu được biết rõ về mọi hoạt động liên quan tới xử lý dữ liệu cá nhân của mình.</li>
          <li><strong>Đúng mục đích:</strong> Dữ liệu cá nhân chỉ được xử lý cho các mục đích đã được nêu rõ và thông báo cho người dùng.</li>
          <li><strong>Tối giản dữ liệu:</strong> Dữ liệu thu thập chỉ giới hạn trong phạm vi cần thiết để đáp ứng mục đích cung cấp dịch vụ học tập.</li>
          <li><strong>Độ chính xác:</strong> Dữ liệu cá nhân được cập nhật, bổ sung theo yêu cầu của người dùng để bảo đảm tính chuẩn xác.</li>
          <li><strong>Bảo đảm an toàn:</strong> Áp dụng các biện pháp bảo vệ kỹ thuật, mã hóa và tổ chức nghiêm ngặt trong suốt quá trình xử lý.</li>
          <li><strong>Giới hạn lưu trữ:</strong> Dữ liệu chỉ được lưu trữ trong khoảng thời gian phù hợp với mục đích và được xóa ngay khi người dùng yêu cầu.</li>
          <li><strong>Trách nhiệm giải trình:</strong> Wakaba chịu trách nhiệm tuân thủ các nguyên tắc xử lý dữ liệu và duy trì khả năng chứng minh sự tuân thủ.</li>
        </ol>
      </section>

      <section>
        <h2>5. Danh mục dữ liệu cá nhân được thu thập và xử lý</h2>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Nhóm dữ liệu</th>
                <th>Chi tiết dữ liệu</th>
                <th>Căn cứ phân loại theo NĐ 13</th>
                <th>Mục đích sử dụng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Định danh tài khoản</strong></td>
                <td>Địa chỉ email, Họ tên/Biệt danh hiển thị, Ảnh/Biểu tượng đại diện (Avatar).</td>
                <td>Dữ liệu cá nhân cơ bản (Điều 2 Khoản 3)</td>
                <td>Xác thực đăng nhập, cá nhân hóa giao diện và giao tiếp dịch vụ.</td>
              </tr>
              <tr>
                <td><strong>Bảo mật tài khoản</strong></td>
                <td>Mật khẩu đã được băm một chiều (bcrypt salt 12), token phiên băm SHA-256.</td>
                <td>Biện pháp kỹ thuật bảo vệ (Điều 38)</td>
                <td>Bảo vệ quyền truy cập tài khoản, chống xâm nhập trái phép.</td>
              </tr>
              <tr>
                <td><strong>Tiến độ học tập</strong></td>
                <td>Bộ thẻ từ vựng (Decks/Cards), lịch sử ôn tập SRS (ease, interval, rep), kết quả bài tập ngữ pháp, bài luyện viết chữ Hán, lịch sử thi thử JLPT.</td>
                <td>Dữ liệu phản ánh hoạt động không gian mạng (Điều 2 Khoản 3)</td>
                <td>Thực hiện thuật toán lặp lại ngắt quãng SRS, theo dõi biểu đồ tiến bộ, đề xuất nội dung ôn tập.</td>
              </tr>
              <tr>
                <td><strong>Kỹ thuật & Nhật ký</strong></td>
                <td>Địa chỉ IP, loại trình duyệt, thời gian đăng nhập, cookie phiên <code>wakaba_session</code>.</td>
                <td>Dữ liệu kỹ thuật vận hành hệ thống</td>
                <td>Duy trì phiên làm việc bảo mật, ngăn chặn tấn công dò mật khẩu (Rate Limit), bảo đảm an toàn mạng.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>6. Mục đích xử lý dữ liệu cá nhân</h2>
        <p>Theo quy định tại Điều 13 Nghị định 13/2023/NĐ-CP, Wakaba xử lý dữ liệu cá nhân nhằm các mục đích cụ thể sau:</p>
        <ol>
          <li>Cung cấp trọn vẹn nền tảng học tiếng Nhật: Tra cứu từ điển, tạo bộ thẻ ghi nhớ, quản lý tiến độ ngữ pháp N5–N1, làm bài thi thử JLPT và luyện viết chữ Hán;</li>
          <li>Duy trì trạng thái đăng nhập liên tục và bảo mật qua phiên làm việc an toàn;</li>
          <li>Bảo vệ tài khoản người dùng, phòng ngừa tấn công từ chối dịch vụ (DDoS), tấn công dò quét mật khẩu;</li>
          <li>Thực hiện các yêu cầu của chủ thể dữ liệu như trích xuất dữ liệu cá nhân hoặc xóa dữ liệu theo quy định;</li>
          <li>Thực hiện nghĩa vụ tuân thủ pháp luật khi có yêu cầu hợp pháp bằng văn bản từ cơ quan nhà nước có thẩm quyền của Việt Nam.</li>
        </ol>
      </section>

      <section>
        <h2>7. Thời gian lưu trữ dữ liệu cá nhân</h2>
        <p>Căn cứ Khoản 7 Điều 3 Nghị định 13/2023/NĐ-CP:</p>
        <ul>
          <li>Dữ liệu hồ sơ và tiến độ học tập được lưu trữ trong suốt thời gian tài khoản người dùng hoạt động trên hệ thống.</li>
          <li>Khi người dùng thực hiện yêu cầu "Xóa tài khoản" tại trang Hồ sơ, toàn bộ dữ liệu cá nhân, bộ thẻ từ vựng, lịch sử ôn tập và bài thi sẽ được xóa vĩnh viễn khỏi cơ sở dữ liệu ngay lập tức và hoàn tất chậm nhất trong vòng <strong>72 giờ</strong> theo quy định tại Điều 16 Nghị định 13/2023/NĐ-CP.</li>
          <li>Cookie phiên làm việc đăng nhập (<code>wakaba_session</code>) có thời hạn tối đa 30 ngày kể từ lần đăng nhập gần nhất hoặc bị hủy tức thì khi người dùng bấm Đăng xuất.</li>
        </ul>
      </section>

      <section>
        <h2>8. Mười một (11) quyền của chủ thể dữ liệu (Căn cứ Điều 9 Nghị định 13/2023/NĐ-CP)</h2>
        <p>Người dùng nền tảng Wakaba có đầy đủ 11 quyền cơ bản đối với dữ liệu cá nhân của mình:</p>
        <div className="legal-rights-grid">
          <div className="legal-right-item">
            <strong>1. Quyền được biết</strong>
            <p>Được thông báo rõ ràng về hoạt động xử lý dữ liệu cá nhân của mình thông qua Chính sách này trước khi đồng ý tham gia.</p>
          </div>
          <div className="legal-right-item">
            <strong>2. Quyền đồng ý</strong>
            <p>Tự nguyện đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình khi đăng ký tài khoản.</p>
          </div>
          <div className="legal-right-item">
            <strong>3. Quyền truy cập</strong>
            <p>Truy cập vào ứng dụng để xem, chỉnh sửa thông tin cá nhân (họ tên, ảnh đại diện, mật khẩu, mục tiêu JLPT) tại trang Hồ sơ.</p>
          </div>
          <div className="legal-right-item">
            <strong>4. Quyền rút lại sự đồng ý</strong>
            <p>Rút lại sự đồng ý đã cấp bất kỳ lúc nào bằng cách đóng tài khoản hoặc gửi yêu cầu về <code>privacy@wakaba.local</code>.</p>
          </div>
          <div className="legal-right-item">
            <strong>5. Quyền xóa dữ liệu</strong>
            <p>Yêu cầu xóa toàn bộ dữ liệu cá nhân của mình vĩnh viễn thông qua tính năng "Xóa tài khoản" tại trang Cài đặt / Hồ sơ.</p>
          </div>
          <div className="legal-right-item">
            <strong>6. Quyền hạn chế xử lý dữ liệu</strong>
            <p>Yêu cầu hạn chế xử lý dữ liệu cá nhân của mình theo quy định pháp luật.</p>
          </div>
          <div className="legal-right-item">
            <strong>7. Quyền cung cấp dữ liệu</strong>
            <p>Yêu cầu cung cấp cho bản thân dữ liệu cá nhân của mình dưới dạng tệp điện tử tiêu chuẩn (JSON) thông qua tính năng "Tải về bản sao dữ liệu".</p>
          </div>
          <div className="legal-right-item">
            <strong>8. Quyền phản đối xử lý dữ liệu</strong>
            <p>Phản đối việc Bên Kiểm soát dữ liệu xử lý dữ liệu cá nhân nhằm ngăn chặn việc sử dụng ngoài mục đích đã thông báo.</p>
          </div>
          <div className="legal-right-item">
            <strong>9. Quyền khiếu nại, tố cáo, khởi kiện</strong>
            <p>Khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật Việt Nam nếu phát hiện quyền lợi về dữ liệu bị xâm hại.</p>
          </div>
          <div className="legal-right-item">
            <strong>10. Quyền yêu cầu bồi thường thiệt hại</strong>
            <p>Yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy ra hành vi vi phạm gây thiệt hại thực tế đến quyền lợi.</p>
          </div>
          <div className="legal-right-item">
            <strong>11. Quyền tự bảo vệ</strong>
            <p>Tự bảo vệ hoặc yêu cầu cơ quan, tổ chức có thẩm quyền thực thi các biện pháp bảo vệ quyền dân sự theo quy định của Bộ luật Dân sự.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>9. Bốn (4) nghĩa vụ của chủ thể dữ liệu (Căn cứ Điều 10 Nghị định 13/2023/NĐ-CP)</h2>
        <p>Khi tham gia học tập trên nền tảng Wakaba, người dùng có các nghĩa vụ sau:</p>
        <ol>
          <li><strong>Tự bảo vệ dữ liệu cá nhân:</strong> Có trách nhiệm giữ bí mật thông tin đăng nhập, mật khẩu của mình; không chia sẻ tài khoản cho người khác; chủ động đăng xuất khi sử dụng thiết bị công cộng.</li>
          <li><strong>Tôn trọng dữ liệu người khác:</strong> Không thu thập, chiếm đoạt hoặc phát tán dữ liệu cá nhân của bất kỳ người dùng nào khác trên nền tảng.</li>
          <li><strong>Cung cấp thông tin chính xác:</strong> Cung cấp đầy đủ, chính xác thông tin khi đăng ký; chịu trách nhiệm về tính xác thực của thông tin cung cấp.</li>
          <li><strong>Tuân thủ pháp luật:</strong> Thực hiện đúng các quy định pháp luật về bảo vệ dữ liệu cá nhân và các quy chế, hướng dẫn của Wakaba.</li>
        </ol>
      </section>

      <section>
        <h2>10. Bảo vệ dữ liệu cá nhân của trẻ em (Căn cứ Điều 20 Nghị định 13/2023/NĐ-CP & Luật Trẻ em 2016)</h2>
        <p>Căn cứ <strong>Điều 1 Luật Trẻ em 2016 (Luật số 102/2016/QH13)</strong>, trẻ em là người dưới 16 tuổi. Wakaba áp dụng các quy chuẩn bảo vệ đặc biệt:</p>
        <ul>
          <li><strong>Người từ đủ 16 tuổi trở lên:</strong> Có đầy đủ năng lực hành vi để tự mình xác nhận đồng ý với Điều khoản sử dụng và Chính sách bảo mật khi tạo tài khoản học tập.</li>
          <li><strong>Trường hợp người dưới 16 tuổi:</strong>
            <ul>
              <li>Việc đăng ký và xử lý dữ liệu cá nhân của trẻ em bắt buộc phải có sự đồng ý của cha, mẹ hoặc người giám hộ hợp pháp theo quy định tại Khoản 2 Điều 20 Nghị định 13/2023/NĐ-CP.</li>
              <li>Đối với trẻ em từ đủ 7 tuổi trở lên, phải có sự đồng ý của cả cha, mẹ/người giám hộ VÀ sự đồng ý của chính trẻ em.</li>
            </ul>
          </li>
          <li>Wakaba tích hợp bước xác nhận độ tuổi và cam kết sự đồng ý của phụ huynh/giám hộ ngay tại Cổng chấp thuận pháp lý trước khi tài khoản được tạo thành công.</li>
        </ul>
      </section>

      <section>
        <h2>11. Biện pháp bảo vệ kỹ thuật và an toàn thông tin (Căn cứ Điều 38 Nghị định 13/2023/NĐ-CP)</h2>
        <p>Wakaba áp dụng hệ thống các biện pháp kỹ thuật tiên tiến nhất để bảo vệ an toàn cho dữ liệu cá nhân:</p>
        <ul>
          <li><strong>Mã hóa mật khẩu:</strong> Mật khẩu người dùng được băm một chiều bằng thuật toán công nghiệp <code>bcrypt</code> với độ phức tạp cao (salt rounds 12). Máy chủ và quản trị viên không thể đọc được mật khẩu gốc của người dùng.</li>
          <li><strong>Bảo vệ phiên làm việc:</strong> Token phiên đăng nhập được băm một chiều bằng hàm băm mật mã <code>SHA-256</code> trước khi lưu vào cơ sở dữ liệu.</li>
          <li><strong>Mã hóa truyền tải:</strong> Toàn bộ lưu lượng truy cập giữa trình duyệt và máy chủ được mã hóa qua giao thức HTTPS/TLS với chính sách <code>Strict-Transport-Security (HSTS)</code>.</li>
          <li><strong>Chính sách an toàn trình duyệt:</strong> Triển khai <code>Content Security Policy (CSP)</code>, vô hiệu hóa nhúng khung <code>X-Frame-Options: DENY</code>, ngăn chặn MIME-type sniffing <code>X-Content-Type-Options: nosniff</code>.</li>
          <li><strong>Kiểm soát tần suất truy cập (Rate Limiting):</strong> Ngăn chặn tự động các hành vi dò quét mật khẩu (brute force) và tấn công từ chối dịch vụ tại các điểm cuối nhạy cảm.</li>
          <li><strong>An toàn Cookie:</strong> Cookie phiên xác thực được gắn cờ <code>HttpOnly</code> (chặn mã độc JavaScript truy cập), <code>SameSite=Lax</code> (ngăn tấn công giả mạo yêu cầu chéo trang CSRF) và <code>Secure</code> trên môi trường production.</li>
        </ul>
      </section>

      <section>
        <h2>12. Thủ tục thực hiện quyền và xử lý khiếu nại</h2>
        <p>Để thực hiện bất kỳ quyền nào của mình (như trích xuất dữ liệu, chỉnh sửa, hoặc xóa dữ liệu), người dùng có thể:</p>
        <ol>
          <li>Thực hiện trực tiếp thông qua giao diện trang Cài đặt / Hồ sơ (tải bản sao dữ liệu hoặc xóa tài khoản);</li>
          <li>Gửi thư điện tử yêu cầu về địa chỉ: <code>privacy@wakaba.local</code> kèm thông tin định danh tài khoản để bộ phận phụ trách xác minh và giải quyết.</li>
        </ol>
        <p>Thời hạn tiếp nhận và xử lý yêu cầu hợp lệ được hoàn thành trong vòng tối đa <strong>72 giờ</strong> kể từ thời điểm nhận được yêu cầu theo quy định của pháp luật.</p>
      </section>
    </LegalLayout>
  );
}

export function TermsPage() {
  return (
    <LegalLayout
      title="Điều khoản Sử dụng Dịch vụ"
      subtitle="Quy định và điều kiện sử dụng nền tảng học tiếng Nhật Wakaba. Vui lòng đọc kỹ trước khi đăng ký tài khoản."
      activeTab="terms"
    >
      <div className="legal-section-callout">
        <h3>Điều khoản cốt lõi khi tham gia Wakaba</h3>
        <ul>
          <li><strong>Mục đích phi thương mại & học tập:</strong> Wakaba là góc học tập tiếng Nhật cá nhân, tập trung vào phương pháp học chậm rãi, đều đặn mỗi ngày (一日一歩).</li>
          <li><strong>Nội dung học tập:</strong> Toàn bộ dữ liệu từ vựng, ngữ pháp N5–N1, ví dụ và bài tập trên hệ thống được tổng hợp bám sát JLPT và các giáo trình chuẩn, trích dẫn phục vụ mục đích học tập phi thương mại. Dữ liệu từ điển mở tuân thủ giấy phép CC BY-SA 4.0.</li>
          <li><strong>Nghiêm cấm hành vi phá hoại:</strong> Không sử dụng công cụ tự động (bot, scraper), không tấn công hệ thống hay sử dụng nền tảng vào các mục đích trái pháp luật Việt Nam.</li>
        </ul>
      </div>

      <section>
        <h2>1. Chấp thuận điều khoản và Hiệu lực giao kết</h2>
        <p>
          Chào mừng bạn đến với <strong>Wakaba (若葉)</strong>. Khi bạn truy cập, thực hiện thao tác đăng ký tài khoản, tích chọn vào ô xác nhận đồng ý và hoàn tất việc tạo tài khoản, bạn xác nhận rằng bạn đã đọc, hiểu rõ và đồng ý bị ràng buộc bởi toàn bộ các điều khoản trong văn bản này.
        </p>
        <p>
          Thỏa thuận này là một hợp đồng điện tử có đầy đủ giá trị pháp lý theo quy định của <strong>Luật Giao dịch điện tử số 20/2023/QH15</strong> và pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng dừng việc đăng ký và sử dụng dịch vụ.
        </p>
      </section>

      <section>
        <h2>2. Điều kiện về độ tuổi và năng lực hành vi</h2>
        <ul>
          <li>Người sử dụng phải từ <strong>đủ 16 tuổi trở lên</strong> để tự mình đăng ký tài khoản và chịu trách nhiệm pháp lý về việc sử dụng dịch vụ.</li>
          <li>Trường hợp người học dưới 16 tuổi (trẻ em theo quy định tại Điều 1 Luật Trẻ em 2016), việc đăng ký và sử dụng dịch vụ bắt buộc phải có sự đồng ý, giám sát của cha, mẹ hoặc người giám hộ hợp pháp. Cha, mẹ hoặc người giám hộ chịu trách nhiệm quản lý việc sử dụng dịch vụ của trẻ em.</li>
        </ul>
      </section>

      <section>
        <h2>3. Tài khoản người dùng và Trách nhiệm bảo mật</h2>
        <ol>
          <li><strong>Tính chính xác của thông tin:</strong> Người dùng cam kết cung cấp địa chỉ email chính chủ, hoạt động bình thường và thông tin chính xác khi đăng ký tài khoản.</li>
          <li><strong>Bảo vệ mật khẩu:</strong> Người dùng có trách nhiệm tự bảo mật mật khẩu của mình. Mọi thao tác được thực hiện từ tài khoản của bạn sau khi đăng nhập thành công được coi là hành động của chính bạn.</li>
          <li><strong>Thông báo sự cố:</strong> Nếu phát hiện tài khoản bị xâm nhập trái phép hoặc có lỗ hổng bảo mật, người dùng có nghĩa vụ thông báo ngay lập tức cho ban quản trị qua email <code>privacy@wakaba.local</code>.</li>
        </ol>
      </section>

      <section>
        <h2>4. Quyền sở hữu trí tuệ và Giấy phép nội dung</h2>
        <ul>
          <li><strong>Nội dung tổng hợp bám sát chuẩn JLPT:</strong> Hệ thống bài học ngữ pháp (từ N5 đến N1), câu ví dụ tiếng Nhật, giải thích ngữ nghĩa, bài tập thực hành và các đề thi thử được tổng hợp bám sát chuẩn giáo trình JLPT từ các nguồn học liệu uy tín trên internet nhằm mục đích giáo dục cá nhân và phi lợi nhuận. Người dùng được tự do học tập cá nhân; nghiêm cấm việc sao chép để bán lại hoặc khai thác thương mại trái phép.</li>
          <li><strong>Dữ liệu từ điển mở (EDRDG / JMdict):</strong> Dữ liệu từ điển Nhật - Anh - Việt tham chiếu từ dự án JMdict của Nhóm Nghiên cứu và Phát triển Từ điển Điện tử (EDRDG), được sử dụng theo Giấy phép Quốc tế <em>Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)</em>.</li>
          <li><strong>Dữ liệu thứ tự nét Kanji (KanjiVG):</strong> Dữ liệu hình họa chữ Hán tuân thủ giấy phép <em>Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0)</em>.</li>
        </ul>
      </section>

      <section>
        <h2>5. Các hành vi bị nghiêm cấm (Căn cứ Luật An ninh mạng 2018)</h2>
        <p>Khi sử dụng Wakaba, người dùng tuyệt đối KHÔNG được thực hiện các hành vi sau:</p>
        <ol>
          <li>Sử dụng dịch vụ để truyền tải nội dung vi phạm pháp luật, chống phá nhà nước, tuyên truyền bạo lực, khiêu dâm, mê tín dị đoan hoặc xúc phạm danh dự, nhân phẩm của cá nhân, tổ chức khác theo Điều 8 Luật An ninh mạng 2018;</li>
          <li>Sử dụng các công cụ tự động (bot, crawler, spider, scraper) để trích xuất dữ liệu, làm sai lệch tiến độ học hoặc gây tải bất thường lên hệ thống máy chủ;</li>
          <li>Thực hiện các hành vi can thiệp trái phép, đảo ngược mã nguồn, khai thác lỗ hổng bảo mật, phát tán virus, mã độc hại hoặc tấn công từ chối dịch vụ (DDoS);</li>
          <li>Gian lận kết quả bài thi thử JLPT, bài tập ngữ pháp hoặc cố tình làm sai lệch thuật toán ôn tập ngắt quãng (SRS);</li>
          <li>Chia sẻ tài khoản hoặc bán lại quyền truy cập cho bên thứ ba vì mục đích vụ lợi.</li>
        </ol>
      </section>

      <section>
        <h2>6. Giới hạn trách nhiệm</h2>
        <ul>
          <li>Wakaba nỗ lực tối đa để duy trì tính chính xác của nội dung kiến thức và tính ổn định liên tục của hệ thống kỹ thuật. Tuy nhiên, dịch vụ được cung cấp trên nguyên tắc "nguyên trạng" (as is) phục vụ mục đích học tập cá nhân.</li>
          <li>Wakaba không chịu trách nhiệm đối với việc gián đoạn dịch vụ do các nguyên nhân bất khả kháng (sự cố đường truyền mạng viễn thông quốc tế, thiên tai, bảo trì kỹ thuật định kỳ có báo trước hoặc sự cố máy chủ bất khả kháng).</li>
          <li>Wakaba không chịu trách nhiệm đối với bất kỳ mất mát dữ liệu nào do người dùng tự làm lộ thông tin đăng nhập hoặc chia sẻ thiết bị không an toàn.</li>
        </ul>
      </section>

      <section>
        <h2>7. Chấm dứt và Tạm khóa tài khoản</h2>
        <ol>
          <li><strong>Quyền của người dùng:</strong> Người dùng có toàn quyền chấm dứt thỏa thuận này bất kỳ lúc nào bằng cách sử dụng tính năng "Xóa tài khoản" tại trang Hồ sơ. Khi tài khoản bị xóa, mọi thông tin cá nhân và dữ liệu học tập sẽ được thanh trừ vĩnh viễn theo Điều 16 Nghị định 13/2023/NĐ-CP.</li>
          <li><strong>Quyền của Wakaba:</strong> Wakaba có quyền tạm khóa hoặc chấm dứt vĩnh viễn quyền truy cập của người dùng mà không cần bồi thường nếu người dùng vi phạm nghiêm trọng các điều khoản cấm hoặc có hành vi gây nguy hại đến an toàn của hệ thống.</li>
        </ol>
      </section>

      <section>
        <h2>8. Luật áp dụng và Cơ chế giải quyết tranh chấp</h2>
        <p>
          Điều khoản sử dụng này được điều chỉnh, giải thích và thực thi theo pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
        </p>
        <p>
          Trong trường hợp phát sinh tranh chấp liên quan đến việc sử dụng dịch vụ, các bên cam kết trước hết giải quyết thông qua thương lượng, hòa giải trên tinh thần thiện chí và tôn trọng lẫn nhau. Trường hợp thương lượng không thành công trong vòng ba mươi (30) ngày, tranh chấp sẽ được đưa ra giải quyết tại Tòa án nhân dân có thẩm quyền tại Việt Nam theo luật định.
        </p>
      </section>
    </LegalLayout>
  );
}

export function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Chính sách Cookie & Lưu trữ Cục bộ"
      subtitle="Trang thông tin chuyên biệt và độc lập giải thích chi tiết về việc sử dụng cookie kỹ thuật và công nghệ lưu trữ trên nền tảng Wakaba."
      activeTab="cookies"
    >
      <div className="legal-section-callout">
        <h3>Cam kết về Cookie của Wakaba</h3>
        <ul>
          <li><strong>Chỉ sử dụng Cookie kỹ thuật thiết yếu:</strong> Wakaba chỉ sử dụng duy nhất 01 cookie phiên (<code>wakaba_session</code>) nhằm duy trì trạng thái đăng nhập an toàn.</li>
          <li><strong>Không cookie theo dõi của bên thứ ba:</strong> Chúng tôi KHÔNG sử dụng Google Analytics, Facebook Pixel hay bất kỳ mã theo dõi quảng cáo nào.</li>
          <li><strong>Không quảng cáo xuyên trang web:</strong> Dữ liệu duyệt web của bạn không bao giờ bị theo dõi hay chia sẻ ra bên ngoài.</li>
          <li><strong>Quyền kiểm soát của bạn:</strong> Bạn hoàn toàn có thể quản lý, kiểm tra hoặc xóa cookie bất cứ lúc nào thông qua cài đặt trình duyệt.</li>
        </ul>
      </div>

      <section>
        <h2>1. Cookie là gì?</h2>
        <p>
          Cookie là các tệp văn bản nhỏ chứa một lượng thông tin nhất định được trang web gửi đến và lưu trữ trên trình duyệt hoặc thiết bị của bạn khi bạn truy cập một trang web. Cookie cho phép trang web ghi nhớ thiết bị của bạn qua các lần truy cập hoặc duy trì phiên đăng nhập khi bạn điều hướng giữa các trang khác nhau.
        </p>
        <p>
          Ngoài Cookie, các công nghệ lưu trữ web hiện đại như <strong>Lưu trữ cục bộ (Local Storage)</strong> cũng được sử dụng để lưu lại các tùy chọn giao diện người dùng ngay trên thiết bị mà không gửi kèm theo mỗi yêu cầu mạng về máy chủ.
        </p>
      </section>

      <section>
        <h2>2. Nguyên tắc sử dụng Cookie của Wakaba</h2>
        <p>
          Phù hợp với tinh thần tối giản dữ liệu theo <strong>Điều 3 Nghị định 13/2023/NĐ-CP</strong> và tôn trọng tối đa quyền riêng tư của người học, Wakaba thực hiện các nguyên tắc nghiêm ngặt:
        </p>
        <ol>
          <li><strong>Chỉ sử dụng những gì thực sự cần thiết:</strong> Chỉ dùng cookie và bộ nhớ cục bộ cần thiết để ứng dụng hoạt động chính xác (đăng nhập, ghi nhớ chế độ hiển thị phiên âm tiếng Nhật, giao diện sáng/tối).</li>
          <li><strong>Không theo dõi hành vi thương mại:</strong> Tuyệt đối không gắn mã tiếp thị, không theo dõi người dùng sang các trang web khác.</li>
          <li><strong>Bảo mật tối đa:</strong> Tất cả cookie xác thực đều được áp dụng các cờ bảo mật cao nhất của trình duyệt hiện đại (HttpOnly, SameSite, Secure).</li>
        </ol>
      </section>

      <section>
        <h2>3. Danh mục chi tiết các Cookie và Bộ lưu trữ trên Wakaba</h2>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Tên định danh</th>
                <th>Phân loại công nghệ</th>
                <th>Mục đích sử dụng</th>
                <th>Thời hạn lưu trữ</th>
                <th>Cơ chế bảo mật</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>wakaba_session</code></td>
                <td>Cookie bên thứ nhất (First-party Cookie) · Thiết yếu</td>
                <td>Lưu giữ chuỗi mã hóa phiên đăng nhập an toàn, cho phép người dùng chuyển trang và học tập mà không phải nhập lại mật khẩu.</td>
                <td>30 ngày kể từ lần đăng nhập gần nhất, hoặc bị hủy ngay lập tức khi người dùng bấm Đăng xuất.</td>
                <td><code>HttpOnly</code> (chống XSS), <code>SameSite=Lax</code> (chống CSRF), <code>Secure</code> (truyền mã hóa HTTPS).</td>
              </tr>
              <tr>
                <td><code>theme</code></td>
                <td>Lưu trữ cục bộ (Local Storage) · Tiện ích giao diện</td>
                <td>Ghi nhớ tùy chọn giao diện hiển thị của người học: Giao diện Sáng (Light), Tối (Dark) hoặc Tự động theo hệ điều hành (System).</td>
                <td>Lưu trên thiết bị cho đến khi người dùng đổi cài đặt hoặc xóa bộ nhớ đệm trình duyệt.</td>
                <td>Chỉ lưu trữ cục bộ tại trình duyệt, không gửi qua mạng.</td>
              </tr>
              <tr>
                <td><code>annotationMode</code></td>
                <td>Lưu trữ cục bộ (Local Storage) · Tiện ích học tập</td>
                <td>Ghi nhớ cách hiển thị phiên âm tiếng Nhật: Hiển thị chữ Furigana (chữ nhỏ trên Kanji) hoặc chữ Latinh (Romaji).</td>
                <td>Lưu trên thiết bị cho đến khi người dùng xóa bộ nhớ đệm.</td>
                <td>Chỉ lưu trữ cục bộ tại trình duyệt, không gửi qua mạng.</td>
              </tr>
              <tr>
                <td><code>wakaba_cookie_consent</code></td>
                <td>Lưu trữ cục bộ (Local Storage) · Tuân thủ pháp lý</td>
                <td>Ghi nhớ việc người dùng đã đọc và xác nhận thông báo Cookie trên website, giúp banner thông báo không hiển thị lặp lại.</td>
                <td>Lưu trên thiết bị người dùng.</td>
                <td>Chỉ lưu trữ cục bộ tại trình duyệt, không gửi qua mạng.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>4. So sánh: Cookie của Wakaba và Cookie của bên thứ ba</h2>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Tiêu chí</th>
                <th>Cookie của Wakaba</th>
                <th>Cookie theo dõi thông thường trên Internet</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Đơn vị sở hữu</strong></td>
                <td>Chính chủ Wakaba (First-party)</td>
                <td>Bên thứ ba (Google, Meta, TikTok, Ad networks)</td>
              </tr>
              <tr>
                <td><strong>Mục đích</strong></td>
                <td>Vận hành đăng nhập & hiển thị bài học</td>
                <td>Xây dựng hồ sơ sở thích, quảng cáo bám đuổi (retargeting)</td>
              </tr>
              <tr>
                <td><strong>Chia sẻ dữ liệu</strong></td>
                <td>Tuyệt đối không chia sẻ</td>
                <td>Bán hoặc đồng bộ giữa hàng ngàn trang web khác nhau</td>
              </tr>
              <tr>
                <td><strong>Theo dõi xuyên trang</strong></td>
                <td>KHÔNG bao giờ</td>
                <td>Theo dõi mọi lịch sử lướt web của bạn</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>5. Hướng dẫn cách quản lý và xóa Cookie trên các trình duyệt</h2>
        <p>
          Bạn có toàn quyền xóa hoặc vô hiệu hóa cookie trên trình duyệt của mình bất cứ khi nào bạn muốn. Dưới đây là hướng dẫn cụ thể cho các trình duyệt phổ biến:
        </p>
        <div className="legal-browser-guides">
          <div className="legal-browser-item">
            <strong>Google Chrome</strong>
            <p>Vào menu <em>Cài đặt</em> → <em>Quyền riêng tư và bảo mật</em> → <em>Cookie của bên thứ ba</em> → Chọn <em>Xem tất cả dữ liệu và quyền của trang web</em> → Tìm <code>wakaba</code> và bấm biểu tượng thùng rác để xóa.</p>
          </div>
          <div className="legal-browser-item">
            <strong>Mozilla Firefox</strong>
            <p>Vào <em>Cài đặt (Settings)</em> → <em>Quyền riêng tư & Bảo mật (Privacy & Security)</em> → Mục <em>Cookie và dữ liệu trang web</em> → Bấm <em>Quản lý dữ liệu...</em> → Chọn và xóa.</p>
          </div>
          <div className="legal-browser-item">
            <strong>Apple Safari (macOS & iOS)</strong>
            <p>Trên máy Mac: Vào <em>Safari</em> → <em>Tùy chọn (Preferences)</em> → <em>Quyền riêng tư (Privacy)</em> → <em>Quản lý dữ liệu trang web</em>. Trên iPhone/iPad: Vào <em>Cài đặt</em> → <em>Safari</em> → <em>Xóa lịch sử và dữ liệu trang web</em>.</p>
          </div>
          <div className="legal-browser-item">
            <strong>Microsoft Edge</strong>
            <p>Vào <em>Cài đặt</em> → <em>Cookie và quyền trang web</em> → <em>Quản lý và xóa cookie và dữ liệu trang web</em> → Chọn xóa dữ liệu theo ý muốn.</p>
          </div>
        </div>
        <p className="muted" style={{ marginTop: '16px' }}>
          <em>Lưu ý quan trọng:</em> Vì <code>wakaba_session</code> là cookie thiết yếu để nhận diện phiên làm việc, nếu bạn chặn hoặc xóa cookie này, bạn sẽ được đăng xuất khỏi tài khoản và cần đăng nhập lại để tiếp tục học.
        </p>
      </section>

      <section>
        <h2>6. Liên hệ và Hỗ trợ về Cookie</h2>
        <p>
          Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc phản ánh nào liên quan đến cách thức Wakaba sử dụng Cookie và các công nghệ lưu trữ, xin vui lòng gửi email về bộ phận kỹ thuật & bảo mật tại: <code>privacy@wakaba.local</code>.
        </p>
      </section>
    </LegalLayout>
  );
}
