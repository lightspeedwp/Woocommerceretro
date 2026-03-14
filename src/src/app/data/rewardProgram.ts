/**
 * Reward Program Data
 * 
 * Content for the Rewards Program page, including tiers, earning methods, and redemption options.
 * 
 * @module data/rewardProgram
 */

// @typedef {Object} RewardTier
// @property {string} name
// @property {string} points
// @property {string} icon
// @property {string} color
// @property {string[]} benefits

// @typedef {Object} EarnMethod
// @property {string} action
// @property {string} points
// @property {string} description

// @typedef {Object} RedeemOption
// @property {string} points
// @property {string} reward

const rewardTiers = [
  { name: 'Bronze', points: '0 - 499', icon: 'Star', color: 'bronze', benefits: ['1 point per $1 spent', 'Birthday reward', 'Member-only sales access'] },
  { name: 'Silver', points: '500 - 1,499', icon: 'Award', color: 'silver', benefits: ['1.5 points per $1 spent', 'Free standard shipping', 'Early access to new arrivals', 'Exclusive Silver promotions'] },
  { name: 'Gold', points: '1,500 - 4,999', icon: 'Crown', color: 'gold', benefits: ['2 points per $1 spent', 'Free express shipping', 'Priority customer support', 'Gold-only events and previews'] },
  { name: 'Platinum', points: '5,000+', icon: 'Zap', color: 'platinum', benefits: ['3 points per $1 spent', 'Free next-day shipping', 'Personal shopper access', 'Annual appreciation gift', 'VIP event invitations'] },
];

const earnMethods = [
  { action: 'Make a Purchase', points: '1-3 points per $1', description: 'Earn points on every purchase. Higher tiers earn more.' },
  { action: 'Write a Review', points: '50 points', description: 'Share your honest feedback on products you have purchased.' },
  { action: 'Refer a Friend', points: '200 points', description: 'Give $10, get 200 points when your friend makes their first order.' },
  { action: 'Birthday Bonus', points: '100 points', description: 'Receive bonus points on your birthday every year.' },
  { action: 'Social Follow', points: '25 points', description: 'Follow us on social media for bonus points (once per platform).' },
];

const redeemOptions = [
  { points: '250', reward: '$5 off your next order' },
  { points: '500', reward: '$10 off your next order' },
  { points: '1,000', reward: '$25 off your next order' },
  { points: '2,500', reward: '$75 off your next order' },
  { points: '5,000', reward: '$175 off your next order' },
];

const rewardProgramPageContent = {
  title: 'Rewards Program',
  description: 'Earn points with every purchase and unlock exclusive perks. The more you shop, the more you save.',
  howItWorksHeading: 'How It Works',
  tiersHeading: 'Membership Tiers',
  earnHeading: 'Ways to Earn Points',
  redeemHeading: 'Redeem Your Points',
  ctaHeading: 'Start Earning Today',
  ctaText: 'Create a free account to join the rewards program and start earning points on every purchase.',
  ctaButtonPrimary: 'Join Now',
  ctaButtonSecondary: 'Start Shopping'
};

export { rewardTiers, earnMethods, redeemOptions, rewardProgramPageContent };