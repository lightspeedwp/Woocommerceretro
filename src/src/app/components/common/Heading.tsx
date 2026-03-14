import React from 'react';

const headingStyles: Record<string, string> = {
  '1': 'wp-heading wp-heading--1',
  '2': 'wp-heading wp-heading--2',
  '3': 'wp-heading wp-heading--3',
  '4': 'wp-heading wp-heading--4',
};

const alignStyles: Record<string, string> = {
  left: 'has-text-align-left',
  center: 'has-text-align-center',
  right: 'has-text-align-right',
};

interface HeadingProps {
  level: '1' | '2' | '3' | '4';
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  id?: string;
}

/**
 * Heading Component
 *
 * Enforces fluid typography and consistent dark mode support.
 * Uses WordPress-aligned CSS classes only.
 */
export const Heading = ({ level, children, className = '', align = 'left', id }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeStyles = headingStyles[level] || '';
  const alignStyle = alignStyles[align] || '';

  return (
    <Tag
      id={id}
      className={`${sizeStyles} ${alignStyle}${className ? ` ${className}` : ''}`}
    >
      {children}
    </Tag>
  );
}

Heading.displayName = 'Heading';