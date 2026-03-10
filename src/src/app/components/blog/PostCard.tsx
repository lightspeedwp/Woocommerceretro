import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as PostsDataModule from '../../data/posts';
import * as CategoriesDataModule from '../../data/categories';

var Link = ReactRouterModule.Link;
var getMediaSource = PostsDataModule.getMediaSource;
var postCategories = CategoriesDataModule.postCategories;

/**
 * PostCard Block — Funky Glow Card Treatment
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 */
export function PostCard(props) {
  var post = props.post;
  var className = props.className || '';
  var isVideo = post.format === 'video';
  var isAudio = post.format === 'audio';

  var getFormatLabel = function() {
    if (isVideo) return 'Video';
    if (isAudio) return 'Podcast';
    if (post.categories && post.categories.length > 0) {
      var categoryId = post.categories[0];
      var category = postCategories.find(function(c) { return c.id === categoryId; });
      if (category) return category.name;
    }
    return 'Article';
  };

  var featuredMedia = post.featured_media;
  var featuredImageSrc = typeof featuredMedia === 'number'
    ? getMediaSource(featuredMedia)
    : featuredMedia;

  var ctaLabel = (function() {
    if (isVideo) return 'Watch Video';
    if (isAudio) return 'Listen Now';
    return 'Read Article';
  })();

  var articleClasses = ['blog-post-card', className].filter(Boolean).join(' ');

  var formatIcon = (function() {
    if (isVideo) {
      return React.createElement('svg', { width: '20', height: '20', fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': 'true' },
        React.createElement('path', { d: 'M8 5v14l11-7z' })
      );
    }
    if (isAudio) {
      return React.createElement('svg', { width: '20', height: '20', fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': 'true' },
        React.createElement('path', { d: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' })
      );
    }
    return null;
  })();

  var imageLink = featuredMedia ? React.createElement(Link, { to: post.link, className: 'blog-post-card__image-link' },
    React.createElement('img', {
      src: featuredImageSrc,
      alt: post.title.rendered,
      className: 'blog-post-card__image',
      loading: 'lazy'
    }),
    (isVideo || isAudio) ? React.createElement('div', { className: 'blog-post-card__format-overlay' },
      React.createElement('div', { className: 'blog-post-card__format-icon' }, formatIcon)
    ) : null
  ) : null;

  var metaElement = React.createElement('div', { className: 'blog-post-card__meta' },
    React.createElement('span', { className: 'blog-post-card__category' }, getFormatLabel()),
    React.createElement('span', { className: 'blog-post-card__meta-sep', 'aria-hidden': 'true' }, '\u2022'),
    React.createElement('span', { className: 'blog-post-card__date' }, new Date(post.date).toLocaleDateString())
  );

  var titleLink = React.createElement(Link, { to: post.link, className: 'blog-post-card__title-link' },
    React.createElement('h3', { className: 'blog-post-card__title' }, post.title.rendered)
  );

  var excerptElement = React.createElement('div', {
    className: 'blog-post-card__excerpt',
    dangerouslySetInnerHTML: { __html: post.excerpt.rendered }
  });

  var footerElement = React.createElement('div', { className: 'blog-post-card__footer' },
    React.createElement(Link, {
      to: post.link,
      className: 'blog-post-card__read-more',
      'aria-label': [ctaLabel, ': ', post.title.rendered].join('')
    }, ctaLabel + ' \u2192')
  );

  return React.createElement('article', { className: articleClasses },
    React.createElement('div', { className: 'blog-post-card__glow', 'aria-hidden': 'true' }),
    React.createElement('div', { className: 'blog-post-card__inner' },
      imageLink,
      React.createElement('div', { className: 'blog-post-card__content' },
        metaElement,
        titleLink,
        excerptElement,
        footerElement
      )
    )
  );
}