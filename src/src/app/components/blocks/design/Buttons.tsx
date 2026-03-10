import React from 'react';
var forwardRef = React.forwardRef;

import * as ReactRouterModule from 'react-router';
import { SpinnerGap } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

/**
 * Button Component (Design Block)
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export var Button = forwardRef(function Button(props, ref) {
  var variant = props.variant || 'primary';
  var size = props.size || 'default';
  var href = props.href;
  var to = props.to;
  var icon = props.icon;
  var iconPosition = props.iconPosition || 'left';
  var loading = props.loading || false;
  var fullWidth = props.fullWidth || false;
  var ariaLabel = props.ariaLabel;
  var target = props.target;
  var rel = props.rel;
  var className = props.className || '';
  var children = props.children;
  var disabled = props.disabled;
  var type = props.type || 'button';
  var onClick = props.onClick;

  var normalizedVariant = variant === 'default' ? 'primary' : variant;
  var baseClass = 'wp-block-button';
  var variantClass = 'wp-block-button--' + normalizedVariant;
  var sizeClass = 'wp-block-button--size-' + size;
  var fullWidthClass = fullWidth ? 'wp-block-button--full-width' : '';

  var combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    className,
    'funky-btn'
  ].filter(function(c) { return !!c; }).join(' ');

  var renderIcon = function() {
    if (loading) {
      return React.createElement(SpinnerGap, { className: 'wp-block-button__spinner funky-spinner', size: 16, weight: "bold", 'aria-hidden': 'true' });
    }
    return icon ? React.createElement('span', { className: 'wp-block-button__icon' }, icon) : null;
  };

  var content = React.createElement(React.Fragment, null,
    iconPosition === 'left' ? renderIcon() : null,
    children,
    iconPosition === 'right' && !loading ? renderIcon() : null
  );

  if (href) {
    return React.createElement('a', {
      href: href,
      target: target,
      rel: rel || (target === '_blank' ? 'noopener noreferrer' : undefined),
      className: combinedClassName,
      'aria-label': ariaLabel,
      'aria-disabled': disabled,
      ref: ref,
      onClick: onClick
    }, content);
  }

  if (to) {
    return React.createElement(Link, {
      to: to,
      className: combinedClassName,
      'aria-label': ariaLabel,
      'aria-disabled': disabled,
      ref: ref,
      onClick: onClick
    }, content);
  }

  return React.createElement('button', {
    ref: ref,
    type: type,
    disabled: disabled || loading,
    className: combinedClassName,
    'aria-label': ariaLabel,
    'aria-busy': loading,
    onClick: onClick
  }, content);
});

Button.displayName = 'Button';

export function Buttons(props) {
  var orientation = props.orientation || 'horizontal';
  var gap = props.gap || 'md';
  var align = props.align || 'start';
  var className = props.className || '';
  var children = props.children;

  var classes = [
    'wp-block-buttons',
    orientation === 'vertical' ? 'is-vertical' : '',
    align === 'center' ? 'is-content-justification-center' : '',
    align === 'end' ? 'is-content-justification-right' : '',
    align === 'between' ? 'is-content-justification-space-between' : '',
    className,
    'funky-buttons-group'
  ].filter(function(c) { return !!c; }).join(' ');

  var style = {};
  if (gap === 'none') style.gap = '0';
  if (gap === 'sm') style.gap = 'var(--wp--preset--spacing--20)';
  if (gap === 'md') style.gap = 'var(--wp--preset--spacing--40)';
  if (gap === 'lg') style.gap = 'var(--wp--preset--spacing--60)';

  return React.createElement('div', { className: classes, style: style }, children);
}

Buttons.displayName = 'Buttons';

export var ResponsiveButtons = Buttons;