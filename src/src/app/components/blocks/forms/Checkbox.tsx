import React, { useState, forwardRef } from 'react';

/**
 * Checkbox Component
 *
 * WordPress-aligned checkbox with controlled/uncontrolled support.
 *
 * @example
 * <Checkbox checked={true} onCheckedChange={(v) => setChecked(v)} />
 */

interface CheckboxProps {
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', checked, defaultChecked, onCheckedChange, onChange, id, name, value, required, disabled }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked || false);
    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setIsChecked(e.target.checked);
      }
      onCheckedChange?.(e.target.checked);
      onChange?.(e);
    };

    const handleClick = () => {
      if (!disabled) {
        const newChecked = !currentChecked;
        if (!isControlled) {
          setIsChecked(newChecked);
        }
        onCheckedChange?.(newChecked);
      }
    };

    const wrapperClass = [
      'wp-block-checkbox-wrapper',
      'funky-checkbox-wrapper',
      className
    ].filter(Boolean).join(' ');

    const checkboxClass = [
      'wp-block-checkbox',
      'funky-checkbox',
      currentChecked ? 'is-checked funky-checkbox--active' : '',
      disabled ? 'is-disabled' : ''
    ].filter(Boolean).join(' ');

    return (
      <div className={wrapperClass}>
        <input
          id={id}
          name={name}
          value={value}
          required={required}
          disabled={disabled}
          type="checkbox"
          checked={currentChecked}
          onChange={handleChange}
          className="wp-block-checkbox-input sr-only"
          ref={ref}
        />
        <div className={checkboxClass} onClick={handleClick}>
          {currentChecked && (
            <svg
              className="wp-block-checkbox-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
