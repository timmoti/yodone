import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase/index';

import * as routes from '../routes/routes';

const SignUpPage = ({ history }) => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm history={history} />
    </div>
  );
};

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async event => {
    try {
      const { username, email, passwordOne } = this.state;

      const { history } = this.props;

      const authUser = await auth.doCreateUserWithEmailAndPassword(
        email,
        passwordOne
      );
      //   await db.doCreateUser(authUser.user.uid, username, email);
      this.setState({ ...INITIAL_STATE });
      history.push(routes.LANDING);
    } catch (error) {
      this.setState(byPropKey('error', error));
    }

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6 ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={username}
          onChange={event =>
            this.setState(byPropKey('username', event.target.value))
          }
          placeholder="Full Name"
        />
        <input
          type="text"
          value={email}
          onChange={event =>
            this.setState(byPropKey('email', event.target.value))
          }
          placeholder="Email Address"
        />
        <input
          type="password"
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey('passwordOne', event.target.value))
          }
          placeholder="Password"
        />
        <input
          type="password"
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey('passwordTwo', event.target.value))
          }
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => {
  return (
    <p>
      Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  );
};
export default withRouter(SignUpPage);

export { SignUpLink, SignUpForm };
