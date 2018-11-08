import React, { Component } from 'react';
import Task from '../Task';
import TaskCreationBar from '../TaskCreationBar';
import { db } from '../../firebase/index';
import withAuthorization from '../withAuthorization';

class BacklogTaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArray: []
    };
  }

  componentDidMount = async () => {
    try {
      const loadedArray = await db.getValidBacklogTasks(
        this.props.authUser.uid
      );
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
      isExpired: false,
      timeCreated: new Date().getTime(),
      timeExpired: null,
      isDeleted: false,
      timeCompleted: null,
      location: 'backlog'
    };
    const taskRef = await db.createTaskInDb(this.props.authUser.uid, task);
    task.taskId = taskRef.id;
    await db.updateTaskId(this.props.authUser.uid, task.taskId);
    newArray.push(task);
    this.setState(() => ({
      taskArray: newArray
    }));
  };

  toggleDoneNotDone = id => {
    try {
      const newArray = [...this.state.taskArray];
      const task = newArray.find(task => task.taskId === id);

      task.isCompleted = !task.isCompleted;
      if (task.isCompleted === true) {
        task.timeCompleted = new Date().getTime();
      } else {
        task.timeCompleted = null;
      }
      this.setState(() => ({
        taskArray: newArray
      }));
      db.updateCompleted(
        this.props.authUser.uid,
        id,
        task.isCompleted,
        task.timeCompleted
      );

      setTimeout(() => {
        this.setState(() => ({
          taskArray: newArray.filter(task => !task.isCompleted)
        }));
      }, 5000);
    } catch (err) {
      console.error(err);
    }
  };

  // clearTaskAfterExpired = id => {
  //   const newArray = [...this.state.taskArray];
  //   const task = newArray.find(task => task.taskId === id);
  //   task.isExpired = true;
  //   this.setState(() => ({
  //     taskArray: newArray.filter(task => !task.isExpired)
  //   }));
  //   db.updateExpired(this.props.authUser.uid, id);
  // };

  handleDelete = id => {
    const newArray = [...this.state.taskArray];
    const task = newArray.find(task => task.taskId === id);
    task.isDeleted = true;
    this.setState(() => ({
      taskArray: newArray.filter(task => !task.isDeleted)
    }));
    db.deleteTask(this.props.authUser.uid, id);
  };

  handleTaskForward = id => {
    const TWENTYFOURHOURS = 24 * 60 * 60 * 1000;
    const newArray = [...this.state.taskArray];
    const task = newArray.find(task => task.taskId === id);
    task.location = 'today';
    task.timeExpired = new Date().getTime() + TWENTYFOURHOURS;
    this.setState(() => ({
      taskArray: newArray.filter(task => task.location === 'backlog')
    }));
    db.updateTaskLocation(this.props.authUser.uid, id, task.timeExpired);
  };

  // editTask = (id) => {
  //   const newArray = [...this.state.taskArray];
  //   const task = newArray.
  // }

  render() {
    const { taskArray } = this.state;
    return (
      <div>
        <TaskCreationBar addNewTask={this.addNewTask} />
        <ul id="tasks">
          {taskArray.map(task => (
            <Task
              key={task.taskId}
              {...task}
              toggleDoneNotDone={this.toggleDoneNotDone}
              handleDelete={this.handleDelete}
              handleTaskForward={this.handleTaskForward}
              match={this.props.match}
              // editTask={this.editTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(BacklogTaskList);
