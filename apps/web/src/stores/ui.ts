import { create } from 'zustand';

export interface UIStore {
  message: string;
  notify: (message: string) => void;
  examMode: boolean;
  setExamMode: (examMode: boolean) => void;
}

export const useUI = create<UIStore>((set) => ({
  message: '',
  notify: (message) => {
    set({ message });
    setTimeout(() => set({ message: '' }), 4500);
  },
  examMode: false,
  setExamMode: (examMode) => set({ examMode }),
}));
