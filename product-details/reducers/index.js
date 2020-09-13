import {combineReducers} from 'frint-store';
import counter from './counter';
import text from './text';
import color from './color';

export default combineReducers({
    counter,
    text,
    color
});