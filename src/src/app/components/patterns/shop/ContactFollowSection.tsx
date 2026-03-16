import React from 'react';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { InstagramLogo as Instagram, FacebookLogo as Facebook, TwitterLogo as Twitter, Envelope as Mail, Phone } from '../../../utils/phosphor-compat';

/**
 * ContactFollowSection Component
 */
interface ContactFollowSectionProps {
  className?: string;
}

export const ContactFollowSection = ({ className = '' }: ContactFollowSectionProps) => {
  return (
    <section className={`wp-contact-follow ${className}`}>
      <Container variant="site">
        <div className="wp-contact-follow__inner">
          <Typography variant="h3" className="wp-contact-follow__heading">
            Follow Us & Get In Touch
          </Typography>

          <div className="wp-contact-follow__social-links">
            <a href="https://instagram.com/kwvwines" aria-label="Instagram" className="wp-contact-follow__social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/KWVwines" aria-label="Facebook" className="wp-contact-follow__social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com/KWVwines" aria-label="Twitter" className="wp-contact-follow__social-icon">
              <Twitter size={20} />
            </a>
          </div>

          <div className="wp-contact-follow__contact-row">
            <div className="wp-contact-follow__contact-item">
              <Mail className="wp-contact-follow__contact-icon" size={20} />
              <a href="mailto:sales@kwv.co.za" className="wp-contact-follow__contact-link">sales@kwv.co.za</a>
            </div>
            <div className="wp-contact-follow__contact-item">
              <Phone className="wp-contact-follow__contact-icon" size={20} />
              <a href="tel:0218073007" className="wp-contact-follow__contact-link">021 807 3007</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};