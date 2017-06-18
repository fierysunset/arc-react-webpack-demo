import React, { Component } from 'react';
import './style/image.css';

export default class Image extends Component {
    render() {
        return (
            <div className="image-container">
                {/* Smaller image size for mobile */}
                <img src="http://i.ebayimg.com/00/s/NzY4WDgyOQ==/z/9aYAAOSwoydWsbPg/$_1.JPG"/>
            </div>
        );
    }
}