import React, { Component } from 'react';

import CartItems from './CartItems'
import CartAmount from './CartAmount'

import { CartStyle } from './CartStyle'

export default class Cart extends Component {
  render() {
    return (
        <CartStyle>
            <div className="topShaddow"></div>
            <CartItems>

            </CartItems>
            <CartAmount>
                
            </CartAmount>
        </CartStyle>
    )    
  }
}
