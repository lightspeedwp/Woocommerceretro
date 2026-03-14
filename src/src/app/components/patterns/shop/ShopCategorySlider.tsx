import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';
import { Container } from '../../common/Container';
import { Typography } from '../../common/Typography';
import { CaretRight as ChevronRight, CaretLeft as ChevronLeft } from '@phosphor-icons/react';

const CATEGORIES = [
  { name: 'Red Wines', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/red' },
  { name: 'White Wines', image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/white' },
  { name: 'Brandy', image: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/brandy' },
  { name: 'Gin', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/gin' },
  { name: 'Sparkling', image: 'https://images.unsplash.com/photo-1556676114-153014c12343?q=80&w=800&auto=format&fit=crop', link: '/shop/wine/sparkling' },
  { name: 'Liqueur', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop', link: '/shop/spirits/liqueur' },
];

const CustomArrow = ({ onClick, direction }: { onClick?: () => void; direction: 'left' | 'right'; className?: string }) => (
  <button
    className={`wc-block-category-slider__arrow wc-block-category-slider__arrow--${direction}`}
    onClick={onClick}
    aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
  >
    {direction === 'left'
      ? <ChevronLeft size={24} aria-hidden="true" />
      : <ChevronRight size={24} aria-hidden="true" />
    }
  </button>
);

/**
 * ShopCategorySlider Component
 *
 * A carousel displaying major product categories.
 *
 * @pattern
 */
export const ShopCategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="wc-block-category-slider">
      <Container variant="site">
        <div className="wc-block-category-slider__header">
          <Typography variant="h2" className="wc-block-category-slider__heading">
            Shop Our Awarded Wines, Brandies and Spirits
          </Typography>
          <div className="wc-block-category-slider__divider wp-bg-primary-var" />
        </div>

        <div className="wc-block-category-slider__slider-wrapper">
          <Slider {...settings}>
            {CATEGORIES.map((cat, idx) => (
              <div key={idx} className="wc-block-category-slider__card">
                <Link to={cat.link}>
                  <img src={cat.image} alt={cat.name} className="wc-block-category-slider__image" />
                  <div className="wc-block-category-slider__title">{cat.name}</div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
