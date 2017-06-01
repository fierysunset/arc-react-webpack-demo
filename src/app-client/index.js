import HelloWorld from '../components/hello-world'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        return(
            <HelloWorld/>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('main-content'));
