"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react@8.6.0";
import { ArrowLeft, ArrowRight } from '../../../utils/phosphor-compat';
import { cn } from "../../../utils/cn";
import { Button } from "../design/Buttons";

const CarouselContext = createContext<any>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel />");
  return context;
};

export const Carousel = ({ orientation = 'horizontal', opts, setApi, plugins, className, children, id, style }: any) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      dragFree: opts?.dragFree,
      containScroll: opts?.containScroll,
      slidesToScroll: opts?.slidesToScroll,
      align: opts?.align,
      loop: opts?.loop,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") { event.preventDefault(); scrollPrev(); }
    else if (event.key === "ArrowRight") { event.preventDefault(); scrollNext(); }
  }, [scrollPrev, scrollNext]);

  useEffect(() => { if (api && setApi) setApi(api); }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => { api?.off("select", onSelect); };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, opts, orientation, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div
        id={id} style={style} onKeyDownCapture={handleKeyDown}
        className={cn("wp-block-carousel", orientation === "horizontal" ? "wp-block-carousel--horizontal" : "wp-block-carousel--vertical", className)}
        role="region" aria-roledescription="carousel" data-slot="carousel"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export const CarouselContent = ({ className, children, id, style }: any) => {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="wp-block-carousel__content-wrapper" data-slot="carousel-content" id={id} style={style}>
      <div className={cn("wp-block-carousel__content", className)}>{children}</div>
    </div>
  );
}

export const CarouselItem = ({ className, children, id, style }: any) => {
  return (
    <div role="group" aria-roledescription="slide" data-slot="carousel-item" className={cn("wp-block-carousel__item", className)} id={id} style={style}>
      {children}
    </div>
  );
}

export const CarouselPrevious = ({ className, variant = 'outline', size = 'icon' }: any) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button data-slot="carousel-previous" variant={variant} size={size} className={cn("wp-block-carousel__button wp-block-carousel__button--prev", className)} disabled={!canScrollPrev} onClick={scrollPrev}>
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

export const CarouselNext = ({ className, variant = 'outline', size = 'icon' }: any) => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button data-slot="carousel-next" variant={variant} size={size} className={cn("wp-block-carousel__button wp-block-carousel__button--next", className)} disabled={!canScrollNext} onClick={scrollNext}>
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}