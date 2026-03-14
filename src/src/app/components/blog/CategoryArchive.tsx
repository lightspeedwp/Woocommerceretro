/**
 * CategoryArchive Component
 *
 * Category-specific blog archive page.
 * Displays posts filtered by category with empty state handling.
 *
 * Styles: /src/styles/sections/blog-archive.css
 */

import React from 'react';
import { useParams, Link } from 'react-router';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { BlogSidebar } from '../patterns/BlogSidebar';
import { PostCard } from './PostCard';
import { BLOG_POSTS } from '../../data/blogData';
import { Button } from '../blocks/design/Buttons';

export const CategoryArchive = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const posts = BLOG_POSTS.filter((post) =>
    post.categories.some((cat: any) => cat.slug === categorySlug)
  );

  let categoryName = categorySlug ? categorySlug.replace(/-/g, ' ') : '';
  if (posts.length > 0) {
    const foundCat = posts[0].categories.find((cat: any) => cat.slug === categorySlug);
    if (foundCat) {
      categoryName = foundCat.name;
    }
  }

  return (
    <Layout>
      <Container className="wp-blog-archive__container">
        <header className="wp-blog-archive__header">
          <div className="wp-category-badge">Category</div>
          <Typography variant="h1" className="wp-blog-archive__title">
            {categoryName}
          </Typography>
          {posts.length === 0 && (
            <p className="wp-blog-archive__description">
              No posts found in this category.
            </p>
          )}
        </header>

        {posts.length > 0 ? (
          <div className="wp-post-grid wp-post-grid--three-col">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="wp-blog-archive__empty">
            <Link to="/blog">
              <Button>View All Posts</Button>
            </Link>
          </div>
        )}
      </Container>
    </Layout>
  );
}