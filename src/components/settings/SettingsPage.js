import React from 'react';

import AuthUserContext from '../AuthUserContext';
import PasswordChangeForm from './PasswordChangeForm';
import withAuthorization from '../withAuthorization';
import Logo from '../icons/Logo';
import SignOutLink from '../SignOutLink';

const SettingsPage = ({ history }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div id="settings" className="settings grid devise">
        <div className="settings-header">
          <Logo />
          <span className="signout">
            <SignOutLink />
          </span>
        </div>
        <span className="view">Settings</span>
        <div className="section">Change Password</div>
        <PasswordChangeForm history={history} />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SettingsPage);
