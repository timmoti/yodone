import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './LandingPage';
import SignUpPage from './signup/SignUpPage';
// import LoginPage from './LoginPage';
// import PasswordForgetPage from './PasswordForgetPage';
// import TodayPage from './TodayPage';
// import SettingsPage from './SettingsPage';
// import BacklogPage from './BacklogPage';

import * as routes from '../routes/routes';
import withAuthentication from './withAuthentication';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        {/* <Route exact path={routes.LOGIN} component={LoginPage} />
        <Route
          exact
          path={routes.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={routes.TODAY} component={TodayPage} />
        <Route exact path={routes.SETTINGS} component={SettingsPage} />
        <Route exact path={routes.BACKLOG} component={BacklogPage} /> */}
      </div>
    </Router>
  );
};

export default withAuthentication(App);
