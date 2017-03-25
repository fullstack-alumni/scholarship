import React from 'react';

import Footer from 'components/footer/footer';
import TitleBar from 'components/title_bar/title_bar';
import { applyItem } from 'components/title_bar/title_bar_item';

export default class Login extends React.PureComponent {
  renderForm() {
    return (
      <div className="form">
        <input
          className="input"
          placeholder="Email Address"
        />
        <input
          className="input extra-margin"
          type="password"
          placeholder="Password"
        />
        <button className="btn primary large">
          See Who You're Helping
        </button>
      </div>
    );
  }

  renderExtraText() {
    return (
      <div>
        <div>
          <a>Sign up</a> as a doner
        </div>
        <div>
          <a>Apply</a> for a scholarship
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <TitleBar rightItems={[applyItem]} />
        <div className="body-with-title-bar container">
          <div clasName="row">
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 text-center">
              <h1>Doner?</h1>
              {this.renderForm()}
              {this.renderExtraText()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
