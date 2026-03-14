import React from 'react';
import { Layout } from '../../parts/Layout';
import { Container } from '../../common/Container';
import { posts } from '../../../data/posts';
import { InstagramLogo as Instagram, Heart, ChatCircle as MessageCircle } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

/**
 * ArchiveGallery — Instagram-Style Photo Grid
 *
 * Funky Phase 6 treatment: pink-cyan gradient hero with orbs + glassmorphism icon,
 * neon glow image tiles on hover, engagement stat overlay, gradient CTA.
 *
 * **CSS:** `/src/styles/sections/blog-format-archives-funky.css`
 */
export const ArchiveGallery = () => {
  const galleryPosts = (posts || []).filter((post) => post.format === 'gallery');

  return (
    <Layout>
      <div className="archive-gallery">
        {/* Hero */}
        <section className="archive-gallery__hero">
          <img
            src="https://images.unsplash.com/photo-1767669673363-6bffdd320e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvJTIwZ2FsbGVyeSUyMGNvbG9yZnVsJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxNzkzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="archive-gallery__hero-bg"
          />
          <div className="archive-gallery__hero-overlay" aria-hidden="true" />
          <div className="archive-gallery__orb archive-gallery__orb--1 funky-animate-float" aria-hidden="true" />
          <div className="archive-gallery__orb archive-gallery__orb--2 funky-animate-float" aria-hidden="true" />
          <Container>
            <div className="archive-gallery__hero-content">
              <div className="archive-gallery__hero-icon">
                <Instagram size={36} aria-hidden="true" />
              </div>
              <h1 className="archive-gallery__hero-title">@lightspeedwpdev</h1>
              <p className="archive-gallery__hero-subtitle">
                Behind the scenes, office vibes, and design inspiration from our team.
              </p>
              <a
                href="https://www.instagram.com/lightspeedwpdev"
                target="_blank"
                rel="noopener noreferrer"
                className="archive-gallery__hero-cta"
              >
                Follow Us
              </a>
            </div>
          </Container>
        </section>

        {/* Gallery Grid */}
        <section className="archive-gallery__grid-section">
          <Container>
            <div className="archive-gallery__grid">
              {galleryPosts.map((post) => (
                <Link key={post.id} to={post.link} className="archive-gallery__item">
                  <ImageWithFallback
                    src={`https://picsum.photos/seed/gallery-${post.id}/600/600`}
                    alt={post.title.rendered}
                    className="archive-gallery__item-img"
                  />
                  <div className="archive-gallery__item-overlay" aria-hidden="true">
                    <span className="archive-gallery__item-stat">
                      <Heart size={20} /> 124
                    </span>
                    <span className="archive-gallery__item-stat">
                      <MessageCircle size={20} /> 18
                    </span>
                  </div>
                </Link>
              ))}

              {/* Placeholder tiles to fill grid when few posts */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`placeholder-${i}`} className="archive-gallery__placeholder">
                  <Instagram size={32} aria-hidden="true" />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  );
}