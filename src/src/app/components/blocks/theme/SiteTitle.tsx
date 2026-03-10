import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;
import * as UtilsModule from '../ui/utils';

var cn = UtilsModule.cn;

/**
 * Site Title component
 */
export function SiteTitle(props) {
  var Tag = props.tag || 'h1';
  var children = props.children;
  var linkHref = props.linkHref !== undefined ? props.linkHref : '/';
  var linkLabel = props.linkLabel || 'Home';
  var className = props.className || '';
  var style = props.style;

  var titleElement = React.createElement(Tag, {
    className: cn('wp-block-site-title', className),
    style: style
  }, children);
  
  if (linkHref) {
    return React.createElement(Link, {
      to: linkHref,
      'aria-label': linkLabel,
      className: "wp-block-site-title__link"
    }, titleElement);
  }
  
  return titleElement;
}

SiteTitle.displayName = 'SiteTitle';