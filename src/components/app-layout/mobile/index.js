import React, {Component} from 'react';
import HelloWorld from '../../hello-world';

export default class MobileLayout extends Component {
    render() {
        return (
            <div className="app-layout">
                This is the MOBILE version of app-layout!

                <HelloWorld/>
            </div>
        );
    }
}