import { generateSearchVariants, normalizeKana } from '../../../../packages/shared/japanese-query';
export function SearchHighlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const v = generateSearchVariants(query),
    terms = [v.normalized, ...v.readings, ...v.romaji]
      .filter(Boolean)
      .sort((a, b) => b.length - a.length);
  // Match normalized code points but render original text without injecting HTML.
  const normalized = normalizeKana(text).toLowerCase();
  if (normalized.length !== text.length) return <>{text}</>;
  const result = [];
  let offset = 0;
  while (offset < text.length) {
    const hits = terms
      .map((t) => ({ i: normalized.indexOf(t, offset), t }))
      .filter((h) => h.i >= 0)
      .sort((a, b) => a.i - b.i || b.t.length - a.t.length);
    const h = hits[0];
    if (!h) {
      result.push(text.slice(offset));
      break;
    }
    result.push(text.slice(offset, h.i));
    result.push(<mark key={h.i}>{text.slice(h.i, h.i + h.t.length)}</mark>);
    offset = h.i + h.t.length;
  }
  return <>{result}</>;
}
