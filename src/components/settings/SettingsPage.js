import React from 'react';

import AuthUserContext from '../AuthUserContext';
import PasswordChangeForm from './PasswordChangeForm';
import withAuthorization from '../withAuthorization';

const SettingsPage = ({ history }) => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <p>Email: {authUser.email}</p>
        <PasswordChangeForm history={history} />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(SettingsPage);
