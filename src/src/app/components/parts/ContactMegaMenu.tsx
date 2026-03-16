/**
 * ContactMegaMenu - Funky Redesign
 * Contact method cards + support links + hours banner.
 * Glassmorphism, neon gradient borders, Phosphor icons.
 */
import React from 'react';
import { Link } from 'react-router';
import { EnvelopeSimple, Phone, ChatCircleDots, ArrowRight, Question, MapPin, Clock, Truck } from '../../utils/phosphor-compat';
import { MegaMenuWrapper } from './MegaMenuWrapper';

interface ContactMethod {
  title: string;
  desc: string;
  detail: string;
  href: string;
  iconVariant: string;
  IconComponent: React.ElementType;
  badge?: string;
}

const contactMethods: ContactMethod[] = [
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

const supportLinks = [
  { title: 'Help Center', href: '/help', Icon: Question, desc: 'Browse articles and guides' },
  { title: 'FAQ', href: '/faq', Icon: Question, desc: 'Common questions answered' },
  { title: 'Store Locator', href: '/stores', Icon: MapPin, desc: 'Find a store near you' },
  { title: 'Shipping Info', href: '/shipping-returns', Icon: Truck, desc: 'Delivery times and rates' }
];

export const ContactMegaMenu = () => {
  const renderContent = (closeMenu: () => void) => {
    return (
      <div className="wp-mega-menu__content">
        <div className="funky-mega__orb funky-mega__orb--cyan funky-mega__orb--contact-cyan" />
        <div className="funky-mega__orb funky-mega__orb--pink funky-mega__orb--contact-pink" />
        <div className="funky-mega__inner funky-mega__inner--contact">
          {/* Contact method cards */}
          <div className="funky-mega__contact-row">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.href} className="funky-mega__contact-card">
                <div className={`funky-mega__contact-icon funky-mega__contact-icon--${method.iconVariant}`}>
                  <method.IconComponent size={24} weight="duotone" />
                </div>
                <div className="funky-mega__contact-text">
                  <span className="funky-mega__contact-name">
                    <span>{method.title}</span>
                    {method.badge && (
                      <span
                        className={`funky-mega__badge funky-mega__badge--${method.badge} funky-mega__external-icon`}
                      >
                        Online
                      </span>
                    )}
                  </span>
                  <span className="funky-mega__contact-desc">{method.desc}</span>
                  <span className="funky-mega__contact-detail">{method.detail}</span>
                </div>
                <span className="funky-mega__contact-arrow">
                  <ArrowRight size={18} weight="bold" />
                </span>
              </a>
            ))}
          </div>

          {/* Support links grid */}
          <div className="funky-mega__contact-padding">
            <h4 className="funky-mega__title">Quick Links</h4>
            <div className="funky-mega__support-grid">
              {supportLinks.map((link) => (
                <Link key={link.title} to={link.href} className="funky-mega__link">
                  <span className="funky-mega__link-icon">
                    <link.Icon size={16} weight="duotone" />
                  </span>
                  <span className="funky-mega__link-text">
                    <span className="funky-mega__link-label">{link.title}</span>
                    <span className="funky-mega__link-desc">{link.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hours info banner */}
        <div className="funky-mega__info-banner">
          <span className="funky-mega__info-icon">
            <Clock size={16} weight="duotone" />
          </span>
          <span>
            Support Hours: Monday - Friday 9:00 AM - 6:00 PM EST | Saturday 10:00 AM - 4:00 PM EST
          </span>
        </div>
      </div>
    );
  };

  return (
    <MegaMenuWrapper
      triggerLabel="Contact"
      triggerHref="/contact"
      renderContent={renderContent}
    />
  );
}