import React, { useState } from 'react';
import { Container } from '../common/Container';
import { X } from '@phosphor-icons/react';

/**
 * StoreNotices Component (Template Part)
 *
 * Site-wide promotional banner bar displayed above the header.
 * Features neon gradient background in funky mode.
 *
 * Uses BEM classes from /src/styles/blocks/theme/parts-funky.css.
 *
 * @part
 */
export const StoreNotices = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="wp-store-notice wp-store-notice--funky">
      <Container>
        <div className="wp-store-notice__inner">
          <div className="wp-store-notice__content">
            Free shipping on orders over $100.{' '}
            <a href="/shop" className="wp-store-notice__link">Details</a>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="wp-store-notice__dismiss funky-spring-hover"
            aria-label="Dismiss notice"
          >
            <X size={16} />
          </button>
        </div>
      </Container>
    </div>
  );
}