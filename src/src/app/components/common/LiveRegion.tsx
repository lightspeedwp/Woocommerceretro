import React from 'react';

interface LiveRegionProps {
  children: React.ReactNode;
  ariaLive?: 'polite' | 'assertive' | 'off';
  role?: 'status' | 'alert' | 'log';
  className?: string;
}

/**
 * LiveRegion Component
 */
export const LiveRegion = ({ children, ariaLive = 'polite', role = 'status', className = '' }: LiveRegionProps) => {
  return (
    <div role={role} aria-live={ariaLive} className={`sr-only ${className}`}>
      {children}
    </div>
  );
}