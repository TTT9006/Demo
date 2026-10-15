import { useState, useRef, useEffect } from 'react';
import { toRomaji } from 'wanakana';
import { JapaneseAnnotatedText } from './japanese-annotated-text';
import { AudioButton } from './ui';
import { Check, X, RotateCcw } from 'lucide-react';

export interface InteractiveCardData {
  id: string;
  japanese: string;
  reading: string;
  meaning: string;
  example?: string;
  note?: string;
  deckName?: string;
}

interface Props {
  card: InteractiveCardData;
  flipped: boolean;
  onFlip: () => void;
  onSwipe?: (direction: 'left' | 'right') => void;
  mode?: 'japanese' | 'romanized';
  eyebrowFront?: string;
  eyebrowBack?: string;
}

export function ReviewCardInteractive({
  card,
  flipped,
  onFlip,
  onSwipe,
  mode = 'japanese',
  eyebrowFront = 'BẠN CÒN NHỚ TỪ NÀY KHÔNG?',
  eyebrowBack = 'ĐÁP ÁN',
}: Props) {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSwipingOut, setIsSwipingOut] = useState<'left' | 'right' | null>(null);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);

  // Reset drag state when card changes
  useEffect(() => {
    setDragX(0);
    setIsDragging(false);
    setIsSwipingOut(null);
  }, [card.id]);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Ignore clicks on buttons/audio inside card
    if ((e.target as HTMLElement).closest('button, a, audio')) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isSwipingOut) return;
    const dx = e.clientX - startXRef.current;
    currentXRef.current = e.clientX;
    setDragX(dx);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }

    const dx = currentXRef.current - startXRef.current;
    const threshold = 85;

    if (onSwipe && dx > threshold) {
      // Swiped right -> Remember
      setIsSwipingOut('right');
      setTimeout(() => {
        onSwipe('right');
      }, 260);
    } else if (onSwipe && dx < -threshold) {
      // Swiped left -> Forgot
      setIsSwipingOut('left');
      setTimeout(() => {
        onSwipe('left');
      }, 260);
    } else {
      // Small distance or tap: return to center
      setDragX(0);
      if (Math.abs(dx) < 8) {
        onFlip();
      }
    }
  };

  const swipeRotation = dragX * 0.045;
  const swipeOpacity = isSwipingOut ? 0 : 1;
  const swipeTranslateX = isSwipingOut
    ? isSwipingOut === 'right'
      ? 450
      : -450
    : dragX;

  const swipeOverlayLeftOpacity = Math.max(0, Math.min(1, -dragX / 80));
  const swipeOverlayRightOpacity = Math.max(0, Math.min(1, dragX / 80));

  return (
    <div className="review-3d-scene">
      {/* Swipe Badges Overlay */}
      {swipeOverlayRightOpacity > 0 && (
        <div
          className="swipe-hint-badge swipe-hint-right"
          style={{ opacity: swipeOverlayRightOpacity }}
          aria-hidden="true"
        >
          <Check size={18} />
          <span>NHỚ</span>
        </div>
      )}
      {swipeOverlayLeftOpacity > 0 && (
        <div
          className="swipe-hint-badge swipe-hint-left"
          style={{ opacity: swipeOverlayLeftOpacity }}
          aria-hidden="true"
        >
          <X size={18} />
          <span>QUÊN</span>
        </div>
      )}

      {/* Main 3D Card Container */}
      <div
        className={`review-card-wrapper ${isDragging ? 'is-dragging' : ''} ${isSwipingOut ? 'swiping-out' : ''}`}
        style={{
          transform: `translateX(${swipeTranslateX}px) rotateZ(${swipeRotation}deg)`,
          opacity: swipeOpacity,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className={`review-card ${flipped ? 'flipped' : ''}`}
          role="region"
          aria-label={flipped ? 'Mặt sau thẻ' : 'Mặt trước thẻ'}
        >
          {/* Front Face */}
          <div className="review-card-face review-card-front">
            <span className="eyebrow">{eyebrowFront}</span>
            <h2 lang="ja">
              <JapaneseAnnotatedText
                text={card.japanese}
                reading={card.reading}
                disabled={!flipped}
              />
            </h2>
            <p className="muted">Chạm để lật thẻ · Kéo phải để Nhớ · Kéo trái nếu Quên</p>
            <div className="card-actions-row">
              <AudioButton text={card.japanese} />
            </div>
          </div>

          {/* Back Face */}
          <div className="review-card-face review-card-back">
            <span className="eyebrow">{eyebrowBack}</span>
            <h2 lang="ja">
              <JapaneseAnnotatedText
                text={card.japanese}
                reading={card.reading}
                disabled={!flipped}
              />
            </h2>
            {flipped ? (
              <>
                <p className="review-reading">
                  {mode === 'romanized' ? toRomaji(card.reading) : card.reading}
                </p>
                <h3>{card.meaning}</h3>
                {card.example && (
                  <p className="review-example">
                    <JapaneseAnnotatedText text={card.example} />
                  </p>
                )}
                {card.note && <small className="review-note">{card.note}</small>}
              </>
            ) : (
              <p className="muted">Đang lật thẻ…</p>
            )}
            <div className="card-actions-row">
              <AudioButton text={card.japanese} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
