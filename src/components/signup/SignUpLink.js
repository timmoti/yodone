import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes/routes';

const SignUpLink = () => {
  return (
    <p>
      Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  );
};

export default SignUpLink;
