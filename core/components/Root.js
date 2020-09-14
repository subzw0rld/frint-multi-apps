import React, { Component } from 'react';
import { Region } from 'frint-react';

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="seven columns">
                        <h4>Product List</h4>
                        <Region name="main" />
                    </div>

                    <div className="five columns">
                        <h4>Cart Summary</h4>
                        <Region name="sidebar" />
                    </div>
                </div>
            </div>
        );
    }
}