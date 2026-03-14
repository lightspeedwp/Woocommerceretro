import React from 'react';

const gapClasses: Record<string, { gap: string; row: string; column: string }> = {
  none: { gap: 'wp-gap-0', row: 'wp-row-gap-0', column: 'wp-column-gap-0' },
  xs: { gap: 'wp-gap-1', row: 'wp-row-gap-1', column: 'wp-column-gap-1' },
  sm: { gap: 'wp-gap-2', row: 'wp-row-gap-2', column: 'wp-column-gap-2' },
  md: { gap: 'wp-gap-4', row: 'wp-row-gap-4', column: 'wp-column-gap-4' },
  lg: { gap: 'wp-gap-6', row: 'wp-row-gap-6', column: 'wp-column-gap-6' },
  xl: { gap: 'wp-gap-8', row: 'wp-row-gap-8', column: 'wp-column-gap-8' },
  '2xl': { gap: 'wp-gap-12', row: 'wp-row-gap-12', column: 'wp-column-gap-12' },
};

const justifyClasses: Record<string, string> = {
  start: 'wp-justify-start', center: 'wp-justify-center', end: 'wp-justify-end', stretch: '',
};

const alignClasses: Record<string, string> = {
  start: 'wp-items-start', center: 'wp-items-center', end: 'wp-items-end', stretch: 'wp-items-stretch',
};

interface GridProps {
  columns?: number;
  minWidth?: string;
  maxWidth?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  justifyItems?: string;
  alignItems?: string;
  sticky?: boolean;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Grid = ({
  columns, minWidth = '250px', maxWidth = '1fr', gap, rowGap, columnGap,
  justifyItems = 'stretch', alignItems = 'stretch', sticky = false,
  as: Tag = 'div', className = '', style, children,
}: GridProps) => {
  const finalRowGap = rowGap || gap || 'md';
  const finalColumnGap = columnGap || gap || 'md';

  const gridTemplateColumns = columns
    ? `repeat(${columns}, 1fr)`
    : `repeat(auto-fill, minmax(min(${minWidth}, 100%), ${maxWidth}))`;

  const finalStyle: React.CSSProperties = { gridTemplateColumns, ...style };

  const rowGapEntry = gapClasses[finalRowGap] || gapClasses.md;
  const colGapEntry = gapClasses[finalColumnGap] || gapClasses.md;
  const gapClass = (rowGap || columnGap) ? `${rowGapEntry.row} ${colGapEntry.column}` : rowGapEntry.gap;

  const combinedClassName = [
    'wp-block-group', 'wp-block-group--grid', 'wp-grid', gapClass,
    justifyClasses[justifyItems] || '', alignClasses[alignItems] || '',
    sticky ? 'wp-sticky' : '', className, 'funky-grid',
  ].filter(Boolean).join(' ');

  return <Tag className={combinedClassName} style={finalStyle}>{children}</Tag>;
}

Grid.displayName = 'Grid';

interface ResponsiveGridProps extends Omit<GridProps, 'columns'> {
  mobile?: number;
  tablet?: number;
  desktop?: number;
}

export const ResponsiveGrid = ({ mobile = 1, tablet = 2, desktop = 3, className = '', ...rest }: ResponsiveGridProps) => {
  const responsiveClassName = [
    `wp-grid-cols-${mobile}`,
    `sm:wp-grid-cols-${tablet}`,
    `lg:wp-grid-cols-${desktop}`,
    className,
  ].filter(Boolean).join(' ');

  return <Grid {...rest} className={responsiveClassName} />;
}

ResponsiveGrid.displayName = 'ResponsiveGrid';