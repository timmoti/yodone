import React from 'react';
import Logo from '../icons/Logo';

import withAuthorization from '../withAuthorization';
import TaskList from '../TaskList';

const TodayPage = () => {
  return (
    <div id="today" className="grid tasks">
      <Logo />
      <span className="view">Today</span>
      <TaskList />
    </div>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TodayPage);
