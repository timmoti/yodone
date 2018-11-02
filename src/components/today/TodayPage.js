import React from 'react';

import withAuthorization from '../withAuthorization';
import List from '../List';

const TodayPage = () => {
  return (
    <div>
      <h1>Today</h1>
      <p>The Today page is accessible by every signed in user</p>
      <p>But tasks will vary based on logged in user</p>
      <List />
    </div>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TodayPage);
