import React from 'react';

/**
 * Separator Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export function Separator(props) {
  var className = props.className || '';
  var orientation = props.orientation || "horizontal";
  var decorative = props.decorative !== undefined ? props.decorative : true;
  var id = props.id;
  var style = props.style;

  var combinedClassName = [
    'wp-block-separator',
    orientation === "horizontal" ? 'wp-block-separator--horizontal' : 'wp-block-separator--vertical',
    className,
    'funky-separator'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    id: id,
    style: style,
    role: decorative ? "none" : "separator",
    'aria-orientation': decorative ? undefined : orientation,
    'data-slot': "separator-root",
    className: combinedClassName
  });
}

Separator.displayName = 'Separator';
