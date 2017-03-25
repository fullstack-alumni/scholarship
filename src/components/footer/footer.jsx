import React from 'react';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="col-sm-12 col-md-2 info-link">
            <div className="sponser">
              Want to Sponser?
            </div>
            <div className="questions">
              Have questions?
            </div>
            <div className="email">
              team@alumni.com
            </div>
          </div>
          <div className="col-sm-12 col-md-2 contact-link">
            <div>
              About
            </div>
            <div>
              Contribute
            </div>
            <div>
              Apply
            </div>
          </div>
        </div>
      </div>
    );
  }
}
