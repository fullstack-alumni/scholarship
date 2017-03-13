import React from 'react';

import TitleBar from 'components/title_bar/title_bar';
import TitleBarItem, { TitleBarItemTypes } from 'components/title_bar/title_bar_item';

export default class LoggedOutHome extends React.PureComponent {
  renderTitleBar() {
    const applyLink = (
      <TitleBarItem
        text="Apply"
        type={TitleBarItemTypes.LINK}
        href="#"
        key={1}
      />
    );
    const loginLink = (
      <TitleBarItem
        text="Log in"
        type={TitleBarItemTypes.LINK}
        href="#"
        key={2}
      />
    );
    const rightItems = [loginLink, applyLink];
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
