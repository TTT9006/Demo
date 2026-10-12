import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, BookOpen } from 'lucide-react';
import { api, post } from '../services/api';
import { PageHeader, Button, AudioButton } from '../components/ui';
type Answer = {
  explanation: string;
  examples: { japanese: string; vietnamese: string }[];
  tip: string;
};
export function Assistant() {
  const [question, setQuestion] = useState('');
  const status = useQuery({
    queryKey: ['assistant-status'],
    queryFn: () => api<{ configured: boolean }>('/assistant/status'),
  });
  const answer = useMutation({ mutationFn: () => post<Answer>('/assistant', { question }) });
  return (
    <>
      <PageHeader
        eyebrow="THÊM MỘT GÓC NHÌN"
        title="Một câu hỏi nhỏ, hiểu thêm nhiều."
        description="Hỏi về cách dùng từ, ngữ pháp hoặc nhờ giải thích một câu tiếng Nhật."
      />
      <div className="lesson-layout">
        <section className="panel">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              answer.mutate();
            }}
          >
            <label>
              Câu hỏi của bạn
              <textarea
                rows={5}
                maxLength={1000}
                required
                minLength={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ví dụ: Khi nào dùng は và khi nào dùng が?"
              />
            </label>
            <div className="inline-actions wrap">
              {[
                'Phân biệt は và が',
                'Giải thích câu 日本語を勉強しています',
                'Cách nói cảm ơn lịch sự',
              ].map((q) => (
                <button className="tag" type="button" key={q} onClick={() => setQuestion(q)}>
                  {q}
                </button>
              ))}
            </div>
            <div className="form-footer">
              <Button disabled={!status.data?.configured || answer.isPending} type="submit">
                {answer.isPending ? 'Đang giải thích…' : 'Gửi câu hỏi'}
                <ArrowRight size={16} />
              </Button>
            </div>
          </form>
          {status.data && !status.data.configured && (
            <div className="feedback">
              <h3>Trợ lý AI chưa được bật</h3>
              <p>
                Máy này chưa có cấu hình nhà cung cấp AI. Bạn có thể tra từ và học các bài ngữ pháp
                đã có ngay bây giờ.
              </p>
              <Link className="text-link" to="/grammar">
                Đến thư viện ngữ pháp
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
          {answer.error && (
            <p className="error-text" role="alert">
              {answer.error.message}
            </p>
          )}
          {answer.data && (
            <div className="assistant-answer">
              <h2>Giải thích</h2>
              <p style={{ whiteSpace: 'pre-wrap', color: 'var(--ink)' }}>
                {answer.data.explanation}
              </p>
              {answer.data.examples.map((e, i) => (
                <div className="example" key={i}>
                  <div>
                    <p>{e.japanese}</p>
                    <p>{e.vietnamese}</p>
                  </div>
                  <AudioButton text={e.japanese} />
                </div>
              ))}
              <div className="mistake-note">
                <strong>Mẹo ghi nhớ</strong>
                <p>{answer.data.tip}</p>
              </div>
              <p className="small-text spaced">
                Nội dung do AI tạo có thể có sai sót. Hãy đối chiếu với từ điển và bài học.
              </p>
            </div>
          )}
        </section>
        <aside className="panel">
          <MessageCircle size={24} />
          <h3 className="spaced">
            Câu hỏi càng rõ,
            <br />
            giải thích càng hữu ích.
          </h3>
          <p>
            Thêm câu gốc và điều bạn chưa hiểu. Trợ lý sẽ điều chỉnh giải thích theo trình độ trong
            cài đặt.
          </p>
          <Link to="/dictionary" className="text-link">
            <BookOpen size={15} />
            Tra nghĩa trong từ điển
          </Link>
        </aside>
      </div>
    </>
  );
}
