import React from 'react';

/**
 * Input Component (UI Atom)
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export var Input = React.forwardRef(function(props, ref) {
  var className = props.className || '';
  var type = props.type;
  var value = props.value;
  var onChange = props.onChange;
  var onBlur = props.onBlur;
  var onFocus = props.onFocus;
  var placeholder = props.placeholder;
  var disabled = props.disabled;
  var required = props.required;
  var id = props.id;
  var name = props.name;
  var autoComplete = props.autoComplete;
  var readOnly = props.readOnly;
  var ariaLabel = props['aria-label'];
  var ariaDescribedBy = props['aria-describedby'];

  var combinedClassName = [
    'wp-block-input',
    'funky-input-glow',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('input', {
    id: id,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    autoComplete: autoComplete,
    readOnly: readOnly,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    className: combinedClassName,
    ref: ref
  });
});

Input.displayName = "Input";
