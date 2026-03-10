/**
 * ContactMegaMenu - Funky Redesign
 * Contact method cards + support links + hours banner.
 * Glassmorphism, neon gradient borders, Phosphor icons.
 */
import React from 'react';
import * as ReactRouterModule from 'react-router';
import { EnvelopeSimple, Phone, ChatCircleDots, ArrowRight, Question, MapPin, Clock, Truck } from '@phosphor-icons/react';
import { MegaMenuWrapper } from './MegaMenuWrapper';

var Link = ReactRouterModule.Link;

var contactMethods = [
  {
    title: 'Email Support',
    desc: 'Get a response within 24 hours',
    detail: 'support@example.com',
    href: 'mailto:support@example.com',
    iconVariant: 'email',
    IconComponent: EnvelopeSimple
  },
  {
    title: 'Phone Support',
    desc: 'Mon-Fri, 9am-6pm EST',
    detail: '1-800-555-0123',
    href: 'tel:18005550123',
    iconVariant: 'phone',
    IconComponent: Phone
  },
  {
    title: 'Live Chat',
    desc: 'Average response: 2 minutes',
    detail: 'Chat with our team now',
    href: '/chat',
    iconVariant: 'chat',
    IconComponent: ChatCircleDots,
    badge: 'online'
  }
];

var supportLinks = [
  { title: 'Help Center', href: '/help', Icon: Question, desc: 'Browse articles and guides' },
  { title: 'FAQ', href: '/faq', Icon: Question, desc: 'Common questions answered' },
  { title: 'Store Locator', href: '/stores', Icon: MapPin, desc: 'Find a store near you' },
  { title: 'Shipping Info', href: '/shipping-returns', Icon: Truck, desc: 'Delivery times and rates' }
];

export function ContactMegaMenu() {
  function renderContent(closeMenu) {
    /* Contact method cards */
    var contactCards = React.createElement('div', {
      className: 'funky-mega__contact-row'
    }, contactMethods.map(function(method) {
      return React.createElement('a', {
        key: method.title,
        href: method.href,
        className: 'funky-mega__contact-card'
      }, [
        React.createElement('div', {
          key: 'icon',
          className: 'funky-mega__contact-icon funky-mega__contact-icon--' + method.iconVariant
        }, React.createElement(method.IconComponent, { size: 24, weight: 'duotone' })),
        React.createElement('div', { key: 'text', className: 'funky-mega__contact-text' }, [
          React.createElement('span', { key: 'name', className: 'funky-mega__contact-name' }, [
            React.createElement('span', { key: 'n' }, method.title),
            method.badge ? React.createElement('span', {
              key: 'b',
              className: 'funky-mega__badge funky-mega__badge--' + method.badge,
              style: { marginLeft: '0.5rem', verticalAlign: 'middle' }
            }, 'Online') : null
          ]),
          React.createElement('span', { key: 'desc', className: 'funky-mega__contact-desc' }, method.desc),
          React.createElement('span', { key: 'detail', className: 'funky-mega__contact-detail' }, method.detail)
        ]),
        React.createElement('span', { key: 'arrow', className: 'funky-mega__contact-arrow' },
          React.createElement(ArrowRight, { size: 18, weight: 'bold' })
        )
      ]);
    }));

    /* Support links grid */
    var supportSection = React.createElement('div', {
      style: { padding: '0 1.5rem 1rem 1.5rem' }
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Quick Links'),
      React.createElement('div', { key: 'grid', className: 'funky-mega__support-grid' },
        supportLinks.map(function(link) {
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
            ])
          ]);
        })
      )
    ]);

    /* Hours info banner */
    var hoursBanner = React.createElement('div', { className: 'funky-mega__info-banner' }, [
      React.createElement('span', { key: 'icon', className: 'funky-mega__info-icon' },
        React.createElement(Clock, { size: 16, weight: 'duotone' })
      ),
      React.createElement('span', { key: 'text' },
        'Support Hours: Monday - Friday 9:00 AM - 6:00 PM EST  |  Saturday 10:00 AM - 4:00 PM EST'
      )
    ]);

    var content = React.createElement('div', {
      className: 'wp-mega-menu__content'
    }, [
      React.createElement('div', { key: 'orb1', className: 'funky-mega__orb funky-mega__orb--cyan', style: { top: '-80px', left: '30%' } }),
      React.createElement('div', { key: 'orb2', className: 'funky-mega__orb funky-mega__orb--pink', style: { bottom: '-60px', right: '20%' } }),
      React.createElement('div', { key: 'inner', className: 'funky-mega__inner funky-mega__inner--contact', style: { position: 'relative', zIndex: 1 } }, [
        React.cloneElement(contactCards, { key: 'cards' }),
        React.cloneElement(supportSection, { key: 'support' })
      ]),
      React.cloneElement(hoursBanner, { key: 'hours' })
    ]);

    return content;
  }

  return React.createElement(MegaMenuWrapper, {
    triggerLabel: 'Contact',
    triggerHref: '/contact',
    renderContent: renderContent
  });
}