import React from 'react';

import TitleBar from 'components/title_bar/title_bar';
import { applyItem, loginItem } from 'components/title_bar/title_bar_item';

export default class LoggedOutHome extends React.PureComponent {
  renderTitleBar() {
    const rightItems = [loginItem, applyItem];
    return <TitleBar rightItems={rightItems} />;
  }

  render() {
    return (
      <div>
        {this.renderTitleBar()}
        <div className="body-with-title-bar container">
          logged out wew
        </div>
      </div>
    );
  }
}
