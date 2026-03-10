import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Chat as MessageSquare, ThumbsUp, ShareNetwork as Share2 } from '@phosphor-icons/react';

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as PostsDataModule from '../../data/posts';

var useParams = ReactRouterModule.useParams;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var getPostBySlug = PostsDataModule.getPostBySlug;

/**
 * TemplateSingleAside — Status Update / Aside Post Format
 *
 * Funky Phase 6 treatment: glassmorphism card with subtle glow,
 * neon cyan icon circle, gradient accent on hover interactions.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css` (Section 15)
 */
export function TemplateSingleAside() {
  var params = useParams();
  var slug = params.slug;
  var post = getPostBySlug(slug || '');

  if (!post) return React.createElement('div', { className: "single-post__not-found" }, "Post not found");

  return (
    React.createElement(Layout, null,
      React.createElement('article', { className: "single-aside" },
        React.createElement(Container, null,
          React.createElement('div', { className: "single-aside__card" },
            /* Decorative background icon */
            React.createElement('div', { className: "single-aside__bg-icon", "aria-hidden": "true" },
              React.createElement(MessageSquare, { size: 200, strokeWidth: 0.5 })
            ),

            React.createElement('div', { className: "single-aside__content" },
              React.createElement('div', { className: "single-aside__icon-circle" },
                React.createElement(MessageSquare, { size: 32 })
              ),

              React.createElement('div', { className: "single-aside__quote" },
                "\u201C", post.content.rendered.replace(/<[^>]*>/g, ''), "\u201D"
              ),

              React.createElement('div', { className: "single-aside__footer" },
                React.createElement('span', { className: "single-aside__date" },
                  new Date(post.date).toLocaleDateString() + ' at ',
                  new Date(post.date).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                ),
                React.createElement('div', { className: "single-aside__actions" },
                  React.createElement('button', { className: "single-aside__action-btn", "aria-label": "Like" },
                    React.createElement(ThumbsUp, { size: 20 })
                  ),
                  React.createElement('button', { className: "single-aside__action-btn", "aria-label": "Share" },
                    React.createElement(Share2, { size: 20 })
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
