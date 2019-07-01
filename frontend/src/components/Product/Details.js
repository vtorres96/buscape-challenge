import React from 'react';

import './DetailsStyle.css'

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
                        </span>
                        <span className="amount">
                        {prices.installmentValue}
                        </span>
                        <span>
                            ou 
                            <span className="in-cash">
                            {prices.value}
                            </span>
                            à vista     
                        </span>
                    </div>
                    <div className="btn-add-cart" onClick={onClickAddToCart.bind(this)}>
                        Adicionar ao carrinho
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>         
            </div>
        );
  }

  export default Details
