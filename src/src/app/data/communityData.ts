/**
 * Community Hub Data
 *
 * Events, forum posts, community reviews, and hub content
 * for the PlayPocket community pages.
 *
 * @module data/communityData
 */

export interface CommunityEvent {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  endDate: string;
  location: string;
  type: 'online' | 'in-person' | 'hybrid';
  image: string;
  attendees: number;
  isFeatured: boolean;
}

export interface ForumPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar: string;
  date: string;
  replies: number;
  views: number;
  category: string;
  isPinned: boolean;
}

export interface CommunityReview {
  id: number;
  productName: string;
  productSlug: string;
  rating: number;
  title: string;
  content: string;
  author: string;
  date: string;
  helpful: number;
  verified: boolean;
}

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 6001,
    slug: 'pixelcon-2026',
    title: 'PixelCon 2026',
    description: 'Our annual community gathering celebrating retro gaming culture. Panels, tournaments, swap meets, and exclusive merch drops.',
    date: 'April 18, 2026',
    endDate: 'April 20, 2026',
    location: 'Austin Convention Center, TX',
    type: 'hybrid',
    image: 'https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21tdW5pdHklMjBlc3BvcnRzJTIwY3Jvd2R8ZW58MXx8fHwxNzczNjYwODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    attendees: 342,
    isFeatured: true
  },
  {
    id: 6002,
    slug: 'retro-speedrun-marathon',
    title: 'Retro Speedrun Marathon',
    description: '48-hour charity speedrunning event featuring classic titles. All proceeds go to the Gaming History Foundation.',
    date: 'May 10, 2026',
    endDate: 'May 12, 2026',
    location: 'Online (Twitch)',
    type: 'online',
    image: 'https://images.unsplash.com/photo-1632160972482-2b19b52a6a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3lzdGljayUyMGNvbnRyb2xsZXIlMjBjbG9zZXVwJTIwZGFya3xlbnwxfHx8fDE3NzM2NjA4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    attendees: 1250,
    isFeatured: false
  },
  {
    id: 6003,
    slug: 'pixel-art-workshop',
    title: 'Pixel Art Workshop: Character Design',
    description: 'Learn to create game-ready character sprites with professional pixel artist SpriteSmith. Beginner-friendly.',
    date: 'March 25, 2026',
    endDate: 'March 25, 2026',
    location: 'Online (Zoom)',
    type: 'online',
    image: 'https://images.unsplash.com/photo-1618470554490-6fee45d9c2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMG5lb24lMjBzaWdufGVufDF8fHx8MTc3MzY2MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    attendees: 89,
    isFeatured: false
  },
  {
    id: 6004,
    slug: 'tabletop-tuesday-weekly',
    title: 'Tabletop Tuesday (Weekly)',
    description: 'Weekly board game night on Discord. We play a different game each week, from party games to deep strategy titles.',
    date: 'Every Tuesday, 7PM EST',
    endDate: '',
    location: 'Discord',
    type: 'online',
    image: 'https://images.unsplash.com/photo-1729025233783-ef4476af9343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjB0YWJsZXRvcCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzY2MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    attendees: 45,
    isFeatured: false
  }
];

