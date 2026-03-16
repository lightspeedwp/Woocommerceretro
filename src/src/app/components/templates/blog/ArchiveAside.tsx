import React from 'react';
import { Layout } from '../../parts/Layout';
import { Container } from '../../common/Container';
import { Heading } from '../../common/Heading';
import { Typography } from '../../common/Typography';
import { ASIDE_POSTS, asidePageContent } from '../../../data/asidePosts';
import { Chat as MessageSquare, ShareNetwork as Share2, Heart, DotsThree as MoreHorizontal } from '../../../utils/phosphor-compat';

/**
 * ArchiveAside Template — Status Updates / Micro-Blog
 *
 * Uses dedicated aside data from /data/asidePosts.ts.
 * Twitter-style card layout.
 *
 * @route /blog/format/aside
 * @template
 */
export const ArchiveAside = () => {
  return (
    <Layout>
      <div className="wp-archive-aside__header">
        <Container>
          <Heading level="1" className="wp-archive-aside__heading">{asidePageContent.heroTitle}</Heading>
          <Typography variant="body" className="wp-archive-aside__description">
            {asidePageContent.heroSubtitle}
          </Typography>
        </Container>
      </div>

      <Container className="wp-archive-aside__body">
        <div className="wp-archive-aside__list">
          {ASIDE_POSTS.map((post) => (
            <div key={post.id} className="wp-archive-aside__post">
              <div className="wp-archive-aside__avatar-wrapper">
                <div className="wp-archive-aside__avatar">{asidePageContent.avatarInitials}</div>
              </div>
              <div className="wp-archive-aside__post-content">
                <div className="wp-archive-aside__post-header">
                  <div className="wp-archive-aside__post-meta">
                    <span className="wp-archive-aside__author-name">{post.author}</span>
                    <span className="wp-archive-aside__username">{post.authorHandle}</span>
                    <span className="wp-archive-aside__dot">&middot;</span>
                    <span className="wp-archive-aside__date">{post.date}</span>
                  </div>
                  <button className="wp-archive-aside__more-btn" aria-label="More options">
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                <div className="wp-archive-aside__post-body">
                  <p>{post.content}</p>
                </div>

                <div className="wp-archive-aside__post-actions">
                  <button className="wp-archive-aside__action-btn wp-archive-aside__action-btn--reply" aria-label="Reply">
                    <MessageSquare size={18} />
                    <span className="wp-archive-aside__action-count">{post.replies}</span>
                  </button>
                  <button className="wp-archive-aside__action-btn wp-archive-aside__action-btn--share" aria-label="Share">
                    <Share2 size={18} />
                    <span className="wp-archive-aside__action-count">{post.shares}</span>
                  </button>
                  <button className="wp-archive-aside__action-btn wp-archive-aside__action-btn--like" aria-label="Like">
                    <Heart size={18} />
                    <span className="wp-archive-aside__action-count">{post.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
};