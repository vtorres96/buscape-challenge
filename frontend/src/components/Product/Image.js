import React, { Component } from 'react';

import { Img } from './ImageStyle'
export default class Image extends Component {
    render(){
        return (
            <Img>
                <div className="wrapper">
                    <div className="media">
                        <img
                            className="image-view"
                            src=""
                            alt=""
                        />
                    </div>            
                </div>
            </Img>
        );
    }
  }
