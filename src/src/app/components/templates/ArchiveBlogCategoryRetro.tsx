/**
 * ArchiveBlogCategoryRetro
 *
 * "PlayPocket" FSE theme — Category Archive.
 * Filters blog posts by category slug with retro pixel styling.
 * WCAG AA 2.2 compliant.
 */

import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowRight, Tag, Folder } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { BLOG_POSTS } from '../../data/blogData';

const POSTS_PER_PAGE = 6;
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1653297526910-4834e6763f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

/** Collect unique categories */
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

export const ArchiveBlogCategoryRetro = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const categoryName = allCategories.find((c) => c.slug === slug);
  const displayName = categoryName ? categoryName.name : (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const filteredPosts = BLOG_POSTS.filter(
    (p) => p.categories.some((c) => c.slug === slug)
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
          <section className="retro-archive-header" aria-label="Category archive">
            <div className="retro-archive-header__icon">
              <Folder weight="fill" size={28} />
            </div>
            <div className="retro-archive-header__info">
              <span className="retro-archive-header__label retro-font-display retro-bold">CATEGORY</span>
              <h1 className="retro-archive-header__title retro-font-display retro-bold">
                {displayName.toUpperCase()}
              </h1>
              <p className="retro-font-body retro-archive-header__count">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'transmission' : 'transmissions'} found
              </p>
            </div>
          </section>

          {/* Category Navigation Pills */}
          <nav className="retro-blog-archive__cat-bar" aria-label="All categories">
            <span className="retro-blog-archive__cat-label retro-font-display retro-bold">
              <Folder weight="bold" size={14} /> ALL:
            </span>
            <div className="retro-blog-archive__cat-pills">
              {allCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={'/blog/category/' + cat.slug}
                  className={'retro-blog-archive__filter-pill retro-font-display retro-bold' + (cat.slug === slug ? ' retro-blog-archive__filter-pill--active' : '')}
                  aria-current={cat.slug === slug ? 'page' : undefined}
                >
                  {cat.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>

          {/* Post Grid */}
          {filteredPosts.length === 0 ? (
            <div className="retro-blog-archive__empty">
              <p className="retro-font-display retro-bold">NO TRANSMISSIONS IN THIS CATEGORY.</p>
              <Link to="/blog" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                BACK TO GAME LOG
              </Link>
            </div>
          ) : (
            <>
              <section className="retro-blog-archive__grid" aria-label="Category posts">
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
                            <Link key={tag.slug} to={'/blog/tag/' + tag.slug} className="retro-blog-card__tag retro-font-display">
                              <Tag size={10} weight="bold" /> {tag.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              {totalPages > 1 && (
                <nav className="retro-blog-archive__pagination" aria-label="Category posts pagination">
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

ArchiveBlogCategoryRetro.displayName = 'ArchiveBlogCategoryRetro';