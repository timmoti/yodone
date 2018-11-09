import React from 'react';

const Timeleft = ({ timeRemaining }) => {
  const timeDisplayHrs = `${Math.ceil(timeRemaining / (60 * 60))}h`;
  const timeDisplayMins = `${Math.ceil(timeRemaining / 60)}m`;
  const timeDisplaySecs = `${Math.ceil(timeRemaining)}s`;
  let timeDisplay;
  let colorRemaining;

  if (timeRemaining === null) {
    timeDisplay = '';
  } else if (timeRemaining > 3600) {
    timeDisplay = timeDisplayHrs;
    colorRemaining = 'still-early';
  } else if (timeRemaining <= 3600 && timeRemaining > 60) {
    timeDisplay = timeDisplayMins;
    colorRemaining = 'last-hour';
  } else {
    timeDisplay = timeDisplaySecs;
    colorRemaining = 'last-hour';
  }

  return (
    <span id={colorRemaining} className="timeleft">
      {timeDisplay}
    </span>
  );
};

export default Timeleft;
