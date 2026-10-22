import { it, expect } from 'vitest';
import { parsePdfTextLines } from '../apps/web/src/services/client-pdf-parser';
it('preserves numbered table fields, kana-only entries and punctuation', () => {
 const r=parsePdfTextLines(['[THỦ] 手\tて\tTay','スプーン\tスプーン\tMuỗng, thìa','[THIẾT] 切ります\tきります\tCắt','いらっしゃい。\tいらっしゃい。\tRất hoan nghênh']);
 expect(r.cards).toHaveLength(4);
 expect(r.cards[0]).toMatchObject({term:'手',reading:'て',meaning:'Tay',sinoVietnamese:'[THỦ]'});
 expect(r.cards[2]).toMatchObject({term:'切ります',reading:'きります',meaning:'Cắt',sinoVietnamese:'[THIẾT]'});
 expect(r.cards[3].meaning).toBe('Rất hoan nghênh');
});
