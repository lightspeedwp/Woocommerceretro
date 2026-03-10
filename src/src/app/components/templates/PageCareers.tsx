import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Briefcase, Heart, Coffee, Globe, GraduationCap, Users, MapPin, Clock } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as CareersDataModule from '../../data/careers';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var careerBenefits = CareersDataModule.careerBenefits;
var openPositions = CareersDataModule.openPositions;
var careersPageContent = CareersDataModule.careersPageContent;
var careersHero = HeroDataModule.careersHero;

/** @type {Record<string, React.ComponentType<any>>} */
var benefitIcons = {
  'health': Heart,
  'flexible': Coffee,
  'learning': GraduationCap,
  'pto': Globe,
  'discount': Users,
  'equity': Briefcase,
};

/**
 * PageCareers Template — Funky Redesign
 *
 * Careers page with hero, glow benefit cards, positions list
 * with hover glow, and commerce CTA.
 *
 * @route /about/careers
 */
export function PageCareers() {
  return React.createElement(Layout, null,
    /* ── Hero (shared FunkyHero) ── */
    React.createElement(FunkyHero, { config: careersHero }),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── Benefits ── */
    React.createElement('section', { className: "info-cards", style: { padding: 'var(--wp--preset--spacing--80) 0' } },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-cards__content info-cards__content--lg" },
          React.createElement('h2', { className: "info-cards__heading funky-section__heading--gradient", style: { textAlign: 'center', marginBottom: 'var(--wp--preset--spacing--60)' } },
            careersPageContent.benefitsHeading
          ),
          React.createElement('div', { className: "info-cards__grid", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--wp--preset--spacing--40)' } },
            careerBenefits.map(function(benefit) {
              var Icon = benefitIcons[benefit.id] || Heart;
              return React.createElement('div', { key: benefit.id, className: "info-cards__card funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--50)' } },
                React.createElement('div', { className: "info-cards__card-inner" },
                  React.createElement('span', { className: "info-cards__icon-circle", style: { display: 'inline-flex', width: '48px', height: '48px', borderRadius: '50%', background: 'var(--wp--preset--color--neon-cyan)', color: '#000', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--wp--preset--spacing--30)' } },
                    React.createElement(Icon, { size: 24, weight: "duotone" })
                  ),
                  React.createElement('h3', { className: "info-cards__card-title", style: { marginBottom: 'var(--wp--preset--spacing--20)' } }, benefit.title),
                  React.createElement('p', { className: "info-cards__card-text", style: { color: 'var(--wp--preset--color--muted-foreground)' } }, benefit.description)
                )
              );
            })
          )
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider--subtle" }),

    /* ── Open Positions ── */
    React.createElement('section', { className: "info-positions", style: { padding: 'var(--wp--preset--spacing--80) 0' } },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-positions__content" },
          React.createElement('h2', { className: "info-positions__heading", style: { textAlign: 'center' } }, careersPageContent.positionsHeading),
          React.createElement('p', { className: "info-positions__subheading", style: { textAlign: 'center', marginBottom: 'var(--wp--preset--spacing--60)', color: 'var(--wp--preset--color--muted-foreground)' } }, careersPageContent.positionsText),
          React.createElement('div', { className: "info-positions__list", style: { display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--30)', maxWidth: '800px', margin: '0 auto' } },
            openPositions.map(function(position) {
              return React.createElement('div', { key: position.id, className: "info-positions__card funky-glass-panel funky-spring-hover", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--wp--preset--spacing--40)', flexWrap: 'wrap', gap: 'var(--wp--preset--spacing--30)' } },
                React.createElement('div', { className: "info-positions__card-body" },
                  React.createElement('h3', { className: "info-positions__title", style: { marginBottom: 'var(--wp--preset--spacing--10)' } }, position.title),
                  React.createElement('div', { className: "info-positions__meta", style: { display: 'flex', gap: 'var(--wp--preset--spacing--20)', color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)' } },
                    React.createElement('span', { className: "info-positions__tag", style: { display: 'inline-flex', alignItems: 'center', gap: '4px' } },
                      React.createElement(Briefcase, { size: 14, weight: "duotone" }), " ", position.department
                    ),
                    React.createElement('span', { className: "info-positions__tag", style: { display: 'inline-flex', alignItems: 'center', gap: '4px' } },
                      React.createElement(MapPin, { size: 14, weight: "duotone" }), " ", position.location
                    ),
                    React.createElement('span', { className: "info-positions__tag", style: { display: 'inline-flex', alignItems: 'center', gap: '4px' } },
                      React.createElement(Clock, { size: 14, weight: "duotone" }), " ", position.type
                    )
                  )
                ),
                React.createElement('button', { className: "info-positions__apply wp-block-button__link wp-element-button funky-spring-hover" }, "Apply")
              );
            })
          )
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── CTA ── */
    React.createElement('section', { className: "info-cta" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-cta__content" },
          React.createElement('h2', { className: "info-cta__heading" }, careersPageContent.ctaHeading),
          React.createElement('p', { className: "info-cta__text" }, careersPageContent.ctaText),
          React.createElement('div', { className: "info-cta__actions" },
            React.createElement(Link, { to: "/contact", className: "info-cta__btn--primary funky-spring-hover" }, careersPageContent.ctaButton)
          )
        )
      ),
      React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
      React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
    )
  );
}

export default PageCareers;