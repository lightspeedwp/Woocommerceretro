import React from 'react';

/**
 * AspectRatio Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export var AspectRatio = React.forwardRef(function AspectRatio(props, ref) {
  var className = props.className || '';
  var ratio = props.ratio === undefined ? 16 / 9 : props.ratio;
  var style = props.style || {};
  var children = props.children;
  var id = props.id;

  var finalStyle = {};
  var styleKeys = Object.keys(style);
  for (var i = 0; i < styleKeys.length; i++) {
    finalStyle[styleKeys[i]] = style[styleKeys[i]];
  }
  
  finalStyle.paddingBottom = (100 / ratio) + "%";
  finalStyle.position = finalStyle.position || 'relative';

  var combinedClassName = [
    'wp-block-aspect-ratio',
    'funky-aspect-ratio',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    ref: ref,
    id: id,
    className: combinedClassName,
    style: finalStyle
  },
    React.createElement('div', { className: "wp-block-aspect-ratio__inner" }, children)
  );
});

AspectRatio.displayName = "AspectRatio";
