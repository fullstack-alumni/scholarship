import React from 'react';

import Footer from 'components/footer/footer';
import Form from 'components/form';
import TitleBar from 'components/title_bar/title_bar';
import { applyItem, loginItem } from 'components/title_bar/title_bar_item';

export default class Login extends React.PureComponent {
  render() {
    return (
      <div>
        <TitleBar rightItems={[loginItem, applyItem]} />
        <div className="body-with-title-bar container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12 text-center">
              <Form
                title="Sign Up to Donate"
                buttonText="Change a Life"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
