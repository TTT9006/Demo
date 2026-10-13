// @vitest-environment jsdom
import { afterEach, it, expect, vi } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { JapaneseAnnotatedText } from '../apps/web/src/components/japanese-annotated-text';
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
it('switches ruby annotations immediately and obeys question policy without fetching readings', () => {
  const fetch = vi.fn();
  vi.stubGlobal('fetch', fetch);
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } },
  });
  client.setQueryData(['user'], { id: 'test', annotationMode: 'japanese' });
  const content = (mode: 'romanized' | 'japanese', disabled = false) => (
    <QueryClientProvider client={client}>
      <JapaneseAnnotatedText
        text="食べる"
        reading="たべる"
        annotationMode={mode}
        disabled={disabled}
      />
    </QueryClientProvider>
  );
  const { container, rerender } = render(content('japanese'));
  expect(container.querySelector('rt')?.textContent).toBe('た');
  expect(container.querySelector('ruby')?.firstChild?.textContent).toBe('食');
  rerender(content('romanized'));
  expect(container.querySelector('rt')?.textContent).toBe('ta');
  expect(container.textContent).toContain('べる');
  rerender(content('japanese', true));
  expect(container.querySelector('ruby')).toBeNull();
  expect(container.textContent).toBe('食べる');
  expect(fetch).not.toHaveBeenCalled();
});
