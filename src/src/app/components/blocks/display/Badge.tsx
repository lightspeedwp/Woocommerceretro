import React from 'react';

/**
 * Badge Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export function Badge(props) {
  var className = props.className || '';
  var variant = props.variant || 'default';
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  var combinedClassName = [
    'wp-block-badge',
    'wp-block-badge--' + variant,
    className,
    'funky-badge'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', { 
    id: id,
    style: style,
    onClick: onClick,
    className: combinedClassName
  }, children);
}

Badge.displayName = 'Badge';
