import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ArrowUUpLeft, MagnifyingGlass, CheckCircle } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as ReturnsPortalDataModule from '../../data/returnsPortal';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var returnSteps = ReturnsPortalDataModule.returnSteps;
var returnHighlights = ReturnsPortalDataModule.returnHighlights;
var returnsPortalPageContent = ReturnsPortalDataModule.returnsPortalPageContent;
var returnsPortalHero = HeroDataModule.returnsPortalHero;

/**
 * PageReturnsPortal Template — Funky Redesign (Clean Funky)
 *
 * Self-service returns with glassmorphism form, gradient step numbers,
 * neon focus states. Conversion-focused.
 *
 * @route /returns
 */
export function PageReturnsPortal() {
  var orderState = React.useState('');
  var orderNumber = orderState[0];
  var setOrderNumber = orderState[1];
  var emailState = React.useState('');
  var email = emailState[0];
  var setEmail = emailState[1];

  return React.createElement(Layout, null,
    /* ── Hero (shared FunkyHero) ── */
    React.createElement(FunkyHero, { config: returnsPortalHero }),

    React.createElement('hr', { className: "funky-section__divider--subtle" }),

    /* Lookup Form */
    React.createElement('section', { className: "legal-form-section" },
      React.createElement(Container, null,
        React.createElement('div', { className: "legal-form-card funky-glass-panel", style: { maxWidth: '600px', margin: '0 auto', padding: 'var(--wp--preset--spacing--60)', marginTop: 'calc(-1 * var(--wp--preset--spacing--60))', position: 'relative', zIndex: 10 } },
          React.createElement(ArrowUUpLeft, { size: 32, weight: 'duotone', className: "legal-form-card__icon", style: { color: 'var(--wp--preset--color--neon-cyan)', marginBottom: 'var(--wp--preset--spacing--30)' } }),
          React.createElement('h2', { className: "legal-form-card__title funky-section__heading--gradient" }, returnsPortalPageContent.startReturnHeading),
          React.createElement('p', { className: "legal-form-card__text", style: { marginBottom: 'var(--wp--preset--spacing--40)', color: 'var(--wp--preset--color--muted-foreground)' } }, returnsPortalPageContent.startReturnText),
          React.createElement('form', { className: "legal-form wp-block-form", onSubmit: function(e) { e.preventDefault(); } },
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              React.createElement('label', { htmlFor: "order-number", className: "wp-block-label" }, "Order Number"),
              React.createElement('input', {
                id: "order-number",
                type: "text",
                className: "wp-block-input funky-input-glow",
                placeholder: "e.g., ORD-12345",
                value: orderNumber,
                onChange: function(e) { setOrderNumber(e.target.value); }
              })
            ),
            React.createElement('div', { className: "wp-block-form-item", style: { marginBottom: 'var(--wp--preset--spacing--40)' } },
              React.createElement('label', { htmlFor: "order-email", className: "wp-block-label" }, "Email Address"),
              React.createElement('input', {
                id: "order-email",
                type: "email",
                className: "wp-block-input funky-input-glow",
                placeholder: "you@example.com",
                value: email,
                onChange: function(e) { setEmail(e.target.value); }
              })
            ),
            React.createElement('button', { type: "submit", className: "legal-form__submit wp-block-button__link wp-element-button funky-spring-hover", style: { width: '100%', background: 'linear-gradient(135deg, var(--wp--preset--color--neon-pink), var(--wp--preset--color--neon-cyan))', color: '#000', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--wp--preset--spacing--10)' } },
              React.createElement(MagnifyingGlass, { size: 16, weight: 'bold' }), " Find My Order"
            )
          )
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider--subtle" }),

    /* Steps */
    React.createElement('section', { className: "legal-steps legal-steps--alt", style: { padding: 'var(--wp--preset--spacing--80) 0' } },
      React.createElement(Container, null,
        React.createElement('div', { className: "legal-steps__content" },
          React.createElement('h2', { className: "legal-steps__heading legal-steps__heading--center funky-section__heading--gradient", style: { textAlign: 'center', marginBottom: 'var(--wp--preset--spacing--60)' } }, returnsPortalPageContent.howItWorksHeading),
          React.createElement('div', { className: "legal-steps__list legal-steps__list--horizontal", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--wp--preset--spacing--40)' } },
            returnSteps.map(function(step, i) {
              return React.createElement('div', { key: i, className: "legal-steps__item funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--40)', textAlign: 'center' } },
                React.createElement('span', { className: "legal-steps__number", style: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--wp--preset--color--neon-pink), var(--wp--preset--color--neon-cyan))', color: '#000', fontWeight: 'bold', fontSize: 'var(--wp--preset--font-size--large)', marginBottom: 'var(--wp--preset--spacing--30)' } }, step.step),
                React.createElement('h3', { className: "legal-steps__item-title", style: { marginBottom: 'var(--wp--preset--spacing--20)' } }, step.title),
                React.createElement('p', { className: "legal-steps__item-text", style: { color: 'var(--wp--preset--color--muted-foreground)' } }, step.description)
              );
            })
          )
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider--subtle" }),

    /* Policy Highlights */
    React.createElement('section', { className: "legal-steps", style: { padding: 'var(--wp--preset--spacing--80) 0' } },
      React.createElement(Container, null,
        React.createElement('div', { className: "legal-cards__content legal-cards__content--md-gap", style: { maxWidth: '800px', margin: '0 auto' } },
          React.createElement('h2', { className: "legal-steps__heading funky-section__heading--gradient", style: { marginBottom: 'var(--wp--preset--spacing--40)' } }, returnsPortalPageContent.policyHighlightsHeading),
          React.createElement('div', { className: "legal-checklist", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--30)' } },
            returnHighlights.map(function(highlight, i) {
              return React.createElement('div', { key: i, className: "legal-checklist__item", style: { display: 'flex', alignItems: 'flex-start', gap: 'var(--wp--preset--spacing--20)' } },
                React.createElement(CheckCircle, { size: 24, weight: 'duotone', className: "legal-checklist__icon", style: { color: 'var(--wp--preset--color--neon-lime)', flexShrink: 0 } }),
                React.createElement('span', { style: { fontSize: 'var(--wp--preset--font-size--large)' } }, highlight.text)
              );
            })
          ),
          React.createElement(Link, { to: "/shipping-returns", className: "legal-cards__link-arrow legal-cards__link-arrow--start funky-spring-hover", style: { display: 'inline-flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)', color: 'var(--wp--preset--color--neon-cyan)', textDecoration: 'none', fontWeight: 'bold', marginTop: 'var(--wp--preset--spacing--40)' } },
            "View full return policy",
            React.createElement(ArrowUUpLeft, { size: 16, weight: 'bold', style: { transform: 'scaleX(-1)' } })
          )
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider" }),

    React.createElement('section', { className: "legal-cta" },
      React.createElement(Container, null,
        React.createElement('div', { className: "legal-cta__content" },
          React.createElement('h2', { className: "legal-cta__heading" }, returnsPortalPageContent.ctaHeading),
          React.createElement('p', { className: "legal-cta__text" }, returnsPortalPageContent.ctaText),
          React.createElement('div', { className: "legal-cta__actions" },
            React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary funky-spring-hover" }, returnsPortalPageContent.ctaButton)
          )
        )
      )
    )
  );
}

export default PageReturnsPortal;