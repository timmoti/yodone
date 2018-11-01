import React, { Component } from 'react';

class TaskCreationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleSubmit = (input, event) => {
    event.preventDefault();
    this.props.addNewTask(input);
    this.setState({
      input: ''
    });
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={event => this.handleSubmit(input, event)}>
        <input
          type="text"
          value={input}
          onChange={event => this.handleChange(event)}
          placeholder="Add stuff"
        />
      </form>
    );
  }
}

export default TaskCreationBar;
