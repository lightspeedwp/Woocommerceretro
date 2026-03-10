import React from 'react';
import * as ContainerModule from '../../common/Container';
import * as TypographyModule from '../../common/Typography';
import { InstagramLogo as Instagram } from '@phosphor-icons/react';

var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;

/**
 * ShopSocialSection Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ShopSocialSection() {
  var icon = React.createElement('div', { key: 'i-wrap', className: "wp-shop-social__icon-wrapper" }, 
    React.createElement('div', { className: "wp-shop-social__icon-circle" }, 
      React.createElement(Instagram, { size: 24 })
    )
  );

  var inner = React.createElement(Container, { variant: "site" }, [
    icon,
    React.createElement(Typography, { key: 'h', variant: "h3", className: "wp-shop-social__heading" }, "Share your experiences and adventures with KWV Online"),
    React.createElement(Typography, { key: 'c', variant: "caption", className: "wp-shop-social__hashtags" }, "#KWVONLINE #KWVSHOP #KWVEXPERIENCES #KWVEVENTS")
  ]);

  return React.createElement('section', { className: "wp-shop-social" }, inner);
}