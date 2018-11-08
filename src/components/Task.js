import React, { Component } from 'react';
import { RIEInput } from 'riek';
import { db } from '../firebase/index';
import Trash from './icons/Trash';
import * as routes from '../routes/routes';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: null
    };
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  tick = () => {
    if (this.props.match.path === routes.TODAY) {
      const setTimeRemaining =
        (this.props.timeExpired - new Date().getTime()) / 1000;
      this.setState({
        timeRemaining: setTimeRemaining
      });
    }
  };

  componentDidUpdate = () => {
    if (this.state.timeRemaining <= 0) {
      this.props.clearTaskAfterExpired(this.props.taskId);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  //To implement editable tasks
  // editTask = () => {
  //   db.updateTask(this.props.userId, this.props.taskId, this.props.name);
  // };

  render() {
    const { name, taskId, toggleDoneNotDone, handleDelete } = this.props;

    const { timeRemaining } = this.state;

    const timeDisplayHrs = `${Math.ceil(timeRemaining / (60 * 60))}h`;
    const timeDisplayMins = `${Math.ceil(timeRemaining / 60)}m`;
    const timeDisplaySecs = `${Math.ceil(timeRemaining)}s`;

    return (
      <li className="task">
        <label htmlFor="todo" className="item">
          <input
            type="checkbox"
            id={taskId}
            className="hidden checkbox"
            onClick={event => toggleDoneNotDone(taskId, event)}
          />
          <label htmlFor={taskId} className="cbx">
            <svg width="14px" height="12px" viewBox="0 0 14 12">
              <polyline points="1 7.6 5 11 13 1" />
            </svg>
          </label>
          <label className="cbx-lbl">
            {/* To implement editable tasks */}
            {/* <input
              type="text"
              readOnly
              id={taskId}
              className="taskname"
              defaultValue={name}
            /> */}
            {/* <RIEInput value={name} propName="name" change={this.editTask} /> */}
            <span
              // suppressContentEditableWarning={true}
              // contentEditable="true"
              className="taskname"
            >
              {name}
            </span>
          </label>
          <Trash handleDelete={handleDelete} taskId={taskId} />
          <span className="timeleft">
            {timeRemaining === null
              ? ''
              : timeRemaining > 3600
                ? timeDisplayHrs
                : timeRemaining <= 3600 && timeRemaining > 60
                  ? timeDisplayMins
                  : timeDisplaySecs}
          </span>
        </label>
      </li>
    );
  }
}

export default Task;
