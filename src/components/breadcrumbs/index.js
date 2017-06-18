import React, { Component } from 'react';
import './breadcrumbs.scss';

export default class Breadcrumbs extends Component {
    render() {
        return (
            <div className="breadcrumbs">
                <a href="#">Back to search resuts</a> | Listed in category:&nbsp;&nbsp;
                <a href="#">Toys & Hobbies</a> > <a href="#">Stuffed Animals</a> > <a href="#">Other Stuffed Animals</a>
            </div>
        );
    }
}