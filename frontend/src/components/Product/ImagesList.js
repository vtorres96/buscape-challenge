import React, { Component } from 'react';

import { ImgList } from './ImagesListStyle'

export default class ImagesList extends Component {
    render(){
        return (
            <ImgList>
                <ul className="images-list">
                    <li className="items">
                        <img src="" className="image" alt="" />
                    </li>
                </ul>
            </ImgList>
        );
    }
  }
