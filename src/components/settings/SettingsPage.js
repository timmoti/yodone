import React from 'react';

import AuthUserContext from '../AuthUserContext';
import PasswordChangeForm from './PasswordChangeForm';
import withAuthorization from '../withAuthorization';
import Logo from '../icons/Logo';

const SettingsPage = ({ history }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div id="settings" className="settings grid devise">
        <Logo />
        <span className="section">Change Password</span>
        <PasswordChangeForm history={history} />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SettingsPage);
