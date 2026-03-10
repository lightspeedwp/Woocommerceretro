import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Question as HelpCircle, Package, Truck, ArrowCounterClockwise as RotateCcw, CreditCard, User, ChatCircle as MessageCircle, Phone, Envelope as Mail, BookOpen, Lifebuoy as LifeBuoy } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as HelpCenterDataModule from '../../data/helpCenter';
import * as CompanyDataModule from '../../data/company';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var helpCategories = HelpCenterDataModule.helpCategories;
var popularArticles = HelpCenterDataModule.popularArticles;
var helpCenterPageContent = HelpCenterDataModule.helpCenterPageContent;
var getHeadquarters = CompanyDataModule.getHeadquarters;
var helpCenterHero = HeroDataModule.helpCenterHero;

var categoryIcons = {
  'Package': Package,
  'Truck': Truck,
  'RotateCcw': RotateCcw,
  'CreditCard': CreditCard,
  'User': User,
  'HelpCircle': HelpCircle,
};

/**
 * PageHelpCenter Template
 * @route /help
 */
export function PageHelpCenter() {
  var headquarters = getHeadquarters();
  var phone = (headquarters && headquarters.phone) || '1-800-555-0199';
  var email = (headquarters && headquarters.email) || 'support@wooshop.com';

  return (
    React.createElement(Layout, null,
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: helpCenterHero }),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-cards" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--centered" },
            React.createElement('h2', { className: "legal-cards__heading funky-section__heading--gradient" },
              helpCenterPageContent.categoriesHeading
            ),
            React.createElement('div', { className: "legal-cards__grid legal-cards__grid--3col" },
              helpCategories.map(function(category, i) {
                var Icon = categoryIcons[category.icon] || HelpCircle;
                return (
                  React.createElement(Link, { key: i, to: category.link, className: "legal-cards__link-card" },
                    React.createElement('span', { className: "legal-cards__icon" }, React.createElement(Icon, { size: 22 })),
                    React.createElement('h3', { className: "legal-cards__card-title" }, category.title),
                    React.createElement('p', { className: "legal-cards__card-text" }, category.description)
                  )
                );
              })
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-cards legal-cards--alt" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--md-gap" },
            React.createElement('h2', { className: "legal-cards__heading" }, helpCenterPageContent.articlesHeading),
            React.createElement('div', { className: "legal-articles" },
              popularArticles.map(function(article, i) { return (
                React.createElement(Link, { key: i, to: article.link, className: "legal-article-link" },
                  React.createElement(BookOpen, { size: 16, className: "legal-article-link__icon" }),
                  React.createElement('span', null, article.title)
                )
              ); })
            )
          )
        )
      ),

      React.createElement('hr', { className: "funky-section__divider--subtle" }),

      React.createElement('section', { className: "legal-cards" },
        React.createElement(Container, null,
          React.createElement('div', { className: "legal-cards__content legal-cards__content--centered" },
            React.createElement('h2', { className: "legal-cards__heading" }, helpCenterPageContent.contactHeading),
            React.createElement('p', { className: "legal-cards__text legal-cards__text--center" }, helpCenterPageContent.contactText),
            React.createElement('div', { className: "legal-contact-grid" },
              React.createElement('div', { className: "legal-contact-card" },
                React.createElement(MessageCircle, { size: 28, className: "legal-contact-card__icon" }),
                React.createElement('h3', { className: "legal-contact-card__title" }, helpCenterPageContent.chat.title),
                React.createElement('p', { className: "legal-contact-card__text" }, helpCenterPageContent.chat.desc),
                React.createElement(Link, { to: "/chat", className: "legal-contact-card__btn--primary" },
                  helpCenterPageContent.chat.action
                )
              ),
              React.createElement('div', { className: "legal-contact-card" },
                React.createElement(Mail, { size: 28, className: "legal-contact-card__icon" }),
                React.createElement('h3', { className: "legal-contact-card__title" }, helpCenterPageContent.email.title),
                React.createElement('p', { className: "legal-contact-card__text" }, helpCenterPageContent.email.desc),
                React.createElement('a', { href: 'mailto:' + email, className: "legal-contact-card__btn--secondary" },
                  helpCenterPageContent.email.action
                )
              ),
              React.createElement('div', { className: "legal-contact-card" },
                React.createElement(Phone, { size: 28, className: "legal-contact-card__icon" }),
                React.createElement('h3', { className: "legal-contact-card__title" }, helpCenterPageContent.phone.title),
                React.createElement('p', { className: "legal-contact-card__text" }, phone),
                React.createElement('a', { href: 'tel:' + phone.replace(/\D/g, ''), className: "legal-contact-card__btn--secondary" },
                  helpCenterPageContent.phone.desc
                )
              )
            )
          )
        )
      )
    )
  );
}
