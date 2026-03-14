/**
 * Apparel Products Data
 * Category: Apparel — 20 products
 * Each has unique primary image + 2-3 gallery images
 * All images square 1:1 (800x800)
 */

const I = (id) => 'https://images.unsplash.com/photo-' + id + '?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&w=800&h=800&q=80';

export const APPAREL_PRODUCTS = [
  {
    "id": "prod-app-01", "name": "Pixel Power Tee", "slug": "pixel-power-tee",
    "brand": "PlayPocket", "price": 28.00, "salePrice": null,
    "image": I("1759941279446-dea2722bca33"), "hoverImage": I("1711387718409-a05f62a3dc39"),
    "images": [I("1759941279446-dea2722bca33"), I("1711387718409-a05f62a3dc39"), I("1644952350841-070996fad2af")],
    "description": "Classic pixel-art graphic tee printed on premium organic cotton. Features a retro game controller design with vibrant 8-bit colors.", "shortDescription": "Retro pixel art graphic tee.",
    "sku": "APP-001", "category": "Apparel", "categorySlug": "apparel", "inStock": true, "onSale": false, "featured": true,
    "rating": 4.7, "reviewCount": 142, "badges": ["NEW"], "tags": ["retro", "pixel-art", "unisex", "best-seller"],
    "weight": "0.3", "dateAdded": "2026-03-01", "totalSales": 724
  },
  {
    "id": "prod-app-02", "name": "Neon Arcade Hoodie", "slug": "neon-arcade-hoodie",
    "brand": "PlayPocket", "price": 62.00, "salePrice": 49.00,
    "image": I("1711387718409-a05f62a3dc39"), "hoverImage": I("1759941279446-dea2722bca33"),
    "images": [I("1711387718409-a05f62a3dc39"), I("1759941279446-dea2722bca33"), I("1768221677471-086934027127")],
    "description": "Heavyweight pullover hoodie with glow-in-the-dark arcade cabinet print. Fleece-lined for maximum comfort on late-night gaming sessions.",
    "shortDescription": "Glow-in-the-dark arcade hoodie.", "sku": "APP-002", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.5, "reviewCount": 204, "badges": ["Sale"],
    "tags": ["arcade", "neon", "cozy", "streetwear", "gaming"], "weight": "0.6", "dateAdded": "2026-02-15", "totalSales": 512
  },
  {
    "id": "prod-app-03", "name": "Bomber Jacket Alpha", "slug": "bomber-jacket-alpha",
    "brand": "PlayPocket", "price": 89.00, "salePrice": null,
    "image": I("1765830626598-bfa997485f34"), "hoverImage": I("1663374723561-885d23959717"),
    "images": [I("1765830626598-bfa997485f34"), I("1663374723561-885d23959717"), I("1556041068-5874261f23e5")],
    "description": "Lightweight bomber jacket with embroidered pixel patches on the chest and back. Water-resistant shell, ribbed cuffs.",
    "shortDescription": "Pixel-patched bomber jacket.", "sku": "APP-003", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.8, "reviewCount": 87, "badges": ["Premium"],
    "tags": ["streetwear", "premium", "limited-edition"], "weight": "0.8", "dateAdded": "2026-02-20", "totalSales": 198
  },
  {
    "id": "prod-app-04", "name": "Retro Runner Sneakers", "slug": "retro-runner-sneakers",
    "brand": "PlayPocket", "price": 95.00, "salePrice": 79.00,
    "image": I("1583979365152-173a8f14181b"), "hoverImage": I("1771360210548-673513ebb671"),
    "images": [I("1583979365152-173a8f14181b"), I("1771360210548-673513ebb671"), I("1602190420103-683df5093e86")],
    "description": "Chunky sole sneakers with retro colorway inspired by 80s arcade carpets. Cushioned insole for all-day comfort.",
    "shortDescription": "Arcade-inspired chunky sneakers.", "sku": "APP-004", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": true, "featured": true, "rating": 4.3, "reviewCount": 156, "badges": ["Sale"],
    "tags": ["retro", "streetwear", "best-seller", "unisex"], "weight": "0.9", "dateAdded": "2026-01-10", "totalSales": 890
  },
  {
    "id": "prod-app-05", "name": "Cozy Gamer Joggers", "slug": "cozy-gamer-joggers",
    "brand": "PlayPocket", "price": 48.00, "salePrice": null,
    "image": I("1771360210548-673513ebb671"), "hoverImage": I("1719473448126-eb1159ec5242"),
    "images": [I("1771360210548-673513ebb671"), I("1719473448126-eb1159ec5242"), I("1602190420103-683df5093e86")],
    "description": "Ultra-soft French terry joggers with subtle joystick embroidery on the hip. Elastic waist with drawcord.",
    "shortDescription": "Soft terry joggers with gaming detail.", "sku": "APP-005", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.6, "reviewCount": 98, "badges": [],
    "tags": ["cozy", "gaming", "unisex", "eco-friendly"], "weight": "0.5", "dateAdded": "2026-02-28", "totalSales": 345
  },
  {
    "id": "prod-app-06", "name": "8-Bit Beanie", "slug": "8-bit-beanie",
    "brand": "PlayPocket", "price": 22.00, "salePrice": null,
    "image": I("1699347611474-5be693bee31e"), "hoverImage": I("1638554091384-4ffef5a7f779"),
    "images": [I("1699347611474-5be693bee31e"), I("1638554091384-4ffef5a7f779")],
    "description": "Knit beanie with pixel-art pattern in classic game colors. Double-layer construction for extra warmth.",
    "shortDescription": "Pixel-patterned knit beanie.", "sku": "APP-006", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 67, "badges": [],
    "tags": ["retro", "pixel-art", "cozy", "gift-idea"], "weight": "0.15", "dateAdded": "2026-01-20", "totalSales": 456
  },
  {
    "id": "prod-app-07", "name": "Windbreaker Quest", "slug": "windbreaker-quest",
    "brand": "PlayPocket", "price": 72.00, "salePrice": null,
    "image": I("1663374723561-885d23959717"), "hoverImage": I("1765830626598-bfa997485f34"),
    "images": [I("1663374723561-885d23959717"), I("1765830626598-bfa997485f34"), I("1556041068-5874261f23e5")],
    "description": "Lightweight packable windbreaker with reflective pixel-art trim. Stows into its own front pocket.",
    "shortDescription": "Packable windbreaker with pixel trim.", "sku": "APP-007", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.2, "reviewCount": 54, "badges": [],
    "tags": ["streetwear", "eco-friendly", "unisex"], "weight": "0.4", "dateAdded": "2026-02-05", "totalSales": 210
  },
  {
    "id": "prod-app-08", "name": "Crop Top Glitch", "slug": "crop-top-glitch",
    "brand": "PlayPocket", "price": 24.00, "salePrice": null,
    "image": I("1760551600405-54c70e6d7f42"), "hoverImage": I("1758797957766-9a7721657c35"),
    "images": [I("1760551600405-54c70e6d7f42"), I("1758797957766-9a7721657c35"), I("1759941279446-dea2722bca33")],
    "description": "Cropped tee with all-over glitch-art print. Relaxed fit with raw hem edge.",
    "shortDescription": "Glitch-art cropped tee.", "sku": "APP-008", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.1, "reviewCount": 43, "badges": ["NEW"],
    "tags": ["neon", "pixel-art", "new-arrival"], "weight": "0.2", "dateAdded": "2026-03-05", "totalSales": 89
  },
  {
    "id": "prod-app-09", "name": "Cargo Pants XP", "slug": "cargo-pants-xp",
    "brand": "PlayPocket", "price": 58.00, "salePrice": null,
    "image": I("1719473448126-eb1159ec5242"), "hoverImage": I("1771360210548-673513ebb671"),
    "images": [I("1719473448126-eb1159ec5242"), I("1771360210548-673513ebb671"), I("1602190420103-683df5093e86")],
    "description": "Six-pocket cargo pants with D-ring hardware and drawcord ankle. Washed canvas for a lived-in feel.",
    "shortDescription": "Utility cargo pants.", "sku": "APP-009", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 76, "badges": [],
    "tags": ["streetwear", "premium", "unisex"], "weight": "0.7", "dateAdded": "2026-01-25", "totalSales": 302
  },
  {
    "id": "prod-app-10", "name": "Tank Top Summer Quest", "slug": "tank-top-summer-quest",
    "brand": "PlayPocket", "price": 20.00, "salePrice": 15.00,
    "image": I("1758797957766-9a7721657c35"), "hoverImage": I("1760551600405-54c70e6d7f42"),
    "images": [I("1758797957766-9a7721657c35"), I("1760551600405-54c70e6d7f42")],
    "description": "Lightweight racerback tank with subtle game controller graphic on back. Perfect for summer or layering.",
    "shortDescription": "Lightweight gaming racerback tank.", "sku": "APP-010", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": true, "featured": false, "rating": 4.0, "reviewCount": 34, "badges": ["Sale"],
    "tags": ["retro", "eco-friendly", "gift-idea"], "weight": "0.15", "dateAdded": "2026-02-10", "totalSales": 178
  },
  {
    "id": "prod-app-11", "name": "Plaid Flannel Level-Up", "slug": "plaid-flannel-level-up",
    "brand": "PlayPocket", "price": 45.00, "salePrice": null,
    "image": I("1765637044287-a4552593e9c1"), "hoverImage": I("1711387718409-a05f62a3dc39"),
    "images": [I("1765637044287-a4552593e9c1"), I("1711387718409-a05f62a3dc39"), I("1768221677471-086934027127")],
    "description": "Brushed cotton flannel in a retro red-green plaid. Chest pocket with pixel-heart embroidery.",
    "shortDescription": "Retro plaid flannel shirt.", "sku": "APP-011", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 62, "badges": [],
    "tags": ["vintage", "cozy", "nostalgia"], "weight": "0.45", "dateAdded": "2026-01-15", "totalSales": 267
  },
  {
    "id": "prod-app-12", "name": "Polo Player One", "slug": "polo-player-one",
    "brand": "PlayPocket", "price": 38.00, "salePrice": null,
    "image": I("1759596450534-0a960be607e1"), "hoverImage": I("1759941279446-dea2722bca33"),
    "images": [I("1759596450534-0a960be607e1"), I("1759941279446-dea2722bca33"), I("1765637044287-a4552593e9c1")],
    "description": "Classic pique polo with embroidered joystick logo on the chest. Slim-fit with contrast collar tipping.",
    "shortDescription": "Gaming-logo polo shirt.", "sku": "APP-012", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.1, "reviewCount": 38, "badges": [],
    "tags": ["gaming", "premium", "unisex"], "weight": "0.3", "dateAdded": "2026-02-22", "totalSales": 145
  },
  {
    "id": "prod-app-13", "name": "Bucket Hat Boss", "slug": "bucket-hat-boss",
    "brand": "PlayPocket", "price": 26.00, "salePrice": null,
    "image": I("1627079855491-08e8aab25964"), "hoverImage": I("1699347611474-5be693bee31e"),
    "images": [I("1627079855491-08e8aab25964"), I("1699347611474-5be693bee31e")],
    "description": "Reversible bucket hat with pixel-camo on one side and solid on the other. UPF 30+ sun protection.",
    "shortDescription": "Reversible pixel-camo bucket hat.", "sku": "APP-013", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.4, "reviewCount": 51, "badges": [],
    "tags": ["retro", "pixel-art", "gift-idea", "eco-friendly"], "weight": "0.1", "dateAdded": "2026-01-30", "totalSales": 389
  },
  {
    "id": "prod-app-14", "name": "Athletic Shorts Speedrun", "slug": "athletic-shorts-speedrun",
    "brand": "PlayPocket", "price": 32.00, "salePrice": null,
    "image": I("1602190420103-683df5093e86"), "hoverImage": I("1719473448126-eb1159ec5242"),
    "images": [I("1602190420103-683df5093e86"), I("1719473448126-eb1159ec5242"), I("1771360210548-673513ebb671")],
    "description": "Quick-dry athletic shorts with zippered side pocket. Reflective pixel-trim for visibility.",
    "shortDescription": "Quick-dry athletic shorts.", "sku": "APP-014", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.2, "reviewCount": 29, "badges": [],
    "tags": ["gaming", "unisex", "new-arrival"], "weight": "0.2", "dateAdded": "2026-03-08", "totalSales": 76
  },
  {
    "id": "prod-app-15", "name": "Graphic Sweatshirt HP", "slug": "graphic-sweatshirt-hp",
    "brand": "PlayPocket", "price": 52.00, "salePrice": 42.00,
    "image": I("1644952350841-070996fad2af"), "hoverImage": I("1711387718409-a05f62a3dc39"),
    "images": [I("1644952350841-070996fad2af"), I("1711387718409-a05f62a3dc39"), I("1768221677471-086934027127")],
    "description": "Oversized crewneck sweatshirt with HP bar graphic across the chest. Heavy 400gsm terry.",
    "shortDescription": "HP bar graphic sweatshirt.", "sku": "APP-015", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": true, "featured": false, "rating": 4.6, "reviewCount": 88, "badges": ["Sale"],
    "tags": ["cozy", "pixel-art", "best-seller", "gaming"], "weight": "0.55", "dateAdded": "2026-01-05", "totalSales": 601
  },
  {
    "id": "prod-app-16", "name": "Snapback Cap GG", "slug": "snapback-cap-gg",
    "brand": "PlayPocket", "price": 30.00, "salePrice": null,
    "image": I("1638554091384-4ffef5a7f779"), "hoverImage": I("1627079855491-08e8aab25964"),
    "images": [I("1638554091384-4ffef5a7f779"), I("1627079855491-08e8aab25964"), I("1699347611474-5be693bee31e")],
    "description": "Structured snapback with 3D-embroidered GG letters and pixel-art underbrim. One size fits most.",
    "shortDescription": "GG embroidered snapback cap.", "sku": "APP-016", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.3, "reviewCount": 72, "badges": [],
    "tags": ["arcade", "streetwear", "unisex", "gift-idea"], "weight": "0.15", "dateAdded": "2026-02-01", "totalSales": 423
  },
  {
    "id": "prod-app-17", "name": "Urban Outfit Set", "slug": "urban-outfit-set",
    "brand": "PlayPocket", "price": 85.00, "salePrice": null,
    "image": I("1768221677471-086934027127"), "hoverImage": I("1644952350841-070996fad2af"),
    "images": [I("1768221677471-086934027127"), I("1644952350841-070996fad2af"), I("1711387718409-a05f62a3dc39")],
    "description": "Matching tee-and-jogger set with coordinated pixel graphics. Packed in a reusable game-cartridge box.",
    "shortDescription": "Matching tee and jogger set.", "sku": "APP-017", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": true, "rating": 4.7, "reviewCount": 115, "badges": ["Premium"],
    "tags": ["bundle-deal", "streetwear", "premium", "gift-idea"], "weight": "0.8", "dateAdded": "2026-02-25", "totalSales": 287
  },
  {
    "id": "prod-app-18", "name": "Pixel Socks 3-Pack", "slug": "pixel-socks-3-pack",
    "brand": "PlayPocket", "price": 18.00, "salePrice": null,
    "image": I("1679391903287-b52bee558313"), "hoverImage": I("1602190420103-683df5093e86"),
    "images": [I("1679391903287-b52bee558313"), I("1602190420103-683df5093e86")],
    "description": "Three-pack crew socks with unique pixel-art patterns: mushroom, star, coin. Reinforced heel and toe.",
    "shortDescription": "3-pack pixel-art crew socks.", "sku": "APP-018", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": false, "featured": false, "rating": 4.5, "reviewCount": 189, "badges": [],
    "tags": ["retro", "bundle-deal", "gift-idea", "pixel-art"], "weight": "0.1", "dateAdded": "2026-01-12", "totalSales": 1024
  },
  {
    "id": "prod-app-19", "name": "Varsity Jacket Insert Coin", "slug": "varsity-jacket-insert-coin",
    "brand": "PlayPocket", "price": 110.00, "salePrice": null,
    "image": I("1556041068-5874261f23e5"), "hoverImage": I("1765830626598-bfa997485f34"),
    "images": [I("1556041068-5874261f23e5"), I("1765830626598-bfa997485f34"), I("1663374723561-885d23959717")],
    "description": "Wool-blend varsity jacket with leather sleeves and chenille INSERT COIN patch. Satin lining.",
    "shortDescription": "INSERT COIN varsity jacket.", "sku": "APP-019", "category": "Apparel", "categorySlug": "apparel",
    "inStock": false, "onSale": false, "featured": false, "rating": 4.9, "reviewCount": 31, "badges": ["Limited Edition"],
    "tags": ["limited-edition", "premium", "nostalgia", "arcade"], "weight": "1.2", "dateAdded": "2026-03-10", "totalSales": 45
  },
  {
    "id": "prod-app-20", "name": "Denim Jacket Save Point", "slug": "denim-jacket-save-point",
    "brand": "PlayPocket", "price": 78.00, "salePrice": 65.00,
    "image": I("1765830626598-bfa997485f34"), "hoverImage": I("1556041068-5874261f23e5"),
    "images": [I("1765830626598-bfa997485f34"), I("1556041068-5874261f23e5"), I("1663374723561-885d23959717")],
    "description": "Vintage-wash denim jacket with enamel pin-ready collar and pixel-art back patch. Sherpa-lined.",
    "shortDescription": "Sherpa-lined denim jacket.", "sku": "APP-020", "category": "Apparel", "categorySlug": "apparel",
    "inStock": true, "onSale": true, "featured": false, "rating": 4.4, "reviewCount": 93, "badges": ["Sale"],
    "tags": ["vintage", "cozy", "nostalgia", "best-seller"], "weight": "1.0", "dateAdded": "2026-02-18", "totalSales": 376
  }
];