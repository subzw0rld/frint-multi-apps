import React, { Component } from 'react';
import { observe, streamProps } from 'frint-react';

import { changeColor } from '../actions/color';
import { GREEN_COLOR, RED_COLOR } from '../constants';

class Root extends Component {
    render() {
        const codeStyle = {
            color: this.props.color,
            backgroundColor: this.props.color
        };
console.log("props-bar ", this.props)
        return (
            <div>
                <h5>App: Bar</h5>

                <p>
                    Color value in <strong>Bar</strong>:
                    <code style={codeStyle}>
                        {this.props.color}
                    </code>
                </p>

                <div>
                    <button className="button"
                        style={{ backgroundColor: GREEN_COLOR, color: '#FFF' }}
                        onClick={() => this.props.changeColor(GREEN_COLOR)}>
                        Green
                    </button>

                    <button className="button"
                        style={{ backgroundColor: RED_COLOR, color: '#FFF' }}
                        onClick={() => this.props.changeColor(RED_COLOR)}>
                        Red
                    </button>
                </div>

                <p>
                    Counter value from <strong>Foo</strong>:
                    <code>{this.props.counter}</code>
                    <span>{this.props.text}</span>
                </p>
            </div>
        )
    }
}

export default observe((app) => {
    const store = app.get('store');

    return streamProps()
        .setDispatch(
            { changeColor },
            store
        )

        .set(
            store.getState$(),
            state => ({ color: state.color.value })
        )

        .set(
            app.getAppOnceAvailable$('ProductDetails'),
            fooApp => fooApp.get('store').getState$(),
            fooState => ({ counter: fooState.counter.value })  
        )

        .set(
            app.getAppOnceAvailable$('ProductDetails'),
            fooApp => fooApp.get('store').getState$(),
            fooState => ({ text: fooState.text.value })   
        )
        .get$();
})(Root);