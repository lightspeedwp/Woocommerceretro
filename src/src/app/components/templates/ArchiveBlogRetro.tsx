/**
 * ArchiveBlogRetro
 *
 * "PlayPocket" FSE theme - Blog Archive.
 * WCAG AA 2.2 compliant.
 */

import { ArrowRight } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { posts } from '../../data/posts';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const month = date.toLocaleString('default', { month: 'short' });
  return `${month.toUpperCase()} ${date.getDate()}, ${date.getFullYear()}`;
};

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

export const ArchiveBlogRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-blog-layout">
          {/* Title Banner */}
          <div className="retro-title-banner retro-blog-layout__banner">
            <h1 className="retro-font-display retro-bold retro-blog-layout__title">UPDATE LOGS</h1>
            <p className="retro-font-body retro-blog-layout__subtitle">
              Patch notes, development updates, and general transmissions from the team.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="retro-blog-layout__grid">
            {posts.map((post) => {
              const featuredImage = post.jetpack_featured_media_url || FALLBACK_IMAGE;
              const title = post.title.rendered.replace(/<[^>]*>?/gm, '');

              return (
                <article key={post.id} className="retro-blog-layout__card">
                  <div className="retro-blog-layout__card-image">
                    <img src={featuredImage} alt={title} className="retro-blog-layout__card-img" />
                  </div>
                  <div className="retro-blog-layout__card-content">
                    <div className="retro-blog-layout__card-meta">
                      <span className="retro-font-display retro-bold retro-blog-layout__card-badge">
                        {post.format === 'standard' ? 'UPDATE' : post.format.toUpperCase()}
                      </span>
                      <span className="retro-font-body retro-blog-layout__card-date">{formatDate(post.date)}</span>
                    </div>
                    <h2 className="retro-font-display retro-bold retro-blog-layout__card-title">{title}</h2>
                    <div
                      className="retro-font-body retro-blog-layout__card-excerpt"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.substring(0, 120) + '...' }}
                    />
                    <Link to={`/blog/${post.slug}`} className="retro-button retro-button--secondary retro-font-display retro-bold retro-blog-layout__card-link">
                      READ MORE <ArrowRight weight="bold" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

ArchiveBlogRetro.displayName = 'ArchiveBlogRetro';