import React from 'react';

export interface DeckCoverProps {
  name: string;
  index: number;
}

interface ThemeConfig {
  tag: string;
  kanji: string;
  sub: string;
  bgLight: string;
  bgDark: string;
  accent: string;
  renderIllustration: () => React.ReactNode;
}

export function getDeckTheme(name: string, index: number): ThemeConfig {
  const n = (name || '').toLowerCase();

  // 1. Hiragana
  if (n.includes('hiragana')) {
    return {
      tag: 'BẢNG CHỮ CÁI',
      kanji: 'あ',
      sub: 'ひらがな',
      bgLight: 'linear-gradient(135deg, #e8f3ea 0%, #d4e8d8 100%)',
      bgDark: 'linear-gradient(135deg, #1e2e22 0%, #17241b 100%)',
      accent: '#4e7e59',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Seigaiha waves in background */}
          <path d="M-20 120 A 40 40 0 0 1 60 120 A 40 40 0 0 1 140 120 A 40 40 0 0 1 220 120" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
          <path d="M-20 120 A 30 30 0 0 1 60 120 A 30 30 0 0 1 140 120 A 40 40 0 0 1 220 120" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.2" />
          <path d="M20 120 A 40 40 0 0 1 100 120 A 40 40 0 0 1 180 120" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
          {/* Bamboo leaf / Wakaba sprout */}
          <path d="M145 75 Q165 45 185 55 Q175 75 155 80 Z" fill="currentColor" fillOpacity="0.35" />
          <path d="M148 78 Q170 85 182 100 Q160 102 148 85 Z" fill="currentColor" fillOpacity="0.28" />
        </svg>
      ),
    };
  }

  // 2. Katakana
  if (n.includes('katakana')) {
    return {
      tag: 'BẢNG CHỮ CÁI',
      kanji: 'ア',
      sub: 'カタカナ',
      bgLight: 'linear-gradient(135deg, #faece5 0%, #f4dcd2 100%)',
      bgDark: 'linear-gradient(135deg, #38251e 0%, #281a15 100%)',
      accent: '#b86642',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Geometric Asanoha (hemp leaf) lines */}
          <path d="M130 30 L160 60 L130 90 L100 60 Z" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
          <path d="M160 60 L190 30 M160 60 L190 90 M130 30 L130 90 M100 60 L160 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          {/* Sun / Origami geometric accent */}
          <circle cx="160" cy="40" r="14" fill="currentColor" fillOpacity="0.18" />
          <polygon points="150,85 175,70 170,95" fill="currentColor" fillOpacity="0.28" />
        </svg>
      ),
    };
  }

  // 3. Thiên nhiên
  if (n.includes('thiên nhiên') || n.includes('nature')) {
    return {
      tag: 'KANJI · THIÊN NHIÊN',
      kanji: '山',
      sub: 'やま · NÚI',
      bgLight: 'linear-gradient(135deg, #e3edf5 0%, #cde0ec 100%)',
      bgDark: 'linear-gradient(135deg, #1b2834 0%, #141f29 100%)',
      accent: '#3e6f96',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Rising Sun */}
          <circle cx="150" cy="42" r="22" fill="#d95a53" fillOpacity="0.22" />
          {/* Fuji Mountain Silhouette */}
          <path d="M90 120 L135 55 Q145 42 155 55 L200 120 Z" fill="currentColor" fillOpacity="0.25" />
          {/* Snow cap */}
          <path d="M135 55 Q145 42 155 55 L165 70 Q155 65 145 72 Q138 67 125 70 Z" fill="#ffffff" fillOpacity="0.5" />
          {/* Floating Cloud */}
          <path d="M70 70 Q80 62 95 65 Q105 58 120 65 Q130 75 115 78 L75 78 Q65 78 70 70 Z" fill="currentColor" fillOpacity="0.18" />
          {/* Water rippling */}
          <path d="M60 105 Q90 100 120 105 T180 105" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 4" />
        </svg>
      ),
    };
  }

  // 4. Số đếm
  if (n.includes('số đếm') || n.includes('number')) {
    return {
      tag: 'KANJI · SỐ ĐẾM',
      kanji: '百',
      sub: 'ひゃく · TRĂM',
      bgLight: 'linear-gradient(135deg, #f5efe6 0%, #eae0d0 100%)',
      bgDark: 'linear-gradient(135deg, #2e261e 0%, #201a14 100%)',
      accent: '#8c6f4b',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Soroban / Abacus bead motif */}
          <rect x="110" y="25" width="75" height="70" rx="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="110" y1="45" x2="185" y2="45" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
          {/* Beads */}
          <circle cx="125" cy="35" r="5" fill="currentColor" fillOpacity="0.4" />
          <circle cx="147" cy="35" r="5" fill="currentColor" fillOpacity="0.4" />
          <circle cx="170" cy="40" r="5" fill="currentColor" fillOpacity="0.4" />
          <circle cx="125" cy="65" r="5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="125" cy="78" r="5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="147" cy="55" r="5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="170" cy="70" r="5" fill="currentColor" fillOpacity="0.3" />
          <circle cx="170" cy="83" r="5" fill="currentColor" fillOpacity="0.3" />
        </svg>
      ),
    };
  }

  // 5. Động vật và cây cối
  if (n.includes('động vật') || n.includes('cây cối') || n.includes('animal')) {
    return {
      tag: 'KANJI · SINH VẬT',
      kanji: '花',
      sub: 'はな · HOA',
      bgLight: 'linear-gradient(135deg, #edf4e8 0%, #dae9d2 100%)',
      bgDark: 'linear-gradient(135deg, #1e2c1c 0%, #152014 100%)',
      accent: '#5a8549',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Cherry Blossom (Sakura) 5 petals */}
          <g transform="translate(150, 48) scale(0.85)">
            <circle cx="0" cy="-18" r="10" fill="#e88597" fillOpacity="0.38" />
            <circle cx="17" cy="-5" r="10" fill="#e88597" fillOpacity="0.38" />
            <circle cx="11" cy="15" r="10" fill="#e88597" fillOpacity="0.38" />
            <circle cx="-11" cy="15" r="10" fill="#e88597" fillOpacity="0.38" />
            <circle cx="-17" cy="-5" r="10" fill="#e88597" fillOpacity="0.38" />
            <circle cx="0" cy="0" r="4" fill="#d95368" fillOpacity="0.5" />
          </g>
          {/* Flying Bird / Tsuru Origami */}
          <path d="M100 35 Q115 28 125 35 Q118 42 100 35 Z" fill="currentColor" fillOpacity="0.3" />
          <path d="M110 32 L115 18 L122 32 Z" fill="currentColor" fillOpacity="0.25" />
          {/* Forest leaves at bottom */}
          <path d="M120 115 Q140 85 165 95 Q150 115 120 115 Z" fill="currentColor" fillOpacity="0.35" />
          <path d="M155 115 Q175 80 195 90 Q180 115 155 115 Z" fill="currentColor" fillOpacity="0.25" />
        </svg>
      ),
    };
  }

  // 6. Con người và cơ thể
  if (n.includes('con người') || n.includes('cơ thể') || n.includes('human')) {
    return {
      tag: 'KANJI · CON NGƯỜI',
      kanji: '心',
      sub: 'こころ · TÂM',
      bgLight: 'linear-gradient(135deg, #fcedee 0%, #f6d8db 100%)',
      bgDark: 'linear-gradient(135deg, #331f24 0%, #25161a 100%)',
      accent: '#a85365',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Enso Zen Circle (Circle of Enlightenment & Heart) */}
          <path
            d="M 150 25 A 35 35 0 1 1 125 40"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            strokeOpacity="0.28"
          />
          {/* Stylized Heart Dots */}
          <circle cx="150" cy="60" r="12" fill="#d95b72" fillOpacity="0.25" />
          <circle cx="168" cy="48" r="6" fill="#d95b72" fillOpacity="0.3" />
          <path d="M105 85 Q130 70 155 85" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
        </svg>
      ),
    };
  }

  // 7. Trường học / Học tập
  if (n.includes('trường học') || n.includes('học') || n.includes('school')) {
    return {
      tag: 'KANJI · TRƯỜNG HỌC',
      kanji: '学',
      sub: 'まなぶ · HỌC',
      bgLight: 'linear-gradient(135deg, #e8f0f3 0%, #d3e2e8 100%)',
      bgDark: 'linear-gradient(135deg, #1b262d 0%, #141c22 100%)',
      accent: '#477085',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Open Book */}
          <path d="M110 80 Q135 70 150 75 Q165 70 190 80 L190 50 Q165 40 150 45 Q135 40 110 50 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
          <line x1="150" y1="45" x2="150" y2="75" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Pen / Quill */}
          <path d="M165 22 L180 37 L145 72 L137 73 L138 65 Z" fill="currentColor" fillOpacity="0.35" />
          {/* Sprout emerging from book */}
          <circle cx="150" cy="30" r="4" fill="#699f78" fillOpacity="0.6" />
        </svg>
      ),
    };
  }

  // 8. Thời gian và phương hướng
  if (n.includes('thời gian') || n.includes('phương hướng') || n.includes('time')) {
    return {
      tag: 'KANJI · THỜI GIAN',
      kanji: '時',
      sub: 'とき · THỜI GIAN',
      bgLight: 'linear-gradient(135deg, #eeeaf5 0%, #ded6ec 100%)',
      bgDark: 'linear-gradient(135deg, #282136 0%, #1c1727 100%)',
      accent: '#6c568f',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Sun & Moon Dial */}
          <circle cx="150" cy="55" r="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.3" />
          {/* Crescent Moon */}
          <path d="M150 30 A 25 25 0 0 0 170 65 A 22 22 0 1 1 150 30 Z" fill="currentColor" fillOpacity="0.28" />
          {/* Compass 4 pointers */}
          <polygon points="150,28 153,52 150,55 147,52" fill="#d96b52" fillOpacity="0.6" />
          <polygon points="150,82 153,58 150,55 147,58" fill="currentColor" fillOpacity="0.3" />
          <polygon points="177,55 153,52 150,55 153,58" fill="currentColor" fillOpacity="0.3" />
          <polygon points="123,55 147,52 150,55 147,58" fill="currentColor" fillOpacity="0.3" />
        </svg>
      ),
    };
  }

  // 9. Một ngày ở Nhật / Du lịch / Đời sống
  if (n.includes('nhật') || n.includes('ngày') || n.includes('du lịch') || n.includes('japan')) {
    return {
      tag: 'ĐỜI SỐNG · DU LỊCH',
      kanji: '旅',
      sub: 'たび · HÀNH TRÌNH',
      bgLight: 'linear-gradient(135deg, #faece5 0%, #f4d6c8 100%)',
      bgDark: 'linear-gradient(135deg, #37231a 0%, #251610 100%)',
      accent: '#b85835',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Red Torii Gate Silhouette */}
          <g transform="translate(115, 30)">
            {/* Top curved roof */}
            <path d="M0 12 Q35 5 70 12 L68 18 Q35 12 2 18 Z" fill="#c94a38" fillOpacity="0.45" />
            {/* Second beam */}
            <rect x="8" y="24" width="54" height="4" rx="1" fill="#c94a38" fillOpacity="0.4" />
            {/* Left pillar */}
            <polygon points="16,24 14,75 22,75 22,24" fill="#c94a38" fillOpacity="0.4" />
            {/* Right pillar */}
            <polygon points="48,24 48,75 56,75 54,24" fill="#c94a38" fillOpacity="0.4" />
          </g>
          {/* Sun behind Torii */}
          <circle cx="150" cy="50" r="16" fill="#e8614d" fillOpacity="0.22" />
        </svg>
      ),
    };
  }

  // 10. Bộ thủ Kanji
  if (n.includes('bộ thủ') || n.includes('radical')) {
    return {
      tag: 'BỘ THỦ KANJI',
      kanji: '部',
      sub: 'ぶしゅ · 214 BỘ',
      bgLight: 'linear-gradient(135deg, #f3eedd 0%, #e5ddc5 100%)',
      bgDark: 'linear-gradient(135deg, #2b271b 0%, #1d1a12 100%)',
      accent: '#827448',
      renderIllustration: () => (
        <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
          {/* Brush calligraphy strokes */}
          <path d="M120 40 Q150 35 180 42 Q175 48 145 46 Q130 47 120 40 Z" fill="currentColor" fillOpacity="0.35" />
          <path d="M148 44 Q152 75 142 95 Q135 90 142 70 Q145 55 148 44 Z" fill="currentColor" fillOpacity="0.3" />
          <circle cx="170" cy="75" r="8" fill="currentColor" fillOpacity="0.25" />
        </svg>
      ),
    };
  }

  // Default fallback: Vòng tuần hoàn màu hài hòa + mầm lá Wakaba
  const fallbackThemes = [
    { kanji: '語', tag: 'BỘ TỪ VỰNG', sub: 'ことば · TỪ VỰNG', bgLight: 'linear-gradient(135deg, #eaf2eb 0%, #d8e5d9 100%)', bgDark: 'linear-gradient(135deg, #1c2b20 0%, #152018 100%)', accent: '#507c57' },
    { kanji: '葉', tag: 'BỘ TỪ VỰNG', sub: 'わかば · WAKABA', bgLight: 'linear-gradient(135deg, #f7efe6 0%, #ebe1d2 100%)', bgDark: 'linear-gradient(135deg, #2d261e 0%, #1e1913 100%)', accent: '#8b6f4e' },
    { kanji: '日', tag: 'BỘ TỪ VỰNG', sub: 'にほん · NHẬT BẢN', bgLight: 'linear-gradient(135deg, #f7eae5 0%, #ebd7d0 100%)', bgDark: 'linear-gradient(135deg, #32211b 0%, #211612 100%)', accent: '#9c5943' },
  ];
  const fb = fallbackThemes[index % fallbackThemes.length];
  return {
    ...fb,
    renderIllustration: () => (
      <svg viewBox="0 0 200 120" className="deck-cover-svg" fill="none">
        {/* Soft circle & Sprout */}
        <circle cx="150" cy="55" r="28" fill="currentColor" fillOpacity="0.15" />
        <path d="M145 68 Q155 35 175 42 Q168 62 148 70 Z" fill="currentColor" fillOpacity="0.35" />
        <path d="M148 70 Q130 50 125 35 Q145 38 150 65 Z" fill="currentColor" fillOpacity="0.25" />
      </svg>
    ),
  };
}

export function DeckCoverArt({ name, index }: DeckCoverProps) {
  const theme = getDeckTheme(name, index);
  return (
    <div
      className="deck-art-modern"
      style={{
        '--cover-bg-light': theme.bgLight,
        '--cover-bg-dark': theme.bgDark,
        '--cover-accent': theme.accent,
      } as React.CSSProperties}
    >
      {/* Background artwork illustration */}
      {theme.renderIllustration()}

      {/* Top badges */}
      <div className="deck-cover-top">
        <span className="deck-cover-tag">{theme.tag}</span>
        <span className="deck-cover-num">{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Central typography centerpiece */}
      <div className="deck-cover-center">
        <span className="deck-cover-kanji">{theme.kanji}</span>
        <span className="deck-cover-sub">{theme.sub}</span>
      </div>
    </div>
  );
}
