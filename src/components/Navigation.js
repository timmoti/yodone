import React from 'react';

import AuthUserContext from './AuthUserContext';
import SignOutLink from './SignOutLink';
import SettingsPageLink from './settings/SettingsPageLink';
import TodayPageLink from './today/TodayPageLink';
import BacklogPageLink from './backlog/BacklogPageLink';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => {
  return (
    <div className="devise">
      <nav className="nav">
        <span className="link">
          <BacklogPageLink />
        </span>
        <span className="link">
          <TodayPageLink />
        </span>
        <span className="link">
          <SettingsPageLink />
        </span>
      </nav>
      <div className="signout">
        <SignOutLink />
      </div>
    </div>
  );
};

const NavigationNonAuth = () => {
  return null;
};

export default Navigation;
