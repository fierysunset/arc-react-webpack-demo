import React, { Component } from 'react';
import './style.scss';

export default class CornifyButton extends Component {
    cornify(e) {
        e.preventDefault();
        cornify_add();
    }

    render() {
        return (
            <div className="cornify-button">
                <a href="#" onClick={this.cornify.bind(this)}>
                    <img src="http://www.cornify.com/assets/cornify-button.png" alt="Cornify" />
                </a>
                <script type="text/javascript" src="http://www.cornify.com/js/cornify.js">
                </script>
            </div>
        );
    }
}