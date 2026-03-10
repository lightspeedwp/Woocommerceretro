import React from 'react';

/**
 * Skeleton Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function Skeleton(props) {
  var className = props.className || '';
  var style = props.style;
  var id = props.id;
  var onClick = props.onClick;
  var onMouseEnter = props.onMouseEnter;
  var onMouseLeave = props.onMouseLeave;

  var combinedClassName = [
    'wp-block-skeleton',
    'funky-skeleton',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    id: id,
    style: style,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: combinedClassName
  });
}

Skeleton.displayName = 'Skeleton';