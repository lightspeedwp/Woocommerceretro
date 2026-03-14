/**
 * Shop Brand Data
 * 
 * Data definitions for the Shop's brand landing pages.
 * Includes marketing copy, hero images, and navigation links.
 * 
 * @typedef {Object} BrandData
 * @property {string} id - Unique identifier for the brand.
 * @property {string} name - Display name.
 * @property {string} category - Main category.
 * @property {string} tagline - Short catchy phrase.
 * @property {string} description - Brief description.
 * @property {string} heroImage - URL to high-res hero image.
 * @property {string} [logo] - Optional logo URL.
 * @property {string} story - Longer brand narrative.
 * @property {string[]} features - List of key selling points.
 * @property {string} shopLink - URL to the filtered shop page.
 */

export const SHOP_BRANDS_DATA = {
  'kwv-brandy': {
    id: 'kwv-brandy',
    name: 'KWV Brandy',
    category: 'spirits',
    tagline: 'World class. World\'s best brandy.',
    description: 'Consistently crowned the best brandy in the world, KWV Brandy represents the pinnacle of South African distillation.',
    heroImage: 'https://images.unsplash.com/photo-1599309066463-b88307db3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'For over a century, KWV has been crafting the finest brandies in the world. Our Potstill Brandies are double distilled in copper potstills and matured in small French oak barrels. The result is a range of brandies that are renowned for their quality, smoothness, and complexity.',
    features: ['Double distilled', 'Matured in French oak', 'Multi-award winning', 'Heritage of excellence'],
    shopLink: '/shop/spirits/brandy?brand=kwv-brandy'
  },
  'bacardi': {
    id: 'bacardi',
    name: 'Bacardi',
    category: 'spirits',
    tagline: 'Do what moves you.',
    description: 'The world\'s most awarded rum, inspiring cocktails and good times since 1862.',
    heroImage: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Bacardi is more than just a rum brand; it is a legacy of passion and resilience. From the signature Bacardi Superior to the rich and complex aged rums, every bottle carries the spirit of the Bacardi family.',
    features: ['World\'s most awarded rum', 'Perfect for cocktails', 'Aged & unaged varietals', 'Global icon'],
    shopLink: '/shop/spirits/rum?brand=bacardi'
  },
  'kwv-classic-collection': {
    id: 'kwv-classic-collection',
    name: 'Classic collection',
    category: 'wines',
    tagline: 'Wines for every occasion.',
    description: 'A range of wines that are crafted to be enjoyed by all. Accessible, consistent, and delicious.',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'The KWV Classic collection is crafted with the consumer in mind. We believe that great wine should be accessible to everyone. Our winemakers select the best grapes from the Western Cape to create wines that are fruity, soft, and easy to drink.',
    features: ['Easy drinking', 'Sustainable practices', 'Wide variety', 'Great value'],
    shopLink: '/shop/wine?brand=classic-collection'
  },
  'roodeberg': {
    id: 'roodeberg',
    name: 'Roodeberg',
    category: 'wines',
    tagline: 'The legendary red.',
    description: 'A true South African icon. Roodeberg has been bringing friends together for over 70 years.',
    heroImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Roodeberg is the result of a secret blend that was first created in 1949. It is a wine that has stood the test of time, evolving with the palates of wine lovers while staying true to its heritage. It is the heart of any celebration.',
    features: ['Iconic red blend', '70+ years of history', 'Award winning', 'Perfect for gifting'],
    shopLink: '/shop/wine/red?brand=roodeberg'
  },
  'laborie': {
    id: 'laborie',
    name: 'Laborie',
    category: 'wines',
    tagline: 'La grande vie.',
    description: 'Celebrate the good life with Laborie\'s range of wines and Methode Cap Classique.',
    heroImage: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Situated in the heart of Paarl, Laborie Estate is as rich in history as it is in beauty. Our wines reflect the elegance and vibrancy of the estate, inviting you to enjoy every moment with style.',
    features: ['Methode Cap Classique', 'Historic estate', 'Elegant wines', 'French heritage'],
    shopLink: '/shop/wine?brand=laborie'
  },
  'annabelle': {
    id: 'annabelle',
    name: 'Annabelle',
    category: 'wines',
    tagline: 'Sparkling sweetness.',
    description: 'A delightful range of sparkling beverages perfect for celebrating life\'s sweet moments.',
    heroImage: 'https://images.unsplash.com/photo-1598155523122-38423bb4d693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Annabelle is fun, flirty, and fabulous. It is designed for those who enjoy the sweeter side of life. Whether it is a brunch with friends or a sunset toast, Annabelle adds a sparkle to the occasion.',
    features: ['Deliciously sweet', 'Sparkling', 'Stylish packaging', 'Party perfect'],
    shopLink: '/shop/wine/sparkling?brand=annabelle'
  },
  'the-mentors': {
    id: 'the-mentors',
    name: 'The Mentors',
    category: 'wines',
    tagline: 'Strictly limited.',
    description: 'Small batch, premium wines that showcase the absolute pinnacle of KWV\'s winemaking capabilities.',
    heroImage: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'The Mentors range is a result of experimentation and a pursuit of perfection. Our winemakers are given the freedom to explore new terroirs and techniques. Only the very best barrels are selected for this exclusive range.',
    features: ['Small batch', 'Terroir specific', 'Highly awarded', 'Collector\'s items'],
    shopLink: '/shop/wine?brand=the-mentors'
  },
  'cathedral-cellar': {
    id: 'cathedral-cellar',
    name: 'Cathedral Cellar',
    category: 'wines',
    tagline: 'Monumental wine.',
    description: 'Wines with a sense of place, aged in our historic Cathedral Cellar.',
    heroImage: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Built in 1930, the Cathedral Cellar is the heart of KWV. The wines that bear its name are crafted to reflect the grandeur and history of this impressive space. Complex, layered, and worthy of aging.',
    features: ['Barrel matured', 'Historic significance', 'Gastronomic wines', 'Premium quality'],
    shopLink: '/shop/wine?brand=cathedral-cellar'
  },
  'wild-africa-cream': {
    id: 'wild-africa-cream',
    name: 'Wild Africa cream',
    category: 'spirits',
    tagline: 'Untamed elegance.',
    description: 'A tantalizing blend of fresh cream and distilled spirit, inspired by the African leopard.',
    heroImage: 'https://images.unsplash.com/photo-1617006506594-2cb92954c3f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Wild Africa Cream is as smooth as it is wild. Made with fresh cream and caramel, it is a luxurious treat that can be enjoyed over ice or in a decadent cocktail. Unleash your wild side.',
    features: ['Fresh cream', 'Caramel notes', 'Leopard print bottle', 'Versatile mixer'],
    shopLink: '/shop/spirits/liqueurs?brand=wild-africa'
  },
  'cruxland-gin': {
    id: 'cruxland-gin',
    name: 'Cruxland gin',
    category: 'spirits',
    tagline: 'The taste of the Kalahari.',
    description: 'The world\'s first gin infused with rare Kalahari truffles.',
    heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Cruxland Gin is a journey of discovery. Our master distillers ventured into the Kalahari desert to find the rare N\'abbas truffles. Infused with 9 botanicals, this gin is an earthy, complex masterpiece.',
    features: ['Kalahari truffles', '100% grape spirit base', 'Double gold winner', 'Handcrafted'],
    shopLink: '/shop/spirits/gin?brand=cruxland'
  },
  'pearly-bay': {
    id: 'pearly-bay',
    name: 'Pearly Bay',
    category: 'wines',
    tagline: 'A sip of sunshine.',
    description: 'Unpretentious, fruity, and fun. Pearly Bay is all about easy enjoyment.',
    heroImage: 'https://images.unsplash.com/photo-1572569666060-e79435c5c00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Named after the white sandy beaches of the Cape, Pearly Bay wines are crisp, refreshing, and full of flavor. Available in bottles and convenient boxes, they are perfect for picnics, braais, and beach days.',
    features: ['Great value', 'Easy drinking', 'Convenient packaging', 'Fruity styles'],
    shopLink: '/shop/wine?brand=pearly-bay'
  },
  'imagin-gin': {
    id: 'imagin-gin',
    name: 'Imagin gin',
    category: 'spirits',
    tagline: 'Imagine the possibilities.',
    description: 'Hand-crafted gin for the adventurous spirit.',
    heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    story: 'Imagin Gin is crafted with care, using a blend of botanicals that creates a unique and refreshing taste profile. Perfect for any occasion.',
    features: ['Hand-crafted', 'Botanical blend', 'Smooth finish', 'Mixable'],
    shopLink: '/shop/spirits/gin?brand=imagin'
  }
};