import React from 'react';

export default class Form extends React.PureComponent {
  renderInputs() {
    return (
      <div>
        <input
          className="input"
          placeholder="Email Address"
        />
        <input
          className="input extra-margin"
          type="password"
          placeholder="Password"
        />
        <button
          className="btn primary large"
          onClick={this.props.onSubmit}
        >
          {this.props.buttonText}
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="form">
        <h1>{this.props.title}</h1>
        {this.renderInputs()}
        {this.props.extraInfo}
      </div>
    );
  }
}

Form.propTypes = {
  title: React.PropTypes.string.isRequired,
  buttonText: React.PropTypes.string.isRequired,
  extraInfo: React.PropTypes.node,
  onSubmit: React.PropTypes.func,
}
