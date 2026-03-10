import React from 'react';
var useState = React.useState;
import * as ImageFallbackModule from '../../figma/ImageWithFallback';
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;

/* ProductGalleryProps: { images: string[], productName: string } */

/**
 * ProductGallery Component
 */
export function ProductGallery(props) {
  var images = props.images;
  var productName = props.productName;
  var _si = useState(0);
  var selectedIndex = _si[0];
  var setSelectedIndex = _si[1];

  if (!images || images.length === 0) return null;

  var renderThumbnail = function(image, index) {
    var isActive = selectedIndex === index;
    var thumbnailClass = "wc-product-gallery__thumbnail funky-spring-hover " + (isActive ? 'wc-product-gallery__thumbnail--active funky-card-glow' : '');
    
    return React.createElement('button', {
      key: index,
      onClick: function() { setSelectedIndex(index); },
      className: thumbnailClass,
      "aria-label": "View image " + (index + 1) + " of " + images.length,
      "aria-current": isActive ? 'true' : 'false'
    },
      React.createElement(ImageWithFallback, {
        src: image,
        alt: "",
        className: "wc-product-gallery__thumbnail-image"
      })
    );
  };

  return React.createElement('div', { className: "wc-product-gallery" },
    /* Thumbnails on the left */
    React.createElement('div', { 
      className: "wc-product-gallery__thumbnails", 
      role: "group", 
      "aria-label": "Product gallery thumbnails"
    },
      images.map(renderThumbnail)
    ),
    /* Main image (square) on the right */
    React.createElement('div', { className: "wc-product-gallery__main funky-card-glow" },
      React.createElement('div', { className: "wc-product-gallery__inner" },
        React.createElement(ImageWithFallback, {
          src: images[selectedIndex],
          alt: productName + " - View " + (selectedIndex + 1),
          className: "wc-product-gallery__image"
        })
      )
    )
  );
}

ProductGallery.displayName = 'ProductGallery';