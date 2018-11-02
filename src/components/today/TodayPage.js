import React from 'react';

import withAuthorization from '../withAuthorization';
import List from '../List';

const TodayPage = () => {
  return (
    <div>
      <h1>Today</h1>
      <List />
    </div>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TodayPage);
