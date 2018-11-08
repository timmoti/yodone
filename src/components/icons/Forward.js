import React from 'react';
import Icon from '../../Icon';
import { ICONS } from '../../constants';

const Forward = ({ handleTaskForward, taskId }) => {
  return (
    <button
      className="forward"
      onClick={event => handleTaskForward(taskId, event)}
    >
      <Icon
        icon={ICONS.FORWARD}
        size={16}
        color={'rgba(255, 255, 255, 0.32)'}
      />
    </button>
  );
};

export default Forward;
