import React, { Component } from 'react';

import { ImgList } from './ImagesListStyle'
export default class ImagesList extends Component {

    render(){
        return ( 
            <ImgList>
                { this.props.images.map(image => ( 
                    <ul className="images-list">
                        <li className="items" key={image}>
                            <img src={image} className="image" alt={this.props.alt} />
                        </li>
                    </ul>
                ))}
            </ImgList>
        );
    }
  }
