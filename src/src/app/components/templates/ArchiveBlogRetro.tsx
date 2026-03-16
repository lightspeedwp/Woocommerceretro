/**
 * ArchiveBlogRetro
 *
 * "PlayPocket" FSE theme — Main Blog Archive / Landing Page.
 * Features a featured post hero, pixelated grid cards, pagination,
 * category sidebar pills, and retro scanline decorations.
 * WCAG AA 2.2 compliant.
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Tag, Folder, Headphones, Play, Envelope } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { BLOG_POSTS } from '../../data/blogData';
import { LatestPodcastEpisode } from '../blocks/blog/LatestPodcastEpisode';
import { LatestVideoPost } from '../blocks/blog/LatestVideoPost';

const POSTS_PER_PAGE = 6;
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1696621629216-dfed30d4427d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

/** Collect unique categories from all posts */
const allCategories: { name: string; slug: string }[] = [];
const seenCats = new Set<string>();
BLOG_POSTS.forEach((p) => {
  (p.categories || []).forEach((c) => {
    if (!seenCats.has(c.slug)) {
      seenCats.add(c.slug);
      allCategories.push(c);
    }
  });
});

export const ArchiveBlogRetro = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);
  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = remainingPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-blog-archive" id="main-content">
          {/* Hero Banner */}
          <section className="retro-blog-archive__hero" aria-label="Featured post">
            <div className="retro-blog-archive__hero-scanline" aria-hidden="true" />
            <div className="retro-blog-archive__hero-content">
              <span className="retro-blog-archive__hero-badge retro-font-display retro-bold">
                FEATURED TRANSMISSION
              </span>
              <h1 className="retro-blog-archive__hero-title retro-font-display retro-bold">
                GAME LOG
              </h1>
              <p className="retro-font-body retro-blog-archive__hero-desc">
                Patch notes, strategy guides, dev updates, and dispatches from the PlayPocket universe.
              </p>
            </div>
          </section>

          {/* Featured Post Card */}
          {featuredPost && (
            <section className="retro-blog-archive__featured" aria-label="Latest post">
              <div className="retro-blog-archive__featured-img-wrap">
                <img
                  src={featuredPost.featuredImage || FALLBACK_IMAGE}
                  alt=""
                  className="retro-blog-archive__featured-img"
                  loading="eager"
                />
                <div className="retro-blog-archive__featured-overlay" aria-hidden="true" />
              </div>
              <div className="retro-blog-archive__featured-body">
                <div className="retro-blog-archive__featured-meta">
                  {featuredPost.categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={'/blog/category/' + cat.slug}
                      className="retro-blog-archive__cat-pill retro-font-display retro-bold"
                    >
                      {cat.name.toUpperCase()}
                    </Link>
                  ))}
                  <span className="retro-blog-archive__date retro-font-display">{featuredPost.date}</span>
                </div>
                <h2 className="retro-blog-archive__featured-title retro-font-display retro-bold">
                  {featuredPost.title}
                </h2>
                <p className="retro-font-body retro-blog-archive__featured-excerpt">
                  {featuredPost.excerpt}
                </p>
                <div className="retro-blog-archive__featured-footer">
                  <span className="retro-font-display retro-blog-archive__author">
                    BY {featuredPost.author.toUpperCase()}
                  </span>
                  <Link
                    to={'/blog/' + featuredPost.slug}
                    className="retro-btn retro-btn--primary retro-font-display retro-bold"
                  >
                    READ MORE <ArrowRight weight="bold" size={14} />
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Category Pills Bar */}
          <nav className="retro-blog-archive__cat-bar" aria-label="Blog categories">
            <span className="retro-blog-archive__cat-label retro-font-display retro-bold">
              <Folder weight="bold" size={14} /> CATEGORIES:
            </span>
            <div className="retro-blog-archive__cat-pills">
              {allCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={'/blog/category/' + cat.slug}
                  className="retro-blog-archive__filter-pill retro-font-display retro-bold"
                >
                  {cat.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>

          {/* Content Hub: Latest from other formats */}
          <section className="retro-blog-archive__hub" aria-label="More from PlayPocket">
            <h2 className="retro-blog-archive__hub-title retro-font-display retro-bold">
              MORE CHANNELS
            </h2>
            <div className="retro-blog-archive__hub-grid">
              <LatestPodcastEpisode />
              <LatestVideoPost />
              {/* Quick-link cards */}
              <div className="retro-blog-archive__hub-links">
                <Link to="/blog/format/audio" className="retro-blog-archive__hub-link retro-font-display retro-bold">
                  <Headphones weight="bold" size={18} />
                  <span>ALL PODCASTS</span>
                  <ArrowRight weight="bold" size={12} />
                </Link>
                <Link to="/blog/format/video" className="retro-blog-archive__hub-link retro-font-display retro-bold">
                  <Play weight="fill" size={18} />
                  <span>ALL VIDEOS</span>
                  <ArrowRight weight="bold" size={12} />
                </Link>
                <Link to="/newsletter/archive" className="retro-blog-archive__hub-link retro-font-display retro-bold">
                  <Envelope weight="bold" size={18} />
                  <span>NEWSLETTER</span>
                  <ArrowRight weight="bold" size={12} />
                </Link>
                <Link to="/blog/format/gallery" className="retro-blog-archive__hub-link retro-font-display retro-bold">
                  <Folder weight="bold" size={18} />
                  <span>GALLERY</span>
                  <ArrowRight weight="bold" size={12} />
                </Link>
              </div>
            </div>
          </section>

          {/* Post Grid */}
          <section className="retro-blog-archive__grid" aria-label="Blog posts">
            {paginatedPosts.map((post) => (
              <article key={post.id} className="retro-blog-card">
                <Link to={'/blog/' + post.slug} className="retro-blog-card__img-link">
                  <img
                    src={post.featuredImage || FALLBACK_IMAGE}
                    alt=""
                    className="retro-blog-card__img"
                    loading="lazy"
                  />
                </Link>
                <div className="retro-blog-card__body">
                  <div className="retro-blog-card__meta">
                    {post.categories.slice(0, 1).map((cat) => (
                      <Link
                        key={cat.slug}
                        to={'/blog/category/' + cat.slug}
                        className="retro-blog-card__cat retro-font-display retro-bold"
                      >
                        {cat.name.toUpperCase()}
                      </Link>
                    ))}
                    <span className="retro-blog-card__date retro-font-display">{post.date}</span>
                  </div>
                  <h3 className="retro-blog-card__title retro-font-display retro-bold">
                    <Link to={'/blog/' + post.slug}>{post.title}</Link>
                  </h3>
                  <p className="retro-font-body retro-blog-card__excerpt">
                    {post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}
                  </p>
                  <div className="retro-blog-card__footer">
                    <Link
                      to={'/blog/author/' + post.author.toLowerCase().replace(/\s+/g, '-')}
                      className="retro-font-display retro-blog-card__author"
                    >
                      {post.author.toUpperCase()}
                    </Link>
                    <div className="retro-blog-card__tags">
                      {(post.tags || []).slice(0, 2).map((tag) => (
                        <Link
                          key={tag.slug}
                          to={'/blog/tag/' + tag.slug}
                          className="retro-blog-card__tag retro-font-display"
                        >
                          <Tag size={10} weight="bold" /> {tag.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="retro-blog-archive__pagination" aria-label="Blog pagination">
              <button
                className="retro-blog-archive__page-btn retro-font-display retro-bold"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                &lt; PREV
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={'retro-blog-archive__page-btn retro-font-display retro-bold' + (page === currentPage ? ' retro-blog-archive__page-btn--active' : '')}
                  onClick={() => setCurrentPage(page)}
                  aria-label={'Page ' + page}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                className="retro-blog-archive__page-btn retro-font-display retro-bold"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                NEXT &gt;
              </button>
            </nav>
          )}
        </main>

        <FooterRetro />
      </div>
    </div>
  );
};

ArchiveBlogRetro.displayName = 'ArchiveBlogRetro';