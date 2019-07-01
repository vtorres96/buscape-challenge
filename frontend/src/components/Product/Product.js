import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import './ProductStyle.css'
import ImagesList from './ImagesList'
import Image from './Image'
import Details from './Details'

const Product = () => {
    const [data, setData] = useState({ products: [] })

    useEffect(async() => {
        const fetchData = async () => {
            const response = await api.get('products')
    
            setData(response.data);
        };
    
        fetchData();
      });

    /*handleImage = event => {
        const src = event.target.src
        console.log(src)
    }*/

    return (
        <div className="container">
            { data.products.map(product => (
                <div id={product._id} key={product.name} className="product">
                    <ImagesList
                        activeItem=""
                        images={product.images}
                        alt={product.name}
                        onClickItem=""
                    />
                    <Image
                        src={product.images}
                        alt={product.name}
                    />              
                    <Details
                        name={product.name}
                        prices={product.price[0]}
                        onClickAddToCart="" 
                    />
                </div>
            ))}
        </div>
    );
  }

  export default Product
