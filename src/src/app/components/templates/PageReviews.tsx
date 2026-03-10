import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Star, Quotes, ArrowRight, ThumbsUp, ShieldCheck, Medal, ChatCircle } from '@phosphor-icons/react';

var useState = React.useState;
var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as ReviewsDataModule from '../../data/reviews';
import * as TestimonialsDataModule from '../../data/testimonials';
import * as ProductsDataModule from '../../data/products';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var REVIEWS = ReviewsDataModule.REVIEWS;
var testimonials = TestimonialsDataModule.testimonials;
var products = ProductsDataModule.products;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var reviewsHero = HeroDataModule.reviewsHero;

/**
 * PageReviews Template - Funky Redesign
 *
 * Showcases customer reviews and testimonials across the store.
 *
 * @route /reviews
 * @template
 */

var stats = [
  { label: 'Average rating', value: '4.8', suffix: '/5' },
  { label: 'Reviews collected', value: '2,400', suffix: '+' },
  { label: 'Verified buyers', value: '98', suffix: '%' },
  { label: 'Recommend to a friend', value: '96', suffix: '%' }
];

function StarRating(props) {
  var rating = props.rating;
  var size = props.size === undefined ? 16 : props.size;
  
  return React.createElement('span', { className: "review-stars", 'aria-label': rating + " out of 5 stars" },
    [0, 1, 2, 3, 4].map(function(i) {
      return React.createElement(Star, {
        key: i,
        size: size,
        weight: i < rating ? 'fill' : 'regular',
        className: "review-star" + (i < rating ? ' review-star--filled' : ''),
        'aria-hidden': "true"
      });
    })
  );
}

