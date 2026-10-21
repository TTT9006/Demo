import { memo, useSyncExternalStore, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toRomaji } from 'wanakana';
import {
  alignReading,
  suppliedSegments,
  hasKanji,
  type AnnotationMode,
  type AnnotationSegment,
} from '../../../../packages/shared/annotation';
import { api, patch } from '../services/api';
import { useUser } from '../app';
import type { User } from '../types';
import { useUI } from '../stores/ui';
const event = 'wakaba-annotation-mode';
function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(event, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(event, callback);
  };
}
function guestMode(): AnnotationMode {
  try {
    return (localStorage.getItem(event) || localStorage.getItem('komorebi-annotation-mode')) === 'romanized'
      ? 'romanized'
      : 'japanese';
  } catch {
    return 'japanese';
  }
}
export function useAnnotationMode() {
  const { data: user } = useUser();
  const guest = useSyncExternalStore(subscribe, guestMode, () => 'japanese' as const);
  return user?.annotationMode || guest;
}
export const JapaneseAnnotatedText = memo(function JapaneseAnnotatedText({
  text,
  reading,
  readings,
  annotationMode,
  disabled = false,
}: {
  text: string;
  reading?: string;
  readings?: Record<string, string>;
  annotationMode?: AnnotationMode;
  disabled?: boolean;
}) {
  const setting = useAnnotationMode(),
    mode = annotationMode || setting;
  const supplied = reading || readings?.[text];
  const query = useQuery({
    queryKey: ['annotation', 'kuromoji-0.1.2-ipadic', text],
    queryFn: ({ signal }) =>
      api<{ segments: AnnotationSegment[] }>('/annotations', {
        method: 'POST',
        body: JSON.stringify({ text }),
        signal,
      }),
    enabled: !disabled && !supplied && !readings && hasKanji(text),
    staleTime: Infinity,
    gcTime: 3600000,
    retry: false,
  });
  const segments = disabled
    ? [{ text }]
    : supplied
      ? alignReading(text, supplied)
      : readings
        ? suppliedSegments(text, readings)
        : query.data?.segments || [{ text }];
  return (
    <span className="japanese-annotated">
      {segments.map((s, i) =>
        s.reading ? (
          <ruby key={i}>
            {s.text}
            <rp aria-hidden="true">(</rp>
            <rt aria-hidden="true">{mode === 'romanized' ? toRomaji(s.reading) : s.reading}</rt>
            <rp aria-hidden="true">)</rp>
          </ruby>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </span>
  );
});
export function AnnotationSettings() {
  const mode = useAnnotationMode(),
    { data: user } = useUser(),
    client = useQueryClient(),
    notify = useUI((s) => s.notify);
  const [busy, setBusy] = useState(false);
  async function change(annotationMode: AnnotationMode) {
    if (user) {
      setBusy(true);
      client.setQueryData(['user'], { ...user, annotationMode });
      try {
        client.setQueryData(['user'], await patch<User>('/profile', { annotationMode }));
      } catch (e) {
        client.setQueryData(['user'], user);
        notify((e as Error).message);
      } finally {
        setBusy(false);
      }
    } else {
      try {
        localStorage.setItem(event, annotationMode);
        window.dispatchEvent(new Event(event));
      } catch {
        notify('Trình duyệt không cho phép lưu cài đặt.');
      }
    }
  }
  return (
    <section className="panel settings-section spaced">
      <div>
        <h2>Chú thích cách đọc</h2>
        <p>Chọn cách hiển thị phiên âm bên trên chữ Kanji trong bài học và bài tập.</p>
      </div>
      <div>
        <fieldset disabled={busy}>
          <legend className="sr-only">Chú thích cách đọc</legend>
          {(['romanized', 'japanese'] as const).map((value) => (
            <label className="checkbox-label" key={value}>
              <input
                type="radio"
                name="annotationMode"
                checked={mode === value}
                onChange={() => void change(value)}
              />
              {value === 'romanized' ? 'Romanized — Romaji' : 'Japanese — Furigana'}
            </label>
          ))}
        </fieldset>
        <p className="annotation-preview" lang="ja">
          <JapaneseAnnotatedText
            text="私は日本語を勉強します。"
            reading="わたしはにほんごをべんきょうします。"
            annotationMode={mode}
          />
        </p>
      </div>
    </section>
  );
}
