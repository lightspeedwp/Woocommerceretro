import React, { forwardRef } from 'react';

/**
 * Input Component (UI Atom)
 *
 * WordPress-aligned text input with full ARIA support.
 *
 * @example
 * <Input type="text" placeholder="Enter name" className="my-input" />
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...rest }, ref) => {
    const combinedClassName = [
      'wp-block-input',
      'funky-input-glow',
      className
    ].filter(Boolean).join(' ');

    return (
      <input
        {...rest}
        className={combinedClassName}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";
