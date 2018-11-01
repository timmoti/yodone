import React from 'react';
import { withRouter } from 'react-router-dom';
import PasswordForgetForm from './PasswordForgetForm';
import SignUpLink from '../signup/SignUpLink';

const PasswordForgetPage = ({ history }) => {
  return (
    <div>
      <h1>Password Forget Page</h1>
      <PasswordForgetForm history={history} />
      <SignUpLink />
    </div>
  );
};

export default withRouter(PasswordForgetPage);
