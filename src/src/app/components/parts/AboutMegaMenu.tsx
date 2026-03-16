/**
 * AboutMegaMenu - Funky Redesign
 * 2-column: about links + resources | featured image cards
 * Glassmorphism, neon accents, Phosphor icons.
 */
import React from 'react';
import { Link } from 'react-router';
import { Heart, UsersThree, Leaf, Briefcase, Question, FileText, ShieldCheck, Truck } from '../../utils/phosphor-compat';
import { MegaMenuWrapper } from './MegaMenuWrapper';

const aboutLinks = [
  { title: 'Our story', href: '/about', Icon: Heart, desc: 'Learn about our journey' },
  { title: 'Our Team', href: '/about/team', Icon: UsersThree, desc: 'Meet the people behind the brand' },
  { title: 'Sustainability', href: '/about/sustainability', Icon: Leaf, desc: 'Our commitment to the planet' },
  { title: 'Careers', href: '/about/careers', Icon: Briefcase, desc: 'Join our growing team' }
];

const resourceLinks = [
  { title: 'Help Center', href: '/help', Icon: Question },
  { title: 'FAQ', href: '/faq', Icon: FileText },
  { title: 'Shipping & Returns', href: '/shipping-returns', Icon: Truck },
  { title: 'Privacy Policy', href: '/privacy-policy', Icon: ShieldCheck },
  { title: 'Terms & Conditions', href: '/terms-and-conditions', Icon: FileText }
];

const featuredSections = [
  {
    title: 'Our story',
    subtitle: 'A passion for quality since 2020',
    href: '/about',
    overlay: 'cyan',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Sustainability',
    subtitle: 'Ethical sourcing & eco-friendly',
    href: '/about/sustainability',
    overlay: 'lime',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Join Our Team',
    subtitle: 'Explore career opportunities',
    href: '/about/careers',
    overlay: 'purple',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop'
  }
];

export const AboutMegaMenu = () => {
  const renderContent = (closeMenu: () => void) => (
    <div className="wp-mega-menu__content">
      <div className="funky-mega__orb funky-mega__orb--pink funky-mega__orb--about-pink" />
      <div className="funky-mega__orb funky-mega__orb--cyan funky-mega__orb--about-cyan" />
      <div className="funky-mega__inner funky-mega__inner--about">
        {/* Left column: About + Resources */}
        <div className="funky-mega__column funky-mega__column--bordered">
          <h4 className="funky-mega__title">About Us</h4>
          <div>
            {aboutLinks.map((link) => (
              <Link key={link.title} to={link.href} className="funky-mega__link">
                <span className="funky-mega__link-icon">
                  <link.Icon size={16} weight="duotone" />
                </span>
                <span className="funky-mega__link-text">
                  <span className="funky-mega__link-label">{link.title}</span>
                  <span className="funky-mega__link-desc">{link.desc}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="funky-mega__divider" />
          <h4 className="funky-mega__title">Resources</h4>
          <div>
            {resourceLinks.map((link) => (
              <Link key={link.title} to={link.href} className="funky-mega__link">
                <span className="funky-mega__link-icon">
                  <link.Icon size={16} weight="duotone" />
                </span>
                <span className="funky-mega__link-label">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right column: Featured cards */}
        <div className="funky-mega__column">
          <h4 className="funky-mega__title">Featured</h4>
          <div className="funky-mega__cards-grid funky-mega__cards-grid--3col">
            {featuredSections.map((section) => (
              <Link key={section.title} to={section.href} className="funky-mega__card funky-mega__card--tall">
                <img
                  src={section.image}
                  alt={section.title}
                  className="funky-mega__card-bg"
                  loading="lazy"
                />
                <div className={`funky-mega__card-overlay funky-mega__card-overlay--${section.overlay}`} />
                <div className="funky-mega__card-body">
                  <span className="funky-mega__card-title">{section.title}</span>
                  <span className="funky-mega__card-subtitle">{section.subtitle}</span>
                  <span className="funky-mega__card-cta">
                    <span>Learn more</span>
                    <Truck size={12} weight="bold" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <MegaMenuWrapper
      triggerLabel="About"
      triggerHref="/about"
      renderContent={renderContent}
    />
  );
}