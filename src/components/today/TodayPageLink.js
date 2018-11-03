import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../routes/routes';

const TodayPageLink = () => {
  return (
    <p>
      <NavLink
        to={routes.TODAY}
        activeStyle={{
          color: '#1fcc92'
        }}
      >
        Today
      </NavLink>
    </p>
  );
};

export default TodayPageLink;
