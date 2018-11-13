import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as routes from '../routes/routes';
import Logo from './icons/Logo';
import AuthUserContext from './AuthUserContext';
import Timeleft from './Timeleft';
import Task from './Task';

const LandingPage = ({ history }) => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? history.push(routes.TODAY) : <LandingPageNonAuth />
    }
  </AuthUserContext.Consumer>
);

const LandingPageTask = ({ timeRemaining }) => {
  return (
    <li className="task">
      <label htmlFor="todo" className="item">
        <input type="checkbox" id="todo-2" className="hidden checkbox" />
        <label htmlFor="todo-2" className="cbx">
          <svg width="14px" height="12px" viewBox="0 0 14 12">
            <polyline points="1 7.6 5 11 13 1" />
          </svg>
        </label>
        <label htmlFor="todo-2" className="cbx-lbl">
          <span className="taskname">
            Procrastinate not, else they'll be forgotten
          </span>
        </label>
        <Timeleft timeRemaining={timeRemaining} />
      </label>
    </li>
  );
};

class LandingPageNonAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expiryTime: new Date().getTime() + 1000 * 20,
      timeRemaining: 20
    };
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  tick = () => {
    const setTimeRemaining =
      (this.state.expiryTime - new Date().getTime()) / 1000;
    this.setState({
      timeRemaining: setTimeRemaining
    });
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  render() {
    const { timeRemaining } = this.state;

    return (
      <div className="home devise grid">
        <Logo />
        <ul id="tasks">
          <li className="task">
            <label htmlFor="todo" className="item">
              <input type="checkbox" id="todo-1" className="hidden checkbox" />
              <label htmlFor="todo-1" className="cbx">
                <svg width="14px" height="12px" viewBox="0 0 14 12">
                  <polyline points="1 7.6 5 11 13 1" />
                </svg>
              </label>
              <label htmlFor="todo-1" className="cbx-lbl">
                <span className="taskname">In 24 hours, tasks disappear</span>
              </label>
              <Timeleft timeRemaining="86400" />
            </label>
          </li>
          {timeRemaining > 0 && (
            <LandingPageTask timeRemaining={timeRemaining} />
          )}
          <li className="task">
            <label htmlFor="todo" className="item">
              <input type="checkbox" id="todo-3" className="hidden checkbox" />
              <label htmlFor="todo-3" className="cbx">
                <svg width="14px" height="12px" viewBox="0 0 14 12">
                  <polyline points="1 7.6 5 11 13 1" />
                </svg>
              </label>
              <label htmlFor="todo-3" className="cbx-lbl">
                <span>Do or do not, there is no try</span>
              </label>
            </label>
          </li>
          <li>
            <Link to={routes.LOGIN}>Login</Link>
          </li>
          <li>
            <Link to={routes.SIGN_UP}>Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(LandingPage);
