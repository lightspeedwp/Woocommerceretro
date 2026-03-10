import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Lightning, TagSimple, Gift, Percent, Trophy, Ticket, ArrowRight, Fire, Timer, CreditCard } from '@phosphor-icons/react';
import { MegaMenuWrapper } from './MegaMenuWrapper';

var Link = ReactRouterModule.Link;

/**
 * DealsMegaMenu - Funky Redesign
 * 3-column layout: deals list | featured deal cards | promo highlight
 * Glassmorphism, neon gradients, pulsing badges.
 */

var dealLinks = [
  { title: 'All Deals', href: '/promotions', Icon: TagSimple, desc: 'View all offers' },
  { title: 'Flash Sale', href: '/promotions/flash-sale', Icon: Lightning, desc: 'Limited time only', badge: 'hot' },
  { title: 'Seasonal Sale', href: '/promotions/seasonal', Icon: Percent, desc: 'Winter collection', badge: 'sale' },
  { title: 'Bundle Deals', href: '/promotions/bundles', Icon: Gift, desc: 'Save on sets' },
  { title: 'Clearance', href: '/promotions/clearance', Icon: Ticket, desc: 'Final markdown', badge: 'sale' },
  { title: 'Loyalty Rewards', href: '/loyalty', Icon: Trophy, desc: 'Earn & redeem points', badge: 'new' },
  { title: 'Gift Cards', href: '/gift-cards', Icon: CreditCard, desc: 'Give the gift of choice' }
];

var featuredDeals = [
  {
    title: 'Winter Clearance',
    subtitle: 'Up to 70% off selected items',
    href: '/promotions/winter-clearance',
    overlay: 'cyan',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Flash Sale',
    subtitle: '24 hours only - don\'t miss out',
    href: '/promotions/flash-sale',
    overlay: 'orange',
    image: 'https://images.unsplash.com/photo-1722718467706-a2be2503d791?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Buy 2 Get 1 Free',
    subtitle: 'On all accessories & more',
    href: '/promotions/buy-2-get-1',
    overlay: 'purple',
    image: 'https://images.unsplash.com/photo-1637590957181-8893af2a8344?q=80&w=600&auto=format&fit=crop'
  }
];

export function DealsMegaMenu() {
  function renderContent(closeMenu) {
    /* Deals list column */
    var dealsColumn = React.createElement('div', {
      className: 'funky-mega__column funky-mega__column--bordered'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Deals & Offers'),
      React.createElement('div', { key: 'list' },
        dealLinks.map(function(link) {
          return React.createElement(Link, {
            key: link.title,
            to: link.href,
            className: 'funky-mega__link'
          }, [
            React.createElement('span', { key: 'ic', className: 'funky-mega__link-icon' },
              React.createElement(link.Icon, { size: 16, weight: 'duotone' })
            ),
            React.createElement('span', { key: 'tx', className: 'funky-mega__link-text' }, [
              React.createElement('span', { key: 'lb', className: 'funky-mega__link-label' }, link.title),
              React.createElement('span', { key: 'ds', className: 'funky-mega__link-desc' }, link.desc)
            ]),
            link.badge ? React.createElement('span', {
              key: 'b',
              className: 'funky-mega__badge funky-mega__badge--' + link.badge
            }, link.badge === 'hot' ? 'Hot' : link.badge === 'new' ? 'New' : 'Sale') : null
          ]);
        })
      )
    ]);

    /* Featured deals column */
    var featuredColumn = React.createElement('div', {
      className: 'funky-mega__column funky-mega__column--bordered'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Featured Deals'),
      React.createElement('div', { key: 'cards', className: 'funky-mega__cards-grid funky-mega__cards-grid--vertical' },
        featuredDeals.map(function(deal) {
          return React.createElement(Link, {
            key: deal.title,
            to: deal.href,
            className: 'funky-mega__card'
          }, [
            React.createElement('img', {
              key: 'bg',
              src: deal.image,
              alt: deal.title,
              className: 'funky-mega__card-bg',
              loading: 'lazy'
            }),
            React.createElement('div', {
              key: 'ov',
              className: 'funky-mega__card-overlay funky-mega__card-overlay--' + deal.overlay
            }),
            React.createElement('div', { key: 'bd', className: 'funky-mega__card-body' }, [
              React.createElement('span', { key: 't', className: 'funky-mega__card-title' }, deal.title),
              React.createElement('span', { key: 's', className: 'funky-mega__card-subtitle' }, deal.subtitle),
              React.createElement('span', { key: 'c', className: 'funky-mega__card-cta' }, [
                React.createElement('span', { key: 'l' }, 'Shop now'),
                React.createElement(ArrowRight, { key: 'a', size: 12, weight: 'bold' })
              ])
            ])
          ]);
        })
      )
    ]);

    /* Promo highlight panel */
    var promoPanel = React.createElement('div', {
      className: 'funky-mega__column funky-mega__promo-panel'
    }, [
      React.createElement('div', { key: 'icon', className: 'funky-mega__promo-icon' },
        React.createElement(Fire, { size: 24, weight: 'fill' })
      ),
      React.createElement('span', { key: 'label', className: 'funky-mega__promo-label' }, 'Limited time'),
      React.createElement('span', { key: 'value', className: 'funky-mega__promo-value' }, 'Up to 70% Off'),
      React.createElement('span', { key: 'sub', className: 'funky-mega__link-desc', style: { textAlign: 'center' } },
        'Seasonal clearance on hundreds of items. Don\'t miss out!'
      ),
      React.createElement(Link, {
        key: 'cta',
        to: '/sale',
        className: 'funky-mega__promo-cta funky-spring-hover'
      }, [
        React.createElement('span', { key: 'l' }, 'Shop Sale'),
        React.createElement(ArrowRight, { key: 'a', size: 14, weight: 'bold' })
      ])
    ]);

    var footer = React.createElement('div', { className: 'funky-mega__footer' }, [
      React.createElement(Link, {
        key: 'all',
        to: '/promotions',
        className: 'funky-mega__footer-link',
        onClick: closeMenu
      }, [
        React.createElement('span', { key: 'l' }, 'View all deals'),
        React.createElement(ArrowRight, { key: 'a', size: 14, weight: 'bold' })
      ]),
      React.createElement(Link, {
        key: 'rewards',
        to: '/loyalty',
        className: 'funky-mega__footer-link',
        onClick: closeMenu
      }, [
        React.createElement(Trophy, { key: 'i', size: 14, weight: 'duotone' }),
        React.createElement('span', { key: 'l' }, 'Loyalty Rewards')
      ])
    ]);

    return React.createElement('div', {
      className: 'wp-mega-menu__content'
    }, [
      React.createElement('div', { key: 'orb1', className: 'funky-mega__orb funky-mega__orb--pink', style: { top: '-60px', left: '-80px' } }),
      React.createElement('div', { key: 'orb2', className: 'funky-mega__orb funky-mega__orb--cyan', style: { bottom: '-50px', right: '-50px' } }),
      React.createElement('div', { key: 'grid', className: 'funky-mega__inner funky-mega__inner--deals' }, [
        React.cloneElement(dealsColumn, { key: 'deals' }),
        React.cloneElement(featuredColumn, { key: 'feat' }),
        React.cloneElement(promoPanel, { key: 'promo' })
      ]),
      React.cloneElement(footer, { key: 'footer' })
    ]);
  }

  return React.createElement(MegaMenuWrapper, {
    triggerLabel: 'Deals',
    triggerHref: '/deals',
    renderContent: renderContent
  });
}