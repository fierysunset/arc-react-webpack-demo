import React, { Component } from 'react';
import './style/item-details.css';

export default class ItemDetails extends Component {
    render() {
        return (
            <div className="item-details">
                Price: <b>$12.99</b>
            </div>
        );
    }
}