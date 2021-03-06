import React from 'react';
import TitleBar from 'components/title_bar/title_bar';
import { applyItem, loginItem } from 'components/title_bar/title_bar_item';

export default class LoggedOutHome extends React.PureComponent {
  renderTitleBar() {
    const rightItems = [loginItem, applyItem];
    return <TitleBar rightItems={rightItems} />;
  }

  renderHeader() {
    return (
      <div className="description text-center">
        <h1 className="header">
          the alumni-powered<br />
          scholarship
        </h1>
        <p>
          built by<br />
          fullstack academy alumni for future alumni
        </p>
      </div>
    );
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
