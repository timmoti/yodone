import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignUpLink from '../signup/SignUpLink';
import PasswordForgetLink from '../password-forget/PasswordForgetLink';
import Logo from '../icons/Logo';

const LoginPage = ({ history }) => {
  return (
    <div className="login devise grid">
      <Logo />
      <LoginForm history={history} />
      <span className="links">
        <SignUpLink />
      </span>
      <span className="links">
        <PasswordForgetLink />
      </span>
    </div>
  );
};

export default withRouter(LoginPage);
