import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selector, mapDispatchToProps } from 'redux/selectors/user';

import LoggedInHome from 'components/home/logged-in';
import LoggedOutHome from 'components/home/logged-out';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { loadUser } = this.props.userActions;
    loadUser();
  }

  render() {
    const { user } = this.props.userState;
    const isLoggedIn = false;
    const View = isLoggedIn ? LoggedInHome : LoggedOutHome;
    return (
      <div>
        <View />
      </div>
    );
  }
}

export default connect(selector, mapDispatchToProps)(Home);
