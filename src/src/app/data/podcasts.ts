/**
 * Podcast Episodes Data
 *
 * 8 episodes for the PlayPocket "Press Start" podcast.
 * Gaming culture, retro collecting, indie dev interviews.
 *
 * @module data/podcasts
 */

export interface PodcastEpisode {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage: string;
  episodeNumber: number;
  season: number;
  duration: string;
  audioUrl: string;
  guests: string[];
  tags: string[];
}

/** Page-level content for the podcast archive template */
export const podcastPageContent = {
  heroTitle: 'Press Start Podcast',
  heroSubtitle: 'Gaming culture, retro collecting, indie dev interviews, and dispatches from the PlayPocket universe.',
  heroBadge: 'Podcast',
  heroImage: 'https://images.unsplash.com/photo-1655931546470-7b2e167b5fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBoZWFkc2V0JTIwbWljcm9waG9uZSUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzczNjYwODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  episodesPerPage: 6,
  cardLabels: {
    listenNow: 'Listen Now',
  }
};

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 3001,
    slug: 'why-retro-games-matter',
    title: 'Why Retro Games Still Matter in 2026',
    excerpt: 'We kick off Season 2 by exploring why classic games from the 80s and 90s continue to shape modern game design and culture.',
    content: '<p>In the Season 2 premiere, we dive deep into the enduring influence of retro gaming. From the tight level design of early platformers to the emergence of pixel art as a legitimate art form, classic games are more relevant than ever.</p><h2>The design lessons that never fade</h2><p>Modern indie devs cite games like Mega Man and Metroid as primary influences. The constraints of early hardware forced designers to be creative in ways that still resonate.</p><h2>Collecting culture</h2><p>The retro game collecting market has exploded, with rare cartridges fetching thousands. We discuss what drives collectors and how to start your own collection responsibly.</p>',
    date: 'March 10, 2026',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGNvbnRyb2xsZXIlMjBuZW9ufGVufDF8fHx8MTc3MzU5OTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 201,
    season: 2,
    duration: '42:15',
    audioUrl: '#',
    guests: ['Pixel Pete', 'RetroRachel'],
    tags: ['Retro', 'Culture', 'Collecting']
  },
  {
    id: 3002,
    slug: 'indie-devs-pixel-art-renaissance',
    title: 'The Pixel Art Renaissance: Indie Devs Speak',
    excerpt: 'Three indie developers share why they chose pixel art for their games and how the aesthetic connects with modern audiences.',
    content: '<p>Pixel art is not just nostalgia bait -- it is a deliberate artistic choice. We sit down with three indie developers who have built successful games using pixel art, discussing their creative process, tools, and the surprising depth of the medium.</p><h2>Beyond nostalgia</h2><p>Each developer explains how pixel art lets them focus on gameplay mechanics rather than chasing photorealism.</p>',
    date: 'February 24, 2026',
    author: 'Sarah Jenkins',
    featuredImage: 'https://images.unsplash.com/photo-1618470554490-6fee45d9c2ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMG5lb24lMjBzaWdufGVufDF8fHx8MTc3MzY2MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 108,
    season: 1,
    duration: '38:50',
    audioUrl: '#',
    guests: ['SpriteSmith', 'PixelPainter'],
    tags: ['Indie', 'Pixel Art', 'Development']
  },
  {
    id: 3003,
    slug: 'building-a-game-room',
    title: 'Building the Ultimate Retro Game Room',
    excerpt: 'From CRT monitors to shelf organization, we break down everything you need for a proper retro gaming setup.',
    content: '<p>We have all dreamed of the perfect game room. In this episode, we walk through the essentials: the right display for each era, cable management, ambient lighting, and how to organize a growing collection without turning your room into chaos.</p><h2>CRT vs flat panel</h2><p>Why serious retro gamers still swear by CRT televisions, and the best alternatives if you cannot find one.</p>',
    date: 'February 10, 2026',
    author: 'David Chen',
    featuredImage: 'https://images.unsplash.com/photo-1766051666522-9cfa12675f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwZ2FtaW5nJTIwcm9vbSUyMHB1cnBsZXxlbnwxfHx8fDE3NzM2NjA4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 107,
    season: 1,
    duration: '45:20',
    audioUrl: '#',
    guests: [],
    tags: ['Setup', 'Collecting', 'Hardware']
  },
  {
    id: 3004,
    slug: 'tabletop-gaming-comeback',
    title: 'Tabletop Gaming: The Analog Comeback',
    excerpt: 'Board games and card games are booming. We explore why analog gaming is thriving in a digital world.',
    content: '<p>In a world dominated by screens, tabletop gaming is experiencing a golden age. Sales are up, Kickstarter campaigns are breaking records, and game cafes are popping up everywhere. We talk to designers and shop owners about what is driving the boom.</p>',
    date: 'January 27, 2026',
    author: 'Emma Green',
    featuredImage: 'https://images.unsplash.com/photo-1729025233783-ef4476af9343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjB0YWJsZXRvcCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzY2MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 106,
    season: 1,
    duration: '36:45',
    audioUrl: '#',
    guests: ['BoardGameBeth'],
    tags: ['Tabletop', 'Board Games', 'Community']
  },
  {
    id: 3005,
    slug: 'game-music-chiptune-legacy',
    title: 'Chiptune Legacy: How Game Music Changed Everything',
    excerpt: 'From 8-bit bleeps to orchestral scores, we trace the evolution of video game music and its influence on modern artists.',
    content: '<p>Video game music has gone from simple bleeps and bloops to Grammy-nominated orchestral compositions. We trace the journey from the Commodore 64 SID chip to modern game soundtracks, interviewing composers and chiptune artists along the way.</p>',
    date: 'January 13, 2026',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1594328082907-cd93c1c518d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMHBsYXllciUyMHZpbnRhZ2UlMjBtdXNpY3xlbnwxfHx8fDE3NzM2NjA4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 105,
    season: 1,
    duration: '51:10',
    audioUrl: '#',
    guests: ['ChiptuneCharlie', 'SynthSara'],
    tags: ['Music', 'Chiptune', 'Culture']
  },
  {
    id: 3006,
    slug: 'game-preservation-digital-age',
    title: 'Game Preservation in the Digital Age',
    excerpt: 'Games are disappearing. We discuss the challenges of preserving digital history and the heroes fighting to save it.',
    content: '<p>When a digital storefront shuts down, thousands of games can vanish overnight. We explore the world of game preservation: the legal battles, the archival efforts, and the passionate volunteers keeping gaming history alive.</p>',
    date: 'December 30, 2025',
    author: 'Michael Roberts',
    featuredImage: 'https://images.unsplash.com/photo-1515468754461-a1242b9bcbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwY2FydHJpZGdlJTIwY29sbGVjdGlvbiUyMHZpbnRhZ2V8ZW58MXx8fHwxNzczNjYwODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 104,
    season: 1,
    duration: '44:30',
    audioUrl: '#',
    guests: ['ArchiveAndy'],
    tags: ['Preservation', 'History', 'Digital']
  },
  {
    id: 3007,
    slug: 'esports-retro-tournaments',
    title: 'Retro Esports: Old Games, New Competition',
    excerpt: 'Competitive Tetris, speedrunning communities, and retro fighting game tournaments are bigger than ever.',
    content: '<p>Classic games are finding new life in competitive scenes. From the Classic Tetris World Championship to Smash Bros Melee tournaments, retro esports draws massive audiences. We talk to organizers and competitors about what makes these scenes special.</p>',
    date: 'December 16, 2025',
    author: 'Sarah Jenkins',
    featuredImage: 'https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21tdW5pdHklMjBlc3BvcnRzJTIwY3Jvd2R8ZW58MXx8fHwxNzczNjYwODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 103,
    season: 1,
    duration: '39:55',
    audioUrl: '#',
    guests: ['SpeedRunSam', 'FGCFiona'],
    tags: ['Esports', 'Competition', 'Community']
  },
  {
    id: 3008,
    slug: 'designing-for-nostalgia',
    title: 'Designing for Nostalgia: When Retro Meets Modern UX',
    excerpt: 'How do you make something feel retro without sacrificing usability? Designers weigh in on the nostalgia-driven design trend.',
    content: '<p>Nostalgia is a powerful tool in design, but it can easily go wrong. We bring together web designers, game UI artists, and product designers to discuss how to channel retro aesthetics while maintaining modern usability standards and accessibility.</p>',
    date: 'December 2, 2025',
    author: 'David Chen',
    featuredImage: 'https://images.unsplash.com/photo-1760753145427-c327d09ace00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNvbXB1dGVyJTIwc2NyZWVuJTIwZ2xvd2luZ3xlbnwxfHx8fDE3NzM2NjA4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    episodeNumber: 102,
    season: 1,
    duration: '47:25',
    audioUrl: '#',
    guests: ['UXUrsula', 'RetroRay'],
    tags: ['Design', 'UX', 'Nostalgia']
  }
];

/** Get latest episode */
export const getLatestEpisode = (): PodcastEpisode => {
  return PODCAST_EPISODES[0];
};

/** Get episode by slug */
export const getEpisodeBySlug = (slug: string): PodcastEpisode | undefined => {
  return PODCAST_EPISODES.find((ep) => ep.slug === slug);
};