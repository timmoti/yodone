import React, { Component } from 'react';
import { RIEInput } from 'riek';
import { db } from '../firebase/index';
import Trash from './icons/Trash';
import Forward from './icons/Forward';
import Timeleft from './Timeleft';
import * as routes from '../routes/routes';
import { withRouter } from 'react-router-dom';

class Task extends Component {
  constructor(props) {
    super(props);

    this.secsRemaining = null;

    this.state = {
      timeInStateRemaining: null
    };
  }

  componentDidMount = () => {
    if (this.props.match.path === routes.TODAY) {
      const setTimeRemaining =
        (this.props.timeExpired - new Date().getTime()) / 1000;
      this.secsRemaining = setTimeRemaining;
      this.setState({
        timeInStateRemaining: setTimeRemaining
      });
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  };

  tick = () => {
    if (this.props.match.path === routes.TODAY) {
      const setTimeRemaining =
        (this.props.timeExpired - new Date().getTime()) / 1000;
      this.secsRemaining = setTimeRemaining;
      console.log(this.secsRemaining);
      if (
        this.secsRemaining > 3600 &&
        Math.ceil(this.secsRemaining) % 3600 === 0
      ) {
        this.setState({
          timeInStateRemaining: this.secsRemaining
        });
      } else if (
        this.secsRemaining <= 3600 &&
        this.secsRemaining > 60 &&
        Math.ceil(this.secsRemaining) % 60 === 0
      ) {
        this.setState({
          timeInStateRemaining: this.secsRemaining
        });
      } else if (this.secsRemaining <= 60) {
        this.setState({
          timeInStateRemaining: this.secsRemaining
        });
      }
    }
  };

  componentDidUpdate = () => {
    if (
      this.state.timeInStateRemaining !== null &&
      this.state.timeInStateRemaining <= 0
    ) {
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
    const {
      name,
      taskId,
      toggleDoneNotDone,
      handleDelete,
      handleTaskForward,
      match
    } = this.props;

    const { timeInStateRemaining } = this.state;

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
          {match.path === routes.BACKLOG && (
            <Forward handleTaskForward={handleTaskForward} taskId={taskId} />
          )}
          <Timeleft timeRemaining={timeInStateRemaining} />
        </label>
      </li>
    );
  }
}

export default withRouter(Task);
