/**
 * @typedef BlogPost
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} content - HTML content simulation
 * @property {string} date
 * @property {string} author
 * @property {string} featuredImage
 * @property {Array<{name: string, slug: string}>} categories
 * @property {Array<{name: string, slug: string}>} tags
 * @property {Array<{id: string, author: string, date: string, content: string}>} [comments]
 */

/**
 * @type {BlogPost[]}
 */
export const BLOG_POSTS = [
  {
    id: '1',
    slug: 'future-of-ecommerce-2024',
    title: 'The future of eCommerce in 2024',
    excerpt: 'Explore the emerging trends that are reshaping the online shopping landscape, from AI-driven personalization to sustainable fulfillment.',
    content: '<p>The eCommerce landscape is evolving rapidly. As we move further into 2024, several key trends are emerging that will define how we shop online.</p><h2>1. AI-driven personalization</h2><p>Artificial Intelligence is no longer just a buzzword. It\'s becoming the backbone of customer experience. Retailers are using AI to predict what customers want before they even know it themselves.</p><h2>2. Sustainability as a standard</h2><p>Consumers are increasingly conscious of their environmental impact. Brands that prioritize sustainable packaging and carbon-neutral shipping are gaining a competitive edge.</p><blockquote>"The future belongs to those who build with the planet in mind."</blockquote><h2>3. Social commerce</h2><p>Social media platforms are transforming into shopping hubs. Seamless integration between discovery and purchase is key to capturing the Gen Z market.</p><ul><li>Integrated checkout experiences</li><li>Livestream shopping events</li><li>Influencer-led collections</li></ul><p>Adapting to these changes is essential for any business looking to thrive in the digital age.</p>',
    date: 'October 12, 2023',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Trends', slug: 'trends' }, { name: 'Business', slug: 'business' }],
    tags: [{ name: 'eCommerce', slug: 'ecommerce' }, { name: '2024', slug: '2024' }],
    comments: [
      { id: 'c1', author: 'Sarah J.', date: 'Oct 13, 2023', content: 'Great insights! I completely agree about the sustainability point.' },
      { id: 'c2', author: 'Mike T.', date: 'Oct 14, 2023', content: 'Do you think AI will replace human support entirely?' }
    ]
  },
  {
    id: '2',
    slug: 'sustainable-fashion-guide',
    title: 'A guide to sustainable fashion',
    excerpt: 'How to build a wardrobe that looks good and does good. We break down the basics of ethical clothing choices.',
    content: '<p>Fast fashion has dominated the industry for years, but the tide is turning. Building a sustainable wardrobe is easier than you think.</p><h2>Quality over quantity</h2><p>Investing in high-quality staples that last for years is the first step. Look for natural fibers like organic cotton, linen, and wool.</p><h2>Care matters</h2><p>How you wash and store your clothes significantly impacts their lifespan. Wash less, wash cold, and air dry when possible.</p><p>By making small changes, we can collectively make a huge difference.</p>',
    date: 'September 28, 2023',
    author: 'Emma Green',
    featuredImage: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Lifestyle', slug: 'lifestyle' }, { name: 'Sustainability', slug: 'sustainability' }],
    tags: [{ name: 'Fashion', slug: 'fashion' }, { name: 'Eco-friendly', slug: 'eco-friendly' }]
  },
  {
    id: '3',
    slug: 'minimalist-workspace-setup',
    title: 'Creating the ultimate minimalist workspace',
    excerpt: 'Boost your productivity with a clutter-free desk. Here are our top tips for designing a minimalist home office.',
    content: '<p>A cluttered desk often leads to a cluttered mind. Minimalism isn\'t just an aesthetic; it\'s a productivity hack.</p><h2>The essentials only</h2><p>Start by removing everything from your desk. Only put back what you use daily. Everything else belongs in a drawer or on a shelf.</p><h2>Cable management</h2><p>Visible wires are visual noise. Invest in some cable clips or a sleeve to keep things tidy.</p><p>Your workspace should inspire you, not stress you out.</p>',
    date: 'August 15, 2023',
    author: 'David Chen',
    featuredImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Design', slug: 'design' }, { name: 'Productivity', slug: 'productivity' }],
    tags: [{ name: 'Workspace', slug: 'workspace' }, { name: 'Minimalism', slug: 'minimalism' }]
  },
  {
    id: '4',
    slug: 'coffee-brewing-basics',
    title: 'Coffee brewing basics for beginners',
    excerpt: 'Master the art of the perfect pour-over. We cover beans, grind size, and water temperature.',
    content: '<p>Brewing coffee is a science and an art. Here is how to get started with a simple pour-over.</p><h2>The beans</h2><p>Freshness is key. Buy whole beans and grind them just before brewing.</p><h2>The ratio</h2><p>A good starting point is a 1:16 ratio of coffee to water. For 20g of coffee, use 320g of water.</p><p>Enjoy the ritual as much as the result.</p>',
    date: 'July 22, 2023',
    author: 'Sarah Jenkins',
    featuredImage: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Lifestyle', slug: 'lifestyle' }],
    tags: [{ name: 'Coffee', slug: 'coffee' }, { name: 'Guide', slug: 'guide' }]
  },
  {
    id: '5',
    slug: 'holiday-gift-guide-2023',
    title: 'Holiday gift guide 2023',
    excerpt: 'Find the perfect gift for everyone on your list. Curated picks for tech lovers, home chefs, and more.',
    content: '<p>The holidays are around the corner. We\'ve curated a list of gifts that are sure to delight.</p><h2>For the tech enthusiast</h2><p>Wireless noise-canceling headphones are a must-have this year.</p><h2>For the home chef</h2><p>A high-quality cast iron skillet is a gift that lasts a lifetime.</p><p>Happy gifting!</p>',
    date: 'November 10, 2023',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Trends', slug: 'trends' }],
    tags: [{ name: 'Gifts', slug: 'gifts' }, { name: 'Holiday', slug: 'holiday' }]
  },
  {
    id: '6',
    slug: 'digital-marketing-strategies-2024',
    title: '10 digital marketing strategies that work in 2024',
    excerpt: 'Stay ahead of the curve with these proven digital marketing tactics for growing your online business.',
    content: '<p>Digital marketing is constantly evolving. Here are the strategies that are delivering real results in 2024.</p><h2>Content is still king</h2><p>Quality, SEO-optimized content drives organic traffic and builds trust with your audience.</p><p>Focus on value-driven content that solves real problems.</p>',
    date: 'December 5, 2023',
    author: 'Michael Roberts',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Business', slug: 'business' }, { name: 'Marketing', slug: 'marketing' }],
    tags: [{ name: 'Digital Marketing', slug: 'digital-marketing' }, { name: 'Strategy', slug: 'strategy' }]
  },
  {
    id: '7',
    slug: 'home-organization-tips',
    title: 'Transform your home with these organization tips',
    excerpt: 'Declutter and organize every room in your house with our practical guide to home organization.',
    content: '<p>A well-organized home reduces stress and increases productivity. Start with these simple strategies.</p><h2>Start small</h2><p>Begin with one drawer or shelf. Small wins build momentum.</p><h2>Use vertical space</h2><p>Maximize storage by going up, not out.</p>',
    date: 'November 28, 2023',
    author: 'Emma Green',
    featuredImage: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Lifestyle', slug: 'lifestyle' }, { name: 'Design', slug: 'design' }],
    tags: [{ name: 'Organization', slug: 'organization' }, { name: 'Home', slug: 'home' }]
  },
  {
    id: '8',
    slug: 'photography-composition-basics',
    title: 'Photography composition: The rule of thirds and beyond',
    excerpt: 'Learn the fundamental principles of composition that will transform your photography instantly.',
    content: '<p>Great composition is what separates a snapshot from a photograph. Master these principles.</p><h2>The rule of thirds</h2><p>Divide your frame into nine equal parts and place key elements along the lines or intersections.</p><h2>Leading lines</h2><p>Use natural lines to guide the viewer\'s eye through the image.</p>',
    date: 'November 15, 2023',
    author: 'David Chen',
    featuredImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Design', slug: 'design' }, { name: 'Photography', slug: 'photography' }],
    tags: [{ name: 'Photography', slug: 'photography' }, { name: 'Tutorial', slug: 'tutorial' }]
  },
  {
    id: '9',
    slug: 'healthy-meal-prep-ideas',
    title: 'Healthy meal prep ideas for busy professionals',
    excerpt: 'Save time and eat healthier with these simple meal prep strategies and recipes.',
    content: '<p>Meal prep doesn\'t have to be complicated. These strategies will help you eat well all week.</p><h2>Batch cooking</h2><p>Cook large portions of staples like rice, quinoa, and roasted vegetables on Sunday.</p><h2>Mix and match</h2><p>Create variety by mixing different proteins, grains, and vegetables throughout the week.</p>',
    date: 'November 22, 2023',
    author: 'Sarah Jenkins',
    featuredImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Lifestyle', slug: 'lifestyle' }, { name: 'Health', slug: 'health' }],
    tags: [{ name: 'Food', slug: 'food' }, { name: 'Health', slug: 'health' }]
  },
  {
    id: '10',
    slug: 'remote-work-productivity-hacks',
    title: 'Remote work productivity hacks that actually work',
    excerpt: 'Maximize your productivity while working from home with these tested strategies.',
    content: '<p>Working remotely comes with unique challenges. Here\'s how to stay productive and focused.</p><h2>Create boundaries</h2><p>Designate a specific workspace and set clear working hours.</p><h2>Take real breaks</h2><p>Step away from your computer. Go for a walk or do some stretches.</p>',
    date: 'October 30, 2023',
    author: 'Michael Roberts',
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Productivity', slug: 'productivity' }, { name: 'Business', slug: 'business' }],
    tags: [{ name: 'Remote Work', slug: 'remote-work' }, { name: 'Productivity', slug: 'productivity' }]
  },
  {
    id: '11',
    slug: 'seasonal-wardrobe-essentials',
    title: 'Seasonal wardrobe essentials: Transition to winter',
    excerpt: 'Build a versatile winter wardrobe with these timeless essentials that work for any occasion.',
    content: '<p>Transitioning your wardrobe doesn\'t mean buying everything new. Focus on these key pieces.</p><h2>Layering basics</h2><p>A quality wool sweater and a structured blazer are the foundation of winter style.</p><h2>Invest in outerwear</h2><p>A classic coat in a neutral color will serve you for years.</p>',
    date: 'October 18, 2023',
    author: 'Emma Green',
    featuredImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Lifestyle', slug: 'lifestyle' }, { name: 'Fashion', slug: 'fashion' }],
    tags: [{ name: 'Fashion', slug: 'fashion' }, { name: 'Style', slug: 'style' }]
  },
  {
    id: '12',
    slug: 'seo-fundamentals-beginners',
    title: 'SEO fundamentals every beginner should know',
    excerpt: 'Demystifying search engine optimization with a practical guide for beginners.',
    content: '<p>SEO doesn\'t have to be intimidating. Start with these fundamental principles.</p><h2>Keywords matter</h2><p>Research what your audience is searching for and create content around those terms.</p><h2>Technical SEO</h2><p>Ensure your site loads fast, is mobile-friendly, and has clean URLs.</p>',
    date: 'September 12, 2023',
    author: 'Michael Roberts',
    featuredImage: 'https://images.unsplash.com/photo-1571677208365-0c3333cf4f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Business', slug: 'business' }, { name: 'Marketing', slug: 'marketing' }],
    tags: [{ name: 'SEO', slug: 'seo' }, { name: 'Digital Marketing', slug: 'digital-marketing' }]
  },
  {
    id: '13',
    slug: 'interior-design-color-theory',
    title: 'Interior design color theory for beginners',
    excerpt: 'Choose the perfect color palette for your home with this guide to color theory basics.',
    content: '<p>Color has a profound impact on how we feel in a space. Learn to use it effectively.</p><h2>The 60-30-10 rule</h2><p>60% dominant color, 30% secondary, and 10% accent. This creates balance and visual interest.</p><h2>Warm vs cool</h2><p>Warm colors energize, cool colors calm. Choose based on the room\'s purpose.</p>',
    date: 'September 5, 2023',
    author: 'David Chen',
    featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Design', slug: 'design' }, { name: 'Lifestyle', slug: 'lifestyle' }],
    tags: [{ name: 'Interior Design', slug: 'interior-design' }, { name: 'Color', slug: 'color' }]
  },
  {
    id: '14',
    slug: 'customer-service-excellence',
    title: 'Building customer service excellence in eCommerce',
    excerpt: 'Exceptional customer service is what turns first-time buyers into loyal brand advocates.',
    content: '<p>In eCommerce, customer service can make or break your reputation. Here\'s how to excel.</p><h2>Response time matters</h2><p>Aim to respond to customer inquiries within 24 hours, ideally much sooner.</p><h2>Empower your team</h2><p>Give customer service representatives the authority to solve problems without escalation.</p>',
    date: 'August 28, 2023',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Business', slug: 'business' }, { name: 'Trends', slug: 'trends' }],
    tags: [{ name: 'Customer Service', slug: 'customer-service' }, { name: 'eCommerce', slug: 'ecommerce' }]
  },
  {
    id: '15',
    slug: 'mindfulness-daily-practice',
    title: 'Building a daily mindfulness practice',
    excerpt: 'Reduce stress and increase focus with a simple daily mindfulness routine.',
    content: '<p>Mindfulness isn\'t about emptying your mind -- it\'s about being present. Start with these basics.</p><h2>Start small</h2><p>Begin with just 5 minutes a day. Consistency matters more than duration.</p><h2>Focus on breath</h2><p>When your mind wanders, gently return your attention to your breath.</p>',
    date: 'August 10, 2023',
    author: 'Sarah Jenkins',
    featuredImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Lifestyle', slug: 'lifestyle' }, { name: 'Health', slug: 'health' }],
    tags: [{ name: 'Mindfulness', slug: 'mindfulness' }, { name: 'Wellness', slug: 'wellness' }]
  },
  {
    id: '16',
    slug: 'social-media-content-calendar',
    title: 'How to create an effective social media content calendar',
    excerpt: 'Plan, organize, and execute your social media strategy with a well-structured content calendar.',
    content: '<p>Consistency is key on social media. A content calendar helps you stay organized and strategic.</p><h2>Plan ahead</h2><p>Map out content themes for the month, allowing flexibility for timely posts.</p><h2>Batch create</h2><p>Dedicate time to create multiple posts at once for efficiency.</p>',
    date: 'July 30, 2023',
    author: 'Michael Roberts',
    featuredImage: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Marketing', slug: 'marketing' }, { name: 'Business', slug: 'business' }],
    tags: [{ name: 'Social Media', slug: 'social-media' }, { name: 'Content Strategy', slug: 'content-strategy' }]
  },
  {
    id: '17',
    slug: 'plant-care-beginners-guide',
    title: 'Indoor plant care: A beginner\'s guide',
    excerpt: 'Keep your indoor plants thriving with these essential care tips for beginners.',
    content: '<p>Indoor plants bring life to any space, but they need proper care. Here\'s what you need to know.</p><h2>Light requirements</h2><p>Most plants need bright, indirect light. Avoid placing them in direct sunlight.</p><h2>Watering wisdom</h2><p>More plants die from overwatering than underwatering. Let the soil dry out between waterings.</p>',
    date: 'July 15, 2023',
    author: 'Emma Green',
    featuredImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Lifestyle', slug: 'lifestyle' }, { name: 'Design', slug: 'design' }],
    tags: [{ name: 'Plants', slug: 'plants' }, { name: 'Home', slug: 'home' }]
  },
  {
    id: '18',
    slug: 'time-management-techniques',
    title: 'Proven time management techniques for entrepreneurs',
    excerpt: 'Master your schedule and boost productivity with these effective time management strategies.',
    content: '<p>Time is your most valuable resource. Here\'s how successful entrepreneurs manage theirs.</p><h2>Time blocking</h2><p>Dedicate specific blocks of time to specific tasks. Minimize context switching.</p><h2>The two-minute rule</h2><p>If a task takes less than two minutes, do it immediately.</p>',
    date: 'June 28, 2023',
    author: 'Alex Morgan',
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    categories: [{ name: 'Productivity', slug: 'productivity' }, { name: 'Business', slug: 'business' }],
    tags: [{ name: 'Time Management', slug: 'time-management' }, { name: 'Productivity', slug: 'productivity' }]
  }
];