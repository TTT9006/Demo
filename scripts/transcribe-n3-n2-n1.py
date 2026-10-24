import os
import json
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

os.environ['HF_HOME'] = r'D:\Demo\output\jlpt-audit\models'
from faster_whisper import WhisperModel
from faster_whisper.audio import decode_audio

model = WhisperModel('small', device='cpu', compute_type='int8', cpu_threads=4, download_root=os.environ['HF_HOME'])

jobs = [
    {
        'name': 'N3 2023-07',
        'mp3': r'c:\Users\Hoang Vuong\Desktop\Tiếng nhật\đề và nghe\N3\n3\n3\7-2023\Nghe N3 T7-2023 Bản chuẩn Yuuki Bui.mp3',
        'out': r'D:\Demo\scripts\n3-2023-07-transcript.json'
    },
    {
        'name': 'N2 2023-07',
        'mp3': r'c:\Users\Hoang Vuong\Desktop\Tiếng nhật\đề và nghe\N2\ĐỀ JLPT N2\ĐỀ JLPT N2\Đề 1\Nghe N2 T7-2023 Bản chuẩn Yuuki Bui.mp3',
        'out': r'D:\Demo\scripts\n2-2023-07-transcript.json'
    },
    {
        'name': 'N1 2023-07',
        'mp3': r'c:\Users\Hoang Vuong\Desktop\Tiếng nhật\đề và nghe\N1\N1\ĐỀ JLPT N1\Đề 1\Nghe N1 T7-2023 Bản chuẩn Yuuki Bui.mp3',
        'out': r'D:\Demo\scripts\n1-2023-07-transcript.json'
    }
]

for job in jobs:
    mp3 = job['mp3']
    out_json = job['out']
    print(f"\n==========================================")
    print(f"Starting {job['name']}: {mp3}")
    if not os.path.exists(mp3):
        print(f"ERROR: File not found {mp3}")
        continue
    
    audio = decode_audio(mp3)
    duration_sec = len(audio) / 16000
    print(f"Duration: {duration_sec:.1f}s ({duration_sec/60:.2f} mins)")
    
    segments, info = model.transcribe(audio, language='ja', beam_size=1, vad_filter=True)
    rows = []
    for s in segments:
        row = dict(start=round(s.start, 2), end=round(s.end, 2), text=s.text.strip())
        rows.append(row)
        if '問題' in s.text or '番' in s.text or '例' in s.text:
            print(f"[{row['start']} -> {row['end']}] {row['text']}", flush=True)
            
    Path(out_json).write_text(json.dumps(dict(source=mp3, duration=duration_sec, segments=rows), ensure_ascii=False, indent=2), encoding='utf-8')
    print(f"Completed {job['name']} -> {out_json} with {len(rows)} segments", flush=True)

print("ALL JOBS FINISHED SUCCESSFULLY!")
