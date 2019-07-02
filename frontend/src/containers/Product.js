import React, { useState, useEffect } from 'react';
import api from '../services/api'

import './Product.css'

import ImagesList from '../components/Product/ImagesList'
import Image from '../components/Product/Image'
import Details from '../components/Product/Details'

const Product = () => {
    const [visibleItem, setVisibleItem] = useState(0)
    const [data, setData] = useState({ products: [] })

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('products')
            setData({
                products: response.data
            })
        }

        fetchData()
    })

    const handleAddToCart = item => {
        const itemExists = state.cart.items.find(i => i.id === item.id)
        if (itemExists) return
    
        toast('Produto adicionado ao carrinho :)')
    
        dispatch({
          type: 'addItemToCart',
          payload: item
        })
    }

    const handleImageClick = clickedItemIndex => setVisibleItem(clickedItemIndex)

    return (
        <div className="container">
            { data.products.map(product => (
                <div id={product._id} key={product.name} className="product">
                    <ImagesList
                        activeItem={visibleItem}
                        images={product.images}
                        alt={product.name}
                        onClickItem={handleImageClick.bind(this)}
                    />
                    <Image
                        src={product.images[visibleItem]}
                        alt={product.name}
                    />              
                    <Details
                        name={product.name}
                        prices={product.price[0]}
                        onClickAddToCart={handleAddToCart.bind(this, product)}
                    />
                </div>
            ))}
        </div>
    );
  }

  export default Product
