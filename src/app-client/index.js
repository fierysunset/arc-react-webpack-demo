import AppLayout from '../components/app-layout';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
    render() {
        const initialState = window.__INITIAL_STATE__;

        return(
            <AppLayout initialState={initialState}/>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('main-content'));
