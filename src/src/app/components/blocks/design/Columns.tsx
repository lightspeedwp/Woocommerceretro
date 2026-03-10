import React from 'react';

var paddingClasses = {
  none: '',
  xs: 'wp-p-2',
  sm: 'wp-p-3',
  md: 'wp-p-4',
  lg: 'wp-p-6',
  xl: 'wp-p-8',
  '2xl': 'wp-p-8',
};

var alignClasses = {
  start: 'wp-flex wp-flex-col wp-justify-start',
  center: 'wp-flex wp-flex-col wp-justify-center',
  end: 'wp-flex wp-flex-col wp-justify-end',
  stretch: 'wp-flex wp-flex-col',
};

/**
 * Column Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export function Column(props) {
  var width = props.width;
  var backgroundColor = props.backgroundColor;
  var padding = props.padding || 'none';
  var verticalAlign = props.verticalAlign || 'stretch';
  var Tag = props.as || 'div';
  var className = props.className || '';
  var style = props.style;
  var children = props.children;

  var finalStyle = {
    backgroundColor: backgroundColor
  };
  if (width) {
    finalStyle.width = typeof width === 'number' ? width + '%' : width;
  }
  
  if (style) {
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      finalStyle[keys[i]] = style[keys[i]];
    }
  }

  var combinedClassName = [
    'wp-block-column',
    paddingClasses[padding] || '',
    alignClasses[verticalAlign] || '',
    className,
    'funky-column'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(Tag, {
    className: combinedClassName,
    style: finalStyle
  }, children);
}

Column.displayName = 'Column';

var gapClasses = {
  none: 'wp-gap-0',
  xs: 'wp-gap-1',
  sm: 'wp-gap-2',
  md: 'wp-gap-4',
  lg: 'wp-gap-6',
  xl: 'wp-gap-8',
  '2xl': 'wp-gap-12',
};

var columnsAlignClasses = {
  top: 'wp-items-start',
  center: 'wp-items-center',
  bottom: 'wp-items-end',
  stretch: 'wp-items-stretch',
};

var columnCountClasses = {
  '1': 'wp-grid-cols-1',
  '2': 'wp-grid-cols-2',
  '3': 'wp-grid-cols-3',
  '4': 'wp-grid-cols-4',
  '5': 'wp-grid-cols-5',
  '6': 'wp-grid-cols-6',
};

var breakpointPrefixes = {
  sm: 'sm:',
  md: 'md:',
  lg: 'lg:',
};

/**
 * Columns Block Component
 */
export function Columns(props) {
  var columns = props.columns;
  var gap = props.gap || 'md';
  var verticalAlign = props.verticalAlign || 'stretch';
  var stackOnMobile = props.stackOnMobile !== undefined ? props.stackOnMobile : true;
  var stackBreakpoint = props.stackBreakpoint || 'md';
  var Tag = props.as || 'div';
  var className = props.className || '';
  var style = props.style;
  var children = props.children;

  var columnCountClass = columns ? (columnCountClasses[String(columns)] || '') : '';
  var prefix = breakpointPrefixes[stackBreakpoint] || 'md:';
  
  var combinedClassName = [
    'wp-block-columns',
    'wp-grid',
    stackOnMobile ? 'wp-grid-cols-1' : columnCountClass,
    stackOnMobile && columnCountClass ? prefix + columnCountClass : '',
    gapClasses[gap] || 'wp-gap-4',
    columnsAlignClasses[verticalAlign] || 'wp-items-stretch',
    className,
    'funky-columns'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(Tag, {
    className: combinedClassName,
    style: style
  }, children);
}

Columns.displayName = 'Columns';
