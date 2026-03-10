import React from 'react';

var gapClasses = {
  none: 'wp-gap-0',
  xs: 'wp-gap-1',
  sm: 'wp-gap-2',
  md: 'wp-gap-4',
  lg: 'wp-gap-6',
  xl: 'wp-gap-8',
  '2xl': 'wp-gap-12',
};

var justifyClasses = {
  start: 'wp-justify-start',
  center: 'wp-justify-center',
  end: 'wp-justify-end',
  between: 'wp-justify-between',
  around: 'wp-justify-around',
  evenly: 'wp-justify-evenly',
};

var alignClasses = {
  start: 'wp-items-start',
  center: 'wp-items-center',
  end: 'wp-items-end',
  stretch: 'wp-items-stretch',
};

var widthClasses = {
  auto: 'wp-w-auto',
  default: 'wp-w-full wp-max-w-content',
  wide: 'wp-w-full wp-max-w-wide',
  full: 'wp-w-full',
};

/**
 * Stack Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export function Stack(props) {
  var gap = props.gap || 'md';
  var justify = props.justify || 'start';
  var align = props.align || 'stretch';
  var width = props.width || 'auto';
  var sticky = props.sticky || false;
  var Tag = props.as || 'div';
  var className = props.className || '';
  var style = props.style;
  var children = props.children;

  var combinedClassName = [
    'wp-block-group',
    'wp-block-group--stack',
    'wp-flex',
    'wp-flex-col',
    gapClasses[gap] || 'wp-gap-4',
    justifyClasses[justify] || 'wp-justify-start',
    alignClasses[align] || 'wp-items-stretch',
    widthClasses[width] || 'wp-w-auto',
    sticky ? 'wp-sticky' : '',
    className,
    'funky-stack'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(Tag, {
    className: combinedClassName,
    style: style
  }, children);
}

Stack.displayName = 'Stack';
