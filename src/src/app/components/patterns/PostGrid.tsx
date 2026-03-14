import React from 'react';
import { PostCard } from '../blog/PostCard';

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
export const PostGrid = ({ posts, className = '' }: { posts: any[]; className?: string }) => {
  return (
    <div className={`wp-block-post-grid ${className}`}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}