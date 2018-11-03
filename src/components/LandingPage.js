import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../routes/routes';
import './App.css';

const LandingPage = () => {
  return (
    <div className="home devise grid">
      <h1 className="title">
        <a href="/">
          <img src="../images/logo.svg" className="logo" />
          Yodone
        </a>
      </h1>
      <ul id="tasks">
        <li className="task">
          <label htmlFor="todo" className="item">
            <input type="checkbox" id="todo-59" className="hidden checkbox" />
            <label htmlFor="todo-59" className="cbx">
              <svg width="14px" height="12px" viewBox="0 0 14 12">
                <polyline points="1 7.6 5 11 13 1" />
              </svg>
            </label>
            <label htmlFor="todo-59" className="cbx-lbl">
              <span>In 24 hours, tasks disappear</span>
            </label>
          </label>
        </li>
        <li className="task">
          <label htmlFor="todo" className="item">
            <input type="checkbox" id="todo-60" className="hidden checkbox" />
            <label htmlFor="todo-60" className="cbx">
              <svg width="14px" height="12px" viewBox="0 0 14 12">
                <polyline points="1 7.6 5 11 13 1" />
              </svg>
            </label>
            <label htmlFor="todo-60" className="cbx-lbl">
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
};

export default LandingPage;
