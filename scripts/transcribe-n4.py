import os
import json
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

os.environ['HF_HOME'] = r'D:\Demo\output\jlpt-audit\models'
from faster_whisper import WhisperModel
from faster_whisper.audio import decode_audio

mp3 = r'c:\Users\Hoang Vuong\Desktop\Tiếng nhật\đề và nghe\N4\N4 tháng 7-2024\Nghe N4 T7-2024 Yuuki Bùi.mp3'
out_json = r'D:\Demo\scripts\n4-2024-07-transcript.json'

print(f"Loading audio from {mp3}...")
audio = decode_audio(mp3)
duration_sec = len(audio) / 16000
print(f"Audio duration: {duration_sec:.1f}s ({duration_sec/60:.2f} mins)")

print("Loading Whisper model (small, int8, cpu)...")
model = WhisperModel('small', device='cpu', compute_type='int8', cpu_threads=4, download_root=os.environ['HF_HOME'])

print("Transcribing with VAD...")
segments, info = model.transcribe(audio, language='ja', beam_size=1, vad_filter=True)

rows = []
for s in segments:
    row = dict(start=round(s.start, 2), end=round(s.end, 2), text=s.text.strip())
    rows.append(row)
    if '問題' in s.text or '番' in s.text or '例' in s.text:
        print(f"[{row['start']} -> {row['end']}] {row['text']}")

Path(out_json).write_text(json.dumps(dict(source=mp3, duration=duration_sec, segments=rows), ensure_ascii=False, indent=2), encoding='utf-8')
print(f"Successfully saved {len(rows)} segments to {out_json}")
