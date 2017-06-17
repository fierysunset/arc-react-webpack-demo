import React, { Component } from 'react';
import Breadcrumbs from 'components/breadcrumbs';
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
                <Breadcrumbs/>

                <div className="main-content">
                    <div className="column image-col">
                        <Image/>
                    </div>
                    <div className="details flex1">
                        <ItemTitle/>
                        <div className="column">
                            <div className="column item-details-container flex1">
                                <ItemDetails/>
                                <ItemActions/>
                            </div>
                            <div className="column">
                                <SellerDetails/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}