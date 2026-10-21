import { introductoryLessons } from './introductory-grammar';
import { curriculumLessons } from './grammar-curriculum';
import { jlptGrammarLessons } from './jlpt-grammar-additions';
import { jlptN1GrammarLessons } from './jlpt-n1-grammar';

export type Exercise = {
  acceptedAnswers?: string[];
  annotationDisabled?: boolean;
  readings?: Record<string, string>;
  id: string;
  type: 'choice' | 'fill' | 'order' | 'complete' | 'match' | 'matching';
  prompt: string;
  options?: string[];
  rows?: string[];
  answer: string;
  explanation: string;
};

export type LessonContent = {
  curriculum?: { track: string; chapter?: number; topic: string; sourceUrl: string; sourceLabel: string; original: boolean };
  meaning: string;
  formation: string;
  explanation: string;
  notes: string;
  mistake: string;
  related: string[];
  examples: { ja: string; kana: string; vi: string; readings?: Record<string, string> }[];
};

export const lessons: {
  id: string;
  pattern: string;
  title: string;
  level: string;
  position: number;
  content: LessonContent;
  exercises: Exercise[];
}[] = [
  ...introductoryLessons,
  ...curriculumLessons,
  ...jlptGrammarLessons,
  ...jlptN1GrammarLessons,
];

export const testDefinitions = [
  {
    id: 'mini-desu',
    title: 'Lời chào đầu tiên',
    description: 'Ôn cách giới thiệu bản thân',
    lessonIds: ['desu'],
    kind: 'mini',
  },
  {
    id: 'medium-1',
    title: 'Nền tảng giao tiếp',
    description: 'Giới thiệu, phủ định và câu hỏi',
    lessonIds: ['desu', 'janai', 'ka'],
    kind: 'medium',
  },
  {
    id: 'medium-2',
    title: 'Một ngày của bạn',
    description: 'Hành động, điểm đến và địa điểm',
    lessonIds: ['wo', 'ni', 'de'],
    kind: 'medium',
  },
];
