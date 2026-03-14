import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'white' | 'gray';
  label?: string;
  centered?: boolean;
  className?: string;
}

/**
 * LoadingSpinner Component
 */
export const LoadingSpinner = ({
  size = 'md',
  variant = 'primary',
  label = 'Loading...',
  centered = false,
  className = '',
}: LoadingSpinnerProps) => {
  const spinnerClass = [
    'wp-spinner',
    `wp-spinner--${size}`,
    `wp-spinner--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const containerClass = [
    'wp-spinner-container',
    centered ? 'wp-spinner-container--centered' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClass}>
      <div className={spinnerClass} role="status" aria-label={label} aria-live="polite">
        <span className="sr-only">{label}</span>
      </div>
    </div>
  );
}

LoadingSpinner.displayName = 'LoadingSpinner';

/**
 * Button Loading Spinner
 */
export const ButtonSpinner = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={`wp-button-spinner ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="wp-button-spinner__circle"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="wp-button-spinner__path"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

ButtonSpinner.displayName = 'ButtonSpinner';

/**
 * Inline Loading Dots
 */
export const LoadingDots = ({ className = '' }: { className?: string }) => {
  return (
    <span className={`wp-loading-dots ${className}`} aria-label="Loading">
      <span className="wp-loading-dot" />
      <span className="wp-loading-dot" />
      <span className="wp-loading-dot" />
    </span>
  );
}

LoadingDots.displayName = 'LoadingDots';