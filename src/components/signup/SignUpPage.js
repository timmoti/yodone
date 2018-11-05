import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginLink from '../login/LoginLink';
import Logo from '../icons/Logo';

const SignUpPage = ({ history }) => {
  return (
    <div className="signup devise grid">
      <Logo />
      <SignUpForm history={history} />
      <span className="links">
        <LoginLink />
      </span>
    </div>
  );
};

export default withRouter(SignUpPage);
