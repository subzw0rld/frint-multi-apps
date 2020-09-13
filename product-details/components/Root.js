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
               <div className="shop-tile-images"><a href="#" data-toggle="modal"><img src="/public/images/6d61d63f-749e-43c2-b422-dd1fac1654de.png" alt="Apple IPhone X" className="shop-tile-image-product" /></a></div>
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
                     {/*  <span className="color-variants"></span>
                      <span className="color-variants"></span>
                      <span className="color-variants"></span>
                      <span className="color-variants"></span> */}
                     {/* <div className="switcher-item color-switcher-item" data-co-uitest-element="select-color-gold"><input readonly="" type="radio" /><label className="color-switcher-item-label "><img className="color-switcher-item-color" src="/public/images/png-iphone-gold-image-data.png" alt="Apple IPhone X" aria-label="png-iphone-gold-image-data.png" title="png-iphone-gold-image-data.png" /></label></div>
                     <div className="switcher-item color-switcher-item" data-co-uitest-element="select-color-Black"><input readonly="" type="radio" checked="" /><label className="color-switcher-item-label "><img className="color-switcher-item-color" src="/public/images/png-iphone-nachtgruen-image-data.png" alt="Apple IPhone X" aria-label="png-iphone-nachtgruen-image-data.png" title="png-iphone-nachtgruen-image-data.png" /></label></div>
                     <div className="switcher-item color-switcher-item" data-co-uitest-element="select-color-night green"><input readonly="" type="radio" /><label className="color-switcher-item-label "><img className="color-switcher-item-color" src="/public/images/png-iphone-nachtgruen-image-data.png" alt="Apple IPhone X" aria-label="png-iphone-nachtgruen-image-data.png" title="png-iphone-nachtgruen-image-data.png" /></label></div>
                     <div className="switcher-item color-switcher-item" data-co-uitest-element="select-color-silver"><input readonly="" type="radio" /><label className="color-switcher-item-label "><img className="color-switcher-item-color" src="/public/images/png-iphone-silber-image-data.png" alt="Apple IPhone X" aria-label="png-iphone-silber-image-data.png" title="png-iphone-silber-image-data.png" /></label></div>
                     <div className="switcher-item color-switcher-item" data-co-uitest-element="select-color-space gray"><input readonly="" type="radio" /><label className="color-switcher-item-label "><img className="color-switcher-item-color" src="/public/images/png-iphone-spacegrey-image-data.png" alt="Apple IPhone X" aria-label="png-iphone-spacegrey-image-data.png" title="png-iphone-spacegrey-image-data.png" /></label></div>
                     <div className="switcher-item color-switcher-item" data-co-uitest-element="select-color-red"><input readonly="" type="radio" /><label className="color-switcher-item-label "><img className="color-switcher-item-color" src="/public/images/color-red-ping.png" alt="Apple IPhone X" aria-label="color-red-ping.png" title="color-red-ping.png" /></label></div> */}
                  </div>
               </div>

               <div>
                   <button className="button" onClick={() => this.props.decrementCounter()} style={{ backgroundColor: '#002e6e' , color: "#ffffff"}}> - </button>
                    <button className="button" onClick={() => this.props.incrementCounter()}> + </button>
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
               <div className="shop-tile-bottom-link"><a className="link-icon-left link-bold"><span className="glyphicon glyphicon-device-add"></span>Select another device</a></div>
            </div>
         </div>
            // <div>
            //     <h5>
            //         Apple iPhone  <span>{this.props.text}</span>
            //     </h5>
            //     <p>
            //         Quantity :  
            //         <span>{this.props.counter}</span>
            //     </p>
                // <p>
                //     Color : 
                //     <code style={codeStyle}>
                //         {this.props.color}
                //     </code>
                // </p>

                // <div>
                //     <button className="button button-primary" onClick={() => this.props.incrementCounter()}> + </button>
                //     <button className="button" onClick={() => this.props.decrementCounter()}> - </button>
                // </div>

                // <div>
                //     <h6> Selection Variants :</h6>
                //     <button className="button"
                //         style={{ borderColor: '#F88' }}
                //         onClick={() => this.props.changeText(GREEN_TEXT)}>
                //         64GB
                //     </button>

                //     <button className="button"
                //         style={{ borderColor: '#F88', marginLeft : "20px" }}
                //         onClick={() => this.props.changeText(RED_TEXT)}>
                //         128GB
                //     </button>
                // </div>
            // </div>
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