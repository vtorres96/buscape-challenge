import React, { Component } from 'react';

import './DetailsStyle.css'

export default class Details extends Component {
    render(){
        return (
            <div className="details">
                <div className="title">
                    {this.props.name}
                    <i className="far fa-heart"></i>
                </div>
                <div className="call-action">
                    <div className="values">
                        <span className="installments">
                            {this.props.prices[0].installments}x
                        </span>
                        <span className="amount">
                        {this.props.prices[0].installmentValue}
                        </span>
                        <span>
                            ou 
                            <span className="in-cash">
                            {this.props.prices[0].value}
                            </span>
                            à vista     
                        </span>
                    </div>
                    <div className="btn-add-cart">
                        Adicionar ao carrinho
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>         
            </div>
        );
    }
  }
