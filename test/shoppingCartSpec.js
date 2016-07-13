import React from 'react';
import ShoppingCart from '../public/js/component/shoppingCart';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe("Shopping Cart", () => {
    it("should render list of items", () => {
        const wrapper = mount(<ShoppingCart/>);
        expect(wrapper.props.items.size()).to.equal(5);
    })
});