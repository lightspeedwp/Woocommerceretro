import React from 'react';

// LiveRegionProps structure
// - children: React.ReactNode
// - ariaLive?: 'polite' | 'assertive' | 'off'
// - role?: 'status' | 'alert' | 'log'
// - className?: string

/**
 * LiveRegion Component
 */
export function LiveRegion(props) {
  var children = props.children;
  var ariaLive = props.ariaLive || 'polite';
  var role = props.role || 'status';
  var className = props.className || '';

  return React.createElement('div', {
    role: role,
    'aria-live': ariaLive,
    className: 'sr-only ' + className
  }, children);
}
