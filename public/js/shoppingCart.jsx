import React, {Component} from 'react';

export default class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state= {items: []};
        this.addItem = this.addItem.bind(this);
        this.itemNameChanged = this.itemNameChanged.bind(this);
    }

    addItem() {
        var items = this.state.items;
        items.push(this.state.itemName);
        this.setState({items: items});
    }

    itemNameChanged(e){
        this.setState({itemName: e.target.value});
    }

    render() {
        return (
            <div>
              <input type='text' id='itemName' value={this.state.itemName} onChange={this.itemNameChanged}/>
                  <button id='add' onClick= {this.addItem} >Add</button>
            </div>
        );
    }
}
