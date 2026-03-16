import React from 'react';
import { Layout } from '../../parts/Layout';
import { Container } from '../../common/Container';
import { posts } from '../../../data/posts';
import { Play, Clock, YoutubeLogo as Youtube } from '../../../utils/phosphor-compat';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

/**
 * ArchiveVideo — Video Archive Grid (YouTube-Style)
 *
 * Funky Phase 6 treatment: cinema gradient hero with orbs + gradient CTA,
 * glow video cards with neon play overlay, duration badge, spring hover.
 *
 * **CSS:** `/src/styles/sections/blog-format-archives-funky.css`
 */
export const ArchiveVideo = () => {
  const videoPosts = (posts || []).filter((post) => post.format === 'video');

  return (
    <Layout>
      <div className="archive-video">
        {/* Hero */}
        <section className="archive-video__hero">
          <img
            src="https://images.unsplash.com/photo-1705107958681-db6d591b57cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmElMjBjaW5lbWF0aWMlMjBkYXJrfGVufDF8fHx8MTc3MTc5MzcxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="archive-video__hero-bg"
          />
          <div className="archive-video__hero-overlay" aria-hidden="true" />
          <div className="archive-video__orb archive-video__orb--1 funky-animate-float" aria-hidden="true" />
          <div className="archive-video__orb archive-video__orb--2 funky-animate-float" aria-hidden="true" />
          <Container>
            <div className="archive-video__hero-content">
              <div className="archive-video__hero-text">
                <div className="archive-video__hero-badge">
                  <Youtube className="archive-video__hero-icon" size={32} aria-hidden="true" />
                  <h1 className="archive-video__hero-title">LightSpeed WP Channel</h1>
                </div>
                <p className="archive-video__hero-subtitle">
                  Tutorials, guides, and deep dives into modern WordPress development.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@lightspeedwp/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="archive-video__hero-cta"
              >
                Subscribe on YouTube
              </a>
            </div>
          </Container>
        </section>

        <div className="archive-video__divider" aria-hidden="true" />

        {/* Grid */}
        <section className="archive-video__grid-section">
          <Container>
            <div className="archive-video__grid">
              {videoPosts.map((post) => (
                <article key={post.id} className="archive-video__card">
                  <Link to={post.link} className="archive-video__card-link">
                    <div className="archive-video__thumbnail">
                      <ImageWithFallback
                        src={`https://picsum.photos/seed/video-${post.id}/640/360`}
                        alt={post.title.rendered}
                        className="archive-video__thumbnail-img"
                      />
                      <div className="archive-video__play-icon" aria-hidden="true">
                        <Play size={48} />
                      </div>
                      <span className="archive-video__duration">
                        <Clock size={10} aria-hidden="true" />{' '}
                        {(post.format_data && post.format_data.video_duration) || '10:00'}
                      </span>
                    </div>
                  </Link>

                  <div className="archive-video__card-info">
                    <Link to={post.link}>
                      <h3 className="archive-video__card-title">{post.title.rendered}</h3>
                    </Link>
                    <div className="archive-video__card-meta">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="archive-video__card-meta-dot" aria-hidden="true">•</span>
                      <span>{`${post.categories.length} ${post.categories.length === 1 ? 'Category' : 'Categories'}`}</span>
                    </div>
                    <p
                      className="archive-video__card-excerpt"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  );
}