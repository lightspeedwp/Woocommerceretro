/**
 * Users Data (Authors)
 * 
 * Mock user/author data for WordPress.
 * 
 * Optimized for Figma Make parser:
 * 1. No arrow functions
 * 2. No spread operators
 * 3. ASCII characters only
 * 
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} avatar
 * @property {string} bio
 * @property {string} role
 * @property {Object} [social]
 * @property {string} [social.twitter]
 * @property {string} [social.linkedin]
 * @property {string} [social.instagram]
 * @property {string} [social.website]
 */

export var USERS = [
  {
    id: 1,
    name: 'Alex Morgan',
    slug: 'alex-morgan',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    bio: 'eCommerce strategist and tech enthusiast. Obsessed with the future of online retail.',
    role: 'editor',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    slug: 'sarah-jenkins',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    bio: 'Lifestyle blogger and coffee addict. Sharing tips for a balanced life.',
    role: 'author',
    social: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 3,
    name: 'David Chen',
    slug: 'david-chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    bio: 'Designer and photographer. Believes in the power of minimalism.',
    role: 'author',
    social: {
      website: 'https://example.com'
    }
  },
  {
    id: 4,
    name: 'Emma Green',
    slug: 'emma-green',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    bio: 'Sustainability advocate. Helping you build an eco-friendly home.',
    role: 'author'
  },
  {
    id: 5,
    name: 'Michael Roberts',
    slug: 'michael-roberts',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    bio: 'Digital marketing expert. Helping businesses grow online.',
    role: 'editor'
  }
];

/**
 * @param {number} id
 * @returns {Object|undefined}
 */
export function getUserById(id) {
  for (var i = 0; i < USERS.length; i++) {
    if (USERS[i].id === id) return USERS[i];
  }
  return undefined;
}

export default {
  USERS: USERS,
  getUserById: getUserById
};
