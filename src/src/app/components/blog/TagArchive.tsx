/**
 * TagArchive Template
 *
 * Displays a list of blog posts filtered by tag.
 * Maps to the WordPress `tag.php` template.
 *
 * @example
 * Route: /blog/tag/productivity
 */

import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { Tag } from '../../utils/phosphor-compat';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { ArchiveHeader } from '../patterns/ArchiveHeader';
import { PostGrid } from '../patterns/PostGrid';
import { posts } from '../../data/posts';
import { tags } from '../../data/tags';
import { Button } from '../blocks/design/Buttons';

export const TagArchive = () => {
  const { slug } = useParams<{ slug: string }>();

  const tag = useMemo(
    () => tags.find((t: any) => t.slug === slug),
    [slug]
  );

  const tagPosts = useMemo(() => {
    if (!tag) return [];
    return posts.filter((post: any) => post.tags.indexOf(tag.id) !== -1);
  }, [tag]);

  const tagName = tag ? tag.name : (slug ? slug.replace(/-/g, ' ') : '');
  const metadataLabel = tagPosts.length > 0
    ? `${tagPosts.length} ${tagPosts.length === 1 ? 'article' : 'articles'}`
    : undefined;

  return (
    <Layout>
      <Container className="wp-blog-archive__container">
        <ArchiveHeader
          icon={<Tag size={40} />}
          iconColor="blue"
          label="Tag"
          title={tagName || 'Tag'}
          metadata={metadataLabel}
        />

        {tagPosts.length > 0 ? (
          <PostGrid posts={tagPosts} />
        ) : (
          <div className="blog-tag-archive__empty">
            <p className="blog-tag-archive__empty-text">
              No posts found for this tag.
            </p>
            <Link to="/blog">
              <Button>View All Posts</Button>
            </Link>
          </div>
        )}
      </Container>
    </Layout>
  );
}