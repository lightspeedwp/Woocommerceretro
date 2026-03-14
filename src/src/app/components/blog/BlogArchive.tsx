/**
 * BlogArchive Component
 *
 * Main blog archive template with post grid and pagination.
 * Implements WordPress Query Loop and Query Pagination patterns.
 *
 * Styles: /src/styles/sections/blog-archive.css
 */

import React, { useState } from 'react';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { PostCard } from './PostCard';
import { BLOG_POSTS } from '../../data/blogData';
import { ArchiveCTA } from '../patterns/ArchiveCTA';
import { blogArchiveCTA } from '../../data/archiveCTA';

export const BlogArchive = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <Container className="wp-blog-archive__container">
        <header className="wp-blog-archive__header">
          <Typography variant="h1">Blog</Typography>
          <p className="wp-blog-archive__description">
            Insights, trends, and guides from our team. Explore the latest news and stories.
          </p>
        </header>

        <div className="wp-post-grid wp-post-grid--three-col">
          {currentPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav aria-label="Blog pagination" className="wp-blog-archive__pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="wp-pagination-button"
            >
              Previous
            </button>

            <div className="wp-pagination-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`wp-pagination-button${currentPage === page ? ' wp-pagination-button--active' : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="wp-pagination-button"
            >
              Next
            </button>
          </nav>
        )}
      </Container>

      <ArchiveCTA content={blogArchiveCTA} variant="gradient" />
    </Layout>
  );
}