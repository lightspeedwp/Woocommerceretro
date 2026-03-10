/**
 * ShopMegaMenu - Funky Redesign
 * 3-column: browse links | categories | featured cards
 * Glassmorphism panel with neon accents, Phosphor icons.
 */
import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Storefront, Tag, Star, Lightning, Sparkle, Gift, Percent, TShirt, Watch, Desktop, Package, Couch, ArrowRight } from '@phosphor-icons/react';
import { MegaMenuWrapper } from './MegaMenuWrapper';

var Link = ReactRouterModule.Link;

var browseLinks = [
  { title: 'All Products', href: '/shop', Icon: Storefront },
  { title: 'New Arrivals', href: '/new-arrivals', Icon: Sparkle, badge: 'new' },
  { title: 'Best Sellers', href: '/best-sellers', Icon: Star },
  { title: 'Deals', href: '/deals', Icon: Lightning },
  { title: 'Gift Cards', href: '/gift-cards', Icon: Gift },
  { title: 'Sale', href: '/sale', Icon: Percent, badge: 'hot' }
];

var categoryLinks = [
  { title: 'Clothing', href: '/shop/category/clothing', Icon: TShirt },
  { title: 'Accessories', href: '/shop/category/accessories', Icon: Watch },
  { title: 'Computers', href: '/shop/category/computers', Icon: Desktop },
  { title: 'Bundles', href: '/shop/category/bundles', Icon: Package },
  { title: 'Home & Living', href: '/shop/category/home-living', Icon: Couch }
];

var featuredCards = [
  {
    title: 'Summer Collection',
    subtitle: 'Fresh styles for the season',
    href: '/shop/category/clothing',
    overlay: 'pink',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Home & Living',
    subtitle: 'Transform your space',
    href: '/shop/category/home-living',
    overlay: 'purple',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop'
  }
];

export function ShopMegaMenu() {
  function renderContent(closeMenu) {
    var browseColumn = React.createElement('div', {
      className: 'funky-mega__column funky-mega__column--bordered'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Browse'),
      React.createElement('div', { key: 'list' },
        browseLinks.map(function(link) {
          return React.createElement(Link, {
            key: link.title,
            to: link.href,
            className: 'funky-mega__link'
          }, [
            React.createElement('span', { key: 'ic', className: 'funky-mega__link-icon' },
              React.createElement(link.Icon, { size: 16, weight: 'duotone' })
            ),
            React.createElement('span', { key: 'lb', className: 'funky-mega__link-label' }, link.title),
            link.badge ? React.createElement('span', {
              key: 'b',
              className: 'funky-mega__badge funky-mega__badge--' + link.badge
            }, link.badge) : null
          ]);
        })
      )
    ]);

    var categoriesColumn = React.createElement('div', {
      className: 'funky-mega__column funky-mega__column--bordered'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Categories'),
      React.createElement('div', { key: 'list' },
        categoryLinks.map(function(link) {
          return React.createElement(Link, {
            key: link.title,
            to: link.href,
            className: 'funky-mega__link'
          }, [
            React.createElement('span', { key: 'ic', className: 'funky-mega__link-icon' },
              React.createElement(link.Icon, { size: 16, weight: 'duotone' })
            ),
            React.createElement('span', { key: 'lb', className: 'funky-mega__link-label' }, link.title)
          ]);
        })
      )
    ]);

    var featuredColumn = React.createElement('div', {
      className: 'funky-mega__column'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Featured'),
      React.createElement('div', { key: 'cards', className: 'funky-mega__cards-grid funky-mega__cards-grid--vertical' },
        featuredCards.map(function(card) {
          return React.createElement(Link, {
            key: card.title,
            to: card.href,
            className: 'funky-mega__card'
          }, [
            React.createElement('img', {
              key: 'bg',
              src: card.image,
              alt: card.title,
              className: 'funky-mega__card-bg',
              loading: 'lazy'
            }),
            React.createElement('div', {
              key: 'ov',
              className: 'funky-mega__card-overlay funky-mega__card-overlay--' + card.overlay
            }),
            React.createElement('div', { key: 'bd', className: 'funky-mega__card-body' }, [
              React.createElement('span', { key: 't', className: 'funky-mega__card-title' }, card.title),
              React.createElement('span', { key: 's', className: 'funky-mega__card-subtitle' }, card.subtitle),
              React.createElement('span', { key: 'c', className: 'funky-mega__card-cta' }, [
                React.createElement('span', { key: 'l' }, 'Shop now'),
                React.createElement(ArrowRight, { key: 'a', size: 12, weight: 'bold' })
              ])
            ])
          ]);
        })
      )
    ]);

    var footer = React.createElement('div', { className: 'funky-mega__footer' }, [
      React.createElement(Link, {
        key: 'all',
        to: '/shop',
        className: 'funky-mega__footer-link',
        onClick: closeMenu
      }, [
        React.createElement('span', { key: 'l' }, 'View all products'),
        React.createElement(ArrowRight, { key: 'a', size: 14, weight: 'bold' })
      ]),
      React.createElement(Link, {
        key: 'sale',
        to: '/sale',
        className: 'funky-mega__footer-link',
        onClick: closeMenu
      }, [
        React.createElement('span', { key: 'l' }, 'Sale'),
        React.createElement('span', { key: 'b', className: 'funky-mega__badge funky-mega__badge--hot' }, 'Hot')
      ])
    ]);

    return React.createElement('div', {
      className: 'wp-mega-menu__content'
    }, [
      React.createElement('div', { key: 'orb1', className: 'funky-mega__orb funky-mega__orb--pink', style: { top: '-80px', right: '-60px' } }),
      React.createElement('div', { key: 'orb2', className: 'funky-mega__orb funky-mega__orb--cyan', style: { bottom: '-40px', left: '-40px' } }),
      React.createElement('div', { key: 'grid', className: 'funky-mega__inner funky-mega__inner--shop' }, [
        React.cloneElement(browseColumn, { key: 'browse' }),
        React.cloneElement(categoriesColumn, { key: 'cats' }),
        React.cloneElement(featuredColumn, { key: 'feat' })
      ]),
      React.cloneElement(footer, { key: 'footer' })
    ]);
  }

  return React.createElement(MegaMenuWrapper, {
    triggerLabel: 'Shop',
    triggerHref: '/shop',
    renderContent: renderContent
  });
}

ShopMegaMenu.displayName = 'ShopMegaMenu';