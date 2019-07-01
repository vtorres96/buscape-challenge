import React, { Component } from 'react';

import { ImgList } from './ImagesListStyle'
import noPhoto from '../../assets/img/no-photo.png'
export default class ImagesList extends Component {

    useDefaultImg = event => {
        this.setState({ image: event.target.src = noPhoto })
    }

    render(){
        return ( 
            <ImgList>
                { this.props.images.map(image => ( 
                    <ul className="images-list">
                        <li 
                            key={image}
                            className="items"
                        >
                            <img 
                                className="image" 
                                src={image} 
                                alt={this.props.alt}         
                                onError={this.useDefaultImg} 
                            />
                        </li>
                    </ul>
                ))}
            </ImgList>
        );
    }
  }
