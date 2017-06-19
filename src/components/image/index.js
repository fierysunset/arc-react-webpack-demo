import React, { Component } from 'react';
import './style/image.scss';

export default class Image extends Component {
    render() {
        return (
            <div className="image-container">
                {/* To be replaced by CSS according to device size */}
                {/* Title added for accessibiity purposes (instead of img alt tag) */}
                <div className="item-image" title="image of stuffed husky"></div>

                <div className="sunglasses"></div>
            </div>
        );
    }
}