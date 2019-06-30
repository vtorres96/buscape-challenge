import React, { Component } from 'react';
import api from '../../services/api'
import io from 'socket.io-client'

import { ProductStyle } from './ProductStyle'
import ImagesList from './ImagesList'
import Image from './Image'
import Details from './Details'

export default class Product extends Component {
    state = {
        product: []
    }

    async componentDidMount() {
        this.registerToSocket()

        const response = await api.get('products')

        this.setState({ product: response.data })
    }

    registerToSocket = () => {
        const socket = io('http://localhost:3000')

        // product
        socket.on('product', newProduct => {
            this.setState({ product: [newProduct, ...this.state.product] })
        })
    }
    
    render(){
        return (
            <div>
                { this.state.product.map(product => (
                    
                    <ProductStyle id={product._id}>
                        <ImagesList
                            activeItem=""
                            images={product.images}
                            alt={product.name}
                            onClickItem=""
                        />
                        <Image
                            src={product.images[""]}
                            alt={product.name}
                        />              
                        <Details
                           name={product.name}
                           installments={product.installments}
                           installmentValue={product.installmentValue}
                           value={product.value}
                           onClickAddToCart="" 
                        />
                    </ProductStyle>
                ))}
            </div>
        );
    }
  }
