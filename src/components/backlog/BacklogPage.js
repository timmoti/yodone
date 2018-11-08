import React from 'react';
import Logo from '../icons/Logo';

import withAuthorization from '../withAuthorization';
import BacklogTaskList from '../backlog/BacklogTaskList';

const BacklogPage = () => {
  return (
    <div id="backlog" className="grid tasks">
      <Logo />
      <span className="view">Backlog</span>
      <BacklogTaskList />
    </div>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(BacklogPage);
