import React from 'react';
import * as ContainerModule from '../../common/Container';
import * as TypographyModule from '../../common/Typography';
import * as ButtonsModule from '../../blocks/design/Buttons';
import * as ScrollDownArrowModule from '../../common/ScrollDownArrow';
import * as ReactRouterModule from 'react-router';

var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;
var ScrollDownArrow = ScrollDownArrowModule.ScrollDownArrow;
var useNavigate = ReactRouterModule.useNavigate;

/**
 * ShopHero Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ShopHero() {
  var navigate = useNavigate();

  function handleShopNow() { navigate('/shop/all'); }
  function handleViewOffers() { navigate('/promotions'); }

  var actions = React.createElement('div', { key: 'actions', className: "wp-shop-hero__actions" }, [
    React.createElement(Button, {
      key: 'shop',
      variant: "hero",
      size: "lg",
      className: "wp-shop-hero__btn sm-wp-w-btn-fixed",
      onClick: handleShopNow
    }, "Shop Now"),
    React.createElement(Button, {
      key: 'offers',
      variant: "outline",
      size: "lg",
      className: "wp-shop-hero__btn--outline sm-wp-w-btn-fixed",
      onClick: handleViewOffers
    }, "View Offers")
  ]);

  var content = React.createElement('div', { key: 'content', className: "wp-shop-hero__content" }, [
    React.createElement(Typography, { 
      key: 't',
      variant: "h1", 
      className: "wp-shop-hero__title",
      stretchy: true
    }, "Curated Collections & Essentials"),
    React.createElement(Typography, { 
      key: 's',
      variant: "body", 
      className: "wp-shop-hero__subtitle"
    }, "Discover products that elevate your everyday life. Quality, sustainability, and style in every detail."),
    actions
  ]);

  var inner = React.createElement(Container, { variant: "site", className: "wp-shop-hero__inner" }, content);

  var scrollArrow = React.createElement(ScrollDownArrow, { 
    key: 'arrow', 
    targetId: "shop-content", 
    className: "wp-shop-hero__scroll-arrow" 
  });

  return React.createElement('div', { className: "wp-shop-hero wp-min-h-full-page wp-min-h-80vh" }, [
    inner,
    scrollArrow
  ]);
}