import { mockDOM, setupDOM } from './../../frontend_utils';
mockDOM();

import { expect } from 'chai';
import sinon from 'sinon';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TitleBarItem, { TitleBarItemTypes } from './../../../src/components/title_bar/title_bar_item';

const ce = React.createElement;

describe('TitleBarItem', () => {
  setupDOM();
  let props;
  let text;

  beforeEach(() => {
    text = 'hello';
    props = { text };
  });

  describe('render', () => {
    describe('link type', () => {
      let href;
      let anchor;

      beforeEach(() => {
        href = '#';
        props.href = href;
        props.type = TitleBarItemTypes.LINK;
        const component = TestUtils.renderIntoDocument(ce(TitleBarItem, props));
        anchor = TestUtils.findRenderedDOMComponentWithTag(component, 'a');
      });

      it('renders an anchor tag', () => {
        expect(anchor).to.not.be.undefined;
      });

      it('renders correct text', () => {
        expect(anchor.innerHTML).to.equal(text);
      });

      it('has correct href attribute', () => {
        expect(anchor.getAttribute('href')).to.equal(href);
      });
    });

    describe('button type', () => {
      let onClick;
      let button;

      beforeEach(() => {
        onClick = sinon.spy();
        props.type = TitleBarItemTypes.BUTTON;
        props.onClick = onClick;
        const component = TestUtils.renderIntoDocument(ce(TitleBarItem, props));
        button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
      });

      it('renders an button tag', () => {
        expect(button).to.not.be.undefined;
      });

      it('renders correct text', () => {
        expect(button.innerHTML).to.equal(text);
      });

      it('has correct onClick function', () => {
        expect(onClick.calledOnce).to.be.false;
        TestUtils.Simulate.click(button);
        expect(onClick.calledOnce).to.be.true;
      });
    });
  });

});
