/**
 * Mock Data: WordPress Posts
 * 
 * Includes Standard, Audio, Video, Gallery, and Aside formats.
 * 
 * Optimized for Figma Make parser:
 * 1. No optional chaining, nullish coalescing, or spread at module level
 * 2. ASCII characters only
 */
// Type references (JSDoc only - no runtime import needed):
// WPPost
import { postCategories } from './categories';
import { tags as allTags } from './tags';
import { USERS } from './users';

export const posts = [
  // 1. Audio Post (Podcast)
  {
    id: 1001,
    date: '2023-11-15T10:00:00',
    date_gmt: '2023-11-15T10:00:00',
    modified: '2023-11-15T10:00:00',
    modified_gmt: '2023-11-15T10:00:00',
    slug: 'open-channels-ash-shaw',
    status: 'publish',
    type: 'post',
    link: '/blog/open-channels-ash-shaw',
    title: { rendered: 'Scaling WordPress with Ash Shaw' },
    content: {
      rendered: '<p>Join us as we discuss the future of high-performance WordPress sites and how LightSpeed is changing the game.</p>',
      protected: false
    },
    excerpt: {
      rendered: 'Ash Shaw from LightSpeed discusses enterprise WordPress scaling.',
      protected: false
    },
    author: 1,
    featured_media: 2001,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'audio',
    meta: [],
    categories: [4], // Podcast
    tags: [103, 101],
    format_data: {
      audio_url: 'https://traffic.libsyn.com/secure/openchannels/episode-101.mp3',
      podcast_episode_number: 101,
      podcast_season: 1
    }
  },
  
  // 2. Video Post (YouTube)
  {
    id: 1002,
    date: '2023-11-10T14:30:00',
    date_gmt: '2023-11-10T14:30:00',
    modified: '2023-11-10T14:30:00',
    modified_gmt: '2023-11-10T14:30:00',
    slug: 'lightspeed-dev-workflow',
    status: 'publish',
    type: 'post',
    link: '/blog/lightspeed-dev-workflow',
    title: { rendered: 'Modern WordPress Development Workflow' },
    content: {
      rendered: '<p>A deep dive into how we build blocks using React and Tailwind.</p>',
      protected: false
    },
    excerpt: {
      rendered: 'Watch our latest tutorial on modern WP dev workflows.',
      protected: false
    },
    author: 1,
    featured_media: 2002,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'video',
    meta: [],
    categories: [5], // Videos
    tags: [107, 101, 104],
    format_data: {
      video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      video_duration: '15:30'
    }
  },

  // 3. Gallery Post (Instagram)
  {
    id: 1003,
    date: '2023-11-05T09:15:00',
    date_gmt: '2023-11-05T09:15:00',
    modified: '2023-11-05T09:15:00',
    modified_gmt: '2023-11-05T09:15:00',
    slug: 'office-vibes-gallery',
    status: 'publish',
    type: 'post',
    link: '/blog/office-vibes-gallery',
    title: { rendered: 'Office Vibes & Setup' },
    content: {
      rendered: '<p>Check out our new studio setup! Follow us on Instagram @lightspeedwpdev.</p>',
      protected: false
    },
    excerpt: {
      rendered: 'A look inside the LightSpeed HQ.',
      protected: false
    },
    author: 1,
    featured_media: 2003,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'gallery',
    meta: [],
    categories: [6], // Gallery
    tags: [106],
    format_data: {
      gallery_images: [2003, 2004, 2005],
      instagram_link: 'https://www.instagram.com/lightspeedwpdev'
    }
  },

  // 4. Aside Post (Status Update)
  {
    id: 1004,
    date: '2023-11-01T08:00:00',
    date_gmt: '2023-11-01T08:00:00',
    modified: '2023-11-01T08:00:00',
    modified_gmt: '2023-11-01T08:00:00',
    slug: 'quick-update-november',
    status: 'publish',
    type: 'post',
    link: '/blog/quick-update-november',
    title: { rendered: '' },
    content: {
      rendered: '<p>Just shipped a massive update to our WooCommerce foundation theme!</p>',
      protected: false
    },
    excerpt: {
      rendered: 'Quick status update.',
      protected: false
    },
    author: 1,
    featured_media: 0,
    comment_status: 'closed',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'aside',
    meta: [],
    categories: [1],
    tags: [101],
    format_data: {
      aside_text: 'Just shipped a massive update to our WooCommerce foundation theme!'
    }
  },

  // 5. Standard Post
  {
    id: 1005,
    date: '2023-10-25T11:00:00',
    date_gmt: '2023-10-25T11:00:00',
    modified: '2023-10-25T11:00:00',
    modified_gmt: '2023-10-25T11:00:00',
    slug: 'getting-started-headless',
    status: 'publish',
    type: 'post',
    link: '/blog/getting-started-headless',
    title: { rendered: 'Getting Started with Headless WordPress' },
    content: {
      rendered: '<p>Headless WordPress is the future for many enterprise applications...</p>',
      protected: false
    },
    excerpt: {
      rendered: 'An intro to headless architecture.',
      protected: false
    },
    author: 1,
    featured_media: 2006,
    comment_status: 'open',
    ping_status: 'open',
    sticky: false,
    template: '',
    format: 'standard',
    meta: [],
    categories: [2],
    tags: [101, 104]
  }
];

