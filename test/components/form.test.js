import { mockDOM, setupDOM } from './../frontend_utils';
mockDOM();

import { expect } from 'chai';
import sinon from 'sinon';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Form from './../../src/components/form';

describe('Form', () => {
  setupDOM();

  describe('render', () => {
    it('should render the email and password inputs', () => {
      const component = TestUtils.renderIntoDocument(<Form
        title="hello"
        buttonText="blah"
      />);
      const inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
      expect(inputs.length).to.equal(2);
      expect(inputs.filter((input) => {
        return input.getAttribute('placeholder') == 'Email Address';
      }).length).to.equal(1);
      expect(inputs.filter((input) => {
        return (
          input.getAttribute('placeholder') == 'Password'
          && input.getAttribute('type') == 'password'
        );
      }).length).to.equal(1);
    });

    it('should render a button with correct text', () => {
      const buttonText = 'blah';
      const component = TestUtils.renderIntoDocument(<Form
        title="hello"
        buttonText={buttonText}
      />);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
      expect(button.innerHTML).to.equal(buttonText);
    });
  });

  describe('interaction', () => {
    it('runs onSubmit when button is clicked', () => {
      const onSubmit = sinon.spy();
      const component = TestUtils.renderIntoDocument(<Form
        title="hello"
        buttonText="blah"
        onSubmit={onSubmit}
      />);
      const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
      TestUtils.Simulate.click(button);
      expect(onSubmit.calledOnce).to.be.true;
    });
  });
});
