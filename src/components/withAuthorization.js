import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../firebase/index';
import * as routes from '../routes/routes';

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidUpdate = () => {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.LANDING);
        }
      });
    };
    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <Component {...this.props} authUser={authUser} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
