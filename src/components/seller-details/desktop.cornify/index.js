import React, { Component } from 'react';
import CornifyButton from 'components/cornify-button';
import './seller-details.scss';

export default class SellerDetails extends Component {
    render() {
        return (
            <div>
                <div className="seller-details">
                    <h4>Seller Information</h4>
                    <a href="#">SomeAwesomeName</a><br/>
                    101.1% Positive feedback
                </div>

                <CornifyButton/>
            </div>
        );
    }
}