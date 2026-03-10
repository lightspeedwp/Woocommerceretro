import React from 'react';
import * as LayoutModule from '../../parts/Layout';
import * as ContainerModule from '../../common/Container';
import * as PostsDataModule from '../../../data/posts';
// Type references (JSDoc only - no runtime import needed):
// WPPost
import { InstagramLogo as Instagram, Heart, ChatCircle as MessageCircle } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as ImageWithFallbackModule from '../../figma/ImageWithFallback';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var posts = PostsDataModule.posts;
var Link = ReactRouterModule.Link;
var ImageWithFallback = ImageWithFallbackModule.ImageWithFallback;

/**
 * ArchiveGallery — Instagram-Style Photo Grid
 *
 * Funky Phase 6 treatment: pink-cyan gradient hero with orbs + glassmorphism icon,
 * neon glow image tiles on hover, engagement stat overlay, gradient CTA.
 *
 * **CSS:** `/src/styles/sections/blog-format-archives-funky.css`
 */
export function ArchiveGallery() {
  var galleryPosts = (posts || []).filter(function(post) { return post.format === 'gallery'; });

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "archive-gallery" },
        /* Hero */
        React.createElement('section', { className: "archive-gallery__hero" },
          React.createElement('img', {
            src: "https://images.unsplash.com/photo-1767669673363-6bffdd320e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvJTIwZ2FsbGVyeSUyMGNvbG9yZnVsJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxNzkzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "",
            className: "archive-gallery__hero-bg"
          }),
          React.createElement('div', { className: "archive-gallery__hero-overlay", "aria-hidden": "true" }),
          React.createElement('div', { className: "archive-gallery__orb archive-gallery__orb--1 funky-animate-float", "aria-hidden": "true" }),
          React.createElement('div', { className: "archive-gallery__orb archive-gallery__orb--2 funky-animate-float", "aria-hidden": "true" }),
          React.createElement(Container, null,
            React.createElement('div', { className: "archive-gallery__hero-content" },
              React.createElement('div', { className: "archive-gallery__hero-icon" },
                React.createElement(Instagram, { size: 36, "aria-hidden": "true" })
              ),
              React.createElement('h1', { className: "archive-gallery__hero-title" }, "@lightspeedwpdev"),
              React.createElement('p', { className: "archive-gallery__hero-subtitle" },
                "Behind the scenes, office vibes, and design inspiration from our team."
              ),
              React.createElement('a', {
                href: "https://www.instagram.com/lightspeedwpdev",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "archive-gallery__hero-cta"
              }, "Follow Us")
            )
          )
        ),

        /* Gallery Grid */
        React.createElement('section', { className: "archive-gallery__grid-section" },
          React.createElement(Container, null,
            React.createElement('div', { className: "archive-gallery__grid" },
              galleryPosts.map(function(post) { return (
                React.createElement(Link, { key: post.id, to: post.link, className: "archive-gallery__item" },
                  React.createElement(ImageWithFallback, {
                    src: 'https://picsum.photos/seed/gallery-' + post.id + '/600/600',
                    alt: post.title.rendered,
                    className: "archive-gallery__item-img"
                  }),
                  React.createElement('div', { className: "archive-gallery__item-overlay", "aria-hidden": "true" },
                    React.createElement('span', { className: "archive-gallery__item-stat" },
                      React.createElement(Heart, { size: 20 }), " 124"
                    ),
                    React.createElement('span', { className: "archive-gallery__item-stat" },
                      React.createElement(MessageCircle, { size: 20 }), " 18"
                    )
                  )
                )
              ); }),

              /* Placeholder tiles to fill grid when few posts */
              [1, 2, 3, 4, 5, 6].map(function(i) { return (
                React.createElement('div', { key: 'placeholder-' + i, className: "archive-gallery__placeholder" },
                  React.createElement(Instagram, { size: 32, "aria-hidden": "true" })
                )
              ); })
            )
          )
        )
      )
    )
  );
}
