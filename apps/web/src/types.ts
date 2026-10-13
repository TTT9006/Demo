export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  goal: number;
  level: string;
  theme: string;
  annotationMode: 'romanized' | 'japanese';
  role: string;
};
export type Card = {
  id: string;
  deckId: string;
  japanese: string;
  reading: string;
  meaning: string;
  english: string;
  note: string;
  example: string;
  entryId?: string | null;
  ease: number;
  interval: number;
  repetitions: number;
  due: string;
  lastReviewed: string | null;
};
export type Deck = { id: string; name: string; description: string; cards: Card[] };
export type Translation = { translatedText: string; status: string; reviewedAt: string | null };
export type Gloss = { id: string; originalText: string; translation: Translation | null };
export type Entry = {
  inflection?: { term: string; steps: string[] };
  id: string;
  common: boolean;
  version: string;
  kanji: { text: string; information: string }[];
  readings: { text: string; restrictions: string }[];
  senses: { id: string; senseIndex: number; metadata: string; glosses: Gloss[] }[];
};
export type Status = {
  entries: number;
  glosses: number;
  translated: number;
  pending: number;
  failed: number;
  coverage: number;
  latestImport: { version: string; status: string; count: number } | null;
  jobs: {
    id: string;
    status: string;
    total: number;
    processed: number;
    successful: number;
    failed: number;
    startedAt: string;
    lastError: string | null;
  }[];
};
export type Attempt = {
  id: string;
  testId: string;
  score: number;
  duration: number;
  createdAt: string;
  answers: string;
};
export type DashboardData = {
  user: User;
  learned: number;
  totalCards: number;
  due: number;
  grammarCompleted: number;
  grammarTotal: number;
  today: number;
  streak: number;
  accuracy: number | null;
  weekly: { date: string; label: string; reviews: number; activities: number }[];
  recent: Card[];
  nextLesson: { id: string; pattern: string; title: string } | null;
  attempts: Attempt[];
  upcoming: { date: string; count: number }[];
  activeDays: string[];
};
export type LessonSummary = {
  id: string;
  pattern: string;
  title: string;
  level: string;
  position: number;
  progress: { completed: boolean; bookmarked: boolean }[];
};
export type Question = {
  annotationDisabled?: boolean;
  readings?: Record<string, string>;
  id: string;
  type: string;
  prompt: string;
  options?: string[];
  rows?: string[];
};
export type Result = Question & {
  given: string;
  correct: boolean;
  answer: string;
  explanation: string;
};
