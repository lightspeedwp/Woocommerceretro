import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { InstagramLogo as Instagram } from '@phosphor-icons/react';

/**
 * ShopSocialSection Component
 */
export const ShopSocialSection = () => {
  return (
    <section className="wp-shop-social">
      <Container variant="site">
        <div className="wp-shop-social__icon-wrapper">
          <div className="wp-shop-social__icon-circle">
            <Instagram size={24} />
          </div>
        </div>
        <Typography variant="h3" className="wp-shop-social__heading">
          Share your experiences and adventures with KWV Online
        </Typography>
        <Typography variant="caption" className="wp-shop-social__hashtags">
          #KWVONLINE #KWVSHOP #KWVEXPERIENCES #KWVEVENTS
        </Typography>
      </Container>
    </section>
  );
};
