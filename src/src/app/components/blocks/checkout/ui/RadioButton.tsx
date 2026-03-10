import React from 'react';

/**
 * RadioButton Component
 * No TypeScript syntax for parser compatibility.
 */
export function RadioButton(props) {
  var label = props.label;
  var className = props.className || '';
  var checked = props.checked;
  var onChange = props.onChange;
  var name = props.name;
  var value = props.value;
  var disabled = props.disabled;
  var id = props.id;

  var Wrapper = label ? 'label' : 'div';
  var wrapperClass = 'wp-block-radio-wrapper ' + className;

  return React.createElement(Wrapper, { className: wrapperClass },
    React.createElement('div', { className: 'wp-block-radio-input-wrapper' },
      React.createElement('input', {
        type: 'radio',
        className: 'wp-block-radio',
        checked: checked,
        onChange: onChange,
        name: name,
        value: value,
        disabled: disabled,
        id: id
      })
    ),
    label ? React.createElement('span', { className: 'wp-block-radio-label' }, 
      React.createElement('small', null, label)
    ) : null
  );
}
