import React from 'react';

import { Img } from './ImageStyle'

export default function Image() {
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
