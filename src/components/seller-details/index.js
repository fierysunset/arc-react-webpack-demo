import React, { Component } from 'react';
import './style/seller-details.scss';

export default class SellerDetails extends Component {
    render() {
        return (
            <div className="seller-details">
                <h4>Seller Information</h4>
                <a href="#">SomeAwesomeName</a><br/>
                101.1% Positive feedback
            </div>
        );
    }
}