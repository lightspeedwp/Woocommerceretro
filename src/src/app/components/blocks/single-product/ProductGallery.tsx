import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

/**
 * ProductGallery Component
 *
 * Image gallery with thumbnail strip and main image display.
 */
export const ProductGallery = ({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="wc-product-gallery">
      <div
        className="wc-product-gallery__thumbnails"
        role="group"
        aria-label="Product gallery thumbnails"
      >
        {images.map((image, index) => {
          const isActive = selectedIndex === index;
          return (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`wc-product-gallery__thumbnail funky-spring-hover ${isActive ? 'wc-product-gallery__thumbnail--active funky-card-glow' : ''}`}
              aria-label={`View image ${index + 1} of ${images.length}`}
              aria-current={isActive ? 'true' : 'false'}
            >
              <ImageWithFallback
                src={image}
                alt=""
                className="wc-product-gallery__thumbnail-image"
              />
            </button>
          );
        })}
      </div>
      <div className="wc-product-gallery__main funky-card-glow">
        <div className="wc-product-gallery__inner">
          <ImageWithFallback
            src={images[selectedIndex]}
            alt={`${productName} - View ${selectedIndex + 1}`}
            className="wc-product-gallery__image"
          />
        </div>
      </div>
    </div>
  );
};

ProductGallery.displayName = 'ProductGallery';
