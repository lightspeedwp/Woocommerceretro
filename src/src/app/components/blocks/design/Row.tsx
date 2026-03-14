import React from 'react';

const gapClasses: Record<string, string> = {
  none: 'wp-gap-0', xs: 'wp-gap-1', sm: 'wp-gap-2', md: 'wp-gap-4', lg: 'wp-gap-6', xl: 'wp-gap-8', '2xl': 'wp-gap-12',
};
const justifyClasses: Record<string, string> = {
  start: 'wp-justify-start', center: 'wp-justify-center', end: 'wp-justify-end',
  between: 'wp-justify-between', around: 'wp-justify-around', evenly: 'wp-justify-evenly',
};
const rowAlignClasses: Record<string, string> = {
  start: 'wp-items-start', center: 'wp-items-center', end: 'wp-items-end', stretch: 'wp-items-stretch', baseline: 'wp-items-baseline',
};
const widthClasses: Record<string, string> = {
  auto: 'wp-w-auto', default: 'wp-w-full wp-max-w-content', wide: 'wp-w-full wp-max-w-wide', full: 'wp-w-full',
};

interface RowProps {
  gap?: string;
  justify?: string;
  align?: string;
  wrap?: boolean;
  width?: string;
  sticky?: boolean;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  ariaLabel?: string;
}

export const Row = ({
  gap = 'md', justify = 'start', align = 'center', wrap = false, width = 'auto',
  sticky = false, as: Tag = 'div', className = '', style, children, ariaLabel,
}: RowProps) => {
  const combinedClassName = [
    'wp-block-group', 'wp-block-group--row', 'wp-flex', 'wp-flex-row',
    gapClasses[gap] || 'wp-gap-4', justifyClasses[justify] || 'wp-justify-start',
    rowAlignClasses[align] || 'wp-items-center', wrap ? 'wp-flex-wrap' : '',
    widthClasses[width] || 'wp-w-auto', sticky ? 'wp-sticky' : '', className, 'funky-row',
  ].filter(Boolean).join(' ');

  return (
    <Tag
      className={combinedClassName}
      style={style}
      aria-label={Tag === 'nav' ? ariaLabel : undefined}
      role={Tag === 'nav' && !ariaLabel ? 'navigation' : undefined}
    >
      {children}
    </Tag>
  );
}

Row.displayName = 'Row';