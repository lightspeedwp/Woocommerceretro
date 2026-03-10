import React from 'react';
var useState = React.useState;
var useEffect = React.useEffect;

/* CountdownProps: { targetDate, label, format, showLabels, onExpire, hideWhenExpired, className } */
/* TimeRemaining: { days, hours, minutes, seconds, isExpired } */

var calculateTimeRemaining = function(targetDate) {
  var target = typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  var now = new Date();
  var difference = target.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: true
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

/* TimeUnitProps: { value, label, showLabel } */

function TimeUnit(props) {
  var value = props.value;
  var label = props.label;
  var showLabel = props.showLabel;

  return React.createElement('div', { className: "wp-countdown-unit funky-countdown-unit" },
    React.createElement('div', { className: "wp-countdown-unit__value funky-countdown-value" },
      String(value).length < 2 ? '0' + value : String(value)
    ),
    showLabel ? React.createElement('span', { className: "wp-countdown-unit__label funky-countdown-label" }, label) : null
  );
}

/**
 * Countdown Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function Countdown(props) {
  var targetDate = props.targetDate;
  var label = props.label;
  var format = props.format || 'full';
  var showLabels = props.showLabels === undefined ? true : props.showLabels;
  var onExpire = props.onExpire;
  var hideWhenExpired = props.hideWhenExpired || false;
  var className = props.className || '';

  var _tr = useState(function() {
    return calculateTimeRemaining(targetDate);
  });
  var timeRemaining = _tr[0];
  var setTimeRemaining = _tr[1];

  useEffect(function() {
    var timer = setInterval(function() {
      var remaining = calculateTimeRemaining(targetDate);
      setTimeRemaining(remaining);

      if (remaining.isExpired && onExpire) {
        onExpire();
        clearInterval(timer);
      }
    }, 1000);

    return function() { clearInterval(timer); };
  }, [targetDate, onExpire]);

  if (timeRemaining.isExpired && hideWhenExpired) {
    return null;
  }

  var renderCountdown = function() {
    if (format === 'compact') {
      return React.createElement('div', { className: "wp-countdown--compact funky-countdown--compact" },
        React.createElement('span', null, String(timeRemaining.days).length < 2 ? '0' + timeRemaining.days : String(timeRemaining.days)), ":",
        React.createElement('span', null, String(timeRemaining.hours).length < 2 ? '0' + timeRemaining.hours : String(timeRemaining.hours)), ":",
        React.createElement('span', null, String(timeRemaining.minutes).length < 2 ? '0' + timeRemaining.minutes : String(timeRemaining.minutes)), ":",
        React.createElement('span', null, String(timeRemaining.seconds).length < 2 ? '0' + timeRemaining.seconds : String(timeRemaining.seconds))
      );
    }

    if (format === 'minimal') {
      return React.createElement('div', { className: "wp-countdown__units funky-countdown__units" },
        React.createElement(TimeUnit, { value: timeRemaining.hours, label: "Hours", showLabel: showLabels }),
        React.createElement('span', { className: "wp-countdown__separator" }, ":"),
        React.createElement(TimeUnit, { value: timeRemaining.minutes, label: "Minutes", showLabel: showLabels })
      );
    }

    var elements = [];
    if (timeRemaining.days > 0) {
      elements.push(React.createElement(TimeUnit, { key: "days", value: timeRemaining.days, label: "Days", showLabel: showLabels }));
      elements.push(React.createElement('span', { key: "sep-days", className: "wp-countdown__separator" }, ":"));
    }
    elements.push(React.createElement(TimeUnit, { key: "hours", value: timeRemaining.hours, label: "Hours", showLabel: showLabels }));
    elements.push(React.createElement('span', { key: "sep-hours", className: "wp-countdown__separator" }, ":"));
    elements.push(React.createElement(TimeUnit, { key: "minutes", value: timeRemaining.minutes, label: "Minutes", showLabel: showLabels }));
    elements.push(React.createElement('span', { key: "sep-minutes", className: "wp-countdown__separator" }, ":"));
    elements.push(React.createElement(TimeUnit, { key: "seconds", value: timeRemaining.seconds, label: "Seconds", showLabel: showLabels }));

    return React.createElement('div', { className: "wp-countdown__units funky-countdown__units" }, elements);
  };

  var combinedClassName = [
    'wp-countdown',
    className,
    'funky-countdown'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', { className: combinedClassName },
    label ? React.createElement('p', { className: "wp-countdown__label funky-countdown-main-label" }, label) : null,
    timeRemaining.isExpired ? React.createElement('p', { className: "wp-countdown__expired funky-countdown-expired" }, "Offer Expired") : renderCountdown()
  );
}

Countdown.displayName = 'Countdown';