import React, { Component } from 'react';
import DesktopLayout from './desktop';
import MobileLayout from './mobile';

export default class AppLayout extends Component {
    render() {
        const {deviceInfo} = this.props.initialState;

        // Default template is mobile layout
        if (deviceInfo.desktop) {
            return (<DesktopLayout/>);
        } else {
            return (<MobileLayout/>);
        }
    }
}