import { useEffect, useState } from 'react';

/**
 * usePrefersReducedMotion Hook
 *
 * Returns true when the user prefers reduced motion.
 * Defaults to true (safe default) until the media query is evaluated.
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.matchMedia) {
      setPrefersReducedMotion(false);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else if ((mediaQuery as any).addListener) {
      (mediaQuery as any).addListener(handleChange);
      return () => {
        (mediaQuery as any).removeListener(handleChange);
      };
    }

    return undefined;
  }, []);

  return prefersReducedMotion;
}