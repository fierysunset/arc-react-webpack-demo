import React, {Component} from 'react';
import HelloWorld from 'components/hello-world';

export default class DesktopLayout extends Component {
    render() {
        return (
            <div className="app-layout">
                This is the DESKTOP version of app-layout!

                <HelloWorld/>
            </div>
        );
    }
}