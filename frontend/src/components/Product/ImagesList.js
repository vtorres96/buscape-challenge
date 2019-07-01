import React, { Component } from 'react';

import './ImagesListStyle.css'

import noPhoto from '../../assets/img/no-photo.png'
export default class ImagesList extends Component {

    useDefaultImg = event => {
        this.setState({ image: event.target.src = noPhoto })
    }

    handleImage = event => {
        this.setState({

        })
    }


    render(){
        return ( 
            <div className="images">
                { this.props.images.map(image => ( 
                    <ul className="images-list">
                        <li 
                            key={image}
                            className="items"
                            onClick={this.props.onClickItem}
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
            </div>
        );
    }
  }
