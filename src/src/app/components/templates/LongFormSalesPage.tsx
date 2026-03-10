import React from 'react';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import { Check, Star, ArrowRight, Play, Quotes as Quote, Shield, Truck, ArrowsClockwise as RefreshCcw, Medal as Award, Users, TrendUp as TrendingUp, Lightning as Zap, CaretDown as ChevronDown } from '@phosphor-icons/react';
import * as ProductLaunchDataModule from '../../data/productLaunch';

var useState = React.useState;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var productLaunchContent = ProductLaunchDataModule.productLaunchContent;

/**
 * LongFormSalesPage Template
 * 
 * Single-column storytelling sales page for campaigns and product launches.
 */

var iconMap = {
  Zap: Zap, Shield: Shield, Users: Users, TrendingUp: TrendingUp, Truck: Truck, RefreshCcw: RefreshCcw
};

export function LongFormSalesPage() {
  var _faq = useState(0);
  var openFaq = _faq[0];
  var setOpenFaq = _faq[1];
  var content = productLaunchContent;
  var hero = content.hero;
  var stats = content.stats;
  var problem = content.problem;
  var solution = content.solution;
  var features = content.features;
  var testimonials = content.testimonials;
  var pricing = content.pricing;
  var faq = content.faq;
  var finalCta = content.finalCta;

  return (
    React.createElement(Layout, null,
      /* Hero Section */
      React.createElement('div', { className: "wp-sales-hero" },
        React.createElement('div', { className: "wp-sales-hero__bg" }),

        React.createElement(Container, { className: "wp-sales-hero__content" },
          React.createElement('div', { className: "wp-sales-hero__wrapper" },
            React.createElement('div', { className: "wp-sales-badge" },
              React.createElement(Zap, { size: 16, className: "wp-sales-badge__icon" }),
              React.createElement('span', { className: "wp-sales-badge__text" }, React.createElement('small', null, hero.badge))
            ),

            React.createElement('h1', { className: "wp-sales-hero__title" }, hero.heading),

            React.createElement('p', { className: "wp-sales-hero__subtitle" }, hero.subheading),

            React.createElement('div', { className: "wp-sales-hero__actions" },
              React.createElement('button', { className: "wp-sales-btn wp-sales-btn--primary" },
                hero.primaryCta, React.createElement(ArrowRight, { size: 20 })
              ),
              React.createElement('button', { className: "wp-sales-btn wp-sales-btn--outline" },
                React.createElement(Play, { size: 20 }), hero.secondaryCta
              )
            ),

            React.createElement('div', { className: "wp-sales-trust" },
              hero.trust.map(function(item, i) {
                return (
                  React.createElement('div', { key: i, className: "wp-sales-trust__item" },
                    React.createElement(Check, { size: 16 }),
                    React.createElement('span', null, item)
                  )
                );
              })
            )
          )
        )
      ),

      /* Social Proof Bar */
      React.createElement('div', { className: "wp-sales-proof" },
        React.createElement(Container, null,
          React.createElement('div', { className: "wp-sales-proof__grid" },
            stats.map(function(stat, i) {
              return (
                React.createElement('div', { key: i, className: "wp-sales-stat" },
                  React.createElement('div', { className: "wp-sales-stat__value" }, stat.value),
                  React.createElement('p', { className: "wp-sales-stat__label" }, React.createElement('small', null, stat.label))
                )
              );
            })
          )
        )
      ),

      /* Problem/Solution Section */
      React.createElement(Container, { className: "wp-sales-section" },
        React.createElement('div', { className: "wp-sales-narrative" },
          React.createElement('div', { className: "wp-sales-problem" },
            React.createElement(Typography, { variant: "h2", className: "wp-sales-problem__title" }, problem.heading),
            React.createElement('p', { className: "wp-sales-problem__text" }, problem.text)
          ),

          React.createElement('div', { className: "wp-sales-solution" },
            React.createElement('div', { className: "wp-sales-solution__wrapper" },
              React.createElement('div', { className: "wp-sales-solution__icon" },
                React.createElement(Zap, { size: 24, className: "wp-sales-solution__icon-svg" })
              ),
              React.createElement('div', null,
                React.createElement(Typography, { variant: "h3", className: "wp-sales-solution__title" }, solution.heading),
                React.createElement('p', { className: "wp-sales-solution__text" }, solution.text)
              )
            )
          )
        )
      ),

      /* Features Section */
      React.createElement('div', { className: "wp-sales-features-section" },
        React.createElement(Container, null,
          React.createElement('div', { className: "wp-sales-features__header" },
            React.createElement(Typography, { variant: "h2", className: "wp-sales-features__title" }, "Everything You Need to Succeed"),
            React.createElement('p', { className: "wp-sales-features__subtitle" }, "Powerful features designed to help you plan smarter, not harder.")
          ),

          React.createElement('div', { className: "wp-sales-features__grid" },
            features.map(function(feature, index) {
              var Icon = iconMap[feature.icon] || Zap;
              return (
                React.createElement('div', { key: index, className: "wp-sales-feature-card" },
                  React.createElement('div', { className: "wp-sales-feature-card__icon" },
                    React.createElement(Icon, { size: 28 })
                  ),
                  React.createElement('h3', { className: "wp-sales-feature-card__title" }, feature.title),
                  React.createElement('p', { className: "wp-sales-feature-card__text" }, feature.description)
                )
              );
            })
          )
        )
      ),

      /* Testimonials */
      React.createElement(Container, { className: "wp-sales-section" },
        React.createElement('div', { className: "wp-sales-testimonials__header" },
          React.createElement(Typography, { variant: "h2", className: "wp-sales-testimonials__title" }, "Loved by Planners Worldwide"),
          React.createElement('p', { className: "wp-sales-testimonials__subtitle" }, "See what our community is saying")
        ),

        React.createElement('div', { className: "wp-sales-testimonials__grid" },
          testimonials.map(function(testimonial, index) {
            return (
              React.createElement('div', { key: index, className: "wp-sales-testimonial-card" },
                React.createElement('div', { className: "wp-sales-testimonial-card__rating" },
                  Array.from({ length: testimonial.rating }).map(function(_, i) {
                    return React.createElement(Star, { key: i, size: 18, className: "wp-icon-star" });
                  })
                ),
                React.createElement(Quote, { size: 32, className: "wp-sales-testimonial-card__quote-icon" }),
                React.createElement('p', { className: "wp-sales-testimonial-card__text" },
                  '"' + testimonial.content + '"'
                ),
                React.createElement('div', { className: "wp-sales-testimonial-card__author" },
                  React.createElement('img', {
                    src: testimonial.image,
                    alt: testimonial.name,
                    className: "wp-sales-testimonial-card__avatar"
                  }),
                  React.createElement('div', null,
                    React.createElement('p', { className: "wp-sales-testimonial-card__name" }, testimonial.name),
                    React.createElement('p', { className: "wp-sales-testimonial-card__role" }, testimonial.role)
                  )
                )
              )
            );
          })
        )
      ),

      /* Pricing Section */
      React.createElement('div', { className: "wp-sales-pricing-section" },
        React.createElement(Container, null,
          React.createElement('div', { className: "wp-sales-pricing__header" },
            React.createElement('div', { className: "wp-sales-badge wp-sales-badge--light" },
              React.createElement(Award, { size: 16 }),
              React.createElement('span', { className: "wp-sales-badge__text" }, React.createElement('small', null, pricing.badge))
            ),

            React.createElement(Typography, { variant: "h2", className: "wp-sales-pricing__title" }, pricing.heading),
            React.createElement('p', { className: "wp-sales-pricing__subtitle" }, pricing.subheading),

            React.createElement('div', { className: "wp-sales-pricing-card" },
              React.createElement('div', { className: "wp-sales-pricing-card__price" },
                React.createElement('div', { className: "wp-sales-pricing-card__amount" },
                  React.createElement('span', { className: "wp-price-large" }, pricing.price),
                  React.createElement('span', { className: "wp-price-original" }, pricing.originalPrice),
                  React.createElement('span', { className: "wp-price-period" }, pricing.period)
                ),
                React.createElement('p', { className: "wp-sales-pricing-card__savings" }, pricing.savings)
              ),

              React.createElement('ul', { className: "wp-sales-pricing-card__features" },
                pricing.features.map(function(feature, i) {
                  return (
                    React.createElement('li', { key: i, className: "wp-sales-feature-item" },
                      React.createElement(Check, { size: 20, className: "wp-sales-feature-icon" }),
                      React.createElement('span', null, feature)
                    )
                  );
                })
              ),

              React.createElement('button', { className: "wp-sales-pricing-btn" }, pricing.cta),
              
              React.createElement('p', { className: "wp-sales-pricing-guarantee" }, pricing.guarantee)
            )
          )
        )
      ),

      /* FAQ Section */
      React.createElement(Container, { className: "wp-sales-section" },
        React.createElement('div', { className: "wp-sales-faq__wrapper" },
          React.createElement('div', { className: "wp-sales-faq__header" },
            React.createElement(Typography, { variant: "h2", className: "wp-sales-faq__title" }, faq.heading),
            React.createElement('p', { className: "wp-sales-faq__subtitle" }, faq.subheading)
          ),

          React.createElement('div', { className: "wp-sales-faq__list" },
            faq.items.map(function(item, index) {
              return (
                React.createElement('div', { key: index, className: "wp-sales-faq-item" },
                  React.createElement('button', {
                    onClick: function() { setOpenFaq(openFaq === index ? null : index); },
                    className: "wp-sales-faq-trigger"
                  },
                    React.createElement('span', { className: "wp-sales-faq-question" }, item.question),
                    React.createElement(ChevronDown, {
                      size: 20,
                      className: 'wp-sales-faq-chevron ' + (openFaq === index ? 'wp-rotate-180' : '')
                    })
                  ),
                  openFaq === index && (
                    React.createElement('div', { className: "wp-sales-faq-answer" },
                      React.createElement('p', null, item.answer)
                    )
                  )
                )
              );
            })
          )
        )
      ),

      /* Final CTA */
      React.createElement('div', { className: "wp-sales-final-cta" },
        React.createElement(Container, null,
          React.createElement('div', { className: "wp-sales-final-cta__content" },
            React.createElement(Typography, { variant: "h2", className: "wp-sales-final-cta__title" }, finalCta.heading),
            React.createElement('p', { className: "wp-sales-final-cta__text" }, finalCta.text),
            React.createElement('button', { className: "wp-sales-btn wp-sales-btn--primary wp-sales-btn--large" }, finalCta.button),
            
            React.createElement('div', { className: "wp-sales-trust wp-sales-trust--dark" },
              finalCta.trust.map(function(item, i) {
                var Icon = iconMap[item.icon] || Shield;
                return (
                  React.createElement('div', { key: i, className: "wp-sales-trust__item" },
                    React.createElement(Icon, { size: 20 }),
                    React.createElement('span', null, React.createElement('small', null, item.text))
                  )
                );
              })
            )
          )
        )
      )
    )
  );
}