export const mediaItems: Record<number, { source_url: string }> = {
  2001: { source_url: 'https://images.unsplash.com/photo-1709846485906-30b28e7ed651' },
  2002: { source_url: 'https://images.unsplash.com/photo-1567641091594-71640a68f847' },
  2003: { source_url: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1' },
  2004: { source_url: 'https://images.unsplash.com/photo-1723283126735-f24688fcfcc2' },
  2005: { source_url: 'https://images.unsplash.com/photo-1723609276367-a3abbe1967b3' },
  2006: { source_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c' }
};

export const getPostBySlug = (slug: string) => {
  return posts.find((p) => p.slug === slug);
}

export const getMediaSource = (mediaId: number): string => {
  const item = mediaItems[mediaId];
  return item ? item.source_url : '';
}

/** Flat post shape consumed by single-post templates */
/**
 * @typedef {Object} ResolvedPost
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content
 * @property {string} date
 * @property {string} author
 * @property {string} authorSlug
 * @property {string} featuredImage
 * @property {Array<Object>} categories
 * @property {Array<Object>} tags
 * @property {Array<Object>} comments
 */

/** Resolve category IDs to { name, slug } */
const resolveCategories = (ids: number[]) => {
  return ids
    .map((id) => postCategories.find((c) => c.id === id))
    .filter(Boolean)
    .map((c: any) => ({ name: c.name, slug: c.slug }));
}

/** Resolve tag IDs to { name, slug } */
const resolveTags = (ids: number[]) => {
  return ids
    .map((id) => allTags.find((t) => t.id === id))
    .filter(Boolean)
    .map((t: any) => ({ name: t.name, slug: t.slug }));
}

/** Resolve author ID to display name */
const resolveAuthor = (id: number): string => {
  return USERS.find((u) => u.id === id)?.name ?? 'Staff Writer';
}

const resolveAuthorSlug = (id: number): string => {
  return USERS.find((u) => u.id === id)?.slug ?? 'staff-writer';
}

/** Format ISO date to readable string */
const formatDate = (iso: string): string => {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  } catch (e) {
    return iso;
  }
}

/** Mock comments keyed by post ID */
const mockComments: Record<number, any[]> = {
  1001: [
    { id: 'c1', author: 'Sarah J.', date: 'Nov 16, 2023', content: 'Loved this episode!' }
  ],
  1003: [
    { id: 'c2', author: 'Mike T.', date: 'Nov 8, 2023', content: 'Really helpful overview.' },
    { id: 'c3', author: 'Priya K.', date: 'Nov 9, 2023', content: 'I have been waiting for this.' }
  ]
};

/** Convert a WPPost to the flat ResolvedPost shape */
export const resolvePost = (post) => {
  return {
    id: String(post.id),
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    date: formatDate(post.date),
    author: resolveAuthor(post.author),
    authorSlug: resolveAuthorSlug(post.author),
    featuredImage: getMediaSource(post.featured_media),
    categories: resolveCategories(post.categories),
    tags: resolveTags(post.tags),
    comments: mockComments[post.id] || []
  };
}

/** Resolve all posts into flat shape */
export const resolvedPosts = posts.map(resolvePost);

/** Find a resolved post by slug */
export const getResolvedPostBySlug = (slug: string) => {
  return resolvedPosts.find((p) => p.slug === slug);
}