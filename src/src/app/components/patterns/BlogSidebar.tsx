import React from 'react';
import { Link } from 'react-router';
import { Typography } from '../common/Typography';
import { posts, getMediaSource } from '../../data/posts';
import { postCategories } from '../../data/categories';
import { tags } from '../../data/tags';
import { Calendar, TrendUp as TrendingUp, Tag } from '@phosphor-icons/react';

interface BlogSidebarProps {
  currentPostSlug?: string;
}

/**
 * BlogSidebar Pattern
 * 
 * Sidebar for blog posts displaying recent posts, categories, and tags.
 */
export const BlogSidebar = ({ currentPostSlug }: BlogSidebarProps) => {
  const recentPosts = posts
    .filter((post) => post.slug !== currentPostSlug)
    .slice(0, 5);

  const categoryCounts = new Map<number, number>();
  posts.forEach((post) => {
    post.categories.forEach((id) => {
      categoryCounts.set(id, (categoryCounts.get(id) || 0) + 1);
    });
  });

  const categories = Array.from(categoryCounts.entries())
    .map(([id, count]) => {
      const cat = postCategories.find((c) => c.id === id);
      if (cat) {
        return { ...cat, count };
      }
      return null;
    })
    .filter((c): c is NonNullable<typeof c> => c !== null)
    .sort((a, b) => b.count - a.count);

  const tagCounts = new Map<number, number>();
  posts.forEach((post) => {
    post.tags.forEach((id) => {
      tagCounts.set(id, (tagCounts.get(id) || 0) + 1);
    });
  });

  const popularTags = Array.from(tagCounts.entries())
    .map(([id, count]) => {
      const tag = tags.find((t) => t.id === id);
      if (tag) {
        return { ...tag, count };
      }
      return null;
    })
    .filter((t): t is NonNullable<typeof t> => t !== null)
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  return (
    <aside className="wp-blog-sidebar">
      {/* Recent Posts */}
      <div className="wp-blog-sidebar__widget">
        <div className="wp-blog-sidebar__widget-header">
          <Calendar size={18} className="wp-blog-sidebar__widget-icon" />
          <Typography variant="h4" className="wp-blog-sidebar__widget-title">Recent posts</Typography>
        </div>
        <div className="wp-blog-sidebar__posts">
          {recentPosts.map((post) => (
            <article key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="wp-blog-sidebar__post">
                <div className="wp-blog-sidebar__post-inner">
                  <div className="wp-blog-sidebar__post-image">
                    <img src={getMediaSource(post.featured_media)} alt="" />
                  </div>
                  <div className="wp-blog-sidebar__post-content">
                    <h5
                      className="wp-blog-sidebar__post-title"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <p className="wp-blog-sidebar__post-date">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="wp-blog-sidebar__widget">
        <div className="wp-blog-sidebar__widget-header">
          <TrendingUp size={18} className="wp-blog-sidebar__widget-icon" />
          <Typography variant="h4" className="wp-blog-sidebar__widget-title">Categories</Typography>
        </div>
        <div className="wp-blog-sidebar__categories">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/blog/category/${cat.slug}`} className="wp-blog-sidebar__category">
              <span className="wp-blog-sidebar__category-name">{cat.name}</span>
              <span className="wp-blog-sidebar__category-count">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="wp-blog-sidebar__widget">
        <div className="wp-blog-sidebar__widget-header">
          <Tag size={18} className="wp-blog-sidebar__widget-icon" />
          <Typography variant="h4" className="wp-blog-sidebar__widget-title">Popular tags</Typography>
        </div>
        <div className="wp-blog-sidebar__tags">
          {popularTags.map((t) => (
            <Link key={t.slug} to={`/blog/tag/${t.slug}`} className="wp-blog-sidebar__tag funky-spring-hover">
              {t.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="wp-blog-sidebar__widget wp-blog-sidebar__widget--newsletter funky-card-glow">
        <div className="wp-blog-sidebar__newsletter-inner">
          <Typography variant="h4" className="wp-blog-sidebar__widget-title funky-text-neon">Stay updated</Typography>
          <p className="wp-blog-sidebar__newsletter-text">
            Subscribe to our newsletter for the latest articles and updates.
          </p>
          <form className="wp-blog-sidebar__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="wp-blog-sidebar__newsletter-input"
              required
            />
            <button type="submit" className="wp-blog-sidebar__newsletter-button funky-spring-hover">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}