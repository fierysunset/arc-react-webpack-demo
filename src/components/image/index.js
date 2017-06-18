import React, { Component } from 'react';
import './style/image.css';

export default class Image extends Component {
    render() {
        return (
            <div className="image-container">
                {/* Normal image size for desktop */}
                <img src="http://i.ebayimg.com/images/g/9aYAAOSwoydWsbPg/s-l1600.jpg"/>
            </div>
        );
    }
}