import React from 'react';
import { InstagramLogo as Instagram, Heart, ChatCircle as MessageCircle } from '@phosphor-icons/react';
import * as InstagramService from '../../services/instagram';
import * as ImageFallbackModule from '../figma/ImageWithFallback';
import * as ContainerModule from '../common/Container';

var useEffect = React.useEffect;
var useState = React.useState;
var fetchInstagramFeed = InstagramService.fetchInstagramFeed;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
var Container = ContainerModule.Container;

// InstagramFeedProps structure
// - heading?: string
// - description?: string
// - username?: string
// - limit?: number
// - columns?: 3 | 4 | 5 | 6
// - showFollowButton?: boolean
// - className?: string

/**
 * Instagram Feed Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function InstagramFeed(props) {
  var heading = props.heading !== undefined ? props.heading : 'Follow Us on Instagram';
  var description = props.description;
  var username = props.username !== undefined ? props.username : 'ourshop';
  var limit = props.limit !== undefined ? props.limit : 12;
  var columns = props.columns !== undefined ? props.columns : 6;
  var showFollowButton = props.showFollowButton !== undefined ? props.showFollowButton : true;
  var className = props.className || '';

  var _p = useState([]);
  var posts = _p[0];
  var setPosts = _p[1];
  var _l = useState(true);
  var loading = _l[0];
  var setLoading = _l[1];

  useEffect(function() {
    function loadFeed() {
      setLoading(true);
      fetchInstagramFeed(username, limit)
        .then(function(data) {
          setPosts(data);
          setLoading(false);
        })
        .catch(function(error) {
          console.error('Failed to load Instagram feed:', error);
          setLoading(false);
        });
    }
    loadFeed();
  }, [username, limit]);

  if (loading) {
    return React.createElement('div', { className: 'wp-instagram-feed wp-instagram-feed--loading ' + className },
      React.createElement('p', null, 'Loading Instagram feed...')
    );
  }

  if (posts.length === 0) {
    return null;
  }

  var gridClass = 'wp-instagram-grid wp-instagram-grid--cols-' + columns;

  var header = (heading || description || showFollowButton) ? React.createElement('div', { key: 'header', className: 'wp-instagram-header' }, [
    heading ? React.createElement(Heading, { key: 'h', level: 2, className: 'wp-instagram-title' }, heading) : null,
    description ? React.createElement('p', { key: 'd', className: 'wp-instagram-description' }, description) : null,
    showFollowButton ? React.createElement('a', {
      key: 'btn',
      href: 'https://instagram.com/' + username,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'wp-instagram-follow-button'
    }, [
      React.createElement(Instagram, { key: 'icon', size: 18 }),
      React.createElement('span', { key: 'text' }, 'Follow @' + username)
    ]) : null
  ]) : null;

  var grid = React.createElement('div', { key: 'grid', className: gridClass },
    posts.map(function(post) {
      var overlay = React.createElement('div', { key: 'overlay', className: 'wp-instagram-post-overlay' }, [
        React.createElement('div', { key: 'likes', className: 'wp-instagram-stat' }, [
          React.createElement(Heart, { key: 'icon', size: 20, fill: 'white' }),
          React.createElement('span', { key: 'count' }, post.likes || 0)
        ]),
        React.createElement('div', { key: 'comments', className: 'wp-instagram-stat' }, [
          React.createElement(MessageCircle, { key: 'icon', size: 20 }),
          React.createElement('span', { key: 'count' }, post.comments || 0)
        ])
      ]);

      return React.createElement('a', {
        key: post.id,
        href: post.url || '#',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'wp-instagram-post'
      }, [
        React.createElement(ImageWithFallback, {
          key: 'img',
          src: post.image,
          alt: post.caption || 'Instagram post',
          className: 'wp-instagram-post-image'
        }),
        overlay
      ]);
    })
  );

  var content = React.createElement(Container, null, [
    header,
    grid
  ]);

  return React.createElement('section', { className: 'wp-instagram-feed ' + className }, content);
}