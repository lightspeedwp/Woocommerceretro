/**
 * New Pages Data — PlayPocket Retro Theme
 *
 * Mock data for Achievements, Leaderboard, New Releases, Bundle Builder,
 * Community Hub, Referral Program, Events, Lookbook, and Pre-Orders.
 *
 * @module data/newPages
 */

/* ── ACHIEVEMENTS ─────────────────────────────────────────────── */

export const ACHIEVEMENTS = [
  {
    id: 'ach-01',
    title: 'FIRST BLOOD',
    description: 'Made your very first purchase.',
    icon: '🎮',
    xp: 50,
    unlocked: true,
    unlockedDate: '2025-11-15',
    rarity: 'Common',
  },
  {
    id: 'ach-02',
    title: 'COMBO x5',
    description: 'Placed 5 orders.',
    icon: '⚡',
    xp: 150,
    unlocked: true,
    unlockedDate: '2026-01-03',
    rarity: 'Common',
  },
  {
    id: 'ach-03',
    title: 'PERFECT RUN',
    description: 'Left a product review with 5 stars.',
    icon: '⭐',
    xp: 100,
    unlocked: true,
    unlockedDate: '2025-12-20',
    rarity: 'Uncommon',
  },
  {
    id: 'ach-04',
    title: 'CHAIN COMBO x10',
    description: 'Placed 10 orders.',
    icon: '🔥',
    xp: 300,
    unlocked: true,
    unlockedDate: '2026-02-14',
    rarity: 'Uncommon',
  },
  {
    id: 'ach-05',
    title: 'HIGH ROLLER',
    description: 'Spent over $500 lifetime.',
    icon: '💰',
    xp: 500,
    unlocked: true,
    unlockedDate: '2026-02-28',
    rarity: 'Rare',
  },
  {
    id: 'ach-06',
    title: 'SOCIAL BUTTERFLY',
    description: 'Referred 3 friends who made a purchase.',
    icon: '🦋',
    xp: 250,
    unlocked: true,
    unlockedDate: '2026-01-22',
    rarity: 'Rare',
  },
  {
    id: 'ach-07',
    title: 'CRITIC',
    description: 'Left 10 product reviews.',
    icon: '📝',
    xp: 400,
    unlocked: false,
    unlockedDate: null,
    rarity: 'Rare',
    progress: { current: 7, total: 10 },
  },
  {
    id: 'ach-08',
    title: 'BOSS SLAYER',
    description: 'Spent over $1,000 lifetime.',
    icon: '🗡️',
    xp: 1000,
    unlocked: false,
    unlockedDate: null,
    rarity: 'Epic',
    progress: { current: 680, total: 1000 },
  },
  {
    id: 'ach-09',
    title: 'COMPLETIONIST',
    description: 'Purchased from all 5 categories.',
    icon: '🏆',
    xp: 750,
    unlocked: false,
    unlockedDate: null,
    rarity: 'Epic',
    progress: { current: 3, total: 5 },
  },
  {
    id: 'ach-10',
    title: 'LEGENDARY',
    description: 'Unlock all other achievements.',
    icon: '👑',
    xp: 2000,
    unlocked: false,
    unlockedDate: null,
    rarity: 'Legendary',
    progress: { current: 6, total: 9 },
  },
  {
    id: 'ach-11',
    title: 'NIGHT OWL',
    description: 'Place an order between midnight and 4 AM.',
    icon: '🦉',
    xp: 100,
    unlocked: true,
    unlockedDate: '2026-03-02',
    rarity: 'Uncommon',
  },
  {
    id: 'ach-12',
    title: 'SPEED RUNNER',
    description: 'Complete checkout in under 60 seconds.',
    icon: '⏱️',
    xp: 200,
    unlocked: false,
    unlockedDate: null,
    rarity: 'Rare',
  },
];

/* ── LEADERBOARD ──────────────────────────────────────────────── */

