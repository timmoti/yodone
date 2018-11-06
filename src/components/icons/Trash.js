import React from 'react';
import Icon from '../../Icon';
import { ICONS } from '../../constants';

const Trash = ({ handleDelete, taskId }) => {
  return (
    <button className="delete" onClick={event => handleDelete(taskId, event)}>
      <Icon icon={ICONS.TRASH} size={16} color={'rgba(255, 255, 255, 0.32)'} />
    </button>
  );
};

export default Trash;
