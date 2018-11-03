import React from 'react';
import { withRouter } from 'react-router-dom';
import PasswordForgetForm from './PasswordForgetForm';
import SignUpLink from '../signup/SignUpLink';
import LoginLink from '../login/LoginLink';

const PasswordForgetPage = ({ history }) => {
  return (
    <div className="pw-forget devise grid">
      <h1 className="title">
        <a href="/">
          <img src="../images/logo.svg" className="logo" />
          Yodone
        </a>
      </h1>
      <PasswordForgetForm history={history} />
      <span className="links">
        <SignUpLink />
      </span>
      <span className="links">
        <LoginLink />
      </span>
    </div>
  );
};

export default withRouter(PasswordForgetPage);
