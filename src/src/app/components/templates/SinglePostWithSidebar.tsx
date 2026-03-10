import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Tag } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var useParams = ReactRouterModule.useParams;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as PostMetaModule from '../patterns/PostMeta';
import * as PostNavigationModule from '../patterns/PostNavigation';
import * as BlogSidebarModule from '../patterns/BlogSidebar';
import * as RelatedPostsModule from '../patterns/RelatedPosts';
import * as NewsletterModule from '../patterns/NewsletterCTA';
import * as PostsDataModule from '../../data/posts';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var PostMeta = PostMetaModule.PostMeta;
var PostNavigation = PostNavigationModule.PostNavigation;
var BlogSidebar = BlogSidebarModule.BlogSidebar;
var RelatedPosts = RelatedPostsModule.RelatedPosts;
var NewsletterCTA = NewsletterModule.NewsletterCTA;
var posts = PostsDataModule.posts;
var resolvedPosts = PostsDataModule.resolvedPosts;
var getResolvedPostBySlug = PostsDataModule.getResolvedPostBySlug;

/**
 * SinglePostWithSidebar Template — Funky Redesign
 *
 * Single blog post with sidebar layout and related posts.
 *
 * @template
 */
export function SinglePostWithSidebar() {
  var params = useParams();
  var slug = params.slug;
  var postState = React.useState(null);
  var post = postState[0];
  var setPost = postState[1];
  var loadingState = React.useState(true);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  React.useEffect(function() {
    setLoading(true);
    window.scrollTo(0, 0);
    var foundPost = getResolvedPostBySlug(slug || '') || null;
    setTimeout(function() {
      setPost(foundPost);
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return React.createElement(Layout, null,
      React.createElement('div', { className: "blog-skeleton" },
        React.createElement('div', { className: "blog-skeleton__bar blog-skeleton__bar--title" }),
        React.createElement('div', { className: "blog-skeleton__bar blog-skeleton__bar--subtitle" }),
        React.createElement('div', { className: "blog-skeleton__bar blog-skeleton__bar--image" }),
        React.createElement('div', { className: "blog-skeleton__bar blog-skeleton__bar--text" }),
        React.createElement('div', { className: "blog-skeleton__bar blog-skeleton__bar--text" })
      )
    );
  }

  if (!post) {
    return React.createElement(Layout, null,
      React.createElement('div', { className: "blog-archive__empty" },
        React.createElement('h2', null, "Post not found"),
        React.createElement('p', null, "The article you are looking for does not exist."),
        React.createElement(Link, { to: "/blog", className: "blog-archive__empty-cta" }, "Return to Blog")
      )
    );
  }

  var currentIndex = resolvedPosts.findIndex(function(p) { return p.slug === slug; });
  var prevPost = currentIndex > 0 ? resolvedPosts[currentIndex - 1] : null;
  var nextPost = currentIndex < resolvedPosts.length - 1 ? resolvedPosts[currentIndex + 1] : null;

  return React.createElement(Layout, null,
    React.createElement('div', { className: "single-post-sb" },
      React.createElement('div', { className: "single-post-sb__layout" },
        React.createElement('article', null,
          React.createElement('header', { className: "single-post-sb__article-header" },
            React.createElement('div', { className: "single-post-sb__categories" },
              post.categories.map(function(cat, i) {
                return React.createElement('span', { key: cat.slug },
                  React.createElement(Link, { to: '/blog/category/' + cat.slug, className: "single-post__category-link" }, cat.name),
                  i < post.categories.length - 1 ? React.createElement('span', { className: "single-post__category-sep" }, "•") : null
                );
              })
            ),
            React.createElement('h1', { className: "single-post-sb__title" }, post.title),
            React.createElement(PostMeta, {
              author: post.author,
              authorSlug: post.authorSlug,
              date: post.date,
              commentCount: (post.comments && post.comments.length) || 0,
              postSlug: post.slug
            })
          ),
          React.createElement('div', { className: "single-post-sb__featured" },
            React.createElement('img', { src: post.featuredImage, alt: "", loading: "lazy" })
          ),
          React.createElement('div', { className: "single-post-sb__content" },
            React.createElement('div', { dangerouslySetInnerHTML: { __html: post.content } })
          ),
          post.tags.length > 0 ? React.createElement('div', { className: "single-post-sb__tags" },
            React.createElement(Tag, { size: 18, weight: "duotone", className: "single-post-sb__tags-icon", 'aria-hidden': "true" }),
            React.createElement('span', { className: "sr-only" }, "Tags:"),
            React.createElement('div', { className: "single-post-sb__tags-list" },
              post.tags.map(function(tag) {
                return React.createElement(Link, { key: tag.slug, to: '/blog/tag/' + tag.slug, className: "single-post__tag" }, tag.name);
              })
            )
          ) : null,
          React.createElement(PostNavigation, { prevPost: prevPost, nextPost: nextPost }),
          React.createElement(NewsletterCTA, { variant: "compact", className: "single-post-sb__newsletter" })
        ),
        React.createElement(BlogSidebar, { currentPostSlug: post.slug })
      ),
      React.createElement(Container, null,
        React.createElement(RelatedPosts, { currentPost: post, allPosts: posts, maxPosts: 3 })
      ),
      React.createElement('section', { id: "comments", className: "blog-comments", 'aria-labelledby': "comments-heading-sb" },
        React.createElement('h3', { id: "comments-heading-sb", className: "blog-comments__title" }, "Comments (" + ((post.comments && post.comments.length) || 0) + ")"),
        React.createElement('div', { className: "blog-comments__list" },
          post.comments && post.comments.length > 0 ? post.comments.map(function(comment) {
            return React.createElement('div', { key: comment.id, className: "blog-comments__item" },
              React.createElement('div', { className: "blog-comments__avatar", 'aria-hidden': "true" }, comment.author.charAt(0)),
              React.createElement('div', null,
                React.createElement('div', { className: "blog-comments__item-header" },
                  React.createElement('span', { className: "blog-comments__author" }, comment.author),
                  React.createElement('span', { className: "blog-comments__date" }, comment.date)
                ),
                React.createElement('p', { className: "blog-comments__text" }, comment.content)
              )
            );
          }) : React.createElement('p', { className: "blog-comments__empty" }, "No comments yet. Be the first to share your thoughts!")
        ),
        React.createElement('div', { className: "blog-comments__form-wrapper" },
          React.createElement('h4', { className: "blog-comments__form-title" }, "Leave a Reply"),
          React.createElement('form', { className: "blog-comments__form wp-block-form", onSubmit: function(e) { e.preventDefault(); } },
            React.createElement('div', { className: "blog-comments__form-row" },
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { htmlFor: "sb-comment-name", className: "wp-block-form-label" }, "Name"),
                React.createElement('input', { type: "text", id: "sb-comment-name", className: "wp-block-input funky-input-glow", required: true })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { htmlFor: "sb-comment-email", className: "wp-block-form-label" }, "Email"),
                React.createElement('input', { type: "email", id: "sb-comment-email", className: "wp-block-input funky-input-glow", required: true })
              )
            ),
            React.createElement('div', { className: "wp-block-form-item" },
              React.createElement('label', { htmlFor: "sb-comment-body", className: "wp-block-form-label" }, "Comment"),
              React.createElement('textarea', { id: "sb-comment-body", rows: 4, className: "wp-block-textarea funky-input-glow", required: true })
            ),
            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button blog-comments__form-submit funky-spring-hover" }, "Post Comment")
          )
        )
      )
    )
  );
}