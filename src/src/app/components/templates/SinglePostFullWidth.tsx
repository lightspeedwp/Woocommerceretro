import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Tag, TwitterLogo, FacebookLogo, LinkedinLogo, LinkBreak, Clock } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var useParams = ReactRouterModule.useParams;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as PostMetaModule from '../patterns/PostMeta';
import * as PostNavigationModule from '../patterns/PostNavigation';
import * as RelatedPostsModule from '../patterns/RelatedPosts';
import * as NewsletterModule from '../patterns/NewsletterCTA';
import * as PostsDataModule from '../../data/posts';
import * as ClipboardModule from '../../utils/clipboard';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var PostMeta = PostMetaModule.PostMeta;
var PostNavigation = PostNavigationModule.PostNavigation;
var RelatedPosts = RelatedPostsModule.RelatedPosts;
var NewsletterCTA = NewsletterModule.NewsletterCTA;
var posts = PostsDataModule.posts;
var resolvedPosts = PostsDataModule.resolvedPosts;
var getResolvedPostBySlug = PostsDataModule.getResolvedPostBySlug;
var copyToClipboard = ClipboardModule.copyToClipboard;

/**
 * SinglePostFullWidth Template — Funky Redesign
 *
 * Full-width blog post template optimized for longform content.
 *
 * @template
 */

function ShareButton(props) {
  var href = props.href;
  var label = props.label;
  var icon = props.icon;
  var shareUrl = props.shareUrl;

  if (href) {
    return React.createElement('a', {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "single-post-fw__share-btn",
      'aria-label': label
    }, icon);
  }
  return React.createElement('button', {
    onClick: function() { copyToClipboard(shareUrl); },
    className: "single-post-fw__share-btn",
    'aria-label': label
  }, icon);
}

