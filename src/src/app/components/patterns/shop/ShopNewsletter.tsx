import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';

/**
 * ShopNewsletter Component
 */
export const ShopNewsletter = () => {
  return (
    <section className="wp-shop-newsletter">
      <div className="wp-shop-newsletter__bg-wrapper">
        <img
          src="https://images.unsplash.com/photo-1560493676-040ddb386265?q=80&w=2070&auto=format&fit=crop"
          alt="Vineyards"
          className="wp-shop-newsletter__bg-image"
        />
        <div className="wp-shop-newsletter__bg-overlay" />
      </div>

      <Container variant="site" className="wp-shop-newsletter__inner">
        <Typography variant="h2" className="wp-shop-newsletter__heading">
          Join the KWV Family
        </Typography>
        <Typography variant="body" className="wp-shop-newsletter__description">
          Sign up for our newsletter and keep up to date with all things KWV.
        </Typography>

        <form className="wp-shop-newsletter__form">
          <label htmlFor="shop-newsletter-name" className="sr-only">Name</label>
          <input
            id="shop-newsletter-name"
            type="text"
            placeholder="name"
            className="wp-newsletter-input lowercase"
            aria-label="Name"
          />
          <label htmlFor="shop-newsletter-surname" className="sr-only">Surname</label>
          <input
            id="shop-newsletter-surname"
            type="text"
            placeholder="surname"
            className="wp-newsletter-input lowercase"
            aria-label="Surname"
          />
          <label htmlFor="shop-newsletter-email" className="sr-only">Email</label>
          <input
            id="shop-newsletter-email"
            type="email"
            placeholder="email"
            className="wp-newsletter-input lowercase"
            aria-label="Email"
          />
          <button type="submit" className="wp-newsletter-submit">Submit</button>
        </form>
      </Container>
    </section>
  );
};
