import React from 'react';
import { InstagramLogo as Instagram, Heart, ChatCircle as MessageCircle } from '@phosphor-icons/react';

var useState = React.useState;
import * as ButtonsModule from '../blocks/design/Buttons';
import * as TypographyModule from '../common/Typography';

var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;

// SocialPost structure
// - id: string
// - image: string
// - caption?: string
// - likes?: number
// - comments?: number
// - url?: string
// - timestamp?: string

// SocialMediaFeedProps structure
// - posts: SocialPost[]
// - heading?: string
// - description?: string
// - instagramHandle?: string
// - instagramUrl?: string
// - columns?: { mobile?: 2 | 3, tablet?: 3 | 4, desktop?: 4 | 5 | 6 }
// - showStats?: boolean
// - showCaptions?: boolean
// - maxPosts?: number
// - className?: string

/**
 * SocialMediaFeed Pattern Component
 * 
 * Instagram-style grid displaying social media posts with images,
 * engagement stats, and follow button.
 * 
 * **Version:** 1.0 (WordPress FSE Aligned)
 * **WordPress Mapping:** Social Feed Block / Instagram Grid Pattern
 * **Used In:** FrontPage, PageAbout, Footer
 * **Dark Mode:** Full support
 * 
 * @pattern
 */
export function SocialMediaFeed(props) {
  var posts = props.posts;
  var heading = props.heading !== undefined ? props.heading : 'Follow Us on Instagram';
  var description = props.description;
  var instagramHandle = props.instagramHandle;
  var instagramUrl = props.instagramUrl;
  var columns = props.columns || { mobile: 3, tablet: 4, desktop: 6 };
  var showStats = props.showStats !== undefined ? props.showStats : true;
  var showCaptions = props.showCaptions !== undefined ? props.showCaptions : false;
  var maxPosts = props.maxPosts !== undefined ? props.maxPosts : 12;
  var className = props.className || '';

  var mobile = columns.mobile || 3;
  var tablet = columns.tablet || 4;
  var desktop = columns.desktop || 6;
  var displayPosts = posts.slice(0, maxPosts);

  var gridStyle = {
    '--social-cols-mobile': mobile,
    '--social-cols-tablet': tablet,
    '--social-cols-desktop': desktop,
  };

  var headingRow = heading ? React.createElement('div', { key: 'heading-row', className: "wp-social-feed__heading-row" }, [
    React.createElement(Instagram, { key: 'icon', size: 28, className: "wp-social-feed__heading-icon", 'aria-hidden': "true" }),
    React.createElement(Typography, { key: 'title', variant: "h2", className: "wp-social-feed__title" }, heading)
  ]) : null;

  var descriptionPara = description ? React.createElement(Typography, { key: 'desc', variant: "p", className: "wp-social-feed__description" }, description) : null;

  var followButton = (instagramHandle && instagramUrl) ? React.createElement(Button, {
    key: 'follow',
    variant: "outline",
    size: "default",
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    icon: React.createElement(Instagram, { size: 18 }),
    iconPosition: "left"
  }, "Follow " + instagramHandle) : null;

  var header = React.createElement('div', { key: 'header', className: "wp-social-feed__header" }, [
    headingRow,
    descriptionPara,
    followButton
  ]);

  var postCards = displayPosts.map(function(post) {
    var likeStat = post.likes !== undefined ? React.createElement('div', { key: 'likes', className: "wp-social-feed__stat" }, [
      React.createElement(Heart, { key: 'icon', size: 20, fill: "white", 'aria-hidden': "true" }),
      React.createElement('span', { key: 'count' }, post.likes)
    ]) : null;

    var commentStat = post.comments !== undefined ? React.createElement('div', { key: 'comments', className: "wp-social-feed__stat" }, [
      React.createElement(MessageCircle, { key: 'icon', size: 20, 'aria-hidden': "true" }),
      React.createElement('span', { key: 'count' }, post.comments)
    ]) : null;

    var stats = (showStats && (post.likes !== undefined || post.comments !== undefined)) ? React.createElement('div', { key: 'stats', className: "wp-social-feed__post-stats" }, [
      likeStat,
      commentStat
    ]) : null;

    var caption = (showCaptions && post.caption) ? React.createElement('p', { key: 'caption', className: "wp-social-feed__caption" },
      React.createElement('small', null, post.caption)
    ) : null;

    var overlay = React.createElement('div', { key: 'overlay', className: "wp-social-feed__post-overlay" }, [
      stats,
      caption
    ]);

    return React.createElement('a', {
      key: post.id,
      href: post.url || '#',
      target: "_blank",
      rel: "noopener noreferrer",
      className: "wp-social-feed__post"
    }, [
      React.createElement('img', {
        key: 'img',
        src: post.image,
        alt: post.caption || 'Instagram post',
        className: "wp-social-feed__post-image",
        loading: "lazy"
      }),
      overlay
    ]);
  });

  var grid = React.createElement('div', { key: 'grid', className: "wp-social-feed__grid", style: gridStyle }, postCards);

  return React.createElement('div', { className: className }, [
    header,
    grid
  ]);
}