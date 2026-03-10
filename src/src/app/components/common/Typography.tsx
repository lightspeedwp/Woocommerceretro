import React from 'react';
import * as ThemeModule from '../../constants/theme';

var TYPOGRAPHY = ThemeModule.TYPOGRAPHY;

/**
 * Typography Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No rest parameters
 * 3. Manual prop assignment
 */
export function Typography(props) {
  var variant = props.variant || 'body';
  var as = props.as;
  var className = props.className || '';
  var stretchy = props.stretchy || false;
  var children = props.children;
  var id = props.id;
  var onClick = props.onClick;

  var Tag = as || (variant.indexOf('h') === 0 ? variant : 'p');
  var stretchyClass = stretchy ? 'typography--stretchy' : '';
  var typographyClass = TYPOGRAPHY[variant] || '';

  return React.createElement(Tag, {
    className: typographyClass + ' ' + stretchyClass + ' ' + className,
    id: id,
    onClick: onClick
  }, children);
}