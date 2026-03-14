/**
 * Accessories Products Data
 * Category: Accessories — 20 products
 * All images square 1:1 (800x800)
 */

const I = (id) => 'https://images.unsplash.com/photo-' + id + '?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80';

export const ACCESSORIES_PRODUCTS = [
  {
    "id": "prod-acc-01", "name": "Leather Backpack Quest", "slug": "leather-backpack-quest",
    "brand": "PlayPocket", "price": 89.00, "salePrice": null,
    "image": I("1622560480605-d83c853bc5c3"), "hoverImage": I("1683224494826-88dc025ec028"),
    "images": [I("1622560480605-d83c853bc5c3"), I("1683224494826-88dc025ec028"), I("1749532972950-7367cb9a2f3a")],
    "description": "Full-grain leather backpack with padded laptop sleeve and pixel-art zipper pulls. 22L capacity.",
    "shortDescription": "Leather backpack with pixel details.", "sku": "ACC-001", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.8, "reviewCount": 96, "badges": ["Premium"],
    "tags": ["premium", "gift-idea", "best-seller"], "weight": "1.2", "dateAdded": "2026-02-01", "totalSales": 312
  },
  {
    "id": "prod-acc-02", "name": "Wireless Headphones XP", "slug": "wireless-headphones-xp",
    "brand": "PlayPocket", "price": 75.00, "salePrice": 59.00,
    "image": I("1563882300207-835d544896ba"), "hoverImage": I("1755182529034-189a6051faae"),
    "images": [I("1563882300207-835d544896ba"), I("1755182529034-189a6051faae"), I("1548030415-e1eb1c684c9b")],
    "description": "Over-ear wireless headphones with 40-hour battery, spatial audio, and retro colorway. Foldable design.",
    "shortDescription": "Retro-styled wireless headphones.", "sku": "ACC-002", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.6, "reviewCount": 231, "badges": ["Sale"],
    "tags": ["gaming", "neon", "best-seller", "gift-idea"], "weight": "0.35", "dateAdded": "2026-01-20", "totalSales": 876
  },
  {
    "id": "prod-acc-03", "name": "Mechanical Keyboard Retro", "slug": "mechanical-keyboard-retro",
    "brand": "PlayPocket", "price": 120.00, "salePrice": null,
    "image": I("1643869094397-962f806fe3ab"), "hoverImage": I("1548030415-e1eb1c684c9b"),
    "images": [I("1643869094397-962f806fe3ab"), I("1548030415-e1eb1c684c9b"), I("1563882300207-835d544896ba")],
    "description": "75% mechanical keyboard with PBT keycaps in retro colorway. Hot-swappable switches, RGB underglow.",
    "shortDescription": "Retro mechanical keyboard.", "sku": "ACC-003", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.9, "reviewCount": 178, "badges": ["Premium"],
    "tags": ["gaming", "premium", "pixel-art", "best-seller"], "weight": "0.8", "dateAdded": "2026-01-05", "totalSales": 654
  },
  {
    "id": "prod-acc-04", "name": "Digital Watch Pixel", "slug": "digital-watch-pixel",
    "brand": "PlayPocket", "price": 55.00, "salePrice": null,
    "image": I("1762768727350-7f2b1d559a47"), "hoverImage": I("1769116416641-e714b71851e8"),
    "images": [I("1762768727350-7f2b1d559a47"), I("1769116416641-e714b71851e8"), I("1676276550322-7623a2545b24")],
    "description": "Retro-styled digital watch with pixel-art display. Water-resistant to 50m. Backlit LED.",
    "shortDescription": "Pixel-art digital watch.", "sku": "ACC-004", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 89, "badges": [],
    "tags": ["retro", "gift-idea", "nostalgia"], "weight": "0.1", "dateAdded": "2026-02-10", "totalSales": 423
  },
  {
    "id": "prod-acc-05", "name": "Leather Wallet Bit", "slug": "leather-wallet-bit",
    "brand": "PlayPocket", "price": 42.00, "salePrice": null,
    "image": I("1676276550322-7623a2545b24"), "hoverImage": I("1585401586477-2a671e1cae4e"),
    "images": [I("1676276550322-7623a2545b24"), I("1585401586477-2a671e1cae4e")],
    "description": "Bifold leather wallet with pixel-art deboss. RFID blocking. 6 card slots, 2 cash pockets.",
    "shortDescription": "Pixel-debossed leather wallet.", "sku": "ACC-005", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 112, "badges": [],
    "tags": ["premium", "gift-idea", "handmade"], "weight": "0.1", "dateAdded": "2026-01-15", "totalSales": 567
  },
  {
    "id": "prod-acc-06", "name": "Canvas Tote Inventory", "slug": "canvas-tote-inventory",
    "brand": "PlayPocket", "price": 28.00, "salePrice": null,
    "image": I("1735956504579-e50e07ece746"), "hoverImage": I("1622560480605-d83c853bc5c3"),
    "images": [I("1735956504579-e50e07ece746"), I("1622560480605-d83c853bc5c3"), I("1683224494826-88dc025ec028")],
    "description": "Heavy-duty canvas tote with pixel-art inventory grid print. Interior zip pocket. Reinforced handles.",
    "shortDescription": "Canvas tote with inventory print.", "sku": "ACC-006", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 56, "badges": [],
    "tags": ["eco-friendly", "gift-idea", "unisex"], "weight": "0.3", "dateAdded": "2026-02-20", "totalSales": 234
  },
  {
    "id": "prod-acc-07", "name": "Retro Shades Round", "slug": "retro-shades-round",
    "brand": "PlayPocket", "price": 35.00, "salePrice": 25.00,
    "image": I("1764112782342-8bf6798b5bcd"), "hoverImage": I("1762768727350-7f2b1d559a47"),
    "images": [I("1764112782342-8bf6798b5bcd"), I("1762768727350-7f2b1d559a47"), I("1769116416641-e714b71851e8")],
    "description": "Round-frame sunglasses with gradient tinted lenses. UV400 protection. Spring hinges.",
    "shortDescription": "Round retro sunglasses.", "sku": "ACC-007", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": true, "featured": false, "rating": 4.2, "reviewCount": 67, "badges": ["Sale"],
    "tags": ["retro", "vintage", "unisex", "new-arrival"], "weight": "0.05", "dateAdded": "2026-03-01", "totalSales": 189
  },
  {
    "id": "prod-acc-08", "name": "Phone Case Pixel Shield", "slug": "phone-case-pixel-shield",
    "brand": "PlayPocket", "price": 18.00, "salePrice": null,
    "image": I("1731908998486-c903c3b662d3"), "hoverImage": I("1634947096506-6d9f114cf64e"),
    "images": [I("1731908998486-c903c3b662d3"), I("1634947096506-6d9f114cf64e")],
    "description": "Shock-absorbing phone case with pixel-art design. MagSafe compatible. Available for major models.",
    "shortDescription": "Pixel-art phone case.", "sku": "ACC-008", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.1, "reviewCount": 234, "badges": [],
    "tags": ["gaming", "pixel-art", "gift-idea"], "weight": "0.05", "dateAdded": "2026-02-05", "totalSales": 1023
  },
  {
    "id": "prod-acc-09", "name": "Desk Mat XL Arena", "slug": "desk-mat-xl-arena",
    "brand": "PlayPocket", "price": 38.00, "salePrice": null,
    "image": I("1548030415-e1eb1c684c9b"), "hoverImage": I("1643869094397-962f806fe3ab"),
    "images": [I("1548030415-e1eb1c684c9b"), I("1643869094397-962f806fe3ab"), I("1563882300207-835d544896ba")],
    "description": "Extra-large desk mat with pixel-art arena map. Anti-slip rubber base. Machine washable. 90x40cm.",
    "shortDescription": "XL pixel-art desk mat.", "sku": "ACC-009", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.7, "reviewCount": 145, "badges": [],
    "tags": ["gaming", "arcade", "gift-idea", "best-seller"], "weight": "0.5", "dateAdded": "2026-01-10", "totalSales": 789
  },
  {
    "id": "prod-acc-10", "name": "Enamel Pin Set 8-Bit", "slug": "enamel-pin-set-8-bit",
    "brand": "PlayPocket", "price": 15.00, "salePrice": null,
    "image": I("1760144597396-4f902f5026a8"), "hoverImage": I("1624156948532-6b19a61b5d2b"),
    "images": [I("1760144597396-4f902f5026a8"), I("1624156948532-6b19a61b5d2b")],
    "description": "Set of 5 enamel pins featuring 8-bit game icons: heart, star, coin, mushroom, key.",
    "shortDescription": "5-piece 8-bit enamel pin set.", "sku": "ACC-010", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.6, "reviewCount": 201, "badges": [],
    "tags": ["pixel-art", "gift-idea", "handmade", "retro"], "weight": "0.05", "dateAdded": "2026-01-25", "totalSales": 1245
  },
  {
    "id": "prod-acc-11", "name": "Wristband Power-Up", "slug": "wristband-power-up",
    "brand": "PlayPocket", "price": 12.00, "salePrice": null,
    "image": I("1769116416641-e714b71851e8"), "hoverImage": I("1764112782342-8bf6798b5bcd"),
    "images": [I("1769116416641-e714b71851e8"), I("1764112782342-8bf6798b5bcd")],
    "description": "Silicone wristband with embossed pixel-art power-up icons. Glow-in-the-dark variant available.",
    "shortDescription": "Pixel power-up wristband.", "sku": "ACC-011", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.0, "reviewCount": 89, "badges": [],
    "tags": ["gaming", "gift-idea", "unisex", "new-arrival"], "weight": "0.02", "dateAdded": "2026-03-05", "totalSales": 567
  },
  {
    "id": "prod-acc-12", "name": "Laptop Sleeve Dungeon", "slug": "laptop-sleeve-dungeon",
    "brand": "PlayPocket", "price": 45.00, "salePrice": null,
    "image": I("1634947096506-6d9f114cf64e"), "hoverImage": I("1735956504579-e50e07ece746"),
    "images": [I("1634947096506-6d9f114cf64e"), I("1735956504579-e50e07ece746"), I("1622560480605-d83c853bc5c3")],
    "description": "Neoprene laptop sleeve with dungeon map lining. Fits 13-15 inch. Front accessory pocket.",
    "shortDescription": "Dungeon-themed laptop sleeve.", "sku": "ACC-012", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 67, "badges": [],
    "tags": ["gaming", "premium", "gift-idea"], "weight": "0.3", "dateAdded": "2026-02-15", "totalSales": 234
  },
  {
    "id": "prod-acc-13", "name": "Crossbody Bag Warp", "slug": "crossbody-bag-warp",
    "brand": "PlayPocket", "price": 52.00, "salePrice": 39.00,
    "image": I("1749532972950-7367cb9a2f3a"), "hoverImage": I("1683224494826-88dc025ec028"),
    "images": [I("1749532972950-7367cb9a2f3a"), I("1683224494826-88dc025ec028"), I("1622560480605-d83c853bc5c3")],
    "description": "Compact crossbody bag with warp-zone lining. Adjustable strap. Quick-access front zip.",
    "shortDescription": "Warp-zone crossbody bag.", "sku": "ACC-013", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": true, "featured": false, "rating": 4.3, "reviewCount": 45, "badges": ["Sale"],
    "tags": ["streetwear", "unisex", "eco-friendly"], "weight": "0.25", "dateAdded": "2026-02-28", "totalSales": 156
  },
  {
    "id": "prod-acc-14", "name": "Keychain Pixel Sword", "slug": "keychain-pixel-sword",
    "brand": "PlayPocket", "price": 10.00, "salePrice": null,
    "image": I("1624156948532-6b19a61b5d2b"), "hoverImage": I("1760144597396-4f902f5026a8"),
    "images": [I("1624156948532-6b19a61b5d2b"), I("1760144597396-4f902f5026a8")],
    "description": "Metal keychain in the shape of a pixelated sword. Zinc alloy with enamel fill. 3 inches long.",
    "shortDescription": "Pixel sword metal keychain.", "sku": "ACC-014", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 312, "badges": [],
    "tags": ["pixel-art", "gift-idea", "handmade", "nostalgia"], "weight": "0.03", "dateAdded": "2026-01-08", "totalSales": 2034
  },
  {
    "id": "prod-acc-15", "name": "Belt Leather Boss", "slug": "belt-leather-boss",
    "brand": "PlayPocket", "price": 38.00, "salePrice": null,
    "image": I("1770999161570-f1bf386f3c7a"), "hoverImage": I("1676276550322-7623a2545b24"),
    "images": [I("1770999161570-f1bf386f3c7a"), I("1676276550322-7623a2545b24"), I("1585401586477-2a671e1cae4e")],
    "description": "Full-grain leather belt with custom pixel-art buckle. Adjustable. Comes in a game-cartridge gift box.",
    "shortDescription": "Leather belt with pixel buckle.", "sku": "ACC-015", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 54, "badges": [],
    "tags": ["premium", "handmade", "gift-idea"], "weight": "0.2", "dateAdded": "2026-02-12", "totalSales": 198
  },
  {
    "id": "prod-acc-16", "name": "Knit Scarf Combo", "slug": "knit-scarf-combo",
    "brand": "PlayPocket", "price": 32.00, "salePrice": null,
    "image": I("1764697907425-62696b280b31"), "hoverImage": I("1769116416641-e714b71851e8"),
    "images": [I("1764697907425-62696b280b31"), I("1769116416641-e714b71851e8")],
    "description": "Chunky knit scarf with pixel-art heart pattern. Soft acrylic blend. 180cm x 30cm.",
    "shortDescription": "Pixel-heart knit scarf.", "sku": "ACC-016", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.2, "reviewCount": 34, "badges": [],
    "tags": ["cozy", "gift-idea", "pixel-art"], "weight": "0.15", "dateAdded": "2026-01-20", "totalSales": 189
  },
  {
    "id": "prod-acc-17", "name": "Earbuds Wireless Quest", "slug": "earbuds-wireless-quest",
    "brand": "PlayPocket", "price": 65.00, "salePrice": 49.00,
    "image": I("1755182529034-189a6051faae"), "hoverImage": I("1563882300207-835d544896ba"),
    "images": [I("1755182529034-189a6051faae"), I("1563882300207-835d544896ba"), I("1548030415-e1eb1c684c9b")],
    "description": "True wireless earbuds with 8-bit startup sound. Active noise cancellation. 30-hour case battery.",
    "shortDescription": "Retro wireless earbuds.", "sku": "ACC-017", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.5, "reviewCount": 167, "badges": ["Sale"],
    "tags": ["gaming", "neon", "best-seller", "new-arrival"], "weight": "0.05", "dateAdded": "2026-03-02", "totalSales": 445
  },
  {
    "id": "prod-acc-18", "name": "Water Bottle HP Bar", "slug": "water-bottle-hp-bar",
    "brand": "PlayPocket", "price": 22.00, "salePrice": null,
    "image": I("1624392294437-8fc9f876f4d3"), "hoverImage": I("1735956504579-e50e07ece746"),
    "images": [I("1624392294437-8fc9f876f4d3"), I("1735956504579-e50e07ece746")],
    "description": "Insulated stainless steel bottle with HP bar thermochromic label. Keeps drinks cold 24h / hot 12h. 750ml.",
    "shortDescription": "HP bar insulated bottle.", "sku": "ACC-018", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.6, "reviewCount": 89, "badges": [],
    "tags": ["eco-friendly", "gift-idea", "gaming"], "weight": "0.4", "dateAdded": "2026-02-08", "totalSales": 345
  },
  {
    "id": "prod-acc-19", "name": "Card Holder Slim", "slug": "card-holder-slim",
    "brand": "PlayPocket", "price": 25.00, "salePrice": null,
    "image": I("1585401586477-2a671e1cae4e"), "hoverImage": I("1676276550322-7623a2545b24"),
    "images": [I("1585401586477-2a671e1cae4e"), I("1676276550322-7623a2545b24")],
    "description": "Slim card holder in vegan leather with pixel-art emboss. 4 card slots, center cash slot. RFID safe.",
    "shortDescription": "Slim pixel card holder.", "sku": "ACC-019", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 78, "badges": [],
    "tags": ["eco-friendly", "handmade", "gift-idea", "unisex"], "weight": "0.05", "dateAdded": "2026-01-28", "totalSales": 432
  },
  {
    "id": "prod-acc-20", "name": "Fanny Pack Turbo", "slug": "fanny-pack-turbo",
    "brand": "PlayPocket", "price": 35.00, "salePrice": null,
    "image": I("1683224494826-88dc025ec028"), "hoverImage": I("1749532972950-7367cb9a2f3a"),
    "images": [I("1683224494826-88dc025ec028"), I("1749532972950-7367cb9a2f3a"), I("1622560480605-d83c853bc5c3")],
    "description": "Adjustable fanny pack with reflective pixel-art trim. Water-resistant nylon. Hidden back pocket.",
    "shortDescription": "Reflective pixel fanny pack.", "sku": "ACC-020", "category": "Accessories", "categorySlug": "accessories",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 43, "badges": [],
    "tags": ["streetwear", "unisex", "neon", "new-arrival"], "weight": "0.15", "dateAdded": "2026-03-08", "totalSales": 123
  }
];