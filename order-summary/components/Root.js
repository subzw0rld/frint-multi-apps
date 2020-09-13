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
        let amount = this.props.counter * 150,
        tax = 34, delivery = 19 ;
        let total = amount + delivery + tax;
        
console.log("props-bar ", this.props)
        return (
            <div class="shop-tile-scroll-wrapper">
            <div class="shop-tile shop-tile-price-summary " style={{position: "relative"}}>
               <span class="shop-tile-slide-link glyphicon glyphicon-arrow-down"></span>
               <div class="shop-tile-col">
                  <div class="shop-tile-slide-content">
                     <h2 class="shop-tile-h3">Order Summery</h2>
                  </div>
                  
                  <div class="row">
                      <div class="col-md-2">
                          <div class="shop-tile-images"><a href="#" data-toggle="modal"><img src="/public/images/6d61d63f-749e-43c2-b422-dd1fac1654de.png" alt="Apple IPhone X" class="shop-tile-image-product" /></a></div>
                      </div>
                      <div class="col-md-6">
                          <div class="shop-tile-slide-content">
                              <h2 class="shop-tile-h3">Apple IPhone X <span>{this.props.text}</span></h2>
                              <p>Qty:<span>{this.props.counter}</span> </p>
                              <p>Color:<span className="selected-variants" style={codeStyle}></span> </p>
                           </div>
                      </div>
                      <div class="col-md-4">
                          <span>{`$${amount}`}</span>
                      </div>
                    </div>
                    <div class="space-line-30"></div>
                    <div class="shop-tile-slide-content">
                      <h2 class="shop-tile-h3">Price Details:</h2>
                  
                      <div class="row">
                          <div class="col-md-8">
                              <div class="shop-tile-slide-content">
                                  <p>Price</p>
                               </div>
                          </div>
                          <div class="col-md-4">
                              <span>{`$${amount}`}</span>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-8">
                              <div class="shop-tile-slide-content">
                                  <p>Delivery Charges</p>
                               </div>
                          </div>
                          <div class="col-md-4">
                              <span>{`$${delivery}`}</span>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-8">
                              <div class="shop-tile-slide-content">
                                  <p >Tax</p>
                               </div>
                          </div>
                          <div class="col-md-4">
                              <span>{`$${tax}`}</span>
                          </div>
                      </div>
                      <div class="seprator"> </div>
                      <div class="row">
                          <div class="col-md-8">
                              <div class="shop-tile-slide-content">
                                  <p>Total</p>
                               </div>
                          </div>
                          <div class="col-md-4">
                              <span>{`$${total}`}</span>
                          </div>
                      </div>
                   </div>
                    
                  </div>
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

            //     <div>
            //         <button className="button"
            //             style={{ backgroundColor: GREEN_COLOR, color: '#FFF' }}
            //             onClick={() => this.props.changeColor(GREEN_COLOR)}>
            //             Green
            //         </button>

            //         <button className="button"
            //             style={{ backgroundColor: RED_COLOR, color: '#FFF' }}
            //             onClick={() => this.props.changeColor(RED_COLOR)}>
            //             Red
            //         </button>
            //     </div>

                
            // </div>
        )
    }
}

export default observe((app) => {
    const store = app.get('store');

    return streamProps()
        /* .setDispatch(
            { changeColor },
            store
        )

        .set(
            store.getState$(),
            state => ({ color: state.color.value })
        ) */

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
        .set(
            app.getAppOnceAvailable$('ProductDetails'),
            fooApp => fooApp.get('store').getState$(),
            fooState => ({ color: fooState.color.value })
        )
        .get$();
})(Root);