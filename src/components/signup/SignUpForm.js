import React, { Component } from 'react';
import { auth } from '../../firebase/index';
import * as routes from '../../routes/routes';

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
      const { email, password } = this.state;

      const { history } = this.props;

      const authUser = await auth.doCreateUserWithEmailAndPassword(
        email,
        password
      );
      //   await db.doCreateUser(authUser.user.uid, email);
      this.setState({
        email: '',
        password: ''
      });
      history.push(routes.LANDING);
    } catch (error) {
      console.error(error);
    }

    event.preventDefault();
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={event => this.setState({ email: event.target.value })}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={event => this.setState({ password: event.target.value })}
          placeholder="Password"
          required
          minLength="6"
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
