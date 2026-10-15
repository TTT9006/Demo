// Bounded reverse conjugation. Candidates must also match a JMdict part-of-speech tag.
type Rule = { from: string; to: string; kind: string; surface: string; label: string };
export type Inflection = { term: string; kind: string; steps: string[] };
const rules: Rule[] = [];
const add = (from: string, to: string, kind: string, label: string, surface = 'end') =>
  rules.push({ from, to, kind, label, surface });
const polite = [['ます', 'lịch sự'], ['ました', 'lịch sự, quá khứ'], ['ません', 'lịch sự, phủ định'], ['ませんでした', 'lịch sự, phủ định quá khứ'], ['ましょう', 'rủ rê lịch sự']] as const;
function stemForms(stem: string, ending: string, kind: string) {
  for (const [suffix, label] of polite) add(stem + suffix, ending, kind, label);
  add(stem + 'たい', ending, kind, 'mong muốn', 'adj-i');
  add(stem + 'たがる', ending, kind, 'biểu lộ mong muốn', 'v5r');
  add(stem + 'なさい', ending, kind, 'yêu cầu');
  add(stem + 'すぎる', ending, kind, 'quá mức', 'v1');
}
function negative(stem: string, ending: string, kind: string) {
  add(stem + 'ない', ending, kind, 'phủ định', 'adj-i');
  for (const suffix of (kind === 'vs' ? ['なくて', 'ないで'] : ['なくて', 'ないで', 'ず', 'ずに', 'ぬ'])) add(stem + suffix, ending, kind, 'phủ định');
}
function tePast(te: string, past: string, ending: string, kind: string) {
  add(te, ending, kind, 'thể て', 'te');
  add(past, ending, kind, 'quá khứ');
  add(past + 'ら', ending, kind, 'điều kiện たら');
  add(past + 'り', ending, kind, 'liệt kê たり');
}
const rows = [
  ['う', 'い', 'わ', 'え', 'お', 'って', 'った', 'v5u'],
  ['く', 'き', 'か', 'け', 'こ', 'いて', 'いた', 'v5k'],
  ['ぐ', 'ぎ', 'が', 'げ', 'ご', 'いで', 'いだ', 'v5g'],
  ['す', 'し', 'さ', 'せ', 'そ', 'して', 'した', 'v5s'],
  ['つ', 'ち', 'た', 'て', 'と', 'って', 'った', 'v5t'],
  ['ぬ', 'に', 'な', 'ね', 'の', 'んで', 'んだ', 'v5n'],
  ['ぶ', 'び', 'ば', 'べ', 'ぼ', 'んで', 'んだ', 'v5b'],
  ['む', 'み', 'ま', 'め', 'も', 'んで', 'んだ', 'v5m'],
  ['る', 'り', 'ら', 'れ', 'ろ', 'って', 'った', 'v5r'],
  ['く', 'き', 'か', 'け', 'こ', 'って', 'った', 'v5k-s'],
  ['る', 'り', 'ら', 'れ', 'ろ', 'って', 'った', 'v5r-i'],
  ['る', 'い', 'ら', 'れ', 'ろ', 'って', 'った', 'v5aru'],
];
for (const [u, i, a, e, o, te, past, kind] of rows) {
  stemForms(i, u, kind);
  if (kind !== 'v5r-i') negative(a, u, kind);
  tePast(te, past, u, kind);
  add(e + 'る', u, kind, 'khả năng', 'v1');
  add(a + 'れる', u, kind, 'bị động', 'v1');
  add(a + 'せる', u, kind, 'sai khiến', 'v1');
  if (u !== 'す') add(a + 'される', u, kind, 'sai khiến bị động rút gọn', 'v1');
  add(e + 'ば', u, kind, 'điều kiện ば');
  add(e, u, kind, 'mệnh lệnh');
  add(o + 'う', u, kind, 'ý chí');
}
stemForms('し', 'する', 'vs');
negative('し', 'する', 'vs');
add('せず', 'する', 'vs', 'phủ định');
add('せずに', 'する', 'vs', 'phủ định');
add('せぬ', 'する', 'vs', 'phủ định');
tePast('して', 'した', 'する', 'vs');
for (const [from, label] of [['できる', 'khả năng'], ['される', 'bị động'], ['させる', 'sai khiến']]) add(from, 'する', 'vs', label, 'v1');
for (const [from, label] of [['すれば', 'điều kiện ば'], ['しろ', 'mệnh lệnh'], ['せよ', 'mệnh lệnh'], ['しよう', 'ý chí']]) add(from, 'する', 'vs', label);
for (const [ki, ko, ku] of [['き', 'こ', 'く'], ['来', '来', '来']]) {
  stemForms(ki, ku + 'る', 'vk');
  negative(ko, ku + 'る', 'vk');
  tePast(ki + 'て', ki + 'た', ku + 'る', 'vk');
  add(ko + 'られる', ku + 'る', 'vk', 'khả năng / bị động', 'v1');
  add(ko + 'させる', ku + 'る', 'vk', 'sai khiến', 'v1');
  add(ko + 'れる', ku + 'る', 'vk', 'khả năng rút gọn', 'v1');
  add(ku + 'れば', ku + 'る', 'vk', 'điều kiện ば');
  add(ko + 'い', ku + 'る', 'vk', 'mệnh lệnh');
  add(ko + 'よう', ku + 'る', 'vk', 'ý chí');
}
stemForms('', 'る', 'v1');
negative('', 'る', 'v1');
tePast('て', 'た', 'る', 'v1');
add('られる', 'る', 'v1', 'khả năng / bị động', 'v1');
add('れる', 'る', 'v1', 'khả năng rút gọn', 'v1');
add('させる', 'る', 'v1', 'sai khiến', 'v1');
for (const [suffix, label] of [['れば', 'điều kiện ば'], ['ろ', 'mệnh lệnh'], ['よ', 'mệnh lệnh'], ['よう', 'ý chí']]) add(suffix, 'る', 'v1', label);
add('ない', 'ある', 'v5r-i', 'phủ định', 'adj-i');
for (const [from, label] of [['かった', 'quá khứ'], ['くない', 'phủ định'], ['くて', 'thể て'], ['ければ', 'điều kiện ば'], ['かったら', 'điều kiện たら']]) add(from, 'い', 'adj-i', label, 'adj-i');
add('です', '', 'adj-i', 'lịch sự');
add('くありません', 'い', 'adj-i', 'lịch sự, phủ định');
add('くありませんでした', 'い', 'adj-i', 'lịch sự, phủ định quá khứ');
for (const from of ['よかった', 'よくない', 'よくて', 'よければ']) add(from, 'いい', 'adj-i', 'dạng chia của いい', 'adj-i');
for (const [from, label] of [['でした', 'lịch sự, quá khứ'], ['です', 'lịch sự'], ['だった', 'quá khứ'], ['じゃない', 'phủ định'], ['ではない', 'phủ định'], ['ではありません', 'lịch sự, phủ định'], ['ではありませんでした', 'lịch sự, phủ định quá khứ'], ['じゃありません', 'lịch sự, phủ định'], ['だったら', 'điều kiện たら'], ['なら', 'điều kiện']]) add(from, '', 'adj-na', label, from.endsWith('ない') ? 'adj-i' : 'end');
for (const te of ['て', 'で']) {
  for (const [suffix, label] of [['いる', 'tiếp diễn'], ['る', 'tiếp diễn rút gọn'], ['おく', 'làm trước'], ['しまう', 'hoàn tất']]) {
    add(te + suffix, te, 'te', label, suffix === 'おく' ? 'v5k' : suffix === 'しまう' ? 'v5u' : 'v1');
  }
  add(te + 'ください', te, 'te', 'yêu cầu');
}
add('ちゃう', 'て', 'te', 'hoàn tất rút gọn', 'v5u');
add('じゃう', 'で', 'te', 'hoàn tất rút gọn', 'v5u');

