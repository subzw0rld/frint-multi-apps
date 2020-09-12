import { CHANGE_TEXT, DEFAULT_TEXT } from '../constants';

const INITIAL_STATE = {
    value: DEFAULT_TEXT
};

export default function text(state = INITIAL_STATE, action) {
    console.log("reducers---", action)
    switch (action.type) {
        case CHANGE_TEXT:
            return Object.assign({}, {
                value: action.text
            });

        default:
            return state;
    }
};