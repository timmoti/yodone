import React from 'react';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOutButton';
import SettingsPageLink from './settings/SettingsPageLink';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => {
  return (
    <div>
      <SignOutButton />
      <SettingsPageLink />
    </div>
  );
};

const NavigationNonAuth = () => {
  return null;
};

export default Navigation;
