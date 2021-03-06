import React from 'react';

import Footer from 'components/footer/footer';
import Form from 'components/form';
import TitleBar from 'components/title_bar/title_bar';
import { applyItem } from 'components/title_bar/title_bar_item';

export default class Login extends React.PureComponent {
  getExtraText() {
    return (
      <p>
        <a href="/signup">Sign up</a> as a doner<br />
        <a href="/apply">Apply</a> for a scholarship
      </p>
    );
  }

  render() {
    return (
      <div>
        <TitleBar rightItems={[applyItem]} />
        <div className="body-with-title-bar container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 text-center">
              <Form
                title="Doner?"
                buttonText="See Who You're Helping"
                extraInfo={this.getExtraText()}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
