export type LoginReviewView = {
  ready: boolean;
  active: boolean;
  total: number;
  done: number;
  decks: { id: string; name: string; count: number; due: string }[];
  card?: {
    id: string;
    japanese: string;
    reading: string;
    meaning: string;
    example: string;
    note: string;
    deckName: string;
  };
};
