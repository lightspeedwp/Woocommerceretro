import React from 'react';
import { Link } from 'react-router';
import { Calendar, User, ChatCircle as MessageCircle } from '../../utils/phosphor-compat';

interface PostMetaProps {
  author: string;
  authorSlug?: string;
  date: string;
  commentCount?: number;
  postSlug?: string;
  className?: string;
}

/**
 * PostMeta Pattern Component
 */
export const PostMeta = ({
  author,
  authorSlug,
  date,
  commentCount = 0,
  postSlug,
  className = '',
}: PostMetaProps) => {
  const commentSuffix = commentCount !== 1 ? 's' : '';
  const commentText = `${commentCount} Comment${commentSuffix}`;

  return (
    <div className={`wp-block-post-meta ${className}`} aria-label="Post metadata">
      <div className="wp-block-post-meta__item">
        <User size={16} className="wp-block-post-meta__icon" aria-hidden="true" />
        {authorSlug ? (
          <Link to={`/blog/author/${authorSlug}`} className="wp-block-post-meta__link" aria-label={`View posts by ${author}`}>
            {author}
          </Link>
        ) : (
          <span>{author}</span>
        )}
      </div>
      <div className="wp-block-post-meta__item">
        <Calendar size={16} className="wp-block-post-meta__icon" aria-hidden="true" />
        <time dateTime={date}>{date}</time>
      </div>
      <div className="wp-block-post-meta__item">
        <MessageCircle size={16} className="wp-block-post-meta__icon" aria-hidden="true" />
        {postSlug ? (
          <a href="#comments" className="wp-block-post-meta__link" aria-label={`${commentCount} comment${commentSuffix}`}>
            {commentText}
          </a>
        ) : (
          <span>{commentText}</span>
        )}
      </div>
    </div>
  );
}