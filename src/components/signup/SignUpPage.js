import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginLink from '../login/LoginLink';

const SignUpPage = ({ history }) => {
  return (
    <div className="signup devise grid">
      <h1 className="title">
        <a href="/">
          <img src="../images/logo.svg" className="logo" />
          Yodone
        </a>
      </h1>
      <SignUpForm history={history} />
      <span className="links">
        <LoginLink />
      </span>
    </div>
  );
};

export default withRouter(SignUpPage);
