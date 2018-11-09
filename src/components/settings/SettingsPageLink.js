import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../routes/routes';
import Settings from '../icons/Settings';

const SettingsPageLink = () => {
  return (
    <NavLink
      to={routes.SETTINGS}
      activeStyle={{
        color: '#1fcc92'
      }}
    >
      <Settings />
    </NavLink>
  );
};

export default SettingsPageLink;
