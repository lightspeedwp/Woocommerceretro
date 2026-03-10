import React from 'react';
var useState = React.useState;

/**
 * Toggle Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export var Toggle = React.forwardRef(function Toggle(props, ref) {
  var className = props.className || '';
  var variant = props.variant || 'default';
  var size = props.size || 'default';
  var controlledPressed = props.pressed;
  var defaultPressed = props.defaultPressed || false;
  var onPressedChange = props.onPressedChange;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;
  var children = props.children;

  var _ip = useState(defaultPressed);
  var isPressed = _ip[0];
  var setIsPressed = _ip[1];
  var pressed = controlledPressed !== undefined ? controlledPressed : isPressed;

  var handleClick = function(e) {
    var newPressed = !pressed;
    if (controlledPressed === undefined) {
      setIsPressed(newPressed);
    }
    if (onPressedChange) {
      onPressedChange(newPressed);
    }
    if (onClick) {
      onClick(e);
    }
  };

  var combinedClassName = [
    'wp-block-toggle',
    'wp-block-toggle--' + variant,
    'wp-block-toggle--size-' + size,
    pressed ? 'is-pressed funky-toggle--active' : '',
    className,
    'funky-toggle'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('button', {
    id: id,
    style: style,
    ref: ref,
    type: "button",
    "aria-pressed": pressed,
    "data-state": pressed ? "on" : "off",
    className: combinedClassName,
    onClick: handleClick
  }, children);
});

Toggle.displayName = "Toggle";
