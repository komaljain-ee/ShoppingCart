import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloWorld.jsx';
import ShoppingCart from './component/shoppingCart.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import items from './reducer/reducer.jsx'

const initialState = {items: [{id:1, name:'Soap', price: 40},
                              {id:2, name:'xyz', price: 400},
                              {id:3, name:'abc', price: 50}
                             ]};

console.log(items);

const store = createStore(items, initialState);

ReactDOM.render(<Provider store={store}>
                    <ShoppingCart/>
                </Provider>
                , document.getElementById("app"));

