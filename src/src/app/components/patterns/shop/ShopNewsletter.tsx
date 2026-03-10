import React from 'react';
import * as ContainerModule from '../../common/Container';
import * as TypographyModule from '../../common/Typography';

var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;

/**
 * ShopNewsletter Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ShopNewsletter() {
  var bgWrapper = React.createElement('div', { key: 'bg', className: "wp-shop-newsletter__bg-wrapper" }, [
    React.createElement('img', { 
      key: 'i',
      src: "https://images.unsplash.com/photo-1560493676-040ddb386265?q=80&w=2070&auto=format&fit=crop", 
      alt: "Vineyards", 
      className: "wp-shop-newsletter__bg-image"
    }),
    React.createElement('div', { key: 'o', className: "wp-shop-newsletter__bg-overlay" })
  ]);

  var form = React.createElement('form', { key: 'form', className: "wp-shop-newsletter__form" }, [
    React.createElement('label', { key: 'l1', htmlFor: "shop-newsletter-name", className: "sr-only" }, "Name"),
    React.createElement('input', { 
      key: 'i1',
      id: "shop-newsletter-name",
      type: "text", 
      placeholder: "name", 
      className: "wp-newsletter-input lowercase",
      'aria-label': "Name"
    }),
    React.createElement('label', { key: 'l2', htmlFor: "shop-newsletter-surname", className: "sr-only" }, "Surname"),
    React.createElement('input', { 
      key: 'i2',
      id: "shop-newsletter-surname",
      type: "text", 
      placeholder: "surname", 
      className: "wp-newsletter-input lowercase",
      'aria-label': "Surname"
    }),
    React.createElement('label', { key: 'l3', htmlFor: "shop-newsletter-email", className: "sr-only" }, "Email"),
    React.createElement('input', { 
      key: 'i3',
      id: "shop-newsletter-email",
      type: "email", 
      placeholder: "email", 
      className: "wp-newsletter-input lowercase",
      'aria-label': "Email"
    }),
    React.createElement('button', { key: 'btn', type: "submit", className: "wp-newsletter-submit" }, "Submit")
  ]);

  var inner = React.createElement(Container, { variant: "site", className: "wp-shop-newsletter__inner" }, [
    React.createElement(Typography, { key: 'h', variant: "h2", className: "wp-shop-newsletter__heading" }, "Join the KWV Family"),
    React.createElement(Typography, { key: 'd', variant: "body", className: "wp-shop-newsletter__description" }, "Sign up for our newsletter and keep up to date with all things KWV."),
    form
  ]);

  return React.createElement('section', { className: "wp-shop-newsletter" }, [
    bgWrapper,
    inner
  ]);
}
