/**
 * ArchiveGallery — Retro-Styled Photo Gallery Archive
 *
 * Instagram-style photo grid with retro handheld gaming aesthetic.
 * Uses dedicated gallery data from /data/galleryPosts.ts.
 *
 * **CSS:** `/src/styles/sections/blog-archive-gallery.css`
 * **Dark Mode:** Automatic via retro theme tokens
 * **WCAG AA 2.2:** Alt text, semantic HTML, focus states
 *
 * @route /blog/format/gallery
 */

import { Link } from 'react-router';
import { Heart, ChatCircle as MessageCircle, Camera } from '../../../utils/phosphor-compat';
import { HeaderRetro } from '../../parts/HeaderRetro';
import { FooterRetro } from '../../parts/FooterRetro';
import { HeroRetro } from '../../patterns/HeroRetro';
import { GALLERY_POSTS, galleryPageContent } from '../../../data/galleryPosts';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

export const ArchiveGallery = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero */}
        <HeroRetro
          titleLines={['PHOTO', 'GALLERY']}
          highlight={galleryPageContent.heroTitle?.toUpperCase() || 'SNAPSHOTS'}
          description={galleryPageContent.heroSubtitle || 'Community photos, product shots, and behind-the-scenes moments.'}
        />

        {/* Gallery Grid */}
        <section className="retro-section" aria-labelledby="gallery-grid-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="gallery-grid-heading" className="retro-font-display retro-bold retro-section-title">
                LATEST SHOTS
              </h2>
            </div>

            <div className="retro-gallery-grid">
              {GALLERY_POSTS.map((post) => (
                <Link
                  key={post.id}
                  to="/blog/format/gallery"
                  className="retro-gallery-grid__item"
                  aria-label={post.title}
                >
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="retro-gallery-grid__img"
                  />
                  <div className="retro-gallery-grid__overlay" aria-hidden="true">
                    <span className="retro-gallery-grid__stat retro-font-display">
                      <Heart size={18} weight="fill" /> {post.likes}
                    </span>
                    <span className="retro-gallery-grid__stat retro-font-display">
                      <MessageCircle size={18} weight="fill" /> {post.comments}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="retro-section retro-section--cta" aria-label="Share your photos">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Camera size={56} className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                GOT A SHOT?
              </h2>
              <p className="retro-font-body retro-cta-desc">
                Tag us on social media with #PlayPocket to be featured in our gallery.
              </p>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};