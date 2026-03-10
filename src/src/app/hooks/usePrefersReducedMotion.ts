import React from 'react';
var useEffect = React.useEffect;
var useState = React.useState;

/**
 * usePrefersReducedMotion
 * 
 * Optimized for Figma Make parser:
 * 1. Simple function declaration
 * 2. No arrow functions
 * 3. Standard ASCII characters
 */
export function usePrefersReducedMotion() {
  var ref = useState(true);
  var prefersReducedMotion = ref[0];
  var setPrefersReducedMotion = ref[1];

  useEffect(function() {
    if (typeof window === 'undefined') return;

    if (!window.matchMedia) {
      setPrefersReducedMotion(false);
      return;
    }

    var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    function handleChange(event) {
      setPrefersReducedMotion(event.matches);
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return function() {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return function() {
        mediaQuery.removeListener(handleChange);
      };
    }
    
    return undefined;
  }, []);

  return prefersReducedMotion;
}