/**
 * FooterRetroPattern
 *
 * Retro-themed footer matching the design reference:
 * "FOLLOW THE ADVENTURE" with social icons, email input, and SUBSCRIBE button.
 *
 * **Styling:** BEM (.pp-footer__*) 
 * **WCAG:** Semantic footer, aria-labels, 44px touch targets
 */

import React from 'react';
import { Link } from 'react-router';
import { TwitterLogo, InstagramLogo, YoutubeLogo, GameController, Bookmark } from '../../utils/phosphor-compat';

export const FooterRetroPattern = () => {
  return (
    <footer className="pp-footer" id="footer">
      <div className="pp-footer__inner">
        {/* Left: Follow text + social icons + bookmark icon */}
        <div className="pp-footer__left">
          <span className="pp-footer__follow retro-font-display">FOLLOW THE ADVENTURE</span>
          <div className="pp-footer__socials">
            <a href="https://twitter.com" className="pp-footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterLogo size={20} strokeWidth={2} />
            </a>
            <a href="https://instagram.com" className="pp-footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramLogo size={20} strokeWidth={2} />
            </a>
            <a href="https://youtube.com" className="pp-footer__social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <YoutubeLogo size={20} strokeWidth={2} />
            </a>
            <a href="https://discord.com" className="pp-footer__social-link" aria-label="Discord" target="_blank" rel="noopener noreferrer">
              <GameController size={20} strokeWidth={2} />
            </a>
          </div>
          <Bookmark size={20} className="pp-footer__bookmark" aria-hidden="true" />
        </div>

        {/* Right: Email + Subscribe */}
        <div className="pp-footer__right">
          <div className="pp-footer__email-group">
            <input
              type="email"
              placeholder="EMAIL"
              className="pp-footer__email-input retro-font-display"
              aria-label="Email address for newsletter"
            />
            <button className="pp-pixel-btn pp-pixel-btn--subscribe retro-font-display">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="pp-footer__copyright retro-font-display">
        <span>&copy; 2026 PLAYPOCKET. NO COINS REQUIRED.</span>
        <div className="pp-footer__legal">
          <Link to="/privacy-policy">PRIVACY</Link>
          <Link to="/terms-and-conditions">TERMS</Link>
          <Link to="/sitemap">SITEMAP</Link>
        </div>
      </div>
    </footer>
  );
};

FooterRetroPattern.displayName = 'FooterRetroPattern';