export const FORUM_POSTS: ForumPost[] = [
  {
    id: 7001,
    slug: 'best-budget-retro-handhelds-2026',
    title: 'Best Budget Retro Handhelds in 2026?',
    excerpt: 'Looking for recommendations on affordable retro handhelds. Budget is under $60. What are you all using?',
    author: 'RetroRachel',
    authorAvatar: 'RR',
    date: 'March 14, 2026',
    replies: 23,
    views: 456,
    category: 'Hardware',
    isPinned: true
  },
  {
    id: 7002,
    slug: 'show-your-collection-march',
    title: '[Monthly] Show Your Collection - March 2026',
    excerpt: 'The monthly collection thread is here! Share photos of your latest pickups, shelf reorganizations, or grail finds.',
    author: 'PlayPocketTeam',
    authorAvatar: 'PP',
    date: 'March 1, 2026',
    replies: 67,
    views: 1234,
    category: 'Community',
    isPinned: true
  },
  {
    id: 7003,
    slug: 'game-boy-ips-mod-help',
    title: 'Need help with Game Boy IPS mod - screen not centering',
    excerpt: 'Installed a FunnyPlaying IPS v2 in my DMG but the image is offset to the left. Has anyone else had this issue?',
    author: 'ModMaster42',
    authorAvatar: 'MM',
    date: 'March 13, 2026',
    replies: 8,
    views: 189,
    category: 'Modding',
    isPinned: false
  },
  {
    id: 7004,
    slug: 'favorite-chiptune-albums',
    title: 'What are your favorite chiptune albums?',
    excerpt: 'Building a playlist for my next gaming session. Drop your favorite chiptune artists and albums below.',
    author: 'SynthSara',
    authorAvatar: 'SS',
    date: 'March 11, 2026',
    replies: 34,
    views: 567,
    category: 'Music',
    isPinned: false
  },
  {
    id: 7005,
    slug: 'playpocket-hoodie-size-guide',
    title: 'PlayPocket Hoodie sizing - does it run large?',
    excerpt: 'Thinking of ordering the Arcade Classics hoodie. For those who have one, does it run true to size or should I size down?',
    author: 'CozyGamer',
    authorAvatar: 'CG',
    date: 'March 10, 2026',
    replies: 12,
    views: 234,
    category: 'Products',
    isPinned: false
  },
  {
    id: 7006,
    slug: 'indie-game-recommendations',
    title: 'Indie games that feel like lost SNES titles',
    excerpt: 'Looking for modern indie games that capture the feel of classic SNES games. So far I have Celeste and Shovel Knight.',
    author: 'PixelPete',
    authorAvatar: 'PP',
    date: 'March 8, 2026',
    replies: 41,
    views: 890,
    category: 'Games',
    isPinned: false
  }
];

export const COMMUNITY_REVIEWS: CommunityReview[] = [
  {
    id: 8001,
    productName: 'Pixel Warrior Hoodie',
    productSlug: 'pixel-warrior-hoodie',
    rating: 5,
    title: 'Best hoodie I own',
    content: 'The quality is incredible. The pixel art print held up perfectly after multiple washes. Super comfortable for long gaming sessions.',
    author: 'GameNightGary',
    date: 'March 12, 2026',
    helpful: 24,
    verified: true
  },
  {
    id: 8002,
    productName: 'Retro Console Poster Set',
    productSlug: 'retro-console-poster-set',
    rating: 4,
    title: 'Beautiful prints, slight color difference',
    content: 'The artwork is stunning and looks great on my game room wall. Only minor note is the purple is slightly different from the website photo.',
    author: 'ArcadeAnna',
    date: 'March 10, 2026',
    helpful: 15,
    verified: true
  },
  {
    id: 8003,
    productName: 'Chiptune Vinyl Collection',
    productSlug: 'chiptune-vinyl-collection',
    rating: 5,
    title: 'Perfect gift for retro music lovers',
    content: 'Bought this for my partner who loves chiptune music. The packaging is beautiful and the pressing quality is excellent. Highly recommend.',
    author: 'MelodyMike',
    date: 'March 8, 2026',
    helpful: 19,
    verified: true
  },
  {
    id: 8004,
    productName: 'PlayPocket Enamel Pin Set',
    productSlug: 'enamel-pin-set',
    rating: 5,
    title: 'Adorable and well-made',
    content: 'These pins are so cute! Great quality metal and enamel. The locking pin backs keep them secure. Already ordered another set for a friend.',
    author: 'PinCollectorPat',
    date: 'March 5, 2026',
    helpful: 31,
    verified: true
  }
];

/** Hub stats for display */
export const COMMUNITY_STATS = {
  totalMembers: 52400,
  activeDiscussions: 1847,
  eventsThisMonth: 3,
  reviewsSubmitted: 4280
};
