# ProductGallery Block

**Category**: Blocks - Product  
**Location**: `/components/blocks/ProductGallery.tsx`  
**Version**: 2.1

---

## Purpose

Displays product images in a gallery format with main image display and thumbnail navigation. Used on single product pages.

---

## Implementation

```tsx
import React, { useState } from 'react';
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '@phosphor-icons/react';
import { Button } from '../ui/button';

export interface ProductGalleryProps {
  images: string[];
  alt?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  alt = 'Product image',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={images[selectedIndex]} 
          alt={`${alt} ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-2 top-1/2 -translate-y-1/2"
              onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
              aria-label="Next image"
            >
              <ChevronRight />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'aspect-square bg-gray-100 rounded border-2 overflow-hidden',
                index === selectedIndex 
                  ? 'border-purple-600' 
                  : 'border-transparent hover:border-gray-300'
              )}
            >
              <img 
                src={image} 
                alt={`${alt} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## Key Features

- Main image display
- Thumbnail navigation
- Previous/Next arrows
- Keyboard navigation
- Touch/swipe support (future)

---

## WordPress Equivalent

Maps to `woocommerce/product-image-gallery` block.