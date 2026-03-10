import React from 'react';

/**
 * Label Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export var Label = React.forwardRef(function(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var htmlFor = props.htmlFor;
  var id = props.id;
  var style = props.style;

  var combinedClassName = [
    'wp-block-label',
    'funky-label',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('label', {
    id: id,
    style: style,
    ref: ref,
    htmlFor: htmlFor,
    className: combinedClassName
  }, children);
});

Label.displayName = "Label";
