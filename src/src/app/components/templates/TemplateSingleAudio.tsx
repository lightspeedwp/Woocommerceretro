import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Play, SkipBack, SkipForward, SpeakerHigh as Volume2, ShareNetwork as Share2, DownloadSimple as Download } from '@phosphor-icons/react';

var useParams = ReactRouterModule.useParams;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as PostsDataModule from '../../data/posts';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var getPostBySlug = PostsDataModule.getPostBySlug;
var getMediaSource = PostsDataModule.getMediaSource;

/**
 * TemplateSingleAudio — Podcast / Audio Post Format
 *
 * Funky Phase 6 treatment: dark gradient hero with glassmorphism player,
 * neon accent controls, gradient progress bar.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css`
 */
export function TemplateSingleAudio() {
  var params = useParams();
  var slug = params.slug;
  var post = getPostBySlug(slug || '');

  if (!post) return React.createElement('div', { className: "single-post__not-found" }, "Post not found");

  var episodeNumber = (post.format_data && post.format_data.podcast_episode_number) || 1;
  var seasonNumber = (post.format_data && post.format_data.podcast_season) || 1;

  return (
    React.createElement(Layout, null,
      React.createElement('article', { className: "single-audio" },
        /* Audio Player Hero */
        React.createElement('section', { className: "single-audio__hero" },
          React.createElement('div', { className: "single-audio__hero-bg", "aria-hidden": "true" }),
          React.createElement(Container, null,
            React.createElement('div', { className: "single-audio__player" },
              /* Cover Art */
              React.createElement('div', { className: "single-audio__cover" },
                React.createElement('img', {
                  src: getMediaSource(post.featured_media),
                  alt: post.title.rendered,
                  className: "single-audio__cover-img"
                })
              ),

              /* Player Controls */
              React.createElement('div', { className: "single-audio__controls" },
                React.createElement('div', { className: "single-audio__meta" },
                  React.createElement('span', { className: "single-audio__episode-label" },
                    "Season " + seasonNumber + ", Episode " + episodeNumber
                  ),
                  React.createElement('h1', { className: "single-audio__title" }, post.title.rendered),
                  React.createElement('p', { className: "single-audio__excerpt" },
                    post.excerpt.rendered.replace(/<[^>]*>/g, '')
                  )
                ),

                /* Progress Bar */
                React.createElement('div', { className: "single-audio__progress" },
                  React.createElement('div', { className: "single-audio__progress-track" },
                    React.createElement('div', { className: "single-audio__progress-fill" })
                  ),
                  React.createElement('div', { className: "single-audio__progress-times" },
                    React.createElement('span', null, "12:45"),
                    React.createElement('span', null, "45:30")
                  )
                ),

                /* Buttons */
                React.createElement('div', { className: "single-audio__buttons" },
                  React.createElement('div', { className: "single-audio__transport" },
                    React.createElement('button', { className: "single-audio__transport-btn", "aria-label": "Skip back" },
                      React.createElement(SkipBack, { size: 24 })
                    ),
                    React.createElement('button', { className: "single-audio__play-btn", "aria-label": "Play" },
                      React.createElement(Play, { size: 24 })
                    ),
                    React.createElement('button', { className: "single-audio__transport-btn", "aria-label": "Skip forward" },
                      React.createElement(SkipForward, { size: 24 })
                    )
                  ),

                  React.createElement('div', { className: "single-audio__actions" },
                    React.createElement('button', { className: "single-audio__transport-btn", "aria-label": "Volume" },
                      React.createElement(Volume2, { size: 20 })
                    ),
                    React.createElement('button', { className: "single-audio__subscribe-btn" }, "Subscribe")
                  )
                )
              )
            )
          )
        ),

        /* Show Notes */
        React.createElement('section', { className: "single-audio__content" },
          React.createElement(Container, null,
            React.createElement('div', { className: "single-audio__toolbar" },
              React.createElement('div', { className: "single-audio__toolbar-left" },
                React.createElement('button', { className: "single-audio__action-btn" },
                  React.createElement(Share2, { size: 16, "aria-hidden": "true" }),
                  " Share"
                ),
                React.createElement('button', { className: "single-audio__action-btn" },
                  React.createElement(Download, { size: 16, "aria-hidden": "true" }),
                  " Download MP3"
                )
              ),
              React.createElement('span', { className: "single-audio__date" },
                "Published " + new Date(post.date).toLocaleDateString()
              )
            ),

            React.createElement('div', { className: "single-audio__body" },
              React.createElement('h3', null, "Show Notes"),
              React.createElement('div', { dangerouslySetInnerHTML: { __html: post.content.rendered } })
            )
          )
        )
      )
    )
  );
}
