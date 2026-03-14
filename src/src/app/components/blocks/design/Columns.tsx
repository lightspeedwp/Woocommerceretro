import React from 'react';

const paddingClasses: Record<string, string> = {
  none: '', xs: 'wp-p-2', sm: 'wp-p-3', md: 'wp-p-4', lg: 'wp-p-6', xl: 'wp-p-8', '2xl': 'wp-p-8',
};

const alignClasses: Record<string, string> = {
  start: 'wp-flex wp-flex-col wp-justify-start', center: 'wp-flex wp-flex-col wp-justify-center',
  end: 'wp-flex wp-flex-col wp-justify-end', stretch: 'wp-flex wp-flex-col',
};

interface ColumnProps {
  width?: number | string;
  backgroundColor?: string;
  padding?: string;
  verticalAlign?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Column = ({ width, backgroundColor, padding = 'none', verticalAlign = 'stretch', as: Tag = 'div', className = '', style, children }: ColumnProps) => {
  const finalStyle: React.CSSProperties = { backgroundColor, ...style };
  if (width) {
    finalStyle.width = typeof width === 'number' ? `${width}%` : width;
  }

  const combinedClassName = [
    'wp-block-column', paddingClasses[padding] || '', alignClasses[verticalAlign] || '', className, 'funky-column',
  ].filter(Boolean).join(' ');

  return <Tag className={combinedClassName} style={finalStyle}>{children}</Tag>;
}

Column.displayName = 'Column';

const gapClasses: Record<string, string> = {
  none: 'wp-gap-0', xs: 'wp-gap-1', sm: 'wp-gap-2', md: 'wp-gap-4', lg: 'wp-gap-6', xl: 'wp-gap-8', '2xl': 'wp-gap-12',
};

const columnsAlignClasses: Record<string, string> = {
  top: 'wp-items-start', center: 'wp-items-center', bottom: 'wp-items-end', stretch: 'wp-items-stretch',
};

const columnCountClasses: Record<string, string> = {
  '1': 'wp-grid-cols-1', '2': 'wp-grid-cols-2', '3': 'wp-grid-cols-3', '4': 'wp-grid-cols-4', '5': 'wp-grid-cols-5', '6': 'wp-grid-cols-6',
};

const breakpointPrefixes: Record<string, string> = { sm: 'sm:', md: 'md:', lg: 'lg:' };

interface ColumnsProps {
  columns?: number;
  gap?: string;
  verticalAlign?: string;
  stackOnMobile?: boolean;
  stackBreakpoint?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Columns = ({ columns, gap = 'md', verticalAlign = 'stretch', stackOnMobile = true, stackBreakpoint = 'md', as: Tag = 'div', className = '', style, children }: ColumnsProps) => {
  const columnCountClass = columns ? (columnCountClasses[String(columns)] || '') : '';
  const prefix = breakpointPrefixes[stackBreakpoint] || 'md:';

  const combinedClassName = [
    'wp-block-columns', 'wp-grid',
    stackOnMobile ? 'wp-grid-cols-1' : columnCountClass,
    stackOnMobile && columnCountClass ? `${prefix}${columnCountClass}` : '',
    gapClasses[gap] || 'wp-gap-4',
    columnsAlignClasses[verticalAlign] || 'wp-items-stretch',
    className, 'funky-columns',
  ].filter(Boolean).join(' ');

  return <Tag className={combinedClassName} style={style}>{children}</Tag>;
}

Columns.displayName = 'Columns';