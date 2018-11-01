import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes/routes';

const SettingsPageLink = () => {
  return (
    <p>
      <Link to={routes.SETTINGS}>Settings</Link>
    </p>
  );
};

export default SettingsPageLink;
