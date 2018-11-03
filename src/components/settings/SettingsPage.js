import React from 'react';

import AuthUserContext from '../AuthUserContext';
import PasswordChangeForm from './PasswordChangeForm';
import withAuthorization from '../withAuthorization';

const SettingsPage = ({ history }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div id="settings" className="settings grid devise">
        <h1 className="title">
          <a href="/today">
            <img src="../images/logo.svg" className="logo" />
            Yodone
          </a>
        </h1>
        <span className="section">Change Password</span>
        <PasswordChangeForm history={history} />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SettingsPage);
