/**
 * PageReviewsRetro - Retro-Styled Reviews Page
 *
 * Customer reviews and testimonials page with retro handheld gaming aesthetic.
 * Features review statistics, featured testimonials, filterable product reviews,
 * trust badges, and CTA section.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Review statistics bar with neon values
 * - Featured testimonial blockquotes
 * - Star rating filter with retro buttons
 * - Product review cards with verified badges
 * - Trust badges section
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/reviews-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { Star, Quotes, ArrowRight, ThumbsUp, ShieldCheck, Medal, ChatCircle } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { REVIEWS } from '../../data/reviews';
import { testimonials } from '../../data/testimonials';
import { products } from '../../data/products';

const stats = [
  { label: 'AVERAGE RATING', value: '4.8', suffix: '/5' },
  { label: 'REVIEWS COLLECTED', value: '2,400', suffix: '+' },
  { label: 'VERIFIED BUYERS', value: '98', suffix: '%' },
  { label: 'RECOMMEND US', value: '96', suffix: '%' },
];

const RetroStarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => {
  return (
    <span className="retro-stars" aria-label={rating + ' out of 5 stars'}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={size}
          weight={i < rating ? 'fill' : 'regular'}
          className={'retro-star' + (i < rating ? ' retro-star--filled' : '')}
          aria-hidden="true"
        />
      ))}
    </span>
  );
};

export const PageReviewsRetro = () => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const enrichedReviews = REVIEWS.map((review) => {
    const product = products.find((p) => p.id === review.productId);
    return { ...review, productName: product ? product.name : 'Product' };
  });

  const filteredReviews = activeFilter
    ? enrichedReviews.filter((r) => r.rating === activeFilter)
    : enrichedReviews;

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['CUSTOMER', 'REVIEWS']}
          highlight="4.8/5 STARS"
          description="Real reviews from real customers. See what our community has to say about their experience."
          images={{
            main: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXZlJTIwc3RhciUyMHJldmlldyUyMGN1c3RvbWVyJTIwc2F0aXNmYWN0aW9ufGVufDF8fHx8MTc3MzM0MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1586490470534-b0b67ce1c788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW1vbmlhbCUyMGZlZWRiYWNrJTIwc3RhcnMlMjByZXZpZXd8ZW58MXx8fHwxNzczMzQyMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MzI3NTU5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Stats Bar */}
        <section className="retro-section retro-section--stats" aria-label="Review statistics">
          <div className="retro-container">
            <div className="retro-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="retro-stat">
                  <div className="retro-stat-value retro-font-display">
                    {stat.value}<span className="retro-stat-suffix">{stat.suffix}</span>
                  </div>
                  <p className="retro-stat-label retro-font-body retro-uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="retro-section" aria-labelledby="reviews-testimonials-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="reviews-testimonials-heading" className="retro-font-display retro-bold retro-section-title">
                WHAT OUR CUSTOMERS SAY
              </h2>
            </div>

            <div className="retro-grid retro-grid-3">
              {testimonials.slice(0, 3).map((t: any) => (
                <blockquote key={t.id} className="retro-card retro-testimonial-card">
                  <Quotes size={28} weight="bold" className="retro-testimonial-quote-icon" aria-hidden="true" />
                  <p className="retro-testimonial-text retro-font-body">{t.quote}</p>
                  <footer className="retro-testimonial-footer">
                    <div className="retro-testimonial-author-info">
                      {t.avatar && (
                        <img
                          src={t.avatar}
                          alt=""
                          className="retro-testimonial-avatar"
                          loading="lazy"
                          width={40}
                          height={40}
                        />
                      )}
                      <div>
                        <cite className="retro-testimonial-author retro-font-display">{t.author.toUpperCase()}</cite>
                        <span className="retro-testimonial-role retro-font-body">{t.role}</span>
                      </div>
                    </div>
                    <RetroStarRating rating={t.rating} />
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Product Reviews Section */}
        <section className="retro-section retro-section--reviews" aria-labelledby="reviews-product-heading">
          <div className="retro-container">
            <div className="retro-reviews-header">
              <h2 id="reviews-product-heading" className="retro-font-display retro-bold retro-section-title">
                PRODUCT REVIEWS
              </h2>

              {/* Rating filter */}
              <div className="retro-review-filters" role="group" aria-label="Filter by rating">
                <button
                  type="button"
                  className={'retro-review-filter-btn retro-font-display' + (activeFilter === null ? ' retro-review-filter-btn--active' : '')}
                  onClick={() => setActiveFilter(null)}
                >
                  ALL
                </button>
                {[5, 4, 3, 2, 1].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={'retro-review-filter-btn retro-font-display' + (activeFilter === n ? ' retro-review-filter-btn--active' : '')}
                    onClick={() => setActiveFilter(n)}
                  >
                    {n} <Star size={12} weight="fill" className="retro-star retro-star--filled" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>

            {filteredReviews.length > 0 ? (
              <div className="retro-reviews-list">
                {filteredReviews.map((review) => (
                  <article key={review.id} className="retro-card retro-review-card">
                    <div className="retro-review-card-top">
                      <div className="retro-review-author-info">
                        {review.avatar ? (
                          <img
                            src={review.avatar}
                            alt=""
                            className="retro-review-avatar"
                            loading="lazy"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <span className="retro-review-avatar-placeholder retro-font-display">
                            {review.author.charAt(0)}
                          </span>
                        )}
                        <div>
                          <span className="retro-review-author retro-font-display">{review.author.toUpperCase()}</span>
                          {review.verified && (
                            <span className="retro-review-verified retro-font-body">
                              <ShieldCheck size={14} weight="bold" aria-hidden="true" />
                              VERIFIED
                            </span>
                          )}
                        </div>
                      </div>
                      <RetroStarRating rating={review.rating} />
                    </div>

                    <h4 className="retro-review-title retro-font-display retro-bold">{review.title.toUpperCase()}</h4>
                    <p className="retro-review-content retro-font-body">{review.content}</p>

                    <div className="retro-review-meta">
                      <Link to={'/product/' + review.productId} className="retro-link retro-font-body">
                        {review.productName}
                      </Link>
                      <time className="retro-review-date retro-font-body">{review.date}</time>
                    </div>

                    <div className="retro-review-actions">
                      <button type="button" className="retro-review-helpful-btn retro-font-body">
                        <ThumbsUp size={14} weight="bold" />
                        HELPFUL ({review.helpful})
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="retro-card retro-reviews-empty">
                <p className="retro-font-body">NO REVIEWS MATCH THIS FILTER.</p>
              </div>
            )}
          </div>
        </section>

        {/* Trust Section */}
        <section className="retro-section" aria-labelledby="reviews-trust-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="reviews-trust-heading" className="retro-font-display retro-bold retro-section-title">
                TRUSTED BY THOUSANDS
              </h2>
              <p className="retro-font-body retro-section-desc">
                All reviews are collected from verified purchasers. We never edit or filter genuine feedback.
              </p>
            </div>

            <div className="retro-grid retro-grid-4">
              <div className="retro-card retro-card-glow">
                <div className="retro-feature-icon">
                  <ShieldCheck size={28} weight="bold" aria-hidden="true" />
                </div>
                <h4 className="retro-card-title retro-font-display retro-bold">VERIFIED PURCHASES</h4>
                <p className="retro-card-desc retro-font-body">Every review comes from a confirmed buyer.</p>
              </div>
              <div className="retro-card retro-card-glow">
                <div className="retro-feature-icon">
                  <Medal size={28} weight="bold" aria-hidden="true" />
                </div>
                <h4 className="retro-card-title retro-font-display retro-bold">NO FAKE REVIEWS</h4>
                <p className="retro-card-desc retro-font-body">We use automated detection to keep reviews honest.</p>
              </div>
              <div className="retro-card retro-card-glow">
                <div className="retro-feature-icon">
                  <ChatCircle size={28} weight="bold" aria-hidden="true" />
                </div>
                <h4 className="retro-card-title retro-font-display retro-bold">WE RESPOND</h4>
                <p className="retro-card-desc retro-font-body">Our team replies to every piece of constructive feedback.</p>
              </div>
              <div className="retro-card retro-card-glow">
                <div className="retro-feature-icon">
                  <ThumbsUp size={28} weight="bold" aria-hidden="true" />
                </div>
                <h4 className="retro-card-title retro-font-display retro-bold">COMMUNITY RATED</h4>
                <p className="retro-card-desc retro-font-body">Helpful votes surface the most useful reviews first.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Share your experience">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Star size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                HAVE SOMETHING TO SHARE?
              </h2>
              <p className="retro-font-body retro-cta-desc">
                Purchased from us recently? We would love to hear your thoughts. Leave a review on any product page.
              </p>
              <Link to="/shop" className="retro-button retro-button--primary retro-font-display">
                BROWSE PRODUCTS <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};