export const LEADERBOARD_PLAYERS = [
  { rank: 1, name: 'PixelKing99', xp: 14250, tier: 'Legendary', avatar: '👑', streak: 42 },
  { rank: 2, name: 'ArcadeBoss', xp: 12800, tier: 'Legendary', avatar: '🎮', streak: 38 },
  { rank: 3, name: 'NeonNinja', xp: 11400, tier: 'Epic', avatar: '⚡', streak: 31 },
  { rank: 4, name: 'RetroQueen', xp: 9950, tier: 'Epic', avatar: '🕹️', streak: 28 },
  { rank: 5, name: 'GameOverNot', xp: 8700, tier: 'Epic', avatar: '🔥', streak: 25 },
  { rank: 6, name: 'CoinMagnet', xp: 7200, tier: 'Rare', avatar: '💰', streak: 22 },
  { rank: 7, name: 'Player1_Pro', xp: 6850, tier: 'Rare', avatar: '🏆', streak: 19 },
  { rank: 8, name: 'LootHunter', xp: 5400, tier: 'Rare', avatar: '🗡️', streak: 15 },
  { rank: 9, name: 'HighScoreHero', xp: 4200, tier: 'Uncommon', avatar: '⭐', streak: 12 },
  { rank: 10, name: 'ButtonMasher', xp: 3100, tier: 'Uncommon', avatar: '🎲', streak: 9 },
  { rank: 11, name: 'StartScreen', xp: 2800, tier: 'Uncommon', avatar: '📺', streak: 7 },
  { rank: 12, name: 'JoystickJay', xp: 2400, tier: 'Common', avatar: '🕹️', streak: 5 },
  { rank: 13, name: 'CartridgeKid', xp: 1800, tier: 'Common', avatar: '📼', streak: 4 },
  { rank: 14, name: 'PixelPawn', xp: 1200, tier: 'Common', avatar: '♟️', streak: 2 },
  { rank: 15, name: 'NewPlayer42', xp: 650, tier: 'Common', avatar: '🆕', streak: 1 },
];

export const CURRENT_PLAYER = {
  rank: 8,
  name: 'LootHunter',
  xp: 5400,
  tier: 'Rare',
  avatar: '🗡️',
  streak: 15,
};

/* ── NEW RELEASES / PRE-ORDERS ────────────────────────────────── */

export const NEW_RELEASES = [
  {
    id: 'nr-01',
    name: 'RetroVault Deluxe Console',
    category: 'Collectibles',
    price: 149.99,
    releaseDate: '2026-03-28',
    image: 'https://images.unsplash.com/photo-1601415104543-6f2d703a21d1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80',
    description: 'Premium all-in-one retro console with 200+ built-in classics.',
    status: 'pre-order',
    preOrderCount: 342,
  },
  {
    id: 'nr-02',
    name: 'Pixel Warrior Hoodie',
    category: 'Apparel',
    price: 68.00,
    releaseDate: '2026-04-05',
    image: 'https://images.unsplash.com/photo-1768933294252-92470e942eea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80',
    description: 'Limited edition hoodie with glow-in-the-dark pixel warrior graphic.',
    status: 'pre-order',
    preOrderCount: 187,
  },
  {
    id: 'nr-03',
    name: '8-Bit Soundtrack Vinyl',
    category: 'Collectibles',
    price: 38.00,
    releaseDate: '2026-04-12',
    image: 'https://images.unsplash.com/photo-1652197881268-d625ad54402b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80',
    description: 'Double LP vinyl pressing of classic chiptune soundtracks.',
    status: 'pre-order',
    preOrderCount: 95,
  },
  {
    id: 'nr-04',
    name: 'Pro Controller RGB Edition',
    category: 'Accessories',
    price: 55.00,
    releaseDate: '2026-04-20',
    image: 'https://images.unsplash.com/photo-1698226929469-89f978943470?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80',
    description: 'Wireless controller with customizable RGB underglow and macro buttons.',
    status: 'coming-soon',
    preOrderCount: 0,
  },
  {
    id: 'nr-05',
    name: 'Dungeon Crawler Board Game',
    category: 'Games',
    price: 45.00,
    releaseDate: '2026-05-01',
    image: 'https://images.unsplash.com/photo-1771046455520-6a3db5e8707f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80',
    description: 'Tabletop RPG with pixel art miniatures and retro dungeon tiles.',
    status: 'coming-soon',
    preOrderCount: 0,
  },
  {
    id: 'nr-06',
    name: 'NeoPixel Wall Art Set',
    category: 'Posters',
    price: 32.00,
    releaseDate: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1580617971627-cffa74e39d1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80',
    description: 'Set of 3 pixel-art prints on premium matte paper, each 18x24 inches.',
    status: 'coming-soon',
    preOrderCount: 0,
  },
];

/* ── BUNDLE BUILDER ───────────────────────────────────────────── */

