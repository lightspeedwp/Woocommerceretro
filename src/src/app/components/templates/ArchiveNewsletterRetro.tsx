/**
 * ArchiveNewsletterRetro
 *
 * "PlayPocket" FSE — Newsletter Archive listing.
 * Displays past newsletter issues with retro card styling.
 * Paginates after 6 issues.
 *
 * @route /newsletter/archive
 * @template
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { Envelope, CalendarBlank, ArrowRight, CaretLeft, CaretRight } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { NEWSLETTER_ISSUES } from '../../data/newsletters';

const ISSUES_PER_PAGE = 6;

export const ArchiveNewsletterRetro = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(NEWSLETTER_ISSUES.length / ISSUES_PER_PAGE);
  const startIdx = (currentPage - 1) * ISSUES_PER_PAGE;
  const paginatedIssues = NEWSLETTER_ISSUES.slice(startIdx, startIdx + ISSUES_PER_PAGE);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-newsletter-archive" id="main-content">
          {/* Hero */}
          <section className="retro-newsletter-archive__hero" aria-label="Newsletter archive">
            <div className="retro-newsletter-archive__hero-icon">
              <Envelope weight="bold" size={28} />
            </div>
            <h1 className="retro-newsletter-archive__hero-title retro-font-display retro-bold">
              POCKET DISPATCH
            </h1>
            <p className="retro-font-body retro-newsletter-archive__hero-desc">
              Browse past issues of our monthly newsletter. Gaming news, exclusive drops, and community highlights.
            </p>
          </section>

          {/* Issue Grid */}
          <section className="retro-newsletter-archive__grid" aria-label="Newsletter issues">
            {paginatedIssues.map((issue) => (
              <article key={issue.id} className="retro-newsletter-card">
                <Link to={'/newsletter/' + issue.slug} className="retro-newsletter-card__link">
                  <div className="retro-newsletter-card__image-wrap">
                    <img
                      src={issue.heroImage}
                      alt=""
                      className="retro-newsletter-card__image"
                      loading="lazy"
                    />
                    <span className="retro-newsletter-card__issue-badge retro-font-display retro-bold">
                      #{String(issue.issueNumber).padStart(3, '0')}
                    </span>
                  </div>
                  <div className="retro-newsletter-card__body">
                    <div className="retro-newsletter-card__meta retro-font-display">
                      <CalendarBlank size={12} weight="bold" />
                      {issue.date}
                    </div>
                    <h2 className="retro-newsletter-card__title retro-font-display retro-bold">
                      {issue.subject}
                    </h2>
                    <p className="retro-font-body retro-newsletter-card__preview">
                      {issue.previewText}
                    </p>
                    <span className="retro-newsletter-card__cta retro-font-display retro-bold">
                      READ ISSUE <ArrowRight weight="bold" size={12} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="retro-newsletter-archive__pagination" aria-label="Newsletter pagination">
              <button
                className="retro-newsletter-archive__page-btn retro-font-display retro-bold"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <CaretLeft weight="bold" size={14} /> PREV
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={'retro-newsletter-archive__page-btn retro-font-display retro-bold' + (page === currentPage ? ' retro-newsletter-archive__page-btn--active' : '')}
                  onClick={() => setCurrentPage(page)}
                  aria-label={'Page ' + page}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                className="retro-newsletter-archive__page-btn retro-font-display retro-bold"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                NEXT <CaretRight weight="bold" size={14} />
              </button>
            </nav>
          )}
        </main>

        <FooterRetro />
      </div>
    </div>
  );
};

ArchiveNewsletterRetro.displayName = 'ArchiveNewsletterRetro';