import React from 'react';
import { Play, Pause, SpeakerHigh as Volume2, SpeakerSlash as VolumeX } from '@phosphor-icons/react';

var useState = React.useState;
var useRef = React.useRef;

/* VideoTestimonialProps: { videoUrl, posterUrl, customerName, customerRole, transcript, showTranscript, autoPlay, className } */

/**
 * VideoTestimonial Component
 * 
 * @param props - Component props
 */
export function VideoTestimonial(props) {
  var videoUrl = props.videoUrl;
  var posterUrl = props.posterUrl;
  var customerName = props.customerName;
  var customerRole = props.customerRole;
  var transcript = props.transcript;
  var showTranscript = props.showTranscript === undefined ? false : props.showTranscript;
  var autoPlay = props.autoPlay === undefined ? false : props.autoPlay;
  var className = props.className || '';

  var videoRef = useRef(null);
  var _p = useState(false);
  var isPlaying = _p[0];
  var setIsPlaying = _p[1];
  var _m = useState(false);
  var isMuted = _m[0];
  var setIsMuted = _m[1];
  var _t = useState(showTranscript);
  var showTranscriptState = _t[0];
  var setShowTranscriptState = _t[1];

  var togglePlay = function() {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  var toggleMute = function() {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  var handleVideoEnd = function() {
    setIsPlaying(false);
  };

  var handlePlay = function() {
    setIsPlaying(true);
  };

  var handlePause = function() {
    setIsPlaying(false);
  };

  var toggleTranscript = function() {
    setShowTranscriptState(!showTranscriptState);
  };

  return React.createElement('div', { className: 'wc-block-video-testimonial ' + className },
    React.createElement('div', { className: "wc-block-video-testimonial__player" },
      React.createElement('video', {
        ref: videoRef,
        src: videoUrl,
        poster: posterUrl,
        className: "wc-block-video-testimonial__video",
        autoPlay: autoPlay,
        playsInline: true,
        onEnded: handleVideoEnd,
        onPlay: handlePlay,
        onPause: handlePause
      },
        transcript ? React.createElement('track', { kind: "captions", label: "English" }) : null,
        "Your browser does not support the video tag."
      ),
      React.createElement('div', {
        className: 'wc-block-video-testimonial__overlay ' + (isPlaying ? 'wc-block-video-testimonial__overlay--hidden' : '')
      },
        React.createElement('button', {
          onClick: togglePlay,
          className: "wc-block-video-testimonial__play-button",
          "aria-label": isPlaying ? 'Pause video' : 'Play video'
        },
          isPlaying ? React.createElement(Pause, { size: 32, fill: "currentColor" }) : React.createElement(Play, { size: 32, fill: "currentColor", className: "wc-block-video-testimonial__play-icon" })
        )
      ),
      React.createElement('div', {
        className: 'wc-block-video-testimonial__controls ' + (isPlaying ? 'wc-block-video-testimonial__controls--hidden' : '')
      },
        React.createElement('div', { className: "wc-block-video-testimonial__controls-inner" },
          React.createElement('div', { className: "wc-block-video-testimonial__controls-left" },
            React.createElement('button', {
              onClick: togglePlay,
              className: "wc-block-video-testimonial__control-button",
              "aria-label": isPlaying ? 'Pause' : 'Play'
            },
              isPlaying ? React.createElement(Pause, { size: 24 }) : React.createElement(Play, { size: 24 })
            ),
            React.createElement('button', {
              onClick: toggleMute,
              className: "wc-block-video-testimonial__control-button",
              "aria-label": isMuted ? 'Unmute' : 'Mute'
            },
              isMuted ? React.createElement(VolumeX, { size: 24 }) : React.createElement(Volume2, { size: 24 })
            )
          ),
          React.createElement('div', { className: "wc-block-video-testimonial__customer-info" },
            React.createElement('p', { className: "wc-block-video-testimonial__customer-name" }, customerName),
            customerRole ? React.createElement('p', { className: "wc-block-video-testimonial__customer-role" }, customerRole) : null
          )
        )
      )
    ),
    transcript ? React.createElement('div', { className: "wc-block-video-testimonial__transcript-toggle" },
      React.createElement('button', {
        onClick: toggleTranscript,
        className: "wc-block-video-testimonial__transcript-button"
      },
        (showTranscriptState ? 'Hide' : 'Show') + ' Transcript'
      ),
      showTranscriptState ? React.createElement('div', { className: "wc-block-video-testimonial__transcript-content" },
        React.createElement('p', { className: "wc-block-video-testimonial__transcript-text" }, "\"" + transcript + "\""),
        React.createElement('div', { className: "wc-block-video-testimonial__transcript-author" },
          React.createElement('p', { className: "wc-block-video-testimonial__transcript-author-name" }, customerName),
          customerRole ? React.createElement('p', { className: "wc-block-video-testimonial__transcript-author-role" }, customerRole) : null
        )
      ) : null
    ) : null
  );
}

VideoTestimonial.displayName = 'VideoTestimonial';