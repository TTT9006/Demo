import { create } from 'zustand';
export const useUI = create<{ message: string; notify: (message: string) => void }>((set) => ({
  message: '',
  notify: (message) => {
    set({ message });
    setTimeout(() => set({ message: '' }), 4500);
  },
}));
