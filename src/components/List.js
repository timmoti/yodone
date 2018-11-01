import React, { Component } from 'react';
import Task from './task/Task';
import TaskCreationBar from './TaskCreationBar';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray: []
    };
  }

  addNewTask = input => {
    const newArray = [...this.state.taskArray];
    newArray.push({
      name: input,
      isCompleted: false,
      timeExpired: new Date(new Date().getTime() + 2 * 60 * 1000),
      isExpired: false
    });
    this.setState({
      taskArray: newArray
    });
  };

  toggleDoneNotDone = id => {
    const newArray = [...this.state.taskArray];
    newArray[id].isCompleted = !newArray[id].isCompleted;
    this.setState(() => ({
      taskArray: newArray
    }));

    // Wait for 5 seconds after marking task as complete before clearing from screen
    setTimeout(() => {
      this.setState(() => ({
        taskArray: newArray.filter(task => !task.isCompleted)
      }));
    }, 5000);
  };

  clearTaskAfterExpired = id => {
    const newArray = [...this.state.taskArray];
    newArray[id].isExpired = true;
    this.setState({
      taskArray: newArray.filter(task => !task.isExpired)
    });
  };

  render() {
    const { taskArray } = this.state;
    return (
      <div>
        <TaskCreationBar addNewTask={this.addNewTask} />
        <div>
          {taskArray.map((task, index) => (
            <Task
              key={index}
              index={index}
              {...task}
              toggleDoneNotDone={this.toggleDoneNotDone}
              clearTaskAfterExpired={this.clearTaskAfterExpired}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
