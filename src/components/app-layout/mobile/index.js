import React, { Component } from 'react';
import ColorChanging from 'components/color-changing';
import Header from 'components/header';
import Image from 'components/image';
import ItemActions from 'components/item-actions';
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
                <ItemActions/>
                <SellerDetails/>
                <ColorChanging/>

                <br/><br/><br/>
            </div>
        );
    }
}