import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as TypographyModule from '../common/Typography';
import * as PostsData from '../../data/posts';
import * as CategoriesData from '../../data/categories';
import * as TagsData from '../../data/tags';
import { Calendar, TrendUp as TrendingUp, Tag } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var Typography = TypographyModule.Typography;
var posts = PostsData.posts;
var getMediaSource = PostsData.getMediaSource;
var postCategories = CategoriesData.postCategories;
var tags = TagsData.tags;

/**
 * BlogSidebar Pattern
 * 
 * Sidebar for blog posts displaying recent posts, categories, and tags.
 */

export function BlogSidebar(props) {
  var currentPostSlug = props.currentPostSlug;

  var recentPosts = posts
    .filter(function(post) { return post.slug !== currentPostSlug; })
    .slice(0, 5);

  var categoryCounts = new Map();
  posts.forEach(function(post) {
    post.categories.forEach(function(id) {
      categoryCounts.set(id, (categoryCounts.get(id) || 0) + 1);
    });
  });
  
  var categories = Array.from(categoryCounts.entries())
    .map(function(entry) {
      var id = entry[0];
      var count = entry[1];
      var cat = postCategories.find(function(c) { return c.id === id; });
      if (cat) {
        var result = Object.assign({}, cat);
        result.count = count;
        return result;
      }
      return null;
    })
    .filter(function(c) { return c !== null; })
    .sort(function(a, b) { return b.count - a.count; });

  var tagCounts = new Map();
  posts.forEach(function(post) {
    post.tags.forEach(function(id) {
      tagCounts.set(id, (tagCounts.get(id) || 0) + 1);
    });
  });
  
  var popularTags = Array.from(tagCounts.entries())
    .map(function(entry) {
      var id = entry[0];
      var count = entry[1];
      var tag = tags.find(function(t) { return t.id === id; });
      if (tag) {
        var result = Object.assign({}, tag);
        result.count = count;
        return result;
      }
      return null;
    })
    .filter(function(t) { return t !== null; })
    .sort(function(a, b) { return b.count - a.count; })
    .slice(0, 12);

  return React.createElement('aside', { className: "wp-blog-sidebar" },
    /* Recent Posts */
    React.createElement('div', { className: "wp-blog-sidebar__widget" },
      React.createElement('div', { className: "wp-blog-sidebar__widget-header" },
        React.createElement(Calendar, { size: 18, className: "wp-blog-sidebar__widget-icon" }),
        React.createElement(Typography, { variant: "h4", className: "wp-blog-sidebar__widget-title" }, "Recent posts")
      ),
      React.createElement('div', { className: "wp-blog-sidebar__posts" },
        recentPosts.map(function(post) {
          return React.createElement('article', { key: post.slug },
            React.createElement(Link, {
              to: '/blog/' + post.slug,
              className: "wp-blog-sidebar__post"
            },
              React.createElement('div', { className: "wp-blog-sidebar__post-inner" },
                React.createElement('div', { className: "wp-blog-sidebar__post-image" },
                  React.createElement('img', {
                    src: getMediaSource(post.featured_media),
                    alt: ""
                  })
                ),
                React.createElement('div', { className: "wp-blog-sidebar__post-content" },
                  React.createElement('h5', {
                    className: "wp-blog-sidebar__post-title",
                    dangerouslySetInnerHTML: { __html: post.title.rendered }
                  }),
                  React.createElement('p', { className: "wp-blog-sidebar__post-date" },
                    new Date(post.date).toLocaleDateString()
                  )
                )
              )
            )
          );
        })
      )
    ),

    /* Categories */
    React.createElement('div', { className: "wp-blog-sidebar__widget" },
      React.createElement('div', { className: "wp-blog-sidebar__widget-header" },
        React.createElement(TrendingUp, { size: 18, className: "wp-blog-sidebar__widget-icon" }),
        React.createElement(Typography, { variant: "h4", className: "wp-blog-sidebar__widget-title" }, "Categories")
      ),
      React.createElement('div', { className: "wp-blog-sidebar__categories" },
        categories.map(function(category) {
          var cat = category;
          return React.createElement(Link, {
            key: cat.slug,
            to: '/blog/category/' + cat.slug,
            className: "wp-blog-sidebar__category"
          },
            React.createElement('span', { className: "wp-blog-sidebar__category-name" }, cat.name),
            React.createElement('span', { className: "wp-blog-sidebar__category-count" }, cat.count)
          );
        })
      )
    ),

    /* Popular Tags */
    React.createElement('div', { className: "wp-blog-sidebar__widget" },
      React.createElement('div', { className: "wp-blog-sidebar__widget-header" },
        React.createElement(Tag, { size: 18, className: "wp-blog-sidebar__widget-icon" }),
        React.createElement(Typography, { variant: "h4", className: "wp-blog-sidebar__widget-title" }, "Popular tags")
      ),
      React.createElement('div', { className: "wp-blog-sidebar__tags" },
        popularTags.map(function(tag) {
          var t = tag;
          return React.createElement(Link, {
            key: t.slug,
            to: '/blog/tag/' + t.slug,
            className: "wp-blog-sidebar__tag funky-spring-hover"
          }, t.name);
        })
      )
    ),

    /* Newsletter Signup */
    React.createElement('div', { className: "wp-blog-sidebar__widget wp-blog-sidebar__widget--newsletter funky-card-glow" },
      React.createElement('div', { className: "wp-blog-sidebar__newsletter-inner" },
        React.createElement(Typography, { variant: "h4", className: "wp-blog-sidebar__widget-title funky-text-neon" }, "Stay updated"),
        React.createElement('p', { className: "wp-blog-sidebar__newsletter-text" },
          "Subscribe to our newsletter for the latest articles and updates."
        ),
        React.createElement('form', {
          className: "wp-blog-sidebar__newsletter-form",
          onSubmit: function(e) { e.preventDefault(); }
        },
          React.createElement('input', {
            type: "email",
            placeholder: "Your email",
            className: "wp-blog-sidebar__newsletter-input",
            required: true
          }),
          React.createElement('button', {
            type: "submit",
            className: "wp-blog-sidebar__newsletter-button funky-spring-hover"
          }, "Subscribe")
        )
      )
    )
  );
}