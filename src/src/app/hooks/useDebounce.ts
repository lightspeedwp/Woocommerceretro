import React from 'react';
var useState = React.useState;
var useEffect = React.useEffect;

/**
 * useDebounce Hook
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. Standard function declarations
 * 3. No generics or type annotations
 */
export function useDebounce(value, delay) {
  var ref = useState(value);
  var debouncedValue = ref[0];
  var setDebouncedValue = ref[1];

  useEffect(function() {
    var handler = setTimeout(function() {
      setDebouncedValue(value);
    }, delay || 500);

    return function() {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}