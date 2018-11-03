import React, { Component } from 'react';
import { auth } from '../../firebase/firebase';
import * as routes from '../../routes/routes';
import swal from 'sweetalert';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit = async event => {
    try {
      event.preventDefault();
      const { email, password } = this.state;
      const { history } = this.props;
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
      history.push(routes.TODAY);
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        swal('Wrong password', 'Check your password, please', 'error');
      }
      if (errorCode === 'auth/invalid-email') {
        swal('Invalid email', 'Check your email, please', 'error');
      }
      if (errorCode === 'auth/user-not-found') {
        swal('User not found', 'Sign up for an account, you should', 'error');
      }
      console.error(error);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="new_user" id="new_user">
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
          />
        </div>
        <div className="action">
          <input type="submit" name="commit" value="Login" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
