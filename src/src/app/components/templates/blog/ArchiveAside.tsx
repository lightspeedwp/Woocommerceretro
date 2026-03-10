import React from 'react';
import * as LayoutModule from '../../parts/Layout';
import * as ContainerModule from '../../common/Container';
import * as HeadingModule from '../../common/Heading';
import * as TypographyModule from '../../common/Typography';
import * as PostsDataModule from '../../../data/posts';
// Type references (JSDoc only - no runtime import needed):
// WPPost
import { Chat as MessageSquare, ShareNetwork as Share2, Heart, DotsThree as MoreHorizontal } from '@phosphor-icons/react';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Heading = HeadingModule.Heading;
var Typography = TypographyModule.Typography;
var posts = PostsDataModule.posts;

/**
 * ArchiveAside Template — Funky Redesign (Phase 6)
 *
 * Status update / micro-blog archive with Twitter-style card layout.
 *
 * Funky treatments (inherited from blog-format-archives-funky.css):
 *   Hero:        Gradient overlay with orbs
 *   Post cards:  Glass panels with neon hover glow
 *   Actions:     Neon icon hover states
 *
 * **CSS:** `/src/styles/sections/blog-format-archives-funky.css`
 * **Dark Mode:** ✅ Complete support
 *
 * @route /blog/format/aside
 * @template
 */
export function ArchiveAside() {
  var asidePosts = (posts || []).filter(function(post) { return post.format === 'aside'; });

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "wp-archive-aside__header" },
        React.createElement(Container, null,
           React.createElement(Heading, { level: "1", className: "wp-archive-aside__heading" }, "Updates"),
           React.createElement(Typography, { variant: "body", className: "wp-archive-aside__description" }, "Quick status updates and thoughts from the team.")
        )
      ),

      React.createElement(Container, { className: "wp-archive-aside__body" },
        React.createElement('div', { className: "wp-archive-aside__list" },
          asidePosts.map(function(post) {
            return (
            React.createElement('div', { key: post.id, className: "wp-archive-aside__post" },
              React.createElement('div', { className: "wp-archive-aside__avatar-wrapper" },
                React.createElement('div', { className: "wp-archive-aside__avatar" },
                  "LS"
                )
              ),
              React.createElement('div', { className: "wp-archive-aside__post-content" },
                React.createElement('div', { className: "wp-archive-aside__post-header" },
                  React.createElement('div', { className: "wp-archive-aside__post-meta" },
                    React.createElement('span', { className: "wp-archive-aside__author-name" }, "LightSpeed WP"),
                    React.createElement('span', { className: "wp-archive-aside__username" }, "@lightspeedwp"),
                    React.createElement('span', { className: "wp-archive-aside__dot" }, "·"),
                    React.createElement('span', { className: "wp-archive-aside__date" },
                      new Date(post.date).toLocaleDateString()
                    )
                  ),
                  React.createElement('button', { className: "wp-archive-aside__more-btn", "aria-label": "More options" },
                    React.createElement(MoreHorizontal, { size: 16 })
                  )
                ),
                
                React.createElement('div', { 
                  className: "wp-archive-aside__post-body", 
                  dangerouslySetInnerHTML: { __html: post.content.rendered } 
                }),
                
                React.createElement('div', { className: "wp-archive-aside__post-actions" },
                  React.createElement('button', { className: "wp-archive-aside__action-btn wp-archive-aside__action-btn--reply", "aria-label": "Reply" },
                    React.createElement(MessageSquare, { size: 18 }),
                    React.createElement('span', { className: "wp-archive-aside__action-count" }, "2")
                  ),
                  React.createElement('button', { className: "wp-archive-aside__action-btn wp-archive-aside__action-btn--share", "aria-label": "Share" },
                    React.createElement(Share2, { size: 18 }),
                    React.createElement('span', { className: "wp-archive-aside__action-count" }, "5")
                  ),
                  React.createElement('button', { className: "wp-archive-aside__action-btn wp-archive-aside__action-btn--like", "aria-label": "Like" },
                    React.createElement(Heart, { size: 18 }),
                    React.createElement('span', { className: "wp-archive-aside__action-count" }, "12")
                  )
                )
              )
            )
            );
          })
        )
      )
    )
  );
}
