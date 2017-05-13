import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../components/hello-world'

class Index extends Component {
    render() {
        return(
            <HelloWorld/>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('main-content'));
