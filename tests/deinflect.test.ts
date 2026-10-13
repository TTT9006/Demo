import { describe, expect, it } from 'vitest';
import { deinflect, matchesPartOfSpeech } from '../apps/api/src/deinflect';
describe('Japanese reverse conjugation', () => {
  it.each([
    ['いきます', 'いく', 'v5k-s'], ['いきませんでした', 'いく', 'v5k-s'],
    ['行った', '行く', 'v5k-s'], ['いって', 'いく', 'v5k-s'],
    ['食べました', '食べる', 'v1'], ['たべなかった', 'たべる', 'v1'],
    ['食べていました', '食べる', 'v1'], ['食べさせられませんでした', '食べる', 'v1'],
    ['書けば', '書く', 'v5k'], ['書けます', '書く', 'v5k'],
    ['読まされた', '読む', 'v5m'], ['泳いだ', '泳ぐ', 'v5g'],
    ['話して', '話す', 'v5s'], ['待った', '待つ', 'v5t'],
    ['死んで', '死ぬ', 'v5n'], ['遊ぼう', '遊ぶ', 'v5b'],
    ['買わない', '買う', 'v5u'], ['帰りたい', '帰る', 'v5r'],
    ['しました', 'する', 'vs'], ['しなかった', 'する', 'vs'],
    ['できません', 'する', 'vs'], ['こなかった', 'くる', 'vk'],
    ['来ました', '来る', 'vk'], ['来させられた', '来る', 'vk'],
    ['高くなかった', '高い', 'adj-i'], ['高かったです', '高い', 'adj-i'],
    ['よくなかった', 'いい', 'adj-i'], ['静かじゃなかった', '静か', 'adj-na'],
    ['食べちゃった', '食べる', 'v1'], ['飲んでおきました', '飲む', 'v5m'],
    ['食べたくなかった', '食べる', 'v1'], ['なかった', 'ある', 'v5r-i'],
    ['勉強しました', '勉強', 'vs-n'], ['勉強せず', '勉強', 'vs-n'],
    ['高くありませんでした', '高い', 'adj-i'], ['くださいました', 'くださる', 'v5aru'],
  ])('%s → %s (%s)', (input, term, kind) => {
    expect(deinflect(input).some(c => c.term === term && c.kind === kind)).toBe(true);
  });
  it('does not conjugate English or unbounded input', () => {
    expect(deinflect('eat')).toEqual([]);
    expect(deinflect('あ'.repeat(1000))).toEqual([]);
    expect(deinflect('させられさせられませんでした').length).toBeLessThan(256);
  });
  it('requires the correct verb class, never nouns or unrelated verbs', () => {
    expect(matchesPartOfSpeech('v1', ['n'])).toBe(false);
    expect(matchesPartOfSpeech('v5k', ['v5k-s'])).toBe(false);
    expect(matchesPartOfSpeech('vs', ['vs-i'])).toBe(true);
  });
});
