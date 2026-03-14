/**
 * PostCard Block
 *
 * Blog post card with image, meta, title, excerpt, and CTA.
 * Supports video and audio post formats with overlay icons.
 */

import React from 'react';
import { Link } from 'react-router';
import { getMediaSource } from '../../data/posts';
import { postCategories } from '../../data/categories';

interface PostCardProps {
  post: any;
  className?: string;
}

export const PostCard = ({ post, className = '' }: PostCardProps) => {
  const isVideo = post.format === 'video';
  const isAudio = post.format === 'audio';

  const getFormatLabel = () => {
    if (isVideo) return 'Video';
    if (isAudio) return 'Podcast';
    if (post.categories?.length > 0) {
      const category = postCategories.find((c: any) => c.id === post.categories[0]);
      if (category) return category.name;
    }
    return 'Article';
  };

  const featuredMedia = post.featured_media;
  const featuredImageSrc = typeof featuredMedia === 'number'
    ? getMediaSource(featuredMedia)
    : featuredMedia;

  const ctaLabel = isVideo ? 'Watch Video' : isAudio ? 'Listen Now' : 'Read Article';
  const articleClasses = ['blog-post-card', className].filter(Boolean).join(' ');

  const formatIcon = isVideo ? (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  ) : isAudio ? (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  ) : null;

  return (
    <article className={articleClasses}>
      <div className="blog-post-card__glow" aria-hidden="true" />
      <div className="blog-post-card__inner">
        {featuredMedia && (
          <Link to={post.link} className="blog-post-card__image-link">
            <img
              src={featuredImageSrc}
              alt={post.title.rendered}
              className="blog-post-card__image"
              loading="lazy"
            />
            {(isVideo || isAudio) && (
              <div className="blog-post-card__format-overlay">
                <div className="blog-post-card__format-icon">{formatIcon}</div>
              </div>
            )}
          </Link>
        )}

        <div className="blog-post-card__content">
          <div className="blog-post-card__meta">
            <span className="blog-post-card__category">{getFormatLabel()}</span>
            <span className="blog-post-card__meta-sep" aria-hidden="true">&bull;</span>
            <span className="blog-post-card__date">{new Date(post.date).toLocaleDateString()}</span>
          </div>

          <Link to={post.link} className="blog-post-card__title-link">
            <h3 className="blog-post-card__title">{post.title.rendered}</h3>
          </Link>

          <div
            className="blog-post-card__excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />

          <div className="blog-post-card__footer">
            <Link
              to={post.link}
              className="blog-post-card__read-more"
              aria-label={`${ctaLabel}: ${post.title.rendered}`}
            >
              {ctaLabel} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}