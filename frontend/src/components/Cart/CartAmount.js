import React from 'react';

import './CartAmount.css'

const CartAmount = () => {
    return (
        <div className="cart-amount">
            <div className="subtotal">
                Subtotal
            </div>
            <div className="values">
                <div>"installments"x "totalInstallments"</div>
                <div>ou " totalAmount " à vista</div>
            </div>
        </div>
    )  
}

export default CartAmount
