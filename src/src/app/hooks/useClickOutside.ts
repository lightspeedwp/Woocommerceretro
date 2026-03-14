import { useEffect, RefObject } from 'react';

/**
 * useClickOutside Hook
 *
 * Detects clicks outside the given ref element and calls the handler.
 * Optionally ignores clicks on elements referenced by ignoreRefs.
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  ignoreRefs?: RefObject<HTMLElement | null>[]
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      if (ignoreRefs) {
        const clickedIgnored = ignoreRefs.some((ignoreRef) =>
          ignoreRef.current && ignoreRef.current.contains(event.target as Node)
        );
        if (clickedIgnored) {
          return;
        }
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, ignoreRefs]);
}