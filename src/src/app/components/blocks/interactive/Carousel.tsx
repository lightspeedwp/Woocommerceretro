"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react@8.6.0";
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

import * as cnModule from "@/utils/cn";
import * as ButtonsModule from "@/components/blocks/design/Buttons";

var cn = cnModule.cn;
var Button = ButtonsModule.Button;

var CarouselContext = React.createContext(null);

function useCarousel() {
  var context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel(props) {
  var orientation = props.orientation || "horizontal";
  var opts = props.opts;
  var setApi = props.setApi;
  var plugins = props.plugins;
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var emblaResult = useEmblaCarousel(
    {
      dragFree: opts ? opts.dragFree : undefined,
      containScroll: opts ? opts.containScroll : undefined,
      slidesToScroll: opts ? opts.slidesToScroll : undefined,
      align: opts ? opts.align : undefined,
      loop: opts ? opts.loop : undefined,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  var carouselRef = emblaResult[0];
  var api = emblaResult[1];
  var _csp = React.useState(false);
  var canScrollPrev = _csp[0];
  var setCanScrollPrev = _csp[1];
  var _csn = React.useState(false);
  var canScrollNext = _csn[0];
  var setCanScrollNext = _csn[1];

  var onSelect = React.useCallback(function(api) {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  var scrollPrev = React.useCallback(function() {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  var scrollNext = React.useCallback(function() {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  var handleKeyDown = React.useCallback(
    function(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(function() {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(function() {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return function() {
      if (api) {
        api.off("select", onSelect);
      }
    };
  }, [api, onSelect]);

  var contextValue = {
    carouselRef: carouselRef,
    api: api,
    opts: opts,
    orientation: orientation,
    scrollPrev: scrollPrev,
    scrollNext: scrollNext,
    canScrollPrev: canScrollPrev,
    canScrollNext: canScrollNext,
  };

  return React.createElement(CarouselContext.Provider, { value: contextValue },
    React.createElement('div', {
      id: id,
      style: style,
      onKeyDownCapture: handleKeyDown,
      className: cn(
        "wp-block-carousel",
        orientation === "horizontal" ? "wp-block-carousel--horizontal" : "wp-block-carousel--vertical",
        className
      ),
      role: "region",
      "aria-roledescription": "carousel",
      "data-slot": "carousel"
    }, children)
  );
}

function CarouselContent(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var context = useCarousel();
  var carouselRef = context.carouselRef;

  return React.createElement('div', {
    ref: carouselRef,
    className: "wp-block-carousel__content-wrapper",
    "data-slot": "carousel-content",
    id: id,
    style: style
  },
    React.createElement('div', {
      className: cn("wp-block-carousel__content", className)
    }, children)
  );
}

function CarouselItem(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    role: "group",
    "aria-roledescription": "slide",
    "data-slot": "carousel-item",
    className: cn("wp-block-carousel__item", className),
    id: id,
    style: style
  }, children);
}

function CarouselPrevious(props) {
  var className = props.className;
  var variant = props.variant || "outline";
  var size = props.size || "icon";
  var context = useCarousel();
  var scrollPrev = context.scrollPrev;
  var canScrollPrev = context.canScrollPrev;

  return React.createElement(Button, {
    "data-slot": "carousel-previous",
    variant: variant,
    size: size,
    className: cn(
      "wp-block-carousel__button wp-block-carousel__button--prev",
      className
    ),
    disabled: !canScrollPrev,
    onClick: scrollPrev
  },
    React.createElement(ArrowLeft, null),
    React.createElement('span', { className: "sr-only" }, "Previous slide")
  );
}

function CarouselNext(props) {
  var className = props.className;
  var variant = props.variant || "outline";
  var size = props.size || "icon";
  var context = useCarousel();
  var scrollNext = context.scrollNext;
  var canScrollNext = context.canScrollNext;

  return React.createElement(Button, {
    "data-slot": "carousel-next",
    variant: variant,
    size: size,
    className: cn(
      "wp-block-carousel__button wp-block-carousel__button--next",
      className
    ),
    disabled: !canScrollNext,
    onClick: scrollNext
  },
    React.createElement(ArrowRight, null),
    React.createElement('span', { className: "sr-only" }, "Next slide")
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
};