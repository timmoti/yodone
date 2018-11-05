import React from 'react';
import { withRouter } from 'react-router-dom';
import PasswordForgetForm from './PasswordForgetForm';
import SignUpLink from '../signup/SignUpLink';
import LoginLink from '../login/LoginLink';
import Logo from '../icons/Logo';

const PasswordForgetPage = ({ history }) => {
  return (
    <div className="pw-forget devise grid">
      <Logo />
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
