import React, { Component } from 'react';
import { Region } from 'frint-react';

export default class Root extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="eight columns">
                        <h4>Product Details</h4>
                        <hr />
                        <Region name="main" />
                    </div>

                    <div className="four columns">
                        <h4>Order Summary</h4>
                        <hr />
                        <Region name="sidebar" />
                    </div>
                </div>
            </div>
        );
    }
}