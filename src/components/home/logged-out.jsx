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
        <div className="description">
          <div className="header1">
          the alumni-powered
          </div>
          <div className="header2">scholarship</div>
          <div> built by </div>
          <div> fullstack academy alumni for future alumni
          </div>
        </div>
          <div className="row">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img className="image" src='/imgs/placeholder.png'/>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img className="image" src='/imgs/placeholder.png'/>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img className="image" src='/imgs/placeholder.png'/>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <img className="image" src='/imgs/placeholder.png'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
