import React from 'react';

import CartItems from './CartItems'
import CartAmount from './CartAmount'

import './Cart.css'

const Cart = () =>{
    return (
        <div className="cart">
            <div className="top-shaddow"></div>
            <CartItems>

            </CartItems>
            <CartAmount>
                
            </CartAmount>
        </div>
    )    
}

export default Cart