import React from 'react';

export default class TitleBar extends React.PureComponent {
  render() {
    return (
      <div className="title-bar">
        <div className="title-bar__left">
          {this.props.leftItems}
        </div>
        <div className="title-bar__right">
          {this.props.rightItems}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  leftItems: React.PropTypes.node,
  rightItems: React.PropTypes.node,
};
