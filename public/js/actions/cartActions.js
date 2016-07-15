export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = function(product, quantity){
  return { type: ADD_ITEM, quantity: quantity, ...product};
};

export const removeItem = function(item){
  return { type: REMOVE_ITEM, item: item};
}
