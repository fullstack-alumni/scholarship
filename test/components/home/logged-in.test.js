import { mockDOM, setupDOM } from './../../frontend_utils';
mockDOM();

import { expect } from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import LoggedInHome from './../../../src/components/home/logged-in';

describe('LoggedInHome', () => {
  setupDOM();

  it('should be a stateless function', () => {
    const component = TestUtils.renderIntoDocument(<LoggedInHome />);
    expect(component).to.be.null;
  });
});
