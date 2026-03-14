import React, { useState, useRef } from 'react';
import { Play, Pause, SpeakerHigh as Volume2, SpeakerSlash as VolumeX } from '@phosphor-icons/react';

interface VideoTestimonialProps {
  videoUrl: string;
  posterUrl?: string;
  customerName: string;
  customerRole?: string;
  transcript?: string;
  showTranscript?: boolean;
  autoPlay?: boolean;
  className?: string;
}

export const VideoTestimonial = ({
  videoUrl, posterUrl, customerName, customerRole, transcript,
  showTranscript = false, autoPlay = false, className = '',
}: VideoTestimonialProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscriptState, setShowTranscriptState] = useState(showTranscript);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={`wc-block-video-testimonial ${className}`}>
      <div className="wc-block-video-testimonial__player">
        <video
          ref={videoRef} src={videoUrl} poster={posterUrl}
          className="wc-block-video-testimonial__video" autoPlay={autoPlay} playsInline
          onEnded={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}
        >
          {transcript && <track kind="captions" label="English" />}
          Your browser does not support the video tag.
        </video>
        <div className={`wc-block-video-testimonial__overlay ${isPlaying ? 'wc-block-video-testimonial__overlay--hidden' : ''}`}>
          <button onClick={togglePlay} className="wc-block-video-testimonial__play-button" aria-label={isPlaying ? 'Pause video' : 'Play video'}>
            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="wc-block-video-testimonial__play-icon" />}
          </button>
        </div>
        <div className={`wc-block-video-testimonial__controls ${isPlaying ? 'wc-block-video-testimonial__controls--hidden' : ''}`}>
          <div className="wc-block-video-testimonial__controls-inner">
            <div className="wc-block-video-testimonial__controls-left">
              <button onClick={togglePlay} className="wc-block-video-testimonial__control-button" aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button onClick={toggleMute} className="wc-block-video-testimonial__control-button" aria-label={isMuted ? 'Unmute' : 'Mute'}>
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
            <div className="wc-block-video-testimonial__customer-info">
              <p className="wc-block-video-testimonial__customer-name">{customerName}</p>
              {customerRole && <p className="wc-block-video-testimonial__customer-role">{customerRole}</p>}
            </div>
          </div>
        </div>
      </div>
      {transcript && (
        <div className="wc-block-video-testimonial__transcript-toggle">
          <button onClick={() => setShowTranscriptState(!showTranscriptState)} className="wc-block-video-testimonial__transcript-button">
            {showTranscriptState ? 'Hide' : 'Show'} Transcript
          </button>
          {showTranscriptState && (
            <div className="wc-block-video-testimonial__transcript-content">
              <p className="wc-block-video-testimonial__transcript-text">"{transcript}"</p>
              <div className="wc-block-video-testimonial__transcript-author">
                <p className="wc-block-video-testimonial__transcript-author-name">{customerName}</p>
                {customerRole && <p className="wc-block-video-testimonial__transcript-author-role">{customerRole}</p>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

VideoTestimonial.displayName = 'VideoTestimonial';