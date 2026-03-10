import React from 'react';
import * as PostCardModule from '../blog/PostCard';

var PostCard = PostCardModule.PostCard;

/*
 * PostGridProps:
 *   posts: Post[]
 *   columns?: {
 *     mobile?: number
 *     tablet?: number
 *     desktop?: number
 *   }
 *   gap?: string
 *   className?: string
 */

/**
 * PostGrid Pattern
 */
export function PostGrid(props) {
  var posts = props.posts;
  var className = props.className || '';

  return React.createElement('div', { className: 'wp-block-post-grid ' + className },
    posts.map(function(post) {
      return React.createElement(PostCard, { key: post.id, post: post });
    })
  );
}