import React from 'react';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as PostCardModule from './PostCard';
import * as BlogDataModule from '../../data/blogData';
import * as ArchiveCTAModule from '../patterns/ArchiveCTA';
import * as ArchiveCTADataModule from '../../data/archiveCTA';

var useState = React.useState;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var PostCard = PostCardModule.PostCard;
var BLOG_POSTS = BlogDataModule.BLOG_POSTS;
var ArchiveCTA = ArchiveCTAModule.ArchiveCTA;
var blogArchiveCTA = ArchiveCTADataModule.blogArchiveCTA;

/**
 * BlogArchive Component
 * 
 * Main blog archive template with post grid and pagination.
 * Implements WordPress Query Loop and Query Pagination patterns.
 * 
 * Styles: /src/styles/sections/blog-archive.css
 */
export function BlogArchive() {
  var pageState = useState(1);
  var currentPage = pageState[0];
  var setCurrentPage = pageState[1];
  var postsPerPage = 6;
  
  // Pagination logic (mock)
  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);
  var totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);

  var handlePageChange = function(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    React.createElement(Layout, null,
      React.createElement(Container, { className: "wp-blog-archive__container" },
        /* Archive Header */
        React.createElement('header', { className: "wp-blog-archive__header" },
          React.createElement(Typography, { variant: "h1" }, "Blog"),
          React.createElement('p', { className: "wp-blog-archive__description" },
            "Insights, trends, and guides from our team. Explore the latest news and stories."
          )
        ),

        /* Post Grid (Query Loop Pattern) */
        React.createElement('div', { className: "wp-post-grid wp-post-grid--three-col" },
          currentPosts.map(function(post) {
            return (
              React.createElement(PostCard, { key: post.id, post: post })
            );
          })
        ),

        /* Pagination (Query Pagination Block Pattern) */
        totalPages > 1 && (
          React.createElement('nav', { "aria-label": "Blog pagination", className: "wp-blog-archive__pagination" },
            React.createElement('button', {
              onClick: function() { handlePageChange(currentPage - 1); },
              disabled: currentPage === 1,
              className: "wp-pagination-button"
            }, "Previous"),
            
            React.createElement('div', { className: "wp-pagination-numbers" },
              Array.from({ length: totalPages }, function(_, i) { return i + 1; }).map(function(page) {
                return (
                  React.createElement('button', {
                    key: page,
                    onClick: function() { handlePageChange(page); },
                    className: ['wp-pagination-button', currentPage === page ? 'wp-pagination-button--active' : ''].filter(Boolean).join(' ')
                  }, page)
                );
              })
            ),
            
            React.createElement('button', {
              onClick: function() { handlePageChange(currentPage + 1); },
              disabled: currentPage === totalPages,
              className: "wp-pagination-button"
            }, "Next")
          )
        )
      ),

      /* Archive CTA */
      React.createElement(ArchiveCTA, { content: blogArchiveCTA, variant: "gradient" })
    )
  );
}
