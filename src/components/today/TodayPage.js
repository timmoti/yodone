import React, { Component } from 'react';

import withAuthorization from '../withAuthorization';
import { db } from '../../firebase/index';
import List from '../List';

class TodayPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null
    };
  }

  componentDidMount = async () => {
    const snapshot = await db.onceGetUsers();
    console.log(snapshot);
    this.setState({
      users: snapshot.val()
    });
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Today</h1>
        <p>The Today page is accessible by every signed in user</p>
        <p>But tasks will vary based on logged in user</p>
        <List />

        {users !== null && <UserList users={users} />}
      </div>
    );
  }
}

const UserList = ({ users }) => {
  return (
    <div>
      <h2>List of Usernames of Users</h2>
      <p>(Saved on Sign Up in Firebase database)</p>

      {Object.keys(users).map(key => (
        <div key={key}>{users[key].username}</div>
      ))}
    </div>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TodayPage);
