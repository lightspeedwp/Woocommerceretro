import React from 'react';
var useState = React.useState;

/**
 * Checkbox Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export var Checkbox = React.forwardRef(function(props, ref) {
  var className = props.className || '';
  var checked = props.checked;
  var defaultChecked = props.defaultChecked;
  var onCheckedChange = props.onCheckedChange;
  var onChange = props.onChange;
  var id = props.id;
  var name = props.name;
  var value = props.value;
  var required = props.required;
  var disabled = props.disabled;

  var _s = useState(defaultChecked || false);
  var isChecked = _s[0];
  var setIsChecked = _s[1];
  var isControlled = checked !== undefined;
  var currentChecked = isControlled ? checked : isChecked;

  var handleChange = function(e) {
    if (!isControlled) {
      setIsChecked(e.target.checked);
    }
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
    if (onChange) {
      onChange(e);
    }
  };

  var handleClick = function() {
    if (!disabled) {
      var newChecked = !currentChecked;
      if (!isControlled) {
        setIsChecked(newChecked);
      }
      if (onCheckedChange) {
        onCheckedChange(newChecked);
      }
    }
  };

  var wrapperClass = [
    'wp-block-checkbox-wrapper',
    'funky-checkbox-wrapper',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  var checkboxClass = [
    'wp-block-checkbox',
    'funky-checkbox',
    currentChecked ? 'is-checked funky-checkbox--active' : '',
    disabled ? 'is-disabled' : ''
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', { className: wrapperClass },
    React.createElement('input', {
      id: id,
      name: name,
      value: value,
      required: required,
      disabled: disabled,
      type: "checkbox",
      checked: currentChecked,
      onChange: handleChange,
      className: "wp-block-checkbox-input sr-only",
      ref: ref
    }),
    React.createElement('div', { 
      className: checkboxClass,
      onClick: handleClick
    },
      currentChecked ? React.createElement('svg', { 
        className: "wp-block-checkbox-icon", 
        viewBox: "0 0 24 24", 
        fill: "none", 
        stroke: "currentColor", 
        strokeWidth: "3", 
        strokeLinecap: "round", 
        strokeLinejoin: "round"
      },
        React.createElement('polyline', { points: "20 6 9 17 4 12" })
      ) : null
    )
  );
});

Checkbox.displayName = "Checkbox";
