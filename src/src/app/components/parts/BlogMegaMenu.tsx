/**
 * BlogMegaMenu - Funky Redesign
 * 3-column: formats | topics | latest posts
 * Glassmorphism, neon accents, Phosphor icons.
 */
import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Article, Microphone, VideoCamera, Images, ChatDots, TagSimple, ArrowRight } from '@phosphor-icons/react';
import * as PostsData from '../../data/posts';
import { MegaMenuWrapper } from './MegaMenuWrapper';

var Link = ReactRouterModule.Link;
var posts = PostsData.posts;
var mediaItems = PostsData.mediaItems;

var formatLinks = [
  { title: 'All Posts', href: '/blog', Icon: Article, desc: 'Browse everything' },
  { title: 'Podcasts', href: '/blog/format/audio', Icon: Microphone, desc: 'Audio conversations', badge: 'new' },
  { title: 'Videos', href: '/blog/format/video', Icon: VideoCamera, desc: 'Watch tutorials' },
  { title: 'Gallery', href: '/blog/format/gallery', Icon: Images, desc: 'Visual stories' },
  { title: 'Updates', href: '/blog/format/aside', Icon: ChatDots, desc: 'Quick status updates' }
];

var topicLinks = [
  { title: 'Development', href: '/blog/category/development', Icon: TagSimple },
  { title: 'Design', href: '/blog/category/design', Icon: TagSimple },
  { title: 'News', href: '/blog/category/news', Icon: TagSimple }
];

function renderLink(link) {
  var hasDesc = !!link.desc;
  return React.createElement(Link, {
    key: link.title,
    to: link.href,
    className: 'funky-mega__link'
  }, [
    React.createElement('span', { key: 'ic', className: 'funky-mega__link-icon' },
      React.createElement(link.Icon, { size: 16, weight: 'duotone' })
    ),
    hasDesc
      ? React.createElement('span', { key: 'tx', className: 'funky-mega__link-text' }, [
          React.createElement('span', { key: 'lb', className: 'funky-mega__link-label' }, link.title),
          React.createElement('span', { key: 'ds', className: 'funky-mega__link-desc' }, link.desc)
        ])
      : React.createElement('span', { key: 'lb', className: 'funky-mega__link-label' }, link.title),
    link.badge ? React.createElement('span', {
      key: 'b',
      className: 'funky-mega__badge funky-mega__badge--' + link.badge
    }, link.badge === 'new' ? 'New' : link.badge) : null
  ]);
}

export function BlogMegaMenu() {
  var recentPosts = posts.slice(0, 3);

  function renderContent(closeMenu) {
    var formatsColumn = React.createElement('div', {
      className: 'funky-mega__column funky-mega__column--bordered'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Formats'),
      React.createElement('div', { key: 'list' }, formatLinks.map(renderLink))
    ]);

    var topicsColumn = React.createElement('div', {
      className: 'funky-mega__column funky-mega__column--bordered'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Topics'),
      React.createElement('div', { key: 'list' }, topicLinks.map(renderLink))
    ]);

    var postsColumn = React.createElement('div', {
      className: 'funky-mega__column'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Latest'),
      React.createElement('div', { key: 'posts', style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' } },
        recentPosts.map(function(post) {
          var media = post.featured_media ? mediaItems[post.featured_media] : null;
          var imageUrl = media ? media.source_url : '';

          var imgEl = imageUrl
            ? React.createElement('img', { src: imageUrl, alt: post.title.rendered, loading: 'lazy' })
            : React.createElement('div', {
                style: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }
              }, React.createElement(Article, { size: 24, weight: 'duotone' }));

          return React.createElement(Link, {
            key: post.id,
            to: post.link,
            className: 'funky-mega__post'
          }, [
            React.createElement('div', { key: 'img', className: 'funky-mega__post-img-wrap' }, imgEl),
            React.createElement('span', { key: 'cat', className: 'funky-mega__post-cat' }, post.format || 'article'),
            React.createElement('h5', { key: 'title', className: 'funky-mega__post-title' },
              post.title.rendered || 'Untitled Post'
            )
          ]);
        })
      )
    ]);

    var footer = React.createElement('div', { className: 'funky-mega__footer' },
      React.createElement(Link, {
        to: '/blog',
        className: 'funky-mega__footer-link',
        onClick: closeMenu
      }, [
        React.createElement('span', { key: 'l' }, 'View all posts'),
        React.createElement(ArrowRight, { key: 'a', size: 14, weight: 'bold' })
      ])
    );

    return React.createElement('div', {
      className: 'wp-mega-menu__content'
    }, [
      React.createElement('div', { key: 'orb1', className: 'funky-mega__orb funky-mega__orb--cyan', style: { top: '-70px', right: '-50px' } }),
      React.createElement('div', { key: 'orb2', className: 'funky-mega__orb funky-mega__orb--pink', style: { bottom: '-60px', left: '-40px' } }),
      React.createElement('div', { key: 'grid', className: 'funky-mega__inner funky-mega__inner--blog' }, [
        React.cloneElement(formatsColumn, { key: 'formats' }),
        React.cloneElement(topicsColumn, { key: 'topics' }),
        React.cloneElement(postsColumn, { key: 'posts' })
      ]),
      React.cloneElement(footer, { key: 'footer' })
    ]);
  }

  return React.createElement(MegaMenuWrapper, {
    triggerLabel: 'Blog',
    triggerHref: '/blog',
    renderContent: renderContent
  });
}

BlogMegaMenu.displayName = 'BlogMegaMenu';