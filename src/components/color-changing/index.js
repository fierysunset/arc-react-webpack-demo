import React, { Component } from 'react';
import './color-changing.scss';
import './style/color-changing.scss';

export default class ColorChanging extends Component {
    render() {
        return (
            <div className="color-changing">
                The text here will be <span className="color-text"></span> in <span className="device-type"></span>
            </div>
        );
    }
}