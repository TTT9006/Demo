import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { Button } from './ui';
export function StrokeOrder({ character }: { character: string }) {
  const [open, setOpen] = useState(false),
    [step, setStep] = useState(0),
    [playing, setPlaying] = useState(false);
  const { data, error, isLoading } = useQuery({
    queryKey: ['strokes', character],
    queryFn: ({ signal }) =>
      api<{ paths: string[]; sourceCharacter: string }>(
        '/kanji/' + encodeURIComponent(character) + '/strokes',
        { signal },
      ),
    enabled: open,
    retry: false,
    staleTime: Infinity,
  });
  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [character]);
  useEffect(() => {
    if (!playing || !data) return;
    const timer = setInterval(
      () =>
        setStep((n) => {
          if (n >= data.paths.length) {
            setPlaying(false);
            return n;
          }
          return n + 1;
        }),
      850,
    );
    return () => clearInterval(timer);
  }, [playing, data]);
  return (
    <div className="stroke-order">
      <Button variant="secondary" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? 'Ẩn thứ tự nét' : 'Xem thứ tự nét'}
      </Button>
      {open && (
        <>
          <p role="status">
            {isLoading
              ? 'Đang tải nét chữ…'
              : error
                ? 'Chưa có minh họa cho dạng này. Bạn vẫn có thể luyện tự do.'
                : ''}
          </p>
          {data && (
            <>
              <svg role="img" aria-label={'Thứ tự nét của ' + character} viewBox="0 0 109 109">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {data.paths.map((d, i) => (
                    <path
                      key={i}
                      d={d}
                      opacity={step === 0 || i < step ? 1 : 0.12}
                      pathLength="1"
                      className={playing && i === step - 1 ? 'stroke-active' : ''}
                    />
                  ))}
                </g>
                {data.paths.map((d, i) => {
                  const m = d.match(/^[Mm]\s*([\d.-]+)[,\s]+([\d.-]+)/);
                  return m ? (
                    <text
                      key={i}
                      x={Number(m[1]) + 2}
                      y={Number(m[2]) - 2}
                      fontSize="5"
                      fill="currentColor"
                    >
                      {i + 1}
                    </text>
                  ) : null;
                })}
              </svg>
              <div className="inline-actions wrap">
                <Button
                  variant="secondary"
                  onClick={() => {
                    setStep(0);
                    setPlaying(true);
                  }}
                >
                  Phát từng nét
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setPlaying(false);
                    setStep((n) => (n >= data.paths.length ? 1 : n + 1));
                  }}
                >
                  Nét tiếp theo
                </Button>
              </div>
              <p className="muted small-text">
                {step}/{data.paths.length} nét · KanjiVG, CC BY-SA 3.0 · Mẫu nguồn{' '}
                {data.sourceCharacter}
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
}
