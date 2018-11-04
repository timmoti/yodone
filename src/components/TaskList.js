import React, { Component } from 'react';
import Task from './Task';
import TaskCreationBar from './TaskCreationBar';
import { db } from '../firebase/index';
import withAuthorization from './withAuthorization';
import List from '@material-ui/core/List';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArray: []
    };
  }

  componentDidMount = async () => {
    try {
      const loadedArray = await db.getValidTasks(this.props.authUser.uid);
      this.setState({
        taskArray: loadedArray
      });
    } catch (err) {
      console.error(err);
    }
  };

  addNewTask = async input => {
    const newArray = [...this.state.taskArray];
    const task = {
      name: input,
      isCompleted: false,
      timeExpired: new Date().getTime() + 2 * 60 * 1000,
      isExpired: false
    };
    const taskRef = await db.createTaskInDb(this.props.authUser.uid, task);
    task.taskId = taskRef.id;
    await db.updateTaskId(this.props.authUser.uid, task.taskId);
    newArray.push(task);
    this.setState(() => ({
      taskArray: newArray
    }));
    console.log(this.state);
  };

  toggleDoneNotDone = id => {
    try {
      const newArray = [...this.state.taskArray];
      const task = newArray.find(task => task.taskId === id);

      task.isCompleted = !task.isCompleted;
      this.setState(() => ({
        taskArray: newArray
      }));
      db.updateCompleted(this.props.authUser.uid, id, task.isCompleted);

      // Wait for 5 seconds after marking task as complete before clearing from screen
      setTimeout(() => {
        this.setState(() => ({
          taskArray: newArray.filter(task => !task.isCompleted)
        }));
      }, 5000);
    } catch (err) {
      console.error(err);
    }
  };

  clearTaskAfterExpired = id => {
    const newArray = [...this.state.taskArray];
    const task = newArray.find(task => task.taskId === id);
    task.isExpired = true;
    this.setState(() => ({
      taskArray: newArray.filter(task => !task.isExpired)
    }));
    db.updateExpired(this.props.authUser.uid, id);
  };

  render() {
    const { taskArray } = this.state;
    return (
      <div id="tasks">
        <TaskCreationBar addNewTask={this.addNewTask} />
        <div>
          <List>
            {taskArray.map(task => (
              <Task
                key={task.taskId}
                {...task}
                toggleDoneNotDone={this.toggleDoneNotDone}
                clearTaskAfterExpired={this.clearTaskAfterExpired}
              />
            ))}
          </List>
        </div>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TaskList);
