import React, { Component } from 'react';
import * as routes from '../../routes/routes';
import { auth } from '../../firebase/firebase';
import swal from 'sweetalert';

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordOne: '',
      passwordTwo: ''
    };
  }

  onSubmit = async event => {
    try {
      event.preventDefault();
      const { passwordOne, passwordTwo } = this.state;
      const { history } = this.props;
      if (passwordOne !== passwordTwo) {
        throw new Error('Passwords do not match');
      }
      await auth.currentUser.updatePassword(passwordOne);
      this.setState({
        passwordOne: '',
        passwordTwo: ''
      });
      history.push(routes.TODAY);
    } catch (err) {
      if (err.message === 'Passwords do not match') {
        swal(
          'Passwords do not match',
          'Enter matching passwords, you should',
          'error'
        );
      }
      console.error(err.message);
    }
  };

  render() {
    const { passwordOne, passwordTwo } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <input
            autoFocus
            value={passwordOne}
            onChange={event =>
              this.setState({ passwordOne: event.target.value })
            }
            type="password"
            placeholder="New Password"
            required
            minLength="6"
          />
        </div>
        <div>
          <input
            value={passwordTwo}
            onChange={event =>
              this.setState({ passwordTwo: event.target.value })
            }
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="action">
          <input type="submit" name="commit" value="Reset Password" />
        </div>
      </form>
    );
  }
}

export default PasswordChangeForm;
