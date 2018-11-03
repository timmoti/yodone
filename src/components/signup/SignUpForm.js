import React, { Component } from 'react';
import { auth } from '../../firebase/firebase';
import { db } from '../../firebase/index';
import * as routes from '../../routes/routes';
import swal from 'sweetalert';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    try {
      event.preventDefault();
      const { email, password } = this.state;

      const { history } = this.props;

      const authUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await db.createUserInDb(authUser.user.uid, email);
      this.setState({
        email: '',
        password: ''
      });
      history.push(routes.TODAY);
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === 'auth/email-already-in-use') {
        swal('Email found', 'Login, you should', 'error');
      }
      if (errorCode === 'auth/invalid-email') {
        swal('Invalid email', 'Check your email, please', 'error');
      }
      if (errorCode === 'auth/weak-password') {
        swal('Weak password', 'Enter a stronger password, you should', 'error');
      }
      console.error(error);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            autoFocus
            type="email"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="Email"
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            placeholder="Password"
            required
            minLength="6"
          />
        </div>
        <div className="action">
          <input type="submit" name="commit" value="Sign Up" />
        </div>
      </form>
    );
  }
}

export default SignUpForm;
