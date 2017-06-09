import React, {Component} from 'react';
import './style/hello-world.css';
import AppLayout from '../app-layout';

export default class HelloWorld extends Component {
    render() {
        return (
            <div className="hello-world">
                Hello world :)
                <AppLayout/>
            </div>
        );
    }
}