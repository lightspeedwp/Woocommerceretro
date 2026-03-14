import { type ChangeEvent, type FocusEvent } from 'react';
import { WarningCircle as AlertCircle } from '@phosphor-icons/react';

interface CheckoutInputProps {
  label: string;
  error?: string;
  touched?: boolean;
  className?: string;
  id?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

/**
 * CheckoutInput Component
 */
export const CheckoutInput = ({
  label,
  error,
  touched,
  className = '',
  id,
  value,
  onChange,
  onBlur,
  type = 'text',
  name,
  required,
  autoComplete,
}: CheckoutInputProps) => {
  const hasError = touched && error;
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  const errorId = `${inputId}-error`;

  return (
    <div className="wp-field">
      <div className="wp-floating-label">
        <input
          id={inputId}
          aria-invalid={!!hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`wp-floating-label__input funky-input-glow ${hasError ? 'wp-floating-label__input--error ' : ''}${value ? 'wp-floating-label__input--has-value ' : ''}${className}`}
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          name={name}
          required={required}
          autoComplete={autoComplete}
        />
        <label htmlFor={inputId} className="wp-floating-label__label">
          {label}
        </label>
      </div>
      {hasError && (
        <div id={errorId} className="wp-field__error" role="alert">
          <AlertCircle size={12} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
