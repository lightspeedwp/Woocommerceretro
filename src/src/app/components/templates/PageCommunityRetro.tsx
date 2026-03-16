/**
 * PageCommunityRetro
 *
 * "PlayPocket" FSE theme - Community Hub page.
 * User reviews feed, top contributors, discussions.
 * WCAG AA 2.2 compliant.
 *
 * @route /community
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { Users, ThumbsUp, ChatCircle, Fire } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { COMMUNITY_POSTS, COMMUNITY_STATS, LEADERBOARD_PLAYERS } from '../../data/newPages';

export const PageCommunityRetro = () => {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  // Google Fonts loading moved to RootLayout.

  const toggleLike = (id: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const topContributors = LEADERBOARD_PLAYERS.slice(0, 5);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">COMMUNITY</span>
        </div>

        <div className="retro-page-shell">
          <div className="retro-page-shell__header">
            <Users size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                PLAYER LOUNGE
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Connect with fellow players, share reviews, and earn XP.
              </p>
            </div>
          </div>

          {/* Community Stats */}
          <div className="retro-community__stats-bar" aria-label="Community statistics">
            <div className="retro-community__stat">
              <span className="retro-font-display retro-bold retro-community__stat-value">
                {COMMUNITY_STATS.totalMembers.toLocaleString()}
              </span>
              <span className="retro-font-display retro-community__stat-label">MEMBERS</span>
            </div>
            <div className="retro-community__stat">
              <span className="retro-font-display retro-bold retro-community__stat-value">
                {COMMUNITY_STATS.activeToday}
              </span>
              <span className="retro-font-display retro-community__stat-label">ONLINE NOW</span>
            </div>
            <div className="retro-community__stat">
              <span className="retro-font-display retro-bold retro-community__stat-value">
                {COMMUNITY_STATS.totalPosts.toLocaleString()}
              </span>
              <span className="retro-font-display retro-community__stat-label">POSTS</span>
            </div>
            <div className="retro-community__stat">
              <span className="retro-font-display retro-bold retro-community__stat-value">
                {COMMUNITY_STATS.totalReviews.toLocaleString()}
              </span>
              <span className="retro-font-display retro-community__stat-label">REVIEWS</span>
            </div>
          </div>

          {/* Top Contributors */}
          <div className="retro-leaderboard__your-rank" aria-label="Top contributors this week">
            <div>
              <span className="retro-font-display retro-leaderboard__your-rank-label">
                <Fire size={16} weight="fill" aria-hidden="true" /> TOP CONTRIBUTORS
              </span>
            </div>
            {topContributors.map((player) => (
              <div key={player.rank}>
                <span className="retro-font-body" aria-hidden="true">{player.avatar}</span>{' '}
                <span className="retro-font-display retro-bold">{player.name}</span>
              </div>
            ))}
          </div>

          {/* Feed */}
          <div className="retro-community__feed" role="feed" aria-label="Community feed">
            {COMMUNITY_POSTS.map((post) => {
              const liked = likedPosts.has(post.id);
              return (
                <article key={post.id} className="retro-community__post">
                  <div className="retro-community__post-header">
                    <span className="retro-community__post-avatar" aria-hidden="true">
                      {post.avatar}
                    </span>
                    <div>
                      <h3 className="retro-font-display retro-bold retro-community__post-author">
                        {post.author}
                      </h3>
                      <span className="retro-font-body retro-community__post-date">{post.date}</span>
                    </div>
                    <span className="retro-font-display retro-community__post-tag">{post.tag}</span>
                  </div>
                  <p className="retro-font-body retro-community__post-content">
                    {post.content}
                  </p>
                  <div className="retro-community__post-actions">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="retro-community__post-action retro-font-display"
                      aria-pressed={liked}
                      aria-label={`Like (${liked ? post.likes + 1 : post.likes})`}
                    >
                      <ThumbsUp size={16} weight={liked ? 'fill' : 'regular'} />
                      {liked ? post.likes + 1 : post.likes}
                    </button>
                    <button
                      className="retro-community__post-action retro-font-display"
                      aria-label={`${post.replies} replies`}
                    >
                      <ChatCircle size={16} weight="regular" />
                      {post.replies}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <BottomGridRetro />
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

PageCommunityRetro.displayName = 'PageCommunityRetro';