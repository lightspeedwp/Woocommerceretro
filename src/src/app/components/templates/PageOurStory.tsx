import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Heart, Globe, Users, Medal as Award } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as OurStoryDataModule from '../../data/ourStory';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var storyMilestones = OurStoryDataModule.storyMilestones;
var storyValues = OurStoryDataModule.storyValues;
var ourStoryPageContent = OurStoryDataModule.ourStoryPageContent;
var ourStoryHero = HeroDataModule.ourStoryHero;

var valueIcons = {
  'Heart': Heart,
  'Globe': Globe,
  'Users': Users,
  'Award': Award,
};

/**
 * PageOurStory Template — Funky Redesign
 *
 * Company origin story with navy hero, gradient timeline connector,
 * glow value cards, and commerce CTA.
 *
 * @route /about/our-story
 */
export function PageOurStory() {
  return (
    React.createElement(Layout, null,
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: ourStoryHero }),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* Mission */
      React.createElement('section', { className: "info-story" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-story__content" },
            React.createElement('h2', { className: "info-story__title funky-section__heading--gradient" },
              ourStoryPageContent.missionHeading
            ),
            React.createElement('p', { className: "info-story__text info-story__text--lg" },
              ourStoryPageContent.missionText
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Values */
      React.createElement('section', { className: "info-cards info-cards--alt" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-cards__content info-cards__content--lg" },
            React.createElement('h2', { className: "info-cards__heading" }, ourStoryPageContent.valuesHeading),
            React.createElement('div', { className: "info-cards__grid info-cards__grid--2col" },
              storyValues.map(function(value, i) {
                var Icon = valueIcons[value.icon] || Heart;
                return (
                  React.createElement('div', { key: i, className: "info-cards__card" },
                    React.createElement('div', { className: "info-cards__card-glow" }),
                    React.createElement('div', { className: "info-cards__card-inner" },
                      React.createElement('span', { className: "info-cards__icon-circle" },
                        React.createElement(Icon, { size: 22 })
                      ),
                      React.createElement('h3', { className: "info-cards__card-title" }, value.title),
                      React.createElement('p', { className: "info-cards__card-text" }, value.description)
                    )
                  )
                );
              })
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* Timeline */
      React.createElement('section', { className: "info-timeline" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-timeline__content" },
            React.createElement('h2', { className: "info-timeline__heading funky-section__heading--gradient" },
              ourStoryPageContent.journeyHeading
            ),
            React.createElement('div', { className: "info-timeline__list" },
              storyMilestones.map(function(milestone, i) { return (
                React.createElement('div', { key: i, className: "info-timeline__item" },
                  React.createElement('div', { className: "info-timeline__marker" }),
                  React.createElement('div', { className: "info-timeline__item-body" },
                    React.createElement('span', { className: "info-timeline__year" }, milestone.year),
                    React.createElement('h3', { className: "info-timeline__title" }, milestone.title),
                    React.createElement('p', { className: "info-timeline__text" }, milestone.description)
                  )
                )
              )})
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      /* CTA */
      React.createElement('section', { className: "info-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "info-cta__content" },
            React.createElement('h2', { className: "info-cta__heading" }, ourStoryPageContent.ctaHeading),
            React.createElement('p', { className: "info-cta__text" }, ourStoryPageContent.ctaText),
            React.createElement('div', { className: "info-cta__actions" },
              React.createElement(Link, { to: "/shop", className: "info-cta__btn--primary" }, ourStoryPageContent.ctaButtonPrimary),
              React.createElement(Link, { to: "/about/team", className: "info-cta__btn--secondary" }, ourStoryPageContent.ctaButtonSecondary)
            )
          )
        ),
        React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
        React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
      )
    )
  );
}
