import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChatCircle as MessageCircle } from '@phosphor-icons/react';

/*
 * PostMetaProps:
 *   author: string
 *   authorSlug?: string
 *   date: string
 *   commentCount?: number
 *   postSlug?: string
 *   className?: string
 */

/**
 * PostMeta Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function PostMeta(props) {
  var author = props.author;
  var authorSlug = props.authorSlug;
  var date = props.date;
  var commentCount = props.commentCount === undefined ? 0 : props.commentCount;
  var postSlug = props.postSlug;
  var className = props.className || '';

  var authorItem = React.createElement('div', { key: 'author', className: "wp-block-post-meta__item" }, [
    React.createElement(User, { key: 'i', size: 16, className: "wp-block-post-meta__icon", 'aria-hidden': "true" }),
    authorSlug ? React.createElement(Link, {
      key: 'l',
      to: "/blog/author/" + authorSlug,
      className: "wp-block-post-meta__link",
      'aria-label': "View posts by " + author
    }, author) : React.createElement('span', { key: 's' }, author)
  ]);

  var dateItem = React.createElement('div', { key: 'date', className: "wp-block-post-meta__item" }, [
    React.createElement(Calendar, { key: 'i', size: 16, className: "wp-block-post-meta__icon", 'aria-hidden': "true" }),
    React.createElement('time', { key: 't', dateTime: date }, date)
  ]);

  var commentSuffix = commentCount !== 1 ? 's' : '';
  var commentText = commentCount + " Comment" + commentSuffix;

  var commentItem = React.createElement('div', { key: 'comments', className: "wp-block-post-meta__item" }, [
    React.createElement(MessageCircle, { key: 'i', size: 16, className: "wp-block-post-meta__icon", 'aria-hidden': "true" }),
    postSlug ? React.createElement('a', {
      key: 'l',
      href: "#comments",
      className: "wp-block-post-meta__link",
      'aria-label': commentCount + " comment" + commentSuffix
    }, commentText) : React.createElement('span', { key: 's' }, commentText)
  ]);

  return React.createElement('div', {
    className: "wp-block-post-meta " + className,
    'aria-label': "Post metadata"
  }, [
    authorItem,
    dateItem,
    commentItem
  ]);
}