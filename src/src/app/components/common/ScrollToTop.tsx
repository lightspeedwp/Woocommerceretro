import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * ScrollToTop Component
 *
 * Scrolls the window to the top on route changes.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}