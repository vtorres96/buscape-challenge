import React from 'react';
import classNames from 'classnames'

import './ImagesList.css'
import { items, active } from './ImagesList.css'

import noPhoto from '../../assets/img/no-photo.png'

const ImagesList = ({
    activeItem,
    images,
    alt,
    onClickItem,
}) => {

    const useDefaultImg = event => {
        event.target.src = noPhoto 
    }

    return (
    <div className="images">
        <ul className="images-list">
            { 
                images.map((src, index) => {
                    const classes = classNames(items, {
                        [active]: index === activeItem
                    })

                    return ( 
                        <li 
                            key={src}
                            className={classes}
                            onClick={onClickItem.bind(this, index)}
                        >
                            <img 
                                className="items" 
                                src={src} 
                                alt={alt}         
                                onError={useDefaultImg.bind(this)} 
                            />
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
  }

  export default ImagesList
