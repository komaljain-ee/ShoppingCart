import React from 'react';
import ShoppingCart from '../public/js/shoppingCart';
import {mount} from 'enzyme';
import {expect} from 'chai';

describe("Shopping Cart", () => {

    it('should add an item', () => {
        const wrapper = mount(<ShoppingCart/>);
        wrapper.find('#itemName').simulate('change', {target: {value: 'Soap'}});
        wrapper.find('#add').simulate('click');
        expect(wrapper.state('items')).to.equal(["Soap"]);
    })

});