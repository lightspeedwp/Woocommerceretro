import React from 'react';
import { Container } from '../../common/Container';
import { Truck, ShieldCheck, ArrowsClockwise as RefreshCw, Gift } from '@phosphor-icons/react';

/**
 * ServiceFeaturesSection Component
 */
export const ServiceFeaturesSection = () => {
  const features = [
    { icon: Truck, title: 'Nationwide Delivery', description: 'Reliable delivery to your door across South Africa.' },
    { icon: ShieldCheck, title: 'Secure Payment', description: '100% secure checkout with multiple payment options.' },
    { icon: RefreshCw, title: 'Easy Returns', description: 'Hassle-free returns within 30 days of purchase.' },
    { icon: Gift, title: 'Gift Wrapping', description: 'Add a personal touch with our premium gift wrapping service.' },
  ];

  return (
    <div className="wp-service-features">
      <Container variant="site">
        <div className="wp-service-features__grid">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="wp-service-features__item">
                <div className="wp-service-features__icon">
                  <Icon size={40} weight="duotone" />
                </div>
                <h4 className="wp-service-features__title">{feature.title}</h4>
                <p className="wp-service-features__description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
