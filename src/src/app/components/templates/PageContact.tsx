import React from 'react';
import * as ReactRouterModule from 'react-router';
import { EnvelopeSimple, ChatCircle, Phone, MapPin } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as ContactDataModule from '../../data/contact';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var contactInfo = ContactDataModule.contactInfo;
var contactHero = HeroDataModule.contactHero;

/**
 * PageContact Template — Funky Redesign
 *
 * Contact page with purple hero, glassmorphism form, neon focus states,
 * glow detail cards, FAQ accordion, and commerce CTA.
 *
 * @route /contact
 */
export function PageContact() {
  return React.createElement(Layout, null,
    /* ── Hero (shared FunkyHero) ── */
    React.createElement(FunkyHero, { config: contactHero }),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── Contact Form + Info ── */
    React.createElement('section', { className: "info-contact" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-contact__layout" },
          /* Form */
          React.createElement('div', { className: "info-contact__form-wrap funky-glass-panel" },
            React.createElement('h2', { className: "info-contact__form-heading funky-section__heading--gradient" }, "Get in Touch"),
            React.createElement('form', { className: "info-contact__form", onSubmit: function(e) { e.preventDefault(); } },
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Name"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "Your name" })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Email"),
                React.createElement('input', { type: "email", className: "wp-block-input funky-input-glow", placeholder: "you@example.com" })
              ),
              React.createElement('div', { className: "wp-block-form-item" },
                React.createElement('label', { className: "wp-block-form-label" }, "Subject"),
                React.createElement('input', { type: "text", className: "wp-block-input funky-input-glow", placeholder: "How can we help?" })
              ),
              React.createElement('div', { className: "wp-block-form-item wp-mb-40" },
                React.createElement('label', { className: "wp-block-form-label" }, "Message"),
                React.createElement('textarea', { className: "wp-block-textarea funky-input-glow", placeholder: "Tell us more...", rows: 5 })
              ),
              React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button info-contact__submit funky-spring-hover" }, "Send Message")
            )
          ),

          /* Contact Details */
          React.createElement('div', { className: "info-contact__details" },
            React.createElement('div', { className: "info-contact__detail-card" },
              React.createElement('div', { className: "info-contact__detail-card-glow" }),
              React.createElement('div', { className: "info-contact__detail-card-inner" },
                React.createElement('span', { className: "info-contact__detail-icon" },
                  React.createElement(EnvelopeSimple, { size: 24, weight: 'duotone' })
                ),
                React.createElement('div', { className: "info-contact__detail-body" },
                  React.createElement('h3', { className: "info-contact__detail-title" }, "Email"),
                  React.createElement('a', { href: 'mailto:' + contactInfo.email, className: "info-contact__detail-link" }, contactInfo.email)
                )
              )
            ),
            React.createElement('div', { className: "info-contact__detail-card" },
              React.createElement('div', { className: "info-contact__detail-card-glow" }),
              React.createElement('div', { className: "info-contact__detail-card-inner" },
                React.createElement('span', { className: "info-contact__detail-icon" },
                  React.createElement(Phone, { size: 24, weight: 'duotone' })
                ),
                React.createElement('div', { className: "info-contact__detail-body" },
                  React.createElement('h3', { className: "info-contact__detail-title" }, "Phone"),
                  React.createElement('a', { href: 'tel:' + contactInfo.phone, className: "info-contact__detail-link" }, contactInfo.phone),
                  React.createElement('p', { className: "info-contact__detail-desc" }, contactInfo.hours)
                )
              )
            ),
            React.createElement('div', { className: "info-contact__detail-card" },
              React.createElement('div', { className: "info-contact__detail-card-glow" }),
              React.createElement('div', { className: "info-contact__detail-card-inner" },
                React.createElement('span', { className: "info-contact__detail-icon" },
                  React.createElement(MapPin, { size: 24, weight: 'duotone' })
                ),
                React.createElement('div', { className: "info-contact__detail-body" },
                  React.createElement('h3', { className: "info-contact__detail-title" }, "HQ"),
                  React.createElement('p', { className: "info-contact__detail-desc" }, contactInfo.address)
                )
              )
            )
          )
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── CTA ── */
    React.createElement('section', { className: "info-cta" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-cta__content" },
          React.createElement(ChatCircle, { size: 48, weight: 'duotone', className: "info-cta__icon" }),
          React.createElement('h2', { className: "info-cta__heading" }, "Need Immediate Help?"),
          React.createElement('p', { className: "info-cta__text" }, "Check our FAQ or start a live chat for instant support."),
          React.createElement('div', { className: "info-cta__actions" },
            React.createElement(Link, { to: "/faq", className: "info-cta__btn--primary funky-spring-hover" }, "Browse FAQ"),
            React.createElement(Link, { to: "/chat", className: "info-cta__btn--secondary funky-spring-hover" }, "Live Chat")
          )
        )
      ),
      React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
      React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
    )
  );
}