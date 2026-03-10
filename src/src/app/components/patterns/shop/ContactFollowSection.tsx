import React from 'react';
import * as ContainerModule from '../../common/Container';
import * as TypographyModule from '../../common/Typography';
import { InstagramLogo as Instagram, FacebookLogo as Facebook, TwitterLogo as Twitter, Envelope as Mail, Phone } from '@phosphor-icons/react';

var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;

/**
 * ContactFollowSection Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function ContactFollowSection(props) {
  var className = props.className || '';

  var socialLinks = React.createElement('div', { key: 'social', className: "wp-contact-follow__social-links" }, [
    React.createElement('a', { key: 'ig', href: "https://instagram.com/kwvwines", 'aria-label': "Instagram", className: "wp-contact-follow__social-icon" }, 
      React.createElement(Instagram, { size: 20 })
    ),
    React.createElement('a', { key: 'fb', href: "https://facebook.com/KWVwines", 'aria-label': "Facebook", className: "wp-contact-follow__social-icon" }, 
      React.createElement(Facebook, { size: 20 })
    ),
    React.createElement('a', { key: 'tw', href: "https://twitter.com/KWVwines", 'aria-label': "Twitter", className: "wp-contact-follow__social-icon" }, 
      React.createElement(Twitter, { size: 20 })
    )
  ]);

  var contactRow = React.createElement('div', { key: 'contact', className: "wp-contact-follow__contact-row" }, [
    React.createElement('div', { key: 'mail', className: "wp-contact-follow__contact-item" }, [
      React.createElement(Mail, { key: 'i', className: "wp-contact-follow__contact-icon", size: 20 }),
      React.createElement('a', { key: 'l', href: "mailto:sales@kwv.co.za", className: "wp-contact-follow__contact-link" }, "sales@kwv.co.za")
    ]),
    React.createElement('div', { key: 'phone', className: "wp-contact-follow__contact-item" }, [
      React.createElement(Phone, { key: 'i', className: "wp-contact-follow__contact-icon", size: 20 }),
      React.createElement('a', { key: 'l', href: "tel:0218073007", className: "wp-contact-follow__contact-link" }, "021 807 3007")
    ])
  ]);

  var inner = React.createElement('div', { className: "wp-contact-follow__inner" }, [
    React.createElement(Typography, { key: 'h', variant: "h3", className: "wp-contact-follow__heading" }, "Follow Us & Get In Touch"),
    socialLinks,
    contactRow
  ]);

  return React.createElement('section', { className: "wp-contact-follow " + className }, 
    React.createElement(Container, { variant: "site" }, inner)
  );
}