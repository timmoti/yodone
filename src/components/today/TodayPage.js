import React, { Component } from 'react';

import withAuthorization from '../withAuthorization';
import { db } from '../../firebase/index';
import List from '../List';

class TodayPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount = async () => {
    const user = await db.getUser(this.props.authUser.uid);
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div>
        <h1>Today</h1>
        <p>The Today page is accessible by every signed in user</p>
        <p>But tasks will vary based on logged in user</p>
        <List user={this.state} />
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(TodayPage);
