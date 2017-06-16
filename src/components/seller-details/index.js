import React, { Component } from 'react';
import './style/seller-details.css';

export default class SellerDetails extends Component {
    render() {
        return (
            <div className="seller-details">
                <h5>Seller Information</h5>
                <a href="#">SomeAwesomeSellerName</a><br/>
                Over 9000% Positive feedback
            </div>
        );
    }
}