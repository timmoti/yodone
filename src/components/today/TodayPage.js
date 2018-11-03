import React from 'react';

import withAuthorization from '../withAuthorization';
import TaskList from '../TaskList';

const TodayPage = () => {
  return (
    <div id="today" className="grid tasks">
      <h1 className="title">
        <a href="/today">
          <img src="../images/logo.svg" className="logo" />
          Yodone
        </a>
      </h1>
      <span className="view">Today</span>
      <TaskList />
    </div>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TodayPage);
