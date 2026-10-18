import { EdgeTTS } from 'node-edge-tts';

// Bộ nhớ đệm âm thanh trong RAM để phát ngay lập tức (0ms) cho các từ hay gặp
const audioCache = new Map<string, Buffer>();
const MAX_CACHE_SIZE = 2000;

/**
 * Tạo âm thanh giọng đọc tiếng Nhật tự nhiên (Nanami Neural)
 * Có cơ chế lưu đệm và tự động phục hồi nếu có gián đoạn kết nối
 */
export async function synthesizeSpeech(text: string, voice = 'ja-JP-NanamiNeural'): Promise<Buffer> {
  const clean = text.trim();
  if (!clean) {
    throw new Error('Nội dung phát âm không được để trống.');
  }

  const cacheKey = `${voice}:${clean}`;
  const cached = audioCache.get(cacheKey);
  if (cached) {
    // Làm mới vị trí trong bộ đệm (LRU)
    audioCache.delete(cacheKey);
    audioCache.set(cacheKey, cached);
    return cached;
  }

  let buffer: Buffer | null = null;

  // 1. Tạo giọng đọc tự nhiên qua Microsoft Azure Neural (Nanami) bằng node-edge-tts
  try {
    const tts = new EdgeTTS({
      voice,
      lang: 'ja-JP',
      outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
      timeout: 10000,
    });
    const chunks: Buffer[] = [];
    for await (const chunk of tts.streamAudio(clean)) {
      if (Buffer.isBuffer(chunk)) {
        chunks.push(chunk);
      }
    }
    if (chunks.length > 0) {
      buffer = Buffer.concat(chunks);
    }
  } catch (edgeErr) {
    console.warn('Lưu ý khi tạo giọng đọc Nanami:', edgeErr);
  }

  // 2. Dự phòng: Dùng Google Neural Speech nếu Microsoft tạm thời không phản hồi
  if (!buffer || buffer.length === 0) {
    try {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encodeURIComponent(clean)}`;
      const resp = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      if (resp.ok) {
        const ab = await resp.arrayBuffer();
        buffer = Buffer.from(ab);
      }
    } catch (gErr) {
      console.warn('Lưu ý khi gọi giọng đọc dự phòng:', gErr);
    }
  }

  if (!buffer || buffer.length === 0) {
    throw new Error('Không thể tạo âm thanh giọng đọc lúc này.');
  }

  // Giới hạn kích thước cache để không tốn RAM
  if (audioCache.size >= MAX_CACHE_SIZE) {
    const oldestKey = audioCache.keys().next().value;
    if (oldestKey) audioCache.delete(oldestKey);
  }
  audioCache.set(cacheKey, buffer);

  return buffer;
}
