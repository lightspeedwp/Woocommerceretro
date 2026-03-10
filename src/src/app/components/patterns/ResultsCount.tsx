import React from 'react';

/*
 * ResultsCountProps:
 *   start: number
 *   end: number
 *   total: number
 *   itemType?: string
 *   className?: string
 */

/**
 * ResultsCount Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function ResultsCount(props) {
  var start = props.start;
  var end = props.end;
  var total = props.total;
  var itemType = props.itemType || 'item';
  var className = props.className || '';

  var pluralizedType = total === 1 ? itemType : itemType + 's';

  if (total === 0) {
    return React.createElement('div', {
      className: "wp-block-results-count " + className,
      role: "status",
      'aria-live': "polite"
    }, "No " + pluralizedType + " found");
  }

  return React.createElement('div', {
    className: "wp-block-results-count " + className,
    role: "status",
    'aria-live': "polite"
  }, "Showing " + start + "\u2013" + end + " of " + total + " " + pluralizedType);
}