import React from 'react';

// LoadingSpinnerProps structure
// - size?: 'sm' | 'md' | 'lg' | 'xl'
// - variant?: 'primary' | 'white' | 'gray'
// - label?: string
// - centered?: boolean
// - className?: string

/**
 * LoadingSpinner Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function LoadingSpinner(props) {
  var size = props.size || 'md';
  var variant = props.variant || 'primary';
  var label = props.label || 'Loading...';
  var centered = props.centered || false;
  var className = props.className || '';

  var spinnerClass = [
    'wp-spinner',
    'wp-spinner--' + size,
    'wp-spinner--' + variant,
    className
  ].filter(function(c) { return !!c; }).join(' ');

  var containerClass = [
    'wp-spinner-container',
    centered ? 'wp-spinner-container--centered' : ''
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', { className: containerClass },
    React.createElement('div', {
      className: spinnerClass,
      role: "status",
      'aria-label': label,
      'aria-live': "polite"
    },
      React.createElement('span', { className: "sr-only" }, label)
    )
  );
}

LoadingSpinner.displayName = 'LoadingSpinner';

/**
 * Button Loading Spinner
 */
export function ButtonSpinner(props) {
  var className = props.className || '';
  
  return React.createElement('svg', {
    className: 'wp-button-spinner ' + className,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    'aria-hidden': "true"
  },
    React.createElement('circle', {
      className: "wp-button-spinner__circle",
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "4"
    }),
    React.createElement('path', {
      className: "wp-button-spinner__path",
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })
  );
}

ButtonSpinner.displayName = 'ButtonSpinner';

/**
 * Inline Loading Dots
 */
export function LoadingDots(props) {
  var className = props.className || '';
  
  return React.createElement('span', { className: 'wp-loading-dots ' + className, 'aria-label': "Loading" },
    React.createElement('span', { className: "wp-loading-dot" }),
    React.createElement('span', { className: "wp-loading-dot" }),
    React.createElement('span', { className: "wp-loading-dot" })
  );
}

LoadingDots.displayName = 'LoadingDots';