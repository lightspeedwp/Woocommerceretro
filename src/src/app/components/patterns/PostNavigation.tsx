import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

// PostNavigationLink structure
// - title: string
// - slug: string

// PostNavigationProps structure
// - prevPost?: PostNavigationLink | null
// - nextPost?: PostNavigationLink | null
// - basePath?: string
// - className?: string

/**
 * PostNavigation Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function PostNavigation(props) {
  var prevPost = props.prevPost;
  var nextPost = props.nextPost;
  var basePath = props.basePath || '/blog/';
  var className = props.className || '';

  if (!prevPost && !nextPost) {
    return null;
  }

  var prevLink = prevPost ? React.createElement(Link, {
    key: 'prev',
    to: basePath + prevPost.slug,
    className: "wp-block-post-navigation__link"
  }, [
    React.createElement('div', { key: 'meta', className: "wp-block-post-navigation__meta" }, [
      React.createElement(ArrowLeft, { key: 'i', size: 16, 'aria-hidden': "true" }),
      React.createElement('small', { key: 's' }, "Previous Post")
    ]),
    React.createElement('h4', { key: 't', className: "wp-block-post-navigation__title" }, prevPost.title)
  ]) : React.createElement('div', { key: 'empty' });

  var nextLink = nextPost ? React.createElement(Link, {
    key: 'next',
    to: basePath + nextPost.slug,
    className: "wp-block-post-navigation__link wp-block-post-navigation__link--next"
  }, [
    React.createElement('div', { key: 'meta', className: "wp-block-post-navigation__meta" }, [
      React.createElement('small', { key: 's' }, "Next Post"),
      React.createElement(ArrowRight, { key: 'i', size: 16, 'aria-hidden': "true" })
    ]),
    React.createElement('h4', { key: 't', className: "wp-block-post-navigation__title" }, nextPost.title)
  ]) : null;

  return React.createElement('nav', {
    className: "wp-block-post-navigation " + className,
    'aria-label': "Post navigation"
  }, 
    React.createElement('div', { className: "wp-block-post-navigation__grid" }, [
      prevLink,
      nextLink
    ])
  );
}