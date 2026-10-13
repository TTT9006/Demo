import kuromoji from 'kuromoji';
import { createRequire } from 'node:module';
import path from 'node:path';
import {
  alignReading,
  hasKanji,
  type AnnotationSegment,
} from '../../../packages/shared/annotation';
const require = createRequire(import.meta.url);
const cache = new Map<string, AnnotationSegment[]>();
type Tokenizer = {
  tokenize(text: string): { surface_form: string; reading?: string; word_type: string }[];
};
let tokenizer: Promise<Tokenizer> | undefined;
export async function annotate(text: string): Promise<AnnotationSegment[]> {
  if (!hasKanji(text)) return [{ text }];
  const cached = cache.get(text);
  if (cached) return cached;
  tokenizer ??= new Promise<Tokenizer>((resolve, reject) =>
    kuromoji
      .builder({
        dicPath: path.join(path.dirname(require.resolve('kuromoji/package.json')), 'dict'),
      })
      .build((e, t) => (e ? reject(e) : resolve(t))),
  ).catch((e) => {
    tokenizer = undefined;
    throw e;
  });
  const tokens = (await tokenizer).tokenize(text),
    result: AnnotationSegment[] = [];
  let offset = 0;
  for (const token of tokens) {
    const start = text.indexOf(token.surface_form, offset);
    if (start < offset) continue;
    if (start > offset) result.push({ text: text.slice(offset, start) });
    result.push(
      ...(token.word_type === 'KNOWN' && token.reading
        ? alignReading(token.surface_form, token.reading)
        : [{ text: token.surface_form }]),
    );
    offset = start + token.surface_form.length;
  }
  if (offset < text.length) result.push({ text: text.slice(offset) });
  if (cache.size >= 1000) cache.delete(cache.keys().next().value!);
  cache.set(text, result);
  return result;
}
