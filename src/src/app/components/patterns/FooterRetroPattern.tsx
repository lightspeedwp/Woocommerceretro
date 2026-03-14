import React from 'react';
import { Link } from 'react-router';
import { TwitterLogo, InstagramLogo, YoutubeLogo, DiscordLogo, Truck, ArrowUUpLeft, ShieldCheck } from '@phosphor-icons/react';

/**
 * FooterRetroPattern
 *
 * Retro-themed footer with trust banner, links, social icons, and newsletter.
 *
 * **Styling:** BEM (.retro-footer__*, .retro-copyright) in /src/styles/sections/retro-patterns.css
 * **Shared tokens:** /src/styles/sections/front-page-funky.css
 */
export const FooterRetroPattern = () => {
  return (
    <footer className="retro-footer-container">
      {/* Trust Banner */}
      <div className="retro-trust-banner retro-font-display retro-bold">
        <div className="retro-trust-item"><Truck size={20} /> FREE SHIPPING $50+</div>
        <div className="retro-trust-item"><ArrowUUpLeft size={20} /> EASY RETURNS</div>
        <div className="retro-trust-item"><ShieldCheck size={20} /> LEVEL UP REWARDS</div>
      </div>

      {/* Main Footer Box */}
      <div className="retro-footer">
        <div className="retro-footer-left">
          <div className="retro-footer-links retro-font-display retro-bold">
            <Link to="/contact" className="retro-footer-link">CONTACT</Link>
            <Link to="/faq" className="retro-footer-link">FAQ</Link>
            <Link to="/stores" className="retro-footer-link">STORES</Link>
            <Link to="/shipping" className="retro-footer-link">SHIPPING</Link>
            <Link to="/returns" className="retro-footer-link">RETURNS</Link>
            <Link to="/compare" className="retro-footer-link">COMPARE</Link>
          </div>
          <div className="retro-footer-icons">
            <TwitterLogo size={24} weight="fill" />
            <InstagramLogo size={24} weight="fill" />
            <YoutubeLogo size={24} weight="fill" />
            <DiscordLogo size={24} weight="fill" />
          </div>
        </div>
        <div className="retro-footer-right">
          <input type="email" placeholder="ENTER EMAIL" className="retro-input retro-font-display retro-bold" />
          <button className="retro-button retro-button--primary retro-font-display retro-bold retro-footer__signup-btn">SIGN UP -&gt;</button>
        </div>
      </div>

      {/* Copyright */}
      <div className="retro-copyright retro-font-display">
        <span>&copy; 2026 PLAYPOCKET. NO COINS REQUIRED.</span>
        <Link to="/privacy-policy" className="retro-footer-link">PRIVACY POLICY</Link>
        <Link to="/terms-and-conditions" className="retro-footer-link">TERMS &amp; CONDITIONS</Link>
        <Link to="/sitemap" className="retro-footer-link">SITEMAP</Link>
      </div>
    </footer>
  );
}

FooterRetroPattern.displayName = 'FooterRetroPattern';