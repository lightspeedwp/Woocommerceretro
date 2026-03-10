import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Tag, Calendar as CalendarIcon, User, Chat as MessageSquare } from '@phosphor-icons/react';

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as PostsDataModule from '../../data/posts';
import * as CategoriesDataModule from '../../data/categories';
import * as TagsDataModule from '../../data/tags';
import * as UsersDataModule from '../../data/users';

var useParams = ReactRouterModule.useParams;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var getPostBySlug = PostsDataModule.getPostBySlug;
var getMediaSource = PostsDataModule.getMediaSource;
var postCategories = CategoriesDataModule.postCategories;
var tags = TagsDataModule.tags;
var getUserById = UsersDataModule.getUserById;

/**
 * TemplateSingleStandard — Standard Blog Post Format
 *
 * Funky Phase 6 treatment: full-bleed hero with deep gradient overlay,
 * neon gradient category badges, glow tag pills on hover.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css` (Section 14)
 */
export function TemplateSingleStandard() {
  var params = useParams();
  var slug = params.slug;
  var post = getPostBySlug(slug || '');

  if (!post) return React.createElement('div', { className: "single-post__not-found" }, "Post not found");

  var author = getUserById(post.author);
  var authorName = author ? author.name : 'Unknown Author';

  return (
    React.createElement(Layout, null,
      React.createElement('article', null,
        /* Hero with featured image */
        post.featured_media > 0 && (
          React.createElement('div', { className: "single-standard__hero" },
            React.createElement('img', {
              src: getMediaSource(post.featured_media),
              alt: post.title.rendered,
              className: "single-standard__hero-img"
            }),
            React.createElement('div', { className: "single-standard__hero-overlay", "aria-hidden": "true" }),
            React.createElement(Container, null,
              React.createElement('div', { className: "single-standard__hero-content" },
                React.createElement('div', { className: "single-standard__categories" },
                  post.categories.map(function(catId) {
                    var category = postCategories.find(function(c) { return c.id === catId; });
                    return category ? (
                      React.createElement('span', { key: catId, className: "single-standard__category-badge" },
                        category.name
                      )
                    ) : null;
                  })
                ),
                React.createElement('h1', { className: "single-standard__hero-title" },
                  post.title.rendered
                ),
                React.createElement('div', { className: "single-standard__hero-meta" },
                  React.createElement('span', { className: "single-standard__hero-meta-item" },
                    React.createElement(User, { size: 16, "aria-hidden": "true" }),
                    " ", authorName
                  ),
                  React.createElement('span', { className: "single-standard__hero-meta-item" },
                    React.createElement(CalendarIcon, { size: 16, "aria-hidden": "true" }),
                    " ", new Date(post.date).toLocaleDateString()
                  )
                )
              )
            )
          )
        ),

        /* Content */
        React.createElement('section', { className: "single-standard__content" },
          React.createElement(Container, null,
            React.createElement('div', {
              className: "single-standard__body",
              dangerouslySetInnerHTML: { __html: post.content.rendered }
            }),

            /* Tags */
            post.tags.length > 0 && (
              React.createElement('div', { className: "single-standard__tags" },
                React.createElement('div', { className: "single-standard__tags-label" },
                  React.createElement(Tag, { size: 16, "aria-hidden": "true" }),
                  React.createElement('span', null, "Tags")
                ),
                React.createElement('div', { className: "single-standard__tags-list" },
                  post.tags.map(function(tagId) {
                    var tag = tags.find(function(t) { return t.id === tagId; });
                    return tag ? (
                      React.createElement('span', { key: tagId, className: "single-standard__tag" },
                        tag.name
                      )
                    ) : null;
                  })
                )
              )
            ),

            /* Discussion */
            React.createElement('div', { className: "single-standard__discussion" },
              React.createElement('div', { className: "single-standard__discussion-header" },
                React.createElement(MessageSquare, { size: 20 }),
                React.createElement('h3', null, "Discussion")
              ),
              React.createElement('div', { className: "single-standard__discussion-empty" },
                React.createElement('p', null, "Comments are closed for this post.")
              )
            )
          )
        )
      )
    )
  );
}
