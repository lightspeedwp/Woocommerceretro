import os

categories = [
    {
        "name": "Apparel",
        "slug": "apparel",
        "file": "apparel.ts",
        "varName": "APPAREL_PRODUCTS",
        "baseImage": "https://images.unsplash.com/photo-1677221832017-4e6c31737e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGhvb2RpZSUyMGFwcGFyZWx8ZW58MXx8fHwxNzczMTY0MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        "name": "Accessories",
        "slug": "accessories",
        "file": "accessories.ts",
        "varName": "ACCESSORIES_PRODUCTS",
        "baseImage": "https://images.unsplash.com/photo-1766051665906-0fd23cbd276f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc3MzE3NjQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        "name": "Games",
        "slug": "games",
        "file": "games.ts",
        "varName": "GAMES_PRODUCTS",
        "baseImage": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWVzfGVufDF8fHx8MTc3MzE3NjQyMXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        "name": "Posters",
        "slug": "posters",
        "file": "posters.ts",
        "varName": "POSTERS_PRODUCTS",
        "baseImage": "https://images.unsplash.com/photo-1758923530325-00b4ff765e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGdhbWUlMjBwb3N0ZXJzfGVufDF8fHx8MTc3MzE3NjQzMnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        "name": "Collectibles",
        "slug": "collectibles",
        "file": "collectibles.ts",
        "varName": "COLLECTIBLES_PRODUCTS",
        "baseImage": "https://images.unsplash.com/photo-1739102174050-85ffaadab43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGNvbGxlY3RpYmxlc3xlbnwxfHx8fDE3NzMxNzY0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
]

import json
import random

def generate_products():
    os.makedirs('src/app/data/products', exist_ok=True)
    product_counter = 1
    
    for cat in categories:
        products = []
        for i in range(1, 11):
            product_id = f"prod-{cat['slug']}-{i}"
            name = f"Retro {cat['name'][:-1]} Item {i}"
            if cat['name'] == 'Apparel':
                name = f"Pixel Power {'Hoodie' if i % 2 == 0 else 'Tee'} {i}"
            elif cat['name'] == 'Accessories':
                name = f"8-Bit {'Cap' if i % 2 == 0 else 'Keychain'} {i}"
            elif cat['name'] == 'Games':
                name = f"Classic Cartridge Vol. {i}"
            elif cat['name'] == 'Posters':
                name = f"Arcade Wall Art {i}"
            elif cat['name'] == 'Collectibles':
                name = f"Limited Edition Figurine {i}"
                
            price = random.randint(15, 60)
            
            product = {
                "id": product_id,
                "name": name,
                "slug": name.lower().replace(' ', '-'),
                "brand": "PlayPocket",
                "price": float(price),
                "image": cat['baseImage'],
                "images": [cat['baseImage']],
                "description": f"Authentic retro-inspired {cat['name'][:-1]} designed for everyday play. High quality materials meet nostalgic aesthetics. Level up your collection.",
                "shortDescription": f"Retro-inspired {cat['name'][:-1]}.",
                "sku": f"{cat['slug'][:3].upper()}-00{i}",
                "category": cat['name'],
                "categorySlug": cat['slug'],
                "inStock": True,
                "onSale": i % 4 == 0,
                "featured": i == 1 or i == 5,
                "rating": round(random.uniform(4.0, 5.0), 1),
                "reviewCount": random.randint(10, 300),
                "badges": ["NEW"] if i == 1 else (["SALE"] if i % 4 == 0 else []),
                "tags": ["retro", "gaming", cat['slug']],
                "weight": "0.5",
                "dateAdded": "2026-03-01",
                "totalSales": random.randint(50, 1000)
            }
            if product["onSale"]:
                product["salePrice"] = float(price - 5)
                
            products.append(product)
        
        file_content = f"""/**
 * {cat['name']} Products Data
 * 
 * Category: {cat['name']}
 * Products: 10
 * 
 * Optimized for Figma Make parser
 */

export var {cat['varName']} = {json.dumps(products, indent=2)};
"""
        with open(f"src/app/data/products/{cat['file']}", "w") as f:
            f.write(file_content)

generate_products()
