import { useState, type ChangeEvent, type FocusEvent } from 'react';

interface FloatingLabelInputProps {
  label: string;
  error?: string;
  className?: string;
  value?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  required?: boolean;
  id?: string;
}

/**
 * FloatingLabelInput Component
 */
export const FloatingLabelInput = ({
  label,
  error,
  className = '',
  value,
  onFocus,
  onBlur,
  onChange,
  type = 'text',
  name,
  required,
  id,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.toString().length > 0;

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const inputClasses = [
    'wp-floating-label__input',
    'funky-input-glow',
    error ? 'wp-floating-label__input--error' : '',
    hasValue ? 'wp-floating-label__input--has-value' : '',
    isFocused ? 'wp-floating-label__input--focused' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={`wp-field ${className}`}>
      <div className="wp-floating-label">
        <input
          id={id}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={type}
          name={name}
          required={required}
          className={inputClasses}
          placeholder={label}
        />
        <label htmlFor={id} className="wp-floating-label__label">
          {label}
          {required && <span className="wp-label--required"> *</span>}
        </label>
      </div>
      {error && <p className="wp-field__error">{error}</p>}
    </div>
  );
};

FloatingLabelInput.displayName = 'FloatingLabelInput';
