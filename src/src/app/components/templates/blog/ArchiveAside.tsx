import React from 'react';
import { Layout } from '../../parts/Layout';
import { Container } from '../../common/Container';
import { Heading } from '../../common/Heading';
import { Typography } from '../../common/Typography';
import { posts } from '../../../data/posts';
import { Chat as MessageSquare, ShareNetwork as Share2, Heart, DotsThree as MoreHorizontal } from '../../../utils/phosphor-compat';

/**
 * ArchiveAside Template — Funky Redesign (Phase 6)
 *
 * Status update / micro-blog archive with Twitter-style card layout.
 *
 * @route /blog/format/aside
 * @template
 */
export const ArchiveAside = () => {
  const asidePosts = (posts || []).filter((post) => post.format === 'aside');

  return (
    <Layout>
      <div className="wp-archive-aside__header">
        <Container>
          <Heading level="1" className="wp-archive-aside__heading">Updates</Heading>
          <Typography variant="body" className="wp-archive-aside__description">
            Quick status updates and thoughts from the team.
          </Typography>
        </Container>
      </div>

      <Container className="wp-archive-aside__body">
        <div className="wp-archive-aside__list">
          {asidePosts.map((post) => (
            <div key={post.id} className="wp-archive-aside__post">
              <div className="wp-archive-aside__avatar-wrapper">
                <div className="wp-archive-aside__avatar">LS</div>
              </div>
              <div className="wp-archive-aside__post-content">
                <div className="wp-archive-aside__post-header">
                  <div className="wp-archive-aside__post-meta">
                    <span className="wp-archive-aside__author-name">LightSpeed WP</span>
                    <span className="wp-archive-aside__username">@lightspeedwp</span>
                    <span className="wp-archive-aside__dot">·</span>
                    <span className="wp-archive-aside__date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <button className="wp-archive-aside__more-btn" aria-label="More options">
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                <div
                  className="wp-archive-aside__post-body"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                <div className="wp-archive-aside__post-actions">
                  <button className="wp-archive-aside__action-btn wp-archive-aside__action-btn--reply" aria-label="Reply">
                    <MessageSquare size={18} />
                    <span className="wp-archive-aside__action-count">2</span>
                  </button>
                  <button className="wp-archive-aside__action-btn wp-archive-aside__action-btn--share" aria-label="Share">
                    <Share2 size={18} />
                    <span className="wp-archive-aside__action-count">5</span>
                  </button>
                  <button className="wp-archive-aside__action-btn wp-archive-aside__action-btn--like" aria-label="Like">
                    <Heart size={18} />
                    <span className="wp-archive-aside__action-count">12</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}