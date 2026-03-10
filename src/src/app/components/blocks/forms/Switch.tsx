import React from 'react';
var useState = React.useState;

/**
 * Switch Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export var Switch = React.forwardRef(function(props, ref) {
  var className = props.className || '';
  var controlledChecked = props.checked;
  var defaultChecked = props.defaultChecked || false;
  var onCheckedChange = props.onCheckedChange;
  var disabled = props.disabled;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  var _ic = useState(defaultChecked);
  var isChecked = _ic[0];
  var setIsChecked = _ic[1];
  var checked = controlledChecked !== undefined ? controlledChecked : isChecked;

  var handleClick = function(e) {
    if (disabled) return;
    
    var newChecked = !checked;
    if (controlledChecked === undefined) {
      setIsChecked(newChecked);
    }
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
    if (onClick) {
      onClick(e);
    }
  };

  var combinedClassName = [
    'wp-block-switch',
    'funky-switch',
    checked ? 'wp-block-switch--checked funky-switch--active' : 'wp-block-switch--unchecked',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('button', {
    id: id,
    style: style,
    type: "button",
    role: "switch",
    'aria-checked': checked,
    disabled: disabled,
    'data-state': checked ? "checked" : "unchecked",
    ref: ref,
    className: combinedClassName,
    onClick: handleClick
  },
    React.createElement('span', {
      'data-state': checked ? "checked" : "unchecked",
      className: [
        'wp-block-switch-thumb',
        'funky-switch-thumb',
        checked ? 'wp-block-switch-thumb--checked' : 'wp-block-switch-thumb--unchecked'
      ].filter(function(c) { return !!c; }).join(' ')
    })
  );
});

Switch.displayName = "Switch";
