import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm';
import SignUpLink from '../signup/SignUpLink';
import PasswordForgetLink from '../password-forget/PasswordForgetLink';

const LoginPage = ({ history }) => {
  return (
    <div className="login devise grid">
      <h1 className="title">
        <a href="/">
          <img src="../images/logo.svg" className="logo" />
          Yodone
        </a>
      </h1>
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
