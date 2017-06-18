import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="ebay-logo">
                    <img width="250" height="200" src="http://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png"/>
                </div>

                <input placeholder="Search..."/>

                <button>Search</button>
            </div>
        );
    }
}