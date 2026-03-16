import React, { useState } from 'react';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Check, Star, ArrowRight, Play, Quotes as Quote, Shield, Truck, ArrowsClockwise as RefreshCcw, Medal as Award, Users, TrendUp as TrendingUp, Lightning as Zap, CaretDown as ChevronDown } from '../../utils/phosphor-compat';
import { productLaunchContent } from '../../data/productLaunch';

/**
 * LongFormSalesPage Template
 *
 * Single-column storytelling sales page for campaigns and product launches.
 */

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap, Shield, Users, TrendingUp, Truck, RefreshCcw
};

export const LongFormSalesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const content = productLaunchContent;
  const { hero, stats, problem, solution, features, testimonials, pricing, faq, finalCta } = content;

  return (
    <Layout>
      {/* Hero Section */}
      <div className="wp-sales-hero">
        <div className="wp-sales-hero__bg" />

        <Container className="wp-sales-hero__content">
          <div className="wp-sales-hero__wrapper">
            <div className="wp-sales-badge">
              <Zap size={16} className="wp-sales-badge__icon" />
              <span className="wp-sales-badge__text"><small>{hero.badge}</small></span>
            </div>

            <h1 className="wp-sales-hero__title">{hero.heading}</h1>

            <p className="wp-sales-hero__subtitle">{hero.subheading}</p>

            <div className="wp-sales-hero__actions">
              <button className="wp-sales-btn wp-sales-btn--primary">
                {hero.primaryCta} <ArrowRight size={20} />
              </button>
              <button className="wp-sales-btn wp-sales-btn--outline">
                <Play size={20} /> {hero.secondaryCta}
              </button>
            </div>

            <div className="wp-sales-trust">
              {hero.trust.map((item: string, i: number) => (
                <div key={i} className="wp-sales-trust__item">
                  <Check size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Social Proof Bar */}
      <div className="wp-sales-proof">
        <Container>
          <div className="wp-sales-proof__grid">
            {stats.map((stat: any, i: number) => (
              <div key={i} className="wp-sales-stat">
                <div className="wp-sales-stat__value">{stat.value}</div>
                <p className="wp-sales-stat__label"><small>{stat.label}</small></p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Problem/Solution Section */}
      <Container className="wp-sales-section">
        <div className="wp-sales-narrative">
          <div className="wp-sales-problem">
            <Typography variant="h2" className="wp-sales-problem__title">{problem.heading}</Typography>
            <p className="wp-sales-problem__text">{problem.text}</p>
          </div>

          <div className="wp-sales-solution">
            <div className="wp-sales-solution__wrapper">
              <div className="wp-sales-solution__icon">
                <Zap size={24} className="wp-sales-solution__icon-svg" />
              </div>
              <div>
                <Typography variant="h3" className="wp-sales-solution__title">{solution.heading}</Typography>
                <p className="wp-sales-solution__text">{solution.text}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <div className="wp-sales-features-section">
        <Container>
          <div className="wp-sales-features__header">
            <Typography variant="h2" className="wp-sales-features__title">Everything You Need to Succeed</Typography>
            <p className="wp-sales-features__subtitle">Powerful features designed to help you plan smarter, not harder.</p>
          </div>

          <div className="wp-sales-features__grid">
            {features.map((feature: any, index: number) => {
              const Icon = iconMap[feature.icon] || Zap;
              return (
                <div key={index} className="wp-sales-feature-card">
                  <div className="wp-sales-feature-card__icon">
                    <Icon size={28} />
                  </div>
                  <h3 className="wp-sales-feature-card__title">{feature.title}</h3>
                  <p className="wp-sales-feature-card__text">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Testimonials */}
      <Container className="wp-sales-section">
        <div className="wp-sales-testimonials__header">
          <Typography variant="h2" className="wp-sales-testimonials__title">Loved by Planners Worldwide</Typography>
          <p className="wp-sales-testimonials__subtitle">See what our community is saying</p>
        </div>

        <div className="wp-sales-testimonials__grid">
          {testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="wp-sales-testimonial-card">
              <div className="wp-sales-testimonial-card__rating">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="wp-icon-star" />
                ))}
              </div>
              <Quote size={32} className="wp-sales-testimonial-card__quote-icon" />
              <p className="wp-sales-testimonial-card__text">
                {`"${testimonial.content}"`}
              </p>
              <div className="wp-sales-testimonial-card__author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="wp-sales-testimonial-card__avatar"
                />
                <div>
                  <p className="wp-sales-testimonial-card__name">{testimonial.name}</p>
                  <p className="wp-sales-testimonial-card__role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Pricing Section */}
      <div className="wp-sales-pricing-section">
        <Container>
          <div className="wp-sales-pricing__header">
            <div className="wp-sales-badge wp-sales-badge--light">
              <Award size={16} />
              <span className="wp-sales-badge__text"><small>{pricing.badge}</small></span>
            </div>

            <Typography variant="h2" className="wp-sales-pricing__title">{pricing.heading}</Typography>
            <p className="wp-sales-pricing__subtitle">{pricing.subheading}</p>

            <div className="wp-sales-pricing-card">
              <div className="wp-sales-pricing-card__price">
                <div className="wp-sales-pricing-card__amount">
                  <span className="wp-price-large">{pricing.price}</span>
                  <span className="wp-price-original">{pricing.originalPrice}</span>
                  <span className="wp-price-period">{pricing.period}</span>
                </div>
                <p className="wp-sales-pricing-card__savings">{pricing.savings}</p>
              </div>

              <ul className="wp-sales-pricing-card__features">
                {pricing.features.map((feature: string, i: number) => (
                  <li key={i} className="wp-sales-feature-item">
                    <Check size={20} className="wp-sales-feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="wp-sales-pricing-btn">{pricing.cta}</button>

              <p className="wp-sales-pricing-guarantee">{pricing.guarantee}</p>
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <Container className="wp-sales-section">
        <div className="wp-sales-faq__wrapper">
          <div className="wp-sales-faq__header">
            <Typography variant="h2" className="wp-sales-faq__title">{faq.heading}</Typography>
            <p className="wp-sales-faq__subtitle">{faq.subheading}</p>
          </div>

          <div className="wp-sales-faq__list">
            {faq.items.map((item: any, index: number) => (
              <div key={index} className="wp-sales-faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="wp-sales-faq-trigger"
                >
                  <span className="wp-sales-faq-question">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`wp-sales-faq-chevron ${openFaq === index ? 'wp-rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="wp-sales-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Final CTA */}
      <div className="wp-sales-final-cta">
        <Container>
          <div className="wp-sales-final-cta__content">
            <Typography variant="h2" className="wp-sales-final-cta__title">{finalCta.heading}</Typography>
            <p className="wp-sales-final-cta__text">{finalCta.text}</p>
            <button className="wp-sales-btn wp-sales-btn--primary wp-sales-btn--large">{finalCta.button}</button>

            <div className="wp-sales-trust wp-sales-trust--dark">
              {finalCta.trust.map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || Shield;
                return (
                  <div key={i} className="wp-sales-trust__item">
                    <Icon size={20} />
                    <span><small>{item.text}</small></span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}