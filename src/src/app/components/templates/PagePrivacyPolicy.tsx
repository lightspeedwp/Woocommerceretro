import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as LegalContentDataModule from '../../data/legalContent';
import * as CompanyDataModule from '../../data/company';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var privacyPolicyContent = LegalContentDataModule.privacyPolicyContent;
var getHeadquarters = CompanyDataModule.getHeadquarters;
var privacyPolicyHero = HeroDataModule.privacyPolicyHero;

/**
 * PagePrivacyPolicy Template — Funky Redesign (Clean Funky)
 *
 * Compact gradient hero, long-form legal content with gradient dividers,
 * subtle commerce CTA. Readability-first.
 *
 * @route /privacy-policy
 */
export function PagePrivacyPolicy() {
  var headquarters = getHeadquarters();
  var email = (headquarters && headquarters.email) || 'privacy@wooshop.com';
  var content = privacyPolicyContent;
  var title = content.title;
  var lastUpdated = content.lastUpdated;
  var intro = content.intro;
  var sections = content.sections;

  return React.createElement(Layout, null,
    /* ── Hero (shared FunkyHero) ── */
    React.createElement(FunkyHero, { config: privacyPolicyHero },
      React.createElement('span', { className: "funky-hero__meta" }, "Last updated: ", lastUpdated)
    ),

    React.createElement('hr', { className: "funky-section__divider--subtle" }),

    React.createElement('section', { className: "legal-content" },
      React.createElement(Container, null,
        React.createElement('div', { className: "legal-content__inner funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--60)', marginTop: 'var(--wp--preset--spacing--60)', marginBottom: 'var(--wp--preset--spacing--60)' } },
          sections.map(function(section, i) {
            return React.createElement('div', { key: i, className: "legal-content__section", style: { marginBottom: 'var(--wp--preset--spacing--60)' } },
              React.createElement('h2', { className: "legal-content__heading funky-section__heading--gradient", style: { marginBottom: 'var(--wp--preset--spacing--20)' } }, section.heading),
              React.createElement('p', { className: "legal-content__text" }, section.content)
            );
          })
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider" }),

    React.createElement('section', { className: "legal-cta" },
      React.createElement(Container, null,
        React.createElement('div', { className: "legal-cta__content" },
          React.createElement('h2', { className: "legal-cta__heading" }, "Questions about our privacy practices?"),
          React.createElement('p', { className: "legal-cta__text" }, "Contact our privacy team at ", email, " or visit our Contact page."),
          React.createElement('div', { className: "legal-cta__actions" },
            React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary funky-spring-hover" }, "Contact Us")
          )
        )
      )
    )
  );
}