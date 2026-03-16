/**
 * ArchiveAudio — Retro-Styled Podcast Archive
 *
 * Podcast episode grid with retro handheld gaming aesthetic.
 * All content driven from /data/podcasts.ts.
 *
 * **CSS:** `/src/styles/sections/blog-archive-audio.css`
 * **Dark Mode:** Automatic via retro theme tokens
 * **WCAG AA 2.2:** Semantic HTML, pagination, alt text
 *
 * @route /blog/format/audio
 * @alias /podcasts
 */

import { useState } from 'react';
import { Microphone as Mic, PlayCircle, Calendar, User, CaretLeft, CaretRight } from '../../../utils/phosphor-compat';
import { HeaderRetro } from '../../parts/HeaderRetro';
import { FooterRetro } from '../../parts/FooterRetro';
import { HeroRetro } from '../../patterns/HeroRetro';
import { PODCAST_EPISODES, podcastPageContent } from '../../../data/podcasts';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const EPISODES_PER_PAGE = podcastPageContent.episodesPerPage;

export const ArchiveAudio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PODCAST_EPISODES.length / EPISODES_PER_PAGE);
  const startIdx = (currentPage - 1) * EPISODES_PER_PAGE;
  const paginatedEpisodes = PODCAST_EPISODES.slice(startIdx, startIdx + EPISODES_PER_PAGE);

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero */}
        <HeroRetro
          titleLines={['PODCAST', 'ARCHIVE']}
          highlight={podcastPageContent.heroTitle?.toUpperCase() || 'EPISODES'}
          description={podcastPageContent.heroSubtitle || 'Listen to our latest episodes covering gaming culture, product drops, and community stories.'}
        />

        {/* Episode Grid */}
        <section className="retro-section" aria-labelledby="podcast-grid-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="podcast-grid-heading" className="retro-font-display retro-bold retro-section-title">
                ALL EPISODES
              </h2>
            </div>

            <div className="retro-podcast-grid">
              {paginatedEpisodes.map((episode) => (
                <article key={episode.id} className="retro-podcast-card">
                  <div className="retro-podcast-card__thumb">
                    <ImageWithFallback
                      src={episode.featuredImage}
                      alt={episode.title}
                      className="retro-podcast-card__img"
                    />
                    <div className="retro-podcast-card__play" aria-hidden="true">
                      <PlayCircle size={36} weight="fill" />
                    </div>
                    <span className="retro-podcast-card__badge retro-font-display">
                      EP {episode.episodeNumber}
                    </span>
                  </div>
                  <div className="retro-podcast-card__info">
                    <h3 className="retro-font-display retro-bold retro-podcast-card__title">
                      {episode.title.toUpperCase()}
                    </h3>
                    <p className="retro-font-body retro-podcast-card__excerpt">
                      {episode.excerpt}
                    </p>
                    <div className="retro-podcast-card__meta retro-font-body">
                      <span>
                        <Calendar size={12} aria-hidden="true" /> {episode.date}
                      </span>
                      <span>
                        <User size={12} aria-hidden="true" /> {episode.author}
                      </span>
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="retro-pagination" aria-label="Podcast pagination">
                <button
                  className="retro-btn retro-btn--secondary retro-font-display"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <CaretLeft size={14} weight="bold" /> PREV
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={'retro-btn retro-font-display' + (page === currentPage ? ' retro-btn--primary' : ' retro-btn--secondary')}
                    onClick={() => setCurrentPage(page)}
                    aria-label={'Page ' + page}
                    aria-current={page === currentPage ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
                <button
                  className="retro-btn retro-btn--secondary retro-font-display"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  NEXT <CaretRight size={14} weight="bold" />
                </button>
              </nav>
            )}
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};
