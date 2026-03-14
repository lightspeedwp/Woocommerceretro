import React, { forwardRef } from 'react';

/**
 * Textarea Component
 *
 * WordPress-aligned textarea input with full ARIA support.
 *
 * @example
 * <Textarea placeholder="Enter message" rows={4} />
 */

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...rest }, ref) => {
    const combinedClassName = [
      'wp-block-textarea',
      'funky-input-glow',
      className
    ].filter(Boolean).join(' ');

    return (
      <textarea
        {...rest}
        className={combinedClassName}
        ref={ref}
      />
    );
  }
);

Textarea.displayName = "Textarea";
