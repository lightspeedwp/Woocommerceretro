import React from 'react';
import { Link } from 'react-router';
import { footerColumns, footerNewsletter, footerBrandBlurb, footerLegalLinks } from '../../data/footer';
import { brand, socialLinks, legal, paymentMethods } from '../../data/site';
import { ShopLogo } from '../common/Logo';
import { NewsletterCTA } from '../patterns/NewsletterCTA';
import { InstagramLogo, TwitterLogo, FacebookLogo, PinterestLogo, YoutubeLogo, TiktokLogo, LinkedinLogo, Link as LinkIcon } from '@phosphor-icons/react';

/**
 * MainFooter Component (Global Template Part)
 *
 * Full-width newsletter banner above a 5-column footer grid
 * with brand info (col 1), 4 navigation columns (Shop, Company,
 * Support, Legal), social icons, payment icons, and copyright bar.
 *
 * @part
 */

interface MainFooterProps {
  id?: string;
  className?: string;
}

const SOCIAL_ICON_MAP: Record<string, React.ElementType> = {
  instagram: InstagramLogo,
  twitter: TwitterLogo,
  'x (twitter)': TwitterLogo,
  facebook: FacebookLogo,
  pinterest: PinterestLogo,
  youtube: YoutubeLogo,
  tiktok: TiktokLogo,
  linkedin: LinkedinLogo,
};

export const MainFooter = ({ id, className = '' }: MainFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id={id}
      className={`wp-site-footer wp-site-footer--funky${className ? ` ${className}` : ''}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Newsletter Banner */}
      <NewsletterCTA
        variant="banner"
        heading={footerNewsletter.heading}
        description={footerNewsletter.description}
        buttonText={footerNewsletter.buttonText}
        placeholder={footerNewsletter.placeholder}
        className="wp-footer-newsletter-integrated"
      />

      {/* Footer Grid */}
      <div className="wp-site-footer__main">
        <div className="wp-site-footer__grid wp-site-footer__grid--5col">
          {/* Brand Column */}
          <div className="wp-site-footer__brand">
            <Link to="/" className="wp-site-footer__logo-link" aria-label={`${brand.name} - home`} style={{ display: 'inline-block' }}>
              <ShopLogo className="wp-site-footer__logo" variant="current" />
            </Link>
            <p className="wp-site-footer__description">{footerBrandBlurb}</p>
            <div className="wp-site-footer__social">
              {socialLinks.map((social) => {
                const IconComp = SOCIAL_ICON_MAP[social.platform.toLowerCase()] || LinkIcon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wp-footer-social-icon funky-spring-hover"
                    aria-label={social.label}
                  >
                    <IconComp size={22} weight="fill" className="wp-footer-social-icon__svg" />
                  </a>
                );
              })}
            </div>
            <div className="wp-site-footer__payments">
              {paymentMethods.map((pm) => (
                <span key={pm.id} className="wp-site-footer__payment-icon" aria-label={pm.name} title={pm.name}>
                  {pm.name.substring(0, 4)}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerColumns.map((col) => (
            <nav key={`nav-${col.id}`} className="wp-site-footer__section" aria-label={`${col.heading} links`}>
              <h3 className="wp-site-footer__heading">{col.heading}</h3>
              <ul className="wp-site-footer__links" role="list">
                {col.links.map((lnk) => (
                  <li key={lnk.id}>
                    <Link to={lnk.url} className="wp-site-footer__link">{lnk.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="wp-site-footer__bottom">
        <div className="wp-site-footer__bottom-inner">
          <div className="wp-site-footer__bottom-content">
            <div className="wp-site-footer__copyright-group">
              <span className="wp-site-footer__copyright">{legal.copyrightNotice(currentYear)}</span>
              <Link to="/dev-tools" className="wp-site-footer__tester-link">Dev Tools</Link>
            </div>
            <div className="wp-site-footer__legal-links">
              {footerLegalLinks.map((leg) => (
                <Link key={leg.id} to={leg.url} className="wp-site-footer__legal-link">{leg.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

MainFooter.displayName = 'MainFooter';