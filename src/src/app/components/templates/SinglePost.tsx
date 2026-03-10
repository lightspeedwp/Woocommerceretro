import React from 'react';
import * as ReactRouterModule from 'react-router';

var useState = React.useState;
var useEffect = React.useEffect;
var Link = ReactRouterModule.Link;
var useParams = ReactRouterModule.useParams;

import * as LayoutModule from '../parts/Layout';
import * as PostMetaModule from '../patterns/PostMeta';
import * as PostNavigationModule from '../patterns/PostNavigation';
import * as NewsletterModule from '../patterns/NewsletterCTA';
import * as PostsDataModule from '../../data/posts';
import * as CategoriesDataModule from '../../data/categories';
import * as TagsDataModule from '../../data/tags';
import * as UsersDataModule from '../../data/users';

var Layout = LayoutModule.Layout;
var PostMeta = PostMetaModule.PostMeta;
var PostNavigation = PostNavigationModule.PostNavigation;
var NewsletterCTA = NewsletterModule.NewsletterCTA;
var posts = PostsDataModule.posts;
var getPostBySlug = PostsDataModule.getPostBySlug;
var getMediaSource = PostsDataModule.getMediaSource;
var postCategories = CategoriesDataModule.postCategories;
var tags = TagsDataModule.tags;
var USERS = UsersDataModule.USERS;
// Type references (JSDoc only - no runtime import needed):
// WPPost
import { Tag } from '@phosphor-icons/react';

