import React from 'react';

import { DetailsStyle } from './DetailsStyle'

export default function Details() {
    return (
        <DetailsStyle>
            <div className="title">
                Teste
                <i className="far fa-heart"></i>
            </div>
            <div className="call-action">
                <div className="values">
                    <span className="installments">
                    R$
                        <span className="amount">
                            100
                        </span>
                    </span>
                    <span>
                    ou 
                        <span className="in-cash">
                            90
                        </span>
                    à vista
                    </span>
                </div>
                <div className="btn-add-cart">
                    Adicionar ao carrinho
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>         
        </DetailsStyle>
    );
  }
