/**
 * Collectibles Products Data
 * Category: Collectibles — 20 products
 * All images square 1:1 (800x800)
 */

const I = (id) => 'https://images.unsplash.com/photo-' + id + '?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80';

export const COLLECTIBLES_PRODUCTS = [
  {
    "id": "prod-col-01", "name": "Action Figure Pixel Knight", "slug": "action-figure-pixel-knight",
    "brand": "PlayPocket", "price": 35.00, "salePrice": null,
    "image": I("1771295763144-4c3402ae3b2c"), "hoverImage": I("1694097388626-491dc77e0ca0"),
    "images": [I("1771295763144-4c3402ae3b2c"), I("1694097388626-491dc77e0ca0"), I("1581916459131-90da1f9c7162")],
    "description": "6-inch articulated action figure of the Pixel Knight character. 12 points of articulation. Display stand included.",
    "shortDescription": "Pixel Knight action figure.", "sku": "COL-001", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.7, "reviewCount": 98, "badges": [],
    "tags": ["gaming", "gift-idea", "nostalgia", "pixel-art"], "weight": "0.3", "dateAdded": "2026-02-01", "totalSales": 456
  },
  {
    "id": "prod-col-02", "name": "Vinyl Record Chiptune", "slug": "vinyl-record-chiptune",
    "brand": "PlayPocket", "price": 32.00, "salePrice": null,
    "image": I("1653383454515-0b42b711ed7c"), "hoverImage": I("1595014361820-91c39c0cf800"),
    "images": [I("1653383454515-0b42b711ed7c"), I("1595014361820-91c39c0cf800")],
    "description": "12-inch vinyl LP with 14 chiptune tracks. Translucent green wax. Pixel-art gatefold sleeve.",
    "shortDescription": "Chiptune vinyl LP.", "sku": "COL-002", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.8, "reviewCount": 67, "badges": ["Limited Edition"],
    "tags": ["vintage", "limited-edition", "nostalgia", "gift-idea"], "weight": "0.4", "dateAdded": "2026-01-15", "totalSales": 289
  },
  {
    "id": "prod-col-03", "name": "Ceramic Mug 1-UP", "slug": "ceramic-mug-1-up",
    "brand": "PlayPocket", "price": 18.00, "salePrice": null,
    "image": I("1724905136845-b56958ce82cf"), "hoverImage": I("1624392294437-8fc9f876f4d3"),
    "images": [I("1724905136845-b56958ce82cf"), I("1624392294437-8fc9f876f4d3"), I("1622617759601-348fe53a22b2")],
    "description": "Ceramic mug with heat-reactive 1-UP mushroom. Design appears when hot liquid is added. 12oz.",
    "shortDescription": "Heat-reactive 1-UP mug.", "sku": "COL-003", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.6, "reviewCount": 234, "badges": [],
    "tags": ["gift-idea", "pixel-art", "gaming", "best-seller"], "weight": "0.4", "dateAdded": "2026-01-05", "totalSales": 1567
  },
  {
    "id": "prod-col-04", "name": "Snow Globe Pixel Castle", "slug": "snow-globe-pixel-castle",
    "brand": "PlayPocket", "price": 45.00, "salePrice": null,
    "image": I("1765025585895-9fd202e9c391"), "hoverImage": I("1771295763144-4c3402ae3b2c"),
    "images": [I("1765025585895-9fd202e9c391"), I("1771295763144-4c3402ae3b2c"), I("1694097388626-491dc77e0ca0")],
    "description": "Glass snow globe with 3D pixel-art castle inside. Glitter snowfall. Plays chiptune melody.",
    "shortDescription": "Pixel castle snow globe.", "sku": "COL-004", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 34, "badges": [],
    "tags": ["gift-idea", "nostalgia", "handmade", "premium"], "weight": "0.8", "dateAdded": "2026-02-10", "totalSales": 123
  },
  {
    "id": "prod-col-05", "name": "Sticker Pack Mega", "slug": "sticker-pack-mega",
    "brand": "PlayPocket", "price": 12.00, "salePrice": null,
    "image": I("1549616194-ac289f22b7e0"), "hoverImage": I("1760144597396-4f902f5026a8"),
    "images": [I("1549616194-ac289f22b7e0"), I("1760144597396-4f902f5026a8")],
    "description": "Pack of 50 die-cut vinyl stickers with pixel-art game icons. Waterproof and UV-resistant.",
    "shortDescription": "50-piece pixel sticker pack.", "sku": "COL-005", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 312, "badges": [],
    "tags": ["pixel-art", "gift-idea", "gaming", "best-seller"], "weight": "0.05", "dateAdded": "2026-01-08", "totalSales": 2345
  },
  {
    "id": "prod-col-06", "name": "Puzzle Box Wooden", "slug": "puzzle-box-wooden",
    "brand": "PlayPocket", "price": 38.00, "salePrice": null,
    "image": I("1622617759601-348fe53a22b2"), "hoverImage": I("1765025585895-9fd202e9c391"),
    "images": [I("1622617759601-348fe53a22b2"), I("1765025585895-9fd202e9c391"), I("1724905136845-b56958ce82cf")],
    "description": "Handcrafted wooden puzzle box with pixel-art inlay. 7 steps to open. Secret compartment inside.",
    "shortDescription": "Pixel-art wooden puzzle box.", "sku": "COL-006", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.7, "reviewCount": 45, "badges": ["Premium"],
    "tags": ["handmade", "premium", "gift-idea", "nostalgia"], "weight": "0.5", "dateAdded": "2026-02-20", "totalSales": 189
  },
  {
    "id": "prod-col-07", "name": "Robot Toy Tin Wind-Up", "slug": "robot-toy-tin-wind-up",
    "brand": "PlayPocket", "price": 28.00, "salePrice": null,
    "image": I("1581916459131-90da1f9c7162"), "hoverImage": I("1760836205740-8dae1c1c19c4"),
    "images": [I("1581916459131-90da1f9c7162"), I("1760836205740-8dae1c1c19c4"), I("1694097388626-491dc77e0ca0")],
    "description": "Vintage-style tin wind-up robot with pixel-art chest panel. Walks and sparks. 6 inches tall.",
    "shortDescription": "Tin wind-up pixel robot.", "sku": "COL-007", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 67, "badges": [],
    "tags": ["vintage", "retro", "nostalgia", "gift-idea"], "weight": "0.3", "dateAdded": "2026-01-20", "totalSales": 345
  },
  {
    "id": "prod-col-08", "name": "Building Blocks Castle", "slug": "building-blocks-castle",
    "brand": "PlayPocket", "price": 55.00, "salePrice": 42.00,
    "image": I("1610213880945-9b020ccc2843"), "hoverImage": I("1759990639053-80b6c7acb10b"),
    "images": [I("1610213880945-9b020ccc2843"), I("1759990639053-80b6c7acb10b"), I("1771295763144-4c3402ae3b2c")],
    "description": "450-piece building block set. Build a pixel-art castle with working drawbridge. Ages 12+.",
    "shortDescription": "450pc pixel castle block set.", "sku": "COL-008", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.8, "reviewCount": 89, "badges": ["Sale"],
    "tags": ["gaming", "gift-idea", "pixel-art", "nostalgia"], "weight": "1.2", "dateAdded": "2026-01-12", "totalSales": 567
  },
  {
    "id": "prod-col-09", "name": "Plush Dragon Companion", "slug": "plush-dragon-companion",
    "brand": "PlayPocket", "price": 30.00, "salePrice": null,
    "image": I("1759990639053-80b6c7acb10b"), "hoverImage": I("1610213880945-9b020ccc2843"),
    "images": [I("1759990639053-80b6c7acb10b"), I("1610213880945-9b020ccc2843")],
    "description": "10-inch plush dragon with pixel-art embroidered eyes. Super-soft polyester fill. Machine washable.",
    "shortDescription": "Pixel dragon plush toy.", "sku": "COL-009", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.6, "reviewCount": 156, "badges": [],
    "tags": ["gift-idea", "gaming", "cozy"], "weight": "0.2", "dateAdded": "2026-02-15", "totalSales": 789
  },
  {
    "id": "prod-col-10", "name": "Coin Collection Pixel", "slug": "coin-collection-pixel",
    "brand": "PlayPocket", "price": 42.00, "salePrice": null,
    "image": I("1643393670577-b214e610c8f8"), "hoverImage": I("1622617759601-348fe53a22b2"),
    "images": [I("1643393670577-b214e610c8f8"), I("1622617759601-348fe53a22b2"), I("1765025585895-9fd202e9c391")],
    "description": "Set of 10 commemorative coins with pixel-art game characters. Gold-plated zinc alloy. Display case.",
    "shortDescription": "10-coin pixel character set.", "sku": "COL-010", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 45, "badges": [],
    "tags": ["limited-edition", "premium", "nostalgia", "gift-idea"], "weight": "0.5", "dateAdded": "2026-01-25", "totalSales": 234
  },
  {
    "id": "prod-col-11", "name": "Crystal Geode Display", "slug": "crystal-geode-display",
    "brand": "PlayPocket", "price": 48.00, "salePrice": null,
    "image": I("1771580927643-36aaa2709141"), "hoverImage": I("1643393670577-b214e610c8f8"),
    "images": [I("1771580927643-36aaa2709141"), I("1643393670577-b214e610c8f8"), I("1765025585895-9fd202e9c391")],
    "description": "Natural crystal geode on pixel-art themed wooden base. LED backlight with color cycling. Each unique.",
    "shortDescription": "LED crystal geode display.", "sku": "COL-011", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.7, "reviewCount": 23, "badges": ["Premium"],
    "tags": ["premium", "handmade", "gift-idea", "neon"], "weight": "1.0", "dateAdded": "2026-02-25", "totalSales": 89
  },
  {
    "id": "prod-col-12", "name": "Model Car Pixel Racer", "slug": "model-car-pixel-racer",
    "brand": "PlayPocket", "price": 35.00, "salePrice": null,
    "image": I("1760836205740-8dae1c1c19c4"), "hoverImage": I("1581916459131-90da1f9c7162"),
    "images": [I("1760836205740-8dae1c1c19c4"), I("1581916459131-90da1f9c7162"), I("1694097388626-491dc77e0ca0")],
    "description": "1:32 scale die-cast model car with pixel-art racing livery. Opening doors. Display case included.",
    "shortDescription": "Pixel racer die-cast model.", "sku": "COL-012", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 56, "badges": [],
    "tags": ["retro", "gaming", "nostalgia", "gift-idea"], "weight": "0.3", "dateAdded": "2026-01-18", "totalSales": 234
  },
  {
    "id": "prod-col-13", "name": "Comic Book Art Zine", "slug": "comic-book-art-zine",
    "brand": "PlayPocket", "price": 15.00, "salePrice": null,
    "image": I("1767680154768-218435f9d790"), "hoverImage": I("1549616194-ac289f22b7e0"),
    "images": [I("1767680154768-218435f9d790"), I("1549616194-ac289f22b7e0")],
    "description": "36-page pixel-art comic book zine. Original story by indie artists. Risograph printed.",
    "shortDescription": "Pixel-art comic book zine.", "sku": "COL-013", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.2, "reviewCount": 89, "badges": [],
    "tags": ["pixel-art", "handmade", "limited-edition", "new-arrival"], "weight": "0.1", "dateAdded": "2026-03-01", "totalSales": 456
  },
  {
    "id": "prod-col-14", "name": "Music Box 8-Bit Melody", "slug": "music-box-8-bit-melody",
    "brand": "PlayPocket", "price": 40.00, "salePrice": null,
    "image": I("1595014361820-91c39c0cf800"), "hoverImage": I("1653383454515-0b42b711ed7c"),
    "images": [I("1595014361820-91c39c0cf800"), I("1653383454515-0b42b711ed7c"), I("1622617759601-348fe53a22b2")],
    "description": "Hand-crank music box that plays a chiptune melody. Wooden case with pixel-art laser engraving.",
    "shortDescription": "Chiptune music box.", "sku": "COL-014", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.8, "reviewCount": 34, "badges": [],
    "tags": ["nostalgia", "handmade", "gift-idea", "vintage"], "weight": "0.3", "dateAdded": "2026-02-05", "totalSales": 167
  },
  {
    "id": "prod-col-15", "name": "Bobblehead Hero", "slug": "bobblehead-hero",
    "brand": "PlayPocket", "price": 22.00, "salePrice": null,
    "image": I("1694097388626-491dc77e0ca0"), "hoverImage": I("1771295763144-4c3402ae3b2c"),
    "images": [I("1694097388626-491dc77e0ca0"), I("1771295763144-4c3402ae3b2c")],
    "description": "6-inch bobblehead of the pixel hero character. Spring-action head. Weighted base.",
    "shortDescription": "Pixel hero bobblehead.", "sku": "COL-015", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 78, "badges": [],
    "tags": ["gaming", "gift-idea", "pixel-art"], "weight": "0.25", "dateAdded": "2026-01-28", "totalSales": 345
  },
  {
    "id": "prod-col-16", "name": "Retro Camera Instant", "slug": "retro-camera-instant",
    "brand": "PlayPocket", "price": 85.00, "salePrice": 69.00,
    "image": I("1724627561609-9cd3facba8d4"), "hoverImage": I("1612863217004-93c992bc50af"),
    "images": [I("1724627561609-9cd3facba8d4"), I("1612863217004-93c992bc50af"), I("1603184553908-507b668b96a9")],
    "description": "Instant camera with pixel-art themed body. Uses standard mini film. Built-in selfie mirror.",
    "shortDescription": "Pixel-themed instant camera.", "sku": "COL-016", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.6, "reviewCount": 123, "badges": ["Sale"],
    "tags": ["retro", "vintage", "gift-idea", "premium"], "weight": "0.4", "dateAdded": "2026-02-12", "totalSales": 345
  },
  {
    "id": "prod-col-17", "name": "Globe World Map Pixel", "slug": "globe-world-map-pixel",
    "brand": "PlayPocket", "price": 55.00, "salePrice": null,
    "image": I("1771797628441-20bc5804f48d"), "hoverImage": I("1616957348089-3814b5e9c5aa"),
    "images": [I("1771797628441-20bc5804f48d"), I("1616957348089-3814b5e9c5aa"), I("1765025585895-9fd202e9c391")],
    "description": "Desktop globe with pixel-art world map. Illuminated from within. Metal meridian and wooden base.",
    "shortDescription": "Pixel world map desk globe.", "sku": "COL-017", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 34, "badges": ["Premium"],
    "tags": ["premium", "gift-idea", "pixel-art", "handmade"], "weight": "1.5", "dateAdded": "2026-02-18", "totalSales": 123
  },
  {
    "id": "prod-col-18", "name": "Hourglass Timer Sand", "slug": "hourglass-timer-sand",
    "brand": "PlayPocket", "price": 25.00, "salePrice": null,
    "image": I("1616957348089-3814b5e9c5aa"), "hoverImage": I("1771797628441-20bc5804f48d"),
    "images": [I("1616957348089-3814b5e9c5aa"), I("1771797628441-20bc5804f48d")],
    "description": "Glass hourglass with colored sand on pixel-art wooden stand. 5-minute timer. Perfect for board games.",
    "shortDescription": "Pixel-stand sand hourglass.", "sku": "COL-018", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 56, "badges": [],
    "tags": ["tabletop", "gift-idea", "handmade"], "weight": "0.3", "dateAdded": "2026-01-22", "totalSales": 234
  },
  {
    "id": "prod-col-19", "name": "Rotary Phone Replica", "slug": "rotary-phone-replica",
    "brand": "PlayPocket", "price": 65.00, "salePrice": null,
    "image": I("1603184553908-507b668b96a9"), "hoverImage": I("1724627561609-9cd3facba8d4"),
    "images": [I("1603184553908-507b668b96a9"), I("1724627561609-9cd3facba8d4"), I("1612863217004-93c992bc50af")],
    "description": "Functional rotary phone replica with pixel-art dial graphics. Working Bluetooth connectivity.",
    "shortDescription": "Pixel rotary phone replica.", "sku": "COL-019", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": false, "onSale": false, "featured": false, "rating": 4.9, "reviewCount": 12, "badges": ["Limited Edition"],
    "tags": ["vintage", "limited-edition", "premium", "nostalgia"], "weight": "1.0", "dateAdded": "2026-03-05", "totalSales": 34
  },
  {
    "id": "prod-col-20", "name": "Polaroid Photo Set", "slug": "polaroid-photo-set",
    "brand": "PlayPocket", "price": 20.00, "salePrice": null,
    "image": I("1612863217004-93c992bc50af"), "hoverImage": I("1767680154768-218435f9d790"),
    "images": [I("1612863217004-93c992bc50af"), I("1767680154768-218435f9d790"), I("1549616194-ac289f22b7e0")],
    "description": "Set of 12 pixel-art instant photo prints on cardstock. Retro Polaroid format with white borders.",
    "shortDescription": "12 pixel-art photo prints.", "sku": "COL-020", "category": "Collectibles", "categorySlug": "collectibles",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 89, "badges": [],
    "tags": ["pixel-art", "gift-idea", "nostalgia", "retro"], "weight": "0.1", "dateAdded": "2026-02-08", "totalSales": 567
  }
];