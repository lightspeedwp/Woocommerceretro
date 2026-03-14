import React from 'react';

interface BadgeProps {
  className?: string;
  variant?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Badge = ({ className = '', variant = 'default', children, id, style, onClick }: BadgeProps) => {
  return (
    <div
      id={id} style={style} onClick={onClick}
      className={['wp-block-badge', `wp-block-badge--${variant}`, className, 'funky-badge'].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
}

Badge.displayName = 'Badge';