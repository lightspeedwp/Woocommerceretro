import React from 'react';

/**
 * Table Components
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */

export function Table(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    'data-slot': "table-container",
    className: "wp-block-table-container funky-table-container"
  },
    React.createElement('table', {
      id: id,
      style: style,
      'data-slot': "table",
      className: 'wp-block-table funky-table ' + className
    }, children)
  );
}

export function TableHeader(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('thead', {
    id: id,
    style: style,
    'data-slot': "table-header",
    className: 'wp-block-table__header funky-table-header ' + className
  }, children);
}

export function TableBody(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('tbody', {
    id: id,
    style: style,
    'data-slot': "table-body",
    className: 'wp-block-table__body funky-table-body ' + className
  }, children);
}

export function TableFooter(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('tfoot', {
    id: id,
    style: style,
    'data-slot': "table-footer",
    className: 'wp-block-table__footer funky-table-footer ' + className
  }, children);
}

export function TableRow(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('tr', {
    id: id,
    style: style,
    'data-slot': "table-row",
    className: 'wp-block-table__row funky-table-row ' + className
  }, children);
}

export function TableHead(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('th', {
    id: id,
    style: style,
    'data-slot': "table-head",
    className: 'wp-block-table__head funky-table-head ' + className
  }, children);
}

export function TableCell(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('td', {
    id: id,
    style: style,
    'data-slot': "table-cell",
    className: 'wp-block-table__cell funky-table-cell ' + className
  }, children);
}

export function TableCaption(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('caption', {
    id: id,
    style: style,
    'data-slot': "table-caption",
    className: 'wp-block-table__caption funky-table-caption ' + className
  }, children);
}