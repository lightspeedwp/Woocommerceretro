import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

interface PostNavigationLink {
  title: string;
  slug: string;
}

interface PostNavigationProps {
  prevPost?: PostNavigationLink | null;
  nextPost?: PostNavigationLink | null;
  basePath?: string;
  className?: string;
}

/**
 * PostNavigation Pattern
 */
export const PostNavigation = ({
  prevPost,
  nextPost,
  basePath = '/blog/',
  className = '',
}: PostNavigationProps) => {
  if (!prevPost && !nextPost) {
    return null;
  }

  return (
    <nav className={`wp-block-post-navigation ${className}`} aria-label="Post navigation">
      <div className="wp-block-post-navigation__grid">
        {prevPost ? (
          <Link to={`${basePath}${prevPost.slug}`} className="wp-block-post-navigation__link">
            <div className="wp-block-post-navigation__meta">
              <ArrowLeft size={16} aria-hidden="true" />
              <small>Previous Post</small>
            </div>
            <h4 className="wp-block-post-navigation__title">{prevPost.title}</h4>
          </Link>
        ) : (
          <div />
        )}
        {nextPost && (
          <Link to={`${basePath}${nextPost.slug}`} className="wp-block-post-navigation__link wp-block-post-navigation__link--next">
            <div className="wp-block-post-navigation__meta">
              <small>Next Post</small>
              <ArrowRight size={16} aria-hidden="true" />
            </div>
            <h4 className="wp-block-post-navigation__title">{nextPost.title}</h4>
          </Link>
        )}
      </div>
    </nav>
  );
}