export function SinglePostFullWidth() {
  var params = useParams();
  var slug = params.slug;
  var postState = React.useState(null);
  var post = postState[0];
  var setPost = postState[1];
  var loadingState = React.useState(true);
  var loading = loadingState[0];
  var setLoading = loadingState[1];
  var progressState = React.useState(0);
  var readingProgress = progressState[0];
  var setReadingProgress = progressState[1];

  React.useEffect(function() {
    setLoading(true);
    window.scrollTo(0, 0);
    var foundPost = getResolvedPostBySlug(slug || '') || null;
    setTimeout(function() {
      setPost(foundPost);
      setLoading(false);
    }, 300);
  }, [slug]);

  React.useEffect(function() {
    function handleScroll() {
      var windowHeight = window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var scrollTop = window.scrollY;
      var trackLength = documentHeight - windowHeight;
      var progress = trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;
      setReadingProgress(Math.min(progress, 100));
    }
    window.addEventListener('scroll', handleScroll);
    return function() { window.removeEventListener('scroll', handleScroll); };
  }, []);

  if (loading) {
    return React.createElement(Layout, null,
      React.createElement('div', { className: "single-post-fw__progress" },
        React.createElement('div', { className: "single-post-fw__progress-bar", style: { '--reading-progress': '0%' } })
      ),
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

  var wordCount = post.content.split(/\s+/).length;
  var readingTime = Math.ceil(wordCount / 200);

  var shareUrl = window.location.origin + '/blog/' + post.slug;
  var shareTitle = post.title;

  var shareLinks = [
    { href: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareTitle) + '&url=' + encodeURIComponent(shareUrl), label: 'Share on Twitter', icon: React.createElement(TwitterLogo, { size: 18, weight: "fill" }) },
    { href: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl), label: 'Share on Facebook', icon: React.createElement(FacebookLogo, { size: 18, weight: "fill" }) },
    { href: 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(shareUrl) + '&title=' + encodeURIComponent(shareTitle), label: 'Share on LinkedIn', icon: React.createElement(LinkedinLogo, { size: 18, weight: "fill" }) },
    { href: undefined, label: 'Copy link', icon: React.createElement(LinkBreak, { size: 18, weight: "duotone" }) },
  ];

  return React.createElement(Layout, null,
    React.createElement('div', { className: "single-post-fw__progress" },
      React.createElement('div', { className: "single-post-fw__progress-bar", style: { '--reading-progress': readingProgress + '%' } })
    ),
    React.createElement('article', { className: "single-post-fw" },
      React.createElement('header', { className: "single-post-fw__header" },
        React.createElement('div', { className: "single-post-fw__categories" },
          post.categories.map(function(cat, i) {
            return React.createElement('span', { key: cat.slug },
              React.createElement(Link, { to: '/blog/category/' + cat.slug, className: "single-post-fw__category-link" }, cat.name),
              i < post.categories.length - 1 ? React.createElement('span', { className: "single-post__category-sep" }, "•") : null
            );
          })
        ),
        React.createElement('h1', { className: "single-post-fw__title" }, post.title),
        React.createElement('p', { className: "single-post-fw__excerpt" }, post.excerpt),
        React.createElement('div', { className: "single-post-fw__meta-row" },
          React.createElement(PostMeta, {
            author: post.author,
            authorSlug: post.authorSlug,
            date: post.date,
            commentCount: (post.comments && post.comments.length) || 0,
            postSlug: post.slug
          }),
          React.createElement('span', { className: "single-post-fw__reading-time" },
            React.createElement(Clock, { size: 16, weight: "duotone", 'aria-hidden': "true" }),
            React.createElement('small', null, readingTime + " min read")
          )
        ),
        React.createElement('div', { className: "single-post-fw__share-mobile" },
          React.createElement('small', { className: "single-post-fw__share-label" }, "Share:"),
          shareLinks.map(function(link) {
            return React.createElement(ShareButton, { key: link.label, href: link.href, label: link.label, icon: link.icon, shareUrl: shareUrl });
          })
        )
      ),
      React.createElement('div', { className: "single-post-fw__featured" },
        React.createElement('div', { className: "single-post-fw__featured-image" },
          React.createElement('img', { src: post.featuredImage, alt: "", loading: "lazy" })
        )
      ),
      React.createElement('div', { className: "single-post-fw__share-floating" },
        React.createElement('div', { className: "single-post-fw__share-group" },
          React.createElement('span', { className: "single-post-fw__share-label" }, "Share"),
          shareLinks.map(function(link) {
            return React.createElement(ShareButton, { key: link.label, href: link.href, label: link.label, icon: link.icon, shareUrl: shareUrl });
          })
        )
      ),
      React.createElement('div', { className: "single-post-fw__content" },
        React.createElement('div', { dangerouslySetInnerHTML: { __html: post.content } })
      ),
      post.tags.length > 0 ? React.createElement('div', { className: "single-post-fw__tags" },
        React.createElement(Tag, { size: 18, weight: "duotone", className: "single-post__tags-icon", 'aria-hidden': "true" }),
        React.createElement('span', { className: "sr-only" }, "Tagged:"),
        React.createElement('span', { className: "single-post-fw__tags-label" }, "Tagged:"),
        post.tags.map(function(tag) {
          return React.createElement(Link, { key: tag.slug, to: '/blog/tag/' + tag.slug, className: "single-post__tag" }, tag.name);
        })
      ) : null,
      React.createElement('div', { className: "single-post-fw__nav" },
        React.createElement(PostNavigation, { prevPost: prevPost, nextPost: nextPost })
      )
    ),
    React.createElement(Container, null,
      React.createElement(RelatedPosts, { currentPost: post, allPosts: posts, maxPosts: 3 })
    ),
    React.createElement(Container, null,
      React.createElement(NewsletterCTA, { variant: "compact", className: "single-post-fw__newsletter" })
    ),
    React.createElement('section', { id: "comments", className: "blog-comments", 'aria-labelledby': "comments-heading-fw" },
      React.createElement('h3', { id: "comments-heading-fw", className: "blog-comments__title" }, "Comments (" + ((post.comments && post.comments.length) || 0) + ")"),
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
              React.createElement('label', { htmlFor: "fw-comment-name", className: "wp-block-form-label" }, "Name"),
              React.createElement('input', { type: "text", id: "fw-comment-name", className: "wp-block-input funky-input-glow", required: true })
            ),
            React.createElement('div', { className: "wp-block-form-item" },
              React.createElement('label', { htmlFor: "fw-comment-email", className: "wp-block-form-label" }, "Email"),
              React.createElement('input', { type: "email", id: "fw-comment-email", className: "wp-block-input funky-input-glow", required: true })
            )
          ),
          React.createElement('div', { className: "wp-block-form-item" },
            React.createElement('label', { htmlFor: "fw-comment-body", className: "wp-block-form-label" }, "Comment"),
            React.createElement('textarea', { id: "fw-comment-body", rows: 4, className: "wp-block-textarea funky-input-glow", required: true })
          ),
          React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button blog-comments__form-submit funky-spring-hover" }, "Post Comment")
        )
      )
    )
  );
}