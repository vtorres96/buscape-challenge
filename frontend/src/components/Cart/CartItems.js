import React, { Component } from 'react';

import { ListItems } from './CartItemsStyle'

export default class CartItems extends Component {
  render() {
    return (
        <ListItems>
            <li className="itemWrapper" key="item.id">
            <img
                className="thumb"
                src="item.images[0]"
                alt="item.name"
            />
            <div className="details">
                <span className="title">
                "item.name"
                </span>
                <div className="values">
                <div>"item.price.installments"x "item.price.installmentValue"</div>
                <div>ou "item.price.value" à vista</div>
                </div>
            </div>
            <div className="removeItem" onClick="">
                <button>X</button>
            </div>
            </li>
        </ListItems>
    )
  }
}
