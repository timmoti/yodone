import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../routes/routes';

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <h2>Sample task list component</h2>
      <ul>
        <li>In 24 hours, tasks disappear</li>
        <li>Do or do not, there is no try</li>
        <li>
          <Link to={routes.LOGIN}>Login</Link>
        </li>
        <li>
          <Link to={routes.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
