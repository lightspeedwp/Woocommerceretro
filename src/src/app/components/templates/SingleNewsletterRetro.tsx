/**
 * SingleNewsletterRetro
 *
 * "PlayPocket" FSE — Single Newsletter Issue View.
 * Renders the newsletter as an email template with a "view on website" header
 * and link back to the main site.
 *
 * @route /newsletter/:slug
 * @template
 */

import { useParams, Link } from 'react-router';
import { Envelope, ArrowLeft, ArrowRight, Globe, CalendarBlank } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { getNewsletterBySlug, NEWSLETTER_ISSUES } from '../../data/newsletters';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const SingleNewsletterRetro = () => {
  const { slug } = useParams<{ slug: string }>();
  const issue = slug ? getNewsletterBySlug(slug) : undefined;

  if (!issue) {
    return (
      <div className="retro-home theme-retro">
        <div className="retro-container">
          <HeaderRetro />
          <main className="retro-newsletter-single" id="main-content">
            <div className="retro-newsletter-single__not-found">
              <h1 className="retro-font-display retro-bold">ISSUE NOT FOUND</h1>
              <p className="retro-font-body">This newsletter issue could not be found.</p>
              <Link to="/newsletter/archive" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                <ArrowLeft weight="bold" size={14} /> BACK TO ARCHIVE
              </Link>
            </div>
          </main>
          <FooterRetro />
        </div>
      </div>
    );
  }

  /* Determine prev/next issues */
  const currentIdx = NEWSLETTER_ISSUES.findIndex((n) => n.id === issue.id);
  const prevIssue = currentIdx < NEWSLETTER_ISSUES.length - 1 ? NEWSLETTER_ISSUES[currentIdx + 1] : null;
  const nextIssue = currentIdx > 0 ? NEWSLETTER_ISSUES[currentIdx - 1] : null;

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-newsletter-single" id="main-content">
          {/* Email-style envelope wrapper */}
          <div className="retro-newsletter-single__envelope">
            {/* Web view header */}
            <div className="retro-newsletter-single__web-header">
              <Globe size={14} weight="bold" />
              <span className="retro-font-display">
                Viewing this on the web?{' '}
                <Link to="/" className="retro-newsletter-single__home-link">
                  Visit PlayPocket.com
                </Link>
              </span>
            </div>

            {/* Newsletter header */}
            <header className="retro-newsletter-single__header">
              <div className="retro-newsletter-single__logo">
                <Envelope weight="bold" size={24} />
                <span className="retro-font-display retro-bold">POCKET DISPATCH</span>
              </div>
              <div className="retro-newsletter-single__issue-meta retro-font-display">
                <span>#{String(issue.issueNumber).padStart(3, '0')}</span>
                <span className="retro-newsletter-single__meta-dot">&bull;</span>
                <span><CalendarBlank size={12} weight="bold" /> {issue.date}</span>
              </div>
            </header>

            {/* Hero image */}
            <div className="retro-newsletter-single__hero-image">
              <ImageWithFallback
                src={issue.heroImage}
                alt=""
                className="retro-newsletter-single__hero-img"
              />
            </div>

            {/* Subject line */}
            <div className="retro-newsletter-single__subject">
              <h1 className="retro-newsletter-single__subject-title retro-font-display retro-bold">
                {issue.subject}
              </h1>
            </div>

            {/* Sections */}
            <div className="retro-newsletter-single__content">
              {issue.sections.map((section, idx) => (
                <div key={idx} className="retro-newsletter-single__section">
                  <h2 className="retro-newsletter-single__section-heading retro-font-display retro-bold">
                    {section.heading}
                  </h2>
                  <p className="retro-font-body retro-newsletter-single__section-body">
                    {section.body}
                  </p>
                  {section.image && (
                    <div className="retro-newsletter-single__section-image">
                      <ImageWithFallback
                        src={section.image}
                        alt=""
                        className="retro-newsletter-single__section-img"
                      />
                    </div>
                  )}
                  {section.ctaText && section.ctaUrl && (
                    <Link
                      to={section.ctaUrl}
                      className="retro-btn retro-btn--primary retro-font-display retro-bold retro-newsletter-single__cta"
                    >
                      {section.ctaText.toUpperCase()} <ArrowRight weight="bold" size={12} />
                    </Link>
                  )}
                  {idx < issue.sections.length - 1 && (
                    <hr className="retro-newsletter-single__divider" />
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <footer className="retro-newsletter-single__footer">
              <p className="retro-font-display retro-newsletter-single__footer-text">
                You received this because you subscribed to the Pocket Dispatch newsletter.
              </p>
              <div className="retro-newsletter-single__footer-links retro-font-display">
                <Link to="/newsletter">Manage Preferences</Link>
                <span>&bull;</span>
                <Link to="/">Visit PlayPocket.com</Link>
              </div>
            </footer>
          </div>

          {/* Prev / Next navigation */}
          <nav className="retro-newsletter-single__nav" aria-label="Newsletter navigation">
            {prevIssue ? (
              <Link to={'/newsletter/' + prevIssue.slug} className="retro-newsletter-single__nav-link retro-font-display retro-bold">
                <ArrowLeft weight="bold" size={14} /> #{String(prevIssue.issueNumber).padStart(3, '0')}
              </Link>
            ) : <span />}
            <Link to="/newsletter/archive" className="retro-newsletter-single__nav-link retro-font-display retro-bold">
              ALL ISSUES
            </Link>
            {nextIssue ? (
              <Link to={'/newsletter/' + nextIssue.slug} className="retro-newsletter-single__nav-link retro-font-display retro-bold">
                #{String(nextIssue.issueNumber).padStart(3, '0')} <ArrowRight weight="bold" size={14} />
              </Link>
            ) : <span />}
          </nav>
        </main>

        <FooterRetro />
      </div>
    </div>
  );
};

SingleNewsletterRetro.displayName = 'SingleNewsletterRetro';