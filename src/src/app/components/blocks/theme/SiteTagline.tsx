import React from 'react';
import { Link } from 'react-router';
import { cn } from '../ui/utils';

interface SiteTaglineProps {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  linkHref?: string | null;
  linkLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SiteTagline = ({ tag: Tag = 'p', children, linkHref = null, linkLabel = 'Home', className = '', style }: SiteTaglineProps) => {
  const taglineElement = <Tag className={cn('wp-block-site-tagline', className)} style={style}>{children}</Tag>;

  if (linkHref) {
    return <Link to={linkHref} aria-label={linkLabel} className="wp-block-site-tagline__link">{taglineElement}</Link>;
  }

  return taglineElement;
}

SiteTagline.displayName = 'SiteTagline';