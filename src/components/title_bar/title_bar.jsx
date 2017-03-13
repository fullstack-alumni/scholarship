import React from 'react';

export default class TitleBar extends React.PureComponent {
  render() {
    return (
      <div className="title-bar">
        <div className="container title-bar__container">
          <div className="title-bar__items float-left">
            {this.props.leftItems}
          </div>
          <div className="title-bar__items float-right">
            {this.props.rightItems}
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
