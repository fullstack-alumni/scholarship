import { mockDOM, setupDOM } from './../../frontend_utils';
mockDOM();

import { expect } from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Footer from './../../../src/components/footer/footer';

describe('Footer', () => {
  setupDOM();

  it('should be a stateless function', () => {
    const component = TestUtils.renderIntoDocument(<Footer/>);
    expect(component.state).to.be.null;
  });
});
