/**
 * Newsletter Archive Data
 *
 * 8 past newsletters for the PlayPocket "Pocket Dispatch" newsletter.
 * Monthly digests with gaming news, product drops, and community highlights.
 *
 * @module data/newsletters
 */

export interface NewsletterIssue {
  id: number;
  slug: string;
  issueNumber: number;
  title: string;
  subject: string;
  previewText: string;
  date: string;
  heroImage: string;
  sections: NewsletterSection[];
}

export interface NewsletterSection {
  heading: string;
  body: string;
  image?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export const NEWSLETTER_ISSUES: NewsletterIssue[] = [
  {
    id: 5001,
    slug: 'pocket-dispatch-008',
    issueNumber: 8,
    title: 'Pocket Dispatch #008',
    subject: 'Spring Drop Preview + Retro Esports Recap',
    previewText: 'Our biggest product drop of the year is almost here. Plus: the latest from the retro esports scene.',
    date: 'March 1, 2026',
    heroImage: 'https://images.unsplash.com/photo-1610561212775-b191f21b6998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGNvbnRyb2xsZXIlMjBuZW9ufGVufDF8fHx8MTc3MzU5OTM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: 'Spring Collection Preview',
        body: 'Get an exclusive first look at our Spring 2026 lineup. New pixel-art tees, limited edition enamel pins, and the return of our most-requested hoodie design.',
        ctaText: 'Preview the Drop',
        ctaUrl: '/shop'
      },
      {
        heading: 'Retro Esports Roundup',
        body: 'The Classic Tetris championship qualifiers are underway, and our community member "StackMaster" made it to the top 16. We recap the highlights and share the schedule for upcoming events.',
        image: 'https://images.unsplash.com/photo-1558008322-9793c57cb73b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21tdW5pdHklMjBlc3BvcnRzJTIwY3Jvd2R8ZW58MXx8fHwxNzczNjYwODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        heading: 'Community Spotlight',
        body: 'This month we feature @PixelPete and their incredible custom Game Boy builds. Check out the full gallery on our community hub.',
        ctaText: 'See the Gallery',
        ctaUrl: '/community'
      }
    ]
  },
  {
    id: 5002,
    slug: 'pocket-dispatch-007',
    issueNumber: 7,
    title: 'Pocket Dispatch #007',
    subject: 'New Year, New Gear + 2025 Wrapped',
    previewText: 'Our 2025 year in review, plus early access to the first drop of 2026.',
    date: 'February 1, 2026',
    heroImage: 'https://images.unsplash.com/photo-1766051666522-9cfa12675f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwZ2FtaW5nJTIwcm9vbSUyMHB1cnBsZXxlbnwxfHx8fDE3NzM2NjA4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: '2025: Year in Review',
        body: 'What a year. We launched 47 new products, shipped to 12 new countries, and grew our community to over 50,000 members. Here are the highlights.'
      },
      {
        heading: 'January Drop: Arcade Classics Collection',
        body: 'Our first drop of 2026 celebrates the golden age of arcades. Tees, posters, and a very special limited edition joystick controller.',
        ctaText: 'Shop Now',
        ctaUrl: '/shop'
      }
    ]
  },
  {
    id: 5003,
    slug: 'pocket-dispatch-006',
    issueNumber: 6,
    title: 'Pocket Dispatch #006',
    subject: 'Holiday Gift Guide + Secret Sale',
    previewText: 'Find the perfect gift for every gamer on your list. Plus a subscriber-only discount code.',
    date: 'December 15, 2025',
    heroImage: 'https://images.unsplash.com/photo-1515468754461-a1242b9bcbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwY2FydHJpZGdlJTIwY29sbGVjdGlvbiUyMHZpbnRhZ2V8ZW58MXx8fHwxNzczNjYwODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: 'The PlayPocket Gift Guide',
        body: 'Whether they are a casual gamer or a hardcore collector, we have curated the perfect picks at every price point.',
        ctaText: 'View Gift Guide',
        ctaUrl: '/shop'
      },
      {
        heading: 'Subscriber Secret: 20% Off Everything',
        body: 'As a thank-you for being a subscriber, use code DISPATCH20 at checkout for 20% off your entire order. Valid through December 31.'
      }
    ]
  },
  {
    id: 5004,
    slug: 'pocket-dispatch-005',
    issueNumber: 5,
    title: 'Pocket Dispatch #005',
    subject: 'Black Friday Preview + Podcast Season Finale',
    previewText: 'Our biggest sale of the year starts early for subscribers. Plus the Press Start Season 1 finale.',
    date: 'November 15, 2025',
    heroImage: 'https://images.unsplash.com/photo-1702315139575-ba243e9602a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBtYWNoaW5lJTIwcmV0cm8lMjBwaXhlbHxlbnwxfHx8fDE3NzM2NjA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: 'Black Friday: Early Access',
        body: 'Subscribers get 24 hours of early access to our Black Friday deals. Up to 40% off across all categories.',
        ctaText: 'Set a Reminder',
        ctaUrl: '/deals'
      },
      {
        heading: 'Press Start: Season 1 Finale',
        body: 'The Season 1 finale of our podcast drops this week. We reflect on the best episodes and tease what is coming in Season 2.',
        ctaText: 'Listen Now',
        ctaUrl: '/blog/format/audio'
      }
    ]
  },
  {
    id: 5005,
    slug: 'pocket-dispatch-004',
    issueNumber: 4,
    title: 'Pocket Dispatch #004',
    subject: 'Fall Collection Launch + Game Room Contest',
    previewText: 'Our cozy fall collection is here. Plus: show us your game room and win a prize pack.',
    date: 'October 1, 2025',
    heroImage: 'https://images.unsplash.com/photo-1729025233783-ef4476af9343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjB0YWJsZXRvcCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzY2MDg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: 'Fall Collection: Cozy Gaming',
        body: 'Hoodies, beanies, and blankets inspired by our favorite comfort games. Perfect for marathon gaming sessions as the weather cools down.',
        ctaText: 'Shop Fall',
        ctaUrl: '/shop'
      },
      {
        heading: 'Contest: Show Us Your Setup',
        body: 'Tag us with #PlayPocketSetup for a chance to win a prize pack worth over $200. We will feature the best setups in next month\'s newsletter.',
        ctaText: 'Enter Now',
        ctaUrl: '/community'
      }
    ]
  },
  {
    id: 5006,
    slug: 'pocket-dispatch-003',
    issueNumber: 3,
    title: 'Pocket Dispatch #003',
    subject: 'Summer Sale Kickoff + New Video Series',
    previewText: 'Summer sale starts now with up to 30% off. Plus the launch of our new YouTube build series.',
    date: 'August 15, 2025',
    heroImage: 'https://images.unsplash.com/photo-1628089700970-0012c5718efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBrZXlib2FyZCUyMFJHQiUyMHNldHVwfGVufDF8fHx8MTc3MzY2MDg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: 'Summer Sale: Up to 30% Off',
        body: 'Stock up on your favorite pixel-art prints, retro tees, and gaming accessories. Sale runs through August 31.',
        ctaText: 'Shop the Sale',
        ctaUrl: '/deals'
      },
      {
        heading: 'New Series: Build It Retro',
        body: 'Our new YouTube series follows the process of building custom retro gaming hardware. Episode 1 drops this Friday.',
        ctaText: 'Watch Trailer',
        ctaUrl: '/blog/format/video'
      }
    ]
  },
  {
    id: 5007,
    slug: 'pocket-dispatch-002',
    issueNumber: 2,
    title: 'Pocket Dispatch #002',
    subject: 'Collectibles Drop + Community Meetup Recap',
    previewText: 'Wave 2 of our collectible figures is here. Plus photos from our first community meetup.',
    date: 'July 1, 2025',
    heroImage: 'https://images.unsplash.com/photo-1770200294602-c5f5d509b327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMGZpZ3VyaW5lJTIwZGlzcGxheSUyMHNoZWxmfGVufDF8fHx8MTc3MzY2MDg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: 'Wave 2: Collectible Figures',
        body: 'Six new figures join the PlayPocket Legends series. Each one is hand-painted and limited to 500 units worldwide.',
        ctaText: 'View Collection',
        ctaUrl: '/shop/collectibles'
      },
      {
        heading: 'Meetup Recap: PixelCon 2025',
        body: 'Over 200 PlayPocket community members gathered at PixelCon 2025 for gaming, swaps, and panels. See the photo gallery.',
        ctaText: 'See Photos',
        ctaUrl: '/community'
      }
    ]
  },
  {
    id: 5008,
    slug: 'pocket-dispatch-001',
    issueNumber: 1,
    title: 'Pocket Dispatch #001',
    subject: 'Welcome to PlayPocket + Grand Opening Sale',
    previewText: 'Welcome to the first ever Pocket Dispatch! Celebrate our launch with 25% off everything.',
    date: 'June 1, 2025',
    heroImage: 'https://images.unsplash.com/photo-1769613758100-a5d12762b1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBtdXJhbCUyMGNvbG9yZnVsJTIwdXJiYW58ZW58MXx8fHwxNzczNjYwODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sections: [
      {
        heading: 'Welcome to PlayPocket',
        body: 'We built PlayPocket for people who love games -- not just playing them, but living them. From retro-inspired apparel to hand-curated collectibles, everything here is made by gamers, for gamers.'
      },
      {
        heading: 'Grand Opening: 25% Off',
        body: 'Celebrate our launch with 25% off your entire order. Use code PRESSSTART at checkout. Valid for our first 1,000 customers.',
        ctaText: 'Start Shopping',
        ctaUrl: '/shop'
      }
    ]
  }
];

/** Get latest newsletter */
export const getLatestNewsletter = (): NewsletterIssue => {
  return NEWSLETTER_ISSUES[0];
};

/** Get newsletter by slug */
export const getNewsletterBySlug = (slug: string): NewsletterIssue | undefined => {
  return NEWSLETTER_ISSUES.find((n) => n.slug === slug);
};
