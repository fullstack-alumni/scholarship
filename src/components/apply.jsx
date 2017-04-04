import React from 'react';

import Footer from 'components/footer/footer';
import TitleBar from 'components/title_bar/title_bar';

export default class Apply extends React.PureComponent {
    renderInfo() {
        return (
            <div className="text-center">
                <h1> the application </h1>
                <p> this is what we are looking for blah blah bah </p>
                <p> this is what we are looking for blah blah bah </p>
                <p> this is what we are looking for blah blah bah </p>
                <p>more info about stuff</p>
                <p>more info about stuff</p>
                <p>more info about stuff</p>
            </div>
        );
    }
    renderButton() {
        return(
            <div className="text-center">
                <button className="btn primary large">
                    Apply Now
                </button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <TitleBar/>
                <div className="body-with-title-bar container">
                    {this.renderInfo()}
                    {this.renderButton()}
                </div>
                <Footer/>
            </div>
        );
    }
}
