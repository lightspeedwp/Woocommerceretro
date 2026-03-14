import React from 'react';
import { Typography } from '../common/Typography';

interface ArchiveHeaderProps {
  icon?: React.ReactNode;
  iconColor?: 'purple' | 'blue' | 'green' | 'red' | 'gray';
  label?: string;
  title: string;
  description?: string;
  metadata?: string | React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * ArchiveHeader Pattern
 */
export const ArchiveHeader = ({
  icon,
  iconColor = 'purple',
  label,
  title,
  description,
  metadata,
  children,
  className = '',
}: ArchiveHeaderProps) => {
  return (
    <header className={`wp-archive-header ${className}`}>
      {icon && (
        <div className={`wp-archive-header__icon wp-archive-header__icon--${iconColor}`} aria-hidden="true">
          {icon}
        </div>
      )}
      {label && (
        <div className={`wp-archive-header__label wp-archive-header__label--${iconColor}`}>
          {label}
        </div>
      )}
      <div className="wp-archive-header__title">
        <Typography variant="h1">{title}</Typography>
      </div>
      {description && (
        <p className="wp-archive-header__description">{description}</p>
      )}
      {metadata && (
        <div className="wp-archive-header__metadata">
          {typeof metadata === 'string' ? <p>{metadata}</p> : metadata}
        </div>
      )}
      {children}
    </header>
  );
}