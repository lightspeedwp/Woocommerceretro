import React from 'react';
import * as ReactRouterModule from 'react-router';
import { DownloadSimple as Download, Camera, Envelope as Mail, ArrowRight } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as PressMediaDataModule from '../../data/pressMedia';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var pressReleases = PressMediaDataModule.pressReleases;
var mediaKitItems = PressMediaDataModule.mediaKitItems;
var pressMediaPageContent = PressMediaDataModule.pressMediaPageContent;
var pressHero = HeroDataModule.pressHero;

/**
 * PagePressMedia Template — Funky Redesign
 *
 * Press page with hero, press release list with hover glow,
 * media kit items, and commerce CTA.
 *
 * @route /press
 */
export function PagePressMedia() {
  return (
    React.createElement(Layout, null,
      React.createElement(FunkyHero, { config: pressHero }),

      React.createElement('hr', { className: "funky-section__divider" }),

      React.createElement('section', { className: "info-press" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-press__content" },
            React.createElement('h2', { className: "info-press__heading funky-section__heading--gradient" },
              pressMediaPageContent.releasesHeading
            ),
            React.createElement('div', { className: "info-press__list" },
              pressReleases.map(function(release, i) { return (
                React.createElement('article', { key: i, className: "info-press__item" },
                  React.createElement('span', { className: "info-press__date" }, release.date),
                  React.createElement('h3', { className: "info-press__title" }, release.title),
                  React.createElement('p', { className: "info-press__excerpt" }, release.excerpt),
                  React.createElement('button', { className: "info-press__link" },
                    "Read Full Release ", React.createElement(ArrowRight, { size: 14 })
                  )
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "info-media-kit" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-media-kit__content" },
            React.createElement('h2', { className: "info-media-kit__heading" }, pressMediaPageContent.mediaKitHeading),
            React.createElement('p', { className: "info-media-kit__subheading" }, pressMediaPageContent.mediaKitText),
            React.createElement('div', { className: "info-media-kit__list" },
              mediaKitItems.map(function(item, i) { return (
                React.createElement('div', { key: i, className: "info-media-kit__item" },
                  React.createElement('div', { className: "info-media-kit__item-info" },
                    React.createElement(Camera, { size: 20, className: "info-media-kit__item-icon" }),
                    React.createElement('div', { className: "info-media-kit__item-body" },
                      React.createElement('h4', { className: "info-media-kit__item-title" }, item.title),
                      React.createElement('p', { className: "info-media-kit__item-desc" }, item.description)
                    )
                  ),
                  React.createElement('button', { className: "info-positions__apply" },
                    React.createElement(Download, { size: 12 }), " ", item.type
                  )
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      React.createElement('section', { className: "info-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-cta__content" },
            React.createElement(Mail, { size: 32, className: "info-cta__icon" }),
            React.createElement('h2', { className: "info-cta__heading" }, pressMediaPageContent.ctaHeading),
            React.createElement('p', { className: "info-cta__text" }, pressMediaPageContent.ctaText),
            React.createElement('div', { className: "info-cta__actions" },
              React.createElement('a', { href: "mailto:press@example.com", className: "info-cta__btn--primary" }, pressMediaPageContent.ctaButtonPrimary),
              React.createElement(Link, { to: "/contact", className: "info-cta__btn--secondary" }, pressMediaPageContent.ctaButtonSecondary)
            )
          )
        ),
        React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
        React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
      )
    )
  );
}
