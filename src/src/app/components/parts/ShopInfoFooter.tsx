import React from 'react';
import { Typography } from '../common/Typography';
import { FacebookLogo as Facebook, InstagramLogo as Instagram, TwitterLogo as Twitter } from '@phosphor-icons/react';
import { KWVShopLogo } from '../common/Logo';

/**
 * ShopInfoFooter Component
 *
 * A specialized footer section for the Shop layout.
 * Features:
 * - Three-column layout:
 *   1. Contact Info & Social Links (Dark background).
 *   2. Service Value Propositions (Gold background).
 *   3. Interactive Map.
 * - Payment method icons strip at the bottom.
 *
 * Styles: /src/styles/sections/shop-info-footer.css
 */
export const ShopInfoFooter = () => {
  return (
    <div className="wp-shop-info-footer">
      <div className="wp-shop-info-footer__columns">
        <div className="wp-shop-info-footer__column--contact">
          <div className="wp-shop-info-footer__contact-block">
            <Typography variant="h4" className="wp-shop-info-footer__heading">
              Contact Us
            </Typography>
            <p className="wp-shop-info-footer__text">
              Tel: 021 807 3007/8<br />
              Email: info@kwvemporium.co.za<br />
              GPS: 33&deg;45&apos;45.17&quot; S, 18&deg;57&apos;58.42&quot; E
            </p>
          </div>
          <div className="wp-shop-info-footer__social-block">
            <Typography variant="h4" className="wp-shop-info-footer__heading">
              Follow Us
            </Typography>
            <div className="wp-shop-info-footer__social-icons">
              <Facebook className="wp-shop-info-footer__social-icon" size={20} />
              <Instagram className="wp-shop-info-footer__social-icon" size={20} />
              <Twitter className="wp-shop-info-footer__social-icon" size={20} />
            </div>
          </div>
        </div>
        <div className="wp-shop-info-footer__column--services">
          <Typography variant="h4" className="wp-shop-info-footer__services-heading">
            Our Excellent Service Includes
          </Typography>
          <ul className="wp-shop-info-footer__list">
            <li>Delivery within 3 Working days</li>
            <li>Safe &amp; Secure</li>
            <li>3 ways to pay</li>
            <li>Affordable Delivery Fee</li>
            <li>Click &amp; Collect after 72 hours</li>
          </ul>
        </div>
        <div className="wp-shop-info-footer__column--map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.107693214865!2d18.96402331520387!3d-33.76801668068368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdadcf7a06a71d%3A0x521940687263680!2sKWV%20Emporium!5e0!3m2!1sen!2sza!4v1625000000000!5m2!1sen!2sza"
            width="100%"
            height="100%"
            allowFullScreen={false}
            loading="lazy"
            className="wp-shop-info-footer__map-iframe"
            title="KWV Map"
          />
        </div>
      </div>
      <div className="wp-shop-info-footer__payment-strip">
        <div className="wp-shop-info-footer__payment-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" />
        </div>
        <div className="wp-shop-info-footer__payment-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" />
        </div>
        <div className="wp-shop-info-footer__payment-brand wp-shop-info-footer__payment-brand--payfast">
          <span>PayFast</span>
        </div>
        <div className="wp-shop-info-footer__payment-brand wp-shop-info-footer__payment-brand--snapscan">
          <span>SnapScan</span>
        </div>
      </div>
    </div>
  );
}