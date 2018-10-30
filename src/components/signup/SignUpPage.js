import React from 'react';
import { withRouter } from 'react-router-dom';
import SignUpForm from './SignUpForm';

const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm history={history} />
    </div>
  );
};

export default withRouter(SignUpPage);
