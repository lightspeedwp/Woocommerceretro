import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ShareNetwork as Share2, Calendar, User } from '@phosphor-icons/react';

var useParams = ReactRouterModule.useParams;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as PostsDataModule from '../../data/posts';
import * as UsersDataModule from '../../data/users';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var getPostBySlug = PostsDataModule.getPostBySlug;
var getUserById = UsersDataModule.getUserById;

/**
 * TemplateSingleVideo — Video Post Format
 *
 * Funky Phase 6 treatment: dark cinema-style hero with embedded video,
 * gradient accent details, neon subscribe button.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css`
 */
export function TemplateSingleVideo() {
  var params = useParams();
  var slug = params.slug;
  var post = getPostBySlug(slug || '');

  if (!post) return React.createElement('div', { className: "single-post__not-found" }, "Post not found");

  var author = getUserById(post.author);
  var authorName = (author && author.name) || 'Unknown Author';
  var videoUrl = post.format_data && post.format_data.video_url;

  return (
    React.createElement(Layout, null,
      React.createElement('article', { className: "single-video" },
        /* Video Player Header */
        React.createElement('section', { className: "single-video__hero" },
          React.createElement(Container, null,
            React.createElement('div', { className: "single-video__wrapper" },
              /* Video Container */
              React.createElement('div', { className: "single-video__player" },
                videoUrl
                  ? React.createElement('iframe', {
                      src: videoUrl,
                      className: "single-video__iframe",
                      title: post.title.rendered,
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: true
                    })
                  : React.createElement('div', { className: "single-video__placeholder" },
                      React.createElement('span', null, "Video Placeholder")
                    )
              ),

              /* Info Row */
              React.createElement('div', { className: "single-video__info" },
                React.createElement('div', { className: "single-video__info-left" },
                  React.createElement('h1', { className: "single-video__title" }, post.title.rendered),
                  React.createElement('div', { className: "single-video__meta" },
                    React.createElement('span', { className: "single-video__meta-item" },
                      React.createElement(Calendar, { size: 16, "aria-hidden": "true" }),
                      " ", new Date(post.date).toLocaleDateString()
                    ),
                    React.createElement('span', { className: "single-video__meta-item" },
                      React.createElement(User, { size: 16, "aria-hidden": "true" }),
                      " ", authorName
                    )
                  )
                ),

                React.createElement('div', { className: "single-video__actions" },
                  React.createElement('button', { className: "single-video__subscribe-btn" }, "Subscribe"),
                  React.createElement('button', { className: "single-video__share-btn" },
                    React.createElement(Share2, { size: 18, "aria-hidden": "true" }),
                    " Share"
                  )
                )
              )
            )
          )
        ),

        /* Content */
        React.createElement('section', { className: "single-video__content" },
          React.createElement(Container, null,
            React.createElement('div', {
              className: "single-video__body",
              dangerouslySetInnerHTML: { __html: post.content.rendered }
            })
          )
        )
      )
    )
  );
}
