/**
 * CompareButton.tsx - Product Block
 * 
 * Button to add/remove products from comparison list.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import { Scales as Scale, Check } from '@phosphor-icons/react';
import * as ComparisonContextModule from '../../../contexts/ComparisonContext';
import * as cnModule from '../../../utils/cn';

var useComparison = ComparisonContextModule.useComparison;
var cn = cnModule.cn;

export function CompareButton(props) {
  var product = props.product;
  var variant = props.variant || 'default';
  var size = props.size || 'md';
  var className = props.className || '';

  var context = useComparison();
  var addToComparison = context.addToComparison;
  var removeFromComparison = context.removeFromComparison;
  var isInComparison = context.isInComparison;

  var inComparison = isInComparison(product.id);

  var handleClick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (inComparison) {
      removeFromComparison(product.id);
    } else {
      addToComparison(product);
    }
  };

  var iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;
  
  var children = [];
  if (inComparison) {
    children.push(React.createElement(Check, { size: iconSize }));
    if (variant === 'default') {
      children.push(React.createElement('span', null, 'In Comparison'));
    }
  } else {
    children.push(React.createElement(Scale, { size: iconSize }));
    if (variant === 'default') {
      children.push(React.createElement('span', null, 'Add to Compare'));
    }
  }

  var fullClassName = cn(
    'wc-block-compare-button',
    'wc-block-compare-button--' + size,
    variant === 'icon-only' ? 'wc-block-compare-button--icon-only' : null,
    inComparison ? 'wc-block-compare-button--active' : null,
    className
  );

  return React.createElement('button', {
    onClick: handleClick,
    "aria-label": inComparison ? 'Remove from comparison' : 'Add to comparison',
    "aria-pressed": inComparison,
    className: fullClassName,
    title: inComparison ? 'Remove from comparison' : 'Add to comparison'
  }, children);
}