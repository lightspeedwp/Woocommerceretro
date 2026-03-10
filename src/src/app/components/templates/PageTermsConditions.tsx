import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as LegalContentDataModule from '../../data/legalContent';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var termsContent = LegalContentDataModule.termsContent;
var termsConditionsHero = HeroDataModule.termsConditionsHero;

/**
 * PageTermsConditions Template — Funky Redesign (Clean Funky)
 *
 * @route /terms-and-conditions
 */
export function PageTermsConditions() {
  var tc = termsContent;
  var title = tc.title;
  var lastUpdated = tc.lastUpdated;
  var intro = tc.intro;
  var sections = tc.sections;

  return React.createElement(Layout, null,
    /* ── Hero (shared FunkyHero) ── */
    React.createElement(FunkyHero, { config: termsConditionsHero },
      React.createElement('span', { className: "funky-hero__meta" }, "Last updated: ", lastUpdated)
    ),

    React.createElement('hr', { className: "funky-section__divider--subtle" }),

    React.createElement('section', { className: "legal-content" },
      React.createElement(Container, null,
        React.createElement('div', { className: "legal-content__inner funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--60)', marginTop: 'var(--wp--preset--spacing--60)', marginBottom: 'var(--wp--preset--spacing--60)' } },
          sections.map(function(section, i) {
            return React.createElement('div', { key: i, className: "legal-content__section", id: section.id, style: { marginBottom: 'var(--wp--preset--spacing--60)' } },
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
          React.createElement('h2', { className: "legal-cta__heading" }, "Questions about these terms?"),
          React.createElement('p', { className: "legal-cta__text" }, "If you have any questions, please contact our legal team."),
          React.createElement('div', { className: "legal-cta__actions" },
            React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary funky-spring-hover" }, "Contact Us"),
            React.createElement(Link, { to: "/privacy-policy", className: "legal-cta__btn--secondary funky-spring-hover" }, "Privacy Policy")
          )
        )
      )
    )
  );
}