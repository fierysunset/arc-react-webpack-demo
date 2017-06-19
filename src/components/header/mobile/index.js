import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overlayOpen: false
        }
    }

    closeSearchOverlay(e) {
        this.setState({
            overlayOpen: false
        })
    }

    openSearchOverlay(e) {
        this.setState({
            overlayOpen: true
        })
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="ebay-logo">
                        <img src="http://ir.ebaystatic.com/pictures/aw/pics/mobile/images/logo_new_d_v2.png"/>
                    </div>

                    <span className="icon-container">
                        <span className="icon-button icon-search" onClick={this.openSearchOverlay.bind(this)}/>
                        <span className="icon-button icon-profile"/>
                        <span className="icon-button icon-shopcart"/>
                    </span>
                </div>

                <div className={'search-overlay' + (!this.state.overlayOpen ? ' hide' : '')}>
                    <div className="search-row">
                        <input placeholder="Search..."/>

                        <button>
                            <span className="icon-button icon-search-white"></span>
                        </button>

                        <a className="cancel" onClick={this.closeSearchOverlay.bind(this)} href="javascript:;">Cancel</a>
                    </div>
                </div>
            </div>
        );
    }
}