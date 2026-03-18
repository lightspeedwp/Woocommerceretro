/**
 * ArchiveBlogAuthorRetro
 *
 * "PlayPocket" FSE theme — Author Archive.
 * Displays author profile header with avatar and bio,
 * filtered post grid, and retro pixel styling.
 * WCAG AA 2.2 compliant.
 */

import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { User, ArrowRight, Tag, Envelope } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { BLOG_POSTS } from '../../data/blogData';
import { USERS } from '../../data/users';

const POSTS_PER_PAGE = 6;
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1696621629216-dfed30d4427d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

export const ArchiveBlogAuthorRetro = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  /** Match author from USERS data */
  const author = USERS.find((u) => u.slug === slug);
  const authorName = author ? author.name : (slug || '').replace(/-/g, ' ');
  const authorDisplay = authorName.replace(/\b\w/g, (c) => c.toUpperCase());

  /** Filter posts by author name */
  const authorPosts = BLOG_POSTS.filter(
    (p) => p.author.toLowerCase() === authorDisplay.toLowerCase()
  );

  const totalPages = Math.ceil(authorPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = authorPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-blog-archive retro-blog-archive--author" id="main-content">
          {/* Author Profile Header */}
          <section className="retro-author-header" aria-label="Author profile">
            <div className="retro-author-header__avatar">
              {author && author.avatar ? (
                <img
                  src={author.avatar}
                  alt={authorDisplay}
                  className="retro-author-header__avatar-img"
                />
              ) : (
                <User size={48} weight="fill" />
              )}
            </div>
            <div className="retro-author-header__info">
              <h1 className="retro-author-header__name retro-font-display retro-bold">
                PLAYER: {authorDisplay.toUpperCase()}
              </h1>
              {author && author.bio && (
                <p className="retro-font-body retro-author-header__bio">{author.bio}</p>
              )}
              <div className="retro-author-header__stats">
                <span className="retro-author-header__stat retro-font-display retro-bold">
                  <Envelope weight="bold" size={14} />
                  {authorPosts.length} {authorPosts.length === 1 ? 'POST' : 'POSTS'}
                </span>
                {author && author.role && (
                  <span className="retro-author-header__stat retro-author-header__stat--role retro-font-display retro-bold">
                    {author.role.toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          </section>

          {/* Posts */}
          {authorPosts.length === 0 ? (
            <div className="retro-blog-archive__empty">
              <p className="retro-font-display retro-bold">NO TRANSMISSIONS FOUND FOR THIS PLAYER.</p>
              <Link to="/blog" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                BACK TO GAME LOG
              </Link>
            </div>
          ) : (
            <>
              <section className="retro-blog-archive__grid" aria-label="Author posts">
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
                        <div className="retro-blog-card__tags">
                          {(post.tags || []).slice(0, 2).map((tag) => (
                            <Link key={tag.slug} to={'/blog/tag/' + tag.slug} className="retro-blog-card__tag retro-font-display">
                              <Tag size={10} weight="bold" /> {tag.name}
                            </Link>
                          ))}
                        </div>
                        <Link to={'/blog/' + post.slug} className="retro-blog-card__read retro-font-display retro-bold">
                          READ <ArrowRight weight="bold" size={12} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="retro-blog-archive__pagination" aria-label="Author posts pagination">
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

ArchiveBlogAuthorRetro.displayName = 'ArchiveBlogAuthorRetro';