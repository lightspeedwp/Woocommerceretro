import React, { forwardRef } from 'react';

/**
 * Label Component
 *
 * WordPress-aligned form label.
 *
 * @example
 * <Label htmlFor="email">Email Address</Label>
 */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', children, ...rest }, ref) => {
    const combinedClassName = [
      'wp-block-label',
      'funky-label',
      className
    ].filter(Boolean).join(' ');

    return (
      <label
        {...rest}
        ref={ref}
        className={combinedClassName}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";
