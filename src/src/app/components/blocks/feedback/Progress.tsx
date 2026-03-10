import React from "react";
var forwardRef = React.forwardRef;

/**
 * Progress Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export var Progress = forwardRef(function Progress(props, ref) {
  var className = props.className || '';
  var value = props.value;
  var max = props.max === undefined ? 100 : props.max;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  var percentage = value != null 
    ? Math.min(Math.max((value / max) * 100, 0), 100)
    : 0;

  var combinedClassName = [
    'wp-block-progress',
    'funky-progress',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    role: "progressbar",
    'aria-valuemax': max,
    'aria-valuemin': 0,
    'aria-valuenow': value === null ? undefined : value,
    className: combinedClassName
  },
    React.createElement('div', {
      className: "wp-block-progress__indicator funky-progress-indicator",
      style: { transform: "translateX(-" + (100 - percentage) + "%)" }
    }),
    children
  );
});

Progress.displayName = "Progress";
