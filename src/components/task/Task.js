import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 120
    };
  }

  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  tick = () => {
    const setTimeRemaining =
      (this.props.timeExpired - new Date().getTime()) / 1000;
    this.setState({
      timeRemaining: setTimeRemaining
    });
  };

  componentDidUpdate = () => {
    if (this.state.timeRemaining <= 0) {
      this.props.clearTaskAfterExpired(this.props.taskId);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  render() {
    const { name, taskId, toggleDoneNotDone } = this.props;

    const { timeRemaining } = this.state;

    const timeDisplayHrs = `${Math.floor(timeRemaining / (60 * 60))}h`;
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
          <label htmlFor={taskId} className="cbx-lbl">
            <span className="taskname">{name}</span>
          </label>
          {timeRemaining > 3600 && (
            <span className="timeleft">{timeDisplayHrs}</span>
          )}
          {timeRemaining <= 3600 && timeRemaining > 60 ? (
            <span className="timeleft">{timeDisplayMins}</span>
          ) : (
            <span className="timeleft">{timeDisplaySecs}</span>
          )}
        </label>
      </li>
    );
  }
}

export default Task;
