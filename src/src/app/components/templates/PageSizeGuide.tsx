import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Ruler, Info } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as SizeGuideDataModule from '../../data/sizeGuide';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var sizeData = SizeGuideDataModule.sizeData;
var categoryLabels = SizeGuideDataModule.categoryLabels;
var measurementInstructions = SizeGuideDataModule.measurementInstructions;
var sizeGuidePageContent = SizeGuideDataModule.sizeGuidePageContent;
var sizeGuideHero = HeroDataModule.sizeGuideHero;

/**
 * PageSizeGuide Template — Funky Redesign (Clean Funky)
 *
 * @route /size-guide
 */
export function PageSizeGuide() {
  var catState = React.useState('tops');
  var activeCategory = catState[0];
  var setActiveCategory = catState[1];

  return (
    React.createElement(Layout, null,
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: sizeGuideHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* How to Measure */
      React.createElement('section', { className: "legal-cards" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content" },
            React.createElement('h2', { className: "legal-cards__heading" }, sizeGuidePageContent.measureHeading),
            React.createElement('div', { className: "legal-cards__grid" },
              measurementInstructions.map(function(item, i) { return (
                React.createElement('div', { key: i, className: "legal-cards__card" },
                  React.createElement('span', { className: "legal-cards__icon" }, React.createElement(Ruler, { size: 20 })),
                  React.createElement('h3', { className: "legal-cards__card-title" }, item.title),
                  React.createElement('p', { className: "legal-cards__card-text" }, item.description)
                )
              ); })
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      /* Size Charts */
      React.createElement('section', { className: "legal-table-section" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--wide" },
            React.createElement('h2', { className: "legal-cards__heading" }, sizeGuidePageContent.chartsHeading),

            React.createElement('div', { className: "legal-tabs", role: "tablist" },
              Object.keys(sizeData).map(function(cat) { return (
                React.createElement('button', {
                  key: cat,
                  role: "tab",
                  "aria-selected": activeCategory === cat,
                  className: 'legal-tab' + (activeCategory === cat ? ' legal-tab--active' : ''),
                  onClick: function() { setActiveCategory(cat); }
                }, categoryLabels[cat])
              ); })
            ),

            React.createElement('div', { className: "legal-table-wrap", role: "tabpanel" },
              React.createElement('table', { className: "legal-table" },
                React.createElement('thead', null,
                  React.createElement('tr', null,
                    sizeData[activeCategory].headers.map(function(header, i) { return (
                      React.createElement('th', { key: i, className: "legal-table__header" }, header)
                    ); })
                  )
                ),
                React.createElement('tbody', null,
                  sizeData[activeCategory].rows.map(function(row, rowIndex) { return (
                    React.createElement('tr', { key: rowIndex, className: "legal-table__row" },
                      row.map(function(cell, cellIndex) { return (
                        React.createElement('td', { key: cellIndex, className: "legal-table__cell" }, cell)
                      ); })
                    )
                  ); })
                )
              )
            ),

            React.createElement('div', { className: "legal-info-banner" },
              React.createElement(Info, { size: 18, className: "legal-info-banner__icon" }),
              React.createElement('span', null, sizeGuidePageContent.fitTip)
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider" }),

      React.createElement('section', { className: "legal-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cta__content" },
            React.createElement('h2', { className: "legal-cta__heading" }, sizeGuidePageContent.ctaHeading),
            React.createElement('p', { className: "legal-cta__text" }, sizeGuidePageContent.ctaText),
            React.createElement('div', { className: "legal-cta__actions" },
              React.createElement(Link, { to: "/contact", className: "legal-cta__btn--primary" }, sizeGuidePageContent.ctaButton)
            )
          )
        )
      )
    )
  );
}
