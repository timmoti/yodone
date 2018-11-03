import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../routes/routes';

const LoginLink = () => {
  return (
    <p>
      <Link to={routes.LOGIN}>Login</Link>
    </p>
  );
};

export default LoginLink;
