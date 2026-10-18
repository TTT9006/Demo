export async function api<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch('/api' + url, {
    ...options,
    credentials: 'same-origin',
    headers: {
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...options.headers,
    },
  });
  const body = (await response.json()) as T & { error?: string };
  if (!response.ok) throw new Error(body.error || 'Không thể kết nối. Vui lòng thử lại.');
  return body;
}
export const post = <T>(url: string, data: unknown = {}) =>
  api<T>(url, { method: 'POST', body: JSON.stringify(data) });
export const patch = <T>(url: string, data: unknown) =>
  api<T>(url, { method: 'PATCH', body: JSON.stringify(data) });
export const remove = (url: string) => api(url, { method: 'DELETE' });
let activeAudio: HTMLAudioElement | null = null;

export function stopSpeech() {
  if (activeAudio) {
    try {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    } catch {}
    activeAudio = null;
  }
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

export async function speak(text: string): Promise<void> {
  const clean = text.trim();
  if (!clean) return;

  stopSpeech();

  // 1. Ưu tiên hàng đầu: Giọng AI tự nhiên Nanami Neural từ máy chủ
  try {
    const url = `/api/tts?text=${encodeURIComponent(clean)}`;
    const audio = new Audio(url);
    activeAudio = audio;

    await new Promise<void>((resolve, reject) => {
      audio.onended = () => {
        if (activeAudio === audio) activeAudio = null;
        resolve();
      };
      audio.onerror = () => {
        if (activeAudio === audio) activeAudio = null;
        reject(new Error('Lỗi phát âm thanh'));
      };
      audio.play().catch(reject);
    });
    return;
  } catch (err) {
    console.warn('Không thể phát qua máy chủ TTS, chuyển sang bộ tổng hợp trình duyệt:', err);
  }

  // 2. Dự phòng ngoại tuyến: Web Speech API của trình duyệt nếu mất kết nối
  if ('speechSynthesis' in window) {
    let voices = speechSynthesis.getVoices();
    if (!voices.length) {
      await new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, 500);
        speechSynthesis.addEventListener(
          'voiceschanged',
          () => {
            clearTimeout(timer);
            resolve();
          },
          { once: true },
        );
      });
      voices = speechSynthesis.getVoices();
    }
    const voice =
      voices.find((v) => v.name.includes('Nanami') || v.name.includes('Natural')) ||
      voices.find((v) => v.lang.startsWith('ja'));

    await new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(clean);
      utterance.lang = 'ja-JP';
      if (voice) utterance.voice = voice;
      utterance.rate = 1.0;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      speechSynthesis.speak(utterance);
    });
  }
}

