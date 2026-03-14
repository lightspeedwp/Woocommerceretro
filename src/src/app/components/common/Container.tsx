import React from 'react';
import { CONTAINER } from '../../constants/theme';

/**
 * Container Component
 */
export const Container = ({ variant = 'site', className = '', children }: {
  variant?: 'site' | 'wide' | 'full' | 'content' | 'narrow';
  className?: string;
  children: React.ReactNode;
}) => {
  const getContainerClass = () => {
    if (!CONTAINER) return 'wp-container-fallback';
    if (variant === 'full') return 'alignfull';
    if (variant === 'wide') return 'alignwide';
    return CONTAINER[variant] || 'wp-container-fallback';
  };

  const containerClass = getContainerClass();

  return (
    <div className={`${containerClass}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}

Container.displayName = 'Container';