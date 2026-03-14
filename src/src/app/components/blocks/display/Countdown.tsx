import React, { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired?: boolean;
}

const calculateTimeRemaining = (targetDate: string | Date): TimeRemaining => {
  const target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  const difference = target.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const pad = (v: number) => String(v).padStart(2, '0');

const TimeUnit = ({ value, label, showLabel }: { value: number; label: string; showLabel: boolean }) => {
  return (
    <div className="wp-countdown-unit funky-countdown-unit">
      <div className="wp-countdown-unit__value funky-countdown-value">{pad(value)}</div>
      {showLabel && <span className="wp-countdown-unit__label funky-countdown-label">{label}</span>}
    </div>
  );
};

interface CountdownProps {
  targetDate: string | Date;
  label?: string;
  format?: 'full' | 'compact' | 'minimal';
  showLabels?: boolean;
  onExpire?: () => void;
  hideWhenExpired?: boolean;
  className?: string;
}

export const Countdown = ({ targetDate, label, format = 'full', showLabels = true, onExpire, hideWhenExpired = false, className = '' }: CountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() => calculateTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining(targetDate);
      setTimeRemaining(remaining);
      if (remaining.isExpired && onExpire) {
        onExpire();
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  if (timeRemaining.isExpired && hideWhenExpired) return null;

  const renderCountdown = () => {
    if (format === 'compact') {
      return (
        <div className="wp-countdown--compact funky-countdown--compact">
          <span>{pad(timeRemaining.days)}</span>:<span>{pad(timeRemaining.hours)}</span>:
          <span>{pad(timeRemaining.minutes)}</span>:<span>{pad(timeRemaining.seconds)}</span>
        </div>
      );
    }

    if (format === 'minimal') {
      return (
        <div className="wp-countdown__units funky-countdown__units">
          <TimeUnit value={timeRemaining.hours} label="Hours" showLabel={showLabels} />
          <span className="wp-countdown__separator">:</span>
          <TimeUnit value={timeRemaining.minutes} label="Minutes" showLabel={showLabels} />
        </div>
      );
    }

    return (
      <div className="wp-countdown__units funky-countdown__units">
        {timeRemaining.days > 0 && (
          <>
            <TimeUnit value={timeRemaining.days} label="Days" showLabel={showLabels} />
            <span className="wp-countdown__separator">:</span>
          </>
        )}
        <TimeUnit value={timeRemaining.hours} label="Hours" showLabel={showLabels} />
        <span className="wp-countdown__separator">:</span>
        <TimeUnit value={timeRemaining.minutes} label="Minutes" showLabel={showLabels} />
        <span className="wp-countdown__separator">:</span>
        <TimeUnit value={timeRemaining.seconds} label="Seconds" showLabel={showLabels} />
      </div>
    );
  };

  return (
    <div className={['wp-countdown', className, 'funky-countdown'].filter(Boolean).join(' ')}>
      {label && <p className="wp-countdown__label funky-countdown-main-label">{label}</p>}
      {timeRemaining.isExpired
        ? <p className="wp-countdown__expired funky-countdown-expired">Offer Expired</p>
        : renderCountdown()
      }
    </div>
  );
}

Countdown.displayName = 'Countdown';