import React from 'react';
import HelloWorld from '../public/js/helloWorld';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe("Hello World", () => {
   it("should render Hello world", () => {
        const wrapper = mount(<HelloWorld/>);
        expect(wrapper.contains(<div className="hello-world">Hello World!!!</div>)).to.equal(true);
   })
});