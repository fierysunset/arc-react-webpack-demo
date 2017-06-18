import React, { Component } from 'react';
import './color-changing.css';
import './style/color-changing.css';

export default class ColorChanging extends Component {
    render() {
        return (
            <div className="color-changing">
                The text here will be <span className="color-text"></span> in <span className="device-type"></span>
            </div>
        );
    }
}