import React, { Component } from 'react';
import Header from 'components/header';
import Image from 'components/image';
import ItemDetails from 'components/item-details';
import ItemTitle from 'components/item-title';
import SellerDetails from 'components/seller-details';
import '../app-layout.css';
import './app-layout.css';

export default class AppLayout extends Component {
    render() {
        return (
            <div className="app-layout">
                <Header/>
                <Image/>
                <ItemTitle/>
                <ItemDetails/>
                <SellerDetails/>
            </div>
        );
    }
}