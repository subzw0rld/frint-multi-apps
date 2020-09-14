import { CART } from '../constants';

export function addtocart(cart) {
    return {
        type: CART,
        cart
    }
};