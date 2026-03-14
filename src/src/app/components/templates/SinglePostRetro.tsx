/**
 * SinglePostRetro
 *
 * "PlayPocket" FSE theme - Single Blog Post.
 * WCAG AA 2.2 compliant.
 */

import { Link, useParams } from 'react-router';
import { ArrowLeft, Clock, User } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { posts } from '../../data/posts';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const month = date.toLocaleString('default', { month: 'short' });
  return `${month.toUpperCase()} ${date.getDate()}, ${date.getFullYear()}`;
};

export const SinglePostRetro = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug) || null;

  if (!post) {
    return (
      <div className="retro-home theme-retro">
        <div className="retro-container">
          <HeaderRetro />
          <div className="retro-not-found-layout">
            <h1 className="retro-font-display retro-bold retro-not-found-layout__title">ERROR 404: LOG NOT FOUND</h1>
            <p className="retro-font-body retro-not-found-layout__desc">The requested data log could not be located in the archives.</p>
            <Link to="/blog" className="retro-button retro-button--primary retro-font-display retro-bold">RETURN TO ARCHIVE</Link>
          </div>
          <FooterRetro />
        </div>
      </div>
    );
  }

  const featuredImage = post.jetpack_featured_media_url || FALLBACK_IMAGE;

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-single-post-layout">
          {/* Back Link */}
          <div className="retro-single-post-layout__back">
            <Link to="/blog" className="retro-font-display retro-bold retro-single-post-layout__back-link">
              <ArrowLeft weight="bold" /> BACK TO ARCHIVE
            </Link>
          </div>

          {/* Article Header */}
          <header className="retro-single-post-layout__header">
            <h1
              className="retro-font-display retro-bold retro-single-post-layout__title"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="retro-single-post-layout__meta">
              <div className="retro-single-post-layout__meta-item">
                <Clock weight="bold" />
                <span className="retro-font-display retro-bold">{formatDate(post.date)}</span>
              </div>
              <div className="retro-single-post-layout__meta-item">
                <User weight="bold" />
                <span className="retro-font-display retro-bold">ADMIN</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="retro-single-post-layout__featured-image">
            <img src={featuredImage} alt="" className="retro-single-post-layout__img" />
          </div>

          {/* Article Content */}
          <div
            className="retro-post-content retro-font-body"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Author Box */}
          <div className="retro-single-post-layout__author-box">
            <div className="retro-single-post-layout__author-avatar">
              <User size={32} weight="fill" />
            </div>
            <div>
              <h3 className="retro-font-display retro-bold retro-single-post-layout__author-name">WRITTEN BY: ADMIN</h3>
              <p className="retro-font-body retro-single-post-layout__author-bio">
                System administrator and chief gaming officer. Ensuring maximum framerates since 1998.
              </p>
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

SinglePostRetro.displayName = 'SinglePostRetro';