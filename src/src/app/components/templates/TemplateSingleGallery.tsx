import React, { useState } from 'react';
import { useParams } from 'react-router';
import { InstagramLogo as Instagram, GridFour as Grid, ArrowsOut as Maximize2, X } from '@phosphor-icons/react';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { getPostBySlug, getMediaSource } from '../../data/posts';

/**
 * TemplateSingleGallery — Gallery Post Format
 *
 * Funky Phase 6 treatment: neon pink glow on image hover, gradient icon circle,
 * gradient Instagram CTA, dark glassmorphism lightbox.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css` (Section 13)
 */
export const TemplateSingleGallery = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  if (!post) return <div className="single-post__not-found">Post not found</div>;

  const galleryImages =
    post.format_data?.gallery_images?.map((id) => getMediaSource(id)) || [];
  const instagramLink = post.format_data?.instagram_link;

  const openLightbox = (src: string) => {
    setActiveImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <Layout>
      <article>
        {/* Header */}
        <section className="single-gallery__header">
          <Container>
            <div className="single-gallery__icon">
              <Grid size={24} />
            </div>
            <h1>{post.title.rendered}</h1>
            <div className="single-gallery__meta">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span aria-hidden="true">&bull;</span>
              <span>{`${galleryImages.length} photos`}</span>
            </div>
            <div
              className="single-gallery__desc"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </Container>
        </section>

        {/* Gallery grid */}
        <section className="single-gallery__grid">
          <Container>
            <div className="single-gallery__grid-inner">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  className="single-gallery__item"
                  onClick={() => openLightbox(src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image ${index + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(src);
                    }
                  }}
                >
                  <img src={src} alt={`Gallery image ${index + 1}`} />
                  <div className="single-gallery__overlay" aria-hidden="true">
                    <Maximize2 size={32} />
                  </div>
                </div>
              ))}
            </div>

            {instagramLink && (
              <div className="single-gallery__instagram">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="single-gallery__instagram-link"
                >
                  <Instagram size={20} /> View on Instagram
                </a>
              </div>
            )}
          </Container>
        </section>
      </article>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="single-gallery__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            className="single-gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img src={activeImage} alt="Full-size view" />
        </div>
      )}
    </Layout>
  );
}