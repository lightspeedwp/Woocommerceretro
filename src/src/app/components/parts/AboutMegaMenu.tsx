/**
 * AboutMegaMenu - Funky Redesign
 * 2-column: about links + resources | featured image cards
 * Glassmorphism, neon accents, Phosphor icons.
 */
import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Heart, UsersThree, Leaf, Briefcase, Question, FileText, ShieldCheck, Truck } from '@phosphor-icons/react';
import { MegaMenuWrapper } from './MegaMenuWrapper';

var Link = ReactRouterModule.Link;

var aboutLinks = [
  { title: 'Our Story', href: '/about', Icon: Heart, desc: 'Learn about our journey' },
  { title: 'Our Team', href: '/about/team', Icon: UsersThree, desc: 'Meet the people behind the brand' },
  { title: 'Sustainability', href: '/about/sustainability', Icon: Leaf, desc: 'Our commitment to the planet' },
  { title: 'Careers', href: '/about/careers', Icon: Briefcase, desc: 'Join our growing team' }
];

var resourceLinks = [
  { title: 'Help Center', href: '/help', Icon: Question },
  { title: 'FAQ', href: '/faq', Icon: FileText },
  { title: 'Shipping & Returns', href: '/shipping-returns', Icon: Truck },
  { title: 'Privacy Policy', href: '/privacy-policy', Icon: ShieldCheck },
  { title: 'Terms & Conditions', href: '/terms-and-conditions', Icon: FileText }
];

var featuredSections = [
  {
    title: 'Our Story',
    subtitle: 'A passion for quality since 2020',
    href: '/about',
    overlay: 'cyan',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Sustainability',
    subtitle: 'Ethical sourcing & eco-friendly',
    href: '/about/sustainability',
    overlay: 'lime',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Join Our Team',
    subtitle: 'Explore career opportunities',
    href: '/about/careers',
    overlay: 'purple',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop'
  }
];

export function AboutMegaMenu() {
  function renderContent(closeMenu) {
    var leftColumn = React.createElement('div', {
      className: 'funky-mega__column funky-mega__column--bordered'
    }, [
      React.createElement('h4', { key: 't1', className: 'funky-mega__title' }, 'About Us'),
      React.createElement('div', { key: 'about' },
        aboutLinks.map(function(link) {
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
      ),
      React.createElement('div', { key: 'sep', style: { height: '1px', background: 'var(--funky-glass-border)', margin: '0.75rem 0' } }),
      React.createElement('h4', { key: 't2', className: 'funky-mega__title' }, 'Resources'),
      React.createElement('div', { key: 'resources' },
        resourceLinks.map(function(link) {
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

    var rightColumn = React.createElement('div', {
      className: 'funky-mega__column'
    }, [
      React.createElement('h4', { key: 't', className: 'funky-mega__title' }, 'Featured'),
      React.createElement('div', { key: 'cards', className: 'funky-mega__cards-grid funky-mega__cards-grid--3col' },
        featuredSections.map(function(section) {
          return React.createElement(Link, {
            key: section.title,
            to: section.href,
            className: 'funky-mega__card',
            style: { minHeight: '160px' }
          }, [
            React.createElement('img', {
              key: 'bg',
              src: section.image,
              alt: section.title,
              className: 'funky-mega__card-bg',
              loading: 'lazy'
            }),
            React.createElement('div', {
              key: 'ov',
              className: 'funky-mega__card-overlay funky-mega__card-overlay--' + section.overlay
            }),
            React.createElement('div', { key: 'bd', className: 'funky-mega__card-body' }, [
              React.createElement('span', { key: 't', className: 'funky-mega__card-title' }, section.title),
              React.createElement('span', { key: 's', className: 'funky-mega__card-subtitle' }, section.subtitle),
              React.createElement('span', { key: 'c', className: 'funky-mega__card-cta' }, [
                React.createElement('span', { key: 'l' }, 'Learn more'),
                React.createElement(Truck, { key: 'a', size: 12, weight: 'bold' })
              ])
            ])
          ]);
        })
      )
    ]);

    var content = React.createElement('div', {
      className: 'wp-mega-menu__content'
    }, [
      React.createElement('div', { key: 'orb1', className: 'funky-mega__orb funky-mega__orb--pink', style: { top: '-90px', right: '20%' } }),
      React.createElement('div', { key: 'orb2', className: 'funky-mega__orb funky-mega__orb--cyan', style: { bottom: '-50px', left: '10%' } }),
      React.createElement('div', { key: 'grid', className: 'funky-mega__inner funky-mega__inner--about' }, [
        React.cloneElement(leftColumn, { key: 'left' }),
        React.cloneElement(rightColumn, { key: 'right' })
      ])
    ]);

    return content;
  }

  return React.createElement(MegaMenuWrapper, {
    triggerLabel: 'About',
    triggerHref: '/about',
    renderContent: renderContent
  });
}