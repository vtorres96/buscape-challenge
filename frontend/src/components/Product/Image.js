import React from 'react'

import './ImageStyle.css'

const Image = ({
    src, alt
}) => {
    return (
        <div className="list-image-view">
            <div className="media">
                <img
                    className="image-view"
                    src={src}
                    alt={alt}
                />
            </div>            
        </div>
    );
}

export default Image
