import React from 'react';
var useEffect = React.useEffect;
import * as ReactRouterModule from 'react-router';
var useLocation = ReactRouterModule.useLocation;

/**
 * ScrollToTop Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ScrollToTop() {
  var location = useLocation();
  var pathname = location.pathname;

  useEffect(function() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}