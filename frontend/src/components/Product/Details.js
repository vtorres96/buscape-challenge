import React from 'react';

import './Details.css'

const Details = ({
    name, 
    prices, 
    onClickAddToCart
}) => {
        return (
            <div className="details">
                <div className="title">
                    {name}
                    <i className="far fa-heart"></i>
                </div>
                <div className="call-action">
                    <div className="values">
                        <span className="installments">
                            {prices.installments}x
                            <span className="amount">
                               R$ {prices.installmentValue}
                            </span>
                        </span>
                        <span>
                            ou 
                            <span className="in-cash">
                                R$ {prices.value}
                            </span>
                            à vista     
                        </span>
                    </div>
                    <div className="btn-add-cart" onClick={onClickAddToCart.bind(this)}>
                        Adicionar ao carrinho >
                    </div>
                </div>         
            </div>
        );
  }

  export default Details
