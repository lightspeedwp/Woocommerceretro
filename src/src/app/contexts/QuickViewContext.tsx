/**
 * QuickViewContext.tsx
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
var useCallback = React.useCallback;

var QuickViewContext = createContext(undefined);

export function useQuickView() {
  var context = useContext(QuickViewContext);
  if (!context) {
    throw new Error('useQuickView must be used within QuickViewProvider');
  }
  return context;
}

export function QuickViewProvider(props) {
  var children = props.children;

  var _ps = useState(null);
  var product = _ps[0];
  var setProduct = _ps[1];
  var _os = useState(false);
  var isOpen = _os[0];
  var setIsOpen = _os[1];

  var openQuickView = useCallback(function(productArg) {
    setProduct(productArg);
    setIsOpen(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  var closeQuickView = useCallback(function() {
    setIsOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
    setTimeout(function() {
      setProduct(null);
    }, 300);
  }, []);

  var value = {
    product: product,
    isOpen: isOpen,
    openQuickView: openQuickView,
    closeQuickView: closeQuickView
  };

  return React.createElement(QuickViewContext.Provider, { value: value }, children);
}