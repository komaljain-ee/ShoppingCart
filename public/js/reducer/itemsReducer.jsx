import {ADD_ITEM, REMOVE_ITEM} from './../actions/cartActions';

const items = function(state = [], action){
  switch (action.type) {
    case ADD_ITEM:
      let cartItems = [].concat(state);
      cartItems.push({product:action.product, quantity:action.quantity});
      return cartItems;
    case REMOVE_ITEM:
      cartItems = [].concat(state);
      let index = cartItems.indexOf(action.item);
      cartItems.splice(index,1);
      return cartItems;
    default:
      return state;
  }
};

export default items;
