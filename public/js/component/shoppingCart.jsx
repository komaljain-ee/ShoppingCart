import React, {Component} from 'react';
import {connect} from 'react-redux';

const ShoppingCart = ({items})=>  (
            <div>
                <ul>
                    {items.map((item) => {
                        return <li key={item.id}>
                            <span>{item.name}</span>
                            <button>Add</button>
                        </li>
                    })}
                </ul>
            </div>
        );


const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};


export default connect(mapStateToProps)(ShoppingCart)