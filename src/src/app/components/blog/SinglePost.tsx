import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Calendar, User, Tag, ChatCircle } from '@phosphor-icons/react';

var useState = React.useState;
var useEffect = React.useEffect;
var useParams = ReactRouterModule.useParams;
var Link = ReactRouterModule.Link;

import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as BlogDataModule from '../../data/blogData';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as LayoutModule from '../parts/Layout';

var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var BLOG_POSTS = BlogDataModule.BLOG_POSTS;
var Button = ButtonsModule.Button;
var Layout = LayoutModule.Layout;

export function SinglePost() {
  var params = useParams();
  var slug = params.slug;
  var postState = useState(null);
  var post = postState[0];
  var setPost = postState[1];
  var loadState = useState(true);
  var loading = loadState[0];
  var setLoading = loadState[1];

  useEffect(function() {
    setLoading(true);
    window.scrollTo(0, 0);
    var foundPost = BLOG_POSTS.find(function(p) { return p.slug === slug; });
    
    var timer = setTimeout(function() {
      setPost(foundPost || null);
      setLoading(false);
    }, 300);
    
    return function() {
      clearTimeout(timer);
    };
  }, [slug]);

  if (loading) {
    return React.createElement(Layout, null,
      React.createElement(Container, { className: "blog-single blog-single--narrow" },
        React.createElement('div', { className: "blog-single__skeleton" },
          React.createElement('div', { className: "blog-single__skeleton-bar blog-single__skeleton-bar--title" }),
          React.createElement('div', { className: "blog-skeleton__bar blog-skeleton__bar--subtitle" }),
          React.createElement('div', { className: "blog-single__skeleton-bar blog-single__skeleton-bar--hero" }),
          React.createElement('div', { className: "blog-single__skeleton-lines" },
            React.createElement('div', { className: "blog-single__skeleton-bar blog-single__skeleton-bar--line" }),
            React.createElement('div', { className: "blog-single__skeleton-bar blog-single__skeleton-bar--line" }),
            React.createElement('div', { className: "blog-single__skeleton-bar blog-single__skeleton-bar--line-short" })
          )
        )
      )
    );
  }

  if (!post) {
    return React.createElement(Layout, null,
      React.createElement(Container, { className: "blog-single__not-found" },
        React.createElement(Typography, { variant: "h2", className: "wp-mb-40" }, "Post not found"),
        React.createElement('p', { className: "blog-single__not-found-text" }, "The article you are looking for does not exist."),
        React.createElement(Link, { to: "/blog" },
          React.createElement(Button, null, "Return to Blog")
        )
      )
    );
  }

  return React.createElement(Layout, null,
    React.createElement('article', null,
      React.createElement(Container, { className: "blog-single blog-single--wide" },
        React.createElement('header', { className: "blog-single__header" },
          React.createElement('div', { className: "blog-single__categories" },
            post.categories.map(function(cat, i) {
              return React.createElement('span', { key: cat.slug },
                React.createElement(Link, { to: '/blog/category/' + cat.slug, className: "blog-single__category-link" }, cat.name),
                i < post.categories.length - 1 ? React.createElement('span', { className: "blog-single__category-sep" }, "•") : null
              );
            })
          ),
          React.createElement(Typography, { variant: "h1", className: "wp-mb-50" }, post.title),
          React.createElement('div', { className: "blog-single__meta" },
            React.createElement('span', { className: "blog-single__meta-item" },
              React.createElement(User, { size: 16, weight: "duotone" }), " ", post.author
            ),
            React.createElement('span', { className: "blog-single__meta-item" },
              React.createElement(Calendar, { size: 16, weight: "duotone" }), " ", post.date
            ),
            React.createElement('span', { className: "blog-single__meta-item" },
              React.createElement(ChatCircle, { size: 16, weight: "duotone" }), " ", post.comments ? post.comments.length : 0, " Comments"
            )
          )
        ),
        React.createElement('div', { className: "blog-single__featured" },
          React.createElement('img', { src: post.featuredImage, alt: "", className: "blog-single__featured-img" })
        ),
        React.createElement('div', { className: "blog-single__content" },
          React.createElement('div', { dangerouslySetInnerHTML: { __html: post.content } })
        ),
        post.tags.length > 0 ? React.createElement('div', { className: "blog-single__tags" },
          React.createElement(Tag, { size: 18, weight: "duotone", className: "blog-single__tags-icon" }),
          React.createElement('span', { className: "sr-only" }, "Tags:"),
          React.createElement('div', { className: "blog-single__tag-list" },
            post.tags.map(function(tag) {
              return React.createElement(Link, { key: tag.slug, to: '/blog/tag/' + tag.slug, className: "blog-single__tag" },
                React.createElement('small', null, tag.name)
              );
            })
          )
        ) : null,
        React.createElement('section', { className: "blog-single__comments", 'aria-labelledby': "comments-heading" },
          React.createElement(Typography, { variant: "h3", id: "comments-heading", className: "wp-mb-50" },
            "Comments (", post.comments ? post.comments.length : 0, ")"
          ),
          React.createElement('div', { className: "blog-single__comments-list" },
            post.comments && post.comments.length > 0 ? post.comments.map(function(comment) {
              return React.createElement('div', { key: comment.id, className: "blog-single__comment" },
                React.createElement('div', { className: "blog-single__comment-avatar" }, comment.author.charAt(0)),
                React.createElement('div', { className: "blog-single__comment-body" },
                  React.createElement('div', { className: "blog-single__comment-header" },
                    React.createElement('h4', { className: "blog-single__comment-author" }, comment.author),
                    React.createElement('span', { className: "blog-single__comment-date" }, comment.date)
                  ),
                  React.createElement('p', { className: "blog-single__comment-text" }, comment.content)
                )
              );
            }) : React.createElement('p', { className: "blog-single__no-comments" }, "No comments yet. Be the first to share your thoughts!")
          ),
          React.createElement('div', { className: "blog-single__comment-form-wrapper" },
            React.createElement(Typography, { variant: "h4", className: "wp-mb-40" }, "Leave a Reply"),
            React.createElement('form', { className: "blog-single__comment-form wp-block-form", onSubmit: function(e) { e.preventDefault(); } },
              React.createElement('div', { className: "blog-single__comment-form-grid" },
                React.createElement('div', { className: "wp-block-form-item" },
                  React.createElement('label', { htmlFor: "comment-name", className: "wp-block-form-label" }, "Name"),
                  React.createElement('input', { type: "text", id: "comment-name", className: "wp-block-input funky-input-glow", required: true })
                ),
                React.createElement('div', { className: "wp-block-form-item" },
                  React.createElement('label', { htmlFor: "comment-email", className: "wp-block-form-label" }, "Email"),
                  React.createElement('input', { type: "email", id: "comment-email", className: "wp-block-input funky-input-glow", required: true })
                )
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { htmlFor: "comment-body", className: "wp-block-form-label" }, "Comment"),
                React.createElement('textarea', { id: "comment-body", rows: 4, className: "wp-block-textarea funky-input-glow", required: true })
              ),
              React.createElement(Button, { type: "submit" }, "Post Comment")
            )
          )
        )
      )
    )
  );
}
export default SinglePost;