export const BUNDLE_CATEGORIES = [
  { id: 'apparel', label: 'APPAREL', icon: '👕' },
  { id: 'accessories', label: 'GEAR', icon: '🎧' },
  { id: 'games', label: 'GAMES', icon: '🎲' },
  { id: 'posters', label: 'POSTERS', icon: '🖼️' },
  { id: 'collectibles', label: 'LOOT', icon: '✨' },
];

export const BUNDLE_TIERS = [
  { id: 'starter', label: 'STARTER PACK', items: 2, discount: 5, icon: '🟢' },
  { id: 'pro', label: 'PRO PACK', items: 4, discount: 12, icon: '🟡' },
  { id: 'ultimate', label: 'ULTIMATE PACK', items: 6, discount: 20, icon: '🔴' },
];

/* ── EVENTS ───────────────────────────────────────────────────── */

export const EVENTS = [
  {
    id: 'evt-01',
    title: 'Pixel Art Workshop',
    date: '2026-03-22',
    time: '2:00 PM - 5:00 PM',
    location: 'PlayPocket HQ, Brooklyn NY',
    type: 'In-Store',
    description: 'Learn to create your own pixel art designs with professional artists. Supplies provided.',
    spotsLeft: 8,
    totalSpots: 30,
    image: 'https://images.unsplash.com/photo-1771046455520-6a3db5e8707f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=400&q=80',
  },
  {
    id: 'evt-02',
    title: 'Retro Gaming Tournament',
    date: '2026-04-05',
    time: '12:00 PM - 8:00 PM',
    location: 'Online (Discord)',
    type: 'Online',
    description: 'Compete in classic arcade and console games. Top 3 win PlayPocket gift cards.',
    spotsLeft: 42,
    totalSpots: 128,
    image: 'https://images.unsplash.com/photo-1758410473603-616660032c2a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=400&q=80',
  },
  {
    id: 'evt-03',
    title: 'Spring Collection Launch Party',
    date: '2026-04-15',
    time: '6:00 PM - 10:00 PM',
    location: 'PlayPocket Pop-up, LA',
    type: 'In-Store',
    description: 'Be the first to see our Spring 2026 collection. Live DJ, free merch, and exclusive drops.',
    spotsLeft: 0,
    totalSpots: 100,
    image: 'https://images.unsplash.com/photo-1580617971627-cffa74e39d1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=400&q=80',
  },
  {
    id: 'evt-04',
    title: 'Community Meetup: Collector Edition Swap',
    date: '2026-04-28',
    time: '11:00 AM - 3:00 PM',
    location: 'Central Park, NYC',
    type: 'In-Person',
    description: 'Bring your collectibles, trade with fellow players, and score rare finds.',
    spotsLeft: 25,
    totalSpots: 50,
    image: 'https://images.unsplash.com/photo-1659401417767-15398866538b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=400&q=80',
  },
  {
    id: 'evt-05',
    title: 'Chiptune Live Concert',
    date: '2026-05-10',
    time: '7:00 PM - 11:00 PM',
    location: 'The Arcade Bar, Austin TX',
    type: 'In-Store',
    description: 'Live chiptune performances from top 8-bit musicians. 21+ event.',
    spotsLeft: 15,
    totalSpots: 80,
    image: 'https://images.unsplash.com/photo-1698226929469-89f978943470?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=400&q=80',
  },
];

/* ── COMMUNITY HUB ────────────────────────────────────────────── */

export const COMMUNITY_POSTS = [
  {
    id: 'cp-01',
    author: 'PixelKing99',
    avatar: '👑',
    content: 'Just unboxed the RetroVault console and it is incredible. The build quality is top notch!',
    likes: 47,
    replies: 12,
    date: '2 hours ago',
    tag: 'Review',
  },
  {
    id: 'cp-02',
    author: 'ArcadeBoss',
    avatar: '🎮',
    content: 'Anyone else rocking the Neon Arcade Hoodie? The glow effect is legit.',
    likes: 32,
    replies: 8,
    date: '5 hours ago',
    tag: 'Discussion',
  },
  {
    id: 'cp-03',
    author: 'NeonNinja',
    avatar: '⚡',
    content: 'Pro tip: The Pixel Power Tee pairs perfectly with the Bomber Jacket Alpha. Trust me.',
    likes: 28,
    replies: 5,
    date: '8 hours ago',
    tag: 'Style',
  },
  {
    id: 'cp-04',
    author: 'RetroQueen',
    avatar: '🕹️',
    content: 'Hit Legendary tier today! The journey from Common to Legendary took me 4 months.',
    likes: 89,
    replies: 23,
    date: '1 day ago',
    tag: 'Achievement',
  },
  {
    id: 'cp-05',
    author: 'GameOverNot',
    avatar: '🔥',
    content: 'Suggestion: PlayPocket should do a collaboration with classic arcade brands. Would buy instantly.',
    likes: 64,
    replies: 18,
    date: '1 day ago',
    tag: 'Suggestion',
  },
  {
    id: 'cp-06',
    author: 'CoinMagnet',
    avatar: '💰',
    content: 'The referral program is amazing. Already earned $40 in credits from sharing with friends!',
    likes: 21,
    replies: 3,
    date: '2 days ago',
    tag: 'Referral',
  },
];

