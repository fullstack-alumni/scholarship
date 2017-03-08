import React from 'react';

export default class TitleBar extends React.PureComponent {
  render() {
    return (
      <div className="title-bar">
        <div className="links">
          <div className="login">
            Login
          </div>
          <div className="signup">
            Sign Up
          </div>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  leftItems: React.PropTypes.node,
  rightItems: React.PropTypes.node,
};
