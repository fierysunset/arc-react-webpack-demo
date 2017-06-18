import React, { Component } from 'react';
import './style/item-actions.css';

export default class ItemActions extends Component {
    render() {
        return (
            <div className="item-actions">
                <button>Buy it now</button>
                <button>Add to cart</button>
            </div>
        );
    }
}