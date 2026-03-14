import React from 'react';

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Skeleton = ({ className = '', style, id, onClick, onMouseEnter, onMouseLeave }: SkeletonProps) => {
  return (
    <div
      id={id} style={style} onClick={onClick}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      className={['wp-block-skeleton', 'funky-skeleton', className].filter(Boolean).join(' ')}
    />
  );
}

Skeleton.displayName = 'Skeleton';