import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as BlogSidebarModule from '../patterns/BlogSidebar';
import * as PostCardModule from './PostCard';
import * as BlogDataModule from '../../data/blogData';
import * as ButtonsModule from '../blocks/design/Buttons';

var useParams = ReactRouterModule.useParams;
var Link = ReactRouterModule.Link;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var BlogSidebar = BlogSidebarModule.BlogSidebar;
var PostCard = PostCardModule.PostCard;
var BLOG_POSTS = BlogDataModule.BLOG_POSTS;
var Button = ButtonsModule.Button;

/**
 * CategoryArchive Component
 * 
 * Category-specific blog archive page.
 * Displays posts filtered by category with empty state handling.
 * 
 * Styles: /src/styles/sections/blog-archive.css
 */
export function CategoryArchive() {
  var params = useParams();
  var categorySlug = params.categorySlug;
  
  // Find posts in this category
  var posts = BLOG_POSTS.filter(function(post) { 
    return post.categories.some(function(cat) { return cat.slug === categorySlug; });
  });
  
  // Derive category name from first matching post (or generic fallback)
  var categoryName = categorySlug ? categorySlug.replace(/-/g, ' ') : '';
  if (posts.length > 0) {
    var foundCat = posts[0].categories.find(function(cat) { return cat.slug === categorySlug; });
    if (foundCat) {
      categoryName = foundCat.name;
    }
  }

  return (
    React.createElement(Layout, null,
      React.createElement(Container, { className: "wp-blog-archive__container" },
        /* Archive Header */
        React.createElement('header', { className: "wp-blog-archive__header" },
          React.createElement('div', { className: "wp-category-badge" }, "Category"),
          React.createElement(Typography, { variant: "h1", className: "wp-blog-archive__title" },
            categoryName
          ),
          posts.length === 0 && (
             React.createElement('p', { className: "wp-blog-archive__description" },
                "No posts found in this category."
             )
          )
        ),

        /* Post Grid */
        posts.length > 0 ? (
          React.createElement('div', { className: "wp-post-grid wp-post-grid--three-col" },
            posts.map(function(post) {
              return (
                React.createElement(PostCard, { key: post.id, post: post })
              );
            })
          )
        ) : (
          React.createElement('div', { className: "wp-blog-archive__empty" },
             React.createElement(Link, { to: "/blog" },
                React.createElement(Button, null, "View All Posts")
             )
          )
        )
      )
    )
  );
}
