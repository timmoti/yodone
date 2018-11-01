import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';
import LandingPage from './LandingPage';
import SignUpPage from './signup/SignUpPage';
import LoginPage from './login/LoginPage';
import PasswordForgetPage from './password-forget/PasswordForgetPage';
import TodayPage from './today/TodayPage';
import SettingsPage from './settings/SettingsPage';
// import BacklogPage from './BacklogPage';

import * as routes from '../routes/routes';
import withAuthentication from './withAuthentication';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path={routes.LANDING} component={LandingPage} />
        <Route exact path={routes.SIGN_UP} component={SignUpPage} />
        <Route exact path={routes.LOGIN} component={LoginPage} />
        <Route
          exact
          path={routes.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={routes.TODAY} component={TodayPage} />
        <Route exact path={routes.SETTINGS} component={SettingsPage} />
        {/* <Route exact path={routes.BACKLOG} component={BacklogPage} /> */}
      </div>
    </Router>
  );
};

export default withAuthentication(App);
