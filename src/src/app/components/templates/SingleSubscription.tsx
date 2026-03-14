import React, { useState } from 'react';
import { Link } from 'react-router';
import { Package, Star, Check } from '@phosphor-icons/react';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Heading } from '../common/Heading';
import { FAQSection } from '../patterns/FAQSection';
import { TrustBand } from '../patterns/TrustBand';
import { FeaturesComparisonTable } from '../patterns/FeaturesComparisonTable';
import {
  subscriptionPlans,
  subscriptionFeatures,
  subscriptionBenefits,
  subscriptionFAQs,
  subscriptionProductImages,
  subscriptionPageContent,
} from '../../data/subscriptions';

/**
 * SingleSubscription Template — Funky Redesign (Phase 9)
 * 
 * Single product page for subscription products using WooCommerce Subscriptions.
 * 
 * @template
 */
export const SingleSubscription = () => {
  const [selectedInterval, setSelectedInterval] = useState('quarterly');
  const single = subscriptionPageContent.single;
  
  const currentInterval = subscriptionPlans.find((p) => p.id === selectedInterval) || subscriptionPlans[1];

  const transformedFAQs = subscriptionFAQs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  const transformedFeatures = subscriptionFeatures.map((f) => ({
    name: f.name,
    description: f.description,
    values: [
      f.availability.monthly,
      f.availability.quarterly,
      f.availability.annual,
    ],
  }));

  return (
    <Layout>
      <Container className="wp-product-page">
        {/* Breadcrumbs */}
        <nav className="wp-breadcrumbs" aria-label="Breadcrumb">
          <ol className="wp-breadcrumbs__list">
            <li><Link to="/">Home</Link></li>
            <li className="wp-breadcrumbs__separator">/</li>
            <li><Link to="/subscriptions">Subscriptions</Link></li>
            <li className="wp-breadcrumbs__separator">/</li>
            <li className="wp-breadcrumbs__current">{single.title}</li>
          </ol>
        </nav>

        <div className="wp-product-layout">
          {/* Left: Product Image Gallery */}
          <div className="wp-product-gallery">
            <div className="wp-product-gallery__main">
              <img
                src={subscriptionProductImages.main}
                alt={single.title}
                className="wp-product-gallery__img"
              />
            </div>
            
            <div className="wp-product-gallery__thumbs">
              {subscriptionProductImages.gallery.map((src, index) => (
                <button
                  key={index}
                  className="wp-product-gallery__thumb-btn"
                  aria-label={`View product image ${index + 1}`}
                >
                  <img src={src} alt="" className="wp-product-gallery__thumb-img" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Subscription Options */}
          <div className="wp-product-info">
            <div className="wp-badge-pill">
              <Package size={14} aria-hidden="true" />
              <Typography variant="caption" className="wp-badge-pill__text">{single.badge}</Typography>
            </div>

            <Heading level={1} className="wp-product-title">{single.title}</Heading>

            <div className="wp-product-reviews">
              <div className="wp-rating-stars" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" className="wp-icon-star" aria-hidden="true" />
                ))}
              </div>
              <Typography className="wp-review-count">{single.rating}</Typography>
            </div>

            <Typography className="wp-product-description">{single.description}</Typography>

            {/* Billing Interval Selection */}
            <div className="wp-plan-selector-container">
              <label className="wp-field-label">
                <Typography className="wp-label-text">Choose Your Delivery Frequency:</Typography>
              </label>
              
              <div className="wp-plan-list">
                {subscriptionPlans.map((interval) => (
                  <button
                    key={interval.id}
                    onClick={() => setSelectedInterval(interval.id)}
                    className={`wp-plan-option${selectedInterval === interval.id ? ' wp-plan-option--active' : ''}`}
                    aria-pressed={selectedInterval === interval.id}
                  >
                    <div className="wp-plan-option__content">
                      <div className={`wp-radio-indicator${selectedInterval === interval.id ? ' wp-radio-indicator--checked' : ''}`}>
                        {selectedInterval === interval.id && <div className="wp-radio-indicator__dot" />}
                      </div>
                      
                      <div className="wp-plan-option__details">
                        <div className="wp-plan-option__header">
                          <Typography className="wp-plan-option__name">{interval.name}</Typography>
                          {interval.badge && (
                            <span className="wp-plan-option__badge">{interval.badge}</span>
                          )}
                        </div>
                        <Typography variant="caption" className="wp-plan-option__desc">
                          {`${interval.trialDays || 7} day free trial - Cancel anytime`}
                        </Typography>
                      </div>
                    </div>
                    
                    <div className="wp-plan-option__pricing">
                      <Typography className="wp-plan-option__price">{`£${interval.price}`}</Typography>
                      <Typography variant="caption" className="wp-plan-option__interval">{`/ ${interval.interval}`}</Typography>
                      {interval.savings && (
                        <Typography variant="caption" className="wp-plan-option__savings">{`Save £${interval.savings}`}</Typography>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="wp-button-primary wp-button-full" type="button">
              {`Start ${currentInterval.trialDays}-Day Free Trial`}
            </button>

            <Typography variant="caption" className="wp-guarantee-text">
              Cancel anytime during trial period at no charge
            </Typography>

            {/* What's Included */}
            <div className="wp-features-card">
              <Heading level={3} className="wp-features-card__title">What's Included</Heading>
              
              <ul className="wp-features-card__list">
                {currentInterval.features.map((item, index) => (
                  <li key={index} className="wp-features-card__item">
                    <Check size={20} className="wp-icon-success" aria-hidden="true" />
                    <Typography className="wp-features-card__text">{item}</Typography>
                  </li>
                ))}
              </ul>
            </div>

            {/* Auto-renewal Info */}
            <div className="wp-info-box">
              <Typography className="wp-info-box__text">
                <strong>Auto-renewal:</strong>
                {` After your free trial, your subscription will automatically renew at £${currentInterval.price} per ${currentInterval.interval}. You can cancel or modify anytime.`}
              </Typography>
            </div>
          </div>
        </div>

        {/* Subscription Benefits */}
        <section className="wp-section-benefits">
          <div className="wp-section-header">
            <Heading level={2} className="wp-section-title">{subscriptionPageContent.landing.benefitsHeading}</Heading>
            <Typography className="wp-section-subtitle">{subscriptionPageContent.landing.benefitsText}</Typography>
          </div>

          <div className="wp-benefits-grid">
            {subscriptionBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="wp-benefit-card">
                  <div className={`wp-benefit-icon-wrapper ${benefit.bg}`}>
                    <Icon size={32} className={benefit.color} aria-hidden="true" />
                  </div>
                  <Heading level={3} className="wp-benefit-title">{benefit.title}</Heading>
                  <Typography className="wp-benefit-desc">{benefit.description}</Typography>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Comparison Table */}
        <section className="wp-section-comparison">
          <Heading level={2} className="wp-section-heading">Compare Plans</Heading>

          <FeaturesComparisonTable
            features={transformedFeatures}
            plans={[
              { id: 'monthly', name: 'Monthly', price: subscriptionPlans[0].price },
              { id: 'quarterly', name: 'Quarterly', price: subscriptionPlans[1].price },
              { id: 'annual', name: 'Annual', price: subscriptionPlans[2].price },
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="wp-section-faq">
          <Heading level={2} className="wp-section-heading">Frequently Asked Questions</Heading>
          <FAQSection items={transformedFAQs} />
        </section>

        {/* Trust Band */}
        <section className="wp-section-trust">
          <TrustBand />
        </section>
      </Container>
    </Layout>
  );
}