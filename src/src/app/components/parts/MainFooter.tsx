import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as FooterData from '../../data/footer';
import * as SiteData from '../../data/site';
import * as LogoModule from '../common/Logo';
import * as NewsletterCTAModule from '../patterns/NewsletterCTA';
import { InstagramLogo, TwitterLogo, FacebookLogo, PinterestLogo, YoutubeLogo, TiktokLogo, LinkedinLogo, Link as LinkIcon } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var footerColumns = FooterData.footerColumns;
var footerNewsletter = FooterData.footerNewsletter;
var footerBrandBlurb = FooterData.footerBrandBlurb;
var footerLegalLinks = FooterData.footerLegalLinks;
var brand = SiteData.brand;
var socialLinks = SiteData.socialLinks;
var legal = SiteData.legal;
var paymentMethods = SiteData.paymentMethods;
var ShopLogo = LogoModule.ShopLogo;
var NewsletterCTA = NewsletterCTAModule.NewsletterCTA;

/**
 * MainFooter Component (Global Template Part)
 *
 * Full-width newsletter banner above a 5-column footer grid
 * with brand info (col 1), 4 navigation columns (Shop, Company,
 * Support, Legal), social icons, payment icons, and copyright bar.
 *
 * Structure:
 *   1. Newsletter banner (horizontal, full-width, funky glassmorphism)
 *   2. Footer grid (5 columns: brand + 4 nav columns, one line on desktop)
 *   3. Bottom bar (copyright + legal links + dev tools link)
 *
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. Named functions / var declarations
 * 4. ASCII only
 *
 * @part
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} [props.className] - Optional extra class
 */
