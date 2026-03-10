import React from 'react';
import Slider from 'react-slick';
import * as ReactRouterModule from 'react-router';
import * as ContainerModule from '../../common/Container';
import * as TypographyModule from '../../common/Typography';
import { CaretRight as ChevronRight, CaretLeft as ChevronLeft } from '@phosphor-icons/react';

var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;

var useRef = React.useRef;
var Link = ReactRouterModule.Link;

var CATEGORIES = [
  { name: 'Red Wines', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/red' },
  { name: 'White Wines', image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/white' },
  { name: 'Brandy', image: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/brandy' },
  { name: 'Gin', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/gin' },
  { name: 'Sparkling', image: 'https://images.unsplash.com/photo-1556676114-153014c12343?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/sparkling' },
  { name: 'Liqueur', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/liqueur' },
];

function CustomArrow(props) {
  var className = props.className;
  var onClick = props.onClick;
  var direction = props.direction;
  
  return React.createElement('button', {
    className: 'wc-block-category-slider__arrow wc-block-category-slider__arrow--' + direction,
    onClick: onClick,
    'aria-label': direction === 'left' ? "Previous slide" : "Next slide"
  },
    direction === 'left' ? React.createElement(ChevronLeft, { size: 24, 'aria-hidden': "true" }) : React.createElement(ChevronRight, { size: 24, 'aria-hidden': "true" })
  );
}

/**
 * ShopCategorySlider Component
 * 
 * A carousel displaying major product categories.
 * 
 * @pattern
 */
export function ShopCategorySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: React.createElement(CustomArrow, { direction: "left" }),
    nextArrow: React.createElement(CustomArrow, { direction: "right" }),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return React.createElement('div', { className: "wc-block-category-slider" },
    React.createElement(Container, { variant: "site" },
      React.createElement('div', { className: "wc-block-category-slider__header" },
        React.createElement(Typography, { variant: "h2", className: "wc-block-category-slider__heading" },
          'Shop Our Awarded Wines, Brandies and Spirits'
        ),
        React.createElement('div', { className: "wc-block-category-slider__divider wp-bg-primary-var" })
      ),

      React.createElement('div', { className: "wc-block-category-slider__slider-wrapper" },
        React.createElement(Slider, {
          dots: settings.dots,
          infinite: settings.infinite,
          speed: settings.speed,
          slidesToShow: settings.slidesToShow,
          slidesToScroll: settings.slidesToScroll,
          prevArrow: settings.prevArrow,
          nextArrow: settings.nextArrow,
          responsive: settings.responsive
        },
          CATEGORIES.map(function(cat, idx) {
            return React.createElement('div', { key: idx, className: "wc-block-category-slider__card" },
              React.createElement(Link, { to: cat.link },
                React.createElement('img', { 
                  src: cat.image, 
                  alt: cat.name, 
                  className: "wc-block-category-slider__image" 
                }),
                React.createElement('div', { className: "wc-block-category-slider__title" }, cat.name)
              )
            );
          })
        )
      )
    )
  );
}