import React from 'react';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer container">
        <div className="row">
          <div className="col-sm-12 col-md-2 info-link">
            <div>
              Want to Sponser?
            </div>
            <div>
              Have questions?
            </div>
            <div>
              team@alumni.com
            </div>
          </div>
          <div className="col-sm-12 col-md-2 contact-link">
            <div>
              about
            </div>
            <div>
              contribute
            </div>
            <div>
              apply
            </div>
          </div>
        </div>
      </div>
    );
  }
}
