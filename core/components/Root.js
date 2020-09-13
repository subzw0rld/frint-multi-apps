import React, { Component } from 'react';
import { Region } from 'frint-react';

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="seven columns">
                        <h4>Product Details</h4>
                        <Region name="main" />
                    </div>

                    <div className="five columns">
                        <h4>Order Summary</h4>
                        <Region name="sidebar" />
                    </div>
                </div>
            </div>
        );
    }
}