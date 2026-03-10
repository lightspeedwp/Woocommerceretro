import React from 'react';
import * as ReactRouterModule from 'react-router';
import { InstagramLogo as Instagram, GridFour as Grid, ArrowsOut as Maximize2, X } from '@phosphor-icons/react';

var useParams = ReactRouterModule.useParams;
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as PostsDataModule from '../../data/posts';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var getPostBySlug = PostsDataModule.getPostBySlug;
var getMediaSource = PostsDataModule.getMediaSource;

/**
 * TemplateSingleGallery — Gallery Post Format
 *
 * Funky Phase 6 treatment: neon pink glow on image hover, gradient icon circle,
 * gradient Instagram CTA, dark glassmorphism lightbox.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css` (Section 13)
 */
export function TemplateSingleGallery() {
  var params = useParams();
  var slug = params.slug;
  var post = getPostBySlug(slug || '');
  var _lb = React.useState(false);
  var lightboxOpen = _lb[0];
  var setLightboxOpen = _lb[1];
  var _ai = React.useState('');
  var activeImage = _ai[0];
  var setActiveImage = _ai[1];

  if (!post) return React.createElement('div', { className: "single-post__not-found" }, "Post not found");

  var galleryImages =
    (post.format_data && post.format_data.gallery_images && post.format_data.gallery_images.map(function(id) { return getMediaSource(id); })) || [];
  var instagramLink = post.format_data && post.format_data.instagram_link;

  function openLightbox(src) {
    setActiveImage(src);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  return (
    React.createElement(Layout, null,
      React.createElement('article', null,
        /* Header */
        React.createElement('section', { className: "single-gallery__header" },
          React.createElement(Container, null,
            React.createElement('div', { className: "single-gallery__icon" },
              React.createElement(Grid, { size: 24 })
            ),
            React.createElement('h1', null, post.title.rendered),
            React.createElement('div', { className: "single-gallery__meta" },
              React.createElement('span', null, new Date(post.date).toLocaleDateString()),
              React.createElement('span', { "aria-hidden": "true" }, "\u2022"),
              React.createElement('span', null, galleryImages.length + " photos")
            ),
            React.createElement('div', {
              className: "single-gallery__desc",
              dangerouslySetInnerHTML: { __html: post.content.rendered }
            })
          )
        ),

        /* Gallery grid */
        React.createElement('section', { className: "single-gallery__grid" },
          React.createElement(Container, null,
            React.createElement('div', { className: "single-gallery__grid-inner" },
              galleryImages.map(function(src, index) { return (
                React.createElement('div', {
                  key: index,
                  className: "single-gallery__item",
                  onClick: function() { openLightbox(src); },
                  role: "button",
                  tabIndex: 0,
                  "aria-label": 'View image ' + (index + 1),
                  onKeyDown: function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(src);
                    }
                  }
                },
                  React.createElement('img', { src: src, alt: 'Gallery image ' + (index + 1) }),
                  React.createElement('div', { className: "single-gallery__overlay", "aria-hidden": "true" },
                    React.createElement(Maximize2, { size: 32 })
                  )
                )
              ); })
            ),

            instagramLink && (
              React.createElement('div', { className: "single-gallery__instagram" },
                React.createElement('a', {
                  href: instagramLink,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "single-gallery__instagram-link"
                },
                  React.createElement(Instagram, { size: 20 }),
                  " View on Instagram"
                )
              )
            )
          )
        )
      ),

      /* Lightbox */
      lightboxOpen && (
        React.createElement('div', {
          className: "single-gallery__lightbox",
          onClick: closeLightbox,
          role: "dialog",
          "aria-label": "Image lightbox"
        },
          React.createElement('button', {
            className: "single-gallery__lightbox-close",
            onClick: closeLightbox,
            "aria-label": "Close lightbox"
          },
            React.createElement(X, { size: 32 })
          ),
          React.createElement('img', { src: activeImage, alt: "Full-size view" })
        )
      )
    )
  );
}
