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
export async function speak(text: string) {
  if (!('speechSynthesis' in window)) throw Error('Trình duyệt này chưa hỗ trợ phát âm.');
  let voices = speechSynthesis.getVoices();
  if (!voices.length) {
    await new Promise<void>((resolve) => {
      const timer = setTimeout(resolve, 1000);
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
  const voice = voices.find((v) => v.lang.startsWith('ja'));
  if (!voice)
    throw Error('Chưa có giọng tiếng Nhật. Hãy cài giọng tiếng Nhật trong cài đặt thiết bị.');
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.voice = voice;
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);
}
