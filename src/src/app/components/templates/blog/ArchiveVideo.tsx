/**
 * ArchiveVideo — Retro-Styled Video Archive
 *
 * YouTube-style video grid with retro handheld gaming aesthetic.
 * Features a featured video hero, remaining videos in paginated grid.
 *
 * **CSS:** `/src/styles/sections/blog-archive-video.css`
 * **Dark Mode:** Automatic via retro theme tokens
 * **WCAG AA 2.2:** Alt text, semantic HTML, pagination
 *
 * @route /blog/format/video
 */

import { useState } from 'react';
import { Play, Clock, CaretLeft, CaretRight, Eye } from '../../../utils/phosphor-compat';
import { HeaderRetro } from '../../parts/HeaderRetro';
import { FooterRetro } from '../../parts/FooterRetro';
import { HeroRetro } from '../../patterns/HeroRetro';
import { VIDEO_POSTS, getFeaturedVideo, videoPageContent } from '../../../data/videos';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

const VIDEOS_PER_PAGE = videoPageContent.videosPerPage;

const formatViews = (views: number) => {
  if (views >= 1000) return (views / 1000).toFixed(1) + 'K';
  return String(views);
};

export const ArchiveVideo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const featuredVideo = getFeaturedVideo();
  const remainingVideos = VIDEO_POSTS.filter((v) => v.id !== featuredVideo.id);
  const totalPages = Math.ceil(remainingVideos.length / VIDEOS_PER_PAGE);
  const startIdx = (currentPage - 1) * VIDEOS_PER_PAGE;
  const paginatedVideos = remainingVideos.slice(startIdx, startIdx + VIDEOS_PER_PAGE);

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero */}
        <HeroRetro
          titleLines={['VIDEO', 'ARCHIVE']}
          highlight={videoPageContent.heroTitle?.toUpperCase() || 'WATCH NOW'}
          description={videoPageContent.heroSubtitle || 'Product reviews, tutorials, and community spotlights.'}
        />

        {/* Featured Video */}
        <section className="retro-section" aria-labelledby="featured-video-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="featured-video-heading" className="retro-font-display retro-bold retro-section-title">
                {(videoPageContent.featuredLabel || 'FEATURED VIDEO').toUpperCase()}
              </h2>
            </div>

            <article className="retro-video-featured">
              <div className="retro-video-featured__thumb">
                <ImageWithFallback
                  src={featuredVideo.featuredImage}
                  alt={featuredVideo.title}
                  className="retro-video-featured__img"
                />
                <div className="retro-video-featured__play" aria-hidden="true">
                  <Play size={48} weight="fill" />
                </div>
                <span className="retro-video-featured__duration retro-font-display">
                  <Clock size={12} aria-hidden="true" /> {featuredVideo.duration}
                </span>
              </div>
              <div className="retro-video-featured__info">
                <h3 className="retro-font-display retro-bold retro-video-featured__title">
                  {featuredVideo.title.toUpperCase()}
                </h3>
                <p className="retro-font-body retro-video-featured__excerpt">
                  {featuredVideo.excerpt}
                </p>
                <div className="retro-video-featured__meta retro-font-body">
                  <span><Eye size={14} aria-hidden="true" /> {formatViews(featuredVideo.views)} views</span>
                  <span>{featuredVideo.date}</span>
                  <span>By {featuredVideo.author}</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Video Grid */}
        <section className="retro-section" aria-labelledby="video-grid-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="video-grid-heading" className="retro-font-display retro-bold retro-section-title">
                ALL VIDEOS
              </h2>
            </div>

            <div className="retro-video-grid">
              {paginatedVideos.map((video) => (
                <article key={video.id} className="retro-video-card">
                  <div className="retro-video-card__thumb">
                    <ImageWithFallback
                      src={video.featuredImage}
                      alt={video.title}
                      className="retro-video-card__img"
                    />
                    <div className="retro-video-card__play" aria-hidden="true">
                      <Play size={36} weight="fill" />
                    </div>
                    <span className="retro-video-card__duration retro-font-display">
                      <Clock size={10} aria-hidden="true" /> {video.duration}
                    </span>
                  </div>
                  <div className="retro-video-card__info">
                    <h3 className="retro-font-display retro-bold retro-video-card__title">
                      {video.title.toUpperCase()}
                    </h3>
                    <div className="retro-video-card__meta retro-font-body">
                      <span><Eye size={12} aria-hidden="true" /> {formatViews(video.views)}</span>
                      <span>{video.date}</span>
                    </div>
                    <p className="retro-font-body retro-video-card__excerpt">{video.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="retro-pagination" aria-label="Video pagination">
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