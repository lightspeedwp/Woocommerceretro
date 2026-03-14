import { useState, useEffect } from 'react';

/**
 * useIsMobile Hook
 *
 * Returns true when the viewport width is below the mobile breakpoint (768px).
 */
const MOBILE_BREAKPOINT = 768;

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    if (window.matchMedia) {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      mql.addEventListener('change', onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      return () => {
        mql.removeEventListener('change', onChange);
      };
    } else {
      window.addEventListener('resize', onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      return () => {
        window.removeEventListener('resize', onChange);
      };
    }
  }, []);

  return isMobile === true;
}