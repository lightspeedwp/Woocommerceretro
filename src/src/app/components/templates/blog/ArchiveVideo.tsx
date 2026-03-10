import React from 'react';
import * as LayoutModule from '../../parts/Layout';
import * as ContainerModule from '../../common/Container';
import * as PostsDataModule from '../../../data/posts';
// Type references (JSDoc only - no runtime import needed):
// WPPost
import { Play, Clock, YoutubeLogo as Youtube } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as ImageWithFallbackModule from '../../figma/ImageWithFallback';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var posts = PostsDataModule.posts;
var Link = ReactRouterModule.Link;
var ImageWithFallback = ImageWithFallbackModule.ImageWithFallback;

/**
 * ArchiveVideo — Video Archive Grid (YouTube-Style)
 *
 * Funky Phase 6 treatment: cinema gradient hero with orbs + gradient CTA,
 * glow video cards with neon play overlay, duration badge, spring hover.
 *
 * **CSS:** `/src/styles/sections/blog-format-archives-funky.css`
 */
export function ArchiveVideo() {
  var videoPosts = (posts || []).filter(function(post) { return post.format === 'video'; });

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "archive-video" },
        /* Hero */
        React.createElement('section', { className: "archive-video__hero" },
          React.createElement('img', {
            src: "https://images.unsplash.com/photo-1705107958681-db6d591b57cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmElMjBjaW5lbWF0aWMlMjBkYXJrfGVufDF8fHx8MTc3MTc5MzcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "",
            className: "archive-video__hero-bg"
          }),
          React.createElement('div', { className: "archive-video__hero-overlay", "aria-hidden": "true" }),
          React.createElement('div', { className: "archive-video__orb archive-video__orb--1 funky-animate-float", "aria-hidden": "true" }),
          React.createElement('div', { className: "archive-video__orb archive-video__orb--2 funky-animate-float", "aria-hidden": "true" }),
          React.createElement(Container, null,
            React.createElement('div', { className: "archive-video__hero-content" },
              React.createElement('div', { className: "archive-video__hero-text" },
                React.createElement('div', { className: "archive-video__hero-badge" },
                  React.createElement(Youtube, { className: "archive-video__hero-icon", size: 32, "aria-hidden": "true" }),
                  React.createElement('h1', { className: "archive-video__hero-title" }, "LightSpeed WP Channel")
                ),
                React.createElement('p', { className: "archive-video__hero-subtitle" },
                  "Tutorials, guides, and deep dives into modern WordPress development."
                )
              ),
              React.createElement('a', {
                href: "https://www.youtube.com/@lightspeedwp/videos",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "archive-video__hero-cta"
              }, "Subscribe on YouTube")
            )
          )
        ),

        React.createElement('div', { className: "archive-video__divider", "aria-hidden": "true" }),

        /* Grid */
        React.createElement('section', { className: "archive-video__grid-section" },
          React.createElement(Container, null,
            React.createElement('div', { className: "archive-video__grid" },
              videoPosts.map(function(post) { return (
                React.createElement('article', { key: post.id, className: "archive-video__card" },
                  React.createElement(Link, { to: post.link, className: "archive-video__card-link" },
                    React.createElement('div', { className: "archive-video__thumbnail" },
                      React.createElement(ImageWithFallback, {
                        src: 'https://picsum.photos/seed/video-' + post.id + '/640/360',
                        alt: post.title.rendered,
                        className: "archive-video__thumbnail-img"
                      }),
                      React.createElement('div', { className: "archive-video__play-icon", "aria-hidden": "true" },
                        React.createElement(Play, { size: 48 })
                      ),
                      React.createElement('span', { className: "archive-video__duration" },
                        React.createElement(Clock, { size: 10, "aria-hidden": "true" }),
                        " ", (post.format_data && post.format_data.video_duration) || '10:00'
                      )
                    )
                  ),

                  React.createElement('div', { className: "archive-video__card-info" },
                    React.createElement(Link, { to: post.link },
                      React.createElement('h3', { className: "archive-video__card-title" },
                        post.title.rendered
                      )
                    ),
                    React.createElement('div', { className: "archive-video__card-meta" },
                      React.createElement('span', null, new Date(post.date).toLocaleDateString()),
                      React.createElement('span', { className: "archive-video__card-meta-dot", "aria-hidden": "true" }, "\u2022"),
                      React.createElement('span', null, post.categories.length + ' ' + (post.categories.length === 1 ? 'Category' : 'Categories'))
                    ),
                    React.createElement('p', {
                      className: "archive-video__card-excerpt",
                      dangerouslySetInnerHTML: { __html: post.excerpt.rendered }
                    })
                  )
                )
              ); })
            )
          )
        )
      )
    )
  );
}
