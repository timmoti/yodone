import React, { Component } from 'react';
import './Task.css';

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
    const setTimeRemaining = (this.props.timeExpired - new Date()) / 1000;
    this.setState({
      timeRemaining: setTimeRemaining
    });
  };

  componentDidUpdate = () => {
    if (this.state.timeRemaining <= 0) {
      this.props.clearTaskAfterExpired(this.props.index);
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };

  render() {
    const { name, index, isCompleted, toggleDoneNotDone } = this.props;

    const { timeRemaining } = this.state;

    const doneNotDone = isCompleted === true ? 'completed' : 'uncompleted';

    const timeDisplayHrs = `${Math.floor(timeRemaining / (60 * 60))} hrs left`;
    const timeDisplayMins = `${Math.ceil(timeRemaining / 60)} mins left`;
    const timeDisplaySecs = `${Math.ceil(timeRemaining)} secs left`;

    return (
      <ul>
        <li
          onClick={event => toggleDoneNotDone(index, event)}
          className={doneNotDone}
        >
          {timeRemaining > 3600 && (
            <div>
              {name} {timeDisplayHrs}
            </div>
          )}

          {timeRemaining <= 3600 && timeRemaining > 60 ? (
            <div>
              {name} {timeDisplayMins}
            </div>
          ) : (
            <div>
              {name} {timeDisplaySecs}
            </div>
          )}
        </li>
      </ul>
    );
  }
}

export default Task;
