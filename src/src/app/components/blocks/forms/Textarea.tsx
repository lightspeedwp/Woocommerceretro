import React from 'react';

/**
 * Textarea Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export var Textarea = React.forwardRef(function(props, ref) {
  var className = props.className || '';
  var value = props.value;
  var onChange = props.onChange;
  var onBlur = props.onBlur;
  var onFocus = props.onFocus;
  var placeholder = props.placeholder;
  var disabled = props.disabled;
  var required = props.required;
  var rows = props.rows;
  var id = props.id;
  var name = props.name;
  var readOnly = props.readOnly;
  var ariaLabel = props['aria-label'];
  var ariaDescribedBy = props['aria-describedby'];

  var combinedClassName = [
    'wp-block-textarea',
    'funky-input-glow',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('textarea', {
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    rows: rows,
    readOnly: readOnly,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    className: combinedClassName,
    ref: ref
  });
});

Textarea.displayName = "Textarea";
