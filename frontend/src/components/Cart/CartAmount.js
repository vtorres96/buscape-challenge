import React, { Component } from 'react';

import { CartAmountStyle } from './CartAmountStyle'

export default class CartAmount extends Component {
    render() {
        return (
            <CartAmountStyle>
                <div className="subtotal">
                    Subtotal
                </div>
                <div className="values">
                    <div>"installments"x "totalInstallments"</div>
                    <div>ou " totalAmount " à vista</div>
                </div>
            </CartAmountStyle>
        )
    }   
}
