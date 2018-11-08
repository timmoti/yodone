import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../routes/routes';

const BacklogPageLink = () => {
  return (
    <p>
      <NavLink
        to={routes.BACKLOG}
        activeStyle={{
          color: '#1fcc92'
        }}
      >
        Backlog
      </NavLink>
    </p>
  );
};

export default BacklogPageLink;
