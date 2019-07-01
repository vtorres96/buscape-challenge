import React, { Component } from 'react';

import './ImageStyle.css'
export default class Image extends Component {
    render(){
        return (
            <div className="list-image-view">
                <div className="media">
                    <img
                        className="image-view"
                        src={this.props.src}
                        alt={this.props.alt}
                    />
                    {console.log(this.props.src)}
                </div>            
            </div>
        );
    }
  }