export function MainFooter(props) {
  var id = props.id;
  var className = props.className || '';
  var currentYear = new Date().getFullYear();

  /* ------------------------------------------------------------------ */
  /* Newsletter Banner (horizontal, above footer grid)                   */
  /* ------------------------------------------------------------------ */

  var newsletterBanner = React.createElement(NewsletterCTA, {
    key: 'newsletter-banner',
    variant: 'banner',
    heading: footerNewsletter.heading,
    description: footerNewsletter.description,
    buttonText: footerNewsletter.buttonText,
    placeholder: footerNewsletter.placeholder,
    className: 'wp-footer-newsletter-integrated'
  });

  /* ------------------------------------------------------------------ */
  /* Brand Column                                                        */
  /* ------------------------------------------------------------------ */

  var logoEl = React.createElement(Link, {
    key: 'logo',
    to: '/',
    className: 'wp-site-footer__logo-link',
    'aria-label': brand.name + ' - home',
    style: { display: 'inline-block' }
  }, React.createElement(ShopLogo, {
    className: 'wp-site-footer__logo',
    variant: 'current'
  }));

  var descriptionEl = React.createElement('p', {
    key: 'desc',
    className: 'wp-site-footer__description'
  }, footerBrandBlurb);

  /* Social Icons */
  var socialItems = [];
  var si;
  for (si = 0; si < socialLinks.length; si++) {
    var social = socialLinks[si];
    
    var IconComponent;
    var platformLower = social.platform.toLowerCase();
    if (platformLower === 'instagram') IconComponent = InstagramLogo;
    else if (platformLower === 'twitter' || platformLower === 'x (twitter)') IconComponent = TwitterLogo;
    else if (platformLower === 'facebook') IconComponent = FacebookLogo;
    else if (platformLower === 'pinterest') IconComponent = PinterestLogo;
    else if (platformLower === 'youtube') IconComponent = YoutubeLogo;
    else if (platformLower === 'tiktok') IconComponent = TiktokLogo;
    else if (platformLower === 'linkedin') IconComponent = LinkedinLogo;
    else IconComponent = LinkIcon;

    var iconElement = React.createElement(IconComponent, {
      size: 22,
      weight: 'fill',
      className: 'wp-footer-social-icon__svg'
    });

    socialItems.push(
      React.createElement('a', {
        key: social.id,
        href: social.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'wp-footer-social-icon funky-spring-hover',
        'aria-label': social.label
      }, iconElement)
    );
  }

  var socialEl = React.createElement('div', {
    key: 'social',
    className: 'wp-site-footer__social'
  }, socialItems);

  /* Payment Icons */
  var paymentItems = [];
  var pi;
  for (pi = 0; pi < paymentMethods.length; pi++) {
    var pm = paymentMethods[pi];
    paymentItems.push(
      React.createElement('span', {
        key: pm.id,
        className: 'wp-site-footer__payment-icon',
        'aria-label': pm.name,
        title: pm.name
      }, pm.name.substring(0, 4))
    );
  }

  var paymentsEl = React.createElement('div', {
    key: 'payments',
    className: 'wp-site-footer__payments'
  }, paymentItems);

  var brandColumn = React.createElement('div', {
    key: 'brand-col',
    className: 'wp-site-footer__brand'
  }, [logoEl, descriptionEl, socialEl, paymentsEl]);

  /* ------------------------------------------------------------------ */
  /* Navigation Columns (Shop, Company, Support, Legal)                  */
  /* ------------------------------------------------------------------ */

  var navColumns = [];
  var ci;
  for (ci = 0; ci < footerColumns.length; ci++) {
    var col = footerColumns[ci];

    var heading = React.createElement('h3', {
      key: 'h-' + col.id,
      className: 'wp-site-footer__heading'
    }, col.heading);

    var linkItems = [];
    var li;
    for (li = 0; li < col.links.length; li++) {
      var lnk = col.links[li];
      linkItems.push(
        React.createElement('li', { key: lnk.id },
          React.createElement(Link, {
            to: lnk.url,
            className: 'wp-site-footer__link'
          }, lnk.label)
        )
      );
    }

    var linkList = React.createElement('ul', {
      key: 'ul-' + col.id,
      className: 'wp-site-footer__links',
      role: 'list'
    }, linkItems);

    navColumns.push(
      React.createElement('nav', {
        key: 'nav-' + col.id,
        className: 'wp-site-footer__section',
        'aria-label': col.heading + ' links'
      }, [heading, linkList])
    );
  }

  /* ------------------------------------------------------------------ */
  /* Footer Grid (5 columns: brand + 4 nav columns)                      */
  /* ------------------------------------------------------------------ */

  var gridChildren = [brandColumn];
  var ni;
  for (ni = 0; ni < navColumns.length; ni++) {
    gridChildren.push(navColumns[ni]);
  }

  var grid = React.createElement('div', {
    key: 'grid',
    className: 'wp-site-footer__grid wp-site-footer__grid--5col'
  }, gridChildren);

  var mainSection = React.createElement('div', {
    key: 'main-section',
    className: 'wp-site-footer__main'
  }, grid);

  /* ------------------------------------------------------------------ */
  /* Bottom Bar (Copyright + Legal Links + Dev Tools)                    */
  /* ------------------------------------------------------------------ */

  var copyrightEl = React.createElement('span', {
    key: 'copy',
    className: 'wp-site-footer__copyright'
  }, legal.copyrightNotice(currentYear));

  var devLink = React.createElement(Link, {
    key: 'dev',
    to: '/dev-tools',
    className: 'wp-site-footer__tester-link'
  }, 'Dev Tools');

  var copyrightGroup = React.createElement('div', {
    key: 'copy-group',
    className: 'wp-site-footer__copyright-group'
  }, [copyrightEl, devLink]);

  var legalItems = [];
  var lgi;
  for (lgi = 0; lgi < footerLegalLinks.length; lgi++) {
    var leg = footerLegalLinks[lgi];
    legalItems.push(
      React.createElement(Link, {
        key: leg.id,
        to: leg.url,
        className: 'wp-site-footer__legal-link'
      }, leg.label)
    );
  }

  var legalLinksEl = React.createElement('div', {
    key: 'legal',
    className: 'wp-site-footer__legal-links'
  }, legalItems);

  var bottomContent = React.createElement('div', {
    key: 'bottom-content',
    className: 'wp-site-footer__bottom-content'
  }, [copyrightGroup, legalLinksEl]);

  var bottomInner = React.createElement('div', {
    key: 'bottom-inner',
    className: 'wp-site-footer__bottom-inner'
  }, bottomContent);

  var bottomBar = React.createElement('div', {
    key: 'bottom-bar',
    className: 'wp-site-footer__bottom'
  }, bottomInner);

  /* ------------------------------------------------------------------ */
  /* Footer Element                                                      */
  /* ------------------------------------------------------------------ */

  return React.createElement('footer', {
    id: id,
    className: 'wp-site-footer wp-site-footer--funky' + (className ? ' ' + className : ''),
    role: 'contentinfo',
    'aria-label': 'Site footer'
  }, [newsletterBanner, mainSection, bottomBar]);
}

MainFooter.displayName = 'MainFooter';