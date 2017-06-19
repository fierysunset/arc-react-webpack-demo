import React, { Component } from 'react';
import './color-changing.scss';
import './style/color-changing.scss';

export default class ColorChanging extends Component {
    render() {
        return (
            <div className="color-changing">
                This text is <span className="color-text"></span> in <span className="device-type"></span>
            </div>
        );
    }
}