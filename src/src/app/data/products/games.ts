/**
 * Games Products Data
 * Category: Games — 20 products
 * All images square 1:1 (800x800)
 */

const I = (id) => 'https://images.unsplash.com/photo-' + id + '?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80';

export const GAMES_PRODUCTS = [
  {
    "id": "prod-gam-01", "name": "Retro Cartridge Collection", "slug": "retro-cartridge-collection",
    "brand": "PlayPocket", "price": 45.00, "salePrice": null,
    "image": I("1515468754461-a1242b9bcbf0"), "hoverImage": I("1696621629216-dfed30d4427d"),
    "images": [I("1515468754461-a1242b9bcbf0"), I("1696621629216-dfed30d4427d"), I("1605134550917-5fe8cf25a125")],
    "description": "Box of 5 reproduction retro game cartridges with original-style artwork. Compatible with classic consoles.",
    "shortDescription": "5-pack retro game cartridges.", "sku": "GAM-001", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.9, "reviewCount": 187, "badges": ["Premium"],
    "tags": ["retro", "nostalgia", "gaming", "best-seller", "gift-idea"], "weight": "0.6", "dateAdded": "2026-01-10", "totalSales": 945
  },
  {
    "id": "prod-gam-02", "name": "Board Game Battle Royale", "slug": "board-game-battle-royale",
    "brand": "PlayPocket", "price": 55.00, "salePrice": null,
    "image": I("1763875067516-e947790c74ac"), "hoverImage": I("1722962495656-a03012c7fdc3"),
    "images": [I("1763875067516-e947790c74ac"), I("1722962495656-a03012c7fdc3"), I("1561467586-c2b59497d468")],
    "description": "Competitive strategy board game for 2-6 players. Pixel-art board, 200+ cards, and custom miniatures.",
    "shortDescription": "Strategy board game 2-6 players.", "sku": "GAM-002", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.7, "reviewCount": 134, "badges": [],
    "tags": ["tabletop", "gift-idea", "gaming", "premium"], "weight": "1.5", "dateAdded": "2026-02-01", "totalSales": 567
  },
  {
    "id": "prod-gam-03", "name": "Handheld Gaming Device", "slug": "handheld-gaming-device",
    "brand": "PlayPocket", "price": 129.00, "salePrice": 99.00,
    "image": I("1760900954328-bcffad8cd665"), "hoverImage": I("1696621629216-dfed30d4427d"),
    "images": [I("1760900954328-bcffad8cd665"), I("1696621629216-dfed30d4427d"), I("1605134550917-5fe8cf25a125")],
    "description": "Portable retro gaming device with 3.5-inch IPS display. Pre-loaded with 200+ classic games.",
    "shortDescription": "Portable retro gaming device.", "sku": "GAM-003", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.8, "reviewCount": 245, "badges": ["Sale"],
    "tags": ["retro", "gaming", "best-seller", "nostalgia", "gift-idea"], "weight": "0.2", "dateAdded": "2026-01-05", "totalSales": 1234
  },
  {
    "id": "prod-gam-04", "name": "Playing Cards Pixel Deck", "slug": "playing-cards-pixel-deck",
    "brand": "PlayPocket", "price": 16.00, "salePrice": null,
    "image": I("1751830978132-96864f9311ff"), "hoverImage": I("1655159428718-5d755eb867d6"),
    "images": [I("1751830978132-96864f9311ff"), I("1655159428718-5d755eb867d6")],
    "description": "Premium playing card deck with pixel-art face cards. Linen finish. Standard poker size.",
    "shortDescription": "Pixel-art playing cards.", "sku": "GAM-004", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 89, "badges": [],
    "tags": ["tabletop", "gift-idea", "pixel-art", "handmade"], "weight": "0.1", "dateAdded": "2026-02-15", "totalSales": 678
  },
  {
    "id": "prod-gam-05", "name": "Dice Set Dungeon Master", "slug": "dice-set-dungeon-master",
    "brand": "PlayPocket", "price": 22.00, "salePrice": null,
    "image": I("1561467586-c2b59497d468"), "hoverImage": I("1763875067516-e947790c74ac"),
    "images": [I("1561467586-c2b59497d468"), I("1763875067516-e947790c74ac"), I("1759342408015-0ef66ac0b12a")],
    "description": "7-piece polyhedral dice set in translucent resin with gold numbering. Velvet pouch included.",
    "shortDescription": "7-piece polyhedral dice set.", "sku": "GAM-005", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.6, "reviewCount": 156, "badges": [],
    "tags": ["tabletop", "handmade", "gaming", "gift-idea"], "weight": "0.1", "dateAdded": "2026-01-20", "totalSales": 890
  },
  {
    "id": "prod-gam-06", "name": "Puzzle Quest 1000pc", "slug": "puzzle-quest-1000pc",
    "brand": "PlayPocket", "price": 28.00, "salePrice": null,
    "image": I("1612385763901-68857dd4c43c"), "hoverImage": I("1771956436883-98e6339c813a"),
    "images": [I("1612385763901-68857dd4c43c"), I("1771956436883-98e6339c813a"), I("1769804824463-b13b560455ae")],
    "description": "1000-piece jigsaw puzzle featuring a detailed pixel-art fantasy landscape. Poster included.",
    "shortDescription": "1000pc pixel-art jigsaw puzzle.", "sku": "GAM-006", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 67, "badges": [],
    "tags": ["gift-idea", "nostalgia", "pixel-art"], "weight": "0.8", "dateAdded": "2026-02-20", "totalSales": 345
  },
  {
    "id": "prod-gam-07", "name": "Chess Set Kingdom", "slug": "chess-set-kingdom",
    "brand": "PlayPocket", "price": 65.00, "salePrice": null,
    "image": I("1769804824463-b13b560455ae"), "hoverImage": I("1561467586-c2b59497d468"),
    "images": [I("1769804824463-b13b560455ae"), I("1561467586-c2b59497d468"), I("1763875067516-e947790c74ac")],
    "description": "Wooden chess set with pixel-art style pieces. Folding board with felt lining. Travel-ready.",
    "shortDescription": "Pixel-styled wooden chess set.", "sku": "GAM-007", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.7, "reviewCount": 43, "badges": ["Premium"],
    "tags": ["tabletop", "premium", "gift-idea", "handmade"], "weight": "1.0", "dateAdded": "2026-01-15", "totalSales": 234
  },
  {
    "id": "prod-gam-08", "name": "Controller Classic Wireless", "slug": "controller-classic-wireless",
    "brand": "PlayPocket", "price": 48.00, "salePrice": null,
    "image": I("1768407923673-8688e9097f52"), "hoverImage": I("1761164034378-573f87613427"),
    "images": [I("1768407923673-8688e9097f52"), I("1761164034378-573f87613427"), I("1760900954328-bcffad8cd665")],
    "description": "Wireless controller with retro design and modern internals. Bluetooth 5.0. USB-C charging.",
    "shortDescription": "Retro wireless controller.", "sku": "GAM-008", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.6, "reviewCount": 198, "badges": [],
    "tags": ["retro", "gaming", "arcade", "best-seller"], "weight": "0.25", "dateAdded": "2026-02-10", "totalSales": 756
  },
  {
    "id": "prod-gam-09", "name": "Arcade Cabinet Mini", "slug": "arcade-cabinet-mini",
    "brand": "PlayPocket", "price": 199.00, "salePrice": 159.00,
    "image": I("1771389805025-fa04791d6aea"), "hoverImage": I("1563277267-0e9f2dabb9ba"),
    "images": [I("1771389805025-fa04791d6aea"), I("1563277267-0e9f2dabb9ba"), I("1768407923673-8688e9097f52")],
    "description": "1/4 scale arcade cabinet with 10-inch display. 50 built-in games. Real joystick and buttons.",
    "shortDescription": "Mini arcade cabinet with 50 games.", "sku": "GAM-009", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.9, "reviewCount": 89, "badges": ["Sale"],
    "tags": ["arcade", "retro", "premium", "nostalgia", "limited-edition"], "weight": "5.0", "dateAdded": "2026-01-08", "totalSales": 234
  },
  {
    "id": "prod-gam-10", "name": "Trading Cards Starter", "slug": "trading-cards-starter",
    "brand": "PlayPocket", "price": 19.00, "salePrice": null,
    "image": I("1655159428718-5d755eb867d6"), "hoverImage": I("1751830978132-96864f9311ff"),
    "images": [I("1655159428718-5d755eb867d6"), I("1751830978132-96864f9311ff")],
    "description": "Starter pack of 60 pixel-art trading cards. 10 rare holographics. Collector tin included.",
    "shortDescription": "60-card pixel trading starter.", "sku": "GAM-010", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 234, "badges": [],
    "tags": ["gaming", "gift-idea", "pixel-art", "new-arrival"], "weight": "0.2", "dateAdded": "2026-03-01", "totalSales": 1567
  },
  {
    "id": "prod-gam-11", "name": "Trivia Game Pixel Quiz", "slug": "trivia-game-pixel-quiz",
    "brand": "PlayPocket", "price": 32.00, "salePrice": null,
    "image": I("1722962495656-a03012c7fdc3"), "hoverImage": I("1763875067516-e947790c74ac"),
    "images": [I("1722962495656-a03012c7fdc3"), I("1763875067516-e947790c74ac"), I("1612385763901-68857dd4c43c")],
    "description": "Gaming trivia game with 500 questions across 5 categories. 2-8 players. Family friendly.",
    "shortDescription": "Gaming trivia for 2-8 players.", "sku": "GAM-011", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 112, "badges": [],
    "tags": ["tabletop", "gift-idea", "gaming"], "weight": "0.6", "dateAdded": "2026-02-05", "totalSales": 456
  },
  {
    "id": "prod-gam-12", "name": "Domino Set Pixel", "slug": "domino-set-pixel",
    "brand": "PlayPocket", "price": 24.00, "salePrice": null,
    "image": I("1566694271453-390536dd1f0d"), "hoverImage": I("1769804824463-b13b560455ae"),
    "images": [I("1566694271453-390536dd1f0d"), I("1769804824463-b13b560455ae")],
    "description": "Double-nine domino set with pixel-art dot patterns. Bamboo tiles in a wooden case.",
    "shortDescription": "Pixel-art bamboo domino set.", "sku": "GAM-012", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.2, "reviewCount": 34, "badges": [],
    "tags": ["tabletop", "handmade", "vintage"], "weight": "0.5", "dateAdded": "2026-01-25", "totalSales": 189
  },
  {
    "id": "prod-gam-13", "name": "Pinball Machine Desktop", "slug": "pinball-machine-desktop",
    "brand": "PlayPocket", "price": 85.00, "salePrice": null,
    "image": I("1563277267-0e9f2dabb9ba"), "hoverImage": I("1771389805025-fa04791d6aea"),
    "images": [I("1563277267-0e9f2dabb9ba"), I("1771389805025-fa04791d6aea"), I("1768407923673-8688e9097f52")],
    "description": "Desktop-sized pinball machine with LED scoring display. Pixel-art themed bumpers and flippers.",
    "shortDescription": "Desktop pixel pinball machine.", "sku": "GAM-013", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 56, "badges": ["Premium"],
    "tags": ["arcade", "retro", "nostalgia", "gift-idea"], "weight": "2.5", "dateAdded": "2026-02-25", "totalSales": 145
  },
  {
    "id": "prod-gam-14", "name": "Console Classic Remaster", "slug": "console-classic-remaster",
    "brand": "PlayPocket", "price": 89.00, "salePrice": 69.00,
    "image": I("1605134550917-5fe8cf25a125"), "hoverImage": I("1515468754461-a1242b9bcbf0"),
    "images": [I("1605134550917-5fe8cf25a125"), I("1515468754461-a1242b9bcbf0"), I("1760900954328-bcffad8cd665")],
    "description": "HDMI-out classic console with 30 built-in titles. Two wireless controllers included.",
    "shortDescription": "Classic console with 30 games.", "sku": "GAM-014", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": true, "featured": false, "rating": 4.6, "reviewCount": 167, "badges": ["Sale"],
    "tags": ["retro", "gaming", "nostalgia", "best-seller"], "weight": "0.8", "dateAdded": "2026-01-12", "totalSales": 890
  },
  {
    "id": "prod-gam-15", "name": "Puzzle Cube Neon", "slug": "puzzle-cube-neon",
    "brand": "PlayPocket", "price": 14.00, "salePrice": null,
    "image": I("1771956436883-98e6339c813a"), "hoverImage": I("1612385763901-68857dd4c43c"),
    "images": [I("1771956436883-98e6339c813a"), I("1612385763901-68857dd4c43c")],
    "description": "3x3 speed cube with neon pixel-art stickers. Smooth corner-cutting. Magnetic core.",
    "shortDescription": "Neon pixel speed cube.", "sku": "GAM-015", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 145, "badges": [],
    "tags": ["neon", "gift-idea", "gaming"], "weight": "0.08", "dateAdded": "2026-02-18", "totalSales": 789
  },
  {
    "id": "prod-gam-16", "name": "Miniatures Paint Kit", "slug": "miniatures-paint-kit",
    "brand": "PlayPocket", "price": 42.00, "salePrice": null,
    "image": I("1759342408015-0ef66ac0b12a"), "hoverImage": I("1561467586-c2b59497d468"),
    "images": [I("1759342408015-0ef66ac0b12a"), I("1561467586-c2b59497d468"), I("1763875067516-e947790c74ac")],
    "description": "Miniature painting starter kit with 6 figures, 12 paints, brushes, and guide book.",
    "shortDescription": "Miniature painting starter kit.", "sku": "GAM-016", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.7, "reviewCount": 78, "badges": [],
    "tags": ["tabletop", "handmade", "premium", "gift-idea"], "weight": "0.6", "dateAdded": "2026-01-30", "totalSales": 345
  },
  {
    "id": "prod-gam-17", "name": "Joystick Arcade Pro", "slug": "joystick-arcade-pro",
    "brand": "PlayPocket", "price": 75.00, "salePrice": null,
    "image": I("1761164034378-573f87613427"), "hoverImage": I("1768407923673-8688e9097f52"),
    "images": [I("1761164034378-573f87613427"), I("1768407923673-8688e9097f52"), I("1563277267-0e9f2dabb9ba")],
    "description": "Premium arcade joystick with Sanwa buttons. Universal compatibility. Metal base plate.",
    "shortDescription": "Premium arcade fight stick.", "sku": "GAM-017", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.8, "reviewCount": 89, "badges": ["Premium"],
    "tags": ["arcade", "gaming", "premium", "retro"], "weight": "2.0", "dateAdded": "2026-02-08", "totalSales": 234
  },
  {
    "id": "prod-gam-18", "name": "Handheld Mini Brick", "slug": "handheld-mini-brick",
    "brand": "PlayPocket", "price": 25.00, "salePrice": null,
    "image": I("1696621629216-dfed30d4427d"), "hoverImage": I("1760900954328-bcffad8cd665"),
    "images": [I("1696621629216-dfed30d4427d"), I("1760900954328-bcffad8cd665")],
    "description": "Pocket-sized retro handheld with 99 built-in brick games. AAA battery powered. Keychain loop.",
    "shortDescription": "Pocket brick game keychain.", "sku": "GAM-018", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.1, "reviewCount": 312, "badges": [],
    "tags": ["retro", "nostalgia", "gift-idea", "gaming"], "weight": "0.05", "dateAdded": "2026-01-18", "totalSales": 2345
  },
  {
    "id": "prod-gam-19", "name": "Gaming Headset Retro", "slug": "gaming-headset-retro",
    "brand": "PlayPocket", "price": 58.00, "salePrice": 45.00,
    "image": I("1641169707717-5704974b69dd"), "hoverImage": I("1761164034378-573f87613427"),
    "images": [I("1641169707717-5704974b69dd"), I("1761164034378-573f87613427"), I("1768407923673-8688e9097f52")],
    "description": "Over-ear gaming headset with retro RGB lighting. Detachable boom mic. 7.1 surround sound.",
    "shortDescription": "Retro RGB gaming headset.", "sku": "GAM-019", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": true, "featured": false, "rating": 4.4, "reviewCount": 134, "badges": ["Sale"],
    "tags": ["gaming", "neon", "arcade", "new-arrival"], "weight": "0.35", "dateAdded": "2026-03-05", "totalSales": 456
  },
  {
    "id": "prod-gam-20", "name": "VHS Mystery Box", "slug": "vhs-mystery-box",
    "brand": "PlayPocket", "price": 35.00, "salePrice": null,
    "image": I("1707541039334-15df52709d4b"), "hoverImage": I("1515468754461-a1242b9bcbf0"),
    "images": [I("1707541039334-15df52709d4b"), I("1515468754461-a1242b9bcbf0"), I("1605134550917-5fe8cf25a125")],
    "description": "Mystery box of 5 retro VHS tapes with custom pixel-art labels. Random selection each order.",
    "shortDescription": "5-tape retro VHS mystery box.", "sku": "GAM-020", "category": "Games", "categorySlug": "games",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.2, "reviewCount": 56, "badges": ["Limited Edition"],
    "tags": ["vintage", "nostalgia", "limited-edition", "gift-idea"], "weight": "0.8", "dateAdded": "2026-02-22", "totalSales": 167
  }
];