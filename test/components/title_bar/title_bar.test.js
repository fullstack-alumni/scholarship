import { mockDOM, setupDOM } from './../../frontend_utils';
mockDOM();

import { expect } from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TitleBar from './../../../src/components/title_bar/title_bar';

describe('TitleBar', () => {
  setupDOM();

  describe('render', () => {
    it('should render a passed in left component', () => {
      const div = <div className="testDiv" />;
      const component = TestUtils.renderIntoDocument(<TitleBar leftItems={div} />);
      const foundDiv = TestUtils.findRenderedDOMComponentWithClass(component, 'testDiv');
      expect(foundDiv).to.not.be.undefined;
    });

    it('should render a passed in right component', () => {
      const div = <div className="testDiv" />;
      const component = TestUtils.renderIntoDocument(<TitleBar rightItems={div} />);
      const foundDiv = TestUtils.findRenderedDOMComponentWithClass(component, 'testDiv');
      expect(foundDiv).to.not.be.undefined;
    });

    it('should render both left and right components', () => {
      const div = <div className="testDiv" />;
      const component = TestUtils.renderIntoDocument(<TitleBar rightItems={div} leftItems={div}/>);
      const foundDivs = TestUtils.scryRenderedDOMComponentsWithClass(component, 'testDiv');
      expect(foundDivs.length).to.equal(2);
    });
  });
});
