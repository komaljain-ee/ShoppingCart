import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from './../actions/cartActions'

class AddItem extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h3>Add New Item</h3>
        <select type="text" ref="product">
        { this.props.products.map(product => (
          <option key={product.id} value={product.id}>{product.name}</option>
        ))}
        </select>
        <input type="number" ref="quantity"/>
        <button onClick={()=>
            this.props.addItem({
              product: this.props.products.find(p => this.refs.product.value == p.id),
              quantity: this.refs.quantity.value
              })
            }>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps=(dispatch) => {
  return {
    addItem: (product, quantity) => {
      dispatch(addItem(product, quantity));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
