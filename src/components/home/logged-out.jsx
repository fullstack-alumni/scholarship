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

  renderLogoutViewHeader() {
    const header = (
      <div className="description">
        <h1 className="header">
           the alumni-powered
        </h1>
        <h2 className="header">
           scholarship
        </h2>
        <p>
          built by<br />
          fullstack academy alumni for future alumni
        </p>
      </div>);
    return header;
  }

  renderLogoutViewImages() {
    const images = (
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
    );
    return images;
  }

  render() {
    return (
      <div>
        {this.renderTitleBar()}
        <div className="body-with-title-bar container">
          {this.renderLogoutViewHeader()}
          {this.renderLogoutViewImages()}
        </div>
      </div>
    );
  }
}
