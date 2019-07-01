import React, { Component } from 'react';

import { Img } from './ImageStyle'
export default class Image extends Component {
    render(){
        return (
            <Img>
                <div className="media">
                    <img
                        className="image-view"
                        src={this.props.src}
                        alt={this.props.alt}
                    />
                </div>            
            </Img>
        );
    }
  }
