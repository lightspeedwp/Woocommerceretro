import React from 'react';
import { TYPOGRAPHY } from '../../constants/theme';

interface TypographyProps {
  variant?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  stretchy?: boolean;
  children: React.ReactNode;
  id?: string;
  onClick?: () => void;
}

/**
 * Typography Component
 */
export const Typography = ({
  variant = 'body',
  as,
  className = '',
  stretchy = false,
  children,
  id,
  onClick,
}: TypographyProps) => {
  const Tag = as || (variant.indexOf('h') === 0 ? (variant as keyof JSX.IntrinsicElements) : 'p');
  const stretchyClass = stretchy ? 'typography--stretchy' : '';
  const typographyClass = TYPOGRAPHY[variant] || '';

  return (
    <Tag className={`${typographyClass} ${stretchyClass} ${className}`} id={id} onClick={onClick}>
      {children}
    </Tag>
  );
}