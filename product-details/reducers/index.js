import {combineReducers} from 'frint-store';
import counter from './counter';
import text from './text';

export default combineReducers({
    counter,
    text
});