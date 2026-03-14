import React from 'react';

/**
 * RadioButton Component
 * 
 * A styled radio button with optional label wrapper.
 */
export const RadioButton = ({
  label,
  className = '',
  checked,
  onChange,
  name,
  value,
  disabled,
  id,
}: {
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
  disabled?: boolean;
  id?: string;
}) => {
  const Wrapper = label ? 'label' : 'div';
  const wrapperClass = `wp-block-radio-wrapper ${className}`;

  return (
    <Wrapper className={wrapperClass}>
      <div className="wp-block-radio-input-wrapper">
        <input
          type="radio"
          className="wp-block-radio"
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
          disabled={disabled}
          id={id}
        />
      </div>
      {label ? (
        <span className="wp-block-radio-label">
          <small>{label}</small>
        </span>
      ) : null}
    </Wrapper>
  );
};
