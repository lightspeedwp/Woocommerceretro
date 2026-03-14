import React from 'react';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export const Separator = ({ className = '', orientation = 'horizontal', decorative = true, id, style }: SeparatorProps) => {
  const combinedClassName = [
    'wp-block-separator',
    orientation === 'horizontal' ? 'wp-block-separator--horizontal' : 'wp-block-separator--vertical',
    className,
    'funky-separator',
  ].filter(Boolean).join(' ');

  return (
    <div
      id={id}
      style={style}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      data-slot="separator-root"
      className={combinedClassName}
    />
  );
}

Separator.displayName = 'Separator';