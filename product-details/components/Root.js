import React, { Component } from 'react';
import { observe, streamProps } from 'frint-react';

import { incrementCounter, decrementCounter } from '../actions/counter';
import { changeText } from '../actions/text';
import { changeColor } from '../actions/color';
import { GREEN_COLOR, RED_COLOR, WHITE_COLOR, BLACK_COLOR,GREEN_TEXT, RED_TEXT } from '../constants';

class Root extends Component {
    render() {
        const codeStyle = {
            color: this.props.color,
            backgroundColor: this.props.color
        };

        return (
            <div className="shop-tile">
            <div className="shop-tile-header">
               <p className="shop-tile-headline"><strong><span className="shop-tile-number">1</span><span>Configure device</span></strong></p>
            </div>
            <div className="shop-tile-col margin-b">
               <div className="shop-tile-images"><a href="#" data-toggle="modal"><img src="/public/o2/images/6d61d63f-749e-43c2-b422-dd1fac1654de.png" alt="Apple IPhone X" className="shop-tile-image-product" /></a></div>
            </div>
            <div className="shop-tile-col">
               <p><strong className="shop-tile-marketing-teaser">Triple camera with ultra wide angle</strong></p>
               <h2 className="shop-tile-h2">Apple IPhone X <span>{this.props.text}</span></h2>
               <div className="reviews-item-meta"></div>
               <article className="article js-enhanced">
                  <div className="body-text">
                     <p>Triple camera, awesome 5.8-inch display and the fastest mobile Apple processor ever: the iPhone 11 Pro. Secure a new Pro smartphone now - ideally with a contract from o2.</p>
                  </div>
                  
               </article>
               <div className="switcher color-switcher">
        <div className="section-switcher-text" data-co-uitest-element="active-color-option-display">
            <strong>Selected color: <span className="selected-variants" style={codeStyle}></span></strong></div>
                  <div className="switcher-box">
                    <span className="color-variants"
                         style={{ backgroundColor: WHITE_COLOR, color: '#FFF' }}
                         onClick={() => this.props.changeColor(WHITE_COLOR)}>
                     </span>
                     <span className="color-variants"
                         style={{ backgroundColor: GREEN_COLOR, color: '#FFF' }}
                         onClick={() => this.props.changeColor(GREEN_COLOR)}>
                     </span>
                     <span className="color-variants"
                         style={{ backgroundColor: RED_COLOR, color: '#FFF' }}
                         onClick={() => this.props.changeColor(RED_COLOR)}>
                     </span>
                     <span className="color-variants"
                         style={{ backgroundColor: BLACK_COLOR, color: '#FFF' }}
                         onClick={() => this.props.changeColor(BLACK_COLOR)}>
                     </span>
                  </div>
               </div>
               <h6> Quantity: </h6>
               <div className="quanty-input">
                   <button className="" onClick={() => this.props.decrementCounter()} style={{color: "#333", height: "22px", padding: "0px 15px", border: "1px solid #fff"}}> - </button>
                    <div className="quantity-count">{this.props.counter}</div>
                    <button className="" onClick={() => this.props.incrementCounter()} style={{color: "#333", height: "22px", padding: "0px 15px", border: "1px solid #fff", float: "right"}}> + </button>
                </div>
               <div className="switcher select-switcher shop-tile-capacity-switcher">
                    <h6> Selection Variants : {this.props.text}</h6>
                  <div className="switcher-box">
                       
                        <button className="button"
                            style={{ borderColor: '#e4e6e8' , color: "#0090d0"}}
                            onClick={() => this.props.changeText(GREEN_TEXT)}>
                            64GB
                        </button>

                        <button className="button"
                            style={{ borderColor: '#e4e6e8', marginLeft : "20px" , color: "#0090d0" }}
                            onClick={() => this.props.changeText(RED_TEXT)}>
                            128GB
                        </button>
                     </div>
                  </div>
               
                <div className="switcher select-switcher shop-tile-capacity-switcher">
                   <div className="switcher-box">
                       <div className="shop-tile-col">
                           <a href="#">
                               <button id="addToCartButton" className="btn btn-action btn-plain" data-co-uitest-element="to-cart-button" style={{minHeight: "30px"}}>
                                  Add to Cart
                              </button></a>
                      </div>
                   </div>
                </div>
            </div>
         </div>
        );
    }
}

export default observe((app) => {
    const store = app.get('store');
    
    return streamProps()
        .setDispatch({ incrementCounter, decrementCounter, changeText, changeColor }, store)
        .set(
            store.getState$(),
            state => ({ counter: state.counter.value })
        )
        .set(
            store.getState$(),
            state => ({ text: state.text.value })
        )
        .set(
            store.getState$(),
            state => ({ color: state.color.value })
        )
       /*  .set(
            app.getAppOnceAvailable$('OrderSummary'),
            barApp => barApp.get('store').getState$(),
            barState => ({ color: barState.color.value })
        ) */

        .get$();
})(Root);