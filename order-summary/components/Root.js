import React, { Component } from 'react';
import { observe, streamProps } from 'frint-react';

import { changeColor } from '../actions/color';
import { GREEN_COLOR, RED_COLOR } from '../constants';

let product;  

class Root extends Component {
    render() {
        product = this.props;
    let codeStyle; 
    codeStyle = {
        color: product.cart !== undefined ? this.props.cart.color : '',
        backgroundColor: product.cart !== undefined ? this.props.cart.color : '',
    };
    let amount = product.cart !== undefined ? this.props.cart.counter * 150 : 150,
    tax = 34, delivery = 19 ;
    let total = amount + delivery + tax;
console.log("props-bar ", this.props.cart)
        return (
            product.cart !== undefined ? 
            <div class="shop-tile-scroll-wrapper">
            <div class="shop-tile shop-tile-price-summary " style={{position: "relative"}}>
               {/* <span class="shop-tile-slide-link glyphicon glyphicon-arrow-down"></span> */}
               <div class="shop-tile-col">
                  {/* <div class="shop-tile-slide-content">
                     <h2 class="shop-tile-h3">Order Summery</h2>
                  </div> */}
                  
                  <div class="row">
                      <div class="col-md-2">
                          <div class="shop-tile-images"><a href="#" data-toggle="modal"><img src="/public/o2/images/6d61d63f-749e-43c2-b422-dd1fac1654de.png" alt="Apple IPhone X" class="shop-tile-image-product" /></a></div>
                      </div>
                      <div class="col-md-6">
                          <div class="shop-tile-slide-content">
                              <h2 class="shop-tile-h3">Apple IPhone X <span>{this.props.cart.variant}</span></h2>
                              <p>Qty: &nbsp;<span>{this.props.cart.counter}</span> </p>
                              <p>Color: &nbsp;<span className="selected-variants" style={codeStyle}></span> </p>
                           </div>
                      </div>
                      <div class="col-md-4">
                          <span>{`€${amount}`}</span>
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
                              <span>{`€${amount}`}</span>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-8">
                              <div class="shop-tile-slide-content">
                                  <p>Delivery Charges</p>
                               </div>
                          </div>
                          <div class="col-md-4">
                              <span>{`€${delivery}`}</span>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-8">
                              <div class="shop-tile-slide-content">
                                  <p >Tax</p>
                               </div>
                          </div>
                          <div class="col-md-4">
                              <span>{`€${tax}`}</span>
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
                              <span>{`€${total}`}</span>
                          </div>
                      </div>
                   </div>
                    
                  </div>
               </div>
            </div>
            : <div className="shop-tile-scroll-wrapper">
                <div className="shop-tile shop-tile-price-summary " style={{position: "relative"}}>
                <div className="cart-empty"> Cart is empty</div>
                </div>
            </div>
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

        .set(
            app.getAppOnceAvailable$('ProductDetails'),
            fooApp => fooApp.get('store').getState$(),
            fooState => ({ cart: fooState.cart.value })
        )

        .get$();
})(Root);