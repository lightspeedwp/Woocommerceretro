/**
 * ComparisonContext.tsx
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No destructuring in parameters
 * 3. ASCII only
 * 4. No TypeScript interfaces or generics
 */

import React from 'react';
var createContext = React.createContext;
var useContext = React.useContext;
var useState = React.useState;
var useEffect = React.useEffect;
import * as SonnerModule from 'sonner@2.0.3';
var toast = SonnerModule.toast;

var ComparisonContext = createContext(undefined);
var MAX_COMPARISON_ITEMS = 4;

export function ComparisonProvider(props) {
  var children = props.children;

  var _state = useState(function() {
    if (typeof window !== 'undefined') {
      try {
        var saved = localStorage.getItem('productComparison');
        if (saved) {
          return JSON.parse(saved);
        }
      } catch (error) {
        // Ignored
      }
    }
    return [];
  });
  var comparisonItems = _state[0];
  var setComparisonItems = _state[1];

  useEffect(function() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('productComparison', JSON.stringify(comparisonItems));
      } catch (error) {
        // Ignored
      }
    }
  }, [comparisonItems]);

  function addToComparison(product) {
    var exists = false;
    for (var i = 0; i < comparisonItems.length; i++) {
      if (comparisonItems[i].id === product.id) {
        exists = true;
        break;
      }
    }

    if (exists) {
      toast.info('Product already in comparison');
      return;
    }

    if (comparisonItems.length >= MAX_COMPARISON_ITEMS) {
      toast.error('Comparison limit reached');
      return;
    }

    setComparisonItems(function(prev) {
      return prev.concat([product]);
    });
    toast.success('Added to comparison');
  }

  function removeFromComparison(productId) {
    setComparisonItems(function(prev) {
      var result = [];
      for (var i = 0; i < prev.length; i++) {
        if (prev[i].id !== productId) result.push(prev[i]);
      }
      return result;
    });
    toast.success('Removed from comparison');
  }

  function clearComparison() {
    setComparisonItems([]);
    toast.success('Comparison cleared');
  }

  function isInComparison(productId) {
    for (var i = 0; i < comparisonItems.length; i++) {
      if (comparisonItems[i].id === productId) return true;
    }
    return false;
  }

  var value = {
    comparisonItems: comparisonItems,
    addToComparison: addToComparison,
    removeFromComparison: removeFromComparison,
    clearComparison: clearComparison,
    isInComparison: isInComparison,
    canAddMore: comparisonItems.length < MAX_COMPARISON_ITEMS,
    comparisonCount: comparisonItems.length
  };

  return React.createElement(ComparisonContext.Provider, { value: value }, children);
}

export function useComparison() {
  var context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
}