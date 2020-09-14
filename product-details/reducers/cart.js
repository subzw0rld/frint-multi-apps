import { CART } from '../constants';

const INITIAL_STATE = {
    value: undefined
};
export default function cart(state = INITIAL_STATE , action) {
    switch (action.type) {
        case CART:
            return Object.assign({}, {
                value: action.cart
            });

        default:
            return state;
    }
};