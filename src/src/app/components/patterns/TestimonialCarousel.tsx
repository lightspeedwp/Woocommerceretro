import React from 'react';
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight, Quotes as Quote } from '@phosphor-icons/react';
import * as ImageFallbackModule from '../figma/ImageWithFallback';

var useState = React.useState;
var useEffect = React.useEffect;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;

// Testimonial structure
// - id: string
// - quote: string
// - author: string
// - role?: string
// - company?: string
// - image?: string
// - rating?: number

// TestimonialCarouselProps structure
// - testimonials: Testimonial[]
// - autoRotate?: boolean
// - rotateInterval?: number
// - showDots?: boolean
// - showArrows?: boolean
// - className?: string

/**
 * TestimonialCarousel Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declarations
 * 2. No arrow functions
 * 3. No template literals
 * 4. No spread operators
 * 5. No destructuring in parameters
 */
export function TestimonialCarousel(props) {
  var testimonials = props.testimonials;
  var autoRotate = props.autoRotate === undefined ? true : props.autoRotate;
  var rotateInterval = props.rotateInterval || 5000;
  var showDots = props.showDots === undefined ? true : props.showDots;
  var showArrows = props.showArrows === undefined ? true : props.showArrows;
  var className = props.className || '';

  var _ci = useState(0);
  var currentIndex = _ci[0];
  var setCurrentIndex = _ci[1];
  var _ip = useState(false);
  var isPaused = _ip[0];
  var setIsPaused = _ip[1];

  function goToPrevious() {
    setCurrentIndex(function(prev) {
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  }

  function goToNext() {
    setCurrentIndex(function(prev) {
      return (prev + 1) % testimonials.length;
    });
  }

  function goToSlide(index) {
    setCurrentIndex(index);
  }

  useEffect(function() {
    if (!autoRotate || isPaused || testimonials.length <= 1) return;

    var interval = setInterval(function() {
      setCurrentIndex(function(prev) { return (prev + 1) % testimonials.length; });
    }, rotateInterval);

    return function() { clearInterval(interval); };
  }, [autoRotate, isPaused, rotateInterval, testimonials.length]);

  useEffect(function() {
    function handleKeyDown(e) {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    }

    window.addEventListener('keydown', handleKeyDown);
    return function() { window.removeEventListener('keydown', handleKeyDown); };
  }, [testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  var currentTestimonial = testimonials[currentIndex];

  var authorImage = currentTestimonial.image ? React.createElement(ImageWithFallback, {
    key: 'img',
    src: currentTestimonial.image,
    alt: currentTestimonial.author,
    className: "wp-testimonial-card__author-image"
  }) : null;

  var authorRoleText = (function() {
    var t = currentTestimonial.role || '';
    if (currentTestimonial.role && currentTestimonial.company) t += ', ';
    t += (currentTestimonial.company || '');
    return t;
  })();

  var authorRole = (currentTestimonial.role || currentTestimonial.company) ? React.createElement('div', {
    key: 'role',
    className: "wp-testimonial-card__author-role"
  }, React.createElement('small', null, authorRoleText)) : null;

  var authorInfo = React.createElement('div', { key: 'info' }, [
    React.createElement('div', { key: 'name', className: "wp-testimonial-card__author-name" }, currentTestimonial.author),
    authorRole
  ]);

  var authorBlock = React.createElement('div', { key: 'author', className: "wp-testimonial-card__author" }, [authorImage, authorInfo]);

  var card = React.createElement('div', { key: 'card', className: "wp-testimonial-card" }, 
    React.createElement('div', { className: "wp-testimonial-card__content" }, [
      React.createElement(Quote, { key: 'q-icon', className: "wp-testimonial-card__quote-icon", 'aria-hidden': "true" }),
      React.createElement('blockquote', { key: 'q-text', className: "wp-testimonial-card__quote" }, 
        React.createElement('p', null, '"' + currentTestimonial.quote + '"')
      ),
      authorBlock
    ])
  );

  var children = [card];

  if (showArrows && testimonials.length > 1) {
    children.push(React.createElement('button', {
      key: 'prev',
      onClick: goToPrevious,
      className: "wp-testimonial-carousel__arrow wp-testimonial-carousel__arrow--prev",
      'aria-label': "Previous testimonial"
    }, React.createElement(ChevronLeft, { size: 24 })));
    
    children.push(React.createElement('button', {
      key: 'next',
      onClick: goToNext,
      className: "wp-testimonial-carousel__arrow wp-testimonial-carousel__arrow--next",
      'aria-label': "Next testimonial"
    }, React.createElement(ChevronRight, { size: 24 })));
  }

  if (showDots && testimonials.length > 1) {
    var dotButtons = testimonials.map(function(_, index) {
      function handleDotClick() { goToSlide(index); }
      return React.createElement('button', {
        key: index,
        onClick: handleDotClick,
        className: "wp-testimonial-carousel__dot " + (index === currentIndex ? 'wp-testimonial-carousel__dot--active' : ''),
        'aria-label': "Go to testimonial " + (index + 1),
        'aria-selected': index === currentIndex,
        role: "tab"
      });
    });
    
    children.push(React.createElement('div', {
      key: 'dots',
      className: "wp-testimonial-carousel__dots",
      role: "tablist",
      'aria-label': "Testimonial slides"
    }, dotButtons));
  }

  children.push(React.createElement('div', {
    key: 'sr',
    className: "sr-only",
    'aria-live': "polite",
    'aria-atomic': "true"
  }, "Showing testimonial " + (currentIndex + 1) + " of " + testimonials.length));

  return React.createElement('div', {
    className: "wp-testimonial-carousel " + className,
    onMouseEnter: function() { setIsPaused(true); },
    onMouseLeave: function() { setIsPaused(false); },
    role: "region",
    'aria-label': "Customer testimonials carousel",
    'aria-live': "polite"
  }, children);
}