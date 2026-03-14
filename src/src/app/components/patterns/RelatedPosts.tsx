/**
 * RelatedPosts.tsx - Blog Pattern
 * 
 * Displays related blog posts.
 */

import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { Typography } from '../common/Typography';
import { posts as allPostsData, getMediaSource } from '../../data/posts';
import { postCategories } from '../../data/categories';

interface RelatedPostsProps {
  currentPost: any;
  allPosts?: any[];
  maxPosts?: number;
}

export const RelatedPosts = ({
  currentPost,
  allPosts = allPostsData,
  maxPosts = 3,
}: RelatedPostsProps) => {
  const relatedItems = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0;
      const sharedCategories = post.categories.filter((catId: number) => currentPost.categories.includes(catId));
      score += sharedCategories.length * 3;
      const sharedTags = post.tags.filter((tagId: number) => currentPost.tags.includes(tagId));
      score += sharedTags.length;
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPosts)
    .map((item) => item.post);

  const postsToShow = relatedItems.length > 0
    ? relatedItems
    : allPosts.filter((post) => post.slug !== currentPost.slug).slice(0, maxPosts);

  if (postsToShow.length === 0) {
    return null;
  }

  const titleText = relatedItems.length > 0 ? 'Related Articles' : 'More from Our Blog';

  return (
    <section className="wp-related-posts">
      <Typography variant="h2" className="wp-related-posts__heading">{titleText}</Typography>
      <div className="wp-related-posts__grid">
        {postsToShow.map((post) => {
          const catId = post.categories[0];
          const foundCat = catId ? postCategories.find((c) => c.id === catId) : null;
          const categoryName = foundCat?.name || null;

          return (
            <article key={post.slug} className="wp-related-posts__card">
              <Link to={`/blog/${post.slug}`}>
                <div className="wp-related-posts__image-wrapper">
                  <img src={getMediaSource(post.featured_media)} alt="" className="wp-related-posts__image" />
                </div>
                <div className="wp-related-posts__content">
                  {categoryName && (
                    <div className="wp-related-posts__category">
                      <span className="wp-related-posts__category-label">
                        <small><strong>{categoryName}</strong></small>
                      </span>
                    </div>
                  )}
                  <Typography variant="h4" className="wp-related-posts__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div className="wp-related-posts__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <div className="wp-related-posts__meta">
                    <span className="wp-related-posts__date">
                      <small>{new Date(post.date).toLocaleDateString()}</small>
                    </span>
                    <span className="wp-related-posts__read-more">
                      <small><strong>Read more</strong></small>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

RelatedPosts.displayName = 'RelatedPosts';