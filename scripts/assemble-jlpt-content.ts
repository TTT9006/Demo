import * as fs from 'fs';
import * as path from 'path';

import { additionsData } from './build-jlpt-additions';
import { n4OriginalUpgraded } from './data-n4-extras';
import { n4Data } from './data-n4';
import { n3Data } from './data-n3';
import { n3DataPart2 } from './data-n3-part2';
import { n2DataPart1 } from './data-n2';
import { n2DataPart2 } from './data-n2-part2';

import { n1DataPart1 } from './data-n1-part1';
import { n1DataPart2 } from './data-n1-part2';
import { n1DataPart3 } from './data-n1-part3';

// 1. Assemble N5-N2 into packages/shared/jlpt-grammar-additions.ts
const n5n2Specs = [
  ...additionsData,
  ...n4OriginalUpgraded,
  ...n4Data,
  ...n3Data,
  ...n3DataPart2,
  ...n2DataPart1,
  ...n2DataPart2,
];

console.log('Assembling N5-N2 additions:', n5n2Specs.length);

const additionsTsContent = `import type { Exercise, LessonContent } from './content';

export type AdditionalGrammarSpec = {
  id: string;
  pattern: string;
  title: string;
  level: 'N5' | 'N4' | 'N3' | 'N2';
  position: number;
  meaning: string;
  formation: string;
  explanation: string;
  notes: string;
  mistake: string;
  related: string[];
  examples: {
    ja: string;
    kana: string;
    vi: string;
    readings?: Record<string, string>;
  }[];
  exercises: Exercise[];
};

export const additionalGrammarSpecs: AdditionalGrammarSpec[] = ${JSON.stringify(n5n2Specs, null, 2)};

export const jlptGrammarLessons = additionalGrammarSpecs.map((spec) => {
  const content: LessonContent = {
    meaning: spec.meaning,
    formation: spec.formation,
    explanation: spec.explanation,
    notes: spec.notes,
    mistake: spec.mistake,
    related: spec.related,
    examples: spec.examples,
    curriculum: {
      track: \`Ngữ pháp trọng điểm JLPT \${spec.level}\`,
      topic: spec.title,
      sourceUrl: \`https://www.vnjpclub.com/ngu-phap-\${spec.level.toLowerCase()}/\`,
      sourceLabel: 'Tổng hợp đề thi chứng chỉ tiếng Nhật thực tế',
      original: true,
    },
  };

  return {
    id: spec.id,
    pattern: spec.pattern,
    title: spec.title,
    level: spec.level,
    position: spec.position,
    content,
    exercises: spec.exercises,
  };
});
`;

fs.writeFileSync(path.join(process.cwd(), 'packages/shared/jlpt-grammar-additions.ts'), additionsTsContent, 'utf8');
console.log('Saved packages/shared/jlpt-grammar-additions.ts successfully!');

// 2. Assemble N1 into packages/shared/jlpt-n1-grammar.ts
const n1Specs = [
  ...n1DataPart1,
  ...n1DataPart2,
  ...n1DataPart3,
];

console.log('Assembling N1 additions:', n1Specs.length);

const n1TsContent = `import type { Exercise, LessonContent } from './content';

export type AdditionalGrammarSpecN1 = {
  id: string;
  pattern: string;
  title: string;
  level: 'N1';
  position: number;
  meaning: string;
  formation: string;
  explanation: string;
  notes: string;
  mistake: string;
  related: string[];
  examples: {
    ja: string;
    kana: string;
    vi: string;
    readings?: Record<string, string>;
  }[];
  exercises: Exercise[];
};

export const jlptN1Specs: AdditionalGrammarSpecN1[] = ${JSON.stringify(n1Specs, null, 2)};

export const jlptN1GrammarLessons = jlptN1Specs.map((spec) => {
  const content: LessonContent = {
    meaning: spec.meaning,
    formation: spec.formation,
    explanation: spec.explanation,
    notes: spec.notes,
    mistake: spec.mistake,
    related: spec.related,
    examples: spec.examples,
    curriculum: {
      track: 'Ngữ pháp chuyên sâu JLPT N1',
      topic: spec.title,
      sourceUrl: 'https://www.vnjpclub.com/ngu-phap-n1/',
      sourceLabel: 'Tuyển tập ngữ pháp cao cấp JLPT N1 chính thống',
      original: true,
    },
  };

  return {
    id: spec.id,
    pattern: spec.pattern,
    title: spec.title,
    level: spec.level,
    position: spec.position,
    content,
    exercises: spec.exercises,
  };
});
`;

fs.writeFileSync(path.join(process.cwd(), 'packages/shared/jlpt-n1-grammar.ts'), n1TsContent, 'utf8');
console.log('Saved packages/shared/jlpt-n1-grammar.ts successfully!');