export function deinflect(term: string): Inflection[] {
  if (!/^[\p{Script=Hiragana}\p{Script=Han}ー]+$/u.test(term) || term.length > 80) return [];
  const queue: Inflection[] = [{ term, kind: '*', steps: [] }];
  const seen = new Set<string>();
  for (let index = 0; index < queue.length && queue.length < 256; index++) {
    const current = queue[index];
    if (current.steps.length >= 6) continue;
    for (const rule of rules) {
      if (current.kind !== '*' && current.kind !== rule.surface) continue;
      if (!current.term.endsWith(rule.from)) continue;
      const next = current.term.slice(0, -rule.from.length) + rule.to;
      const key = next + ':' + rule.kind;
      if (!next || next === term || seen.has(key)) continue;
      seen.add(key);
      queue.push({ term: next, kind: rule.kind, steps: [...current.steps, rule.label] });
      if (queue.length >= 256) break;
    }
  }
  const result = queue.slice(1).filter(c => c.kind !== 'te');
  // JMdict also stores suru nouns as 勉強 (vs), without a separate 勉強する headword.
  for (const candidate of [{ term, kind: 'vs', steps: [] }, ...result]) {
    if (candidate.kind === 'vs' && candidate.term.endsWith('する') && candidate.term.length > 2) {
      result.push({ term: candidate.term.slice(0, -2), kind: 'vs-n', steps: [...candidate.steps, 'động từ với する'] });
    }
  }
  return result.slice(0, 255);
}

export function matchesPartOfSpeech(kind: string, tags: string[]) {
  if (kind === 'vs-n') return tags.includes('vs');
  return tags.some(tag => tag === kind || (kind === 'vs' && ['vs-i', 'vs-s'].includes(tag)) || (kind === 'v1' && tag === 'v1-s') || (kind === 'adj-i' && tag === 'adj-ix'));
}
