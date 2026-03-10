import React from 'react';
import * as LayoutModule from '../../parts/Layout';
import * as ContainerModule from '../../common/Container';
import * as PostsDataModule from '../../../data/posts';
// Type references (JSDoc only - no runtime import needed):
// WPPost
import { Microphone as Mic, PlayCircle, Calendar, User } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as ImageWithFallbackModule from '../../figma/ImageWithFallback';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var posts = PostsDataModule.posts;
var Link = ReactRouterModule.Link;
var ImageWithFallback = ImageWithFallbackModule.ImageWithFallback;

/**
 * ArchiveAudio — Podcast Archive Grid
 *
 * Funky Phase 6 treatment: dark gradient hero with orbs + glassmorphism badge,
 * glow podcast cards with gradient episode badges, neon play overlay.
 *
 * **CSS:** `/src/styles/sections/blog-format-archives-funky.css`
 */
export function ArchiveAudio() {
  var audioPosts = (posts || []).filter(function(post) { return post.format === 'audio'; });

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "archive-audio" },
        /* Hero */
        React.createElement('section', { className: "archive-audio__hero" },
          React.createElement('img', {
            src: "https://images.unsplash.com/photo-1648522168698-537da0654bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvJTIwbWljcm9waG9uZSUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3NzE3NTY5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "",
            className: "archive-audio__hero-bg"
          }),
          React.createElement('div', { className: "archive-audio__hero-overlay", "aria-hidden": "true" }),
          React.createElement('div', { className: "archive-audio__orb archive-audio__orb--1 funky-animate-float", "aria-hidden": "true" }),
          React.createElement('div', { className: "archive-audio__orb archive-audio__orb--2 funky-animate-float", "aria-hidden": "true" }),
          React.createElement(Container, null,
            React.createElement('div', { className: "archive-audio__hero-content" },
              React.createElement('span', { className: "archive-audio__hero-badge" },
                React.createElement(Mic, { size: 14, "aria-hidden": "true" }),
                " Podcast"
              ),
              React.createElement('h1', { className: "archive-audio__hero-title" }, "Open Channels Podcast"),
              React.createElement('p', { className: "archive-audio__hero-subtitle" },
                "Conversations about high-performance WordPress, headless architecture, and the future of the web."
              )
            )
          )
        ),

        React.createElement('div', { className: "archive-audio__divider", "aria-hidden": "true" }),

        /* Grid */
        React.createElement('section', { className: "archive-audio__grid-section" },
          React.createElement(Container, null,
            React.createElement('div', { className: "archive-audio__grid" },
              audioPosts.map(function(post) { return (
                React.createElement('article', { key: post.id, className: "archive-audio__card" },
                  React.createElement('div', { className: "archive-audio__card-glow", "aria-hidden": "true" }),
                  React.createElement('div', { className: "archive-audio__card-inner" },
                    React.createElement('div', { className: "archive-audio__thumbnail" },
                      React.createElement(ImageWithFallback, {
                        src: 'https://picsum.photos/seed/audio-' + post.id + '/600/380',
                        alt: post.title.rendered,
                        className: "archive-audio__thumbnail-img"
                      }),
                      React.createElement('div', { className: "archive-audio__thumbnail-overlay", "aria-hidden": "true" }),
                      React.createElement('div', { className: "archive-audio__thumbnail-meta" },
                        React.createElement('span', { className: "archive-audio__episode-badge" },
                          "EP ", (post.format_data && post.format_data.podcast_episode_number) || '#'
                        ),
                        React.createElement('span', { className: "archive-audio__episode-date" },
                          React.createElement(Calendar, { size: 12, "aria-hidden": "true" }),
                          new Date(post.date).toLocaleDateString()
                        )
                      ),
                      React.createElement('div', { className: "archive-audio__play-overlay", "aria-hidden": "true" },
                        React.createElement('div', { className: "archive-audio__play-circle" },
                          React.createElement(PlayCircle, { size: 36 })
                        )
                      )
                    ),

                    React.createElement('div', { className: "archive-audio__card-body" },
                      React.createElement(Link, { to: post.link },
                        React.createElement('h3', { className: "archive-audio__card-title" },
                          post.title.rendered
                        )
                      ),
                      React.createElement('p', {
                        className: "archive-audio__card-excerpt",
                        dangerouslySetInnerHTML: { __html: post.excerpt.rendered }
                      }),
                      React.createElement('div', { className: "archive-audio__card-footer" },
                        React.createElement('span', { className: "archive-audio__card-author" },
                          React.createElement(User, { size: 14, "aria-hidden": "true" }),
                          " Ash Shaw"
                        ),
                        React.createElement(Link, { to: post.link, className: "archive-audio__card-link" },
                          "Listen Now \u2192"
                        )
                      )
                    )
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
