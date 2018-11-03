import React, { Component } from 'react';
import { auth } from '../../firebase/firebase';
import * as routes from '../../routes/routes';
import swal from 'sweetalert';

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  onSubmit = async event => {
    try {
      event.preventDefault();
      const { email } = this.state;
      const { history } = this.props;

      await auth.sendPasswordResetEmail(email);
      this.setState({ email: '' });
      history.push(routes.LOGIN);
    } catch (error) {
      const errorCode = error.code;
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
    const { email } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={event => this.setState({ email: event.target.value })}
          placeholder="Email"
          required
        />
        <div className="action">
          <input type="submit" name="commit" value="Reset Password" />
        </div>
      </form>
    );
  }
}

export default PasswordForgetForm;