/**
 * SinglePost Template — Funky Redesign
 *
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
function SinglePost() {
  var params = useParams();
  var slug = params.slug;
  
  var postState = useState(undefined);
  var post = postState[0];
  var setPost = postState[1];
  var loadState = useState(true);
  var loading = loadState[0];
  var setLoading = loadState[1];

  useEffect(function() {
    setLoading(true);
    window.scrollTo(0, 0);
    var foundPost = getPostBySlug(slug || '');
    var timer = setTimeout(function() {
      setPost(foundPost);
      setLoading(false);
    }, 300);
    return function() { clearTimeout(timer); };
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

  var currentIndex = -1;
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].slug === slug) {
      currentIndex = i;
      break;
    }
  }
  
  var prevPostData = currentIndex > 0 ? posts[currentIndex - 1] : null;
  var nextPostData = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  var prevPost = prevPostData ? { title: prevPostData.title.rendered, slug: prevPostData.slug } : null;
  var nextPost = nextPostData ? { title: nextPostData.title.rendered, slug: nextPostData.slug } : null;

  var resolvedCategories = [];
  for (var i = 0; i < post.categories.length; i++) {
    var catId = post.categories[i];
    var cat = null;
    for (var j = 0; j < postCategories.length; j++) {
      if (postCategories[j].id === catId) {
        cat = postCategories[j];
        break;
      }
    }
    if (cat) {
      resolvedCategories.push({ name: cat.name, slug: cat.slug });
    }
  }

  var resolvedTags = [];
  for (var i = 0; i < post.tags.length; i++) {
    var tagId = post.tags[i];
    var tag = null;
    for (var j = 0; j < tags.length; j++) {
      if (tags[j].id === tagId) {
        tag = tags[j];
        break;
      }
    }
    if (tag) {
      resolvedTags.push({ name: tag.name, slug: tag.slug });
    }
  }

  var author = null;
  for (var i = 0; i < USERS.length; i++) {
    if (USERS[i].id === post.author) {
      author = USERS[i];
      break;
    }
  }
  
  var authorName = author ? author.name : 'Unknown Author';
  var authorSlug = author ? author.slug : '';

  var hero = post.featured_media > 0 ? React.createElement('div', { className: "single-post__hero" },
    React.createElement('img', {
      src: getMediaSource(post.featured_media),
      alt: post.title.rendered,
      className: "single-post__hero-image"
    }),
    React.createElement('div', { className: "single-post__hero-overlay", "aria-hidden": "true" })
  ) : null;

  return React.createElement(Layout, null,
    React.createElement('article', { className: "single-post" },
      /* Featured Image Hero */
      hero,

      /* Post Header */
      React.createElement('header', { className: "single-post__header" },
        React.createElement('div', { className: "single-post__categories" },
          resolvedCategories.map(function(cat, i) {
            return React.createElement('span', { key: cat.slug },
              React.createElement(Link, { to: "/blog/category/" + cat.slug, className: "single-post__category-link" }, cat.name),
              i < resolvedCategories.length - 1 ? React.createElement('span', { className: "single-post__category-sep" }, " • ") : null
            );
          })
        ),

        React.createElement('h1', { 
          className: "single-post__title", 
          dangerouslySetInnerHTML: { __html: post.title.rendered } 
        }),

        React.createElement(PostMeta, {
          author: authorName,
          authorSlug: authorSlug,
          date: new Date(post.date).toLocaleDateString(),
          commentCount: 0,
          postSlug: post.slug
        })
      ),

      /* Content Area */
      React.createElement('div', { className: "single-post__content-area" },
        /* Post Content */
        React.createElement('div', { className: "single-post__content" },
          React.createElement('div', { dangerouslySetInnerHTML: { __html: post.content.rendered } })
        ),

        /* Tags */
        resolvedTags.length > 0 ? React.createElement('div', { className: "single-post__tags" },
          React.createElement(Tag, { size: 18, className: "single-post__tags-icon", "aria-hidden": "true" }),
          React.createElement('span', { className: "sr-only" }, "Tags:"),
          React.createElement('div', { className: "single-post__tags-list" },
            resolvedTags.map(function(tag) {
              return React.createElement(Link, { 
                key: tag.slug, 
                to: "/blog/tag/" + tag.slug, 
                className: "single-post__tag" 
              }, tag.name);
            })
          )
        ) : null,

        /* Newsletter CTA */
        React.createElement(NewsletterCTA, { variant: 'compact', className: 'single-post__newsletter' }),

        /* Post Navigation */
        React.createElement(PostNavigation, { prevPost: prevPost, nextPost: nextPost })
      ),

      /* Comments Section */
      React.createElement('section', { 
        id: "comments", 
        className: "blog-comments", 
        "aria-labelledby": "comments-heading" 
      },
        React.createElement('h3', { id: "comments-heading", className: "blog-comments__title" }, "Comments (0)"),

        React.createElement('div', { className: "blog-comments__list" },
          React.createElement('p', { className: "blog-comments__empty" }, "No comments yet. Be the first to share your thoughts!")
        ),

        React.createElement('div', { className: "blog-comments__form-wrapper" },
          React.createElement('h4', { className: "blog-comments__form-title" }, "Leave a Reply"),
          React.createElement('form', { 
            className: "blog-comments__form", 
            onSubmit: function(e) { e.preventDefault(); } 
          },
            React.createElement('div', { className: "blog-comments__form-row" },
              React.createElement('div', { className: "blog-comments__form-field" },
                React.createElement('label', { htmlFor: "comment-name", className: "blog-comments__form-label" }, "Name"),
                React.createElement('input', { type: "text", id: "comment-name", className: "blog-comments__form-input", required: true })
              ),
              React.createElement('div', { className: "blog-comments__form-field" },
                React.createElement('label', { htmlFor: "comment-email", className: "blog-comments__form-label" }, "Email"),
                React.createElement('input', { type: "email", id: "comment-email", className: "blog-comments__form-input", required: true })
              )
            ),
            React.createElement('div', { className: "blog-comments__form-field" },
              React.createElement('label', { htmlFor: "comment-body", className: "blog-comments__form-label" }, "Comment"),
              React.createElement('textarea', { id: "comment-body", rows: 4, className: "blog-comments__form-textarea", required: true })
            ),
            React.createElement('button', { type: "submit", className: "blog-comments__form-submit" }, "Post Comment")
          )
        )
      )
    )
  );
}

export { SinglePost };
export default SinglePost;