import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;
import * as UtilsModule from '../ui/utils';

var cn = UtilsModule.cn;

/**
 * Site Tagline component
 */
export function SiteTagline(props) {
  var Tag = props.tag || 'p';
  var children = props.children;
  var linkHref = props.linkHref || null;
  var linkLabel = props.linkLabel || 'Home';
  var className = props.className || '';
  var style = props.style;

  var taglineElement = React.createElement(Tag, {
    className: cn('wp-block-site-tagline', className),
    style: style
  }, children);
  
  if (linkHref) {
    return React.createElement(Link, {
      to: linkHref,
      'aria-label': linkLabel,
      className: "wp-block-site-tagline__link"
    }, taglineElement);
  }
  
  return taglineElement;
}

SiteTagline.displayName = 'SiteTagline';