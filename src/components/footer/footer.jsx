import React from 'react';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="info-link">
          Want to Sponser?
          Have questions?
          team@alumni.com
        </div>
        <div className="contact-link">
          about
          contribute
          apply
        </div>
      </div>
    );
  }
}
