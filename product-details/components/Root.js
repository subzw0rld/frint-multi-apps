import React, { Component } from 'react';
import { observe, streamProps } from 'frint-react';

import { incrementCounter, decrementCounter } from '../actions/counter';
import { changeText } from '../actions/text';
import { changeColor } from '../actions/color'; 
import { addtocart } from '../actions/cart';

import { GREEN_COLOR, RED_COLOR, WHITE_COLOR, BLACK_COLOR,GREEN_TEXT, RED_TEXT } from '../constants';

const productObj = {}
class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
          quantity: 1,
          colour: '#000000',
          variant: '64GB',
          colorObj :[
            {
                color : WHITE_COLOR,
                selected : false
            },
            // {
            //     color : GREEN_COLOR,
            //     selected : false
            // },
            // {
            //     color : RED_COLOR,
            //     selected : false
            // },
            {
                color : BLACK_COLOR,
                selected : true
            }
          ],
          variantObj : [
            {
                variant : GREEN_TEXT,
                selected : true
            },
            {
                variant : RED_TEXT,
                selected : false
            }
          ]
        }
        productObj.color = this.state.colour;
        productObj.variant = this.state.variant;
        productObj.counter = this.state.quantity;
      }

    changeColor(color) {
        this.state.colorObj.map((item,index) =>{
            item.color === color ? item.selected = true : item.selected = false;
        })
        setTimeout(() => {
            this.setState({ colour : color, colorObj : this.state.colorObj },
            function(){
                productObj.color = this.state.colour;
            })
        }, 10)
       console.log("color---", productObj)
    }
    changeText(variant) {
        this.state.variantObj.map((item,index) =>{
            item.variant === variant ? item.selected = true : item.selected = false;
        })
        setTimeout(() => {
            this.setState({ variant : variant, variantObj : this.state.variantObj },
            function(){
                productObj.variant = this.state.variant;
            })
        }, 10)
        console.log("variant---", productObj)
    }
    incrementItem() {
        setTimeout(() => {
            this.setState(prevState => { 
                return {quantity: prevState.quantity + 1 }
            },
            function(){
                productObj.counter = this.state.quantity;
            })
        }, 10)
     }
    decrementItem() {
        setTimeout(() => {
            this.setState(prevState => {
                return { quantity: prevState.quantity === 1 ?  prevState.quantity : prevState.quantity - 1 }
            },
            function(){
                productObj.counter = this.state.quantity;
            })
        }, 10)
    }

    render() {
        const codeStyle = {
            color: this.state.colour,
            backgroundColor: this.state.colour
        };
        console.log("obj---", productObj)
        return (
            <div className="shop-tile">
            <div className="shop-tile-header">
               <p className="shop-tile-headline" style={{display:"none"}}><strong><span className="shop-tile-number">1&nbsp;</span><span>Configure device</span></strong></p>
            </div>
            <div className="shop-tile-col margin-b">
               <div className="shop-tile-images"><a href="#" data-toggle="modal"><img src="/public/o2/images/6d61d63f-749e-43c2-b422-dd1fac1654de.png" alt="Apple IPhone X" className="shop-tile-image-product" /></a></div>
            </div>
            <div className="shop-tile-col">
               <p><strong className="shop-tile-marketing-teaser">Triple camera with ultra wide angle</strong></p>
               <h2 className="shop-tile-h2">Apple IPhone X <span>{this.state.variant}</span></h2>
               <div className="reviews-item-meta"></div>
               <article className="article js-enhanced">
                  <div className="body-text">
                     <p>Triple camera, awesome 5.8-inch display and the fastest mobile Apple processor ever: the iPhone 11 Pro. Secure a new Pro smartphone now - ideally with a contract from o2.</p>
                  </div>
                  
               </article>
               <div className="switcher color-switcher">
        <div className="section-switcher-text" data-co-uitest-element="active-color-option-display">
            <strong>Selected color: &nbsp;<span className="selected-variants" style={codeStyle}></span></strong></div>
                  <div className="switcher-box">
                    {this.state.colorObj.map((item, key) => {
                        return <span key={key} className= {item.selected ? "color-variants selected-color" : "color-variants"}
                            style={{ backgroundColor: item.color, color: '#FFF' }}
                            onClick={() => this.changeColor(item.color)}>
                        </span>
                    })}  
                    </div>
               </div>
               <h6> Quantity: </h6>
               <div className="quanty-input">
                   <button className="btn1" onClick={() => this.decrementItem()}> - </button>
                   <div className="quantity-count">{this.state.quantity}</div>
                    <button className="btn2" onClick={() => this.incrementItem()} > + </button>
                </div>
               <div className="switcher select-switcher shop-tile-capacity-switcher">
                    <h6> Selected Variants : {this.state.variant}</h6>
                  <div className="switcher-box">
                        {this.state.variantObj.map((item, key) => {
                            return <button className={item.selected ? "button variants selected-button " : "variants button"}
                                onClick={() => this.changeText(item.variant)}>
                                {item.variant}
                            </button>
                        })}
                     </div>
                  </div>
               
                <div className="switcher select-switcher shop-tile-capacity-switcher">
                   <div className="switcher-box">
                       <div className="shop-tile-col">
                          
                               <button id="addToCartButton" onClick={() => this.props.addtocart(productObj)} className="btn btn-action btn-plain" data-co-uitest-element="to-cart-button" style={{minHeight: "30px"}}>
                                  Add to Cart
                              </button>
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
        .setDispatch({ addtocart }, store)
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
        .set(
            store.getState$(),
            state => ({ cart: state.cart.value })
        )
       /*  .set(
            app.getAppOnceAvailable$('OrderSummary'),
            barApp => barApp.get('store').getState$(),
            barState => ({ color: barState.color.value })
        ) */

        .get$();
})(Root);