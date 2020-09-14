import {combineReducers} from 'frint-store';
import counter from './counter';
import text from './text';
import color from './color';
import cart from './cart';

export default combineReducers({
    counter,
    text,
    color,
    cart
});