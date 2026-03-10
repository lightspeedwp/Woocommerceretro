import React from 'react';
var useState = React.useState;

/**
 * FloatingLabelInput Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function FloatingLabelInput(props) {
  var label = props.label;
  var error = props.error;
  var className = props.className || '';
  var value = props.value;
  var onFocus = props.onFocus;
  var onBlur = props.onBlur;
  var onChange = props.onChange;
  var type = props.type || 'text';
  var name = props.name;
  var required = props.required;
  var id = props.id;

  var isFocusedState = useState(false);
  var isFocused = isFocusedState[0];
  var setIsFocused = isFocusedState[1];
  var hasValue = value && value.toString().length > 0;

  var handleFocus = function(e) {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  var handleBlur = function(e) {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  var inputClasses = [
    'wp-floating-label__input',
    'funky-input-glow',
    error ? 'wp-floating-label__input--error' : '',
    hasValue ? 'wp-floating-label__input--has-value' : '',
    isFocused ? 'wp-floating-label__input--focused' : ''
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', { className: 'wp-field ' + className },
    React.createElement('div', { className: 'wp-floating-label' },
      React.createElement('input', {
        id: id,
        value: value,
        onChange: onChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        type: type,
        name: name,
        required: required,
        className: inputClasses,
        placeholder: label
      }),
      React.createElement('label', { htmlFor: id, className: 'wp-floating-label__label' },
        label,
        required ? React.createElement('span', { className: 'wp-label--required' }, ' *') : null
      )
    ),
    error ? React.createElement('p', { className: 'wp-field__error' }, error) : null
  );
}

FloatingLabelInput.displayName = 'FloatingLabelInput';