export function PageReviews() {
  var prefersReduced = usePrefersReducedMotion();
  var filterState = useState(null);
  var activeFilter = filterState[0];
  var setActiveFilter = filterState[1];

  var enrichedReviews = REVIEWS.map(function(review) {
    var product = products.find(function(p) { return p.id === review.productId; });
    return Object.assign({}, review, { productName: product ? product.name : 'Product' });
  });

  var filteredReviews = activeFilter
    ? enrichedReviews.filter(function(r) { return r.rating === activeFilter; })
    : enrichedReviews;

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "page-reviews" },
        /* Hero (shared FunkyHero) */
        React.createElement(FunkyHero, { config: reviewsHero }),

        /* Stats bar */
        React.createElement('section', { className: "reviews-stats", "aria-label": "Review statistics" },
          React.createElement(Container, null,
            React.createElement('div', { className: "reviews-stats__grid" },
              stats.map(function(stat) {
                return (
                  React.createElement('div', { key: stat.label, className: "reviews-stat" },
                    React.createElement('span', { className: "reviews-stat__value" },
                      stat.value,
                      React.createElement('span', { className: "reviews-stat__suffix" }, stat.suffix)
                    ),
                    React.createElement('span', { className: "reviews-stat__label" }, stat.label)
                  )
                );
              })
            )
          )
        ),

        /* Testimonial Highlights */
        React.createElement('section', { className: "reviews-highlights", "aria-label": "Featured testimonials" },
          React.createElement(Container, null,
            React.createElement('h2', { className: "reviews-highlights__heading" }, "What our customers say"),
            React.createElement('div', { className: "reviews-highlights__grid" },
              testimonials.slice(0, 3).map(function(t) {
                return (
                  React.createElement('blockquote', { key: t.id, className: "reviews-testimonial-card funky-glass-panel" },
                    React.createElement(Quotes, { size: 32, weight: "duotone", className: "reviews-testimonial-card__icon", "aria-hidden": "true" }),
                    React.createElement('p', { className: "reviews-testimonial-card__quote" }, t.quote),
                    React.createElement('footer', { className: "reviews-testimonial-card__footer" },
                      t.avatar ? (
                        React.createElement('img', {
                          src: t.avatar,
                          alt: "",
                          className: "reviews-testimonial-card__avatar",
                          loading: "lazy",
                          width: 40,
                          height: 40
                        })
                      ) : null,
                      React.createElement('div', null,
                        React.createElement('cite', { className: "reviews-testimonial-card__author" }, t.author),
                        React.createElement('span', { className: "reviews-testimonial-card__role" }, t.role)
                      ),
                      React.createElement(StarRating, { rating: t.rating })
                    )
                  )
                );
              })
            )
          )
        ),

        /* Product Reviews */
        React.createElement('section', { className: "reviews-list", "aria-label": "Product reviews" },
          React.createElement(Container, null,
            React.createElement('div', { className: "reviews-list__header" },
              React.createElement('h2', null, "Product reviews"),

              /* Rating filter */
              React.createElement('div', { className: "reviews-filter", role: "group", "aria-label": "Filter by rating" },
                React.createElement('button', {
                  type: "button",
                  className: "reviews-filter__btn" + (activeFilter === null ? ' reviews-filter__btn--active' : ''),
                  onClick: function() { setActiveFilter(null); }
                }, "All"),
                [5, 4, 3, 2, 1].map(function(n) {
                  return (
                    React.createElement('button', {
                      key: n,
                      type: "button",
                      className: "reviews-filter__btn" + (activeFilter === n ? ' reviews-filter__btn--active' : ''),
                      onClick: function() { setActiveFilter(n); }
                    },
                      n, " ", React.createElement(Star, { size: 12, weight: "fill", className: "review-star review-star--filled", "aria-hidden": "true" })
                    )
                  );
                })
              )
            ),

            filteredReviews.length > 0 ? (
              React.createElement('div', { className: "reviews-list__items" },
                filteredReviews.map(function(review) {
                  return (
                    React.createElement('article', { key: review.id, className: "review-card" },
                      React.createElement('div', { className: "review-card__top" },
                        React.createElement('div', { className: "review-card__author-info" },
                          review.avatar ? (
                            React.createElement('img', {
                              src: review.avatar,
                              alt: "",
                              className: "review-card__avatar",
                              loading: "lazy",
                              width: 40,
                              height: 40
                            })
                          ) : (
                            React.createElement('span', { className: "review-card__avatar-placeholder" },
                              review.author.charAt(0)
                            )
                          ),
                          React.createElement('div', null,
                            React.createElement('span', { className: "review-card__author" }, review.author),
                            review.verified ? (
                              React.createElement('span', { className: "review-card__verified" },
                                React.createElement(ShieldCheck, { size: 14, weight: "duotone", "aria-hidden": "true" }),
                                "Verified purchase"
                              )
                            ) : null
                          )
                        ),
                        React.createElement(StarRating, { rating: review.rating })
                      ),

                      React.createElement('h4', { className: "review-card__title" }, review.title),
                      React.createElement('p', { className: "review-card__content" }, review.content),

                      React.createElement('div', { className: "review-card__meta" },
                        React.createElement(Link, {
                          to: "/product/" + review.productId,
                          className: "review-card__product-link"
                        }, review.productName),
                        React.createElement('time', { className: "review-card__date" }, review.date)
                      ),

                      React.createElement('div', { className: "review-card__actions" },
                        React.createElement('button', { type: "button", className: "review-card__helpful-btn" },
                          React.createElement(ThumbsUp, { size: 14, weight: "duotone" }),
                          "Helpful (" + review.helpful + ")"
                        )
                      )
                    )
                  );
                })
              )
            ) : (
              React.createElement('div', { className: "reviews-list__empty" },
                React.createElement('p', null, "No reviews match this filter.")
              )
            )
          )
        ),

        /* Trust section */
        React.createElement('section', { className: "commerce-benefits", "aria-label": "Why trust our reviews" },
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-benefits__header" },
              React.createElement('h2', null, "Trusted by thousands"),
              React.createElement('p', { className: "commerce-benefits__subtitle" },
                "All reviews are collected from verified purchasers. We never edit or filter genuine feedback."
              )
            ),
            React.createElement('div', { className: "commerce-benefits__grid" },
              React.createElement('div', { className: "commerce-benefit-card" },
                React.createElement('div', { className: "commerce-benefit-icon", "aria-hidden": "true" },
                  React.createElement(ShieldCheck, { size: 24, weight: "duotone" })
                ),
                React.createElement('h4', { className: "commerce-benefit-card__title" }, "Verified purchases"),
                React.createElement('p', { className: "commerce-benefit-card__text" }, "Every review comes from a confirmed buyer.")
              ),
              React.createElement('div', { className: "commerce-benefit-card" },
                React.createElement('div', { className: "commerce-benefit-icon", "aria-hidden": "true" },
                  React.createElement(Medal, { size: 24, weight: "duotone" })
                ),
                React.createElement('h4', { className: "commerce-benefit-card__title" }, "No fake reviews"),
                React.createElement('p', { className: "commerce-benefit-card__text" }, "We use automated detection to keep reviews honest.")
              ),
              React.createElement('div', { className: "commerce-benefit-card" },
                React.createElement('div', { className: "commerce-benefit-icon", "aria-hidden": "true" },
                  React.createElement(ChatCircle, { size: 24, weight: "duotone" })
                ),
                React.createElement('h4', { className: "commerce-benefit-card__title" }, "We respond"),
                React.createElement('p', { className: "commerce-benefit-card__text" }, "Our team replies to every piece of constructive feedback.")
              ),
              React.createElement('div', { className: "commerce-benefit-card" },
                React.createElement('div', { className: "commerce-benefit-icon", "aria-hidden": "true" },
                  React.createElement(ThumbsUp, { size: 24, weight: "duotone" })
                ),
                React.createElement('h4', { className: "commerce-benefit-card__title" }, "Community rated"),
                React.createElement('p', { className: "commerce-benefit-card__text" }, "Helpful votes surface the most useful reviews first.")
              )
            )
          )
        ),

        /* CTA */
        React.createElement('section', { className: "commerce-cta", "aria-label": "Share your experience" },
          React.createElement('div', { className: "commerce-cta__bg", "aria-hidden": "true" }),
          !prefersReduced ? (
            React.createElement(React.Fragment, null,
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--1", "aria-hidden": "true" }),
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--2", "aria-hidden": "true" })
            )
          ) : null,
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-cta__content" },
              React.createElement('h2', { className: "commerce-cta__title" }, "Have something to share?"),
              React.createElement('p', { className: "commerce-cta__text" },
                "Purchased from us recently? We would love to hear your thoughts. Leave a review on any product page."
              ),
              React.createElement(Link, { to: "/shop", className: "commerce-cta__btn funky-spring-hover" },
                "Browse products",
                React.createElement(ArrowRight, { size: 18, weight: "bold" })
              )
            )
          )
        )
      )
    )
  );
}

export default PageReviews;
