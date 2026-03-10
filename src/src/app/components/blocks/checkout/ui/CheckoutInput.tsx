import React from 'react';
import { WarningCircle as AlertCircle } from '@phosphor-icons/react';

/**
 * CheckoutInput Component
 * No TypeScript syntax for parser compatibility.
 */
export function CheckoutInput(props) {
  var label = props.label;
  var error = props.error;
  var touched = props.touched;
  var className = props.className || '';
  var id = props.id;
  var value = props.value;
  var onChange = props.onChange;
  var onBlur = props.onBlur;
  var type = props.type || 'text';
  var name = props.name;
  var required = props.required;
  var autoComplete = props.autoComplete;

  var hasError = touched && error;
  var inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  var errorId = inputId + '-error';

  return React.createElement('div', { className: 'wp-field' },
    React.createElement('div', { className: 'wp-floating-label' },
      React.createElement('input', {
        id: inputId,
        'aria-invalid': !!hasError,
        'aria-describedby': hasError ? errorId : undefined,
        className: 'wp-floating-label__input funky-input-glow ' + 
                   (hasError ? 'wp-floating-label__input--error ' : '') + 
                   (value ? 'wp-floating-label__input--has-value ' : '') + 
                   className,
        placeholder: label,
        value: value,
        onChange: onChange,
        onBlur: onBlur,
        type: type,
        name: name,
        required: required,
        autoComplete: autoComplete
      }),
      React.createElement('label', {
        htmlFor: inputId,
        className: 'wp-floating-label__label'
      }, label)
    ),
    hasError ? React.createElement('div', { id: errorId, className: 'wp-field__error', role: 'alert' },
      React.createElement(AlertCircle, { size: 12 }),
      React.createElement('span', null, error)
    ) : null
  );
}