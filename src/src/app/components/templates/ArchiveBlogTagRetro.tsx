/**
 * ArchiveBlogTagRetro
 *
 * "PlayPocket" FSE theme — Tag Archive.
 * Filters blog posts by tag slug with retro pixel styling.
 * WCAG AA 2.2 compliant.
 */

import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowRight, Tag as TagIcon } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { BLOG_POSTS } from '../../data/blogData';

const POSTS_PER_PAGE = 6;
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1771014817844-327a14245bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

/** Collect unique tags from all posts */
const allTags: { name: string; slug: string }[] = [];
const seenTags = new Set<string>();
BLOG_POSTS.forEach((p) => {
  (p.tags || []).forEach((t) => {
    if (!seenTags.has(t.slug)) {
      seenTags.add(t.slug);
      allTags.push(t);
    }
  });
});

export const ArchiveBlogTagRetro = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const tagData = allTags.find((t) => t.slug === slug);
  const displayName = tagData ? tagData.name : (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const filteredPosts = BLOG_POSTS.filter(
    (p) => (p.tags || []).some((t) => t.slug === slug)
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-blog-archive" id="main-content">
          {/* Archive Header */}
          <section className="retro-archive-header retro-archive-header--tag" aria-label="Tag archive">
            <div className="retro-archive-header__icon retro-archive-header__icon--tag">
              <TagIcon weight="fill" size={28} />
            </div>
            <div className="retro-archive-header__info">
              <span className="retro-archive-header__label retro-font-display retro-bold">TAG</span>
              <h1 className="retro-archive-header__title retro-font-display retro-bold">
                #{displayName.toUpperCase()}
              </h1>
              <p className="retro-font-body retro-archive-header__count">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'transmission' : 'transmissions'} tagged
              </p>
            </div>
          </section>

          {/* Tag Cloud */}
          <nav className="retro-blog-archive__tag-cloud" aria-label="All tags">
            <span className="retro-blog-archive__cat-label retro-font-display retro-bold">
              <TagIcon weight="bold" size={14} /> ALL TAGS:
            </span>
            <div className="retro-blog-archive__cat-pills">
              {allTags.map((tag) => (
                <Link
                  key={tag.slug}
                  to={'/blog/tag/' + tag.slug}
                  className={'retro-blog-archive__filter-pill retro-blog-archive__filter-pill--tag retro-font-display retro-bold' + (tag.slug === slug ? ' retro-blog-archive__filter-pill--active' : '')}
                  aria-current={tag.slug === slug ? 'page' : undefined}
                >
                  #{tag.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>

          {/* Post Grid */}
          {filteredPosts.length === 0 ? (
            <div className="retro-blog-archive__empty">
              <p className="retro-font-display retro-bold">NO TRANSMISSIONS WITH THIS TAG.</p>
              <Link to="/blog" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                BACK TO GAME LOG
              </Link>
            </div>
          ) : (
            <>
              <section className="retro-blog-archive__grid" aria-label="Tagged posts">
                {paginatedPosts.map((post) => (
                  <article key={post.id} className="retro-blog-card">
                    <Link to={'/blog/' + post.slug} className="retro-blog-card__img-link">
                      <img
                        src={post.featuredImage || FALLBACK_IMAGE}
                        alt={post.title}
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
                        <Link to={'/blog/' + post.slug} className="retro-blog-card__read retro-font-display retro-bold">
                          READ <ArrowRight weight="bold" size={12} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              {totalPages > 1 && (
                <nav className="retro-blog-archive__pagination" aria-label="Tagged posts pagination">
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
            </>
          )}
        </main>

        <FooterRetro />
      </div>
    </div>
  );
};

ArchiveBlogTagRetro.displayName = 'ArchiveBlogTagRetro';