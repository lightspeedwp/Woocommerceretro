/**
 * PageHelpCenterRetro - Retro-Styled Help Center Page
 *
 * Help center hub with retro handheld gaming aesthetic.
 * Features help category cards, popular articles, and contact options.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Help category grid with icon cards
 * - Popular articles list with link styling
 * - Contact options (chat, email, phone)
 * - Search-friendly layout
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/help-center-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import {
  Question as HelpCircle,
  Package,
  Truck,
  ArrowCounterClockwise as RotateCcw,
  CreditCard,
  User,
  ChatCircle,
  Phone,
  Envelope,
  BookOpen,
  ArrowRight,
  Lifebuoy,
} from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { helpCategories, popularArticles, helpCenterPageContent } from '../../data/helpCenter';
import { getHeadquarters } from '../../data/company';

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'Package': Package,
  'Truck': Truck,
  'RotateCcw': RotateCcw,
  'CreditCard': CreditCard,
  'User': User,
  'HelpCircle': HelpCircle,
};

export const PageHelpCenterRetro = () => {
  const headquarters = getHeadquarters();
  const phone = headquarters ? headquarters.phone : '1-800-555-0199';
  const email = headquarters ? headquarters.email : 'support@wooshop.com';

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['HELP', 'CENTER']}
          highlight="24/7 SUPPORT"
          description="How can we help you? Browse topics below or contact our support team."
          images={{
            main: 'https://images.unsplash.com/photo-1724260793422-7754e5d06fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0JTIwaGVscCUyMGRlc2t8ZW58MXx8fHwxNzczMzQyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1762330474120-71b4057a8b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY2hhdCUyMHN1cHBvcnQlMjBjb21wdXRlciUyMHNjcmVlbnxlbnwxfHx8fDE3NzMzNDIxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczMzQyMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Help Categories Section */}
        <section className="retro-section" aria-labelledby="help-categories-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="help-categories-heading" className="retro-font-display retro-bold retro-section-title">
                {helpCenterPageContent.categoriesHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-grid retro-grid-3">
              {helpCategories.map((category: any, i: number) => {
                const Icon = categoryIcons[category.icon] || HelpCircle;
                return (
                  <Link key={i} to={category.link} className="retro-card retro-card--glow retro-help-category-card">
                    <div className="retro-feature-icon">
                      <Icon size={32} weight="bold" aria-hidden="true" />
                    </div>
                    <h3 className="retro-card__title retro-font-display retro-bold">
                      {category.title.toUpperCase()}
                    </h3>
                    <p className="retro-card__desc retro-font-body">
                      {category.description}
                    </p>
                    <span className="retro-card-link retro-font-body">
                      VIEW ARTICLES <ArrowRight size={14} weight="bold" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="retro-section retro-section--articles" aria-labelledby="help-articles-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="help-articles-heading" className="retro-font-display retro-bold retro-section-title">
                {helpCenterPageContent.articlesHeading.toUpperCase()}
              </h2>
            </div>

            <div className="retro-articles-list">
              {popularArticles.map((article: any, i: number) => (
                <Link key={i} to={article.link} className="retro-article-link">
                  <BookOpen size={18} weight="bold" className="retro-article-icon" aria-hidden="true" />
                  <span className="retro-font-body">{article.title}</span>
                  <ArrowRight size={14} weight="bold" className="retro-article-arrow" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="retro-section" aria-labelledby="help-contact-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="help-contact-heading" className="retro-font-display retro-bold retro-section-title">
                {helpCenterPageContent.contactHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {helpCenterPageContent.contactText}
              </p>
            </div>

            <div className="retro-grid retro-grid-3">
              {/* Live Chat */}
              <div className="retro-card retro-contact-card">
                <div className="retro-feature-icon">
                  <ChatCircle size={32} weight="bold" aria-hidden="true" />
                </div>
                <h3 className="retro-card__title retro-font-display retro-bold">
                  LIVE CHAT
                </h3>
                <p className="retro-card__desc retro-font-body">
                  {helpCenterPageContent.chat.desc}
                </p>
                <Link to="/chat" className="retro-btn retro-btn--primary retro-font-display">
                  {helpCenterPageContent.chat.action.toUpperCase()} <ArrowRight size={16} weight="bold" />
                </Link>
              </div>

              {/* Email Support */}
              <div className="retro-card retro-contact-card">
                <div className="retro-feature-icon">
                  <Envelope size={32} weight="bold" aria-hidden="true" />
                </div>
                <h3 className="retro-card__title retro-font-display retro-bold">
                  EMAIL SUPPORT
                </h3>
                <p className="retro-card__desc retro-font-body">
                  {helpCenterPageContent.email.desc}
                </p>
                <a href={'mailto:' + email} className="retro-btn retro-btn--secondary retro-font-display">
                  {helpCenterPageContent.email.action.toUpperCase()} <ArrowRight size={16} weight="bold" />
                </a>
              </div>

              {/* Phone Support */}
              <div className="retro-card retro-contact-card">
                <div className="retro-feature-icon">
                  <Phone size={32} weight="bold" aria-hidden="true" />
                </div>
                <h3 className="retro-card__title retro-font-display retro-bold">
                  PHONE SUPPORT
                </h3>
                <p className="retro-card__desc retro-font-body">
                  {phone}
                </p>
                <a href={'tel:' + phone.replace(/\D/g, '')} className="retro-btn retro-btn--secondary retro-font-display">
                  {helpCenterPageContent.phone.desc.toUpperCase()} <ArrowRight size={16} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};