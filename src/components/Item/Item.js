import React, { Component } from 'react'
import './item.css'

export class Item extends Component {
  render() {
    return (
      <div className="main-carts">
        <div className="img-body">
          <img src={"/img/item/" + this.props.item.img} alt={this.props.item.namecarts} className="carts-img" />
        </div>
        <div className="carts-footer">
            <h2>{this.props.item.namecarts}</h2>
            <p>{this.props.item.price}$</p>
            <button className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>+</button>
        </div>
      </div>
      
    )
  }
}

export default Item