export const COMMUNITY_STATS = {
  totalMembers: 12847,
  activeToday: 342,
  totalPosts: 8429,
  totalReviews: 3210,
};

/* ── REFERRAL PROGRAM ─────────────────────────────────────────── */

export const REFERRAL_TIERS = [
  { friends: 1, reward: '$5 credit', icon: '🌱' },
  { friends: 3, reward: '$15 credit + free shipping', icon: '🌿' },
  { friends: 5, reward: '$30 credit + exclusive badge', icon: '🌳' },
  { friends: 10, reward: '$75 credit + limited tee', icon: '🏆' },
];

export const REFERRAL_USER = {
  code: 'PLAY-LH42X',
  totalReferred: 4,
  pendingRewards: 15.00,
  earnedTotal: 35.00,
  referrals: [
    { name: 'Jamie K.', date: 'Feb 12, 2026', status: 'completed', reward: 10 },
    { name: 'Morgan T.', date: 'Jan 28, 2026', status: 'completed', reward: 10 },
    { name: 'Sam R.', date: 'Jan 15, 2026', status: 'completed', reward: 10 },
    { name: 'Alex P.', date: 'Mar 5, 2026', status: 'pending', reward: 5 },
  ],
};

/* ── LOOKBOOK ─────────────────────────────────────────────────── */

export const LOOKBOOK_COLLECTIONS = [
  {
    id: 'lb-01',
    title: 'NEON NIGHTS',
    subtitle: 'Spring 2026',
    image: 'https://images.unsplash.com/photo-1580617971627-cffa74e39d1d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=1000&q=80',
    products: ['prod-app-01', 'prod-app-02', 'prod-acc-03'],
  },
  {
    id: 'lb-02',
    title: 'PIXEL PERFECT',
    subtitle: 'Streetwear Edit',
    image: 'https://images.unsplash.com/photo-1768933294252-92470e942eea?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=1000&q=80',
    products: ['prod-app-03', 'prod-app-04', 'prod-acc-01'],
  },
  {
    id: 'lb-03',
    title: 'ARCADE CLASSICS',
    subtitle: 'Collector Series',
    image: 'https://images.unsplash.com/photo-1698226929469-89f978943470?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=1000&q=80',
    products: ['prod-col-01', 'prod-col-02', 'prod-gam-01'],
  },
  {
    id: 'lb-04',
    title: 'GAME ROOM',
    subtitle: 'Decor Collection',
    image: 'https://images.unsplash.com/photo-1652197881268-d625ad54402b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=1000&q=80',
    products: ['prod-pos-01', 'prod-pos-02', 'prod-col-05'],
  },
  {
    id: 'lb-05',
    title: 'READY PLAYER',
    subtitle: 'Essentials Kit',
    image: 'https://images.unsplash.com/photo-1601415104543-6f2d703a21d1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=1000&q=80',
    products: ['prod-acc-05', 'prod-gam-03', 'prod-app-08'],
  },
  {
    id: 'lb-06',
    title: 'BOSS LEVEL',
    subtitle: 'Premium Drops',
    image: 'https://images.unsplash.com/photo-1771046455520-6a3db5e8707f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=1000&q=80',
    products: ['prod-col-04', 'prod-app-05', 'prod-acc-10'],
  },
];

/* ── ACCOUNT ADDRESSES ────────────────────────────────────────── */

export const SAVED_ADDRESSES = [
  {
    id: 'addr-01',
    label: 'HOME BASE',
    name: 'Player One',
    street: '742 Pixel Lane',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
    country: 'United States',
    isDefault: true,
  },
  {
    id: 'addr-02',
    label: 'WORK HQ',
    name: 'Player One',
    street: '100 Arcade Blvd, Suite 404',
    city: 'Manhattan',
    state: 'NY',
    zip: '10001',
    country: 'United States',
    isDefault: false,
  },
];
