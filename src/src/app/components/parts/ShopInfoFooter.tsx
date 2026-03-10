import React from 'react';
import * as TypographyModule from '../common/Typography';
import { FacebookLogo as Facebook, InstagramLogo as Instagram, TwitterLogo as Twitter } from '@phosphor-icons/react';
import * as LogoModule from '../common/Logo';

var Typography = TypographyModule.Typography;
var KWVShopLogo = LogoModule.KWVShopLogo;

/**
 * ShopInfoFooter Component
 * 
 * A specialized footer section for the Shop layout.
 * Features:
 * - Three-column layout:
 *   1. Contact Info & Social Links (Dark background).
 *   2. Service Value Propositions (Gold background).
 *   3. Interactive Map.
 * - Payment method icons strip at the bottom.
 * 
 * Styles: /src/styles/sections/shop-info-footer.css
 */
export function ShopInfoFooter() {
  return React.createElement('div', { className: 'wp-shop-info-footer' },
    React.createElement('div', { className: 'wp-shop-info-footer__columns' },
      React.createElement('div', { className: 'wp-shop-info-footer__column--contact' },
        React.createElement('div', { className: 'wp-shop-info-footer__contact-block' },
          React.createElement(Typography, { variant: 'h4', className: 'wp-shop-info-footer__heading' }, 'Contact Us'),
          React.createElement('p', { className: 'wp-shop-info-footer__text' },
            'Tel: 021 807 3007/8', React.createElement('br', null),
            'Email: info@kwvemporium.co.za', React.createElement('br', null),
            'GPS: 33°45\'45.17" S, 18°57\'58.42" E'
          )
        ),
        React.createElement('div', { className: 'wp-shop-info-footer__social-block' },
          React.createElement(Typography, { variant: 'h4', className: 'wp-shop-info-footer__heading' }, 'Follow Us'),
          React.createElement('div', { className: 'wp-shop-info-footer__social-icons' },
            React.createElement(Facebook, { className: 'wp-shop-info-footer__social-icon', size: 20 }),
            React.createElement(Instagram, { className: 'wp-shop-info-footer__social-icon', size: 20 }),
            React.createElement(Twitter, { className: 'wp-shop-info-footer__social-icon', size: 20 })
          )
        )
      ),
      React.createElement('div', { className: 'wp-shop-info-footer__column--services' },
        React.createElement(Typography, { variant: 'h4', className: 'wp-shop-info-footer__services-heading' }, 'Our Excellent Service Includes'),
        React.createElement('ul', { className: 'wp-shop-info-footer__list' },
          React.createElement('li', null, 'Delivery within 3 Working days'),
          React.createElement('li', null, 'Safe & Secure'),
          React.createElement('li', null, '3 ways to pay'),
          React.createElement('li', null, 'Affordable Delivery Fee'),
          React.createElement('li', null, 'Click & Collect after 72 hours')
        )
      ),
      React.createElement('div', { className: 'wp-shop-info-footer__column--map' },
        React.createElement('iframe', {
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.107693214865!2d18.96402331520387!3d-33.76801668068368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdadcf7a06a71d%3A0x521940687263680!2sKWV%20Emporium!5e0!3m2!1sen!2sza!4v1625000000000!5m2!1sen!2sza',
          width: '100%',
          height: '100%',
          allowFullScreen: false,
          loading: 'lazy',
          className: 'wp-shop-info-footer__map-iframe',
          title: 'KWV Map'
        })
      )
    ),
    React.createElement('div', { className: 'wp-shop-info-footer__payment-strip' },
      React.createElement('div', { className: 'wp-shop-info-footer__payment-logo' },
        React.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png', alt: 'Visa' })
      ),
      React.createElement('div', { className: 'wp-shop-info-footer__payment-logo' },
        React.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png', alt: 'Mastercard' })
      ),
      React.createElement('div', { className: 'wp-shop-info-footer__payment-brand wp-shop-info-footer__payment-brand--payfast' },
        React.createElement('span', null, 'PayFast')
      ),
      React.createElement('div', { className: 'wp-shop-info-footer__payment-brand wp-shop-info-footer__payment-brand--snapscan' },
        React.createElement('span', null, 'SnapScan')
      )
    )
  );
};