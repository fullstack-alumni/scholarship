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

  renderHeader() {
    const header = (
      <div className="description text-center">
        <h1 className="header">
           the alumni-powered<br/> scholarship
        </h1>
        <p>
          built by<br />
          fullstack academy alumni for future alumni
        </p>
      </div>);
    return header;
  }

  renderImage(key) {
    return (
      <div className="col-sm-6 col-md-3 col-lg-3" key={key}>
        <img className="image" src='/imgs/placeholder.png'/>
      </div>
    );
  }

  renderImages() {
    const images = [];
    for (let i = 0; i < 4; i++) {
      images.push(this.renderImage(i));
    }
    return images;
  }

  render() {
    return (
      <div>
        {this.renderTitleBar()}
        <div className="body-with-title-bar container">
          {this.renderHeader()}
          {this.renderImages()}
        </div>
      </div>
    );
  }
}
