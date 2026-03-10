import React from 'react';

var gapClasses = {
  none: { gap: 'wp-gap-0', row: 'wp-row-gap-0', column: 'wp-column-gap-0' },
  xs: { gap: 'wp-gap-1', row: 'wp-row-gap-1', column: 'wp-column-gap-1' },
  sm: { gap: 'wp-gap-2', row: 'wp-row-gap-2', column: 'wp-column-gap-2' },
  md: { gap: 'wp-gap-4', row: 'wp-row-gap-4', column: 'wp-column-gap-4' },
  lg: { gap: 'wp-gap-6', row: 'wp-row-gap-6', column: 'wp-column-gap-6' },
  xl: { gap: 'wp-gap-8', row: 'wp-row-gap-8', column: 'wp-column-gap-8' },
  '2xl': { gap: 'wp-gap-12', row: 'wp-row-gap-12', column: 'wp-column-gap-12' },
};

var justifyClasses = {
  start: 'wp-justify-start',
  center: 'wp-justify-center',
  end: 'wp-justify-end',
  stretch: '',
};

var alignClasses = {
  start: 'wp-items-start',
  center: 'wp-items-center',
  end: 'wp-items-end',
  stretch: 'wp-items-stretch',
};

/**
 * Grid Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export function Grid(props) {
  var columns = props.columns;
  var minWidth = props.minWidth !== undefined ? props.minWidth : '250px';
  var maxWidth = props.maxWidth !== undefined ? props.maxWidth : '1fr';
  var gap = props.gap;
  var rowGap = props.rowGap;
  var columnGap = props.columnGap;
  var justifyItems = props.justifyItems || 'stretch';
  var alignItems = props.alignItems || 'stretch';
  var sticky = props.sticky || false;
  var Tag = props.as || 'div';
  var className = props.className || '';
  var style = props.style;
  var children = props.children;

  var finalRowGap = rowGap || gap || 'md';
  var finalColumnGap = columnGap || gap || 'md';
  
  var gridTemplateColumns = columns
    ? 'repeat(' + columns + ', 1fr)'
    : 'repeat(auto-fill, minmax(min(' + minWidth + ', 100%), ' + maxWidth + '))';
  
  var finalStyle = {
    gridTemplateColumns: gridTemplateColumns
  };
  
  if (style) {
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      finalStyle[keys[i]] = style[keys[i]];
    }
  }

  var rowGapEntry = gapClasses[finalRowGap] || gapClasses.md;
  var colGapEntry = gapClasses[finalColumnGap] || gapClasses.md;

  var gapClass = (rowGap || columnGap)
    ? rowGapEntry.row + ' ' + colGapEntry.column
    : rowGapEntry.gap;

  var combinedClassName = [
    'wp-block-group',
    'wp-block-group--grid',
    'wp-grid',
    gapClass,
    justifyClasses[justifyItems] || '',
    alignClasses[alignItems] || '',
    sticky ? 'wp-sticky' : '',
    className,
    'funky-grid'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(Tag, {
    className: combinedClassName,
    style: finalStyle
  }, children);
}

Grid.displayName = 'Grid';

/**
 * ResponsiveGrid Block Component
 */
export function ResponsiveGrid(props) {
  var mobile = props.mobile !== undefined ? props.mobile : 1;
  var tablet = props.tablet !== undefined ? props.tablet : 2;
  var desktop = props.desktop !== undefined ? props.desktop : 3;
  var className = props.className || '';

  var gridProps = {
    className: [
      'wp-grid-cols-' + mobile,
      'sm:wp-grid-cols-' + tablet,
      'lg:wp-grid-cols-' + desktop,
      className
    ].filter(function(c) { return !!c; }).join(' ')
  };

  var keys = Object.keys(props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'mobile' && key !== 'tablet' && key !== 'desktop' && key !== 'className' && key !== 'columns') {
      gridProps[key] = props[key];
    }
  }

  return React.createElement(Grid, gridProps);
}

ResponsiveGrid.displayName = 'ResponsiveGrid';
