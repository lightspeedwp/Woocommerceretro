import React from 'react';

/**
 * Checkbox Component
 * No TypeScript syntax for parser compatibility.
 */
export function Checkbox(props) {
  var label = props.label;
  var className = props.className || '';
  var checked = props.checked;
  var onChange = props.onChange;
  var name = props.name;
  var disabled = props.disabled;
  var id = props.id;

  var Wrapper = label ? 'label' : 'div';
  var wrapperClass = 'wp-block-checkbox-wrapper ' + className;

  return React.createElement(Wrapper, { className: wrapperClass },
    React.createElement('input', {
      type: 'checkbox',
      className: 'wp-block-checkbox funky-input-glow',
      checked: checked,
      onChange: onChange,
      name: name,
      disabled: disabled,
      id: id
    }),
    label ? React.createElement('span', { className: 'wp-block-checkbox-label' }, label) : null
  );
}
