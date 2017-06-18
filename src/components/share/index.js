import React, { Component } from 'react';
import './style/share.scss';

export default class Share extends Component {
    render() {
        return (
            <div className="share-container">
                <a href="#"><span className="share-icon"/></a>
                Share this item! 
            </div>
        );
    }
}