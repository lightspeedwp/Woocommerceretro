import React from 'react';
import { Link } from 'react-router';
import { cn } from '../ui/utils';

interface SiteTitleProps {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  linkHref?: string | null;
  linkLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SiteTitle = ({ tag: Tag = 'h1', children, linkHref = '/', linkLabel = 'Home', className = '', style }: SiteTitleProps) => {
  const titleElement = <Tag className={cn('wp-block-site-title', className)} style={style}>{children}</Tag>;

  if (linkHref) {
    return <Link to={linkHref} aria-label={linkLabel} className="wp-block-site-title__link">{titleElement}</Link>;
  }

  return titleElement;
}

SiteTitle.displayName = 'SiteTitle';