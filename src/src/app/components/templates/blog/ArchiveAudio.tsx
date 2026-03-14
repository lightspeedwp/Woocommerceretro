import React from 'react';
import { Layout } from '../../parts/Layout';
import { Container } from '../../common/Container';
import { posts } from '../../../data/posts';
import { Microphone as Mic, PlayCircle, Calendar, User } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

/**
 * ArchiveAudio — Podcast Archive Grid
 *
 * Funky Phase 6 treatment: dark gradient hero with orbs + glassmorphism badge,
 * glow podcast cards with gradient episode badges, neon play overlay.
 *
 * **CSS:** `/src/styles/sections/blog-format-archives-funky.css`
 */
export const ArchiveAudio = () => {
  const audioPosts = (posts || []).filter((post) => post.format === 'audio');

  return (
    <Layout>
      <div className="archive-audio">
        {/* Hero */}
        <section className="archive-audio__hero">
          <img
            src="https://images.unsplash.com/photo-1648522168698-537da0654bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwc3R1ZGlvJTIwbWljcm9waG9uZSUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3NzE3NTY5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="archive-audio__hero-bg"
          />
          <div className="archive-audio__hero-overlay" aria-hidden="true" />
          <div className="archive-audio__orb archive-audio__orb--1 funky-animate-float" aria-hidden="true" />
          <div className="archive-audio__orb archive-audio__orb--2 funky-animate-float" aria-hidden="true" />
          <Container>
            <div className="archive-audio__hero-content">
              <span className="archive-audio__hero-badge">
                <Mic size={14} aria-hidden="true" /> Podcast
              </span>
              <h1 className="archive-audio__hero-title">Open Channels Podcast</h1>
              <p className="archive-audio__hero-subtitle">
                Conversations about high-performance WordPress, headless architecture, and the future of the web.
              </p>
            </div>
          </Container>
        </section>

        <div className="archive-audio__divider" aria-hidden="true" />

        {/* Grid */}
        <section className="archive-audio__grid-section">
          <Container>
            <div className="archive-audio__grid">
              {audioPosts.map((post) => (
                <article key={post.id} className="archive-audio__card">
                  <div className="archive-audio__card-glow" aria-hidden="true" />
                  <div className="archive-audio__card-inner">
                    <div className="archive-audio__thumbnail">
                      <ImageWithFallback
                        src={`https://picsum.photos/seed/audio-${post.id}/600/380`}
                        alt={post.title.rendered}
                        className="archive-audio__thumbnail-img"
                      />
                      <div className="archive-audio__thumbnail-overlay" aria-hidden="true" />
                      <div className="archive-audio__thumbnail-meta">
                        <span className="archive-audio__episode-badge">
                          EP {(post.format_data && post.format_data.podcast_episode_number) || '#'}
                        </span>
                        <span className="archive-audio__episode-date">
                          <Calendar size={12} aria-hidden="true" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="archive-audio__play-overlay" aria-hidden="true">
                        <div className="archive-audio__play-circle">
                          <PlayCircle size={36} />
                        </div>
                      </div>
                    </div>

                    <div className="archive-audio__card-body">
                      <Link to={post.link}>
                        <h3 className="archive-audio__card-title">{post.title.rendered}</h3>
                      </Link>
                      <p
                        className="archive-audio__card-excerpt"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      <div className="archive-audio__card-footer">
                        <span className="archive-audio__card-author">
                          <User size={14} aria-hidden="true" /> Ash Shaw
                        </span>
                        <Link to={post.link} className="archive-audio__card-link">
                          Listen Now →
                        </Link>
                      </div>
                    </div>
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