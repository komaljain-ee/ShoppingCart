import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddItem from './addItem';
import {removeItem} from './../actions/cartActions';

const ShoppingCart = ({items, removeItem})=>  (
            <div>
              <AddItem/>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Sub total</th>
                  <th></th>
                </tr>
                    {items.map((item) => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.product.price}</td>
                            <td><button onClick={()=>removeItem(item)}>Remove</button></td>
                        </tr>
                    ))}

                </table>
            </div>
        );


const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      removeItem: (item) => {
        dispatch(removeItem(item));
      }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
