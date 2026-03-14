import { type ChangeEvent } from 'react';

interface CheckboxProps {
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  id?: string;
}

/**
 * Checkout Checkbox Component
 */
export const Checkbox = ({ label, className = '', checked, onChange, name, disabled, id }: CheckboxProps) => {
  const Wrapper = label ? 'label' : 'div';

  return (
    <Wrapper className={`wp-block-checkbox-wrapper ${className}`}>
      <input
        type="checkbox"
        className="wp-block-checkbox funky-input-glow"
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
        id={id}
      />
      {label && <span className="wp-block-checkbox-label">{label}</span>}
    </Wrapper>
  );
};
