/**
 * Gallery Posts Data — PlayPocket Retro Theme
 *
 * 8 gallery/photo posts for the Instagram-style archive.
 * Gaming setups, product photography, community highlights.
 *
 * @module data/galleryPosts
 */

export interface GalleryPost {
  id: number;
  slug: string;
  title: string;
  image: string;
  likes: number;
  comments: number;
  date: string;
  author: string;
}

/** Page-level content for the gallery archive template */
export const galleryPageContent = {
  heroTitle: '@playpocket',
  heroSubtitle: 'Setups, collections, product shots, and community highlights from the PlayPocket universe.',
  heroImage: 'https://images.unsplash.com/photo-1767669673363-6bffdd320e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBob3RvJTIwZ2FsbGVyeSUyMGNvbG9yZnVsJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxNzkzNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ctaText: 'Follow Us',
  ctaUrl: 'https://www.instagram.com/playpocket',
};

export const GALLERY_POSTS: GalleryPost[] = [
  {
    id: 9001,
    slug: 'neon-game-room-setup',
    title: 'Neon Game Room Setup',
    image: 'https://images.unsplash.com/photo-1766051666522-9cfa12675f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwZ2FtaW5nJTIwcm9vbSUyMHB1cnBsZXxlbnwxfHx8fDE3NzM2NjA4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 342,
    comments: 28,
    date: 'March 14, 2026',
    author: 'PlayPocket'
  },
  {
    id: 9002,
    slug: 'retro-controller-collection',
    title: 'Retro Controller Collection',
    image: 'https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGNvbnRyb2xsZXIlMjBuZW9ufGVufDF8fHx8MTc3MzU5OTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 256,
    comments: 19,
    date: 'March 10, 2026',
    author: 'PlayPocket'
  },
  {
    id: 9003,
    slug: 'arcade-cabinet-restoration',
    title: 'Arcade Cabinet Restoration',
    image: 'https://images.unsplash.com/photo-1702315139575-ba243e9602a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBtYWNoaW5lJTIwcmV0cm8lMjBwaXhlbHxlbnwxfHx8fDE3NzM2NjA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 189,
    comments: 14,
    date: 'March 6, 2026',
    author: 'PlayPocket'
  },
  {
    id: 9004,
    slug: 'custom-keyboard-build-gallery',
    title: 'Custom Keyboard Build',
    image: 'https://images.unsplash.com/photo-1628089700970-0012c5718efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMFJHQiUyMHNldHVwfGVufDF8fHx8MTc3MzY2MDg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 421,
    comments: 36,
    date: 'February 28, 2026',
    author: 'PlayPocket'
  },
  {
    id: 9005,
    slug: 'vintage-console-display',
    title: 'Vintage Console Display',
    image: 'https://images.unsplash.com/photo-1768688784216-74afdbe6d41a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZ2FtZSUyMGNvbnNvbGUlMjB0ZWxldmlzaW9ufGVufDF8fHx8MTc3MzY2MDg1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 298,
    comments: 22,
    date: 'February 20, 2026',
    author: 'PlayPocket'
  },
  {
    id: 9006,
    slug: 'collectible-shelf-tour',
    title: 'Collectible Shelf Tour',
    image: 'https://images.unsplash.com/photo-1770200294602-c5f5d509b327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMGZpZ3VyaW5lJTIwZGlzcGxheSUyMHNoZWxmfGVufDF8fHx8MTc3MzY2MDg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 167,
    comments: 11,
    date: 'February 14, 2026',
    author: 'PlayPocket'
  },
  {
    id: 9007,
    slug: 'game-cartridge-wall',
    title: 'Game Cartridge Wall Art',
    image: 'https://images.unsplash.com/photo-1515468754461-a1242b9bcbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwY2FydHJpZGdlJTIwY29sbGVjdGlvbiUyMHZpbnRhZ2V8ZW58MXx8fHwxNzczNjYwODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 534,
    comments: 45,
    date: 'February 6, 2026',
    author: 'PlayPocket'
  },
  {
    id: 9008,
    slug: 'pixel-art-mural',
    title: 'Pixel Art Mural at HQ',
    image: 'https://images.unsplash.com/photo-1769613758100-a5d12762b1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBtdXJhbCUyMGNvbG9yZnVsJTIwdXJiYW58ZW58MXx8fHwxNzczNjYwODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    likes: 612,
    comments: 52,
    date: 'January 30, 2026',
    author: 'PlayPocket'
  }
];