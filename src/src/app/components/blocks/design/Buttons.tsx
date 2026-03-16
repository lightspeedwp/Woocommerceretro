import React from 'react';
import { Link } from 'react-router';
import { Loader2 as SpinnerGap } from 'lucide-react';

interface ButtonProps {
  variant?: string;
  size?: string;
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
}

/**
 * Button Component (Design Block)
 */
export const Button = React.forwardRef<any, ButtonProps>(({
  variant = 'primary',
  size = 'default',
  href,
  to,
  icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  ariaLabel,
  target,
  rel,
  className = '',
  children,
  disabled,
  type = 'button',
  onClick,
}, ref) => {
  const normalizedVariant = variant === 'default' ? 'primary' : variant;

  const combinedClassName = [
    'wp-block-button',
    `wp-block-button--${normalizedVariant}`,
    `wp-block-button--size-${size}`,
    fullWidth ? 'wp-block-button--full-width' : '',
    className,
    'funky-btn',
  ].filter(Boolean).join(' ');

  const renderIcon = () => {
    if (loading) {
      return <SpinnerGap className="wp-block-button__spinner funky-spinner" size={16} weight="bold" aria-hidden="true" />;
    }
    return icon ? <span className="wp-block-button__icon">{icon}</span> : null;
  };

  const content = (
    <>
      {iconPosition === 'left' ? renderIcon() : null}
      {children}
      {iconPosition === 'right' && !loading ? renderIcon() : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClassName}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        ref={ref}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedClassName} aria-label={ariaLabel} aria-disabled={disabled} ref={ref} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={combinedClassName}
      aria-label={ariaLabel}
      aria-busy={loading}
      onClick={onClick}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

interface ButtonsProps {
  orientation?: 'horizontal' | 'vertical';
  gap?: 'none' | 'sm' | 'md' | 'lg';
  align?: 'start' | 'center' | 'end' | 'between';
  className?: string;
  children?: React.ReactNode;
}

export const Buttons = ({ orientation = 'horizontal', gap = 'md', align = 'start', className = '', children }: ButtonsProps) => {
  const classes = [
    'wp-block-buttons',
    orientation === 'vertical' ? 'is-vertical' : '',
    align === 'center' ? 'is-content-justification-center' : '',
    align === 'end' ? 'is-content-justification-right' : '',
    align === 'between' ? 'is-content-justification-space-between' : '',
    className,
    'funky-buttons-group',
  ].filter(Boolean).join(' ');

  const gapMap: Record<string, string> = {
    none: '0',
    sm: 'var(--wp--preset--spacing--20)',
    md: 'var(--wp--preset--spacing--40)',
    lg: 'var(--wp--preset--spacing--60)',
  };

  return (
    <div className={classes} style={{ gap: gapMap[gap] }}>
      {children}
    </div>
  );
};

Buttons.displayName = 'Buttons';

export const ResponsiveButtons = Buttons;