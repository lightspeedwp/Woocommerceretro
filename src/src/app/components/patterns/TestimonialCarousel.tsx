import React, { useState, useEffect, useCallback } from 'react';
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight, Quotes as Quote } from '../../utils/phosphor-compat';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotateInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

/**
 * TestimonialCarousel Pattern Component
 */
export const TestimonialCarousel = ({
  testimonials,
  autoRotate = true,
  rotateInterval = 5000,
  showDots = true,
  showArrows = true,
  className = '',
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, [testimonials.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoRotate || isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, rotateInterval, testimonials.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];
  const authorRoleText = [current.role, current.company].filter(Boolean).join(', ');

  return (
    <div
      className={`wp-testimonial-carousel ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Customer testimonials carousel"
      aria-live="polite"
    >
      <div className="wp-testimonial-card">
        <div className="wp-testimonial-card__content">
          <Quote className="wp-testimonial-card__quote-icon" aria-hidden="true" />
          <blockquote className="wp-testimonial-card__quote">
            <p>"{current.quote}"</p>
          </blockquote>
          <div className="wp-testimonial-card__author">
            {current.image && (
              <ImageWithFallback
                src={current.image}
                alt={current.author}
                className="wp-testimonial-card__author-image"
              />
            )}
            <div>
              <div className="wp-testimonial-card__author-name">{current.author}</div>
              {authorRoleText && (
                <div className="wp-testimonial-card__author-role"><small>{authorRoleText}</small></div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showArrows && testimonials.length > 1 && (
        <>
          <button onClick={goToPrevious} className="wp-testimonial-carousel__arrow wp-testimonial-carousel__arrow--prev" aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>
          <button onClick={goToNext} className="wp-testimonial-carousel__arrow wp-testimonial-carousel__arrow--next" aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showDots && testimonials.length > 1 && (
        <div className="wp-testimonial-carousel__dots" role="tablist" aria-label="Testimonial slides">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`wp-testimonial-carousel__dot ${index === currentIndex ? 'wp-testimonial-carousel__dot--active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      )}

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Showing testimonial {currentIndex + 1} of {testimonials.length}
      </div>
    </div>
  );
}