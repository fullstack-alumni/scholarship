import { mockDOM, setupDOM } from './../frontend_utils';
mockDOM();

import { expect } from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Apply from './../../src/components/apply.jsx';

describe('Apply', () => {
    setupDOM();

  describe('render', () => {
        it('should render with H1 of "the application" ', () => {
            const component = TestUtils.renderIntoDocument(<Apply/>)
            const header = TestUtils.findRenderedDOMComponentWithTag(component,'h1')
            expect(header.innerHTML).to.equal(" the application ")
        })
        it('should render button with corrent text', () => {
            const component = TestUtils.renderIntoDocument(<Apply/>)
            const button = TestUtils.findRenderedDOMComponentWithTag(component,'button')
            expect(button.innerHTML).to.equal("Apply Now")
        })
    })

});