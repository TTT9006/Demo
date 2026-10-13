import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Radical, KanjiInfo } from '../../../packages/shared/kanji';
let data: Promise<{ radicals: Radical[]; characters: Record<string, KanjiInfo> }> | undefined;
export function kanjiData(): Promise<{
  radicals: Radical[];
  characters: Record<string, KanjiInfo>;
}> {
  return (data ??= Promise.all(
    ['radicals', 'characters'].map((f) =>
      readFile(path.resolve('data/kanji', f + '.json'), 'utf8'),
    ),
  ).then(([r, k]) => ({ radicals: JSON.parse(r), characters: JSON.parse(k) })));
}
export async function kanjiStrokes(character: string) {
  if ([...character].length !== 1) return null;
  const file = character.codePointAt(0)!.toString(16) + '.json';
  try {
    return JSON.parse(await readFile(path.resolve('data/kanji/strokes', file), 'utf8')) as {
      character: string;
      paths: string[];
      sourceCharacter: string;
    };
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw e;
  }
}
