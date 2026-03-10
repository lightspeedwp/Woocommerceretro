import React from 'react';

var headingStyles = {
  '1': 'wp-heading wp-heading--1',
  '2': 'wp-heading wp-heading--2',
  '3': 'wp-heading wp-heading--3',
  '4': 'wp-heading wp-heading--4',
};

var alignStyles = {
  left: 'has-text-align-left',
  center: 'has-text-align-center',
  right: 'has-text-align-right',
};

/**
 * Heading Component
 * 
 * Enforces fluid typography and consistent dark mode support.
 * Uses WordPress-aligned CSS classes only.
 */
export function Heading(props) {
  var level = props.level;
  var children = props.children;
  var className = props.className || '';
  var align = props.align || 'left';
  var id = props.id;

  var Tag = 'h' + level;
  var sizeStyles = headingStyles[level] || '';
  var alignStyle = alignStyles[align] || '';
  
  return React.createElement(Tag, { 
    id: id,
    className: sizeStyles + ' ' + alignStyle + (className ? ' ' + className : '')
  }, children);
}

Heading.displayName = 'Heading';
