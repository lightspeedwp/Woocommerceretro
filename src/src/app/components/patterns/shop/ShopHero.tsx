import React from 'react';
import { useNavigate } from 'react-router';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { Button } from '../../blocks/design/Buttons';
import { ScrollDownArrow } from '../../common/ScrollDownArrow';

/**
 * ShopHero Component
 */
export const ShopHero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => { navigate('/shop/all'); };
  const handleViewOffers = () => { navigate('/promotions'); };

  return (
    <div className="wp-shop-hero wp-min-h-full-page wp-min-h-80vh">
      <Container variant="site" className="wp-shop-hero__inner">
        <div className="wp-shop-hero__content">
          <Typography variant="h1" className="wp-shop-hero__title" stretchy>
            Curated Collections & Essentials
          </Typography>
          <Typography variant="body" className="wp-shop-hero__subtitle">
            Discover products that elevate your everyday life. Quality, sustainability, and style in every detail.
          </Typography>
          <div className="wp-shop-hero__actions">
            <Button
              variant="hero"
              size="lg"
              className="wp-shop-hero__btn sm-wp-w-btn-fixed"
              onClick={handleShopNow}
            >
              Shop Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="wp-shop-hero__btn--outline sm-wp-w-btn-fixed"
              onClick={handleViewOffers}
            >
              View Offers
            </Button>
          </div>
        </div>
      </Container>
      <ScrollDownArrow targetId="shop-content" className="wp-shop-hero__scroll-arrow" />
    </div>
  );
};
