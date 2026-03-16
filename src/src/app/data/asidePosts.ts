/**
 * Aside Posts Data — PlayPocket Retro Theme
 *
 * 8 short status updates / micro-blog posts.
 * Quick team updates, product teasers, community shoutouts.
 *
 * @module data/asidePosts
 */

export interface AsidePost {
  id: number;
  content: string;
  date: string;
  author: string;
  authorHandle: string;
  replies: number;
  shares: number;
  likes: number;
}

/** Page-level content for the aside archive template */
export const asidePageContent = {
  heroTitle: 'Updates',
  heroSubtitle: 'Quick status updates and dispatches from the PlayPocket team.',
  avatarInitials: 'PP',
};

export const ASIDE_POSTS: AsidePost[] = [
  {
    id: 10001,
    content: 'Just shipped a massive update to our WooCommerce foundation theme! New retro product cards, improved dark mode, and 30% faster load times. The grind never stops.',
    date: 'March 15, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 8,
    shares: 24,
    likes: 89
  },
  {
    id: 10002,
    content: 'Spring collection drops this Friday at noon EST. We are only making 500 of the limited edition Arcade Classics hoodie. Set your alarms, players.',
    date: 'March 13, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 15,
    shares: 67,
    likes: 234
  },
  {
    id: 10003,
    content: 'Shoutout to @PixelPete for their incredible custom Game Boy builds featured in this month\'s Pocket Dispatch. The translucent purple shell with IPS screen is chef\'s kiss.',
    date: 'March 10, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 4,
    shares: 12,
    likes: 56
  },
  {
    id: 10004,
    content: 'PixelCon 2026 tickets are now live! Early bird pricing available through April 1st. See you in Austin.',
    date: 'March 7, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 22,
    shares: 45,
    likes: 178
  },
  {
    id: 10005,
    content: 'Hot take: the Game Boy Advance SP is the greatest handheld ever made. The clamshell design, the backlit screen, the library... perfection. Fight me in the replies.',
    date: 'March 3, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 67,
    shares: 34,
    likes: 312
  },
  {
    id: 10006,
    content: 'Press Start podcast Season 2 kicks off next week! First guest: the lead designer behind one of the biggest indie hits of 2025. Cannot say more yet but... it is going to be good.',
    date: 'February 28, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 11,
    shares: 28,
    likes: 145
  },
  {
    id: 10007,
    content: 'We just passed 50,000 community members on Discord. To celebrate, we are doing a $500 store credit giveaway this weekend. Details on the #announcements channel.',
    date: 'February 24, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 34,
    shares: 89,
    likes: 456
  },
  {
    id: 10008,
    content: 'New on the blog: our complete guide to building a retro game room on a budget. CRT recommendations, shelf ideas, and cable management tips. Link in bio.',
    date: 'February 20, 2026',
    author: 'PlayPocket',
    authorHandle: '@playpocket',
    replies: 6,
    shares: 19,
    likes: 78
  }
];