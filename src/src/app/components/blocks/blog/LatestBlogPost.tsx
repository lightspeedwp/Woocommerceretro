/**
 * LatestBlogPost Block
 *
 * Displays the most recent blog post as a compact card.
 * Drop into homepage, sidebar, or any template.
 *
 * BEM block: .retro-latest-post
 * @block
 */
import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../../utils/phosphor-compat';
import { BLOG_POSTS } from '../../../data/blogData';

export const LatestBlogPost = () => {
  const post = BLOG_POSTS[0];
  if (!post) return null;

  return (
    <article className="retro-latest-post">
      <div className="retro-latest-post__label retro-font-display retro-bold">
        LATEST FROM GAME LOG
      </div>
      <Link to={'/blog/' + post.slug} className="retro-latest-post__link">
        <div className="retro-latest-post__image-wrap">
          <img
            src={post.featuredImage}
            alt=""
            className="retro-latest-post__image"
            loading="lazy"
          />
        </div>
        <div className="retro-latest-post__body">
          <div className="retro-latest-post__meta retro-font-display">
            {post.categories[0] && (
              <span className="retro-latest-post__cat">{post.categories[0].name.toUpperCase()}</span>
            )}
            <span className="retro-latest-post__date">{post.date}</span>
          </div>
          <h3 className="retro-latest-post__title retro-font-display retro-bold">
            {post.title}
          </h3>
          <p className="retro-latest-post__excerpt retro-font-body">
            {post.excerpt.length > 120 ? post.excerpt.substring(0, 120) + '...' : post.excerpt}
          </p>
          <span className="retro-latest-post__cta retro-font-display retro-bold">
            READ MORE <ArrowRight weight="bold" size={12} />
          </span>
        </div>
      </Link>
    </article>
  );
};
