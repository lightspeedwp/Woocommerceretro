import React from 'react';
var useEffect = React.useEffect;

/**
 * useClickOutside Hook
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No generics or type annotations
 * 3. Standard function declarations
 */
export function useClickOutside(ref, handler, ignoreRefs) {
  useEffect(function() {
    function listener(event) {
      var el = ref.current;
      
      if (!el || el.contains(event.target)) {
        return;
      }

      if (ignoreRefs) {
        for (var i = 0; i < ignoreRefs.length; i++) {
          var ignoreRef = ignoreRefs[i];
          if (ignoreRef.current && ignoreRef.current.contains(event.target)) {
            return;
          }
        }
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return function() {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, ignoreRefs]);
}