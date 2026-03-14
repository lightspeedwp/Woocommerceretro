import React from 'react';
import { Link } from 'react-router';
import { Button } from '../../blocks/design/Buttons';
import { Container } from '../../common/Container';

export const SupportStrip = () => {
  return (
    <section className="wp-shop-support-strip">
      <Container>
        <div className="wp-shop-support-strip__card">
          <div>
            <h3 className="wp-shop-support-strip__heading">Need help choosing?</h3>
            <p className="wp-shop-support-strip__description">
              Our style experts are here to help you find exactly what fits your needs and budget.
            </p>
          </div>
          <div className="wp-shop-support-strip__actions">
            <Link to="/contact">
              <Button className="wp-shop-support-strip__btn--primary">Contact Support</Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline" className="wp-shop-support-strip__btn--outline">Read FAQ</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
