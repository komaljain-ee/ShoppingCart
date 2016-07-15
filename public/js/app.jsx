import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './component/shoppingCart.jsx';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import items from './reducer/itemsReducer';
import products from './reducer/productsReducer';

const store = createStore(combineReducers({items,products}));

ReactDOM.render(<Provider store={store}>
                    <ShoppingCart/>
                </Provider>
                , document.getElementById("app"));
