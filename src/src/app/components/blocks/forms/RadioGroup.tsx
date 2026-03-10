import React from 'react';
var useState = React.useState;
var useContext = React.useContext;
var createContext = React.createContext;
var forwardRef = React.forwardRef;

var RadioGroupContext = createContext(undefined);

/**
 * RadioGroup Component
 *
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript generics or interfaces
 */
export var RadioGroup = forwardRef(function RadioGroup(props, ref) {
  var className = props.className || '';
  var value = props.value;
  var defaultValue = props.defaultValue;
  var onValueChange = props.onValueChange;
  var disabled = props.disabled;
  var name = props.name;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var _uv = useState(defaultValue);
  var uncontrolledValue = _uv[0];
  var setUncontrolledValue = _uv[1];
  var actualValue = value !== undefined ? value : uncontrolledValue;

  var handleValueChange = function(newValue) {
    if (value === undefined) {
      setUncontrolledValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  var contextValue = {
    value: actualValue,
    onValueChange: handleValueChange,
    name: name,
    disabled: disabled
  };

  var combinedClassName = [
    'wp-block-radio-group',
    'funky-radio-group',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(RadioGroupContext.Provider, { value: contextValue },
    React.createElement('div', {
      id: id,
      style: style,
      ref: ref,
      className: combinedClassName,
      role: "radiogroup"
    }, children)
  );
});

RadioGroup.displayName = "RadioGroup";

export var RadioGroupItem = forwardRef(function RadioGroupItem(props, ref) {
  var className = props.className || '';
  var value = props.value;
  var disabled = props.disabled;
  var id = props.id;
  var style = props.style;

  var context = useContext(RadioGroupContext);

  if (!context) {
    throw new Error("RadioGroupItem must be used within a RadioGroup");
  }

  var isChecked = context.value === value;
  var isDisabled = disabled || context.disabled;

  var handleClick = function() {
    if (!isDisabled && context.onValueChange) {
      context.onValueChange(value);
    }
  };

  var combinedClassName = [
    'wp-block-radio-item',
    'funky-radio-item',
    isChecked ? 'is-checked funky-radio--active' : '',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('button', {
    id: id,
    style: style,
    ref: ref,
    type: "button",
    role: "radio",
    'aria-checked': isChecked,
    disabled: isDisabled,
    'data-state': isChecked ? "checked" : "unchecked",
    className: combinedClassName,
    onClick: handleClick
  },
    React.createElement('span', {
      className: [
        'wp-block-radio-indicator',
        'funky-radio-indicator',
        isChecked ? 'is-visible' : 'is-hidden'
      ].filter(function(c) { return !!c; }).join(' ')
    })
  );
});

RadioGroupItem.displayName = "RadioGroupItem";
