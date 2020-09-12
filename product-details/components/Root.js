import React, { Component } from 'react';
import { observe, streamProps } from 'frint-react';

import { incrementCounter, decrementCounter } from '../actions/counter';
import { changeText } from '../actions/text';
import { GREEN_TEXT, RED_TEXT } from '../constants';

class Root extends Component {
    render() {
        const codeStyle = {
            color: this.props.color,
            backgroundColor: this.props.color
        };
console.log("ppp---", this.props)
        return (
            <div>
                <h5>App: Foo</h5>

                <p>
                    Counter value in
                    <strong>Foo</strong>:
                    <code>{this.props.counter}</code>
                </p>

                <div>
                    <button className="button button-primary" onClick={() => this.props.incrementCounter()}> + </button>
                    <button className="button" onClick={() => this.props.decrementCounter()}> - </button>
                </div>
                <p>
                    Color value from
                    <strong>Bar</strong>:
                    <code style={codeStyle}>{this.props.color}</code>
                </p>

                <div>
                    <button className="button"
                        style={{ borderColor: '#F88' }}
                        onClick={() => this.props.changeText(GREEN_TEXT)}>
                        64GB
                    </button>

                    <button className="button"
                        style={{ borderColor: '#F88', marginLeft : "20px" }}
                        onClick={() => this.props.changeText(RED_TEXT)}>
                        128GB
                    </button>
                </div>
            </div>
        );
    }
}

export default observe((app) => {
    const store = app.get('store');
    
    return streamProps()
        .setDispatch({ incrementCounter, decrementCounter, changeText }, store)
        .set(
            store.getState$(),
            state => ({ counter: state.counter.value })
        )
        .set(
            store.getState$(),
            state => ({ text: state.text.value })
        )
        .set(
            app.getAppOnceAvailable$('OrderSummary'),
            barApp => barApp.get('store').getState$(),
            barState => ({ color: barState.color.value })
        )

        .get$();
})(Root);