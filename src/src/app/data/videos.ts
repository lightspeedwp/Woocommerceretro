/**
 * Video Posts Data
 *
 * 8 video posts for the PlayPocket channel.
 * Gaming tutorials, unboxings, retro reviews.
 *
 * @module data/videos
 */

export interface VideoPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage: string;
  duration: string;
  videoUrl: string;
  views: number;
  isFeatured: boolean;
  tags: string[];
}

/** Page-level content for the video archive template */
export const videoPageContent = {
  heroTitle: 'PlayPocket Channel',
  heroSubtitle: 'Tutorials, unboxings, retro reviews, and deep dives into gaming culture.',
  featuredLabel: 'FEATURED VIDEO',
  videosPerPage: 6,
};

export const VIDEO_POSTS: VideoPost[] = [
  {
    id: 4001,
    slug: 'ultimate-retro-console-tier-list',
    title: 'Ultimate Retro Console Tier List 2026',
    excerpt: 'We rank every major retro console from the Atari 2600 to the Dreamcast. Hot takes guaranteed.',
    content: '<p>Join us as we rank every major retro console across six tiers. We consider game library, build quality, collectibility, and nostalgia factor. Prepare for some controversial placements.</p><h2>S-Tier picks</h2><p>The SNES and Genesis duke it out for the top spot, but a surprise contender from the handheld world might steal the crown.</p>',
    date: 'March 12, 2026',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1768688784216-74afdbe6d41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZ2FtZSUyMGNvbnNvbGUlMjB0ZWxldmlzaW9ufGVufDF8fHx8MTc3MzY2MDg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '24:30',
    videoUrl: '#',
    views: 12450,
    isFeatured: true,
    tags: ['Tier List', 'Retro', 'Consoles']
  },
  {
    id: 4002,
    slug: 'pixel-art-tutorial-beginners',
    title: 'Pixel Art for Beginners: Your First Sprite',
    excerpt: 'Learn to create your first game-ready sprite in Aseprite. No art experience required.',
    content: '<p>Pixel art looks simple, but creating clean, readable sprites requires technique. In this tutorial, we walk through the basics: canvas size, color palettes, anti-aliasing, and animation frames.</p>',
    date: 'February 28, 2026',
    author: 'David Chen',
    featuredImage: 'https://images.unsplash.com/photo-1618470554490-6fee45d9c2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMG5lb24lMjBzaWdufGVufDF8fHx8MTc3MzY2MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '18:45',
    videoUrl: '#',
    views: 8920,
    isFeatured: false,
    tags: ['Tutorial', 'Pixel Art', 'Beginners']
  },
  {
    id: 4003,
    slug: 'game-boy-modding-guide',
    title: 'Game Boy Modding Guide: IPS Screen + Shell Swap',
    excerpt: 'Transform your original Game Boy with a backlit IPS screen and custom shell. Full step-by-step walkthrough.',
    content: '<p>The original Game Boy is a classic, but that screen has not aged well. We show you how to install a modern IPS backlit display and swap the shell for a fresh custom color, breathing new life into the handheld that started it all.</p>',
    date: 'February 14, 2026',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGhhbmRoZWxkJTIwZ2FtZSUyMGRldmljZXxlbnwxfHx8fDE3NzM2NjA4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '31:20',
    videoUrl: '#',
    views: 15300,
    isFeatured: false,
    tags: ['Modding', 'Game Boy', 'Hardware']
  },
  {
    id: 4004,
    slug: 'best-couch-co-op-games',
    title: 'Top 10 Couch Co-Op Games You Can Play Right Now',
    excerpt: 'Local multiplayer is back. Here are the best games to play with friends on the same screen.',
    content: '<p>Online gaming is great, but nothing beats the energy of couch co-op. We count down our top 10 picks spanning retro classics and modern indie gems that bring people together in the same room.</p>',
    date: 'January 31, 2026',
    author: 'Sarah Jenkins',
    featuredImage: 'https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGNvbnRyb2xsZXIlMjBuZW9ufGVufDF8fHx8MTc3MzU5OTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '22:15',
    videoUrl: '#',
    views: 9870,
    isFeatured: false,
    tags: ['Top 10', 'Co-Op', 'Multiplayer']
  },
  {
    id: 4005,
    slug: 'retro-game-store-tour-tokyo',
    title: 'Retro Game Store Tour: Akihabara, Tokyo',
    excerpt: 'We visit the legendary gaming district of Akihabara and explore its incredible retro game shops.',
    content: '<p>Akihabara is a pilgrimage site for retro game collectors. We visit five of the best shops, dig through bins of Famicom cartridges, and find some incredible deals on rare imports.</p>',
    date: 'January 17, 2026',
    author: 'David Chen',
    featuredImage: 'https://images.unsplash.com/photo-1702315139575-ba243e9602a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBtYWNoaW5lJTIwcmV0cm8lMjBwaXhlbHxlbnwxfHx8fDE3NzM2NjA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '28:40',
    videoUrl: '#',
    views: 21500,
    isFeatured: false,
    tags: ['Travel', 'Shopping', 'Japan']
  },
  {
    id: 4006,
    slug: 'custom-mechanical-keyboard-build',
    title: 'Building a Retro-Themed Mechanical Keyboard',
    excerpt: 'We design and build a custom mechanical keyboard inspired by classic gaming consoles. Full build log.',
    content: '<p>We take inspiration from the SNES color scheme to build a one-of-a-kind mechanical keyboard. From PCB selection to keycap profiles, switches, and case design, this is the ultimate desk companion for retro enthusiasts.</p>',
    date: 'January 3, 2026',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1628089700970-0012c5718efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMFJHQiUyMHNldHVwfGVufDF8fHx8MTc3MzY2MDg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '35:10',
    videoUrl: '#',
    views: 7640,
    isFeatured: false,
    tags: ['Build Log', 'Keyboard', 'DIY']
  },
  {
    id: 4007,
    slug: 'collectible-figure-unboxing',
    title: 'Unboxing: Limited Edition PlayPocket Collectibles',
    excerpt: 'We unbox the latest wave of PlayPocket exclusive figurines and rate each one.',
    content: '<p>The newest wave of PlayPocket exclusive collectible figures is here. We unbox all six figures, examine the paint quality, articulation, and packaging, and give our honest ratings.</p>',
    date: 'December 20, 2025',
    author: 'Emma Green',
    featuredImage: 'https://images.unsplash.com/photo-1770200294602-c5f5d509b327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMGZpZ3VyaW5lJTIwZGlzcGxheSUyMHNoZWxmfGVufDF8fHx8MTc3MzY2MDg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '16:55',
    videoUrl: '#',
    views: 11200,
    isFeatured: false,
    tags: ['Unboxing', 'Collectibles', 'Review']
  },
  {
    id: 4008,
    slug: 'speedrunning-explained',
    title: 'Speedrunning Explained: How Gamers Break Games',
    excerpt: 'An introduction to the world of speedrunning -- the techniques, the community, and why people do it.',
    content: '<p>Speedrunning transforms games from entertainment into athletic competitions. We break down the terminology (any%, glitchless, TAS), explain common techniques like sequence breaking and frame-perfect tricks, and interview runners from the community.</p>',
    date: 'December 6, 2025',
    author: 'Michael Roberts',
    featuredImage: 'https://images.unsplash.com/photo-1632160972482-2b19b52a6a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3lzdGljayUyMGNvbnRyb2xsZXIlMjBjbG9zZXVwJTIwZGFya3xlbnwxfHx8fDE3NzM2NjA4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    duration: '27:00',
    videoUrl: '#',
    views: 18900,
    isFeatured: false,
    tags: ['Speedrunning', 'Community', 'Culture']
  }
];

/** Get featured video */
export const getFeaturedVideo = (): VideoPost => {
  const featured = VIDEO_POSTS.find((v) => v.isFeatured);
  return featured || VIDEO_POSTS[0];
};

/** Get latest video */
export const getLatestVideo = (): VideoPost => {
  return VIDEO_POSTS[0];
};

/** Get video by slug */
export const getVideoBySlug = (slug: string): VideoPost | undefined => {
  return VIDEO_POSTS.find((v) => v.slug === slug);
};