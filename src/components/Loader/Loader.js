import React, { Component } from 'react';
import Loader from 'react-loader';
import './Loader.css';

class BasicExample extends Component {
    constructor() {
        super();

        this.state = {
            isLoaded: true
        };
    }

    render() {
        const { isLoaded } = this.state;

        return (
            <div className="loader-wrapper">
            <Loader loaded={isLoaded}>
                    <div class="loader">Loading...</div>
                </Loader>
            </div>
        );
    }
}

export default BasicExample;