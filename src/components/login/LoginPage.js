import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignUpLink from '../signup/SignUpLink';
import PasswordForgetLink from '../password-forget/PasswordForgetLink';

const LoginPage = ({ history }) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm history={history} />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  );
};

export default withRouter(LoginPage);
